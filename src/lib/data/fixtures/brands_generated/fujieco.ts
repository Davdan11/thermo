import type { BrandDataset } from "../../types";

export const brand_fujiecoDataset: BrandDataset = {
  "brand": {
    "id": "brand-fujieco",
    "slug": "fujieco",
    "name": "FUJIECO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour FUJIECO",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-fujieco-epa",
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
      "id": "series-fujieco-t-pro",
      "slug": "fujieco-t-pro",
      "name": "T-PRO",
      "brandId": "brand-fujieco",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série T-PRO de FUJIECO",
      "imageUrl": "/images/series/fujieco-fujieco-t-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-fujieco-fes-18h2tk-eso",
      "slug": "fujieco-fes-18h2tk-eso",
      "name": "FUJIECO FES-18H2TK-ES(O)",
      "seriesId": "series-fujieco-t-pro",
      "brandId": "brand-fujieco",
      "modelNumber": "FES-18H2TK-ES(O)",
      "normalizedModelNumber": "fes-18h2tk-es(o)",
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
    },
    {
      "id": "model-fujieco-fes-27h2tk-m3o",
      "slug": "fujieco-fes-27h2tk-m3o",
      "name": "FUJIECO FES-27H2TK-M3O",
      "seriesId": "series-fujieco-t-pro",
      "brandId": "brand-fujieco",
      "modelNumber": "FES-27H2TK-M3O",
      "normalizedModelNumber": "fes-27h2tk-m3o",
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
      "id": "model-fujieco-fes-36h2tk-m4o",
      "slug": "fujieco-fes-36h2tk-m4o",
      "name": "FUJIECO FES-36H2TK-M4O",
      "seriesId": "series-fujieco-t-pro",
      "brandId": "brand-fujieco",
      "modelNumber": "FES-36H2TK-M4O",
      "normalizedModelNumber": "fes-36h2tk-m4o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
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
      "id": "model-fujieco-fes-24h2tk-eso",
      "slug": "fujieco-fes-24h2tk-eso",
      "name": "FUJIECO FES-24H2TK-ES(O)",
      "seriesId": "series-fujieco-t-pro",
      "brandId": "brand-fujieco",
      "modelNumber": "FES-24H2TK-ES(O)",
      "normalizedModelNumber": "fes-24h2tk-es(o)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "ou-fujieco-fes-18h2tk-eso",
      "modelNumber": "FES-18H2TK-ES(O)",
      "brandId": "brand-fujieco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujieco-fes-27h2tk-m3o",
      "modelNumber": "FES-27H2TK-M3O",
      "brandId": "brand-fujieco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujieco-fes-36h2tk-m4o",
      "modelNumber": "FES-36H2TK-M4O",
      "brandId": "brand-fujieco",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-fujieco-fes-24h2tk-eso",
      "modelNumber": "FES-24H2TK-ES(O)",
      "brandId": "brand-fujieco",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-fes-18h2tk-esi",
      "modelNumber": "FES-18H2TK-ES(I)",
      "brandId": "brand-fujieco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44541",
      "modelNumber": "IU-44541",
      "brandId": "brand-fujieco",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44542",
      "modelNumber": "IU-44542",
      "brandId": "brand-fujieco",
      "type": "wall-single"
    },
    {
      "id": "iu-fes-24h2tk-esi",
      "modelNumber": "FES-24H2TK-ES(I)",
      "brandId": "brand-fujieco",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-fujieco-fes-18h2tk-eso-fes-18h2tk-esi",
      "slug": "fujieco-fes-18h2tk-eso-fes-18h2tk-esi",
      "modelId": "model-fujieco-fes-18h2tk-eso",
      "outdoorUnitId": "ou-fujieco-fes-18h2tk-eso",
      "indoorUnitId": "iu-fes-18h2tk-esi",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujieco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujieco-fes-27h2tk-m3o-iu-44541",
      "slug": "fujieco-fes-27h2tk-m3o-iu-44541",
      "modelId": "model-fujieco-fes-27h2tk-m3o",
      "outdoorUnitId": "ou-fujieco-fes-27h2tk-m3o",
      "indoorUnitId": "iu-iu-44541",
      "minHeatingTempC": -15,
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
          "sourceId": "src-fujieco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujieco-fes-36h2tk-m4o-iu-44542",
      "slug": "fujieco-fes-36h2tk-m4o-iu-44542",
      "modelId": "model-fujieco-fes-36h2tk-m4o",
      "outdoorUnitId": "ou-fujieco-fes-36h2tk-m4o",
      "indoorUnitId": "iu-iu-44542",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-fujieco-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-fujieco-fes-24h2tk-eso-fes-24h2tk-esi",
      "slug": "fujieco-fes-24h2tk-eso-fes-24h2tk-esi",
      "modelId": "model-fujieco-fes-24h2tk-eso",
      "outdoorUnitId": "ou-fujieco-fes-24h2tk-eso",
      "indoorUnitId": "iu-fes-24h2tk-esi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-fujieco-epa",
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
