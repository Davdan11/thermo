import type { BrandDataset } from "../../types";

export const brand_hemaDataset: BrandDataset = {
  "brand": {
    "id": "brand-hema",
    "slug": "hema",
    "name": "HEMA",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour HEMA",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-hema-epa",
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
      "id": "series-hema-t-pro",
      "slug": "hema-t-pro",
      "name": "T-Pro",
      "brandId": "brand-hema",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-Pro de HEMA",
      "imageUrl": "/images/series/hema-hema-t-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-hema-ds-2ms0912hc240",
      "slug": "hema-ds-2ms0912hc240",
      "name": "HEMA DS-2MS0912HC240",
      "seriesId": "series-hema-t-pro",
      "brandId": "brand-hema",
      "modelNumber": "DS-2MS0912HC240",
      "normalizedModelNumber": "ds-2ms0912hc240",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9000,
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
      "id": "model-hema-ds-2ms1212hc231",
      "slug": "hema-ds-2ms1212hc231",
      "name": "HEMA DS-2MS1212HC231",
      "seriesId": "series-hema-t-pro",
      "brandId": "brand-hema",
      "modelNumber": "DS-2MS1212HC231",
      "normalizedModelNumber": "ds-2ms1212hc231",
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
      "id": "ou-hema-ds-2ms0912hc240",
      "modelNumber": "DS-2MS0912HC240",
      "brandId": "brand-hema",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hema-ds-2ms1212hc231",
      "modelNumber": "DS-2MS1212HC231",
      "brandId": "brand-hema",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ds-2ms0912he240",
      "modelNumber": "DS-2MS0912HE240",
      "brandId": "brand-hema",
      "type": "wall-single"
    },
    {
      "id": "iu-ds-2ms1212he231",
      "modelNumber": "DS-2MS1212HE231",
      "brandId": "brand-hema",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-hema-ds-2ms0912hc240-ds-2ms0912he240",
      "slug": "hema-ds-2ms0912hc240-ds-2ms0912he240",
      "modelId": "model-hema-ds-2ms0912hc240",
      "outdoorUnitId": "ou-hema-ds-2ms0912hc240",
      "indoorUnitId": "iu-ds-2ms0912he240",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hema-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hema-ds-2ms1212hc231-ds-2ms1212he231",
      "slug": "hema-ds-2ms1212hc231-ds-2ms1212he231",
      "modelId": "model-hema-ds-2ms1212hc231",
      "outdoorUnitId": "ou-hema-ds-2ms1212hc231",
      "indoorUnitId": "iu-ds-2ms1212he231",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hema-epa",
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
