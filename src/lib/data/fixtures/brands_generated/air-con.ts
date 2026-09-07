import type { BrandDataset } from "../../types";

export const brand_air_conDataset: BrandDataset = {
  "brand": {
    "id": "brand-air-con",
    "slug": "air-con",
    "name": "AIR-CON",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AIR-CON",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-air-con-epa",
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
      "id": "series-air-con-blizzard",
      "slug": "air-con-blizzard",
      "name": "Blizzard",
      "brandId": "brand-air-con",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Blizzard de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-blizzard.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-con-blue-series-4",
      "slug": "air-con-blue-series-4",
      "name": "Blue Series 4",
      "brandId": "brand-air-con",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Blue Series 4 de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-blue-series-4.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-con-blue-series-iii",
      "slug": "air-con-blue-series-iii",
      "name": "Blue Series III",
      "brandId": "brand-air-con",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Blue Series III de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-blue-series-iii.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-con-multi-split",
      "slug": "air-con-multi-split",
      "name": "Multi Split",
      "brandId": "brand-air-con",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi Split de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-multi-split.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-con-sky-pro",
      "slug": "air-con-sky-pro",
      "name": "Sky Pro",
      "brandId": "brand-air-con",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Sky Pro de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-sky-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-con-g-series",
      "slug": "air-con-g-series",
      "name": "G Series",
      "brandId": "brand-air-con",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série G Series de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-g-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-con-sd-premium",
      "slug": "air-con-sd-premium",
      "name": "SD Premium",
      "brandId": "brand-air-con",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SD Premium de AIR-CON",
      "imageUrl": "/images/series/air-con-air-con-sd-premium.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-air-con-abzci4h4s09",
      "slug": "air-con-abzci4h4s09",
      "name": "AIR-CON ABZCI4H4S09",
      "seriesId": "series-air-con-blizzard",
      "brandId": "brand-air-con",
      "modelNumber": "ABZCI4H4S09",
      "normalizedModelNumber": "abzci4h4s09",
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
      "id": "model-air-con-abzci4h4s12",
      "slug": "air-con-abzci4h4s12",
      "name": "AIR-CON ABZCI4H4S12",
      "seriesId": "series-air-con-blizzard",
      "brandId": "brand-air-con",
      "modelNumber": "ABZCI4H4S12",
      "normalizedModelNumber": "abzci4h4s12",
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
      "id": "model-air-con-alpci4h4e09",
      "slug": "air-con-alpci4h4e09",
      "name": "AIR-CON ALPCI4H4E09",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ALPCI4H4E09",
      "normalizedModelNumber": "alpci4h4e09",
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
      "id": "model-air-con-alpci4h4e12",
      "slug": "air-con-alpci4h4e12",
      "name": "AIR-CON ALPCI4H4E12",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ALPCI4H4E12",
      "normalizedModelNumber": "alpci4h4e12",
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
      "id": "model-air-con-asxci4h4e12",
      "slug": "air-con-asxci4h4e12",
      "name": "AIR-CON ASXCI4H4E12",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ASXCI4H4E12",
      "normalizedModelNumber": "asxci4h4e12",
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
      "id": "model-air-con-alpci4h1e09",
      "slug": "air-con-alpci4h1e09",
      "name": "AIR-CON ALPCI4H1E09",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ALPCI4H1E09",
      "normalizedModelNumber": "alpci4h1e09",
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
      "id": "model-air-con-abxci4h4s18",
      "slug": "air-con-abxci4h4s18",
      "name": "AIR-CON ABXCI4H4S18",
      "seriesId": "series-air-con-blue-series-iii",
      "brandId": "brand-air-con",
      "modelNumber": "ABXCI4H4S18",
      "normalizedModelNumber": "abxci4h4s18",
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
      "id": "model-air-con-alpci4h4e18",
      "slug": "air-con-alpci4h4e18",
      "name": "AIR-CON ALPCI4H4E18",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ALPCI4H4E18",
      "normalizedModelNumber": "alpci4h4e18",
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
      "id": "model-air-con-abxci4h4s09",
      "slug": "air-con-abxci4h4s09",
      "name": "AIR-CON ABXCI4H4S09",
      "seriesId": "series-air-con-blue-series-iii",
      "brandId": "brand-air-con",
      "modelNumber": "ABXCI4H4S09",
      "normalizedModelNumber": "abxci4h4s09",
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
      "id": "model-air-con-amsci4h4s24",
      "slug": "air-con-amsci4h4s24",
      "name": "AIR-CON AMSCI4H4S24",
      "seriesId": "series-air-con-multi-split",
      "brandId": "brand-air-con",
      "modelNumber": "AMSCI4H4S24",
      "normalizedModelNumber": "amsci4h4s24",
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
      "id": "model-air-con-asxci4h4e18",
      "slug": "air-con-asxci4h4e18",
      "name": "AIR-CON ASXCI4H4E18",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ASXCI4H4E18",
      "normalizedModelNumber": "asxci4h4e18",
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
      "id": "model-air-con-alpci4h1e12",
      "slug": "air-con-alpci4h1e12",
      "name": "AIR-CON ALPCI4H1E12",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ALPCI4H1E12",
      "normalizedModelNumber": "alpci4h1e12",
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
      "id": "model-air-con-amsci4h4s36",
      "slug": "air-con-amsci4h4s36",
      "name": "AIR-CON AMSCI4H4S36",
      "seriesId": "series-air-con-multi-split",
      "brandId": "brand-air-con",
      "modelNumber": "AMSCI4H4S36",
      "normalizedModelNumber": "amsci4h4s36",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-air-con-amsci4h4s18",
      "slug": "air-con-amsci4h4s18",
      "name": "AIR-CON AMSCI4H4S18",
      "seriesId": "series-air-con-multi-split",
      "brandId": "brand-air-con",
      "modelNumber": "AMSCI4H4S18",
      "normalizedModelNumber": "amsci4h4s18",
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
      "id": "model-air-con-abxci4h4s24",
      "slug": "air-con-abxci4h4s24",
      "name": "AIR-CON ABXCI4H4S24",
      "seriesId": "series-air-con-blue-series-iii",
      "brandId": "brand-air-con",
      "modelNumber": "ABXCI4H4S24",
      "normalizedModelNumber": "abxci4h4s24",
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
      "id": "model-air-con-aslci4h4s18",
      "slug": "air-con-aslci4h4s18",
      "name": "AIR-CON ASLCI4H4S18",
      "seriesId": "series-air-con-sky-pro",
      "brandId": "brand-air-con",
      "modelNumber": "ASLCI4H4S18",
      "normalizedModelNumber": "aslci4h4s18",
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
      "id": "model-air-con-aslci4h4s12",
      "slug": "air-con-aslci4h4s12",
      "name": "AIR-CON ASLCI4H4S12",
      "seriesId": "series-air-con-sky-pro",
      "brandId": "brand-air-con",
      "modelNumber": "ASLCI4H4S12",
      "normalizedModelNumber": "aslci4h4s12",
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
      "id": "model-air-con-aslci4h4s09",
      "slug": "air-con-aslci4h4s09",
      "name": "AIR-CON ASLCI4H4S09",
      "seriesId": "series-air-con-sky-pro",
      "brandId": "brand-air-con",
      "modelNumber": "ASLCI4H4S09",
      "normalizedModelNumber": "aslci4h4s09",
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
      "id": "model-air-con-alpci4h4e24",
      "slug": "air-con-alpci4h4e24",
      "name": "AIR-CON ALPCI4H4E24",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ALPCI4H4E24",
      "normalizedModelNumber": "alpci4h4e24",
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
      "id": "model-air-con-amsci4h4s42",
      "slug": "air-con-amsci4h4s42",
      "name": "AIR-CON AMSCI4H4S42",
      "seriesId": "series-air-con-multi-split",
      "brandId": "brand-air-con",
      "modelNumber": "AMSCI4H4S42",
      "normalizedModelNumber": "amsci4h4s42",
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
      "id": "model-air-con-asxci4h4e24",
      "slug": "air-con-asxci4h4e24",
      "name": "AIR-CON ASXCI4H4E24",
      "seriesId": "series-air-con-blue-series-4",
      "brandId": "brand-air-con",
      "modelNumber": "ASXCI4H4E24",
      "normalizedModelNumber": "asxci4h4e24",
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
      "id": "model-air-con-aasdci7h4r60",
      "slug": "air-con-aasdci7h4r60",
      "name": "AIR-CON AASDCI7H4R60",
      "seriesId": "series-air-con-g-series",
      "brandId": "brand-air-con",
      "modelNumber": "AASDCI7H4R60",
      "normalizedModelNumber": "aasdci7h4r60",
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
      "id": "model-air-con-aasdci7h4r36",
      "slug": "air-con-aasdci7h4r36",
      "name": "AIR-CON AASDCI7H4R36",
      "seriesId": "series-air-con-g-series",
      "brandId": "brand-air-con",
      "modelNumber": "AASDCI7H4R36",
      "normalizedModelNumber": "aasdci7h4r36",
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
      "id": "model-air-con-aasdci7h4r30",
      "slug": "air-con-aasdci7h4r30",
      "name": "AIR-CON AASDCI7H4R30",
      "seriesId": "series-air-con-g-series",
      "brandId": "brand-air-con",
      "modelNumber": "AASDCI7H4R30",
      "normalizedModelNumber": "aasdci7h4r30",
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
      "id": "model-air-con-aslci4h4s24",
      "slug": "air-con-aslci4h4s24",
      "name": "AIR-CON ASLCI4H4S24",
      "seriesId": "series-air-con-sky-pro",
      "brandId": "brand-air-con",
      "modelNumber": "ASLCI4H4S24",
      "normalizedModelNumber": "aslci4h4s24",
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
      "id": "model-air-con-asddi4h4s36",
      "slug": "air-con-asddi4h4s36",
      "name": "AIR-CON ASDDI4H4S36",
      "seriesId": "series-air-con-sd-premium",
      "brandId": "brand-air-con",
      "modelNumber": "ASDDI4H4S36",
      "normalizedModelNumber": "asddi4h4s36",
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
      "id": "model-air-con-asddi4h4s48",
      "slug": "air-con-asddi4h4s48",
      "name": "AIR-CON ASDDI4H4S48",
      "seriesId": "series-air-con-sd-premium",
      "brandId": "brand-air-con",
      "modelNumber": "ASDDI4H4S48",
      "normalizedModelNumber": "asddi4h4s48",
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
      "id": "model-air-con-asddi4h4s24",
      "slug": "air-con-asddi4h4s24",
      "name": "AIR-CON ASDDI4H4S24",
      "seriesId": "series-air-con-sd-premium",
      "brandId": "brand-air-con",
      "modelNumber": "ASDDI4H4S24",
      "normalizedModelNumber": "asddi4h4s24",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
      "zones": 1,
      "systemType": "central-ducted",
      "categories": [
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
      "id": "ou-air-con-abzci4h4s09",
      "modelNumber": "ABZCI4H4S09",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-abzci4h4s12",
      "modelNumber": "ABZCI4H4S12",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-alpci4h4e09",
      "modelNumber": "ALPCI4H4E09",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-alpci4h4e12",
      "modelNumber": "ALPCI4H4E12",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-asxci4h4e12",
      "modelNumber": "ASXCI4H4E12",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-alpci4h1e09",
      "modelNumber": "ALPCI4H1E09",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-abxci4h4s18",
      "modelNumber": "ABXCI4H4S18",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-alpci4h4e18",
      "modelNumber": "ALPCI4H4E18",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-abxci4h4s09",
      "modelNumber": "ABXCI4H4S09",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-amsci4h4s24",
      "modelNumber": "AMSCI4H4S24",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-asxci4h4e18",
      "modelNumber": "ASXCI4H4E18",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-alpci4h1e12",
      "modelNumber": "ALPCI4H1E12",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-amsci4h4s36",
      "modelNumber": "AMSCI4H4S36",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-amsci4h4s18",
      "modelNumber": "AMSCI4H4S18",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-abxci4h4s24",
      "modelNumber": "ABXCI4H4S24",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-aslci4h4s18",
      "modelNumber": "ASLCI4H4S18",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-aslci4h4s12",
      "modelNumber": "ASLCI4H4S12",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-aslci4h4s09",
      "modelNumber": "ASLCI4H4S09",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-alpci4h4e24",
      "modelNumber": "ALPCI4H4E24",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-amsci4h4s42",
      "modelNumber": "AMSCI4H4S42",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-asxci4h4e24",
      "modelNumber": "ASXCI4H4E24",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-aasdci7h4r60",
      "modelNumber": "AASDCI7H4R60",
      "brandId": "brand-air-con",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-con-aasdci7h4r36",
      "modelNumber": "AASDCI7H4R36",
      "brandId": "brand-air-con",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-con-aasdci7h4r30",
      "modelNumber": "AASDCI7H4R30",
      "brandId": "brand-air-con",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-con-aslci4h4s24",
      "modelNumber": "ASLCI4H4S24",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-asddi4h4s36",
      "modelNumber": "ASDDI4H4S36",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-asddi4h4s48",
      "modelNumber": "ASDDI4H4S48",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-air-con-asddi4h4s24",
      "modelNumber": "ASDDI4H4S24",
      "brandId": "brand-air-con",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-abzem4h4s09",
      "modelNumber": "ABZEM4H4S09",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-abzem4h4s12",
      "modelNumber": "ABZEM4H4S12",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-alpem4h4e09",
      "modelNumber": "ALPEM4H4E09",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-alpem4h4e12",
      "modelNumber": "ALPEM4H4E12",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-asxem4h4e12",
      "modelNumber": "ASXEM4H4E12",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-alpem4h1e09",
      "modelNumber": "ALPEM4H1E09",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-abxem4h4s18",
      "modelNumber": "ABXEM4H4S18",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-alpem4h4e18",
      "modelNumber": "ALPEM4H4E18",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-abxem4h4s09",
      "modelNumber": "ABXEM4H4S09",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40529",
      "modelNumber": "IU-40529",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-asxem4h4e18",
      "modelNumber": "ASXEM4H4E18",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-alpem4h1e12",
      "modelNumber": "ALPEM4H1E12",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40530",
      "modelNumber": "IU-40530",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40528",
      "modelNumber": "IU-40528",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-abxem4h4s24",
      "modelNumber": "ABXEM4H4S24",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-aslec4h4s18",
      "modelNumber": "ASLEC4H4S18",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-aslec4h4s12",
      "modelNumber": "ASLEC4H4S12",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-aslec4h4s09",
      "modelNumber": "ASLEC4H4S09",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-alpem4h4e24",
      "modelNumber": "ALPEM4H4E24",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40531",
      "modelNumber": "IU-40531",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-asxem4h4e24",
      "modelNumber": "ASXEM4H4E24",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-aasdem7h4r48-s",
      "modelNumber": "AASDEM7H4R48-S",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-aasdem7h4r60-s",
      "modelNumber": "AASDEM7H4R60-S",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-aasdem7h4r36-s",
      "modelNumber": "AASDEM7H4R36-S",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-aasdem7h4r24-s",
      "modelNumber": "AASDEM7H4R24-S",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-aslec4h4s24",
      "modelNumber": "ASLEC4H4S24",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-aasdem7h4r30-s",
      "modelNumber": "AASDEM7H4R30-S",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-asdvi4h4s36",
      "modelNumber": "ASDVI4H4S36",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-aslek4h4s09",
      "modelNumber": "ASLEK4H4S09",
      "brandId": "brand-air-con",
      "type": "wall-single"
    },
    {
      "id": "iu-asdvi4h4s48",
      "modelNumber": "ASDVI4H4S48",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    },
    {
      "id": "iu-asdvi4h4s24",
      "modelNumber": "ASDVI4H4S24",
      "brandId": "brand-air-con",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-air-con-abzci4h4s09-abzem4h4s09",
      "slug": "air-con-abzci4h4s09-abzem4h4s09",
      "modelId": "model-air-con-abzci4h4s09",
      "outdoorUnitId": "ou-air-con-abzci4h4s09",
      "indoorUnitId": "iu-abzem4h4s09",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-abzci4h4s12-abzem4h4s12",
      "slug": "air-con-abzci4h4s12-abzem4h4s12",
      "modelId": "model-air-con-abzci4h4s12",
      "outdoorUnitId": "ou-air-con-abzci4h4s12",
      "indoorUnitId": "iu-abzem4h4s12",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-alpci4h4e09-alpem4h4e09",
      "slug": "air-con-alpci4h4e09-alpem4h4e09",
      "modelId": "model-air-con-alpci4h4e09",
      "outdoorUnitId": "ou-air-con-alpci4h4e09",
      "indoorUnitId": "iu-alpem4h4e09",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-alpci4h4e12-alpem4h4e12",
      "slug": "air-con-alpci4h4e12-alpem4h4e12",
      "modelId": "model-air-con-alpci4h4e12",
      "outdoorUnitId": "ou-air-con-alpci4h4e12",
      "indoorUnitId": "iu-alpem4h4e12",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-asxci4h4e12-asxem4h4e12",
      "slug": "air-con-asxci4h4e12-asxem4h4e12",
      "modelId": "model-air-con-asxci4h4e12",
      "outdoorUnitId": "ou-air-con-asxci4h4e12",
      "indoorUnitId": "iu-asxem4h4e12",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-alpci4h1e09-alpem4h1e09",
      "slug": "air-con-alpci4h1e09-alpem4h1e09",
      "modelId": "model-air-con-alpci4h1e09",
      "outdoorUnitId": "ou-air-con-alpci4h1e09",
      "indoorUnitId": "iu-alpem4h1e09",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-abxci4h4s18-abxem4h4s18",
      "slug": "air-con-abxci4h4s18-abxem4h4s18",
      "modelId": "model-air-con-abxci4h4s18",
      "outdoorUnitId": "ou-air-con-abxci4h4s18",
      "indoorUnitId": "iu-abxem4h4s18",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-alpci4h4e18-alpem4h4e18",
      "slug": "air-con-alpci4h4e18-alpem4h4e18",
      "modelId": "model-air-con-alpci4h4e18",
      "outdoorUnitId": "ou-air-con-alpci4h4e18",
      "indoorUnitId": "iu-alpem4h4e18",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-abxci4h4s09-abxem4h4s09",
      "slug": "air-con-abxci4h4s09-abxem4h4s09",
      "modelId": "model-air-con-abxci4h4s09",
      "outdoorUnitId": "ou-air-con-abxci4h4s09",
      "indoorUnitId": "iu-abxem4h4s09",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-amsci4h4s24-iu-40529",
      "slug": "air-con-amsci4h4s24-iu-40529",
      "modelId": "model-air-con-amsci4h4s24",
      "outdoorUnitId": "ou-air-con-amsci4h4s24",
      "indoorUnitId": "iu-iu-40529",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.05,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-asxci4h4e18-asxem4h4e18",
      "slug": "air-con-asxci4h4e18-asxem4h4e18",
      "modelId": "model-air-con-asxci4h4e18",
      "outdoorUnitId": "ou-air-con-asxci4h4e18",
      "indoorUnitId": "iu-asxem4h4e18",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-alpci4h1e12-alpem4h1e12",
      "slug": "air-con-alpci4h1e12-alpem4h1e12",
      "modelId": "model-air-con-alpci4h1e12",
      "outdoorUnitId": "ou-air-con-alpci4h1e12",
      "indoorUnitId": "iu-alpem4h1e12",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-amsci4h4s36-iu-40530",
      "slug": "air-con-amsci4h4s36-iu-40530",
      "modelId": "model-air-con-amsci4h4s36",
      "outdoorUnitId": "ou-air-con-amsci4h4s36",
      "indoorUnitId": "iu-iu-40530",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-amsci4h4s18-iu-40528",
      "slug": "air-con-amsci4h4s18-iu-40528",
      "modelId": "model-air-con-amsci4h4s18",
      "outdoorUnitId": "ou-air-con-amsci4h4s18",
      "indoorUnitId": "iu-iu-40528",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-abxci4h4s24-abxem4h4s24",
      "slug": "air-con-abxci4h4s24-abxem4h4s24",
      "modelId": "model-air-con-abxci4h4s24",
      "outdoorUnitId": "ou-air-con-abxci4h4s24",
      "indoorUnitId": "iu-abxem4h4s24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aslci4h4s18-aslec4h4s18",
      "slug": "air-con-aslci4h4s18-aslec4h4s18",
      "modelId": "model-air-con-aslci4h4s18",
      "outdoorUnitId": "ou-air-con-aslci4h4s18",
      "indoorUnitId": "iu-aslec4h4s18",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aslci4h4s12-aslec4h4s12",
      "slug": "air-con-aslci4h4s12-aslec4h4s12",
      "modelId": "model-air-con-aslci4h4s12",
      "outdoorUnitId": "ou-air-con-aslci4h4s12",
      "indoorUnitId": "iu-aslec4h4s12",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aslci4h4s09-aslec4h4s09",
      "slug": "air-con-aslci4h4s09-aslec4h4s09",
      "modelId": "model-air-con-aslci4h4s09",
      "outdoorUnitId": "ou-air-con-aslci4h4s09",
      "indoorUnitId": "iu-aslec4h4s09",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-alpci4h4e24-alpem4h4e24",
      "slug": "air-con-alpci4h4e24-alpem4h4e24",
      "modelId": "model-air-con-alpci4h4e24",
      "outdoorUnitId": "ou-air-con-alpci4h4e24",
      "indoorUnitId": "iu-alpem4h4e24",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-amsci4h4s42-iu-40531",
      "slug": "air-con-amsci4h4s42-iu-40531",
      "modelId": "model-air-con-amsci4h4s42",
      "outdoorUnitId": "ou-air-con-amsci4h4s42",
      "indoorUnitId": "iu-iu-40531",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.95,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-asxci4h4e24-asxem4h4e24",
      "slug": "air-con-asxci4h4e24-asxem4h4e24",
      "modelId": "model-air-con-asxci4h4e24",
      "outdoorUnitId": "ou-air-con-asxci4h4e24",
      "indoorUnitId": "iu-asxem4h4e24",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aasdci7h4r60-aasdem7h4r48-s",
      "slug": "air-con-aasdci7h4r60-aasdem7h4r48-s",
      "modelId": "model-air-con-aasdci7h4r60",
      "outdoorUnitId": "ou-air-con-aasdci7h4r60",
      "indoorUnitId": "iu-aasdem7h4r48-s",
      "minHeatingTempC": -15,
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aasdci7h4r60-aasdem7h4r60-s",
      "slug": "air-con-aasdci7h4r60-aasdem7h4r60-s",
      "modelId": "model-air-con-aasdci7h4r60",
      "outdoorUnitId": "ou-air-con-aasdci7h4r60",
      "indoorUnitId": "iu-aasdem7h4r60-s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aasdci7h4r36-aasdem7h4r36-s",
      "slug": "air-con-aasdci7h4r36-aasdem7h4r36-s",
      "modelId": "model-air-con-aasdci7h4r36",
      "outdoorUnitId": "ou-air-con-aasdci7h4r36",
      "indoorUnitId": "iu-aasdem7h4r36-s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aasdci7h4r30-aasdem7h4r24-s",
      "slug": "air-con-aasdci7h4r30-aasdem7h4r24-s",
      "modelId": "model-air-con-aasdci7h4r30",
      "outdoorUnitId": "ou-air-con-aasdci7h4r30",
      "indoorUnitId": "iu-aasdem7h4r24-s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aslci4h4s24-aslec4h4s24",
      "slug": "air-con-aslci4h4s24-aslec4h4s24",
      "modelId": "model-air-con-aslci4h4s24",
      "outdoorUnitId": "ou-air-con-aslci4h4s24",
      "indoorUnitId": "iu-aslec4h4s24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aasdci7h4r30-aasdem7h4r30-s",
      "slug": "air-con-aasdci7h4r30-aasdem7h4r30-s",
      "modelId": "model-air-con-aasdci7h4r30",
      "outdoorUnitId": "ou-air-con-aasdci7h4r30",
      "indoorUnitId": "iu-aasdem7h4r30-s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-asddi4h4s36-asdvi4h4s36",
      "slug": "air-con-asddi4h4s36-asdvi4h4s36",
      "modelId": "model-air-con-asddi4h4s36",
      "outdoorUnitId": "ou-air-con-asddi4h4s36",
      "indoorUnitId": "iu-asdvi4h4s36",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-aslci4h4s09-aslek4h4s09",
      "slug": "air-con-aslci4h4s09-aslek4h4s09",
      "modelId": "model-air-con-aslci4h4s09",
      "outdoorUnitId": "ou-air-con-aslci4h4s09",
      "indoorUnitId": "iu-aslek4h4s09",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-asddi4h4s48-asdvi4h4s48",
      "slug": "air-con-asddi4h4s48-asdvi4h4s48",
      "modelId": "model-air-con-asddi4h4s48",
      "outdoorUnitId": "ou-air-con-asddi4h4s48",
      "indoorUnitId": "iu-asdvi4h4s48",
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
          "sourceId": "src-air-con-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-con-asddi4h4s24-asdvi4h4s24",
      "slug": "air-con-asddi4h4s24-asdvi4h4s24",
      "modelId": "model-air-con-asddi4h4s24",
      "outdoorUnitId": "ou-air-con-asddi4h4s24",
      "indoorUnitId": "iu-asdvi4h4s24",
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
          "sourceId": "src-air-con-epa",
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
