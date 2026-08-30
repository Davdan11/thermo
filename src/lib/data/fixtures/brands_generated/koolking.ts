import type { BrandDataset } from "../../types";

export const brand_koolkingDataset: BrandDataset = {
  "brand": {
    "id": "brand-koolking",
    "slug": "koolking",
    "name": "Koolking",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Koolking",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-koolking-epa",
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
      "id": "series-koolking-m3o-series",
      "slug": "koolking-m3o-series",
      "name": "M3O Series",
      "brandId": "brand-koolking",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M3O Series de Koolking",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-koolking-m3of-27hfn1-m",
      "slug": "koolking-m3of-27hfn1-m",
      "name": "Koolking M3OF-27HFN1-M",
      "seriesId": "series-koolking-m3o-series",
      "brandId": "brand-koolking",
      "modelNumber": "M3OF-27HFN1-M",
      "normalizedModelNumber": "m3of-27hfn1-m",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
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
      "id": "ou-koolking-m3of-27hfn1-m",
      "modelNumber": "M3OF-27HFN1-M",
      "brandId": "brand-koolking",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-47041",
      "modelNumber": "IU-47041",
      "brandId": "brand-koolking",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-koolking-m3of-27hfn1-m-iu-47041",
      "slug": "koolking-m3of-27hfn1-m-iu-47041",
      "modelId": "model-koolking-m3of-27hfn1-m",
      "outdoorUnitId": "ou-koolking-m3of-27hfn1-m",
      "indoorUnitId": "iu-iu-47041",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-koolking-epa",
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
