import type { BrandDataset } from "../../types";

export const brand_hotpointDataset: BrandDataset = {
  "brand": {
    "id": "brand-hotpoint",
    "slug": "hotpoint",
    "name": "Hotpoint",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Hotpoint",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-hotpoint-epa",
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
      "id": "series-hotpoint-hotpoint",
      "slug": "hotpoint-hotpoint",
      "name": "Hotpoint",
      "brandId": "brand-hotpoint",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hotpoint de Hotpoint",
      "imageUrl": "/images/series/hotpoint-hotpoint-hotpoint.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-hotpoint-1h09hn2da",
      "slug": "hotpoint-1h09hn2da",
      "name": "Hotpoint 1H09HN2DA**",
      "seriesId": "series-hotpoint-hotpoint",
      "brandId": "brand-hotpoint",
      "modelNumber": "1H09HN2DA**",
      "normalizedModelNumber": "1h09hn2da**",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-hotpoint-1h12hn2da",
      "slug": "hotpoint-1h12hn2da",
      "name": "Hotpoint 1H12HN2DA**",
      "seriesId": "series-hotpoint-hotpoint",
      "brandId": "brand-hotpoint",
      "modelNumber": "1H12HN2DA**",
      "normalizedModelNumber": "1h12hn2da**",
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
      "id": "model-hotpoint-1h18hn2da",
      "slug": "hotpoint-1h18hn2da",
      "name": "Hotpoint 1H18HN2DA**",
      "seriesId": "series-hotpoint-hotpoint",
      "brandId": "brand-hotpoint",
      "modelNumber": "1H18HN2DA**",
      "normalizedModelNumber": "1h18hn2da**",
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
      "id": "model-hotpoint-1h24hn2da",
      "slug": "hotpoint-1h24hn2da",
      "name": "Hotpoint 1H24HN2DA**",
      "seriesId": "series-hotpoint-hotpoint",
      "brandId": "brand-hotpoint",
      "modelNumber": "1H24HN2DA**",
      "normalizedModelNumber": "1h24hn2da**",
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
      "id": "ou-hotpoint-1h09hn2da",
      "modelNumber": "1H09HN2DA**",
      "brandId": "brand-hotpoint",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hotpoint-1h12hn2da",
      "modelNumber": "1H12HN2DA**",
      "brandId": "brand-hotpoint",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hotpoint-1h18hn2da",
      "modelNumber": "1H18HN2DA**",
      "brandId": "brand-hotpoint",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hotpoint-1h24hn2da",
      "modelNumber": "1H24HN2DA**",
      "brandId": "brand-hotpoint",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hw09hn2da",
      "modelNumber": "HW09HN2DA**",
      "brandId": "brand-hotpoint",
      "type": "wall-single"
    },
    {
      "id": "iu-hw12hn2da",
      "modelNumber": "HW12HN2DA**",
      "brandId": "brand-hotpoint",
      "type": "wall-single"
    },
    {
      "id": "iu-hw18hn2da",
      "modelNumber": "HW18HN2DA**",
      "brandId": "brand-hotpoint",
      "type": "wall-single"
    },
    {
      "id": "iu-hw24hn2da",
      "modelNumber": "HW24HN2DA**",
      "brandId": "brand-hotpoint",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-hotpoint-1h09hn2da-hw09hn2da",
      "slug": "hotpoint-1h09hn2da-hw09hn2da",
      "modelId": "model-hotpoint-1h09hn2da",
      "outdoorUnitId": "ou-hotpoint-1h09hn2da",
      "indoorUnitId": "iu-hw09hn2da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hotpoint-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hotpoint-1h12hn2da-hw12hn2da",
      "slug": "hotpoint-1h12hn2da-hw12hn2da",
      "modelId": "model-hotpoint-1h12hn2da",
      "outdoorUnitId": "ou-hotpoint-1h12hn2da",
      "indoorUnitId": "iu-hw12hn2da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hotpoint-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hotpoint-1h18hn2da-hw18hn2da",
      "slug": "hotpoint-1h18hn2da-hw18hn2da",
      "modelId": "model-hotpoint-1h18hn2da",
      "outdoorUnitId": "ou-hotpoint-1h18hn2da",
      "indoorUnitId": "iu-hw18hn2da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hotpoint-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hotpoint-1h24hn2da-hw24hn2da",
      "slug": "hotpoint-1h24hn2da-hw24hn2da",
      "modelId": "model-hotpoint-1h24hn2da",
      "outdoorUnitId": "ou-hotpoint-1h24hn2da",
      "indoorUnitId": "iu-hw24hn2da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hotpoint-epa",
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
