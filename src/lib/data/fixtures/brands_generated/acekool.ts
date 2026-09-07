import type { BrandDataset } from "../../types";

export const brand_acekoolDataset: BrandDataset = {
  "brand": {
    "id": "brand-acekool",
    "slug": "acekool",
    "name": "ACEKOOL",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ACEKOOL",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-acekool-epa",
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
      "id": "series-acekool-pro",
      "slug": "acekool-pro",
      "name": "Pro",
      "brandId": "brand-acekool",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pro de ACEKOOL",
      "imageUrl": "/images/series/acekool-acekool-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-acekool-cms9-2-pro",
      "slug": "acekool-cms9-2-pro",
      "name": "ACEKOOL CMS9-2 PRO",
      "seriesId": "series-acekool-pro",
      "brandId": "brand-acekool",
      "modelNumber": "CMS9-2 PRO",
      "normalizedModelNumber": "cms9-2 pro",
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
      "id": "model-acekool-cms12-2-pro",
      "slug": "acekool-cms12-2-pro",
      "name": "ACEKOOL CMS12-2 PRO",
      "seriesId": "series-acekool-pro",
      "brandId": "brand-acekool",
      "modelNumber": "CMS12-2 PRO",
      "normalizedModelNumber": "cms12-2 pro",
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
      "id": "model-acekool-cms9-pro",
      "slug": "acekool-cms9-pro",
      "name": "ACEKOOL CMS9 PRO",
      "seriesId": "series-acekool-pro",
      "brandId": "brand-acekool",
      "modelNumber": "CMS9 PRO",
      "normalizedModelNumber": "cms9 pro",
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
      "id": "model-acekool-cms12-pro",
      "slug": "acekool-cms12-pro",
      "name": "ACEKOOL CMS12 PRO",
      "seriesId": "series-acekool-pro",
      "brandId": "brand-acekool",
      "modelNumber": "CMS12 PRO",
      "normalizedModelNumber": "cms12 pro",
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
      "id": "model-acekool-cms18-pro",
      "slug": "acekool-cms18-pro",
      "name": "ACEKOOL CMS18 PRO",
      "seriesId": "series-acekool-pro",
      "brandId": "brand-acekool",
      "modelNumber": "CMS18 PRO",
      "normalizedModelNumber": "cms18 pro",
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
      "id": "model-acekool-cms24-pro",
      "slug": "acekool-cms24-pro",
      "name": "ACEKOOL CMS24 PRO",
      "seriesId": "series-acekool-pro",
      "brandId": "brand-acekool",
      "modelNumber": "CMS24 PRO",
      "normalizedModelNumber": "cms24 pro",
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
      "id": "ou-acekool-cms9-2-pro",
      "modelNumber": "CMS9-2 PRO",
      "brandId": "brand-acekool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acekool-cms12-2-pro",
      "modelNumber": "CMS12-2 PRO",
      "brandId": "brand-acekool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acekool-cms9-pro",
      "modelNumber": "CMS9 PRO",
      "brandId": "brand-acekool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acekool-cms12-pro",
      "modelNumber": "CMS12 PRO",
      "brandId": "brand-acekool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acekool-cms18-pro",
      "modelNumber": "CMS18 PRO",
      "brandId": "brand-acekool",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acekool-cms24-pro",
      "modelNumber": "CMS24 PRO",
      "brandId": "brand-acekool",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cms9-2-pro",
      "modelNumber": "CMS9-2 PRO",
      "brandId": "brand-acekool",
      "type": "wall-single"
    },
    {
      "id": "iu-cms12-2-pro",
      "modelNumber": "CMS12-2 PRO",
      "brandId": "brand-acekool",
      "type": "wall-single"
    },
    {
      "id": "iu-cms9-pro",
      "modelNumber": "CMS9 PRO",
      "brandId": "brand-acekool",
      "type": "wall-single"
    },
    {
      "id": "iu-cms12-pro",
      "modelNumber": "CMS12 PRO",
      "brandId": "brand-acekool",
      "type": "wall-single"
    },
    {
      "id": "iu-cms18-pro",
      "modelNumber": "CMS18 PRO",
      "brandId": "brand-acekool",
      "type": "wall-single"
    },
    {
      "id": "iu-cms24-pro",
      "modelNumber": "CMS24 PRO",
      "brandId": "brand-acekool",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-acekool-cms9-2-pro-cms9-2-pro",
      "slug": "acekool-cms9-2-pro-cms9-2-pro",
      "modelId": "model-acekool-cms9-2-pro",
      "outdoorUnitId": "ou-acekool-cms9-2-pro",
      "indoorUnitId": "iu-cms9-2-pro",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-acekool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acekool-cms12-2-pro-cms12-2-pro",
      "slug": "acekool-cms12-2-pro-cms12-2-pro",
      "modelId": "model-acekool-cms12-2-pro",
      "outdoorUnitId": "ou-acekool-cms12-2-pro",
      "indoorUnitId": "iu-cms12-2-pro",
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
          "sourceId": "src-acekool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acekool-cms9-pro-cms9-pro",
      "slug": "acekool-cms9-pro-cms9-pro",
      "modelId": "model-acekool-cms9-pro",
      "outdoorUnitId": "ou-acekool-cms9-pro",
      "indoorUnitId": "iu-cms9-pro",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-acekool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acekool-cms12-pro-cms12-pro",
      "slug": "acekool-cms12-pro-cms12-pro",
      "modelId": "model-acekool-cms12-pro",
      "outdoorUnitId": "ou-acekool-cms12-pro",
      "indoorUnitId": "iu-cms12-pro",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-acekool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acekool-cms18-pro-cms18-pro",
      "slug": "acekool-cms18-pro-cms18-pro",
      "modelId": "model-acekool-cms18-pro",
      "outdoorUnitId": "ou-acekool-cms18-pro",
      "indoorUnitId": "iu-cms18-pro",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-acekool-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acekool-cms24-pro-cms24-pro",
      "slug": "acekool-cms24-pro-cms24-pro",
      "modelId": "model-acekool-cms24-pro",
      "outdoorUnitId": "ou-acekool-cms24-pro",
      "indoorUnitId": "iu-cms24-pro",
      "minHeatingTempC": -15,
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
          "sourceId": "src-acekool-epa",
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
