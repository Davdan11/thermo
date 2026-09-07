import type { BrandDataset } from "../../types";

export const brand_comfiaireDataset: BrandDataset = {
  "brand": {
    "id": "brand-comfiaire",
    "slug": "comfiaire",
    "name": "ComfiAire",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ComfiAire",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-comfiaire-epa",
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
      "id": "series-comfiaire-seer-23-30c",
      "slug": "comfiaire-seer-23-30c",
      "name": "SEER 23 -30°C",
      "brandId": "brand-comfiaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SEER 23 -30°C de ComfiAire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-comfiaire-multi-zone",
      "slug": "comfiaire-multi-zone",
      "name": "Multi Zone",
      "brandId": "brand-comfiaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi Zone de ComfiAire",
      "imageUrl": "/images/series/comfiaire-comfiaire-multi-zone.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-comfiaire-hi-ultra-hd",
      "slug": "comfiaire-hi-ultra-hd",
      "name": "HI-ULTRA HD",
      "brandId": "brand-comfiaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HI-ULTRA HD de ComfiAire",
      "imageUrl": "/images/series/comfiaire-comfiaire-hi-ultra-hd.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-comfiaire-ca-09uxeo",
      "slug": "comfiaire-ca-09uxeo",
      "name": "ComfiAire CA-09UXEO",
      "seriesId": "series-comfiaire-seer-23-30c",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-09UXEO",
      "normalizedModelNumber": "ca-09uxeo",
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
      "id": "model-comfiaire-ca-12uxeo",
      "slug": "comfiaire-ca-12uxeo",
      "name": "ComfiAire CA-12UXEO",
      "seriesId": "series-comfiaire-seer-23-30c",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-12UXEO",
      "normalizedModelNumber": "ca-12uxeo",
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
      "id": "model-comfiaire-ca3-24umto",
      "slug": "comfiaire-ca3-24umto",
      "name": "ComfiAire CA3-24UMTO",
      "seriesId": "series-comfiaire-multi-zone",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA3-24UMTO",
      "normalizedModelNumber": "ca3-24umto",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
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
      "id": "model-comfiaire-ca4-36umto",
      "slug": "comfiaire-ca4-36umto",
      "name": "ComfiAire CA4-36UMTO",
      "seriesId": "series-comfiaire-multi-zone",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA4-36UMTO",
      "normalizedModelNumber": "ca4-36umto",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-comfiaire-ca2-18umto",
      "slug": "comfiaire-ca2-18umto",
      "name": "ComfiAire CA2-18UMTO",
      "seriesId": "series-comfiaire-multi-zone",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA2-18UMTO",
      "normalizedModelNumber": "ca2-18umto",
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
      "id": "model-comfiaire-ca-24uxeo",
      "slug": "comfiaire-ca-24uxeo",
      "name": "ComfiAire CA-24UXEO",
      "seriesId": "series-comfiaire-seer-23-30c",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-24UXEO",
      "normalizedModelNumber": "ca-24uxeo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
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
      "id": "model-comfiaire-ca-18uxeo",
      "slug": "comfiaire-ca-18uxeo",
      "name": "ComfiAire CA-18UXEO",
      "seriesId": "series-comfiaire-seer-23-30c",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-18UXEO",
      "normalizedModelNumber": "ca-18uxeo",
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
      "id": "model-comfiaire-ca5-42umto",
      "slug": "comfiaire-ca5-42umto",
      "name": "ComfiAire CA5-42UMTO",
      "seriesId": "series-comfiaire-multi-zone",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA5-42UMTO",
      "normalizedModelNumber": "ca5-42umto",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
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
      "id": "model-comfiaire-ca-36uhdo",
      "slug": "comfiaire-ca-36uhdo",
      "name": "ComfiAire CA-36UHDO",
      "seriesId": "series-comfiaire-hi-ultra-hd",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-36UHDO",
      "normalizedModelNumber": "ca-36uhdo",
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
      "id": "model-comfiaire-ca-48uhdo",
      "slug": "comfiaire-ca-48uhdo",
      "name": "ComfiAire CA-48UHDO",
      "seriesId": "series-comfiaire-hi-ultra-hd",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-48UHDO",
      "normalizedModelNumber": "ca-48uhdo",
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
      "id": "model-comfiaire-ca-24uhdo",
      "slug": "comfiaire-ca-24uhdo",
      "name": "ComfiAire CA-24UHDO",
      "seriesId": "series-comfiaire-hi-ultra-hd",
      "brandId": "brand-comfiaire",
      "modelNumber": "CA-24UHDO",
      "normalizedModelNumber": "ca-24uhdo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "ou-comfiaire-ca-09uxeo",
      "modelNumber": "CA-09UXEO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca-12uxeo",
      "modelNumber": "CA-12UXEO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca3-24umto",
      "modelNumber": "CA3-24UMTO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca4-36umto",
      "modelNumber": "CA4-36UMTO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca2-18umto",
      "modelNumber": "CA2-18UMTO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca-24uxeo",
      "modelNumber": "CA-24UXEO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca-18uxeo",
      "modelNumber": "CA-18UXEO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca5-42umto",
      "modelNumber": "CA5-42UMTO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca-36uhdo",
      "modelNumber": "CA-36UHDO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca-48uhdo",
      "modelNumber": "CA-48UHDO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comfiaire-ca-24uhdo",
      "modelNumber": "CA-24UHDO",
      "brandId": "brand-comfiaire",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ca-09uwxi",
      "modelNumber": "CA-09UWXI",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-ca-12uwxi",
      "modelNumber": "CA-12UWXI",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42626",
      "modelNumber": "IU-42626",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42627",
      "modelNumber": "IU-42627",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42625",
      "modelNumber": "IU-42625",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-ca-24uwxi",
      "modelNumber": "CA-24UWXI",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-ca-18uwxi",
      "modelNumber": "CA-18UWXI",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42628",
      "modelNumber": "IU-42628",
      "brandId": "brand-comfiaire",
      "type": "wall-single"
    },
    {
      "id": "iu-ca-36uhdi",
      "modelNumber": "CA-36UHDI",
      "brandId": "brand-comfiaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-ca-48uhdi",
      "modelNumber": "CA-48UHDI",
      "brandId": "brand-comfiaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-ca-24uhdi",
      "modelNumber": "CA-24UHDI",
      "brandId": "brand-comfiaire",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-comfiaire-ca-09uxeo-ca-09uwxi",
      "slug": "comfiaire-ca-09uxeo-ca-09uwxi",
      "modelId": "model-comfiaire-ca-09uxeo",
      "outdoorUnitId": "ou-comfiaire-ca-09uxeo",
      "indoorUnitId": "iu-ca-09uwxi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca-12uxeo-ca-12uwxi",
      "slug": "comfiaire-ca-12uxeo-ca-12uwxi",
      "modelId": "model-comfiaire-ca-12uxeo",
      "outdoorUnitId": "ou-comfiaire-ca-12uxeo",
      "indoorUnitId": "iu-ca-12uwxi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca3-24umto-iu-42626",
      "slug": "comfiaire-ca3-24umto-iu-42626",
      "modelId": "model-comfiaire-ca3-24umto",
      "outdoorUnitId": "ou-comfiaire-ca3-24umto",
      "indoorUnitId": "iu-iu-42626",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.05,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca4-36umto-iu-42627",
      "slug": "comfiaire-ca4-36umto-iu-42627",
      "modelId": "model-comfiaire-ca4-36umto",
      "outdoorUnitId": "ou-comfiaire-ca4-36umto",
      "indoorUnitId": "iu-iu-42627",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca2-18umto-iu-42625",
      "slug": "comfiaire-ca2-18umto-iu-42625",
      "modelId": "model-comfiaire-ca2-18umto",
      "outdoorUnitId": "ou-comfiaire-ca2-18umto",
      "indoorUnitId": "iu-iu-42625",
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
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca-24uxeo-ca-24uwxi",
      "slug": "comfiaire-ca-24uxeo-ca-24uwxi",
      "modelId": "model-comfiaire-ca-24uxeo",
      "outdoorUnitId": "ou-comfiaire-ca-24uxeo",
      "indoorUnitId": "iu-ca-24uwxi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca-18uxeo-ca-18uwxi",
      "slug": "comfiaire-ca-18uxeo-ca-18uwxi",
      "modelId": "model-comfiaire-ca-18uxeo",
      "outdoorUnitId": "ou-comfiaire-ca-18uxeo",
      "indoorUnitId": "iu-ca-18uwxi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca5-42umto-iu-42628",
      "slug": "comfiaire-ca5-42umto-iu-42628",
      "modelId": "model-comfiaire-ca5-42umto",
      "outdoorUnitId": "ou-comfiaire-ca5-42umto",
      "indoorUnitId": "iu-iu-42628",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.95,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca-36uhdo-ca-36uhdi",
      "slug": "comfiaire-ca-36uhdo-ca-36uhdi",
      "modelId": "model-comfiaire-ca-36uhdo",
      "outdoorUnitId": "ou-comfiaire-ca-36uhdo",
      "indoorUnitId": "iu-ca-36uhdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca-48uhdo-ca-48uhdi",
      "slug": "comfiaire-ca-48uhdo-ca-48uhdi",
      "modelId": "model-comfiaire-ca-48uhdo",
      "outdoorUnitId": "ou-comfiaire-ca-48uhdo",
      "indoorUnitId": "iu-ca-48uhdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comfiaire-ca-24uhdo-ca-24uhdi",
      "slug": "comfiaire-ca-24uhdo-ca-24uhdi",
      "modelId": "model-comfiaire-ca-24uhdo",
      "outdoorUnitId": "ou-comfiaire-ca-24uhdo",
      "indoorUnitId": "iu-ca-24uhdi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-comfiaire-epa",
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
