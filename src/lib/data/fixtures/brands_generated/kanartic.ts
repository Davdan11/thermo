import type { BrandDataset } from "../../types";

export const brand_kanarticDataset: BrandDataset = {
  "brand": {
    "id": "brand-kanartic",
    "slug": "kanartic",
    "name": "Kanartic",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Kanartic",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kanartic-epa",
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
      "id": "series-kanartic-keos-series",
      "slug": "kanartic-keos-series",
      "name": "KEOS series",
      "brandId": "brand-kanartic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KEOS series de Kanartic",
      "imageUrl": "/images/series/kanartic-kanartic-keos-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kanartic-keos-09uhe-na",
      "slug": "kanartic-keos-09uhe-na",
      "name": "Kanartic KEOS-09UHE-NA",
      "seriesId": "series-kanartic-keos-series",
      "brandId": "brand-kanartic",
      "modelNumber": "KEOS-09UHE-NA",
      "normalizedModelNumber": "keos-09uhe-na",
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
      "id": "model-kanartic-keos-12uhe-na",
      "slug": "kanartic-keos-12uhe-na",
      "name": "Kanartic KEOS-12UHE-NA",
      "seriesId": "series-kanartic-keos-series",
      "brandId": "brand-kanartic",
      "modelNumber": "KEOS-12UHE-NA",
      "normalizedModelNumber": "keos-12uhe-na",
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
      "id": "model-kanartic-keos-18uhe-na",
      "slug": "kanartic-keos-18uhe-na",
      "name": "Kanartic KEOS-18UHE-NA",
      "seriesId": "series-kanartic-keos-series",
      "brandId": "brand-kanartic",
      "modelNumber": "KEOS-18UHE-NA",
      "normalizedModelNumber": "keos-18uhe-na",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-kanartic-keos-09uhe-na",
      "modelNumber": "KEOS-09UHE-NA",
      "brandId": "brand-kanartic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanartic-keos-12uhe-na",
      "modelNumber": "KEOS-12UHE-NA",
      "brandId": "brand-kanartic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-kanartic-keos-18uhe-na",
      "modelNumber": "KEOS-18UHE-NA",
      "brandId": "brand-kanartic",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-keos-09uhe-na",
      "modelNumber": "KEOS-09UHE-NA",
      "brandId": "brand-kanartic",
      "type": "wall-single"
    },
    {
      "id": "iu-keos-12uhe-na",
      "modelNumber": "KEOS-12UHE-NA",
      "brandId": "brand-kanartic",
      "type": "wall-single"
    },
    {
      "id": "iu-keos-18uhe-na",
      "modelNumber": "KEOS-18UHE-NA",
      "brandId": "brand-kanartic",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-kanartic-keos-09uhe-na-keos-09uhe-na",
      "slug": "kanartic-keos-09uhe-na-keos-09uhe-na",
      "modelId": "model-kanartic-keos-09uhe-na",
      "outdoorUnitId": "ou-kanartic-keos-09uhe-na",
      "indoorUnitId": "iu-keos-09uhe-na",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-kanartic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanartic-keos-12uhe-na-keos-12uhe-na",
      "slug": "kanartic-keos-12uhe-na-keos-12uhe-na",
      "modelId": "model-kanartic-keos-12uhe-na",
      "outdoorUnitId": "ou-kanartic-keos-12uhe-na",
      "indoorUnitId": "iu-keos-12uhe-na",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-kanartic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kanartic-keos-18uhe-na-keos-18uhe-na",
      "slug": "kanartic-keos-18uhe-na-keos-18uhe-na",
      "modelId": "model-kanartic-keos-18uhe-na",
      "outdoorUnitId": "ou-kanartic-keos-18uhe-na",
      "indoorUnitId": "iu-keos-18uhe-na",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-kanartic-epa",
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
