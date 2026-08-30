import type { BrandDataset } from "../../types";

export const brand_sea_breezeDataset: BrandDataset = {
  "brand": {
    "id": "brand-sea-breeze",
    "slug": "sea-breeze",
    "name": "Sea Breeze",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Sea Breeze",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-sea-breeze-epa",
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
      "id": "series-sea-breeze-9h-series",
      "slug": "sea-breeze-9h-series",
      "name": "9H Series",
      "brandId": "brand-sea-breeze",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 9H Series de Sea Breeze",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sea-breeze-30h-series",
      "slug": "sea-breeze-30h-series",
      "name": "30H Series",
      "brandId": "brand-sea-breeze",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 30H Series de Sea Breeze",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sea-breeze-18h-series",
      "slug": "sea-breeze-18h-series",
      "name": "18H Series",
      "brandId": "brand-sea-breeze",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 18H Series de Sea Breeze",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sea-breeze-24h-series",
      "slug": "sea-breeze-24h-series",
      "name": "24H Series",
      "brandId": "brand-sea-breeze",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 24H Series de Sea Breeze",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-sea-breeze-9h421zomi",
      "slug": "sea-breeze-9h421zomi",
      "name": "Sea Breeze 9H421ZOMI",
      "seriesId": "series-sea-breeze-9h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "9H421ZOMI",
      "normalizedModelNumber": "9h421zomi",
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
      "id": "model-sea-breeze-9h421yomi",
      "slug": "sea-breeze-9h421yomi",
      "name": "Sea Breeze 9H421YOMI",
      "seriesId": "series-sea-breeze-9h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "9H421YOMI",
      "normalizedModelNumber": "9h421yomi",
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
      "id": "model-sea-breeze-9h521yomi",
      "slug": "sea-breeze-9h521yomi",
      "name": "Sea Breeze 9H521YOMI",
      "seriesId": "series-sea-breeze-9h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "9H521YOMI",
      "normalizedModelNumber": "9h521yomi",
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
      "id": "model-sea-breeze-30h421zomi",
      "slug": "sea-breeze-30h421zomi",
      "name": "Sea Breeze 30H421ZOMI",
      "seriesId": "series-sea-breeze-30h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "30H421ZOMI",
      "normalizedModelNumber": "30h421zomi",
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
      "id": "model-sea-breeze-18h521zomi",
      "slug": "sea-breeze-18h521zomi",
      "name": "Sea Breeze 18H521ZOMI",
      "seriesId": "series-sea-breeze-18h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "18H521ZOMI",
      "normalizedModelNumber": "18h521zomi",
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
      "id": "model-sea-breeze-18h421zomi",
      "slug": "sea-breeze-18h421zomi",
      "name": "Sea Breeze 18H421ZOMI",
      "seriesId": "series-sea-breeze-18h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "18H421ZOMI",
      "normalizedModelNumber": "18h421zomi",
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
      "id": "model-sea-breeze-24h521zomi",
      "slug": "sea-breeze-24h521zomi",
      "name": "Sea Breeze 24H521ZOMI",
      "seriesId": "series-sea-breeze-24h-series",
      "brandId": "brand-sea-breeze",
      "modelNumber": "24H521ZOMI",
      "normalizedModelNumber": "24h521zomi",
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
      "id": "ou-sea-breeze-9h421zomi",
      "modelNumber": "9H421ZOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sea-breeze-9h421yomi",
      "modelNumber": "9H421YOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sea-breeze-9h521yomi",
      "modelNumber": "9H521YOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sea-breeze-30h421zomi",
      "modelNumber": "30H421ZOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sea-breeze-18h521zomi",
      "modelNumber": "18H521ZOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sea-breeze-18h421zomi",
      "modelNumber": "18H421ZOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sea-breeze-24h521zomi",
      "modelNumber": "24H521ZOMI",
      "brandId": "brand-sea-breeze",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-9h421zimi",
      "modelNumber": "9H421ZIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    },
    {
      "id": "iu-9h421yimi",
      "modelNumber": "9H421YIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    },
    {
      "id": "iu-9h521yimi",
      "modelNumber": "9H521YIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    },
    {
      "id": "iu-30h421zimi",
      "modelNumber": "30H421ZIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    },
    {
      "id": "iu-18h521zimi",
      "modelNumber": "18H521ZIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    },
    {
      "id": "iu-18h421zimi",
      "modelNumber": "18H421ZIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    },
    {
      "id": "iu-24h521zimi",
      "modelNumber": "24H521ZIMI",
      "brandId": "brand-sea-breeze",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-sea-breeze-9h421zomi-9h421zimi",
      "slug": "sea-breeze-9h421zomi-9h421zimi",
      "modelId": "model-sea-breeze-9h421zomi",
      "outdoorUnitId": "ou-sea-breeze-9h421zomi",
      "indoorUnitId": "iu-9h421zimi",
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
          "sourceId": "src-sea-breeze-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sea-breeze-9h421yomi-9h421yimi",
      "slug": "sea-breeze-9h421yomi-9h421yimi",
      "modelId": "model-sea-breeze-9h421yomi",
      "outdoorUnitId": "ou-sea-breeze-9h421yomi",
      "indoorUnitId": "iu-9h421yimi",
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
          "sourceId": "src-sea-breeze-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sea-breeze-9h521yomi-9h521yimi",
      "slug": "sea-breeze-9h521yomi-9h521yimi",
      "modelId": "model-sea-breeze-9h521yomi",
      "outdoorUnitId": "ou-sea-breeze-9h521yomi",
      "indoorUnitId": "iu-9h521yimi",
      "minHeatingTempC": -25,
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
          "sourceId": "src-sea-breeze-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sea-breeze-30h421zomi-30h421zimi",
      "slug": "sea-breeze-30h421zomi-30h421zimi",
      "modelId": "model-sea-breeze-30h421zomi",
      "outdoorUnitId": "ou-sea-breeze-30h421zomi",
      "indoorUnitId": "iu-30h421zimi",
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
          "sourceId": "src-sea-breeze-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sea-breeze-18h521zomi-18h521zimi",
      "slug": "sea-breeze-18h521zomi-18h521zimi",
      "modelId": "model-sea-breeze-18h521zomi",
      "outdoorUnitId": "ou-sea-breeze-18h521zomi",
      "indoorUnitId": "iu-18h521zimi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-sea-breeze-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sea-breeze-18h421zomi-18h421zimi",
      "slug": "sea-breeze-18h421zomi-18h421zimi",
      "modelId": "model-sea-breeze-18h421zomi",
      "outdoorUnitId": "ou-sea-breeze-18h421zomi",
      "indoorUnitId": "iu-18h421zimi",
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
          "sourceId": "src-sea-breeze-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sea-breeze-24h521zomi-24h521zimi",
      "slug": "sea-breeze-24h521zomi-24h521zimi",
      "modelId": "model-sea-breeze-24h521zomi",
      "outdoorUnitId": "ou-sea-breeze-24h521zomi",
      "indoorUnitId": "iu-24h521zimi",
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
          "sourceId": "src-sea-breeze-epa",
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
