import type { BrandDataset } from "../../types";

export const brand_connect_mDataset: BrandDataset = {
  "brand": {
    "id": "brand-connect-m",
    "slug": "connect-m",
    "name": "Connect M",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Connect M",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-connect-m-epa",
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
      "id": "series-connect-m-cntm-series",
      "slug": "connect-m-cntm-series",
      "name": "CNTM Series",
      "brandId": "brand-connect-m",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CNTM Series de Connect M",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-connect-m-cntm16dhp18aa",
      "slug": "connect-m-cntm16dhp18aa",
      "name": "Connect M CNTM16DHP18AA",
      "seriesId": "series-connect-m-cntm-series",
      "brandId": "brand-connect-m",
      "modelNumber": "CNTM16DHP18AA",
      "normalizedModelNumber": "cntm16dhp18aa",
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
    },
    {
      "id": "model-connect-m-cntm16dhp24aa",
      "slug": "connect-m-cntm16dhp24aa",
      "name": "Connect M CNTM16DHP24AA",
      "seriesId": "series-connect-m-cntm-series",
      "brandId": "brand-connect-m",
      "modelNumber": "CNTM16DHP24AA",
      "normalizedModelNumber": "cntm16dhp24aa",
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
      "id": "model-connect-m-cntm16dhp36aa",
      "slug": "connect-m-cntm16dhp36aa",
      "name": "Connect M CNTM16DHP36AA",
      "seriesId": "series-connect-m-cntm-series",
      "brandId": "brand-connect-m",
      "modelNumber": "CNTM16DHP36AA",
      "normalizedModelNumber": "cntm16dhp36aa",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
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
      "id": "model-connect-m-cntm16dhp48aa",
      "slug": "connect-m-cntm16dhp48aa",
      "name": "Connect M CNTM16DHP48AA",
      "seriesId": "series-connect-m-cntm-series",
      "brandId": "brand-connect-m",
      "modelNumber": "CNTM16DHP48AA",
      "normalizedModelNumber": "cntm16dhp48aa",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "model-connect-m-cntm16dhp60aa",
      "slug": "connect-m-cntm16dhp60aa",
      "name": "Connect M CNTM16DHP60AA",
      "seriesId": "series-connect-m-cntm-series",
      "brandId": "brand-connect-m",
      "modelNumber": "CNTM16DHP60AA",
      "normalizedModelNumber": "cntm16dhp60aa",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "ou-connect-m-cntm16dhp18aa",
      "modelNumber": "CNTM16DHP18AA",
      "brandId": "brand-connect-m",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-connect-m-cntm16dhp24aa",
      "modelNumber": "CNTM16DHP24AA",
      "brandId": "brand-connect-m",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-connect-m-cntm16dhp36aa",
      "modelNumber": "CNTM16DHP36AA",
      "brandId": "brand-connect-m",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-connect-m-cntm16dhp48aa",
      "modelNumber": "CNTM16DHP48AA",
      "brandId": "brand-connect-m",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-connect-m-cntm16dhp60aa",
      "modelNumber": "CNTM16DHP60AA",
      "brandId": "brand-connect-m",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cntm16dah18aa",
      "modelNumber": "CNTM16DAH18AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    },
    {
      "id": "iu-cntm16dah24aa",
      "modelNumber": "CNTM16DAH24AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    },
    {
      "id": "iu-cntmdcc24aa",
      "modelNumber": "CNTMDCC24AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    },
    {
      "id": "iu-cntm16dah36aa",
      "modelNumber": "CNTM16DAH36AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    },
    {
      "id": "iu-cntm16dah48aa",
      "modelNumber": "CNTM16DAH48AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    },
    {
      "id": "iu-cntm16dah60aa",
      "modelNumber": "CNTM16DAH60AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    },
    {
      "id": "iu-cntmdcc36aa",
      "modelNumber": "CNTMDCC36AA",
      "brandId": "brand-connect-m",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-connect-m-cntm16dhp18aa-cntm16dah18aa",
      "slug": "connect-m-cntm16dhp18aa-cntm16dah18aa",
      "modelId": "model-connect-m-cntm16dhp18aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp18aa",
      "indoorUnitId": "iu-cntm16dah18aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-connect-m-cntm16dhp24aa-cntm16dah24aa",
      "slug": "connect-m-cntm16dhp24aa-cntm16dah24aa",
      "modelId": "model-connect-m-cntm16dhp24aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp24aa",
      "indoorUnitId": "iu-cntm16dah24aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-connect-m-cntm16dhp18aa-cntmdcc24aa",
      "slug": "connect-m-cntm16dhp18aa-cntmdcc24aa",
      "modelId": "model-connect-m-cntm16dhp18aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp18aa",
      "indoorUnitId": "iu-cntmdcc24aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-connect-m-cntm16dhp36aa-cntm16dah36aa",
      "slug": "connect-m-cntm16dhp36aa-cntm16dah36aa",
      "modelId": "model-connect-m-cntm16dhp36aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp36aa",
      "indoorUnitId": "iu-cntm16dah36aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-connect-m-cntm16dhp48aa-cntm16dah48aa",
      "slug": "connect-m-cntm16dhp48aa-cntm16dah48aa",
      "modelId": "model-connect-m-cntm16dhp48aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp48aa",
      "indoorUnitId": "iu-cntm16dah48aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-connect-m-cntm16dhp60aa-cntm16dah60aa",
      "slug": "connect-m-cntm16dhp60aa-cntm16dah60aa",
      "modelId": "model-connect-m-cntm16dhp60aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp60aa",
      "indoorUnitId": "iu-cntm16dah60aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-connect-m-cntm16dhp36aa-cntmdcc36aa",
      "slug": "connect-m-cntm16dhp36aa-cntmdcc36aa",
      "modelId": "model-connect-m-cntm16dhp36aa",
      "outdoorUnitId": "ou-connect-m-cntm16dhp36aa",
      "indoorUnitId": "iu-cntmdcc36aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-connect-m-epa",
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
