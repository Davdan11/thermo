import type { BrandDataset } from "../../types";

export const brand_ductlessaireDataset: BrandDataset = {
  "brand": {
    "id": "brand-ductlessaire",
    "slug": "ductlessaire",
    "name": "DUCTLESSAIRE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DUCTLESSAIRE",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ductlessaire-epa",
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
      "id": "series-ductlessaire-454-series",
      "slug": "ductlessaire-454-series",
      "name": "454 Series",
      "brandId": "brand-ductlessaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 454 Series de DUCTLESSAIRE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ductlessaire-da-series",
      "slug": "ductlessaire-da-series",
      "name": "DA series",
      "brandId": "brand-ductlessaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DA series de DUCTLESSAIRE",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ductlessaire-454-09-o-da",
      "slug": "ductlessaire-454-09-o-da",
      "name": "DUCTLESSAIRE 454-09-O-DA",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-09-O-DA",
      "normalizedModelNumber": "454-09-o-da",
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
      "id": "model-ductlessaire-454-9-o-da",
      "slug": "ductlessaire-454-9-o-da",
      "name": "DUCTLESSAIRE 454-9-O-DA",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-9-O-DA",
      "normalizedModelNumber": "454-9-o-da",
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
      "id": "model-ductlessaire-da0921-h2-o",
      "slug": "ductlessaire-da0921-h2-o",
      "name": "DUCTLESSAIRE DA0921-H2-O*",
      "seriesId": "series-ductlessaire-da-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "DA0921-H2-O*",
      "normalizedModelNumber": "da0921-h2-o*",
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
      "id": "model-ductlessaire-454-18-o-da",
      "slug": "ductlessaire-454-18-o-da",
      "name": "DUCTLESSAIRE 454-18-O-DA",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-18-O-DA",
      "normalizedModelNumber": "454-18-o-da",
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
      "id": "model-ductlessaire-da1821-h2-o",
      "slug": "ductlessaire-da1821-h2-o",
      "name": "DUCTLESSAIRE DA1821-H2-O*",
      "seriesId": "series-ductlessaire-da-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "DA1821-H2-O*",
      "normalizedModelNumber": "da1821-h2-o*",
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
      "id": "model-ductlessaire-da1221-h2-o",
      "slug": "ductlessaire-da1221-h2-o",
      "name": "DUCTLESSAIRE DA1221-H2-O*",
      "seriesId": "series-ductlessaire-da-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "DA1221-H2-O*",
      "normalizedModelNumber": "da1221-h2-o*",
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
      "id": "model-ductlessaire-454-36-5z-o",
      "slug": "ductlessaire-454-36-5z-o",
      "name": "DUCTLESSAIRE 454-36-5Z-O",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-36-5Z-O",
      "normalizedModelNumber": "454-36-5z-o",
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
      "id": "model-ductlessaire-454-12-o-da",
      "slug": "ductlessaire-454-12-o-da",
      "name": "DUCTLESSAIRE 454-12-O-DA",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-12-O-DA",
      "normalizedModelNumber": "454-12-o-da",
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
      "id": "model-ductlessaire-454-28-4z-o",
      "slug": "ductlessaire-454-28-4z-o",
      "name": "DUCTLESSAIRE 454-28-4Z-O",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-28-4Z-O",
      "normalizedModelNumber": "454-28-4z-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26600,
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
      "id": "model-ductlessaire-da27-4z-o",
      "slug": "ductlessaire-da27-4z-o",
      "name": "DUCTLESSAIRE DA27-4Z-O",
      "seriesId": "series-ductlessaire-da-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "DA27-4Z-O",
      "normalizedModelNumber": "da27-4z-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26600,
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
      "id": "model-ductlessaire-454-48-6z-o",
      "slug": "ductlessaire-454-48-6z-o",
      "name": "DUCTLESSAIRE 454-48-6Z-O",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-48-6Z-O",
      "normalizedModelNumber": "454-48-6z-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-ductlessaire-454-24-o-da",
      "slug": "ductlessaire-454-24-o-da",
      "name": "DUCTLESSAIRE 454-24-O-DA",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-24-O-DA",
      "normalizedModelNumber": "454-24-o-da",
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
      "id": "model-ductlessaire-454-24-o-ps",
      "slug": "ductlessaire-454-24-o-ps",
      "name": "DUCTLESSAIRE 454-24-O-PS",
      "seriesId": "series-ductlessaire-454-series",
      "brandId": "brand-ductlessaire",
      "modelNumber": "454-24-O-PS",
      "normalizedModelNumber": "454-24-o-ps",
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
      "id": "ou-ductlessaire-454-09-o-da",
      "modelNumber": "454-09-O-DA",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-454-9-o-da",
      "modelNumber": "454-9-O-DA",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-da0921-h2-o",
      "modelNumber": "DA0921-H2-O*",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ductlessaire-454-18-o-da",
      "modelNumber": "454-18-O-DA",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-da1821-h2-o",
      "modelNumber": "DA1821-H2-O*",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ductlessaire-da1221-h2-o",
      "modelNumber": "DA1221-H2-O*",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ductlessaire-454-36-5z-o",
      "modelNumber": "454-36-5Z-O",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-454-12-o-da",
      "modelNumber": "454-12-O-DA",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-454-28-4z-o",
      "modelNumber": "454-28-4Z-O",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-da27-4z-o",
      "modelNumber": "DA27-4Z-O",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-454-48-6z-o",
      "modelNumber": "454-48-6Z-O",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-454-24-o-da",
      "modelNumber": "454-24-O-DA",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ductlessaire-454-24-o-ps",
      "modelNumber": "454-24-O-PS",
      "brandId": "brand-ductlessaire",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-454-09-i-da",
      "modelNumber": "454-09-I-DA",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-454-9-i-da",
      "modelNumber": "454-9-I-DA",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-da0921-h2-i",
      "modelNumber": "DA0921-H2-I*",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-454-18-i-da",
      "modelNumber": "454-18-I-DA",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-da1821-h2-i",
      "modelNumber": "DA1821-H2-I*",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-da1221-h2-i",
      "modelNumber": "DA1221-H2-I*",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43842",
      "modelNumber": "IU-43842",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-454-12-i-da",
      "modelNumber": "454-12-I-DA",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43841",
      "modelNumber": "IU-43841",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43848",
      "modelNumber": "IU-43848",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43843",
      "modelNumber": "IU-43843",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-454-24-i-da",
      "modelNumber": "454-24-I-DA",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-454-24-i-ps",
      "modelNumber": "454-24-I-PS",
      "brandId": "brand-ductlessaire",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-ductlessaire-454-09-o-da-454-09-i-da",
      "slug": "ductlessaire-454-09-o-da-454-09-i-da",
      "modelId": "model-ductlessaire-454-09-o-da",
      "outdoorUnitId": "ou-ductlessaire-454-09-o-da",
      "indoorUnitId": "iu-454-09-i-da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-9-o-da-454-9-i-da",
      "slug": "ductlessaire-454-9-o-da-454-9-i-da",
      "modelId": "model-ductlessaire-454-9-o-da",
      "outdoorUnitId": "ou-ductlessaire-454-9-o-da",
      "indoorUnitId": "iu-454-9-i-da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-da0921-h2-o-da0921-h2-i",
      "slug": "ductlessaire-da0921-h2-o-da0921-h2-i",
      "modelId": "model-ductlessaire-da0921-h2-o",
      "outdoorUnitId": "ou-ductlessaire-da0921-h2-o",
      "indoorUnitId": "iu-da0921-h2-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-18-o-da-454-18-i-da",
      "slug": "ductlessaire-454-18-o-da-454-18-i-da",
      "modelId": "model-ductlessaire-454-18-o-da",
      "outdoorUnitId": "ou-ductlessaire-454-18-o-da",
      "indoorUnitId": "iu-454-18-i-da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 11.9,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-da1821-h2-o-da1821-h2-i",
      "slug": "ductlessaire-da1821-h2-o-da1821-h2-i",
      "modelId": "model-ductlessaire-da1821-h2-o",
      "outdoorUnitId": "ou-ductlessaire-da1821-h2-o",
      "indoorUnitId": "iu-da1821-h2-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-da1221-h2-o-da1221-h2-i",
      "slug": "ductlessaire-da1221-h2-o-da1221-h2-i",
      "modelId": "model-ductlessaire-da1221-h2-o",
      "outdoorUnitId": "ou-ductlessaire-da1221-h2-o",
      "indoorUnitId": "iu-da1221-h2-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-36-5z-o-iu-43842",
      "slug": "ductlessaire-454-36-5z-o-iu-43842",
      "modelId": "model-ductlessaire-454-36-5z-o",
      "outdoorUnitId": "ou-ductlessaire-454-36-5z-o",
      "indoorUnitId": "iu-iu-43842",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-12-o-da-454-12-i-da",
      "slug": "ductlessaire-454-12-o-da-454-12-i-da",
      "modelId": "model-ductlessaire-454-12-o-da",
      "outdoorUnitId": "ou-ductlessaire-454-12-o-da",
      "indoorUnitId": "iu-454-12-i-da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-28-4z-o-iu-43841",
      "slug": "ductlessaire-454-28-4z-o-iu-43841",
      "modelId": "model-ductlessaire-454-28-4z-o",
      "outdoorUnitId": "ou-ductlessaire-454-28-4z-o",
      "indoorUnitId": "iu-iu-43841",
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
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-da27-4z-o-iu-43848",
      "slug": "ductlessaire-da27-4z-o-iu-43848",
      "modelId": "model-ductlessaire-da27-4z-o",
      "outdoorUnitId": "ou-ductlessaire-da27-4z-o",
      "indoorUnitId": "iu-iu-43848",
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
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-48-6z-o-iu-43843",
      "slug": "ductlessaire-454-48-6z-o-iu-43843",
      "modelId": "model-ductlessaire-454-48-6z-o",
      "outdoorUnitId": "ou-ductlessaire-454-48-6z-o",
      "indoorUnitId": "iu-iu-43843",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-24-o-da-454-24-i-da",
      "slug": "ductlessaire-454-24-o-da-454-24-i-da",
      "modelId": "model-ductlessaire-454-24-o-da",
      "outdoorUnitId": "ou-ductlessaire-454-24-o-da",
      "indoorUnitId": "iu-454-24-i-da",
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
          "sourceId": "src-ductlessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ductlessaire-454-24-o-ps-454-24-i-ps",
      "slug": "ductlessaire-454-24-o-ps-454-24-i-ps",
      "modelId": "model-ductlessaire-454-24-o-ps",
      "outdoorUnitId": "ou-ductlessaire-454-24-o-ps",
      "indoorUnitId": "iu-454-24-i-ps",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ductlessaire-epa",
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
