import type { BrandDataset } from "../../types";

export const brand_maestraleDataset: BrandDataset = {
  "brand": {
    "id": "brand-maestrale",
    "slug": "maestrale",
    "name": "Maestrale",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Maestrale",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-maestrale-epa",
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
      "id": "series-maestrale-aquilon-series",
      "slug": "maestrale-aquilon-series",
      "name": "Aquilon  series",
      "brandId": "brand-maestrale",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Aquilon  series de Maestrale",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maestrale-boreas-series",
      "slug": "maestrale-boreas-series",
      "name": "Boreas series",
      "brandId": "brand-maestrale",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Boreas series de Maestrale",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-maestrale-tsa09maqu1j0x24-o",
      "slug": "maestrale-tsa09maqu1j0x24-o",
      "name": "Maestrale TSA09MAQU1J0X24-O*",
      "seriesId": "series-maestrale-aquilon-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSA09MAQU1J0X24-O*",
      "normalizedModelNumber": "tsa09maqu1j0x24-o*",
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
      "id": "model-maestrale-tsa12maqu1j0x24-o",
      "slug": "maestrale-tsa12maqu1j0x24-o",
      "name": "Maestrale TSA12MAQU1J0X24-O**",
      "seriesId": "series-maestrale-aquilon-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSA12MAQU1J0X24-O**",
      "normalizedModelNumber": "tsa12maqu1j0x24-o**",
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
      "id": "model-maestrale-tsb24mbor3j0x24",
      "slug": "maestrale-tsb24mbor3j0x24",
      "name": "Maestrale TSB24MBOR3J0X24**",
      "seriesId": "series-maestrale-boreas-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSB24MBOR3J0X24**",
      "normalizedModelNumber": "tsb24mbor3j0x24**",
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
      "id": "model-maestrale-tsb20mbor2j0x24",
      "slug": "maestrale-tsb20mbor2j0x24",
      "name": "Maestrale TSB20MBOR2J0X24*",
      "seriesId": "series-maestrale-boreas-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSB20MBOR2J0X24*",
      "normalizedModelNumber": "tsb20mbor2j0x24*",
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
      "id": "model-maestrale-tsa18maqu1j0x24-o",
      "slug": "maestrale-tsa18maqu1j0x24-o",
      "name": "Maestrale TSA18MAQU1J0X24-O**",
      "seriesId": "series-maestrale-aquilon-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSA18MAQU1J0X24-O**",
      "normalizedModelNumber": "tsa18maqu1j0x24-o**",
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
      "id": "model-maestrale-tsa24maqu1j0x24-o",
      "slug": "maestrale-tsa24maqu1j0x24-o",
      "name": "Maestrale TSA24MAQU1J0X24-O*",
      "seriesId": "series-maestrale-aquilon-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSA24MAQU1J0X24-O*",
      "normalizedModelNumber": "tsa24maqu1j0x24-o*",
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
      "id": "model-maestrale-tsb36mbor4j0x24",
      "slug": "maestrale-tsb36mbor4j0x24",
      "name": "Maestrale TSB36MBOR4J0X24**",
      "seriesId": "series-maestrale-boreas-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSB36MBOR4J0X24**",
      "normalizedModelNumber": "tsb36mbor4j0x24**",
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
      "id": "model-maestrale-tsb45mbor4j0x24",
      "slug": "maestrale-tsb45mbor4j0x24",
      "name": "Maestrale TSB45MBOR4J0X24*",
      "seriesId": "series-maestrale-boreas-series",
      "brandId": "brand-maestrale",
      "modelNumber": "TSB45MBOR4J0X24*",
      "normalizedModelNumber": "tsb45mbor4j0x24*",
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
      "id": "ou-maestrale-tsa09maqu1j0x24-o",
      "modelNumber": "TSA09MAQU1J0X24-O*",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsa12maqu1j0x24-o",
      "modelNumber": "TSA12MAQU1J0X24-O**",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsb24mbor3j0x24",
      "modelNumber": "TSB24MBOR3J0X24**",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsb20mbor2j0x24",
      "modelNumber": "TSB20MBOR2J0X24*",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsa18maqu1j0x24-o",
      "modelNumber": "TSA18MAQU1J0X24-O**",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsa24maqu1j0x24-o",
      "modelNumber": "TSA24MAQU1J0X24-O*",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsb36mbor4j0x24",
      "modelNumber": "TSB36MBOR4J0X24**",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maestrale-tsb45mbor4j0x24",
      "modelNumber": "TSB45MBOR4J0X24*",
      "brandId": "brand-maestrale",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tsa09maqu1j0x24-i",
      "modelNumber": "TSA09MAQU1J0X24-I",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-tsa12maqu1j0x24-i",
      "modelNumber": "TSA12MAQU1J0X24-I*",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48646",
      "modelNumber": "IU-48646",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48645",
      "modelNumber": "IU-48645",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-tsa18maqu1j0x24-i",
      "modelNumber": "TSA18MAQU1J0X24-I*",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-tsa24maqu1j0x24-i",
      "modelNumber": "TSA24MAQU1J0X24-I",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48647",
      "modelNumber": "IU-48647",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-48648",
      "modelNumber": "IU-48648",
      "brandId": "brand-maestrale",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-maestrale-tsa09maqu1j0x24-o-tsa09maqu1j0x24-i",
      "slug": "maestrale-tsa09maqu1j0x24-o-tsa09maqu1j0x24-i",
      "modelId": "model-maestrale-tsa09maqu1j0x24-o",
      "outdoorUnitId": "ou-maestrale-tsa09maqu1j0x24-o",
      "indoorUnitId": "iu-tsa09maqu1j0x24-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsa12maqu1j0x24-o-tsa12maqu1j0x24-i",
      "slug": "maestrale-tsa12maqu1j0x24-o-tsa12maqu1j0x24-i",
      "modelId": "model-maestrale-tsa12maqu1j0x24-o",
      "outdoorUnitId": "ou-maestrale-tsa12maqu1j0x24-o",
      "indoorUnitId": "iu-tsa12maqu1j0x24-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsb24mbor3j0x24-iu-48646",
      "slug": "maestrale-tsb24mbor3j0x24-iu-48646",
      "modelId": "model-maestrale-tsb24mbor3j0x24",
      "outdoorUnitId": "ou-maestrale-tsb24mbor3j0x24",
      "indoorUnitId": "iu-iu-48646",
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
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsb20mbor2j0x24-iu-48645",
      "slug": "maestrale-tsb20mbor2j0x24-iu-48645",
      "modelId": "model-maestrale-tsb20mbor2j0x24",
      "outdoorUnitId": "ou-maestrale-tsb20mbor2j0x24",
      "indoorUnitId": "iu-iu-48645",
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
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsa18maqu1j0x24-o-tsa18maqu1j0x24-i",
      "slug": "maestrale-tsa18maqu1j0x24-o-tsa18maqu1j0x24-i",
      "modelId": "model-maestrale-tsa18maqu1j0x24-o",
      "outdoorUnitId": "ou-maestrale-tsa18maqu1j0x24-o",
      "indoorUnitId": "iu-tsa18maqu1j0x24-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsa24maqu1j0x24-o-tsa24maqu1j0x24-i",
      "slug": "maestrale-tsa24maqu1j0x24-o-tsa24maqu1j0x24-i",
      "modelId": "model-maestrale-tsa24maqu1j0x24-o",
      "outdoorUnitId": "ou-maestrale-tsa24maqu1j0x24-o",
      "indoorUnitId": "iu-tsa24maqu1j0x24-i",
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
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsb36mbor4j0x24-iu-48647",
      "slug": "maestrale-tsb36mbor4j0x24-iu-48647",
      "modelId": "model-maestrale-tsb36mbor4j0x24",
      "outdoorUnitId": "ou-maestrale-tsb36mbor4j0x24",
      "indoorUnitId": "iu-iu-48647",
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
          "sourceId": "src-maestrale-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maestrale-tsb45mbor4j0x24-iu-48648",
      "slug": "maestrale-tsb45mbor4j0x24-iu-48648",
      "modelId": "model-maestrale-tsb45mbor4j0x24",
      "outdoorUnitId": "ou-maestrale-tsb45mbor4j0x24",
      "indoorUnitId": "iu-iu-48648",
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
          "sourceId": "src-maestrale-epa",
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
