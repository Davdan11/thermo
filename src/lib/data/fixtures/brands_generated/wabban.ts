import type { BrandDataset } from "../../types";

export const brand_wabbanDataset: BrandDataset = {
  "brand": {
    "id": "brand-wabban",
    "slug": "wabban",
    "name": "WABBAN",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour WABBAN",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-wabban-epa",
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
      "id": "series-wabban-lomo-plus",
      "slug": "wabban-lomo-plus",
      "name": "LOMO Plus",
      "brandId": "brand-wabban",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LOMO Plus de WABBAN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wabban-pular-25",
      "slug": "wabban-pular-25",
      "name": "Pular 25",
      "brandId": "brand-wabban",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pular 25 de WABBAN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wabban-multi-zone",
      "slug": "wabban-multi-zone",
      "name": "Multi-zone",
      "brandId": "brand-wabban",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi-zone de WABBAN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-wabban-bb12hq3d6do",
      "slug": "wabban-bb12hq3d6do",
      "name": "WABBAN BB12HQ3D6DO",
      "seriesId": "series-wabban-lomo-plus",
      "brandId": "brand-wabban",
      "modelNumber": "BB12HQ3D6DO",
      "normalizedModelNumber": "bb12hq3d6do",
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
      "id": "model-wabban-bb12hxp2a1do",
      "slug": "wabban-bb12hxp2a1do",
      "name": "WABBAN BB12HXP2A1DO",
      "seriesId": "series-wabban-pular-25",
      "brandId": "brand-wabban",
      "modelNumber": "BB12HXP2A1DO",
      "normalizedModelNumber": "bb12hxp2a1do",
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
      "id": "model-wabban-bb18hxp2a1do",
      "slug": "wabban-bb18hxp2a1do",
      "name": "WABBAN BB18HXP2A1DO",
      "seriesId": "series-wabban-pular-25",
      "brandId": "brand-wabban",
      "modelNumber": "BB18HXP2A1DO",
      "normalizedModelNumber": "bb18hxp2a1do",
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
      "id": "model-wabban-bb24hq3d6do",
      "slug": "wabban-bb24hq3d6do",
      "name": "WABBAN BB24HQ3D6DO",
      "seriesId": "series-wabban-lomo-plus",
      "brandId": "brand-wabban",
      "modelNumber": "BB24HQ3D6DO",
      "normalizedModelNumber": "bb24hq3d6do",
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
      "id": "model-wabban-bbm18hx4o",
      "slug": "wabban-bbm18hx4o",
      "name": "WABBAN BBM18HX4O",
      "seriesId": "series-wabban-multi-zone",
      "brandId": "brand-wabban",
      "modelNumber": "BBM18HX4O",
      "normalizedModelNumber": "bbm18hx4o",
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
      "id": "model-wabban-bbm24hx4o",
      "slug": "wabban-bbm24hx4o",
      "name": "WABBAN BBM24HX4O",
      "seriesId": "series-wabban-multi-zone",
      "brandId": "brand-wabban",
      "modelNumber": "BBM24HX4O",
      "normalizedModelNumber": "bbm24hx4o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
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
      "id": "model-wabban-bbm30hx4o",
      "slug": "wabban-bbm30hx4o",
      "name": "WABBAN BBM30HX4O",
      "seriesId": "series-wabban-multi-zone",
      "brandId": "brand-wabban",
      "modelNumber": "BBM30HX4O",
      "normalizedModelNumber": "bbm30hx4o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28400,
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
      "id": "model-wabban-bbm36hx4o",
      "slug": "wabban-bbm36hx4o",
      "name": "WABBAN BBM36HX4O",
      "seriesId": "series-wabban-multi-zone",
      "brandId": "brand-wabban",
      "modelNumber": "BBM36HX4O",
      "normalizedModelNumber": "bbm36hx4o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "model-wabban-bbm42hx4o",
      "slug": "wabban-bbm42hx4o",
      "name": "WABBAN BBM42HX4O",
      "seriesId": "series-wabban-multi-zone",
      "brandId": "brand-wabban",
      "modelNumber": "BBM42HX4O",
      "normalizedModelNumber": "bbm42hx4o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-wabban-bb12hq3d6do",
      "modelNumber": "BB12HQ3D6DO",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bb12hxp2a1do",
      "modelNumber": "BB12HXP2A1DO",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bb18hxp2a1do",
      "modelNumber": "BB18HXP2A1DO",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bb24hq3d6do",
      "modelNumber": "BB24HQ3D6DO",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bbm18hx4o",
      "modelNumber": "BBM18HX4O",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bbm24hx4o",
      "modelNumber": "BBM24HX4O",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bbm30hx4o",
      "modelNumber": "BBM30HX4O",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bbm36hx4o",
      "modelNumber": "BBM36HX4O",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wabban-bbm42hx4o",
      "modelNumber": "BBM42HX4O",
      "brandId": "brand-wabban",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-bb12hq3d6di",
      "modelNumber": "BB12HQ3D6DI",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-bb12hxp2a1di",
      "modelNumber": "BB12HXP2A1DI",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-bb18hxp2a1di",
      "modelNumber": "BB18HXP2A1DI",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-bb24hq3d6di",
      "modelNumber": "BB24HQ3D6DI",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52294",
      "modelNumber": "IU-52294",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52295",
      "modelNumber": "IU-52295",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52296",
      "modelNumber": "IU-52296",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52297",
      "modelNumber": "IU-52297",
      "brandId": "brand-wabban",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52298",
      "modelNumber": "IU-52298",
      "brandId": "brand-wabban",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-wabban-bb12hq3d6do-bb12hq3d6di",
      "slug": "wabban-bb12hq3d6do-bb12hq3d6di",
      "modelId": "model-wabban-bb12hq3d6do",
      "outdoorUnitId": "ou-wabban-bb12hq3d6do",
      "indoorUnitId": "iu-bb12hq3d6di",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bb12hxp2a1do-bb12hxp2a1di",
      "slug": "wabban-bb12hxp2a1do-bb12hxp2a1di",
      "modelId": "model-wabban-bb12hxp2a1do",
      "outdoorUnitId": "ou-wabban-bb12hxp2a1do",
      "indoorUnitId": "iu-bb12hxp2a1di",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bb18hxp2a1do-bb18hxp2a1di",
      "slug": "wabban-bb18hxp2a1do-bb18hxp2a1di",
      "modelId": "model-wabban-bb18hxp2a1do",
      "outdoorUnitId": "ou-wabban-bb18hxp2a1do",
      "indoorUnitId": "iu-bb18hxp2a1di",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bb24hq3d6do-bb24hq3d6di",
      "slug": "wabban-bb24hq3d6do-bb24hq3d6di",
      "modelId": "model-wabban-bb24hq3d6do",
      "outdoorUnitId": "ou-wabban-bb24hq3d6do",
      "indoorUnitId": "iu-bb24hq3d6di",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bbm18hx4o-iu-52294",
      "slug": "wabban-bbm18hx4o-iu-52294",
      "modelId": "model-wabban-bbm18hx4o",
      "outdoorUnitId": "ou-wabban-bbm18hx4o",
      "indoorUnitId": "iu-iu-52294",
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
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bbm24hx4o-iu-52295",
      "slug": "wabban-bbm24hx4o-iu-52295",
      "modelId": "model-wabban-bbm24hx4o",
      "outdoorUnitId": "ou-wabban-bbm24hx4o",
      "indoorUnitId": "iu-iu-52295",
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
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bbm30hx4o-iu-52296",
      "slug": "wabban-bbm30hx4o-iu-52296",
      "modelId": "model-wabban-bbm30hx4o",
      "outdoorUnitId": "ou-wabban-bbm30hx4o",
      "indoorUnitId": "iu-iu-52296",
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
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bbm36hx4o-iu-52297",
      "slug": "wabban-bbm36hx4o-iu-52297",
      "modelId": "model-wabban-bbm36hx4o",
      "outdoorUnitId": "ou-wabban-bbm36hx4o",
      "indoorUnitId": "iu-iu-52297",
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
          "sourceId": "src-wabban-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wabban-bbm42hx4o-iu-52298",
      "slug": "wabban-bbm42hx4o-iu-52298",
      "modelId": "model-wabban-bbm42hx4o",
      "outdoorUnitId": "ou-wabban-bbm42hx4o",
      "indoorUnitId": "iu-iu-52298",
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
          "sourceId": "src-wabban-epa",
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
