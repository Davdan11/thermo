import type { BrandDataset } from "../../types";

export const brand_supremeDataset: BrandDataset = {
  "brand": {
    "id": "brand-supreme",
    "slug": "supreme",
    "name": "SUPREME",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour SUPREME",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-supreme-epa",
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
      "id": "series-supreme-ne-t52-series",
      "slug": "supreme-ne-t52-series",
      "name": "NE-T52 series",
      "brandId": "brand-supreme",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NE-T52 series de SUPREME",
      "imageUrl": "/images/series/supreme-supreme-ne-t52-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-supreme-t55-series",
      "slug": "supreme-t55-series",
      "name": "T55 Series",
      "brandId": "brand-supreme",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T55 Series de SUPREME",
      "imageUrl": "/images/series/supreme-supreme-t55-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-supreme-ys-series",
      "slug": "supreme-ys-series",
      "name": "YS series",
      "brandId": "brand-supreme",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série YS series de SUPREME",
      "imageUrl": "/images/series/supreme-supreme-ys-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-supreme-ne-t52-supae12e",
      "slug": "supreme-ne-t52-supae12e",
      "name": "SUPREME NE-T52-SUPAE12E",
      "seriesId": "series-supreme-ne-t52-series",
      "brandId": "brand-supreme",
      "modelNumber": "NE-T52-SUPAE12E",
      "normalizedModelNumber": "ne-t52-supae12e",
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
    },
    {
      "id": "model-supreme-t55-supae12e454",
      "slug": "supreme-t55-supae12e454",
      "name": "SUPREME T55-SUPAE12E454",
      "seriesId": "series-supreme-t55-series",
      "brandId": "brand-supreme",
      "modelNumber": "T55-SUPAE12E454",
      "normalizedModelNumber": "t55-supae12e454",
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
    },
    {
      "id": "model-supreme-ys25e-12hrdn1",
      "slug": "supreme-ys25e-12hrdn1",
      "name": "SUPREME YS25E-12HRDN1",
      "seriesId": "series-supreme-ys-series",
      "brandId": "brand-supreme",
      "modelNumber": "YS25E-12HRDN1",
      "normalizedModelNumber": "ys25e-12hrdn1",
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
    },
    {
      "id": "model-supreme-ys25e-18hrdn1",
      "slug": "supreme-ys25e-18hrdn1",
      "name": "SUPREME YS25E-18HRDN1",
      "seriesId": "series-supreme-ys-series",
      "brandId": "brand-supreme",
      "modelNumber": "YS25E-18HRDN1",
      "normalizedModelNumber": "ys25e-18hrdn1",
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
      "id": "model-supreme-ne-t52-supae18e",
      "slug": "supreme-ne-t52-supae18e",
      "name": "SUPREME NE-T52-SUPAE18E",
      "seriesId": "series-supreme-ne-t52-series",
      "brandId": "brand-supreme",
      "modelNumber": "NE-T52-SUPAE18E",
      "normalizedModelNumber": "ne-t52-supae18e",
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
      "id": "model-supreme-t55-supae18e454",
      "slug": "supreme-t55-supae18e454",
      "name": "SUPREME T55-SUPAE18E454",
      "seriesId": "series-supreme-t55-series",
      "brandId": "brand-supreme",
      "modelNumber": "T55-SUPAE18E454",
      "normalizedModelNumber": "t55-supae18e454",
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
      "id": "ou-supreme-ne-t52-supae12e",
      "modelNumber": "NE-T52-SUPAE12E",
      "brandId": "brand-supreme",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-supreme-t55-supae12e454",
      "modelNumber": "T55-SUPAE12E454",
      "brandId": "brand-supreme",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-supreme-ys25e-12hrdn1",
      "modelNumber": "YS25E-12HRDN1",
      "brandId": "brand-supreme",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-supreme-ys25e-18hrdn1",
      "modelNumber": "YS25E-18HRDN1",
      "brandId": "brand-supreme",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-supreme-ne-t52-supae18e",
      "modelNumber": "NE-T52-SUPAE18E",
      "brandId": "brand-supreme",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-supreme-t55-supae18e454",
      "modelNumber": "T55-SUPAE18E454",
      "brandId": "brand-supreme",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ne-t52-supae12i",
      "modelNumber": "NE-T52-SUPAE12I*",
      "brandId": "brand-supreme",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-supae12i454",
      "modelNumber": "T55-SUPAE12I454*",
      "brandId": "brand-supreme",
      "type": "wall-single"
    },
    {
      "id": "iu-ys25e-12hrdn1",
      "modelNumber": "YS25E-12HRDN1*",
      "brandId": "brand-supreme",
      "type": "wall-single"
    },
    {
      "id": "iu-ys25e-18hrdn1",
      "modelNumber": "YS25E-18HRDN1*",
      "brandId": "brand-supreme",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-supae18i",
      "modelNumber": "NE-T52-SUPAE18I*",
      "brandId": "brand-supreme",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-supae18i454",
      "modelNumber": "T55-SUPAE18I454*",
      "brandId": "brand-supreme",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-supreme-ne-t52-supae12e-ne-t52-supae12i",
      "slug": "supreme-ne-t52-supae12e-ne-t52-supae12i",
      "modelId": "model-supreme-ne-t52-supae12e",
      "outdoorUnitId": "ou-supreme-ne-t52-supae12e",
      "indoorUnitId": "iu-ne-t52-supae12i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-supreme-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-supreme-t55-supae12e454-t55-supae12i454",
      "slug": "supreme-t55-supae12e454-t55-supae12i454",
      "modelId": "model-supreme-t55-supae12e454",
      "outdoorUnitId": "ou-supreme-t55-supae12e454",
      "indoorUnitId": "iu-t55-supae12i454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-supreme-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-supreme-ys25e-12hrdn1-ys25e-12hrdn1",
      "slug": "supreme-ys25e-12hrdn1-ys25e-12hrdn1",
      "modelId": "model-supreme-ys25e-12hrdn1",
      "outdoorUnitId": "ou-supreme-ys25e-12hrdn1",
      "indoorUnitId": "iu-ys25e-12hrdn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-supreme-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-supreme-ys25e-18hrdn1-ys25e-18hrdn1",
      "slug": "supreme-ys25e-18hrdn1-ys25e-18hrdn1",
      "modelId": "model-supreme-ys25e-18hrdn1",
      "outdoorUnitId": "ou-supreme-ys25e-18hrdn1",
      "indoorUnitId": "iu-ys25e-18hrdn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-supreme-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-supreme-ne-t52-supae18e-ne-t52-supae18i",
      "slug": "supreme-ne-t52-supae18e-ne-t52-supae18i",
      "modelId": "model-supreme-ne-t52-supae18e",
      "outdoorUnitId": "ou-supreme-ne-t52-supae18e",
      "indoorUnitId": "iu-ne-t52-supae18i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-supreme-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-supreme-t55-supae18e454-t55-supae18i454",
      "slug": "supreme-t55-supae18e454-t55-supae18i454",
      "modelId": "model-supreme-t55-supae18e454",
      "outdoorUnitId": "ou-supreme-t55-supae18e454",
      "indoorUnitId": "iu-t55-supae18i454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-supreme-epa",
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
