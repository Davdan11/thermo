import type { BrandDataset } from "../../types";

export const brand_ecosolarisDataset: BrandDataset = {
  "brand": {
    "id": "brand-ecosolaris",
    "slug": "ecosolaris",
    "name": "ECOSOLARIS",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ECOSOLARIS",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ecosolaris-epa",
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
      "id": "series-ecosolaris-eco-12k",
      "slug": "ecosolaris-eco-12k",
      "name": "ECO-12K",
      "brandId": "brand-ecosolaris",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ECO-12K de ECOSOLARIS",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecosolaris-eco-18k",
      "slug": "ecosolaris-eco-18k",
      "name": "ECO-18K",
      "brandId": "brand-ecosolaris",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série ECO-18K de ECOSOLARIS",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ecosolaris-eco-12k",
      "slug": "ecosolaris-eco-12k",
      "name": "ECOSOLARIS ECO-12K",
      "seriesId": "series-ecosolaris-eco-12k",
      "brandId": "brand-ecosolaris",
      "modelNumber": "ECO-12K",
      "normalizedModelNumber": "eco-12k",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12000,
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
      "id": "model-ecosolaris-eco-18k",
      "slug": "ecosolaris-eco-18k",
      "name": "ECOSOLARIS ECO-18K",
      "seriesId": "series-ecosolaris-eco-18k",
      "brandId": "brand-ecosolaris",
      "modelNumber": "ECO-18K",
      "normalizedModelNumber": "eco-18k",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17500,
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
      "id": "ou-ecosolaris-eco-12k",
      "modelNumber": "ECO-12K",
      "brandId": "brand-ecosolaris",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ecosolaris-eco-18k",
      "modelNumber": "ECO-18K",
      "brandId": "brand-ecosolaris",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-eco-12ki",
      "modelNumber": "ECO-12KI",
      "brandId": "brand-ecosolaris",
      "type": "central-ducted"
    },
    {
      "id": "iu-eco-18ki",
      "modelNumber": "ECO-18KI",
      "brandId": "brand-ecosolaris",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ecosolaris-eco-12k-eco-12ki",
      "slug": "ecosolaris-eco-12k-eco-12ki",
      "modelId": "model-ecosolaris-eco-12k",
      "outdoorUnitId": "ou-ecosolaris-eco-12k",
      "indoorUnitId": "iu-eco-12ki",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-ecosolaris-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecosolaris-eco-18k-eco-18ki",
      "slug": "ecosolaris-eco-18k-eco-18ki",
      "modelId": "model-ecosolaris-eco-18k",
      "outdoorUnitId": "ou-ecosolaris-eco-18k",
      "indoorUnitId": "iu-eco-18ki",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.55,
      "sources": [
        {
          "sourceId": "src-ecosolaris-epa",
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
