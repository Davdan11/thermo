import type { BrandDataset } from "../../types";

export const brand_championDataset: BrandDataset = {
  "brand": {
    "id": "brand-champion",
    "slug": "champion",
    "name": "Champion",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Champion",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-champion-epa",
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
      "id": "series-champion-x-series",
      "slug": "champion-x-series",
      "name": "X series",
      "brandId": "brand-champion",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série X series de Champion",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-champion-dhx24csb21s",
      "slug": "champion-dhx24csb21s",
      "name": "Champion DHX24CSB21S",
      "seriesId": "series-champion-x-series",
      "brandId": "brand-champion",
      "modelNumber": "DHX24CSB21S",
      "normalizedModelNumber": "dhx24csb21s",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "ou-champion-dhx24csb21s",
      "modelNumber": "DHX24CSB21S",
      "brandId": "brand-champion",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhx24nwb21s",
      "modelNumber": "DHX24NWB21S",
      "brandId": "brand-champion",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-champion-dhx24csb21s-dhx24nwb21s",
      "slug": "champion-dhx24csb21s-dhx24nwb21s",
      "modelId": "model-champion-dhx24csb21s",
      "outdoorUnitId": "ou-champion-dhx24csb21s",
      "indoorUnitId": "iu-dhx24nwb21s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-champion-epa",
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
