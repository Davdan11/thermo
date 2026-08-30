import type { BrandDataset } from "../../types";

export const brand_the_heat_pumpDataset: BrandDataset = {
  "brand": {
    "id": "brand-the-heat-pump",
    "slug": "the-heat-pump",
    "name": "The Heat Pump",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour The Heat Pump",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-the-heat-pump-epa",
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
      "id": "series-the-heat-pump-e-series",
      "slug": "the-heat-pump-e-series",
      "name": "E Series",
      "brandId": "brand-the-heat-pump",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E Series de The Heat Pump",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-the-heat-pump-thp-gud60w2nhe-du",
      "slug": "the-heat-pump-thp-gud60w2nhe-du",
      "name": "The Heat Pump THP-GUD60W2/NHE-D(U)",
      "seriesId": "series-the-heat-pump-e-series",
      "brandId": "brand-the-heat-pump",
      "modelNumber": "THP-GUD60W2/NHE-D(U)",
      "normalizedModelNumber": "thp-gud60w2/nhe-d(u)",
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
      "id": "model-the-heat-pump-thp-gud36w2nhe-du",
      "slug": "the-heat-pump-thp-gud36w2nhe-du",
      "name": "The Heat Pump THP-GUD36W2/NHE-D(U)",
      "seriesId": "series-the-heat-pump-e-series",
      "brandId": "brand-the-heat-pump",
      "modelNumber": "THP-GUD36W2/NHE-D(U)",
      "normalizedModelNumber": "thp-gud36w2/nhe-d(u)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "model-the-heat-pump-thp-gud18w2nhe-du",
      "slug": "the-heat-pump-thp-gud18w2nhe-du",
      "name": "The Heat Pump THP-GUD18W2/NHE-D(U)",
      "seriesId": "series-the-heat-pump-e-series",
      "brandId": "brand-the-heat-pump",
      "modelNumber": "THP-GUD18W2/NHE-D(U)",
      "normalizedModelNumber": "thp-gud18w2/nhe-d(u)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
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
      "id": "ou-the-heat-pump-thp-gud60w2nhe-du",
      "modelNumber": "THP-GUD60W2/NHE-D(U)",
      "brandId": "brand-the-heat-pump",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-the-heat-pump-thp-gud36w2nhe-du",
      "modelNumber": "THP-GUD36W2/NHE-D(U)",
      "brandId": "brand-the-heat-pump",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-the-heat-pump-thp-gud18w2nhe-du",
      "modelNumber": "THP-GUD18W2/NHE-D(U)",
      "brandId": "brand-the-heat-pump",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-thp-gud48ah2g-du",
      "modelNumber": "THP-GUD48AH2/G-D(U)",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gud60ah2g-du",
      "modelNumber": "THP-GUD60AH2/G-D(U)",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gud36ah2g-du",
      "modelNumber": "THP-GUD36AH2/G-D(U)",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gud18ah2e-du",
      "modelNumber": "THP-GUD18AH2/E-D(U)",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gud24ah2g-du",
      "modelNumber": "THP-GUD24AH2/G-D(U)",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gcac24fnha",
      "modelNumber": "THP-GCAC24F/NHA",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gcac36fnha",
      "modelNumber": "THP-GCAC36F/NHA",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gcac60hnha",
      "modelNumber": "THP-GCAC60H/NHA",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    },
    {
      "id": "iu-thp-gcac48hnha",
      "modelNumber": "THP-GCAC48H/NHA",
      "brandId": "brand-the-heat-pump",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-the-heat-pump-thp-gud60w2nhe-du-thp-gud48ah2g-du",
      "slug": "the-heat-pump-thp-gud60w2nhe-du-thp-gud48ah2g-du",
      "modelId": "model-the-heat-pump-thp-gud60w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud60w2nhe-du",
      "indoorUnitId": "iu-thp-gud48ah2g-du",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud60w2nhe-du-thp-gud60ah2g-du",
      "slug": "the-heat-pump-thp-gud60w2nhe-du-thp-gud60ah2g-du",
      "modelId": "model-the-heat-pump-thp-gud60w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud60w2nhe-du",
      "indoorUnitId": "iu-thp-gud60ah2g-du",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud36w2nhe-du-thp-gud36ah2g-du",
      "slug": "the-heat-pump-thp-gud36w2nhe-du-thp-gud36ah2g-du",
      "modelId": "model-the-heat-pump-thp-gud36w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud36w2nhe-du",
      "indoorUnitId": "iu-thp-gud36ah2g-du",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud18w2nhe-du-thp-gud18ah2e-du",
      "slug": "the-heat-pump-thp-gud18w2nhe-du-thp-gud18ah2e-du",
      "modelId": "model-the-heat-pump-thp-gud18w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud18w2nhe-du",
      "indoorUnitId": "iu-thp-gud18ah2e-du",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud36w2nhe-du-thp-gud24ah2g-du",
      "slug": "the-heat-pump-thp-gud36w2nhe-du-thp-gud24ah2g-du",
      "modelId": "model-the-heat-pump-thp-gud36w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud36w2nhe-du",
      "indoorUnitId": "iu-thp-gud24ah2g-du",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud36w2nhe-du-thp-gcac24fnha",
      "slug": "the-heat-pump-thp-gud36w2nhe-du-thp-gcac24fnha",
      "modelId": "model-the-heat-pump-thp-gud36w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud36w2nhe-du",
      "indoorUnitId": "iu-thp-gcac24fnha",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud36w2nhe-du-thp-gcac36fnha",
      "slug": "the-heat-pump-thp-gud36w2nhe-du-thp-gcac36fnha",
      "modelId": "model-the-heat-pump-thp-gud36w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud36w2nhe-du",
      "indoorUnitId": "iu-thp-gcac36fnha",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud60w2nhe-du-thp-gcac60hnha",
      "slug": "the-heat-pump-thp-gud60w2nhe-du-thp-gcac60hnha",
      "modelId": "model-the-heat-pump-thp-gud60w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud60w2nhe-du",
      "indoorUnitId": "iu-thp-gcac60hnha",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-the-heat-pump-thp-gud60w2nhe-du-thp-gcac48hnha",
      "slug": "the-heat-pump-thp-gud60w2nhe-du-thp-gcac48hnha",
      "modelId": "model-the-heat-pump-thp-gud60w2nhe-du",
      "outdoorUnitId": "ou-the-heat-pump-thp-gud60w2nhe-du",
      "indoorUnitId": "iu-thp-gcac48hnha",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-the-heat-pump-epa",
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
