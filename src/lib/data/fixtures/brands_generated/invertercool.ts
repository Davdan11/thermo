import type { BrandDataset } from "../../types";

export const brand_invertercoolDataset: BrandDataset = {
  "brand": {
    "id": "brand-invertercool",
    "slug": "invertercool",
    "name": "Invertercool",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Invertercool",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-invertercool-epa",
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
      "id": "series-invertercool-r32-heat-pump",
      "slug": "invertercool-r32-heat-pump",
      "name": "R32 Heat Pump",
      "brandId": "brand-invertercool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série R32 Heat Pump de Invertercool",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-invertercool-coh17s-36ad",
      "slug": "invertercool-coh17s-36ad",
      "name": "Invertercool COH17S-36AD*",
      "seriesId": "series-invertercool-r32-heat-pump",
      "brandId": "brand-invertercool",
      "modelNumber": "COH17S-36AD*",
      "normalizedModelNumber": "coh17s-36ad*",
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
      "id": "model-invertercool-coh17s-60ad",
      "slug": "invertercool-coh17s-60ad",
      "name": "Invertercool COH17S-60AD*",
      "seriesId": "series-invertercool-r32-heat-pump",
      "brandId": "brand-invertercool",
      "modelNumber": "COH17S-60AD*",
      "normalizedModelNumber": "coh17s-60ad*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "ou-invertercool-coh17s-36ad",
      "modelNumber": "COH17S-36AD*",
      "brandId": "brand-invertercool",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-invertercool-coh17s-60ad",
      "modelNumber": "COH17S-60AD*",
      "brandId": "brand-invertercool",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cveed-24be",
      "modelNumber": "CVEED-24BE",
      "brandId": "brand-invertercool",
      "type": "central-ducted"
    },
    {
      "id": "iu-cveed-36be",
      "modelNumber": "CVEED-36BE",
      "brandId": "brand-invertercool",
      "type": "central-ducted"
    },
    {
      "id": "iu-cveed-48be",
      "modelNumber": "CVEED-48BE",
      "brandId": "brand-invertercool",
      "type": "central-ducted"
    },
    {
      "id": "iu-cveed-60be",
      "modelNumber": "CVEED-60BE",
      "brandId": "brand-invertercool",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-invertercool-coh17s-36ad-cveed-24be",
      "slug": "invertercool-coh17s-36ad-cveed-24be",
      "modelId": "model-invertercool-coh17s-36ad",
      "outdoorUnitId": "ou-invertercool-coh17s-36ad",
      "indoorUnitId": "iu-cveed-24be",
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
          "sourceId": "src-invertercool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-invertercool-coh17s-36ad-cveed-36be",
      "slug": "invertercool-coh17s-36ad-cveed-36be",
      "modelId": "model-invertercool-coh17s-36ad",
      "outdoorUnitId": "ou-invertercool-coh17s-36ad",
      "indoorUnitId": "iu-cveed-36be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-invertercool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-invertercool-coh17s-60ad-cveed-48be",
      "slug": "invertercool-coh17s-60ad-cveed-48be",
      "modelId": "model-invertercool-coh17s-60ad",
      "outdoorUnitId": "ou-invertercool-coh17s-60ad",
      "indoorUnitId": "iu-cveed-48be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-invertercool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-invertercool-coh17s-60ad-cveed-36be",
      "slug": "invertercool-coh17s-60ad-cveed-36be",
      "modelId": "model-invertercool-coh17s-60ad",
      "outdoorUnitId": "ou-invertercool-coh17s-60ad",
      "indoorUnitId": "iu-cveed-36be",
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
          "sourceId": "src-invertercool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-invertercool-coh17s-60ad-cveed-60be",
      "slug": "invertercool-coh17s-60ad-cveed-60be",
      "modelId": "model-invertercool-coh17s-60ad",
      "outdoorUnitId": "ou-invertercool-coh17s-60ad",
      "indoorUnitId": "iu-cveed-60be",
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
          "sourceId": "src-invertercool-epa",
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
