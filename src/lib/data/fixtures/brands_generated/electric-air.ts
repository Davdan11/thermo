import type { BrandDataset } from "../../types";

export const brand_electric_airDataset: BrandDataset = {
  "brand": {
    "id": "brand-electric-air",
    "slug": "electric-air",
    "name": "Electric Air",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Electric Air",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-electric-air-epa",
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
      "id": "series-electric-air-redwood",
      "slug": "electric-air-redwood",
      "name": "Redwood",
      "brandId": "brand-electric-air",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Redwood de Electric Air",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-electric-air-ea-rw36dcu",
      "slug": "electric-air-ea-rw36dcu",
      "name": "Electric Air EA-RW36DCU",
      "seriesId": "series-electric-air-redwood",
      "brandId": "brand-electric-air",
      "modelNumber": "EA-RW36DCU",
      "normalizedModelNumber": "ea-rw36dcu",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "ou-electric-air-ea-rw36dcu",
      "modelNumber": "EA-RW36DCU",
      "brandId": "brand-electric-air",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ea-rw36dah",
      "modelNumber": "EA-RW36DAH",
      "brandId": "brand-electric-air",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-electric-air-ea-rw36dcu-ea-rw36dah",
      "slug": "electric-air-ea-rw36dcu-ea-rw36dah",
      "modelId": "model-electric-air-ea-rw36dcu",
      "outdoorUnitId": "ou-electric-air-ea-rw36dcu",
      "indoorUnitId": "iu-ea-rw36dah",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-electric-air-epa",
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
