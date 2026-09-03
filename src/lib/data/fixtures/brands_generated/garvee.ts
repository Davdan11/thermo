import type { BrandDataset } from "../../types";

export const brand_garveeDataset: BrandDataset = {
  "brand": {
    "id": "brand-garvee",
    "slug": "garvee",
    "name": "GARVEE",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour GARVEE",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-garvee-epa",
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
      "id": "series-garvee-pro",
      "slug": "garvee-pro",
      "name": "Pro",
      "brandId": "brand-garvee",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pro de GARVEE",
      "imageUrl": "/images/series/garvee-garvee-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-garvee-ca",
      "slug": "garvee-ca",
      "name": "CA",
      "brandId": "brand-garvee",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CA de GARVEE",
      "imageUrl": "/images/series/garvee-garvee-ca.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-garvee-gms12-2-pro",
      "slug": "garvee-gms12-2-pro",
      "name": "GARVEE GMS12-2 PRO",
      "seriesId": "series-garvee-pro",
      "brandId": "brand-garvee",
      "modelNumber": "GMS12-2 PRO",
      "normalizedModelNumber": "gms12-2 pro",
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
      "id": "model-garvee-gms9-2-pro",
      "slug": "garvee-gms9-2-pro",
      "name": "GARVEE GMS9-2 PRO",
      "seriesId": "series-garvee-pro",
      "brandId": "brand-garvee",
      "modelNumber": "GMS9-2 PRO",
      "normalizedModelNumber": "gms9-2 pro",
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
      "id": "model-garvee-gms18-pro",
      "slug": "garvee-gms18-pro",
      "name": "GARVEE GMS18 PRO",
      "seriesId": "series-garvee-pro",
      "brandId": "brand-garvee",
      "modelNumber": "GMS18 PRO",
      "normalizedModelNumber": "gms18 pro",
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
      "id": "model-garvee-gms24-pro",
      "slug": "garvee-gms24-pro",
      "name": "GARVEE GMS24 PRO",
      "seriesId": "series-garvee-pro",
      "brandId": "brand-garvee",
      "modelNumber": "GMS24 PRO",
      "normalizedModelNumber": "gms24 pro",
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
    },
    {
      "id": "model-garvee-gms1d4-pro",
      "slug": "garvee-gms1d4-pro",
      "name": "GARVEE GMS1D4 PRO",
      "seriesId": "series-garvee-pro",
      "brandId": "brand-garvee",
      "modelNumber": "GMS1D4 PRO",
      "normalizedModelNumber": "gms1d4 pro",
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
      "id": "model-garvee-gmsc24-a",
      "slug": "garvee-gmsc24-a",
      "name": "GARVEE GMSC24-A",
      "seriesId": "series-garvee-ca",
      "brandId": "brand-garvee",
      "modelNumber": "GMSC24-A",
      "normalizedModelNumber": "gmsc24-a",
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
      "id": "ou-garvee-gms12-2-pro",
      "modelNumber": "GMS12-2 PRO",
      "brandId": "brand-garvee",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-garvee-gms9-2-pro",
      "modelNumber": "GMS9-2 PRO",
      "brandId": "brand-garvee",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-garvee-gms18-pro",
      "modelNumber": "GMS18 PRO",
      "brandId": "brand-garvee",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-garvee-gms24-pro",
      "modelNumber": "GMS24 PRO",
      "brandId": "brand-garvee",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-garvee-gms1d4-pro",
      "modelNumber": "GMS1D4 PRO",
      "brandId": "brand-garvee",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-garvee-gmsc24-a",
      "modelNumber": "GMSC24-A",
      "brandId": "brand-garvee",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-gms12-2-pro",
      "modelNumber": "GMS12-2 PRO",
      "brandId": "brand-garvee",
      "type": "wall-single"
    },
    {
      "id": "iu-gms9-2-pro",
      "modelNumber": "GMS9-2 PRO",
      "brandId": "brand-garvee",
      "type": "wall-single"
    },
    {
      "id": "iu-gms18-pro",
      "modelNumber": "GMS18 PRO",
      "brandId": "brand-garvee",
      "type": "wall-single"
    },
    {
      "id": "iu-gms24-pro",
      "modelNumber": "GMS24 PRO",
      "brandId": "brand-garvee",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44833",
      "modelNumber": "IU-44833",
      "brandId": "brand-garvee",
      "type": "wall-single"
    },
    {
      "id": "iu-gmsc24-b",
      "modelNumber": "GMSC24-B",
      "brandId": "brand-garvee",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-garvee-gms12-2-pro-gms12-2-pro",
      "slug": "garvee-gms12-2-pro-gms12-2-pro",
      "modelId": "model-garvee-gms12-2-pro",
      "outdoorUnitId": "ou-garvee-gms12-2-pro",
      "indoorUnitId": "iu-gms12-2-pro",
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
          "sourceId": "src-garvee-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-garvee-gms9-2-pro-gms9-2-pro",
      "slug": "garvee-gms9-2-pro-gms9-2-pro",
      "modelId": "model-garvee-gms9-2-pro",
      "outdoorUnitId": "ou-garvee-gms9-2-pro",
      "indoorUnitId": "iu-gms9-2-pro",
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
          "sourceId": "src-garvee-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-garvee-gms18-pro-gms18-pro",
      "slug": "garvee-gms18-pro-gms18-pro",
      "modelId": "model-garvee-gms18-pro",
      "outdoorUnitId": "ou-garvee-gms18-pro",
      "indoorUnitId": "iu-gms18-pro",
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
          "sourceId": "src-garvee-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-garvee-gms24-pro-gms24-pro",
      "slug": "garvee-gms24-pro-gms24-pro",
      "modelId": "model-garvee-gms24-pro",
      "outdoorUnitId": "ou-garvee-gms24-pro",
      "indoorUnitId": "iu-gms24-pro",
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
          "sourceId": "src-garvee-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-garvee-gms1d4-pro-iu-44833",
      "slug": "garvee-gms1d4-pro-iu-44833",
      "modelId": "model-garvee-gms1d4-pro",
      "outdoorUnitId": "ou-garvee-gms1d4-pro",
      "indoorUnitId": "iu-iu-44833",
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
          "sourceId": "src-garvee-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-garvee-gmsc24-a-gmsc24-b",
      "slug": "garvee-gmsc24-a-gmsc24-b",
      "modelId": "model-garvee-gmsc24-a",
      "outdoorUnitId": "ou-garvee-gmsc24-a",
      "indoorUnitId": "iu-gmsc24-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-garvee-epa",
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
