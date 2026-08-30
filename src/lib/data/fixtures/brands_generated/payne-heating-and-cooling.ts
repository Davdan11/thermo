import type { BrandDataset } from "../../types";

export const brand_payne_heating_and_coolingDataset: BrandDataset = {
  "brand": {
    "id": "brand-payne-heating-and-cooling",
    "slug": "payne-heating-and-cooling",
    "name": "PAYNE HEATING AND COOLING",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour PAYNE HEATING AND COOLING",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-payne-heating-and-cooling-epa",
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
      "id": "series-payne-heating-and-cooling-2-stage-18-seer-hp",
      "slug": "payne-heating-and-cooling-2-stage-18-seer-hp",
      "name": "2-STAGE 18 SEER HP",
      "brandId": "brand-payne-heating-and-cooling",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 18 SEER HP de PAYNE HEATING AND COOLING",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-payne-heating-and-cooling-crossover-heat-pump",
      "slug": "payne-heating-and-cooling-crossover-heat-pump",
      "name": "Crossover Heat Pump",
      "brandId": "brand-payne-heating-and-cooling",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Crossover Heat Pump de PAYNE HEATING AND COOLING",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-payne-heating-and-cooling-15-seer2-hp",
      "slug": "payne-heating-and-cooling-15-seer2-hp",
      "name": "15 SEER2 HP",
      "brandId": "brand-payne-heating-and-cooling",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 HP de PAYNE HEATING AND COOLING",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-payne-heating-and-cooling-ph8tan524aa",
      "slug": "payne-heating-and-cooling-ph8tan524aa",
      "name": "PAYNE HEATING AND COOLING PH8TAN524**AA*",
      "seriesId": "series-payne-heating-and-cooling-2-stage-18-seer-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH8TAN524**AA*",
      "normalizedModelNumber": "ph8tan524**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24600,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph8tan548aa",
      "slug": "payne-heating-and-cooling-ph8tan548aa",
      "name": "PAYNE HEATING AND COOLING PH8TAN548**AA*",
      "seriesId": "series-payne-heating-and-cooling-2-stage-18-seer-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH8TAN548**AA*",
      "normalizedModelNumber": "ph8tan548**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ24AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ24AA3+KSAIC0701230",
      "normalizedModelNumber": "37muhaq24aa3+ksaic0701230",
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
      "id": "model-payne-heating-and-cooling-ph8tan560aa",
      "slug": "payne-heating-and-cooling-ph8tan560aa",
      "name": "PAYNE HEATING AND COOLING PH8TAN560**AA*",
      "seriesId": "series-payne-heating-and-cooling-2-stage-18-seer-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH8TAN560**AA*",
      "normalizedModelNumber": "ph8tan560**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq24aa3tic2025-0016",
      "slug": "payne-heating-and-cooling-37muhaq24aa3tic2025-0016",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ24AA3+TIC2025-0016",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ24AA3+TIC2025-0016",
      "normalizedModelNumber": "37muhaq24aa3+tic2025-0016",
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
      "id": "model-payne-heating-and-cooling-37muhaq30aa3tic2025-0016",
      "slug": "payne-heating-and-cooling-37muhaq30aa3tic2025-0016",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ30AA3+TIC2025-0016",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ30AA3+TIC2025-0016",
      "normalizedModelNumber": "37muhaq30aa3+tic2025-0016",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 29800,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ30AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ30AA3+KSAIC0701230",
      "normalizedModelNumber": "37muhaq30aa3+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30600,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ36AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ36AA3+KSAIC0701230",
      "normalizedModelNumber": "37muhaq36aa3+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36200,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq24aa3",
      "slug": "payne-heating-and-cooling-37muhaq24aa3",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ24AA3",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ24AA3",
      "normalizedModelNumber": "37muhaq24aa3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph8tan536aa",
      "slug": "payne-heating-and-cooling-ph8tan536aa",
      "name": "PAYNE HEATING AND COOLING PH8TAN536**AA*",
      "seriesId": "series-payne-heating-and-cooling-2-stage-18-seer-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH8TAN536**AA*",
      "normalizedModelNumber": "ph8tan536**aa*",
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
      "id": "model-payne-heating-and-cooling-ph5san524aa",
      "slug": "payne-heating-and-cooling-ph5san524aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN524**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN524**AA*",
      "normalizedModelNumber": "ph5san524**aa*",
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
      "id": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ18AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ18AA3+KSAIC0701230",
      "normalizedModelNumber": "37muhaq18aa3+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17700,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq36aa3tic2025-0016",
      "slug": "payne-heating-and-cooling-37muhaq36aa3tic2025-0016",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ36AA3+TIC2025-0016",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ36AA3+TIC2025-0016",
      "normalizedModelNumber": "37muhaq36aa3+tic2025-0016",
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
      "id": "model-payne-heating-and-cooling-ph5san531aa",
      "slug": "payne-heating-and-cooling-ph5san531aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN531**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN531**AA*",
      "normalizedModelNumber": "ph5san531**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28200,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph5san519aa",
      "slug": "payne-heating-and-cooling-ph5san519aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN519**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN519**AA*",
      "normalizedModelNumber": "ph5san519**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18400,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph5san536aa",
      "slug": "payne-heating-and-cooling-ph5san536aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN536**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN536**AA*",
      "normalizedModelNumber": "ph5san536**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36800,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MURAQ24AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MURAQ24AA3+KSAIC0701230",
      "normalizedModelNumber": "37muraq24aa3+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 25000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq60aa3tic2025-0016",
      "slug": "payne-heating-and-cooling-37muhaq60aa3tic2025-0016",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ60AA3+TIC2025-0016",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ60AA3+TIC2025-0016",
      "normalizedModelNumber": "37muhaq60aa3+tic2025-0016",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ60AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ60AA3+KSAIC0701230",
      "normalizedModelNumber": "37muhaq60aa3+ksaic0701230",
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
      "id": "model-payne-heating-and-cooling-37muhaq18aa3tic2025-0016",
      "slug": "payne-heating-and-cooling-37muhaq18aa3tic2025-0016",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ18AA3+TIC2025-0016",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ18AA3+TIC2025-0016",
      "normalizedModelNumber": "37muhaq18aa3+tic2025-0016",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18300,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph5san518aa",
      "slug": "payne-heating-and-cooling-ph5san518aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN518**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN518**AA*",
      "normalizedModelNumber": "ph5san518**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18900,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muraq48aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muraq48aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MURAQ48AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MURAQ48AA3+KSAIC0701230",
      "normalizedModelNumber": "37muraq48aa3+ksaic0701230",
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
      "id": "model-payne-heating-and-cooling-37muhaq18aa3",
      "slug": "payne-heating-and-cooling-37muhaq18aa3",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ18AA3",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ18AA3",
      "normalizedModelNumber": "37muhaq18aa3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18400,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "slug": "payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "name": "PAYNE HEATING AND COOLING 37MUHAQ48AA3+KSAIC0701230",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MUHAQ48AA3+KSAIC0701230",
      "normalizedModelNumber": "37muhaq48aa3+ksaic0701230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-37muraq24aa3",
      "slug": "payne-heating-and-cooling-37muraq24aa3",
      "name": "PAYNE HEATING AND COOLING 37MURAQ24AA3",
      "seriesId": "series-payne-heating-and-cooling-crossover-heat-pump",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "37MURAQ24AA3",
      "normalizedModelNumber": "37muraq24aa3",
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
      "id": "model-payne-heating-and-cooling-ph5san542aa",
      "slug": "payne-heating-and-cooling-ph5san542aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN542**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN542**AA*",
      "normalizedModelNumber": "ph5san542**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph5san548aa",
      "slug": "payne-heating-and-cooling-ph5san548aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN548**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN548**AA*",
      "normalizedModelNumber": "ph5san548**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47500,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph5san530aa",
      "slug": "payne-heating-and-cooling-ph5san530aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN530**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN530**AA*",
      "normalizedModelNumber": "ph5san530**aa*",
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
      "id": "model-payne-heating-and-cooling-ph5san430aa",
      "slug": "payne-heating-and-cooling-ph5san430aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN430**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN430**AA*",
      "normalizedModelNumber": "ph5san430**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27800,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-payne-heating-and-cooling-ph5san560aa",
      "slug": "payne-heating-and-cooling-ph5san560aa",
      "name": "PAYNE HEATING AND COOLING PH5SAN560**AA*",
      "seriesId": "series-payne-heating-and-cooling-15-seer2-hp",
      "brandId": "brand-payne-heating-and-cooling",
      "modelNumber": "PH5SAN560**AA*",
      "normalizedModelNumber": "ph5san560**aa*",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-payne-heating-and-cooling-ph8tan524aa",
      "modelNumber": "PH8TAN524**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph8tan548aa",
      "modelNumber": "PH8TAN548**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "modelNumber": "37MUHAQ24AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph8tan560aa",
      "modelNumber": "PH8TAN560**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq24aa3tic2025-0016",
      "modelNumber": "37MUHAQ24AA3+TIC2025-0016",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq30aa3tic2025-0016",
      "modelNumber": "37MUHAQ30AA3+TIC2025-0016",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "modelNumber": "37MUHAQ30AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "modelNumber": "37MUHAQ36AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq24aa3",
      "modelNumber": "37MUHAQ24AA3",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph8tan536aa",
      "modelNumber": "PH8TAN536**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san524aa",
      "modelNumber": "PH5SAN524**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "modelNumber": "37MUHAQ18AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq36aa3tic2025-0016",
      "modelNumber": "37MUHAQ36AA3+TIC2025-0016",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san531aa",
      "modelNumber": "PH5SAN531**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san519aa",
      "modelNumber": "PH5SAN519**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san536aa",
      "modelNumber": "PH5SAN536**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "modelNumber": "37MURAQ24AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq60aa3tic2025-0016",
      "modelNumber": "37MUHAQ60AA3+TIC2025-0016",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "modelNumber": "37MUHAQ60AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq18aa3tic2025-0016",
      "modelNumber": "37MUHAQ18AA3+TIC2025-0016",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san518aa",
      "modelNumber": "PH5SAN518**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muraq48aa3ksaic0701230",
      "modelNumber": "37MURAQ48AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq18aa3",
      "modelNumber": "37MUHAQ18AA3",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "modelNumber": "37MUHAQ48AA3+KSAIC0701230",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-37muraq24aa3",
      "modelNumber": "37MURAQ24AA3",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san542aa",
      "modelNumber": "PH5SAN542**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san548aa",
      "modelNumber": "PH5SAN548**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san530aa",
      "modelNumber": "PH5SAN530**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san430aa",
      "modelNumber": "PH5SAN430**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-payne-heating-and-cooling-ph5san560aa",
      "modelNumber": "PH5SAN560**AA*",
      "brandId": "brand-payne-heating-and-cooling",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cvama3217xma",
      "modelNumber": "CVAMA3217XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3117xma",
      "modelNumber": "CVAVA3117XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3721xma",
      "modelNumber": "CVAVA3721XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3817xma",
      "modelNumber": "CVAVA3817XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnbd60l",
      "modelNumber": "PF5TNBD60L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama3117xma",
      "modelNumber": "CVAMA3117XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnxc36l",
      "modelNumber": "PF5TNXC36L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3621xma",
      "modelNumber": "CVAVA3621XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3721am",
      "modelNumber": "CAA**3721AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2517am",
      "modelNumber": "CAA**2517AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3617am",
      "modelNumber": "CAA**3617AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4921xma",
      "modelNumber": "CVAMA4921XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6021xma",
      "modelNumber": "CVAMA6021XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3717am",
      "modelNumber": "CAA**3717AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3017am",
      "modelNumber": "CAA**3017AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4924xma",
      "modelNumber": "CVAVA4924XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6121xma",
      "modelNumber": "CVAVA6121XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnxb24l",
      "modelNumber": "PF5TNXB24L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6124xma",
      "modelNumber": "CVAVA6124XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x24al",
      "modelNumber": "FMA5X24**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z30al",
      "modelNumber": "FM(C,U)5Z30**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z36al",
      "modelNumber": "FM(C,U)5Z36**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2414am",
      "modelNumber": "CAA**2414AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3014am",
      "modelNumber": "CAA**3014AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2417am",
      "modelNumber": "CAA**2417AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah3612am",
      "modelNumber": "CSAH*3612AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa4321am",
      "modelNumber": "CAA**4321AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnxc48l",
      "modelNumber": "PF5TNXC48L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6021xma",
      "modelNumber": "CVAVA6021XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4821xma",
      "modelNumber": "CVAMA4821XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z24al",
      "modelNumber": "FM(C,U)5Z24**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4821xma",
      "modelNumber": "CVAVA4821XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa4821am",
      "modelNumber": "CAA**4821AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa6124am",
      "modelNumber": "CAA**6124AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x30al",
      "modelNumber": "FMA5X30**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6124xmatdr",
      "modelNumber": "CVAVA6124XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x18al",
      "modelNumber": "FMA5X18**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa6024am",
      "modelNumber": "CAA**6024AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa6121am",
      "modelNumber": "CAA**6121AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah3012am",
      "modelNumber": "CSAH*3012AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x36al",
      "modelNumber": "FMA5X36**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa4221am",
      "modelNumber": "CAA**4221AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6121xmatdr",
      "modelNumber": "CVAVA6121XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6021xmatdr",
      "modelNumber": "CVAMA6021XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6124xmatdr",
      "modelNumber": "CVAMA6124XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6021xmatdr",
      "modelNumber": "CVAVA6021XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah2412am",
      "modelNumber": "CSAH*2412AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4921xmatdr",
      "modelNumber": "CVAMA4921XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6124xma",
      "modelNumber": "CVAMA6124XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5anc42l",
      "modelNumber": "FJ5AN*C42L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa1917am",
      "modelNumber": "CAA**1917AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnc42l",
      "modelNumber": "PF5MN*C42L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0048nava54801ck",
      "modelNumber": "FEVA0048**+NAVA54801CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnc48l",
      "modelNumber": "PF5MN*C48L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah4212am",
      "modelNumber": "CSAH*4212AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5anc48l",
      "modelNumber": "FJ5AN*C48L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0048nava54801ck",
      "modelNumber": "FEVB0048**+NAVA54801CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah4812am",
      "modelNumber": "CSAH*4812AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4824xmatdr",
      "modelNumber": "CVAVA4824XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6024xmatdr",
      "modelNumber": "CVAVA6024XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4924xmatdr",
      "modelNumber": "CVAVA4924XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah6012am",
      "modelNumber": "CSAH*6012AM*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6024xmatdr",
      "modelNumber": "CVAMA6024XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4821xmatdr",
      "modelNumber": "CVAVA4821XMA*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnb24l",
      "modelNumber": "PF5MN*B24L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5anb30l",
      "modelNumber": "FJ5AN*B30L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnb30l",
      "modelNumber": "PF5MN*B30L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5anb24l",
      "modelNumber": "FJ5AN*B24L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5anb36l",
      "modelNumber": "FJ5AN*B36L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnb36l",
      "modelNumber": "PF5MN*B36L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0036nava53601ck",
      "modelNumber": "FEVB0036**+NAVA53601CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0036nava53601ck",
      "modelNumber": "FEVA0036**+NAVA53601CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s36al",
      "modelNumber": "FM(C,U)5S36**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s30al",
      "modelNumber": "FM(C,U)5S30**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s18al",
      "modelNumber": "FM(C,U)5S18**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z18al",
      "modelNumber": "FM(C,U)5Z18**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s24al",
      "modelNumber": "FM(C,U)5S24**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2517amtdr",
      "modelNumber": "CAA**2517AM*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3721amtdr",
      "modelNumber": "CAA**3721AM*+TDR",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mna18l",
      "modelNumber": "PF5MN*A18L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l30al",
      "modelNumber": "FMA5L30**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5ana18l",
      "modelNumber": "FJ5AN*A18L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l18al",
      "modelNumber": "FMA5L18**AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4221xma",
      "modelNumber": "CVAVA4221XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4224xma",
      "modelNumber": "CVAVA4224XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cap3721al",
      "modelNumber": "CAP**3721AL*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4421xma",
      "modelNumber": "CVAMA4421XMA*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0060nava56001ck",
      "modelNumber": "FEVB0060**+NAVA56001CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnd60l",
      "modelNumber": "PF5MN*D60L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fj5and60l",
      "modelNumber": "FJ5AN*D60L*",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0060nava56001ck",
      "modelNumber": "FEVA0060**+NAVA56001CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0024nava53601ck",
      "modelNumber": "FEVB0024**+NAVA53601CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0024nava53601ck",
      "modelNumber": "FEVA0024**+NAVA53601CK",
      "brandId": "brand-payne-heating-and-cooling",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-cvama3217xma",
      "slug": "payne-heating-and-cooling-ph8tan524aa-cvama3217xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-cvama3217xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-cvava3117xma",
      "slug": "payne-heating-and-cooling-ph8tan524aa-cvava3117xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-cvava3117xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-cvava3721xma",
      "slug": "payne-heating-and-cooling-ph8tan524aa-cvava3721xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-cvava3721xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-cvava3817xma",
      "slug": "payne-heating-and-cooling-ph8tan524aa-cvava3817xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-cvava3817xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-ph8tan548aa-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-cvama3117xma",
      "slug": "payne-heating-and-cooling-ph8tan524aa-cvama3117xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-cvama3117xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-ph8tan524aa-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-pf5tnxc36l",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-cvava3621xma",
      "slug": "payne-heating-and-cooling-ph8tan524aa-cvava3621xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-cvava3621xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa3721am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa3721am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxc36l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa2517am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa2517am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa2517am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa2517am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa2517am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa2517am",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa3617am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa3617am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa3617am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3721am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3721am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama4921xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama4921xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama4921xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama6021xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama6021xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama6021xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa3717am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa3717am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa3717am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa3017am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa3017am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa3017am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava4924xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava4924xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava4924xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6121xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6121xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6121xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-ph8tan560aa-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6124xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6124xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6124xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-ph8tan524aa-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fma5x24al",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fma5x24al",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x24al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3617am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3617am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3617am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3tic2025-0016-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3tic2025-0016-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3tic2025-0016",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3tic2025-0016",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3717am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3717am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3717am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3017am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3017am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3017am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fmcu5z30al",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fmcu5z36al",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa2414am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa2414am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa2414am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa3014am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa3014am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa3014am",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa2417am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa2417am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa2417am",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-csah3612am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-csah3612am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-csah3612am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3tic2025-0016-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3tic2025-0016-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3tic2025-0016",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3tic2025-0016",
      "indoorUnitId": "iu-pf5tnxc36l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa4321am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa4321am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-caa4321am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5tnxc48l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5tnxc48l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxc48l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxc36l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-pf5tnxc48l",
      "slug": "payne-heating-and-cooling-ph8tan548aa-pf5tnxc48l",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-pf5tnxc48l",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3014am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa3014am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3014am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6021xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6021xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6021xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama4821xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama4821xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama4821xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa2417am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-caa2417am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa2417am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fmcu5z24al",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fmcu5z24al",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z24al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3",
      "indoorUnitId": "iu-pf5tnxb24l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3721am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3721am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava4821xma",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava4821xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava4821xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-ph8tan536aa-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa4821am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa4821am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-caa4821am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.9,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-caa6124am",
      "slug": "payne-heating-and-cooling-ph8tan560aa-caa6124am",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-caa6124am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fma5x30al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fma5x30al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6124xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6124xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6124xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fma5x18al",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fma5x18al",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x18al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-caa6024am",
      "slug": "payne-heating-and-cooling-ph8tan560aa-caa6024am",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-caa6024am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-caa6121am",
      "slug": "payne-heating-and-cooling-ph8tan560aa-caa6121am",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-caa6121am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-caa6124am",
      "slug": "payne-heating-and-cooling-ph8tan548aa-caa6124am",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-caa6124am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-csah3012am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-csah3012am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-csah3012am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa3721am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa3721am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fma5x36al",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fma5x36al",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fma5x36al",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fma5x36al",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fma5x30al",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fma5x30al",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa2414am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa2414am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa2414am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-csah3012am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-csah3012am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-csah3012am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa4221am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa4221am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-caa4221am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxc36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6121xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6121xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6121xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-caa6024am",
      "slug": "payne-heating-and-cooling-ph8tan548aa-caa6024am",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-caa6024am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-caa6121am",
      "slug": "payne-heating-and-cooling-ph8tan548aa-caa6121am",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-caa6121am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama6021xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama6021xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama6021xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama6124xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama6124xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama6124xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6021xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6021xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6021xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa4321am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa4321am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-caa4321am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa4221am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa4221am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-caa4221am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3tic2025-0016-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3tic2025-0016-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3tic2025-0016",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3tic2025-0016",
      "indoorUnitId": "iu-pf5tnxc36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-pf5tnxc48l",
      "slug": "payne-heating-and-cooling-ph8tan536aa-pf5tnxc48l",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-pf5tnxc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-csah3612am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-csah3612am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-csah3612am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-csah2412am",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-csah2412am",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-csah2412am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama4921xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama4921xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama4921xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fma5x24al",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fma5x24al",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-cvava6021xma",
      "slug": "payne-heating-and-cooling-ph8tan560aa-cvava6021xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-cvava6021xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-cvava6124xma",
      "slug": "payne-heating-and-cooling-ph8tan560aa-cvava6124xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-cvava6124xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-cvama4821xma",
      "slug": "payne-heating-and-cooling-ph8tan536aa-cvama4821xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-cvama4821xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-caa3721am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-caa3721am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fmcu5z30al",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-cvava6121xma",
      "slug": "payne-heating-and-cooling-ph8tan560aa-cvava6121xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-cvava6121xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-cvama6021xma",
      "slug": "payne-heating-and-cooling-ph8tan560aa-cvama6021xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-cvama6021xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan560aa-cvama6124xma",
      "slug": "payne-heating-and-cooling-ph8tan560aa-cvama6124xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan560aa",
      "indoorUnitId": "iu-cvama6124xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-caa4821am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-caa4821am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-caa4821am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-caa4321am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-caa4321am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-caa4321am",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fj5anc42l",
      "slug": "payne-heating-and-cooling-ph5san531aa-fj5anc42l",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fj5anc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fmcu5z30al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-cvama3117xma",
      "slug": "payne-heating-and-cooling-ph5san524aa-cvama3117xma",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-cvama3117xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-caa2517am",
      "slug": "payne-heating-and-cooling-ph5san519aa-caa2517am",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-caa2517am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-caa1917am",
      "slug": "payne-heating-and-cooling-ph5san519aa-caa1917am",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-caa1917am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-pf5mnc42l",
      "slug": "payne-heating-and-cooling-ph5san531aa-pf5mnc42l",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-pf5mnc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fma5x36al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fma5x36al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fma5x36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fma5x30al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fma5x30al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fma5x30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fmcu5z36al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fmcu5z30al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-feva0048nava54801ck",
      "slug": "payne-heating-and-cooling-ph5san536aa-feva0048nava54801ck",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-feva0048nava54801ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa2517am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa2517am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa2517am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5mnc42l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5mnc42l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5mnc48l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5mnc48l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnc48l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-fma5x24al",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-fma5x24al",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-fma5x24al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-fmcu5z36al",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-fmcu5z30al",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq60aa3tic2025-0016-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-37muhaq60aa3tic2025-0016-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-37muhaq60aa3tic2025-0016",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq60aa3tic2025-0016",
      "indoorUnitId": "iu-pf5tnbd60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq60aa3ksaic0701230-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-37muhaq60aa3ksaic0701230-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnbd60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3721am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3721am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3717am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3717am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3717am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxc36l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-csah3612am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-csah3612am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-csah3612am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-csah4212am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-csah4212am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-csah4212am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fj5anc48l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fj5anc48l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anc48l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fmcu5z36al",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fj5anc42l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fj5anc42l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fevb0048nava54801ck",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fevb0048nava54801ck",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-fevb0048nava54801ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fmcu5z36al",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fmcu5z30al",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-csah4212am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-csah4212am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-csah4212am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-csah2412am",
      "slug": "payne-heating-and-cooling-ph8tan524aa-csah2412am",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-csah2412am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-csah4812am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-csah4812am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-csah4812am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa3717am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa3717am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-caa3717am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa3617am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-caa3617am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-caa3617am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-caa3721am",
      "slug": "payne-heating-and-cooling-ph5san524aa-caa3721am",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-caa2517am",
      "slug": "payne-heating-and-cooling-ph5san524aa-caa2517am",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-caa2517am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava4824xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava4824xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava4824xmatdr",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-cvava3817xma",
      "slug": "payne-heating-and-cooling-ph5san524aa-cvava3817xma",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-cvava3817xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-cvava3721xma",
      "slug": "payne-heating-and-cooling-ph5san524aa-cvava3721xma",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-cvava3721xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-cvava3117xma",
      "slug": "payne-heating-and-cooling-ph5san524aa-cvava3117xma",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-cvava3117xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-cvama3217xma",
      "slug": "payne-heating-and-cooling-ph5san524aa-cvama3217xma",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-cvama3217xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fmcu5z30al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fmcu5z36al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava6024xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava6024xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava6024xmatdr",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava4924xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava4924xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava4924xmatdr",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-cvama4921xma",
      "slug": "payne-heating-and-cooling-ph8tan536aa-cvama4921xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-cvama4921xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-csah6012am",
      "slug": "payne-heating-and-cooling-ph8tan548aa-csah6012am",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-csah6012am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-csah4812am",
      "slug": "payne-heating-and-cooling-ph8tan548aa-csah4812am",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-csah4812am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-caa4821am",
      "slug": "payne-heating-and-cooling-ph8tan548aa-caa4821am",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-caa4821am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvama6024xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvama6024xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvama6024xmatdr",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan548aa-cvava4821xmatdr",
      "slug": "payne-heating-and-cooling-ph8tan548aa-cvava4821xmatdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan548aa",
      "indoorUnitId": "iu-cvava4821xmatdr",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3017am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3017am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-caa3017am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-cvava3817xma",
      "slug": "payne-heating-and-cooling-ph8tan536aa-cvava3817xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-cvava3817xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5mnb24l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5mnb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb24l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fj5anb30l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fj5anb30l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb30l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3717am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3717am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-caa3717am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3617am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-caa3617am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-caa3617am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5mnb30l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5mnb30l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb30l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3tic2025-0016-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muhaq18aa3tic2025-0016-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3tic2025-0016",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3tic2025-0016",
      "indoorUnitId": "iu-pf5tnxb24l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fj5anb24l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fj5anb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb24l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxb24l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fj5anb36l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-fj5anb36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5mnb36l",
      "slug": "payne-heating-and-cooling-37muhaq24aa3ksaic0701230-pf5mnb36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-cvava3721xma",
      "slug": "payne-heating-and-cooling-ph8tan536aa-cvava3721xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-cvava3721xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa2417am",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa2417am",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-caa2417am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-cvava4821xma",
      "slug": "payne-heating-and-cooling-ph8tan536aa-cvava4821xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-cvava4821xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fevb0036nava53601ck",
      "slug": "payne-heating-and-cooling-ph5san524aa-fevb0036nava53601ck",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-feva0036nava53601ck",
      "slug": "payne-heating-and-cooling-ph5san524aa-feva0036nava53601ck",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fj5anb36l",
      "slug": "payne-heating-and-cooling-ph5san524aa-fj5anb36l",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fj5anb36l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fmcu5z24al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fmcu5z24al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fmcu5s36al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fmcu5s36al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fmcu5s30al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fmcu5s30al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-pf5mnb36l",
      "slug": "payne-heating-and-cooling-ph5san524aa-pf5mnb36l",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-pf5mnb36l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fma5x24al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fma5x24al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fj5anb30l",
      "slug": "payne-heating-and-cooling-ph5san531aa-fj5anb30l",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fj5anb30l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fmcu5s30al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fmcu5s30al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-cvama3217xma",
      "slug": "payne-heating-and-cooling-ph5san518aa-cvama3217xma",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-cvama3217xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-caa3721am",
      "slug": "payne-heating-and-cooling-ph5san531aa-caa3721am",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-caa4321am",
      "slug": "payne-heating-and-cooling-ph5san531aa-caa4321am",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-caa4321am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-ph5san524aa-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fevb0036nava53601ck",
      "slug": "payne-heating-and-cooling-ph5san531aa-fevb0036nava53601ck",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-feva0036nava53601ck",
      "slug": "payne-heating-and-cooling-ph5san531aa-feva0036nava53601ck",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-ph5san519aa-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-pf5mnb24l",
      "slug": "payne-heating-and-cooling-ph5san519aa-pf5mnb24l",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-pf5mnb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fmcu5s36al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fmcu5s36al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-pf5mnb30l",
      "slug": "payne-heating-and-cooling-ph5san531aa-pf5mnb30l",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-pf5mnb30l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-fevb0048nava54801ck",
      "slug": "payne-heating-and-cooling-ph5san536aa-fevb0048nava54801ck",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-fevb0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-caa3717am",
      "slug": "payne-heating-and-cooling-ph5san524aa-caa3717am",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-caa3717am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fma5x24al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fma5x24al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fmcu5s18al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fmcu5s18al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fmcu5s18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fj5anb24l",
      "slug": "payne-heating-and-cooling-ph5san519aa-fj5anb24l",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fj5anb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fmcu5z18al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fmcu5z18al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fma5x18al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fma5x18al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fma5x18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fmcu5z24al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fmcu5z24al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fmcu5s24al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fmcu5s24al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fmcu5s24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fma5x24al",
      "slug": "payne-heating-and-cooling-ph5san518aa-fma5x24al",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq48aa3ksaic0701230-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-37muraq48aa3ksaic0701230-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-37muraq48aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq48aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-csah3012am",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-csah3012am",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-csah3012am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fj5anb30l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fj5anb30l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb30l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fj5anb36l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fj5anb36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fj5anc42l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-fj5anc42l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anc42l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5mnb30l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5mnb30l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb30l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5mnb36l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5mnb36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5mnc42l",
      "slug": "payne-heating-and-cooling-37muhaq30aa3ksaic0701230-pf5mnc42l",
      "modelId": "model-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq30aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnc42l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-csah3612am",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-csah3612am",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-csah3612am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fj5anb36l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-fj5anb36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa2517amtdr",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa2517amtdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa2517amtdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-caa3717am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-caa3717am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-caa3717am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan524aa-caa3721amtdr",
      "slug": "payne-heating-and-cooling-ph8tan524aa-caa3721amtdr",
      "modelId": "model-payne-heating-and-cooling-ph8tan524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan524aa",
      "indoorUnitId": "iu-caa3721amtdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-csah4212am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-csah4212am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-csah4212am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-caa4221am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-caa4221am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-caa4221am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muhaq18aa3-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5mnb36l",
      "slug": "payne-heating-and-cooling-37muhaq36aa3ksaic0701230-pf5mnb36l",
      "modelId": "model-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq36aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb36l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq48aa3ksaic0701230-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-37muhaq48aa3ksaic0701230-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3-pf5tnxb24l",
      "slug": "payne-heating-and-cooling-37muraq24aa3-pf5tnxb24l",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3014am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3014am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3014am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa2417am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa2417am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa2417am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3617am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3617am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3617am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3017am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa3017am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa3017am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-fmcu5z24al",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-fmcu5z24al",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq48aa3ksaic0701230-caa6124am",
      "slug": "payne-heating-and-cooling-37muhaq48aa3ksaic0701230-caa6124am",
      "modelId": "model-payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq48aa3ksaic0701230",
      "indoorUnitId": "iu-caa6124am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san542aa-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-ph5san542aa-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-ph5san542aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san542aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san548aa-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-ph5san548aa-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-ph5san548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san548aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-pf5mnc48l",
      "slug": "payne-heating-and-cooling-ph5san536aa-pf5mnc48l",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-pf5mnc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-pf5tnxc48l",
      "slug": "payne-heating-and-cooling-ph5san536aa-pf5tnxc48l",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-pf5tnxc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-fma5x36al",
      "slug": "payne-heating-and-cooling-ph5san536aa-fma5x36al",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-fj5anc48l",
      "slug": "payne-heating-and-cooling-ph5san536aa-fj5anc48l",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-fj5anc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa2517am",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa2517am",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-caa2517am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa1917am",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa1917am",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-caa1917am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fmcu5z18al",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fmcu5z18al",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fmcu5z24al",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fmcu5z24al",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa3017am",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa3017am",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-caa3017am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-pf5mna18l",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-pf5mna18l",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mna18l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-caa3617am",
      "slug": "payne-heating-and-cooling-ph5san524aa-caa3617am",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-caa3617am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san531aa-fma5l30al",
      "slug": "payne-heating-and-cooling-ph5san531aa-fma5l30al",
      "modelId": "model-payne-heating-and-cooling-ph5san531aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san531aa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-pf5mna18l",
      "slug": "payne-heating-and-cooling-ph5san519aa-pf5mna18l",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-pf5mna18l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fma5x18al",
      "slug": "payne-heating-and-cooling-ph5san518aa-fma5x18al",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fma5x18al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fmcu5z30al",
      "slug": "payne-heating-and-cooling-ph5san518aa-fmcu5z30al",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fmcu5z24al",
      "slug": "payne-heating-and-cooling-ph5san518aa-fmcu5z24al",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fmcu5s30al",
      "slug": "payne-heating-and-cooling-ph5san518aa-fmcu5s30al",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fmcu5z18al",
      "slug": "payne-heating-and-cooling-ph5san518aa-fmcu5z18al",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fj5ana18l",
      "slug": "payne-heating-and-cooling-ph5san519aa-fj5ana18l",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fj5ana18l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san519aa-fma5l18al",
      "slug": "payne-heating-and-cooling-ph5san519aa-fma5l18al",
      "modelId": "model-payne-heating-and-cooling-ph5san519aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san519aa",
      "indoorUnitId": "iu-fma5l18al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-fj5anb30l",
      "slug": "payne-heating-and-cooling-ph5san518aa-fj5anb30l",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-fj5anb30l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-pf5mnb30l",
      "slug": "payne-heating-and-cooling-ph5san518aa-pf5mnb30l",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-pf5mnb30l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-pf5mnb30l",
      "slug": "payne-heating-and-cooling-ph5san524aa-pf5mnb30l",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-pf5mnb30l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fma5l30al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fma5l30al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-pf5tnxc36l",
      "slug": "payne-heating-and-cooling-ph8tan536aa-pf5tnxc36l",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-pf5tnxc36l",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-cvava4221xma",
      "slug": "payne-heating-and-cooling-ph8tan536aa-cvava4221xma",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-cvava4221xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fmcu5s24al",
      "slug": "payne-heating-and-cooling-ph5san524aa-fmcu5s24al",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fmcu5s24al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san524aa-fj5anb30l",
      "slug": "payne-heating-and-cooling-ph5san524aa-fj5anb30l",
      "modelId": "model-payne-heating-and-cooling-ph5san524aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san524aa",
      "indoorUnitId": "iu-fj5anb30l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san530aa-fma5x36al",
      "slug": "payne-heating-and-cooling-ph5san530aa-fma5x36al",
      "modelId": "model-payne-heating-and-cooling-ph5san530aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san530aa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san530aa-pf5mnc42l",
      "slug": "payne-heating-and-cooling-ph5san530aa-pf5mnc42l",
      "modelId": "model-payne-heating-and-cooling-ph5san530aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san530aa",
      "indoorUnitId": "iu-pf5mnc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san530aa-fj5anc42l",
      "slug": "payne-heating-and-cooling-ph5san530aa-fj5anc42l",
      "modelId": "model-payne-heating-and-cooling-ph5san530aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san530aa",
      "indoorUnitId": "iu-fj5anc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san530aa-fma5x30al",
      "slug": "payne-heating-and-cooling-ph5san530aa-fma5x30al",
      "modelId": "model-payne-heating-and-cooling-ph5san530aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san530aa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san530aa-cvava4224xma",
      "slug": "payne-heating-and-cooling-ph5san530aa-cvava4224xma",
      "modelId": "model-payne-heating-and-cooling-ph5san530aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san530aa",
      "indoorUnitId": "iu-cvava4224xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san430aa-cap3721al",
      "slug": "payne-heating-and-cooling-ph5san430aa-cap3721al",
      "modelId": "model-payne-heating-and-cooling-ph5san430aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san430aa",
      "indoorUnitId": "iu-cap3721al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-caa1917am",
      "slug": "payne-heating-and-cooling-ph5san518aa-caa1917am",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-caa1917am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san518aa-caa2517am",
      "slug": "payne-heating-and-cooling-ph5san518aa-caa2517am",
      "modelId": "model-payne-heating-and-cooling-ph5san518aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san518aa",
      "indoorUnitId": "iu-caa2517am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-fj5anc42l",
      "slug": "payne-heating-and-cooling-ph5san536aa-fj5anc42l",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-fj5anc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-cvava4224xma",
      "slug": "payne-heating-and-cooling-ph5san536aa-cvava4224xma",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-cvava4224xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-cvama4421xma",
      "slug": "payne-heating-and-cooling-ph5san536aa-cvama4421xma",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-cvama4421xma",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-caa4821am",
      "slug": "payne-heating-and-cooling-ph5san536aa-caa4821am",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-caa4821am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-caa3721am",
      "slug": "payne-heating-and-cooling-ph5san536aa-caa3721am",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-caa4321am",
      "slug": "payne-heating-and-cooling-ph5san536aa-caa4321am",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-caa4321am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-pf5mnb30l",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-pf5mnb30l",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-pf5mnb30l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-fmcu5s36al",
      "slug": "payne-heating-and-cooling-ph5san536aa-fmcu5s36al",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san542aa-fevb0060nava56001ck",
      "slug": "payne-heating-and-cooling-ph5san542aa-fevb0060nava56001ck",
      "modelId": "model-payne-heating-and-cooling-ph5san542aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san542aa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-pf5mnc42l",
      "slug": "payne-heating-and-cooling-ph5san536aa-pf5mnc42l",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-pf5mnc42l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san542aa-pf5mnd60l",
      "slug": "payne-heating-and-cooling-ph5san542aa-pf5mnd60l",
      "modelId": "model-payne-heating-and-cooling-ph5san542aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san542aa",
      "indoorUnitId": "iu-pf5mnd60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san542aa-fj5and60l",
      "slug": "payne-heating-and-cooling-ph5san542aa-fj5and60l",
      "modelId": "model-payne-heating-and-cooling-ph5san542aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san542aa",
      "indoorUnitId": "iu-fj5and60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san548aa-feva0060nava56001ck",
      "slug": "payne-heating-and-cooling-ph5san548aa-feva0060nava56001ck",
      "modelId": "model-payne-heating-and-cooling-ph5san548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san548aa",
      "indoorUnitId": "iu-feva0060nava56001ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san548aa-fevb0060nava56001ck",
      "slug": "payne-heating-and-cooling-ph5san548aa-fevb0060nava56001ck",
      "modelId": "model-payne-heating-and-cooling-ph5san548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san548aa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san548aa-fj5and60l",
      "slug": "payne-heating-and-cooling-ph5san548aa-fj5and60l",
      "modelId": "model-payne-heating-and-cooling-ph5san548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san548aa",
      "indoorUnitId": "iu-fj5and60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san548aa-pf5mnd60l",
      "slug": "payne-heating-and-cooling-ph5san548aa-pf5mnd60l",
      "modelId": "model-payne-heating-and-cooling-ph5san548aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san548aa",
      "indoorUnitId": "iu-pf5mnd60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san536aa-fmcu5z36al",
      "slug": "payne-heating-and-cooling-ph5san536aa-fmcu5z36al",
      "modelId": "model-payne-heating-and-cooling-ph5san536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san536aa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-fj5anb30l",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-fj5anb30l",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-fj5anb30l",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-fevb0024nava53601ck",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-fevb0024nava53601ck",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-fevb0024nava53601ck",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-csah3612am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-csah3612am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-csah3612am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-csah3012am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-csah3012am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-csah3012am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa2414am",
      "slug": "payne-heating-and-cooling-37muraq24aa3ksaic0701230-caa2414am",
      "modelId": "model-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muraq24aa3ksaic0701230",
      "indoorUnitId": "iu-caa2414am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq60aa3ksaic0701230-caa6124am",
      "slug": "payne-heating-and-cooling-37muhaq60aa3ksaic0701230-caa6124am",
      "modelId": "model-payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq60aa3ksaic0701230",
      "indoorUnitId": "iu-caa6124am",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph5san560aa-pf5tnbd60l",
      "slug": "payne-heating-and-cooling-ph5san560aa-pf5tnbd60l",
      "modelId": "model-payne-heating-and-cooling-ph5san560aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph5san560aa",
      "indoorUnitId": "iu-pf5tnbd60l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-caa3617am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-caa3617am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-caa3617am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fj5ana18l",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fj5ana18l",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fj5ana18l",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-csah3612am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-csah3612am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-csah3612am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-ph8tan536aa-csah4812am",
      "slug": "payne-heating-and-cooling-ph8tan536aa-csah4812am",
      "modelId": "model-payne-heating-and-cooling-ph8tan536aa",
      "outdoorUnitId": "ou-payne-heating-and-cooling-ph8tan536aa",
      "indoorUnitId": "iu-csah4812am",
      "minHeatingTempC": -15,
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fevb0024nava53601ck",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-fevb0024nava53601ck",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-fevb0024nava53601ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-feva0024nava53601ck",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-feva0024nava53601ck",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-feva0024nava53601ck",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa3014am",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa3014am",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-caa3014am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa2414am",
      "slug": "payne-heating-and-cooling-37muhaq18aa3ksaic0701230-caa2414am",
      "modelId": "model-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "outdoorUnitId": "ou-payne-heating-and-cooling-37muhaq18aa3ksaic0701230",
      "indoorUnitId": "iu-caa2414am",
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
          "sourceId": "src-payne-heating-and-cooling-epa",
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
