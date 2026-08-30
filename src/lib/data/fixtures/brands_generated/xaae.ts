import type { BrandDataset } from "../../types";

export const brand_xaaeDataset: BrandDataset = {
  "brand": {
    "id": "brand-xaae",
    "slug": "xaae",
    "name": "XAAE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour XAAE",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-xaae-epa",
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
      "id": "series-xaae-4hp18v-series",
      "slug": "xaae-4hp18v-series",
      "name": "4HP18V SERIES",
      "brandId": "brand-xaae",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 4HP18V SERIES de XAAE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-xaae-4hp18v36p",
      "slug": "xaae-4hp18v36p",
      "name": "XAAE 4HP18V36P",
      "seriesId": "series-xaae-4hp18v-series",
      "brandId": "brand-xaae",
      "modelNumber": "4HP18V36P",
      "normalizedModelNumber": "4hp18v36p",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "ou-xaae-4hp18v36p",
      "modelNumber": "4HP18V36P",
      "brandId": "brand-xaae",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-7ah1av36px-0",
      "modelNumber": "7AH1AV36PX-0*",
      "brandId": "brand-xaae",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v36m",
      "modelNumber": "BCE5V36M",
      "brandId": "brand-xaae",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-xaae-4hp18v36p-7ah1av36px-0",
      "slug": "xaae-4hp18v36p-7ah1av36px-0",
      "modelId": "model-xaae-4hp18v36p",
      "outdoorUnitId": "ou-xaae-4hp18v36p",
      "indoorUnitId": "iu-7ah1av36px-0",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-xaae-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-xaae-4hp18v36p-bce5v36m",
      "slug": "xaae-4hp18v36p-bce5v36m",
      "modelId": "model-xaae-4hp18v36p",
      "outdoorUnitId": "ou-xaae-4hp18v36p",
      "indoorUnitId": "iu-bce5v36m",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-xaae-epa",
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
