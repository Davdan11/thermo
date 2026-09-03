import type { BrandDataset } from "../../types";

export const brand_danbyDataset: BrandDataset = {
  "brand": {
    "id": "brand-danby",
    "slug": "danby",
    "name": "Danby",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Danby",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-danby-epa",
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
      "id": "series-danby-da-series",
      "slug": "danby-da-series",
      "name": "DA series",
      "brandId": "brand-danby",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DA series de Danby",
      "imageUrl": "/images/series/danby-danby-da-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-danby-das090agbahwdb-o",
      "slug": "danby-das090agbahwdb-o",
      "name": "Danby DAS090AGBAHWDB-O",
      "seriesId": "series-danby-da-series",
      "brandId": "brand-danby",
      "modelNumber": "DAS090AGBAHWDB-O",
      "normalizedModelNumber": "das090agbahwdb-o",
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
      "id": "model-danby-das120agbahwdb-o",
      "slug": "danby-das120agbahwdb-o",
      "name": "Danby DAS120AGBAHWDB-O",
      "seriesId": "series-danby-da-series",
      "brandId": "brand-danby",
      "modelNumber": "DAS120AGBAHWDB-O",
      "normalizedModelNumber": "das120agbahwdb-o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-danby-das090agbahwdb-o",
      "modelNumber": "DAS090AGBAHWDB-O",
      "brandId": "brand-danby",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-danby-das120agbahwdb-o",
      "modelNumber": "DAS120AGBAHWDB-O",
      "brandId": "brand-danby",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-das090agbahwdb-i",
      "modelNumber": "DAS090AGBAHWDB-I",
      "brandId": "brand-danby",
      "type": "wall-single"
    },
    {
      "id": "iu-das120agbahwdb-i",
      "modelNumber": "DAS120AGBAHWDB-I",
      "brandId": "brand-danby",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-danby-das090agbahwdb-o-das090agbahwdb-i",
      "slug": "danby-das090agbahwdb-o-das090agbahwdb-i",
      "modelId": "model-danby-das090agbahwdb-o",
      "outdoorUnitId": "ou-danby-das090agbahwdb-o",
      "indoorUnitId": "iu-das090agbahwdb-i",
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
          "sourceId": "src-danby-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-danby-das120agbahwdb-o-das120agbahwdb-i",
      "slug": "danby-das120agbahwdb-o-das120agbahwdb-i",
      "modelId": "model-danby-das120agbahwdb-o",
      "outdoorUnitId": "ou-danby-das120agbahwdb-o",
      "indoorUnitId": "iu-das120agbahwdb-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-danby-epa",
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
