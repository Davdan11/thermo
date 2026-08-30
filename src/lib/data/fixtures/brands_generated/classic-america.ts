import type { BrandDataset } from "../../types";

export const brand_classic_americaDataset: BrandDataset = {
  "brand": {
    "id": "brand-classic-america",
    "slug": "classic-america",
    "name": "CLASSIC AMERICA",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour CLASSIC AMERICA",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-classic-america-epa",
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
      "id": "series-classic-america-duet-series",
      "slug": "classic-america-duet-series",
      "name": "DUET Series",
      "brandId": "brand-classic-america",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DUET Series de CLASSIC AMERICA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-classic-america-duet-series-classic-america",
      "slug": "classic-america-duet-series-classic-america",
      "name": "DUET Series classic America",
      "brandId": "brand-classic-america",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DUET Series classic America de CLASSIC AMERICA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-classic-america-mzr454-18cha2-o",
      "slug": "classic-america-mzr454-18cha2-o",
      "name": "CLASSIC AMERICA MZR454-18CHA2-O",
      "seriesId": "series-classic-america-duet-series",
      "brandId": "brand-classic-america",
      "modelNumber": "MZR454-18CHA2-O",
      "normalizedModelNumber": "mzr454-18cha2-o",
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
      "id": "model-classic-america-mzr454-27cha2-o",
      "slug": "classic-america-mzr454-27cha2-o",
      "name": "CLASSIC AMERICA MZR454-27CHA2-O",
      "seriesId": "series-classic-america-duet-series-classic-america",
      "brandId": "brand-classic-america",
      "modelNumber": "MZR454-27CHA2-O",
      "normalizedModelNumber": "mzr454-27cha2-o",
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
      "id": "model-classic-america-mzr454-36cha2-o",
      "slug": "classic-america-mzr454-36cha2-o",
      "name": "CLASSIC AMERICA MZR454-36CHA2-O",
      "seriesId": "series-classic-america-duet-series-classic-america",
      "brandId": "brand-classic-america",
      "modelNumber": "MZR454-36CHA2-O",
      "normalizedModelNumber": "mzr454-36cha2-o",
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
      "id": "model-classic-america-mzr454-42cha2-o",
      "slug": "classic-america-mzr454-42cha2-o",
      "name": "CLASSIC AMERICA MZR454-42CHA2-O",
      "seriesId": "series-classic-america-duet-series-classic-america",
      "brandId": "brand-classic-america",
      "modelNumber": "MZR454-42CHA2-O",
      "normalizedModelNumber": "mzr454-42cha2-o",
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
      "id": "ou-classic-america-mzr454-18cha2-o",
      "modelNumber": "MZR454-18CHA2-O",
      "brandId": "brand-classic-america",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-classic-america-mzr454-27cha2-o",
      "modelNumber": "MZR454-27CHA2-O",
      "brandId": "brand-classic-america",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-classic-america-mzr454-36cha2-o",
      "modelNumber": "MZR454-36CHA2-O",
      "brandId": "brand-classic-america",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-classic-america-mzr454-42cha2-o",
      "modelNumber": "MZR454-42CHA2-O",
      "brandId": "brand-classic-america",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-42141",
      "modelNumber": "IU-42141",
      "brandId": "brand-classic-america",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42142",
      "modelNumber": "IU-42142",
      "brandId": "brand-classic-america",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42143",
      "modelNumber": "IU-42143",
      "brandId": "brand-classic-america",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42144",
      "modelNumber": "IU-42144",
      "brandId": "brand-classic-america",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-classic-america-mzr454-18cha2-o-iu-42141",
      "slug": "classic-america-mzr454-18cha2-o-iu-42141",
      "modelId": "model-classic-america-mzr454-18cha2-o",
      "outdoorUnitId": "ou-classic-america-mzr454-18cha2-o",
      "indoorUnitId": "iu-iu-42141",
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
          "sourceId": "src-classic-america-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-america-mzr454-27cha2-o-iu-42142",
      "slug": "classic-america-mzr454-27cha2-o-iu-42142",
      "modelId": "model-classic-america-mzr454-27cha2-o",
      "outdoorUnitId": "ou-classic-america-mzr454-27cha2-o",
      "indoorUnitId": "iu-iu-42142",
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
          "sourceId": "src-classic-america-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-america-mzr454-36cha2-o-iu-42143",
      "slug": "classic-america-mzr454-36cha2-o-iu-42143",
      "modelId": "model-classic-america-mzr454-36cha2-o",
      "outdoorUnitId": "ou-classic-america-mzr454-36cha2-o",
      "indoorUnitId": "iu-iu-42143",
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
          "sourceId": "src-classic-america-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-america-mzr454-42cha2-o-iu-42144",
      "slug": "classic-america-mzr454-42cha2-o-iu-42144",
      "modelId": "model-classic-america-mzr454-42cha2-o",
      "outdoorUnitId": "ou-classic-america-mzr454-42cha2-o",
      "indoorUnitId": "iu-iu-42144",
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
          "sourceId": "src-classic-america-epa",
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
