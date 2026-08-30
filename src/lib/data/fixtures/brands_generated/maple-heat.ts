import type { BrandDataset } from "../../types";

export const brand_maple_heatDataset: BrandDataset = {
  "brand": {
    "id": "brand-maple-heat",
    "slug": "maple-heat",
    "name": "MAPLE HEAT",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MAPLE HEAT",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-maple-heat-epa",
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
      "id": "series-maple-heat-ne-t52-series",
      "slug": "maple-heat-ne-t52-series",
      "name": "NE-T52 Series",
      "brandId": "brand-maple-heat",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NE-T52 Series de MAPLE HEAT",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maple-heat-t55-series",
      "slug": "maple-heat-t55-series",
      "name": "T55 Series",
      "brandId": "brand-maple-heat",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T55 Series de MAPLE HEAT",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-maple-heat-ne-t52-mheat3012e",
      "slug": "maple-heat-ne-t52-mheat3012e",
      "name": "MAPLE HEAT NE-T52-MHEAT3012E",
      "seriesId": "series-maple-heat-ne-t52-series",
      "brandId": "brand-maple-heat",
      "modelNumber": "NE-T52-MHEAT3012E",
      "normalizedModelNumber": "ne-t52-mheat3012e",
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
      "id": "model-maple-heat-t55-mheat3012e454",
      "slug": "maple-heat-t55-mheat3012e454",
      "name": "MAPLE HEAT T55-MHEAT3012E454",
      "seriesId": "series-maple-heat-t55-series",
      "brandId": "brand-maple-heat",
      "modelNumber": "T55-MHEAT3012E454",
      "normalizedModelNumber": "t55-mheat3012e454",
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
      "id": "model-maple-heat-ne-t52-mheat3018e",
      "slug": "maple-heat-ne-t52-mheat3018e",
      "name": "MAPLE HEAT NE-T52-MHEAT3018E",
      "seriesId": "series-maple-heat-ne-t52-series",
      "brandId": "brand-maple-heat",
      "modelNumber": "NE-T52-MHEAT3018E",
      "normalizedModelNumber": "ne-t52-mheat3018e",
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
      "id": "model-maple-heat-t55-mheat3018e454",
      "slug": "maple-heat-t55-mheat3018e454",
      "name": "MAPLE HEAT T55-MHEAT3018E454",
      "seriesId": "series-maple-heat-t55-series",
      "brandId": "brand-maple-heat",
      "modelNumber": "T55-MHEAT3018E454",
      "normalizedModelNumber": "t55-mheat3018e454",
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
      "id": "ou-maple-heat-ne-t52-mheat3012e",
      "modelNumber": "NE-T52-MHEAT3012E",
      "brandId": "brand-maple-heat",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maple-heat-t55-mheat3012e454",
      "modelNumber": "T55-MHEAT3012E454",
      "brandId": "brand-maple-heat",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maple-heat-ne-t52-mheat3018e",
      "modelNumber": "NE-T52-MHEAT3018E",
      "brandId": "brand-maple-heat",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maple-heat-t55-mheat3018e454",
      "modelNumber": "T55-MHEAT3018E454",
      "brandId": "brand-maple-heat",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ne-t52-mheat3012i",
      "modelNumber": "NE-T52-MHEAT3012I*",
      "brandId": "brand-maple-heat",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-mheat3012i454",
      "modelNumber": "T55-MHEAT3012I454*",
      "brandId": "brand-maple-heat",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-mheat3018i",
      "modelNumber": "NE-T52-MHEAT3018I*",
      "brandId": "brand-maple-heat",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-mheat3018i454",
      "modelNumber": "T55-MHEAT3018I454*",
      "brandId": "brand-maple-heat",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-maple-heat-ne-t52-mheat3012e-ne-t52-mheat3012i",
      "slug": "maple-heat-ne-t52-mheat3012e-ne-t52-mheat3012i",
      "modelId": "model-maple-heat-ne-t52-mheat3012e",
      "outdoorUnitId": "ou-maple-heat-ne-t52-mheat3012e",
      "indoorUnitId": "iu-ne-t52-mheat3012i",
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
          "sourceId": "src-maple-heat-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maple-heat-t55-mheat3012e454-t55-mheat3012i454",
      "slug": "maple-heat-t55-mheat3012e454-t55-mheat3012i454",
      "modelId": "model-maple-heat-t55-mheat3012e454",
      "outdoorUnitId": "ou-maple-heat-t55-mheat3012e454",
      "indoorUnitId": "iu-t55-mheat3012i454",
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
          "sourceId": "src-maple-heat-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maple-heat-ne-t52-mheat3018e-ne-t52-mheat3018i",
      "slug": "maple-heat-ne-t52-mheat3018e-ne-t52-mheat3018i",
      "modelId": "model-maple-heat-ne-t52-mheat3018e",
      "outdoorUnitId": "ou-maple-heat-ne-t52-mheat3018e",
      "indoorUnitId": "iu-ne-t52-mheat3018i",
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
          "sourceId": "src-maple-heat-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maple-heat-t55-mheat3018e454-t55-mheat3018i454",
      "slug": "maple-heat-t55-mheat3018e454-t55-mheat3018i454",
      "modelId": "model-maple-heat-t55-mheat3018e454",
      "outdoorUnitId": "ou-maple-heat-t55-mheat3018e454",
      "indoorUnitId": "iu-t55-mheat3018i454",
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
          "sourceId": "src-maple-heat-epa",
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
