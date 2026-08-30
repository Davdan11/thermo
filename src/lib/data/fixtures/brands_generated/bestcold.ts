import type { BrandDataset } from "../../types";

export const brand_bestcoldDataset: BrandDataset = {
  "brand": {
    "id": "brand-bestcold",
    "slug": "bestcold",
    "name": "Bestcold",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Bestcold",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-bestcold-epa",
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
      "id": "series-bestcold-gable-series",
      "slug": "bestcold-gable-series",
      "name": "Gable Series",
      "brandId": "brand-bestcold",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Gable Series de Bestcold",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-bestcold-myoru24na22bch19es",
      "slug": "bestcold-myoru24na22bch19es",
      "name": "Bestcold MYORU24NA22BCH19ES",
      "seriesId": "series-bestcold-gable-series",
      "brandId": "brand-bestcold",
      "modelNumber": "MYORU24NA22BCH19ES",
      "normalizedModelNumber": "myoru24na22bch19es",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
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
    },
    {
      "id": "model-bestcold-myoru36na22bch18es",
      "slug": "bestcold-myoru36na22bch18es",
      "name": "Bestcold MYORU36NA22BCH18ES",
      "seriesId": "series-bestcold-gable-series",
      "brandId": "brand-bestcold",
      "modelNumber": "MYORU36NA22BCH18ES",
      "normalizedModelNumber": "myoru36na22bch18es",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
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
    },
    {
      "id": "model-bestcold-myoru48na22bch18es",
      "slug": "bestcold-myoru48na22bch18es",
      "name": "Bestcold MYORU48NA22BCH18ES",
      "seriesId": "series-bestcold-gable-series",
      "brandId": "brand-bestcold",
      "modelNumber": "MYORU48NA22BCH18ES",
      "normalizedModelNumber": "myoru48na22bch18es",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
    },
    {
      "id": "model-bestcold-myoru60na22bch17es",
      "slug": "bestcold-myoru60na22bch17es",
      "name": "Bestcold MYORU60NA22BCH17ES",
      "seriesId": "series-bestcold-gable-series",
      "brandId": "brand-bestcold",
      "modelNumber": "MYORU60NA22BCH17ES",
      "normalizedModelNumber": "myoru60na22bch17es",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56000,
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
      "id": "ou-bestcold-myoru24na22bch19es",
      "modelNumber": "MYORU24NA22BCH19ES",
      "brandId": "brand-bestcold",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-bestcold-myoru36na22bch18es",
      "modelNumber": "MYORU36NA22BCH18ES",
      "brandId": "brand-bestcold",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-bestcold-myoru48na22bch18es",
      "modelNumber": "MYORU48NA22BCH18ES",
      "brandId": "brand-bestcold",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-bestcold-myoru60na22bch17es",
      "modelNumber": "MYORU60NA22BCH17ES",
      "brandId": "brand-bestcold",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-8208",
      "modelNumber": "IU-8208",
      "brandId": "brand-bestcold",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-8209",
      "modelNumber": "IU-8209",
      "brandId": "brand-bestcold",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-8210",
      "modelNumber": "IU-8210",
      "brandId": "brand-bestcold",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-8211",
      "modelNumber": "IU-8211",
      "brandId": "brand-bestcold",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-bestcold-myoru24na22bch19es-iu-8208",
      "slug": "bestcold-myoru24na22bch19es-iu-8208",
      "modelId": "model-bestcold-myoru24na22bch19es",
      "outdoorUnitId": "ou-bestcold-myoru24na22bch19es",
      "indoorUnitId": "iu-iu-8208",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-bestcold-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-bestcold-myoru36na22bch18es-iu-8209",
      "slug": "bestcold-myoru36na22bch18es-iu-8209",
      "modelId": "model-bestcold-myoru36na22bch18es",
      "outdoorUnitId": "ou-bestcold-myoru36na22bch18es",
      "indoorUnitId": "iu-iu-8209",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-bestcold-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-bestcold-myoru48na22bch18es-iu-8210",
      "slug": "bestcold-myoru48na22bch18es-iu-8210",
      "modelId": "model-bestcold-myoru48na22bch18es",
      "outdoorUnitId": "ou-bestcold-myoru48na22bch18es",
      "indoorUnitId": "iu-iu-8210",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-bestcold-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-bestcold-myoru60na22bch17es-iu-8211",
      "slug": "bestcold-myoru60na22bch17es-iu-8211",
      "modelId": "model-bestcold-myoru60na22bch17es",
      "outdoorUnitId": "ou-bestcold-myoru60na22bch17es",
      "indoorUnitId": "iu-iu-8211",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-bestcold-epa",
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
