import type { BrandDataset } from "../../types";

export const brand_american_standard_mitsubishi_electricDataset: BrandDataset = {
  "brand": {
    "id": "brand-american-standard-mitsubishi-electric",
    "slug": "american-standard-mitsubishi-electric",
    "name": "American Standard / Mitsubishi Electric",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour American Standard / Mitsubishi Electric",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-american-standard-mitsubishi-electric-epa",
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
      "id": "series-american-standard-mitsubishi-electric-nv-series",
      "slug": "american-standard-mitsubishi-electric-nv-series",
      "name": "NV-Series",
      "brandId": "brand-american-standard-mitsubishi-electric",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série NV-Series de American Standard / Mitsubishi Electric",
      "imageUrl": "/images/series/american-standard-mitsubishi-electric-american-standard-mitsubishi-electric-nv-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-american-standard-mitsubishi-electric-ntxmmx20a122c",
      "slug": "american-standard-mitsubishi-electric-ntxmmx20a122c",
      "name": "American Standard / Mitsubishi Electric NTXMMX20A122C**",
      "seriesId": "series-american-standard-mitsubishi-electric-nv-series",
      "brandId": "brand-american-standard-mitsubishi-electric",
      "modelNumber": "NTXMMX20A122C**",
      "normalizedModelNumber": "ntxmmx20a122c**",
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
      "id": "ou-american-standard-mitsubishi-electric-ntxmmx20a122c",
      "modelNumber": "NTXMMX20A122C**",
      "brandId": "brand-american-standard-mitsubishi-electric",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-40998",
      "modelNumber": "IU-40998",
      "brandId": "brand-american-standard-mitsubishi-electric",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-american-standard-mitsubishi-electric-ntxmmx20a122c-iu-40998",
      "slug": "american-standard-mitsubishi-electric-ntxmmx20a122c-iu-40998",
      "modelId": "model-american-standard-mitsubishi-electric-ntxmmx20a122c",
      "outdoorUnitId": "ou-american-standard-mitsubishi-electric-ntxmmx20a122c",
      "indoorUnitId": "iu-iu-40998",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-american-standard-mitsubishi-electric-epa",
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
