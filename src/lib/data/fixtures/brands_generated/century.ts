import type { BrandDataset } from "../../types";

export const brand_centuryDataset: BrandDataset = {
  "brand": {
    "id": "brand-century",
    "slug": "century",
    "name": "Century",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Century",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-century-epa",
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
      "id": "series-century-a-zhp-series",
      "slug": "century-a-zhp-series",
      "name": "A-ZHP Series",
      "brandId": "brand-century",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-ZHP Series de Century",
      "imageUrl": "/images/series/century-century-a-zhp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-a-series",
      "slug": "century-a-series",
      "name": "A-series",
      "brandId": "brand-century",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-series de Century",
      "imageUrl": "/images/series/century-century-a-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-a-vmh-series",
      "slug": "century-a-vmh-series",
      "name": "A-VMH Series",
      "brandId": "brand-century",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-VMH Series de Century",
      "imageUrl": "/images/series/century-century-a-vmh-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-hsa19-series",
      "slug": "century-hsa19-series",
      "name": "HSA19 Series",
      "brandId": "brand-century",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HSA19 Series de Century",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-hrg18-series",
      "slug": "century-hrg18-series",
      "name": "HRG18 SERIES",
      "brandId": "brand-century",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HRG18 SERIES de Century",
      "imageUrl": "/images/series/century-century-hrg18-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-hrg15-series",
      "slug": "century-hrg15-series",
      "name": "HRG15 Series",
      "brandId": "brand-century",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HRG15 Series de Century",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-hsa14-series",
      "slug": "century-hsa14-series",
      "name": "HSA14 Series",
      "brandId": "brand-century",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HSA14 Series de Century",
      "imageUrl": "/images/series/century-century-hsa14-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-hrg17-series",
      "slug": "century-hrg17-series",
      "name": "HRG17 SERIES",
      "brandId": "brand-century",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HRG17 SERIES de Century",
      "imageUrl": "/images/series/century-century-hrg17-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-century-mcd-series",
      "slug": "century-mcd-series",
      "name": "MCD series",
      "brandId": "brand-century",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MCD series de Century",
      "imageUrl": "/images/series/century-century-mcd-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-century-a-zhp09sa-1",
      "slug": "century-a-zhp09sa-1",
      "name": "Century A-ZHP09SA-1",
      "seriesId": "series-century-a-zhp-series",
      "brandId": "brand-century",
      "modelNumber": "A-ZHP09SA-1",
      "normalizedModelNumber": "a-zhp09sa-1",
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
      "id": "model-century-a-vmh09sv-1",
      "slug": "century-a-vmh09sv-1",
      "name": "Century A-VMH09SV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH09SV-1",
      "normalizedModelNumber": "a-vmh09sv-1",
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
      "id": "model-century-a-vhp09sa-1",
      "slug": "century-a-vhp09sa-1",
      "name": "Century A-VHP09SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP09SA-1",
      "normalizedModelNumber": "a-vhp09sa-1",
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
      "id": "model-century-a-zhp15sa-1",
      "slug": "century-a-zhp15sa-1",
      "name": "Century A-ZHP15SA-1",
      "seriesId": "series-century-a-zhp-series",
      "brandId": "brand-century",
      "modelNumber": "A-ZHP15SA-1",
      "normalizedModelNumber": "a-zhp15sa-1",
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
      "id": "model-century-a-vmh06sv-1",
      "slug": "century-a-vmh06sv-1",
      "name": "Century A-VMH06SV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH06SV-1",
      "normalizedModelNumber": "a-vmh06sv-1",
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
      "id": "model-century-a-vmh12sv-1",
      "slug": "century-a-vmh12sv-1",
      "name": "Century A-VMH12SV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH12SV-1",
      "normalizedModelNumber": "a-vmh12sv-1",
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
      "id": "model-century-a-vhp06sa-1",
      "slug": "century-a-vhp06sa-1",
      "name": "Century A-VHP06SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP06SA-1",
      "normalizedModelNumber": "a-vhp06sa-1",
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
      "id": "model-century-a-vhp12sa-1",
      "slug": "century-a-vhp12sa-1",
      "name": "Century A-VHP12SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP12SA-1",
      "normalizedModelNumber": "a-vhp12sa-1",
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
      "id": "model-century-a-vhp183a-1",
      "slug": "century-a-vhp183a-1",
      "name": "Century A-VHP183A-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP183A-1",
      "normalizedModelNumber": "a-vhp183a-1",
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
      "id": "model-century-a-vhp284a-1",
      "slug": "century-a-vhp284a-1",
      "name": "Century A-VHP284A-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP284A-1",
      "normalizedModelNumber": "a-vhp284a-1",
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
      "id": "model-century-a-vhp486a-1",
      "slug": "century-a-vhp486a-1",
      "name": "Century A-VHP486A-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP486A-1",
      "normalizedModelNumber": "a-vhp486a-1",
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
      "id": "model-century-a-vhp365a-1",
      "slug": "century-a-vhp365a-1",
      "name": "Century A-VHP365A-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP365A-1",
      "normalizedModelNumber": "a-vhp365a-1",
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
      "id": "model-century-a-vmh28tv-1",
      "slug": "century-a-vmh28tv-1",
      "name": "Century A-VMH28TV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH28TV-1",
      "normalizedModelNumber": "a-vmh28tv-1",
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
      "id": "model-century-a-vmh36qv-1a",
      "slug": "century-a-vmh36qv-1a",
      "name": "Century A-VMH36QV-1A",
      "seriesId": "series-century-a-vmh-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH36QV-1A",
      "normalizedModelNumber": "a-vmh36qv-1a",
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
      "id": "model-century-a-vhp556a-1",
      "slug": "century-a-vhp556a-1",
      "name": "Century A-VHP556A-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP556A-1",
      "normalizedModelNumber": "a-vhp556a-1",
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
      "id": "model-century-a-vmh36qv-1",
      "slug": "century-a-vmh36qv-1",
      "name": "Century A-VMH36QV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH36QV-1",
      "normalizedModelNumber": "a-vmh36qv-1",
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
      "id": "model-century-a-vmh55pv-1",
      "slug": "century-a-vmh55pv-1",
      "name": "Century A-VMH55PV-1",
      "seriesId": "series-century-a-vmh-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH55PV-1",
      "normalizedModelNumber": "a-vmh55pv-1",
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
      "id": "model-century-a-vmh18dv-1",
      "slug": "century-a-vmh18dv-1",
      "name": "Century A-VMH18DV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH18DV-1",
      "normalizedModelNumber": "a-vmh18dv-1",
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
      "id": "model-century-a-vmh48pv-1",
      "slug": "century-a-vmh48pv-1",
      "name": "Century A-VMH48PV-1",
      "seriesId": "series-century-a-vmh-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH48PV-1",
      "normalizedModelNumber": "a-vmh48pv-1",
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
      "id": "model-century-a-vmh18sv-1",
      "slug": "century-a-vmh18sv-1",
      "name": "Century A-VMH18SV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH18SV-1",
      "normalizedModelNumber": "a-vmh18sv-1",
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
      "id": "model-century-a-vmh24sv-1",
      "slug": "century-a-vmh24sv-1",
      "name": "Century A-VMH24SV-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH24SV-1",
      "normalizedModelNumber": "a-vmh24sv-1",
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
      "id": "model-century-a-vhp18sa-1",
      "slug": "century-a-vhp18sa-1",
      "name": "Century A-VHP18SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP18SA-1",
      "normalizedModelNumber": "a-vhp18sa-1",
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
      "id": "model-century-a-vhp24sa-1",
      "slug": "century-a-vhp24sa-1",
      "name": "Century A-VHP24SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP24SA-1",
      "normalizedModelNumber": "a-vhp24sa-1",
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
      "id": "model-century-hsa1936v1-a",
      "slug": "century-hsa1936v1-a",
      "name": "Century HSA1936V1-**A",
      "seriesId": "series-century-hsa19-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1936V1-**A",
      "normalizedModelNumber": "hsa1936v1-**a",
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
      "id": "model-century-a-vmh30sg-1",
      "slug": "century-a-vmh30sg-1",
      "name": "Century A-VMH30SG-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH30SG-1",
      "normalizedModelNumber": "a-vmh30sg-1",
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
      "id": "model-century-a-vmh33sv-1",
      "slug": "century-a-vmh33sv-1",
      "name": "Century A-VMH33SV-1",
      "seriesId": "series-century-a-vmh-series",
      "brandId": "brand-century",
      "modelNumber": "A-VMH33SV-1",
      "normalizedModelNumber": "a-vmh33sv-1",
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
      "id": "model-century-a-vhp33sa-1",
      "slug": "century-a-vhp33sa-1",
      "name": "Century A-VHP33SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VHP33SA-1",
      "normalizedModelNumber": "a-vhp33sa-1",
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
      "id": "model-century-a-vxp18sa-1",
      "slug": "century-a-vxp18sa-1",
      "name": "Century A-VXP18SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VXP18SA-1",
      "normalizedModelNumber": "a-vxp18sa-1",
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
      "id": "model-century-hrg1836s1p",
      "slug": "century-hrg1836s1p",
      "name": "Century HRG1836S1P",
      "seriesId": "series-century-hrg18-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1836S1P",
      "normalizedModelNumber": "hrg1836s1p",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23800,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-century-a-svh09sb-1",
      "slug": "century-a-svh09sb-1",
      "name": "Century A-SVH09SB-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-SVH09SB-1",
      "normalizedModelNumber": "a-svh09sb-1",
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
      "id": "model-century-a-vxp24sa-1",
      "slug": "century-a-vxp24sa-1",
      "name": "Century A-VXP24SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VXP24SA-1",
      "normalizedModelNumber": "a-vxp24sa-1",
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
      "id": "model-century-hsa1960v1-a",
      "slug": "century-hsa1960v1-a",
      "name": "Century HSA1960V1-**A",
      "seriesId": "series-century-hsa19-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1960V1-**A",
      "normalizedModelNumber": "hsa1960v1-**a",
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
      "id": "model-century-a-vcd18sa-1",
      "slug": "century-a-vcd18sa-1",
      "name": "Century A-VCD18SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VCD18SA-1",
      "normalizedModelNumber": "a-vcd18sa-1",
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
      "id": "model-century-a-vxp30sa-1",
      "slug": "century-a-vxp30sa-1",
      "name": "Century A-VXP30SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VXP30SA-1",
      "normalizedModelNumber": "a-vxp30sa-1",
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
      "id": "model-century-a-vxp36sa-1",
      "slug": "century-a-vxp36sa-1",
      "name": "Century A-VXP36SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VXP36SA-1",
      "normalizedModelNumber": "a-vxp36sa-1",
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
      "id": "model-century-a-vcd24sa-1",
      "slug": "century-a-vcd24sa-1",
      "name": "Century A-VCD24SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VCD24SA-1",
      "normalizedModelNumber": "a-vcd24sa-1",
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
      "id": "model-century-hrg1518s1r-a",
      "slug": "century-hrg1518s1r-a",
      "name": "Century HRG1518S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1518S1R-**A",
      "normalizedModelNumber": "hrg1518s1r-**a",
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
      "id": "model-century-hrg18s1r-a",
      "slug": "century-hrg18s1r-a",
      "name": "Century HRG1**8S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1**8S1R-**A",
      "normalizedModelNumber": "hrg1**8s1r-**a",
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
      "id": "model-century-hrg1524s1r-a",
      "slug": "century-hrg1524s1r-a",
      "name": "Century HRG1524S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1524S1R-**A",
      "normalizedModelNumber": "hrg1524s1r-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23800,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-century-hrg1536s1r-a",
      "slug": "century-hrg1536s1r-a",
      "name": "Century HRG1536S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1536S1R-**A",
      "normalizedModelNumber": "hrg1536s1r-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35800,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-century-a-vxp48sa-1",
      "slug": "century-a-vxp48sa-1",
      "name": "Century A-VXP48SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VXP48SA-1",
      "normalizedModelNumber": "a-vxp48sa-1",
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
      "id": "model-century-a-vcd30sa-1",
      "slug": "century-a-vcd30sa-1",
      "name": "Century A-VCD30SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VCD30SA-1",
      "normalizedModelNumber": "a-vcd30sa-1",
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
      "id": "model-century-a-vcd36sa-1",
      "slug": "century-a-vcd36sa-1",
      "name": "Century A-VCD36SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VCD36SA-1",
      "normalizedModelNumber": "a-vcd36sa-1",
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
      "id": "model-century-hrg1530s1r-a",
      "slug": "century-hrg1530s1r-a",
      "name": "Century HRG1530S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1530S1R-**A",
      "normalizedModelNumber": "hrg1530s1r-**a",
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
      "id": "model-century-hsa1418s1-a",
      "slug": "century-hsa1418s1-a",
      "name": "Century HSA1418S1-**A",
      "seriesId": "series-century-hsa14-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1418S1-**A",
      "normalizedModelNumber": "hsa1418s1-**a",
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
      "id": "model-century-hsa1424s1-a",
      "slug": "century-hsa1424s1-a",
      "name": "Century HSA1424S1-**A",
      "seriesId": "series-century-hsa14-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1424S1-**A",
      "normalizedModelNumber": "hsa1424s1-**a",
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
      "id": "model-century-a-vxp60sa-1",
      "slug": "century-a-vxp60sa-1",
      "name": "Century A-VXP60SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VXP60SA-1",
      "normalizedModelNumber": "a-vxp60sa-1",
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
      "id": "model-century-a-vcd48sa-1",
      "slug": "century-a-vcd48sa-1",
      "name": "Century A-VCD48SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VCD48SA-1",
      "normalizedModelNumber": "a-vcd48sa-1",
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
      "id": "model-century-hsa1442s1-a",
      "slug": "century-hsa1442s1-a",
      "name": "Century HSA1442S1-**A",
      "seriesId": "series-century-hsa14-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1442S1-**A",
      "normalizedModelNumber": "hsa1442s1-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-century-hsa1430s1-a",
      "slug": "century-hsa1430s1-a",
      "name": "Century HSA1430S1-**A",
      "seriesId": "series-century-hsa14-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1430S1-**A",
      "normalizedModelNumber": "hsa1430s1-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 29400,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-century-hsa1436s1-a",
      "slug": "century-hsa1436s1-a",
      "name": "Century HSA1436S1-**A",
      "seriesId": "series-century-hsa14-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1436S1-**A",
      "normalizedModelNumber": "hsa1436s1-**a",
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
      "id": "model-century-hrg1548s1r-a",
      "slug": "century-hrg1548s1r-a",
      "name": "Century HRG1548S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1548S1R-**A",
      "normalizedModelNumber": "hrg1548s1r-**a",
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
      "id": "model-century-hrg1542s1r-a",
      "slug": "century-hrg1542s1r-a",
      "name": "Century HRG1542S1R-**A",
      "seriesId": "series-century-hrg15-series",
      "brandId": "brand-century",
      "modelNumber": "HRG1542S1R-**A",
      "normalizedModelNumber": "hrg1542s1r-**a",
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
      "id": "model-century-a-vcd60sa-1",
      "slug": "century-a-vcd60sa-1",
      "name": "Century A-VCD60SA-1",
      "seriesId": "series-century-a-series",
      "brandId": "brand-century",
      "modelNumber": "A-VCD60SA-1",
      "normalizedModelNumber": "a-vcd60sa-1",
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
      "id": "model-century-hsa1448s1-a",
      "slug": "century-hsa1448s1-a",
      "name": "Century HSA1448S1-**A",
      "seriesId": "series-century-hsa14-series",
      "brandId": "brand-century",
      "modelNumber": "HSA1448S1-**A",
      "normalizedModelNumber": "hsa1448s1-**a",
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
      "id": "ou-century-a-zhp09sa-1",
      "modelNumber": "A-ZHP09SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vmh09sv-1",
      "modelNumber": "A-VMH09SV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vhp09sa-1",
      "modelNumber": "A-VHP09SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-zhp15sa-1",
      "modelNumber": "A-ZHP15SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vmh06sv-1",
      "modelNumber": "A-VMH06SV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh12sv-1",
      "modelNumber": "A-VMH12SV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vhp06sa-1",
      "modelNumber": "A-VHP06SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vhp12sa-1",
      "modelNumber": "A-VHP12SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vhp183a-1",
      "modelNumber": "A-VHP183A-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vhp284a-1",
      "modelNumber": "A-VHP284A-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vhp486a-1",
      "modelNumber": "A-VHP486A-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vhp365a-1",
      "modelNumber": "A-VHP365A-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vmh28tv-1",
      "modelNumber": "A-VMH28TV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh36qv-1a",
      "modelNumber": "A-VMH36QV-1A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vhp556a-1",
      "modelNumber": "A-VHP556A-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vmh36qv-1",
      "modelNumber": "A-VMH36QV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh55pv-1",
      "modelNumber": "A-VMH55PV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh18dv-1",
      "modelNumber": "A-VMH18DV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh48pv-1",
      "modelNumber": "A-VMH48PV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh18sv-1",
      "modelNumber": "A-VMH18SV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh24sv-1",
      "modelNumber": "A-VMH24SV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vhp18sa-1",
      "modelNumber": "A-VHP18SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vhp24sa-1",
      "modelNumber": "A-VHP24SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hsa1936v1-a",
      "modelNumber": "HSA1936V1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vmh30sg-1",
      "modelNumber": "A-VMH30SG-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vmh33sv-1",
      "modelNumber": "A-VMH33SV-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vhp33sa-1",
      "modelNumber": "A-VHP33SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vxp18sa-1",
      "modelNumber": "A-VXP18SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hrg1836s1p",
      "modelNumber": "HRG1836S1P",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-svh09sb-1",
      "modelNumber": "A-SVH09SB-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vxp24sa-1",
      "modelNumber": "A-VXP24SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hsa1960v1-a",
      "modelNumber": "HSA1960V1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vcd18sa-1",
      "modelNumber": "A-VCD18SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vxp30sa-1",
      "modelNumber": "A-VXP30SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vxp36sa-1",
      "modelNumber": "A-VXP36SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vcd24sa-1",
      "modelNumber": "A-VCD24SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hrg1518s1r-a",
      "modelNumber": "HRG1518S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hrg18s1r-a",
      "modelNumber": "HRG1**8S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hrg1524s1r-a",
      "modelNumber": "HRG1524S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hrg1536s1r-a",
      "modelNumber": "HRG1536S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vxp48sa-1",
      "modelNumber": "A-VXP48SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vcd30sa-1",
      "modelNumber": "A-VCD30SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vcd36sa-1",
      "modelNumber": "A-VCD36SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hrg1530s1r-a",
      "modelNumber": "HRG1530S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hsa1418s1-a",
      "modelNumber": "HSA1418S1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hsa1424s1-a",
      "modelNumber": "HSA1424S1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vxp60sa-1",
      "modelNumber": "A-VXP60SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-a-vcd48sa-1",
      "modelNumber": "A-VCD48SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hsa1442s1-a",
      "modelNumber": "HSA1442S1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hsa1430s1-a",
      "modelNumber": "HSA1430S1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hsa1436s1-a",
      "modelNumber": "HSA1436S1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-century-hrg1548s1r-a",
      "modelNumber": "HRG1548S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hrg1542s1r-a",
      "modelNumber": "HRG1542S1R-**A",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-a-vcd60sa-1",
      "modelNumber": "A-VCD60SA-1",
      "brandId": "brand-century",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-century-hsa1448s1-a",
      "modelNumber": "HSA1448S1-**A",
      "brandId": "brand-century",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-b-zhp09sa-1",
      "modelNumber": "B-ZHP09SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vmh09sv-1",
      "modelNumber": "B-VMH09SV-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp09sa-1",
      "modelNumber": "B-VHP09SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp09wa-1",
      "modelNumber": "B-VHP09WA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-zhp15sa-1",
      "modelNumber": "B-ZHP15SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vmh06sv-1",
      "modelNumber": "B-VMH06SV-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vmh12sv-1",
      "modelNumber": "B-VMH12SV-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp06sa-1",
      "modelNumber": "B-VHP06SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp12sa-1",
      "modelNumber": "B-VHP12SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp12wa-1",
      "modelNumber": "B-VHP12WA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42543",
      "modelNumber": "IU-42543",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp091a-1",
      "modelNumber": "B-VHP091A-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42554",
      "modelNumber": "IU-42554",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42557",
      "modelNumber": "IU-42557",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp121a-1",
      "modelNumber": "B-VHP121A-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42556",
      "modelNumber": "IU-42556",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42565",
      "modelNumber": "IU-42565",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp09ca-1",
      "modelNumber": "B-VHP09CA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42569",
      "modelNumber": "IU-42569",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42558",
      "modelNumber": "IU-42558",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp12ca-1",
      "modelNumber": "B-VHP12CA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42568",
      "modelNumber": "IU-42568",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42571",
      "modelNumber": "IU-42571",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42562",
      "modelNumber": "IU-42562",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp061a-1",
      "modelNumber": "B-VHP061A-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42570",
      "modelNumber": "IU-42570",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vmh18sv-1",
      "modelNumber": "B-VMH18SV-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vmh24sv-1",
      "modelNumber": "B-VMH24SV-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp18sa-1",
      "modelNumber": "B-VHP18SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp24sa-1",
      "modelNumber": "B-VHP24SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp24ca-1",
      "modelNumber": "B-VHP24CA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp181a-1",
      "modelNumber": "B-VHP181A-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp09da-1",
      "modelNumber": "B-VHP09DA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp24ua-1",
      "modelNumber": "B-VHP24UA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp18ua-1",
      "modelNumber": "B-VHP18UA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-hma30vx1-",
      "modelNumber": "HMA30VX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp18ca-1",
      "modelNumber": "B-VHP18CA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-7ecu30bx-tdr",
      "modelNumber": "7E[C,U]30BX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu24bx-tdr",
      "modelNumber": "7E[C,U]24BX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp12da-1",
      "modelNumber": "B-VHP12DA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vhp18wa-1",
      "modelNumber": "B-VHP18WA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vmh30sg-1",
      "modelNumber": "B-VMH30SG-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-hma24cx1-",
      "modelNumber": "HMA24CX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma30cx1-",
      "modelNumber": "HMA30CX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vmh33sv-1",
      "modelNumber": "B-VMH33SV-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-7ecu36bx-tdr",
      "modelNumber": "7E[C,U]36BX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp33sa-1",
      "modelNumber": "B-VHP33SA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-wxp18sa",
      "modelNumber": "WXP18SA",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p30bh4txv01",
      "modelNumber": "EA(C,U)1P30B+H4TXV01",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x30b",
      "modelNumber": "EAC4X30B",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p30bh4txv01",
      "modelNumber": "EAH1P30B+H4TXV01",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hcg36v1p",
      "modelNumber": "HCG36V1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma24vx1-",
      "modelNumber": "HMA24VX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp24da-1",
      "modelNumber": "B-VHP24DA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-eacu1p24bh4txv01",
      "modelNumber": "EA(C,U)1P24B+H4TXV01",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x24b",
      "modelNumber": "EAC4X24B",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-e1p23bh4txv01",
      "modelNumber": "E*1P23B+H4TXV01",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vxp18sa-1",
      "modelNumber": "B-VXP18SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp24aa-1",
      "modelNumber": "B-VHP24AA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-svh09sb-1",
      "modelNumber": "B-SVH09SB-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-hcg24v1p",
      "modelNumber": "HCG24V1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hcg30v1p",
      "modelNumber": "HCG30V1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh30bx-tdr",
      "modelNumber": "7EH30BX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp18da-1",
      "modelNumber": "B-VHP18DA-1",
      "brandId": "brand-century",
      "type": "wall-single"
    },
    {
      "id": "iu-b-vxp24sa-1",
      "modelNumber": "B-VXP24SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu48cx-tdr",
      "modelNumber": "7E[C,U]48CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu5060cx-tdr",
      "modelNumber": "7E[C,U]50/60CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-ed1p3036bh4txv02",
      "modelNumber": "ED1P30/36B+H4TXV02",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd18sa-1",
      "modelNumber": "B-VCD18SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vhp18aa-1",
      "modelNumber": "B-VHP18AA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma48cx1-",
      "modelNumber": "HMA48CX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-wxp30sa",
      "modelNumber": "WXP30SA",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-wxp24sa",
      "modelNumber": "WXP24SA",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmg30x1p",
      "modelNumber": "HMG30X1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmg24x1p",
      "modelNumber": "HMG24X1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hcg42v1p",
      "modelNumber": "HCG42V1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh51cx-tdr",
      "modelNumber": "7EH51CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vxp36sa-1",
      "modelNumber": "B-VXP36SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd24sa-1",
      "modelNumber": "B-VCD24SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-ed1p3036ch4txv02",
      "modelNumber": "ED1P30/36C+H4TXV02",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh36cx-tdr",
      "modelNumber": "7EH36CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmas48cx1s-",
      "modelNumber": "HMAS48CX1S-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed5060cx-tdr",
      "modelNumber": "7ED50/60CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec30bx-0tdr",
      "modelNumber": "7EC30BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vxp30sa-1",
      "modelNumber": "B-VXP30SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-wxp36sa",
      "modelNumber": "WXP36SA",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p30atdrtxv",
      "modelNumber": "EA(C;U)1P30A+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p30btdrtxv",
      "modelNumber": "EAH1P30B*+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh30bx-0tdr",
      "modelNumber": "7EH30BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p36btdrtxv",
      "modelNumber": "EA(C;U)1P36B+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh42cx-0tdr",
      "modelNumber": "7EH42CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd1824b1a",
      "modelNumber": "MCD18/24B1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu30ax-tdr",
      "modelNumber": "7E[C,U]30AX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma24px1-",
      "modelNumber": "HMA24PX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vxp48sa-1",
      "modelNumber": "B-VXP48SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-3036ctdr",
      "modelNumber": "EAD4X-30/36C+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-3036btdr",
      "modelNumber": "EAD4X-30/36B+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p24atdrtxv",
      "modelNumber": "EA(C;U)1P24A+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh51cx-0tdr",
      "modelNumber": "7EH51CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed3036bx-0tdr",
      "modelNumber": "7ED30/36BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec24bx-0tdr",
      "modelNumber": "7EC24BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p24btdrtxv",
      "modelNumber": "EAH1P24B*+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed3036cx-0tdr",
      "modelNumber": "7ED30/36CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh24bx-0tdr",
      "modelNumber": "7EH24BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd30sa-1",
      "modelNumber": "B-VCD30SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-48ctdr",
      "modelNumber": "EAD4X-48C+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed48cx-0tdr",
      "modelNumber": "7ED48CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec5060cx-0tdr",
      "modelNumber": "7EC50/60CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p5060ctdrtxv",
      "modelNumber": "EA(C;U)1P50/60C+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp1824a1a",
      "modelNumber": "MXP18/24A1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp1824b1a",
      "modelNumber": "MXP18/24B1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh42bx-0tdr",
      "modelNumber": "7EH42BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p36atdrtxv",
      "modelNumber": "EA(C;U)1P36A+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd36sa-1",
      "modelNumber": "B-VCD36SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp2436c1a",
      "modelNumber": "MXP24/36C1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh24bx-tdr",
      "modelNumber": "7EH24BX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma18vx1-",
      "modelNumber": "HMA18VX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu36ax-tdr",
      "modelNumber": "7E[C,U]36AX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec36bx-0tdr",
      "modelNumber": "7EC36BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp2436b1a",
      "modelNumber": "MXP24/36B1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vxp60sa-1",
      "modelNumber": "B-VXP60SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp4860c1a",
      "modelNumber": "MXP48/60C1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd48sa-1",
      "modelNumber": "B-VCD48SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed42bx-0tdr",
      "modelNumber": "7ED42BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh48bx-0tdr",
      "modelNumber": "7EH48BX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-42btdr",
      "modelNumber": "EAD4X-42B+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh36cx-0tdr",
      "modelNumber": "7EH36CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd3036c1a",
      "modelNumber": "MCD30/36C1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma30px1-",
      "modelNumber": "HMA30PX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd3036b1a",
      "modelNumber": "MCD30/36B1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu49cx-tdr",
      "modelNumber": "7E[C,U]49CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu24ax-tdr",
      "modelNumber": "7E[C,U]24AX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmas36cx1s-",
      "modelNumber": "HMAS36CX1S-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed3036bx-tdr",
      "modelNumber": "7ED30/36BX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed3036cx-tdr",
      "modelNumber": "7ED30/36CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh42cx-tdr",
      "modelNumber": "7EH42CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma42vx1-",
      "modelNumber": "HMA42VX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec60cx-0tdr",
      "modelNumber": "7EC60CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p49ctdrtxv",
      "modelNumber": "EA(C;U)1P49C+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p60ctdrtxv",
      "modelNumber": "EA(C;U)1P60C+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p48btdrtxv",
      "modelNumber": "EA(C;U)1P48B+TDR+TXV",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-vcd60sa-1",
      "modelNumber": "B-VCD60SA-1",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp2436a1a",
      "modelNumber": "MXP24/36A1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp4860d1a",
      "modelNumber": "MXP48/60D1A",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ecu60cx-tdr",
      "modelNumber": "7E[C,U]60CX-**+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma36vx1-",
      "modelNumber": "HMA36VX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma48vx1-",
      "modelNumber": "HMA48VX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmas42cx1s-",
      "modelNumber": "HMAS42CX1S-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh60dx-0tdr",
      "modelNumber": "7EH60DX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec48cx-0tdr",
      "modelNumber": "7EC48CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec49cx-0tdr",
      "modelNumber": "7EC49CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh48cx-0tdr",
      "modelNumber": "7EH48CX-0*+TDR",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hma36cx1-",
      "modelNumber": "HMA36CX1*-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmas30cx1s-",
      "modelNumber": "HMAS30CX1S-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hmas18cx1s-",
      "modelNumber": "HMAS18CX1S-**",
      "brandId": "brand-century",
      "type": "central-ducted"
    },
    {
      "id": "iu-hcg48v1p",
      "modelNumber": "HCG48V1P",
      "brandId": "brand-century",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-century-a-zhp09sa-1-b-zhp09sa-1",
      "slug": "century-a-zhp09sa-1-b-zhp09sa-1",
      "modelId": "model-century-a-zhp09sa-1",
      "outdoorUnitId": "ou-century-a-zhp09sa-1",
      "indoorUnitId": "iu-b-zhp09sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh09sv-1-b-vmh09sv-1",
      "slug": "century-a-vmh09sv-1-b-vmh09sv-1",
      "modelId": "model-century-a-vmh09sv-1",
      "outdoorUnitId": "ou-century-a-vmh09sv-1",
      "indoorUnitId": "iu-b-vmh09sv-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp09sa-1-b-vhp09sa-1",
      "slug": "century-a-vhp09sa-1-b-vhp09sa-1",
      "modelId": "model-century-a-vhp09sa-1",
      "outdoorUnitId": "ou-century-a-vhp09sa-1",
      "indoorUnitId": "iu-b-vhp09sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp09sa-1-b-vhp09wa-1",
      "slug": "century-a-vhp09sa-1-b-vhp09wa-1",
      "modelId": "model-century-a-vhp09sa-1",
      "outdoorUnitId": "ou-century-a-vhp09sa-1",
      "indoorUnitId": "iu-b-vhp09wa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-zhp15sa-1-b-zhp15sa-1",
      "slug": "century-a-zhp15sa-1-b-zhp15sa-1",
      "modelId": "model-century-a-zhp15sa-1",
      "outdoorUnitId": "ou-century-a-zhp15sa-1",
      "indoorUnitId": "iu-b-zhp15sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh06sv-1-b-vmh06sv-1",
      "slug": "century-a-vmh06sv-1-b-vmh06sv-1",
      "modelId": "model-century-a-vmh06sv-1",
      "outdoorUnitId": "ou-century-a-vmh06sv-1",
      "indoorUnitId": "iu-b-vmh06sv-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh12sv-1-b-vmh12sv-1",
      "slug": "century-a-vmh12sv-1-b-vmh12sv-1",
      "modelId": "model-century-a-vmh12sv-1",
      "outdoorUnitId": "ou-century-a-vmh12sv-1",
      "indoorUnitId": "iu-b-vmh12sv-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp06sa-1-b-vhp06sa-1",
      "slug": "century-a-vhp06sa-1-b-vhp06sa-1",
      "modelId": "model-century-a-vhp06sa-1",
      "outdoorUnitId": "ou-century-a-vhp06sa-1",
      "indoorUnitId": "iu-b-vhp06sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp12sa-1-b-vhp12sa-1",
      "slug": "century-a-vhp12sa-1-b-vhp12sa-1",
      "modelId": "model-century-a-vhp12sa-1",
      "outdoorUnitId": "ou-century-a-vhp12sa-1",
      "indoorUnitId": "iu-b-vhp12sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp12sa-1-b-vhp12wa-1",
      "slug": "century-a-vhp12sa-1-b-vhp12wa-1",
      "modelId": "model-century-a-vhp12sa-1",
      "outdoorUnitId": "ou-century-a-vhp12sa-1",
      "indoorUnitId": "iu-b-vhp12wa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp183a-1-iu-42543",
      "slug": "century-a-vhp183a-1-iu-42543",
      "modelId": "model-century-a-vhp183a-1",
      "outdoorUnitId": "ou-century-a-vhp183a-1",
      "indoorUnitId": "iu-iu-42543",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp09sa-1-b-vhp091a-1",
      "slug": "century-a-vhp09sa-1-b-vhp091a-1",
      "modelId": "model-century-a-vhp09sa-1",
      "outdoorUnitId": "ou-century-a-vhp09sa-1",
      "indoorUnitId": "iu-b-vhp091a-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp284a-1-iu-42554",
      "slug": "century-a-vhp284a-1-iu-42554",
      "modelId": "model-century-a-vhp284a-1",
      "outdoorUnitId": "ou-century-a-vhp284a-1",
      "indoorUnitId": "iu-iu-42554",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp486a-1-iu-42557",
      "slug": "century-a-vhp486a-1-iu-42557",
      "modelId": "model-century-a-vhp486a-1",
      "outdoorUnitId": "ou-century-a-vhp486a-1",
      "indoorUnitId": "iu-iu-42557",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp12sa-1-b-vhp121a-1",
      "slug": "century-a-vhp12sa-1-b-vhp121a-1",
      "modelId": "model-century-a-vhp12sa-1",
      "outdoorUnitId": "ou-century-a-vhp12sa-1",
      "indoorUnitId": "iu-b-vhp121a-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp365a-1-iu-42556",
      "slug": "century-a-vhp365a-1-iu-42556",
      "modelId": "model-century-a-vhp365a-1",
      "outdoorUnitId": "ou-century-a-vhp365a-1",
      "indoorUnitId": "iu-iu-42556",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh28tv-1-iu-42565",
      "slug": "century-a-vmh28tv-1-iu-42565",
      "modelId": "model-century-a-vmh28tv-1",
      "outdoorUnitId": "ou-century-a-vmh28tv-1",
      "indoorUnitId": "iu-iu-42565",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp09sa-1-b-vhp09ca-1",
      "slug": "century-a-vhp09sa-1-b-vhp09ca-1",
      "modelId": "model-century-a-vhp09sa-1",
      "outdoorUnitId": "ou-century-a-vhp09sa-1",
      "indoorUnitId": "iu-b-vhp09ca-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh36qv-1a-iu-42569",
      "slug": "century-a-vmh36qv-1a-iu-42569",
      "modelId": "model-century-a-vmh36qv-1a",
      "outdoorUnitId": "ou-century-a-vmh36qv-1a",
      "indoorUnitId": "iu-iu-42569",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp556a-1-iu-42558",
      "slug": "century-a-vhp556a-1-iu-42558",
      "modelId": "model-century-a-vhp556a-1",
      "outdoorUnitId": "ou-century-a-vhp556a-1",
      "indoorUnitId": "iu-iu-42558",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp12sa-1-b-vhp12ca-1",
      "slug": "century-a-vhp12sa-1-b-vhp12ca-1",
      "modelId": "model-century-a-vhp12sa-1",
      "outdoorUnitId": "ou-century-a-vhp12sa-1",
      "indoorUnitId": "iu-b-vhp12ca-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh36qv-1-iu-42568",
      "slug": "century-a-vmh36qv-1-iu-42568",
      "modelId": "model-century-a-vmh36qv-1",
      "outdoorUnitId": "ou-century-a-vmh36qv-1",
      "indoorUnitId": "iu-iu-42568",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh55pv-1-iu-42571",
      "slug": "century-a-vmh55pv-1-iu-42571",
      "modelId": "model-century-a-vmh55pv-1",
      "outdoorUnitId": "ou-century-a-vmh55pv-1",
      "indoorUnitId": "iu-iu-42571",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh18dv-1-iu-42562",
      "slug": "century-a-vmh18dv-1-iu-42562",
      "modelId": "model-century-a-vmh18dv-1",
      "outdoorUnitId": "ou-century-a-vmh18dv-1",
      "indoorUnitId": "iu-iu-42562",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp06sa-1-b-vhp061a-1",
      "slug": "century-a-vhp06sa-1-b-vhp061a-1",
      "modelId": "model-century-a-vhp06sa-1",
      "outdoorUnitId": "ou-century-a-vhp06sa-1",
      "indoorUnitId": "iu-b-vhp061a-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh48pv-1-iu-42570",
      "slug": "century-a-vmh48pv-1-iu-42570",
      "modelId": "model-century-a-vmh48pv-1",
      "outdoorUnitId": "ou-century-a-vmh48pv-1",
      "indoorUnitId": "iu-iu-42570",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh18sv-1-b-vmh18sv-1",
      "slug": "century-a-vmh18sv-1-b-vmh18sv-1",
      "modelId": "model-century-a-vmh18sv-1",
      "outdoorUnitId": "ou-century-a-vmh18sv-1",
      "indoorUnitId": "iu-b-vmh18sv-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh24sv-1-b-vmh24sv-1",
      "slug": "century-a-vmh24sv-1-b-vmh24sv-1",
      "modelId": "model-century-a-vmh24sv-1",
      "outdoorUnitId": "ou-century-a-vmh24sv-1",
      "indoorUnitId": "iu-b-vmh24sv-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp18sa-1",
      "slug": "century-a-vhp18sa-1-b-vhp18sa-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp18sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp24sa-1-b-vhp24sa-1",
      "slug": "century-a-vhp24sa-1-b-vhp24sa-1",
      "modelId": "model-century-a-vhp24sa-1",
      "outdoorUnitId": "ou-century-a-vhp24sa-1",
      "indoorUnitId": "iu-b-vhp24sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp24sa-1-b-vhp24ca-1",
      "slug": "century-a-vhp24sa-1-b-vhp24ca-1",
      "modelId": "model-century-a-vhp24sa-1",
      "outdoorUnitId": "ou-century-a-vhp24sa-1",
      "indoorUnitId": "iu-b-vhp24ca-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp181a-1",
      "slug": "century-a-vhp18sa-1-b-vhp181a-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp181a-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp09sa-1-b-vhp09da-1",
      "slug": "century-a-vhp09sa-1-b-vhp09da-1",
      "modelId": "model-century-a-vhp09sa-1",
      "outdoorUnitId": "ou-century-a-vhp09sa-1",
      "indoorUnitId": "iu-b-vhp09da-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp24sa-1-b-vhp24ua-1",
      "slug": "century-a-vhp24sa-1-b-vhp24ua-1",
      "modelId": "model-century-a-vhp24sa-1",
      "outdoorUnitId": "ou-century-a-vhp24sa-1",
      "indoorUnitId": "iu-b-vhp24ua-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp18ua-1",
      "slug": "century-a-vhp18sa-1-b-vhp18ua-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp18ua-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-hma30vx1-",
      "slug": "century-hsa1936v1-a-hma30vx1-",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-hma30vx1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp18ca-1",
      "slug": "century-a-vhp18sa-1-b-vhp18ca-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp18ca-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ecu30bx-tdr",
      "slug": "century-hsa1936v1-a-7ecu30bx-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ecu30bx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ecu24bx-tdr",
      "slug": "century-hsa1936v1-a-7ecu24bx-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ecu24bx-tdr",
      "minHeatingTempC": -15,
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp12sa-1-b-vhp12da-1",
      "slug": "century-a-vhp12sa-1-b-vhp12da-1",
      "modelId": "model-century-a-vhp12sa-1",
      "outdoorUnitId": "ou-century-a-vhp12sa-1",
      "indoorUnitId": "iu-b-vhp12da-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp18wa-1",
      "slug": "century-a-vhp18sa-1-b-vhp18wa-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp18wa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh30sg-1-b-vmh30sg-1",
      "slug": "century-a-vmh30sg-1-b-vmh30sg-1",
      "modelId": "model-century-a-vmh30sg-1",
      "outdoorUnitId": "ou-century-a-vmh30sg-1",
      "indoorUnitId": "iu-b-vmh30sg-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-hma24cx1-",
      "slug": "century-hsa1936v1-a-hma24cx1-",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-hma24cx1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-hma30cx1-",
      "slug": "century-hsa1936v1-a-hma30cx1-",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-hma30cx1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vmh33sv-1-b-vmh33sv-1",
      "slug": "century-a-vmh33sv-1-b-vmh33sv-1",
      "modelId": "model-century-a-vmh33sv-1",
      "outdoorUnitId": "ou-century-a-vmh33sv-1",
      "indoorUnitId": "iu-b-vmh33sv-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ecu36bx-tdr",
      "slug": "century-hsa1936v1-a-7ecu36bx-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ecu36bx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp33sa-1-b-vhp33sa-1",
      "slug": "century-a-vhp33sa-1-b-vhp33sa-1",
      "modelId": "model-century-a-vhp33sa-1",
      "outdoorUnitId": "ou-century-a-vhp33sa-1",
      "indoorUnitId": "iu-b-vhp33sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp18sa-1-wxp18sa",
      "slug": "century-a-vxp18sa-1-wxp18sa",
      "modelId": "model-century-a-vxp18sa-1",
      "outdoorUnitId": "ou-century-a-vxp18sa-1",
      "indoorUnitId": "iu-wxp18sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.3,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-eacu1p30bh4txv01",
      "slug": "century-hrg1836s1p-eacu1p30bh4txv01",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-eacu1p30bh4txv01",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-eac4x30b",
      "slug": "century-hrg1836s1p-eac4x30b",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-eac4x30b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-eah1p30bh4txv01",
      "slug": "century-hrg1836s1p-eah1p30bh4txv01",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-eah1p30bh4txv01",
      "minHeatingTempC": -15,
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-hcg36v1p",
      "slug": "century-hrg1836s1p-hcg36v1p",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-hcg36v1p",
      "minHeatingTempC": -15,
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-hma24vx1-",
      "slug": "century-hsa1936v1-a-hma24vx1-",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-hma24vx1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp24sa-1-b-vhp24da-1",
      "slug": "century-a-vhp24sa-1-b-vhp24da-1",
      "modelId": "model-century-a-vhp24sa-1",
      "outdoorUnitId": "ou-century-a-vhp24sa-1",
      "indoorUnitId": "iu-b-vhp24da-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-eacu1p24bh4txv01",
      "slug": "century-hrg1836s1p-eacu1p24bh4txv01",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-eacu1p24bh4txv01",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-eac4x24b",
      "slug": "century-hrg1836s1p-eac4x24b",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-eac4x24b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-e1p23bh4txv01",
      "slug": "century-hrg1836s1p-e1p23bh4txv01",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-e1p23bh4txv01",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp18sa-1-b-vxp18sa-1",
      "slug": "century-a-vxp18sa-1-b-vxp18sa-1",
      "modelId": "model-century-a-vxp18sa-1",
      "outdoorUnitId": "ou-century-a-vxp18sa-1",
      "indoorUnitId": "iu-b-vxp18sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp24sa-1-b-vhp24aa-1",
      "slug": "century-a-vhp24sa-1-b-vhp24aa-1",
      "modelId": "model-century-a-vhp24sa-1",
      "outdoorUnitId": "ou-century-a-vhp24sa-1",
      "indoorUnitId": "iu-b-vhp24aa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-svh09sb-1-b-svh09sb-1",
      "slug": "century-a-svh09sb-1-b-svh09sb-1",
      "modelId": "model-century-a-svh09sb-1",
      "outdoorUnitId": "ou-century-a-svh09sb-1",
      "indoorUnitId": "iu-b-svh09sb-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-hcg24v1p",
      "slug": "century-hrg1836s1p-hcg24v1p",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-hcg24v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-hcg30v1p",
      "slug": "century-hrg1836s1p-hcg30v1p",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-hcg30v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7eh30bx-tdr",
      "slug": "century-hsa1936v1-a-7eh30bx-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7eh30bx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp18da-1",
      "slug": "century-a-vhp18sa-1-b-vhp18da-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp18da-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp24sa-1-b-vxp24sa-1",
      "slug": "century-a-vxp24sa-1-b-vxp24sa-1",
      "modelId": "model-century-a-vxp24sa-1",
      "outdoorUnitId": "ou-century-a-vxp24sa-1",
      "indoorUnitId": "iu-b-vxp24sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1960v1-a-7ecu48cx-tdr",
      "slug": "century-hsa1960v1-a-7ecu48cx-tdr",
      "modelId": "model-century-hsa1960v1-a",
      "outdoorUnitId": "ou-century-hsa1960v1-a",
      "indoorUnitId": "iu-7ecu48cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1960v1-a-7ecu5060cx-tdr",
      "slug": "century-hsa1960v1-a-7ecu5060cx-tdr",
      "modelId": "model-century-hsa1960v1-a",
      "outdoorUnitId": "ou-century-hsa1960v1-a",
      "indoorUnitId": "iu-7ecu5060cx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-ed1p3036bh4txv02",
      "slug": "century-hrg1836s1p-ed1p3036bh4txv02",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-ed1p3036bh4txv02",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd18sa-1-b-vcd18sa-1",
      "slug": "century-a-vcd18sa-1-b-vcd18sa-1",
      "modelId": "model-century-a-vcd18sa-1",
      "outdoorUnitId": "ou-century-a-vcd18sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vhp18sa-1-b-vhp18aa-1",
      "slug": "century-a-vhp18sa-1-b-vhp18aa-1",
      "modelId": "model-century-a-vhp18sa-1",
      "outdoorUnitId": "ou-century-a-vhp18sa-1",
      "indoorUnitId": "iu-b-vhp18aa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1960v1-a-hma48cx1-",
      "slug": "century-hsa1960v1-a-hma48cx1-",
      "modelId": "model-century-hsa1960v1-a",
      "outdoorUnitId": "ou-century-hsa1960v1-a",
      "indoorUnitId": "iu-hma48cx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp30sa-1-wxp30sa",
      "slug": "century-a-vxp30sa-1-wxp30sa",
      "modelId": "model-century-a-vxp30sa-1",
      "outdoorUnitId": "ou-century-a-vxp30sa-1",
      "indoorUnitId": "iu-wxp30sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp24sa-1-wxp24sa",
      "slug": "century-a-vxp24sa-1-wxp24sa",
      "modelId": "model-century-a-vxp24sa-1",
      "outdoorUnitId": "ou-century-a-vxp24sa-1",
      "indoorUnitId": "iu-wxp24sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-hmg30x1p",
      "slug": "century-hrg1836s1p-hmg30x1p",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-hmg30x1p",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-hmg24x1p",
      "slug": "century-hrg1836s1p-hmg24x1p",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-hmg24x1p",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-hcg42v1p",
      "slug": "century-hrg1836s1p-hcg42v1p",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-hcg42v1p",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1960v1-a-7eh51cx-tdr",
      "slug": "century-hsa1960v1-a-7eh51cx-tdr",
      "modelId": "model-century-hsa1960v1-a",
      "outdoorUnitId": "ou-century-hsa1960v1-a",
      "indoorUnitId": "iu-7eh51cx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp36sa-1-b-vxp36sa-1",
      "slug": "century-a-vxp36sa-1-b-vxp36sa-1",
      "modelId": "model-century-a-vxp36sa-1",
      "outdoorUnitId": "ou-century-a-vxp36sa-1",
      "indoorUnitId": "iu-b-vxp36sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd24sa-1-b-vcd24sa-1",
      "slug": "century-a-vcd24sa-1-b-vcd24sa-1",
      "modelId": "model-century-a-vcd24sa-1",
      "outdoorUnitId": "ou-century-a-vcd24sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1836s1p-ed1p3036ch4txv02",
      "slug": "century-hrg1836s1p-ed1p3036ch4txv02",
      "modelId": "model-century-hrg1836s1p",
      "outdoorUnitId": "ou-century-hrg1836s1p",
      "indoorUnitId": "iu-ed1p3036ch4txv02",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7eh36cx-tdr",
      "slug": "century-hsa1936v1-a-7eh36cx-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7eh36cx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1960v1-a-hmas48cx1s-",
      "slug": "century-hsa1960v1-a-hmas48cx1s-",
      "modelId": "model-century-hsa1960v1-a",
      "outdoorUnitId": "ou-century-hsa1960v1-a",
      "indoorUnitId": "iu-hmas48cx1s-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1960v1-a-7ed5060cx-tdr",
      "slug": "century-hsa1960v1-a-7ed5060cx-tdr",
      "modelId": "model-century-hsa1960v1-a",
      "outdoorUnitId": "ou-century-hsa1960v1-a",
      "indoorUnitId": "iu-7ed5060cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-7ec30bx-0tdr",
      "slug": "century-hrg1518s1r-a-7ec30bx-0tdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-7ec30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp30sa-1-b-vxp30sa-1",
      "slug": "century-a-vxp30sa-1-b-vxp30sa-1",
      "modelId": "model-century-a-vxp30sa-1",
      "outdoorUnitId": "ou-century-a-vxp30sa-1",
      "indoorUnitId": "iu-b-vxp30sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp36sa-1-wxp36sa",
      "slug": "century-a-vxp36sa-1-wxp36sa",
      "modelId": "model-century-a-vxp36sa-1",
      "outdoorUnitId": "ou-century-a-vxp36sa-1",
      "indoorUnitId": "iu-wxp36sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-eacu1p30atdrtxv",
      "slug": "century-hrg1518s1r-a-eacu1p30atdrtxv",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-eacu1p30atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg18s1r-a-eah1p30btdrtxv",
      "slug": "century-hrg18s1r-a-eah1p30btdrtxv",
      "modelId": "model-century-hrg18s1r-a",
      "outdoorUnitId": "ou-century-hrg18s1r-a",
      "indoorUnitId": "iu-eah1p30btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-7eh30bx-0tdr",
      "slug": "century-hrg1524s1r-a-7eh30bx-0tdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-7eh30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-7eh30bx-0tdr",
      "slug": "century-hrg1518s1r-a-7eh30bx-0tdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-7eh30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg18s1r-a-eacu1p30atdrtxv",
      "slug": "century-hrg18s1r-a-eacu1p30atdrtxv",
      "modelId": "model-century-hrg18s1r-a",
      "outdoorUnitId": "ou-century-hrg18s1r-a",
      "indoorUnitId": "iu-eacu1p30atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-eacu1p36btdrtxv",
      "slug": "century-hrg1536s1r-a-eacu1p36btdrtxv",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-eacu1p36btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7eh42cx-0tdr",
      "slug": "century-hrg1536s1r-a-7eh42cx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7eh42cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd24sa-1-mcd1824b1a",
      "slug": "century-a-vcd24sa-1-mcd1824b1a",
      "modelId": "model-century-a-vcd24sa-1",
      "outdoorUnitId": "ou-century-a-vcd24sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ecu30ax-tdr",
      "slug": "century-hsa1936v1-a-7ecu30ax-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ecu30ax-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-hma24px1-",
      "slug": "century-hsa1936v1-a-hma24px1-",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-hma24px1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp48sa-1-b-vxp48sa-1",
      "slug": "century-a-vxp48sa-1-b-vxp48sa-1",
      "modelId": "model-century-a-vxp48sa-1",
      "outdoorUnitId": "ou-century-a-vxp48sa-1",
      "indoorUnitId": "iu-b-vxp48sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-ead4x-3036ctdr",
      "slug": "century-hrg1524s1r-a-ead4x-3036ctdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-ead4x-3036ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-ead4x-3036btdr",
      "slug": "century-hrg1518s1r-a-ead4x-3036btdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-ead4x-3036btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-eacu1p24atdrtxv",
      "slug": "century-hrg1518s1r-a-eacu1p24atdrtxv",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-eacu1p24atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-7ec30bx-0tdr",
      "slug": "century-hrg1524s1r-a-7ec30bx-0tdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-7ec30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7eh51cx-0tdr",
      "slug": "century-hrg1536s1r-a-7eh51cx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7eh51cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-7ed3036bx-0tdr",
      "slug": "century-hrg1518s1r-a-7ed3036bx-0tdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-7ed3036bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-7ec24bx-0tdr",
      "slug": "century-hrg1518s1r-a-7ec24bx-0tdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-7ec24bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg18s1r-a-eah1p24btdrtxv",
      "slug": "century-hrg18s1r-a-eah1p24btdrtxv",
      "modelId": "model-century-hrg18s1r-a",
      "outdoorUnitId": "ou-century-hrg18s1r-a",
      "indoorUnitId": "iu-eah1p24btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-7ec24bx-0tdr",
      "slug": "century-hrg1524s1r-a-7ec24bx-0tdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-7ec24bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-eacu1p30atdrtxv",
      "slug": "century-hrg1524s1r-a-eacu1p30atdrtxv",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-eacu1p30atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-7ed3036cx-0tdr",
      "slug": "century-hrg1524s1r-a-7ed3036cx-0tdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-7ed3036cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-eacu1p24atdrtxv",
      "slug": "century-hrg1524s1r-a-eacu1p24atdrtxv",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-eacu1p24atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-7eh24bx-0tdr",
      "slug": "century-hrg1518s1r-a-7eh24bx-0tdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-7eh24bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg18s1r-a-eacu1p24atdrtxv",
      "slug": "century-hrg18s1r-a-eacu1p24atdrtxv",
      "modelId": "model-century-hrg18s1r-a",
      "outdoorUnitId": "ou-century-hrg18s1r-a",
      "indoorUnitId": "iu-eacu1p24atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd30sa-1-b-vcd30sa-1",
      "slug": "century-a-vcd30sa-1-b-vcd30sa-1",
      "modelId": "model-century-a-vcd30sa-1",
      "outdoorUnitId": "ou-century-a-vcd30sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-hcg42v1p",
      "slug": "century-hrg1536s1r-a-hcg42v1p",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-hcg42v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-ead4x-48ctdr",
      "slug": "century-hrg1536s1r-a-ead4x-48ctdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-ead4x-48ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7ed48cx-0tdr",
      "slug": "century-hrg1536s1r-a-7ed48cx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7ed48cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7ec5060cx-0tdr",
      "slug": "century-hrg1536s1r-a-7ec5060cx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7ec5060cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-eacu1p5060ctdrtxv",
      "slug": "century-hrg1536s1r-a-eacu1p5060ctdrtxv",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-eacu1p5060ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp18sa-1-mxp1824a1a",
      "slug": "century-a-vxp18sa-1-mxp1824a1a",
      "modelId": "model-century-a-vxp18sa-1",
      "outdoorUnitId": "ou-century-a-vxp18sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd18sa-1-mcd1824b1a",
      "slug": "century-a-vcd18sa-1-mcd1824b1a",
      "modelId": "model-century-a-vcd18sa-1",
      "outdoorUnitId": "ou-century-a-vcd18sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp18sa-1-mxp1824b1a",
      "slug": "century-a-vxp18sa-1-mxp1824b1a",
      "modelId": "model-century-a-vxp18sa-1",
      "outdoorUnitId": "ou-century-a-vxp18sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp24sa-1-mxp1824a1a",
      "slug": "century-a-vxp24sa-1-mxp1824a1a",
      "modelId": "model-century-a-vxp24sa-1",
      "outdoorUnitId": "ou-century-a-vxp24sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7eh42bx-0tdr",
      "slug": "century-hrg1536s1r-a-7eh42bx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7eh42bx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-ead4x-3036ctdr",
      "slug": "century-hrg1536s1r-a-ead4x-3036ctdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-ead4x-3036ctdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-eacu1p36atdrtxv",
      "slug": "century-hrg1536s1r-a-eacu1p36atdrtxv",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-eacu1p36atdrtxv",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd36sa-1-b-vcd36sa-1",
      "slug": "century-a-vcd36sa-1-b-vcd36sa-1",
      "modelId": "model-century-a-vcd36sa-1",
      "outdoorUnitId": "ou-century-a-vcd36sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7ed3036cx-0tdr",
      "slug": "century-hrg1536s1r-a-7ed3036cx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7ed3036cx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp24sa-1-mxp1824b1a",
      "slug": "century-a-vxp24sa-1-mxp1824b1a",
      "modelId": "model-century-a-vxp24sa-1",
      "outdoorUnitId": "ou-century-a-vxp24sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-eacu1p36atdrtxv",
      "slug": "century-hrg1530s1r-a-eacu1p36atdrtxv",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-eacu1p36atdrtxv",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp30sa-1-mxp2436c1a",
      "slug": "century-a-vxp30sa-1-mxp2436c1a",
      "modelId": "model-century-a-vxp30sa-1",
      "outdoorUnitId": "ou-century-a-vxp30sa-1",
      "indoorUnitId": "iu-mxp2436c1a",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1418s1-a-7eh24bx-tdr",
      "slug": "century-hsa1418s1-a-7eh24bx-tdr",
      "modelId": "model-century-hsa1418s1-a",
      "outdoorUnitId": "ou-century-hsa1418s1-a",
      "indoorUnitId": "iu-7eh24bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1418s1-a-hma18vx1-",
      "slug": "century-hsa1418s1-a-hma18vx1-",
      "modelId": "model-century-hsa1418s1-a",
      "outdoorUnitId": "ou-century-hsa1418s1-a",
      "indoorUnitId": "iu-hma18vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1418s1-a-hma24cx1-",
      "slug": "century-hsa1418s1-a-hma24cx1-",
      "modelId": "model-century-hsa1418s1-a",
      "outdoorUnitId": "ou-century-hsa1418s1-a",
      "indoorUnitId": "iu-hma24cx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1418s1-a-hma24vx1-",
      "slug": "century-hsa1418s1-a-hma24vx1-",
      "modelId": "model-century-hsa1418s1-a",
      "outdoorUnitId": "ou-century-hsa1418s1-a",
      "indoorUnitId": "iu-hma24vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-hma30cx1-",
      "slug": "century-hsa1424s1-a-hma30cx1-",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-hma30cx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ecu36ax-tdr",
      "slug": "century-hsa1936v1-a-7ecu36ax-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ecu36ax-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-hcg30v1p",
      "slug": "century-hrg1524s1r-a-hcg30v1p",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-hcg30v1p",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-7ec36bx-0tdr",
      "slug": "century-hrg1530s1r-a-7ec36bx-0tdr",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-7ec36bx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-7ed3036cx-0tdr",
      "slug": "century-hrg1518s1r-a-7ed3036cx-0tdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-7ed3036cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp30sa-1-mxp2436b1a",
      "slug": "century-a-vxp30sa-1-mxp2436b1a",
      "modelId": "model-century-a-vxp30sa-1",
      "outdoorUnitId": "ou-century-a-vxp30sa-1",
      "indoorUnitId": "iu-mxp2436b1a",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp60sa-1-b-vxp60sa-1",
      "slug": "century-a-vxp60sa-1-b-vxp60sa-1",
      "modelId": "model-century-a-vxp60sa-1",
      "outdoorUnitId": "ou-century-a-vxp60sa-1",
      "indoorUnitId": "iu-b-vxp60sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp60sa-1-mxp4860c1a",
      "slug": "century-a-vxp60sa-1-mxp4860c1a",
      "modelId": "model-century-a-vxp60sa-1",
      "outdoorUnitId": "ou-century-a-vxp60sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-hmg24x1p",
      "slug": "century-hrg1518s1r-a-hmg24x1p",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-hmg24x1p",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-ead4x-3036ctdr",
      "slug": "century-hrg1518s1r-a-ead4x-3036ctdr",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-ead4x-3036ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-hcg36v1p",
      "slug": "century-hrg1536s1r-a-hcg36v1p",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-hcg36v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp36sa-1-mxp2436c1a",
      "slug": "century-a-vxp36sa-1-mxp2436c1a",
      "modelId": "model-century-a-vxp36sa-1",
      "outdoorUnitId": "ou-century-a-vxp36sa-1",
      "indoorUnitId": "iu-mxp2436c1a",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp36sa-1-mxp2436b1a",
      "slug": "century-a-vxp36sa-1-mxp2436b1a",
      "modelId": "model-century-a-vxp36sa-1",
      "outdoorUnitId": "ou-century-a-vxp36sa-1",
      "indoorUnitId": "iu-mxp2436b1a",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-7eh30bx-0tdr",
      "slug": "century-hrg1530s1r-a-7eh30bx-0tdr",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-7eh30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-hcg36v1p",
      "slug": "century-hrg1530s1r-a-hcg36v1p",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-hcg36v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7ec36bx-0tdr",
      "slug": "century-hrg1536s1r-a-7ec36bx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7ec36bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1518s1r-a-hcg24v1p",
      "slug": "century-hrg1518s1r-a-hcg24v1p",
      "modelId": "model-century-hrg1518s1r-a",
      "outdoorUnitId": "ou-century-hrg1518s1r-a",
      "indoorUnitId": "iu-hcg24v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-eacu1p30atdrtxv",
      "slug": "century-hrg1530s1r-a-eacu1p30atdrtxv",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-eacu1p30atdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd48sa-1-b-vcd48sa-1",
      "slug": "century-a-vcd48sa-1-b-vcd48sa-1",
      "modelId": "model-century-a-vcd48sa-1",
      "outdoorUnitId": "ou-century-a-vcd48sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-7ec30bx-0tdr",
      "slug": "century-hrg1530s1r-a-7ec30bx-0tdr",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-7ec30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-7ed42bx-0tdr",
      "slug": "century-hrg1530s1r-a-7ed42bx-0tdr",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-7ed42bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1536s1r-a-7eh48bx-0tdr",
      "slug": "century-hrg1536s1r-a-7eh48bx-0tdr",
      "modelId": "model-century-hrg1536s1r-a",
      "outdoorUnitId": "ou-century-hrg1536s1r-a",
      "indoorUnitId": "iu-7eh48bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-ead4x-42btdr",
      "slug": "century-hrg1530s1r-a-ead4x-42btdr",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-ead4x-42btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-7ed3036bx-0tdr",
      "slug": "century-hrg1524s1r-a-7ed3036bx-0tdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-7ed3036bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-7eh36cx-0tdr",
      "slug": "century-hrg1530s1r-a-7eh36cx-0tdr",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-7eh36cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1524s1r-a-ead4x-3036btdr",
      "slug": "century-hrg1524s1r-a-ead4x-3036btdr",
      "modelId": "model-century-hrg1524s1r-a",
      "outdoorUnitId": "ou-century-hrg1524s1r-a",
      "indoorUnitId": "iu-ead4x-3036btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd30sa-1-mcd3036c1a",
      "slug": "century-a-vcd30sa-1-mcd3036c1a",
      "modelId": "model-century-a-vcd30sa-1",
      "outdoorUnitId": "ou-century-a-vcd30sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-hma30px1-",
      "slug": "century-hsa1936v1-a-hma30px1-",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-hma30px1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-hma30vx1-",
      "slug": "century-hsa1424s1-a-hma30vx1-",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-hma30vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-7ecu24bx-tdr",
      "slug": "century-hsa1424s1-a-7ecu24bx-tdr",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-7ecu24bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-7eh30bx-tdr",
      "slug": "century-hsa1424s1-a-7eh30bx-tdr",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-7eh30bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd36sa-1-mcd3036b1a",
      "slug": "century-a-vcd36sa-1-mcd3036b1a",
      "modelId": "model-century-a-vcd36sa-1",
      "outdoorUnitId": "ou-century-a-vcd36sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1442s1-a-7ecu49cx-tdr",
      "slug": "century-hsa1442s1-a-7ecu49cx-tdr",
      "modelId": "model-century-hsa1442s1-a",
      "outdoorUnitId": "ou-century-hsa1442s1-a",
      "indoorUnitId": "iu-7ecu49cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1442s1-a-7ecu48cx-tdr",
      "slug": "century-hsa1442s1-a-7ecu48cx-tdr",
      "modelId": "model-century-hsa1442s1-a",
      "outdoorUnitId": "ou-century-hsa1442s1-a",
      "indoorUnitId": "iu-7ecu48cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ecu24ax-tdr",
      "slug": "century-hsa1936v1-a-7ecu24ax-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ecu24ax-tdr",
      "minHeatingTempC": -15,
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-7ecu30bx-tdr",
      "slug": "century-hsa1424s1-a-7ecu30bx-tdr",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-7ecu30bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1430s1-a-hmas36cx1s-",
      "slug": "century-hsa1430s1-a-hmas36cx1s-",
      "modelId": "model-century-hsa1430s1-a",
      "outdoorUnitId": "ou-century-hsa1430s1-a",
      "indoorUnitId": "iu-hmas36cx1s-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1418s1-a-7ed3036bx-tdr",
      "slug": "century-hsa1418s1-a-7ed3036bx-tdr",
      "modelId": "model-century-hsa1418s1-a",
      "outdoorUnitId": "ou-century-hsa1418s1-a",
      "indoorUnitId": "iu-7ed3036bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1936v1-a-7ed3036cx-tdr",
      "slug": "century-hsa1936v1-a-7ed3036cx-tdr",
      "modelId": "model-century-hsa1936v1-a",
      "outdoorUnitId": "ou-century-hsa1936v1-a",
      "indoorUnitId": "iu-7ed3036cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-7eh24bx-tdr",
      "slug": "century-hsa1424s1-a-7eh24bx-tdr",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-7eh24bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1430s1-a-hma30cx1-",
      "slug": "century-hsa1430s1-a-hma30cx1-",
      "modelId": "model-century-hsa1430s1-a",
      "outdoorUnitId": "ou-century-hsa1430s1-a",
      "indoorUnitId": "iu-hma30cx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1430s1-a-hma30vx1-",
      "slug": "century-hsa1430s1-a-hma30vx1-",
      "modelId": "model-century-hsa1430s1-a",
      "outdoorUnitId": "ou-century-hsa1430s1-a",
      "indoorUnitId": "iu-hma30vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1430s1-a-7eh30bx-tdr",
      "slug": "century-hsa1430s1-a-7eh30bx-tdr",
      "modelId": "model-century-hsa1430s1-a",
      "outdoorUnitId": "ou-century-hsa1430s1-a",
      "indoorUnitId": "iu-7eh30bx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1436s1-a-7eh42cx-tdr",
      "slug": "century-hsa1436s1-a-7eh42cx-tdr",
      "modelId": "model-century-hsa1436s1-a",
      "outdoorUnitId": "ou-century-hsa1436s1-a",
      "indoorUnitId": "iu-7eh42cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1442s1-a-hma42vx1-",
      "slug": "century-hsa1442s1-a-hma42vx1-",
      "modelId": "model-century-hsa1442s1-a",
      "outdoorUnitId": "ou-century-hsa1442s1-a",
      "indoorUnitId": "iu-hma42vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-7ec60cx-0tdr",
      "slug": "century-hrg1548s1r-a-7ec60cx-0tdr",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-7ec60cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1530s1r-a-hcg30v1p",
      "slug": "century-hrg1530s1r-a-hcg30v1p",
      "modelId": "model-century-hrg1530s1r-a",
      "outdoorUnitId": "ou-century-hrg1530s1r-a",
      "indoorUnitId": "iu-hcg30v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-eacu1p49ctdrtxv",
      "slug": "century-hrg1548s1r-a-eacu1p49ctdrtxv",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-eacu1p49ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-eacu1p60ctdrtxv",
      "slug": "century-hrg1548s1r-a-eacu1p60ctdrtxv",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-eacu1p60ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1542s1r-a-eacu1p49ctdrtxv",
      "slug": "century-hrg1542s1r-a-eacu1p49ctdrtxv",
      "modelId": "model-century-hrg1542s1r-a",
      "outdoorUnitId": "ou-century-hrg1542s1r-a",
      "indoorUnitId": "iu-eacu1p49ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1542s1r-a-hcg42v1p",
      "slug": "century-hrg1542s1r-a-hcg42v1p",
      "modelId": "model-century-hrg1542s1r-a",
      "outdoorUnitId": "ou-century-hrg1542s1r-a",
      "indoorUnitId": "iu-hcg42v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-7eh51cx-0tdr",
      "slug": "century-hrg1548s1r-a-7eh51cx-0tdr",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-7eh51cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-eacu1p48btdrtxv",
      "slug": "century-hrg1548s1r-a-eacu1p48btdrtxv",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-eacu1p48btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd60sa-1-b-vcd60sa-1",
      "slug": "century-a-vcd60sa-1-b-vcd60sa-1",
      "modelId": "model-century-a-vcd60sa-1",
      "outdoorUnitId": "ou-century-a-vcd60sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp30sa-1-mxp2436a1a",
      "slug": "century-a-vxp30sa-1-mxp2436a1a",
      "modelId": "model-century-a-vxp30sa-1",
      "outdoorUnitId": "ou-century-a-vxp30sa-1",
      "indoorUnitId": "iu-mxp2436a1a",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd30sa-1-mcd3036b1a",
      "slug": "century-a-vcd30sa-1-mcd3036b1a",
      "modelId": "model-century-a-vcd30sa-1",
      "outdoorUnitId": "ou-century-a-vcd30sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp60sa-1-mxp4860d1a",
      "slug": "century-a-vxp60sa-1-mxp4860d1a",
      "modelId": "model-century-a-vxp60sa-1",
      "outdoorUnitId": "ou-century-a-vxp60sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vxp48sa-1-mxp4860c1a",
      "slug": "century-a-vxp48sa-1-mxp4860c1a",
      "modelId": "model-century-a-vxp48sa-1",
      "outdoorUnitId": "ou-century-a-vxp48sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-a-vcd36sa-1-mcd3036c1a",
      "slug": "century-a-vcd36sa-1-mcd3036c1a",
      "modelId": "model-century-a-vcd36sa-1",
      "outdoorUnitId": "ou-century-a-vcd36sa-1",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1448s1-a-7ecu60cx-tdr",
      "slug": "century-hsa1448s1-a-7ecu60cx-tdr",
      "modelId": "model-century-hsa1448s1-a",
      "outdoorUnitId": "ou-century-hsa1448s1-a",
      "indoorUnitId": "iu-7ecu60cx-tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1430s1-a-hma36vx1-",
      "slug": "century-hsa1430s1-a-hma36vx1-",
      "modelId": "model-century-hsa1430s1-a",
      "outdoorUnitId": "ou-century-hsa1430s1-a",
      "indoorUnitId": "iu-hma36vx1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1442s1-a-hma48vx1-",
      "slug": "century-hsa1442s1-a-hma48vx1-",
      "modelId": "model-century-hsa1442s1-a",
      "outdoorUnitId": "ou-century-hsa1442s1-a",
      "indoorUnitId": "iu-hma48vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1436s1-a-hmas42cx1s-",
      "slug": "century-hsa1436s1-a-hmas42cx1s-",
      "modelId": "model-century-hsa1436s1-a",
      "outdoorUnitId": "ou-century-hsa1436s1-a",
      "indoorUnitId": "iu-hmas42cx1s-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1436s1-a-hma36vx1-",
      "slug": "century-hsa1436s1-a-hma36vx1-",
      "modelId": "model-century-hsa1436s1-a",
      "outdoorUnitId": "ou-century-hsa1436s1-a",
      "indoorUnitId": "iu-hma36vx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-7eh60dx-0tdr",
      "slug": "century-hrg1548s1r-a-7eh60dx-0tdr",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-7eh60dx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-7ec48cx-0tdr",
      "slug": "century-hrg1548s1r-a-7ec48cx-0tdr",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-7ec48cx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-7ec49cx-0tdr",
      "slug": "century-hrg1548s1r-a-7ec49cx-0tdr",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-7ec49cx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-7eh48cx-0tdr",
      "slug": "century-hrg1548s1r-a-7eh48cx-0tdr",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-7eh48cx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1542s1r-a-ead4x-48ctdr",
      "slug": "century-hrg1542s1r-a-ead4x-48ctdr",
      "modelId": "model-century-hrg1542s1r-a",
      "outdoorUnitId": "ou-century-hrg1542s1r-a",
      "indoorUnitId": "iu-ead4x-48ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1430s1-a-hma36cx1-",
      "slug": "century-hsa1430s1-a-hma36cx1-",
      "modelId": "model-century-hsa1430s1-a",
      "outdoorUnitId": "ou-century-hsa1430s1-a",
      "indoorUnitId": "iu-hma36cx1-",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1436s1-a-hma36cx1-",
      "slug": "century-hsa1436s1-a-hma36cx1-",
      "modelId": "model-century-hsa1436s1-a",
      "outdoorUnitId": "ou-century-hsa1436s1-a",
      "indoorUnitId": "iu-hma36cx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-hmas30cx1s-",
      "slug": "century-hsa1424s1-a-hmas30cx1s-",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-hmas30cx1s-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-7ed3036cx-tdr",
      "slug": "century-hsa1424s1-a-7ed3036cx-tdr",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-7ed3036cx-tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-hma24cx1-",
      "slug": "century-hsa1424s1-a-hma24cx1-",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-hma24cx1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1424s1-a-hmas18cx1s-",
      "slug": "century-hsa1424s1-a-hmas18cx1s-",
      "modelId": "model-century-hsa1424s1-a",
      "outdoorUnitId": "ou-century-hsa1424s1-a",
      "indoorUnitId": "iu-hmas18cx1s-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hsa1418s1-a-hma24px1-",
      "slug": "century-hsa1418s1-a-hma24px1-",
      "modelId": "model-century-hsa1418s1-a",
      "outdoorUnitId": "ou-century-hsa1418s1-a",
      "indoorUnitId": "iu-hma24px1-",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1542s1r-a-7ec49cx-0tdr",
      "slug": "century-hrg1542s1r-a-7ec49cx-0tdr",
      "modelId": "model-century-hrg1542s1r-a",
      "outdoorUnitId": "ou-century-hrg1542s1r-a",
      "indoorUnitId": "iu-7ec49cx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1542s1r-a-7ec48cx-0tdr",
      "slug": "century-hrg1542s1r-a-7ec48cx-0tdr",
      "modelId": "model-century-hrg1542s1r-a",
      "outdoorUnitId": "ou-century-hrg1542s1r-a",
      "indoorUnitId": "iu-7ec48cx-0tdr",
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
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1542s1r-a-7ed48cx-0tdr",
      "slug": "century-hrg1542s1r-a-7ed48cx-0tdr",
      "modelId": "model-century-hrg1542s1r-a",
      "outdoorUnitId": "ou-century-hrg1542s1r-a",
      "indoorUnitId": "iu-7ed48cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-century-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-century-hrg1548s1r-a-hcg48v1p",
      "slug": "century-hrg1548s1r-a-hcg48v1p",
      "modelId": "model-century-hrg1548s1r-a",
      "outdoorUnitId": "ou-century-hrg1548s1r-a",
      "indoorUnitId": "iu-hcg48v1p",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-century-epa",
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
