import type { BrandDataset } from "../../types";

export const brand_alsetriaDataset: BrandDataset = {
  "brand": {
    "id": "brand-alsetria",
    "slug": "alsetria",
    "name": "Alsetria",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Alsetria",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-alsetria-epa",
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
      "id": "series-alsetria-mox-series",
      "slug": "alsetria-mox-series",
      "name": "MOX Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MOX Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-m3o-series",
      "slug": "alsetria-m3o-series",
      "name": "M3O Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série M3O Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-m40-series-m4o-series",
      "slug": "alsetria-m40-series-m4o-series",
      "name": "M40 Series | M4O Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série M40 Series | M4O Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-m50-series-m5o-series",
      "slug": "alsetria-m50-series-m5o-series",
      "name": "M50 Series | M5O Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série M50 Series | M5O Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-m2o-series",
      "slug": "alsetria-m2o-series",
      "name": "M2O Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M2O Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-mod-series",
      "slug": "alsetria-mod-series",
      "name": "MOD Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MOD Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-m40-series",
      "slug": "alsetria-m40-series",
      "name": "M40 Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M40 Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-alsetria-moe-series",
      "slug": "alsetria-moe-series",
      "name": "MOE Series",
      "brandId": "brand-alsetria",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MOE Series de Alsetria",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-alsetria-mox330-09hfn1-my5w",
      "slug": "alsetria-mox330-09hfn1-my5w",
      "name": "Alsetria MOX330-09HFN1-MY5W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX330-09HFN1-MY5W",
      "normalizedModelNumber": "mox330-09hfn1-my5w",
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
      "id": "model-alsetria-mox230-09hfn1-mw5w",
      "slug": "alsetria-mox230-09hfn1-mw5w",
      "name": "Alsetria MOX230-09HFN1-MW5W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX230-09HFN1-MW5W",
      "normalizedModelNumber": "mox230-09hfn1-mw5w",
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
      "id": "model-alsetria-mox330-12hfn1-mw5w",
      "slug": "alsetria-mox330-12hfn1-mw5w",
      "name": "Alsetria MOX330-12HFN1-MW5W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX330-12HFN1-MW5W",
      "normalizedModelNumber": "mox330-12hfn1-mw5w",
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
      "id": "model-alsetria-mox230-12hfn1-mv5w",
      "slug": "alsetria-mox230-12hfn1-mv5w",
      "name": "Alsetria MOX230-12HFN1-MV5W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX230-12HFN1-MV5W",
      "normalizedModelNumber": "mox230-12hfn1-mv5w",
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
      "id": "model-alsetria-m3oj-27hfn1-m",
      "slug": "alsetria-m3oj-27hfn1-m",
      "name": "Alsetria M3OJ-27HFN1-M",
      "seriesId": "series-alsetria-m3o-series",
      "brandId": "brand-alsetria",
      "modelNumber": "M3OJ-27HFN1-M",
      "normalizedModelNumber": "m3oj-27hfn1-m",
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
      "id": "model-alsetria-m4og-36hfn1-m",
      "slug": "alsetria-m4og-36hfn1-m",
      "name": "Alsetria M4OG-36HFN1-M",
      "seriesId": "series-alsetria-m40-series-m4o-series",
      "brandId": "brand-alsetria",
      "modelNumber": "M4OG-36HFN1-M",
      "normalizedModelNumber": "m4og-36hfn1-m",
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
      "id": "model-alsetria-m5og-48hfn1-m",
      "slug": "alsetria-m5og-48hfn1-m",
      "name": "Alsetria M5OG-48HFN1-M",
      "seriesId": "series-alsetria-m50-series-m5o-series",
      "brandId": "brand-alsetria",
      "modelNumber": "M5OG-48HFN1-M",
      "normalizedModelNumber": "m5og-48hfn1-m",
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
      "id": "model-alsetria-m2oa-18hfn1-m",
      "slug": "alsetria-m2oa-18hfn1-m",
      "name": "Alsetria M2OA-18HFN1-M",
      "seriesId": "series-alsetria-m2o-series",
      "brandId": "brand-alsetria",
      "modelNumber": "M2OA-18HFN1-M",
      "normalizedModelNumber": "m2oa-18hfn1-m",
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
      "id": "model-alsetria-mox430-18hfn1-mt2q1w",
      "slug": "alsetria-mox430-18hfn1-mt2q1w",
      "name": "Alsetria MOX430-18HFN1-MT2Q1W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX430-18HFN1-MT2Q1W",
      "normalizedModelNumber": "mox430-18hfn1-mt2q1w",
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
      "id": "model-alsetria-mox230-12hfn1-bv0q1w",
      "slug": "alsetria-mox230-12hfn1-bv0q1w",
      "name": "Alsetria MOX230-12HFN1-BV0Q1W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX230-12HFN1-BV0Q1W",
      "normalizedModelNumber": "mox230-12hfn1-bv0q1w",
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
      "id": "model-alsetria-mox430-18hfn1-mu0w",
      "slug": "alsetria-mox430-18hfn1-mu0w",
      "name": "Alsetria MOX430-18HFN1-MU0W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX430-18HFN1-MU0W",
      "normalizedModelNumber": "mox430-18hfn1-mu0w",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16000,
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
      "id": "model-alsetria-mod33-24hfn1-mt0w",
      "slug": "alsetria-mod33-24hfn1-mt0w",
      "name": "Alsetria MOD33-24HFN1-MT0W",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD33-24HFN1-MT0W",
      "normalizedModelNumber": "mod33-24hfn1-mt0w",
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
      "id": "model-alsetria-mox230-09hfn1-mt0w",
      "slug": "alsetria-mox230-09hfn1-mt0w",
      "name": "Alsetria MOX230-09HFN1-MT0W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX230-09HFN1-MT0W",
      "normalizedModelNumber": "mox230-09hfn1-mt0w",
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
      "id": "model-alsetria-mox230-09hfn1-bs5w",
      "slug": "alsetria-mox230-09hfn1-bs5w",
      "name": "Alsetria MOX230-09HFN1-BS5W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX230-09HFN1-BS5W",
      "normalizedModelNumber": "mox230-09hfn1-bs5w",
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
      "id": "model-alsetria-mod30-24hfn1-mu0w",
      "slug": "alsetria-mod30-24hfn1-mu0w",
      "name": "Alsetria MOD30-24HFN1-MU0W",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD30-24HFN1-MU0W",
      "normalizedModelNumber": "mod30-24hfn1-mu0w",
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
      "id": "model-alsetria-mox430-17hfn1-mt0w",
      "slug": "alsetria-mox430-17hfn1-mt0w",
      "name": "Alsetria MOX430-17HFN1-MT0W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX430-17HFN1-MT0W",
      "normalizedModelNumber": "mox430-17hfn1-mt0w",
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
      "id": "model-alsetria-mod30u-30hfn1-mga",
      "slug": "alsetria-mod30u-30hfn1-mga",
      "name": "Alsetria MOD30U-30HFN1-M(GA)",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD30U-30HFN1-M(GA)",
      "normalizedModelNumber": "mod30u-30hfn1-m(ga)",
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
      "id": "model-alsetria-m4ox630-36hfn1-m1x",
      "slug": "alsetria-m4ox630-36hfn1-m1x",
      "name": "Alsetria M4OX630-36HFN1-M1X",
      "seriesId": "series-alsetria-m40-series",
      "brandId": "brand-alsetria",
      "modelNumber": "M4OX630-36HFN1-M1X",
      "normalizedModelNumber": "m4ox630-36hfn1-m1x",
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
      "id": "model-alsetria-mod31-23hfn1-mt2q1w",
      "slug": "alsetria-mod31-23hfn1-mt2q1w",
      "name": "Alsetria MOD31-23HFN1-MT2Q1W",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD31-23HFN1-MT2Q1W",
      "normalizedModelNumber": "mod31-23hfn1-mt2q1w",
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
      "id": "model-alsetria-mox130-09hfn1-bt0q1w",
      "slug": "alsetria-mox130-09hfn1-bt0q1w",
      "name": "Alsetria MOX130-09HFN1-BT0Q1W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX130-09HFN1-BT0Q1W",
      "normalizedModelNumber": "mox130-09hfn1-bt0q1w",
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
      "id": "model-alsetria-mox330-18hfn1-ms0w",
      "slug": "alsetria-mox330-18hfn1-ms0w",
      "name": "Alsetria MOX330-18HFN1-MS0W",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX330-18HFN1-MS0W",
      "normalizedModelNumber": "mox330-18hfn1-ms0w",
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
      "id": "model-alsetria-moe30u-36hfn1-mga",
      "slug": "alsetria-moe30u-36hfn1-mga",
      "name": "Alsetria MOE30U-36HFN1-M(GA)",
      "seriesId": "series-alsetria-moe-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOE30U-36HFN1-M(GA)",
      "normalizedModelNumber": "moe30u-36hfn1-m(ga)",
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
      "id": "model-alsetria-mox430u-18hfn1-m",
      "slug": "alsetria-mox430u-18hfn1-m",
      "name": "Alsetria MOX430U-18HFN1-M",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX430U-18HFN1-M",
      "normalizedModelNumber": "mox430u-18hfn1-m",
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
      "id": "model-alsetria-moe31u-36hfn1-m",
      "slug": "alsetria-moe31u-36hfn1-m",
      "name": "Alsetria MOE31U-36HFN1-M",
      "seriesId": "series-alsetria-moe-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOE31U-36HFN1-M",
      "normalizedModelNumber": "moe31u-36hfn1-m",
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
      "id": "model-alsetria-mod30-24hfn1-mw",
      "slug": "alsetria-mod30-24hfn1-mw",
      "name": "Alsetria MOD30-24HFN1-MW",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD30-24HFN1-MW",
      "normalizedModelNumber": "mod30-24hfn1-mw",
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
      "id": "model-alsetria-mox430u-24hfn1-mr0",
      "slug": "alsetria-mox430u-24hfn1-mr0",
      "name": "Alsetria MOX430U-24HFN1-MR0",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX430U-24HFN1-MR0",
      "normalizedModelNumber": "mox430u-24hfn1-mr0",
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
      "id": "model-alsetria-mod30u-30hfn1-mr0x",
      "slug": "alsetria-mod30u-30hfn1-mr0x",
      "name": "Alsetria MOD30U-30HFN1-MR0(X)",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD30U-30HFN1-MR0(X)",
      "normalizedModelNumber": "mod30u-30hfn1-mr0(x)",
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
      "id": "model-alsetria-moe30u-48hfn1-m-xga",
      "slug": "alsetria-moe30u-48hfn1-m-xga",
      "name": "Alsetria MOE30U-48HFN1-M-[X](GA)",
      "seriesId": "series-alsetria-moe-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOE30U-48HFN1-M-[X](GA)",
      "normalizedModelNumber": "moe30u-48hfn1-m-[x](ga)",
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
      "id": "model-alsetria-mod30-20hfn1-mw",
      "slug": "alsetria-mod30-20hfn1-mw",
      "name": "Alsetria MOD30-20HFN1-MW",
      "seriesId": "series-alsetria-mod-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOD30-20HFN1-MW",
      "normalizedModelNumber": "mod30-20hfn1-mw",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-alsetria-mox630-36hfn1-m3x",
      "slug": "alsetria-mox630-36hfn1-m3x",
      "name": "Alsetria MOX630-36HFN1-M3X",
      "seriesId": "series-alsetria-mox-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOX630-36HFN1-M3X",
      "normalizedModelNumber": "mox630-36hfn1-m3x",
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
      "id": "model-alsetria-moe30u-48hfn1-m-x1",
      "slug": "alsetria-moe30u-48hfn1-m-x1",
      "name": "Alsetria MOE30U-48HFN1-M-[X1]",
      "seriesId": "series-alsetria-moe-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOE30U-48HFN1-M-[X1]",
      "normalizedModelNumber": "moe30u-48hfn1-m-[x1]",
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
      "id": "model-alsetria-moe30u-55hfn1-m",
      "slug": "alsetria-moe30u-55hfn1-m",
      "name": "Alsetria MOE30U-55HFN1-M",
      "seriesId": "series-alsetria-moe-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOE30U-55HFN1-M",
      "normalizedModelNumber": "moe30u-55hfn1-m",
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
      "id": "model-alsetria-moe30u-45hfn1-m",
      "slug": "alsetria-moe30u-45hfn1-m",
      "name": "Alsetria MOE30U-45HFN1-M",
      "seriesId": "series-alsetria-moe-series",
      "brandId": "brand-alsetria",
      "modelNumber": "MOE30U-45HFN1-M",
      "normalizedModelNumber": "moe30u-45hfn1-m",
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
      "id": "ou-alsetria-mox330-09hfn1-my5w",
      "modelNumber": "MOX330-09HFN1-MY5W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox230-09hfn1-mw5w",
      "modelNumber": "MOX230-09HFN1-MW5W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox330-12hfn1-mw5w",
      "modelNumber": "MOX330-12HFN1-MW5W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox230-12hfn1-mv5w",
      "modelNumber": "MOX230-12HFN1-MV5W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-m3oj-27hfn1-m",
      "modelNumber": "M3OJ-27HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-m4og-36hfn1-m",
      "modelNumber": "M4OG-36HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-m5og-48hfn1-m",
      "modelNumber": "M5OG-48HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-m2oa-18hfn1-m",
      "modelNumber": "M2OA-18HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox430-18hfn1-mt2q1w",
      "modelNumber": "MOX430-18HFN1-MT2Q1W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox230-12hfn1-bv0q1w",
      "modelNumber": "MOX230-12HFN1-BV0Q1W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox430-18hfn1-mu0w",
      "modelNumber": "MOX430-18HFN1-MU0W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod33-24hfn1-mt0w",
      "modelNumber": "MOD33-24HFN1-MT0W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox230-09hfn1-mt0w",
      "modelNumber": "MOX230-09HFN1-MT0W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox230-09hfn1-bs5w",
      "modelNumber": "MOX230-09HFN1-BS5W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod30-24hfn1-mu0w",
      "modelNumber": "MOD30-24HFN1-MU0W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox430-17hfn1-mt0w",
      "modelNumber": "MOX430-17HFN1-MT0W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod30u-30hfn1-mga",
      "modelNumber": "MOD30U-30HFN1-M(GA)",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-m4ox630-36hfn1-m1x",
      "modelNumber": "M4OX630-36HFN1-M1X",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod31-23hfn1-mt2q1w",
      "modelNumber": "MOD31-23HFN1-MT2Q1W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox130-09hfn1-bt0q1w",
      "modelNumber": "MOX130-09HFN1-BT0Q1W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox330-18hfn1-ms0w",
      "modelNumber": "MOX330-18HFN1-MS0W",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-moe30u-36hfn1-mga",
      "modelNumber": "MOE30U-36HFN1-M(GA)",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox430u-18hfn1-m",
      "modelNumber": "MOX430U-18HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-moe31u-36hfn1-m",
      "modelNumber": "MOE31U-36HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod30-24hfn1-mw",
      "modelNumber": "MOD30-24HFN1-MW",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox430u-24hfn1-mr0",
      "modelNumber": "MOX430U-24HFN1-MR0",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod30u-30hfn1-mr0x",
      "modelNumber": "MOD30U-30HFN1-MR0(X)",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-moe30u-48hfn1-m-xga",
      "modelNumber": "MOE30U-48HFN1-M-[X](GA)",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mod30-20hfn1-mw",
      "modelNumber": "MOD30-20HFN1-MW",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-mox630-36hfn1-m3x",
      "modelNumber": "MOX630-36HFN1-M3X",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-moe30u-48hfn1-m-x1",
      "modelNumber": "MOE30U-48HFN1-M-[X1]",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-moe30u-55hfn1-m",
      "modelNumber": "MOE30U-55HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-alsetria-moe30u-45hfn1-m",
      "modelNumber": "MOE30U-45HFN1-M",
      "brandId": "brand-alsetria",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-msepb-09hrfn1-my5wga",
      "modelNumber": "MSEPB-09HRFN1-MY5W(GA)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msepb-06hrfn1-my5w",
      "modelNumber": "MSEPB-06HRFN1-MY5W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msepb-12hrfn1-mw5wga",
      "modelNumber": "MSEPB-12HRFN1-MW5W(GA)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mfa2u-12hrfn1-mw5w",
      "modelNumber": "MFA2U-12HRFN1-MW5W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40938",
      "modelNumber": "IU-40938",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mcbu-09hrfn1-mw0w",
      "modelNumber": "MCBU-09HRFN1-MW0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40939",
      "modelNumber": "IU-40939",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40941",
      "modelNumber": "IU-40941",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mcbu-12hrfn1-mv0w",
      "modelNumber": "MCBU-12HRFN1-MV0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40937",
      "modelNumber": "IU-40937",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msabe-18hrfn1-mt2q1w",
      "modelNumber": "MSABE-18HRFN1-MT2Q1W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-cca3u-12hrfn1-mc",
      "modelNumber": "CCA3U-12HRFN1-M(C)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msabb-12hrfn1-bv0q1w",
      "modelNumber": "MSABB-12HRFN1-BV0Q1W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mfa2u-16hrfn1-mv0w",
      "modelNumber": "MFA2U-16HRFN1-MV0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mcbu-06hrfn1-mv0w",
      "modelNumber": "MCBU-06HRFN1-MV0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msepd-24hrfn1-mu0w",
      "modelNumber": "MSEPD-24HRFN1-MU0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msag11a-09hrfn1-mt0w",
      "modelNumber": "MSAG11A-09HRFN1-MT0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msag11a-09hrfn1-bs5w",
      "modelNumber": "MSAG11A-09HRFN1-BS5W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mcd1-24hrfn1-mt0wga",
      "modelNumber": "MCD1-24HRFN1-MT0W(GA)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msepc-18hrfn1-mu0w",
      "modelNumber": "MSEPC-18HRFN1-MU0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msagf-30hrfn1-mt0w",
      "modelNumber": "MSAGF-30HRFN1-MT0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40940",
      "modelNumber": "IU-40940",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-cca3u-18hrfn1-mc",
      "modelNumber": "CCA3U-18HRFN1-M(C)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msabe-23hrfn1-mt2q1w",
      "modelNumber": "MSABE-23HRFN1-MT2Q1W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-cca3u-09hrfn1-mc",
      "modelNumber": "CCA3U-09HRFN1-M(C)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mtiu-09hwfn1-m",
      "modelNumber": "MTIU-09HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msag11a-09hrfn1-bt0q1w",
      "modelNumber": "MSAG11A-09HRFN1-BT0Q1W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mtiu-18hwfn1-m",
      "modelNumber": "MTIU-18HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mcbu-18hrfn1-mu2w",
      "modelNumber": "MCBU-18HRFN1-MU2W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-msag11c-18hrdn1-ms0w",
      "modelNumber": "MSAG11C-18HRDN1-MS0W",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mtiu-12hwfn1-m",
      "modelNumber": "MTIU-12HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mcd1-36hrfn1-mga",
      "modelNumber": "MCD1-36HRFN1-M(GA)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mvbe-18hwfn1-mm3e",
      "modelNumber": "MVBE-18HWFN1-MM3E",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mtiu-24hwfn1-m",
      "modelNumber": "MTIU-24HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mvc-23hwfn1-m",
      "modelNumber": "MVC-23HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-18hwfn1-m",
      "modelNumber": "MVC-18HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-18hwfn1-mwga",
      "modelNumber": "MVC-18HWFN1-MW(GA)",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvbe-36hwfn1-ml3e",
      "modelNumber": "MVBE-36HWFN1-ML3E",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-30hwfn1-mga",
      "modelNumber": "MVC-30HWFN1-M(GA)",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvbe-24hwfn1-mm3e",
      "modelNumber": "MVBE-24HWFN1-MM3E",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-24hwfn1-m",
      "modelNumber": "MVC-24HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvbe-30hwfn1-ml3e",
      "modelNumber": "MVBE-30HWFN1-ML3E",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mcd1-48hrfn1-mga",
      "modelNumber": "MCD1-48HRFN1-M(GA)",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mti-36hwfn1-m",
      "modelNumber": "MTI-36HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "wall-single"
    },
    {
      "id": "iu-mvbm-24a18t3n1",
      "modelNumber": "MVBM-24A18T3N1",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-36hwfn1-m",
      "modelNumber": "MVC-36HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-30hwfn1-m",
      "modelNumber": "MVC-30HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-48hwfn1-m",
      "modelNumber": "MVC-48HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvb-36b23t4n1",
      "modelNumber": "MVB-36B23T4N1",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mvc-60hwfn1-m",
      "modelNumber": "MVC-60HWFN1-M",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac-60hwdn1-mn0",
      "modelNumber": "MAC-60HWDN1-MN0",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac-36hwdn1-mn0",
      "modelNumber": "MAC-36HWDN1-MN0",
      "brandId": "brand-alsetria",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-alsetria-mox330-09hfn1-my5w-msepb-09hrfn1-my5wga",
      "slug": "alsetria-mox330-09hfn1-my5w-msepb-09hrfn1-my5wga",
      "modelId": "model-alsetria-mox330-09hfn1-my5w",
      "outdoorUnitId": "ou-alsetria-mox330-09hfn1-my5w",
      "indoorUnitId": "iu-msepb-09hrfn1-my5wga",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-mw5w-msepb-06hrfn1-my5w",
      "slug": "alsetria-mox230-09hfn1-mw5w-msepb-06hrfn1-my5w",
      "modelId": "model-alsetria-mox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-mw5w",
      "indoorUnitId": "iu-msepb-06hrfn1-my5w",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-mw5w-msepb-09hrfn1-my5wga",
      "slug": "alsetria-mox230-09hfn1-mw5w-msepb-09hrfn1-my5wga",
      "modelId": "model-alsetria-mox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-mw5w",
      "indoorUnitId": "iu-msepb-09hrfn1-my5wga",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-12hfn1-mw5w-msepb-12hrfn1-mw5wga",
      "slug": "alsetria-mox330-12hfn1-mw5w-msepb-12hrfn1-mw5wga",
      "modelId": "model-alsetria-mox330-12hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox330-12hfn1-mw5w",
      "indoorUnitId": "iu-msepb-12hrfn1-mw5wga",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-12hfn1-mv5w-mfa2u-12hrfn1-mw5w",
      "slug": "alsetria-mox230-12hfn1-mv5w-mfa2u-12hrfn1-mw5w",
      "modelId": "model-alsetria-mox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-alsetria-mox230-12hfn1-mv5w",
      "indoorUnitId": "iu-mfa2u-12hrfn1-mw5w",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-12hfn1-mv5w-msepb-12hrfn1-mw5wga",
      "slug": "alsetria-mox230-12hfn1-mv5w-msepb-12hrfn1-mw5wga",
      "modelId": "model-alsetria-mox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-alsetria-mox230-12hfn1-mv5w",
      "indoorUnitId": "iu-msepb-12hrfn1-mw5wga",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-m3oj-27hfn1-m-iu-40938",
      "slug": "alsetria-m3oj-27hfn1-m-iu-40938",
      "modelId": "model-alsetria-m3oj-27hfn1-m",
      "outdoorUnitId": "ou-alsetria-m3oj-27hfn1-m",
      "indoorUnitId": "iu-iu-40938",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-09hfn1-my5w-mcbu-09hrfn1-mw0w",
      "slug": "alsetria-mox330-09hfn1-my5w-mcbu-09hrfn1-mw0w",
      "modelId": "model-alsetria-mox330-09hfn1-my5w",
      "outdoorUnitId": "ou-alsetria-mox330-09hfn1-my5w",
      "indoorUnitId": "iu-mcbu-09hrfn1-mw0w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.4,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-m4og-36hfn1-m-iu-40939",
      "slug": "alsetria-m4og-36hfn1-m-iu-40939",
      "modelId": "model-alsetria-m4og-36hfn1-m",
      "outdoorUnitId": "ou-alsetria-m4og-36hfn1-m",
      "indoorUnitId": "iu-iu-40939",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-m5og-48hfn1-m-iu-40941",
      "slug": "alsetria-m5og-48hfn1-m-iu-40941",
      "modelId": "model-alsetria-m5og-48hfn1-m",
      "outdoorUnitId": "ou-alsetria-m5og-48hfn1-m",
      "indoorUnitId": "iu-iu-40941",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-12hfn1-mw5w-mcbu-12hrfn1-mv0w",
      "slug": "alsetria-mox330-12hfn1-mw5w-mcbu-12hrfn1-mv0w",
      "modelId": "model-alsetria-mox330-12hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox330-12hfn1-mw5w",
      "indoorUnitId": "iu-mcbu-12hrfn1-mv0w",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-m2oa-18hfn1-m-iu-40937",
      "slug": "alsetria-m2oa-18hfn1-m-iu-40937",
      "modelId": "model-alsetria-m2oa-18hfn1-m",
      "outdoorUnitId": "ou-alsetria-m2oa-18hfn1-m",
      "indoorUnitId": "iu-iu-40937",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.9,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-18hfn1-mt2q1w-msabe-18hrfn1-mt2q1w",
      "slug": "alsetria-mox430-18hfn1-mt2q1w-msabe-18hrfn1-mt2q1w",
      "modelId": "model-alsetria-mox430-18hfn1-mt2q1w",
      "outdoorUnitId": "ou-alsetria-mox430-18hfn1-mt2q1w",
      "indoorUnitId": "iu-msabe-18hrfn1-mt2q1w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-12hfn1-mv5w-cca3u-12hrfn1-mc",
      "slug": "alsetria-mox230-12hfn1-mv5w-cca3u-12hrfn1-mc",
      "modelId": "model-alsetria-mox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-alsetria-mox230-12hfn1-mv5w",
      "indoorUnitId": "iu-cca3u-12hrfn1-mc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-12hfn1-bv0q1w-msabb-12hrfn1-bv0q1w",
      "slug": "alsetria-mox230-12hfn1-bv0q1w-msabb-12hrfn1-bv0q1w",
      "modelId": "model-alsetria-mox230-12hfn1-bv0q1w",
      "outdoorUnitId": "ou-alsetria-mox230-12hfn1-bv0q1w",
      "indoorUnitId": "iu-msabb-12hrfn1-bv0q1w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-18hfn1-mu0w-mfa2u-16hrfn1-mv0w",
      "slug": "alsetria-mox430-18hfn1-mu0w-mfa2u-16hrfn1-mv0w",
      "modelId": "model-alsetria-mox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mox430-18hfn1-mu0w",
      "indoorUnitId": "iu-mfa2u-16hrfn1-mv0w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-12hfn1-mw5w-cca3u-12hrfn1-mc",
      "slug": "alsetria-mox330-12hfn1-mw5w-cca3u-12hrfn1-mc",
      "modelId": "model-alsetria-mox330-12hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox330-12hfn1-mw5w",
      "indoorUnitId": "iu-cca3u-12hrfn1-mc",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-mw5w-mcbu-06hrfn1-mv0w",
      "slug": "alsetria-mox230-09hfn1-mw5w-mcbu-06hrfn1-mv0w",
      "modelId": "model-alsetria-mox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-mw5w",
      "indoorUnitId": "iu-mcbu-06hrfn1-mv0w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod33-24hfn1-mt0w-msepd-24hrfn1-mu0w",
      "slug": "alsetria-mod33-24hfn1-mt0w-msepd-24hrfn1-mu0w",
      "modelId": "model-alsetria-mod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mod33-24hfn1-mt0w",
      "indoorUnitId": "iu-msepd-24hrfn1-mu0w",
      "minHeatingTempC": -15,
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-mt0w-msag11a-09hrfn1-mt0w",
      "slug": "alsetria-mox230-09hfn1-mt0w-msag11a-09hrfn1-mt0w",
      "modelId": "model-alsetria-mox230-09hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-mt0w",
      "indoorUnitId": "iu-msag11a-09hrfn1-mt0w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-bs5w-msag11a-09hrfn1-bs5w",
      "slug": "alsetria-mox230-09hfn1-bs5w-msag11a-09hrfn1-bs5w",
      "modelId": "model-alsetria-mox230-09hfn1-bs5w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-bs5w",
      "indoorUnitId": "iu-msag11a-09hrfn1-bs5w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod33-24hfn1-mt0w-mcd1-24hrfn1-mt0wga",
      "slug": "alsetria-mod33-24hfn1-mt0w-mcd1-24hrfn1-mt0wga",
      "modelId": "model-alsetria-mod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mod33-24hfn1-mt0w",
      "indoorUnitId": "iu-mcd1-24hrfn1-mt0wga",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mu0w-msepd-24hrfn1-mu0w",
      "slug": "alsetria-mod30-24hfn1-mu0w-msepd-24hrfn1-mu0w",
      "modelId": "model-alsetria-mod30-24hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mu0w",
      "indoorUnitId": "iu-msepd-24hrfn1-mu0w",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-17hfn1-mt0w-msepc-18hrfn1-mu0w",
      "slug": "alsetria-mox430-17hfn1-mt0w-msepc-18hrfn1-mu0w",
      "modelId": "model-alsetria-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-msepc-18hrfn1-mu0w",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30u-30hfn1-mga-msagf-30hrfn1-mt0w",
      "slug": "alsetria-mod30u-30hfn1-mga-msagf-30hrfn1-mt0w",
      "modelId": "model-alsetria-mod30u-30hfn1-mga",
      "outdoorUnitId": "ou-alsetria-mod30u-30hfn1-mga",
      "indoorUnitId": "iu-msagf-30hrfn1-mt0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-m4ox630-36hfn1-m1x-iu-40940",
      "slug": "alsetria-m4ox630-36hfn1-m1x-iu-40940",
      "modelId": "model-alsetria-m4ox630-36hfn1-m1x",
      "outdoorUnitId": "ou-alsetria-m4ox630-36hfn1-m1x",
      "indoorUnitId": "iu-iu-40940",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-18hfn1-mu0w-cca3u-18hrfn1-mc",
      "slug": "alsetria-mox430-18hfn1-mu0w-cca3u-18hrfn1-mc",
      "modelId": "model-alsetria-mox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mox430-18hfn1-mu0w",
      "indoorUnitId": "iu-cca3u-18hrfn1-mc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mu0w-mcd1-24hrfn1-mt0wga",
      "slug": "alsetria-mod30-24hfn1-mu0w-mcd1-24hrfn1-mt0wga",
      "modelId": "model-alsetria-mod30-24hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mu0w",
      "indoorUnitId": "iu-mcd1-24hrfn1-mt0wga",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod31-23hfn1-mt2q1w-msabe-23hrfn1-mt2q1w",
      "slug": "alsetria-mod31-23hfn1-mt2q1w-msabe-23hrfn1-mt2q1w",
      "modelId": "model-alsetria-mod31-23hfn1-mt2q1w",
      "outdoorUnitId": "ou-alsetria-mod31-23hfn1-mt2q1w",
      "indoorUnitId": "iu-msabe-23hrfn1-mt2q1w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-09hfn1-my5w-cca3u-09hrfn1-mc",
      "slug": "alsetria-mox330-09hfn1-my5w-cca3u-09hrfn1-mc",
      "modelId": "model-alsetria-mox330-09hfn1-my5w",
      "outdoorUnitId": "ou-alsetria-mox330-09hfn1-my5w",
      "indoorUnitId": "iu-cca3u-09hrfn1-mc",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-09hfn1-my5w-mtiu-09hwfn1-m",
      "slug": "alsetria-mox330-09hfn1-my5w-mtiu-09hwfn1-m",
      "modelId": "model-alsetria-mox330-09hfn1-my5w",
      "outdoorUnitId": "ou-alsetria-mox330-09hfn1-my5w",
      "indoorUnitId": "iu-mtiu-09hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-17hfn1-mt0w-cca3u-18hrfn1-mc",
      "slug": "alsetria-mox430-17hfn1-mt0w-cca3u-18hrfn1-mc",
      "modelId": "model-alsetria-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-cca3u-18hrfn1-mc",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox130-09hfn1-bt0q1w-msag11a-09hrfn1-bt0q1w",
      "slug": "alsetria-mox130-09hfn1-bt0q1w-msag11a-09hrfn1-bt0q1w",
      "modelId": "model-alsetria-mox130-09hfn1-bt0q1w",
      "outdoorUnitId": "ou-alsetria-mox130-09hfn1-bt0q1w",
      "indoorUnitId": "iu-msag11a-09hrfn1-bt0q1w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-18hfn1-mu0w-mtiu-18hwfn1-m",
      "slug": "alsetria-mox430-18hfn1-mu0w-mtiu-18hwfn1-m",
      "modelId": "model-alsetria-mox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mox430-18hfn1-mu0w",
      "indoorUnitId": "iu-mtiu-18hwfn1-m",
      "minHeatingTempC": -15,
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-mw5w-cca3u-09hrfn1-mc",
      "slug": "alsetria-mox230-09hfn1-mw5w-cca3u-09hrfn1-mc",
      "modelId": "model-alsetria-mox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-mw5w",
      "indoorUnitId": "iu-cca3u-09hrfn1-mc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-17hfn1-mt0w-mcbu-18hrfn1-mu2w",
      "slug": "alsetria-mox430-17hfn1-mt0w-mcbu-18hrfn1-mu2w",
      "modelId": "model-alsetria-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-mcbu-18hrfn1-mu2w",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-18hfn1-ms0w-msag11c-18hrdn1-ms0w",
      "slug": "alsetria-mox330-18hfn1-ms0w-msag11c-18hrdn1-ms0w",
      "modelId": "model-alsetria-mox330-18hfn1-ms0w",
      "outdoorUnitId": "ou-alsetria-mox330-18hfn1-ms0w",
      "indoorUnitId": "iu-msag11c-18hrdn1-ms0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox330-12hfn1-mw5w-mtiu-12hwfn1-m",
      "slug": "alsetria-mox330-12hfn1-mw5w-mtiu-12hwfn1-m",
      "modelId": "model-alsetria-mox330-12hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox330-12hfn1-mw5w",
      "indoorUnitId": "iu-mtiu-12hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe30u-36hfn1-mga-mcd1-36hrfn1-mga",
      "slug": "alsetria-moe30u-36hfn1-mga-mcd1-36hrfn1-mga",
      "modelId": "model-alsetria-moe30u-36hfn1-mga",
      "outdoorUnitId": "ou-alsetria-moe30u-36hfn1-mga",
      "indoorUnitId": "iu-mcd1-36hrfn1-mga",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430u-18hfn1-m-mvbe-18hwfn1-mm3e",
      "slug": "alsetria-mox430u-18hfn1-m-mvbe-18hwfn1-mm3e",
      "modelId": "model-alsetria-mox430u-18hfn1-m",
      "outdoorUnitId": "ou-alsetria-mox430u-18hfn1-m",
      "indoorUnitId": "iu-mvbe-18hwfn1-mm3e",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mu0w-mtiu-24hwfn1-m",
      "slug": "alsetria-mod30-24hfn1-mu0w-mtiu-24hwfn1-m",
      "modelId": "model-alsetria-mod30-24hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mu0w",
      "indoorUnitId": "iu-mtiu-24hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-09hfn1-mw5w-mtiu-09hwfn1-m",
      "slug": "alsetria-mox230-09hfn1-mw5w-mtiu-09hwfn1-m",
      "modelId": "model-alsetria-mox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-alsetria-mox230-09hfn1-mw5w",
      "indoorUnitId": "iu-mtiu-09hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox230-12hfn1-mv5w-mtiu-12hwfn1-m",
      "slug": "alsetria-mox230-12hfn1-mv5w-mtiu-12hwfn1-m",
      "modelId": "model-alsetria-mox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-alsetria-mox230-12hfn1-mv5w",
      "indoorUnitId": "iu-mtiu-12hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod33-24hfn1-mt0w-mtiu-24hwfn1-m",
      "slug": "alsetria-mod33-24hfn1-mt0w-mtiu-24hwfn1-m",
      "modelId": "model-alsetria-mod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mod33-24hfn1-mt0w",
      "indoorUnitId": "iu-mtiu-24hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mu0w-mvc-23hwfn1-m",
      "slug": "alsetria-mod30-24hfn1-mu0w-mvc-23hwfn1-m",
      "modelId": "model-alsetria-mod30-24hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mu0w",
      "indoorUnitId": "iu-mvc-23hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod33-24hfn1-mt0w-mvc-23hwfn1-m",
      "slug": "alsetria-mod33-24hfn1-mt0w-mvc-23hwfn1-m",
      "modelId": "model-alsetria-mod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mod33-24hfn1-mt0w",
      "indoorUnitId": "iu-mvc-23hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-17hfn1-mt0w-mtiu-18hwfn1-m",
      "slug": "alsetria-mox430-17hfn1-mt0w-mtiu-18hwfn1-m",
      "modelId": "model-alsetria-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-mtiu-18hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430u-18hfn1-m-mvc-18hwfn1-m",
      "slug": "alsetria-mox430u-18hfn1-m-mvc-18hwfn1-m",
      "modelId": "model-alsetria-mox430u-18hfn1-m",
      "outdoorUnitId": "ou-alsetria-mox430u-18hfn1-m",
      "indoorUnitId": "iu-mvc-18hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-18hfn1-mu0w-mvc-18hwfn1-mwga",
      "slug": "alsetria-mox430-18hfn1-mu0w-mvc-18hwfn1-mwga",
      "modelId": "model-alsetria-mox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-alsetria-mox430-18hfn1-mu0w",
      "indoorUnitId": "iu-mvc-18hwfn1-mwga",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe31u-36hfn1-m-mvbe-36hwfn1-ml3e",
      "slug": "alsetria-moe31u-36hfn1-m-mvbe-36hwfn1-ml3e",
      "modelId": "model-alsetria-moe31u-36hfn1-m",
      "outdoorUnitId": "ou-alsetria-moe31u-36hfn1-m",
      "indoorUnitId": "iu-mvbe-36hwfn1-ml3e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430-17hfn1-mt0w-mvc-18hwfn1-mwga",
      "slug": "alsetria-mox430-17hfn1-mt0w-mvc-18hwfn1-mwga",
      "modelId": "model-alsetria-mox430-17hfn1-mt0w",
      "outdoorUnitId": "ou-alsetria-mox430-17hfn1-mt0w",
      "indoorUnitId": "iu-mvc-18hwfn1-mwga",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30u-30hfn1-mga-mvc-30hwfn1-mga",
      "slug": "alsetria-mod30u-30hfn1-mga-mvc-30hwfn1-mga",
      "modelId": "model-alsetria-mod30u-30hfn1-mga",
      "outdoorUnitId": "ou-alsetria-mod30u-30hfn1-mga",
      "indoorUnitId": "iu-mvc-30hwfn1-mga",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mw-mvbe-24hwfn1-mm3e",
      "slug": "alsetria-mod30-24hfn1-mw-mvbe-24hwfn1-mm3e",
      "modelId": "model-alsetria-mod30-24hfn1-mw",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mw",
      "indoorUnitId": "iu-mvbe-24hwfn1-mm3e",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mw-mvc-24hwfn1-m",
      "slug": "alsetria-mod30-24hfn1-mw-mvc-24hwfn1-m",
      "modelId": "model-alsetria-mod30-24hfn1-mw",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mw",
      "indoorUnitId": "iu-mvc-24hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox430u-24hfn1-mr0-mvc-24hwfn1-m",
      "slug": "alsetria-mox430u-24hfn1-mr0-mvc-24hwfn1-m",
      "modelId": "model-alsetria-mox430u-24hfn1-mr0",
      "outdoorUnitId": "ou-alsetria-mox430u-24hfn1-mr0",
      "indoorUnitId": "iu-mvc-24hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30u-30hfn1-mr0x-mvbe-30hwfn1-ml3e",
      "slug": "alsetria-mod30u-30hfn1-mr0x-mvbe-30hwfn1-ml3e",
      "modelId": "model-alsetria-mod30u-30hfn1-mr0x",
      "outdoorUnitId": "ou-alsetria-mod30u-30hfn1-mr0x",
      "indoorUnitId": "iu-mvbe-30hwfn1-ml3e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.9,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe30u-48hfn1-m-xga-mcd1-48hrfn1-mga",
      "slug": "alsetria-moe30u-48hfn1-m-xga-mcd1-48hrfn1-mga",
      "modelId": "model-alsetria-moe30u-48hfn1-m-xga",
      "outdoorUnitId": "ou-alsetria-moe30u-48hfn1-m-xga",
      "indoorUnitId": "iu-mcd1-48hrfn1-mga",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe30u-36hfn1-mga-mti-36hwfn1-m",
      "slug": "alsetria-moe30u-36hfn1-mga-mti-36hwfn1-m",
      "modelId": "model-alsetria-moe30u-36hfn1-mga",
      "outdoorUnitId": "ou-alsetria-moe30u-36hfn1-mga",
      "indoorUnitId": "iu-mti-36hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-20hfn1-mw-mvbm-24a18t3n1",
      "slug": "alsetria-mod30-20hfn1-mw-mvbm-24a18t3n1",
      "modelId": "model-alsetria-mod30-20hfn1-mw",
      "outdoorUnitId": "ou-alsetria-mod30-20hfn1-mw",
      "indoorUnitId": "iu-mvbm-24a18t3n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox630-36hfn1-m3x-mvc-36hwfn1-m",
      "slug": "alsetria-mox630-36hfn1-m3x-mvc-36hwfn1-m",
      "modelId": "model-alsetria-mox630-36hfn1-m3x",
      "outdoorUnitId": "ou-alsetria-mox630-36hfn1-m3x",
      "indoorUnitId": "iu-mvc-36hwfn1-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30u-30hfn1-mr0x-mvc-30hwfn1-m",
      "slug": "alsetria-mod30u-30hfn1-mr0x-mvc-30hwfn1-m",
      "modelId": "model-alsetria-mod30u-30hfn1-mr0x",
      "outdoorUnitId": "ou-alsetria-mod30u-30hfn1-mr0x",
      "indoorUnitId": "iu-mvc-30hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mod30-24hfn1-mw-mvbm-24a18t3n1",
      "slug": "alsetria-mod30-24hfn1-mw-mvbm-24a18t3n1",
      "modelId": "model-alsetria-mod30-24hfn1-mw",
      "outdoorUnitId": "ou-alsetria-mod30-24hfn1-mw",
      "indoorUnitId": "iu-mvbm-24a18t3n1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe31u-36hfn1-m-mvc-36hwfn1-m",
      "slug": "alsetria-moe31u-36hfn1-m-mvc-36hwfn1-m",
      "modelId": "model-alsetria-moe31u-36hfn1-m",
      "outdoorUnitId": "ou-alsetria-moe31u-36hfn1-m",
      "indoorUnitId": "iu-mvc-36hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe30u-48hfn1-m-x1-mvc-48hwfn1-m",
      "slug": "alsetria-moe30u-48hfn1-m-x1-mvc-48hwfn1-m",
      "modelId": "model-alsetria-moe30u-48hfn1-m-x1",
      "outdoorUnitId": "ou-alsetria-moe30u-48hfn1-m-x1",
      "indoorUnitId": "iu-mvc-48hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe31u-36hfn1-m-mvb-36b23t4n1",
      "slug": "alsetria-moe31u-36hfn1-m-mvb-36b23t4n1",
      "modelId": "model-alsetria-moe31u-36hfn1-m",
      "outdoorUnitId": "ou-alsetria-moe31u-36hfn1-m",
      "indoorUnitId": "iu-mvb-36b23t4n1",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe30u-55hfn1-m-mvc-60hwfn1-m",
      "slug": "alsetria-moe30u-55hfn1-m-mvc-60hwfn1-m",
      "modelId": "model-alsetria-moe30u-55hfn1-m",
      "outdoorUnitId": "ou-alsetria-moe30u-55hfn1-m",
      "indoorUnitId": "iu-mvc-60hwfn1-m",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox630-36hfn1-m3x-mvb-36b23t4n1",
      "slug": "alsetria-mox630-36hfn1-m3x-mvb-36b23t4n1",
      "modelId": "model-alsetria-mox630-36hfn1-m3x",
      "outdoorUnitId": "ou-alsetria-mox630-36hfn1-m3x",
      "indoorUnitId": "iu-mvb-36b23t4n1",
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
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-moe30u-45hfn1-m-mac-60hwdn1-mn0",
      "slug": "alsetria-moe30u-45hfn1-m-mac-60hwdn1-mn0",
      "modelId": "model-alsetria-moe30u-45hfn1-m",
      "outdoorUnitId": "ou-alsetria-moe30u-45hfn1-m",
      "indoorUnitId": "iu-mac-60hwdn1-mn0",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-alsetria-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-alsetria-mox630-36hfn1-m3x-mac-36hwdn1-mn0",
      "slug": "alsetria-mox630-36hfn1-m3x-mac-36hwdn1-mn0",
      "modelId": "model-alsetria-mox630-36hfn1-m3x",
      "outdoorUnitId": "ou-alsetria-mox630-36hfn1-m3x",
      "indoorUnitId": "iu-mac-36hwdn1-mn0",
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
          "sourceId": "src-alsetria-epa",
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
