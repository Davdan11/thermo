import type { BrandDataset } from "../../types";

export const brand_quiltDataset: BrandDataset = {
  "brand": {
    "id": "brand-quilt",
    "slug": "quilt",
    "name": "Quilt",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Quilt",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-quilt-epa",
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
      "id": "series-quilt-quilt",
      "slug": "quilt-quilt",
      "name": "Quilt",
      "brandId": "brand-quilt",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Quilt de Quilt",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-quilt-qo1-m3z27-nc-na",
      "slug": "quilt-qo1-m3z27-nc-na",
      "name": "Quilt QO1-M3Z27-NC-NA",
      "seriesId": "series-quilt-quilt",
      "brandId": "brand-quilt",
      "modelNumber": "QO1-M3Z27-NC-NA",
      "normalizedModelNumber": "qo1-m3z27-nc-na",
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
      "id": "model-quilt-qo1-m2z18-nc-na",
      "slug": "quilt-qo1-m2z18-nc-na",
      "name": "Quilt QO1-M2Z18-NC-NA",
      "seriesId": "series-quilt-quilt",
      "brandId": "brand-quilt",
      "modelNumber": "QO1-M2Z18-NC-NA",
      "normalizedModelNumber": "qo1-m2z18-nc-na",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16000,
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
      "id": "model-quilt-qo1-m3z27-ncna",
      "slug": "quilt-qo1-m3z27-ncna",
      "name": "Quilt QO1-M3Z27-NC*NA",
      "seriesId": "series-quilt-quilt",
      "brandId": "brand-quilt",
      "modelNumber": "QO1-M3Z27-NC*NA",
      "normalizedModelNumber": "qo1-m3z27-nc*na",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
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
      "id": "ou-quilt-qo1-m3z27-nc-na",
      "modelNumber": "QO1-M3Z27-NC-NA",
      "brandId": "brand-quilt",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-quilt-qo1-m2z18-nc-na",
      "modelNumber": "QO1-M2Z18-NC-NA",
      "brandId": "brand-quilt",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-quilt-qo1-m3z27-ncna",
      "modelNumber": "QO1-M3Z27-NC*NA",
      "brandId": "brand-quilt",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-50309",
      "modelNumber": "IU-50309",
      "brandId": "brand-quilt",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50306",
      "modelNumber": "IU-50306",
      "brandId": "brand-quilt",
      "type": "wall-single"
    },
    {
      "id": "iu-qi1-m09-n-na",
      "modelNumber": "QI1-M09-N-NA",
      "brandId": "brand-quilt",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50308",
      "modelNumber": "IU-50308",
      "brandId": "brand-quilt",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-quilt-qo1-m3z27-nc-na-iu-50309",
      "slug": "quilt-qo1-m3z27-nc-na-iu-50309",
      "modelId": "model-quilt-qo1-m3z27-nc-na",
      "outdoorUnitId": "ou-quilt-qo1-m3z27-nc-na",
      "indoorUnitId": "iu-iu-50309",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-quilt-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quilt-qo1-m2z18-nc-na-iu-50306",
      "slug": "quilt-qo1-m2z18-nc-na-iu-50306",
      "modelId": "model-quilt-qo1-m2z18-nc-na",
      "outdoorUnitId": "ou-quilt-qo1-m2z18-nc-na",
      "indoorUnitId": "iu-iu-50306",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-quilt-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quilt-qo1-m2z18-nc-na-qi1-m09-n-na",
      "slug": "quilt-qo1-m2z18-nc-na-qi1-m09-n-na",
      "modelId": "model-quilt-qo1-m2z18-nc-na",
      "outdoorUnitId": "ou-quilt-qo1-m2z18-nc-na",
      "indoorUnitId": "iu-qi1-m09-n-na",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-quilt-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quilt-qo1-m3z27-ncna-iu-50308",
      "slug": "quilt-qo1-m3z27-ncna-iu-50308",
      "modelId": "model-quilt-qo1-m3z27-ncna",
      "outdoorUnitId": "ou-quilt-qo1-m3z27-ncna",
      "indoorUnitId": "iu-iu-50308",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-quilt-epa",
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
