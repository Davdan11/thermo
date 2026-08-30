import type { BrandDataset } from "../../types";

export const brand_ortechDataset: BrandDataset = {
  "brand": {
    "id": "brand-ortech",
    "slug": "ortech",
    "name": "Ortech",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Ortech",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ortech-epa",
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
      "id": "series-ortech-multi-spilt-series",
      "slug": "ortech-multi-spilt-series",
      "name": "Multi-spilt series",
      "brandId": "brand-ortech",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi-spilt series de Ortech",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ortech-mini-spilt-ducted-series",
      "slug": "ortech-mini-spilt-ducted-series",
      "name": "Mini-spilt Ducted series",
      "brandId": "brand-ortech",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Mini-spilt Ducted series de Ortech",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ortech-oah-mz36k-208-ch-o",
      "slug": "ortech-oah-mz36k-208-ch-o",
      "name": "Ortech OAH-MZ36K-208-CH-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ36K-208-CH-O",
      "normalizedModelNumber": "oah-mz36k-208-ch-o",
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
      "id": "model-ortech-oah-mz24k-208-ch-o",
      "slug": "ortech-oah-mz24k-208-ch-o",
      "name": "Ortech OAH-MZ24K-208-CH-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ24K-208-CH-O",
      "normalizedModelNumber": "oah-mz24k-208-ch-o",
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
      "id": "model-ortech-oah-mz42k-208-ch-o",
      "slug": "ortech-oah-mz42k-208-ch-o",
      "name": "Ortech OAH-MZ42K-208-CH-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ42K-208-CH-O",
      "normalizedModelNumber": "oah-mz42k-208-ch-o",
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
      "id": "model-ortech-oah-mz18k-208-ch-o",
      "slug": "ortech-oah-mz18k-208-ch-o",
      "name": "Ortech OAH-MZ18K-208-CH-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ18K-208-CH-O",
      "normalizedModelNumber": "oah-mz18k-208-ch-o",
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
      "id": "model-ortech-oah-mz24k-208-pr-o",
      "slug": "ortech-oah-mz24k-208-pr-o",
      "name": "Ortech OAH-MZ24K-208-PR-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ24K-208-PR-O",
      "normalizedModelNumber": "oah-mz24k-208-pr-o",
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
      "id": "model-ortech-oah-mz36k-208-pr-o",
      "slug": "ortech-oah-mz36k-208-pr-o",
      "name": "Ortech OAH-MZ36K-208-PR-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ36K-208-PR-O",
      "normalizedModelNumber": "oah-mz36k-208-pr-o",
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
      "id": "model-ortech-oah-mz18k-208-pr-o",
      "slug": "ortech-oah-mz18k-208-pr-o",
      "name": "Ortech OAH-MZ18K-208-PR-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ18K-208-PR-O",
      "normalizedModelNumber": "oah-mz18k-208-pr-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17700,
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
      "id": "model-ortech-oah-mz42k-208-pr-o",
      "slug": "ortech-oah-mz42k-208-pr-o",
      "name": "Ortech OAH-MZ42K-208-PR-O",
      "seriesId": "series-ortech-multi-spilt-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-MZ42K-208-PR-O",
      "normalizedModelNumber": "oah-mz42k-208-pr-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 37000,
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
      "id": "model-ortech-oah-ahu18k-ch-o",
      "slug": "ortech-oah-ahu18k-ch-o",
      "name": "Ortech OAH-AHU18K-CH-O",
      "seriesId": "series-ortech-mini-spilt-ducted-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-AHU18K-CH-O",
      "normalizedModelNumber": "oah-ahu18k-ch-o",
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
      "id": "model-ortech-oah-ahu24k-ch-o",
      "slug": "ortech-oah-ahu24k-ch-o",
      "name": "Ortech OAH-AHU24K-CH-O",
      "seriesId": "series-ortech-mini-spilt-ducted-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-AHU24K-CH-O",
      "normalizedModelNumber": "oah-ahu24k-ch-o",
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
      "id": "model-ortech-oah-ahu36k-ch-o",
      "slug": "ortech-oah-ahu36k-ch-o",
      "name": "Ortech OAH-AHU36K-CH-O",
      "seriesId": "series-ortech-mini-spilt-ducted-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-AHU36K-CH-O",
      "normalizedModelNumber": "oah-ahu36k-ch-o",
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
      "id": "model-ortech-oah-ahu30k-ch-o",
      "slug": "ortech-oah-ahu30k-ch-o",
      "name": "Ortech OAH-AHU30K-CH-O",
      "seriesId": "series-ortech-mini-spilt-ducted-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-AHU30K-CH-O",
      "normalizedModelNumber": "oah-ahu30k-ch-o",
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
      "id": "model-ortech-oah-ahu48k-ch-o",
      "slug": "ortech-oah-ahu48k-ch-o",
      "name": "Ortech OAH-AHU48K-CH-O",
      "seriesId": "series-ortech-mini-spilt-ducted-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-AHU48K-CH-O",
      "normalizedModelNumber": "oah-ahu48k-ch-o",
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
      "id": "model-ortech-oah-ahu60k-ch-o",
      "slug": "ortech-oah-ahu60k-ch-o",
      "name": "Ortech OAH-AHU60K-CH-O",
      "seriesId": "series-ortech-mini-spilt-ducted-series",
      "brandId": "brand-ortech",
      "modelNumber": "OAH-AHU60K-CH-O",
      "normalizedModelNumber": "oah-ahu60k-ch-o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-ortech-oah-mz36k-208-ch-o",
      "modelNumber": "OAH-MZ36K-208-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz24k-208-ch-o",
      "modelNumber": "OAH-MZ24K-208-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz42k-208-ch-o",
      "modelNumber": "OAH-MZ42K-208-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz18k-208-ch-o",
      "modelNumber": "OAH-MZ18K-208-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz24k-208-pr-o",
      "modelNumber": "OAH-MZ24K-208-PR-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz36k-208-pr-o",
      "modelNumber": "OAH-MZ36K-208-PR-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz18k-208-pr-o",
      "modelNumber": "OAH-MZ18K-208-PR-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-mz42k-208-pr-o",
      "modelNumber": "OAH-MZ42K-208-PR-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-ahu18k-ch-o",
      "modelNumber": "OAH-AHU18K-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-ahu24k-ch-o",
      "modelNumber": "OAH-AHU24K-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-ahu36k-ch-o",
      "modelNumber": "OAH-AHU36K-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-ahu30k-ch-o",
      "modelNumber": "OAH-AHU30K-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-ahu48k-ch-o",
      "modelNumber": "OAH-AHU48K-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ortech-oah-ahu60k-ch-o",
      "modelNumber": "OAH-AHU60K-CH-O",
      "brandId": "brand-ortech",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-49856",
      "modelNumber": "IU-49856",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49854",
      "modelNumber": "IU-49854",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49858",
      "modelNumber": "IU-49858",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49852",
      "modelNumber": "IU-49852",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49855",
      "modelNumber": "IU-49855",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49857",
      "modelNumber": "IU-49857",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49853",
      "modelNumber": "IU-49853",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49859",
      "modelNumber": "IU-49859",
      "brandId": "brand-ortech",
      "type": "wall-single"
    },
    {
      "id": "iu-oah-ahu18k-ch-d",
      "modelNumber": "OAH-AHU18K-CH-D",
      "brandId": "brand-ortech",
      "type": "central-ducted"
    },
    {
      "id": "iu-oah-ahu24k-ch-d",
      "modelNumber": "OAH-AHU24K-CH-D",
      "brandId": "brand-ortech",
      "type": "central-ducted"
    },
    {
      "id": "iu-oah-ahu36k-ch-d",
      "modelNumber": "OAH-AHU36K-CH-D",
      "brandId": "brand-ortech",
      "type": "central-ducted"
    },
    {
      "id": "iu-oah-ahu30k-ch-d",
      "modelNumber": "OAH-AHU30K-CH-D",
      "brandId": "brand-ortech",
      "type": "central-ducted"
    },
    {
      "id": "iu-oah-ahu48k-ch-d",
      "modelNumber": "OAH-AHU48K-CH-D",
      "brandId": "brand-ortech",
      "type": "central-ducted"
    },
    {
      "id": "iu-oah-ahu60k-ch-d",
      "modelNumber": "OAH-AHU60K-CH-D",
      "brandId": "brand-ortech",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ortech-oah-mz36k-208-ch-o-iu-49856",
      "slug": "ortech-oah-mz36k-208-ch-o-iu-49856",
      "modelId": "model-ortech-oah-mz36k-208-ch-o",
      "outdoorUnitId": "ou-ortech-oah-mz36k-208-ch-o",
      "indoorUnitId": "iu-iu-49856",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz24k-208-ch-o-iu-49854",
      "slug": "ortech-oah-mz24k-208-ch-o-iu-49854",
      "modelId": "model-ortech-oah-mz24k-208-ch-o",
      "outdoorUnitId": "ou-ortech-oah-mz24k-208-ch-o",
      "indoorUnitId": "iu-iu-49854",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz42k-208-ch-o-iu-49858",
      "slug": "ortech-oah-mz42k-208-ch-o-iu-49858",
      "modelId": "model-ortech-oah-mz42k-208-ch-o",
      "outdoorUnitId": "ou-ortech-oah-mz42k-208-ch-o",
      "indoorUnitId": "iu-iu-49858",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz18k-208-ch-o-iu-49852",
      "slug": "ortech-oah-mz18k-208-ch-o-iu-49852",
      "modelId": "model-ortech-oah-mz18k-208-ch-o",
      "outdoorUnitId": "ou-ortech-oah-mz18k-208-ch-o",
      "indoorUnitId": "iu-iu-49852",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.3,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz24k-208-pr-o-iu-49855",
      "slug": "ortech-oah-mz24k-208-pr-o-iu-49855",
      "modelId": "model-ortech-oah-mz24k-208-pr-o",
      "outdoorUnitId": "ou-ortech-oah-mz24k-208-pr-o",
      "indoorUnitId": "iu-iu-49855",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz36k-208-pr-o-iu-49857",
      "slug": "ortech-oah-mz36k-208-pr-o-iu-49857",
      "modelId": "model-ortech-oah-mz36k-208-pr-o",
      "outdoorUnitId": "ou-ortech-oah-mz36k-208-pr-o",
      "indoorUnitId": "iu-iu-49857",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz18k-208-pr-o-iu-49853",
      "slug": "ortech-oah-mz18k-208-pr-o-iu-49853",
      "modelId": "model-ortech-oah-mz18k-208-pr-o",
      "outdoorUnitId": "ou-ortech-oah-mz18k-208-pr-o",
      "indoorUnitId": "iu-iu-49853",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-mz42k-208-pr-o-iu-49859",
      "slug": "ortech-oah-mz42k-208-pr-o-iu-49859",
      "modelId": "model-ortech-oah-mz42k-208-pr-o",
      "outdoorUnitId": "ou-ortech-oah-mz42k-208-pr-o",
      "indoorUnitId": "iu-iu-49859",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-ahu18k-ch-o-oah-ahu18k-ch-d",
      "slug": "ortech-oah-ahu18k-ch-o-oah-ahu18k-ch-d",
      "modelId": "model-ortech-oah-ahu18k-ch-o",
      "outdoorUnitId": "ou-ortech-oah-ahu18k-ch-o",
      "indoorUnitId": "iu-oah-ahu18k-ch-d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-ahu24k-ch-o-oah-ahu24k-ch-d",
      "slug": "ortech-oah-ahu24k-ch-o-oah-ahu24k-ch-d",
      "modelId": "model-ortech-oah-ahu24k-ch-o",
      "outdoorUnitId": "ou-ortech-oah-ahu24k-ch-o",
      "indoorUnitId": "iu-oah-ahu24k-ch-d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-ahu36k-ch-o-oah-ahu36k-ch-d",
      "slug": "ortech-oah-ahu36k-ch-o-oah-ahu36k-ch-d",
      "modelId": "model-ortech-oah-ahu36k-ch-o",
      "outdoorUnitId": "ou-ortech-oah-ahu36k-ch-o",
      "indoorUnitId": "iu-oah-ahu36k-ch-d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-ahu30k-ch-o-oah-ahu30k-ch-d",
      "slug": "ortech-oah-ahu30k-ch-o-oah-ahu30k-ch-d",
      "modelId": "model-ortech-oah-ahu30k-ch-o",
      "outdoorUnitId": "ou-ortech-oah-ahu30k-ch-o",
      "indoorUnitId": "iu-oah-ahu30k-ch-d",
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
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-ahu48k-ch-o-oah-ahu48k-ch-d",
      "slug": "ortech-oah-ahu48k-ch-o-oah-ahu48k-ch-d",
      "modelId": "model-ortech-oah-ahu48k-ch-o",
      "outdoorUnitId": "ou-ortech-oah-ahu48k-ch-o",
      "indoorUnitId": "iu-oah-ahu48k-ch-d",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ortech-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ortech-oah-ahu60k-ch-o-oah-ahu60k-ch-d",
      "slug": "ortech-oah-ahu60k-ch-o-oah-ahu60k-ch-d",
      "modelId": "model-ortech-oah-ahu60k-ch-o",
      "outdoorUnitId": "ou-ortech-oah-ahu60k-ch-o",
      "indoorUnitId": "iu-oah-ahu60k-ch-d",
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
          "sourceId": "src-ortech-epa",
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
