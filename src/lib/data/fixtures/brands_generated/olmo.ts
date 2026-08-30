import type { BrandDataset } from "../../types";

export const brand_olmoDataset: BrandDataset = {
  "brand": {
    "id": "brand-olmo",
    "slug": "olmo",
    "name": "OLMO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour OLMO",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-olmo-epa",
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
      "id": "series-olmo-sierra",
      "slug": "olmo-sierra",
      "name": "SIERRA",
      "brandId": "brand-olmo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SIERRA de OLMO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-olmo-ch-series",
      "slug": "olmo-ch-series",
      "name": "CH series",
      "brandId": "brand-olmo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CH series de OLMO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-olmo-os-series",
      "slug": "olmo-os-series",
      "name": "OS series",
      "brandId": "brand-olmo",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série OS series de OLMO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-olmo-hi-ultra-hd",
      "slug": "olmo-hi-ultra-hd",
      "name": "Hi ULTRA HD",
      "brandId": "brand-olmo",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi ULTRA HD de OLMO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-olmo-os-msr24-230vo",
      "slug": "olmo-os-msr24-230vo",
      "name": "OLMO OS-MSR24-230VO",
      "seriesId": "series-olmo-sierra",
      "brandId": "brand-olmo",
      "modelNumber": "OS-MSR24-230VO",
      "normalizedModelNumber": "os-msr24-230vo",
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
      "id": "model-olmo-os-msr36-230vo",
      "slug": "olmo-os-msr36-230vo",
      "name": "OLMO OS-MSR36-230VO",
      "seriesId": "series-olmo-sierra",
      "brandId": "brand-olmo",
      "modelNumber": "OS-MSR36-230VO",
      "normalizedModelNumber": "os-msr36-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-olmo-os-msr18-230vo",
      "slug": "olmo-os-msr18-230vo",
      "name": "OLMO OS-MSR18-230VO",
      "seriesId": "series-olmo-sierra",
      "brandId": "brand-olmo",
      "modelNumber": "OS-MSR18-230VO",
      "normalizedModelNumber": "os-msr18-230vo",
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
      "id": "model-olmo-os-msr42-230vo",
      "slug": "olmo-os-msr42-230vo",
      "name": "OLMO OS-MSR42-230VO",
      "seriesId": "series-olmo-sierra",
      "brandId": "brand-olmo",
      "modelNumber": "OS-MSR42-230VO",
      "normalizedModelNumber": "os-msr42-230vo",
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
      "id": "model-olmo-ch-el30-230vo",
      "slug": "olmo-ch-el30-230vo",
      "name": "OLMO CH-EL30-230VO",
      "seriesId": "series-olmo-ch-series",
      "brandId": "brand-olmo",
      "modelNumber": "CH-EL30-230VO",
      "normalizedModelNumber": "ch-el30-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-olmo-os-el09alp230vo",
      "slug": "olmo-os-el09alp230vo",
      "name": "OLMO OS-EL09ALP230VO",
      "seriesId": "series-olmo-os-series",
      "brandId": "brand-olmo",
      "modelNumber": "OS-EL09ALP230VO",
      "normalizedModelNumber": "os-el09alp230vo",
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
      "id": "model-olmo-os-eah36-230vo",
      "slug": "olmo-os-eah36-230vo",
      "name": "OLMO OS-EAH36-230VO",
      "seriesId": "series-olmo-hi-ultra-hd",
      "brandId": "brand-olmo",
      "modelNumber": "OS-EAH36-230VO",
      "normalizedModelNumber": "os-eah36-230vo",
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
      "id": "model-olmo-os-eah48-230vo",
      "slug": "olmo-os-eah48-230vo",
      "name": "OLMO OS-EAH48-230VO",
      "seriesId": "series-olmo-hi-ultra-hd",
      "brandId": "brand-olmo",
      "modelNumber": "OS-EAH48-230VO",
      "normalizedModelNumber": "os-eah48-230vo",
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
      "id": "model-olmo-os-eah24-230vo",
      "slug": "olmo-os-eah24-230vo",
      "name": "OLMO OS-EAH24-230VO",
      "seriesId": "series-olmo-hi-ultra-hd",
      "brandId": "brand-olmo",
      "modelNumber": "OS-EAH24-230VO",
      "normalizedModelNumber": "os-eah24-230vo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "ou-olmo-os-msr24-230vo",
      "modelNumber": "OS-MSR24-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-msr36-230vo",
      "modelNumber": "OS-MSR36-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-msr18-230vo",
      "modelNumber": "OS-MSR18-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-msr42-230vo",
      "modelNumber": "OS-MSR42-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-ch-el30-230vo",
      "modelNumber": "CH-EL30-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-el09alp230vo",
      "modelNumber": "OS-EL09ALP230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-eah36-230vo",
      "modelNumber": "OS-EAH36-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-eah48-230vo",
      "modelNumber": "OS-EAH48-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-olmo-os-eah24-230vo",
      "modelNumber": "OS-EAH24-230VO",
      "brandId": "brand-olmo",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-49849",
      "modelNumber": "IU-49849",
      "brandId": "brand-olmo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49850",
      "modelNumber": "IU-49850",
      "brandId": "brand-olmo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49848",
      "modelNumber": "IU-49848",
      "brandId": "brand-olmo",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49851",
      "modelNumber": "IU-49851",
      "brandId": "brand-olmo",
      "type": "wall-single"
    },
    {
      "id": "iu-ch-30astwm-230vi",
      "modelNumber": "CH-30ASTWM-230VI",
      "brandId": "brand-olmo",
      "type": "wall-single"
    },
    {
      "id": "iu-os-el09alp230vi",
      "modelNumber": "OS -EL09ALP230VI",
      "brandId": "brand-olmo",
      "type": "wall-single"
    },
    {
      "id": "iu-os-eah36-230vi",
      "modelNumber": "OS-EAH36-230VI",
      "brandId": "brand-olmo",
      "type": "central-ducted"
    },
    {
      "id": "iu-os-eah48-230vi",
      "modelNumber": "OS-EAH48-230VI",
      "brandId": "brand-olmo",
      "type": "central-ducted"
    },
    {
      "id": "iu-os-eah24-230vi",
      "modelNumber": "OS-EAH24-230VI",
      "brandId": "brand-olmo",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-olmo-os-msr24-230vo-iu-49849",
      "slug": "olmo-os-msr24-230vo-iu-49849",
      "modelId": "model-olmo-os-msr24-230vo",
      "outdoorUnitId": "ou-olmo-os-msr24-230vo",
      "indoorUnitId": "iu-iu-49849",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.05,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-msr36-230vo-iu-49850",
      "slug": "olmo-os-msr36-230vo-iu-49850",
      "modelId": "model-olmo-os-msr36-230vo",
      "outdoorUnitId": "ou-olmo-os-msr36-230vo",
      "indoorUnitId": "iu-iu-49850",
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
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-msr18-230vo-iu-49848",
      "slug": "olmo-os-msr18-230vo-iu-49848",
      "modelId": "model-olmo-os-msr18-230vo",
      "outdoorUnitId": "ou-olmo-os-msr18-230vo",
      "indoorUnitId": "iu-iu-49848",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-msr42-230vo-iu-49851",
      "slug": "olmo-os-msr42-230vo-iu-49851",
      "modelId": "model-olmo-os-msr42-230vo",
      "outdoorUnitId": "ou-olmo-os-msr42-230vo",
      "indoorUnitId": "iu-iu-49851",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.95,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-ch-el30-230vo-ch-30astwm-230vi",
      "slug": "olmo-ch-el30-230vo-ch-30astwm-230vi",
      "modelId": "model-olmo-ch-el30-230vo",
      "outdoorUnitId": "ou-olmo-ch-el30-230vo",
      "indoorUnitId": "iu-ch-30astwm-230vi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-el09alp230vo-os-el09alp230vi",
      "slug": "olmo-os-el09alp230vo-os-el09alp230vi",
      "modelId": "model-olmo-os-el09alp230vo",
      "outdoorUnitId": "ou-olmo-os-el09alp230vo",
      "indoorUnitId": "iu-os-el09alp230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-eah36-230vo-os-eah36-230vi",
      "slug": "olmo-os-eah36-230vo-os-eah36-230vi",
      "modelId": "model-olmo-os-eah36-230vo",
      "outdoorUnitId": "ou-olmo-os-eah36-230vo",
      "indoorUnitId": "iu-os-eah36-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-eah48-230vo-os-eah48-230vi",
      "slug": "olmo-os-eah48-230vo-os-eah48-230vi",
      "modelId": "model-olmo-os-eah48-230vo",
      "outdoorUnitId": "ou-olmo-os-eah48-230vo",
      "indoorUnitId": "iu-os-eah48-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-olmo-os-eah24-230vo-os-eah24-230vi",
      "slug": "olmo-os-eah24-230vo-os-eah24-230vi",
      "modelId": "model-olmo-os-eah24-230vo",
      "outdoorUnitId": "ou-olmo-os-eah24-230vo",
      "indoorUnitId": "iu-os-eah24-230vi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-olmo-epa",
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
