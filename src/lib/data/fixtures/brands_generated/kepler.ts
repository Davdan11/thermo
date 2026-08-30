import type { BrandDataset } from "../../types";

export const brand_keplerDataset: BrandDataset = {
  "brand": {
    "id": "brand-kepler",
    "slug": "kepler",
    "name": "Kepler",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Kepler",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kepler-epa",
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
      "id": "series-kepler-idu-series",
      "slug": "kepler-idu-series",
      "name": "IDU Series",
      "brandId": "brand-kepler",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série IDU Series de Kepler",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kepler-odu-series",
      "slug": "kepler-odu-series",
      "name": "ODU Series",
      "brandId": "brand-kepler",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ODU Series de Kepler",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kepler-azpn-series",
      "slug": "kepler-azpn-series",
      "name": "AZPN Series",
      "brandId": "brand-kepler",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AZPN Series de Kepler",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kepler-odumox330-09hfn1my5w",
      "slug": "kepler-odumox330-09hfn1my5w",
      "name": "Kepler ODUMOX330-09HFN1MY5W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX330-09HFN1MY5W",
      "normalizedModelNumber": "odumox330-09hfn1my5w",
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
      "id": "model-kepler-odumox230-09hfn1mw5w",
      "slug": "kepler-odumox230-09hfn1mw5w",
      "name": "Kepler ODUMOX230-09HFN1MW5W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-09HFN1MW5W",
      "normalizedModelNumber": "odumox230-09hfn1mw5w",
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
      "id": "model-kepler-odumox330-12hfn1mw5w",
      "slug": "kepler-odumox330-12hfn1mw5w",
      "name": "Kepler ODUMOX330-12HFN1MW5W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX330-12HFN1MW5W",
      "normalizedModelNumber": "odumox330-12hfn1mw5w",
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
      "id": "model-kepler-odumox230-09hfn1-mw5w",
      "slug": "kepler-odumox230-09hfn1-mw5w",
      "name": "Kepler ODUMOX230-09HFN1-MW5W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-09HFN1-MW5W",
      "normalizedModelNumber": "odumox230-09hfn1-mw5w",
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
      "id": "model-kepler-odumox230-09hfn1-bw0w",
      "slug": "kepler-odumox230-09hfn1-bw0w",
      "name": "Kepler ODUMOX230-09HFN1-BW0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-09HFN1-BW0W",
      "normalizedModelNumber": "odumox230-09hfn1-bw0w",
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
      "id": "model-kepler-odumox230-12hfn1-mv5w",
      "slug": "kepler-odumox230-12hfn1-mv5w",
      "name": "Kepler ODUMOX230-12HFN1-MV5W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-12HFN1-MV5W",
      "normalizedModelNumber": "odumox230-12hfn1-mv5w",
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
      "id": "model-kepler-odum3oj-27hfn1-m",
      "slug": "kepler-odum3oj-27hfn1-m",
      "name": "Kepler ODUM3OJ-27HFN1-M",
      "seriesId": "series-kepler-odu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM3OJ-27HFN1-M",
      "normalizedModelNumber": "odum3oj-27hfn1-m",
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
      "id": "model-kepler-odum4og-36hfn1-m",
      "slug": "kepler-odum4og-36hfn1-m",
      "name": "Kepler ODUM4OG-36HFN1-M",
      "seriesId": "series-kepler-odu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM4OG-36HFN1-M",
      "normalizedModelNumber": "odum4og-36hfn1-m",
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
      "id": "model-kepler-odumox230-12hfn1-bw0w",
      "slug": "kepler-odumox230-12hfn1-bw0w",
      "name": "Kepler ODUMOX230-12HFN1-BW0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-12HFN1-BW0W",
      "normalizedModelNumber": "odumox230-12hfn1-bw0w",
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
      "id": "model-kepler-odumox430-18hfn1-mu0w",
      "slug": "kepler-odumox430-18hfn1-mu0w",
      "name": "Kepler ODUMOX430-18HFN1-MU0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX430-18HFN1-MU0W",
      "normalizedModelNumber": "odumox430-18hfn1-mu0w",
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
      "id": "model-kepler-odum5og-48hfn1-m",
      "slug": "kepler-odum5og-48hfn1-m",
      "name": "Kepler ODUM5OG-48HFN1-M",
      "seriesId": "series-kepler-odu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM5OG-48HFN1-M",
      "normalizedModelNumber": "odum5og-48hfn1-m",
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
      "id": "model-kepler-odum3ok-27hfn1-m",
      "slug": "kepler-odum3ok-27hfn1-m",
      "name": "Kepler ODUM3OK-27HFN1-M*",
      "seriesId": "series-kepler-odu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM3OK-27HFN1-M*",
      "normalizedModelNumber": "odum3ok-27hfn1-m*",
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
      "id": "model-kepler-odum2oa-18hfn1-m",
      "slug": "kepler-odum2oa-18hfn1-m",
      "name": "Kepler ODUM2OA-18HFN1-M",
      "seriesId": "series-kepler-odu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM2OA-18HFN1-M",
      "normalizedModelNumber": "odum2oa-18hfn1-m",
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
      "id": "model-kepler-odum4ox630-36hfn1-m1x",
      "slug": "kepler-odum4ox630-36hfn1-m1x",
      "name": "Kepler ODUM4OX630-36HFN1-M1X",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM4OX630-36HFN1-M1X",
      "normalizedModelNumber": "odum4ox630-36hfn1-m1x",
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
      "id": "model-kepler-odum4oi-36hfn1-m",
      "slug": "kepler-odum4oi-36hfn1-m",
      "name": "Kepler ODUM4OI-36HFN1-M",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM4OI-36HFN1-M",
      "normalizedModelNumber": "odum4oi-36hfn1-m",
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
      "id": "model-kepler-odumod33-24hfn1-mt0w",
      "slug": "kepler-odumod33-24hfn1-mt0w",
      "name": "Kepler ODUMOD33-24HFN1-MT0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOD33-24HFN1-MT0W",
      "normalizedModelNumber": "odumod33-24hfn1-mt0w",
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
      "id": "model-kepler-odum5oa-55hfn1-m-x",
      "slug": "kepler-odum5oa-55hfn1-m-x",
      "name": "Kepler ODUM5OA-55HFN1-M-[X]",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM5OA-55HFN1-M-[X]",
      "normalizedModelNumber": "odum5oa-55hfn1-m-[x]",
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
      "id": "model-kepler-odum2oi-18hfn1-m",
      "slug": "kepler-odum2oi-18hfn1-m",
      "name": "Kepler ODUM2OI-18HFN1-M",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM2OI-18HFN1-M",
      "normalizedModelNumber": "odum2oi-18hfn1-m",
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
      "id": "model-kepler-odum5og-48hfn1-m-x",
      "slug": "kepler-odum5og-48hfn1-m-x",
      "name": "Kepler ODUM5OG-48HFN1-M-[X]",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUM5OG-48HFN1-M-[X]",
      "normalizedModelNumber": "odum5og-48hfn1-m-[x]",
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
      "id": "model-kepler-odumox230-09hfn1-mt0w",
      "slug": "kepler-odumox230-09hfn1-mt0w",
      "name": "Kepler ODUMOX230-09HFN1-MT0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-09HFN1-MT0W",
      "normalizedModelNumber": "odumox230-09hfn1-mt0w",
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
      "id": "model-kepler-odumod30-24hfn1mu0w",
      "slug": "kepler-odumod30-24hfn1mu0w",
      "name": "Kepler ODUMOD30-24HFN1MU0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOD30-24HFN1MU0W",
      "normalizedModelNumber": "odumod30-24hfn1mu0w",
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
      "id": "model-kepler-odumox230-09hfn1-bs5w",
      "slug": "kepler-odumox230-09hfn1-bs5w",
      "name": "Kepler ODUMOX230-09HFN1-BS5W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX230-09HFN1-BS5W",
      "normalizedModelNumber": "odumox230-09hfn1-bs5w",
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
      "id": "model-kepler-odumox430-17hfn1mt0w",
      "slug": "kepler-odumox430-17hfn1mt0w",
      "name": "Kepler ODUMOX430-17HFN1MT0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX430-17HFN1MT0W",
      "normalizedModelNumber": "odumox430-17hfn1mt0w",
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
      "id": "model-kepler-odumod30-30hfn1-ms0w",
      "slug": "kepler-odumod30-30hfn1-ms0w",
      "name": "Kepler ODUMOD30-30HFN1-MS0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOD30-30HFN1-MS0W",
      "normalizedModelNumber": "odumod30-30hfn1-ms0w",
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
      "id": "model-kepler-odumod30-33hfn1msr0w",
      "slug": "kepler-odumod30-33hfn1msr0w",
      "name": "Kepler ODUMOD30-33HFN1MSR0W",
      "seriesId": "series-kepler-idu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOD30-33HFN1MSR0W",
      "normalizedModelNumber": "odumod30-33hfn1msr0w",
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
      "id": "model-kepler-odumox330-18hfn1-ms0w",
      "slug": "kepler-odumox330-18hfn1-ms0w",
      "name": "Kepler ODUMOX330-18HFN1-MS0W",
      "seriesId": "series-kepler-odu-series",
      "brandId": "brand-kepler",
      "modelNumber": "ODUMOX330-18HFN1-MS0W",
      "normalizedModelNumber": "odumox330-18hfn1-ms0w",
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
      "id": "model-kepler-azpn18wd",
      "slug": "kepler-azpn18wd",
      "name": "Kepler AZPN/18WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/18WD",
      "normalizedModelNumber": "azpn/18wd",
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
      "id": "model-kepler-azpn24wd",
      "slug": "kepler-azpn24wd",
      "name": "Kepler AZPN/24WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/24WD",
      "normalizedModelNumber": "azpn/24wd",
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
      "id": "model-kepler-azpns24rod",
      "slug": "kepler-azpns24rod",
      "name": "Kepler AZPNS/24ROD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPNS/24ROD",
      "normalizedModelNumber": "azpns/24rod",
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
      "id": "model-kepler-azpnb36wduid",
      "slug": "kepler-azpnb36wduid",
      "name": "Kepler AZPN/B36WDUID",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/B36WDUID",
      "normalizedModelNumber": "azpn/b36wduid",
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
      "id": "model-kepler-azpn30wd",
      "slug": "kepler-azpn30wd",
      "name": "Kepler AZPN/30WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/30WD",
      "normalizedModelNumber": "azpn/30wd",
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
      "id": "model-kepler-azpn36wd",
      "slug": "kepler-azpn36wd",
      "name": "Kepler AZPN/36WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/36WD",
      "normalizedModelNumber": "azpn/36wd",
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
      "id": "model-kepler-azpn48wd",
      "slug": "kepler-azpn48wd",
      "name": "Kepler AZPN/48WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/48WD",
      "normalizedModelNumber": "azpn/48wd",
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
      "id": "model-kepler-azpn36wac",
      "slug": "kepler-azpn36wac",
      "name": "Kepler AZPN/36WAC",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/36WAC",
      "normalizedModelNumber": "azpn/36wac",
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
      "id": "model-kepler-azpn60wd",
      "slug": "kepler-azpn60wd",
      "name": "Kepler AZPN/60WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/60WD",
      "normalizedModelNumber": "azpn/60wd",
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
      "id": "model-kepler-azpn45wd",
      "slug": "kepler-azpn45wd",
      "name": "Kepler AZPN/45WD",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/45WD",
      "normalizedModelNumber": "azpn/45wd",
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
    },
    {
      "id": "model-kepler-azpnc36wduid",
      "slug": "kepler-azpnc36wduid",
      "name": "Kepler AZPN/C36WDUID",
      "seriesId": "series-kepler-azpn-series",
      "brandId": "brand-kepler",
      "modelNumber": "AZPN/C36WDUID",
      "normalizedModelNumber": "azpn/c36wduid",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-kepler-odumox330-09hfn1my5w",
      "modelNumber": "ODUMOX330-09HFN1MY5W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-09hfn1mw5w",
      "modelNumber": "ODUMOX230-09HFN1MW5W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox330-12hfn1mw5w",
      "modelNumber": "ODUMOX330-12HFN1MW5W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-09hfn1-mw5w",
      "modelNumber": "ODUMOX230-09HFN1-MW5W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-09hfn1-bw0w",
      "modelNumber": "ODUMOX230-09HFN1-BW0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-12hfn1-mv5w",
      "modelNumber": "ODUMOX230-12HFN1-MV5W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum3oj-27hfn1-m",
      "modelNumber": "ODUM3OJ-27HFN1-M",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum4og-36hfn1-m",
      "modelNumber": "ODUM4OG-36HFN1-M",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-12hfn1-bw0w",
      "modelNumber": "ODUMOX230-12HFN1-BW0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox430-18hfn1-mu0w",
      "modelNumber": "ODUMOX430-18HFN1-MU0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum5og-48hfn1-m",
      "modelNumber": "ODUM5OG-48HFN1-M",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum3ok-27hfn1-m",
      "modelNumber": "ODUM3OK-27HFN1-M*",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum2oa-18hfn1-m",
      "modelNumber": "ODUM2OA-18HFN1-M",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum4ox630-36hfn1-m1x",
      "modelNumber": "ODUM4OX630-36HFN1-M1X",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum4oi-36hfn1-m",
      "modelNumber": "ODUM4OI-36HFN1-M",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumod33-24hfn1-mt0w",
      "modelNumber": "ODUMOD33-24HFN1-MT0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum5oa-55hfn1-m-x",
      "modelNumber": "ODUM5OA-55HFN1-M-[X]",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum2oi-18hfn1-m",
      "modelNumber": "ODUM2OI-18HFN1-M",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odum5og-48hfn1-m-x",
      "modelNumber": "ODUM5OG-48HFN1-M-[X]",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-09hfn1-mt0w",
      "modelNumber": "ODUMOX230-09HFN1-MT0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumod30-24hfn1mu0w",
      "modelNumber": "ODUMOD30-24HFN1MU0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox230-09hfn1-bs5w",
      "modelNumber": "ODUMOX230-09HFN1-BS5W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox430-17hfn1mt0w",
      "modelNumber": "ODUMOX430-17HFN1MT0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumod30-30hfn1-ms0w",
      "modelNumber": "ODUMOD30-30HFN1-MS0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumod30-33hfn1msr0w",
      "modelNumber": "ODUMOD30-33HFN1MSR0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-odumox330-18hfn1-ms0w",
      "modelNumber": "ODUMOX330-18HFN1-MS0W",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn18wd",
      "modelNumber": "AZPN/18WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn24wd",
      "modelNumber": "AZPN/24WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpns24rod",
      "modelNumber": "AZPNS/24ROD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpnb36wduid",
      "modelNumber": "AZPN/B36WDUID",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn30wd",
      "modelNumber": "AZPN/30WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn36wd",
      "modelNumber": "AZPN/36WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn48wd",
      "modelNumber": "AZPN/48WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn36wac",
      "modelNumber": "AZPN/36WAC",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn60wd",
      "modelNumber": "AZPN/60WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpn45wd",
      "modelNumber": "AZPN/45WD",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kepler-azpnc36wduid",
      "modelNumber": "AZPN/C36WDUID",
      "brandId": "brand-kepler",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-idumsepb-09hrfn1my5wga",
      "modelNumber": "IDUMSEPB-09HRFN1MY5W(GA)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepb-06hrfn1my5w",
      "modelNumber": "IDUMSEPB-06HRFN1MY5W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepb-12hrfn1mw5wga",
      "modelNumber": "IDUMSEPB-12HRFN1MW5W(GA)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepb-09hrfn1-my5wga",
      "modelNumber": "IDUMSEPB-09HRFN1-MY5W(GA)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepb-09hrfn1-bw0w",
      "modelNumber": "IDUMSEPB-09HRFN1-BW0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumfa2u-12hrfn1-mw5w",
      "modelNumber": "IDUMFA2U-12HRFN1-MW5W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepb-12hrfn1-mw5wga",
      "modelNumber": "IDUMSEPB-12HRFN1-MW5W(GA)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46867",
      "modelNumber": "IU-46867",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46870",
      "modelNumber": "IU-46870",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepb-12hrfn1-bw0w",
      "modelNumber": "IDUMSEPB-12HRFN1-BW0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepc-18hrfn1-mu0w",
      "modelNumber": "IDUMSEPC-18HRFN1-MU0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46874",
      "modelNumber": "IU-46874",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46869",
      "modelNumber": "IU-46869",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46865",
      "modelNumber": "IU-46865",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iducca3u-12hrfn1-mc",
      "modelNumber": "IDUCCA3U-12HRFN1-M(C)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46872",
      "modelNumber": "IU-46872",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46871",
      "modelNumber": "IU-46871",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepd-24hrfn1-mu0w",
      "modelNumber": "IDUMSEPD-24HRFN1-MU0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46873",
      "modelNumber": "IU-46873",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46866",
      "modelNumber": "IU-46866",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46875",
      "modelNumber": "IU-46875",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46868",
      "modelNumber": "IU-46868",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsaba-09hrfn1-mu5w",
      "modelNumber": "IDUMSABA-09HRFN1-MU5W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsag11a-09hrfn1-mt0w",
      "modelNumber": "IDUMSAG11A-09HRFN1-MT0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumcd1-24hrfn1-mt0wga",
      "modelNumber": "IDUMCD1-24HRFN1-MT0W(GA)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepd-24hrfn1mu0w",
      "modelNumber": "IDUMSEPD-24HRFN1MU0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsaba-09hrfn1-bt5w",
      "modelNumber": "IDUMSABA-09HRFN1-BT5W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepc-18hrfn1mu0w",
      "modelNumber": "IDUMSEPC-18HRFN1MU0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsag11a-09hrfn1-bs5w",
      "modelNumber": "IDUMSAG11A-09HRFN1-BS5W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsagf-30hrfn1-mt0w",
      "modelNumber": "IDUMSAGF-30HRFN1-MT0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iducca3u-18hrfn1-mc",
      "modelNumber": "IDUCCA3U-18HRFN1-M(C)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-iducca3u-09hrfn1-mc",
      "modelNumber": "IDUCCA3U-09HRFN1-M(C)",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumtiu-09hwfn1-m",
      "modelNumber": "IDUMTIU-09HWFN1-M",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumtiu-18hwfn1-m",
      "modelNumber": "IDUMTIU-18HWFN1-M",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumtiu-12hwfn1-m",
      "modelNumber": "IDUMTIU-12HWFN1-M",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsepd-33hrfn1msr0w",
      "modelNumber": "IDUMSEPD-33HRFN1MSR0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumsag11c-18hrdn1-ms0w",
      "modelNumber": "IDUMSAG11C-18HRDN1-MS0W",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-idumtiu-24hwfn1-m",
      "modelNumber": "IDUMTIU-24HWFN1-M",
      "brandId": "brand-kepler",
      "type": "wall-single"
    },
    {
      "id": "iu-azpn18wah",
      "modelNumber": "AZPN/18WAH",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpn24wah",
      "modelNumber": "AZPN/24WAH",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnb24wac-uc",
      "modelNumber": "AZPN/B24WAC-UC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnb24wac",
      "modelNumber": "AZPN/B24WAC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpn36wah",
      "modelNumber": "AZPN/36WAH",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpna24wacuid",
      "modelNumber": "AZPN/A24WACUID",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpna18wac",
      "modelNumber": "AZPN/A18WAC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpn30wah",
      "modelNumber": "AZPN/30WAH",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpna18wac-uc",
      "modelNumber": "AZPN/A18WAC-UC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpn48wah",
      "modelNumber": "AZPN/48WAH",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnc36wac",
      "modelNumber": "AZPN/C36WAC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnb36wac-uc",
      "modelNumber": "AZPN/B36WAC-UC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnc36wac-uc",
      "modelNumber": "AZPN/C36WAC-UC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnb36wac",
      "modelNumber": "AZPN/B36WAC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpn60wah",
      "modelNumber": "AZPN/60WAH",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnb36wacuid",
      "modelNumber": "AZPN/B36WACUID",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnd60wac",
      "modelNumber": "AZPN/D60WAC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    },
    {
      "id": "iu-azpnd60wac-uc",
      "modelNumber": "AZPN/D60WAC-UC",
      "brandId": "brand-kepler",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-kepler-odumox330-09hfn1my5w-idumsepb-09hrfn1my5wga",
      "slug": "kepler-odumox330-09hfn1my5w-idumsepb-09hrfn1my5wga",
      "modelId": "model-kepler-odumox330-09hfn1my5w",
      "outdoorUnitId": "ou-kepler-odumox330-09hfn1my5w",
      "indoorUnitId": "iu-idumsepb-09hrfn1my5wga",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1mw5w-idumsepb-06hrfn1my5w",
      "slug": "kepler-odumox230-09hfn1mw5w-idumsepb-06hrfn1my5w",
      "modelId": "model-kepler-odumox230-09hfn1mw5w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1mw5w",
      "indoorUnitId": "iu-idumsepb-06hrfn1my5w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-12hfn1mw5w-idumsepb-12hrfn1mw5wga",
      "slug": "kepler-odumox330-12hfn1mw5w-idumsepb-12hrfn1mw5wga",
      "modelId": "model-kepler-odumox330-12hfn1mw5w",
      "outdoorUnitId": "ou-kepler-odumox330-12hfn1mw5w",
      "indoorUnitId": "iu-idumsepb-12hrfn1mw5wga",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-mw5w-idumsepb-09hrfn1-my5wga",
      "slug": "kepler-odumox230-09hfn1-mw5w-idumsepb-09hrfn1-my5wga",
      "modelId": "model-kepler-odumox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-mw5w",
      "indoorUnitId": "iu-idumsepb-09hrfn1-my5wga",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-bw0w-idumsepb-09hrfn1-bw0w",
      "slug": "kepler-odumox230-09hfn1-bw0w-idumsepb-09hrfn1-bw0w",
      "modelId": "model-kepler-odumox230-09hfn1-bw0w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-bw0w",
      "indoorUnitId": "iu-idumsepb-09hrfn1-bw0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-12hfn1-mv5w-idumfa2u-12hrfn1-mw5w",
      "slug": "kepler-odumox230-12hfn1-mv5w-idumfa2u-12hrfn1-mw5w",
      "modelId": "model-kepler-odumox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-kepler-odumox230-12hfn1-mv5w",
      "indoorUnitId": "iu-idumfa2u-12hrfn1-mw5w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-12hfn1-mv5w-idumsepb-12hrfn1-mw5wga",
      "slug": "kepler-odumox230-12hfn1-mv5w-idumsepb-12hrfn1-mw5wga",
      "modelId": "model-kepler-odumox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-kepler-odumox230-12hfn1-mv5w",
      "indoorUnitId": "iu-idumsepb-12hrfn1-mw5wga",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum3oj-27hfn1-m-iu-46867",
      "slug": "kepler-odum3oj-27hfn1-m-iu-46867",
      "modelId": "model-kepler-odum3oj-27hfn1-m",
      "outdoorUnitId": "ou-kepler-odum3oj-27hfn1-m",
      "indoorUnitId": "iu-iu-46867",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-12hfn1mw5w-idumfa2u-12hrfn1-mw5w",
      "slug": "kepler-odumox330-12hfn1mw5w-idumfa2u-12hrfn1-mw5w",
      "modelId": "model-kepler-odumox330-12hfn1mw5w",
      "outdoorUnitId": "ou-kepler-odumox330-12hfn1mw5w",
      "indoorUnitId": "iu-idumfa2u-12hrfn1-mw5w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum4og-36hfn1-m-iu-46870",
      "slug": "kepler-odum4og-36hfn1-m-iu-46870",
      "modelId": "model-kepler-odum4og-36hfn1-m",
      "outdoorUnitId": "ou-kepler-odum4og-36hfn1-m",
      "indoorUnitId": "iu-iu-46870",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-12hfn1-bw0w-idumsepb-12hrfn1-bw0w",
      "slug": "kepler-odumox230-12hfn1-bw0w-idumsepb-12hrfn1-bw0w",
      "modelId": "model-kepler-odumox230-12hfn1-bw0w",
      "outdoorUnitId": "ou-kepler-odumox230-12hfn1-bw0w",
      "indoorUnitId": "iu-idumsepb-12hrfn1-bw0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox430-18hfn1-mu0w-idumsepc-18hrfn1-mu0w",
      "slug": "kepler-odumox430-18hfn1-mu0w-idumsepc-18hrfn1-mu0w",
      "modelId": "model-kepler-odumox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-kepler-odumox430-18hfn1-mu0w",
      "indoorUnitId": "iu-idumsepc-18hrfn1-mu0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum5og-48hfn1-m-iu-46874",
      "slug": "kepler-odum5og-48hfn1-m-iu-46874",
      "modelId": "model-kepler-odum5og-48hfn1-m",
      "outdoorUnitId": "ou-kepler-odum5og-48hfn1-m",
      "indoorUnitId": "iu-iu-46874",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum3ok-27hfn1-m-iu-46869",
      "slug": "kepler-odum3ok-27hfn1-m-iu-46869",
      "modelId": "model-kepler-odum3ok-27hfn1-m",
      "outdoorUnitId": "ou-kepler-odum3ok-27hfn1-m",
      "indoorUnitId": "iu-iu-46869",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum2oa-18hfn1-m-iu-46865",
      "slug": "kepler-odum2oa-18hfn1-m-iu-46865",
      "modelId": "model-kepler-odum2oa-18hfn1-m",
      "outdoorUnitId": "ou-kepler-odum2oa-18hfn1-m",
      "indoorUnitId": "iu-iu-46865",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-12hfn1-mv5w-iducca3u-12hrfn1-mc",
      "slug": "kepler-odumox230-12hfn1-mv5w-iducca3u-12hrfn1-mc",
      "modelId": "model-kepler-odumox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-kepler-odumox230-12hfn1-mv5w",
      "indoorUnitId": "iu-iducca3u-12hrfn1-mc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum4ox630-36hfn1-m1x-iu-46872",
      "slug": "kepler-odum4ox630-36hfn1-m1x-iu-46872",
      "modelId": "model-kepler-odum4ox630-36hfn1-m1x",
      "outdoorUnitId": "ou-kepler-odum4ox630-36hfn1-m1x",
      "indoorUnitId": "iu-iu-46872",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-12hfn1mw5w-iducca3u-12hrfn1-mc",
      "slug": "kepler-odumox330-12hfn1mw5w-iducca3u-12hrfn1-mc",
      "modelId": "model-kepler-odumox330-12hfn1mw5w",
      "outdoorUnitId": "ou-kepler-odumox330-12hfn1mw5w",
      "indoorUnitId": "iu-iducca3u-12hrfn1-mc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum4oi-36hfn1-m-iu-46871",
      "slug": "kepler-odum4oi-36hfn1-m-iu-46871",
      "modelId": "model-kepler-odum4oi-36hfn1-m",
      "outdoorUnitId": "ou-kepler-odum4oi-36hfn1-m",
      "indoorUnitId": "iu-iu-46871",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod33-24hfn1-mt0w-idumsepd-24hrfn1-mu0w",
      "slug": "kepler-odumod33-24hfn1-mt0w-idumsepd-24hrfn1-mu0w",
      "modelId": "model-kepler-odumod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-kepler-odumod33-24hfn1-mt0w",
      "indoorUnitId": "iu-idumsepd-24hrfn1-mu0w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum5oa-55hfn1-m-x-iu-46873",
      "slug": "kepler-odum5oa-55hfn1-m-x-iu-46873",
      "modelId": "model-kepler-odum5oa-55hfn1-m-x",
      "outdoorUnitId": "ou-kepler-odum5oa-55hfn1-m-x",
      "indoorUnitId": "iu-iu-46873",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum2oi-18hfn1-m-iu-46866",
      "slug": "kepler-odum2oi-18hfn1-m-iu-46866",
      "modelId": "model-kepler-odum2oi-18hfn1-m",
      "outdoorUnitId": "ou-kepler-odum2oi-18hfn1-m",
      "indoorUnitId": "iu-iu-46866",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum5og-48hfn1-m-x-iu-46875",
      "slug": "kepler-odum5og-48hfn1-m-x-iu-46875",
      "modelId": "model-kepler-odum5og-48hfn1-m-x",
      "outdoorUnitId": "ou-kepler-odum5og-48hfn1-m-x",
      "indoorUnitId": "iu-iu-46875",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odum3ok-27hfn1-m-iu-46868",
      "slug": "kepler-odum3ok-27hfn1-m-iu-46868",
      "modelId": "model-kepler-odum3ok-27hfn1-m",
      "outdoorUnitId": "ou-kepler-odum3ok-27hfn1-m",
      "indoorUnitId": "iu-iu-46868",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-mt0w-idumsaba-09hrfn1-mu5w",
      "slug": "kepler-odumox230-09hfn1-mt0w-idumsaba-09hrfn1-mu5w",
      "modelId": "model-kepler-odumox230-09hfn1-mt0w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-mt0w",
      "indoorUnitId": "iu-idumsaba-09hrfn1-mu5w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-mt0w-idumsag11a-09hrfn1-mt0w",
      "slug": "kepler-odumox230-09hfn1-mt0w-idumsag11a-09hrfn1-mt0w",
      "modelId": "model-kepler-odumox230-09hfn1-mt0w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-mt0w",
      "indoorUnitId": "iu-idumsag11a-09hrfn1-mt0w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod33-24hfn1-mt0w-idumcd1-24hrfn1-mt0wga",
      "slug": "kepler-odumod33-24hfn1-mt0w-idumcd1-24hrfn1-mt0wga",
      "modelId": "model-kepler-odumod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-kepler-odumod33-24hfn1-mt0w",
      "indoorUnitId": "iu-idumcd1-24hrfn1-mt0wga",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod30-24hfn1mu0w-idumsepd-24hrfn1mu0w",
      "slug": "kepler-odumod30-24hfn1mu0w-idumsepd-24hrfn1mu0w",
      "modelId": "model-kepler-odumod30-24hfn1mu0w",
      "outdoorUnitId": "ou-kepler-odumod30-24hfn1mu0w",
      "indoorUnitId": "iu-idumsepd-24hrfn1mu0w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-bs5w-idumsaba-09hrfn1-bt5w",
      "slug": "kepler-odumox230-09hfn1-bs5w-idumsaba-09hrfn1-bt5w",
      "modelId": "model-kepler-odumox230-09hfn1-bs5w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-bs5w",
      "indoorUnitId": "iu-idumsaba-09hrfn1-bt5w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox430-17hfn1mt0w-idumsepc-18hrfn1mu0w",
      "slug": "kepler-odumox430-17hfn1mt0w-idumsepc-18hrfn1mu0w",
      "modelId": "model-kepler-odumox430-17hfn1mt0w",
      "outdoorUnitId": "ou-kepler-odumox430-17hfn1mt0w",
      "indoorUnitId": "iu-idumsepc-18hrfn1mu0w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-bs5w-idumsag11a-09hrfn1-bs5w",
      "slug": "kepler-odumox230-09hfn1-bs5w-idumsag11a-09hrfn1-bs5w",
      "modelId": "model-kepler-odumox230-09hfn1-bs5w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-bs5w",
      "indoorUnitId": "iu-idumsag11a-09hrfn1-bs5w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod30-30hfn1-ms0w-idumsagf-30hrfn1-mt0w",
      "slug": "kepler-odumod30-30hfn1-ms0w-idumsagf-30hrfn1-mt0w",
      "modelId": "model-kepler-odumod30-30hfn1-ms0w",
      "outdoorUnitId": "ou-kepler-odumod30-30hfn1-ms0w",
      "indoorUnitId": "iu-idumsagf-30hrfn1-mt0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox430-18hfn1-mu0w-iducca3u-18hrfn1-mc",
      "slug": "kepler-odumox430-18hfn1-mu0w-iducca3u-18hrfn1-mc",
      "modelId": "model-kepler-odumox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-kepler-odumox430-18hfn1-mu0w",
      "indoorUnitId": "iu-iducca3u-18hrfn1-mc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-09hfn1my5w-iducca3u-09hrfn1-mc",
      "slug": "kepler-odumox330-09hfn1my5w-iducca3u-09hrfn1-mc",
      "modelId": "model-kepler-odumox330-09hfn1my5w",
      "outdoorUnitId": "ou-kepler-odumox330-09hfn1my5w",
      "indoorUnitId": "iu-iducca3u-09hrfn1-mc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod30-24hfn1mu0w-idumcd1-24hrfn1-mt0wga",
      "slug": "kepler-odumod30-24hfn1mu0w-idumcd1-24hrfn1-mt0wga",
      "modelId": "model-kepler-odumod30-24hfn1mu0w",
      "outdoorUnitId": "ou-kepler-odumod30-24hfn1mu0w",
      "indoorUnitId": "iu-idumcd1-24hrfn1-mt0wga",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-09hfn1my5w-idumtiu-09hwfn1-m",
      "slug": "kepler-odumox330-09hfn1my5w-idumtiu-09hwfn1-m",
      "modelId": "model-kepler-odumox330-09hfn1my5w",
      "outdoorUnitId": "ou-kepler-odumox330-09hfn1my5w",
      "indoorUnitId": "iu-idumtiu-09hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox430-17hfn1mt0w-iducca3u-18hrfn1-mc",
      "slug": "kepler-odumox430-17hfn1mt0w-iducca3u-18hrfn1-mc",
      "modelId": "model-kepler-odumox430-17hfn1mt0w",
      "outdoorUnitId": "ou-kepler-odumox430-17hfn1mt0w",
      "indoorUnitId": "iu-iducca3u-18hrfn1-mc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-mw5w-iducca3u-09hrfn1-mc",
      "slug": "kepler-odumox230-09hfn1-mw5w-iducca3u-09hrfn1-mc",
      "modelId": "model-kepler-odumox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-mw5w",
      "indoorUnitId": "iu-iducca3u-09hrfn1-mc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox430-18hfn1-mu0w-idumtiu-18hwfn1-m",
      "slug": "kepler-odumox430-18hfn1-mu0w-idumtiu-18hwfn1-m",
      "modelId": "model-kepler-odumox430-18hfn1-mu0w",
      "outdoorUnitId": "ou-kepler-odumox430-18hfn1-mu0w",
      "indoorUnitId": "iu-idumtiu-18hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-12hfn1mw5w-idumtiu-12hwfn1-m",
      "slug": "kepler-odumox330-12hfn1mw5w-idumtiu-12hwfn1-m",
      "modelId": "model-kepler-odumox330-12hfn1mw5w",
      "outdoorUnitId": "ou-kepler-odumox330-12hfn1mw5w",
      "indoorUnitId": "iu-idumtiu-12hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod30-33hfn1msr0w-idumsepd-33hrfn1msr0w",
      "slug": "kepler-odumod30-33hfn1msr0w-idumsepd-33hrfn1msr0w",
      "modelId": "model-kepler-odumod30-33hfn1msr0w",
      "outdoorUnitId": "ou-kepler-odumod30-33hfn1msr0w",
      "indoorUnitId": "iu-idumsepd-33hrfn1msr0w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox330-18hfn1-ms0w-idumsag11c-18hrdn1-ms0w",
      "slug": "kepler-odumox330-18hfn1-ms0w-idumsag11c-18hrdn1-ms0w",
      "modelId": "model-kepler-odumox330-18hfn1-ms0w",
      "outdoorUnitId": "ou-kepler-odumox330-18hfn1-ms0w",
      "indoorUnitId": "iu-idumsag11c-18hrdn1-ms0w",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-09hfn1-mw5w-idumtiu-09hwfn1-m",
      "slug": "kepler-odumox230-09hfn1-mw5w-idumtiu-09hwfn1-m",
      "modelId": "model-kepler-odumox230-09hfn1-mw5w",
      "outdoorUnitId": "ou-kepler-odumox230-09hfn1-mw5w",
      "indoorUnitId": "iu-idumtiu-09hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod30-24hfn1mu0w-idumtiu-24hwfn1-m",
      "slug": "kepler-odumod30-24hfn1mu0w-idumtiu-24hwfn1-m",
      "modelId": "model-kepler-odumod30-24hfn1mu0w",
      "outdoorUnitId": "ou-kepler-odumod30-24hfn1mu0w",
      "indoorUnitId": "iu-idumtiu-24hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox230-12hfn1-mv5w-idumtiu-12hwfn1-m",
      "slug": "kepler-odumox230-12hfn1-mv5w-idumtiu-12hwfn1-m",
      "modelId": "model-kepler-odumox230-12hfn1-mv5w",
      "outdoorUnitId": "ou-kepler-odumox230-12hfn1-mv5w",
      "indoorUnitId": "iu-idumtiu-12hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumod33-24hfn1-mt0w-idumtiu-24hwfn1-m",
      "slug": "kepler-odumod33-24hfn1-mt0w-idumtiu-24hwfn1-m",
      "modelId": "model-kepler-odumod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-kepler-odumod33-24hfn1-mt0w",
      "indoorUnitId": "iu-idumtiu-24hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-odumox430-17hfn1mt0w-idumtiu-18hwfn1-m",
      "slug": "kepler-odumox430-17hfn1mt0w-idumtiu-18hwfn1-m",
      "modelId": "model-kepler-odumox430-17hfn1mt0w",
      "outdoorUnitId": "ou-kepler-odumox430-17hfn1mt0w",
      "indoorUnitId": "iu-idumtiu-18hwfn1-m",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn18wd-azpn18wah",
      "slug": "kepler-azpn18wd-azpn18wah",
      "modelId": "model-kepler-azpn18wd",
      "outdoorUnitId": "ou-kepler-azpn18wd",
      "indoorUnitId": "iu-azpn18wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpn24wah",
      "slug": "kepler-azpn24wd-azpn24wah",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpn24wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpns24rod-azpn24wah",
      "slug": "kepler-azpns24rod-azpn24wah",
      "modelId": "model-kepler-azpns24rod",
      "outdoorUnitId": "ou-kepler-azpns24rod",
      "indoorUnitId": "iu-azpn24wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpnb24wac-uc",
      "slug": "kepler-azpn24wd-azpnb24wac-uc",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpnb24wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpnb24wac",
      "slug": "kepler-azpn24wd-azpnb24wac",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpnb24wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpnb36wduid-azpn36wah",
      "slug": "kepler-azpnb36wduid-azpn36wah",
      "modelId": "model-kepler-azpnb36wduid",
      "outdoorUnitId": "ou-kepler-azpnb36wduid",
      "indoorUnitId": "iu-azpn36wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpna24wacuid",
      "slug": "kepler-azpn24wd-azpna24wacuid",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpna24wacuid",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpna18wac",
      "slug": "kepler-azpn24wd-azpna18wac",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpna18wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn30wd-azpn30wah",
      "slug": "kepler-azpn30wd-azpn30wah",
      "modelId": "model-kepler-azpn30wd",
      "outdoorUnitId": "ou-kepler-azpn30wd",
      "indoorUnitId": "iu-azpn30wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn18wd-azpnb24wac",
      "slug": "kepler-azpn18wd-azpnb24wac",
      "modelId": "model-kepler-azpn18wd",
      "outdoorUnitId": "ou-kepler-azpn18wd",
      "indoorUnitId": "iu-azpnb24wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpna24wacuid",
      "slug": "kepler-azpn24wd-azpna24wacuid",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpna24wacuid",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn18wd-azpnb24wac-uc",
      "slug": "kepler-azpn18wd-azpnb24wac-uc",
      "modelId": "model-kepler-azpn18wd",
      "outdoorUnitId": "ou-kepler-azpn18wd",
      "indoorUnitId": "iu-azpnb24wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn24wd-azpna18wac-uc",
      "slug": "kepler-azpn24wd-azpna18wac-uc",
      "modelId": "model-kepler-azpn24wd",
      "outdoorUnitId": "ou-kepler-azpn24wd",
      "indoorUnitId": "iu-azpna18wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn36wd-azpn36wah",
      "slug": "kepler-azpn36wd-azpn36wah",
      "modelId": "model-kepler-azpn36wd",
      "outdoorUnitId": "ou-kepler-azpn36wd",
      "indoorUnitId": "iu-azpn36wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpns24rod-azpnb24wac-uc",
      "slug": "kepler-azpns24rod-azpnb24wac-uc",
      "modelId": "model-kepler-azpns24rod",
      "outdoorUnitId": "ou-kepler-azpns24rod",
      "indoorUnitId": "iu-azpnb24wac-uc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.7,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpns24rod-azpnb24wac",
      "slug": "kepler-azpns24rod-azpnb24wac",
      "modelId": "model-kepler-azpns24rod",
      "outdoorUnitId": "ou-kepler-azpns24rod",
      "indoorUnitId": "iu-azpnb24wac",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.7,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn48wd-azpn48wah",
      "slug": "kepler-azpn48wd-azpn48wah",
      "modelId": "model-kepler-azpn48wd",
      "outdoorUnitId": "ou-kepler-azpn48wd",
      "indoorUnitId": "iu-azpn48wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn30wd-azpnc36wac",
      "slug": "kepler-azpn30wd-azpnc36wac",
      "modelId": "model-kepler-azpn30wd",
      "outdoorUnitId": "ou-kepler-azpn30wd",
      "indoorUnitId": "iu-azpnc36wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn36wd-azpnb36wac-uc",
      "slug": "kepler-azpn36wd-azpnb36wac-uc",
      "modelId": "model-kepler-azpn36wd",
      "outdoorUnitId": "ou-kepler-azpn36wd",
      "indoorUnitId": "iu-azpnb36wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn30wd-azpnc36wac-uc",
      "slug": "kepler-azpn30wd-azpnc36wac-uc",
      "modelId": "model-kepler-azpn30wd",
      "outdoorUnitId": "ou-kepler-azpn30wd",
      "indoorUnitId": "iu-azpnc36wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn36wac-azpnb36wac",
      "slug": "kepler-azpn36wac-azpnb36wac",
      "modelId": "model-kepler-azpn36wac",
      "outdoorUnitId": "ou-kepler-azpn36wac",
      "indoorUnitId": "iu-azpnb36wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn60wd-azpn60wah",
      "slug": "kepler-azpn60wd-azpn60wah",
      "modelId": "model-kepler-azpn60wd",
      "outdoorUnitId": "ou-kepler-azpn60wd",
      "indoorUnitId": "iu-azpn60wah",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn30wd-azpnb36wac-uc",
      "slug": "kepler-azpn30wd-azpnb36wac-uc",
      "modelId": "model-kepler-azpn30wd",
      "outdoorUnitId": "ou-kepler-azpn30wd",
      "indoorUnitId": "iu-azpnb36wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn30wd-azpnb36wacuid",
      "slug": "kepler-azpn30wd-azpnb36wacuid",
      "modelId": "model-kepler-azpn30wd",
      "outdoorUnitId": "ou-kepler-azpn30wd",
      "indoorUnitId": "iu-azpnb36wacuid",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn45wd-azpnd60wac",
      "slug": "kepler-azpn45wd-azpnd60wac",
      "modelId": "model-kepler-azpn45wd",
      "outdoorUnitId": "ou-kepler-azpn45wd",
      "indoorUnitId": "iu-azpnd60wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpnb36wduid-azpnc36wac-uc",
      "slug": "kepler-azpnb36wduid-azpnc36wac-uc",
      "modelId": "model-kepler-azpnb36wduid",
      "outdoorUnitId": "ou-kepler-azpnb36wduid",
      "indoorUnitId": "iu-azpnc36wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn45wd-azpnd60wac-uc",
      "slug": "kepler-azpn45wd-azpnd60wac-uc",
      "modelId": "model-kepler-azpn45wd",
      "outdoorUnitId": "ou-kepler-azpn45wd",
      "indoorUnitId": "iu-azpnd60wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn36wd-azpnc36wac",
      "slug": "kepler-azpn36wd-azpnc36wac",
      "modelId": "model-kepler-azpn36wd",
      "outdoorUnitId": "ou-kepler-azpn36wd",
      "indoorUnitId": "iu-azpnc36wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpnb36wduid-azpnb36wac-uc",
      "slug": "kepler-azpnb36wduid-azpnb36wac-uc",
      "modelId": "model-kepler-azpnb36wduid",
      "outdoorUnitId": "ou-kepler-azpnb36wduid",
      "indoorUnitId": "iu-azpnb36wac-uc",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpnb36wduid-azpnc36wac",
      "slug": "kepler-azpnb36wduid-azpnc36wac",
      "modelId": "model-kepler-azpnb36wduid",
      "outdoorUnitId": "ou-kepler-azpnb36wduid",
      "indoorUnitId": "iu-azpnc36wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpnb36wduid-azpnb36wacuid",
      "slug": "kepler-azpnb36wduid-azpnb36wacuid",
      "modelId": "model-kepler-azpnb36wduid",
      "outdoorUnitId": "ou-kepler-azpnb36wduid",
      "indoorUnitId": "iu-azpnb36wacuid",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpnc36wduid-azpnc36wac",
      "slug": "kepler-azpnc36wduid-azpnc36wac",
      "modelId": "model-kepler-azpnc36wduid",
      "outdoorUnitId": "ou-kepler-azpnc36wduid",
      "indoorUnitId": "iu-azpnc36wac",
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
          "sourceId": "src-kepler-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kepler-azpn36wd-azpnc36wac-uc",
      "slug": "kepler-azpn36wd-azpnc36wac-uc",
      "modelId": "model-kepler-azpn36wd",
      "outdoorUnitId": "ou-kepler-azpn36wd",
      "indoorUnitId": "iu-azpnc36wac-uc",
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
          "sourceId": "src-kepler-epa",
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
