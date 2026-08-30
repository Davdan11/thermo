import type { BrandDataset } from "../../types";

export const brand_clima_smartDataset: BrandDataset = {
  "brand": {
    "id": "brand-clima-smart",
    "slug": "clima-smart",
    "name": "Clima Smart",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Clima Smart",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-clima-smart-epa",
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
      "id": "series-clima-smart-clima-smart-multi-zone",
      "slug": "clima-smart-clima-smart-multi-zone",
      "name": "Clima Smart multi zone",
      "brandId": "brand-clima-smart",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Clima Smart multi zone de Clima Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-clima-smart-clima-smart-single-zone",
      "slug": "clima-smart-clima-smart-single-zone",
      "name": "Clima Smart single zone",
      "brandId": "brand-clima-smart",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Clima Smart single zone de Clima Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-clima-smart-t-pro",
      "slug": "clima-smart-t-pro",
      "name": "T-PRO",
      "brandId": "brand-clima-smart",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série T-PRO de Clima Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-clima-smart-mu-csu18hei2nam0t24-3po",
      "slug": "clima-smart-mu-csu18hei2nam0t24-3po",
      "name": "Clima Smart MU-CSU18HEI2NAM0T24-3PO",
      "seriesId": "series-clima-smart-clima-smart-multi-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "MU-CSU18HEI2NAM0T24-3PO",
      "normalizedModelNumber": "mu-csu18hei2nam0t24-3po",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
      "zones": 1,
      "systemType": "wall-single",
      "categories": [
        "air-air"
      ],
      "status": "published",
      "launchYear": null,
      "discontinuedYear": null,
      "replacedByModelId": null,
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "model-clima-smart-mu-csu27hei2nam0t24-4po",
      "slug": "clima-smart-mu-csu27hei2nam0t24-4po",
      "name": "Clima Smart MU-CSU27HEI2NAM0T24-4PO",
      "seriesId": "series-clima-smart-clima-smart-multi-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "MU-CSU27HEI2NAM0T24-4PO",
      "normalizedModelNumber": "mu-csu27hei2nam0t24-4po",
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
      "id": "model-clima-smart-csu12hei2nam0t24",
      "slug": "clima-smart-csu12hei2nam0t24",
      "name": "Clima Smart CSU12HEI2NAM0T24",
      "seriesId": "series-clima-smart-clima-smart-single-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "CSU12HEI2NAM0T24",
      "normalizedModelNumber": "csu12hei2nam0t24",
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
      "id": "model-clima-smart-csu09hei2nam0t24",
      "slug": "clima-smart-csu09hei2nam0t24",
      "name": "Clima Smart CSU09HEI2NAM0T24",
      "seriesId": "series-clima-smart-clima-smart-single-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "CSU09HEI2NAM0T24",
      "normalizedModelNumber": "csu09hei2nam0t24",
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
      "id": "model-clima-smart-mu-csu36hei2nam0t24-5po",
      "slug": "clima-smart-mu-csu36hei2nam0t24-5po",
      "name": "Clima Smart MU-CSU36HEI2NAM0T24-5PO",
      "seriesId": "series-clima-smart-clima-smart-multi-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "MU-CSU36HEI2NAM0T24-5PO",
      "normalizedModelNumber": "mu-csu36hei2nam0t24-5po",
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
      "id": "model-clima-smart-mu-csu48hei2nam0t24-6po",
      "slug": "clima-smart-mu-csu48hei2nam0t24-6po",
      "name": "Clima Smart MU-CSU48HEI2NAM0T24-6PO",
      "seriesId": "series-clima-smart-clima-smart-multi-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "MU-CSU48HEI2NAM0T24-6PO",
      "normalizedModelNumber": "mu-csu48hei2nam0t24-6po",
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
      "id": "model-clima-smart-csu18hei2nam0t24",
      "slug": "clima-smart-csu18hei2nam0t24",
      "name": "Clima Smart CSU18HEI2NAM0T24",
      "seriesId": "series-clima-smart-clima-smart-single-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "CSU18HEI2NAM0T24",
      "normalizedModelNumber": "csu18hei2nam0t24",
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
      "id": "model-clima-smart-csu24hei2nak0t24",
      "slug": "clima-smart-csu24hei2nak0t24",
      "name": "Clima Smart CSU24HEI2NAK0T24",
      "seriesId": "series-clima-smart-clima-smart-single-zone",
      "brandId": "brand-clima-smart",
      "modelNumber": "CSU24HEI2NAK0T24",
      "normalizedModelNumber": "csu24hei2nak0t24",
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
      "id": "model-clima-smart-mch18-cs-s23-o",
      "slug": "clima-smart-mch18-cs-s23-o",
      "name": "Clima Smart MCH18-CS-S23-O",
      "seriesId": "series-clima-smart-t-pro",
      "brandId": "brand-clima-smart",
      "modelNumber": "MCH18-CS-S23-O",
      "normalizedModelNumber": "mch18-cs-s23-o",
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
      "id": "model-clima-smart-mch24-cs-s23-o",
      "slug": "clima-smart-mch24-cs-s23-o",
      "name": "Clima Smart MCH24-CS-S23-O",
      "seriesId": "series-clima-smart-t-pro",
      "brandId": "brand-clima-smart",
      "modelNumber": "MCH24-CS-S23-O",
      "normalizedModelNumber": "mch24-cs-s23-o",
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
      "id": "ou-clima-smart-mu-csu18hei2nam0t24-3po",
      "modelNumber": "MU-CSU18HEI2NAM0T24-3PO",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-mu-csu27hei2nam0t24-4po",
      "modelNumber": "MU-CSU27HEI2NAM0T24-4PO",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-csu12hei2nam0t24",
      "modelNumber": "CSU12HEI2NAM0T24",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-csu09hei2nam0t24",
      "modelNumber": "CSU09HEI2NAM0T24",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-mu-csu36hei2nam0t24-5po",
      "modelNumber": "MU-CSU36HEI2NAM0T24-5PO",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-mu-csu48hei2nam0t24-6po",
      "modelNumber": "MU-CSU48HEI2NAM0T24-6PO",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-csu18hei2nam0t24",
      "modelNumber": "CSU18HEI2NAM0T24",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-csu24hei2nak0t24",
      "modelNumber": "CSU24HEI2NAK0T24",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-clima-smart-mch18-cs-s23-o",
      "modelNumber": "MCH18-CS-S23-O",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-clima-smart-mch24-cs-s23-o",
      "modelNumber": "MCH24-CS-S23-O",
      "brandId": "brand-clima-smart",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-42581",
      "modelNumber": "IU-42581",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42582",
      "modelNumber": "IU-42582",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-csu12hei2nam0t24",
      "modelNumber": "CSU12HEI2NAM0T24*",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-csu09hei2nam0t24",
      "modelNumber": "CSU09HEI2NAM0T24*",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42583",
      "modelNumber": "IU-42583",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42584",
      "modelNumber": "IU-42584",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-csu18hei2nam0t24",
      "modelNumber": "CSU18HEI2NAM0T24*",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-csu24hei2nak0t24",
      "modelNumber": "CSU24HEI2NAK0T24*",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-mch18-cs-s23-i",
      "modelNumber": "MCH18-CS-S23-I",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    },
    {
      "id": "iu-mch24-cs-s23-i",
      "modelNumber": "MCH24-CS-S23-I",
      "brandId": "brand-clima-smart",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-clima-smart-mu-csu18hei2nam0t24-3po-iu-42581",
      "slug": "clima-smart-mu-csu18hei2nam0t24-3po-iu-42581",
      "modelId": "model-clima-smart-mu-csu18hei2nam0t24-3po",
      "outdoorUnitId": "ou-clima-smart-mu-csu18hei2nam0t24-3po",
      "indoorUnitId": "iu-iu-42581",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-mu-csu27hei2nam0t24-4po-iu-42582",
      "slug": "clima-smart-mu-csu27hei2nam0t24-4po-iu-42582",
      "modelId": "model-clima-smart-mu-csu27hei2nam0t24-4po",
      "outdoorUnitId": "ou-clima-smart-mu-csu27hei2nam0t24-4po",
      "indoorUnitId": "iu-iu-42582",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-csu12hei2nam0t24-csu12hei2nam0t24",
      "slug": "clima-smart-csu12hei2nam0t24-csu12hei2nam0t24",
      "modelId": "model-clima-smart-csu12hei2nam0t24",
      "outdoorUnitId": "ou-clima-smart-csu12hei2nam0t24",
      "indoorUnitId": "iu-csu12hei2nam0t24",
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
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-csu09hei2nam0t24-csu09hei2nam0t24",
      "slug": "clima-smart-csu09hei2nam0t24-csu09hei2nam0t24",
      "modelId": "model-clima-smart-csu09hei2nam0t24",
      "outdoorUnitId": "ou-clima-smart-csu09hei2nam0t24",
      "indoorUnitId": "iu-csu09hei2nam0t24",
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
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-mu-csu36hei2nam0t24-5po-iu-42583",
      "slug": "clima-smart-mu-csu36hei2nam0t24-5po-iu-42583",
      "modelId": "model-clima-smart-mu-csu36hei2nam0t24-5po",
      "outdoorUnitId": "ou-clima-smart-mu-csu36hei2nam0t24-5po",
      "indoorUnitId": "iu-iu-42583",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-mu-csu48hei2nam0t24-6po-iu-42584",
      "slug": "clima-smart-mu-csu48hei2nam0t24-6po-iu-42584",
      "modelId": "model-clima-smart-mu-csu48hei2nam0t24-6po",
      "outdoorUnitId": "ou-clima-smart-mu-csu48hei2nam0t24-6po",
      "indoorUnitId": "iu-iu-42584",
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
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-csu18hei2nam0t24-csu18hei2nam0t24",
      "slug": "clima-smart-csu18hei2nam0t24-csu18hei2nam0t24",
      "modelId": "model-clima-smart-csu18hei2nam0t24",
      "outdoorUnitId": "ou-clima-smart-csu18hei2nam0t24",
      "indoorUnitId": "iu-csu18hei2nam0t24",
      "minHeatingTempC": -25,
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
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-csu24hei2nak0t24-csu24hei2nak0t24",
      "slug": "clima-smart-csu24hei2nak0t24-csu24hei2nak0t24",
      "modelId": "model-clima-smart-csu24hei2nak0t24",
      "outdoorUnitId": "ou-clima-smart-csu24hei2nak0t24",
      "indoorUnitId": "iu-csu24hei2nak0t24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-mch18-cs-s23-o-mch18-cs-s23-i",
      "slug": "clima-smart-mch18-cs-s23-o-mch18-cs-s23-i",
      "modelId": "model-clima-smart-mch18-cs-s23-o",
      "outdoorUnitId": "ou-clima-smart-mch18-cs-s23-o",
      "indoorUnitId": "iu-mch18-cs-s23-i",
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
          "sourceId": "src-clima-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-clima-smart-mch24-cs-s23-o-mch24-cs-s23-i",
      "slug": "clima-smart-mch24-cs-s23-o-mch24-cs-s23-i",
      "modelId": "model-clima-smart-mch24-cs-s23-o",
      "outdoorUnitId": "ou-clima-smart-mch24-cs-s23-o",
      "indoorUnitId": "iu-mch24-cs-s23-i",
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
          "sourceId": "src-clima-smart-epa",
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
