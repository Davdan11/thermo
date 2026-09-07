import type { BrandDataset } from "../../types";

export const brand_gchvDataset: BrandDataset = {
  "brand": {
    "id": "brand-gchv",
    "slug": "gchv",
    "name": "GCHV",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour GCHV",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-gchv-epa",
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
      "id": "series-gchv-cot-d36hnr8-ea01j0",
      "slug": "gchv-cot-d36hnr8-ea01j0",
      "name": "COT-D36HNR8-EA01(J0)",
      "brandId": "brand-gchv",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série COT-D36HNR8-EA01(J0) de GCHV",
      "imageUrl": "/images/series/gchv-gchv-cot-d36hnr8-ea01j0.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-gchv-cot-d60hnr8-ga01j0",
      "slug": "gchv-cot-d60hnr8-ga01j0",
      "name": "COT-D60HNR8-GA01(J0)",
      "brandId": "brand-gchv",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série COT-D60HNR8-GA01(J0) de GCHV",
      "imageUrl": "/images/series/gchv-gchv-cot-d60hnr8-ga01j0.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-gchv-cot-d36hnr8-ea01j0",
      "slug": "gchv-cot-d36hnr8-ea01j0",
      "name": "GCHV COT-D36HNR8-EA01(J0)",
      "seriesId": "series-gchv-cot-d36hnr8-ea01j0",
      "brandId": "brand-gchv",
      "modelNumber": "COT-D36HNR8-EA01(J0)",
      "normalizedModelNumber": "cot-d36hnr8-ea01(j0)",
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
      "id": "model-gchv-cot-d60hnr8-ga01j0",
      "slug": "gchv-cot-d60hnr8-ga01j0",
      "name": "GCHV COT-D60HNR8-GA01(J0)",
      "seriesId": "series-gchv-cot-d60hnr8-ga01j0",
      "brandId": "brand-gchv",
      "modelNumber": "COT-D60HNR8-GA01(J0)",
      "normalizedModelNumber": "cot-d60hnr8-ga01(j0)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47500,
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
      "id": "ou-gchv-cot-d36hnr8-ea01j0",
      "modelNumber": "COT-D36HNR8-EA01(J0)",
      "brandId": "brand-gchv",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-gchv-cot-d60hnr8-ga01j0",
      "modelNumber": "COT-D60HNR8-GA01(J0)",
      "brandId": "brand-gchv",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cah-d24hnr8-fmcj0",
      "modelNumber": "CAH-D24HNR8-FMC(J0)",
      "brandId": "brand-gchv",
      "type": "central-ducted"
    },
    {
      "id": "iu-cah-d36hnr8-fmcj0",
      "modelNumber": "CAH-D36HNR8-FMC(J0)",
      "brandId": "brand-gchv",
      "type": "central-ducted"
    },
    {
      "id": "iu-cah-d48hnr8-fmdj0",
      "modelNumber": "CAH-D48HNR8-FMD(J0)",
      "brandId": "brand-gchv",
      "type": "central-ducted"
    },
    {
      "id": "iu-cah-d60hnr8-fmdj0",
      "modelNumber": "CAH-D60HNR8-FMD(J0)",
      "brandId": "brand-gchv",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-gchv-cot-d36hnr8-ea01j0-cah-d24hnr8-fmcj0",
      "slug": "gchv-cot-d36hnr8-ea01j0-cah-d24hnr8-fmcj0",
      "modelId": "model-gchv-cot-d36hnr8-ea01j0",
      "outdoorUnitId": "ou-gchv-cot-d36hnr8-ea01j0",
      "indoorUnitId": "iu-cah-d24hnr8-fmcj0",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-gchv-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gchv-cot-d36hnr8-ea01j0-cah-d36hnr8-fmcj0",
      "slug": "gchv-cot-d36hnr8-ea01j0-cah-d36hnr8-fmcj0",
      "modelId": "model-gchv-cot-d36hnr8-ea01j0",
      "outdoorUnitId": "ou-gchv-cot-d36hnr8-ea01j0",
      "indoorUnitId": "iu-cah-d36hnr8-fmcj0",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-gchv-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gchv-cot-d60hnr8-ga01j0-cah-d48hnr8-fmdj0",
      "slug": "gchv-cot-d60hnr8-ga01j0-cah-d48hnr8-fmdj0",
      "modelId": "model-gchv-cot-d60hnr8-ga01j0",
      "outdoorUnitId": "ou-gchv-cot-d60hnr8-ga01j0",
      "indoorUnitId": "iu-cah-d48hnr8-fmdj0",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-gchv-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-gchv-cot-d60hnr8-ga01j0-cah-d60hnr8-fmdj0",
      "slug": "gchv-cot-d60hnr8-ga01j0-cah-d60hnr8-fmdj0",
      "modelId": "model-gchv-cot-d60hnr8-ga01j0",
      "outdoorUnitId": "ou-gchv-cot-d60hnr8-ga01j0",
      "indoorUnitId": "iu-cah-d60hnr8-fmdj0",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-gchv-epa",
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
