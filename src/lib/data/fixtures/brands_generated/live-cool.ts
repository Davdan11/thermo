import type { BrandDataset } from "../../types";

export const brand_live_coolDataset: BrandDataset = {
  "brand": {
    "id": "brand-live-cool",
    "slug": "live-cool",
    "name": "Live cool",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Live cool",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-live-cool-epa",
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
      "id": "series-live-cool-t-pro",
      "slug": "live-cool-t-pro",
      "name": "T-pro",
      "brandId": "brand-live-cool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-pro de Live cool",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-live-cool-rex",
      "slug": "live-cool-rex",
      "name": "REX",
      "brandId": "brand-live-cool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série REX de Live cool",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-live-cool-kwsm-12ir454bhs24r",
      "slug": "live-cool-kwsm-12ir454bhs24r",
      "name": "Live cool KWSM-12IR454BHS24R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "KWSM-12IR454BHS24R",
      "normalizedModelNumber": "kwsm-12ir454bhs24r",
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
      "id": "model-live-cool-lwsm-12ir454bhs24r",
      "slug": "live-cool-lwsm-12ir454bhs24r",
      "name": "Live cool LWSM-12IR454BHS24R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-12IR454BHS24R",
      "normalizedModelNumber": "lwsm-12ir454bhs24r",
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
      "id": "model-live-cool-lwsm-09ir410ahs23",
      "slug": "live-cool-lwsm-09ir410ahs23",
      "name": "Live cool LWSM-09IR410AHS23",
      "seriesId": "series-live-cool-rex",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-09IR410AHS23",
      "normalizedModelNumber": "lwsm-09ir410ahs23",
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
      "id": "model-live-cool-kwsm-12ir454bhs23lr",
      "slug": "live-cool-kwsm-12ir454bhs23lr",
      "name": "Live cool KWSM-12IR454BHS23LR",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "KWSM-12IR454BHS23LR",
      "normalizedModelNumber": "kwsm-12ir454bhs23lr",
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
      "id": "model-live-cool-kwsm-18ir454bhs23r",
      "slug": "live-cool-kwsm-18ir454bhs23r",
      "name": "Live cool KWSM-18IR454BHS23R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "KWSM-18IR454BHS23R",
      "normalizedModelNumber": "kwsm-18ir454bhs23r",
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
      "id": "model-live-cool-lwsm-09ir410ahs22l",
      "slug": "live-cool-lwsm-09ir410ahs22l",
      "name": "Live cool LWSM-09IR410AHS22L",
      "seriesId": "series-live-cool-rex",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-09IR410AHS22L",
      "normalizedModelNumber": "lwsm-09ir410ahs22l",
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
      "id": "model-live-cool-kwsm-09ir454bhs24r",
      "slug": "live-cool-kwsm-09ir454bhs24r",
      "name": "Live cool KWSM-09IR454BHS24R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "KWSM-09IR454BHS24R",
      "normalizedModelNumber": "kwsm-09ir454bhs24r",
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
      "id": "model-live-cool-lwsm-09ir454bhs24r",
      "slug": "live-cool-lwsm-09ir454bhs24r",
      "name": "Live cool LWSM-09IR454BHS24R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-09IR454BHS24R",
      "normalizedModelNumber": "lwsm-09ir454bhs24r",
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
      "id": "model-live-cool-lwsm-12ir410ahs23",
      "slug": "live-cool-lwsm-12ir410ahs23",
      "name": "Live cool LWSM-12IR410AHS23",
      "seriesId": "series-live-cool-rex",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-12IR410AHS23",
      "normalizedModelNumber": "lwsm-12ir410ahs23",
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
      "id": "model-live-cool-lwsm-12ir454bhs23lr",
      "slug": "live-cool-lwsm-12ir454bhs23lr",
      "name": "Live cool LWSM-12IR454BHS23LR",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-12IR454BHS23LR",
      "normalizedModelNumber": "lwsm-12ir454bhs23lr",
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
      "id": "model-live-cool-lwsm-18ir454bhs23r",
      "slug": "live-cool-lwsm-18ir454bhs23r",
      "name": "Live cool LWSM-18IR454BHS23R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-18IR454BHS23R",
      "normalizedModelNumber": "lwsm-18ir454bhs23r",
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
      "id": "model-live-cool-lwsm-24ir454bhs23r",
      "slug": "live-cool-lwsm-24ir454bhs23r",
      "name": "Live cool LWSM-24IR454BHS23R",
      "seriesId": "series-live-cool-t-pro",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-24IR454BHS23R",
      "normalizedModelNumber": "lwsm-24ir454bhs23r",
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
      "id": "model-live-cool-lwsm-12ir410ahs22l",
      "slug": "live-cool-lwsm-12ir410ahs22l",
      "name": "Live cool LWSM-12IR410AHS22L",
      "seriesId": "series-live-cool-rex",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-12IR410AHS22L",
      "normalizedModelNumber": "lwsm-12ir410ahs22l",
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
      "id": "model-live-cool-lwsm-18ir410ahs215",
      "slug": "live-cool-lwsm-18ir410ahs215",
      "name": "Live cool LWSM-18IR410AHS21.5",
      "seriesId": "series-live-cool-rex",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-18IR410AHS21.5",
      "normalizedModelNumber": "lwsm-18ir410ahs21.5",
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
      "id": "model-live-cool-lwsm-24ir410ahs20",
      "slug": "live-cool-lwsm-24ir410ahs20",
      "name": "Live cool LWSM-24IR410AHS20",
      "seriesId": "series-live-cool-rex",
      "brandId": "brand-live-cool",
      "modelNumber": "LWSM-24IR410AHS20",
      "normalizedModelNumber": "lwsm-24ir410ahs20",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-live-cool-kwsm-12ir454bhs24r",
      "modelNumber": "KWSM-12IR454BHS24R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-12ir454bhs24r",
      "modelNumber": "LWSM-12IR454BHS24R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-09ir410ahs23",
      "modelNumber": "LWSM-09IR410AHS23",
      "brandId": "brand-live-cool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-live-cool-kwsm-12ir454bhs23lr",
      "modelNumber": "KWSM-12IR454BHS23LR",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-kwsm-18ir454bhs23r",
      "modelNumber": "KWSM-18IR454BHS23R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-09ir410ahs22l",
      "modelNumber": "LWSM-09IR410AHS22L",
      "brandId": "brand-live-cool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-live-cool-kwsm-09ir454bhs24r",
      "modelNumber": "KWSM-09IR454BHS24R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-09ir454bhs24r",
      "modelNumber": "LWSM-09IR454BHS24R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-12ir410ahs23",
      "modelNumber": "LWSM-12IR410AHS23",
      "brandId": "brand-live-cool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-live-cool-lwsm-12ir454bhs23lr",
      "modelNumber": "LWSM-12IR454BHS23LR",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-18ir454bhs23r",
      "modelNumber": "LWSM-18IR454BHS23R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-24ir454bhs23r",
      "modelNumber": "LWSM-24IR454BHS23R",
      "brandId": "brand-live-cool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-live-cool-lwsm-12ir410ahs22l",
      "modelNumber": "LWSM-12IR410AHS22L",
      "brandId": "brand-live-cool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-live-cool-lwsm-18ir410ahs215",
      "modelNumber": "LWSM-18IR410AHS21.5",
      "brandId": "brand-live-cool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-live-cool-lwsm-24ir410ahs20",
      "modelNumber": "LWSM-24IR410AHS20",
      "brandId": "brand-live-cool",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-lwsm-12ir454bhs24r",
      "modelNumber": "LWSM-12IR454BHS24R",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-09ir410ahs23",
      "modelNumber": "LWSM-09IR410AHS23",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-12ir454bhs23lr",
      "modelNumber": "LWSM-12IR454BHS23LR",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-18ir454bhs23r",
      "modelNumber": "LWSM-18IR454BHS23R",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-09ir410ahs22l",
      "modelNumber": "LWSM-09IR410AHS22L",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-09ir454bhs24r",
      "modelNumber": "LWSM-09IR454BHS24R",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-12ir410ahs23",
      "modelNumber": "LWSM-12IR410AHS23",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-24ir454bhs23r",
      "modelNumber": "LWSM-24IR454BHS23R",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-12ir410ahs22l",
      "modelNumber": "LWSM-12IR410AHS22L",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-18ir410ahs215",
      "modelNumber": "LWSM-18IR410AHS21.5",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    },
    {
      "id": "iu-lwsm-24ir410ahs20",
      "modelNumber": "LWSM-24IR410AHS20",
      "brandId": "brand-live-cool",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-live-cool-kwsm-12ir454bhs24r-lwsm-12ir454bhs24r",
      "slug": "live-cool-kwsm-12ir454bhs24r-lwsm-12ir454bhs24r",
      "modelId": "model-live-cool-kwsm-12ir454bhs24r",
      "outdoorUnitId": "ou-live-cool-kwsm-12ir454bhs24r",
      "indoorUnitId": "iu-lwsm-12ir454bhs24r",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-12ir454bhs24r-lwsm-12ir454bhs24r",
      "slug": "live-cool-lwsm-12ir454bhs24r-lwsm-12ir454bhs24r",
      "modelId": "model-live-cool-lwsm-12ir454bhs24r",
      "outdoorUnitId": "ou-live-cool-lwsm-12ir454bhs24r",
      "indoorUnitId": "iu-lwsm-12ir454bhs24r",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-09ir410ahs23-lwsm-09ir410ahs23",
      "slug": "live-cool-lwsm-09ir410ahs23-lwsm-09ir410ahs23",
      "modelId": "model-live-cool-lwsm-09ir410ahs23",
      "outdoorUnitId": "ou-live-cool-lwsm-09ir410ahs23",
      "indoorUnitId": "iu-lwsm-09ir410ahs23",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-kwsm-12ir454bhs23lr-lwsm-12ir454bhs23lr",
      "slug": "live-cool-kwsm-12ir454bhs23lr-lwsm-12ir454bhs23lr",
      "modelId": "model-live-cool-kwsm-12ir454bhs23lr",
      "outdoorUnitId": "ou-live-cool-kwsm-12ir454bhs23lr",
      "indoorUnitId": "iu-lwsm-12ir454bhs23lr",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-kwsm-18ir454bhs23r-lwsm-18ir454bhs23r",
      "slug": "live-cool-kwsm-18ir454bhs23r-lwsm-18ir454bhs23r",
      "modelId": "model-live-cool-kwsm-18ir454bhs23r",
      "outdoorUnitId": "ou-live-cool-kwsm-18ir454bhs23r",
      "indoorUnitId": "iu-lwsm-18ir454bhs23r",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-09ir410ahs22l-lwsm-09ir410ahs22l",
      "slug": "live-cool-lwsm-09ir410ahs22l-lwsm-09ir410ahs22l",
      "modelId": "model-live-cool-lwsm-09ir410ahs22l",
      "outdoorUnitId": "ou-live-cool-lwsm-09ir410ahs22l",
      "indoorUnitId": "iu-lwsm-09ir410ahs22l",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-kwsm-09ir454bhs24r-lwsm-09ir454bhs24r",
      "slug": "live-cool-kwsm-09ir454bhs24r-lwsm-09ir454bhs24r",
      "modelId": "model-live-cool-kwsm-09ir454bhs24r",
      "outdoorUnitId": "ou-live-cool-kwsm-09ir454bhs24r",
      "indoorUnitId": "iu-lwsm-09ir454bhs24r",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-09ir454bhs24r-lwsm-09ir454bhs24r",
      "slug": "live-cool-lwsm-09ir454bhs24r-lwsm-09ir454bhs24r",
      "modelId": "model-live-cool-lwsm-09ir454bhs24r",
      "outdoorUnitId": "ou-live-cool-lwsm-09ir454bhs24r",
      "indoorUnitId": "iu-lwsm-09ir454bhs24r",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-12ir410ahs23-lwsm-12ir410ahs23",
      "slug": "live-cool-lwsm-12ir410ahs23-lwsm-12ir410ahs23",
      "modelId": "model-live-cool-lwsm-12ir410ahs23",
      "outdoorUnitId": "ou-live-cool-lwsm-12ir410ahs23",
      "indoorUnitId": "iu-lwsm-12ir410ahs23",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-12ir454bhs23lr-lwsm-12ir454bhs23lr",
      "slug": "live-cool-lwsm-12ir454bhs23lr-lwsm-12ir454bhs23lr",
      "modelId": "model-live-cool-lwsm-12ir454bhs23lr",
      "outdoorUnitId": "ou-live-cool-lwsm-12ir454bhs23lr",
      "indoorUnitId": "iu-lwsm-12ir454bhs23lr",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-18ir454bhs23r-lwsm-18ir454bhs23r",
      "slug": "live-cool-lwsm-18ir454bhs23r-lwsm-18ir454bhs23r",
      "modelId": "model-live-cool-lwsm-18ir454bhs23r",
      "outdoorUnitId": "ou-live-cool-lwsm-18ir454bhs23r",
      "indoorUnitId": "iu-lwsm-18ir454bhs23r",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-24ir454bhs23r-lwsm-24ir454bhs23r",
      "slug": "live-cool-lwsm-24ir454bhs23r-lwsm-24ir454bhs23r",
      "modelId": "model-live-cool-lwsm-24ir454bhs23r",
      "outdoorUnitId": "ou-live-cool-lwsm-24ir454bhs23r",
      "indoorUnitId": "iu-lwsm-24ir454bhs23r",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-12ir410ahs22l-lwsm-12ir410ahs22l",
      "slug": "live-cool-lwsm-12ir410ahs22l-lwsm-12ir410ahs22l",
      "modelId": "model-live-cool-lwsm-12ir410ahs22l",
      "outdoorUnitId": "ou-live-cool-lwsm-12ir410ahs22l",
      "indoorUnitId": "iu-lwsm-12ir410ahs22l",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-18ir410ahs215-lwsm-18ir410ahs215",
      "slug": "live-cool-lwsm-18ir410ahs215-lwsm-18ir410ahs215",
      "modelId": "model-live-cool-lwsm-18ir410ahs215",
      "outdoorUnitId": "ou-live-cool-lwsm-18ir410ahs215",
      "indoorUnitId": "iu-lwsm-18ir410ahs215",
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
          "sourceId": "src-live-cool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-live-cool-lwsm-24ir410ahs20-lwsm-24ir410ahs20",
      "slug": "live-cool-lwsm-24ir410ahs20-lwsm-24ir410ahs20",
      "modelId": "model-live-cool-lwsm-24ir410ahs20",
      "outdoorUnitId": "ou-live-cool-lwsm-24ir410ahs20",
      "indoorUnitId": "iu-lwsm-24ir410ahs20",
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
          "sourceId": "src-live-cool-epa",
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
