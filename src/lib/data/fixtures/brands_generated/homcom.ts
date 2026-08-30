import type { BrandDataset } from "../../types";

export const brand_homcomDataset: BrandDataset = {
  "brand": {
    "id": "brand-homcom",
    "slug": "homcom",
    "name": "HOMCOM",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour HOMCOM",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-homcom-epa",
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
      "id": "series-homcom-m-series",
      "slug": "homcom-m-series",
      "name": "M series",
      "brandId": "brand-homcom",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M series de HOMCOM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-homcom-823-089v80wt",
      "slug": "homcom-823-089v80wt",
      "name": "HOMCOM 823-089V80WT",
      "seriesId": "series-homcom-m-series",
      "brandId": "brand-homcom",
      "modelNumber": "823-089V80WT",
      "normalizedModelNumber": "823-089v80wt",
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
      "id": "model-homcom-823-089v81wt",
      "slug": "homcom-823-089v81wt",
      "name": "HOMCOM 823-089V81WT",
      "seriesId": "series-homcom-m-series",
      "brandId": "brand-homcom",
      "modelNumber": "823-089V81WT",
      "normalizedModelNumber": "823-089v81wt",
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
      "id": "model-homcom-823-089v82wt",
      "slug": "homcom-823-089v82wt",
      "name": "HOMCOM 823-089V82WT",
      "seriesId": "series-homcom-m-series",
      "brandId": "brand-homcom",
      "modelNumber": "823-089V82WT",
      "normalizedModelNumber": "823-089v82wt",
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
      "id": "model-homcom-823-093v80wt",
      "slug": "homcom-823-093v80wt",
      "name": "HOMCOM 823-093V80WT",
      "seriesId": "series-homcom-m-series",
      "brandId": "brand-homcom",
      "modelNumber": "823-093V80WT",
      "normalizedModelNumber": "823-093v80wt",
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
      "id": "model-homcom-823-093v82wt",
      "slug": "homcom-823-093v82wt",
      "name": "HOMCOM 823-093V82WT",
      "seriesId": "series-homcom-m-series",
      "brandId": "brand-homcom",
      "modelNumber": "823-093V82WT",
      "normalizedModelNumber": "823-093v82wt",
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
      "id": "model-homcom-823-093v83wt",
      "slug": "homcom-823-093v83wt",
      "name": "HOMCOM 823-093V83WT",
      "seriesId": "series-homcom-m-series",
      "brandId": "brand-homcom",
      "modelNumber": "823-093V83WT",
      "normalizedModelNumber": "823-093v83wt",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-homcom-823-089v80wt",
      "modelNumber": "823-089V80WT",
      "brandId": "brand-homcom",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-homcom-823-089v81wt",
      "modelNumber": "823-089V81WT",
      "brandId": "brand-homcom",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-homcom-823-089v82wt",
      "modelNumber": "823-089V82WT",
      "brandId": "brand-homcom",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-homcom-823-093v80wt",
      "modelNumber": "823-093V80WT",
      "brandId": "brand-homcom",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-homcom-823-093v82wt",
      "modelNumber": "823-093V82WT",
      "brandId": "brand-homcom",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-homcom-823-093v83wt",
      "modelNumber": "823-093V83WT",
      "brandId": "brand-homcom",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-823-089v80wt",
      "modelNumber": "823-089V80WT",
      "brandId": "brand-homcom",
      "type": "wall-single"
    },
    {
      "id": "iu-823-089v81wt",
      "modelNumber": "823-089V81WT",
      "brandId": "brand-homcom",
      "type": "wall-single"
    },
    {
      "id": "iu-823-089v82wt",
      "modelNumber": "823-089V82WT",
      "brandId": "brand-homcom",
      "type": "wall-single"
    },
    {
      "id": "iu-823-091v80wt",
      "modelNumber": "823-091V80WT",
      "brandId": "brand-homcom",
      "type": "wall-single"
    },
    {
      "id": "iu-823-091v82wt",
      "modelNumber": "823-091V82WT",
      "brandId": "brand-homcom",
      "type": "wall-single"
    },
    {
      "id": "iu-823-091v83wt",
      "modelNumber": "823-091V83WT",
      "brandId": "brand-homcom",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-homcom-823-089v80wt-823-089v80wt",
      "slug": "homcom-823-089v80wt-823-089v80wt",
      "modelId": "model-homcom-823-089v80wt",
      "outdoorUnitId": "ou-homcom-823-089v80wt",
      "indoorUnitId": "iu-823-089v80wt",
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
          "sourceId": "src-homcom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-homcom-823-089v81wt-823-089v81wt",
      "slug": "homcom-823-089v81wt-823-089v81wt",
      "modelId": "model-homcom-823-089v81wt",
      "outdoorUnitId": "ou-homcom-823-089v81wt",
      "indoorUnitId": "iu-823-089v81wt",
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
          "sourceId": "src-homcom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-homcom-823-089v82wt-823-089v82wt",
      "slug": "homcom-823-089v82wt-823-089v82wt",
      "modelId": "model-homcom-823-089v82wt",
      "outdoorUnitId": "ou-homcom-823-089v82wt",
      "indoorUnitId": "iu-823-089v82wt",
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
          "sourceId": "src-homcom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-homcom-823-093v80wt-823-091v80wt",
      "slug": "homcom-823-093v80wt-823-091v80wt",
      "modelId": "model-homcom-823-093v80wt",
      "outdoorUnitId": "ou-homcom-823-093v80wt",
      "indoorUnitId": "iu-823-091v80wt",
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
          "sourceId": "src-homcom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-homcom-823-093v82wt-823-091v82wt",
      "slug": "homcom-823-093v82wt-823-091v82wt",
      "modelId": "model-homcom-823-093v82wt",
      "outdoorUnitId": "ou-homcom-823-093v82wt",
      "indoorUnitId": "iu-823-091v82wt",
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
          "sourceId": "src-homcom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-homcom-823-093v83wt-823-091v83wt",
      "slug": "homcom-823-093v83wt-823-091v83wt",
      "modelId": "model-homcom-823-093v83wt",
      "outdoorUnitId": "ou-homcom-823-093v83wt",
      "indoorUnitId": "iu-823-091v83wt",
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
          "sourceId": "src-homcom-epa",
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
