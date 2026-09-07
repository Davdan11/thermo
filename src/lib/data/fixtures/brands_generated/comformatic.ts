import type { BrandDataset } from "../../types";

export const brand_comformaticDataset: BrandDataset = {
  "brand": {
    "id": "brand-comformatic",
    "slug": "comformatic",
    "name": "COMFORMATIC",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour COMFORMATIC",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-comformatic-epa",
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
      "id": "series-comformatic-multi-super-heat",
      "slug": "comformatic-multi-super-heat",
      "name": "Multi super heat",
      "brandId": "brand-comformatic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi super heat de COMFORMATIC",
      "imageUrl": "/images/series/comformatic-comformatic-multi-super-heat.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-comformatic-gfmcx18-h2",
      "slug": "comformatic-gfmcx18-h2",
      "name": "COMFORMATIC GFMCX18-H2",
      "seriesId": "series-comformatic-multi-super-heat",
      "brandId": "brand-comformatic",
      "modelNumber": "GFMCX18-H2",
      "normalizedModelNumber": "gfmcx18-h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17000,
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
      "id": "model-comformatic-gfmcx24-h2",
      "slug": "comformatic-gfmcx24-h2",
      "name": "COMFORMATIC GFMCX24-H2",
      "seriesId": "series-comformatic-multi-super-heat",
      "brandId": "brand-comformatic",
      "modelNumber": "GFMCX24-H2",
      "normalizedModelNumber": "gfmcx24-h2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
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
      "id": "ou-comformatic-gfmcx18-h2",
      "modelNumber": "GFMCX18-H2",
      "brandId": "brand-comformatic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-comformatic-gfmcx24-h2",
      "modelNumber": "GFMCX24-H2",
      "brandId": "brand-comformatic",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-42146",
      "modelNumber": "IU-42146",
      "brandId": "brand-comformatic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42147",
      "modelNumber": "IU-42147",
      "brandId": "brand-comformatic",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-comformatic-gfmcx18-h2-iu-42146",
      "slug": "comformatic-gfmcx18-h2-iu-42146",
      "modelId": "model-comformatic-gfmcx18-h2",
      "outdoorUnitId": "ou-comformatic-gfmcx18-h2",
      "indoorUnitId": "iu-iu-42146",
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
          "sourceId": "src-comformatic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-comformatic-gfmcx24-h2-iu-42147",
      "slug": "comformatic-gfmcx24-h2-iu-42147",
      "modelId": "model-comformatic-gfmcx24-h2",
      "outdoorUnitId": "ou-comformatic-gfmcx24-h2",
      "indoorUnitId": "iu-iu-42147",
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
          "sourceId": "src-comformatic-epa",
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
