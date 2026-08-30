import type { BrandDataset } from "../../types";

export const brand_chDataset: BrandDataset = {
  "brand": {
    "id": "brand-ch",
    "slug": "ch",
    "name": "C&H",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour C&H",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ch-epa",
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
      "id": "series-ch-ch-series",
      "slug": "ch-ch-series",
      "name": "CH series",
      "brandId": "brand-ch",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CH series de C&H",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ch-ch-hpr09-230vo",
      "slug": "ch-ch-hpr09-230vo",
      "name": "C&H CH-HPR09-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR09-230VO",
      "normalizedModelNumber": "ch-hpr09-230vo",
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
      "id": "model-ch-ch-hpr06f9-230vo",
      "slug": "ch-ch-hpr06f9-230vo",
      "name": "C&H CH-HPR06F9-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR06F9-230VO",
      "normalizedModelNumber": "ch-hpr06f9-230vo",
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
      "id": "model-ch-ch-es09-230vo",
      "slug": "ch-ch-es09-230vo",
      "name": "C&H CH-ES09-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES09-230VO",
      "normalizedModelNumber": "ch-es09-230vo",
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
      "id": "model-ch-ch-hpr12-230vo",
      "slug": "ch-ch-hpr12-230vo",
      "name": "C&H CH-HPR12-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR12-230VO",
      "normalizedModelNumber": "ch-hpr12-230vo",
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
      "id": "model-ch-ch-rhp19m-230vo",
      "slug": "ch-ch-rhp19m-230vo",
      "name": "C&H CH-RHP19M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-RHP19M-230VO",
      "normalizedModelNumber": "ch-rhp19m-230vo",
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
      "id": "model-ch-ch-es12-230vo",
      "slug": "ch-ch-es12-230vo",
      "name": "C&H CH-ES12-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES12-230VO",
      "normalizedModelNumber": "ch-es12-230vo",
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
      "id": "model-ch-ch-28mes-230vo",
      "slug": "ch-ch-28mes-230vo",
      "name": "C&H CH-28MES-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-28MES-230VO",
      "normalizedModelNumber": "ch-28mes-230vo",
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
      "id": "model-ch-ch-es18-230vo",
      "slug": "ch-ch-es18-230vo",
      "name": "C&H CH-ES18-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES18-230VO",
      "normalizedModelNumber": "ch-es18-230vo",
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
      "id": "model-ch-ch-36mes-230vo",
      "slug": "ch-ch-36mes-230vo",
      "name": "C&H CH-36MES-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-36MES-230VO",
      "normalizedModelNumber": "ch-36mes-230vo",
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
      "id": "model-ch-ch-48mes-230vo",
      "slug": "ch-ch-48mes-230vo",
      "name": "C&H CH-48MES-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-48MES-230VO",
      "normalizedModelNumber": "ch-48mes-230vo",
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
      "id": "model-ch-ch-es06-115vo",
      "slug": "ch-ch-es06-115vo",
      "name": "C&H CH-ES06-115VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES06-115VO",
      "normalizedModelNumber": "ch-es06-115vo",
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
      "id": "model-ch-ch-rhp48m-230vo",
      "slug": "ch-ch-rhp48m-230vo",
      "name": "C&H CH-RHP48M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-RHP48M-230VO",
      "normalizedModelNumber": "ch-rhp48m-230vo",
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
      "id": "model-ch-ch-rhp28m-230vo",
      "slug": "ch-ch-rhp28m-230vo",
      "name": "C&H CH-RHP28M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-RHP28M-230VO",
      "normalizedModelNumber": "ch-rhp28m-230vo",
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
      "id": "model-ch-ch-hpr28m-230vo",
      "slug": "ch-ch-hpr28m-230vo",
      "name": "C&H CH-HPR28M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR28M-230VO",
      "normalizedModelNumber": "ch-hpr28m-230vo",
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
      "id": "model-ch-ch-rhp36m-230vo",
      "slug": "ch-ch-rhp36m-230vo",
      "name": "C&H CH-RHP36M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-RHP36M-230VO",
      "normalizedModelNumber": "ch-rhp36m-230vo",
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
      "id": "model-ch-ch-es09-115vo",
      "slug": "ch-ch-es09-115vo",
      "name": "C&H CH-ES09-115VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES09-115VO",
      "normalizedModelNumber": "ch-es09-115vo",
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
      "id": "model-ch-ch-06olvwm-115vo",
      "slug": "ch-ch-06olvwm-115vo",
      "name": "C&H CH-06OLVWM-115VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-06OLVWM-115VO",
      "normalizedModelNumber": "ch-06olvwm-115vo",
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
      "id": "model-ch-ch-18mes-230vo",
      "slug": "ch-ch-18mes-230vo",
      "name": "C&H CH-18MES-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-18MES-230VO",
      "normalizedModelNumber": "ch-18mes-230vo",
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
      "id": "model-ch-ch-es12-115vo",
      "slug": "ch-ch-es12-115vo",
      "name": "C&H CH-ES12-115VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES12-115VO",
      "normalizedModelNumber": "ch-es12-115vo",
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
      "id": "model-ch-ch-hpr24-230vo",
      "slug": "ch-ch-hpr24-230vo",
      "name": "C&H CH-HPR24-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR24-230VO",
      "normalizedModelNumber": "ch-hpr24-230vo",
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
      "id": "model-ch-ch-hpr36m-230vo",
      "slug": "ch-ch-hpr36m-230vo",
      "name": "C&H CH-HPR36M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR36M-230VO",
      "normalizedModelNumber": "ch-hpr36m-230vo",
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
      "id": "model-ch-ch-rhp55m-230vo",
      "slug": "ch-ch-rhp55m-230vo",
      "name": "C&H CH-RHP55M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-RHP55M-230VO",
      "normalizedModelNumber": "ch-rhp55m-230vo",
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
      "id": "model-ch-ch-hpr18-230vo",
      "slug": "ch-ch-hpr18-230vo",
      "name": "C&H CH-HPR18-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR18-230VO",
      "normalizedModelNumber": "ch-hpr18-230vo",
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
      "id": "model-ch-ch-hpr19m-230vo",
      "slug": "ch-ch-hpr19m-230vo",
      "name": "C&H CH-HPR19M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR19M-230VO",
      "normalizedModelNumber": "ch-hpr19m-230vo",
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
      "id": "model-ch-ch-hpr55m-230vo",
      "slug": "ch-ch-hpr55m-230vo",
      "name": "C&H CH-HPR55M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR55M-230VO",
      "normalizedModelNumber": "ch-hpr55m-230vo",
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
      "id": "model-ch-ch-es24-230vo",
      "slug": "ch-ch-es24-230vo",
      "name": "C&H CH-ES24-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-ES24-230VO",
      "normalizedModelNumber": "ch-es24-230vo",
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
      "id": "model-ch-ch-hpr48m-230vo",
      "slug": "ch-ch-hpr48m-230vo",
      "name": "C&H CH-HPR48M-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HPR48M-230VO",
      "normalizedModelNumber": "ch-hpr48m-230vo",
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
      "id": "model-ch-ch-ny09mia-230vo",
      "slug": "ch-ch-ny09mia-230vo",
      "name": "C&H CH-NY09MIA-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-NY09MIA-230VO",
      "normalizedModelNumber": "ch-ny09mia-230vo",
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
      "id": "model-ch-ch-ny09mia-115vo",
      "slug": "ch-ch-ny09mia-115vo",
      "name": "C&H CH-NY09MIA-115VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-NY09MIA-115VO",
      "normalizedModelNumber": "ch-ny09mia-115vo",
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
      "id": "model-ch-ch-ny06mia-115vo",
      "slug": "ch-ch-ny06mia-115vo",
      "name": "C&H CH-NY06MIA-115VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-NY06MIA-115VO",
      "normalizedModelNumber": "ch-ny06mia-115vo",
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
      "id": "model-ch-ch-el30-230vo",
      "slug": "ch-ch-el30-230vo",
      "name": "C&H CH-EL30-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-EL30-230VO",
      "normalizedModelNumber": "ch-el30-230vo",
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
      "id": "model-ch-ch-ny18mia-230vo",
      "slug": "ch-ch-ny18mia-230vo",
      "name": "C&H CH-NY18MIA-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-NY18MIA-230VO",
      "normalizedModelNumber": "ch-ny18mia-230vo",
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
      "id": "model-ch-ch-nhpr36lcu-230vo",
      "slug": "ch-ch-nhpr36lcu-230vo",
      "name": "C&H CH-NHPR36LCU-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-NHPR36LCU-230VO",
      "normalizedModelNumber": "ch-nhpr36lcu-230vo",
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
      "id": "model-ch-ch-n48lcu-230vo",
      "slug": "ch-ch-n48lcu-230vo",
      "name": "C&H CH-N48LCU-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-N48LCU-230VO",
      "normalizedModelNumber": "ch-n48lcu-230vo",
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
      "id": "model-ch-ch-nhpr48lcu-230vo",
      "slug": "ch-ch-nhpr48lcu-230vo",
      "name": "C&H CH-NHPR48LCU-230VO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-NHPR48LCU-230VO",
      "normalizedModelNumber": "ch-nhpr48lcu-230vo",
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
      "id": "model-ch-ch-hyp36lcuo",
      "slug": "ch-ch-hyp36lcuo",
      "name": "C&H CH-HYP36LCUO",
      "seriesId": "series-ch-ch-series",
      "brandId": "brand-ch",
      "modelNumber": "CH-HYP36LCUO",
      "normalizedModelNumber": "ch-hyp36lcuo",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-ch-ch-hpr09-230vo",
      "modelNumber": "CH-HPR09-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr06f9-230vo",
      "modelNumber": "CH-HPR06F9-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-es09-230vo",
      "modelNumber": "CH-ES09-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr12-230vo",
      "modelNumber": "CH-HPR12-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-rhp19m-230vo",
      "modelNumber": "CH-RHP19M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ch-ch-es12-230vo",
      "modelNumber": "CH-ES12-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-28mes-230vo",
      "modelNumber": "CH-28MES-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-es18-230vo",
      "modelNumber": "CH-ES18-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-36mes-230vo",
      "modelNumber": "CH-36MES-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-48mes-230vo",
      "modelNumber": "CH-48MES-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-es06-115vo",
      "modelNumber": "CH-ES06-115VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-rhp48m-230vo",
      "modelNumber": "CH-RHP48M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ch-ch-rhp28m-230vo",
      "modelNumber": "CH-RHP28M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ch-ch-hpr28m-230vo",
      "modelNumber": "CH-HPR28M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-rhp36m-230vo",
      "modelNumber": "CH-RHP36M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ch-ch-es09-115vo",
      "modelNumber": "CH-ES09-115VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-06olvwm-115vo",
      "modelNumber": "CH-06OLVWM-115VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-18mes-230vo",
      "modelNumber": "CH-18MES-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-es12-115vo",
      "modelNumber": "CH-ES12-115VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr24-230vo",
      "modelNumber": "CH-HPR24-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr36m-230vo",
      "modelNumber": "CH-HPR36M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-rhp55m-230vo",
      "modelNumber": "CH-RHP55M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ch-ch-hpr18-230vo",
      "modelNumber": "CH-HPR18-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr19m-230vo",
      "modelNumber": "CH-HPR19M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr55m-230vo",
      "modelNumber": "CH-HPR55M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-es24-230vo",
      "modelNumber": "CH-ES24-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hpr48m-230vo",
      "modelNumber": "CH-HPR48M-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-ny09mia-230vo",
      "modelNumber": "CH-NY09MIA-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-ny09mia-115vo",
      "modelNumber": "CH-NY09MIA-115VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-ny06mia-115vo",
      "modelNumber": "CH-NY06MIA-115VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-el30-230vo",
      "modelNumber": "CH-EL30-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-ny18mia-230vo",
      "modelNumber": "CH-NY18MIA-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-nhpr36lcu-230vo",
      "modelNumber": "CH-NHPR36LCU-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-n48lcu-230vo",
      "modelNumber": "CH-N48LCU-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-nhpr48lcu-230vo",
      "modelNumber": "CH-NHPR48LCU-230VO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ch-ch-hyp36lcuo",
      "modelNumber": "CH-HYP36LCUO",
      "brandId": "brand-ch",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ch-09mastwm-230vi",
      "modelNumber": "CH-09MASTWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06mastwm-230vi",
      "modelNumber": "CH-06MASTWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09molvwm-230vi",
      "modelNumber": "CH-09MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b09molvwm-230vi",
      "modelNumber": "CH-B09MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mastwm-230vi",
      "modelNumber": "CH-12MASTWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d09msphwm-230vi",
      "modelNumber": "CH-D09MSPHWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42113",
      "modelNumber": "IU-42113",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12mmc-230vi",
      "modelNumber": "CH-12MMC-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42028",
      "modelNumber": "IU-42028",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18molvwm-230vi",
      "modelNumber": "CH-18MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b18molvwm-230vi",
      "modelNumber": "CH-B18MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42029",
      "modelNumber": "IU-42029",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12msphmc-230vi",
      "modelNumber": "CH-12MSPHMC-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d12msphwm-230vi",
      "modelNumber": "CH-D12MSPHWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b06molvwm-230vi",
      "modelNumber": "CH-B06MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18mastwm-230vi",
      "modelNumber": "CH-18MASTWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06molvwm-230vi",
      "modelNumber": "CH-06MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42030",
      "modelNumber": "IU-42030",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b12molvwm-230vi",
      "modelNumber": "CH-B12MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12molvwm-230vi",
      "modelNumber": "CH-12MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-06olvwm-115vi",
      "modelNumber": "CH-06OLVWM-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42116",
      "modelNumber": "IU-42116",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42114",
      "modelNumber": "IU-42114",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42096",
      "modelNumber": "IU-42096",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42115",
      "modelNumber": "IU-42115",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09olvwm-115vi",
      "modelNumber": "CH-09OLVWM-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b09olvwm-115vi",
      "modelNumber": "CH-B09OLVWM-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18msphfc-230vi",
      "modelNumber": "CH-18MSPHFC-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42027",
      "modelNumber": "IU-42027",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12olvwm-115vi",
      "modelNumber": "CH-12OLVWM-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-12msphct-230vi",
      "modelNumber": "CH-12MSPHCT-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b12olvwm-115vi",
      "modelNumber": "CH-B12OLVWM-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-16mmc-230vi",
      "modelNumber": "CH-16MMC-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-b24molvwm-230vi",
      "modelNumber": "CH-B24MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24molvwm-230vi",
      "modelNumber": "CH-24MOLVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42097",
      "modelNumber": "IU-42097",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42117",
      "modelNumber": "IU-42117",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42088",
      "modelNumber": "IU-42088",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42099",
      "modelNumber": "IU-42099",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24mastwm-230vi",
      "modelNumber": "CH-24MASTWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42098",
      "modelNumber": "IU-42098",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09molv-230vi",
      "modelNumber": "CH-09MOLV-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny09mia-230vi",
      "modelNumber": "CH-NY09MIA-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny09mia-115vi",
      "modelNumber": "CH-NY09MIA-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-ny06mia-115vi",
      "modelNumber": "CH-NY06MIA-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09olv-115vi",
      "modelNumber": "CH-09OLV-115VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-n24msphct-230vi",
      "modelNumber": "CH-N24MSPHCT-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-24msphfc-230vi",
      "modelNumber": "CH-24MSPHFC-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-30elvwm-230vi",
      "modelNumber": "CH-30ELVWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18msphct-230vi",
      "modelNumber": "CH-18MSPHCT-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-09msphct-230vi",
      "modelNumber": "CH-09MSPHCT-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m09dtui",
      "modelNumber": "CH-M09DTUI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m18dtui",
      "modelNumber": "CH-M18DTUI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-30astwm-230vi",
      "modelNumber": "CH-30ASTWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-18molv-230vi",
      "modelNumber": "CH-18MOLV-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m12dtui",
      "modelNumber": "CH-M12DTUI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-n36lcct-230vi",
      "modelNumber": "CH-N36LCCT-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d18msphwm-230vi",
      "modelNumber": "CH-D18MSPHWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-m24dtui",
      "modelNumber": "CH-M24DTUI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-d24msphwm-230vi",
      "modelNumber": "CH-D24MSPHWM-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-48lcfci",
      "modelNumber": "CH-48LCFC/I",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-36lcfci",
      "modelNumber": "CH-36LCFC/I",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-n48lcct-230vi",
      "modelNumber": "CH-N48LCCT-230VI",
      "brandId": "brand-ch",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-36lcdtui",
      "modelNumber": "CH-36LCDTU/I",
      "brandId": "brand-ch",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-ch-ch-hpr09-230vo-ch-09mastwm-230vi",
      "slug": "ch-ch-hpr09-230vo-ch-09mastwm-230vi",
      "modelId": "model-ch-ch-hpr09-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr06f9-230vo-ch-06mastwm-230vi",
      "slug": "ch-ch-hpr06f9-230vo-ch-06mastwm-230vi",
      "modelId": "model-ch-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-06mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr09-230vo-ch-09molvwm-230vi",
      "slug": "ch-ch-hpr09-230vo-ch-09molvwm-230vi",
      "modelId": "model-ch-ch-hpr09-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr09-230vo-ch-b09molvwm-230vi",
      "slug": "ch-ch-hpr09-230vo-ch-b09molvwm-230vi",
      "modelId": "model-ch-ch-hpr09-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-b09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-230vo-ch-09mastwm-230vi",
      "slug": "ch-ch-es09-230vo-ch-09mastwm-230vi",
      "modelId": "model-ch-ch-es09-230vo",
      "outdoorUnitId": "ou-ch-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-12mastwm-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-12mastwm-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr09-230vo-ch-d09msphwm-230vi",
      "slug": "ch-ch-hpr09-230vo-ch-d09msphwm-230vi",
      "modelId": "model-ch-ch-hpr09-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-d09msphwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-rhp19m-230vo-iu-42113",
      "slug": "ch-ch-rhp19m-230vo-iu-42113",
      "modelId": "model-ch-ch-rhp19m-230vo",
      "outdoorUnitId": "ou-ch-ch-rhp19m-230vo",
      "indoorUnitId": "iu-iu-42113",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-12mmc-230vi",
      "slug": "ch-ch-es12-230vo-ch-12mmc-230vi",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mmc-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-12mastwm-230vi",
      "slug": "ch-ch-es12-230vo-ch-12mastwm-230vi",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-28mes-230vo-iu-42028",
      "slug": "ch-ch-28mes-230vo-iu-42028",
      "modelId": "model-ch-ch-28mes-230vo",
      "outdoorUnitId": "ou-ch-ch-28mes-230vo",
      "indoorUnitId": "iu-iu-42028",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-12mmc-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-12mmc-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12mmc-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-18molvwm-230vi",
      "slug": "ch-ch-es18-230vo-ch-18molvwm-230vi",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-230vo-ch-b09molvwm-230vi",
      "slug": "ch-ch-es09-230vo-ch-b09molvwm-230vi",
      "modelId": "model-ch-ch-es09-230vo",
      "outdoorUnitId": "ou-ch-ch-es09-230vo",
      "indoorUnitId": "iu-ch-b09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-230vo-ch-09molvwm-230vi",
      "slug": "ch-ch-es09-230vo-ch-09molvwm-230vi",
      "modelId": "model-ch-ch-es09-230vo",
      "outdoorUnitId": "ou-ch-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-b18molvwm-230vi",
      "slug": "ch-ch-es18-230vo-ch-b18molvwm-230vi",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-b18molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-36mes-230vo-iu-42029",
      "slug": "ch-ch-36mes-230vo-iu-42029",
      "modelId": "model-ch-ch-36mes-230vo",
      "outdoorUnitId": "ou-ch-ch-36mes-230vo",
      "indoorUnitId": "iu-iu-42029",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-12msphmc-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-12msphmc-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12msphmc-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-d12msphwm-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-d12msphwm-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-d12msphwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr06f9-230vo-ch-b06molvwm-230vi",
      "slug": "ch-ch-hpr06f9-230vo-ch-b06molvwm-230vi",
      "modelId": "model-ch-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-b06molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-18mastwm-230vi",
      "slug": "ch-ch-es18-230vo-ch-18mastwm-230vi",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr06f9-230vo-ch-06molvwm-230vi",
      "slug": "ch-ch-hpr06f9-230vo-ch-06molvwm-230vi",
      "modelId": "model-ch-ch-hpr06f9-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr06f9-230vo",
      "indoorUnitId": "iu-ch-06molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-48mes-230vo-iu-42030",
      "slug": "ch-ch-48mes-230vo-iu-42030",
      "modelId": "model-ch-ch-48mes-230vo",
      "outdoorUnitId": "ou-ch-ch-48mes-230vo",
      "indoorUnitId": "iu-iu-42030",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-b12molvwm-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-b12molvwm-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-b12molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-b12molvwm-230vi",
      "slug": "ch-ch-es12-230vo-ch-b12molvwm-230vi",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-b12molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-12molvwm-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-12molvwm-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-12molvwm-230vi",
      "slug": "ch-ch-es12-230vo-ch-12molvwm-230vi",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es06-115vo-ch-06olvwm-115vi",
      "slug": "ch-ch-es06-115vo-ch-06olvwm-115vi",
      "modelId": "model-ch-ch-es06-115vo",
      "outdoorUnitId": "ou-ch-ch-es06-115vo",
      "indoorUnitId": "iu-ch-06olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-rhp48m-230vo-iu-42116",
      "slug": "ch-ch-rhp48m-230vo-iu-42116",
      "modelId": "model-ch-ch-rhp48m-230vo",
      "outdoorUnitId": "ou-ch-ch-rhp48m-230vo",
      "indoorUnitId": "iu-iu-42116",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-rhp28m-230vo-iu-42114",
      "slug": "ch-ch-rhp28m-230vo-iu-42114",
      "modelId": "model-ch-ch-rhp28m-230vo",
      "outdoorUnitId": "ou-ch-ch-rhp28m-230vo",
      "indoorUnitId": "iu-iu-42114",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr28m-230vo-iu-42096",
      "slug": "ch-ch-hpr28m-230vo-iu-42096",
      "modelId": "model-ch-ch-hpr28m-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr28m-230vo",
      "indoorUnitId": "iu-iu-42096",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-rhp36m-230vo-iu-42115",
      "slug": "ch-ch-rhp36m-230vo-iu-42115",
      "modelId": "model-ch-ch-rhp36m-230vo",
      "outdoorUnitId": "ou-ch-ch-rhp36m-230vo",
      "indoorUnitId": "iu-iu-42115",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-115vo-ch-09olvwm-115vi",
      "slug": "ch-ch-es09-115vo-ch-09olvwm-115vi",
      "modelId": "model-ch-ch-es09-115vo",
      "outdoorUnitId": "ou-ch-ch-es09-115vo",
      "indoorUnitId": "iu-ch-09olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-06olvwm-115vo-ch-06olvwm-115vi",
      "slug": "ch-ch-06olvwm-115vo-ch-06olvwm-115vi",
      "modelId": "model-ch-ch-06olvwm-115vo",
      "outdoorUnitId": "ou-ch-ch-06olvwm-115vo",
      "indoorUnitId": "iu-ch-06olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-115vo-ch-b09olvwm-115vi",
      "slug": "ch-ch-es09-115vo-ch-b09olvwm-115vi",
      "modelId": "model-ch-ch-es09-115vo",
      "outdoorUnitId": "ou-ch-ch-es09-115vo",
      "indoorUnitId": "iu-ch-b09olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-18msphfc-230vi",
      "slug": "ch-ch-es18-230vo-ch-18msphfc-230vi",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18msphfc-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-18mes-230vo-iu-42027",
      "slug": "ch-ch-18mes-230vo-iu-42027",
      "modelId": "model-ch-ch-18mes-230vo",
      "outdoorUnitId": "ou-ch-ch-18mes-230vo",
      "indoorUnitId": "iu-iu-42027",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-115vo-ch-12olvwm-115vi",
      "slug": "ch-ch-es12-115vo-ch-12olvwm-115vi",
      "modelId": "model-ch-ch-es12-115vo",
      "outdoorUnitId": "ou-ch-ch-es12-115vo",
      "indoorUnitId": "iu-ch-12olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-12msphct-230vi",
      "slug": "ch-ch-es12-230vo-ch-12msphct-230vi",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-12msphmc-230vi",
      "slug": "ch-ch-es12-230vo-ch-12msphmc-230vi",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-12msphmc-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-115vo-ch-b12olvwm-115vi",
      "slug": "ch-ch-es12-115vo-ch-b12olvwm-115vi",
      "modelId": "model-ch-ch-es12-115vo",
      "outdoorUnitId": "ou-ch-ch-es12-115vo",
      "indoorUnitId": "iu-ch-b12olvwm-115vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-16mmc-230vi",
      "slug": "ch-ch-es18-230vo-ch-16mmc-230vi",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-16mmc-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-b24molvwm-230vi",
      "slug": "ch-ch-hpr24-230vo-ch-b24molvwm-230vi",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-b24molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-24molvwm-230vi",
      "slug": "ch-ch-hpr24-230vo-ch-24molvwm-230vi",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-12msphct-230vi",
      "slug": "ch-ch-hpr12-230vo-ch-12msphct-230vi",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-12msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr36m-230vo-iu-42097",
      "slug": "ch-ch-hpr36m-230vo-iu-42097",
      "modelId": "model-ch-ch-hpr36m-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr36m-230vo",
      "indoorUnitId": "iu-iu-42097",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-rhp55m-230vo-iu-42117",
      "slug": "ch-ch-rhp55m-230vo-iu-42117",
      "modelId": "model-ch-ch-rhp55m-230vo",
      "outdoorUnitId": "ou-ch-ch-rhp55m-230vo",
      "indoorUnitId": "iu-iu-42117",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-b18molvwm-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-b18molvwm-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-b18molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr19m-230vo-iu-42088",
      "slug": "ch-ch-hpr19m-230vo-iu-42088",
      "modelId": "model-ch-ch-hpr19m-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr19m-230vo",
      "indoorUnitId": "iu-iu-42088",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr55m-230vo-iu-42099",
      "slug": "ch-ch-hpr55m-230vo-iu-42099",
      "modelId": "model-ch-ch-hpr55m-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr55m-230vo",
      "indoorUnitId": "iu-iu-42099",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es24-230vo-ch-24mastwm-230vi",
      "slug": "ch-ch-es24-230vo-ch-24mastwm-230vi",
      "modelId": "model-ch-ch-es24-230vo",
      "outdoorUnitId": "ou-ch-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-18molvwm-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-18molvwm-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18molvwm-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr48m-230vo-iu-42098",
      "slug": "ch-ch-hpr48m-230vo-iu-42098",
      "modelId": "model-ch-ch-hpr48m-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr48m-230vo",
      "indoorUnitId": "iu-iu-42098",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-ny09mia-230vo-ch-09molv-230vi",
      "slug": "ch-ch-ny09mia-230vo-ch-09molv-230vi",
      "modelId": "model-ch-ch-ny09mia-230vo",
      "outdoorUnitId": "ou-ch-ch-ny09mia-230vo",
      "indoorUnitId": "iu-ch-09molv-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-ny09mia-230vo-ch-ny09mia-230vi",
      "slug": "ch-ch-ny09mia-230vo-ch-ny09mia-230vi",
      "modelId": "model-ch-ch-ny09mia-230vo",
      "outdoorUnitId": "ou-ch-ch-ny09mia-230vo",
      "indoorUnitId": "iu-ch-ny09mia-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-ny09mia-115vo-ch-ny09mia-115vi",
      "slug": "ch-ch-ny09mia-115vo-ch-ny09mia-115vi",
      "modelId": "model-ch-ch-ny09mia-115vo",
      "outdoorUnitId": "ou-ch-ch-ny09mia-115vo",
      "indoorUnitId": "iu-ch-ny09mia-115vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-18mastwm-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-18mastwm-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-ny06mia-115vo-ch-ny06mia-115vi",
      "slug": "ch-ch-ny06mia-115vo-ch-ny06mia-115vi",
      "modelId": "model-ch-ch-ny06mia-115vo",
      "outdoorUnitId": "ou-ch-ch-ny06mia-115vo",
      "indoorUnitId": "iu-ch-ny06mia-115vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-ny09mia-115vo-ch-09olv-115vi",
      "slug": "ch-ch-ny09mia-115vo-ch-09olv-115vi",
      "modelId": "model-ch-ch-ny09mia-115vo",
      "outdoorUnitId": "ou-ch-ch-ny09mia-115vo",
      "indoorUnitId": "iu-ch-09olv-115vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es24-230vo-ch-n24msphct-230vi",
      "slug": "ch-ch-es24-230vo-ch-n24msphct-230vi",
      "modelId": "model-ch-ch-es24-230vo",
      "outdoorUnitId": "ou-ch-ch-es24-230vo",
      "indoorUnitId": "iu-ch-n24msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-24mastwm-230vi",
      "slug": "ch-ch-hpr24-230vo-ch-24mastwm-230vi",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24mastwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es24-230vo-ch-24msphfc-230vi",
      "slug": "ch-ch-es24-230vo-ch-24msphfc-230vi",
      "modelId": "model-ch-ch-es24-230vo",
      "outdoorUnitId": "ou-ch-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24msphfc-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es24-230vo-ch-24molvwm-230vi",
      "slug": "ch-ch-es24-230vo-ch-24molvwm-230vi",
      "modelId": "model-ch-ch-es24-230vo",
      "outdoorUnitId": "ou-ch-ch-es24-230vo",
      "indoorUnitId": "iu-ch-24molvwm-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es24-230vo-ch-b24molvwm-230vi",
      "slug": "ch-ch-es24-230vo-ch-b24molvwm-230vi",
      "modelId": "model-ch-ch-es24-230vo",
      "outdoorUnitId": "ou-ch-ch-es24-230vo",
      "indoorUnitId": "iu-ch-b24molvwm-230vi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-el30-230vo-ch-30elvwm-230vi",
      "slug": "ch-ch-el30-230vo-ch-30elvwm-230vi",
      "modelId": "model-ch-ch-el30-230vo",
      "outdoorUnitId": "ou-ch-ch-el30-230vo",
      "indoorUnitId": "iu-ch-30elvwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-18msphct-230vi",
      "slug": "ch-ch-es18-230vo-ch-18msphct-230vi",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-18msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-24msphfc-230vi",
      "slug": "ch-ch-hpr24-230vo-ch-24msphfc-230vi",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-24msphfc-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-n24msphct-230vi",
      "slug": "ch-ch-hpr24-230vo-ch-n24msphct-230vi",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-n24msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-18msphfc-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-18msphfc-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18msphfc-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr09-230vo-ch-09msphct-230vi",
      "slug": "ch-ch-hpr09-230vo-ch-09msphct-230vi",
      "modelId": "model-ch-ch-hpr09-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-09msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-16mmc-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-16mmc-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-16mmc-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr09-230vo-ch-m09dtui",
      "slug": "ch-ch-hpr09-230vo-ch-m09dtui",
      "modelId": "model-ch-ch-hpr09-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr09-230vo",
      "indoorUnitId": "iu-ch-m09dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es18-230vo-ch-m18dtui",
      "slug": "ch-ch-es18-230vo-ch-m18dtui",
      "modelId": "model-ch-ch-es18-230vo",
      "outdoorUnitId": "ou-ch-ch-es18-230vo",
      "indoorUnitId": "iu-ch-m18dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-18msphct-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-18msphct-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-18msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-230vo-ch-09msphct-230vi",
      "slug": "ch-ch-es09-230vo-ch-09msphct-230vi",
      "modelId": "model-ch-ch-es09-230vo",
      "outdoorUnitId": "ou-ch-ch-es09-230vo",
      "indoorUnitId": "iu-ch-09msphct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-el30-230vo-ch-30astwm-230vi",
      "slug": "ch-ch-el30-230vo-ch-30astwm-230vi",
      "modelId": "model-ch-ch-el30-230vo",
      "outdoorUnitId": "ou-ch-ch-el30-230vo",
      "indoorUnitId": "iu-ch-30astwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-ny18mia-230vo-ch-18molv-230vi",
      "slug": "ch-ch-ny18mia-230vo-ch-18molv-230vi",
      "modelId": "model-ch-ch-ny18mia-230vo",
      "outdoorUnitId": "ou-ch-ch-ny18mia-230vo",
      "indoorUnitId": "iu-ch-18molv-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr12-230vo-ch-m12dtui",
      "slug": "ch-ch-hpr12-230vo-ch-m12dtui",
      "modelId": "model-ch-ch-hpr12-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr12-230vo",
      "indoorUnitId": "iu-ch-m12dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-nhpr36lcu-230vo-ch-n36lcct-230vi",
      "slug": "ch-ch-nhpr36lcu-230vo-ch-n36lcct-230vi",
      "modelId": "model-ch-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-ch-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-n36lcct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-d18msphwm-230vi",
      "slug": "ch-ch-hpr18-230vo-ch-d18msphwm-230vi",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-d18msphwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-m24dtui",
      "slug": "ch-ch-hpr24-230vo-ch-m24dtui",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-m24dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es09-230vo-ch-m09dtui",
      "slug": "ch-ch-es09-230vo-ch-m09dtui",
      "modelId": "model-ch-ch-es09-230vo",
      "outdoorUnitId": "ou-ch-ch-es09-230vo",
      "indoorUnitId": "iu-ch-m09dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es12-230vo-ch-m12dtui",
      "slug": "ch-ch-es12-230vo-ch-m12dtui",
      "modelId": "model-ch-ch-es12-230vo",
      "outdoorUnitId": "ou-ch-ch-es12-230vo",
      "indoorUnitId": "iu-ch-m12dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-es24-230vo-ch-m24dtui",
      "slug": "ch-ch-es24-230vo-ch-m24dtui",
      "modelId": "model-ch-ch-es24-230vo",
      "outdoorUnitId": "ou-ch-ch-es24-230vo",
      "indoorUnitId": "iu-ch-m24dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr24-230vo-ch-d24msphwm-230vi",
      "slug": "ch-ch-hpr24-230vo-ch-d24msphwm-230vi",
      "modelId": "model-ch-ch-hpr24-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr24-230vo",
      "indoorUnitId": "iu-ch-d24msphwm-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-n48lcu-230vo-ch-48lcfci",
      "slug": "ch-ch-n48lcu-230vo-ch-48lcfci",
      "modelId": "model-ch-ch-n48lcu-230vo",
      "outdoorUnitId": "ou-ch-ch-n48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcfci",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hpr18-230vo-ch-m18dtui",
      "slug": "ch-ch-hpr18-230vo-ch-m18dtui",
      "modelId": "model-ch-ch-hpr18-230vo",
      "outdoorUnitId": "ou-ch-ch-hpr18-230vo",
      "indoorUnitId": "iu-ch-m18dtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-nhpr36lcu-230vo-ch-36lcfci",
      "slug": "ch-ch-nhpr36lcu-230vo-ch-36lcfci",
      "modelId": "model-ch-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-ch-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcfci",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-nhpr48lcu-230vo-ch-48lcfci",
      "slug": "ch-ch-nhpr48lcu-230vo-ch-48lcfci",
      "modelId": "model-ch-ch-nhpr48lcu-230vo",
      "outdoorUnitId": "ou-ch-ch-nhpr48lcu-230vo",
      "indoorUnitId": "iu-ch-48lcfci",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-nhpr48lcu-230vo-ch-n48lcct-230vi",
      "slug": "ch-ch-nhpr48lcu-230vo-ch-n48lcct-230vi",
      "modelId": "model-ch-ch-nhpr48lcu-230vo",
      "outdoorUnitId": "ou-ch-ch-nhpr48lcu-230vo",
      "indoorUnitId": "iu-ch-n48lcct-230vi",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-hyp36lcuo-ch-36lcdtui",
      "slug": "ch-ch-hyp36lcuo-ch-36lcdtui",
      "modelId": "model-ch-ch-hyp36lcuo",
      "outdoorUnitId": "ou-ch-ch-hyp36lcuo",
      "indoorUnitId": "iu-ch-36lcdtui",
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
          "sourceId": "src-ch-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ch-ch-nhpr36lcu-230vo-ch-36lcdtui",
      "slug": "ch-ch-nhpr36lcu-230vo-ch-36lcdtui",
      "modelId": "model-ch-ch-nhpr36lcu-230vo",
      "outdoorUnitId": "ou-ch-ch-nhpr36lcu-230vo",
      "indoorUnitId": "iu-ch-36lcdtui",
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
          "sourceId": "src-ch-epa",
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
