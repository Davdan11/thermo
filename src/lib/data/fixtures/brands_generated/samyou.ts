import type { BrandDataset } from "../../types";

export const brand_samyouDataset: BrandDataset = {
  "brand": {
    "id": "brand-samyou",
    "slug": "samyou",
    "name": "SAMYOU",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour SAMYOU",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-samyou-epa",
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
      "id": "series-samyou-vshp",
      "slug": "samyou-vshp",
      "name": "VSHP",
      "brandId": "brand-samyou",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série VSHP de SAMYOU",
      "imageUrl": "/images/series/samyou-samyou-vshp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-samyou-vuh24-va6bao",
      "slug": "samyou-vuh24-va6bao",
      "name": "SAMYOU VUH24-VA6BA(O)",
      "seriesId": "series-samyou-vshp",
      "brandId": "brand-samyou",
      "modelNumber": "VUH24-VA6BA(O)",
      "normalizedModelNumber": "vuh24-va6ba(o)",
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
      "id": "model-samyou-vuh36-va6bao",
      "slug": "samyou-vuh36-va6bao",
      "name": "SAMYOU VUH36-VA6BA(O)",
      "seriesId": "series-samyou-vshp",
      "brandId": "brand-samyou",
      "modelNumber": "VUH36-VA6BA(O)",
      "normalizedModelNumber": "vuh36-va6ba(o)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-samyou-vuh48-va6bao",
      "slug": "samyou-vuh48-va6bao",
      "name": "SAMYOU VUH48-VA6BA(O)",
      "seriesId": "series-samyou-vshp",
      "brandId": "brand-samyou",
      "modelNumber": "VUH48-VA6BA(O)",
      "normalizedModelNumber": "vuh48-va6ba(o)",
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
      "id": "model-samyou-vuh60-va6ba0",
      "slug": "samyou-vuh60-va6ba0",
      "name": "SAMYOU VUH60-VA6BA(0)",
      "seriesId": "series-samyou-vshp",
      "brandId": "brand-samyou",
      "modelNumber": "VUH60-VA6BA(0)",
      "normalizedModelNumber": "vuh60-va6ba(0)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 52500,
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
      "id": "ou-samyou-vuh24-va6bao",
      "modelNumber": "VUH24-VA6BA(O)",
      "brandId": "brand-samyou",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-samyou-vuh36-va6bao",
      "modelNumber": "VUH36-VA6BA(O)",
      "brandId": "brand-samyou",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-samyou-vuh48-va6bao",
      "modelNumber": "VUH48-VA6BA(O)",
      "brandId": "brand-samyou",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-samyou-vuh60-va6ba0",
      "modelNumber": "VUH60-VA6BA(0)",
      "brandId": "brand-samyou",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-vuh24-va6bai",
      "modelNumber": "VUH24-VA6BA(I)",
      "brandId": "brand-samyou",
      "type": "central-ducted"
    },
    {
      "id": "iu-vuh36-va6bai",
      "modelNumber": "VUH36-VA6BA(I)",
      "brandId": "brand-samyou",
      "type": "central-ducted"
    },
    {
      "id": "iu-vuh48-va6bai",
      "modelNumber": "VUH48-VA6BA(I)",
      "brandId": "brand-samyou",
      "type": "central-ducted"
    },
    {
      "id": "iu-vuh60-va6bai",
      "modelNumber": "VUH60-VA6BA(I)",
      "brandId": "brand-samyou",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-samyou-vuh24-va6bao-vuh24-va6bai",
      "slug": "samyou-vuh24-va6bao-vuh24-va6bai",
      "modelId": "model-samyou-vuh24-va6bao",
      "outdoorUnitId": "ou-samyou-vuh24-va6bao",
      "indoorUnitId": "iu-vuh24-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-samyou-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-samyou-vuh36-va6bao-vuh36-va6bai",
      "slug": "samyou-vuh36-va6bao-vuh36-va6bai",
      "modelId": "model-samyou-vuh36-va6bao",
      "outdoorUnitId": "ou-samyou-vuh36-va6bao",
      "indoorUnitId": "iu-vuh36-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-samyou-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-samyou-vuh48-va6bao-vuh48-va6bai",
      "slug": "samyou-vuh48-va6bao-vuh48-va6bai",
      "modelId": "model-samyou-vuh48-va6bao",
      "outdoorUnitId": "ou-samyou-vuh48-va6bao",
      "indoorUnitId": "iu-vuh48-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-samyou-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-samyou-vuh60-va6ba0-vuh60-va6bai",
      "slug": "samyou-vuh60-va6ba0-vuh60-va6bai",
      "modelId": "model-samyou-vuh60-va6ba0",
      "outdoorUnitId": "ou-samyou-vuh60-va6ba0",
      "indoorUnitId": "iu-vuh60-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-samyou-epa",
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
