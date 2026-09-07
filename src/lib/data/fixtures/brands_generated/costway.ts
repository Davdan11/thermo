import type { BrandDataset } from "../../types";

export const brand_costwayDataset: BrandDataset = {
  "brand": {
    "id": "brand-costway",
    "slug": "costway",
    "name": "COSTWAY",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour COSTWAY",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-costway-epa",
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
      "id": "series-costway-x-pro",
      "slug": "costway-x-pro",
      "name": "X-PRO",
      "brandId": "brand-costway",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série X-PRO de COSTWAY",
      "imageUrl": "/images/series/costway-costway-x-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-costway-t-pro",
      "slug": "costway-t-pro",
      "name": "T-Pro",
      "brandId": "brand-costway",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-Pro de COSTWAY",
      "imageUrl": "/images/series/costway-costway-t-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-costway-greenforce",
      "slug": "costway-greenforce",
      "name": "GREENFORCE",
      "brandId": "brand-costway",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série GREENFORCE de COSTWAY",
      "imageUrl": "/images/series/costway-costway-greenforce.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-costway-fp10982us",
      "slug": "costway-fp10982us",
      "name": "FP10982US",
      "brandId": "brand-costway",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série FP10982US de COSTWAY",
      "imageUrl": "/images/series/costway-costway-fp10982us.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-costway-fp10983us",
      "slug": "costway-fp10983us",
      "name": "FP10983US",
      "brandId": "brand-costway",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série FP10983US de COSTWAY",
      "imageUrl": "/images/series/costway-costway-fp10983us.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-costway-fp11133us",
      "slug": "costway-fp11133us",
      "name": "COSTWAY FP11133US",
      "seriesId": "series-costway-x-pro",
      "brandId": "brand-costway",
      "modelNumber": "FP11133US",
      "normalizedModelNumber": "fp11133us",
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
      "id": "model-costway-fp11153us-12wh",
      "slug": "costway-fp11153us-12wh",
      "name": "COSTWAY FP11153US-12WH",
      "seriesId": "series-costway-t-pro",
      "brandId": "brand-costway",
      "modelNumber": "FP11153US-12WH",
      "normalizedModelNumber": "fp11153us-12wh",
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
      "id": "model-costway-fp11154us-12wh",
      "slug": "costway-fp11154us-12wh",
      "name": "COSTWAY FP11154US-12WH",
      "seriesId": "series-costway-t-pro",
      "brandId": "brand-costway",
      "modelNumber": "FP11154US-12WH",
      "normalizedModelNumber": "fp11154us-12wh",
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
      "id": "model-costway-fp11149us-12wh",
      "slug": "costway-fp11149us-12wh",
      "name": "COSTWAY FP11149US-12WH",
      "seriesId": "series-costway-t-pro",
      "brandId": "brand-costway",
      "modelNumber": "FP11149US-12WH",
      "normalizedModelNumber": "fp11149us-12wh",
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
      "id": "model-costway-fp11151us-12wh",
      "slug": "costway-fp11151us-12wh",
      "name": "COSTWAY FP11151US-12WH",
      "seriesId": "series-costway-t-pro",
      "brandId": "brand-costway",
      "modelNumber": "FP11151US-12WH",
      "normalizedModelNumber": "fp11151us-12wh",
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
      "id": "model-costway-fp10794us-wh",
      "slug": "costway-fp10794us-wh",
      "name": "COSTWAY FP10794US-WH",
      "seriesId": "series-costway-greenforce",
      "brandId": "brand-costway",
      "modelNumber": "FP10794US-WH",
      "normalizedModelNumber": "fp10794us-wh",
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
      "id": "model-costway-fp10795us-wh",
      "slug": "costway-fp10795us-wh",
      "name": "COSTWAY FP10795US-WH",
      "seriesId": "series-costway-greenforce",
      "brandId": "brand-costway",
      "modelNumber": "FP10795US-WH",
      "normalizedModelNumber": "fp10795us-wh",
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
      "id": "model-costway-fp10796us-wh",
      "slug": "costway-fp10796us-wh",
      "name": "COSTWAY FP10796US-WH",
      "seriesId": "series-costway-greenforce",
      "brandId": "brand-costway",
      "modelNumber": "FP10796US-WH",
      "normalizedModelNumber": "fp10796us-wh",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
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
      "id": "model-costway-fp10982us",
      "slug": "costway-fp10982us",
      "name": "COSTWAY FP10982US",
      "seriesId": "series-costway-fp10982us",
      "brandId": "brand-costway",
      "modelNumber": "FP10982US",
      "normalizedModelNumber": "fp10982us",
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
      "id": "model-costway-fp10983us",
      "slug": "costway-fp10983us",
      "name": "COSTWAY FP10983US",
      "seriesId": "series-costway-fp10983us",
      "brandId": "brand-costway",
      "modelNumber": "FP10983US",
      "normalizedModelNumber": "fp10983us",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55500,
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
      "id": "ou-costway-fp11133us",
      "modelNumber": "FP11133US",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-costway-fp11153us-12wh",
      "modelNumber": "FP11153US-12WH",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-costway-fp11154us-12wh",
      "modelNumber": "FP11154US-12WH",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-costway-fp11149us-12wh",
      "modelNumber": "FP11149US-12WH",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-costway-fp11151us-12wh",
      "modelNumber": "FP11151US-12WH",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-costway-fp10794us-wh",
      "modelNumber": "FP10794US-WH",
      "brandId": "brand-costway",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-costway-fp10795us-wh",
      "modelNumber": "FP10795US-WH",
      "brandId": "brand-costway",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-costway-fp10796us-wh",
      "modelNumber": "FP10796US-WH",
      "brandId": "brand-costway",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-costway-fp10982us",
      "modelNumber": "FP10982US",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-costway-fp10983us",
      "modelNumber": "FP10983US",
      "brandId": "brand-costway",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-42166",
      "modelNumber": "IU-42166",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-fp11153us-22wh",
      "modelNumber": "FP11153US-22WH",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-fp11154us-22wh",
      "modelNumber": "FP11154US-22WH",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-fp11149us-22wh",
      "modelNumber": "FP11149US-22WH",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-fp11151us-22wh",
      "modelNumber": "FP11151US-22WH",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42163",
      "modelNumber": "IU-42163",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42164",
      "modelNumber": "IU-42164",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42165",
      "modelNumber": "IU-42165",
      "brandId": "brand-costway",
      "type": "wall-single"
    },
    {
      "id": "iu-fp10985us",
      "modelNumber": "FP10985US",
      "brandId": "brand-costway",
      "type": "central-ducted"
    },
    {
      "id": "iu-fp10986us",
      "modelNumber": "FP10986US",
      "brandId": "brand-costway",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-costway-fp11133us-iu-42166",
      "slug": "costway-fp11133us-iu-42166",
      "modelId": "model-costway-fp11133us",
      "outdoorUnitId": "ou-costway-fp11133us",
      "indoorUnitId": "iu-iu-42166",
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
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp11153us-12wh-fp11153us-22wh",
      "slug": "costway-fp11153us-12wh-fp11153us-22wh",
      "modelId": "model-costway-fp11153us-12wh",
      "outdoorUnitId": "ou-costway-fp11153us-12wh",
      "indoorUnitId": "iu-fp11153us-22wh",
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
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp11154us-12wh-fp11154us-22wh",
      "slug": "costway-fp11154us-12wh-fp11154us-22wh",
      "modelId": "model-costway-fp11154us-12wh",
      "outdoorUnitId": "ou-costway-fp11154us-12wh",
      "indoorUnitId": "iu-fp11154us-22wh",
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
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp11149us-12wh-fp11149us-22wh",
      "slug": "costway-fp11149us-12wh-fp11149us-22wh",
      "modelId": "model-costway-fp11149us-12wh",
      "outdoorUnitId": "ou-costway-fp11149us-12wh",
      "indoorUnitId": "iu-fp11149us-22wh",
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
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp11151us-12wh-fp11151us-22wh",
      "slug": "costway-fp11151us-12wh-fp11151us-22wh",
      "modelId": "model-costway-fp11151us-12wh",
      "outdoorUnitId": "ou-costway-fp11151us-12wh",
      "indoorUnitId": "iu-fp11151us-22wh",
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
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp10794us-wh-iu-42163",
      "slug": "costway-fp10794us-wh-iu-42163",
      "modelId": "model-costway-fp10794us-wh",
      "outdoorUnitId": "ou-costway-fp10794us-wh",
      "indoorUnitId": "iu-iu-42163",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp10795us-wh-iu-42164",
      "slug": "costway-fp10795us-wh-iu-42164",
      "modelId": "model-costway-fp10795us-wh",
      "outdoorUnitId": "ou-costway-fp10795us-wh",
      "indoorUnitId": "iu-iu-42164",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp10796us-wh-iu-42165",
      "slug": "costway-fp10796us-wh-iu-42165",
      "modelId": "model-costway-fp10796us-wh",
      "outdoorUnitId": "ou-costway-fp10796us-wh",
      "indoorUnitId": "iu-iu-42165",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp10982us-fp10985us",
      "slug": "costway-fp10982us-fp10985us",
      "modelId": "model-costway-fp10982us",
      "outdoorUnitId": "ou-costway-fp10982us",
      "indoorUnitId": "iu-fp10985us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-costway-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-costway-fp10983us-fp10986us",
      "slug": "costway-fp10983us-fp10986us",
      "modelId": "model-costway-fp10983us",
      "outdoorUnitId": "ou-costway-fp10983us",
      "indoorUnitId": "iu-fp10986us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-costway-epa",
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
