import type { BrandDataset } from "../../types";

export const brand_dettsonDataset: BrandDataset = {
  "brand": {
    "id": "brand-dettson",
    "slug": "dettson",
    "name": "DETTSON",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DETTSON",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-dettson-epa",
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
      "id": "series-dettson-evd-series",
      "slug": "dettson-evd-series",
      "name": "EVD series",
      "brandId": "brand-dettson",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EVD series de DETTSON",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-dettson-mhd-series",
      "slug": "dettson-mhd-series",
      "name": "MHD series",
      "brandId": "brand-dettson",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MHD series de DETTSON",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-dettson-evd-18-o",
      "slug": "dettson-evd-18-o",
      "name": "DETTSON EVD-18-O",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-18-O",
      "normalizedModelNumber": "evd-18-o",
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
      "id": "model-dettson-evd-24-o",
      "slug": "dettson-evd-24-o",
      "name": "DETTSON EVD-24-O",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-24-O",
      "normalizedModelNumber": "evd-24-o",
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
      "id": "model-dettson-evd-36-o-s",
      "slug": "dettson-evd-36-o-s",
      "name": "DETTSON EVD-36-O-S",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-36-O-S",
      "normalizedModelNumber": "evd-36-o-s",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-dettson-evd-30-o",
      "slug": "dettson-evd-30-o",
      "name": "DETTSON EVD-30-O",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-30-O",
      "normalizedModelNumber": "evd-30-o",
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
      "id": "model-dettson-evd-36-o",
      "slug": "dettson-evd-36-o",
      "name": "DETTSON EVD-36-O",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-36-O",
      "normalizedModelNumber": "evd-36-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
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
      "id": "model-dettson-evd-48-o",
      "slug": "dettson-evd-48-o",
      "name": "DETTSON EVD-48-O",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-48-O",
      "normalizedModelNumber": "evd-48-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "model-dettson-evd-60-o",
      "slug": "dettson-evd-60-o",
      "name": "DETTSON EVD-60-O",
      "seriesId": "series-dettson-evd-series",
      "brandId": "brand-dettson",
      "modelNumber": "EVD-60-O",
      "normalizedModelNumber": "evd-60-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-dettson-mhd-18",
      "slug": "dettson-mhd-18",
      "name": "DETTSON MHD-18",
      "seriesId": "series-dettson-mhd-series",
      "brandId": "brand-dettson",
      "modelNumber": "MHD-18",
      "normalizedModelNumber": "mhd-18",
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
      "id": "model-dettson-mhd-24",
      "slug": "dettson-mhd-24",
      "name": "DETTSON MHD-24",
      "seriesId": "series-dettson-mhd-series",
      "brandId": "brand-dettson",
      "modelNumber": "MHD-24",
      "normalizedModelNumber": "mhd-24",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-dettson-evd-18-o",
      "modelNumber": "EVD-18-O",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-evd-24-o",
      "modelNumber": "EVD-24-O",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-evd-36-o-s",
      "modelNumber": "EVD-36-O-S",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-evd-30-o",
      "modelNumber": "EVD-30-O",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-evd-36-o",
      "modelNumber": "EVD-36-O",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-evd-48-o",
      "modelNumber": "EVD-48-O",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-evd-60-o",
      "modelNumber": "EVD-60-O",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-mhd-18",
      "modelNumber": "MHD-18",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-dettson-mhd-24",
      "modelNumber": "MHD-24",
      "brandId": "brand-dettson",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-evd-18-i",
      "modelNumber": "EVD-18-I",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd-24-i",
      "modelNumber": "EVD-24-I",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac24h1718e",
      "modelNumber": "MAC24H1718E",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd-36-i",
      "modelNumber": "EVD-36-I",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac24h1418e",
      "modelNumber": "MAC24H1418E",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd-30-i",
      "modelNumber": "EVD-30-I",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd-48-i",
      "modelNumber": "EVD-48-I",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac36h2124e",
      "modelNumber": "MAC36H2124E",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-mac36h1724e",
      "modelNumber": "MAC36H1724E",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-evd-60-i",
      "modelNumber": "EVD-60-I",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    },
    {
      "id": "iu-mhd-cc20-175-m",
      "modelNumber": "MHD-CC2.0-17.5-M",
      "brandId": "brand-dettson",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-dettson-evd-18-o-evd-18-i",
      "slug": "dettson-evd-18-o-evd-18-i",
      "modelId": "model-dettson-evd-18-o",
      "outdoorUnitId": "ou-dettson-evd-18-o",
      "indoorUnitId": "iu-evd-18-i",
      "minHeatingTempC": -25,
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
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-24-o-evd-24-i",
      "slug": "dettson-evd-24-o-evd-24-i",
      "modelId": "model-dettson-evd-24-o",
      "outdoorUnitId": "ou-dettson-evd-24-o",
      "indoorUnitId": "iu-evd-24-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-24-o-mac24h1718e",
      "slug": "dettson-evd-24-o-mac24h1718e",
      "modelId": "model-dettson-evd-24-o",
      "outdoorUnitId": "ou-dettson-evd-24-o",
      "indoorUnitId": "iu-mac24h1718e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-36-o-s-evd-36-i",
      "slug": "dettson-evd-36-o-s-evd-36-i",
      "modelId": "model-dettson-evd-36-o-s",
      "outdoorUnitId": "ou-dettson-evd-36-o-s",
      "indoorUnitId": "iu-evd-36-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-24-o-mac24h1418e",
      "slug": "dettson-evd-24-o-mac24h1418e",
      "modelId": "model-dettson-evd-24-o",
      "outdoorUnitId": "ou-dettson-evd-24-o",
      "indoorUnitId": "iu-mac24h1418e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-30-o-evd-30-i",
      "slug": "dettson-evd-30-o-evd-30-i",
      "modelId": "model-dettson-evd-30-o",
      "outdoorUnitId": "ou-dettson-evd-30-o",
      "indoorUnitId": "iu-evd-30-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-18-o-mac24h1718e",
      "slug": "dettson-evd-18-o-mac24h1718e",
      "modelId": "model-dettson-evd-18-o",
      "outdoorUnitId": "ou-dettson-evd-18-o",
      "indoorUnitId": "iu-mac24h1718e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-24-o-mac24h1418e",
      "slug": "dettson-evd-24-o-mac24h1418e",
      "modelId": "model-dettson-evd-24-o",
      "outdoorUnitId": "ou-dettson-evd-24-o",
      "indoorUnitId": "iu-mac24h1418e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-36-o-evd-36-i",
      "slug": "dettson-evd-36-o-evd-36-i",
      "modelId": "model-dettson-evd-36-o",
      "outdoorUnitId": "ou-dettson-evd-36-o",
      "indoorUnitId": "iu-evd-36-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-48-o-evd-48-i",
      "slug": "dettson-evd-48-o-evd-48-i",
      "modelId": "model-dettson-evd-48-o",
      "outdoorUnitId": "ou-dettson-evd-48-o",
      "indoorUnitId": "iu-evd-48-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-30-o-mac36h2124e",
      "slug": "dettson-evd-30-o-mac36h2124e",
      "modelId": "model-dettson-evd-30-o",
      "outdoorUnitId": "ou-dettson-evd-30-o",
      "indoorUnitId": "iu-mac36h2124e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-36-o-mac36h1724e",
      "slug": "dettson-evd-36-o-mac36h1724e",
      "modelId": "model-dettson-evd-36-o",
      "outdoorUnitId": "ou-dettson-evd-36-o",
      "indoorUnitId": "iu-mac36h1724e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-60-o-evd-60-i",
      "slug": "dettson-evd-60-o-evd-60-i",
      "modelId": "model-dettson-evd-60-o",
      "outdoorUnitId": "ou-dettson-evd-60-o",
      "indoorUnitId": "iu-evd-60-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-30-o-mac36h1724e",
      "slug": "dettson-evd-30-o-mac36h1724e",
      "modelId": "model-dettson-evd-30-o",
      "outdoorUnitId": "ou-dettson-evd-30-o",
      "indoorUnitId": "iu-mac36h1724e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-36-o-mac36h2124e",
      "slug": "dettson-evd-36-o-mac36h2124e",
      "modelId": "model-dettson-evd-36-o",
      "outdoorUnitId": "ou-dettson-evd-36-o",
      "indoorUnitId": "iu-mac36h2124e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-36-o-s-mac36h2124e",
      "slug": "dettson-evd-36-o-s-mac36h2124e",
      "modelId": "model-dettson-evd-36-o-s",
      "outdoorUnitId": "ou-dettson-evd-36-o-s",
      "indoorUnitId": "iu-mac36h2124e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-evd-36-o-s-mac36h1724e",
      "slug": "dettson-evd-36-o-s-mac36h1724e",
      "modelId": "model-dettson-evd-36-o-s",
      "outdoorUnitId": "ou-dettson-evd-36-o-s",
      "indoorUnitId": "iu-mac36h1724e",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-mhd-18-mhd-cc20-175-m",
      "slug": "dettson-mhd-18-mhd-cc20-175-m",
      "modelId": "model-dettson-mhd-18",
      "outdoorUnitId": "ou-dettson-mhd-18",
      "indoorUnitId": "iu-mhd-cc20-175-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-dettson-mhd-24-mhd-cc20-175-m",
      "slug": "dettson-mhd-24-mhd-cc20-175-m",
      "modelId": "model-dettson-mhd-24",
      "outdoorUnitId": "ou-dettson-mhd-24",
      "indoorUnitId": "iu-mhd-cc20-175-m",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-dettson-epa",
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
