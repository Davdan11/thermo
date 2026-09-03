import type { BrandDataset } from "../../types";

export const brand_coleman_by_johnson_controlsDataset: BrandDataset = {
  "brand": {
    "id": "brand-coleman-by-johnson-controls",
    "slug": "coleman-by-johnson-controls",
    "name": "COLEMAN BY JOHNSON CONTROLS",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour COLEMAN BY JOHNSON CONTROLS",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-coleman-by-johnson-controls-epa",
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
      "id": "series-coleman-by-johnson-controls-x-series",
      "slug": "coleman-by-johnson-controls-x-series",
      "name": "X series",
      "brandId": "brand-coleman-by-johnson-controls",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série X series de COLEMAN BY JOHNSON CONTROLS",
      "imageUrl": "/images/series/coleman-by-johnson-controls-coleman-by-johnson-controls-x-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-coleman-by-johnson-controls-dhx24csb21s",
      "slug": "coleman-by-johnson-controls-dhx24csb21s",
      "name": "COLEMAN BY JOHNSON CONTROLS DHX24CSB21S",
      "seriesId": "series-coleman-by-johnson-controls-x-series",
      "brandId": "brand-coleman-by-johnson-controls",
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
      "id": "ou-coleman-by-johnson-controls-dhx24csb21s",
      "modelNumber": "DHX24CSB21S",
      "brandId": "brand-coleman-by-johnson-controls",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhx24nwb21s",
      "modelNumber": "DHX24NWB21S",
      "brandId": "brand-coleman-by-johnson-controls",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-coleman-by-johnson-controls-dhx24csb21s-dhx24nwb21s",
      "slug": "coleman-by-johnson-controls-dhx24csb21s-dhx24nwb21s",
      "modelId": "model-coleman-by-johnson-controls-dhx24csb21s",
      "outdoorUnitId": "ou-coleman-by-johnson-controls-dhx24csb21s",
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
          "sourceId": "src-coleman-by-johnson-controls-epa",
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
