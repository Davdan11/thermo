import type { BrandDataset } from "../../types";

export const brand_whirlpoolDataset: BrandDataset = {
  "brand": {
    "id": "brand-whirlpool",
    "slug": "whirlpool",
    "name": "Whirlpool",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Whirlpool",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-whirlpool-epa",
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
      "id": "series-whirlpool-whirlpool",
      "slug": "whirlpool-whirlpool",
      "name": "WHIRLPOOL",
      "brandId": "brand-whirlpool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série WHIRLPOOL de Whirlpool",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-whirlpool-classic",
      "slug": "whirlpool-classic",
      "name": "CLASSIC",
      "brandId": "brand-whirlpool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CLASSIC de Whirlpool",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-whirlpool-classic-plus",
      "slug": "whirlpool-classic-plus",
      "name": "CLASSIC PLUS",
      "brandId": "brand-whirlpool",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CLASSIC PLUS de Whirlpool",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-whirlpool-wlp15ay36aj2n",
      "slug": "whirlpool-wlp15ay36aj2n",
      "name": "Whirlpool WLP15AY36AJ2N",
      "seriesId": "series-whirlpool-whirlpool",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY36AJ2N",
      "normalizedModelNumber": "wlp15ay36aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-whirlpool-wlp14ay60aj2n",
      "slug": "whirlpool-wlp14ay60aj2n",
      "name": "Whirlpool WLP14AY60AJ2N",
      "seriesId": "series-whirlpool-whirlpool",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP14AY60AJ2N",
      "normalizedModelNumber": "wlp14ay60aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "model-whirlpool-wlp15ay18aj2n",
      "slug": "whirlpool-wlp15ay18aj2n",
      "name": "Whirlpool WLP15AY18AJ2N",
      "seriesId": "series-whirlpool-classic",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY18AJ2N",
      "normalizedModelNumber": "wlp15ay18aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17100,
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
      "id": "model-whirlpool-wlp15ay24aj2n",
      "slug": "whirlpool-wlp15ay24aj2n",
      "name": "Whirlpool WLP15AY24AJ2N",
      "seriesId": "series-whirlpool-classic",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY24AJ2N",
      "normalizedModelNumber": "wlp15ay24aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22800,
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
      "id": "model-whirlpool-wlp14ay48aj2n",
      "slug": "whirlpool-wlp14ay48aj2n",
      "name": "Whirlpool WLP14AY48AJ2N",
      "seriesId": "series-whirlpool-whirlpool",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP14AY48AJ2N",
      "normalizedModelNumber": "wlp14ay48aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "model-whirlpool-wlp15ay30aj2n",
      "slug": "whirlpool-wlp15ay30aj2n",
      "name": "Whirlpool WLP15AY30AJ2N",
      "seriesId": "series-whirlpool-classic",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY30AJ2N",
      "normalizedModelNumber": "wlp15ay30aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-whirlpool-wlp15ay42aj2n",
      "slug": "whirlpool-wlp15ay42aj2n",
      "name": "Whirlpool WLP15AY42AJ2N",
      "seriesId": "series-whirlpool-classic",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY42AJ2N",
      "normalizedModelNumber": "wlp15ay42aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 40000,
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
      "id": "model-whirlpool-wlp15ay48aj2n",
      "slug": "whirlpool-wlp15ay48aj2n",
      "name": "Whirlpool WLP15AY48AJ2N",
      "seriesId": "series-whirlpool-classic",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY48AJ2N",
      "normalizedModelNumber": "wlp15ay48aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "model-whirlpool-wlp15ay60aj2n",
      "slug": "whirlpool-wlp15ay60aj2n",
      "name": "Whirlpool WLP15AY60AJ2N",
      "seriesId": "series-whirlpool-classic",
      "brandId": "brand-whirlpool",
      "modelNumber": "WLP15AY60AJ2N",
      "normalizedModelNumber": "wlp15ay60aj2n",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "model-whirlpool-rhpbyc036ajt",
      "slug": "whirlpool-rhpbyc036ajt",
      "name": "Whirlpool RHPBYC036AJT",
      "seriesId": "series-whirlpool-classic-plus",
      "brandId": "brand-whirlpool",
      "modelNumber": "RHPBYC036AJT",
      "normalizedModelNumber": "rhpbyc036ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-whirlpool-rhpbyc048ajt",
      "slug": "whirlpool-rhpbyc048ajt",
      "name": "Whirlpool RHPBYC048AJT",
      "seriesId": "series-whirlpool-classic-plus",
      "brandId": "brand-whirlpool",
      "modelNumber": "RHPBYC048AJT",
      "normalizedModelNumber": "rhpbyc048ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "model-whirlpool-rhpbyc060ajt",
      "slug": "whirlpool-rhpbyc060ajt",
      "name": "Whirlpool RHPBYC060AJT",
      "seriesId": "series-whirlpool-classic-plus",
      "brandId": "brand-whirlpool",
      "modelNumber": "RHPBYC060AJT",
      "normalizedModelNumber": "rhpbyc060ajt",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56500,
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
      "id": "ou-whirlpool-wlp15ay36aj2n",
      "modelNumber": "WLP15AY36AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp14ay60aj2n",
      "modelNumber": "WLP14AY60AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp15ay18aj2n",
      "modelNumber": "WLP15AY18AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp15ay24aj2n",
      "modelNumber": "WLP15AY24AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp14ay48aj2n",
      "modelNumber": "WLP14AY48AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp15ay30aj2n",
      "modelNumber": "WLP15AY30AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp15ay42aj2n",
      "modelNumber": "WLP15AY42AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp15ay48aj2n",
      "modelNumber": "WLP15AY48AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-wlp15ay60aj2n",
      "modelNumber": "WLP15AY60AJ2N",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-rhpbyc036ajt",
      "modelNumber": "RHPBYC036AJT",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-rhpbyc048ajt",
      "modelNumber": "RHPBYC048AJT",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-whirlpool-rhpbyc060ajt",
      "modelNumber": "RHPBYC060AJT",
      "brandId": "brand-whirlpool",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-wlb2ty3621stanm",
      "modelNumber": "WLB2TY3621STANM",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-wlh2ty3621stann",
      "modelNumber": "WLH2TY3621STANN",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-wlh2ty6024stann",
      "modelNumber": "WLH2TY6024STANN",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-wlh2ty2417stann",
      "modelNumber": "WLH2TY2417STANN",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-wlh2ty4824stann",
      "modelNumber": "WLH2TY4824STANN",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-wlh2ty3617stann",
      "modelNumber": "WLH2TY3617STANN",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-wlh2ty4821stann",
      "modelNumber": "WLH2TY4821STANN",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38095",
      "modelNumber": "IU-38095",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38096",
      "modelNumber": "IU-38096",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38097",
      "modelNumber": "IU-38097",
      "brandId": "brand-whirlpool",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-whirlpool-wlp15ay36aj2n-wlb2ty3621stanm",
      "slug": "whirlpool-wlp15ay36aj2n-wlb2ty3621stanm",
      "modelId": "model-whirlpool-wlp15ay36aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay36aj2n",
      "indoorUnitId": "iu-wlb2ty3621stanm",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay36aj2n-wlh2ty3621stann",
      "slug": "whirlpool-wlp15ay36aj2n-wlh2ty3621stann",
      "modelId": "model-whirlpool-wlp15ay36aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay36aj2n",
      "indoorUnitId": "iu-wlh2ty3621stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp14ay60aj2n-wlh2ty6024stann",
      "slug": "whirlpool-wlp14ay60aj2n-wlh2ty6024stann",
      "modelId": "model-whirlpool-wlp14ay60aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp14ay60aj2n",
      "indoorUnitId": "iu-wlh2ty6024stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay18aj2n-wlh2ty2417stann",
      "slug": "whirlpool-wlp15ay18aj2n-wlh2ty2417stann",
      "modelId": "model-whirlpool-wlp15ay18aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay18aj2n",
      "indoorUnitId": "iu-wlh2ty2417stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay24aj2n-wlh2ty2417stann",
      "slug": "whirlpool-wlp15ay24aj2n-wlh2ty2417stann",
      "modelId": "model-whirlpool-wlp15ay24aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay24aj2n",
      "indoorUnitId": "iu-wlh2ty2417stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp14ay48aj2n-wlh2ty4824stann",
      "slug": "whirlpool-wlp14ay48aj2n-wlh2ty4824stann",
      "modelId": "model-whirlpool-wlp14ay48aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp14ay48aj2n",
      "indoorUnitId": "iu-wlh2ty4824stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay30aj2n-wlh2ty3617stann",
      "slug": "whirlpool-wlp15ay30aj2n-wlh2ty3617stann",
      "modelId": "model-whirlpool-wlp15ay30aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay30aj2n",
      "indoorUnitId": "iu-wlh2ty3617stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay36aj2n-wlh2ty3617stann",
      "slug": "whirlpool-wlp15ay36aj2n-wlh2ty3617stann",
      "modelId": "model-whirlpool-wlp15ay36aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay36aj2n",
      "indoorUnitId": "iu-wlh2ty3617stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay42aj2n-wlh2ty4821stann",
      "slug": "whirlpool-wlp15ay42aj2n-wlh2ty4821stann",
      "modelId": "model-whirlpool-wlp15ay42aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay42aj2n",
      "indoorUnitId": "iu-wlh2ty4821stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay48aj2n-wlh2ty4821stann",
      "slug": "whirlpool-wlp15ay48aj2n-wlh2ty4821stann",
      "modelId": "model-whirlpool-wlp15ay48aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay48aj2n",
      "indoorUnitId": "iu-wlh2ty4821stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-wlp15ay60aj2n-wlh2ty6024stann",
      "slug": "whirlpool-wlp15ay60aj2n-wlh2ty6024stann",
      "modelId": "model-whirlpool-wlp15ay60aj2n",
      "outdoorUnitId": "ou-whirlpool-wlp15ay60aj2n",
      "indoorUnitId": "iu-wlh2ty6024stann",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-rhpbyc036ajt-iu-38095",
      "slug": "whirlpool-rhpbyc036ajt-iu-38095",
      "modelId": "model-whirlpool-rhpbyc036ajt",
      "outdoorUnitId": "ou-whirlpool-rhpbyc036ajt",
      "indoorUnitId": "iu-iu-38095",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-rhpbyc048ajt-iu-38096",
      "slug": "whirlpool-rhpbyc048ajt-iu-38096",
      "modelId": "model-whirlpool-rhpbyc048ajt",
      "outdoorUnitId": "ou-whirlpool-rhpbyc048ajt",
      "indoorUnitId": "iu-iu-38096",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-whirlpool-rhpbyc060ajt-iu-38097",
      "slug": "whirlpool-rhpbyc060ajt-iu-38097",
      "modelId": "model-whirlpool-rhpbyc060ajt",
      "outdoorUnitId": "ou-whirlpool-rhpbyc060ajt",
      "indoorUnitId": "iu-iu-38097",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-whirlpool-epa",
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
