import type { BrandDataset } from "../../types";

export const brand_thermofluxDataset: BrandDataset = {
  "brand": {
    "id": "brand-thermoflux",
    "slug": "thermoflux",
    "name": "THERMOFLUX",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour THERMOFLUX",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-thermoflux-epa",
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
      "id": "series-thermoflux-high-heat-free-match",
      "slug": "thermoflux-high-heat-free-match",
      "name": "High heat free match",
      "brandId": "brand-thermoflux",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série High heat free match de THERMOFLUX",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-thermoflux-high-heat-split",
      "slug": "thermoflux-high-heat-split",
      "name": "High heat split",
      "brandId": "brand-thermoflux",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série High heat split de THERMOFLUX",
      "imageUrl": "/images/series/thermoflux-thermoflux-high-heat-split.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-thermoflux-tmfx18hei2nas0u25",
      "slug": "thermoflux-tmfx18hei2nas0u25",
      "name": "THERMOFLUX TMFX18HEI2NAS0U25",
      "seriesId": "series-thermoflux-high-heat-free-match",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMFX18HEI2NAS0U25",
      "normalizedModelNumber": "tmfx18hei2nas0u25",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
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
      "id": "model-thermoflux-tmfx27hei2nas0u25",
      "slug": "thermoflux-tmfx27hei2nas0u25",
      "name": "THERMOFLUX TMFX27HEI2NAS0U25",
      "seriesId": "series-thermoflux-high-heat-free-match",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMFX27HEI2NAS0U25",
      "normalizedModelNumber": "tmfx27hei2nas0u25",
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
      "id": "model-thermoflux-tmf09hei2nao0t24",
      "slug": "thermoflux-tmf09hei2nao0t24",
      "name": "THERMOFLUX TMF09HEI2NAO0T24",
      "seriesId": "series-thermoflux-high-heat-split",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMF09HEI2NAO0T24",
      "normalizedModelNumber": "tmf09hei2nao0t24",
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
      "id": "model-thermoflux-tmf12hei2nam0t24",
      "slug": "thermoflux-tmf12hei2nam0t24",
      "name": "THERMOFLUX TMF12HEI2NAM0T24",
      "seriesId": "series-thermoflux-high-heat-split",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMF12HEI2NAM0T24",
      "normalizedModelNumber": "tmf12hei2nam0t24",
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
      "id": "model-thermoflux-tmfx36hei2nas0u25",
      "slug": "thermoflux-tmfx36hei2nas0u25",
      "name": "THERMOFLUX TMFX36HEI2NAS0U25",
      "seriesId": "series-thermoflux-high-heat-free-match",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMFX36HEI2NAS0U25",
      "normalizedModelNumber": "tmfx36hei2nas0u25",
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
      "id": "model-thermoflux-tmfx48hei2nas0u25",
      "slug": "thermoflux-tmfx48hei2nas0u25",
      "name": "THERMOFLUX TMFX48HEI2NAS0U25",
      "seriesId": "series-thermoflux-high-heat-free-match",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMFX48HEI2NAS0U25",
      "normalizedModelNumber": "tmfx48hei2nas0u25",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "model-thermoflux-tmf18hei2nam0t24",
      "slug": "thermoflux-tmf18hei2nam0t24",
      "name": "THERMOFLUX TMF18HEI2NAM0T24",
      "seriesId": "series-thermoflux-high-heat-split",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMF18HEI2NAM0T24",
      "normalizedModelNumber": "tmf18hei2nam0t24",
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
      "id": "model-thermoflux-tmf24hei2nak0t24",
      "slug": "thermoflux-tmf24hei2nak0t24",
      "name": "THERMOFLUX TMF24HEI2NAK0T24",
      "seriesId": "series-thermoflux-high-heat-split",
      "brandId": "brand-thermoflux",
      "modelNumber": "TMF24HEI2NAK0T24",
      "normalizedModelNumber": "tmf24hei2nak0t24",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-thermoflux-tmfx18hei2nas0u25",
      "modelNumber": "TMFX18HEI2NAS0U25",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmfx27hei2nas0u25",
      "modelNumber": "TMFX27HEI2NAS0U25",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmf09hei2nao0t24",
      "modelNumber": "TMF09HEI2NAO0T24",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmf12hei2nam0t24",
      "modelNumber": "TMF12HEI2NAM0T24",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmfx36hei2nas0u25",
      "modelNumber": "TMFX36HEI2NAS0U25",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmfx48hei2nas0u25",
      "modelNumber": "TMFX48HEI2NAS0U25",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmf18hei2nam0t24",
      "modelNumber": "TMF18HEI2NAM0T24",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-thermoflux-tmf24hei2nak0t24",
      "modelNumber": "TMF24HEI2NAK0T24",
      "brandId": "brand-thermoflux",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-51353",
      "modelNumber": "IU-51353",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51354",
      "modelNumber": "IU-51354",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-tmf09hei2nao0t24-in",
      "modelNumber": "TMF09HEI2NAO0T24-IN",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-tmf12hei2nam0t24-in",
      "modelNumber": "TMF12HEI2NAM0T24-IN",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51355",
      "modelNumber": "IU-51355",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51356",
      "modelNumber": "IU-51356",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-tmf18hei2nam0t24-in",
      "modelNumber": "TMF18HEI2NAM0T24-IN",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    },
    {
      "id": "iu-tmf24hei2nak0t24-in",
      "modelNumber": "TMF24HEI2NAK0T24-IN",
      "brandId": "brand-thermoflux",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-thermoflux-tmfx18hei2nas0u25-iu-51353",
      "slug": "thermoflux-tmfx18hei2nas0u25-iu-51353",
      "modelId": "model-thermoflux-tmfx18hei2nas0u25",
      "outdoorUnitId": "ou-thermoflux-tmfx18hei2nas0u25",
      "indoorUnitId": "iu-iu-51353",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmfx27hei2nas0u25-iu-51354",
      "slug": "thermoflux-tmfx27hei2nas0u25-iu-51354",
      "modelId": "model-thermoflux-tmfx27hei2nas0u25",
      "outdoorUnitId": "ou-thermoflux-tmfx27hei2nas0u25",
      "indoorUnitId": "iu-iu-51354",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmf09hei2nao0t24-tmf09hei2nao0t24-in",
      "slug": "thermoflux-tmf09hei2nao0t24-tmf09hei2nao0t24-in",
      "modelId": "model-thermoflux-tmf09hei2nao0t24",
      "outdoorUnitId": "ou-thermoflux-tmf09hei2nao0t24",
      "indoorUnitId": "iu-tmf09hei2nao0t24-in",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmf12hei2nam0t24-tmf12hei2nam0t24-in",
      "slug": "thermoflux-tmf12hei2nam0t24-tmf12hei2nam0t24-in",
      "modelId": "model-thermoflux-tmf12hei2nam0t24",
      "outdoorUnitId": "ou-thermoflux-tmf12hei2nam0t24",
      "indoorUnitId": "iu-tmf12hei2nam0t24-in",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmfx36hei2nas0u25-iu-51355",
      "slug": "thermoflux-tmfx36hei2nas0u25-iu-51355",
      "modelId": "model-thermoflux-tmfx36hei2nas0u25",
      "outdoorUnitId": "ou-thermoflux-tmfx36hei2nas0u25",
      "indoorUnitId": "iu-iu-51355",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmfx48hei2nas0u25-iu-51356",
      "slug": "thermoflux-tmfx48hei2nas0u25-iu-51356",
      "modelId": "model-thermoflux-tmfx48hei2nas0u25",
      "outdoorUnitId": "ou-thermoflux-tmfx48hei2nas0u25",
      "indoorUnitId": "iu-iu-51356",
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
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmf18hei2nam0t24-tmf18hei2nam0t24-in",
      "slug": "thermoflux-tmf18hei2nam0t24-tmf18hei2nam0t24-in",
      "modelId": "model-thermoflux-tmf18hei2nam0t24",
      "outdoorUnitId": "ou-thermoflux-tmf18hei2nam0t24",
      "indoorUnitId": "iu-tmf18hei2nam0t24-in",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-thermoflux-tmf24hei2nak0t24-tmf24hei2nak0t24-in",
      "slug": "thermoflux-tmf24hei2nak0t24-tmf24hei2nak0t24-in",
      "modelId": "model-thermoflux-tmf24hei2nak0t24",
      "outdoorUnitId": "ou-thermoflux-tmf24hei2nak0t24",
      "indoorUnitId": "iu-tmf24hei2nak0t24-in",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-thermoflux-epa",
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
