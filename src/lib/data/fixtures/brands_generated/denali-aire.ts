import type { BrandDataset } from "../../types";

export const brand_denali_aireDataset: BrandDataset = {
  "brand": {
    "id": "brand-denali-aire",
    "slug": "denali-aire",
    "name": "DENALI AIRE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DENALI AIRE",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-denali-aire-epa",
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
      "id": "series-denali-aire-hiultra",
      "slug": "denali-aire-hiultra",
      "name": "HiULTRA",
      "brandId": "brand-denali-aire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HiULTRA de DENALI AIRE",
      "imageUrl": "/images/series/denali-aire-denali-aire-hiultra.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-denali-aire-hi-multi",
      "slug": "denali-aire-hi-multi",
      "name": "Hi MULTI",
      "brandId": "brand-denali-aire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI de DENALI AIRE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-denali-aire-2dnmshqco9a",
      "slug": "denali-aire-2dnmshqco9a",
      "name": "DENALI AIRE 2DNMSHQCO9A",
      "seriesId": "series-denali-aire-hiultra",
      "brandId": "brand-denali-aire",
      "modelNumber": "2DNMSHQCO9A",
      "normalizedModelNumber": "2dnmshqco9a",
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
      "id": "model-denali-aire-dnmshqco18",
      "slug": "denali-aire-dnmshqco18",
      "name": "DENALI AIRE DNMSHQCO18",
      "seriesId": "series-denali-aire-hi-multi",
      "brandId": "brand-denali-aire",
      "modelNumber": "DNMSHQCO18",
      "normalizedModelNumber": "dnmshqco18",
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
      "id": "model-denali-aire-2dnmshqco24",
      "slug": "denali-aire-2dnmshqco24",
      "name": "DENALI AIRE 2DNMSHQCO24",
      "seriesId": "series-denali-aire-hiultra",
      "brandId": "brand-denali-aire",
      "modelNumber": "2DNMSHQCO24",
      "normalizedModelNumber": "2dnmshqco24",
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
      "id": "model-denali-aire-2dnmshqco12a",
      "slug": "denali-aire-2dnmshqco12a",
      "name": "DENALI AIRE 2DNMSHQCO12A",
      "seriesId": "series-denali-aire-hiultra",
      "brandId": "brand-denali-aire",
      "modelNumber": "2DNMSHQCO12A",
      "normalizedModelNumber": "2dnmshqco12a",
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
      "id": "model-denali-aire-dnmshqco12a",
      "slug": "denali-aire-dnmshqco12a",
      "name": "DENALI AIRE DNMSHQCO12A",
      "seriesId": "series-denali-aire-hiultra",
      "brandId": "brand-denali-aire",
      "modelNumber": "DNMSHQCO12A",
      "normalizedModelNumber": "dnmshqco12a",
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
      "id": "model-denali-aire-2dnmshqco18",
      "slug": "denali-aire-2dnmshqco18",
      "name": "DENALI AIRE 2DNMSHQCO18",
      "seriesId": "series-denali-aire-hiultra",
      "brandId": "brand-denali-aire",
      "modelNumber": "2DNMSHQCO18",
      "normalizedModelNumber": "2dnmshqco18",
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
      "id": "model-denali-aire-dnmshqco24",
      "slug": "denali-aire-dnmshqco24",
      "name": "DENALI AIRE DNMSHQCO24",
      "seriesId": "series-denali-aire-hi-multi",
      "brandId": "brand-denali-aire",
      "modelNumber": "DNMSHQCO24",
      "normalizedModelNumber": "dnmshqco24",
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
      "id": "model-denali-aire-dnmshqco9a",
      "slug": "denali-aire-dnmshqco9a",
      "name": "DENALI AIRE DNMSHQCO9A",
      "seriesId": "series-denali-aire-hi-multi",
      "brandId": "brand-denali-aire",
      "modelNumber": "DNMSHQCO9A",
      "normalizedModelNumber": "dnmshqco9a",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-denali-aire-2dnmshqco9a",
      "modelNumber": "2DNMSHQCO9A",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-denali-aire-dnmshqco18",
      "modelNumber": "DNMSHQCO18",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-denali-aire-2dnmshqco24",
      "modelNumber": "2DNMSHQCO24",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-denali-aire-2dnmshqco12a",
      "modelNumber": "2DNMSHQCO12A",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-denali-aire-dnmshqco12a",
      "modelNumber": "DNMSHQCO12A",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-denali-aire-2dnmshqco18",
      "modelNumber": "2DNMSHQCO18",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-denali-aire-dnmshqco24",
      "modelNumber": "DNMSHQCO24",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-denali-aire-dnmshqco9a",
      "modelNumber": "DNMSHQCO9A",
      "brandId": "brand-denali-aire",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-2dnmshqcw9a",
      "modelNumber": "2DNMSHQCW9A",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-dnmshqcw18",
      "modelNumber": "DNMSHQCW18",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw24",
      "modelNumber": "2DNMSHQCW24",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw24-2",
      "modelNumber": "2DNMSHQCW24-2",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw9a-2",
      "modelNumber": "2DNMSHQCW9A-2",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw12a",
      "modelNumber": "2DNMSHQCW12A",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw12a-2",
      "modelNumber": "2DNMSHQCW12A-2",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-dnmshqcw12a",
      "modelNumber": "DNMSHQCW12A",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw18-2",
      "modelNumber": "2DNMSHQCW18-2",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-2dnmshqcw18",
      "modelNumber": "2DNMSHQCW18",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-dnmshqcw24",
      "modelNumber": "DNMSHQCW24",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    },
    {
      "id": "iu-dnmshqcw9a",
      "modelNumber": "DNMSHQCW9A",
      "brandId": "brand-denali-aire",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-denali-aire-2dnmshqco9a-2dnmshqcw9a",
      "slug": "denali-aire-2dnmshqco9a-2dnmshqcw9a",
      "modelId": "model-denali-aire-2dnmshqco9a",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco9a",
      "indoorUnitId": "iu-2dnmshqcw9a",
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
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-dnmshqco18-dnmshqcw18",
      "slug": "denali-aire-dnmshqco18-dnmshqcw18",
      "modelId": "model-denali-aire-dnmshqco18",
      "outdoorUnitId": "ou-denali-aire-dnmshqco18",
      "indoorUnitId": "iu-dnmshqcw18",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco24-2dnmshqcw24",
      "slug": "denali-aire-2dnmshqco24-2dnmshqcw24",
      "modelId": "model-denali-aire-2dnmshqco24",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco24",
      "indoorUnitId": "iu-2dnmshqcw24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco24-2dnmshqcw24-2",
      "slug": "denali-aire-2dnmshqco24-2dnmshqcw24-2",
      "modelId": "model-denali-aire-2dnmshqco24",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco24",
      "indoorUnitId": "iu-2dnmshqcw24-2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco9a-2dnmshqcw9a-2",
      "slug": "denali-aire-2dnmshqco9a-2dnmshqcw9a-2",
      "modelId": "model-denali-aire-2dnmshqco9a",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco9a",
      "indoorUnitId": "iu-2dnmshqcw9a-2",
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
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco12a-2dnmshqcw12a",
      "slug": "denali-aire-2dnmshqco12a-2dnmshqcw12a",
      "modelId": "model-denali-aire-2dnmshqco12a",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco12a",
      "indoorUnitId": "iu-2dnmshqcw12a",
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
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco12a-2dnmshqcw12a-2",
      "slug": "denali-aire-2dnmshqco12a-2dnmshqcw12a-2",
      "modelId": "model-denali-aire-2dnmshqco12a",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco12a",
      "indoorUnitId": "iu-2dnmshqcw12a-2",
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
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-dnmshqco12a-dnmshqcw12a",
      "slug": "denali-aire-dnmshqco12a-dnmshqcw12a",
      "modelId": "model-denali-aire-dnmshqco12a",
      "outdoorUnitId": "ou-denali-aire-dnmshqco12a",
      "indoorUnitId": "iu-dnmshqcw12a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco18-2dnmshqcw18-2",
      "slug": "denali-aire-2dnmshqco18-2dnmshqcw18-2",
      "modelId": "model-denali-aire-2dnmshqco18",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco18",
      "indoorUnitId": "iu-2dnmshqcw18-2",
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
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-2dnmshqco18-2dnmshqcw18",
      "slug": "denali-aire-2dnmshqco18-2dnmshqcw18",
      "modelId": "model-denali-aire-2dnmshqco18",
      "outdoorUnitId": "ou-denali-aire-2dnmshqco18",
      "indoorUnitId": "iu-2dnmshqcw18",
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
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-dnmshqco24-dnmshqcw24",
      "slug": "denali-aire-dnmshqco24-dnmshqcw24",
      "modelId": "model-denali-aire-dnmshqco24",
      "outdoorUnitId": "ou-denali-aire-dnmshqco24",
      "indoorUnitId": "iu-dnmshqcw24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-denali-aire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-denali-aire-dnmshqco9a-dnmshqcw9a",
      "slug": "denali-aire-dnmshqco9a-dnmshqcw9a",
      "modelId": "model-denali-aire-dnmshqco9a",
      "outdoorUnitId": "ou-denali-aire-dnmshqco9a",
      "indoorUnitId": "iu-dnmshqcw9a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-denali-aire-epa",
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
