import type { BrandDataset } from "../../types";

export const brand_stealth_comfortDataset: BrandDataset = {
  "brand": {
    "id": "brand-stealth-comfort",
    "slug": "stealth-comfort",
    "name": "Stealth Comfort",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Stealth Comfort",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-stealth-comfort-epa",
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
      "id": "series-stealth-comfort-extreme-heat",
      "slug": "stealth-comfort-extreme-heat",
      "name": "Extreme Heat",
      "brandId": "brand-stealth-comfort",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme Heat de Stealth Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stealth-comfort-r32-extreme-heat-unitary",
      "slug": "stealth-comfort-r32-extreme-heat-unitary",
      "name": "R32 Extreme Heat Unitary",
      "brandId": "brand-stealth-comfort",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série R32 Extreme Heat Unitary de Stealth Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stealth-comfort-extreme-heat-inverter-rooftop",
      "slug": "stealth-comfort-extreme-heat-inverter-rooftop",
      "name": "Extreme Heat Inverter Rooftop",
      "brandId": "brand-stealth-comfort",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme Heat Inverter Rooftop de Stealth Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-stealth-comfort-ultra-heat-unitary-condensing-unit",
      "slug": "stealth-comfort-ultra-heat-unitary-condensing-unit",
      "name": "Ultra Heat Unitary Condensing Unit",
      "brandId": "brand-stealth-comfort",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra Heat Unitary Condensing Unit de Stealth Comfort",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-stealth-comfort-sc-27z-hh-m4b",
      "slug": "stealth-comfort-sc-27z-hh-m4b",
      "name": "Stealth Comfort SC-27Z-HH-M4B",
      "seriesId": "series-stealth-comfort-extreme-heat",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "SC-27Z-HH-M4B",
      "normalizedModelNumber": "sc-27z-hh-m4b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
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
      "id": "model-stealth-comfort-aciq-48-hp32",
      "slug": "stealth-comfort-aciq-48-hp32",
      "name": "Stealth Comfort ACIQ-48-HP32",
      "seriesId": "series-stealth-comfort-r32-extreme-heat-unitary",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "ACIQ-48-HP32",
      "normalizedModelNumber": "aciq-48-hp32",
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
      "id": "model-stealth-comfort-aciq-60-hp32",
      "slug": "stealth-comfort-aciq-60-hp32",
      "name": "Stealth Comfort ACIQ-60-HP32",
      "seriesId": "series-stealth-comfort-r32-extreme-heat-unitary",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "ACIQ-60-HP32",
      "normalizedModelNumber": "aciq-60-hp32",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
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
      "id": "model-stealth-comfort-aciq-36-hp32",
      "slug": "stealth-comfort-aciq-36-hp32",
      "name": "Stealth Comfort ACIQ-36-HP32",
      "seriesId": "series-stealth-comfort-r32-extreme-heat-unitary",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "ACIQ-36-HP32",
      "normalizedModelNumber": "aciq-36-hp32",
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
      "id": "model-stealth-comfort-aciq-24-hp32",
      "slug": "stealth-comfort-aciq-24-hp32",
      "name": "Stealth Comfort ACIQ-24-HP32",
      "seriesId": "series-stealth-comfort-r32-extreme-heat-unitary",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "ACIQ-24-HP32",
      "normalizedModelNumber": "aciq-24-hp32",
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
      "id": "model-stealth-comfort-aciq-phh1748000k000v",
      "slug": "stealth-comfort-aciq-phh1748000k000v",
      "name": "Stealth Comfort ACIQ-PHH1748000K000V",
      "seriesId": "series-stealth-comfort-extreme-heat-inverter-rooftop",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "ACIQ-PHH1748000K000V",
      "normalizedModelNumber": "aciq-phh1748000k000v",
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
      "id": "model-stealth-comfort-sc-2436-hp",
      "slug": "stealth-comfort-sc-2436-hp",
      "name": "Stealth Comfort SC-2436-HP",
      "seriesId": "series-stealth-comfort-ultra-heat-unitary-condensing-unit",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "SC-2436-HP",
      "normalizedModelNumber": "sc-2436-hp",
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
      "id": "model-stealth-comfort-aciq-phh1760000k000v",
      "slug": "stealth-comfort-aciq-phh1760000k000v",
      "name": "Stealth Comfort ACIQ-PHH1760000K000V",
      "seriesId": "series-stealth-comfort-extreme-heat-inverter-rooftop",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "ACIQ-PHH1760000K000V",
      "normalizedModelNumber": "aciq-phh1760000k000v",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56000,
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
      "id": "model-stealth-comfort-sc-4860-hp",
      "slug": "stealth-comfort-sc-4860-hp",
      "name": "Stealth Comfort SC-4860-HP",
      "seriesId": "series-stealth-comfort-ultra-heat-unitary-condensing-unit",
      "brandId": "brand-stealth-comfort",
      "modelNumber": "SC-4860-HP",
      "normalizedModelNumber": "sc-4860-hp",
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
      "id": "ou-stealth-comfort-sc-27z-hh-m4b",
      "modelNumber": "SC-27Z-HH-M4B",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-comfort-aciq-48-hp32",
      "modelNumber": "ACIQ-48-HP32",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-stealth-comfort-aciq-60-hp32",
      "modelNumber": "ACIQ-60-HP32",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-stealth-comfort-aciq-36-hp32",
      "modelNumber": "ACIQ-36-HP32",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-stealth-comfort-aciq-24-hp32",
      "modelNumber": "ACIQ-24-HP32",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-stealth-comfort-aciq-phh1748000k000v",
      "modelNumber": "ACIQ-PHH1748000K000V",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-comfort-sc-2436-hp",
      "modelNumber": "SC-2436-HP",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-comfort-aciq-phh1760000k000v",
      "modelNumber": "ACIQ-PHH1760000K000V",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-stealth-comfort-sc-4860-hp",
      "modelNumber": "SC-4860-HP",
      "brandId": "brand-stealth-comfort",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-51137",
      "modelNumber": "IU-51137",
      "brandId": "brand-stealth-comfort",
      "type": "wall-single"
    },
    {
      "id": "iu-aciq-48-ah32",
      "modelNumber": "ACIQ-48-AH32",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-60-ah32",
      "modelNumber": "ACIQ-60-AH32",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-36-ah32",
      "modelNumber": "ACIQ-36-AH32",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-aciq-24-ah32",
      "modelNumber": "ACIQ-24-AH32",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34742",
      "modelNumber": "IU-34742",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-24-ah",
      "modelNumber": "SC-24-AH",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-34743",
      "modelNumber": "IU-34743",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-48-ah",
      "modelNumber": "SC-48-AH",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-36-ah",
      "modelNumber": "SC-36-AH",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    },
    {
      "id": "iu-sc-60-ah",
      "modelNumber": "SC-60-AH",
      "brandId": "brand-stealth-comfort",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-stealth-comfort-sc-27z-hh-m4b-iu-51137",
      "slug": "stealth-comfort-sc-27z-hh-m4b-iu-51137",
      "modelId": "model-stealth-comfort-sc-27z-hh-m4b",
      "outdoorUnitId": "ou-stealth-comfort-sc-27z-hh-m4b",
      "indoorUnitId": "iu-iu-51137",
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
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-aciq-48-hp32-aciq-48-ah32",
      "slug": "stealth-comfort-aciq-48-hp32-aciq-48-ah32",
      "modelId": "model-stealth-comfort-aciq-48-hp32",
      "outdoorUnitId": "ou-stealth-comfort-aciq-48-hp32",
      "indoorUnitId": "iu-aciq-48-ah32",
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
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-aciq-60-hp32-aciq-60-ah32",
      "slug": "stealth-comfort-aciq-60-hp32-aciq-60-ah32",
      "modelId": "model-stealth-comfort-aciq-60-hp32",
      "outdoorUnitId": "ou-stealth-comfort-aciq-60-hp32",
      "indoorUnitId": "iu-aciq-60-ah32",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-aciq-36-hp32-aciq-36-ah32",
      "slug": "stealth-comfort-aciq-36-hp32-aciq-36-ah32",
      "modelId": "model-stealth-comfort-aciq-36-hp32",
      "outdoorUnitId": "ou-stealth-comfort-aciq-36-hp32",
      "indoorUnitId": "iu-aciq-36-ah32",
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
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-aciq-24-hp32-aciq-24-ah32",
      "slug": "stealth-comfort-aciq-24-hp32-aciq-24-ah32",
      "modelId": "model-stealth-comfort-aciq-24-hp32",
      "outdoorUnitId": "ou-stealth-comfort-aciq-24-hp32",
      "indoorUnitId": "iu-aciq-24-ah32",
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
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-aciq-phh1748000k000v-iu-34742",
      "slug": "stealth-comfort-aciq-phh1748000k000v-iu-34742",
      "modelId": "model-stealth-comfort-aciq-phh1748000k000v",
      "outdoorUnitId": "ou-stealth-comfort-aciq-phh1748000k000v",
      "indoorUnitId": "iu-iu-34742",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-sc-2436-hp-sc-24-ah",
      "slug": "stealth-comfort-sc-2436-hp-sc-24-ah",
      "modelId": "model-stealth-comfort-sc-2436-hp",
      "outdoorUnitId": "ou-stealth-comfort-sc-2436-hp",
      "indoorUnitId": "iu-sc-24-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-aciq-phh1760000k000v-iu-34743",
      "slug": "stealth-comfort-aciq-phh1760000k000v-iu-34743",
      "modelId": "model-stealth-comfort-aciq-phh1760000k000v",
      "outdoorUnitId": "ou-stealth-comfort-aciq-phh1760000k000v",
      "indoorUnitId": "iu-iu-34743",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-sc-4860-hp-sc-48-ah",
      "slug": "stealth-comfort-sc-4860-hp-sc-48-ah",
      "modelId": "model-stealth-comfort-sc-4860-hp",
      "outdoorUnitId": "ou-stealth-comfort-sc-4860-hp",
      "indoorUnitId": "iu-sc-48-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-sc-2436-hp-sc-36-ah",
      "slug": "stealth-comfort-sc-2436-hp-sc-36-ah",
      "modelId": "model-stealth-comfort-sc-2436-hp",
      "outdoorUnitId": "ou-stealth-comfort-sc-2436-hp",
      "indoorUnitId": "iu-sc-36-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-stealth-comfort-sc-4860-hp-sc-60-ah",
      "slug": "stealth-comfort-sc-4860-hp-sc-60-ah",
      "modelId": "model-stealth-comfort-sc-4860-hp",
      "outdoorUnitId": "ou-stealth-comfort-sc-4860-hp",
      "indoorUnitId": "iu-sc-60-ah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-stealth-comfort-epa",
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
