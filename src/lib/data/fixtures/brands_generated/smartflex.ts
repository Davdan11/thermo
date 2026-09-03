import type { BrandDataset } from "../../types";

export const brand_smartflexDataset: BrandDataset = {
  "brand": {
    "id": "brand-smartflex",
    "slug": "smartflex",
    "name": "SMARTFLEX",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour SMARTFLEX",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-smartflex-epa",
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
      "id": "series-smartflex-x-series",
      "slug": "smartflex-x-series",
      "name": "X series",
      "brandId": "brand-smartflex",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série X series de SMARTFLEX",
      "imageUrl": "/images/series/smartflex-smartflex-x-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-smartflex-m-series",
      "slug": "smartflex-m-series",
      "name": "M series",
      "brandId": "brand-smartflex",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M series de SMARTFLEX",
      "imageUrl": "/images/series/smartflex-smartflex-m-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-smartflex-ezi",
      "slug": "smartflex-ezi",
      "name": "EZI",
      "brandId": "brand-smartflex",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EZI de SMARTFLEX",
      "imageUrl": "/images/series/smartflex-smartflex-ezi.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-smartflex-dhx24csb21s",
      "slug": "smartflex-dhx24csb21s",
      "name": "SMARTFLEX DHX24CSB21S",
      "seriesId": "series-smartflex-x-series",
      "brandId": "brand-smartflex",
      "modelNumber": "DHX24CSB21S",
      "normalizedModelNumber": "dhx24csb21s",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-smartflex-ezi09cn15stg1",
      "slug": "smartflex-ezi09cn15stg1",
      "name": "SMARTFLEX EZI09CN15STG1",
      "seriesId": "series-smartflex-m-series",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI09CN15STG1",
      "normalizedModelNumber": "ezi09cn15stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9100,
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
      "id": "model-smartflex-ezi09cn23stg1",
      "slug": "smartflex-ezi09cn23stg1",
      "name": "SMARTFLEX EZI09CN23STG1",
      "seriesId": "series-smartflex-m-series",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI09CN23STG1",
      "normalizedModelNumber": "ezi09cn23stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9100,
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
      "id": "model-smartflex-ezi12cn15stg1",
      "slug": "smartflex-ezi12cn15stg1",
      "name": "SMARTFLEX EZI12CN15STG1",
      "seriesId": "series-smartflex-ezi",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI12CN15STG1",
      "normalizedModelNumber": "ezi12cn15stg1",
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
      "id": "model-smartflex-ezi12cn23stg1",
      "slug": "smartflex-ezi12cn23stg1",
      "name": "SMARTFLEX EZI12CN23STG1",
      "seriesId": "series-smartflex-ezi",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI12CN23STG1",
      "normalizedModelNumber": "ezi12cn23stg1",
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
      "id": "model-smartflex-ezi18cn23stg1",
      "slug": "smartflex-ezi18cn23stg1",
      "name": "SMARTFLEX EZI18CN23STG1",
      "seriesId": "series-smartflex-ezi",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI18CN23STG1",
      "normalizedModelNumber": "ezi18cn23stg1",
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
      "id": "model-smartflex-ezi24cn23stg1",
      "slug": "smartflex-ezi24cn23stg1",
      "name": "SMARTFLEX EZI24CN23STG1",
      "seriesId": "series-smartflex-ezi",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI24CN23STG1",
      "normalizedModelNumber": "ezi24cn23stg1",
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
      "id": "model-smartflex-ezi36cn23stg1",
      "slug": "smartflex-ezi36cn23stg1",
      "name": "SMARTFLEX EZI36CN23STG1",
      "seriesId": "series-smartflex-ezi",
      "brandId": "brand-smartflex",
      "modelNumber": "EZI36CN23STG1",
      "normalizedModelNumber": "ezi36cn23stg1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-smartflex-dhx24csb21s",
      "modelNumber": "DHX24CSB21S",
      "brandId": "brand-smartflex",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-smartflex-ezi09cn15stg1",
      "modelNumber": "EZI09CN15STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-smartflex-ezi09cn23stg1",
      "modelNumber": "EZI09CN23STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-smartflex-ezi12cn15stg1",
      "modelNumber": "EZI12CN15STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-smartflex-ezi12cn23stg1",
      "modelNumber": "EZI12CN23STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-smartflex-ezi18cn23stg1",
      "modelNumber": "EZI18CN23STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-smartflex-ezi24cn23stg1",
      "modelNumber": "EZI24CN23STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-smartflex-ezi36cn23stg1",
      "modelNumber": "EZI36CN23STG1",
      "brandId": "brand-smartflex",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhx24nwb21s",
      "modelNumber": "DHX24NWB21S",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi09hw15stg1",
      "modelNumber": "EZI09HW15STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi09hw23stg1",
      "modelNumber": "EZI09HW23STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi12hw15stg1",
      "modelNumber": "EZI12HW15STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi12hw23stg1",
      "modelNumber": "EZI12HW23STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi18hw23stg1",
      "modelNumber": "EZI18HW23STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi24hw23stg1",
      "modelNumber": "EZI24HW23STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    },
    {
      "id": "iu-ezi36hw23stg1",
      "modelNumber": "EZI36HW23STG1",
      "brandId": "brand-smartflex",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-smartflex-dhx24csb21s-dhx24nwb21s",
      "slug": "smartflex-dhx24csb21s-dhx24nwb21s",
      "modelId": "model-smartflex-dhx24csb21s",
      "outdoorUnitId": "ou-smartflex-dhx24csb21s",
      "indoorUnitId": "iu-dhx24nwb21s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi09cn15stg1-ezi09hw15stg1",
      "slug": "smartflex-ezi09cn15stg1-ezi09hw15stg1",
      "modelId": "model-smartflex-ezi09cn15stg1",
      "outdoorUnitId": "ou-smartflex-ezi09cn15stg1",
      "indoorUnitId": "iu-ezi09hw15stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi09cn23stg1-ezi09hw23stg1",
      "slug": "smartflex-ezi09cn23stg1-ezi09hw23stg1",
      "modelId": "model-smartflex-ezi09cn23stg1",
      "outdoorUnitId": "ou-smartflex-ezi09cn23stg1",
      "indoorUnitId": "iu-ezi09hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi12cn15stg1-ezi12hw15stg1",
      "slug": "smartflex-ezi12cn15stg1-ezi12hw15stg1",
      "modelId": "model-smartflex-ezi12cn15stg1",
      "outdoorUnitId": "ou-smartflex-ezi12cn15stg1",
      "indoorUnitId": "iu-ezi12hw15stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi12cn23stg1-ezi12hw23stg1",
      "slug": "smartflex-ezi12cn23stg1-ezi12hw23stg1",
      "modelId": "model-smartflex-ezi12cn23stg1",
      "outdoorUnitId": "ou-smartflex-ezi12cn23stg1",
      "indoorUnitId": "iu-ezi12hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi18cn23stg1-ezi18hw23stg1",
      "slug": "smartflex-ezi18cn23stg1-ezi18hw23stg1",
      "modelId": "model-smartflex-ezi18cn23stg1",
      "outdoorUnitId": "ou-smartflex-ezi18cn23stg1",
      "indoorUnitId": "iu-ezi18hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi24cn23stg1-ezi24hw23stg1",
      "slug": "smartflex-ezi24cn23stg1-ezi24hw23stg1",
      "modelId": "model-smartflex-ezi24cn23stg1",
      "outdoorUnitId": "ou-smartflex-ezi24cn23stg1",
      "indoorUnitId": "iu-ezi24hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-smartflex-ezi36cn23stg1-ezi36hw23stg1",
      "slug": "smartflex-ezi36cn23stg1-ezi36hw23stg1",
      "modelId": "model-smartflex-ezi36cn23stg1",
      "outdoorUnitId": "ou-smartflex-ezi36cn23stg1",
      "indoorUnitId": "iu-ezi36hw23stg1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-smartflex-epa",
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
