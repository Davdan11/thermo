import type { BrandDataset } from "../../types";

export const brand_novaDataset: BrandDataset = {
  "brand": {
    "id": "brand-nova",
    "slug": "nova",
    "name": "NOVA",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour NOVA",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-nova-epa",
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
      "id": "series-nova-t-pro",
      "slug": "nova-t-pro",
      "name": "T-Pro",
      "brandId": "brand-nova",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-Pro de NOVA",
      "imageUrl": "/images/series/nova-nova-t-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-nova-nova-he12-ext",
      "slug": "nova-nova-he12-ext",
      "name": "NOVA NOVA-HE12-EXT",
      "seriesId": "series-nova-t-pro",
      "brandId": "brand-nova",
      "modelNumber": "NOVA-HE12-EXT",
      "normalizedModelNumber": "nova-he12-ext",
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
      "id": "model-nova-nova-multi27m3",
      "slug": "nova-nova-multi27m3",
      "name": "NOVA NOVA-MULTI27M3",
      "seriesId": "series-nova-t-pro",
      "brandId": "brand-nova",
      "modelNumber": "NOVA-MULTI27M3",
      "normalizedModelNumber": "nova-multi27m3",
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
    },
    {
      "id": "model-nova-nova-he18-ext",
      "slug": "nova-nova-he18-ext",
      "name": "NOVA NOVA-HE18-EXT",
      "seriesId": "series-nova-t-pro",
      "brandId": "brand-nova",
      "modelNumber": "NOVA-HE18-EXT",
      "normalizedModelNumber": "nova-he18-ext",
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
      "id": "model-nova-nova-multi36m4",
      "slug": "nova-nova-multi36m4",
      "name": "NOVA NOVA-MULTI36M4",
      "seriesId": "series-nova-t-pro",
      "brandId": "brand-nova",
      "modelNumber": "NOVA-MULTI36M4",
      "normalizedModelNumber": "nova-multi36m4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-nova-nova-multi42m5",
      "slug": "nova-nova-multi42m5",
      "name": "NOVA NOVA-MULTI42M5",
      "seriesId": "series-nova-t-pro",
      "brandId": "brand-nova",
      "modelNumber": "NOVA-MULTI42M5",
      "normalizedModelNumber": "nova-multi42m5",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
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
      "id": "ou-nova-nova-he12-ext",
      "modelNumber": "NOVA-HE12-EXT",
      "brandId": "brand-nova",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-nova-nova-multi27m3",
      "modelNumber": "NOVA-MULTI27M3",
      "brandId": "brand-nova",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-nova-nova-he18-ext",
      "modelNumber": "NOVA-HE18-EXT",
      "brandId": "brand-nova",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-nova-nova-multi36m4",
      "modelNumber": "NOVA-MULTI36M4",
      "brandId": "brand-nova",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-nova-nova-multi42m5",
      "modelNumber": "NOVA-MULTI42M5",
      "brandId": "brand-nova",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-nova-he12-int",
      "modelNumber": "NOVA-HE12-INT",
      "brandId": "brand-nova",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49714",
      "modelNumber": "IU-49714",
      "brandId": "brand-nova",
      "type": "wall-single"
    },
    {
      "id": "iu-nova-he18-int",
      "modelNumber": "NOVA-HE18-INT",
      "brandId": "brand-nova",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49715",
      "modelNumber": "IU-49715",
      "brandId": "brand-nova",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49716",
      "modelNumber": "IU-49716",
      "brandId": "brand-nova",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-nova-nova-he12-ext-nova-he12-int",
      "slug": "nova-nova-he12-ext-nova-he12-int",
      "modelId": "model-nova-nova-he12-ext",
      "outdoorUnitId": "ou-nova-nova-he12-ext",
      "indoorUnitId": "iu-nova-he12-int",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-nova-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nova-nova-multi27m3-iu-49714",
      "slug": "nova-nova-multi27m3-iu-49714",
      "modelId": "model-nova-nova-multi27m3",
      "outdoorUnitId": "ou-nova-nova-multi27m3",
      "indoorUnitId": "iu-iu-49714",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-nova-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nova-nova-he18-ext-nova-he18-int",
      "slug": "nova-nova-he18-ext-nova-he18-int",
      "modelId": "model-nova-nova-he18-ext",
      "outdoorUnitId": "ou-nova-nova-he18-ext",
      "indoorUnitId": "iu-nova-he18-int",
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
          "sourceId": "src-nova-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nova-nova-multi36m4-iu-49715",
      "slug": "nova-nova-multi36m4-iu-49715",
      "modelId": "model-nova-nova-multi36m4",
      "outdoorUnitId": "ou-nova-nova-multi36m4",
      "indoorUnitId": "iu-iu-49715",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-nova-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-nova-nova-multi42m5-iu-49716",
      "slug": "nova-nova-multi42m5-iu-49716",
      "modelId": "model-nova-nova-multi42m5",
      "outdoorUnitId": "ou-nova-nova-multi42m5",
      "indoorUnitId": "iu-iu-49716",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-nova-epa",
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
