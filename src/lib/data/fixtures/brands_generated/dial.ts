import type { BrandDataset } from "../../types";

export const brand_dialDataset: BrandDataset = {
  "brand": {
    "id": "brand-dial",
    "slug": "dial",
    "name": "DIAL",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DIAL",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-dial-epa",
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
      "id": "series-dial-hi-uni",
      "slug": "dial-hi-uni",
      "name": "Hi UNI",
      "brandId": "brand-dial",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi UNI de DIAL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-dial-hi-multi-xtreme",
      "slug": "dial-hi-multi-xtreme",
      "name": "Hi MULTI Xtreme",
      "brandId": "brand-dial",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI Xtreme de DIAL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-dial-hi-ultra-hd",
      "slug": "dial-hi-ultra-hd",
      "name": "Hi ULTRA HD",
      "brandId": "brand-dial",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi ULTRA HD de DIAL",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-dial-18000z-23s-230-o",
      "slug": "dial-18000z-23s-230-o",
      "name": "DIAL 18000Z-23S-230-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "18000Z-23S-230-O",
      "normalizedModelNumber": "18000z-23s-230-o",
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
      "id": "model-dial-18000z-23s-230-i",
      "slug": "dial-18000z-23s-230-i",
      "name": "DIAL 18000Z-23S-230-I",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "18000Z-23S-230-I",
      "normalizedModelNumber": "18000z-23s-230-i",
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
      "id": "model-dial-szhw18ww230bbe",
      "slug": "dial-szhw18ww230bbe",
      "name": "DIAL SZHW18WW230BBE",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZHW18WW230BBE",
      "normalizedModelNumber": "szhw18ww230bbe",
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
      "id": "model-dial-24000z-03-o",
      "slug": "dial-24000z-03-o",
      "name": "DIAL 24000Z-03-O",
      "seriesId": "series-dial-hi-multi-xtreme",
      "brandId": "brand-dial",
      "modelNumber": "24000Z-03-O",
      "normalizedModelNumber": "24000z-03-o",
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
      "id": "model-dial-mzme24ww3p230bbj",
      "slug": "dial-mzme24ww3p230bbj",
      "name": "DIAL MZME24WW3P230BBJ",
      "seriesId": "series-dial-hi-multi-xtreme",
      "brandId": "brand-dial",
      "modelNumber": "MZME24WW3P230BBJ",
      "normalizedModelNumber": "mzme24ww3p230bbj",
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
      "id": "model-dial-szhw09ww230bbj",
      "slug": "dial-szhw09ww230bbj",
      "name": "DIAL SZHW09WW230BBJ",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZHW09WW230BBJ",
      "normalizedModelNumber": "szhw09ww230bbj",
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
      "id": "model-dial-9000z-225s-230-o",
      "slug": "dial-9000z-225s-230-o",
      "name": "DIAL 9000Z-22.5S-230-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "9000Z-22.5S-230-O",
      "normalizedModelNumber": "9000z-22.5s-230-o",
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
      "id": "model-dial-szhw12ww115bag",
      "slug": "dial-szhw12ww115bag",
      "name": "DIAL SZHW12WW115BAG",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZHW12WW115BAG",
      "normalizedModelNumber": "szhw12ww115bag",
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
      "id": "model-dial-36000z-04-o",
      "slug": "dial-36000z-04-o",
      "name": "DIAL 36000Z-04-O",
      "seriesId": "series-dial-hi-multi-xtreme",
      "brandId": "brand-dial",
      "modelNumber": "36000Z-04-O",
      "normalizedModelNumber": "36000z-04-o",
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
      "id": "model-dial-mzme18ww2p230baj",
      "slug": "dial-mzme18ww2p230baj",
      "name": "DIAL MZME18WW2P230BAJ",
      "seriesId": "series-dial-hi-multi-xtreme",
      "brandId": "brand-dial",
      "modelNumber": "MZME18WW2P230BAJ",
      "normalizedModelNumber": "mzme18ww2p230baj",
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
      "id": "model-dial-szhw12ww230baj",
      "slug": "dial-szhw12ww230baj",
      "name": "DIAL SZHW12WW230BAJ",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZHW12WW230BAJ",
      "normalizedModelNumber": "szhw12ww230baj",
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
      "id": "model-dial-12000z-22s-230-o",
      "slug": "dial-12000z-22s-230-o",
      "name": "DIAL 12000Z-22S-230-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "12000Z-22S-230-O",
      "normalizedModelNumber": "12000z-22s-230-o",
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
      "id": "model-dial-mzme36ww4p230baj",
      "slug": "dial-mzme36ww4p230baj",
      "name": "DIAL MZME36WW4P230BAJ",
      "seriesId": "series-dial-hi-multi-xtreme",
      "brandId": "brand-dial",
      "modelNumber": "MZME36WW4P230BAJ",
      "normalizedModelNumber": "mzme36ww4p230baj",
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
      "id": "model-dial-szhw23ww230bje",
      "slug": "dial-szhw23ww230bje",
      "name": "DIAL SZHW23WW230BJE",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZHW23WW230BJE",
      "normalizedModelNumber": "szhw23ww230bje",
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
      "id": "model-dial-szun18ww230",
      "slug": "dial-szun18ww230",
      "name": "DIAL SZUN18WW230",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZUN18WW230",
      "normalizedModelNumber": "szun18ww230",
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
      "id": "model-dial-szun12ww230",
      "slug": "dial-szun12ww230",
      "name": "DIAL SZUN12WW230",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZUN12WW230",
      "normalizedModelNumber": "szun12ww230",
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
      "id": "model-dial-18000-uni-o",
      "slug": "dial-18000-uni-o",
      "name": "DIAL 18000-UNI-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "18000-UNI-O",
      "normalizedModelNumber": "18000-uni-o",
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
      "id": "model-dial-12000-uni-o",
      "slug": "dial-12000-uni-o",
      "name": "DIAL 12000-UNI-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "12000-UNI-O",
      "normalizedModelNumber": "12000-uni-o",
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
      "id": "model-dial-23400-21s-230-o",
      "slug": "dial-23400-21s-230-o",
      "name": "DIAL 23400-21S-230-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "23400-21S-230-O",
      "normalizedModelNumber": "23400-21s-230-o",
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
      "id": "model-dial-24000z-21s-230-o",
      "slug": "dial-24000z-21s-230-o",
      "name": "DIAL 24000Z-21S-230-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "24000Z-21S-230-O",
      "normalizedModelNumber": "24000z-21s-230-o",
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
      "id": "model-dial-9000-uni-o",
      "slug": "dial-9000-uni-o",
      "name": "DIAL 9000-UNI-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "9000-UNI-O",
      "normalizedModelNumber": "9000-uni-o",
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
      "id": "model-dial-9000-195s-115-o",
      "slug": "dial-9000-195s-115-o",
      "name": "DIAL 9000-19.5S-115-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "9000-19.5S-115-O",
      "normalizedModelNumber": "9000-19.5s-115-o",
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
      "id": "model-dial-24000-uni-o",
      "slug": "dial-24000-uni-o",
      "name": "DIAL 24000-UNI-O",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "24000-UNI-O",
      "normalizedModelNumber": "24000-uni-o",
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
      "id": "model-dial-szhw09ww115ahe",
      "slug": "dial-szhw09ww115ahe",
      "name": "DIAL SZHW09WW115AHE",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZHW09WW115AHE",
      "normalizedModelNumber": "szhw09ww115ahe",
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
      "id": "model-dial-szun24ww230",
      "slug": "dial-szun24ww230",
      "name": "DIAL SZUN24WW230",
      "seriesId": "series-dial-hi-uni",
      "brandId": "brand-dial",
      "modelNumber": "SZUN24WW230",
      "normalizedModelNumber": "szun24ww230",
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
      "id": "model-dial-48000-chp-o",
      "slug": "dial-48000-chp-o",
      "name": "DIAL 48000-CHP-O",
      "seriesId": "series-dial-hi-ultra-hd",
      "brandId": "brand-dial",
      "modelNumber": "48000-CHP-O",
      "normalizedModelNumber": "48000-chp-o",
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
      "id": "model-dial-24000-chp-o",
      "slug": "dial-24000-chp-o",
      "name": "DIAL 24000-CHP-O",
      "seriesId": "series-dial-hi-ultra-hd",
      "brandId": "brand-dial",
      "modelNumber": "24000-CHP-O",
      "normalizedModelNumber": "24000-chp-o",
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
      "id": "ou-dial-18000z-23s-230-o",
      "modelNumber": "18000Z-23S-230-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-18000z-23s-230-i",
      "modelNumber": "18000Z-23S-230-I",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szhw18ww230bbe",
      "modelNumber": "SZHW18WW230BBE",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-24000z-03-o",
      "modelNumber": "24000Z-03-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-mzme24ww3p230bbj",
      "modelNumber": "MZME24WW3P230BBJ",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szhw09ww230bbj",
      "modelNumber": "SZHW09WW230BBJ",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-9000z-225s-230-o",
      "modelNumber": "9000Z-22.5S-230-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szhw12ww115bag",
      "modelNumber": "SZHW12WW115BAG",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-36000z-04-o",
      "modelNumber": "36000Z-04-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-mzme18ww2p230baj",
      "modelNumber": "MZME18WW2P230BAJ",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szhw12ww230baj",
      "modelNumber": "SZHW12WW230BAJ",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-12000z-22s-230-o",
      "modelNumber": "12000Z-22S-230-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-mzme36ww4p230baj",
      "modelNumber": "MZME36WW4P230BAJ",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szhw23ww230bje",
      "modelNumber": "SZHW23WW230BJE",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szun18ww230",
      "modelNumber": "SZUN18WW230",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szun12ww230",
      "modelNumber": "SZUN12WW230",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-18000-uni-o",
      "modelNumber": "18000-UNI-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-12000-uni-o",
      "modelNumber": "12000-UNI-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-23400-21s-230-o",
      "modelNumber": "23400-21S-230-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-24000z-21s-230-o",
      "modelNumber": "24000Z-21S-230-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-9000-uni-o",
      "modelNumber": "9000-UNI-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-9000-195s-115-o",
      "modelNumber": "9000-19.5S-115-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-24000-uni-o",
      "modelNumber": "24000-UNI-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szhw09ww115ahe",
      "modelNumber": "SZHW09WW115AHE",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-szun24ww230",
      "modelNumber": "SZUN24WW230",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-48000-chp-o",
      "modelNumber": "48000-CHP-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dial-24000-chp-o",
      "modelNumber": "24000-CHP-O",
      "brandId": "brand-dial",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-18000z-23s-230-i",
      "modelNumber": "18000Z-23S-230-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-18000z-23s-230-o",
      "modelNumber": "18000Z-23S-230-O",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-szhw18nn230bbe",
      "modelNumber": "SZHW18NN230BBE",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43627",
      "modelNumber": "IU-43627",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43635",
      "modelNumber": "IU-43635",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-szhw09nn230bbj",
      "modelNumber": "SZHW09NN230BBJ",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-9000z-225s-230-i",
      "modelNumber": "9000Z-22.5S-230-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-szhw12nn115bag",
      "modelNumber": "SZHW12NN115BAG",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43629",
      "modelNumber": "IU-43629",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43634",
      "modelNumber": "IU-43634",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-szhw12nw230baj",
      "modelNumber": "SZHW12NW230BAJ",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-12000z-22s-230-i",
      "modelNumber": "12000Z-22S-230-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43636",
      "modelNumber": "IU-43636",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-szhw23nn230bje",
      "modelNumber": "SZHW23NN230BJE",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-emca18cre230",
      "modelNumber": "EMCA18CRE230",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-emca12cre230",
      "modelNumber": "EMCA12CRE230",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-18000z-cas-i",
      "modelNumber": "18000Z-CAS-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-12000z-cas-i",
      "modelNumber": "12000Z-CAS-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-23400-21s-230-i",
      "modelNumber": "23400-21S-230-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-24000z-21s-230-i",
      "modelNumber": "24000Z-21S-230-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-9000z-cas-i",
      "modelNumber": "9000Z-CAS-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-9000-195s-115-i",
      "modelNumber": "9000-19.5S-115-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-24000z-cas-i",
      "modelNumber": "24000Z-CAS-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-szhw09nn115ahe",
      "modelNumber": "SZHW09NN115AHE",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-emca24cre230",
      "modelNumber": "EMCA24CRE230",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-9000z-duc-i",
      "modelNumber": "9000Z-DUC-I",
      "brandId": "brand-dial",
      "type": "wall-single"
    },
    {
      "id": "iu-48000-chp-ahu",
      "modelNumber": "48000-CHP-AHU",
      "brandId": "brand-dial",
      "type": "central-ducted"
    },
    {
      "id": "iu-24000-chp-ahu",
      "modelNumber": "24000-CHP-AHU",
      "brandId": "brand-dial",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-dial-18000z-23s-230-o-18000z-23s-230-i",
      "slug": "dial-18000z-23s-230-o-18000z-23s-230-i",
      "modelId": "model-dial-18000z-23s-230-o",
      "outdoorUnitId": "ou-dial-18000z-23s-230-o",
      "indoorUnitId": "iu-18000z-23s-230-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-18000z-23s-230-i-18000z-23s-230-o",
      "slug": "dial-18000z-23s-230-i-18000z-23s-230-o",
      "modelId": "model-dial-18000z-23s-230-i",
      "outdoorUnitId": "ou-dial-18000z-23s-230-i",
      "indoorUnitId": "iu-18000z-23s-230-o",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szhw18ww230bbe-szhw18nn230bbe",
      "slug": "dial-szhw18ww230bbe-szhw18nn230bbe",
      "modelId": "model-dial-szhw18ww230bbe",
      "outdoorUnitId": "ou-dial-szhw18ww230bbe",
      "indoorUnitId": "iu-szhw18nn230bbe",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-24000z-03-o-iu-43627",
      "slug": "dial-24000z-03-o-iu-43627",
      "modelId": "model-dial-24000z-03-o",
      "outdoorUnitId": "ou-dial-24000z-03-o",
      "indoorUnitId": "iu-iu-43627",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-mzme24ww3p230bbj-iu-43635",
      "slug": "dial-mzme24ww3p230bbj-iu-43635",
      "modelId": "model-dial-mzme24ww3p230bbj",
      "outdoorUnitId": "ou-dial-mzme24ww3p230bbj",
      "indoorUnitId": "iu-iu-43635",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szhw09ww230bbj-szhw09nn230bbj",
      "slug": "dial-szhw09ww230bbj-szhw09nn230bbj",
      "modelId": "model-dial-szhw09ww230bbj",
      "outdoorUnitId": "ou-dial-szhw09ww230bbj",
      "indoorUnitId": "iu-szhw09nn230bbj",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-9000z-225s-230-o-9000z-225s-230-i",
      "slug": "dial-9000z-225s-230-o-9000z-225s-230-i",
      "modelId": "model-dial-9000z-225s-230-o",
      "outdoorUnitId": "ou-dial-9000z-225s-230-o",
      "indoorUnitId": "iu-9000z-225s-230-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szhw12ww115bag-szhw12nn115bag",
      "slug": "dial-szhw12ww115bag-szhw12nn115bag",
      "modelId": "model-dial-szhw12ww115bag",
      "outdoorUnitId": "ou-dial-szhw12ww115bag",
      "indoorUnitId": "iu-szhw12nn115bag",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-36000z-04-o-iu-43629",
      "slug": "dial-36000z-04-o-iu-43629",
      "modelId": "model-dial-36000z-04-o",
      "outdoorUnitId": "ou-dial-36000z-04-o",
      "indoorUnitId": "iu-iu-43629",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-mzme18ww2p230baj-iu-43634",
      "slug": "dial-mzme18ww2p230baj-iu-43634",
      "modelId": "model-dial-mzme18ww2p230baj",
      "outdoorUnitId": "ou-dial-mzme18ww2p230baj",
      "indoorUnitId": "iu-iu-43634",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szhw12ww230baj-szhw12nw230baj",
      "slug": "dial-szhw12ww230baj-szhw12nw230baj",
      "modelId": "model-dial-szhw12ww230baj",
      "outdoorUnitId": "ou-dial-szhw12ww230baj",
      "indoorUnitId": "iu-szhw12nw230baj",
      "minHeatingTempC": -15,
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-12000z-22s-230-o-12000z-22s-230-i",
      "slug": "dial-12000z-22s-230-o-12000z-22s-230-i",
      "modelId": "model-dial-12000z-22s-230-o",
      "outdoorUnitId": "ou-dial-12000z-22s-230-o",
      "indoorUnitId": "iu-12000z-22s-230-i",
      "minHeatingTempC": -15,
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-mzme36ww4p230baj-iu-43636",
      "slug": "dial-mzme36ww4p230baj-iu-43636",
      "modelId": "model-dial-mzme36ww4p230baj",
      "outdoorUnitId": "ou-dial-mzme36ww4p230baj",
      "indoorUnitId": "iu-iu-43636",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szhw23ww230bje-szhw23nn230bje",
      "slug": "dial-szhw23ww230bje-szhw23nn230bje",
      "modelId": "model-dial-szhw23ww230bje",
      "outdoorUnitId": "ou-dial-szhw23ww230bje",
      "indoorUnitId": "iu-szhw23nn230bje",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szun18ww230-emca18cre230",
      "slug": "dial-szun18ww230-emca18cre230",
      "modelId": "model-dial-szun18ww230",
      "outdoorUnitId": "ou-dial-szun18ww230",
      "indoorUnitId": "iu-emca18cre230",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szun12ww230-emca12cre230",
      "slug": "dial-szun12ww230-emca12cre230",
      "modelId": "model-dial-szun12ww230",
      "outdoorUnitId": "ou-dial-szun12ww230",
      "indoorUnitId": "iu-emca12cre230",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-18000-uni-o-18000z-cas-i",
      "slug": "dial-18000-uni-o-18000z-cas-i",
      "modelId": "model-dial-18000-uni-o",
      "outdoorUnitId": "ou-dial-18000-uni-o",
      "indoorUnitId": "iu-18000z-cas-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-12000-uni-o-12000z-cas-i",
      "slug": "dial-12000-uni-o-12000z-cas-i",
      "modelId": "model-dial-12000-uni-o",
      "outdoorUnitId": "ou-dial-12000-uni-o",
      "indoorUnitId": "iu-12000z-cas-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-23400-21s-230-o-23400-21s-230-i",
      "slug": "dial-23400-21s-230-o-23400-21s-230-i",
      "modelId": "model-dial-23400-21s-230-o",
      "outdoorUnitId": "ou-dial-23400-21s-230-o",
      "indoorUnitId": "iu-23400-21s-230-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-24000z-21s-230-o-24000z-21s-230-i",
      "slug": "dial-24000z-21s-230-o-24000z-21s-230-i",
      "modelId": "model-dial-24000z-21s-230-o",
      "outdoorUnitId": "ou-dial-24000z-21s-230-o",
      "indoorUnitId": "iu-24000z-21s-230-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-9000-uni-o-9000z-cas-i",
      "slug": "dial-9000-uni-o-9000z-cas-i",
      "modelId": "model-dial-9000-uni-o",
      "outdoorUnitId": "ou-dial-9000-uni-o",
      "indoorUnitId": "iu-9000z-cas-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-9000-195s-115-o-9000-195s-115-i",
      "slug": "dial-9000-195s-115-o-9000-195s-115-i",
      "modelId": "model-dial-9000-195s-115-o",
      "outdoorUnitId": "ou-dial-9000-195s-115-o",
      "indoorUnitId": "iu-9000-195s-115-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-24000-uni-o-24000z-cas-i",
      "slug": "dial-24000-uni-o-24000z-cas-i",
      "modelId": "model-dial-24000-uni-o",
      "outdoorUnitId": "ou-dial-24000-uni-o",
      "indoorUnitId": "iu-24000z-cas-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szhw09ww115ahe-szhw09nn115ahe",
      "slug": "dial-szhw09ww115ahe-szhw09nn115ahe",
      "modelId": "model-dial-szhw09ww115ahe",
      "outdoorUnitId": "ou-dial-szhw09ww115ahe",
      "indoorUnitId": "iu-szhw09nn115ahe",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-szun24ww230-emca24cre230",
      "slug": "dial-szun24ww230-emca24cre230",
      "modelId": "model-dial-szun24ww230",
      "outdoorUnitId": "ou-dial-szun24ww230",
      "indoorUnitId": "iu-emca24cre230",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-9000-uni-o-9000z-duc-i",
      "slug": "dial-9000-uni-o-9000z-duc-i",
      "modelId": "model-dial-9000-uni-o",
      "outdoorUnitId": "ou-dial-9000-uni-o",
      "indoorUnitId": "iu-9000z-duc-i",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-48000-chp-o-48000-chp-ahu",
      "slug": "dial-48000-chp-o-48000-chp-ahu",
      "modelId": "model-dial-48000-chp-o",
      "outdoorUnitId": "ou-dial-48000-chp-o",
      "indoorUnitId": "iu-48000-chp-ahu",
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
          "sourceId": "src-dial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dial-24000-chp-o-24000-chp-ahu",
      "slug": "dial-24000-chp-o-24000-chp-ahu",
      "modelId": "model-dial-24000-chp-o",
      "outdoorUnitId": "ou-dial-24000-chp-o",
      "indoorUnitId": "iu-24000-chp-ahu",
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
          "sourceId": "src-dial-epa",
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
