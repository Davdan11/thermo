import type { BrandDataset } from "../../types";

export const brand_quebec_vairDataset: BrandDataset = {
  "brand": {
    "id": "brand-quebec-vair",
    "slug": "quebec-vair",
    "name": "QUEBEC VAIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour QUEBEC VAIR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-quebec-vair-epa",
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
      "id": "series-quebec-vair-ne-series",
      "slug": "quebec-vair-ne-series",
      "name": "NE series",
      "brandId": "brand-quebec-vair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NE series de QUEBEC VAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-quebec-vair-ne-t52-series",
      "slug": "quebec-vair-ne-t52-series",
      "name": "NE-T52 Series",
      "brandId": "brand-quebec-vair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NE-T52 Series de QUEBEC VAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-quebec-vair-t55-series",
      "slug": "quebec-vair-t55-series",
      "name": "T55 Series",
      "brandId": "brand-quebec-vair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T55 Series de QUEBEC VAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-quebec-vair-ne-t53-aeg12ext",
      "slug": "quebec-vair-ne-t53-aeg12ext",
      "name": "QUEBEC VAIR NE-T53-AEG12EXT",
      "seriesId": "series-quebec-vair-ne-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T53-AEG12EXT",
      "normalizedModelNumber": "ne-t53-aeg12ext",
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
      "id": "model-quebec-vair-ne-t52-qvair3012e",
      "slug": "quebec-vair-ne-t52-qvair3012e",
      "name": "QUEBEC VAIR NE-T52-QVAIR3012E",
      "seriesId": "series-quebec-vair-ne-t52-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T52-QVAIR3012E",
      "normalizedModelNumber": "ne-t52-qvair3012e",
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
      "id": "model-quebec-vair-t55-qvair3012e454",
      "slug": "quebec-vair-t55-qvair3012e454",
      "name": "QUEBEC VAIR T55-QVAIR3012E454",
      "seriesId": "series-quebec-vair-t55-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "T55-QVAIR3012E454",
      "normalizedModelNumber": "t55-qvair3012e454",
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
      "id": "model-quebec-vair-ne-t52-pla18ext",
      "slug": "quebec-vair-ne-t52-pla18ext",
      "name": "QUEBEC VAIR NE-T52-PLA18EXT",
      "seriesId": "series-quebec-vair-ne-t52-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T52-PLA18EXT",
      "normalizedModelNumber": "ne-t52-pla18ext",
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
      "id": "model-quebec-vair-ne-t52-qvair18e",
      "slug": "quebec-vair-ne-t52-qvair18e",
      "name": "QUEBEC VAIR NE-T52-QVAIR18E",
      "seriesId": "series-quebec-vair-ne-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T52-QVAIR18E",
      "normalizedModelNumber": "ne-t52-qvair18e",
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
      "id": "model-quebec-vair-ne-t52-pla12ext",
      "slug": "quebec-vair-ne-t52-pla12ext",
      "name": "QUEBEC VAIR NE-T52-PLA12EXT",
      "seriesId": "series-quebec-vair-ne-t52-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T52-PLA12EXT",
      "normalizedModelNumber": "ne-t52-pla12ext",
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
      "id": "model-quebec-vair-ne-t52-qvair12e",
      "slug": "quebec-vair-ne-t52-qvair12e",
      "name": "QUEBEC VAIR NE-T52-QVAIR12E",
      "seriesId": "series-quebec-vair-ne-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T52-QVAIR12E",
      "normalizedModelNumber": "ne-t52-qvair12e",
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
      "id": "model-quebec-vair-ne-t53-multi28e",
      "slug": "quebec-vair-ne-t53-multi28e",
      "name": "QUEBEC VAIR NE-T53-MULTI28E*",
      "seriesId": "series-quebec-vair-ne-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T53-MULTI28E*",
      "normalizedModelNumber": "ne-t53-multi28e*",
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
      "id": "model-quebec-vair-ne-t53-multi36e",
      "slug": "quebec-vair-ne-t53-multi36e",
      "name": "QUEBEC VAIR NE-T53-MULTI36E*",
      "seriesId": "series-quebec-vair-ne-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T53-MULTI36E*",
      "normalizedModelNumber": "ne-t53-multi36e*",
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
      "id": "model-quebec-vair-ne-t52-qvair3018e",
      "slug": "quebec-vair-ne-t52-qvair3018e",
      "name": "QUEBEC VAIR NE-T52-QVAIR3018E",
      "seriesId": "series-quebec-vair-ne-t52-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T52-QVAIR3018E",
      "normalizedModelNumber": "ne-t52-qvair3018e",
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
      "id": "model-quebec-vair-ne-t53-aeg18ext",
      "slug": "quebec-vair-ne-t53-aeg18ext",
      "name": "QUEBEC VAIR NE-T53-AEG18EXT",
      "seriesId": "series-quebec-vair-ne-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "NE-T53-AEG18EXT",
      "normalizedModelNumber": "ne-t53-aeg18ext",
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
      "id": "model-quebec-vair-t55-qvair3018e454",
      "slug": "quebec-vair-t55-qvair3018e454",
      "name": "QUEBEC VAIR T55-QVAIR3018E454",
      "seriesId": "series-quebec-vair-t55-series",
      "brandId": "brand-quebec-vair",
      "modelNumber": "T55-QVAIR3018E454",
      "normalizedModelNumber": "t55-qvair3018e454",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-quebec-vair-ne-t53-aeg12ext",
      "modelNumber": "NE-T53-AEG12EXT",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t52-qvair3012e",
      "modelNumber": "NE-T52-QVAIR3012E",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-t55-qvair3012e454",
      "modelNumber": "T55-QVAIR3012E454",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-quebec-vair-ne-t52-pla18ext",
      "modelNumber": "NE-T52-PLA18EXT",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t52-qvair18e",
      "modelNumber": "NE-T52-QVAIR18E",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t52-pla12ext",
      "modelNumber": "NE-T52-PLA12EXT",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t52-qvair12e",
      "modelNumber": "NE-T52-QVAIR12E",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t53-multi28e",
      "modelNumber": "NE-T53-MULTI28E*",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t53-multi36e",
      "modelNumber": "NE-T53-MULTI36E*",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t52-qvair3018e",
      "modelNumber": "NE-T52-QVAIR3018E",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-ne-t53-aeg18ext",
      "modelNumber": "NE-T53-AEG18EXT",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-quebec-vair-t55-qvair3018e454",
      "modelNumber": "T55-QVAIR3018E454",
      "brandId": "brand-quebec-vair",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ne-t53-aeg12int",
      "modelNumber": "NE-T53-AEG12INT*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-qvair3012i",
      "modelNumber": "NE-T52-QVAIR3012I*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-qvair3012i454",
      "modelNumber": "T55-QVAIR3012I454*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-pla18int",
      "modelNumber": "NE-T52-PLA18INT*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-qvair18i",
      "modelNumber": "NE-T52-QVAIR18I*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-pla12int",
      "modelNumber": "NE-T52-PLA12INT*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-qvair12i",
      "modelNumber": "NE-T52-QVAIR12I*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50302",
      "modelNumber": "IU-50302",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50303",
      "modelNumber": "IU-50303",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-qvair3018i",
      "modelNumber": "NE-T52-QVAIR3018I*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t53-aeg18int",
      "modelNumber": "NE-T53-AEG18INT*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-qvair3018i454",
      "modelNumber": "T55-QVAIR3018I454*",
      "brandId": "brand-quebec-vair",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-quebec-vair-ne-t53-aeg12ext-ne-t53-aeg12int",
      "slug": "quebec-vair-ne-t53-aeg12ext-ne-t53-aeg12int",
      "modelId": "model-quebec-vair-ne-t53-aeg12ext",
      "outdoorUnitId": "ou-quebec-vair-ne-t53-aeg12ext",
      "indoorUnitId": "iu-ne-t53-aeg12int",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t52-qvair3012e-ne-t52-qvair3012i",
      "slug": "quebec-vair-ne-t52-qvair3012e-ne-t52-qvair3012i",
      "modelId": "model-quebec-vair-ne-t52-qvair3012e",
      "outdoorUnitId": "ou-quebec-vair-ne-t52-qvair3012e",
      "indoorUnitId": "iu-ne-t52-qvair3012i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-t55-qvair3012e454-t55-qvair3012i454",
      "slug": "quebec-vair-t55-qvair3012e454-t55-qvair3012i454",
      "modelId": "model-quebec-vair-t55-qvair3012e454",
      "outdoorUnitId": "ou-quebec-vair-t55-qvair3012e454",
      "indoorUnitId": "iu-t55-qvair3012i454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t52-pla18ext-ne-t52-pla18int",
      "slug": "quebec-vair-ne-t52-pla18ext-ne-t52-pla18int",
      "modelId": "model-quebec-vair-ne-t52-pla18ext",
      "outdoorUnitId": "ou-quebec-vair-ne-t52-pla18ext",
      "indoorUnitId": "iu-ne-t52-pla18int",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t52-qvair18e-ne-t52-qvair18i",
      "slug": "quebec-vair-ne-t52-qvair18e-ne-t52-qvair18i",
      "modelId": "model-quebec-vair-ne-t52-qvair18e",
      "outdoorUnitId": "ou-quebec-vair-ne-t52-qvair18e",
      "indoorUnitId": "iu-ne-t52-qvair18i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t52-pla12ext-ne-t52-pla12int",
      "slug": "quebec-vair-ne-t52-pla12ext-ne-t52-pla12int",
      "modelId": "model-quebec-vair-ne-t52-pla12ext",
      "outdoorUnitId": "ou-quebec-vair-ne-t52-pla12ext",
      "indoorUnitId": "iu-ne-t52-pla12int",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t52-qvair12e-ne-t52-qvair12i",
      "slug": "quebec-vair-ne-t52-qvair12e-ne-t52-qvair12i",
      "modelId": "model-quebec-vair-ne-t52-qvair12e",
      "outdoorUnitId": "ou-quebec-vair-ne-t52-qvair12e",
      "indoorUnitId": "iu-ne-t52-qvair12i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t53-multi28e-iu-50302",
      "slug": "quebec-vair-ne-t53-multi28e-iu-50302",
      "modelId": "model-quebec-vair-ne-t53-multi28e",
      "outdoorUnitId": "ou-quebec-vair-ne-t53-multi28e",
      "indoorUnitId": "iu-iu-50302",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t53-multi36e-iu-50303",
      "slug": "quebec-vair-ne-t53-multi36e-iu-50303",
      "modelId": "model-quebec-vair-ne-t53-multi36e",
      "outdoorUnitId": "ou-quebec-vair-ne-t53-multi36e",
      "indoorUnitId": "iu-iu-50303",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t52-qvair3018e-ne-t52-qvair3018i",
      "slug": "quebec-vair-ne-t52-qvair3018e-ne-t52-qvair3018i",
      "modelId": "model-quebec-vair-ne-t52-qvair3018e",
      "outdoorUnitId": "ou-quebec-vair-ne-t52-qvair3018e",
      "indoorUnitId": "iu-ne-t52-qvair3018i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-ne-t53-aeg18ext-ne-t53-aeg18int",
      "slug": "quebec-vair-ne-t53-aeg18ext-ne-t53-aeg18int",
      "modelId": "model-quebec-vair-ne-t53-aeg18ext",
      "outdoorUnitId": "ou-quebec-vair-ne-t53-aeg18ext",
      "indoorUnitId": "iu-ne-t53-aeg18int",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-quebec-vair-t55-qvair3018e454-t55-qvair3018i454",
      "slug": "quebec-vair-t55-qvair3018e454-t55-qvair3018i454",
      "modelId": "model-quebec-vair-t55-qvair3018e454",
      "outdoorUnitId": "ou-quebec-vair-t55-qvair3018e454",
      "indoorUnitId": "iu-t55-qvair3018i454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-quebec-vair-epa",
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
