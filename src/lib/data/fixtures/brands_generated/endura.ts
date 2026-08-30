import type { BrandDataset } from "../../types";

export const brand_enduraDataset: BrandDataset = {
  "brand": {
    "id": "brand-endura",
    "slug": "endura",
    "name": "Endura",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Endura",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-endura-epa",
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
      "id": "series-endura-endura-flex",
      "slug": "endura-endura-flex",
      "name": "Endura Flex",
      "brandId": "brand-endura",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Endura Flex de Endura",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-endura-hb-endura-flex-multi",
      "slug": "endura-hb-endura-flex-multi",
      "name": "HB Endura Flex Multi",
      "brandId": "brand-endura",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HB Endura Flex Multi de Endura",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-endura-hb-endura-fusion-series",
      "slug": "endura-hb-endura-fusion-series",
      "name": "HB Endura Fusion Series",
      "brandId": "brand-endura",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HB Endura Fusion Series de Endura",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-endura-hb-endura-masterpak-x",
      "slug": "endura-hb-endura-masterpak-x",
      "name": "HB Endura Masterpak-X",
      "brandId": "brand-endura",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HB Endura Masterpak-X de Endura",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-endura-hb-endura-fusion-coil",
      "slug": "endura-hb-endura-fusion-coil",
      "name": "HB Endura Fusion-Coil",
      "brandId": "brand-endura",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HB Endura Fusion-Coil de Endura",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-endura-hbefl-od12",
      "slug": "endura-hbefl-od12",
      "name": "Endura HBEFL-OD12",
      "seriesId": "series-endura-endura-flex",
      "brandId": "brand-endura",
      "modelNumber": "HBEFL-OD12",
      "normalizedModelNumber": "hbefl-od12",
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
      "id": "model-endura-hbeflm3-od27",
      "slug": "endura-hbeflm3-od27",
      "name": "Endura HBEFLM3-OD27",
      "seriesId": "series-endura-hb-endura-flex-multi",
      "brandId": "brand-endura",
      "modelNumber": "HBEFLM3-OD27",
      "normalizedModelNumber": "hbeflm3-od27",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
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
      "id": "model-endura-hbeflm2-od18",
      "slug": "endura-hbeflm2-od18",
      "name": "Endura HBEFLM2-OD18",
      "seriesId": "series-endura-hb-endura-flex-multi",
      "brandId": "brand-endura",
      "modelNumber": "HBEFLM2-OD18",
      "normalizedModelNumber": "hbeflm2-od18",
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
      "id": "model-endura-hbeflm4-od36",
      "slug": "endura-hbeflm4-od36",
      "name": "Endura HBEFLM4-OD36",
      "seriesId": "series-endura-hb-endura-flex-multi",
      "brandId": "brand-endura",
      "modelNumber": "HBEFLM4-OD36",
      "normalizedModelNumber": "hbeflm4-od36",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
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
      "id": "model-endura-hbeflm5-od42",
      "slug": "endura-hbeflm5-od42",
      "name": "Endura HBEFLM5-OD42",
      "seriesId": "series-endura-hb-endura-flex-multi",
      "brandId": "brand-endura",
      "modelNumber": "HBEFLM5-OD42",
      "normalizedModelNumber": "hbeflm5-od42",
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
      "id": "model-endura-hbefl-od18",
      "slug": "endura-hbefl-od18",
      "name": "Endura HBEFL-OD18",
      "seriesId": "series-endura-endura-flex",
      "brandId": "brand-endura",
      "modelNumber": "HBEFL-OD18",
      "normalizedModelNumber": "hbefl-od18",
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
      "id": "model-endura-hbefu-24r454b",
      "slug": "endura-hbefu-24r454b",
      "name": "Endura HBEFU-24R454B",
      "seriesId": "series-endura-hb-endura-fusion-series",
      "brandId": "brand-endura",
      "modelNumber": "HBEFU-24R454B",
      "normalizedModelNumber": "hbefu-24r454b",
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
      "id": "model-endura-hbefu-36r454b",
      "slug": "endura-hbefu-36r454b",
      "name": "Endura HBEFU-36R454B",
      "seriesId": "series-endura-hb-endura-fusion-series",
      "brandId": "brand-endura",
      "modelNumber": "HBEFU-36R454B",
      "normalizedModelNumber": "hbefu-36r454b",
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
      "id": "model-endura-hbefu-48r454b",
      "slug": "endura-hbefu-48r454b",
      "name": "Endura HBEFU-48R454B",
      "seriesId": "series-endura-hb-endura-fusion-series",
      "brandId": "brand-endura",
      "modelNumber": "HBEFU-48R454B",
      "normalizedModelNumber": "hbefu-48r454b",
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
      "id": "model-endura-hbefu-60r454b",
      "slug": "endura-hbefu-60r454b",
      "name": "Endura HBEFU-60R454B",
      "seriesId": "series-endura-hb-endura-fusion-series",
      "brandId": "brand-endura",
      "modelNumber": "HBEFU-60R454B",
      "normalizedModelNumber": "hbefu-60r454b",
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
      "id": "model-endura-hbempx-36u3rahm",
      "slug": "endura-hbempx-36u3rahm",
      "name": "Endura HBEMPX-36U3RAHM",
      "seriesId": "series-endura-hb-endura-masterpak-x",
      "brandId": "brand-endura",
      "modelNumber": "HBEMPX-36U3RAHM",
      "normalizedModelNumber": "hbempx-36u3rahm",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-endura-hbefl-od12",
      "modelNumber": "HBEFL-OD12",
      "brandId": "brand-endura",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-endura-hbeflm3-od27",
      "modelNumber": "HBEFLM3-OD27",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbeflm2-od18",
      "modelNumber": "HBEFLM2-OD18",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbeflm4-od36",
      "modelNumber": "HBEFLM4-OD36",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbeflm5-od42",
      "modelNumber": "HBEFLM5-OD42",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbefl-od18",
      "modelNumber": "HBEFL-OD18",
      "brandId": "brand-endura",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-endura-hbefu-24r454b",
      "modelNumber": "HBEFU-24R454B",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbefu-36r454b",
      "modelNumber": "HBEFU-36R454B",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbefu-48r454b",
      "modelNumber": "HBEFU-48R454B",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbefu-60r454b",
      "modelNumber": "HBEFU-60R454B",
      "brandId": "brand-endura",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-endura-hbempx-36u3rahm",
      "modelNumber": "HBEMPX-36U3RAHM",
      "brandId": "brand-endura",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-hbefl-id12",
      "modelNumber": "HBEFL-ID12",
      "brandId": "brand-endura",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44536",
      "modelNumber": "IU-44536",
      "brandId": "brand-endura",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44535",
      "modelNumber": "IU-44535",
      "brandId": "brand-endura",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44537",
      "modelNumber": "IU-44537",
      "brandId": "brand-endura",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44538",
      "modelNumber": "IU-44538",
      "brandId": "brand-endura",
      "type": "wall-single"
    },
    {
      "id": "iu-hbefl-id18",
      "modelNumber": "HBEFL- ID18",
      "brandId": "brand-endura",
      "type": "wall-single"
    },
    {
      "id": "iu-hbec-fc24r454b",
      "modelNumber": "HBEC-FC24R454B",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-hbec-fc36r454b",
      "modelNumber": "HBEC-FC36R454B",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-hbec-fc48r454b",
      "modelNumber": "HBEC-FC48R454B",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-hbec-fc60r454b",
      "modelNumber": "HBEC-FC60R454B",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-18701",
      "modelNumber": "IU-18701",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-end37d3j",
      "modelNumber": "END37D3J",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-end49bj",
      "modelNumber": "END49BJ",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-end61c4j",
      "modelNumber": "END61C4J",
      "brandId": "brand-endura",
      "type": "central-ducted"
    },
    {
      "id": "iu-end31d2j",
      "modelNumber": "END31D2J",
      "brandId": "brand-endura",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-endura-hbefl-od12-hbefl-id12",
      "slug": "endura-hbefl-od12-hbefl-id12",
      "modelId": "model-endura-hbefl-od12",
      "outdoorUnitId": "ou-endura-hbefl-od12",
      "indoorUnitId": "iu-hbefl-id12",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbeflm3-od27-iu-44536",
      "slug": "endura-hbeflm3-od27-iu-44536",
      "modelId": "model-endura-hbeflm3-od27",
      "outdoorUnitId": "ou-endura-hbeflm3-od27",
      "indoorUnitId": "iu-iu-44536",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbeflm2-od18-iu-44535",
      "slug": "endura-hbeflm2-od18-iu-44535",
      "modelId": "model-endura-hbeflm2-od18",
      "outdoorUnitId": "ou-endura-hbeflm2-od18",
      "indoorUnitId": "iu-iu-44535",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbeflm4-od36-iu-44537",
      "slug": "endura-hbeflm4-od36-iu-44537",
      "modelId": "model-endura-hbeflm4-od36",
      "outdoorUnitId": "ou-endura-hbeflm4-od36",
      "indoorUnitId": "iu-iu-44537",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbeflm5-od42-iu-44538",
      "slug": "endura-hbeflm5-od42-iu-44538",
      "modelId": "model-endura-hbeflm5-od42",
      "outdoorUnitId": "ou-endura-hbeflm5-od42",
      "indoorUnitId": "iu-iu-44538",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefl-od18-hbefl-id18",
      "slug": "endura-hbefl-od18-hbefl-id18",
      "modelId": "model-endura-hbefl-od18",
      "outdoorUnitId": "ou-endura-hbefl-od18",
      "indoorUnitId": "iu-hbefl-id18",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-24r454b-hbec-fc24r454b",
      "slug": "endura-hbefu-24r454b-hbec-fc24r454b",
      "modelId": "model-endura-hbefu-24r454b",
      "outdoorUnitId": "ou-endura-hbefu-24r454b",
      "indoorUnitId": "iu-hbec-fc24r454b",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-36r454b-hbec-fc36r454b",
      "slug": "endura-hbefu-36r454b-hbec-fc36r454b",
      "modelId": "model-endura-hbefu-36r454b",
      "outdoorUnitId": "ou-endura-hbefu-36r454b",
      "indoorUnitId": "iu-hbec-fc36r454b",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-48r454b-hbec-fc48r454b",
      "slug": "endura-hbefu-48r454b-hbec-fc48r454b",
      "modelId": "model-endura-hbefu-48r454b",
      "outdoorUnitId": "ou-endura-hbefu-48r454b",
      "indoorUnitId": "iu-hbec-fc48r454b",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-60r454b-hbec-fc60r454b",
      "slug": "endura-hbefu-60r454b-hbec-fc60r454b",
      "modelId": "model-endura-hbefu-60r454b",
      "outdoorUnitId": "ou-endura-hbefu-60r454b",
      "indoorUnitId": "iu-hbec-fc60r454b",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbempx-36u3rahm-iu-18701",
      "slug": "endura-hbempx-36u3rahm-iu-18701",
      "modelId": "model-endura-hbempx-36u3rahm",
      "outdoorUnitId": "ou-endura-hbempx-36u3rahm",
      "indoorUnitId": "iu-iu-18701",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-36r454b-end37d3j",
      "slug": "endura-hbefu-36r454b-end37d3j",
      "modelId": "model-endura-hbefu-36r454b",
      "outdoorUnitId": "ou-endura-hbefu-36r454b",
      "indoorUnitId": "iu-end37d3j",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-48r454b-end49bj",
      "slug": "endura-hbefu-48r454b-end49bj",
      "modelId": "model-endura-hbefu-48r454b",
      "outdoorUnitId": "ou-endura-hbefu-48r454b",
      "indoorUnitId": "iu-end49bj",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-60r454b-end61c4j",
      "slug": "endura-hbefu-60r454b-end61c4j",
      "modelId": "model-endura-hbefu-60r454b",
      "outdoorUnitId": "ou-endura-hbefu-60r454b",
      "indoorUnitId": "iu-end61c4j",
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
          "sourceId": "src-endura-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-endura-hbefu-24r454b-end31d2j",
      "slug": "endura-hbefu-24r454b-end31d2j",
      "modelId": "model-endura-hbefu-24r454b",
      "outdoorUnitId": "ou-endura-hbefu-24r454b",
      "indoorUnitId": "iu-end31d2j",
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
          "sourceId": "src-endura-epa",
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
