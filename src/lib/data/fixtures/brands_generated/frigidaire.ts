import type { BrandDataset } from "../../types";

export const brand_frigidaireDataset: BrandDataset = {
  "brand": {
    "id": "brand-frigidaire",
    "slug": "frigidaire",
    "name": "Frigidaire",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Frigidaire",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-frigidaire-epa",
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
      "id": "series-frigidaire-e-series",
      "slug": "frigidaire-e-series",
      "name": "E Series",
      "brandId": "brand-frigidaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E Series de Frigidaire",
      "imageUrl": "/images/series/frigidaire-frigidaire-e-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-frigidaire-ultra-side-discharge",
      "slug": "frigidaire-ultra-side-discharge",
      "name": "Ultra Side Discharge",
      "brandId": "brand-frigidaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Side Discharge de Frigidaire",
      "imageUrl": "/images/series/frigidaire-frigidaire-ultra-side-discharge.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-frigidaire-frigidaire-fsh4bf-series",
      "slug": "frigidaire-frigidaire-fsh4bf-series",
      "name": "FRIGIDAIRE FSH4BF SERIES",
      "brandId": "brand-frigidaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série FRIGIDAIRE FSH4BF SERIES de Frigidaire",
      "imageUrl": "/images/series/frigidaire-frigidaire-frigidaire-fsh4bf-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-frigidaire-uxh48-60msk3ih",
      "slug": "frigidaire-uxh48-60msk3ih",
      "name": "Frigidaire UXH48-60MSK3IH",
      "seriesId": "series-frigidaire-e-series",
      "brandId": "brand-frigidaire",
      "modelNumber": "UXH48-60MSK3IH",
      "normalizedModelNumber": "uxh48-60msk3ih",
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
      "id": "model-frigidaire-uxh24-36msk3ih",
      "slug": "frigidaire-uxh24-36msk3ih",
      "name": "Frigidaire UXH24-36MSK3IH",
      "seriesId": "series-frigidaire-e-series",
      "brandId": "brand-frigidaire",
      "modelNumber": "UXH24-36MSK3IH",
      "normalizedModelNumber": "uxh24-36msk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "model-frigidaire-gxh48-60msk4dh",
      "slug": "frigidaire-gxh48-60msk4dh",
      "name": "Frigidaire GXH48-60MSK4DH",
      "seriesId": "series-frigidaire-ultra-side-discharge",
      "brandId": "brand-frigidaire",
      "modelNumber": "GXH48-60MSK4DH",
      "normalizedModelNumber": "gxh48-60msk4dh",
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
      "id": "model-frigidaire-gxh24-36msk4dh",
      "slug": "frigidaire-gxh24-36msk4dh",
      "name": "Frigidaire GXH24-36MSK4DH",
      "seriesId": "series-frigidaire-ultra-side-discharge",
      "brandId": "brand-frigidaire",
      "modelNumber": "GXH24-36MSK4DH",
      "normalizedModelNumber": "gxh24-36msk4dh",
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
      "id": "model-frigidaire-fsh4bf5m2sx24k",
      "slug": "frigidaire-fsh4bf5m2sx24k",
      "name": "Frigidaire FSH4BF5M2SX24K",
      "seriesId": "series-frigidaire-frigidaire-fsh4bf-series",
      "brandId": "brand-frigidaire",
      "modelNumber": "FSH4BF5M2SX24K",
      "normalizedModelNumber": "fsh4bf5m2sx24k",
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
      "id": "model-frigidaire-fsh4bf5m2sx36k",
      "slug": "frigidaire-fsh4bf5m2sx36k",
      "name": "Frigidaire FSH4BF5M2SX36K",
      "seriesId": "series-frigidaire-frigidaire-fsh4bf-series",
      "brandId": "brand-frigidaire",
      "modelNumber": "FSH4BF5M2SX36K",
      "normalizedModelNumber": "fsh4bf5m2sx36k",
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
      "id": "model-frigidaire-fsh4bf5m2sx48k",
      "slug": "frigidaire-fsh4bf5m2sx48k",
      "name": "Frigidaire FSH4BF5M2SX48K",
      "seriesId": "series-frigidaire-frigidaire-fsh4bf-series",
      "brandId": "brand-frigidaire",
      "modelNumber": "FSH4BF5M2SX48K",
      "normalizedModelNumber": "fsh4bf5m2sx48k",
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
      "id": "ou-frigidaire-uxh48-60msk3ih",
      "modelNumber": "UXH48-60MSK3IH",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-frigidaire-uxh24-36msk3ih",
      "modelNumber": "UXH24-36MSK3IH",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-frigidaire-gxh48-60msk4dh",
      "modelNumber": "GXH48-60MSK4DH",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-frigidaire-gxh24-36msk4dh",
      "modelNumber": "GXH24-36MSK4DH",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-frigidaire-fsh4bf5m2sx24k",
      "modelNumber": "FSH4BF5M2SX24K",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-frigidaire-fsh4bf5m2sx36k",
      "modelNumber": "FSH4BF5M2SX36K",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-frigidaire-fsh4bf5m2sx48k",
      "modelNumber": "FSH4BF5M2SX48K",
      "brandId": "brand-frigidaire",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-umd48msk3ih",
      "modelNumber": "UMD48MSK3IH",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd36msk3ih",
      "modelNumber": "UMD36MSK3IH",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd60msk3ih",
      "modelNumber": "UMD60MSK3IH",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd24msk3ih",
      "modelNumber": "UMD24MSK3IH",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh48-msk4dh1",
      "modelNumber": "GMH48-**MSK4DH1",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh24-msk4dh1",
      "modelNumber": "GMH24-**MSK4DH1",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx36cb",
      "modelNumber": "C75B(A,H)MX36C*B",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx24kb",
      "modelNumber": "B65VMMX24K*B",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-b65vmmx3648kc",
      "modelNumber": "B65VMMX3648K*C",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-60msk4dh1",
      "modelNumber": "GMH**-60MSK4DH1",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-36msk4dh1",
      "modelNumber": "GMH**-36MSK4DH1",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cc",
      "modelNumber": "C75B(A,H)MX4860C*C",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-c75bahmx4860cd",
      "modelNumber": "C75B(A,H)MX4860C*D",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue24x5ab",
      "modelNumber": "UE24X5AB",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue36x5ab",
      "modelNumber": "UE36X5AB",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue60x5ad",
      "modelNumber": "UE60X5AD",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue48x5ad",
      "modelNumber": "UE48X5AD",
      "brandId": "brand-frigidaire",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-frigidaire-uxh48-60msk3ih-umd48msk3ih",
      "slug": "frigidaire-uxh48-60msk3ih-umd48msk3ih",
      "modelId": "model-frigidaire-uxh48-60msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh48-60msk3ih",
      "indoorUnitId": "iu-umd48msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh24-36msk3ih-umd36msk3ih",
      "slug": "frigidaire-uxh24-36msk3ih-umd36msk3ih",
      "modelId": "model-frigidaire-uxh24-36msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh24-36msk3ih",
      "indoorUnitId": "iu-umd36msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh48-60msk3ih-umd60msk3ih",
      "slug": "frigidaire-uxh48-60msk3ih-umd60msk3ih",
      "modelId": "model-frigidaire-uxh48-60msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh48-60msk3ih",
      "indoorUnitId": "iu-umd60msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh24-36msk3ih-umd24msk3ih",
      "slug": "frigidaire-uxh24-36msk3ih-umd24msk3ih",
      "modelId": "model-frigidaire-uxh24-36msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh24-36msk3ih",
      "indoorUnitId": "iu-umd24msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-gxh48-60msk4dh-gmh48-msk4dh1",
      "slug": "frigidaire-gxh48-60msk4dh-gmh48-msk4dh1",
      "modelId": "model-frigidaire-gxh48-60msk4dh",
      "outdoorUnitId": "ou-frigidaire-gxh48-60msk4dh",
      "indoorUnitId": "iu-gmh48-msk4dh1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-gxh24-36msk4dh-gmh24-msk4dh1",
      "slug": "frigidaire-gxh24-36msk4dh-gmh24-msk4dh1",
      "modelId": "model-frigidaire-gxh24-36msk4dh",
      "outdoorUnitId": "ou-frigidaire-gxh24-36msk4dh",
      "indoorUnitId": "iu-gmh24-msk4dh1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-fsh4bf5m2sx24k-c75bahmx36cb",
      "slug": "frigidaire-fsh4bf5m2sx24k-c75bahmx36cb",
      "modelId": "model-frigidaire-fsh4bf5m2sx24k",
      "outdoorUnitId": "ou-frigidaire-fsh4bf5m2sx24k",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-fsh4bf5m2sx24k-b65vmmx24kb",
      "slug": "frigidaire-fsh4bf5m2sx24k-b65vmmx24kb",
      "modelId": "model-frigidaire-fsh4bf5m2sx24k",
      "outdoorUnitId": "ou-frigidaire-fsh4bf5m2sx24k",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-fsh4bf5m2sx36k-b65vmmx3648kc",
      "slug": "frigidaire-fsh4bf5m2sx36k-b65vmmx3648kc",
      "modelId": "model-frigidaire-fsh4bf5m2sx36k",
      "outdoorUnitId": "ou-frigidaire-fsh4bf5m2sx36k",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-fsh4bf5m2sx48k-b65vmmx3648kc",
      "slug": "frigidaire-fsh4bf5m2sx48k-b65vmmx3648kc",
      "modelId": "model-frigidaire-fsh4bf5m2sx48k",
      "outdoorUnitId": "ou-frigidaire-fsh4bf5m2sx48k",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-gxh48-60msk4dh-gmh-60msk4dh1",
      "slug": "frigidaire-gxh48-60msk4dh-gmh-60msk4dh1",
      "modelId": "model-frigidaire-gxh48-60msk4dh",
      "outdoorUnitId": "ou-frigidaire-gxh48-60msk4dh",
      "indoorUnitId": "iu-gmh-60msk4dh1",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-gxh24-36msk4dh-gmh-36msk4dh1",
      "slug": "frigidaire-gxh24-36msk4dh-gmh-36msk4dh1",
      "modelId": "model-frigidaire-gxh24-36msk4dh",
      "outdoorUnitId": "ou-frigidaire-gxh24-36msk4dh",
      "indoorUnitId": "iu-gmh-36msk4dh1",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-fsh4bf5m2sx48k-c75bahmx4860cc",
      "slug": "frigidaire-fsh4bf5m2sx48k-c75bahmx4860cc",
      "modelId": "model-frigidaire-fsh4bf5m2sx48k",
      "outdoorUnitId": "ou-frigidaire-fsh4bf5m2sx48k",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-fsh4bf5m2sx48k-c75bahmx4860cd",
      "slug": "frigidaire-fsh4bf5m2sx48k-c75bahmx4860cd",
      "modelId": "model-frigidaire-fsh4bf5m2sx48k",
      "outdoorUnitId": "ou-frigidaire-fsh4bf5m2sx48k",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh24-36msk3ih-ue24x5ab",
      "slug": "frigidaire-uxh24-36msk3ih-ue24x5ab",
      "modelId": "model-frigidaire-uxh24-36msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh24-36msk3ih",
      "indoorUnitId": "iu-ue24x5ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh24-36msk3ih-ue36x5ab",
      "slug": "frigidaire-uxh24-36msk3ih-ue36x5ab",
      "modelId": "model-frigidaire-uxh24-36msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh24-36msk3ih",
      "indoorUnitId": "iu-ue36x5ab",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh48-60msk3ih-ue60x5ad",
      "slug": "frigidaire-uxh48-60msk3ih-ue60x5ad",
      "modelId": "model-frigidaire-uxh48-60msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh48-60msk3ih",
      "indoorUnitId": "iu-ue60x5ad",
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
          "sourceId": "src-frigidaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-frigidaire-uxh48-60msk3ih-ue48x5ad",
      "slug": "frigidaire-uxh48-60msk3ih-ue48x5ad",
      "modelId": "model-frigidaire-uxh48-60msk3ih",
      "outdoorUnitId": "ou-frigidaire-uxh48-60msk3ih",
      "indoorUnitId": "iu-ue48x5ad",
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
          "sourceId": "src-frigidaire-epa",
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
