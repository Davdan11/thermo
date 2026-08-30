import type { BrandDataset } from "../../types";

export const brand_iffalconDataset: BrandDataset = {
  "brand": {
    "id": "brand-iffalcon",
    "slug": "iffalcon",
    "name": "iFFALCON",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour iFFALCON",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-iffalcon-epa",
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
      "id": "series-iffalcon-free-matcht-24s-r32",
      "slug": "iffalcon-free-matcht-24s-r32",
      "name": "free matcht 24S R32",
      "brandId": "brand-iffalcon",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série free matcht 24S R32 de iFFALCON",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-iffalcon-breezein-r32-23s",
      "slug": "iffalcon-breezein-r32-23s",
      "name": "BreezeIN R32 23S",
      "brandId": "brand-iffalcon",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série BreezeIN R32 23S de iFFALCON",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-iffalcon-f18fmh24xqc",
      "slug": "iffalcon-f18fmh24xqc",
      "name": "iFFALCON F18FMH24XQC",
      "seriesId": "series-iffalcon-free-matcht-24s-r32",
      "brandId": "brand-iffalcon",
      "modelNumber": "F18FMH24XQC",
      "normalizedModelNumber": "f18fmh24xqc",
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
      "id": "model-iffalcon-f12sbh23bqc",
      "slug": "iffalcon-f12sbh23bqc",
      "name": "iFFALCON F12SBH23BQC",
      "seriesId": "series-iffalcon-breezein-r32-23s",
      "brandId": "brand-iffalcon",
      "modelNumber": "F12SBH23BQC",
      "normalizedModelNumber": "f12sbh23bqc",
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
      "id": "model-iffalcon-f42fmh22xqc",
      "slug": "iffalcon-f42fmh22xqc",
      "name": "iFFALCON F42FMH22XQC",
      "seriesId": "series-iffalcon-free-matcht-24s-r32",
      "brandId": "brand-iffalcon",
      "modelNumber": "F42FMH22XQC",
      "normalizedModelNumber": "f42fmh22xqc",
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
      "id": "model-iffalcon-f18sbh23xqc",
      "slug": "iffalcon-f18sbh23xqc",
      "name": "iFFALCON F18SBH23XQC",
      "seriesId": "series-iffalcon-breezein-r32-23s",
      "brandId": "brand-iffalcon",
      "modelNumber": "F18SBH23XQC",
      "normalizedModelNumber": "f18sbh23xqc",
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
      "id": "model-iffalcon-f12sbh24xqc",
      "slug": "iffalcon-f12sbh24xqc",
      "name": "iFFALCON F12SBH24XQC",
      "seriesId": "series-iffalcon-breezein-r32-23s",
      "brandId": "brand-iffalcon",
      "modelNumber": "F12SBH24XQC",
      "normalizedModelNumber": "f12sbh24xqc",
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
      "id": "model-iffalcon-f09sbh23bqc",
      "slug": "iffalcon-f09sbh23bqc",
      "name": "iFFALCON F09SBH23BQC",
      "seriesId": "series-iffalcon-breezein-r32-23s",
      "brandId": "brand-iffalcon",
      "modelNumber": "F09SBH23BQC",
      "normalizedModelNumber": "f09sbh23bqc",
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
      "id": "model-iffalcon-f09sbh23xqc",
      "slug": "iffalcon-f09sbh23xqc",
      "name": "iFFALCON F09SBH23XQC",
      "seriesId": "series-iffalcon-breezein-r32-23s",
      "brandId": "brand-iffalcon",
      "modelNumber": "F09SBH23XQC",
      "normalizedModelNumber": "f09sbh23xqc",
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
      "id": "model-iffalcon-f24sbh23xqc",
      "slug": "iffalcon-f24sbh23xqc",
      "name": "iFFALCON F24SBH23XQC",
      "seriesId": "series-iffalcon-breezein-r32-23s",
      "brandId": "brand-iffalcon",
      "modelNumber": "F24SBH23XQC",
      "normalizedModelNumber": "f24sbh23xqc",
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
      "id": "model-iffalcon-f36fmh22xqc",
      "slug": "iffalcon-f36fmh22xqc",
      "name": "iFFALCON F36FMH22XQC",
      "seriesId": "series-iffalcon-free-matcht-24s-r32",
      "brandId": "brand-iffalcon",
      "modelNumber": "F36FMH22XQC",
      "normalizedModelNumber": "f36fmh22xqc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 38000,
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
      "id": "model-iffalcon-f27fmh24xqc",
      "slug": "iffalcon-f27fmh24xqc",
      "name": "iFFALCON F27FMH24XQC",
      "seriesId": "series-iffalcon-free-matcht-24s-r32",
      "brandId": "brand-iffalcon",
      "modelNumber": "F27FMH24XQC",
      "normalizedModelNumber": "f27fmh24xqc",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
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
      "id": "ou-iffalcon-f18fmh24xqc",
      "modelNumber": "F18FMH24XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f12sbh23bqc",
      "modelNumber": "F12SBH23BQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f42fmh22xqc",
      "modelNumber": "F42FMH22XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f18sbh23xqc",
      "modelNumber": "F18SBH23XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f12sbh24xqc",
      "modelNumber": "F12SBH24XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f09sbh23bqc",
      "modelNumber": "F09SBH23BQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f09sbh23xqc",
      "modelNumber": "F09SBH23XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f24sbh23xqc",
      "modelNumber": "F24SBH23XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f36fmh22xqc",
      "modelNumber": "F36FMH22XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-iffalcon-f27fmh24xqc",
      "modelNumber": "F27FMH24XQC",
      "brandId": "brand-iffalcon",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-52707",
      "modelNumber": "IU-52707",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-f12sbh23bqe",
      "modelNumber": "F12SBH23BQE",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52712",
      "modelNumber": "IU-52712",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-f18sbh23xqe",
      "modelNumber": "F18SBH23XQE",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-f12sbh24xqe",
      "modelNumber": "F12SBH24XQE",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-f09sbh23bqe",
      "modelNumber": "F09SBH23BQE",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-f09sbh23xqe",
      "modelNumber": "F09SBH23XQE",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-f24sbh23xqe",
      "modelNumber": "F24SBH23XQE",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52711",
      "modelNumber": "IU-52711",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52710",
      "modelNumber": "IU-52710",
      "brandId": "brand-iffalcon",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-iffalcon-f18fmh24xqc-iu-52707",
      "slug": "iffalcon-f18fmh24xqc-iu-52707",
      "modelId": "model-iffalcon-f18fmh24xqc",
      "outdoorUnitId": "ou-iffalcon-f18fmh24xqc",
      "indoorUnitId": "iu-iu-52707",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f12sbh23bqc-f12sbh23bqe",
      "slug": "iffalcon-f12sbh23bqc-f12sbh23bqe",
      "modelId": "model-iffalcon-f12sbh23bqc",
      "outdoorUnitId": "ou-iffalcon-f12sbh23bqc",
      "indoorUnitId": "iu-f12sbh23bqe",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f42fmh22xqc-iu-52712",
      "slug": "iffalcon-f42fmh22xqc-iu-52712",
      "modelId": "model-iffalcon-f42fmh22xqc",
      "outdoorUnitId": "ou-iffalcon-f42fmh22xqc",
      "indoorUnitId": "iu-iu-52712",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f18sbh23xqc-f18sbh23xqe",
      "slug": "iffalcon-f18sbh23xqc-f18sbh23xqe",
      "modelId": "model-iffalcon-f18sbh23xqc",
      "outdoorUnitId": "ou-iffalcon-f18sbh23xqc",
      "indoorUnitId": "iu-f18sbh23xqe",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f12sbh24xqc-f12sbh24xqe",
      "slug": "iffalcon-f12sbh24xqc-f12sbh24xqe",
      "modelId": "model-iffalcon-f12sbh24xqc",
      "outdoorUnitId": "ou-iffalcon-f12sbh24xqc",
      "indoorUnitId": "iu-f12sbh24xqe",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f09sbh23bqc-f09sbh23bqe",
      "slug": "iffalcon-f09sbh23bqc-f09sbh23bqe",
      "modelId": "model-iffalcon-f09sbh23bqc",
      "outdoorUnitId": "ou-iffalcon-f09sbh23bqc",
      "indoorUnitId": "iu-f09sbh23bqe",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f09sbh23xqc-f09sbh23xqe",
      "slug": "iffalcon-f09sbh23xqc-f09sbh23xqe",
      "modelId": "model-iffalcon-f09sbh23xqc",
      "outdoorUnitId": "ou-iffalcon-f09sbh23xqc",
      "indoorUnitId": "iu-f09sbh23xqe",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f24sbh23xqc-f24sbh23xqe",
      "slug": "iffalcon-f24sbh23xqc-f24sbh23xqe",
      "modelId": "model-iffalcon-f24sbh23xqc",
      "outdoorUnitId": "ou-iffalcon-f24sbh23xqc",
      "indoorUnitId": "iu-f24sbh23xqe",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f36fmh22xqc-iu-52711",
      "slug": "iffalcon-f36fmh22xqc-iu-52711",
      "modelId": "model-iffalcon-f36fmh22xqc",
      "outdoorUnitId": "ou-iffalcon-f36fmh22xqc",
      "indoorUnitId": "iu-iu-52711",
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
          "sourceId": "src-iffalcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-iffalcon-f27fmh24xqc-iu-52710",
      "slug": "iffalcon-f27fmh24xqc-iu-52710",
      "modelId": "model-iffalcon-f27fmh24xqc",
      "outdoorUnitId": "ou-iffalcon-f27fmh24xqc",
      "indoorUnitId": "iu-iu-52710",
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
          "sourceId": "src-iffalcon-epa",
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
