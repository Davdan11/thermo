import type { BrandDataset } from "../../types";

export const brand_navien_incDataset: BrandDataset = {
  "brand": {
    "id": "brand-navien-inc",
    "slug": "navien-inc",
    "name": "Navien, Inc.",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Navien, Inc.",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-navien-inc-epa",
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
      "id": "series-navien-inc-naz17v",
      "slug": "navien-inc-naz17v",
      "name": "NAZ17V",
      "brandId": "brand-navien-inc",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série NAZ17V de Navien, Inc.",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-navien-inc-naz17v3622a1",
      "slug": "navien-inc-naz17v3622a1",
      "name": "Navien, Inc. NAZ17V3622A1",
      "seriesId": "series-navien-inc-naz17v",
      "brandId": "brand-navien-inc",
      "modelNumber": "NAZ17V3622A1",
      "normalizedModelNumber": "naz17v3622a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34400,
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
      "id": "model-navien-inc-naz17v6022a1",
      "slug": "navien-inc-naz17v6022a1",
      "name": "Navien, Inc. NAZ17V6022A1",
      "seriesId": "series-navien-inc-naz17v",
      "brandId": "brand-navien-inc",
      "modelNumber": "NAZ17V6022A1",
      "normalizedModelNumber": "naz17v6022a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46500,
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
      "id": "ou-navien-inc-naz17v3622a1",
      "modelNumber": "NAZ17V3622A1",
      "brandId": "brand-navien-inc",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-navien-inc-naz17v6022a1",
      "modelNumber": "NAZ17V6022A1",
      "brandId": "brand-navien-inc",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-nasv36c2t2a1",
      "modelNumber": "NASV36C2T2A1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    },
    {
      "id": "iu-nasv24b2t2a1",
      "modelNumber": "NASV24B2T2A1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    },
    {
      "id": "iu-nasv48d2t2a1",
      "modelNumber": "NASV48D2T2A1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    },
    {
      "id": "iu-nass48d2t2a1",
      "modelNumber": "NASS48D2T2A1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    },
    {
      "id": "iu-nass24b2t2a1",
      "modelNumber": "NASS24B2T2A1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    },
    {
      "id": "iu-nam24b2ta1",
      "modelNumber": "NAM24B2TA1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    },
    {
      "id": "iu-nass36c2t2a1",
      "modelNumber": "NASS36C2T2A1",
      "brandId": "brand-navien-inc",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-navien-inc-naz17v3622a1-nasv36c2t2a1",
      "slug": "navien-inc-naz17v3622a1-nasv36c2t2a1",
      "modelId": "model-navien-inc-naz17v3622a1",
      "outdoorUnitId": "ou-navien-inc-naz17v3622a1",
      "indoorUnitId": "iu-nasv36c2t2a1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.75,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-navien-inc-naz17v3622a1-nasv24b2t2a1",
      "slug": "navien-inc-naz17v3622a1-nasv24b2t2a1",
      "modelId": "model-navien-inc-naz17v3622a1",
      "outdoorUnitId": "ou-navien-inc-naz17v3622a1",
      "indoorUnitId": "iu-nasv24b2t2a1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.75,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-navien-inc-naz17v6022a1-nasv48d2t2a1",
      "slug": "navien-inc-naz17v6022a1-nasv48d2t2a1",
      "modelId": "model-navien-inc-naz17v6022a1",
      "outdoorUnitId": "ou-navien-inc-naz17v6022a1",
      "indoorUnitId": "iu-nasv48d2t2a1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-navien-inc-naz17v6022a1-nass48d2t2a1",
      "slug": "navien-inc-naz17v6022a1-nass48d2t2a1",
      "modelId": "model-navien-inc-naz17v6022a1",
      "outdoorUnitId": "ou-navien-inc-naz17v6022a1",
      "indoorUnitId": "iu-nass48d2t2a1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.3,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-navien-inc-naz17v3622a1-nass24b2t2a1",
      "slug": "navien-inc-naz17v3622a1-nass24b2t2a1",
      "modelId": "model-navien-inc-naz17v3622a1",
      "outdoorUnitId": "ou-navien-inc-naz17v3622a1",
      "indoorUnitId": "iu-nass24b2t2a1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.75,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-navien-inc-naz17v3622a1-nam24b2ta1",
      "slug": "navien-inc-naz17v3622a1-nam24b2ta1",
      "modelId": "model-navien-inc-naz17v3622a1",
      "outdoorUnitId": "ou-navien-inc-naz17v3622a1",
      "indoorUnitId": "iu-nam24b2ta1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.75,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-navien-inc-naz17v3622a1-nass36c2t2a1",
      "slug": "navien-inc-naz17v3622a1-nass36c2t2a1",
      "modelId": "model-navien-inc-naz17v3622a1",
      "outdoorUnitId": "ou-navien-inc-naz17v3622a1",
      "indoorUnitId": "iu-nass36c2t2a1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-navien-inc-epa",
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
