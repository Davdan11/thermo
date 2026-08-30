import type { BrandDataset } from "../../types";

export const brand_atomi_smartDataset: BrandDataset = {
  "brand": {
    "id": "brand-atomi-smart",
    "slug": "atomi-smart",
    "name": "Atomi Smart",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Atomi Smart",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-atomi-smart-epa",
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
      "id": "series-atomi-smart-at2239",
      "slug": "atomi-smart-at2239",
      "name": "AT2239",
      "brandId": "brand-atomi-smart",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AT2239 de Atomi Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-atomi-smart-at2239-ca",
      "slug": "atomi-smart-at2239-ca",
      "name": "AT2239 CA",
      "brandId": "brand-atomi-smart",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AT2239 CA de Atomi Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-atomi-smart-at2240",
      "slug": "atomi-smart-at2240",
      "name": "AT2240",
      "brandId": "brand-atomi-smart",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AT2240 de Atomi Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-atomi-smart-at2240-ca",
      "slug": "atomi-smart-at2240-ca",
      "name": "AT2240 CA",
      "brandId": "brand-atomi-smart",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série AT2240 CA de Atomi Smart",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-atomi-smart-at2239",
      "slug": "atomi-smart-at2239",
      "name": "Atomi Smart AT2239",
      "seriesId": "series-atomi-smart-at2239",
      "brandId": "brand-atomi-smart",
      "modelNumber": "AT2239",
      "normalizedModelNumber": "at2239",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
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
      "id": "model-atomi-smart-at2239-ca",
      "slug": "atomi-smart-at2239-ca",
      "name": "Atomi Smart AT2239 CA",
      "seriesId": "series-atomi-smart-at2239-ca",
      "brandId": "brand-atomi-smart",
      "modelNumber": "AT2239 CA",
      "normalizedModelNumber": "at2239 ca",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
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
      "id": "model-atomi-smart-at2240",
      "slug": "atomi-smart-at2240",
      "name": "Atomi Smart AT2240",
      "seriesId": "series-atomi-smart-at2240",
      "brandId": "brand-atomi-smart",
      "modelNumber": "AT2240",
      "normalizedModelNumber": "at2240",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18100,
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
      "id": "model-atomi-smart-at2240-ca",
      "slug": "atomi-smart-at2240-ca",
      "name": "Atomi Smart AT2240 CA",
      "seriesId": "series-atomi-smart-at2240-ca",
      "brandId": "brand-atomi-smart",
      "modelNumber": "AT2240 CA",
      "normalizedModelNumber": "at2240 ca",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18100,
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
      "id": "ou-atomi-smart-at2239",
      "modelNumber": "AT2239",
      "brandId": "brand-atomi-smart",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-atomi-smart-at2239-ca",
      "modelNumber": "AT2239 CA",
      "brandId": "brand-atomi-smart",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-atomi-smart-at2240",
      "modelNumber": "AT2240",
      "brandId": "brand-atomi-smart",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-atomi-smart-at2240-ca",
      "modelNumber": "AT2240 CA",
      "brandId": "brand-atomi-smart",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-6509",
      "modelNumber": "IU-6509",
      "brandId": "brand-atomi-smart",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-6510",
      "modelNumber": "IU-6510",
      "brandId": "brand-atomi-smart",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-6511",
      "modelNumber": "IU-6511",
      "brandId": "brand-atomi-smart",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-6512",
      "modelNumber": "IU-6512",
      "brandId": "brand-atomi-smart",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-atomi-smart-at2239-iu-6509",
      "slug": "atomi-smart-at2239-iu-6509",
      "modelId": "model-atomi-smart-at2239",
      "outdoorUnitId": "ou-atomi-smart-at2239",
      "indoorUnitId": "iu-iu-6509",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 8.25,
      "sources": [
        {
          "sourceId": "src-atomi-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-atomi-smart-at2239-ca-iu-6510",
      "slug": "atomi-smart-at2239-ca-iu-6510",
      "modelId": "model-atomi-smart-at2239-ca",
      "outdoorUnitId": "ou-atomi-smart-at2239-ca",
      "indoorUnitId": "iu-iu-6510",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 8.25,
      "sources": [
        {
          "sourceId": "src-atomi-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-atomi-smart-at2240-iu-6511",
      "slug": "atomi-smart-at2240-iu-6511",
      "modelId": "model-atomi-smart-at2240",
      "outdoorUnitId": "ou-atomi-smart-at2240",
      "indoorUnitId": "iu-iu-6511",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-atomi-smart-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-atomi-smart-at2240-ca-iu-6512",
      "slug": "atomi-smart-at2240-ca-iu-6512",
      "modelId": "model-atomi-smart-at2240-ca",
      "outdoorUnitId": "ou-atomi-smart-at2240-ca",
      "indoorUnitId": "iu-iu-6512",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-atomi-smart-epa",
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
