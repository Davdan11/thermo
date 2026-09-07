import type { BrandDataset } from "../../types";

export const brand_mirageDataset: BrandDataset = {
  "brand": {
    "id": "brand-mirage",
    "slug": "mirage",
    "name": "MIRAGE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MIRAGE",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-mirage-epa",
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
      "id": "series-mirage-galaxy",
      "slug": "mirage-galaxy",
      "name": "GALAXY",
      "brandId": "brand-mirage",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série GALAXY de MIRAGE",
      "imageUrl": "/images/series/mirage-mirage-galaxy.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-mirage-magnus",
      "slug": "mirage-magnus",
      "name": "MAGNUS",
      "brandId": "brand-mirage",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MAGNUS de MIRAGE",
      "imageUrl": "/images/series/mirage-mirage-magnus.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-mirage-ogfh181c",
      "slug": "mirage-ogfh181c",
      "name": "MIRAGE OGFH181C",
      "seriesId": "series-mirage-galaxy",
      "brandId": "brand-mirage",
      "modelNumber": "OGFH181C",
      "normalizedModelNumber": "ogfh181c",
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
      "id": "model-mirage-ogfh271c",
      "slug": "mirage-ogfh271c",
      "name": "MIRAGE OGFH271C",
      "seriesId": "series-mirage-galaxy",
      "brandId": "brand-mirage",
      "modelNumber": "OGFH271C",
      "normalizedModelNumber": "ogfh271c",
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
      "id": "model-mirage-omzh121c",
      "slug": "mirage-omzh121c",
      "name": "MIRAGE OMZH121C*",
      "seriesId": "series-mirage-magnus",
      "brandId": "brand-mirage",
      "modelNumber": "OMZH121C*",
      "normalizedModelNumber": "omzh121c*",
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
      "id": "model-mirage-omzh120c",
      "slug": "mirage-omzh120c",
      "name": "MIRAGE OMZH120C*",
      "seriesId": "series-mirage-magnus",
      "brandId": "brand-mirage",
      "modelNumber": "OMZH120C*",
      "normalizedModelNumber": "omzh120c*",
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
      "id": "model-mirage-omzh090c",
      "slug": "mirage-omzh090c",
      "name": "MIRAGE OMZH090C*",
      "seriesId": "series-mirage-magnus",
      "brandId": "brand-mirage",
      "modelNumber": "OMZH090C*",
      "normalizedModelNumber": "omzh090c*",
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
      "id": "model-mirage-omzh181c",
      "slug": "mirage-omzh181c",
      "name": "MIRAGE OMZH181C*",
      "seriesId": "series-mirage-magnus",
      "brandId": "brand-mirage",
      "modelNumber": "OMZH181C*",
      "normalizedModelNumber": "omzh181c*",
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
      "id": "model-mirage-omzh241c",
      "slug": "mirage-omzh241c",
      "name": "MIRAGE OMZH241C*",
      "seriesId": "series-mirage-magnus",
      "brandId": "brand-mirage",
      "modelNumber": "OMZH241C*",
      "normalizedModelNumber": "omzh241c*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-mirage-ogfh351c",
      "slug": "mirage-ogfh351c",
      "name": "MIRAGE OGFH351C",
      "seriesId": "series-mirage-galaxy",
      "brandId": "brand-mirage",
      "modelNumber": "OGFH351C",
      "normalizedModelNumber": "ogfh351c",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-mirage-ogfh421c",
      "slug": "mirage-ogfh421c",
      "name": "MIRAGE OGFH421C",
      "seriesId": "series-mirage-galaxy",
      "brandId": "brand-mirage",
      "modelNumber": "OGFH421C",
      "normalizedModelNumber": "ogfh421c",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-mirage-ogfh181c",
      "modelNumber": "OGFH181C",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-ogfh271c",
      "modelNumber": "OGFH271C",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-omzh121c",
      "modelNumber": "OMZH121C*",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-omzh120c",
      "modelNumber": "OMZH120C*",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-omzh090c",
      "modelNumber": "OMZH090C*",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-omzh181c",
      "modelNumber": "OMZH181C*",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-omzh241c",
      "modelNumber": "OMZH241C*",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-ogfh351c",
      "modelNumber": "OGFH351C",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-mirage-ogfh421c",
      "modelNumber": "OGFH421C",
      "brandId": "brand-mirage",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-48436",
      "modelNumber": "IU-48436",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48437",
      "modelNumber": "IU-48437",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-imzh121c",
      "modelNumber": "IMZH121C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-imzh120c",
      "modelNumber": "IMZH120C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-imzh090c",
      "modelNumber": "IMZH090C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-imzh181c",
      "modelNumber": "IMZH181C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-imzh241c",
      "modelNumber": "IMZH241C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-cgfh241c",
      "modelNumber": "CGFH241C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48438",
      "modelNumber": "IU-48438",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48439",
      "modelNumber": "IU-48439",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-cgfh121c",
      "modelNumber": "CGFH121C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-cgfh181c",
      "modelNumber": "CGFH181C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-dgfh181c",
      "modelNumber": "DGFH181C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48442",
      "modelNumber": "IU-48442",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48450",
      "modelNumber": "IU-48450",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-dgfh121c",
      "modelNumber": "DGFH121C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48446",
      "modelNumber": "IU-48446",
      "brandId": "brand-mirage",
      "type": "wall-single"
    },
    {
      "id": "iu-dgfh241c",
      "modelNumber": "DGFH241C",
      "brandId": "brand-mirage",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-mirage-ogfh181c-iu-48436",
      "slug": "mirage-ogfh181c-iu-48436",
      "modelId": "model-mirage-ogfh181c",
      "outdoorUnitId": "ou-mirage-ogfh181c",
      "indoorUnitId": "iu-iu-48436",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-ogfh271c-iu-48437",
      "slug": "mirage-ogfh271c-iu-48437",
      "modelId": "model-mirage-ogfh271c",
      "outdoorUnitId": "ou-mirage-ogfh271c",
      "indoorUnitId": "iu-iu-48437",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh121c-imzh121c",
      "slug": "mirage-omzh121c-imzh121c",
      "modelId": "model-mirage-omzh121c",
      "outdoorUnitId": "ou-mirage-omzh121c",
      "indoorUnitId": "iu-imzh121c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh120c-imzh120c",
      "slug": "mirage-omzh120c-imzh120c",
      "modelId": "model-mirage-omzh120c",
      "outdoorUnitId": "ou-mirage-omzh120c",
      "indoorUnitId": "iu-imzh120c",
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
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh090c-imzh090c",
      "slug": "mirage-omzh090c-imzh090c",
      "modelId": "model-mirage-omzh090c",
      "outdoorUnitId": "ou-mirage-omzh090c",
      "indoorUnitId": "iu-imzh090c",
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
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh181c-imzh181c",
      "slug": "mirage-omzh181c-imzh181c",
      "modelId": "model-mirage-omzh181c",
      "outdoorUnitId": "ou-mirage-omzh181c",
      "indoorUnitId": "iu-imzh181c",
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
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh241c-imzh241c",
      "slug": "mirage-omzh241c-imzh241c",
      "modelId": "model-mirage-omzh241c",
      "outdoorUnitId": "ou-mirage-omzh241c",
      "indoorUnitId": "iu-imzh241c",
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
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh241c-cgfh241c",
      "slug": "mirage-omzh241c-cgfh241c",
      "modelId": "model-mirage-omzh241c",
      "outdoorUnitId": "ou-mirage-omzh241c",
      "indoorUnitId": "iu-cgfh241c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-ogfh351c-iu-48438",
      "slug": "mirage-ogfh351c-iu-48438",
      "modelId": "model-mirage-ogfh351c",
      "outdoorUnitId": "ou-mirage-ogfh351c",
      "indoorUnitId": "iu-iu-48438",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-ogfh421c-iu-48439",
      "slug": "mirage-ogfh421c-iu-48439",
      "modelId": "model-mirage-ogfh421c",
      "outdoorUnitId": "ou-mirage-ogfh421c",
      "indoorUnitId": "iu-iu-48439",
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
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh121c-cgfh121c",
      "slug": "mirage-omzh121c-cgfh121c",
      "modelId": "model-mirage-omzh121c",
      "outdoorUnitId": "ou-mirage-omzh121c",
      "indoorUnitId": "iu-cgfh121c",
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
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh181c-cgfh181c",
      "slug": "mirage-omzh181c-cgfh181c",
      "modelId": "model-mirage-omzh181c",
      "outdoorUnitId": "ou-mirage-omzh181c",
      "indoorUnitId": "iu-cgfh181c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh181c-dgfh181c",
      "slug": "mirage-omzh181c-dgfh181c",
      "modelId": "model-mirage-omzh181c",
      "outdoorUnitId": "ou-mirage-omzh181c",
      "indoorUnitId": "iu-dgfh181c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh121c-iu-48442",
      "slug": "mirage-omzh121c-iu-48442",
      "modelId": "model-mirage-omzh121c",
      "outdoorUnitId": "ou-mirage-omzh121c",
      "indoorUnitId": "iu-iu-48442",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh241c-iu-48450",
      "slug": "mirage-omzh241c-iu-48450",
      "modelId": "model-mirage-omzh241c",
      "outdoorUnitId": "ou-mirage-omzh241c",
      "indoorUnitId": "iu-iu-48450",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh121c-dgfh121c",
      "slug": "mirage-omzh121c-dgfh121c",
      "modelId": "model-mirage-omzh121c",
      "outdoorUnitId": "ou-mirage-omzh121c",
      "indoorUnitId": "iu-dgfh121c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh181c-iu-48446",
      "slug": "mirage-omzh181c-iu-48446",
      "modelId": "model-mirage-omzh181c",
      "outdoorUnitId": "ou-mirage-omzh181c",
      "indoorUnitId": "iu-iu-48446",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-mirage-omzh241c-dgfh241c",
      "slug": "mirage-omzh241c-dgfh241c",
      "modelId": "model-mirage-omzh241c",
      "outdoorUnitId": "ou-mirage-omzh241c",
      "indoorUnitId": "iu-dgfh241c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-mirage-epa",
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
