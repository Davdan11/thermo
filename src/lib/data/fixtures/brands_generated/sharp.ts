import type { BrandDataset } from "../../types";

export const brand_sharpDataset: BrandDataset = {
  "brand": {
    "id": "brand-sharp",
    "slug": "sharp",
    "name": "Sharp",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Sharp",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-sharp-epa",
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
      "id": "series-sharp-single-zone-series",
      "slug": "sharp-single-zone-series",
      "name": "Single Zone series",
      "brandId": "brand-sharp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Single Zone series de Sharp",
      "imageUrl": "/images/series/sharp-sharp-single-zone-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-sharp-multi-zone-series",
      "slug": "sharp-multi-zone-series",
      "name": "Multi Zone series",
      "brandId": "brand-sharp",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi Zone series de Sharp",
      "imageUrl": "/images/series/sharp-sharp-multi-zone-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-sharp-ae-x12chu",
      "slug": "sharp-ae-x12chu",
      "name": "Sharp AE-X12CHU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X12CHU",
      "normalizedModelNumber": "ae-x12chu",
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
      "id": "model-sharp-ae-x18zhu",
      "slug": "sharp-ae-x18zhu",
      "name": "Sharp AE-X18ZHU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X18ZHU",
      "normalizedModelNumber": "ae-x18zhu",
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
      "id": "model-sharp-ae-x18chu",
      "slug": "sharp-ae-x18chu",
      "name": "Sharp AE-X18CHU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X18CHU",
      "normalizedModelNumber": "ae-x18chu",
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
      "id": "model-sharp-ae-x12zhu1",
      "slug": "sharp-ae-x12zhu1",
      "name": "Sharp AE-X12ZHU1",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X12ZHU1",
      "normalizedModelNumber": "ae-x12zhu1",
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
      "id": "model-sharp-ae-x3m24cu",
      "slug": "sharp-ae-x3m24cu",
      "name": "Sharp AE-X3M24CU",
      "seriesId": "series-sharp-multi-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X3M24CU",
      "normalizedModelNumber": "ae-x3m24cu",
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
      "id": "model-sharp-ae-x18cu",
      "slug": "sharp-ae-x18cu",
      "name": "Sharp AE-X18CU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X18CU",
      "normalizedModelNumber": "ae-x18cu",
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
      "id": "model-sharp-ae-x12dwu",
      "slug": "sharp-ae-x12dwu",
      "name": "Sharp AE-X12DWU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X12DWU",
      "normalizedModelNumber": "ae-x12dwu",
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
      "id": "model-sharp-ae-x15cu",
      "slug": "sharp-ae-x15cu",
      "name": "Sharp AE-X15CU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X15CU",
      "normalizedModelNumber": "ae-x15cu",
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
      "id": "model-sharp-ae-x15zu1",
      "slug": "sharp-ae-x15zu1",
      "name": "Sharp AE-X15ZU1",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X15ZU1",
      "normalizedModelNumber": "ae-x15zu1",
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
      "id": "model-sharp-ae-x3m24bu",
      "slug": "sharp-ae-x3m24bu",
      "name": "Sharp AE-X3M24BU",
      "seriesId": "series-sharp-multi-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X3M24BU",
      "normalizedModelNumber": "ae-x3m24bu",
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
      "id": "model-sharp-ae-x18zu1",
      "slug": "sharp-ae-x18zu1",
      "name": "Sharp AE-X18ZU1",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X18ZU1",
      "normalizedModelNumber": "ae-x18zu1",
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
      "id": "model-sharp-ae-x12cu",
      "slug": "sharp-ae-x12cu",
      "name": "Sharp AE-X12CU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X12CU",
      "normalizedModelNumber": "ae-x12cu",
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
      "id": "model-sharp-ae-x24zu1",
      "slug": "sharp-ae-x24zu1",
      "name": "Sharp AE-X24ZU1",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X24ZU1",
      "normalizedModelNumber": "ae-x24zu1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-sharp-ae-x12zu1",
      "slug": "sharp-ae-x12zu1",
      "name": "Sharp AE-X12ZU1",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X12ZU1",
      "normalizedModelNumber": "ae-x12zu1",
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
      "id": "model-sharp-ae-x24cu",
      "slug": "sharp-ae-x24cu",
      "name": "Sharp AE-X24CU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X24CU",
      "normalizedModelNumber": "ae-x24cu",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "model-sharp-ae-x12cpu",
      "slug": "sharp-ae-x12cpu",
      "name": "Sharp AE-X12CPU",
      "seriesId": "series-sharp-single-zone-series",
      "brandId": "brand-sharp",
      "modelNumber": "AE-X12CPU",
      "normalizedModelNumber": "ae-x12cpu",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 12500,
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
      "id": "ou-sharp-ae-x12chu",
      "modelNumber": "AE-X12CHU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x18zhu",
      "modelNumber": "AE-X18ZHU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x18chu",
      "modelNumber": "AE-X18CHU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x12zhu1",
      "modelNumber": "AE-X12ZHU1",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x3m24cu",
      "modelNumber": "AE-X3M24CU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x18cu",
      "modelNumber": "AE-X18CU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x12dwu",
      "modelNumber": "AE-X12DWU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x15cu",
      "modelNumber": "AE-X15CU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x15zu1",
      "modelNumber": "AE-X15ZU1",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x3m24bu",
      "modelNumber": "AE-X3M24BU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x18zu1",
      "modelNumber": "AE-X18ZU1",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x12cu",
      "modelNumber": "AE-X12CU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x24zu1",
      "modelNumber": "AE-X24ZU1",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x12zu1",
      "modelNumber": "AE-X12ZU1",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x24cu",
      "modelNumber": "AE-X24CU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-sharp-ae-x12cpu",
      "modelNumber": "AE-X12CPU",
      "brandId": "brand-sharp",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ay-xp12chu",
      "modelNumber": "AY-XP12CHU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp12chu-b",
      "modelNumber": "AY-XP12CHU-B",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp18zhu",
      "modelNumber": "AY-XP18ZHU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp18chu",
      "modelNumber": "AY-XP18CHU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp12zhu1",
      "modelNumber": "AY-XP12ZHU1",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51091",
      "modelNumber": "IU-51091",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xpc18cu-b",
      "modelNumber": "AY-XPC18CU-B",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp12dwu",
      "modelNumber": "AY-XP12DWU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp15cu-b",
      "modelNumber": "AY-XP15CU-B",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp15zu1-b",
      "modelNumber": "AY-XP15ZU1-B",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp15zu1",
      "modelNumber": "AY-XP15ZU1",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xpc18cu",
      "modelNumber": "AY-XPC18CU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp15cu",
      "modelNumber": "AY-XP15CU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51090",
      "modelNumber": "IU-51090",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xpc18bu-b",
      "modelNumber": "AY-XPC18BU-B",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp18zu1",
      "modelNumber": "AY-XP18ZU1",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xpc12cu",
      "modelNumber": "AY-XPC12CU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp24zu1",
      "modelNumber": "AY-XP24ZU1",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp12zu1",
      "modelNumber": "AY-XP12ZU1",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp24cu",
      "modelNumber": "AY-XP24CU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    },
    {
      "id": "iu-ay-xp12cpu",
      "modelNumber": "AY-XP12CPU",
      "brandId": "brand-sharp",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-sharp-ae-x12chu-ay-xp12chu",
      "slug": "sharp-ae-x12chu-ay-xp12chu",
      "modelId": "model-sharp-ae-x12chu",
      "outdoorUnitId": "ou-sharp-ae-x12chu",
      "indoorUnitId": "iu-ay-xp12chu",
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
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x12chu-ay-xp12chu-b",
      "slug": "sharp-ae-x12chu-ay-xp12chu-b",
      "modelId": "model-sharp-ae-x12chu",
      "outdoorUnitId": "ou-sharp-ae-x12chu",
      "indoorUnitId": "iu-ay-xp12chu-b",
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
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x18zhu-ay-xp18zhu",
      "slug": "sharp-ae-x18zhu-ay-xp18zhu",
      "modelId": "model-sharp-ae-x18zhu",
      "outdoorUnitId": "ou-sharp-ae-x18zhu",
      "indoorUnitId": "iu-ay-xp18zhu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x18chu-ay-xp18chu",
      "slug": "sharp-ae-x18chu-ay-xp18chu",
      "modelId": "model-sharp-ae-x18chu",
      "outdoorUnitId": "ou-sharp-ae-x18chu",
      "indoorUnitId": "iu-ay-xp18chu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x12zhu1-ay-xp12zhu1",
      "slug": "sharp-ae-x12zhu1-ay-xp12zhu1",
      "modelId": "model-sharp-ae-x12zhu1",
      "outdoorUnitId": "ou-sharp-ae-x12zhu1",
      "indoorUnitId": "iu-ay-xp12zhu1",
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
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x3m24cu-iu-51091",
      "slug": "sharp-ae-x3m24cu-iu-51091",
      "modelId": "model-sharp-ae-x3m24cu",
      "outdoorUnitId": "ou-sharp-ae-x3m24cu",
      "indoorUnitId": "iu-iu-51091",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x18cu-ay-xpc18cu-b",
      "slug": "sharp-ae-x18cu-ay-xpc18cu-b",
      "modelId": "model-sharp-ae-x18cu",
      "outdoorUnitId": "ou-sharp-ae-x18cu",
      "indoorUnitId": "iu-ay-xpc18cu-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x12dwu-ay-xp12dwu",
      "slug": "sharp-ae-x12dwu-ay-xp12dwu",
      "modelId": "model-sharp-ae-x12dwu",
      "outdoorUnitId": "ou-sharp-ae-x12dwu",
      "indoorUnitId": "iu-ay-xp12dwu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x15cu-ay-xp15cu-b",
      "slug": "sharp-ae-x15cu-ay-xp15cu-b",
      "modelId": "model-sharp-ae-x15cu",
      "outdoorUnitId": "ou-sharp-ae-x15cu",
      "indoorUnitId": "iu-ay-xp15cu-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x15zu1-ay-xp15zu1-b",
      "slug": "sharp-ae-x15zu1-ay-xp15zu1-b",
      "modelId": "model-sharp-ae-x15zu1",
      "outdoorUnitId": "ou-sharp-ae-x15zu1",
      "indoorUnitId": "iu-ay-xp15zu1-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x15zu1-ay-xp15zu1",
      "slug": "sharp-ae-x15zu1-ay-xp15zu1",
      "modelId": "model-sharp-ae-x15zu1",
      "outdoorUnitId": "ou-sharp-ae-x15zu1",
      "indoorUnitId": "iu-ay-xp15zu1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x18cu-ay-xpc18cu",
      "slug": "sharp-ae-x18cu-ay-xpc18cu",
      "modelId": "model-sharp-ae-x18cu",
      "outdoorUnitId": "ou-sharp-ae-x18cu",
      "indoorUnitId": "iu-ay-xpc18cu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x15cu-ay-xp15cu",
      "slug": "sharp-ae-x15cu-ay-xp15cu",
      "modelId": "model-sharp-ae-x15cu",
      "outdoorUnitId": "ou-sharp-ae-x15cu",
      "indoorUnitId": "iu-ay-xp15cu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x3m24bu-iu-51090",
      "slug": "sharp-ae-x3m24bu-iu-51090",
      "modelId": "model-sharp-ae-x3m24bu",
      "outdoorUnitId": "ou-sharp-ae-x3m24bu",
      "indoorUnitId": "iu-iu-51090",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x18zu1-ay-xpc18bu-b",
      "slug": "sharp-ae-x18zu1-ay-xpc18bu-b",
      "modelId": "model-sharp-ae-x18zu1",
      "outdoorUnitId": "ou-sharp-ae-x18zu1",
      "indoorUnitId": "iu-ay-xpc18bu-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x18zu1-ay-xp18zu1",
      "slug": "sharp-ae-x18zu1-ay-xp18zu1",
      "modelId": "model-sharp-ae-x18zu1",
      "outdoorUnitId": "ou-sharp-ae-x18zu1",
      "indoorUnitId": "iu-ay-xp18zu1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x12cu-ay-xpc12cu",
      "slug": "sharp-ae-x12cu-ay-xpc12cu",
      "modelId": "model-sharp-ae-x12cu",
      "outdoorUnitId": "ou-sharp-ae-x12cu",
      "indoorUnitId": "iu-ay-xpc12cu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x24zu1-ay-xp24zu1",
      "slug": "sharp-ae-x24zu1-ay-xp24zu1",
      "modelId": "model-sharp-ae-x24zu1",
      "outdoorUnitId": "ou-sharp-ae-x24zu1",
      "indoorUnitId": "iu-ay-xp24zu1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x12zu1-ay-xp12zu1",
      "slug": "sharp-ae-x12zu1-ay-xp12zu1",
      "modelId": "model-sharp-ae-x12zu1",
      "outdoorUnitId": "ou-sharp-ae-x12zu1",
      "indoorUnitId": "iu-ay-xp12zu1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x24cu-ay-xp24cu",
      "slug": "sharp-ae-x24cu-ay-xp24cu",
      "modelId": "model-sharp-ae-x24cu",
      "outdoorUnitId": "ou-sharp-ae-x24cu",
      "indoorUnitId": "iu-ay-xp24cu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-sharp-ae-x12cpu-ay-xp12cpu",
      "slug": "sharp-ae-x12cpu-ay-xp12cpu",
      "modelId": "model-sharp-ae-x12cpu",
      "outdoorUnitId": "ou-sharp-ae-x12cpu",
      "indoorUnitId": "iu-ay-xp12cpu",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-sharp-epa",
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
