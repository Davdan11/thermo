import type { BrandDataset } from "../../types";

export const brand_aurusDataset: BrandDataset = {
  "brand": {
    "id": "brand-aurus",
    "slug": "aurus",
    "name": "AURUS",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AURUS",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-aurus-epa",
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
      "id": "series-aurus-star",
      "slug": "aurus-star",
      "name": "Star",
      "brandId": "brand-aurus",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Star de AURUS",
      "imageUrl": "/images/series/aurus-aurus-star.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-aurus-aru454-h12a2invl-us2",
      "slug": "aurus-aru454-h12a2invl-us2",
      "name": "AURUS ARU454-H12A2/INVL-US2",
      "seriesId": "series-aurus-star",
      "brandId": "brand-aurus",
      "modelNumber": "ARU454-H12A2/INVL-US2",
      "normalizedModelNumber": "aru454-h12a2/invl-us2",
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
      "id": "model-aurus-aru454-h12a1invl-us2",
      "slug": "aurus-aru454-h12a1invl-us2",
      "name": "AURUS ARU454-H12A1/INVL-US2",
      "seriesId": "series-aurus-star",
      "brandId": "brand-aurus",
      "modelNumber": "ARU454-H12A1/INVL-US2",
      "normalizedModelNumber": "aru454-h12a1/invl-us2",
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
      "id": "model-aurus-aru454-h18a2invl-us2",
      "slug": "aurus-aru454-h18a2invl-us2",
      "name": "AURUS ARU454-H18A2/INVL-US2",
      "seriesId": "series-aurus-star",
      "brandId": "brand-aurus",
      "modelNumber": "ARU454-H18A2/INVL-US2",
      "normalizedModelNumber": "aru454-h18a2/invl-us2",
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
      "id": "model-aurus-aru454-h24a2invl-us2",
      "slug": "aurus-aru454-h24a2invl-us2",
      "name": "AURUS ARU454-H24A2/INVL-US2",
      "seriesId": "series-aurus-star",
      "brandId": "brand-aurus",
      "modelNumber": "ARU454-H24A2/INVL-US2",
      "normalizedModelNumber": "aru454-h24a2/invl-us2",
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
      "id": "ou-aurus-aru454-h12a2invl-us2",
      "modelNumber": "ARU454-H12A2/INVL-US2",
      "brandId": "brand-aurus",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aurus-aru454-h12a1invl-us2",
      "modelNumber": "ARU454-H12A1/INVL-US2",
      "brandId": "brand-aurus",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aurus-aru454-h18a2invl-us2",
      "modelNumber": "ARU454-H18A2/INVL-US2",
      "brandId": "brand-aurus",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-aurus-aru454-h24a2invl-us2",
      "modelNumber": "ARU454-H24A2/INVL-US2",
      "brandId": "brand-aurus",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-aru454-h12a2invl-us2",
      "modelNumber": "ARU454-H12A2/INVL-US2",
      "brandId": "brand-aurus",
      "type": "wall-single"
    },
    {
      "id": "iu-aru454-h12a1invl-us2",
      "modelNumber": "ARU454-H12A1/INVL-US2",
      "brandId": "brand-aurus",
      "type": "wall-single"
    },
    {
      "id": "iu-aru454-h18a2invl-us2",
      "modelNumber": "ARU454-H18A2/INVL-US2",
      "brandId": "brand-aurus",
      "type": "wall-single"
    },
    {
      "id": "iu-aru454-h24a2invl-us2",
      "modelNumber": "ARU454-H24A2/INVL-US2",
      "brandId": "brand-aurus",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-aurus-aru454-h12a2invl-us2-aru454-h12a2invl-us2",
      "slug": "aurus-aru454-h12a2invl-us2-aru454-h12a2invl-us2",
      "modelId": "model-aurus-aru454-h12a2invl-us2",
      "outdoorUnitId": "ou-aurus-aru454-h12a2invl-us2",
      "indoorUnitId": "iu-aru454-h12a2invl-us2",
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
          "sourceId": "src-aurus-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aurus-aru454-h12a1invl-us2-aru454-h12a1invl-us2",
      "slug": "aurus-aru454-h12a1invl-us2-aru454-h12a1invl-us2",
      "modelId": "model-aurus-aru454-h12a1invl-us2",
      "outdoorUnitId": "ou-aurus-aru454-h12a1invl-us2",
      "indoorUnitId": "iu-aru454-h12a1invl-us2",
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
          "sourceId": "src-aurus-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aurus-aru454-h18a2invl-us2-aru454-h18a2invl-us2",
      "slug": "aurus-aru454-h18a2invl-us2-aru454-h18a2invl-us2",
      "modelId": "model-aurus-aru454-h18a2invl-us2",
      "outdoorUnitId": "ou-aurus-aru454-h18a2invl-us2",
      "indoorUnitId": "iu-aru454-h18a2invl-us2",
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
          "sourceId": "src-aurus-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aurus-aru454-h24a2invl-us2-aru454-h24a2invl-us2",
      "slug": "aurus-aru454-h24a2invl-us2-aru454-h24a2invl-us2",
      "modelId": "model-aurus-aru454-h24a2invl-us2",
      "outdoorUnitId": "ou-aurus-aru454-h24a2invl-us2",
      "indoorUnitId": "iu-aru454-h24a2invl-us2",
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
          "sourceId": "src-aurus-epa",
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
