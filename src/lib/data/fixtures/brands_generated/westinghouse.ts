import type { BrandDataset } from "../../types";

export const brand_westinghouseDataset: BrandDataset = {
  "brand": {
    "id": "brand-westinghouse",
    "slug": "westinghouse",
    "name": "Westinghouse",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Westinghouse",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-westinghouse-epa",
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
      "id": "series-westinghouse-hi-uni",
      "slug": "westinghouse-hi-uni",
      "name": "Hi UNI",
      "brandId": "brand-westinghouse",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi UNI de Westinghouse",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-westinghouse-sszb2",
      "slug": "westinghouse-sszb2",
      "name": "S**SZB2",
      "brandId": "brand-westinghouse",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série S**SZB2 de Westinghouse",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-westinghouse-hi-multi-xtreme",
      "slug": "westinghouse-hi-multi-xtreme",
      "name": "Hi MULTI Xtreme",
      "brandId": "brand-westinghouse",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI Xtreme de Westinghouse",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-westinghouse-whz09sza21s",
      "slug": "westinghouse-whz09sza21s",
      "name": "Westinghouse WHZ09SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHZ09SZA21S",
      "normalizedModelNumber": "whz09sza21s",
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
      "id": "model-westinghouse-whz12sza21s",
      "slug": "westinghouse-whz12sza21s",
      "name": "Westinghouse WHZ12SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHZ12SZA21S",
      "normalizedModelNumber": "whz12sza21s",
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
      "id": "model-westinghouse-whp18sza21s",
      "slug": "westinghouse-whp18sza21s",
      "name": "Westinghouse WHP18SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP18SZA21S",
      "normalizedModelNumber": "whp18sza21s",
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
      "id": "model-westinghouse-whs09szb21s",
      "slug": "westinghouse-whs09szb21s",
      "name": "Westinghouse WHS09SZB21S",
      "seriesId": "series-westinghouse-sszb2",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHS09SZB21S",
      "normalizedModelNumber": "whs09szb21s",
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
      "id": "model-westinghouse-whp09sza21s",
      "slug": "westinghouse-whp09sza21s",
      "name": "Westinghouse WHP09SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP09SZA21S",
      "normalizedModelNumber": "whp09sza21s",
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
      "id": "model-westinghouse-whp24m3a21s",
      "slug": "westinghouse-whp24m3a21s",
      "name": "Westinghouse WHP24M3A21S",
      "seriesId": "series-westinghouse-hi-multi-xtreme",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP24M3A21S",
      "normalizedModelNumber": "whp24m3a21s",
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
      "id": "model-westinghouse-whp18m2a21s",
      "slug": "westinghouse-whp18m2a21s",
      "name": "Westinghouse WHP18M2A21S",
      "seriesId": "series-westinghouse-hi-multi-xtreme",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP18M2A21S",
      "normalizedModelNumber": "whp18m2a21s",
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
      "id": "model-westinghouse-whp36m4a21s",
      "slug": "westinghouse-whp36m4a21s",
      "name": "Westinghouse WHP36M4A21S",
      "seriesId": "series-westinghouse-hi-multi-xtreme",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP36M4A21S",
      "normalizedModelNumber": "whp36m4a21s",
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
      "id": "model-westinghouse-whp24sza21s",
      "slug": "westinghouse-whp24sza21s",
      "name": "Westinghouse WHP24SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP24SZA21S",
      "normalizedModelNumber": "whp24sza21s",
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
      "id": "model-westinghouse-whu18sza21s",
      "slug": "westinghouse-whu18sza21s",
      "name": "Westinghouse WHU18SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHU18SZA21S",
      "normalizedModelNumber": "whu18sza21s",
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
      "id": "model-westinghouse-whu12sza21s",
      "slug": "westinghouse-whu12sza21s",
      "name": "Westinghouse WHU12SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHU12SZA21S",
      "normalizedModelNumber": "whu12sza21s",
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
      "id": "model-westinghouse-whu09sza21s",
      "slug": "westinghouse-whu09sza21s",
      "name": "Westinghouse WHU09SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHU09SZA21S",
      "normalizedModelNumber": "whu09sza21s",
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
      "id": "model-westinghouse-whp42m5a21s",
      "slug": "westinghouse-whp42m5a21s",
      "name": "Westinghouse WHP42M5A21S",
      "seriesId": "series-westinghouse-hi-multi-xtreme",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHP42M5A21S",
      "normalizedModelNumber": "whp42m5a21s",
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
      "id": "model-westinghouse-whs18szb21s",
      "slug": "westinghouse-whs18szb21s",
      "name": "Westinghouse WHS18SZB21S",
      "seriesId": "series-westinghouse-sszb2",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHS18SZB21S",
      "normalizedModelNumber": "whs18szb21s",
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
      "id": "model-westinghouse-whs30szb21s",
      "slug": "westinghouse-whs30szb21s",
      "name": "Westinghouse WHS30SZB21S",
      "seriesId": "series-westinghouse-sszb2",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHS30SZB21S",
      "normalizedModelNumber": "whs30szb21s",
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
      "id": "model-westinghouse-whu24sza21s",
      "slug": "westinghouse-whu24sza21s",
      "name": "Westinghouse WHU24SZA21S",
      "seriesId": "series-westinghouse-hi-uni",
      "brandId": "brand-westinghouse",
      "modelNumber": "WHU24SZA21S",
      "normalizedModelNumber": "whu24sza21s",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-westinghouse-whz09sza21s",
      "modelNumber": "WHZ09SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whz12sza21s",
      "modelNumber": "WHZ12SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whp18sza21s",
      "modelNumber": "WHP18SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whs09szb21s",
      "modelNumber": "WHS09SZB21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-westinghouse-whp09sza21s",
      "modelNumber": "WHP09SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whp24m3a21s",
      "modelNumber": "WHP24M3A21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whp18m2a21s",
      "modelNumber": "WHP18M2A21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whp36m4a21s",
      "modelNumber": "WHP36M4A21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whp24sza21s",
      "modelNumber": "WHP24SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whu18sza21s",
      "modelNumber": "WHU18SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whu12sza21s",
      "modelNumber": "WHU12SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whu09sza21s",
      "modelNumber": "WHU09SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whp42m5a21s",
      "modelNumber": "WHP42M5A21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-westinghouse-whs18szb21s",
      "modelNumber": "WHS18SZB21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-westinghouse-whs30szb21s",
      "modelNumber": "WHS30SZB21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-westinghouse-whu24sza21s",
      "modelNumber": "WHU24SZA21S",
      "brandId": "brand-westinghouse",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-whz09wma21s",
      "modelNumber": "WHZ09WMA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whz12wma21s",
      "modelNumber": "WHZ12WMA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whp18wma21s",
      "modelNumber": "WHP18WMA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whs09wmb21s",
      "modelNumber": "WHS09WMB21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whp09wma21s",
      "modelNumber": "WHP09WMA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52531",
      "modelNumber": "IU-52531",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52529",
      "modelNumber": "IU-52529",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52533",
      "modelNumber": "IU-52533",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whp24wma21s",
      "modelNumber": "WHP24WMA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whu18cta21s",
      "modelNumber": "WHU18CTA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whu12cta21s",
      "modelNumber": "WHU12CTA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whu09cta21s",
      "modelNumber": "WHU09CTA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52534",
      "modelNumber": "IU-52534",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whs18wmb21s",
      "modelNumber": "WHS18WMB21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whs30wmb21s",
      "modelNumber": "WHS30WMB21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whu24cta21s",
      "modelNumber": "WHU24CTA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    },
    {
      "id": "iu-whu09dha21s",
      "modelNumber": "WHU09DHA21S",
      "brandId": "brand-westinghouse",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-westinghouse-whz09sza21s-whz09wma21s",
      "slug": "westinghouse-whz09sza21s-whz09wma21s",
      "modelId": "model-westinghouse-whz09sza21s",
      "outdoorUnitId": "ou-westinghouse-whz09sza21s",
      "indoorUnitId": "iu-whz09wma21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whz12sza21s-whz12wma21s",
      "slug": "westinghouse-whz12sza21s-whz12wma21s",
      "modelId": "model-westinghouse-whz12sza21s",
      "outdoorUnitId": "ou-westinghouse-whz12sza21s",
      "indoorUnitId": "iu-whz12wma21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp18sza21s-whp18wma21s",
      "slug": "westinghouse-whp18sza21s-whp18wma21s",
      "modelId": "model-westinghouse-whp18sza21s",
      "outdoorUnitId": "ou-westinghouse-whp18sza21s",
      "indoorUnitId": "iu-whp18wma21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whs09szb21s-whs09wmb21s",
      "slug": "westinghouse-whs09szb21s-whs09wmb21s",
      "modelId": "model-westinghouse-whs09szb21s",
      "outdoorUnitId": "ou-westinghouse-whs09szb21s",
      "indoorUnitId": "iu-whs09wmb21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp09sza21s-whp09wma21s",
      "slug": "westinghouse-whp09sza21s-whp09wma21s",
      "modelId": "model-westinghouse-whp09sza21s",
      "outdoorUnitId": "ou-westinghouse-whp09sza21s",
      "indoorUnitId": "iu-whp09wma21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp24m3a21s-iu-52531",
      "slug": "westinghouse-whp24m3a21s-iu-52531",
      "modelId": "model-westinghouse-whp24m3a21s",
      "outdoorUnitId": "ou-westinghouse-whp24m3a21s",
      "indoorUnitId": "iu-iu-52531",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp18m2a21s-iu-52529",
      "slug": "westinghouse-whp18m2a21s-iu-52529",
      "modelId": "model-westinghouse-whp18m2a21s",
      "outdoorUnitId": "ou-westinghouse-whp18m2a21s",
      "indoorUnitId": "iu-iu-52529",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp36m4a21s-iu-52533",
      "slug": "westinghouse-whp36m4a21s-iu-52533",
      "modelId": "model-westinghouse-whp36m4a21s",
      "outdoorUnitId": "ou-westinghouse-whp36m4a21s",
      "indoorUnitId": "iu-iu-52533",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp24sza21s-whp24wma21s",
      "slug": "westinghouse-whp24sza21s-whp24wma21s",
      "modelId": "model-westinghouse-whp24sza21s",
      "outdoorUnitId": "ou-westinghouse-whp24sza21s",
      "indoorUnitId": "iu-whp24wma21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whu18sza21s-whu18cta21s",
      "slug": "westinghouse-whu18sza21s-whu18cta21s",
      "modelId": "model-westinghouse-whu18sza21s",
      "outdoorUnitId": "ou-westinghouse-whu18sza21s",
      "indoorUnitId": "iu-whu18cta21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whu12sza21s-whu12cta21s",
      "slug": "westinghouse-whu12sza21s-whu12cta21s",
      "modelId": "model-westinghouse-whu12sza21s",
      "outdoorUnitId": "ou-westinghouse-whu12sza21s",
      "indoorUnitId": "iu-whu12cta21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whu09sza21s-whu09cta21s",
      "slug": "westinghouse-whu09sza21s-whu09cta21s",
      "modelId": "model-westinghouse-whu09sza21s",
      "outdoorUnitId": "ou-westinghouse-whu09sza21s",
      "indoorUnitId": "iu-whu09cta21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whp42m5a21s-iu-52534",
      "slug": "westinghouse-whp42m5a21s-iu-52534",
      "modelId": "model-westinghouse-whp42m5a21s",
      "outdoorUnitId": "ou-westinghouse-whp42m5a21s",
      "indoorUnitId": "iu-iu-52534",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whs18szb21s-whs18wmb21s",
      "slug": "westinghouse-whs18szb21s-whs18wmb21s",
      "modelId": "model-westinghouse-whs18szb21s",
      "outdoorUnitId": "ou-westinghouse-whs18szb21s",
      "indoorUnitId": "iu-whs18wmb21s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whs30szb21s-whs30wmb21s",
      "slug": "westinghouse-whs30szb21s-whs30wmb21s",
      "modelId": "model-westinghouse-whs30szb21s",
      "outdoorUnitId": "ou-westinghouse-whs30szb21s",
      "indoorUnitId": "iu-whs30wmb21s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whu24sza21s-whu24cta21s",
      "slug": "westinghouse-whu24sza21s-whu24cta21s",
      "modelId": "model-westinghouse-whu24sza21s",
      "outdoorUnitId": "ou-westinghouse-whu24sza21s",
      "indoorUnitId": "iu-whu24cta21s",
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
          "sourceId": "src-westinghouse-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-westinghouse-whu09sza21s-whu09dha21s",
      "slug": "westinghouse-whu09sza21s-whu09dha21s",
      "modelId": "model-westinghouse-whu09sza21s",
      "outdoorUnitId": "ou-westinghouse-whu09sza21s",
      "indoorUnitId": "iu-whu09dha21s",
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
          "sourceId": "src-westinghouse-epa",
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
