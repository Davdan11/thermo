import type { BrandDataset } from "../../types";

export const brand_evo_airDataset: BrandDataset = {
  "brand": {
    "id": "brand-evo-air",
    "slug": "evo-air",
    "name": "EVO AIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour EVO AIR",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-evo-air-epa",
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
      "id": "series-evo-air-evoair-a-series",
      "slug": "evo-air-evoair-a-series",
      "name": "EVOAIR A SERIES",
      "brandId": "brand-evo-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EVOAIR A SERIES de EVO AIR",
      "imageUrl": "/images/series/evo-air-evo-air-evoair-a-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-evo-air-evoair-b-series",
      "slug": "evo-air-evoair-b-series",
      "name": "EVOAIR B SERIES",
      "brandId": "brand-evo-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EVOAIR B SERIES de EVO AIR",
      "imageUrl": "/images/series/evo-air-evo-air-evoair-b-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-evo-air-evo-tp-12abtuo",
      "slug": "evo-air-evo-tp-12abtuo",
      "name": "EVO AIR EVO-TP-12ABTUO",
      "seriesId": "series-evo-air-evoair-a-series",
      "brandId": "brand-evo-air",
      "modelNumber": "EVO-TP-12ABTUO",
      "normalizedModelNumber": "evo-tp-12abtuo",
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
      "id": "model-evo-air-evo-tp-18abtuo",
      "slug": "evo-air-evo-tp-18abtuo",
      "name": "EVO AIR EVO-TP-18ABTUO",
      "seriesId": "series-evo-air-evoair-b-series",
      "brandId": "brand-evo-air",
      "modelNumber": "EVO-TP-18ABTUO",
      "normalizedModelNumber": "evo-tp-18abtuo",
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
      "id": "model-evo-air-evo-tp-18bbtuo",
      "slug": "evo-air-evo-tp-18bbtuo",
      "name": "EVO AIR EVO-TP-18BBTUO",
      "seriesId": "series-evo-air-evoair-b-series",
      "brandId": "brand-evo-air",
      "modelNumber": "EVO-TP-18BBTUO",
      "normalizedModelNumber": "evo-tp-18bbtuo",
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
      "id": "ou-evo-air-evo-tp-12abtuo",
      "modelNumber": "EVO-TP-12ABTUO",
      "brandId": "brand-evo-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evo-air-evo-tp-18abtuo",
      "modelNumber": "EVO-TP-18ABTUO",
      "brandId": "brand-evo-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evo-air-evo-tp-18bbtuo",
      "modelNumber": "EVO-TP-18BBTUO",
      "brandId": "brand-evo-air",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-evo-tp-12abtui",
      "modelNumber": "EVO-TP-12ABTUI",
      "brandId": "brand-evo-air",
      "type": "wall-single"
    },
    {
      "id": "iu-evo-tp-18abtui",
      "modelNumber": "EVO-TP-18ABTUI",
      "brandId": "brand-evo-air",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-evo-air-evo-tp-12abtuo-evo-tp-12abtui",
      "slug": "evo-air-evo-tp-12abtuo-evo-tp-12abtui",
      "modelId": "model-evo-air-evo-tp-12abtuo",
      "outdoorUnitId": "ou-evo-air-evo-tp-12abtuo",
      "indoorUnitId": "iu-evo-tp-12abtui",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-evo-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evo-air-evo-tp-18abtuo-evo-tp-18abtui",
      "slug": "evo-air-evo-tp-18abtuo-evo-tp-18abtui",
      "modelId": "model-evo-air-evo-tp-18abtuo",
      "outdoorUnitId": "ou-evo-air-evo-tp-18abtuo",
      "indoorUnitId": "iu-evo-tp-18abtui",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-evo-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evo-air-evo-tp-18bbtuo-evo-tp-18abtui",
      "slug": "evo-air-evo-tp-18bbtuo-evo-tp-18abtui",
      "modelId": "model-evo-air-evo-tp-18bbtuo",
      "outdoorUnitId": "ou-evo-air-evo-tp-18bbtuo",
      "indoorUnitId": "iu-evo-tp-18abtui",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-evo-air-epa",
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
