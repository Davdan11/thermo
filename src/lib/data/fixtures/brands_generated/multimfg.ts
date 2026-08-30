import type { BrandDataset } from "../../types";

export const brand_multimfgDataset: BrandDataset = {
  "brand": {
    "id": "brand-multimfg",
    "slug": "multimfg",
    "name": "MULTIMFG",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MULTIMFG",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-multimfg-epa",
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
      "id": "series-multimfg-12spv0-hp-x-d",
      "slug": "multimfg-12spv0-hp-x-d",
      "name": "12SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 12SPV0-HP-X-D de MULTIMFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multimfg-3036spv0-hp-x-d",
      "slug": "multimfg-3036spv0-hp-x-d",
      "name": "3036SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 3036SPV0-HP-X-D de MULTIMFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multimfg-1824spv0-hp-x-d",
      "slug": "multimfg-1824spv0-hp-x-d",
      "name": "1824SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 1824SPV0-HP-X-D de MULTIMFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multimfg-25spv0-hp-x-d",
      "slug": "multimfg-25spv0-hp-x-d",
      "name": "25SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 25SPV0-HP-X-D de MULTIMFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-multimfg-12spv0-hp-x-d",
      "slug": "multimfg-12spv0-hp-x-d",
      "name": "MULTIMFG 12SPV0-HP-X-D",
      "seriesId": "series-multimfg-12spv0-hp-x-d",
      "brandId": "brand-multimfg",
      "modelNumber": "12SPV0-HP-X-D",
      "normalizedModelNumber": "12spv0-hp-x-d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
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
      "id": "model-multimfg-3036spv0-hp-x-d",
      "slug": "multimfg-3036spv0-hp-x-d",
      "name": "MULTIMFG 3036SPV0-HP-X-D",
      "seriesId": "series-multimfg-3036spv0-hp-x-d",
      "brandId": "brand-multimfg",
      "modelNumber": "3036SPV0-HP-X-D",
      "normalizedModelNumber": "3036spv0-hp-x-d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-multimfg-1824spv0-hp-x-d",
      "slug": "multimfg-1824spv0-hp-x-d",
      "name": "MULTIMFG 1824SPV0-HP-X-D",
      "seriesId": "series-multimfg-1824spv0-hp-x-d",
      "brandId": "brand-multimfg",
      "modelNumber": "1824SPV0-HP-X-D",
      "normalizedModelNumber": "1824spv0-hp-x-d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16800,
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
      "id": "model-multimfg-25spv0-hp-x-d",
      "slug": "multimfg-25spv0-hp-x-d",
      "name": "MULTIMFG 25SPV0-HP-X-D",
      "seriesId": "series-multimfg-25spv0-hp-x-d",
      "brandId": "brand-multimfg",
      "modelNumber": "25SPV0-HP-X-D",
      "normalizedModelNumber": "25spv0-hp-x-d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 25000,
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
      "id": "ou-multimfg-12spv0-hp-x-d",
      "modelNumber": "12SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multimfg-3036spv0-hp-x-d",
      "modelNumber": "3036SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multimfg-1824spv0-hp-x-d",
      "modelNumber": "1824SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multimfg-25spv0-hp-x-d",
      "modelNumber": "25SPV0-HP-X-D",
      "brandId": "brand-multimfg",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-32027",
      "modelNumber": "IU-32027",
      "brandId": "brand-multimfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-32030",
      "modelNumber": "IU-32030",
      "brandId": "brand-multimfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-32028",
      "modelNumber": "IU-32028",
      "brandId": "brand-multimfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-32029",
      "modelNumber": "IU-32029",
      "brandId": "brand-multimfg",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-multimfg-12spv0-hp-x-d-iu-32027",
      "slug": "multimfg-12spv0-hp-x-d-iu-32027",
      "modelId": "model-multimfg-12spv0-hp-x-d",
      "outdoorUnitId": "ou-multimfg-12spv0-hp-x-d",
      "indoorUnitId": "iu-iu-32027",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-multimfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multimfg-3036spv0-hp-x-d-iu-32030",
      "slug": "multimfg-3036spv0-hp-x-d-iu-32030",
      "modelId": "model-multimfg-3036spv0-hp-x-d",
      "outdoorUnitId": "ou-multimfg-3036spv0-hp-x-d",
      "indoorUnitId": "iu-iu-32030",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-multimfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multimfg-1824spv0-hp-x-d-iu-32028",
      "slug": "multimfg-1824spv0-hp-x-d-iu-32028",
      "modelId": "model-multimfg-1824spv0-hp-x-d",
      "outdoorUnitId": "ou-multimfg-1824spv0-hp-x-d",
      "indoorUnitId": "iu-iu-32028",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-multimfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multimfg-25spv0-hp-x-d-iu-32029",
      "slug": "multimfg-25spv0-hp-x-d-iu-32029",
      "modelId": "model-multimfg-25spv0-hp-x-d",
      "outdoorUnitId": "ou-multimfg-25spv0-hp-x-d",
      "indoorUnitId": "iu-iu-32029",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-multimfg-epa",
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
