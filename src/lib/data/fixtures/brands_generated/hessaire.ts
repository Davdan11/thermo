import type { BrandDataset } from "../../types";

export const brand_hessaireDataset: BrandDataset = {
  "brand": {
    "id": "brand-hessaire",
    "slug": "hessaire",
    "name": "Hessaire",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Hessaire",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-hessaire-epa",
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
      "id": "series-hessaire-multi-split",
      "slug": "hessaire-multi-split",
      "name": "Multi-Split",
      "brandId": "brand-hessaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi-Split de Hessaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-hessaire-es",
      "slug": "hessaire-es",
      "name": "ES",
      "brandId": "brand-hessaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ES de Hessaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-hessaire-ultra",
      "slug": "hessaire-ultra",
      "name": "ULTRA",
      "brandId": "brand-hessaire",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ULTRA de Hessaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-hessaire-energy-star",
      "slug": "hessaire-energy-star",
      "name": "Energy Star",
      "brandId": "brand-hessaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Energy Star de Hessaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-hessaire-h-series",
      "slug": "hessaire-h-series",
      "name": "H SERIES",
      "brandId": "brand-hessaire",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série H SERIES de Hessaire",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-hessaire-hm27",
      "slug": "hessaire-hm27",
      "name": "Hessaire HM27",
      "seriesId": "series-hessaire-multi-split",
      "brandId": "brand-hessaire",
      "modelNumber": "HM27",
      "normalizedModelNumber": "hm27",
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
      "id": "model-hessaire-h24fb2",
      "slug": "hessaire-h24fb2",
      "name": "Hessaire H24FB2",
      "seriesId": "series-hessaire-es",
      "brandId": "brand-hessaire",
      "modelNumber": "H24FB2",
      "normalizedModelNumber": "h24fb2",
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
      "id": "model-hessaire-h18e2",
      "slug": "hessaire-h18e2",
      "name": "Hessaire H18E2",
      "seriesId": "series-hessaire-ultra",
      "brandId": "brand-hessaire",
      "modelNumber": "H18E2",
      "normalizedModelNumber": "h18e2",
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
      "id": "model-hessaire-hm18",
      "slug": "hessaire-hm18",
      "name": "Hessaire HM18",
      "seriesId": "series-hessaire-multi-split",
      "brandId": "brand-hessaire",
      "modelNumber": "HM18",
      "normalizedModelNumber": "hm18",
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
      "id": "model-hessaire-h12fb1",
      "slug": "hessaire-h12fb1",
      "name": "Hessaire H12FB1",
      "seriesId": "series-hessaire-es",
      "brandId": "brand-hessaire",
      "modelNumber": "H12FB1",
      "normalizedModelNumber": "h12fb1",
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
      "id": "model-hessaire-h18fb2",
      "slug": "hessaire-h18fb2",
      "name": "Hessaire H18FB2",
      "seriesId": "series-hessaire-es",
      "brandId": "brand-hessaire",
      "modelNumber": "H18FB2",
      "normalizedModelNumber": "h18fb2",
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
      "id": "model-hessaire-h18tt2",
      "slug": "hessaire-h18tt2",
      "name": "Hessaire H18TT2",
      "seriesId": "series-hessaire-es",
      "brandId": "brand-hessaire",
      "modelNumber": "H18TT2",
      "normalizedModelNumber": "h18tt2",
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
      "id": "model-hessaire-hoc48b",
      "slug": "hessaire-hoc48b",
      "name": "Hessaire HOC48B",
      "seriesId": "series-hessaire-energy-star",
      "brandId": "brand-hessaire",
      "modelNumber": "HOC48B",
      "normalizedModelNumber": "hoc48b",
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
      "id": "model-hessaire-hoc24b",
      "slug": "hessaire-hoc24b",
      "name": "Hessaire HOC24B",
      "seriesId": "series-hessaire-energy-star",
      "brandId": "brand-hessaire",
      "modelNumber": "HOC24B",
      "normalizedModelNumber": "hoc24b",
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
      "id": "model-hessaire-hoc48",
      "slug": "hessaire-hoc48",
      "name": "Hessaire HOC48",
      "seriesId": "series-hessaire-h-series",
      "brandId": "brand-hessaire",
      "modelNumber": "HOC48",
      "normalizedModelNumber": "hoc48",
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
      "id": "model-hessaire-hoc24",
      "slug": "hessaire-hoc24",
      "name": "Hessaire HOC24",
      "seriesId": "series-hessaire-h-series",
      "brandId": "brand-hessaire",
      "modelNumber": "HOC24",
      "normalizedModelNumber": "hoc24",
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
      "id": "ou-hessaire-hm27",
      "modelNumber": "HM27",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-h24fb2",
      "modelNumber": "H24FB2",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-h18e2",
      "modelNumber": "H18E2",
      "brandId": "brand-hessaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-hessaire-hm18",
      "modelNumber": "HM18",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-h12fb1",
      "modelNumber": "H12FB1",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-h18fb2",
      "modelNumber": "H18FB2",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-h18tt2",
      "modelNumber": "H18TT2",
      "brandId": "brand-hessaire",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hessaire-hoc48b",
      "modelNumber": "HOC48B",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-hoc24b",
      "modelNumber": "HOC24B",
      "brandId": "brand-hessaire",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-hessaire-hoc48",
      "modelNumber": "HOC48",
      "brandId": "brand-hessaire",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-hessaire-hoc24",
      "modelNumber": "HOC24",
      "brandId": "brand-hessaire",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-45781",
      "modelNumber": "IU-45781",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h24fb2",
      "modelNumber": "H24FB2",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h18e2",
      "modelNumber": "H18E2",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h24fb2-i",
      "modelNumber": "H24FB2-I",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-45780",
      "modelNumber": "IU-45780",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h12fb1-i",
      "modelNumber": "H12FB1-I",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h12fb1",
      "modelNumber": "H12FB1*",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h18fb2-i",
      "modelNumber": "H18FB2-I",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h18tt2",
      "modelNumber": "H18TT2",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h18fb2",
      "modelNumber": "H18FB2",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-h18tt2-i",
      "modelNumber": "H18TT2-I",
      "brandId": "brand-hessaire",
      "type": "wall-single"
    },
    {
      "id": "iu-hah48b",
      "modelNumber": "HAH48B",
      "brandId": "brand-hessaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-hah24b",
      "modelNumber": "HAH24B",
      "brandId": "brand-hessaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-hah48",
      "modelNumber": "HAH48",
      "brandId": "brand-hessaire",
      "type": "central-ducted"
    },
    {
      "id": "iu-hah24",
      "modelNumber": "HAH24",
      "brandId": "brand-hessaire",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-hessaire-hm27-iu-45781",
      "slug": "hessaire-hm27-iu-45781",
      "modelId": "model-hessaire-hm27",
      "outdoorUnitId": "ou-hessaire-hm27",
      "indoorUnitId": "iu-iu-45781",
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
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h24fb2-h24fb2",
      "slug": "hessaire-h24fb2-h24fb2",
      "modelId": "model-hessaire-h24fb2",
      "outdoorUnitId": "ou-hessaire-h24fb2",
      "indoorUnitId": "iu-h24fb2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h18e2-h18e2",
      "slug": "hessaire-h18e2-h18e2",
      "modelId": "model-hessaire-h18e2",
      "outdoorUnitId": "ou-hessaire-h18e2",
      "indoorUnitId": "iu-h18e2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h24fb2-h24fb2-i",
      "slug": "hessaire-h24fb2-h24fb2-i",
      "modelId": "model-hessaire-h24fb2",
      "outdoorUnitId": "ou-hessaire-h24fb2",
      "indoorUnitId": "iu-h24fb2-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-hm18-iu-45780",
      "slug": "hessaire-hm18-iu-45780",
      "modelId": "model-hessaire-hm18",
      "outdoorUnitId": "ou-hessaire-hm18",
      "indoorUnitId": "iu-iu-45780",
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
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h12fb1-h12fb1-i",
      "slug": "hessaire-h12fb1-h12fb1-i",
      "modelId": "model-hessaire-h12fb1",
      "outdoorUnitId": "ou-hessaire-h12fb1",
      "indoorUnitId": "iu-h12fb1-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h12fb1-h12fb1",
      "slug": "hessaire-h12fb1-h12fb1",
      "modelId": "model-hessaire-h12fb1",
      "outdoorUnitId": "ou-hessaire-h12fb1",
      "indoorUnitId": "iu-h12fb1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h18fb2-h18fb2-i",
      "slug": "hessaire-h18fb2-h18fb2-i",
      "modelId": "model-hessaire-h18fb2",
      "outdoorUnitId": "ou-hessaire-h18fb2",
      "indoorUnitId": "iu-h18fb2-i",
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
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h18tt2-h18tt2",
      "slug": "hessaire-h18tt2-h18tt2",
      "modelId": "model-hessaire-h18tt2",
      "outdoorUnitId": "ou-hessaire-h18tt2",
      "indoorUnitId": "iu-h18tt2",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h18fb2-h18fb2",
      "slug": "hessaire-h18fb2-h18fb2",
      "modelId": "model-hessaire-h18fb2",
      "outdoorUnitId": "ou-hessaire-h18fb2",
      "indoorUnitId": "iu-h18fb2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-h18tt2-h18tt2-i",
      "slug": "hessaire-h18tt2-h18tt2-i",
      "modelId": "model-hessaire-h18tt2",
      "outdoorUnitId": "ou-hessaire-h18tt2",
      "indoorUnitId": "iu-h18tt2-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-hoc48b-hah48b",
      "slug": "hessaire-hoc48b-hah48b",
      "modelId": "model-hessaire-hoc48b",
      "outdoorUnitId": "ou-hessaire-hoc48b",
      "indoorUnitId": "iu-hah48b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-hoc24b-hah24b",
      "slug": "hessaire-hoc24b-hah24b",
      "modelId": "model-hessaire-hoc24b",
      "outdoorUnitId": "ou-hessaire-hoc24b",
      "indoorUnitId": "iu-hah24b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-hoc48-hah48",
      "slug": "hessaire-hoc48-hah48",
      "modelId": "model-hessaire-hoc48",
      "outdoorUnitId": "ou-hessaire-hoc48",
      "indoorUnitId": "iu-hah48",
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
          "sourceId": "src-hessaire-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hessaire-hoc24-hah24",
      "slug": "hessaire-hoc24-hah24",
      "modelId": "model-hessaire-hoc24",
      "outdoorUnitId": "ou-hessaire-hoc24",
      "indoorUnitId": "iu-hah24",
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
          "sourceId": "src-hessaire-epa",
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
