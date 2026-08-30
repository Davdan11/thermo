import type { BrandDataset } from "../../types";

export const brand_kerr_kapstoneDataset: BrandDataset = {
  "brand": {
    "id": "brand-kerr-kapstone",
    "slug": "kerr-kapstone",
    "name": "Kerr Kapstone",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Kerr Kapstone",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-kerr-kapstone-epa",
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
      "id": "series-kerr-kapstone-a-series",
      "slug": "kerr-kapstone-a-series",
      "name": "A Series",
      "brandId": "brand-kerr-kapstone",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A Series de Kerr Kapstone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-kerr-kapstone-a-kzp-series",
      "slug": "kerr-kapstone-a-kzp-series",
      "name": "A-KZP Series",
      "brandId": "brand-kerr-kapstone",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A-KZP Series de Kerr Kapstone",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-kerr-kapstone-a-kzp06sa-1",
      "slug": "kerr-kapstone-a-kzp06sa-1",
      "name": "Kerr Kapstone A-KZP06SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KZP06SA-1",
      "normalizedModelNumber": "a-kzp06sa-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
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
      "id": "model-kerr-kapstone-a-kzp09sa-1",
      "slug": "kerr-kapstone-a-kzp09sa-1",
      "name": "Kerr Kapstone A-KZP09SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KZP09SA-1",
      "normalizedModelNumber": "a-kzp09sa-1",
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
      "id": "model-kerr-kapstone-a-kzp12sa-1",
      "slug": "kerr-kapstone-a-kzp12sa-1",
      "name": "Kerr Kapstone A-KZP12SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KZP12SA-1",
      "normalizedModelNumber": "a-kzp12sa-1",
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
      "id": "model-kerr-kapstone-a-kzp15sa-1",
      "slug": "kerr-kapstone-a-kzp15sa-1",
      "name": "Kerr Kapstone A-KZP15SA-1",
      "seriesId": "series-kerr-kapstone-a-kzp-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KZP15SA-1",
      "normalizedModelNumber": "a-kzp15sa-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15000,
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
      "id": "model-kerr-kapstone-a-kzp18sa-1",
      "slug": "kerr-kapstone-a-kzp18sa-1",
      "name": "Kerr Kapstone A-KZP18SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KZP18SA-1",
      "normalizedModelNumber": "a-kzp18sa-1",
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
      "id": "model-kerr-kapstone-a-kzp24sa-1",
      "slug": "kerr-kapstone-a-kzp24sa-1",
      "name": "Kerr Kapstone A-KZP24SA-1",
      "seriesId": "series-kerr-kapstone-a-kzp-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KZP24SA-1",
      "normalizedModelNumber": "a-kzp24sa-1",
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
      "id": "model-kerr-kapstone-a-kx12p18sa-1",
      "slug": "kerr-kapstone-a-kx12p18sa-1",
      "name": "Kerr Kapstone A-KX12P18SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KX12P18SA-1",
      "normalizedModelNumber": "a-kx12p18sa-1",
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
      "id": "model-kerr-kapstone-a-kx12p24sa-1",
      "slug": "kerr-kapstone-a-kx12p24sa-1",
      "name": "Kerr Kapstone A-KX12P24SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KX12P24SA-1",
      "normalizedModelNumber": "a-kx12p24sa-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-kerr-kapstone-a-kx12p36sa-1",
      "slug": "kerr-kapstone-a-kx12p36sa-1",
      "name": "Kerr Kapstone A-KX12P36SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KX12P36SA-1",
      "normalizedModelNumber": "a-kx12p36sa-1",
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
      "id": "model-kerr-kapstone-a-kx12p30sa-1",
      "slug": "kerr-kapstone-a-kx12p30sa-1",
      "name": "Kerr Kapstone A-KX12P30SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KX12P30SA-1",
      "normalizedModelNumber": "a-kx12p30sa-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-kerr-kapstone-a-kx12p48sa-1",
      "slug": "kerr-kapstone-a-kx12p48sa-1",
      "name": "Kerr Kapstone A-KX12P48SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KX12P48SA-1",
      "normalizedModelNumber": "a-kx12p48sa-1",
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
      "id": "model-kerr-kapstone-a-kx12p60sa-1",
      "slug": "kerr-kapstone-a-kx12p60sa-1",
      "name": "Kerr Kapstone A-KX12P60SA-1",
      "seriesId": "series-kerr-kapstone-a-series",
      "brandId": "brand-kerr-kapstone",
      "modelNumber": "A-KX12P60SA-1",
      "normalizedModelNumber": "a-kx12p60sa-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 52000,
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
      "id": "ou-kerr-kapstone-a-kzp06sa-1",
      "modelNumber": "A-KZP06SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kzp09sa-1",
      "modelNumber": "A-KZP09SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kzp12sa-1",
      "modelNumber": "A-KZP12SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kzp15sa-1",
      "modelNumber": "A-KZP15SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kzp18sa-1",
      "modelNumber": "A-KZP18SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kzp24sa-1",
      "modelNumber": "A-KZP24SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kx12p18sa-1",
      "modelNumber": "A-KX12P18SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kx12p24sa-1",
      "modelNumber": "A-KX12P24SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kx12p36sa-1",
      "modelNumber": "A-KX12P36SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kx12p30sa-1",
      "modelNumber": "A-KX12P30SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kx12p48sa-1",
      "modelNumber": "A-KX12P48SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-kerr-kapstone-a-kx12p60sa-1",
      "modelNumber": "A-KX12P60SA-1",
      "brandId": "brand-kerr-kapstone",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-b-kzp06sa-1",
      "modelNumber": "B-KZP06SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kzp09sa-1",
      "modelNumber": "B-KZP09SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kzp12sa-1",
      "modelNumber": "B-KZP12SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kzp15sa-1",
      "modelNumber": "B-KZP15SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kzp18sa-1",
      "modelNumber": "B-KZP18SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kzp24sa-1",
      "modelNumber": "B-KZP24SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "wall-single"
    },
    {
      "id": "iu-b-kx12p18sa-1",
      "modelNumber": "B-KX12P18SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kx12p24sa-1",
      "modelNumber": "B-KX12P24SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kx12p36sa-1",
      "modelNumber": "B-KX12P36SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kx12p30sa-1",
      "modelNumber": "B-KX12P30SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kx12p48sa-1",
      "modelNumber": "B-KX12P48SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp1824a1a",
      "modelNumber": "MXP18/24A1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp1824b1a",
      "modelNumber": "MXP18/24B1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp2436b1a",
      "modelNumber": "MXP24/36B1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp4860c1a",
      "modelNumber": "MXP48/60C1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp2436c1a",
      "modelNumber": "MXP24/36C1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-b-kx12p60sa-1",
      "modelNumber": "B-KX12P60SA-1",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp2436a1a",
      "modelNumber": "MXP24/36A1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    },
    {
      "id": "iu-mxp4860d1a",
      "modelNumber": "MXP48/60D1A",
      "brandId": "brand-kerr-kapstone",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-kerr-kapstone-a-kzp06sa-1-b-kzp06sa-1",
      "slug": "kerr-kapstone-a-kzp06sa-1-b-kzp06sa-1",
      "modelId": "model-kerr-kapstone-a-kzp06sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kzp06sa-1",
      "indoorUnitId": "iu-b-kzp06sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 35.0,
      "hspf2": 15.6,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kzp09sa-1-b-kzp09sa-1",
      "slug": "kerr-kapstone-a-kzp09sa-1-b-kzp09sa-1",
      "modelId": "model-kerr-kapstone-a-kzp09sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kzp09sa-1",
      "indoorUnitId": "iu-b-kzp09sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 33.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kzp12sa-1-b-kzp12sa-1",
      "slug": "kerr-kapstone-a-kzp12sa-1-b-kzp12sa-1",
      "modelId": "model-kerr-kapstone-a-kzp12sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kzp12sa-1",
      "indoorUnitId": "iu-b-kzp12sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.4,
      "hspf2": 12.7,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kzp15sa-1-b-kzp15sa-1",
      "slug": "kerr-kapstone-a-kzp15sa-1-b-kzp15sa-1",
      "modelId": "model-kerr-kapstone-a-kzp15sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kzp15sa-1",
      "indoorUnitId": "iu-b-kzp15sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kzp18sa-1-b-kzp18sa-1",
      "slug": "kerr-kapstone-a-kzp18sa-1-b-kzp18sa-1",
      "modelId": "model-kerr-kapstone-a-kzp18sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kzp18sa-1",
      "indoorUnitId": "iu-b-kzp18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 16.2,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kzp24sa-1-b-kzp24sa-1",
      "slug": "kerr-kapstone-a-kzp24sa-1-b-kzp24sa-1",
      "modelId": "model-kerr-kapstone-a-kzp24sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kzp24sa-1",
      "indoorUnitId": "iu-b-kzp24sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p18sa-1-b-kx12p18sa-1",
      "slug": "kerr-kapstone-a-kx12p18sa-1-b-kx12p18sa-1",
      "modelId": "model-kerr-kapstone-a-kx12p18sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p18sa-1",
      "indoorUnitId": "iu-b-kx12p18sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p24sa-1-b-kx12p24sa-1",
      "slug": "kerr-kapstone-a-kx12p24sa-1-b-kx12p24sa-1",
      "modelId": "model-kerr-kapstone-a-kx12p24sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p24sa-1",
      "indoorUnitId": "iu-b-kx12p24sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p36sa-1-b-kx12p36sa-1",
      "slug": "kerr-kapstone-a-kx12p36sa-1-b-kx12p36sa-1",
      "modelId": "model-kerr-kapstone-a-kx12p36sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p36sa-1",
      "indoorUnitId": "iu-b-kx12p36sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p30sa-1-b-kx12p30sa-1",
      "slug": "kerr-kapstone-a-kx12p30sa-1-b-kx12p30sa-1",
      "modelId": "model-kerr-kapstone-a-kx12p30sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p30sa-1",
      "indoorUnitId": "iu-b-kx12p30sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p48sa-1-b-kx12p48sa-1",
      "slug": "kerr-kapstone-a-kx12p48sa-1-b-kx12p48sa-1",
      "modelId": "model-kerr-kapstone-a-kx12p48sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p48sa-1",
      "indoorUnitId": "iu-b-kx12p48sa-1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p18sa-1-mxp1824a1a",
      "slug": "kerr-kapstone-a-kx12p18sa-1-mxp1824a1a",
      "modelId": "model-kerr-kapstone-a-kx12p18sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p18sa-1",
      "indoorUnitId": "iu-mxp1824a1a",
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
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p18sa-1-mxp1824b1a",
      "slug": "kerr-kapstone-a-kx12p18sa-1-mxp1824b1a",
      "modelId": "model-kerr-kapstone-a-kx12p18sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p18sa-1",
      "indoorUnitId": "iu-mxp1824b1a",
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
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p30sa-1-mxp2436b1a",
      "slug": "kerr-kapstone-a-kx12p30sa-1-mxp2436b1a",
      "modelId": "model-kerr-kapstone-a-kx12p30sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p30sa-1",
      "indoorUnitId": "iu-mxp2436b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p24sa-1-mxp1824a1a",
      "slug": "kerr-kapstone-a-kx12p24sa-1-mxp1824a1a",
      "modelId": "model-kerr-kapstone-a-kx12p24sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p24sa-1",
      "indoorUnitId": "iu-mxp1824a1a",
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
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p24sa-1-mxp1824b1a",
      "slug": "kerr-kapstone-a-kx12p24sa-1-mxp1824b1a",
      "modelId": "model-kerr-kapstone-a-kx12p24sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p24sa-1",
      "indoorUnitId": "iu-mxp1824b1a",
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
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p60sa-1-mxp4860c1a",
      "slug": "kerr-kapstone-a-kx12p60sa-1-mxp4860c1a",
      "modelId": "model-kerr-kapstone-a-kx12p60sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p60sa-1",
      "indoorUnitId": "iu-mxp4860c1a",
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
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p30sa-1-mxp2436c1a",
      "slug": "kerr-kapstone-a-kx12p30sa-1-mxp2436c1a",
      "modelId": "model-kerr-kapstone-a-kx12p30sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p30sa-1",
      "indoorUnitId": "iu-mxp2436c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p60sa-1-b-kx12p60sa-1",
      "slug": "kerr-kapstone-a-kx12p60sa-1-b-kx12p60sa-1",
      "modelId": "model-kerr-kapstone-a-kx12p60sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p60sa-1",
      "indoorUnitId": "iu-b-kx12p60sa-1",
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
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p36sa-1-mxp2436b1a",
      "slug": "kerr-kapstone-a-kx12p36sa-1-mxp2436b1a",
      "modelId": "model-kerr-kapstone-a-kx12p36sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p36sa-1",
      "indoorUnitId": "iu-mxp2436b1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p36sa-1-mxp2436c1a",
      "slug": "kerr-kapstone-a-kx12p36sa-1-mxp2436c1a",
      "modelId": "model-kerr-kapstone-a-kx12p36sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p36sa-1",
      "indoorUnitId": "iu-mxp2436c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p30sa-1-mxp2436a1a",
      "slug": "kerr-kapstone-a-kx12p30sa-1-mxp2436a1a",
      "modelId": "model-kerr-kapstone-a-kx12p30sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p30sa-1",
      "indoorUnitId": "iu-mxp2436a1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p48sa-1-mxp4860c1a",
      "slug": "kerr-kapstone-a-kx12p48sa-1-mxp4860c1a",
      "modelId": "model-kerr-kapstone-a-kx12p48sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p48sa-1",
      "indoorUnitId": "iu-mxp4860c1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-kerr-kapstone-a-kx12p60sa-1-mxp4860d1a",
      "slug": "kerr-kapstone-a-kx12p60sa-1-mxp4860d1a",
      "modelId": "model-kerr-kapstone-a-kx12p60sa-1",
      "outdoorUnitId": "ou-kerr-kapstone-a-kx12p60sa-1",
      "indoorUnitId": "iu-mxp4860d1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-kerr-kapstone-epa",
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
