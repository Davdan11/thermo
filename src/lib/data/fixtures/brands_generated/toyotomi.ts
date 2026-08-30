import type { BrandDataset } from "../../types";

export const brand_toyotomiDataset: BrandDataset = {
  "brand": {
    "id": "brand-toyotomi",
    "slug": "toyotomi",
    "name": "Toyotomi",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Toyotomi",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-toyotomi-epa",
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
      "id": "series-toyotomi-t-pro24seer",
      "slug": "toyotomi-t-pro24seer",
      "name": "T-Pro24SEER",
      "brandId": "brand-toyotomi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-Pro24SEER de Toyotomi",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-toyotomi-tig12k115",
      "slug": "toyotomi-tig12k115",
      "name": "Toyotomi TIG12K115",
      "seriesId": "series-toyotomi-t-pro24seer",
      "brandId": "brand-toyotomi",
      "modelNumber": "TIG12K115",
      "normalizedModelNumber": "tig12k115",
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
      "id": "model-toyotomi-tig18k230",
      "slug": "toyotomi-tig18k230",
      "name": "Toyotomi TIG18K230",
      "seriesId": "series-toyotomi-t-pro24seer",
      "brandId": "brand-toyotomi",
      "modelNumber": "TIG18K230",
      "normalizedModelNumber": "tig18k230",
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
      "id": "ou-toyotomi-tig12k115",
      "modelNumber": "TIG12K115",
      "brandId": "brand-toyotomi",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-toyotomi-tig18k230",
      "modelNumber": "TIG18K230",
      "brandId": "brand-toyotomi",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tin12k115",
      "modelNumber": "TIN12K115",
      "brandId": "brand-toyotomi",
      "type": "wall-single"
    },
    {
      "id": "iu-tin18k230",
      "modelNumber": "TIN18K230",
      "brandId": "brand-toyotomi",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-toyotomi-tig12k115-tin12k115",
      "slug": "toyotomi-tig12k115-tin12k115",
      "modelId": "model-toyotomi-tig12k115",
      "outdoorUnitId": "ou-toyotomi-tig12k115",
      "indoorUnitId": "iu-tin12k115",
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
          "sourceId": "src-toyotomi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-toyotomi-tig18k230-tin18k230",
      "slug": "toyotomi-tig18k230-tin18k230",
      "modelId": "model-toyotomi-tig18k230",
      "outdoorUnitId": "ou-toyotomi-tig18k230",
      "indoorUnitId": "iu-tin18k230",
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
          "sourceId": "src-toyotomi-epa",
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
