import type { BrandDataset } from "../../types";

export const brand_premium_levellaDataset: BrandDataset = {
  "brand": {
    "id": "brand-premium-levella",
    "slug": "premium-levella",
    "name": "Premium Levella",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Premium Levella",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-premium-levella-epa",
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
      "id": "series-premium-levella-piaw-series",
      "slug": "premium-levella-piaw-series",
      "name": "PIAW series",
      "brandId": "brand-premium-levella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série PIAW series de Premium Levella",
      "imageUrl": "/images/series/premium-levella-premium-levella-piaw-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-premium-levella-piacwmz-series",
      "slug": "premium-levella-piacwmz-series",
      "name": "PIACWMZ series",
      "brandId": "brand-premium-levella",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série PIACWMZ series de Premium Levella",
      "imageUrl": "/images/series/premium-levella-premium-levella-piacwmz-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-premium-levella-piaw932580b",
      "slug": "premium-levella-piaw932580b",
      "name": "Premium Levella PIAW932580B",
      "seriesId": "series-premium-levella-piaw-series",
      "brandId": "brand-premium-levella",
      "modelNumber": "PIAW932580B",
      "normalizedModelNumber": "piaw932580b",
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
      "id": "model-premium-levella-piaw1232580b",
      "slug": "premium-levella-piaw1232580b",
      "name": "Premium Levella PIAW1232580B",
      "seriesId": "series-premium-levella-piaw-series",
      "brandId": "brand-premium-levella",
      "modelNumber": "PIAW1232580B",
      "normalizedModelNumber": "piaw1232580b",
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
      "id": "model-premium-levella-piacwmz9082280b",
      "slug": "premium-levella-piacwmz9082280b",
      "name": "Premium Levella PIACWMZ9082280B",
      "seriesId": "series-premium-levella-piacwmz-series",
      "brandId": "brand-premium-levella",
      "modelNumber": "PIACWMZ9082280B",
      "normalizedModelNumber": "piacwmz9082280b",
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
      "id": "model-premium-levella-piaw2432580b",
      "slug": "premium-levella-piaw2432580b",
      "name": "Premium Levella PIAW2432580B",
      "seriesId": "series-premium-levella-piaw-series",
      "brandId": "brand-premium-levella",
      "modelNumber": "PIAW2432580B",
      "normalizedModelNumber": "piaw2432580b",
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
      "id": "model-premium-levella-piacwmz1282280b",
      "slug": "premium-levella-piacwmz1282280b",
      "name": "Premium Levella PIACWMZ1282280B",
      "seriesId": "series-premium-levella-piacwmz-series",
      "brandId": "brand-premium-levella",
      "modelNumber": "PIACWMZ1282280B",
      "normalizedModelNumber": "piacwmz1282280b",
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
      "id": "model-premium-levella-piaw1832580b",
      "slug": "premium-levella-piaw1832580b",
      "name": "Premium Levella PIAW1832580B",
      "seriesId": "series-premium-levella-piaw-series",
      "brandId": "brand-premium-levella",
      "modelNumber": "PIAW1832580B",
      "normalizedModelNumber": "piaw1832580b",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-premium-levella-piaw932580b",
      "modelNumber": "PIAW932580B",
      "brandId": "brand-premium-levella",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-premium-levella-piaw1232580b",
      "modelNumber": "PIAW1232580B",
      "brandId": "brand-premium-levella",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-premium-levella-piacwmz9082280b",
      "modelNumber": "PIACWMZ9082280B",
      "brandId": "brand-premium-levella",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-premium-levella-piaw2432580b",
      "modelNumber": "PIAW2432580B",
      "brandId": "brand-premium-levella",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-premium-levella-piacwmz1282280b",
      "modelNumber": "PIACWMZ1282280B",
      "brandId": "brand-premium-levella",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-premium-levella-piaw1832580b",
      "modelNumber": "PIAW1832580B",
      "brandId": "brand-premium-levella",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-piaw932579a",
      "modelNumber": "PIAW932579A",
      "brandId": "brand-premium-levella",
      "type": "wall-single"
    },
    {
      "id": "iu-piaw1232579a",
      "modelNumber": "PIAW1232579A",
      "brandId": "brand-premium-levella",
      "type": "wall-single"
    },
    {
      "id": "iu-piacwmz9082279a",
      "modelNumber": "PIACWMZ9082279A",
      "brandId": "brand-premium-levella",
      "type": "wall-single"
    },
    {
      "id": "iu-piaw2432579a",
      "modelNumber": "PIAW2432579A",
      "brandId": "brand-premium-levella",
      "type": "wall-single"
    },
    {
      "id": "iu-piacwmz1282279a",
      "modelNumber": "PIACWMZ1282279A",
      "brandId": "brand-premium-levella",
      "type": "wall-single"
    },
    {
      "id": "iu-piaw1832579a",
      "modelNumber": "PIAW1832579A",
      "brandId": "brand-premium-levella",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-premium-levella-piaw932580b-piaw932579a",
      "slug": "premium-levella-piaw932580b-piaw932579a",
      "modelId": "model-premium-levella-piaw932580b",
      "outdoorUnitId": "ou-premium-levella-piaw932580b",
      "indoorUnitId": "iu-piaw932579a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-premium-levella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-premium-levella-piaw1232580b-piaw1232579a",
      "slug": "premium-levella-piaw1232580b-piaw1232579a",
      "modelId": "model-premium-levella-piaw1232580b",
      "outdoorUnitId": "ou-premium-levella-piaw1232580b",
      "indoorUnitId": "iu-piaw1232579a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-premium-levella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-premium-levella-piacwmz9082280b-piacwmz9082279a",
      "slug": "premium-levella-piacwmz9082280b-piacwmz9082279a",
      "modelId": "model-premium-levella-piacwmz9082280b",
      "outdoorUnitId": "ou-premium-levella-piacwmz9082280b",
      "indoorUnitId": "iu-piacwmz9082279a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-premium-levella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-premium-levella-piaw2432580b-piaw2432579a",
      "slug": "premium-levella-piaw2432580b-piaw2432579a",
      "modelId": "model-premium-levella-piaw2432580b",
      "outdoorUnitId": "ou-premium-levella-piaw2432580b",
      "indoorUnitId": "iu-piaw2432579a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-premium-levella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-premium-levella-piacwmz1282280b-piacwmz1282279a",
      "slug": "premium-levella-piacwmz1282280b-piacwmz1282279a",
      "modelId": "model-premium-levella-piacwmz1282280b",
      "outdoorUnitId": "ou-premium-levella-piacwmz1282280b",
      "indoorUnitId": "iu-piacwmz1282279a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-premium-levella-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-premium-levella-piaw1832580b-piaw1832579a",
      "slug": "premium-levella-piaw1832580b-piaw1832579a",
      "modelId": "model-premium-levella-piaw1832580b",
      "outdoorUnitId": "ou-premium-levella-piaw1832580b",
      "indoorUnitId": "iu-piaw1832579a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-premium-levella-epa",
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
