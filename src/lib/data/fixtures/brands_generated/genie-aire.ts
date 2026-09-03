import type { BrandDataset } from "../../types";

export const brand_genie_aireDataset: BrandDataset = {
  "brand": {
    "id": "brand-genie-aire",
    "slug": "genie-aire",
    "name": "Genie Aire",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Genie Aire",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-genie-aire-epa",
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
      "id": "series-genie-aire-ga-series",
      "slug": "genie-aire-ga-series",
      "name": "GA series",
      "brandId": "brand-genie-aire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série GA series de Genie Aire",
      "imageUrl": "/images/series/genie-aire-genie-aire-ga-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-genie-aire-ga-09hp115vo",
      "slug": "genie-aire-ga-09hp115vo",
      "name": "Genie Aire GA-09HP115V/O",
      "seriesId": "series-genie-aire-ga-series",
      "brandId": "brand-genie-aire",
      "modelNumber": "GA-09HP115V/O",
      "normalizedModelNumber": "ga-09hp115v/o",
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
      "id": "model-genie-aire-ga-18hp230vo",
      "slug": "genie-aire-ga-18hp230vo",
      "name": "Genie Aire GA-18HP230V/O",
      "seriesId": "series-genie-aire-ga-series",
      "brandId": "brand-genie-aire",
      "modelNumber": "GA-18HP230V/O",
      "normalizedModelNumber": "ga-18hp230v/o",
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
      "id": "ou-genie-aire-ga-09hp115vo",
      "modelNumber": "GA-09HP115V/O",
      "brandId": "brand-genie-aire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-genie-aire-ga-18hp230vo",
      "modelNumber": "GA-18HP230V/O",
      "brandId": "brand-genie-aire",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ga-09hp115vi",
      "modelNumber": "GA-09HP115V/I",
      "brandId": "brand-genie-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-ga-18hp230vi",
      "modelNumber": "GA-18HP230V/I",
      "brandId": "brand-genie-aire",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-genie-aire-ga-09hp115vo-ga-09hp115vi",
      "slug": "genie-aire-ga-09hp115vo-ga-09hp115vi",
      "modelId": "model-genie-aire-ga-09hp115vo",
      "outdoorUnitId": "ou-genie-aire-ga-09hp115vo",
      "indoorUnitId": "iu-ga-09hp115vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-genie-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-genie-aire-ga-18hp230vo-ga-18hp230vi",
      "slug": "genie-aire-ga-18hp230vo-ga-18hp230vi",
      "modelId": "model-genie-aire-ga-18hp230vo",
      "outdoorUnitId": "ou-genie-aire-ga-18hp230vo",
      "indoorUnitId": "iu-ga-18hp230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-genie-aire-epa",
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
