import type { BrandDataset } from "../../types";

export const brand_maytagDataset: BrandDataset = {
  "brand": {
    "id": "brand-maytag",
    "slug": "maytag",
    "name": "Maytag",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Maytag",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-maytag-epa",
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
      "id": "series-maytag-maytag-psh4bf-series",
      "slug": "maytag-maytag-psh4bf-series",
      "name": "MAYTAG PSH4BF SERIES",
      "brandId": "brand-maytag",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MAYTAG PSH4BF SERIES de Maytag",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-maytag-psh4bf5m2sx24k",
      "slug": "maytag-psh4bf5m2sx24k",
      "name": "Maytag PSH4BF5M2SX24K",
      "seriesId": "series-maytag-maytag-psh4bf-series",
      "brandId": "brand-maytag",
      "modelNumber": "PSH4BF5M2SX24K",
      "normalizedModelNumber": "psh4bf5m2sx24k",
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
      "id": "model-maytag-psh4bf5m2sx36k",
      "slug": "maytag-psh4bf5m2sx36k",
      "name": "Maytag PSH4BF5M2SX36K",
      "seriesId": "series-maytag-maytag-psh4bf-series",
      "brandId": "brand-maytag",
      "modelNumber": "PSH4BF5M2SX36K",
      "normalizedModelNumber": "psh4bf5m2sx36k",
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
      "id": "model-maytag-psh4bf5m2sx48k",
      "slug": "maytag-psh4bf5m2sx48k",
      "name": "Maytag PSH4BF5M2SX48K",
      "seriesId": "series-maytag-maytag-psh4bf-series",
      "brandId": "brand-maytag",
      "modelNumber": "PSH4BF5M2SX48K",
      "normalizedModelNumber": "psh4bf5m2sx48k",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "ou-maytag-psh4bf5m2sx24k",
      "modelNumber": "PSH4BF5M2SX24K",
      "brandId": "brand-maytag",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maytag-psh4bf5m2sx36k",
      "modelNumber": "PSH4BF5M2SX36K",
      "brandId": "brand-maytag",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maytag-psh4bf5m2sx48k",
      "modelNumber": "PSH4BF5M2SX48K",
      "brandId": "brand-maytag",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-b65vmmx24kb",
      "modelNumber": "B65VMMX24K*B",
      "brandId": "brand-maytag",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx36cb",
      "modelNumber": "C75B(A,H)MX36C*B",
      "brandId": "brand-maytag",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx3648kc",
      "modelNumber": "B65VMMX3648K*C",
      "brandId": "brand-maytag",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cc",
      "modelNumber": "C75B(A,H)MX4860C*C",
      "brandId": "brand-maytag",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cd",
      "modelNumber": "C75B(A,H)MX4860C*D",
      "brandId": "brand-maytag",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-maytag-psh4bf5m2sx24k-b65vmmx24kb",
      "slug": "maytag-psh4bf5m2sx24k-b65vmmx24kb",
      "modelId": "model-maytag-psh4bf5m2sx24k",
      "outdoorUnitId": "ou-maytag-psh4bf5m2sx24k",
      "indoorUnitId": "iu-b65vmmx24kb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maytag-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maytag-psh4bf5m2sx24k-c75bahmx36cb",
      "slug": "maytag-psh4bf5m2sx24k-c75bahmx36cb",
      "modelId": "model-maytag-psh4bf5m2sx24k",
      "outdoorUnitId": "ou-maytag-psh4bf5m2sx24k",
      "indoorUnitId": "iu-c75bahmx36cb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-maytag-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maytag-psh4bf5m2sx36k-b65vmmx3648kc",
      "slug": "maytag-psh4bf5m2sx36k-b65vmmx3648kc",
      "modelId": "model-maytag-psh4bf5m2sx36k",
      "outdoorUnitId": "ou-maytag-psh4bf5m2sx36k",
      "indoorUnitId": "iu-b65vmmx3648kc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maytag-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maytag-psh4bf5m2sx48k-b65vmmx3648kc",
      "slug": "maytag-psh4bf5m2sx48k-b65vmmx3648kc",
      "modelId": "model-maytag-psh4bf5m2sx48k",
      "outdoorUnitId": "ou-maytag-psh4bf5m2sx48k",
      "indoorUnitId": "iu-b65vmmx3648kc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maytag-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maytag-psh4bf5m2sx48k-c75bahmx4860cc",
      "slug": "maytag-psh4bf5m2sx48k-c75bahmx4860cc",
      "modelId": "model-maytag-psh4bf5m2sx48k",
      "outdoorUnitId": "ou-maytag-psh4bf5m2sx48k",
      "indoorUnitId": "iu-c75bahmx4860cc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maytag-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maytag-psh4bf5m2sx48k-c75bahmx4860cd",
      "slug": "maytag-psh4bf5m2sx48k-c75bahmx4860cd",
      "modelId": "model-maytag-psh4bf5m2sx48k",
      "outdoorUnitId": "ou-maytag-psh4bf5m2sx48k",
      "indoorUnitId": "iu-c75bahmx4860cd",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-maytag-epa",
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
