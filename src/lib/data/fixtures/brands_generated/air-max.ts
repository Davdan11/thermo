import type { BrandDataset } from "../../types";

export const brand_air_maxDataset: BrandDataset = {
  "brand": {
    "id": "brand-air-max",
    "slug": "air-max",
    "name": "AIR MAX",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AIR MAX",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-air-max-epa",
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
      "id": "series-air-max-airmax-free-match",
      "slug": "air-max-airmax-free-match",
      "name": "AIRMAX Free Match",
      "brandId": "brand-air-max",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série AIRMAX Free Match de AIR MAX",
      "imageUrl": "/images/series/air-max-air-max-airmax-free-match.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-air-max-all-match",
      "slug": "air-max-all-match",
      "name": "All MATCH",
      "brandId": "brand-air-max",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série All MATCH de AIR MAX",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-air-max-afmkh18-h2",
      "slug": "air-max-afmkh18-h2",
      "name": "AIR MAX AFMKH18-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH18-H2",
      "normalizedModelNumber": "afmkh18-h2",
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
      "id": "model-air-max-afmkh24-h2",
      "slug": "air-max-afmkh24-h2",
      "name": "AIR MAX AFMKH24-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH24-H2",
      "normalizedModelNumber": "afmkh24-h2",
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
      "id": "model-air-max-afmkh30-h2",
      "slug": "air-max-afmkh30-h2",
      "name": "AIR MAX AFMKH30-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH30-H2",
      "normalizedModelNumber": "afmkh30-h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-air-max-afmkh36-h2",
      "slug": "air-max-afmkh36-h2",
      "name": "AIR MAX AFMKH36-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH36-H2",
      "normalizedModelNumber": "afmkh36-h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
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
      "id": "model-air-max-afmkh42-h2",
      "slug": "air-max-afmkh42-h2",
      "name": "AIR MAX AFMKH42-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH42-H2",
      "normalizedModelNumber": "afmkh42-h2",
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
    },
    {
      "id": "model-air-max-afmkh48-h2",
      "slug": "air-max-afmkh48-h2",
      "name": "AIR MAX AFMKH48-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH48-H2",
      "normalizedModelNumber": "afmkh48-h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "model-air-max-afmkh60-h2",
      "slug": "air-max-afmkh60-h2",
      "name": "AIR MAX AFMKH60-H2",
      "seriesId": "series-air-max-airmax-free-match",
      "brandId": "brand-air-max",
      "modelNumber": "AFMKH60-H2",
      "normalizedModelNumber": "afmkh60-h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-air-max-awgrc36-h2",
      "slug": "air-max-awgrc36-h2",
      "name": "AIR MAX AWGRC36-H2",
      "seriesId": "series-air-max-all-match",
      "brandId": "brand-air-max",
      "modelNumber": "AWGRC36-H2",
      "normalizedModelNumber": "awgrc36-h2",
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
      "id": "ou-air-max-afmkh18-h2",
      "modelNumber": "AFMKH18-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-afmkh24-h2",
      "modelNumber": "AFMKH24-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-afmkh30-h2",
      "modelNumber": "AFMKH30-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-afmkh36-h2",
      "modelNumber": "AFMKH36-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-afmkh42-h2",
      "modelNumber": "AFMKH42-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-afmkh48-h2",
      "modelNumber": "AFMKH48-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-afmkh60-h2",
      "modelNumber": "AFMKH60-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-air-max-awgrc36-h2",
      "modelNumber": "AWGRC36-H2",
      "brandId": "brand-air-max",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-40509",
      "modelNumber": "IU-40509",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40510",
      "modelNumber": "IU-40510",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40511",
      "modelNumber": "IU-40511",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40512",
      "modelNumber": "IU-40512",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40513",
      "modelNumber": "IU-40513",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40514",
      "modelNumber": "IU-40514",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40515",
      "modelNumber": "IU-40515",
      "brandId": "brand-air-max",
      "type": "wall-single"
    },
    {
      "id": "iu-awthptam36-c2",
      "modelNumber": "AWTHPTAM36-C2",
      "brandId": "brand-air-max",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-air-max-afmkh18-h2-iu-40509",
      "slug": "air-max-afmkh18-h2-iu-40509",
      "modelId": "model-air-max-afmkh18-h2",
      "outdoorUnitId": "ou-air-max-afmkh18-h2",
      "indoorUnitId": "iu-iu-40509",
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-afmkh24-h2-iu-40510",
      "slug": "air-max-afmkh24-h2-iu-40510",
      "modelId": "model-air-max-afmkh24-h2",
      "outdoorUnitId": "ou-air-max-afmkh24-h2",
      "indoorUnitId": "iu-iu-40510",
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-afmkh30-h2-iu-40511",
      "slug": "air-max-afmkh30-h2-iu-40511",
      "modelId": "model-air-max-afmkh30-h2",
      "outdoorUnitId": "ou-air-max-afmkh30-h2",
      "indoorUnitId": "iu-iu-40511",
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-afmkh36-h2-iu-40512",
      "slug": "air-max-afmkh36-h2-iu-40512",
      "modelId": "model-air-max-afmkh36-h2",
      "outdoorUnitId": "ou-air-max-afmkh36-h2",
      "indoorUnitId": "iu-iu-40512",
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-afmkh42-h2-iu-40513",
      "slug": "air-max-afmkh42-h2-iu-40513",
      "modelId": "model-air-max-afmkh42-h2",
      "outdoorUnitId": "ou-air-max-afmkh42-h2",
      "indoorUnitId": "iu-iu-40513",
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-afmkh48-h2-iu-40514",
      "slug": "air-max-afmkh48-h2-iu-40514",
      "modelId": "model-air-max-afmkh48-h2",
      "outdoorUnitId": "ou-air-max-afmkh48-h2",
      "indoorUnitId": "iu-iu-40514",
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-afmkh60-h2-iu-40515",
      "slug": "air-max-afmkh60-h2-iu-40515",
      "modelId": "model-air-max-afmkh60-h2",
      "outdoorUnitId": "ou-air-max-afmkh60-h2",
      "indoorUnitId": "iu-iu-40515",
      "minHeatingTempC": -15,
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
          "sourceId": "src-air-max-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-air-max-awgrc36-h2-awthptam36-c2",
      "slug": "air-max-awgrc36-h2-awthptam36-c2",
      "modelId": "model-air-max-awgrc36-h2",
      "outdoorUnitId": "ou-air-max-awgrc36-h2",
      "indoorUnitId": "iu-awthptam36-c2",
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
          "sourceId": "src-air-max-epa",
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
