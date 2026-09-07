import type { BrandDataset } from "../../types";

export const brand_kardaDataset: BrandDataset = {
  "brand": {
    "id": "brand-karda",
    "slug": "karda",
    "name": "KARDA",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour KARDA",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-karda-epa",
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
      "id": "series-karda-3ka-series",
      "slug": "karda-3ka-series",
      "name": "3KA Series",
      "brandId": "brand-karda",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 3KA Series de KARDA",
      "imageUrl": "/images/series/karda-karda-3ka-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-karda-karda",
      "slug": "karda-karda",
      "name": "KARDA",
      "brandId": "brand-karda",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KARDA de KARDA",
      "imageUrl": "/images/series/karda-karda-karda.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-karda-3kar-series",
      "slug": "karda-3kar-series",
      "name": "3KAR series",
      "brandId": "brand-karda",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 3KAR series de KARDA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-karda-3pa-series",
      "slug": "karda-3pa-series",
      "name": "3PA Series",
      "brandId": "brand-karda",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 3PA Series de KARDA",
      "imageUrl": "/images/series/karda-karda-3pa-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-karda-3karda09szo",
      "slug": "karda-3karda09szo",
      "name": "KARDA 3KARDA09SZO",
      "seriesId": "series-karda-3ka-series",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA09SZO",
      "normalizedModelNumber": "3karda09szo",
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
      "id": "model-karda-3karda12szo",
      "slug": "karda-3karda12szo",
      "name": "KARDA 3KARDA12SZO",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA12SZO",
      "normalizedModelNumber": "3karda12szo",
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
      "id": "model-karda-3karda27mz3",
      "slug": "karda-3karda27mz3",
      "name": "KARDA 3KARDA27MZ3",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA27MZ3",
      "normalizedModelNumber": "3karda27mz3",
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
    },
    {
      "id": "model-karda-3karda24szo",
      "slug": "karda-3karda24szo",
      "name": "KARDA 3KARDA24SZO",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA24SZO",
      "normalizedModelNumber": "3karda24szo",
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
      "id": "model-karda-3karda18szo",
      "slug": "karda-3karda18szo",
      "name": "KARDA 3KARDA18SZO",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA18SZO",
      "normalizedModelNumber": "3karda18szo",
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
      "id": "model-karda-3pamshh18-szo",
      "slug": "karda-3pamshh18-szo",
      "name": "KARDA 3PAMSHH18-SZO",
      "seriesId": "series-karda-3pa-series",
      "brandId": "brand-karda",
      "modelNumber": "3PAMSHH18-SZO",
      "normalizedModelNumber": "3pamshh18-szo",
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
      "id": "model-karda-3karda48mz5",
      "slug": "karda-3karda48mz5",
      "name": "KARDA 3KARDA48MZ5",
      "seriesId": "series-karda-3kar-series",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA48MZ5",
      "normalizedModelNumber": "3karda48mz5",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "model-karda-3karda18mz2",
      "slug": "karda-3karda18mz2",
      "name": "KARDA 3KARDA18MZ2",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA18MZ2",
      "normalizedModelNumber": "3karda18mz2",
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
      "id": "model-karda-3karda36mz4",
      "slug": "karda-3karda36mz4",
      "name": "KARDA 3KARDA36MZ4",
      "seriesId": "series-karda-3kar-series",
      "brandId": "brand-karda",
      "modelNumber": "3KARDA36MZ4",
      "normalizedModelNumber": "3karda36mz4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
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
      "id": "model-karda-1karda24szo205",
      "slug": "karda-1karda24szo205",
      "name": "KARDA 1KARDA24SZO20.5",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "1KARDA24SZO20.5",
      "normalizedModelNumber": "1karda24szo20.5",
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
      "id": "model-karda-2karda18szo20",
      "slug": "karda-2karda18szo20",
      "name": "KARDA 2KARDA18SZO20",
      "seriesId": "series-karda-karda",
      "brandId": "brand-karda",
      "modelNumber": "2KARDA18SZO20",
      "normalizedModelNumber": "2karda18szo20",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-karda-3karda09szo",
      "modelNumber": "3KARDA09SZO",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda12szo",
      "modelNumber": "3KARDA12SZO",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda27mz3",
      "modelNumber": "3KARDA27MZ3",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda24szo",
      "modelNumber": "3KARDA24SZO",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda18szo",
      "modelNumber": "3KARDA18SZO",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3pamshh18-szo",
      "modelNumber": "3PAMSHH18-SZO",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda48mz5",
      "modelNumber": "3KARDA48MZ5",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda18mz2",
      "modelNumber": "3KARDA18MZ2",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-3karda36mz4",
      "modelNumber": "3KARDA36MZ4",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-1karda24szo205",
      "modelNumber": "1KARDA24SZO20.5",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-karda-2karda18szo20",
      "modelNumber": "2KARDA18SZO20",
      "brandId": "brand-karda",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-3pamshh09-uvw",
      "modelNumber": "3PAMSHH09-UVW",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda09uvw",
      "modelNumber": "3KARDA09UVW",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda12con-2",
      "modelNumber": "3KARDA12CON-2",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-2karda12uvcs",
      "modelNumber": "2KARDA12UVCS",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda12con",
      "modelNumber": "3KARDA12CON",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-1karda12uvw",
      "modelNumber": "1KARDA12UVW",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46355",
      "modelNumber": "IU-46355",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda12uvw",
      "modelNumber": "3KARDA12UVW",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-2karda12uvc",
      "modelNumber": "2KARDA12UVC",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda24uvw",
      "modelNumber": "3KARDA24UVW",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda12uvc",
      "modelNumber": "3KARDA12UVC",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda18uvw",
      "modelNumber": "3KARDA18UVW",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46357",
      "modelNumber": "IU-46357",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46347",
      "modelNumber": "IU-46347",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda24uvc",
      "modelNumber": "3KARDA24UVC",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda09uvd",
      "modelNumber": "3KARDA09UVD",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46356",
      "modelNumber": "IU-46356",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda18uvc",
      "modelNumber": "3KARDA18UVC",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-2karda18uvc",
      "modelNumber": "2KARDA18UVC",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda12uvd",
      "modelNumber": "3KARDA12UVD",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda24uvd",
      "modelNumber": "3KARDA24UVD",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-2pamsdh24",
      "modelNumber": "2PAMSDH24",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-2pamsdh18",
      "modelNumber": "2PAMSDH18",
      "brandId": "brand-karda",
      "type": "wall-single"
    },
    {
      "id": "iu-3karda18uvd",
      "modelNumber": "3KARDA18UVD",
      "brandId": "brand-karda",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-karda-3karda09szo-3pamshh09-uvw",
      "slug": "karda-3karda09szo-3pamshh09-uvw",
      "modelId": "model-karda-3karda09szo",
      "outdoorUnitId": "ou-karda-3karda09szo",
      "indoorUnitId": "iu-3pamshh09-uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda09szo-3karda09uvw",
      "slug": "karda-3karda09szo-3karda09uvw",
      "modelId": "model-karda-3karda09szo",
      "outdoorUnitId": "ou-karda-3karda09szo",
      "indoorUnitId": "iu-3karda09uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-3karda12con-2",
      "slug": "karda-3karda12szo-3karda12con-2",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-3karda12con-2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-2karda12uvcs",
      "slug": "karda-3karda12szo-2karda12uvcs",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-2karda12uvcs",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-3karda12con",
      "slug": "karda-3karda12szo-3karda12con",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-3karda12con",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-1karda12uvw",
      "slug": "karda-3karda12szo-1karda12uvw",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-1karda12uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda27mz3-iu-46355",
      "slug": "karda-3karda27mz3-iu-46355",
      "modelId": "model-karda-3karda27mz3",
      "outdoorUnitId": "ou-karda-3karda27mz3",
      "indoorUnitId": "iu-iu-46355",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-3karda12uvw",
      "slug": "karda-3karda12szo-3karda12uvw",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-3karda12uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-2karda12uvc",
      "slug": "karda-3karda12szo-2karda12uvc",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-2karda12uvc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda24szo-3karda24uvw",
      "slug": "karda-3karda24szo-3karda24uvw",
      "modelId": "model-karda-3karda24szo",
      "outdoorUnitId": "ou-karda-3karda24szo",
      "indoorUnitId": "iu-3karda24uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-3karda12uvc",
      "slug": "karda-3karda12szo-3karda12uvc",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-3karda12uvc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda18szo-3karda18uvw",
      "slug": "karda-3karda18szo-3karda18uvw",
      "modelId": "model-karda-3karda18szo",
      "outdoorUnitId": "ou-karda-3karda18szo",
      "indoorUnitId": "iu-3karda18uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3pamshh18-szo-3karda18uvw",
      "slug": "karda-3pamshh18-szo-3karda18uvw",
      "modelId": "model-karda-3pamshh18-szo",
      "outdoorUnitId": "ou-karda-3pamshh18-szo",
      "indoorUnitId": "iu-3karda18uvw",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda48mz5-iu-46357",
      "slug": "karda-3karda48mz5-iu-46357",
      "modelId": "model-karda-3karda48mz5",
      "outdoorUnitId": "ou-karda-3karda48mz5",
      "indoorUnitId": "iu-iu-46357",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda18mz2-iu-46347",
      "slug": "karda-3karda18mz2-iu-46347",
      "modelId": "model-karda-3karda18mz2",
      "outdoorUnitId": "ou-karda-3karda18mz2",
      "indoorUnitId": "iu-iu-46347",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda24szo-3karda24uvc",
      "slug": "karda-3karda24szo-3karda24uvc",
      "modelId": "model-karda-3karda24szo",
      "outdoorUnitId": "ou-karda-3karda24szo",
      "indoorUnitId": "iu-3karda24uvc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda09szo-3karda09uvd",
      "slug": "karda-3karda09szo-3karda09uvd",
      "modelId": "model-karda-3karda09szo",
      "outdoorUnitId": "ou-karda-3karda09szo",
      "indoorUnitId": "iu-3karda09uvd",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda36mz4-iu-46356",
      "slug": "karda-3karda36mz4-iu-46356",
      "modelId": "model-karda-3karda36mz4",
      "outdoorUnitId": "ou-karda-3karda36mz4",
      "indoorUnitId": "iu-iu-46356",
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
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda18szo-3karda18uvc",
      "slug": "karda-3karda18szo-3karda18uvc",
      "modelId": "model-karda-3karda18szo",
      "outdoorUnitId": "ou-karda-3karda18szo",
      "indoorUnitId": "iu-3karda18uvc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda18szo-2karda18uvc",
      "slug": "karda-3karda18szo-2karda18uvc",
      "modelId": "model-karda-3karda18szo",
      "outdoorUnitId": "ou-karda-3karda18szo",
      "indoorUnitId": "iu-2karda18uvc",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda12szo-3karda12uvd",
      "slug": "karda-3karda12szo-3karda12uvd",
      "modelId": "model-karda-3karda12szo",
      "outdoorUnitId": "ou-karda-3karda12szo",
      "indoorUnitId": "iu-3karda12uvd",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda24szo-3karda24uvd",
      "slug": "karda-3karda24szo-3karda24uvd",
      "modelId": "model-karda-3karda24szo",
      "outdoorUnitId": "ou-karda-3karda24szo",
      "indoorUnitId": "iu-3karda24uvd",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-1karda24szo205-2pamsdh24",
      "slug": "karda-1karda24szo205-2pamsdh24",
      "modelId": "model-karda-1karda24szo205",
      "outdoorUnitId": "ou-karda-1karda24szo205",
      "indoorUnitId": "iu-2pamsdh24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-2karda18szo20-2pamsdh18",
      "slug": "karda-2karda18szo20-2pamsdh18",
      "modelId": "model-karda-2karda18szo20",
      "outdoorUnitId": "ou-karda-2karda18szo20",
      "indoorUnitId": "iu-2pamsdh18",
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
          "sourceId": "src-karda-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-karda-3karda18szo-3karda18uvd",
      "slug": "karda-3karda18szo-3karda18uvd",
      "modelId": "model-karda-3karda18szo",
      "outdoorUnitId": "ou-karda-3karda18szo",
      "indoorUnitId": "iu-3karda18uvd",
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
          "sourceId": "src-karda-epa",
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
