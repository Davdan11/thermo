import type { BrandDataset } from "../../types";

export const brand_traneamerican_standardDataset: BrandDataset = {
  "brand": {
    "id": "brand-traneamerican-standard",
    "slug": "traneamerican-standard",
    "name": "Trane/American Standard",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Trane/American Standard",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-traneamerican-standard-epa",
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
      "id": "series-traneamerican-standard-p-series",
      "slug": "traneamerican-standard-p-series",
      "name": "P series",
      "brandId": "brand-traneamerican-standard",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série P series de Trane/American Standard",
      "imageUrl": "/images/series/traneamerican-standard-traneamerican-standard-p-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-traneamerican-standard-m-series",
      "slug": "traneamerican-standard-m-series",
      "name": "M series",
      "brandId": "brand-traneamerican-standard",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M series de Trane/American Standard",
      "imageUrl": "/images/series/traneamerican-standard-traneamerican-standard-m-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-traneamerican-standard-5hcl9048a1000a",
      "slug": "traneamerican-standard-5hcl9048a1000a",
      "name": "Trane/American Standard 5HCL9048A1000A*",
      "seriesId": "series-traneamerican-standard-p-series",
      "brandId": "brand-traneamerican-standard",
      "modelNumber": "5HCL9048A1000A*",
      "normalizedModelNumber": "5hcl9048a1000a*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "model-traneamerican-standard-5hcl6048a1000a",
      "slug": "traneamerican-standard-5hcl6048a1000a",
      "name": "Trane/American Standard 5HCL6048A1000A*",
      "seriesId": "series-traneamerican-standard-m-series",
      "brandId": "brand-traneamerican-standard",
      "modelNumber": "5HCL6048A1000A*",
      "normalizedModelNumber": "5hcl6048a1000a*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "ou-traneamerican-standard-5hcl9048a1000a",
      "modelNumber": "5HCL9048A1000A*",
      "brandId": "brand-traneamerican-standard",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-traneamerican-standard-5hcl6048a1000a",
      "modelNumber": "5HCL6048A1000A*",
      "brandId": "brand-traneamerican-standard",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-5tem9d06ac31sa",
      "modelNumber": "5TEM9D06AC31SA*",
      "brandId": "brand-traneamerican-standard",
      "type": "central-ducted"
    },
    {
      "id": "iu-5tem7d06ac31sa",
      "modelNumber": "5TEM7D06AC31SA*",
      "brandId": "brand-traneamerican-standard",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-traneamerican-standard-5hcl9048a1000a-5tem9d06ac31sa",
      "slug": "traneamerican-standard-5hcl9048a1000a-5tem9d06ac31sa",
      "modelId": "model-traneamerican-standard-5hcl9048a1000a",
      "outdoorUnitId": "ou-traneamerican-standard-5hcl9048a1000a",
      "indoorUnitId": "iu-5tem9d06ac31sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-traneamerican-standard-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-traneamerican-standard-5hcl6048a1000a-5tem7d06ac31sa",
      "slug": "traneamerican-standard-5hcl6048a1000a-5tem7d06ac31sa",
      "modelId": "model-traneamerican-standard-5hcl6048a1000a",
      "outdoorUnitId": "ou-traneamerican-standard-5hcl6048a1000a",
      "indoorUnitId": "iu-5tem7d06ac31sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.1,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-traneamerican-standard-epa",
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
