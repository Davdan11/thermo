import type { BrandDataset } from "../../types";

export const brand_azurDataset: BrandDataset = {
  "brand": {
    "id": "brand-azur",
    "slug": "azur",
    "name": "AZUR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AZUR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-azur-epa",
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
      "id": "series-azur-hi-multi-xtreme",
      "slug": "azur-hi-multi-xtreme",
      "name": "Hi MULTI Xtreme",
      "brandId": "brand-azur",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI Xtreme de AZUR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-azur-hi-ultra-hd",
      "slug": "azur-hi-ultra-hd",
      "name": "Hi ULTRA HD",
      "brandId": "brand-azur",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi ULTRA HD de AZUR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-azur-az-24m322sco",
      "slug": "azur-az-24m322sco",
      "name": "AZUR AZ-24M322SCO",
      "seriesId": "series-azur-hi-multi-xtreme",
      "brandId": "brand-azur",
      "modelNumber": "AZ-24M322SCO",
      "normalizedModelNumber": "az-24m322sco",
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
      "id": "model-azur-az-36m422sco",
      "slug": "azur-az-36m422sco",
      "name": "AZUR AZ-36M422SCO",
      "seriesId": "series-azur-hi-multi-xtreme",
      "brandId": "brand-azur",
      "modelNumber": "AZ-36M422SCO",
      "normalizedModelNumber": "az-36m422sco",
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
      "id": "model-azur-az-42m522sco",
      "slug": "azur-az-42m522sco",
      "name": "AZUR AZ-42M522SCO",
      "seriesId": "series-azur-hi-multi-xtreme",
      "brandId": "brand-azur",
      "modelNumber": "AZ-42M522SCO",
      "normalizedModelNumber": "az-42m522sco",
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
      "id": "model-azur-az-48hpb",
      "slug": "azur-az-48hpb",
      "name": "AZUR AZ-48HPB",
      "seriesId": "series-azur-hi-ultra-hd",
      "brandId": "brand-azur",
      "modelNumber": "AZ-48HPB",
      "normalizedModelNumber": "az-48hpb",
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
      "id": "model-azur-az-24hpb",
      "slug": "azur-az-24hpb",
      "name": "AZUR AZ-24HPB",
      "seriesId": "series-azur-hi-ultra-hd",
      "brandId": "brand-azur",
      "modelNumber": "AZ-24HPB",
      "normalizedModelNumber": "az-24hpb",
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
      "id": "ou-azur-az-24m322sco",
      "modelNumber": "AZ-24M322SCO",
      "brandId": "brand-azur",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-azur-az-36m422sco",
      "modelNumber": "AZ-36M422SCO",
      "brandId": "brand-azur",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-azur-az-42m522sco",
      "modelNumber": "AZ-42M522SCO",
      "brandId": "brand-azur",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-azur-az-48hpb",
      "modelNumber": "AZ-48HPB",
      "brandId": "brand-azur",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-azur-az-24hpb",
      "modelNumber": "AZ-24HPB",
      "brandId": "brand-azur",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-40724",
      "modelNumber": "IU-40724",
      "brandId": "brand-azur",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40725",
      "modelNumber": "IU-40725",
      "brandId": "brand-azur",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40726",
      "modelNumber": "IU-40726",
      "brandId": "brand-azur",
      "type": "wall-single"
    },
    {
      "id": "iu-ah-48b",
      "modelNumber": "AH-48B",
      "brandId": "brand-azur",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah-24b",
      "modelNumber": "AH-24B",
      "brandId": "brand-azur",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-azur-az-24m322sco-iu-40724",
      "slug": "azur-az-24m322sco-iu-40724",
      "modelId": "model-azur-az-24m322sco",
      "outdoorUnitId": "ou-azur-az-24m322sco",
      "indoorUnitId": "iu-iu-40724",
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
          "sourceId": "src-azur-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-azur-az-36m422sco-iu-40725",
      "slug": "azur-az-36m422sco-iu-40725",
      "modelId": "model-azur-az-36m422sco",
      "outdoorUnitId": "ou-azur-az-36m422sco",
      "indoorUnitId": "iu-iu-40725",
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
          "sourceId": "src-azur-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-azur-az-42m522sco-iu-40726",
      "slug": "azur-az-42m522sco-iu-40726",
      "modelId": "model-azur-az-42m522sco",
      "outdoorUnitId": "ou-azur-az-42m522sco",
      "indoorUnitId": "iu-iu-40726",
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
          "sourceId": "src-azur-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-azur-az-48hpb-ah-48b",
      "slug": "azur-az-48hpb-ah-48b",
      "modelId": "model-azur-az-48hpb",
      "outdoorUnitId": "ou-azur-az-48hpb",
      "indoorUnitId": "iu-ah-48b",
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
          "sourceId": "src-azur-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-azur-az-24hpb-ah-24b",
      "slug": "azur-az-24hpb-ah-24b",
      "modelId": "model-azur-az-24hpb",
      "outdoorUnitId": "ou-azur-az-24hpb",
      "indoorUnitId": "iu-ah-24b",
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
          "sourceId": "src-azur-epa",
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
