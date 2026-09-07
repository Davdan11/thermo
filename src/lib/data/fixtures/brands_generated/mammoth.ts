import type { BrandDataset } from "../../types";

export const brand_mammothDataset: BrandDataset = {
  "brand": {
    "id": "brand-mammoth",
    "slug": "mammoth",
    "name": "MAMMOTH",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MAMMOTH",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-mammoth-epa",
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
      "id": "series-mammoth-ultra-side-discharge",
      "slug": "mammoth-ultra-side-discharge",
      "name": "Ultra Side Discharge",
      "brandId": "brand-mammoth",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Side Discharge de MAMMOTH",
      "imageUrl": "/images/series/mammoth-mammoth-ultra-side-discharge.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-mammoth-gxh24-36msk4dh",
      "slug": "mammoth-gxh24-36msk4dh",
      "name": "MAMMOTH GXH24-36MSK4DH",
      "seriesId": "series-mammoth-ultra-side-discharge",
      "brandId": "brand-mammoth",
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
      "id": "model-mammoth-gxh48-60msk4dh",
      "slug": "mammoth-gxh48-60msk4dh",
      "name": "MAMMOTH GXH48-60MSK4DH",
      "seriesId": "series-mammoth-ultra-side-discharge",
      "brandId": "brand-mammoth",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-mammoth-gxh24-36msk4dh",
      "modelNumber": "GXH24-36MSK4DH",
      "brandId": "brand-mammoth",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-mammoth-gxh48-60msk4dh",
      "modelNumber": "GXH48-60MSK4DH",
      "brandId": "brand-mammoth",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-gmh24-msk4dh1",
      "modelNumber": "GMH24-**MSK4DH1",
      "brandId": "brand-mammoth",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh48-msk4dh1",
      "modelNumber": "GMH48-**MSK4DH1",
      "brandId": "brand-mammoth",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-36msk4dh1",
      "modelNumber": "GMH**-36MSK4DH1",
      "brandId": "brand-mammoth",
      "type": "central-ducted"
    },
    {
      "id": "iu-gmh-60msk4dh1",
      "modelNumber": "GMH**-60MSK4DH1",
      "brandId": "brand-mammoth",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-mammoth-gxh24-36msk4dh-gmh24-msk4dh1",
      "slug": "mammoth-gxh24-36msk4dh-gmh24-msk4dh1",
      "modelId": "model-mammoth-gxh24-36msk4dh",
      "outdoorUnitId": "ou-mammoth-gxh24-36msk4dh",
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
          "sourceId": "src-mammoth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mammoth-gxh48-60msk4dh-gmh48-msk4dh1",
      "slug": "mammoth-gxh48-60msk4dh-gmh48-msk4dh1",
      "modelId": "model-mammoth-gxh48-60msk4dh",
      "outdoorUnitId": "ou-mammoth-gxh48-60msk4dh",
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
          "sourceId": "src-mammoth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mammoth-gxh24-36msk4dh-gmh-36msk4dh1",
      "slug": "mammoth-gxh24-36msk4dh-gmh-36msk4dh1",
      "modelId": "model-mammoth-gxh24-36msk4dh",
      "outdoorUnitId": "ou-mammoth-gxh24-36msk4dh",
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
          "sourceId": "src-mammoth-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mammoth-gxh48-60msk4dh-gmh-60msk4dh1",
      "slug": "mammoth-gxh48-60msk4dh-gmh-60msk4dh1",
      "modelId": "model-mammoth-gxh48-60msk4dh",
      "outdoorUnitId": "ou-mammoth-gxh48-60msk4dh",
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
          "sourceId": "src-mammoth-epa",
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
