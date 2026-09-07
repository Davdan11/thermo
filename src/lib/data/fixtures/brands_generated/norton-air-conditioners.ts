import type { BrandDataset } from "../../types";

export const brand_norton_air_conditionersDataset: BrandDataset = {
  "brand": {
    "id": "brand-norton-air-conditioners",
    "slug": "norton-air-conditioners",
    "name": "NORTON AIR CONDITIONERS",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour NORTON AIR CONDITIONERS",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-norton-air-conditioners-epa",
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
      "id": "series-norton-air-conditioners-ohp-series",
      "slug": "norton-air-conditioners-ohp-series",
      "name": "OHP Series",
      "brandId": "brand-norton-air-conditioners",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série OHP Series de NORTON AIR CONDITIONERS",
      "imageUrl": "/images/series/norton-air-conditioners-norton-air-conditioners-ohp-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-norton-air-conditioners-ohp-12-22-23-a",
      "slug": "norton-air-conditioners-ohp-12-22-23-a",
      "name": "NORTON AIR CONDITIONERS OHP-12-22-23-A",
      "seriesId": "series-norton-air-conditioners-ohp-series",
      "brandId": "brand-norton-air-conditioners",
      "modelNumber": "OHP-12-22-23-A",
      "normalizedModelNumber": "ohp-12-22-23-a",
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
      "id": "model-norton-air-conditioners-ohp-09-22-23-a",
      "slug": "norton-air-conditioners-ohp-09-22-23-a",
      "name": "NORTON AIR CONDITIONERS OHP-09-22-23-A",
      "seriesId": "series-norton-air-conditioners-ohp-series",
      "brandId": "brand-norton-air-conditioners",
      "modelNumber": "OHP-09-22-23-A",
      "normalizedModelNumber": "ohp-09-22-23-a",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-norton-air-conditioners-ohp-12-22-23-a",
      "modelNumber": "OHP-12-22-23-A",
      "brandId": "brand-norton-air-conditioners",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-norton-air-conditioners-ohp-09-22-23-a",
      "modelNumber": "OHP-09-22-23-A",
      "brandId": "brand-norton-air-conditioners",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhp-12-12-u-a",
      "modelNumber": "DHP-12-12-U-A",
      "brandId": "brand-norton-air-conditioners",
      "type": "wall-single"
    },
    {
      "id": "iu-dhp-09-12-u-a",
      "modelNumber": "DHP-09-12-U-A",
      "brandId": "brand-norton-air-conditioners",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-norton-air-conditioners-ohp-12-22-23-a-dhp-12-12-u-a",
      "slug": "norton-air-conditioners-ohp-12-22-23-a-dhp-12-12-u-a",
      "modelId": "model-norton-air-conditioners-ohp-12-22-23-a",
      "outdoorUnitId": "ou-norton-air-conditioners-ohp-12-22-23-a",
      "indoorUnitId": "iu-dhp-12-12-u-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-norton-air-conditioners-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-norton-air-conditioners-ohp-09-22-23-a-dhp-09-12-u-a",
      "slug": "norton-air-conditioners-ohp-09-22-23-a-dhp-09-12-u-a",
      "modelId": "model-norton-air-conditioners-ohp-09-22-23-a",
      "outdoorUnitId": "ou-norton-air-conditioners-ohp-09-22-23-a",
      "indoorUnitId": "iu-dhp-09-12-u-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-norton-air-conditioners-epa",
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
