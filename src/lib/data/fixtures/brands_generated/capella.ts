import type { BrandDataset } from "../../types";

export const brand_capellaDataset: BrandDataset = {
  "brand": {
    "id": "brand-capella",
    "slug": "capella",
    "name": "Capella",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Capella",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-capella-epa",
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
      "id": "series-capella-cppb-series",
      "slug": "capella-cppb-series",
      "name": "CPPB Series",
      "brandId": "brand-capella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CPPB Series de Capella",
      "imageUrl": "/images/series/capella-capella-cppb-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-energia-b",
      "slug": "capella-energia-b",
      "name": "Energia B",
      "brandId": "brand-capella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Energia B de Capella",
      "imageUrl": "/images/series/capella-capella-energia-b.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-cpm-series",
      "slug": "capella-cpm-series",
      "name": "CPM Series",
      "brandId": "brand-capella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CPM Series de Capella",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-sicb-series",
      "slug": "capella-sicb-series",
      "name": "SICB Series",
      "brandId": "brand-capella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SICB Series de Capella",
      "imageUrl": "/images/series/capella-capella-sicb-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-cpib-series",
      "slug": "capella-cpib-series",
      "name": "CPIB Series",
      "brandId": "brand-capella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CPIB Series de Capella",
      "imageUrl": "/images/series/capella-capella-cpib-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-sfcb-series",
      "slug": "capella-sfcb-series",
      "name": "SFCB Series",
      "brandId": "brand-capella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SFCB Series de Capella",
      "imageUrl": "/images/series/capella-capella-sfcb-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-cahb-series",
      "slug": "capella-cahb-series",
      "name": "CAHB Series",
      "brandId": "brand-capella",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CAHB Series de Capella",
      "imageUrl": "/images/series/capella-capella-cahb-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-capella-ccb-series",
      "slug": "capella-ccb-series",
      "name": "CCB Series",
      "brandId": "brand-capella",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CCB Series de Capella",
      "imageUrl": "/images/series/capella-capella-ccb-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-capella-cppb-h09a-o",
      "slug": "capella-cppb-h09a-o",
      "name": "Capella CPPB-H09A-O",
      "seriesId": "series-capella-cppb-series",
      "brandId": "brand-capella",
      "modelNumber": "CPPB-H09A-O",
      "normalizedModelNumber": "cppb-h09a-o",
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
      "id": "model-capella-cppb-h12a-o",
      "slug": "capella-cppb-h12a-o",
      "name": "Capella CPPB-H12A-O",
      "seriesId": "series-capella-cppb-series",
      "brandId": "brand-capella",
      "modelNumber": "CPPB-H12A-O",
      "normalizedModelNumber": "cppb-h12a-o",
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
      "id": "model-capella-cpeb-h09a-o",
      "slug": "capella-cpeb-h09a-o",
      "name": "Capella CPEB-H09A-O",
      "seriesId": "series-capella-energia-b",
      "brandId": "brand-capella",
      "modelNumber": "CPEB-H09A-O",
      "normalizedModelNumber": "cpeb-h09a-o",
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
      "id": "model-capella-cpm2b1v-h18a-o",
      "slug": "capella-cpm2b1v-h18a-o",
      "name": "Capella CPM2B1V-H18A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM2B1V-H18A-O",
      "normalizedModelNumber": "cpm2b1v-h18a-o",
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
      "id": "model-capella-cpm2b1-h18a-o",
      "slug": "capella-cpm2b1-h18a-o",
      "name": "Capella CPM2B1-H18A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM2B1-H18A-O",
      "normalizedModelNumber": "cpm2b1-h18a-o",
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
      "id": "model-capella-cpeb-h12a-o",
      "slug": "capella-cpeb-h12a-o",
      "name": "Capella CPEB-H12A-O",
      "seriesId": "series-capella-energia-b",
      "brandId": "brand-capella",
      "modelNumber": "CPEB-H12A-O",
      "normalizedModelNumber": "cpeb-h12a-o",
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
      "id": "model-capella-cpm3b1v-h27a-o",
      "slug": "capella-cpm3b1v-h27a-o",
      "name": "Capella CPM3B1V-H27A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM3B1V-H27A-O",
      "normalizedModelNumber": "cpm3b1v-h27a-o",
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
      "id": "model-capella-cpm5b1-h48a-o",
      "slug": "capella-cpm5b1-h48a-o",
      "name": "Capella CPM5B1-H48A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM5B1-H48A-O",
      "normalizedModelNumber": "cpm5b1-h48a-o",
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
      "id": "model-capella-cpm4b1v-h36a-o",
      "slug": "capella-cpm4b1v-h36a-o",
      "name": "Capella CPM4B1V-H36A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM4B1V-H36A-O",
      "normalizedModelNumber": "cpm4b1v-h36a-o",
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
      "id": "model-capella-cpm4b1-h36a-o",
      "slug": "capella-cpm4b1-h36a-o",
      "name": "Capella CPM4B1-H36A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM4B1-H36A-O",
      "normalizedModelNumber": "cpm4b1-h36a-o",
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
      "id": "model-capella-cpm3b1-h27a-o",
      "slug": "capella-cpm3b1-h27a-o",
      "name": "Capella CPM3B1-H27A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM3B1-H27A-O",
      "normalizedModelNumber": "cpm3b1-h27a-o",
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
      "id": "model-capella-cpm5b1v-h48a-o",
      "slug": "capella-cpm5b1v-h48a-o",
      "name": "Capella CPM5B1V-H48A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM5B1V-H48A-O",
      "normalizedModelNumber": "cpm5b1v-h48a-o",
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
      "id": "model-capella-cpeb-h24a-o",
      "slug": "capella-cpeb-h24a-o",
      "name": "Capella CPEB-H24A-O",
      "seriesId": "series-capella-energia-b",
      "brandId": "brand-capella",
      "modelNumber": "CPEB-H24A-O",
      "normalizedModelNumber": "cpeb-h24a-o",
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
      "id": "model-capella-cpm5b1-h55a-o",
      "slug": "capella-cpm5b1-h55a-o",
      "name": "Capella CPM5B1-H55A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM5B1-H55A-O",
      "normalizedModelNumber": "cpm5b1-h55a-o",
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
      "id": "model-capella-cpm5b1v-h55a-o",
      "slug": "capella-cpm5b1v-h55a-o",
      "name": "Capella CPM5B1V-H55A-O",
      "seriesId": "series-capella-cpm-series",
      "brandId": "brand-capella",
      "modelNumber": "CPM5B1V-H55A-O",
      "normalizedModelNumber": "cpm5b1v-h55a-o",
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
      "id": "model-capella-cpib-h09a-o",
      "slug": "capella-cpib-h09a-o",
      "name": "Capella CPIB-H09A-O",
      "seriesId": "series-capella-cpib-series",
      "brandId": "brand-capella",
      "modelNumber": "CPIB-H09A-O",
      "normalizedModelNumber": "cpib-h09a-o",
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
      "id": "model-capella-cppb-h18a-o",
      "slug": "capella-cppb-h18a-o",
      "name": "Capella CPPB-H18A-O",
      "seriesId": "series-capella-cppb-series",
      "brandId": "brand-capella",
      "modelNumber": "CPPB-H18A-O",
      "normalizedModelNumber": "cppb-h18a-o",
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
      "id": "model-capella-cpeb-h18a-o",
      "slug": "capella-cpeb-h18a-o",
      "name": "Capella CPEB-H18A-O",
      "seriesId": "series-capella-energia-b",
      "brandId": "brand-capella",
      "modelNumber": "CPEB-H18A-O",
      "normalizedModelNumber": "cpeb-h18a-o",
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
      "id": "model-capella-cppb-h24a-o",
      "slug": "capella-cppb-h24a-o",
      "name": "Capella CPPB-H24A-O",
      "seriesId": "series-capella-cppb-series",
      "brandId": "brand-capella",
      "modelNumber": "CPPB-H24A-O",
      "normalizedModelNumber": "cppb-h24a-o",
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
      "id": "model-capella-cpib-h18a-o",
      "slug": "capella-cpib-h18a-o",
      "name": "Capella CPIB-H18A-O",
      "seriesId": "series-capella-cpib-series",
      "brandId": "brand-capella",
      "modelNumber": "CPIB-H18A-O",
      "normalizedModelNumber": "cpib-h18a-o",
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
      "id": "model-capella-cpib-h24a-o",
      "slug": "capella-cpib-h24a-o",
      "name": "Capella CPIB-H24A-O",
      "seriesId": "series-capella-cpib-series",
      "brandId": "brand-capella",
      "modelNumber": "CPIB-H24A-O",
      "normalizedModelNumber": "cpib-h24a-o",
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
      "id": "model-capella-ccb1-h24a-o",
      "slug": "capella-ccb1-h24a-o",
      "name": "Capella CCB1-H24A-O",
      "seriesId": "series-capella-cahb-series",
      "brandId": "brand-capella",
      "modelNumber": "CCB1-H24A-O",
      "normalizedModelNumber": "ccb1-h24a-o",
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
      "id": "model-capella-ccb1-h36a-o",
      "slug": "capella-ccb1-h36a-o",
      "name": "Capella CCB1-H36A-O",
      "seriesId": "series-capella-cahb-series",
      "brandId": "brand-capella",
      "modelNumber": "CCB1-H36A-O",
      "normalizedModelNumber": "ccb1-h36a-o",
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
      "id": "model-capella-ccb1-h30a-o",
      "slug": "capella-ccb1-h30a-o",
      "name": "Capella CCB1-H30A-O",
      "seriesId": "series-capella-cahb-series",
      "brandId": "brand-capella",
      "modelNumber": "CCB1-H30A-O",
      "normalizedModelNumber": "ccb1-h30a-o",
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
      "id": "model-capella-ccb1-h48a-o",
      "slug": "capella-ccb1-h48a-o",
      "name": "Capella CCB1-H48A-O",
      "seriesId": "series-capella-cahb-series",
      "brandId": "brand-capella",
      "modelNumber": "CCB1-H48A-O",
      "normalizedModelNumber": "ccb1-h48a-o",
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
      "id": "model-capella-ccb1-h60a-o",
      "slug": "capella-ccb1-h60a-o",
      "name": "Capella CCB1-H60A-O",
      "seriesId": "series-capella-cahb-series",
      "brandId": "brand-capella",
      "modelNumber": "CCB1-H60A-O",
      "normalizedModelNumber": "ccb1-h60a-o",
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
      "id": "ou-capella-cppb-h09a-o",
      "modelNumber": "CPPB-H09A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cppb-h12a-o",
      "modelNumber": "CPPB-H12A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpeb-h09a-o",
      "modelNumber": "CPEB-H09A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm2b1v-h18a-o",
      "modelNumber": "CPM2B1V-H18A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm2b1-h18a-o",
      "modelNumber": "CPM2B1-H18A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpeb-h12a-o",
      "modelNumber": "CPEB-H12A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm3b1v-h27a-o",
      "modelNumber": "CPM3B1V-H27A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm5b1-h48a-o",
      "modelNumber": "CPM5B1-H48A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm4b1v-h36a-o",
      "modelNumber": "CPM4B1V-H36A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm4b1-h36a-o",
      "modelNumber": "CPM4B1-H36A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm3b1-h27a-o",
      "modelNumber": "CPM3B1-H27A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm5b1v-h48a-o",
      "modelNumber": "CPM5B1V-H48A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpeb-h24a-o",
      "modelNumber": "CPEB-H24A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm5b1-h55a-o",
      "modelNumber": "CPM5B1-H55A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpm5b1v-h55a-o",
      "modelNumber": "CPM5B1V-H55A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpib-h09a-o",
      "modelNumber": "CPIB-H09A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cppb-h18a-o",
      "modelNumber": "CPPB-H18A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpeb-h18a-o",
      "modelNumber": "CPEB-H18A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cppb-h24a-o",
      "modelNumber": "CPPB-H24A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpib-h18a-o",
      "modelNumber": "CPIB-H18A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-cpib-h24a-o",
      "modelNumber": "CPIB-H24A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-ccb1-h24a-o",
      "modelNumber": "CCB1-H24A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-ccb1-h36a-o",
      "modelNumber": "CCB1-H36A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-ccb1-h30a-o",
      "modelNumber": "CCB1-H30A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-ccb1-h48a-o",
      "modelNumber": "CCB1-H48A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-capella-ccb1-h60a-o",
      "modelNumber": "CCB1-H60A-O",
      "brandId": "brand-capella",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cppb-h09a-i",
      "modelNumber": "CPPB-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cppb-h12a-i",
      "modelNumber": "CPPB-H12A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h09b-i",
      "modelNumber": "CPEB-H09B-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h09a-i",
      "modelNumber": "CPEB-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42315",
      "modelNumber": "IU-42315",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42314",
      "modelNumber": "IU-42314",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h12b-i",
      "modelNumber": "CPEB-H12B-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h12a-i",
      "modelNumber": "CPEB-H12A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42317",
      "modelNumber": "IU-42317",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42320",
      "modelNumber": "IU-42320",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42319",
      "modelNumber": "IU-42319",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42318",
      "modelNumber": "IU-42318",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42316",
      "modelNumber": "IU-42316",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42322",
      "modelNumber": "IU-42322",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cicb1-h09a-i",
      "modelNumber": "CICB1-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h09a-i",
      "modelNumber": "SICB1-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h24b-i",
      "modelNumber": "CPEB-H24B-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h24a-i",
      "modelNumber": "CPEB-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cicb1-h12a-i",
      "modelNumber": "CICB1-H12A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h12a-i",
      "modelNumber": "SICB1-H12A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42321",
      "modelNumber": "IU-42321",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42323",
      "modelNumber": "IU-42323",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpib-h09a-i",
      "modelNumber": "CPIB-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cppb-h18a-i",
      "modelNumber": "CPPB-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h18a-i",
      "modelNumber": "CPEB-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cppb-h24a-i",
      "modelNumber": "CPPB-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpeb-h18b-i",
      "modelNumber": "CPEB-H18B-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h24a-i",
      "modelNumber": "SICB1-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cicb1-h24a-i",
      "modelNumber": "CICB1-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h09a-i",
      "modelNumber": "SFCB1-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cfcb1-h09a-i",
      "modelNumber": "CFCB1-H09A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpib-h18a-i",
      "modelNumber": "CPIB-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h12a-i",
      "modelNumber": "SFCB1-H12A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cicb1-h18a-i",
      "modelNumber": "CICB1-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cfcb1-h12a-i",
      "modelNumber": "CFCB1-H12A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sicb1-h18a-i",
      "modelNumber": "SICB1-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cfcb1-h24a-i",
      "modelNumber": "CFCB1-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h24a-i",
      "modelNumber": "SFCB1-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cpib-h24a-i",
      "modelNumber": "CPIB-H24A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cfcb1-h18a-i",
      "modelNumber": "CFCB1-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-sfcb1-h18a-i",
      "modelNumber": "SFCB1-H18A-I",
      "brandId": "brand-capella",
      "type": "wall-single"
    },
    {
      "id": "iu-cahb1-h24a-i",
      "modelNumber": "CAHB1-H24A-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cahb1-h36a-i",
      "modelNumber": "CAHB1-H36A-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cahb1-h30a-i",
      "modelNumber": "CAHB1-H30A-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cacb1-h24a1418-i",
      "modelNumber": "CACB1-H24A1418-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cahb1-h48a-i",
      "modelNumber": "CAHB1-H48A-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cacb1-h24a1718-i",
      "modelNumber": "CACB1-H24A1718-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cacb1-h36a2124-i",
      "modelNumber": "CACB1-H36A2124-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cahb1-h60a-i",
      "modelNumber": "CAHB1-H60A-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cacb1-h36a1724-i",
      "modelNumber": "CACB1-H36A1724-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cmcb1-h60a2128-i",
      "modelNumber": "CMCB1-H60A2128-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cacb1-h36a1424-i",
      "modelNumber": "CACB1-H36A1424-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    },
    {
      "id": "iu-cacb1-h60a2428-i",
      "modelNumber": "CACB1-H60A2428-I",
      "brandId": "brand-capella",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-capella-cppb-h09a-o-cppb-h09a-i",
      "slug": "capella-cppb-h09a-o-cppb-h09a-i",
      "modelId": "model-capella-cppb-h09a-o",
      "outdoorUnitId": "ou-capella-cppb-h09a-o",
      "indoorUnitId": "iu-cppb-h09a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h12a-o-cppb-h12a-i",
      "slug": "capella-cppb-h12a-o-cppb-h12a-i",
      "modelId": "model-capella-cppb-h12a-o",
      "outdoorUnitId": "ou-capella-cppb-h12a-o",
      "indoorUnitId": "iu-cppb-h12a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h09a-o-cpeb-h09b-i",
      "slug": "capella-cpeb-h09a-o-cpeb-h09b-i",
      "modelId": "model-capella-cpeb-h09a-o",
      "outdoorUnitId": "ou-capella-cpeb-h09a-o",
      "indoorUnitId": "iu-cpeb-h09b-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h09a-o-cpeb-h09a-i",
      "slug": "capella-cpeb-h09a-o-cpeb-h09a-i",
      "modelId": "model-capella-cpeb-h09a-o",
      "outdoorUnitId": "ou-capella-cpeb-h09a-o",
      "indoorUnitId": "iu-cpeb-h09a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm2b1v-h18a-o-iu-42315",
      "slug": "capella-cpm2b1v-h18a-o-iu-42315",
      "modelId": "model-capella-cpm2b1v-h18a-o",
      "outdoorUnitId": "ou-capella-cpm2b1v-h18a-o",
      "indoorUnitId": "iu-iu-42315",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm2b1-h18a-o-iu-42314",
      "slug": "capella-cpm2b1-h18a-o-iu-42314",
      "modelId": "model-capella-cpm2b1-h18a-o",
      "outdoorUnitId": "ou-capella-cpm2b1-h18a-o",
      "indoorUnitId": "iu-iu-42314",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h12a-o-cpeb-h12b-i",
      "slug": "capella-cpeb-h12a-o-cpeb-h12b-i",
      "modelId": "model-capella-cpeb-h12a-o",
      "outdoorUnitId": "ou-capella-cpeb-h12a-o",
      "indoorUnitId": "iu-cpeb-h12b-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h12a-o-cpeb-h12a-i",
      "slug": "capella-cpeb-h12a-o-cpeb-h12a-i",
      "modelId": "model-capella-cpeb-h12a-o",
      "outdoorUnitId": "ou-capella-cpeb-h12a-o",
      "indoorUnitId": "iu-cpeb-h12a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm3b1v-h27a-o-iu-42317",
      "slug": "capella-cpm3b1v-h27a-o-iu-42317",
      "modelId": "model-capella-cpm3b1v-h27a-o",
      "outdoorUnitId": "ou-capella-cpm3b1v-h27a-o",
      "indoorUnitId": "iu-iu-42317",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm5b1-h48a-o-iu-42320",
      "slug": "capella-cpm5b1-h48a-o-iu-42320",
      "modelId": "model-capella-cpm5b1-h48a-o",
      "outdoorUnitId": "ou-capella-cpm5b1-h48a-o",
      "indoorUnitId": "iu-iu-42320",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm4b1v-h36a-o-iu-42319",
      "slug": "capella-cpm4b1v-h36a-o-iu-42319",
      "modelId": "model-capella-cpm4b1v-h36a-o",
      "outdoorUnitId": "ou-capella-cpm4b1v-h36a-o",
      "indoorUnitId": "iu-iu-42319",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm4b1-h36a-o-iu-42318",
      "slug": "capella-cpm4b1-h36a-o-iu-42318",
      "modelId": "model-capella-cpm4b1-h36a-o",
      "outdoorUnitId": "ou-capella-cpm4b1-h36a-o",
      "indoorUnitId": "iu-iu-42318",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm3b1-h27a-o-iu-42316",
      "slug": "capella-cpm3b1-h27a-o-iu-42316",
      "modelId": "model-capella-cpm3b1-h27a-o",
      "outdoorUnitId": "ou-capella-cpm3b1-h27a-o",
      "indoorUnitId": "iu-iu-42316",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm5b1v-h48a-o-iu-42322",
      "slug": "capella-cpm5b1v-h48a-o-iu-42322",
      "modelId": "model-capella-cpm5b1v-h48a-o",
      "outdoorUnitId": "ou-capella-cpm5b1v-h48a-o",
      "indoorUnitId": "iu-iu-42322",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h09a-o-cicb1-h09a-i",
      "slug": "capella-cppb-h09a-o-cicb1-h09a-i",
      "modelId": "model-capella-cppb-h09a-o",
      "outdoorUnitId": "ou-capella-cppb-h09a-o",
      "indoorUnitId": "iu-cicb1-h09a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h09a-o-sicb1-h09a-i",
      "slug": "capella-cppb-h09a-o-sicb1-h09a-i",
      "modelId": "model-capella-cppb-h09a-o",
      "outdoorUnitId": "ou-capella-cppb-h09a-o",
      "indoorUnitId": "iu-sicb1-h09a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h24a-o-cpeb-h24b-i",
      "slug": "capella-cpeb-h24a-o-cpeb-h24b-i",
      "modelId": "model-capella-cpeb-h24a-o",
      "outdoorUnitId": "ou-capella-cpeb-h24a-o",
      "indoorUnitId": "iu-cpeb-h24b-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h24a-o-cpeb-h24a-i",
      "slug": "capella-cpeb-h24a-o-cpeb-h24a-i",
      "modelId": "model-capella-cpeb-h24a-o",
      "outdoorUnitId": "ou-capella-cpeb-h24a-o",
      "indoorUnitId": "iu-cpeb-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h12a-o-cicb1-h12a-i",
      "slug": "capella-cppb-h12a-o-cicb1-h12a-i",
      "modelId": "model-capella-cppb-h12a-o",
      "outdoorUnitId": "ou-capella-cppb-h12a-o",
      "indoorUnitId": "iu-cicb1-h12a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h12a-o-sicb1-h12a-i",
      "slug": "capella-cppb-h12a-o-sicb1-h12a-i",
      "modelId": "model-capella-cppb-h12a-o",
      "outdoorUnitId": "ou-capella-cppb-h12a-o",
      "indoorUnitId": "iu-sicb1-h12a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm5b1-h55a-o-iu-42321",
      "slug": "capella-cpm5b1-h55a-o-iu-42321",
      "modelId": "model-capella-cpm5b1-h55a-o",
      "outdoorUnitId": "ou-capella-cpm5b1-h55a-o",
      "indoorUnitId": "iu-iu-42321",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpm5b1v-h55a-o-iu-42323",
      "slug": "capella-cpm5b1v-h55a-o-iu-42323",
      "modelId": "model-capella-cpm5b1v-h55a-o",
      "outdoorUnitId": "ou-capella-cpm5b1v-h55a-o",
      "indoorUnitId": "iu-iu-42323",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpib-h09a-o-cpib-h09a-i",
      "slug": "capella-cpib-h09a-o-cpib-h09a-i",
      "modelId": "model-capella-cpib-h09a-o",
      "outdoorUnitId": "ou-capella-cpib-h09a-o",
      "indoorUnitId": "iu-cpib-h09a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h18a-o-cppb-h18a-i",
      "slug": "capella-cppb-h18a-o-cppb-h18a-i",
      "modelId": "model-capella-cppb-h18a-o",
      "outdoorUnitId": "ou-capella-cppb-h18a-o",
      "indoorUnitId": "iu-cppb-h18a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h18a-o-cpeb-h18a-i",
      "slug": "capella-cpeb-h18a-o-cpeb-h18a-i",
      "modelId": "model-capella-cpeb-h18a-o",
      "outdoorUnitId": "ou-capella-cpeb-h18a-o",
      "indoorUnitId": "iu-cpeb-h18a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h24a-o-cppb-h24a-i",
      "slug": "capella-cppb-h24a-o-cppb-h24a-i",
      "modelId": "model-capella-cppb-h24a-o",
      "outdoorUnitId": "ou-capella-cppb-h24a-o",
      "indoorUnitId": "iu-cppb-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpeb-h18a-o-cpeb-h18b-i",
      "slug": "capella-cpeb-h18a-o-cpeb-h18b-i",
      "modelId": "model-capella-cpeb-h18a-o",
      "outdoorUnitId": "ou-capella-cpeb-h18a-o",
      "indoorUnitId": "iu-cpeb-h18b-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h24a-o-sicb1-h24a-i",
      "slug": "capella-cppb-h24a-o-sicb1-h24a-i",
      "modelId": "model-capella-cppb-h24a-o",
      "outdoorUnitId": "ou-capella-cppb-h24a-o",
      "indoorUnitId": "iu-sicb1-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h24a-o-cicb1-h24a-i",
      "slug": "capella-cppb-h24a-o-cicb1-h24a-i",
      "modelId": "model-capella-cppb-h24a-o",
      "outdoorUnitId": "ou-capella-cppb-h24a-o",
      "indoorUnitId": "iu-cicb1-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h09a-o-sfcb1-h09a-i",
      "slug": "capella-cppb-h09a-o-sfcb1-h09a-i",
      "modelId": "model-capella-cppb-h09a-o",
      "outdoorUnitId": "ou-capella-cppb-h09a-o",
      "indoorUnitId": "iu-sfcb1-h09a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h09a-o-cfcb1-h09a-i",
      "slug": "capella-cppb-h09a-o-cfcb1-h09a-i",
      "modelId": "model-capella-cppb-h09a-o",
      "outdoorUnitId": "ou-capella-cppb-h09a-o",
      "indoorUnitId": "iu-cfcb1-h09a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpib-h18a-o-cpib-h18a-i",
      "slug": "capella-cpib-h18a-o-cpib-h18a-i",
      "modelId": "model-capella-cpib-h18a-o",
      "outdoorUnitId": "ou-capella-cpib-h18a-o",
      "indoorUnitId": "iu-cpib-h18a-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h12a-o-sfcb1-h12a-i",
      "slug": "capella-cppb-h12a-o-sfcb1-h12a-i",
      "modelId": "model-capella-cppb-h12a-o",
      "outdoorUnitId": "ou-capella-cppb-h12a-o",
      "indoorUnitId": "iu-sfcb1-h12a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h18a-o-cicb1-h18a-i",
      "slug": "capella-cppb-h18a-o-cicb1-h18a-i",
      "modelId": "model-capella-cppb-h18a-o",
      "outdoorUnitId": "ou-capella-cppb-h18a-o",
      "indoorUnitId": "iu-cicb1-h18a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h12a-o-cfcb1-h12a-i",
      "slug": "capella-cppb-h12a-o-cfcb1-h12a-i",
      "modelId": "model-capella-cppb-h12a-o",
      "outdoorUnitId": "ou-capella-cppb-h12a-o",
      "indoorUnitId": "iu-cfcb1-h12a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h18a-o-sicb1-h18a-i",
      "slug": "capella-cppb-h18a-o-sicb1-h18a-i",
      "modelId": "model-capella-cppb-h18a-o",
      "outdoorUnitId": "ou-capella-cppb-h18a-o",
      "indoorUnitId": "iu-sicb1-h18a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h24a-o-cfcb1-h24a-i",
      "slug": "capella-cppb-h24a-o-cfcb1-h24a-i",
      "modelId": "model-capella-cppb-h24a-o",
      "outdoorUnitId": "ou-capella-cppb-h24a-o",
      "indoorUnitId": "iu-cfcb1-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h24a-o-sfcb1-h24a-i",
      "slug": "capella-cppb-h24a-o-sfcb1-h24a-i",
      "modelId": "model-capella-cppb-h24a-o",
      "outdoorUnitId": "ou-capella-cppb-h24a-o",
      "indoorUnitId": "iu-sfcb1-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cpib-h24a-o-cpib-h24a-i",
      "slug": "capella-cpib-h24a-o-cpib-h24a-i",
      "modelId": "model-capella-cpib-h24a-o",
      "outdoorUnitId": "ou-capella-cpib-h24a-o",
      "indoorUnitId": "iu-cpib-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h18a-o-cfcb1-h18a-i",
      "slug": "capella-cppb-h18a-o-cfcb1-h18a-i",
      "modelId": "model-capella-cppb-h18a-o",
      "outdoorUnitId": "ou-capella-cppb-h18a-o",
      "indoorUnitId": "iu-cfcb1-h18a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-cppb-h18a-o-sfcb1-h18a-i",
      "slug": "capella-cppb-h18a-o-sfcb1-h18a-i",
      "modelId": "model-capella-cppb-h18a-o",
      "outdoorUnitId": "ou-capella-cppb-h18a-o",
      "indoorUnitId": "iu-sfcb1-h18a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h24a-o-cahb1-h24a-i",
      "slug": "capella-ccb1-h24a-o-cahb1-h24a-i",
      "modelId": "model-capella-ccb1-h24a-o",
      "outdoorUnitId": "ou-capella-ccb1-h24a-o",
      "indoorUnitId": "iu-cahb1-h24a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h36a-o-cahb1-h36a-i",
      "slug": "capella-ccb1-h36a-o-cahb1-h36a-i",
      "modelId": "model-capella-ccb1-h36a-o",
      "outdoorUnitId": "ou-capella-ccb1-h36a-o",
      "indoorUnitId": "iu-cahb1-h36a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h30a-o-cahb1-h30a-i",
      "slug": "capella-ccb1-h30a-o-cahb1-h30a-i",
      "modelId": "model-capella-ccb1-h30a-o",
      "outdoorUnitId": "ou-capella-ccb1-h30a-o",
      "indoorUnitId": "iu-cahb1-h30a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h24a-o-cacb1-h24a1418-i",
      "slug": "capella-ccb1-h24a-o-cacb1-h24a1418-i",
      "modelId": "model-capella-ccb1-h24a-o",
      "outdoorUnitId": "ou-capella-ccb1-h24a-o",
      "indoorUnitId": "iu-cacb1-h24a1418-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h48a-o-cahb1-h48a-i",
      "slug": "capella-ccb1-h48a-o-cahb1-h48a-i",
      "modelId": "model-capella-ccb1-h48a-o",
      "outdoorUnitId": "ou-capella-ccb1-h48a-o",
      "indoorUnitId": "iu-cahb1-h48a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h24a-o-cacb1-h24a1718-i",
      "slug": "capella-ccb1-h24a-o-cacb1-h24a1718-i",
      "modelId": "model-capella-ccb1-h24a-o",
      "outdoorUnitId": "ou-capella-ccb1-h24a-o",
      "indoorUnitId": "iu-cacb1-h24a1718-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h30a-o-cacb1-h36a2124-i",
      "slug": "capella-ccb1-h30a-o-cacb1-h36a2124-i",
      "modelId": "model-capella-ccb1-h30a-o",
      "outdoorUnitId": "ou-capella-ccb1-h30a-o",
      "indoorUnitId": "iu-cacb1-h36a2124-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h60a-o-cahb1-h60a-i",
      "slug": "capella-ccb1-h60a-o-cahb1-h60a-i",
      "modelId": "model-capella-ccb1-h60a-o",
      "outdoorUnitId": "ou-capella-ccb1-h60a-o",
      "indoorUnitId": "iu-cahb1-h60a-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h30a-o-cacb1-h36a1724-i",
      "slug": "capella-ccb1-h30a-o-cacb1-h36a1724-i",
      "modelId": "model-capella-ccb1-h30a-o",
      "outdoorUnitId": "ou-capella-ccb1-h30a-o",
      "indoorUnitId": "iu-cacb1-h36a1724-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h60a-o-cmcb1-h60a2128-i",
      "slug": "capella-ccb1-h60a-o-cmcb1-h60a2128-i",
      "modelId": "model-capella-ccb1-h60a-o",
      "outdoorUnitId": "ou-capella-ccb1-h60a-o",
      "indoorUnitId": "iu-cmcb1-h60a2128-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h36a-o-cacb1-h36a1724-i",
      "slug": "capella-ccb1-h36a-o-cacb1-h36a1724-i",
      "modelId": "model-capella-ccb1-h36a-o",
      "outdoorUnitId": "ou-capella-ccb1-h36a-o",
      "indoorUnitId": "iu-cacb1-h36a1724-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h36a-o-cacb1-h36a2124-i",
      "slug": "capella-ccb1-h36a-o-cacb1-h36a2124-i",
      "modelId": "model-capella-ccb1-h36a-o",
      "outdoorUnitId": "ou-capella-ccb1-h36a-o",
      "indoorUnitId": "iu-cacb1-h36a2124-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h30a-o-cacb1-h36a1424-i",
      "slug": "capella-ccb1-h30a-o-cacb1-h36a1424-i",
      "modelId": "model-capella-ccb1-h30a-o",
      "outdoorUnitId": "ou-capella-ccb1-h30a-o",
      "indoorUnitId": "iu-cacb1-h36a1424-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h48a-o-cmcb1-h60a2128-i",
      "slug": "capella-ccb1-h48a-o-cmcb1-h60a2128-i",
      "modelId": "model-capella-ccb1-h48a-o",
      "outdoorUnitId": "ou-capella-ccb1-h48a-o",
      "indoorUnitId": "iu-cmcb1-h60a2128-i",
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
          "sourceId": "src-capella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-capella-ccb1-h60a-o-cacb1-h60a2428-i",
      "slug": "capella-ccb1-h60a-o-cacb1-h60a2428-i",
      "modelId": "model-capella-ccb1-h60a-o",
      "outdoorUnitId": "ou-capella-ccb1-h60a-o",
      "indoorUnitId": "iu-cacb1-h60a2428-i",
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
          "sourceId": "src-capella-epa",
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
