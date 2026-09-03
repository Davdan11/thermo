import type { BrandDataset } from "../../types";

export const brand_bhiDataset: BrandDataset = {
  "brand": {
    "id": "brand-bhi",
    "slug": "bhi",
    "name": "BHI",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour BHI",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-bhi-epa",
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
      "id": "series-bhi-smartair",
      "slug": "bhi-smartair",
      "name": "SmartAir",
      "brandId": "brand-bhi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SmartAir de BHI",
      "imageUrl": "/images/series/bhi-bhi-smartair.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-bhi-bhi-12k115v-es-us",
      "slug": "bhi-bhi-12k115v-es-us",
      "name": "BHI BHI-12K115V-ES-US",
      "seriesId": "series-bhi-smartair",
      "brandId": "brand-bhi",
      "modelNumber": "BHI-12K115V-ES-US",
      "normalizedModelNumber": "bhi-12k115v-es-us",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-bhi-bhi-12k115v-es-us",
      "modelNumber": "BHI-12K115V-ES-US",
      "brandId": "brand-bhi",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-bhi-12k115v-es-us",
      "modelNumber": "BHI-12K115V-ES-US",
      "brandId": "brand-bhi",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-bhi-bhi-12k115v-es-us-bhi-12k115v-es-us",
      "slug": "bhi-bhi-12k115v-es-us-bhi-12k115v-es-us",
      "modelId": "model-bhi-bhi-12k115v-es-us",
      "outdoorUnitId": "ou-bhi-bhi-12k115v-es-us",
      "indoorUnitId": "iu-bhi-12k115v-es-us",
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
          "sourceId": "src-bhi-epa",
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
