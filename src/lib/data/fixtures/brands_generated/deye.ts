import type { BrandDataset } from "../../types";

export const brand_deyeDataset: BrandDataset = {
  "brand": {
    "id": "brand-deye",
    "slug": "deye",
    "name": "Deye",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Deye",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-deye-epa",
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
      "id": "series-deye-acdc",
      "slug": "deye-acdc",
      "name": "ACDC",
      "brandId": "brand-deye",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACDC de Deye",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-deye-evi-heat",
      "slug": "deye-evi-heat",
      "name": "EVI HEAT",
      "brandId": "brand-deye",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série EVI HEAT de Deye",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-deye-acdc-evi",
      "slug": "deye-acdc-evi",
      "name": "ACDC  EVI",
      "brandId": "brand-deye",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série ACDC  EVI de Deye",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-deye-dw4e1-acdc-36kr2us",
      "slug": "deye-dw4e1-acdc-36kr2us",
      "name": "Deye DW4E1-ACDC-36KR2(US)",
      "seriesId": "series-deye-acdc",
      "brandId": "brand-deye",
      "modelNumber": "DW4E1-ACDC-36KR2(US)",
      "normalizedModelNumber": "dw4e1-acdc-36kr2(us)",
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
      "id": "model-deye-dw3b1-acdc-24kr2us",
      "slug": "deye-dw3b1-acdc-24kr2us",
      "name": "Deye DW3B1-ACDC-24KR2(US)",
      "seriesId": "series-deye-acdc",
      "brandId": "brand-deye",
      "modelNumber": "DW3B1-ACDC-24KR2(US)",
      "normalizedModelNumber": "dw3b1-acdc-24kr2(us)",
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
      "id": "model-deye-dwla4-12kr2us",
      "slug": "deye-dwla4-12kr2us",
      "name": "Deye DWLA4-12KR2(US)",
      "seriesId": "series-deye-evi-heat",
      "brandId": "brand-deye",
      "modelNumber": "DWLA4-12KR2(US)",
      "normalizedModelNumber": "dwla4-12kr2(us)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11000,
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
      "id": "model-deye-dwla4-acdc1-12kr2us",
      "slug": "deye-dwla4-acdc1-12kr2us",
      "name": "Deye DWLA4-ACDC1-12KR2(US)",
      "seriesId": "series-deye-acdc-evi",
      "brandId": "brand-deye",
      "modelNumber": "DWLA4-ACDC1-12KR2(US)",
      "normalizedModelNumber": "dwla4-acdc1-12kr2(us)",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11000,
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
      "id": "model-deye-dwb3-acdc-24kr2us",
      "slug": "deye-dwb3-acdc-24kr2us",
      "name": "Deye DWB3-ACDC-24KR2(US)",
      "seriesId": "series-deye-acdc",
      "brandId": "brand-deye",
      "modelNumber": "DWB3-ACDC-24KR2(US)",
      "normalizedModelNumber": "dwb3-acdc-24kr2(us)",
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
      "id": "model-deye-dwlc2-24kr2us",
      "slug": "deye-dwlc2-24kr2us",
      "name": "Deye DWLC2-24KR2(US)",
      "seriesId": "series-deye-evi-heat",
      "brandId": "brand-deye",
      "modelNumber": "DWLC2-24KR2(US)",
      "normalizedModelNumber": "dwlc2-24kr2(us)",
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
      "id": "model-deye-dwlc2-acdc-24kr2us",
      "slug": "deye-dwlc2-acdc-24kr2us",
      "name": "Deye DWLC2-ACDC-24KR2(US)",
      "seriesId": "series-deye-acdc-evi",
      "brandId": "brand-deye",
      "modelNumber": "DWLC2-ACDC-24KR2(US)",
      "normalizedModelNumber": "dwlc2-acdc-24kr2(us)",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-deye-dw4e1-acdc-36kr2us",
      "modelNumber": "DW4E1-ACDC-36KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-deye-dw3b1-acdc-24kr2us",
      "modelNumber": "DW3B1-ACDC-24KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-deye-dwla4-12kr2us",
      "modelNumber": "DWLA4-12KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-deye-dwla4-acdc1-12kr2us",
      "modelNumber": "DWLA4-ACDC1-12KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-deye-dwb3-acdc-24kr2us",
      "modelNumber": "DWB3-ACDC-24KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-deye-dwlc2-24kr2us",
      "modelNumber": "DWLC2-24KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-deye-dwlc2-acdc-24kr2us",
      "modelNumber": "DWLC2-ACDC-24KR2(US)",
      "brandId": "brand-deye",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-44071",
      "modelNumber": "IU-44071",
      "brandId": "brand-deye",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44070",
      "modelNumber": "IU-44070",
      "brandId": "brand-deye",
      "type": "wall-single"
    },
    {
      "id": "iu-dgla4-12kr2us",
      "modelNumber": "DGLA4-12KR2(US)",
      "brandId": "brand-deye",
      "type": "wall-single"
    },
    {
      "id": "iu-dgla4-acdc1-12kr2us",
      "modelNumber": "DGLA4-ACDC1-12KR2(US)",
      "brandId": "brand-deye",
      "type": "wall-single"
    },
    {
      "id": "iu-dga2-acdc-24kr2us",
      "modelNumber": "DGA2-ACDC-24KR2(US)",
      "brandId": "brand-deye",
      "type": "wall-single"
    },
    {
      "id": "iu-dgla3-24kr2us",
      "modelNumber": "DGLA3-24KR2(US)",
      "brandId": "brand-deye",
      "type": "wall-single"
    },
    {
      "id": "iu-dgla3-acdc-24kr2us",
      "modelNumber": "DGLA3-ACDC-24KR2(US)",
      "brandId": "brand-deye",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-deye-dw4e1-acdc-36kr2us-iu-44071",
      "slug": "deye-dw4e1-acdc-36kr2us-iu-44071",
      "modelId": "model-deye-dw4e1-acdc-36kr2us",
      "outdoorUnitId": "ou-deye-dw4e1-acdc-36kr2us",
      "indoorUnitId": "iu-iu-44071",
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
          "sourceId": "src-deye-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-deye-dw3b1-acdc-24kr2us-iu-44070",
      "slug": "deye-dw3b1-acdc-24kr2us-iu-44070",
      "modelId": "model-deye-dw3b1-acdc-24kr2us",
      "outdoorUnitId": "ou-deye-dw3b1-acdc-24kr2us",
      "indoorUnitId": "iu-iu-44070",
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
          "sourceId": "src-deye-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-deye-dwla4-12kr2us-dgla4-12kr2us",
      "slug": "deye-dwla4-12kr2us-dgla4-12kr2us",
      "modelId": "model-deye-dwla4-12kr2us",
      "outdoorUnitId": "ou-deye-dwla4-12kr2us",
      "indoorUnitId": "iu-dgla4-12kr2us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-deye-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-deye-dwla4-acdc1-12kr2us-dgla4-acdc1-12kr2us",
      "slug": "deye-dwla4-acdc1-12kr2us-dgla4-acdc1-12kr2us",
      "modelId": "model-deye-dwla4-acdc1-12kr2us",
      "outdoorUnitId": "ou-deye-dwla4-acdc1-12kr2us",
      "indoorUnitId": "iu-dgla4-acdc1-12kr2us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-deye-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-deye-dwb3-acdc-24kr2us-dga2-acdc-24kr2us",
      "slug": "deye-dwb3-acdc-24kr2us-dga2-acdc-24kr2us",
      "modelId": "model-deye-dwb3-acdc-24kr2us",
      "outdoorUnitId": "ou-deye-dwb3-acdc-24kr2us",
      "indoorUnitId": "iu-dga2-acdc-24kr2us",
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
          "sourceId": "src-deye-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-deye-dwlc2-24kr2us-dgla3-24kr2us",
      "slug": "deye-dwlc2-24kr2us-dgla3-24kr2us",
      "modelId": "model-deye-dwlc2-24kr2us",
      "outdoorUnitId": "ou-deye-dwlc2-24kr2us",
      "indoorUnitId": "iu-dgla3-24kr2us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-deye-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-deye-dwlc2-acdc-24kr2us-dgla3-acdc-24kr2us",
      "slug": "deye-dwlc2-acdc-24kr2us-dgla3-acdc-24kr2us",
      "modelId": "model-deye-dwlc2-acdc-24kr2us",
      "outdoorUnitId": "ou-deye-dwlc2-acdc-24kr2us",
      "indoorUnitId": "iu-dgla3-acdc-24kr2us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-deye-epa",
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
