import type { BrandDataset } from "../../types";

export const brand_gridlessDataset: BrandDataset = {
  "brand": {
    "id": "brand-gridless",
    "slug": "gridless",
    "name": "Gridless",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Gridless",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-gridless-epa",
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
      "id": "series-gridless-hyper-heat-single-zone",
      "slug": "gridless-hyper-heat-single-zone",
      "name": "HYPER HEAT SINGLE ZONE",
      "brandId": "brand-gridless",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HYPER HEAT SINGLE ZONE de Gridless",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gridless-gridless-hd",
      "slug": "gridless-gridless-hd",
      "name": "Gridless HD",
      "brandId": "brand-gridless",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Gridless HD de Gridless",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gridless-entry-level-single-zone",
      "slug": "gridless-entry-level-single-zone",
      "name": "ENTRY LEVEL SINGLE ZONE",
      "brandId": "brand-gridless",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ENTRY LEVEL SINGLE ZONE de Gridless",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gridless-gridless-multi-zone",
      "slug": "gridless-gridless-multi-zone",
      "name": "Gridless MULTI ZONE",
      "brandId": "brand-gridless",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Gridless MULTI ZONE de Gridless",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gridless-gridless-central",
      "slug": "gridless-gridless-central",
      "name": "Gridless CENTRAL",
      "brandId": "brand-gridless",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Gridless CENTRAL de Gridless",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-gridless-grid09ohhv",
      "slug": "gridless-grid09ohhv",
      "name": "Gridless GRID09OHHV",
      "seriesId": "series-gridless-hyper-heat-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID09OHHV",
      "normalizedModelNumber": "grid09ohhv",
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
      "id": "model-gridless-grid12ohhv",
      "slug": "gridless-grid12ohhv",
      "name": "Gridless GRID12OHHV",
      "seriesId": "series-gridless-hyper-heat-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID12OHHV",
      "normalizedModelNumber": "grid12ohhv",
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
      "id": "model-gridless-grid15ohhv",
      "slug": "gridless-grid15ohhv",
      "name": "Gridless GRID15OHHV",
      "seriesId": "series-gridless-hyper-heat-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID15OHHV",
      "normalizedModelNumber": "grid15ohhv",
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
      "id": "model-gridless-o-ayd09sd-1",
      "slug": "gridless-o-ayd09sd-1",
      "name": "Gridless O-AYD09SD-1",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD09SD-1",
      "normalizedModelNumber": "o-ayd09sd-1",
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
      "id": "model-gridless-grid09ohv",
      "slug": "gridless-grid09ohv",
      "name": "Gridless GRID09OHV",
      "seriesId": "series-gridless-entry-level-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID09OHV",
      "normalizedModelNumber": "grid09ohv",
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
      "id": "model-gridless-o-ayd12sd-1",
      "slug": "gridless-o-ayd12sd-1",
      "name": "Gridless O-AYD12SD-1",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD12SD-1",
      "normalizedModelNumber": "o-ayd12sd-1",
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
      "id": "model-gridless-grid12ohv",
      "slug": "gridless-grid12ohv",
      "name": "Gridless GRID12OHV",
      "seriesId": "series-gridless-entry-level-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID12OHV",
      "normalizedModelNumber": "grid12ohv",
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
      "id": "model-gridless-grid24om3",
      "slug": "gridless-grid24om3",
      "name": "Gridless GRID24OM3",
      "seriesId": "series-gridless-gridless-multi-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID24OM3",
      "normalizedModelNumber": "grid24om3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-gridless-grid24ohv",
      "slug": "gridless-grid24ohv",
      "name": "Gridless GRID24OHV",
      "seriesId": "series-gridless-entry-level-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID24OHV",
      "normalizedModelNumber": "grid24ohv",
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
      "id": "model-gridless-grid18om2",
      "slug": "gridless-grid18om2",
      "name": "Gridless GRID18OM2",
      "seriesId": "series-gridless-gridless-multi-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID18OM2",
      "normalizedModelNumber": "grid18om2",
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
      "id": "model-gridless-grid36om4",
      "slug": "gridless-grid36om4",
      "name": "Gridless GRID36OM4",
      "seriesId": "series-gridless-gridless-multi-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID36OM4",
      "normalizedModelNumber": "grid36om4",
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
      "id": "model-gridless-grid48om5",
      "slug": "gridless-grid48om5",
      "name": "Gridless GRID48OM5",
      "seriesId": "series-gridless-gridless-multi-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID48OM5",
      "normalizedModelNumber": "grid48om5",
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
      "id": "model-gridless-o-ayd24sd-3",
      "slug": "gridless-o-ayd24sd-3",
      "name": "Gridless O-AYD24SD-3",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD24SD-3",
      "normalizedModelNumber": "o-ayd24sd-3",
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
      "id": "model-gridless-o-ayd36sd-4",
      "slug": "gridless-o-ayd36sd-4",
      "name": "Gridless O-AYD36SD-4",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD36SD-4",
      "normalizedModelNumber": "o-ayd36sd-4",
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
      "id": "model-gridless-o-ayd24sd-1",
      "slug": "gridless-o-ayd24sd-1",
      "name": "Gridless O-AYD24SD-1",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD24SD-1",
      "normalizedModelNumber": "o-ayd24sd-1",
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
      "id": "model-gridless-grid18ohv",
      "slug": "gridless-grid18ohv",
      "name": "Gridless GRID18OHV",
      "seriesId": "series-gridless-entry-level-single-zone",
      "brandId": "brand-gridless",
      "modelNumber": "GRID18OHV",
      "normalizedModelNumber": "grid18ohv",
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
      "id": "model-gridless-o-ayd18sd-2",
      "slug": "gridless-o-ayd18sd-2",
      "name": "Gridless O-AYD18SD-2",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD18SD-2",
      "normalizedModelNumber": "o-ayd18sd-2",
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
      "id": "model-gridless-o-ayd18sd-1",
      "slug": "gridless-o-ayd18sd-1",
      "name": "Gridless O-AYD18SD-1",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD18SD-1",
      "normalizedModelNumber": "o-ayd18sd-1",
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
      "id": "model-gridless-grid24oc",
      "slug": "gridless-grid24oc",
      "name": "Gridless GRID24OC",
      "seriesId": "series-gridless-gridless-central",
      "brandId": "brand-gridless",
      "modelNumber": "GRID24OC",
      "normalizedModelNumber": "grid24oc",
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
      "id": "model-gridless-o-ayd42sd-5",
      "slug": "gridless-o-ayd42sd-5",
      "name": "Gridless O-AYD42SD-5",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYD42SD-5",
      "normalizedModelNumber": "o-ayd42sd-5",
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
      "id": "model-gridless-grid36oc",
      "slug": "gridless-grid36oc",
      "name": "Gridless GRID36OC",
      "seriesId": "series-gridless-gridless-central",
      "brandId": "brand-gridless",
      "modelNumber": "GRID36OC",
      "normalizedModelNumber": "grid36oc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-gridless-grid48oc",
      "slug": "gridless-grid48oc",
      "name": "Gridless GRID48OC",
      "seriesId": "series-gridless-gridless-central",
      "brandId": "brand-gridless",
      "modelNumber": "GRID48OC",
      "normalizedModelNumber": "grid48oc",
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
      "id": "model-gridless-grid60oc",
      "slug": "gridless-grid60oc",
      "name": "Gridless GRID60OC",
      "seriesId": "series-gridless-gridless-central",
      "brandId": "brand-gridless",
      "modelNumber": "GRID60OC",
      "normalizedModelNumber": "grid60oc",
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
    },
    {
      "id": "model-gridless-o-ayc48sd-1",
      "slug": "gridless-o-ayc48sd-1",
      "name": "Gridless O-AYC48SD-1",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYC48SD-1",
      "normalizedModelNumber": "o-ayc48sd-1",
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
      "id": "model-gridless-o-ayc24sd-1",
      "slug": "gridless-o-ayc24sd-1",
      "name": "Gridless O-AYC24SD-1",
      "seriesId": "series-gridless-gridless-hd",
      "brandId": "brand-gridless",
      "modelNumber": "O-AYC24SD-1",
      "normalizedModelNumber": "o-ayc24sd-1",
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
      "id": "ou-gridless-grid09ohhv",
      "modelNumber": "GRID09OHHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid12ohhv",
      "modelNumber": "GRID12OHHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid15ohhv",
      "modelNumber": "GRID15OHHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-o-ayd09sd-1",
      "modelNumber": "O-AYD09SD-1",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-grid09ohv",
      "modelNumber": "GRID09OHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-o-ayd12sd-1",
      "modelNumber": "O-AYD12SD-1",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-grid12ohv",
      "modelNumber": "GRID12OHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid24om3",
      "modelNumber": "GRID24OM3",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid24ohv",
      "modelNumber": "GRID24OHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid18om2",
      "modelNumber": "GRID18OM2",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid36om4",
      "modelNumber": "GRID36OM4",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid48om5",
      "modelNumber": "GRID48OM5",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-o-ayd24sd-3",
      "modelNumber": "O-AYD24SD-3",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-o-ayd36sd-4",
      "modelNumber": "O-AYD36SD-4",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-o-ayd24sd-1",
      "modelNumber": "O-AYD24SD-1",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-grid18ohv",
      "modelNumber": "GRID18OHV",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-o-ayd18sd-2",
      "modelNumber": "O-AYD18SD-2",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-o-ayd18sd-1",
      "modelNumber": "O-AYD18SD-1",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-grid24oc",
      "modelNumber": "GRID24OC",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-o-ayd42sd-5",
      "modelNumber": "O-AYD42SD-5",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-grid36oc",
      "modelNumber": "GRID36OC",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid48oc",
      "modelNumber": "GRID48OC",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-grid60oc",
      "modelNumber": "GRID60OC",
      "brandId": "brand-gridless",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gridless-o-ayc48sd-1",
      "modelNumber": "O-AYC48SD-1",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-gridless-o-ayc24sd-1",
      "modelNumber": "O-AYC24SD-1",
      "brandId": "brand-gridless",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-grid09whhv",
      "modelNumber": "GRID09WHHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid12whhv",
      "modelNumber": "GRID12WHHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid15whhv",
      "modelNumber": "GRID15WHHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-i-ayd09w-1",
      "modelNumber": "I-AYD09W-1",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid09whv",
      "modelNumber": "GRID09WHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-i-ayd12w-1",
      "modelNumber": "I-AYD12W-1",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid12whv",
      "modelNumber": "GRID12WHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45423",
      "modelNumber": "IU-45423",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid24whv",
      "modelNumber": "GRID24WHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45421",
      "modelNumber": "IU-45421",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45424",
      "modelNumber": "IU-45424",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45425",
      "modelNumber": "IU-45425",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45431",
      "modelNumber": "IU-45431",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45432",
      "modelNumber": "IU-45432",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-i-ayd24w-1",
      "modelNumber": "I-AYD24W-1",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid18whv",
      "modelNumber": "GRID18WHV",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45429",
      "modelNumber": "IU-45429",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-i-ayd18w-1",
      "modelNumber": "I-AYD18W-1",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid24vah",
      "modelNumber": "GRID24VAH",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-45433",
      "modelNumber": "IU-45433",
      "brandId": "brand-gridless",
      "type": "wall-single"
    },
    {
      "id": "iu-grid36vah",
      "modelNumber": "GRID36VAH",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-grid48vah",
      "modelNumber": "GRID48VAH",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-grid60vah",
      "modelNumber": "GRID60VAH",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-i-ayc48vah-1",
      "modelNumber": "I-AYC48VAH-1",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc37d3j",
      "modelNumber": "DC37D3J",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc49b3j",
      "modelNumber": "DC49B3J",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-i-ayc24vah-1",
      "modelNumber": "I-AYC24VAH-1",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc61c4j",
      "modelNumber": "DC61C4J",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc31d2j",
      "modelNumber": "DC31D2J",
      "brandId": "brand-gridless",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-gridless-grid09ohhv-grid09whhv",
      "slug": "gridless-grid09ohhv-grid09whhv",
      "modelId": "model-gridless-grid09ohhv",
      "outdoorUnitId": "ou-gridless-grid09ohhv",
      "indoorUnitId": "iu-grid09whhv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 32.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid12ohhv-grid12whhv",
      "slug": "gridless-grid12ohhv-grid12whhv",
      "modelId": "model-gridless-grid12ohhv",
      "outdoorUnitId": "ou-gridless-grid12ohhv",
      "indoorUnitId": "iu-grid12whhv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid15ohhv-grid15whhv",
      "slug": "gridless-grid15ohhv-grid15whhv",
      "modelId": "model-gridless-grid15ohhv",
      "outdoorUnitId": "ou-gridless-grid15ohhv",
      "indoorUnitId": "iu-grid15whhv",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd09sd-1-i-ayd09w-1",
      "slug": "gridless-o-ayd09sd-1-i-ayd09w-1",
      "modelId": "model-gridless-o-ayd09sd-1",
      "outdoorUnitId": "ou-gridless-o-ayd09sd-1",
      "indoorUnitId": "iu-i-ayd09w-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid09ohv-grid09whv",
      "slug": "gridless-grid09ohv-grid09whv",
      "modelId": "model-gridless-grid09ohv",
      "outdoorUnitId": "ou-gridless-grid09ohv",
      "indoorUnitId": "iu-grid09whv",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd12sd-1-i-ayd12w-1",
      "slug": "gridless-o-ayd12sd-1-i-ayd12w-1",
      "modelId": "model-gridless-o-ayd12sd-1",
      "outdoorUnitId": "ou-gridless-o-ayd12sd-1",
      "indoorUnitId": "iu-i-ayd12w-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid12ohv-grid12whv",
      "slug": "gridless-grid12ohv-grid12whv",
      "modelId": "model-gridless-grid12ohv",
      "outdoorUnitId": "ou-gridless-grid12ohv",
      "indoorUnitId": "iu-grid12whv",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid24om3-iu-45423",
      "slug": "gridless-grid24om3-iu-45423",
      "modelId": "model-gridless-grid24om3",
      "outdoorUnitId": "ou-gridless-grid24om3",
      "indoorUnitId": "iu-iu-45423",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid24ohv-grid24whv",
      "slug": "gridless-grid24ohv-grid24whv",
      "modelId": "model-gridless-grid24ohv",
      "outdoorUnitId": "ou-gridless-grid24ohv",
      "indoorUnitId": "iu-grid24whv",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid18om2-iu-45421",
      "slug": "gridless-grid18om2-iu-45421",
      "modelId": "model-gridless-grid18om2",
      "outdoorUnitId": "ou-gridless-grid18om2",
      "indoorUnitId": "iu-iu-45421",
      "minHeatingTempC": -25,
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid36om4-iu-45424",
      "slug": "gridless-grid36om4-iu-45424",
      "modelId": "model-gridless-grid36om4",
      "outdoorUnitId": "ou-gridless-grid36om4",
      "indoorUnitId": "iu-iu-45424",
      "minHeatingTempC": -25,
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid48om5-iu-45425",
      "slug": "gridless-grid48om5-iu-45425",
      "modelId": "model-gridless-grid48om5",
      "outdoorUnitId": "ou-gridless-grid48om5",
      "indoorUnitId": "iu-iu-45425",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd24sd-3-iu-45431",
      "slug": "gridless-o-ayd24sd-3-iu-45431",
      "modelId": "model-gridless-o-ayd24sd-3",
      "outdoorUnitId": "ou-gridless-o-ayd24sd-3",
      "indoorUnitId": "iu-iu-45431",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd36sd-4-iu-45432",
      "slug": "gridless-o-ayd36sd-4-iu-45432",
      "modelId": "model-gridless-o-ayd36sd-4",
      "outdoorUnitId": "ou-gridless-o-ayd36sd-4",
      "indoorUnitId": "iu-iu-45432",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd24sd-1-i-ayd24w-1",
      "slug": "gridless-o-ayd24sd-1-i-ayd24w-1",
      "modelId": "model-gridless-o-ayd24sd-1",
      "outdoorUnitId": "ou-gridless-o-ayd24sd-1",
      "indoorUnitId": "iu-i-ayd24w-1",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid18ohv-grid18whv",
      "slug": "gridless-grid18ohv-grid18whv",
      "modelId": "model-gridless-grid18ohv",
      "outdoorUnitId": "ou-gridless-grid18ohv",
      "indoorUnitId": "iu-grid18whv",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd18sd-2-iu-45429",
      "slug": "gridless-o-ayd18sd-2-iu-45429",
      "modelId": "model-gridless-o-ayd18sd-2",
      "outdoorUnitId": "ou-gridless-o-ayd18sd-2",
      "indoorUnitId": "iu-iu-45429",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd18sd-1-i-ayd18w-1",
      "slug": "gridless-o-ayd18sd-1-i-ayd18w-1",
      "modelId": "model-gridless-o-ayd18sd-1",
      "outdoorUnitId": "ou-gridless-o-ayd18sd-1",
      "indoorUnitId": "iu-i-ayd18w-1",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid24oc-grid24vah",
      "slug": "gridless-grid24oc-grid24vah",
      "modelId": "model-gridless-grid24oc",
      "outdoorUnitId": "ou-gridless-grid24oc",
      "indoorUnitId": "iu-grid24vah",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayd42sd-5-iu-45433",
      "slug": "gridless-o-ayd42sd-5-iu-45433",
      "modelId": "model-gridless-o-ayd42sd-5",
      "outdoorUnitId": "ou-gridless-o-ayd42sd-5",
      "indoorUnitId": "iu-iu-45433",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid36oc-grid36vah",
      "slug": "gridless-grid36oc-grid36vah",
      "modelId": "model-gridless-grid36oc",
      "outdoorUnitId": "ou-gridless-grid36oc",
      "indoorUnitId": "iu-grid36vah",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid48oc-grid48vah",
      "slug": "gridless-grid48oc-grid48vah",
      "modelId": "model-gridless-grid48oc",
      "outdoorUnitId": "ou-gridless-grid48oc",
      "indoorUnitId": "iu-grid48vah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid60oc-grid60vah",
      "slug": "gridless-grid60oc-grid60vah",
      "modelId": "model-gridless-grid60oc",
      "outdoorUnitId": "ou-gridless-grid60oc",
      "indoorUnitId": "iu-grid60vah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayc48sd-1-i-ayc48vah-1",
      "slug": "gridless-o-ayc48sd-1-i-ayc48vah-1",
      "modelId": "model-gridless-o-ayc48sd-1",
      "outdoorUnitId": "ou-gridless-o-ayc48sd-1",
      "indoorUnitId": "iu-i-ayc48vah-1",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid36oc-dc37d3j",
      "slug": "gridless-grid36oc-dc37d3j",
      "modelId": "model-gridless-grid36oc",
      "outdoorUnitId": "ou-gridless-grid36oc",
      "indoorUnitId": "iu-dc37d3j",
      "minHeatingTempC": -25,
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid48oc-dc49b3j",
      "slug": "gridless-grid48oc-dc49b3j",
      "modelId": "model-gridless-grid48oc",
      "outdoorUnitId": "ou-gridless-grid48oc",
      "indoorUnitId": "iu-dc49b3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-o-ayc24sd-1-i-ayc24vah-1",
      "slug": "gridless-o-ayc24sd-1-i-ayc24vah-1",
      "modelId": "model-gridless-o-ayc24sd-1",
      "outdoorUnitId": "ou-gridless-o-ayc24sd-1",
      "indoorUnitId": "iu-i-ayc24vah-1",
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid60oc-dc61c4j",
      "slug": "gridless-grid60oc-dc61c4j",
      "modelId": "model-gridless-grid60oc",
      "outdoorUnitId": "ou-gridless-grid60oc",
      "indoorUnitId": "iu-dc61c4j",
      "minHeatingTempC": -25,
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
          "sourceId": "src-gridless-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gridless-grid24oc-dc31d2j",
      "slug": "gridless-grid24oc-dc31d2j",
      "modelId": "model-gridless-grid24oc",
      "outdoorUnitId": "ou-gridless-grid24oc",
      "indoorUnitId": "iu-dc31d2j",
      "minHeatingTempC": -25,
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
          "sourceId": "src-gridless-epa",
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
