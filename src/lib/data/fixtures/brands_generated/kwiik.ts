import type { BrandDataset } from "../../types";

export const brand_kwiikDataset: BrandDataset = {
  "brand": {
    "id": "brand-kwiik",
    "slug": "kwiik",
    "name": "Kwiik",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Kwiik",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kwiik-epa",
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
      "id": "series-kwiik-hiultra",
      "slug": "kwiik-hiultra",
      "name": "HiULTRA",
      "brandId": "brand-kwiik",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HiULTRA de Kwiik",
      "imageUrl": "/images/series/kwiik-kwiik-hiultra.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kwiik-kkca-12ex2-scu",
      "slug": "kwiik-kkca-12ex2-scu",
      "name": "Kwiik KKCA-12EX2-SCU",
      "seriesId": "series-kwiik-hiultra",
      "brandId": "brand-kwiik",
      "modelNumber": "KKCA-12EX2-SCU",
      "normalizedModelNumber": "kkca-12ex2-scu",
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
      "id": "model-kwiik-kkca-18ex1",
      "slug": "kwiik-kkca-18ex1",
      "name": "Kwiik KKCA-18EX1",
      "seriesId": "series-kwiik-hiultra",
      "brandId": "brand-kwiik",
      "modelNumber": "KKCA-18EX1",
      "normalizedModelNumber": "kkca-18ex1",
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
      "id": "model-kwiik-kkca-18ex2-scu",
      "slug": "kwiik-kkca-18ex2-scu",
      "name": "Kwiik KKCA-18EX2-SCU",
      "seriesId": "series-kwiik-hiultra",
      "brandId": "brand-kwiik",
      "modelNumber": "KKCA-18EX2-SCU",
      "normalizedModelNumber": "kkca-18ex2-scu",
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
      "id": "ou-kwiik-kkca-12ex2-scu",
      "modelNumber": "KKCA-12EX2-SCU",
      "brandId": "brand-kwiik",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kwiik-kkca-18ex1",
      "modelNumber": "KKCA-18EX1",
      "brandId": "brand-kwiik",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-kwiik-kkca-18ex2-scu",
      "modelNumber": "KKCA-18EX2-SCU",
      "brandId": "brand-kwiik",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-kkca-12wa2-scu",
      "modelNumber": "KKCA-12WA2-SCU",
      "brandId": "brand-kwiik",
      "type": "wall-single"
    },
    {
      "id": "iu-kkca-18wa1",
      "modelNumber": "KKCA-18WA1",
      "brandId": "brand-kwiik",
      "type": "wall-single"
    },
    {
      "id": "iu-kkca-18wa2-scu",
      "modelNumber": "KKCA-18WA2-SCU",
      "brandId": "brand-kwiik",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-kwiik-kkca-12ex2-scu-kkca-12wa2-scu",
      "slug": "kwiik-kkca-12ex2-scu-kkca-12wa2-scu",
      "modelId": "model-kwiik-kkca-12ex2-scu",
      "outdoorUnitId": "ou-kwiik-kkca-12ex2-scu",
      "indoorUnitId": "iu-kkca-12wa2-scu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kwiik-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kwiik-kkca-18ex1-kkca-18wa1",
      "slug": "kwiik-kkca-18ex1-kkca-18wa1",
      "modelId": "model-kwiik-kkca-18ex1",
      "outdoorUnitId": "ou-kwiik-kkca-18ex1",
      "indoorUnitId": "iu-kkca-18wa1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-kwiik-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kwiik-kkca-18ex2-scu-kkca-18wa2-scu",
      "slug": "kwiik-kkca-18ex2-scu-kkca-18wa2-scu",
      "modelId": "model-kwiik-kkca-18ex2-scu",
      "outdoorUnitId": "ou-kwiik-kkca-18ex2-scu",
      "indoorUnitId": "iu-kkca-18wa2-scu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kwiik-epa",
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
