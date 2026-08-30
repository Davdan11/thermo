import type { BrandDataset } from "../../types";

export const brand_emericDataset: BrandDataset = {
  "brand": {
    "id": "brand-emeric",
    "slug": "emeric",
    "name": "Emeric",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Emeric",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-emeric-epa",
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
      "id": "series-emeric-r32-18-series",
      "slug": "emeric-r32-18-series",
      "name": "R32 18 Series",
      "brandId": "brand-emeric",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série R32 18 Series de Emeric",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-emeric-etd-h24dmr3",
      "slug": "emeric-etd-h24dmr3",
      "name": "Emeric ETD-H24DMR3",
      "seriesId": "series-emeric-r32-18-series",
      "brandId": "brand-emeric",
      "modelNumber": "ETD-H24DMR3",
      "normalizedModelNumber": "etd-h24dmr3",
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
      "id": "model-emeric-etd-h36dmr3",
      "slug": "emeric-etd-h36dmr3",
      "name": "Emeric ETD-H36DMR3",
      "seriesId": "series-emeric-r32-18-series",
      "brandId": "brand-emeric",
      "modelNumber": "ETD-H36DMR3",
      "normalizedModelNumber": "etd-h36dmr3",
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
      "id": "model-emeric-etd-h48dmr3",
      "slug": "emeric-etd-h48dmr3",
      "name": "Emeric ETD-H48DMR3",
      "seriesId": "series-emeric-r32-18-series",
      "brandId": "brand-emeric",
      "modelNumber": "ETD-H48DMR3",
      "normalizedModelNumber": "etd-h48dmr3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "model-emeric-etd-h60dmr3",
      "slug": "emeric-etd-h60dmr3",
      "name": "Emeric ETD-H60DMR3",
      "seriesId": "series-emeric-r32-18-series",
      "brandId": "brand-emeric",
      "modelNumber": "ETD-H60DMR3",
      "normalizedModelNumber": "etd-h60dmr3",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "ou-emeric-etd-h24dmr3",
      "modelNumber": "ETD-H24DMR3",
      "brandId": "brand-emeric",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-emeric-etd-h36dmr3",
      "modelNumber": "ETD-H36DMR3",
      "brandId": "brand-emeric",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-emeric-etd-h48dmr3",
      "modelNumber": "ETD-H48DMR3",
      "brandId": "brand-emeric",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-emeric-etd-h60dmr3",
      "modelNumber": "ETD-H60DMR3",
      "brandId": "brand-emeric",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-eah-c24dmr3",
      "modelNumber": "EAH-C24DMR3",
      "brandId": "brand-emeric",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah-c48dmr3",
      "modelNumber": "EAH-C48DMR3",
      "brandId": "brand-emeric",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah-c36dmr3",
      "modelNumber": "EAH-C36DMR3",
      "brandId": "brand-emeric",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah-c60dmr3",
      "modelNumber": "EAH-C60DMR3",
      "brandId": "brand-emeric",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-emeric-etd-h24dmr3-eah-c24dmr3",
      "slug": "emeric-etd-h24dmr3-eah-c24dmr3",
      "modelId": "model-emeric-etd-h24dmr3",
      "outdoorUnitId": "ou-emeric-etd-h24dmr3",
      "indoorUnitId": "iu-eah-c24dmr3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-emeric-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emeric-etd-h36dmr3-eah-c24dmr3",
      "slug": "emeric-etd-h36dmr3-eah-c24dmr3",
      "modelId": "model-emeric-etd-h36dmr3",
      "outdoorUnitId": "ou-emeric-etd-h36dmr3",
      "indoorUnitId": "iu-eah-c24dmr3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-emeric-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emeric-etd-h48dmr3-eah-c48dmr3",
      "slug": "emeric-etd-h48dmr3-eah-c48dmr3",
      "modelId": "model-emeric-etd-h48dmr3",
      "outdoorUnitId": "ou-emeric-etd-h48dmr3",
      "indoorUnitId": "iu-eah-c48dmr3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-emeric-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emeric-etd-h60dmr3-eah-c48dmr3",
      "slug": "emeric-etd-h60dmr3-eah-c48dmr3",
      "modelId": "model-emeric-etd-h60dmr3",
      "outdoorUnitId": "ou-emeric-etd-h60dmr3",
      "indoorUnitId": "iu-eah-c48dmr3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-emeric-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emeric-etd-h36dmr3-eah-c36dmr3",
      "slug": "emeric-etd-h36dmr3-eah-c36dmr3",
      "modelId": "model-emeric-etd-h36dmr3",
      "outdoorUnitId": "ou-emeric-etd-h36dmr3",
      "indoorUnitId": "iu-eah-c36dmr3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-emeric-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-emeric-etd-h60dmr3-eah-c60dmr3",
      "slug": "emeric-etd-h60dmr3-eah-c60dmr3",
      "modelId": "model-emeric-etd-h60dmr3",
      "outdoorUnitId": "ou-emeric-etd-h60dmr3",
      "indoorUnitId": "iu-eah-c60dmr3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-emeric-epa",
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
