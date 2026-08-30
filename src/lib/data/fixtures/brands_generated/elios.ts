import type { BrandDataset } from "../../types";

export const brand_eliosDataset: BrandDataset = {
  "brand": {
    "id": "brand-elios",
    "slug": "elios",
    "name": "Elios",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Elios",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-elios-epa",
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
      "id": "series-elios-de-series",
      "slug": "elios-de-series",
      "name": "DE-series",
      "brandId": "brand-elios",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DE-series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-elios-esh-series",
      "slug": "elios-esh-series",
      "name": "ESH Series",
      "brandId": "brand-elios",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ESH Series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-elios-dub-series",
      "slug": "elios-dub-series",
      "name": "DUB series",
      "brandId": "brand-elios",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DUB series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-elios-exh-series",
      "slug": "elios-exh-series",
      "name": "EXH Series",
      "brandId": "brand-elios",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EXH Series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-elios-dm-series",
      "slug": "elios-dm-series",
      "name": "DM Series",
      "brandId": "brand-elios",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DM Series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-elios-dea-series",
      "slug": "elios-dea-series",
      "name": "DEA series",
      "brandId": "brand-elios",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DEA series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-elios-msh-series",
      "slug": "elios-msh-series",
      "name": "MSH Series",
      "brandId": "brand-elios",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MSH Series de Elios",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-elios-dea09hos25230e8",
      "slug": "elios-dea09hos25230e8",
      "name": "Elios DEA09HOS25230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA09HOS25230E8",
      "normalizedModelNumber": "dea09hos25230e8",
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
      "id": "model-elios-dea06hos28230e8",
      "slug": "elios-dea06hos28230e8",
      "name": "Elios DEA06HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA06HOS28230E8",
      "normalizedModelNumber": "dea06hos28230e8",
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
      "id": "model-elios-eshma09c2an1",
      "slug": "elios-eshma09c2an1",
      "name": "Elios ESHMA09C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA09C2AN1",
      "normalizedModelNumber": "eshma09c2an1",
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
      "id": "model-elios-dea12hos28230e8",
      "slug": "elios-dea12hos28230e8",
      "name": "Elios DEA12HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA12HOS28230E8",
      "normalizedModelNumber": "dea12hos28230e8",
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
      "id": "model-elios-dea12hos25230e8",
      "slug": "elios-dea12hos25230e8",
      "name": "Elios DEA12HOS25230E8",
      "seriesId": "series-elios-dub-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA12HOS25230E8",
      "normalizedModelNumber": "dea12hos25230e8",
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
      "id": "model-elios-dea09hos28230e8",
      "slug": "elios-dea09hos28230e8",
      "name": "Elios DEA09HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA09HOS28230E8",
      "normalizedModelNumber": "dea09hos28230e8",
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
      "id": "model-elios-dea27hom23230x2",
      "slug": "elios-dea27hom23230x2",
      "name": "Elios DEA27HOM23230X2",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA27HOM23230X2",
      "normalizedModelNumber": "dea27hom23230x2",
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
      "id": "model-elios-eshea12c2an1",
      "slug": "elios-eshea12c2an1",
      "name": "Elios ESHEA12C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA12C2AN1",
      "normalizedModelNumber": "eshea12c2an1",
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
      "id": "model-elios-eshma12c2an1",
      "slug": "elios-eshma12c2an1",
      "name": "Elios ESHMA12C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA12C2AN1",
      "normalizedModelNumber": "eshma12c2an1",
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
      "id": "model-elios-dea36hom23230x2",
      "slug": "elios-dea36hom23230x2",
      "name": "Elios DEA36HOM23230X2",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA36HOM23230X2",
      "normalizedModelNumber": "dea36hom23230x2",
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
      "id": "model-elios-dea18hos25230e8",
      "slug": "elios-dea18hos25230e8",
      "name": "Elios DEA18HOS25230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA18HOS25230E8",
      "normalizedModelNumber": "dea18hos25230e8",
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
      "id": "model-elios-dea48hom23230x2",
      "slug": "elios-dea48hom23230x2",
      "name": "Elios DEA48HOM23230X2",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA48HOM23230X2",
      "normalizedModelNumber": "dea48hom23230x2",
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
      "id": "model-elios-exhsa3652av1",
      "slug": "elios-exhsa3652av1",
      "name": "Elios EXHSA3652AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHSA3652AV1",
      "normalizedModelNumber": "exhsa3652av1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-elios-exhsa1832an1",
      "slug": "elios-exhsa1832an1",
      "name": "Elios EXHSA1832AN1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHSA1832AN1",
      "normalizedModelNumber": "exhsa1832an1",
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
      "id": "model-elios-exhsa2742av1",
      "slug": "elios-exhsa2742av1",
      "name": "Elios EXHSA2742AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHSA2742AV1",
      "normalizedModelNumber": "exhsa2742av1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26600,
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
      "id": "model-elios-dea27hom25230x3",
      "slug": "elios-dea27hom25230x3",
      "name": "Elios DEA27HOM25230X3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA27HOM25230X3",
      "normalizedModelNumber": "dea27hom25230x3",
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
      "id": "model-elios-dea18hom23230x2",
      "slug": "elios-dea18hom23230x2",
      "name": "Elios DEA18HOM23230X2",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA18HOM23230X2",
      "normalizedModelNumber": "dea18hom23230x2",
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
      "id": "model-elios-eshma15c2an1",
      "slug": "elios-eshma15c2an1",
      "name": "Elios ESHMA15C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA15C2AN1",
      "normalizedModelNumber": "eshma15c2an1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15500,
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
      "id": "model-elios-eshba30c2an",
      "slug": "elios-eshba30c2an",
      "name": "Elios ESHBA30C2AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA30C2AN*",
      "normalizedModelNumber": "eshba30c2an*",
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
      "id": "model-elios-eshma24c2an1",
      "slug": "elios-eshma24c2an1",
      "name": "Elios ESHMA24C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA24C2AN1",
      "normalizedModelNumber": "eshma24c2an1",
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
      "id": "model-elios-dea36hom25230x3",
      "slug": "elios-dea36hom25230x3",
      "name": "Elios DEA36HOM25230X3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA36HOM25230X3",
      "normalizedModelNumber": "dea36hom25230x3",
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
      "id": "model-elios-eshea18c2an1",
      "slug": "elios-eshea18c2an1",
      "name": "Elios ESHEA18C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA18C2AN1",
      "normalizedModelNumber": "eshea18c2an1",
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
      "id": "model-elios-eshea24c2an1",
      "slug": "elios-eshea24c2an1",
      "name": "Elios ESHEA24C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA24C2AN1",
      "normalizedModelNumber": "eshea24c2an1",
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
      "id": "model-elios-dea24hos25230e8",
      "slug": "elios-dea24hos25230e8",
      "name": "Elios DEA24HOS25230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA24HOS25230E8",
      "normalizedModelNumber": "dea24hos25230e8",
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
      "id": "model-elios-dea55hom25230x3",
      "slug": "elios-dea55hom25230x3",
      "name": "Elios DEA55HOM25230X3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA55HOM25230X3",
      "normalizedModelNumber": "dea55hom25230x3",
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
      "id": "model-elios-dea18hom25230x3",
      "slug": "elios-dea18hom25230x3",
      "name": "Elios DEA18HOM25230X3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA18HOM25230X3",
      "normalizedModelNumber": "dea18hom25230x3",
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
      "id": "model-elios-dea48hom25230x3",
      "slug": "elios-dea48hom25230x3",
      "name": "Elios DEA48HOM25230X3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA48HOM25230X3",
      "normalizedModelNumber": "dea48hom25230x3",
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
      "id": "model-elios-eshma18c2an1",
      "slug": "elios-eshma18c2an1",
      "name": "Elios ESHMA18C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA18C2AN1",
      "normalizedModelNumber": "eshma18c2an1",
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
      "id": "model-elios-eshea09c2an1",
      "slug": "elios-eshea09c2an1",
      "name": "Elios ESHEA09C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA09C2AN1",
      "normalizedModelNumber": "eshea09c2an1",
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
      "id": "model-elios-eshba09c2an",
      "slug": "elios-eshba09c2an",
      "name": "Elios ESHBA09C2AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA09C2AN*",
      "normalizedModelNumber": "eshba09c2an*",
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
      "id": "model-elios-dea18hos28230e8",
      "slug": "elios-dea18hos28230e8",
      "name": "Elios DEA18HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA18HOS28230E8",
      "normalizedModelNumber": "dea18hos28230e8",
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
      "id": "model-elios-exhza3652av1",
      "slug": "elios-exhza3652av1",
      "name": "Elios EXHZA3652AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHZA3652AV1",
      "normalizedModelNumber": "exhza3652av1",
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
      "id": "model-elios-dea09hos21115s1",
      "slug": "elios-dea09hos21115s1",
      "name": "Elios DEA09HOS21115S1",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA09HOS21115S1",
      "normalizedModelNumber": "dea09hos21115s1",
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
      "id": "model-elios-eshba12c2an",
      "slug": "elios-eshba12c2an",
      "name": "Elios ESHBA12C2AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA12C2AN*",
      "normalizedModelNumber": "eshba12c2an*",
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
      "id": "model-elios-exhsa4862av1",
      "slug": "elios-exhsa4862av1",
      "name": "Elios EXHSA4862AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHSA4862AV1",
      "normalizedModelNumber": "exhsa4862av1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-elios-eshba12c1an",
      "slug": "elios-eshba12c1an",
      "name": "Elios ESHBA12C1AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA12C1AN*",
      "normalizedModelNumber": "eshba12c1an*",
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
      "id": "model-elios-exhza4862av1",
      "slug": "elios-exhza4862av1",
      "name": "Elios EXHZA4862AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHZA4862AV1",
      "normalizedModelNumber": "exhza4862av1",
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
      "id": "model-elios-exhza2742av1",
      "slug": "elios-exhza2742av1",
      "name": "Elios EXHZA2742AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHZA2742AV1",
      "normalizedModelNumber": "exhza2742av1",
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
      "id": "model-elios-exhza1832av1",
      "slug": "elios-exhza1832av1",
      "name": "Elios EXHZA1832AV1",
      "seriesId": "series-elios-exh-series",
      "brandId": "brand-elios",
      "modelNumber": "EXHZA1832AV1",
      "normalizedModelNumber": "exhza1832av1",
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
      "id": "model-elios-dea24hos28230e8",
      "slug": "elios-dea24hos28230e8",
      "name": "Elios DEA24HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA24HOS28230E8",
      "normalizedModelNumber": "dea24hos28230e8",
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
      "id": "model-elios-eshba18c2an",
      "slug": "elios-eshba18c2an",
      "name": "Elios ESHBA18C2AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA18C2AN*",
      "normalizedModelNumber": "eshba18c2an*",
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
      "id": "model-elios-eshma33c2an1",
      "slug": "elios-eshma33c2an1",
      "name": "Elios ESHMA33C2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA33C2AN1",
      "normalizedModelNumber": "eshma33c2an1",
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
      "id": "model-elios-eshua36r2an1",
      "slug": "elios-eshua36r2an1",
      "name": "Elios ESHUA36R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHUA36R2AN1",
      "normalizedModelNumber": "eshua36r2an1",
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
      "id": "model-elios-de18hos25230e3a",
      "slug": "elios-de18hos25230e3a",
      "name": "Elios DE18HOS25230E3A",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DE18HOS25230E3A",
      "normalizedModelNumber": "de18hos25230e3a",
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
      "id": "model-elios-de24hos25230e3",
      "slug": "elios-de24hos25230e3",
      "name": "Elios DE24HOS25230E3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DE24HOS25230E3",
      "normalizedModelNumber": "de24hos25230e3",
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
      "id": "model-elios-eshua48r2an1",
      "slug": "elios-eshua48r2an1",
      "name": "Elios ESHUA48R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHUA48R2AN1",
      "normalizedModelNumber": "eshua48r2an1",
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
      "id": "model-elios-eshba36c2an",
      "slug": "elios-eshba36c2an",
      "name": "Elios ESHBA36C2AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA36C2AN*",
      "normalizedModelNumber": "eshba36c2an*",
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
      "id": "model-elios-dea36hos28230e8",
      "slug": "elios-dea36hos28230e8",
      "name": "Elios DEA36HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA36HOS28230E8",
      "normalizedModelNumber": "dea36hos28230e8",
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
      "id": "model-elios-de24hos25230e3a",
      "slug": "elios-de24hos25230e3a",
      "name": "Elios DE24HOS25230E3A",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DE24HOS25230E3A",
      "normalizedModelNumber": "de24hos25230e3a",
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
      "id": "model-elios-eshea30r2an1",
      "slug": "elios-eshea30r2an1",
      "name": "Elios ESHEA30R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA30R2AN1",
      "normalizedModelNumber": "eshea30r2an1",
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
      "id": "model-elios-eshba24c2an",
      "slug": "elios-eshba24c2an",
      "name": "Elios ESHBA24C2AN*",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHBA24C2AN*",
      "normalizedModelNumber": "eshba24c2an*",
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
      "id": "model-elios-eshma24r2an1",
      "slug": "elios-eshma24r2an1",
      "name": "Elios ESHMA24R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA24R2AN1",
      "normalizedModelNumber": "eshma24r2an1",
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
      "id": "model-elios-dea18hos20230e7",
      "slug": "elios-dea18hos20230e7",
      "name": "Elios DEA18HOS20230E7",
      "seriesId": "series-elios-dea-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA18HOS20230E7",
      "normalizedModelNumber": "dea18hos20230e7",
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
      "id": "model-elios-eshmb36r2an1",
      "slug": "elios-eshmb36r2an1",
      "name": "Elios ESHMB36R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMB36R2AN1",
      "normalizedModelNumber": "eshmb36r2an1",
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
      "id": "model-elios-dea24hos20230e7",
      "slug": "elios-dea24hos20230e7",
      "name": "Elios DEA24HOS20230E7",
      "seriesId": "series-elios-dea-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA24HOS20230E7",
      "normalizedModelNumber": "dea24hos20230e7",
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
      "id": "model-elios-eshea24r2an1",
      "slug": "elios-eshea24r2an1",
      "name": "Elios ESHEA24R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA24R2AN1",
      "normalizedModelNumber": "eshea24r2an1",
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
      "id": "model-elios-eshma30r2an1",
      "slug": "elios-eshma30r2an1",
      "name": "Elios ESHMA30R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA30R2AN1",
      "normalizedModelNumber": "eshma30r2an1",
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
      "id": "model-elios-dea48hos28230e8",
      "slug": "elios-dea48hos28230e8",
      "name": "Elios DEA48HOS28230E8",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA48HOS28230E8",
      "normalizedModelNumber": "dea48hos28230e8",
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
      "id": "model-elios-eshea18r2an1",
      "slug": "elios-eshea18r2an1",
      "name": "Elios ESHEA18R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA18R2AN1",
      "normalizedModelNumber": "eshea18r2an1",
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
      "id": "model-elios-eshea36r2an1",
      "slug": "elios-eshea36r2an1",
      "name": "Elios ESHEA36R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHEA36R2AN1",
      "normalizedModelNumber": "eshea36r2an1",
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
      "id": "model-elios-de36hos25230e3",
      "slug": "elios-de36hos25230e3",
      "name": "Elios DE36HOS25230E3",
      "seriesId": "series-elios-de-series",
      "brandId": "brand-elios",
      "modelNumber": "DE36HOS25230E3",
      "normalizedModelNumber": "de36hos25230e3",
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
      "id": "model-elios-eshma48r2an1",
      "slug": "elios-eshma48r2an1",
      "name": "Elios ESHMA48R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA48R2AN1",
      "normalizedModelNumber": "eshma48r2an1",
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
      "id": "model-elios-dea30hos20230e7",
      "slug": "elios-dea30hos20230e7",
      "name": "Elios DEA30HOS20230E7",
      "seriesId": "series-elios-dea-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA30HOS20230E7",
      "normalizedModelNumber": "dea30hos20230e7",
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
      "id": "model-elios-eshma18r2an1",
      "slug": "elios-eshma18r2an1",
      "name": "Elios ESHMA18R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA18R2AN1",
      "normalizedModelNumber": "eshma18r2an1",
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
      "id": "model-elios-eshma60r2an1",
      "slug": "elios-eshma60r2an1",
      "name": "Elios ESHMA60R2AN1",
      "seriesId": "series-elios-esh-series",
      "brandId": "brand-elios",
      "modelNumber": "ESHMA60R2AN1",
      "normalizedModelNumber": "eshma60r2an1",
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
      "id": "model-elios-dea36hos20230e7",
      "slug": "elios-dea36hos20230e7",
      "name": "Elios DEA36HOS20230E7",
      "seriesId": "series-elios-dea-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA36HOS20230E7",
      "normalizedModelNumber": "dea36hos20230e7",
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
      "id": "model-elios-dea48hos20230e7",
      "slug": "elios-dea48hos20230e7",
      "name": "Elios DEA48HOS20230E7",
      "seriesId": "series-elios-dea-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA48HOS20230E7",
      "normalizedModelNumber": "dea48hos20230e7",
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
      "id": "model-elios-dea60hos20230e7",
      "slug": "elios-dea60hos20230e7",
      "name": "Elios DEA60HOS20230E7",
      "seriesId": "series-elios-dea-series",
      "brandId": "brand-elios",
      "modelNumber": "DEA60HOS20230E7",
      "normalizedModelNumber": "dea60hos20230e7",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-elios-dea09hos25230e8",
      "modelNumber": "DEA09HOS25230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea06hos28230e8",
      "modelNumber": "DEA06HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshma09c2an1",
      "modelNumber": "ESHMA09C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea12hos28230e8",
      "modelNumber": "DEA12HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea12hos25230e8",
      "modelNumber": "DEA12HOS25230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea09hos28230e8",
      "modelNumber": "DEA09HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea27hom23230x2",
      "modelNumber": "DEA27HOM23230X2",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshea12c2an1",
      "modelNumber": "ESHEA12C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshma12c2an1",
      "modelNumber": "ESHMA12C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea36hom23230x2",
      "modelNumber": "DEA36HOM23230X2",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea18hos25230e8",
      "modelNumber": "DEA18HOS25230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea48hom23230x2",
      "modelNumber": "DEA48HOM23230X2",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-exhsa3652av1",
      "modelNumber": "EXHSA3652AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-exhsa1832an1",
      "modelNumber": "EXHSA1832AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-exhsa2742av1",
      "modelNumber": "EXHSA2742AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea27hom25230x3",
      "modelNumber": "DEA27HOM25230X3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea18hom23230x2",
      "modelNumber": "DEA18HOM23230X2",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshma15c2an1",
      "modelNumber": "ESHMA15C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshba30c2an",
      "modelNumber": "ESHBA30C2AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshma24c2an1",
      "modelNumber": "ESHMA24C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea36hom25230x3",
      "modelNumber": "DEA36HOM25230X3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshea18c2an1",
      "modelNumber": "ESHEA18C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshea24c2an1",
      "modelNumber": "ESHEA24C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea24hos25230e8",
      "modelNumber": "DEA24HOS25230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea55hom25230x3",
      "modelNumber": "DEA55HOM25230X3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea18hom25230x3",
      "modelNumber": "DEA18HOM25230X3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea48hom25230x3",
      "modelNumber": "DEA48HOM25230X3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshma18c2an1",
      "modelNumber": "ESHMA18C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshea09c2an1",
      "modelNumber": "ESHEA09C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshba09c2an",
      "modelNumber": "ESHBA09C2AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea18hos28230e8",
      "modelNumber": "DEA18HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-exhza3652av1",
      "modelNumber": "EXHZA3652AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea09hos21115s1",
      "modelNumber": "DEA09HOS21115S1",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshba12c2an",
      "modelNumber": "ESHBA12C2AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-exhsa4862av1",
      "modelNumber": "EXHSA4862AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshba12c1an",
      "modelNumber": "ESHBA12C1AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-exhza4862av1",
      "modelNumber": "EXHZA4862AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-exhza2742av1",
      "modelNumber": "EXHZA2742AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-exhza1832av1",
      "modelNumber": "EXHZA1832AV1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea24hos28230e8",
      "modelNumber": "DEA24HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshba18c2an",
      "modelNumber": "ESHBA18C2AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshma33c2an1",
      "modelNumber": "ESHMA33C2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshua36r2an1",
      "modelNumber": "ESHUA36R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-de18hos25230e3a",
      "modelNumber": "DE18HOS25230E3A",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-de24hos25230e3",
      "modelNumber": "DE24HOS25230E3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshua48r2an1",
      "modelNumber": "ESHUA48R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshba36c2an",
      "modelNumber": "ESHBA36C2AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea36hos28230e8",
      "modelNumber": "DEA36HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-de24hos25230e3a",
      "modelNumber": "DE24HOS25230E3A",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshea30r2an1",
      "modelNumber": "ESHEA30R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshba24c2an",
      "modelNumber": "ESHBA24C2AN*",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshma24r2an1",
      "modelNumber": "ESHMA24R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea18hos20230e7",
      "modelNumber": "DEA18HOS20230E7",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshmb36r2an1",
      "modelNumber": "ESHMB36R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea24hos20230e7",
      "modelNumber": "DEA24HOS20230E7",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshea24r2an1",
      "modelNumber": "ESHEA24R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshma30r2an1",
      "modelNumber": "ESHMA30R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea48hos28230e8",
      "modelNumber": "DEA48HOS28230E8",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshea18r2an1",
      "modelNumber": "ESHEA18R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshea36r2an1",
      "modelNumber": "ESHEA36R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-de36hos25230e3",
      "modelNumber": "DE36HOS25230E3",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshma48r2an1",
      "modelNumber": "ESHMA48R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea30hos20230e7",
      "modelNumber": "DEA30HOS20230E7",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-eshma18r2an1",
      "modelNumber": "ESHMA18R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-eshma60r2an1",
      "modelNumber": "ESHMA60R2AN1",
      "brandId": "brand-elios",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-elios-dea36hos20230e7",
      "modelNumber": "DEA36HOS20230E7",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea48hos20230e7",
      "modelNumber": "DEA48HOS20230E7",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-elios-dea60hos20230e7",
      "modelNumber": "DEA60HOS20230E7",
      "brandId": "brand-elios",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dea06hiw25230e8",
      "modelNumber": "DEA06HIW25230E8",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhma09c2as1",
      "modelNumber": "EWHMA09C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dea09hiw25230e8",
      "modelNumber": "DEA09HIW25230E8",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dea12hiw25230e8",
      "modelNumber": "DEA12HIW25230E8",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dub12hifu230x5a",
      "modelNumber": "DUB12HIFU230X5A",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-de09hiw23230e3",
      "modelNumber": "DE09HIW23230E3",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44487",
      "modelNumber": "IU-44487",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gfhra12c2as1",
      "modelNumber": "GFHRA12C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhma12c2as1",
      "modelNumber": "EWHMA12C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44489",
      "modelNumber": "IU-44489",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua12hifu230e5",
      "modelNumber": "DUA12HIFU230E5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-de12hiw23230e3",
      "modelNumber": "DE12HIW23230E3",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dea18hiw25230e8",
      "modelNumber": "DEA18HIW25230E8",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44493",
      "modelNumber": "IU-44493",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44527",
      "modelNumber": "IU-44527",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44525",
      "modelNumber": "IU-44525",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44526",
      "modelNumber": "IU-44526",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44488",
      "modelNumber": "IU-44488",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44471",
      "modelNumber": "IU-44471",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua12hicu230x5",
      "modelNumber": "DUA12HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhma15c2as1",
      "modelNumber": "EWHMA15C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhba30c2as",
      "modelNumber": "EWHBA30C2AS*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhma24c2as1",
      "modelNumber": "EWHMA24C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44490",
      "modelNumber": "IU-44490",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gohra18c2as1",
      "modelNumber": "GOHRA18C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gohra12c2as1",
      "modelNumber": "GOHRA12C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gqhra24c2as1",
      "modelNumber": "GQHRA24C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dea24hiw25230e8",
      "modelNumber": "DEA24HIW25230E8",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44496",
      "modelNumber": "IU-44496",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44472",
      "modelNumber": "IU-44472",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44494",
      "modelNumber": "IU-44494",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhma18c2as1",
      "modelNumber": "EWHMA18C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gkhra09c2as1",
      "modelNumber": "GKHRA09C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhba09c2an",
      "modelNumber": "EWHBA09C2AN*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44531",
      "modelNumber": "IU-44531",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua24hicu230x5",
      "modelNumber": "DUA24HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dea09hiw21115s1",
      "modelNumber": "DEA09HIW21115S1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhba12c2an",
      "modelNumber": "EWHBA12C2AN*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44528",
      "modelNumber": "IU-44528",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhba12c1an",
      "modelNumber": "EWHBA12C1AN*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44532",
      "modelNumber": "IU-44532",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gkhra12c2as1",
      "modelNumber": "GKHRA12C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44530",
      "modelNumber": "IU-44530",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44529",
      "modelNumber": "IU-44529",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gkhra18c2as1",
      "modelNumber": "GKHRA18C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua09hicu230x5",
      "modelNumber": "DUA09HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua18hicu230x5",
      "modelNumber": "DUA18HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhba18c2an",
      "modelNumber": "EWHBA18C2AN*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua09hidu230x5",
      "modelNumber": "DUA09HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhma33c2as1",
      "modelNumber": "EWHMA33C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gdhra18c2as1",
      "modelNumber": "GDHRA18C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gqhla36r2as1",
      "modelNumber": "GQHLA36R2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua18hidu230x5",
      "modelNumber": "DUA18HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dm18hicu230x5",
      "modelNumber": "DM18HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dm24hicu230x5",
      "modelNumber": "DM24HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gvhla48r2as1",
      "modelNumber": "GVHLA48R2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gdhra09c2as1",
      "modelNumber": "GDHRA09C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-ewhba36c2as",
      "modelNumber": "EWHBA36C2AS*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gdhra12c2as1",
      "modelNumber": "GDHRA12C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua12hidu230x5",
      "modelNumber": "DUA12HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-de18hiw23230e3",
      "modelNumber": "DE18HIW23230E3",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua36hicu230x5",
      "modelNumber": "DUA36HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dm24hidu230x5",
      "modelNumber": "DM24HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dua24hidu230x5",
      "modelNumber": "DUA24HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-dm12hidu230x5",
      "modelNumber": "DM12HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gdhra24c2as1",
      "modelNumber": "GDHRA24C2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gqhla48r2as1",
      "modelNumber": "GQHLA48R2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-de24hiw23230e3",
      "modelNumber": "DE24HIW23230E3",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gghla30r4as1",
      "modelNumber": "GGHLA30R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-ewhba24c2an",
      "modelNumber": "EWHBA24C2AN*",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-eahma24r4as1",
      "modelNumber": "EAHMA24R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-fea18hiahuu230x7",
      "modelNumber": "FEA18HIAHUU230X7",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-dm18hidu230x5",
      "modelNumber": "DM18HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-eahma36r4as1",
      "modelNumber": "EAHMA36R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-fea24hiahuu230x7",
      "modelNumber": "FEA24HIAHUU230X7",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gghla24r4as1",
      "modelNumber": "GGHLA24R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gdhla48r2as1",
      "modelNumber": "GDHLA48R2AS1",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-eahma30r4as1",
      "modelNumber": "EAHMA30R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-dua48hicu230x5",
      "modelNumber": "DUA48HICU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-gphla18r4as1",
      "modelNumber": "GPHLA18R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gghla36r4as1",
      "modelNumber": "GGHLA36R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-dm36hidu230x5",
      "modelNumber": "DM36HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-cub24hac20bwt7a",
      "modelNumber": "CUB24HAC20BWT7A",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahma48r4as1",
      "modelNumber": "EAHMA48R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-dua36hidu230x5",
      "modelNumber": "DUA36HIDU230X5",
      "brandId": "brand-elios",
      "type": "wall-single"
    },
    {
      "id": "iu-fea30hiahuu230x7",
      "modelNumber": "FEA30HIAHUU230X7",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gchma24rbas1",
      "modelNumber": "GCHMA24RBAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-guhma24rbas1",
      "modelNumber": "GUHMA24RBAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-guhma36rbas1",
      "modelNumber": "GUHMA36RBAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gchma36rcas1",
      "modelNumber": "GCHMA36RCAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-eahma60r4as1",
      "modelNumber": "EAHMA60R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-fea36hiahuu230x7",
      "modelNumber": "FEA36HIAHUU230X7",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gchma36rbas1",
      "modelNumber": "GCHMA36RBAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gphla24r4as1",
      "modelNumber": "GPHLA24R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-guhma36rcas1",
      "modelNumber": "GUHMA36RCAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-fea48hiahuu230x7",
      "modelNumber": "FEA48HIAHUU230X7",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-cub36hac20bwt7a",
      "modelNumber": "CUB36HAC20BWT7A",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-cub36hac20cwt7a",
      "modelNumber": "CUB36HAC20CWT7A",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gphla36r4as1",
      "modelNumber": "GPHLA36R4AS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-fea60hiahuu230x7",
      "modelNumber": "FEA60HIAHUU230X7",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gchma60rdas1",
      "modelNumber": "GCHMA60RDAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    },
    {
      "id": "iu-gchma48rcas1",
      "modelNumber": "GCHMA48RCAS1",
      "brandId": "brand-elios",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-elios-dea09hos25230e8-dea06hiw25230e8",
      "slug": "elios-dea09hos25230e8-dea06hiw25230e8",
      "modelId": "model-elios-dea09hos25230e8",
      "outdoorUnitId": "ou-elios-dea09hos25230e8",
      "indoorUnitId": "iu-dea06hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea06hos28230e8-dea06hiw25230e8",
      "slug": "elios-dea06hos28230e8-dea06hiw25230e8",
      "modelId": "model-elios-dea06hos28230e8",
      "outdoorUnitId": "ou-elios-dea06hos28230e8",
      "indoorUnitId": "iu-dea06hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma09c2an1-ewhma09c2as1",
      "slug": "elios-eshma09c2an1-ewhma09c2as1",
      "modelId": "model-elios-eshma09c2an1",
      "outdoorUnitId": "ou-elios-eshma09c2an1",
      "indoorUnitId": "iu-ewhma09c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos25230e8-dea09hiw25230e8",
      "slug": "elios-dea09hos25230e8-dea09hiw25230e8",
      "modelId": "model-elios-dea09hos25230e8",
      "outdoorUnitId": "ou-elios-dea09hos25230e8",
      "indoorUnitId": "iu-dea09hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos28230e8-dea12hiw25230e8",
      "slug": "elios-dea12hos28230e8-dea12hiw25230e8",
      "modelId": "model-elios-dea12hos28230e8",
      "outdoorUnitId": "ou-elios-dea12hos28230e8",
      "indoorUnitId": "iu-dea12hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos25230e8-dub12hifu230x5a",
      "slug": "elios-dea12hos25230e8-dub12hifu230x5a",
      "modelId": "model-elios-dea12hos25230e8",
      "outdoorUnitId": "ou-elios-dea12hos25230e8",
      "indoorUnitId": "iu-dub12hifu230x5a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos28230e8-de09hiw23230e3",
      "slug": "elios-dea09hos28230e8-de09hiw23230e3",
      "modelId": "model-elios-dea09hos28230e8",
      "outdoorUnitId": "ou-elios-dea09hos28230e8",
      "indoorUnitId": "iu-de09hiw23230e3",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos25230e8-dea12hiw25230e8",
      "slug": "elios-dea12hos25230e8-dea12hiw25230e8",
      "modelId": "model-elios-dea12hos25230e8",
      "outdoorUnitId": "ou-elios-dea12hos25230e8",
      "indoorUnitId": "iu-dea12hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea27hom23230x2-iu-44487",
      "slug": "elios-dea27hom23230x2-iu-44487",
      "modelId": "model-elios-dea27hom23230x2",
      "outdoorUnitId": "ou-elios-dea27hom23230x2",
      "indoorUnitId": "iu-iu-44487",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea12c2an1-gfhra12c2as1",
      "slug": "elios-eshea12c2an1-gfhra12c2as1",
      "modelId": "model-elios-eshea12c2an1",
      "outdoorUnitId": "ou-elios-eshea12c2an1",
      "indoorUnitId": "iu-gfhra12c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos28230e8-dub12hifu230x5a",
      "slug": "elios-dea12hos28230e8-dub12hifu230x5a",
      "modelId": "model-elios-dea12hos28230e8",
      "outdoorUnitId": "ou-elios-dea12hos28230e8",
      "indoorUnitId": "iu-dub12hifu230x5a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma12c2an1-ewhma12c2as1",
      "slug": "elios-eshma12c2an1-ewhma12c2as1",
      "modelId": "model-elios-eshma12c2an1",
      "outdoorUnitId": "ou-elios-eshma12c2an1",
      "indoorUnitId": "iu-ewhma12c2as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hom23230x2-iu-44489",
      "slug": "elios-dea36hom23230x2-iu-44489",
      "modelId": "model-elios-dea36hom23230x2",
      "outdoorUnitId": "ou-elios-dea36hom23230x2",
      "indoorUnitId": "iu-iu-44489",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos28230e8-dua12hifu230e5",
      "slug": "elios-dea12hos28230e8-dua12hifu230e5",
      "modelId": "model-elios-dea12hos28230e8",
      "outdoorUnitId": "ou-elios-dea12hos28230e8",
      "indoorUnitId": "iu-dua12hifu230e5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos28230e8-de12hiw23230e3",
      "slug": "elios-dea12hos28230e8-de12hiw23230e3",
      "modelId": "model-elios-dea12hos28230e8",
      "outdoorUnitId": "ou-elios-dea12hos28230e8",
      "indoorUnitId": "iu-de12hiw23230e3",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos25230e8-dea18hiw25230e8",
      "slug": "elios-dea18hos25230e8-dea18hiw25230e8",
      "modelId": "model-elios-dea18hos25230e8",
      "outdoorUnitId": "ou-elios-dea18hos25230e8",
      "indoorUnitId": "iu-dea18hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea48hom23230x2-iu-44493",
      "slug": "elios-dea48hom23230x2-iu-44493",
      "modelId": "model-elios-dea48hom23230x2",
      "outdoorUnitId": "ou-elios-dea48hom23230x2",
      "indoorUnitId": "iu-iu-44493",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhsa3652av1-iu-44527",
      "slug": "elios-exhsa3652av1-iu-44527",
      "modelId": "model-elios-exhsa3652av1",
      "outdoorUnitId": "ou-elios-exhsa3652av1",
      "indoorUnitId": "iu-iu-44527",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhsa1832an1-iu-44525",
      "slug": "elios-exhsa1832an1-iu-44525",
      "modelId": "model-elios-exhsa1832an1",
      "outdoorUnitId": "ou-elios-exhsa1832an1",
      "indoorUnitId": "iu-iu-44525",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhsa2742av1-iu-44526",
      "slug": "elios-exhsa2742av1-iu-44526",
      "modelId": "model-elios-exhsa2742av1",
      "outdoorUnitId": "ou-elios-exhsa2742av1",
      "indoorUnitId": "iu-iu-44526",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea27hom25230x3-iu-44488",
      "slug": "elios-dea27hom25230x3-iu-44488",
      "modelId": "model-elios-dea27hom25230x3",
      "outdoorUnitId": "ou-elios-dea27hom25230x3",
      "indoorUnitId": "iu-iu-44488",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hom23230x2-iu-44471",
      "slug": "elios-dea18hom23230x2-iu-44471",
      "modelId": "model-elios-dea18hom23230x2",
      "outdoorUnitId": "ou-elios-dea18hom23230x2",
      "indoorUnitId": "iu-iu-44471",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos25230e8-dua12hicu230x5",
      "slug": "elios-dea12hos25230e8-dua12hicu230x5",
      "modelId": "model-elios-dea12hos25230e8",
      "outdoorUnitId": "ou-elios-dea12hos25230e8",
      "indoorUnitId": "iu-dua12hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma15c2an1-ewhma15c2as1",
      "slug": "elios-eshma15c2an1-ewhma15c2as1",
      "modelId": "model-elios-eshma15c2an1",
      "outdoorUnitId": "ou-elios-eshma15c2an1",
      "indoorUnitId": "iu-ewhma15c2as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos25230e8-dua12hifu230e5",
      "slug": "elios-dea12hos25230e8-dua12hifu230e5",
      "modelId": "model-elios-dea12hos25230e8",
      "outdoorUnitId": "ou-elios-dea12hos25230e8",
      "indoorUnitId": "iu-dua12hifu230e5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba30c2an-ewhba30c2as",
      "slug": "elios-eshba30c2an-ewhba30c2as",
      "modelId": "model-elios-eshba30c2an",
      "outdoorUnitId": "ou-elios-eshba30c2an",
      "indoorUnitId": "iu-ewhba30c2as",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos28230e8-dua12hicu230x5",
      "slug": "elios-dea12hos28230e8-dua12hicu230x5",
      "modelId": "model-elios-dea12hos28230e8",
      "outdoorUnitId": "ou-elios-dea12hos28230e8",
      "indoorUnitId": "iu-dua12hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma24c2an1-ewhma24c2as1",
      "slug": "elios-eshma24c2an1-ewhma24c2as1",
      "modelId": "model-elios-eshma24c2an1",
      "outdoorUnitId": "ou-elios-eshma24c2an1",
      "indoorUnitId": "iu-ewhma24c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hom25230x3-iu-44490",
      "slug": "elios-dea36hom25230x3-iu-44490",
      "modelId": "model-elios-dea36hom25230x3",
      "outdoorUnitId": "ou-elios-dea36hom25230x3",
      "indoorUnitId": "iu-iu-44490",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea18c2an1-gohra18c2as1",
      "slug": "elios-eshea18c2an1-gohra18c2as1",
      "modelId": "model-elios-eshea18c2an1",
      "outdoorUnitId": "ou-elios-eshea18c2an1",
      "indoorUnitId": "iu-gohra18c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea12c2an1-gohra12c2as1",
      "slug": "elios-eshea12c2an1-gohra12c2as1",
      "modelId": "model-elios-eshea12c2an1",
      "outdoorUnitId": "ou-elios-eshea12c2an1",
      "indoorUnitId": "iu-gohra12c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea24c2an1-gqhra24c2as1",
      "slug": "elios-eshea24c2an1-gqhra24c2as1",
      "modelId": "model-elios-eshea24c2an1",
      "outdoorUnitId": "ou-elios-eshea24c2an1",
      "indoorUnitId": "iu-gqhra24c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos25230e8-dea24hiw25230e8",
      "slug": "elios-dea24hos25230e8-dea24hiw25230e8",
      "modelId": "model-elios-dea24hos25230e8",
      "outdoorUnitId": "ou-elios-dea24hos25230e8",
      "indoorUnitId": "iu-dea24hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea55hom25230x3-iu-44496",
      "slug": "elios-dea55hom25230x3-iu-44496",
      "modelId": "model-elios-dea55hom25230x3",
      "outdoorUnitId": "ou-elios-dea55hom25230x3",
      "indoorUnitId": "iu-iu-44496",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hom25230x3-iu-44472",
      "slug": "elios-dea18hom25230x3-iu-44472",
      "modelId": "model-elios-dea18hom25230x3",
      "outdoorUnitId": "ou-elios-dea18hom25230x3",
      "indoorUnitId": "iu-iu-44472",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea48hom25230x3-iu-44494",
      "slug": "elios-dea48hom25230x3-iu-44494",
      "modelId": "model-elios-dea48hom25230x3",
      "outdoorUnitId": "ou-elios-dea48hom25230x3",
      "indoorUnitId": "iu-iu-44494",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma18c2an1-ewhma18c2as1",
      "slug": "elios-eshma18c2an1-ewhma18c2as1",
      "modelId": "model-elios-eshma18c2an1",
      "outdoorUnitId": "ou-elios-eshma18c2an1",
      "indoorUnitId": "iu-ewhma18c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea09c2an1-gkhra09c2as1",
      "slug": "elios-eshea09c2an1-gkhra09c2as1",
      "modelId": "model-elios-eshea09c2an1",
      "outdoorUnitId": "ou-elios-eshea09c2an1",
      "indoorUnitId": "iu-gkhra09c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba09c2an-ewhba09c2an",
      "slug": "elios-eshba09c2an-ewhba09c2an",
      "modelId": "model-elios-eshba09c2an",
      "outdoorUnitId": "ou-elios-eshba09c2an",
      "indoorUnitId": "iu-ewhba09c2an",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos28230e8-dea18hiw25230e8",
      "slug": "elios-dea18hos28230e8-dea18hiw25230e8",
      "modelId": "model-elios-dea18hos28230e8",
      "outdoorUnitId": "ou-elios-dea18hos28230e8",
      "indoorUnitId": "iu-dea18hiw25230e8",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhza3652av1-iu-44531",
      "slug": "elios-exhza3652av1-iu-44531",
      "modelId": "model-elios-exhza3652av1",
      "outdoorUnitId": "ou-elios-exhza3652av1",
      "indoorUnitId": "iu-iu-44531",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos25230e8-dua24hicu230x5",
      "slug": "elios-dea24hos25230e8-dua24hicu230x5",
      "modelId": "model-elios-dea24hos25230e8",
      "outdoorUnitId": "ou-elios-dea24hos25230e8",
      "indoorUnitId": "iu-dua24hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos21115s1-dea09hiw21115s1",
      "slug": "elios-dea09hos21115s1-dea09hiw21115s1",
      "modelId": "model-elios-dea09hos21115s1",
      "outdoorUnitId": "ou-elios-dea09hos21115s1",
      "indoorUnitId": "iu-dea09hiw21115s1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba12c2an-ewhba12c2an",
      "slug": "elios-eshba12c2an-ewhba12c2an",
      "modelId": "model-elios-eshba12c2an",
      "outdoorUnitId": "ou-elios-eshba12c2an",
      "indoorUnitId": "iu-ewhba12c2an",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhsa4862av1-iu-44528",
      "slug": "elios-exhsa4862av1-iu-44528",
      "modelId": "model-elios-exhsa4862av1",
      "outdoorUnitId": "ou-elios-exhsa4862av1",
      "indoorUnitId": "iu-iu-44528",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba12c1an-ewhba12c1an",
      "slug": "elios-eshba12c1an-ewhba12c1an",
      "modelId": "model-elios-eshba12c1an",
      "outdoorUnitId": "ou-elios-eshba12c1an",
      "indoorUnitId": "iu-ewhba12c1an",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhza4862av1-iu-44532",
      "slug": "elios-exhza4862av1-iu-44532",
      "modelId": "model-elios-exhza4862av1",
      "outdoorUnitId": "ou-elios-exhza4862av1",
      "indoorUnitId": "iu-iu-44532",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea12c2an1-gkhra12c2as1",
      "slug": "elios-eshea12c2an1-gkhra12c2as1",
      "modelId": "model-elios-eshea12c2an1",
      "outdoorUnitId": "ou-elios-eshea12c2an1",
      "indoorUnitId": "iu-gkhra12c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhza2742av1-iu-44530",
      "slug": "elios-exhza2742av1-iu-44530",
      "modelId": "model-elios-exhza2742av1",
      "outdoorUnitId": "ou-elios-exhza2742av1",
      "indoorUnitId": "iu-iu-44530",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-exhza1832av1-iu-44529",
      "slug": "elios-exhza1832av1-iu-44529",
      "modelId": "model-elios-exhza1832av1",
      "outdoorUnitId": "ou-elios-exhza1832av1",
      "indoorUnitId": "iu-iu-44529",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea18c2an1-gkhra18c2as1",
      "slug": "elios-eshea18c2an1-gkhra18c2as1",
      "modelId": "model-elios-eshea18c2an1",
      "outdoorUnitId": "ou-elios-eshea18c2an1",
      "indoorUnitId": "iu-gkhra18c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos28230e8-dua24hicu230x5",
      "slug": "elios-dea24hos28230e8-dua24hicu230x5",
      "modelId": "model-elios-dea24hos28230e8",
      "outdoorUnitId": "ou-elios-dea24hos28230e8",
      "indoorUnitId": "iu-dua24hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos28230e8-dua09hicu230x5",
      "slug": "elios-dea09hos28230e8-dua09hicu230x5",
      "modelId": "model-elios-dea09hos28230e8",
      "outdoorUnitId": "ou-elios-dea09hos28230e8",
      "indoorUnitId": "iu-dua09hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos25230e8-dua18hicu230x5",
      "slug": "elios-dea18hos25230e8-dua18hicu230x5",
      "modelId": "model-elios-dea18hos25230e8",
      "outdoorUnitId": "ou-elios-dea18hos25230e8",
      "indoorUnitId": "iu-dua18hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba18c2an-ewhba18c2an",
      "slug": "elios-eshba18c2an-ewhba18c2an",
      "modelId": "model-elios-eshba18c2an",
      "outdoorUnitId": "ou-elios-eshba18c2an",
      "indoorUnitId": "iu-ewhba18c2an",
      "minHeatingTempC": -25,
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos28230e8-dua09hidu230x5",
      "slug": "elios-dea09hos28230e8-dua09hidu230x5",
      "modelId": "model-elios-dea09hos28230e8",
      "outdoorUnitId": "ou-elios-dea09hos28230e8",
      "indoorUnitId": "iu-dua09hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos25230e8-dua09hicu230x5",
      "slug": "elios-dea09hos25230e8-dua09hicu230x5",
      "modelId": "model-elios-dea09hos25230e8",
      "outdoorUnitId": "ou-elios-dea09hos25230e8",
      "indoorUnitId": "iu-dua09hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma33c2an1-ewhma33c2as1",
      "slug": "elios-eshma33c2an1-ewhma33c2as1",
      "modelId": "model-elios-eshma33c2an1",
      "outdoorUnitId": "ou-elios-eshma33c2an1",
      "indoorUnitId": "iu-ewhma33c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea18c2an1-gdhra18c2as1",
      "slug": "elios-eshea18c2an1-gdhra18c2as1",
      "modelId": "model-elios-eshea18c2an1",
      "outdoorUnitId": "ou-elios-eshea18c2an1",
      "indoorUnitId": "iu-gdhra18c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshua36r2an1-gqhla36r2as1",
      "slug": "elios-eshua36r2an1-gqhla36r2as1",
      "modelId": "model-elios-eshua36r2an1",
      "outdoorUnitId": "ou-elios-eshua36r2an1",
      "indoorUnitId": "iu-gqhla36r2as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos28230e8-dua18hicu230x5",
      "slug": "elios-dea18hos28230e8-dua18hicu230x5",
      "modelId": "model-elios-dea18hos28230e8",
      "outdoorUnitId": "ou-elios-dea18hos28230e8",
      "indoorUnitId": "iu-dua18hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos25230e8-dua18hidu230x5",
      "slug": "elios-dea18hos25230e8-dua18hidu230x5",
      "modelId": "model-elios-dea18hos25230e8",
      "outdoorUnitId": "ou-elios-dea18hos25230e8",
      "indoorUnitId": "iu-dua18hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de18hos25230e3a-dm18hicu230x5",
      "slug": "elios-de18hos25230e3a-dm18hicu230x5",
      "modelId": "model-elios-de18hos25230e3a",
      "outdoorUnitId": "ou-elios-de18hos25230e3a",
      "indoorUnitId": "iu-dm18hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de24hos25230e3-dm24hicu230x5",
      "slug": "elios-de24hos25230e3-dm24hicu230x5",
      "modelId": "model-elios-de24hos25230e3",
      "outdoorUnitId": "ou-elios-de24hos25230e3",
      "indoorUnitId": "iu-dm24hicu230x5",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshua48r2an1-gvhla48r2as1",
      "slug": "elios-eshua48r2an1-gvhla48r2as1",
      "modelId": "model-elios-eshua48r2an1",
      "outdoorUnitId": "ou-elios-eshua48r2an1",
      "indoorUnitId": "iu-gvhla48r2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea09c2an1-gdhra09c2as1",
      "slug": "elios-eshea09c2an1-gdhra09c2as1",
      "modelId": "model-elios-eshea09c2an1",
      "outdoorUnitId": "ou-elios-eshea09c2an1",
      "indoorUnitId": "iu-gdhra09c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba36c2an-ewhba36c2as",
      "slug": "elios-eshba36c2an-ewhba36c2as",
      "modelId": "model-elios-eshba36c2an",
      "outdoorUnitId": "ou-elios-eshba36c2an",
      "indoorUnitId": "iu-ewhba36c2as",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea12c2an1-gdhra12c2as1",
      "slug": "elios-eshea12c2an1-gdhra12c2as1",
      "modelId": "model-elios-eshea12c2an1",
      "outdoorUnitId": "ou-elios-eshea12c2an1",
      "indoorUnitId": "iu-gdhra12c2as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos28230e8-dua12hidu230x5",
      "slug": "elios-dea12hos28230e8-dua12hidu230x5",
      "modelId": "model-elios-dea12hos28230e8",
      "outdoorUnitId": "ou-elios-dea12hos28230e8",
      "indoorUnitId": "iu-dua12hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de18hos25230e3a-de18hiw23230e3",
      "slug": "elios-de18hos25230e3a-de18hiw23230e3",
      "modelId": "model-elios-de18hos25230e3a",
      "outdoorUnitId": "ou-elios-de18hos25230e3a",
      "indoorUnitId": "iu-de18hiw23230e3",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hos28230e8-dua36hicu230x5",
      "slug": "elios-dea36hos28230e8-dua36hicu230x5",
      "modelId": "model-elios-dea36hos28230e8",
      "outdoorUnitId": "ou-elios-dea36hos28230e8",
      "indoorUnitId": "iu-dua36hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos28230e8-de18hiw23230e3",
      "slug": "elios-dea18hos28230e8-de18hiw23230e3",
      "modelId": "model-elios-dea18hos28230e8",
      "outdoorUnitId": "ou-elios-dea18hos28230e8",
      "indoorUnitId": "iu-de18hiw23230e3",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de24hos25230e3a-dm24hidu230x5",
      "slug": "elios-de24hos25230e3a-dm24hidu230x5",
      "modelId": "model-elios-de24hos25230e3a",
      "outdoorUnitId": "ou-elios-de24hos25230e3a",
      "indoorUnitId": "iu-dm24hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos28230e8-dua24hidu230x5",
      "slug": "elios-dea24hos28230e8-dua24hidu230x5",
      "modelId": "model-elios-dea24hos28230e8",
      "outdoorUnitId": "ou-elios-dea24hos28230e8",
      "indoorUnitId": "iu-dua24hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea09hos25230e8-dua09hidu230x5",
      "slug": "elios-dea09hos25230e8-dua09hidu230x5",
      "modelId": "model-elios-dea09hos25230e8",
      "outdoorUnitId": "ou-elios-dea09hos25230e8",
      "indoorUnitId": "iu-dua09hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos25230e8-dm12hidu230x5",
      "slug": "elios-dea12hos25230e8-dm12hidu230x5",
      "modelId": "model-elios-dea12hos25230e8",
      "outdoorUnitId": "ou-elios-dea12hos25230e8",
      "indoorUnitId": "iu-dm12hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea24c2an1-gdhra24c2as1",
      "slug": "elios-eshea24c2an1-gdhra24c2as1",
      "modelId": "model-elios-eshea24c2an1",
      "outdoorUnitId": "ou-elios-eshea24c2an1",
      "indoorUnitId": "iu-gdhra24c2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea12hos25230e8-dua12hidu230x5",
      "slug": "elios-dea12hos25230e8-dua12hidu230x5",
      "modelId": "model-elios-dea12hos25230e8",
      "outdoorUnitId": "ou-elios-dea12hos25230e8",
      "indoorUnitId": "iu-dua12hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshua48r2an1-gqhla48r2as1",
      "slug": "elios-eshua48r2an1-gqhla48r2as1",
      "modelId": "model-elios-eshua48r2an1",
      "outdoorUnitId": "ou-elios-eshua48r2an1",
      "indoorUnitId": "iu-gqhla48r2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos25230e8-dua24hidu230x5",
      "slug": "elios-dea24hos25230e8-dua24hidu230x5",
      "modelId": "model-elios-dea24hos25230e8",
      "outdoorUnitId": "ou-elios-dea24hos25230e8",
      "indoorUnitId": "iu-dua24hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de24hos25230e3a-de24hiw23230e3",
      "slug": "elios-de24hos25230e3a-de24hiw23230e3",
      "modelId": "model-elios-de24hos25230e3a",
      "outdoorUnitId": "ou-elios-de24hos25230e3a",
      "indoorUnitId": "iu-de24hiw23230e3",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos28230e8-de24hiw23230e3",
      "slug": "elios-dea24hos28230e8-de24hiw23230e3",
      "modelId": "model-elios-dea24hos28230e8",
      "outdoorUnitId": "ou-elios-dea24hos28230e8",
      "indoorUnitId": "iu-de24hiw23230e3",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea30r2an1-gghla30r4as1",
      "slug": "elios-eshea30r2an1-gghla30r4as1",
      "modelId": "model-elios-eshea30r2an1",
      "outdoorUnitId": "ou-elios-eshea30r2an1",
      "indoorUnitId": "iu-gghla30r4as1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshba24c2an-ewhba24c2an",
      "slug": "elios-eshba24c2an-ewhba24c2an",
      "modelId": "model-elios-eshba24c2an",
      "outdoorUnitId": "ou-elios-eshba24c2an",
      "indoorUnitId": "iu-ewhba24c2an",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma24r2an1-eahma24r4as1",
      "slug": "elios-eshma24r2an1-eahma24r4as1",
      "modelId": "model-elios-eshma24r2an1",
      "outdoorUnitId": "ou-elios-eshma24r2an1",
      "indoorUnitId": "iu-eahma24r4as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos20230e7-fea18hiahuu230x7",
      "slug": "elios-dea18hos20230e7-fea18hiahuu230x7",
      "modelId": "model-elios-dea18hos20230e7",
      "outdoorUnitId": "ou-elios-dea18hos20230e7",
      "indoorUnitId": "iu-fea18hiahuu230x7",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de18hos25230e3a-dm18hidu230x5",
      "slug": "elios-de18hos25230e3a-dm18hidu230x5",
      "modelId": "model-elios-de18hos25230e3a",
      "outdoorUnitId": "ou-elios-de18hos25230e3a",
      "indoorUnitId": "iu-dm18hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos28230e8-dua18hidu230x5",
      "slug": "elios-dea18hos28230e8-dua18hidu230x5",
      "modelId": "model-elios-dea18hos28230e8",
      "outdoorUnitId": "ou-elios-dea18hos28230e8",
      "indoorUnitId": "iu-dua18hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos28230e8-dua24hidu230x5",
      "slug": "elios-dea18hos28230e8-dua24hidu230x5",
      "modelId": "model-elios-dea18hos28230e8",
      "outdoorUnitId": "ou-elios-dea18hos28230e8",
      "indoorUnitId": "iu-dua24hidu230x5",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshmb36r2an1-eahma36r4as1",
      "slug": "elios-eshmb36r2an1-eahma36r4as1",
      "modelId": "model-elios-eshmb36r2an1",
      "outdoorUnitId": "ou-elios-eshmb36r2an1",
      "indoorUnitId": "iu-eahma36r4as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos20230e7-fea24hiahuu230x7",
      "slug": "elios-dea24hos20230e7-fea24hiahuu230x7",
      "modelId": "model-elios-dea24hos20230e7",
      "outdoorUnitId": "ou-elios-dea24hos20230e7",
      "indoorUnitId": "iu-fea24hiahuu230x7",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea24r2an1-gghla24r4as1",
      "slug": "elios-eshea24r2an1-gghla24r4as1",
      "modelId": "model-elios-eshea24r2an1",
      "outdoorUnitId": "ou-elios-eshea24r2an1",
      "indoorUnitId": "iu-gghla24r4as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshua48r2an1-gdhla48r2as1",
      "slug": "elios-eshua48r2an1-gdhla48r2as1",
      "modelId": "model-elios-eshua48r2an1",
      "outdoorUnitId": "ou-elios-eshua48r2an1",
      "indoorUnitId": "iu-gdhla48r2as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma30r2an1-eahma30r4as1",
      "slug": "elios-eshma30r2an1-eahma30r4as1",
      "modelId": "model-elios-eshma30r2an1",
      "outdoorUnitId": "ou-elios-eshma30r2an1",
      "indoorUnitId": "iu-eahma30r4as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea48hos28230e8-dua48hicu230x5",
      "slug": "elios-dea48hos28230e8-dua48hicu230x5",
      "modelId": "model-elios-dea48hos28230e8",
      "outdoorUnitId": "ou-elios-dea48hos28230e8",
      "indoorUnitId": "iu-dua48hicu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea18r2an1-gphla18r4as1",
      "slug": "elios-eshea18r2an1-gphla18r4as1",
      "modelId": "model-elios-eshea18r2an1",
      "outdoorUnitId": "ou-elios-eshea18r2an1",
      "indoorUnitId": "iu-gphla18r4as1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea36r2an1-gghla36r4as1",
      "slug": "elios-eshea36r2an1-gghla36r4as1",
      "modelId": "model-elios-eshea36r2an1",
      "outdoorUnitId": "ou-elios-eshea36r2an1",
      "indoorUnitId": "iu-gghla36r4as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-de36hos25230e3-dm36hidu230x5",
      "slug": "elios-de36hos25230e3-dm36hidu230x5",
      "modelId": "model-elios-de36hos25230e3",
      "outdoorUnitId": "ou-elios-de36hos25230e3",
      "indoorUnitId": "iu-dm36hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea24hos20230e7-cub24hac20bwt7a",
      "slug": "elios-dea24hos20230e7-cub24hac20bwt7a",
      "modelId": "model-elios-dea24hos20230e7",
      "outdoorUnitId": "ou-elios-dea24hos20230e7",
      "indoorUnitId": "iu-cub24hac20bwt7a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma48r2an1-eahma48r4as1",
      "slug": "elios-eshma48r2an1-eahma48r4as1",
      "modelId": "model-elios-eshma48r2an1",
      "outdoorUnitId": "ou-elios-eshma48r2an1",
      "indoorUnitId": "iu-eahma48r4as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hos28230e8-dua36hidu230x5",
      "slug": "elios-dea36hos28230e8-dua36hidu230x5",
      "modelId": "model-elios-dea36hos28230e8",
      "outdoorUnitId": "ou-elios-dea36hos28230e8",
      "indoorUnitId": "iu-dua36hidu230x5",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea30hos20230e7-fea30hiahuu230x7",
      "slug": "elios-dea30hos20230e7-fea30hiahuu230x7",
      "modelId": "model-elios-dea30hos20230e7",
      "outdoorUnitId": "ou-elios-dea30hos20230e7",
      "indoorUnitId": "iu-fea30hiahuu230x7",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea18hos20230e7-cub24hac20bwt7a",
      "slug": "elios-dea18hos20230e7-cub24hac20bwt7a",
      "modelId": "model-elios-dea18hos20230e7",
      "outdoorUnitId": "ou-elios-dea18hos20230e7",
      "indoorUnitId": "iu-cub24hac20bwt7a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma18r2an1-gchma24rbas1",
      "slug": "elios-eshma18r2an1-gchma24rbas1",
      "modelId": "model-elios-eshma18r2an1",
      "outdoorUnitId": "ou-elios-eshma18r2an1",
      "indoorUnitId": "iu-gchma24rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma18r2an1-guhma24rbas1",
      "slug": "elios-eshma18r2an1-guhma24rbas1",
      "modelId": "model-elios-eshma18r2an1",
      "outdoorUnitId": "ou-elios-eshma18r2an1",
      "indoorUnitId": "iu-guhma24rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma30r2an1-guhma36rbas1",
      "slug": "elios-eshma30r2an1-guhma36rbas1",
      "modelId": "model-elios-eshma30r2an1",
      "outdoorUnitId": "ou-elios-eshma30r2an1",
      "indoorUnitId": "iu-guhma36rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma30r2an1-gchma36rcas1",
      "slug": "elios-eshma30r2an1-gchma36rcas1",
      "modelId": "model-elios-eshma30r2an1",
      "outdoorUnitId": "ou-elios-eshma30r2an1",
      "indoorUnitId": "iu-gchma36rcas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma24r2an1-guhma24rbas1",
      "slug": "elios-eshma24r2an1-guhma24rbas1",
      "modelId": "model-elios-eshma24r2an1",
      "outdoorUnitId": "ou-elios-eshma24r2an1",
      "indoorUnitId": "iu-guhma24rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma60r2an1-eahma60r4as1",
      "slug": "elios-eshma60r2an1-eahma60r4as1",
      "modelId": "model-elios-eshma60r2an1",
      "outdoorUnitId": "ou-elios-eshma60r2an1",
      "indoorUnitId": "iu-eahma60r4as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hos20230e7-fea36hiahuu230x7",
      "slug": "elios-dea36hos20230e7-fea36hiahuu230x7",
      "modelId": "model-elios-dea36hos20230e7",
      "outdoorUnitId": "ou-elios-dea36hos20230e7",
      "indoorUnitId": "iu-fea36hiahuu230x7",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea24r2an1-guhma24rbas1",
      "slug": "elios-eshea24r2an1-guhma24rbas1",
      "modelId": "model-elios-eshea24r2an1",
      "outdoorUnitId": "ou-elios-eshea24r2an1",
      "indoorUnitId": "iu-guhma24rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma30r2an1-gchma36rbas1",
      "slug": "elios-eshma30r2an1-gchma36rbas1",
      "modelId": "model-elios-eshma30r2an1",
      "outdoorUnitId": "ou-elios-eshma30r2an1",
      "indoorUnitId": "iu-gchma36rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea24r2an1-gphla24r4as1",
      "slug": "elios-eshea24r2an1-gphla24r4as1",
      "modelId": "model-elios-eshea24r2an1",
      "outdoorUnitId": "ou-elios-eshea24r2an1",
      "indoorUnitId": "iu-gphla24r4as1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma30r2an1-guhma36rcas1",
      "slug": "elios-eshma30r2an1-guhma36rcas1",
      "modelId": "model-elios-eshma30r2an1",
      "outdoorUnitId": "ou-elios-eshma30r2an1",
      "indoorUnitId": "iu-guhma36rcas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma24r2an1-gchma24rbas1",
      "slug": "elios-eshma24r2an1-gchma24rbas1",
      "modelId": "model-elios-eshma24r2an1",
      "outdoorUnitId": "ou-elios-eshma24r2an1",
      "indoorUnitId": "iu-gchma24rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshmb36r2an1-gchma36rbas1",
      "slug": "elios-eshmb36r2an1-gchma36rbas1",
      "modelId": "model-elios-eshmb36r2an1",
      "outdoorUnitId": "ou-elios-eshmb36r2an1",
      "indoorUnitId": "iu-gchma36rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshmb36r2an1-guhma36rcas1",
      "slug": "elios-eshmb36r2an1-guhma36rcas1",
      "modelId": "model-elios-eshmb36r2an1",
      "outdoorUnitId": "ou-elios-eshmb36r2an1",
      "indoorUnitId": "iu-guhma36rcas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshmb36r2an1-gchma36rcas1",
      "slug": "elios-eshmb36r2an1-gchma36rcas1",
      "modelId": "model-elios-eshmb36r2an1",
      "outdoorUnitId": "ou-elios-eshmb36r2an1",
      "indoorUnitId": "iu-gchma36rcas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshmb36r2an1-guhma36rbas1",
      "slug": "elios-eshmb36r2an1-guhma36rbas1",
      "modelId": "model-elios-eshmb36r2an1",
      "outdoorUnitId": "ou-elios-eshmb36r2an1",
      "indoorUnitId": "iu-guhma36rbas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea48hos20230e7-fea48hiahuu230x7",
      "slug": "elios-dea48hos20230e7-fea48hiahuu230x7",
      "modelId": "model-elios-dea48hos20230e7",
      "outdoorUnitId": "ou-elios-dea48hos20230e7",
      "indoorUnitId": "iu-fea48hiahuu230x7",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hos20230e7-cub36hac20bwt7a",
      "slug": "elios-dea36hos20230e7-cub36hac20bwt7a",
      "modelId": "model-elios-dea36hos20230e7",
      "outdoorUnitId": "ou-elios-dea36hos20230e7",
      "indoorUnitId": "iu-cub36hac20bwt7a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea30hos20230e7-cub36hac20cwt7a",
      "slug": "elios-dea30hos20230e7-cub36hac20cwt7a",
      "modelId": "model-elios-dea30hos20230e7",
      "outdoorUnitId": "ou-elios-dea30hos20230e7",
      "indoorUnitId": "iu-cub36hac20cwt7a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshea36r2an1-gphla36r4as1",
      "slug": "elios-eshea36r2an1-gphla36r4as1",
      "modelId": "model-elios-eshea36r2an1",
      "outdoorUnitId": "ou-elios-eshea36r2an1",
      "indoorUnitId": "iu-gphla36r4as1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea60hos20230e7-fea60hiahuu230x7",
      "slug": "elios-dea60hos20230e7-fea60hiahuu230x7",
      "modelId": "model-elios-dea60hos20230e7",
      "outdoorUnitId": "ou-elios-dea60hos20230e7",
      "indoorUnitId": "iu-fea60hiahuu230x7",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma60r2an1-gchma60rdas1",
      "slug": "elios-eshma60r2an1-gchma60rdas1",
      "modelId": "model-elios-eshma60r2an1",
      "outdoorUnitId": "ou-elios-eshma60r2an1",
      "indoorUnitId": "iu-gchma60rdas1",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea30hos20230e7-cub36hac20bwt7a",
      "slug": "elios-dea30hos20230e7-cub36hac20bwt7a",
      "modelId": "model-elios-dea30hos20230e7",
      "outdoorUnitId": "ou-elios-dea30hos20230e7",
      "indoorUnitId": "iu-cub36hac20bwt7a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-dea36hos20230e7-cub36hac20cwt7a",
      "slug": "elios-dea36hos20230e7-cub36hac20cwt7a",
      "modelId": "model-elios-dea36hos20230e7",
      "outdoorUnitId": "ou-elios-dea36hos20230e7",
      "indoorUnitId": "iu-cub36hac20cwt7a",
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
          "sourceId": "src-elios-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-elios-eshma48r2an1-gchma48rcas1",
      "slug": "elios-eshma48r2an1-gchma48rcas1",
      "modelId": "model-elios-eshma48r2an1",
      "outdoorUnitId": "ou-elios-eshma48r2an1",
      "indoorUnitId": "iu-gchma48rcas1",
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
          "sourceId": "src-elios-epa",
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
