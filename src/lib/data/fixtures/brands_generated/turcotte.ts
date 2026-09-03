import type { BrandDataset } from "../../types";

export const brand_turcotteDataset: BrandDataset = {
  "brand": {
    "id": "brand-turcotte",
    "slug": "turcotte",
    "name": "TURCOTTE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour TURCOTTE",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-turcotte-epa",
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
      "id": "series-turcotte-t-pro",
      "slug": "turcotte-t-pro",
      "name": "T-pro",
      "brandId": "brand-turcotte",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-pro de TURCOTTE",
      "imageUrl": "/images/series/turcotte-turcotte-t-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-turcotte-hp12tuextr454b",
      "slug": "turcotte-hp12tuextr454b",
      "name": "TURCOTTE HP12TUEXTR454B",
      "seriesId": "series-turcotte-t-pro",
      "brandId": "brand-turcotte",
      "modelNumber": "HP12TUEXTR454B",
      "normalizedModelNumber": "hp12tuextr454b",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-turcotte-hp12tuextr454b",
      "modelNumber": "HP12TUEXTR454B",
      "brandId": "brand-turcotte",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hp12tuintr454b",
      "modelNumber": "HP12TUINTR454B",
      "brandId": "brand-turcotte",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-turcotte-hp12tuextr454b-hp12tuintr454b",
      "slug": "turcotte-hp12tuextr454b-hp12tuintr454b",
      "modelId": "model-turcotte-hp12tuextr454b",
      "outdoorUnitId": "ou-turcotte-hp12tuextr454b",
      "indoorUnitId": "iu-hp12tuintr454b",
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
          "sourceId": "src-turcotte-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turcotte-hp12tuextr454b-hp12tuintr454b",
      "slug": "turcotte-hp12tuextr454b-hp12tuintr454b",
      "modelId": "model-turcotte-hp12tuextr454b",
      "outdoorUnitId": "ou-turcotte-hp12tuextr454b",
      "indoorUnitId": "iu-hp12tuintr454b",
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
          "sourceId": "src-turcotte-epa",
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
