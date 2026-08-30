import type { BrandDataset } from "../../types";

export const brand_jetsonDataset: BrandDataset = {
  "brand": {
    "id": "brand-jetson",
    "slug": "jetson",
    "name": "Jetson",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Jetson",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-jetson-epa",
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
      "id": "series-jetson-hp-series",
      "slug": "jetson-hp-series",
      "name": "HP Series",
      "brandId": "brand-jetson",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HP Series de Jetson",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-jetson-hp-30odu-001",
      "slug": "jetson-hp-30odu-001",
      "name": "Jetson HP-30ODU-001",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-30ODU-001",
      "normalizedModelNumber": "hp-30odu-001",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-jetson-hp-36odu-002",
      "slug": "jetson-hp-36odu-002",
      "name": "Jetson HP-36ODU-002",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-36ODU-002",
      "normalizedModelNumber": "hp-36odu-002",
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
    },
    {
      "id": "model-jetson-hp-18odu-001",
      "slug": "jetson-hp-18odu-001",
      "name": "Jetson HP-18ODU-001",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-18ODU-001",
      "normalizedModelNumber": "hp-18odu-001",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
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
      "id": "model-jetson-hp-24odu-001",
      "slug": "jetson-hp-24odu-001",
      "name": "Jetson HP-24ODU-001",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-24ODU-001",
      "normalizedModelNumber": "hp-24odu-001",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-jetson-hp-36odu-001",
      "slug": "jetson-hp-36odu-001",
      "name": "Jetson HP-36ODU-001",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-36ODU-001",
      "normalizedModelNumber": "hp-36odu-001",
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
    },
    {
      "id": "model-jetson-hp-48odu-001",
      "slug": "jetson-hp-48odu-001",
      "name": "Jetson HP-48ODU-001",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-48ODU-001",
      "normalizedModelNumber": "hp-48odu-001",
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
      "id": "model-jetson-hp-60odu-001",
      "slug": "jetson-hp-60odu-001",
      "name": "Jetson HP-60ODU-001",
      "seriesId": "series-jetson-hp-series",
      "brandId": "brand-jetson",
      "modelNumber": "HP-60ODU-001",
      "normalizedModelNumber": "hp-60odu-001",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 52000,
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
      "id": "ou-jetson-hp-30odu-001",
      "modelNumber": "HP-30ODU-001",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-jetson-hp-36odu-002",
      "modelNumber": "HP-36ODU-002",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-jetson-hp-18odu-001",
      "modelNumber": "HP-18ODU-001",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-jetson-hp-24odu-001",
      "modelNumber": "HP-24ODU-001",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-jetson-hp-36odu-001",
      "modelNumber": "HP-36ODU-001",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-jetson-hp-48odu-001",
      "modelNumber": "HP-48ODU-001",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-jetson-hp-60odu-001",
      "modelNumber": "HP-60ODU-001",
      "brandId": "brand-jetson",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hp-30idu-001",
      "modelNumber": "HP-30IDU-001",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-30idu-002",
      "modelNumber": "HP-30IDU-002",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-36idu-001",
      "modelNumber": "HP-36IDU-001",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-36idu-002",
      "modelNumber": "HP-36IDU-002",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-18idu-002",
      "modelNumber": "HP-18IDU-002",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-18idu-001",
      "modelNumber": "HP-18IDU-001",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-24idu-001",
      "modelNumber": "HP-24IDU-001",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-24idu-002",
      "modelNumber": "HP-24IDU-002",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-48idu-001",
      "modelNumber": "HP-48IDU-001",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-48idu-002",
      "modelNumber": "HP-48IDU-002",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-60idu-001",
      "modelNumber": "HP-60IDU-001",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    },
    {
      "id": "iu-hp-60idu-002",
      "modelNumber": "HP-60IDU-002",
      "brandId": "brand-jetson",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-jetson-hp-30odu-001-hp-30idu-001",
      "slug": "jetson-hp-30odu-001-hp-30idu-001",
      "modelId": "model-jetson-hp-30odu-001",
      "outdoorUnitId": "ou-jetson-hp-30odu-001",
      "indoorUnitId": "iu-hp-30idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-30odu-001-hp-30idu-002",
      "slug": "jetson-hp-30odu-001-hp-30idu-002",
      "modelId": "model-jetson-hp-30odu-001",
      "outdoorUnitId": "ou-jetson-hp-30odu-001",
      "indoorUnitId": "iu-hp-30idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-36odu-002-hp-36idu-001",
      "slug": "jetson-hp-36odu-002-hp-36idu-001",
      "modelId": "model-jetson-hp-36odu-002",
      "outdoorUnitId": "ou-jetson-hp-36odu-002",
      "indoorUnitId": "iu-hp-36idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-36odu-002-hp-36idu-002",
      "slug": "jetson-hp-36odu-002-hp-36idu-002",
      "modelId": "model-jetson-hp-36odu-002",
      "outdoorUnitId": "ou-jetson-hp-36odu-002",
      "indoorUnitId": "iu-hp-36idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-18odu-001-hp-18idu-002",
      "slug": "jetson-hp-18odu-001-hp-18idu-002",
      "modelId": "model-jetson-hp-18odu-001",
      "outdoorUnitId": "ou-jetson-hp-18odu-001",
      "indoorUnitId": "iu-hp-18idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.25,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-18odu-001-hp-18idu-001",
      "slug": "jetson-hp-18odu-001-hp-18idu-001",
      "modelId": "model-jetson-hp-18odu-001",
      "outdoorUnitId": "ou-jetson-hp-18odu-001",
      "indoorUnitId": "iu-hp-18idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.25,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-24odu-001-hp-24idu-001",
      "slug": "jetson-hp-24odu-001-hp-24idu-001",
      "modelId": "model-jetson-hp-24odu-001",
      "outdoorUnitId": "ou-jetson-hp-24odu-001",
      "indoorUnitId": "iu-hp-24idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-24odu-001-hp-24idu-002",
      "slug": "jetson-hp-24odu-001-hp-24idu-002",
      "modelId": "model-jetson-hp-24odu-001",
      "outdoorUnitId": "ou-jetson-hp-24odu-001",
      "indoorUnitId": "iu-hp-24idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-36odu-001-hp-36idu-002",
      "slug": "jetson-hp-36odu-001-hp-36idu-002",
      "modelId": "model-jetson-hp-36odu-001",
      "outdoorUnitId": "ou-jetson-hp-36odu-001",
      "indoorUnitId": "iu-hp-36idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-36odu-001-hp-36idu-001",
      "slug": "jetson-hp-36odu-001-hp-36idu-001",
      "modelId": "model-jetson-hp-36odu-001",
      "outdoorUnitId": "ou-jetson-hp-36odu-001",
      "indoorUnitId": "iu-hp-36idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-48odu-001-hp-48idu-001",
      "slug": "jetson-hp-48odu-001-hp-48idu-001",
      "modelId": "model-jetson-hp-48odu-001",
      "outdoorUnitId": "ou-jetson-hp-48odu-001",
      "indoorUnitId": "iu-hp-48idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-48odu-001-hp-48idu-002",
      "slug": "jetson-hp-48odu-001-hp-48idu-002",
      "modelId": "model-jetson-hp-48odu-001",
      "outdoorUnitId": "ou-jetson-hp-48odu-001",
      "indoorUnitId": "iu-hp-48idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-60odu-001-hp-60idu-001",
      "slug": "jetson-hp-60odu-001-hp-60idu-001",
      "modelId": "model-jetson-hp-60odu-001",
      "outdoorUnitId": "ou-jetson-hp-60odu-001",
      "indoorUnitId": "iu-hp-60idu-001",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-jetson-hp-60odu-001-hp-60idu-002",
      "slug": "jetson-hp-60odu-001-hp-60idu-002",
      "modelId": "model-jetson-hp-60odu-001",
      "outdoorUnitId": "ou-jetson-hp-60odu-001",
      "indoorUnitId": "iu-hp-60idu-002",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-jetson-epa",
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
