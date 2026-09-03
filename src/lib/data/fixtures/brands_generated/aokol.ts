import type { BrandDataset } from "../../types";

export const brand_aokolDataset: BrandDataset = {
  "brand": {
    "id": "brand-aokol",
    "slug": "aokol",
    "name": "AOKOL",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AOKOL",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-aokol-epa",
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
      "id": "series-aokol-multi-zone-r454b",
      "slug": "aokol-multi-zone-r454b",
      "name": "multi zone R454b",
      "brandId": "brand-aokol",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série multi zone R454b de AOKOL",
      "imageUrl": "/images/series/aokol-aokol-multi-zone-r454b.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-aokol-aoodu-1d2s",
      "slug": "aokol-aoodu-1d2s",
      "name": "AOKOL AOODU-1D2S",
      "seriesId": "series-aokol-multi-zone-r454b",
      "brandId": "brand-aokol",
      "modelNumber": "AOODU-1D2S",
      "normalizedModelNumber": "aoodu-1d2s",
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
      "id": "model-aokol-aoodu-1d3s",
      "slug": "aokol-aoodu-1d3s",
      "name": "AOKOL AOODU-1D3S",
      "seriesId": "series-aokol-multi-zone-r454b",
      "brandId": "brand-aokol",
      "modelNumber": "AOODU-1D3S",
      "normalizedModelNumber": "aoodu-1d3s",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
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
      "id": "model-aokol-aoodu-1d4s",
      "slug": "aokol-aoodu-1d4s",
      "name": "AOKOL AOODU-1D4S",
      "seriesId": "series-aokol-multi-zone-r454b",
      "brandId": "brand-aokol",
      "modelNumber": "AOODU-1D4S",
      "normalizedModelNumber": "aoodu-1d4s",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-aokol-aoodu-1d5s",
      "slug": "aokol-aoodu-1d5s",
      "name": "AOKOL AOODU-1D5S",
      "seriesId": "series-aokol-multi-zone-r454b",
      "brandId": "brand-aokol",
      "modelNumber": "AOODU-1D5S",
      "normalizedModelNumber": "aoodu-1d5s",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
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
      "id": "ou-aokol-aoodu-1d2s",
      "modelNumber": "AOODU-1D2S",
      "brandId": "brand-aokol",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aokol-aoodu-1d3s",
      "modelNumber": "AOODU-1D3S",
      "brandId": "brand-aokol",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aokol-aoodu-1d4s",
      "modelNumber": "AOODU-1D4S",
      "brandId": "brand-aokol",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aokol-aoodu-1d5s",
      "modelNumber": "AOODU-1D5S",
      "brandId": "brand-aokol",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-40620",
      "modelNumber": "IU-40620",
      "brandId": "brand-aokol",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40621",
      "modelNumber": "IU-40621",
      "brandId": "brand-aokol",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40622",
      "modelNumber": "IU-40622",
      "brandId": "brand-aokol",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40623",
      "modelNumber": "IU-40623",
      "brandId": "brand-aokol",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-aokol-aoodu-1d2s-iu-40620",
      "slug": "aokol-aoodu-1d2s-iu-40620",
      "modelId": "model-aokol-aoodu-1d2s",
      "outdoorUnitId": "ou-aokol-aoodu-1d2s",
      "indoorUnitId": "iu-iu-40620",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-aokol-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aokol-aoodu-1d3s-iu-40621",
      "slug": "aokol-aoodu-1d3s-iu-40621",
      "modelId": "model-aokol-aoodu-1d3s",
      "outdoorUnitId": "ou-aokol-aoodu-1d3s",
      "indoorUnitId": "iu-iu-40621",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-aokol-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aokol-aoodu-1d4s-iu-40622",
      "slug": "aokol-aoodu-1d4s-iu-40622",
      "modelId": "model-aokol-aoodu-1d4s",
      "outdoorUnitId": "ou-aokol-aoodu-1d4s",
      "indoorUnitId": "iu-iu-40622",
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
          "sourceId": "src-aokol-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aokol-aoodu-1d5s-iu-40623",
      "slug": "aokol-aoodu-1d5s-iu-40623",
      "modelId": "model-aokol-aoodu-1d5s",
      "outdoorUnitId": "ou-aokol-aoodu-1d5s",
      "indoorUnitId": "iu-iu-40623",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-aokol-epa",
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
