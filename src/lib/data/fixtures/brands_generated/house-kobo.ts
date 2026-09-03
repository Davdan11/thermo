import type { BrandDataset } from "../../types";

export const brand_house_koboDataset: BrandDataset = {
  "brand": {
    "id": "brand-house-kobo",
    "slug": "house-kobo",
    "name": "HOUSE KOBO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour HOUSE KOBO",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-house-kobo-epa",
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
      "id": "series-house-kobo-charmo",
      "slug": "house-kobo-charmo",
      "name": "Charmo",
      "brandId": "brand-house-kobo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Charmo de HOUSE KOBO",
      "imageUrl": "/images/series/house-kobo-house-kobo-charmo.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-house-kobo-kobogwh30atexho",
      "slug": "house-kobo-kobogwh30atexho",
      "name": "HOUSE KOBO KOBOGWH30ATEXH/O",
      "seriesId": "series-house-kobo-charmo",
      "brandId": "brand-house-kobo",
      "modelNumber": "KOBOGWH30ATEXH/O",
      "normalizedModelNumber": "kobogwh30atexh/o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-house-kobo-kobogwh36atexho",
      "slug": "house-kobo-kobogwh36atexho",
      "name": "HOUSE KOBO KOBOGWH36ATEXH/O",
      "seriesId": "series-house-kobo-charmo",
      "brandId": "brand-house-kobo",
      "modelNumber": "KOBOGWH36ATEXH/O",
      "normalizedModelNumber": "kobogwh36atexh/o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
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
      "id": "ou-house-kobo-kobogwh30atexho",
      "modelNumber": "KOBOGWH30ATEXH/O",
      "brandId": "brand-house-kobo",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-house-kobo-kobogwh36atexho",
      "modelNumber": "KOBOGWH36ATEXH/O",
      "brandId": "brand-house-kobo",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-kobogwh30atexhi",
      "modelNumber": "KOBOGWH30ATEXH/I",
      "brandId": "brand-house-kobo",
      "type": "wall-single"
    },
    {
      "id": "iu-kobogwh36atexhi",
      "modelNumber": "KOBOGWH36ATEXH/I",
      "brandId": "brand-house-kobo",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-house-kobo-kobogwh30atexho-kobogwh30atexhi",
      "slug": "house-kobo-kobogwh30atexho-kobogwh30atexhi",
      "modelId": "model-house-kobo-kobogwh30atexho",
      "outdoorUnitId": "ou-house-kobo-kobogwh30atexho",
      "indoorUnitId": "iu-kobogwh30atexhi",
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
          "sourceId": "src-house-kobo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-house-kobo-kobogwh36atexho-kobogwh36atexhi",
      "slug": "house-kobo-kobogwh36atexho-kobogwh36atexhi",
      "modelId": "model-house-kobo-kobogwh36atexho",
      "outdoorUnitId": "ou-house-kobo-kobogwh36atexho",
      "indoorUnitId": "iu-kobogwh36atexhi",
      "minHeatingTempC": -25,
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
          "sourceId": "src-house-kobo-epa",
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
