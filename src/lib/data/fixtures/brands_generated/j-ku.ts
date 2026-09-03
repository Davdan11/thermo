import type { BrandDataset } from "../../types";

export const brand_j_kuDataset: BrandDataset = {
  "brand": {
    "id": "brand-j-ku",
    "slug": "j-ku",
    "name": "J-KU",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour J-KU",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-j-ku-epa",
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
      "id": "series-j-ku-hi-multi-xtreme",
      "slug": "j-ku-hi-multi-xtreme",
      "name": "Hi MULTI Xtreme",
      "brandId": "brand-j-ku",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI Xtreme de J-KU",
      "imageUrl": "/images/series/j-ku-j-ku-hi-multi-xtreme.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-j-ku-jks-24h2hp-m3o",
      "slug": "j-ku-jks-24h2hp-m3o",
      "name": "J-KU JKS-24H2HP-M3O",
      "seriesId": "series-j-ku-hi-multi-xtreme",
      "brandId": "brand-j-ku",
      "modelNumber": "JKS-24H2HP-M3O",
      "normalizedModelNumber": "jks-24h2hp-m3o",
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
      "id": "model-j-ku-jks-18h2hp-m2o",
      "slug": "j-ku-jks-18h2hp-m2o",
      "name": "J-KU JKS-18H2HP-M2O",
      "seriesId": "series-j-ku-hi-multi-xtreme",
      "brandId": "brand-j-ku",
      "modelNumber": "JKS-18H2HP-M2O",
      "normalizedModelNumber": "jks-18h2hp-m2o",
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
      "id": "model-j-ku-jks-36h2hp-m4o",
      "slug": "j-ku-jks-36h2hp-m4o",
      "name": "J-KU JKS-36H2HP-M4O",
      "seriesId": "series-j-ku-hi-multi-xtreme",
      "brandId": "brand-j-ku",
      "modelNumber": "JKS-36H2HP-M4O",
      "normalizedModelNumber": "jks-36h2hp-m4o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "ou-j-ku-jks-24h2hp-m3o",
      "modelNumber": "JKS-24H2HP-M3O",
      "brandId": "brand-j-ku",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-j-ku-jks-18h2hp-m2o",
      "modelNumber": "JKS-18H2HP-M2O",
      "brandId": "brand-j-ku",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-j-ku-jks-36h2hp-m4o",
      "modelNumber": "JKS-36H2HP-M4O",
      "brandId": "brand-j-ku",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-46284",
      "modelNumber": "IU-46284",
      "brandId": "brand-j-ku",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46283",
      "modelNumber": "IU-46283",
      "brandId": "brand-j-ku",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46285",
      "modelNumber": "IU-46285",
      "brandId": "brand-j-ku",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-j-ku-jks-24h2hp-m3o-iu-46284",
      "slug": "j-ku-jks-24h2hp-m3o-iu-46284",
      "modelId": "model-j-ku-jks-24h2hp-m3o",
      "outdoorUnitId": "ou-j-ku-jks-24h2hp-m3o",
      "indoorUnitId": "iu-iu-46284",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.05,
      "sources": [
        {
          "sourceId": "src-j-ku-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-j-ku-jks-18h2hp-m2o-iu-46283",
      "slug": "j-ku-jks-18h2hp-m2o-iu-46283",
      "modelId": "model-j-ku-jks-18h2hp-m2o",
      "outdoorUnitId": "ou-j-ku-jks-18h2hp-m2o",
      "indoorUnitId": "iu-iu-46283",
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
          "sourceId": "src-j-ku-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-j-ku-jks-36h2hp-m4o-iu-46285",
      "slug": "j-ku-jks-36h2hp-m4o-iu-46285",
      "modelId": "model-j-ku-jks-36h2hp-m4o",
      "outdoorUnitId": "ou-j-ku-jks-36h2hp-m4o",
      "indoorUnitId": "iu-iu-46285",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-j-ku-epa",
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
