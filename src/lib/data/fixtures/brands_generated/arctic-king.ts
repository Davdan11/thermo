import type { BrandDataset } from "../../types";

export const brand_arctic_kingDataset: BrandDataset = {
  "brand": {
    "id": "brand-arctic-king",
    "slug": "arctic-king",
    "name": "Arctic King",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Arctic King",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-arctic-king-epa",
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
      "id": "series-arctic-king-m40-series",
      "slug": "arctic-king-m40-series",
      "name": "M40 Series",
      "brandId": "brand-arctic-king",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M40 Series de Arctic King",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-arctic-king-mod-series",
      "slug": "arctic-king-mod-series",
      "name": "MOD Series",
      "brandId": "brand-arctic-king",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MOD Series de Arctic King",
      "imageUrl": "/images/series/arctic-king-arctic-king-mod-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-arctic-king-m4od30-24hfn10-m1d",
      "slug": "arctic-king-m4od30-24hfn10-m1d",
      "name": "Arctic King M4OD30-24HFN10-M1D",
      "seriesId": "series-arctic-king-m40-series",
      "brandId": "brand-arctic-king",
      "modelNumber": "M4OD30-24HFN10-M1D",
      "normalizedModelNumber": "m4od30-24hfn10-m1d",
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
      "id": "model-arctic-king-mod33-24hfn1-mt0w",
      "slug": "arctic-king-mod33-24hfn1-mt0w",
      "name": "Arctic King MOD33-24HFN1-MT0W",
      "seriesId": "series-arctic-king-mod-series",
      "brandId": "brand-arctic-king",
      "modelNumber": "MOD33-24HFN1-MT0W",
      "normalizedModelNumber": "mod33-24hfn1-mt0w",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-arctic-king-m4od30-24hfn10-m1d",
      "modelNumber": "M4OD30-24HFN10-M1D",
      "brandId": "brand-arctic-king",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-arctic-king-mod33-24hfn1-mt0w",
      "modelNumber": "MOD33-24HFN1-MT0W",
      "brandId": "brand-arctic-king",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-41275",
      "modelNumber": "IU-41275",
      "brandId": "brand-arctic-king",
      "type": "wall-single"
    },
    {
      "id": "iu-msag11d-23hrfn1-mu0w",
      "modelNumber": "MSAG11D-23HRFN1-MU0W",
      "brandId": "brand-arctic-king",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-arctic-king-m4od30-24hfn10-m1d-iu-41275",
      "slug": "arctic-king-m4od30-24hfn10-m1d-iu-41275",
      "modelId": "model-arctic-king-m4od30-24hfn10-m1d",
      "outdoorUnitId": "ou-arctic-king-m4od30-24hfn10-m1d",
      "indoorUnitId": "iu-iu-41275",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-arctic-king-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-arctic-king-mod33-24hfn1-mt0w-msag11d-23hrfn1-mu0w",
      "slug": "arctic-king-mod33-24hfn1-mt0w-msag11d-23hrfn1-mu0w",
      "modelId": "model-arctic-king-mod33-24hfn1-mt0w",
      "outdoorUnitId": "ou-arctic-king-mod33-24hfn1-mt0w",
      "indoorUnitId": "iu-msag11d-23hrfn1-mu0w",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-arctic-king-epa",
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
