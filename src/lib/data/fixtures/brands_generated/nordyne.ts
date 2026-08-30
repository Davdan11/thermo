import type { BrandDataset } from "../../types";

export const brand_nordyneDataset: BrandDataset = {
  "brand": {
    "id": "brand-nordyne",
    "slug": "nordyne",
    "name": "NORDYNE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour NORDYNE",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-nordyne-epa",
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
      "id": "series-nordyne-nordyne-sh4bf-series",
      "slug": "nordyne-nordyne-sh4bf-series",
      "name": "NORDYNE SH4BF SERIES",
      "brandId": "brand-nordyne",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série NORDYNE SH4BF SERIES de NORDYNE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-nordyne-sh4bf5m2sx24k",
      "slug": "nordyne-sh4bf5m2sx24k",
      "name": "NORDYNE SH4BF5M2SX24K",
      "seriesId": "series-nordyne-nordyne-sh4bf-series",
      "brandId": "brand-nordyne",
      "modelNumber": "SH4BF5M2SX24K",
      "normalizedModelNumber": "sh4bf5m2sx24k",
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
      "id": "model-nordyne-sh4bf5m2sx36k",
      "slug": "nordyne-sh4bf5m2sx36k",
      "name": "NORDYNE SH4BF5M2SX36K",
      "seriesId": "series-nordyne-nordyne-sh4bf-series",
      "brandId": "brand-nordyne",
      "modelNumber": "SH4BF5M2SX36K",
      "normalizedModelNumber": "sh4bf5m2sx36k",
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
      "id": "model-nordyne-sh4bf5m2sx48k",
      "slug": "nordyne-sh4bf5m2sx48k",
      "name": "NORDYNE SH4BF5M2SX48K",
      "seriesId": "series-nordyne-nordyne-sh4bf-series",
      "brandId": "brand-nordyne",
      "modelNumber": "SH4BF5M2SX48K",
      "normalizedModelNumber": "sh4bf5m2sx48k",
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
      "id": "ou-nordyne-sh4bf5m2sx24k",
      "modelNumber": "SH4BF5M2SX24K",
      "brandId": "brand-nordyne",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-nordyne-sh4bf5m2sx36k",
      "modelNumber": "SH4BF5M2SX36K",
      "brandId": "brand-nordyne",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-nordyne-sh4bf5m2sx48k",
      "modelNumber": "SH4BF5M2SX48K",
      "brandId": "brand-nordyne",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-b65vmmx24kb",
      "modelNumber": "B65VMMX24K*B",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx24k-b",
      "modelNumber": "B65VMMX24K-B",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx36cb",
      "modelNumber": "C75B(A,H)MX36C*B",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx36c-b",
      "modelNumber": "C75B(A,H)MX36C-B",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx3648kc",
      "modelNumber": "B65VMMX3648K*C",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx3648k-c",
      "modelNumber": "B65VMMX3648K-C",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cc",
      "modelNumber": "C75B(A,H)MX4860C*C",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cd",
      "modelNumber": "C75B(A,H)MX4860C*D",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860c-c",
      "modelNumber": "C75B(A,H)MX4860C-C",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860c-d",
      "modelNumber": "C75B(A,H)MX4860C-D",
      "brandId": "brand-nordyne",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-nordyne-sh4bf5m2sx24k-b65vmmx24kb",
      "slug": "nordyne-sh4bf5m2sx24k-b65vmmx24kb",
      "modelId": "model-nordyne-sh4bf5m2sx24k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx24k",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx24k-b65vmmx24k-b",
      "slug": "nordyne-sh4bf5m2sx24k-b65vmmx24k-b",
      "modelId": "model-nordyne-sh4bf5m2sx24k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx24k",
      "indoorUnitId": "iu-b65vmmx24k-b",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx24k-c75bahmx36cb",
      "slug": "nordyne-sh4bf5m2sx24k-c75bahmx36cb",
      "modelId": "model-nordyne-sh4bf5m2sx24k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx24k",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx24k-c75bahmx36c-b",
      "slug": "nordyne-sh4bf5m2sx24k-c75bahmx36c-b",
      "modelId": "model-nordyne-sh4bf5m2sx24k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx24k",
      "indoorUnitId": "iu-c75bahmx36c-b",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx36k-b65vmmx3648kc",
      "slug": "nordyne-sh4bf5m2sx36k-b65vmmx3648kc",
      "modelId": "model-nordyne-sh4bf5m2sx36k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx36k",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx36k-b65vmmx3648k-c",
      "slug": "nordyne-sh4bf5m2sx36k-b65vmmx3648k-c",
      "modelId": "model-nordyne-sh4bf5m2sx36k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx36k",
      "indoorUnitId": "iu-b65vmmx3648k-c",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx48k-b65vmmx3648kc",
      "slug": "nordyne-sh4bf5m2sx48k-b65vmmx3648kc",
      "modelId": "model-nordyne-sh4bf5m2sx48k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx48k",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx48k-b65vmmx3648k-c",
      "slug": "nordyne-sh4bf5m2sx48k-b65vmmx3648k-c",
      "modelId": "model-nordyne-sh4bf5m2sx48k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx48k",
      "indoorUnitId": "iu-b65vmmx3648k-c",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx48k-c75bahmx4860cc",
      "slug": "nordyne-sh4bf5m2sx48k-c75bahmx4860cc",
      "modelId": "model-nordyne-sh4bf5m2sx48k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx48k",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx48k-c75bahmx4860cd",
      "slug": "nordyne-sh4bf5m2sx48k-c75bahmx4860cd",
      "modelId": "model-nordyne-sh4bf5m2sx48k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx48k",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx48k-c75bahmx4860c-c",
      "slug": "nordyne-sh4bf5m2sx48k-c75bahmx4860c-c",
      "modelId": "model-nordyne-sh4bf5m2sx48k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx48k",
      "indoorUnitId": "iu-c75bahmx4860c-c",
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
          "sourceId": "src-nordyne-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nordyne-sh4bf5m2sx48k-c75bahmx4860c-d",
      "slug": "nordyne-sh4bf5m2sx48k-c75bahmx4860c-d",
      "modelId": "model-nordyne-sh4bf5m2sx48k",
      "outdoorUnitId": "ou-nordyne-sh4bf5m2sx48k",
      "indoorUnitId": "iu-c75bahmx4860c-d",
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
          "sourceId": "src-nordyne-epa",
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
