import type { BrandDataset } from "../../types";

export const brand_sum_xDataset: BrandDataset = {
  "brand": {
    "id": "brand-sum-x",
    "slug": "sum-x",
    "name": "SUM X",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour SUM X",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-sum-x-epa",
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
      "id": "series-sum-x-hiultra",
      "slug": "sum-x-hiultra",
      "name": "HiULTRA",
      "brandId": "brand-sum-x",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HiULTRA de SUM X",
      "imageUrl": "/images/series/sum-x-sum-x-hiultra.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sum-x-sm",
      "slug": "sum-x-sm",
      "name": "SM",
      "brandId": "brand-sum-x",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SM de SUM X",
      "imageUrl": "/images/series/sum-x-sum-x-sm.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sum-x-sm-coil",
      "slug": "sum-x-sm-coil",
      "name": "SM-COIL",
      "brandId": "brand-sum-x",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SM-COIL de SUM X",
      "imageUrl": "/images/series/sum-x-sum-x-sm-coil.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-sum-x-sm-12hfo2-cu",
      "slug": "sum-x-sm-12hfo2-cu",
      "name": "SUM X SM-12HFO2-CU",
      "seriesId": "series-sum-x-hiultra",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-12HFO2-CU",
      "normalizedModelNumber": "sm-12hfo2-cu",
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
      "id": "model-sum-x-sm-12hsm2-cu",
      "slug": "sum-x-sm-12hsm2-cu",
      "name": "SUM X SM-12HSM2-CU",
      "seriesId": "series-sum-x-hiultra",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-12HSM2-CU",
      "normalizedModelNumber": "sm-12hsm2-cu",
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
      "id": "model-sum-x-sm-18hsm2-cu",
      "slug": "sum-x-sm-18hsm2-cu",
      "name": "SUM X SM-18HSM2-CU",
      "seriesId": "series-sum-x-hiultra",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-18HSM2-CU",
      "normalizedModelNumber": "sm-18hsm2-cu",
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
      "id": "model-sum-x-sm-18hfo2-cu",
      "slug": "sum-x-sm-18hfo2-cu",
      "name": "SUM X SM-18HFO2-CU",
      "seriesId": "series-sum-x-hiultra",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-18HFO2-CU",
      "normalizedModelNumber": "sm-18hfo2-cu",
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
      "id": "model-sum-x-sm-24hsm2-cu",
      "slug": "sum-x-sm-24hsm2-cu",
      "name": "SUM X SM-24HSM2-CU",
      "seriesId": "series-sum-x-sm",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-24HSM2-CU",
      "normalizedModelNumber": "sm-24hsm2-cu",
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
      "id": "model-sum-x-sm-36hsm2-cu",
      "slug": "sum-x-sm-36hsm2-cu",
      "name": "SUM X SM-36HSM2-CU",
      "seriesId": "series-sum-x-sm",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-36HSM2-CU",
      "normalizedModelNumber": "sm-36hsm2-cu",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-sum-x-sm-60hsm2-cu",
      "slug": "sum-x-sm-60hsm2-cu",
      "name": "SUM X SM-60HSM2-CU",
      "seriesId": "series-sum-x-sm",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-60HSM2-CU",
      "normalizedModelNumber": "sm-60hsm2-cu",
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
      "id": "model-sum-x-sm-48hsm2-cu",
      "slug": "sum-x-sm-48hsm2-cu",
      "name": "SUM X SM-48HSM2-CU",
      "seriesId": "series-sum-x-sm",
      "brandId": "brand-sum-x",
      "modelNumber": "SM-48HSM2-CU",
      "normalizedModelNumber": "sm-48hsm2-cu",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-sum-x-sm-12hfo2-cu",
      "modelNumber": "SM-12HFO2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sum-x-sm-12hsm2-cu",
      "modelNumber": "SM-12HSM2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sum-x-sm-18hsm2-cu",
      "modelNumber": "SM-18HSM2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sum-x-sm-18hfo2-cu",
      "modelNumber": "SM-18HFO2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-sum-x-sm-24hsm2-cu",
      "modelNumber": "SM-24HSM2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sum-x-sm-36hsm2-cu",
      "modelNumber": "SM-36HSM2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sum-x-sm-60hsm2-cu",
      "modelNumber": "SM-60HSM2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-sum-x-sm-48hsm2-cu",
      "modelNumber": "SM-48HSM2-CU",
      "brandId": "brand-sum-x",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-sm-12hfo2-wu",
      "modelNumber": "SM-12HFO2-WU",
      "brandId": "brand-sum-x",
      "type": "wall-single"
    },
    {
      "id": "iu-sm-12hsm2-wu",
      "modelNumber": "SM-12HSM2-WU",
      "brandId": "brand-sum-x",
      "type": "wall-single"
    },
    {
      "id": "iu-sm-18hsm2-wu",
      "modelNumber": "SM-18HSM2-WU",
      "brandId": "brand-sum-x",
      "type": "wall-single"
    },
    {
      "id": "iu-sm-18hfo2-wu",
      "modelNumber": "SM-18HFO2-WU",
      "brandId": "brand-sum-x",
      "type": "wall-single"
    },
    {
      "id": "iu-sm-24hsm2-ah",
      "modelNumber": "SM-24HSM2-AH",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-sm-36hsm2-ah",
      "modelNumber": "SM-36HSM2-AH",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-sm-60hsm2-ah",
      "modelNumber": "SM-60HSM2-AH",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-sm-48hsm2-ah",
      "modelNumber": "SM-48HSM2-AH",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc49b3j",
      "modelNumber": "DC49B3J",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc37d3j",
      "modelNumber": "DC37D3J",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc61c4j",
      "modelNumber": "DC61C4J",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc31d2j",
      "modelNumber": "DC31D2J",
      "brandId": "brand-sum-x",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-sum-x-sm-12hfo2-cu-sm-12hfo2-wu",
      "slug": "sum-x-sm-12hfo2-cu-sm-12hfo2-wu",
      "modelId": "model-sum-x-sm-12hfo2-cu",
      "outdoorUnitId": "ou-sum-x-sm-12hfo2-cu",
      "indoorUnitId": "iu-sm-12hfo2-wu",
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
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-12hsm2-cu-sm-12hsm2-wu",
      "slug": "sum-x-sm-12hsm2-cu-sm-12hsm2-wu",
      "modelId": "model-sum-x-sm-12hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-12hsm2-cu",
      "indoorUnitId": "iu-sm-12hsm2-wu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-18hsm2-cu-sm-18hsm2-wu",
      "slug": "sum-x-sm-18hsm2-cu-sm-18hsm2-wu",
      "modelId": "model-sum-x-sm-18hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-18hsm2-cu",
      "indoorUnitId": "iu-sm-18hsm2-wu",
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
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-18hfo2-cu-sm-18hfo2-wu",
      "slug": "sum-x-sm-18hfo2-cu-sm-18hfo2-wu",
      "modelId": "model-sum-x-sm-18hfo2-cu",
      "outdoorUnitId": "ou-sum-x-sm-18hfo2-cu",
      "indoorUnitId": "iu-sm-18hfo2-wu",
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
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-24hsm2-cu-sm-24hsm2-ah",
      "slug": "sum-x-sm-24hsm2-cu-sm-24hsm2-ah",
      "modelId": "model-sum-x-sm-24hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-24hsm2-cu",
      "indoorUnitId": "iu-sm-24hsm2-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-36hsm2-cu-sm-36hsm2-ah",
      "slug": "sum-x-sm-36hsm2-cu-sm-36hsm2-ah",
      "modelId": "model-sum-x-sm-36hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-36hsm2-cu",
      "indoorUnitId": "iu-sm-36hsm2-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-60hsm2-cu-sm-60hsm2-ah",
      "slug": "sum-x-sm-60hsm2-cu-sm-60hsm2-ah",
      "modelId": "model-sum-x-sm-60hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-60hsm2-cu",
      "indoorUnitId": "iu-sm-60hsm2-ah",
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
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-48hsm2-cu-sm-48hsm2-ah",
      "slug": "sum-x-sm-48hsm2-cu-sm-48hsm2-ah",
      "modelId": "model-sum-x-sm-48hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-48hsm2-cu",
      "indoorUnitId": "iu-sm-48hsm2-ah",
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
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-48hsm2-cu-dc49b3j",
      "slug": "sum-x-sm-48hsm2-cu-dc49b3j",
      "modelId": "model-sum-x-sm-48hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-48hsm2-cu",
      "indoorUnitId": "iu-dc49b3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-36hsm2-cu-dc37d3j",
      "slug": "sum-x-sm-36hsm2-cu-dc37d3j",
      "modelId": "model-sum-x-sm-36hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-36hsm2-cu",
      "indoorUnitId": "iu-dc37d3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-60hsm2-cu-dc61c4j",
      "slug": "sum-x-sm-60hsm2-cu-dc61c4j",
      "modelId": "model-sum-x-sm-60hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-60hsm2-cu",
      "indoorUnitId": "iu-dc61c4j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sum-x-sm-24hsm2-cu-dc31d2j",
      "slug": "sum-x-sm-24hsm2-cu-dc31d2j",
      "modelId": "model-sum-x-sm-24hsm2-cu",
      "outdoorUnitId": "ou-sum-x-sm-24hsm2-cu",
      "indoorUnitId": "iu-dc31d2j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-sum-x-epa",
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
