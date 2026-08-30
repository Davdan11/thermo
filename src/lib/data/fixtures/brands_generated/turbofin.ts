import type { BrandDataset } from "../../types";

export const brand_turbofinDataset: BrandDataset = {
  "brand": {
    "id": "brand-turbofin",
    "slug": "turbofin",
    "name": "TURBOFIN",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour TURBOFIN",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-turbofin-epa",
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
      "id": "series-turbofin-t-pro",
      "slug": "turbofin-t-pro",
      "name": "T-pro",
      "brandId": "brand-turbofin",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-pro de TURBOFIN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-turbofin-hp12tfextr454b",
      "slug": "turbofin-hp12tfextr454b",
      "name": "TURBOFIN HP12TFEXTR454B",
      "seriesId": "series-turbofin-t-pro",
      "brandId": "brand-turbofin",
      "modelNumber": "HP12TFEXTR454B",
      "normalizedModelNumber": "hp12tfextr454b",
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
      "id": "model-turbofin-hp18tfextr454b",
      "slug": "turbofin-hp18tfextr454b",
      "name": "TURBOFIN HP18TFEXTR454B",
      "seriesId": "series-turbofin-t-pro",
      "brandId": "brand-turbofin",
      "modelNumber": "HP18TFEXTR454B",
      "normalizedModelNumber": "hp18tfextr454b",
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
      "id": "model-turbofin-hp24tfextr454b",
      "slug": "turbofin-hp24tfextr454b",
      "name": "TURBOFIN HP24TFEXTR454B",
      "seriesId": "series-turbofin-t-pro",
      "brandId": "brand-turbofin",
      "modelNumber": "HP24TFEXTR454B",
      "normalizedModelNumber": "hp24tfextr454b",
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
      "id": "ou-turbofin-hp12tfextr454b",
      "modelNumber": "HP12TFEXTR454B",
      "brandId": "brand-turbofin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbofin-hp18tfextr454b",
      "modelNumber": "HP18TFEXTR454B",
      "brandId": "brand-turbofin",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbofin-hp24tfextr454b",
      "modelNumber": "HP24TFEXTR454B",
      "brandId": "brand-turbofin",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hp12tfintr454b",
      "modelNumber": "HP12TFINTR454B",
      "brandId": "brand-turbofin",
      "type": "wall-single"
    },
    {
      "id": "iu-hp18tfintr454b",
      "modelNumber": "HP18TFINTR454B",
      "brandId": "brand-turbofin",
      "type": "wall-single"
    },
    {
      "id": "iu-hp24tfintr454b",
      "modelNumber": "HP24TFINTR454B",
      "brandId": "brand-turbofin",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-turbofin-hp12tfextr454b-hp12tfintr454b",
      "slug": "turbofin-hp12tfextr454b-hp12tfintr454b",
      "modelId": "model-turbofin-hp12tfextr454b",
      "outdoorUnitId": "ou-turbofin-hp12tfextr454b",
      "indoorUnitId": "iu-hp12tfintr454b",
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
          "sourceId": "src-turbofin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbofin-hp18tfextr454b-hp18tfintr454b",
      "slug": "turbofin-hp18tfextr454b-hp18tfintr454b",
      "modelId": "model-turbofin-hp18tfextr454b",
      "outdoorUnitId": "ou-turbofin-hp18tfextr454b",
      "indoorUnitId": "iu-hp18tfintr454b",
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
          "sourceId": "src-turbofin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbofin-hp18tfextr454b-hp18tfintr454b",
      "slug": "turbofin-hp18tfextr454b-hp18tfintr454b",
      "modelId": "model-turbofin-hp18tfextr454b",
      "outdoorUnitId": "ou-turbofin-hp18tfextr454b",
      "indoorUnitId": "iu-hp18tfintr454b",
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
          "sourceId": "src-turbofin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbofin-hp24tfextr454b-hp24tfintr454b",
      "slug": "turbofin-hp24tfextr454b-hp24tfintr454b",
      "modelId": "model-turbofin-hp24tfextr454b",
      "outdoorUnitId": "ou-turbofin-hp24tfextr454b",
      "indoorUnitId": "iu-hp24tfintr454b",
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
          "sourceId": "src-turbofin-epa",
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
