import type { BrandDataset } from "../../types";

export const brand_vinoDataset: BrandDataset = {
  "brand": {
    "id": "brand-vino",
    "slug": "vino",
    "name": "VINO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour VINO",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-vino-epa",
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
      "id": "series-vino-nora",
      "slug": "vino-nora",
      "name": "Nora",
      "brandId": "brand-vino",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Nora de VINO",
      "imageUrl": "/images/series/vino-vino-nora.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-vino-vshp",
      "slug": "vino-vshp",
      "name": "VSHP",
      "brandId": "brand-vino",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série VSHP de VINO",
      "imageUrl": "/images/series/vino-vino-vshp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-vino-vmh12a3-va1b3nbo",
      "slug": "vino-vmh12a3-va1b3nbo",
      "name": "VINO VMH12A3-VA1B3NB(O)",
      "seriesId": "series-vino-nora",
      "brandId": "brand-vino",
      "modelNumber": "VMH12A3-VA1B3NB(O)",
      "normalizedModelNumber": "vmh12a3-va1b3nb(o)",
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
      "id": "model-vino-vmh24a5-va1b3nbo",
      "slug": "vino-vmh24a5-va1b3nbo",
      "name": "VINO VMH24A5-VA1B3NB(O)",
      "seriesId": "series-vino-nora",
      "brandId": "brand-vino",
      "modelNumber": "VMH24A5-VA1B3NB(O)",
      "normalizedModelNumber": "vmh24a5-va1b3nb(o)",
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
    },
    {
      "id": "model-vino-vuh24-va6bao",
      "slug": "vino-vuh24-va6bao",
      "name": "VINO VUH24-VA6BA(O)",
      "seriesId": "series-vino-vshp",
      "brandId": "brand-vino",
      "modelNumber": "VUH24-VA6BA(O)",
      "normalizedModelNumber": "vuh24-va6ba(o)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24000,
      "zones": 1,
      "systemType": "central-ducted",
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
      "id": "model-vino-vmh18a4-va1b3nbo",
      "slug": "vino-vmh18a4-va1b3nbo",
      "name": "VINO VMH18A4-VA1B3NB(O)",
      "seriesId": "series-vino-nora",
      "brandId": "brand-vino",
      "modelNumber": "VMH18A4-VA1B3NB(O)",
      "normalizedModelNumber": "vmh18a4-va1b3nb(o)",
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
      "id": "model-vino-vuh36-va6bao",
      "slug": "vino-vuh36-va6bao",
      "name": "VINO VUH36-VA6BA(O)",
      "seriesId": "series-vino-vshp",
      "brandId": "brand-vino",
      "modelNumber": "VUH36-VA6BA(O)",
      "normalizedModelNumber": "vuh36-va6ba(o)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
      "zones": 1,
      "systemType": "central-ducted",
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
      "id": "model-vino-vuh48-va6bao",
      "slug": "vino-vuh48-va6bao",
      "name": "VINO VUH48-VA6BA(O)",
      "seriesId": "series-vino-vshp",
      "brandId": "brand-vino",
      "modelNumber": "VUH48-VA6BA(O)",
      "normalizedModelNumber": "vuh48-va6ba(o)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
      "zones": 1,
      "systemType": "central-ducted",
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
      "id": "model-vino-vuh60-va6bao",
      "slug": "vino-vuh60-va6bao",
      "name": "VINO VUH60-VA6BA(O)",
      "seriesId": "series-vino-vshp",
      "brandId": "brand-vino",
      "modelNumber": "VUH60-VA6BA(O)",
      "normalizedModelNumber": "vuh60-va6ba(o)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 52500,
      "zones": 1,
      "systemType": "central-ducted",
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
      "id": "ou-vino-vmh12a3-va1b3nbo",
      "modelNumber": "VMH12A3-VA1B3NB(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vino-vmh24a5-va1b3nbo",
      "modelNumber": "VMH24A5-VA1B3NB(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vino-vuh24-va6bao",
      "modelNumber": "VUH24-VA6BA(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vino-vmh18a4-va1b3nbo",
      "modelNumber": "VMH18A4-VA1B3NB(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vino-vuh36-va6bao",
      "modelNumber": "VUH36-VA6BA(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vino-vuh48-va6bao",
      "modelNumber": "VUH48-VA6BA(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-vino-vuh60-va6bao",
      "modelNumber": "VUH60-VA6BA(O)",
      "brandId": "brand-vino",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-vmh12a3-va1b3nbi",
      "modelNumber": "VMH12A3-VA1B3NB(I)",
      "brandId": "brand-vino",
      "type": "wall-single"
    },
    {
      "id": "iu-vmh24a5-va1b3nbi",
      "modelNumber": "VMH24A5-VA1B3NB(I)",
      "brandId": "brand-vino",
      "type": "wall-single"
    },
    {
      "id": "iu-vuh24-va6bai",
      "modelNumber": "VUH24-VA6BA(I)",
      "brandId": "brand-vino",
      "type": "central-ducted"
    },
    {
      "id": "iu-vmh18a4-va1b3nbi",
      "modelNumber": "VMH18A4-VA1B3NB(I)",
      "brandId": "brand-vino",
      "type": "wall-single"
    },
    {
      "id": "iu-vuh36-va6bai",
      "modelNumber": "VUH36-VA6BA(I)",
      "brandId": "brand-vino",
      "type": "central-ducted"
    },
    {
      "id": "iu-vuh48-va6bai",
      "modelNumber": "VUH48-VA6BA(I)",
      "brandId": "brand-vino",
      "type": "central-ducted"
    },
    {
      "id": "iu-vuh60-va6bai",
      "modelNumber": "VUH60-VA6BA(I)",
      "brandId": "brand-vino",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-vino-vmh12a3-va1b3nbo-vmh12a3-va1b3nbi",
      "slug": "vino-vmh12a3-va1b3nbo-vmh12a3-va1b3nbi",
      "modelId": "model-vino-vmh12a3-va1b3nbo",
      "outdoorUnitId": "ou-vino-vmh12a3-va1b3nbo",
      "indoorUnitId": "iu-vmh12a3-va1b3nbi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-vino-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vino-vmh24a5-va1b3nbo-vmh24a5-va1b3nbi",
      "slug": "vino-vmh24a5-va1b3nbo-vmh24a5-va1b3nbi",
      "modelId": "model-vino-vmh24a5-va1b3nbo",
      "outdoorUnitId": "ou-vino-vmh24a5-va1b3nbo",
      "indoorUnitId": "iu-vmh24a5-va1b3nbi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-vino-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vino-vuh24-va6bao-vuh24-va6bai",
      "slug": "vino-vuh24-va6bao-vuh24-va6bai",
      "modelId": "model-vino-vuh24-va6bao",
      "outdoorUnitId": "ou-vino-vuh24-va6bao",
      "indoorUnitId": "iu-vuh24-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-vino-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vino-vmh18a4-va1b3nbo-vmh18a4-va1b3nbi",
      "slug": "vino-vmh18a4-va1b3nbo-vmh18a4-va1b3nbi",
      "modelId": "model-vino-vmh18a4-va1b3nbo",
      "outdoorUnitId": "ou-vino-vmh18a4-va1b3nbo",
      "indoorUnitId": "iu-vmh18a4-va1b3nbi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-vino-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vino-vuh36-va6bao-vuh36-va6bai",
      "slug": "vino-vuh36-va6bao-vuh36-va6bai",
      "modelId": "model-vino-vuh36-va6bao",
      "outdoorUnitId": "ou-vino-vuh36-va6bao",
      "indoorUnitId": "iu-vuh36-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-vino-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vino-vuh48-va6bao-vuh48-va6bai",
      "slug": "vino-vuh48-va6bao-vuh48-va6bai",
      "modelId": "model-vino-vuh48-va6bao",
      "outdoorUnitId": "ou-vino-vuh48-va6bao",
      "indoorUnitId": "iu-vuh48-va6bai",
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
          "sourceId": "src-vino-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-vino-vuh60-va6bao-vuh60-va6bai",
      "slug": "vino-vuh60-va6bao-vuh60-va6bai",
      "modelId": "model-vino-vuh60-va6bao",
      "outdoorUnitId": "ou-vino-vuh60-va6bao",
      "indoorUnitId": "iu-vuh60-va6bai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-vino-epa",
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
