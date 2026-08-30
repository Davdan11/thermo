import type { BrandDataset } from "../../types";

export const brand_air_tempoDataset: BrandDataset = {
  "brand": {
    "id": "brand-air-tempo",
    "slug": "air-tempo",
    "name": "Air Tempo",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Air Tempo",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-air-tempo-epa",
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
      "id": "series-air-tempo-builder-series",
      "slug": "air-tempo-builder-series",
      "name": "Builder Series",
      "brandId": "brand-air-tempo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Builder Series de Air Tempo",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-air-tempo-atcb12k454b-o",
      "slug": "air-tempo-atcb12k454b-o",
      "name": "Air Tempo ATCB12K454B-O",
      "seriesId": "series-air-tempo-builder-series",
      "brandId": "brand-air-tempo",
      "modelNumber": "ATCB12K454B-O",
      "normalizedModelNumber": "atcb12k454b-o",
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
      "id": "model-air-tempo-atcb18k454b-o",
      "slug": "air-tempo-atcb18k454b-o",
      "name": "Air Tempo ATCB18K454B-O",
      "seriesId": "series-air-tempo-builder-series",
      "brandId": "brand-air-tempo",
      "modelNumber": "ATCB18K454B-O",
      "normalizedModelNumber": "atcb18k454b-o",
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
      "id": "model-air-tempo-atcb24k454b-o",
      "slug": "air-tempo-atcb24k454b-o",
      "name": "Air Tempo ATCB24K454B-O",
      "seriesId": "series-air-tempo-builder-series",
      "brandId": "brand-air-tempo",
      "modelNumber": "ATCB24K454B-O",
      "normalizedModelNumber": "atcb24k454b-o",
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
      "id": "ou-air-tempo-atcb12k454b-o",
      "modelNumber": "ATCB12K454B-O",
      "brandId": "brand-air-tempo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-air-tempo-atcb18k454b-o",
      "modelNumber": "ATCB18K454B-O",
      "brandId": "brand-air-tempo",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-air-tempo-atcb24k454b-o",
      "modelNumber": "ATCB24K454B-O",
      "brandId": "brand-air-tempo",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-atcb12k454b-i",
      "modelNumber": "ATCB12K454B-I",
      "brandId": "brand-air-tempo",
      "type": "wall-single"
    },
    {
      "id": "iu-atcb18k454b-i",
      "modelNumber": "ATCB18K454B-I",
      "brandId": "brand-air-tempo",
      "type": "wall-single"
    },
    {
      "id": "iu-atcb24k454b-i",
      "modelNumber": "ATCB24K454B-I",
      "brandId": "brand-air-tempo",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-air-tempo-atcb12k454b-o-atcb12k454b-i",
      "slug": "air-tempo-atcb12k454b-o-atcb12k454b-i",
      "modelId": "model-air-tempo-atcb12k454b-o",
      "outdoorUnitId": "ou-air-tempo-atcb12k454b-o",
      "indoorUnitId": "iu-atcb12k454b-i",
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
          "sourceId": "src-air-tempo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-tempo-atcb12k454b-o-atcb12k454b-i",
      "slug": "air-tempo-atcb12k454b-o-atcb12k454b-i",
      "modelId": "model-air-tempo-atcb12k454b-o",
      "outdoorUnitId": "ou-air-tempo-atcb12k454b-o",
      "indoorUnitId": "iu-atcb12k454b-i",
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
          "sourceId": "src-air-tempo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-tempo-atcb18k454b-o-atcb18k454b-i",
      "slug": "air-tempo-atcb18k454b-o-atcb18k454b-i",
      "modelId": "model-air-tempo-atcb18k454b-o",
      "outdoorUnitId": "ou-air-tempo-atcb18k454b-o",
      "indoorUnitId": "iu-atcb18k454b-i",
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
          "sourceId": "src-air-tempo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-tempo-atcb18k454b-o-atcb18k454b-i",
      "slug": "air-tempo-atcb18k454b-o-atcb18k454b-i",
      "modelId": "model-air-tempo-atcb18k454b-o",
      "outdoorUnitId": "ou-air-tempo-atcb18k454b-o",
      "indoorUnitId": "iu-atcb18k454b-i",
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
          "sourceId": "src-air-tempo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-tempo-atcb24k454b-o-atcb24k454b-i",
      "slug": "air-tempo-atcb24k454b-o-atcb24k454b-i",
      "modelId": "model-air-tempo-atcb24k454b-o",
      "outdoorUnitId": "ou-air-tempo-atcb24k454b-o",
      "indoorUnitId": "iu-atcb24k454b-i",
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
          "sourceId": "src-air-tempo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-tempo-atcb24k454b-o-atcb24k454b-i",
      "slug": "air-tempo-atcb24k454b-o-atcb24k454b-i",
      "modelId": "model-air-tempo-atcb24k454b-o",
      "outdoorUnitId": "ou-air-tempo-atcb24k454b-o",
      "indoorUnitId": "iu-atcb24k454b-i",
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
          "sourceId": "src-air-tempo-epa",
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
