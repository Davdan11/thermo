import type { BrandDataset } from "../../types";

export const brand_msh_legacyDataset: BrandDataset = {
  "brand": {
    "id": "brand-msh-legacy",
    "slug": "msh-legacy",
    "name": "MSH LEGACY",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MSH LEGACY",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-msh-legacy-epa",
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
      "id": "series-msh-legacy-quiet-comfort-hp",
      "slug": "msh-legacy-quiet-comfort-hp",
      "name": "Quiet Comfort HP",
      "brandId": "brand-msh-legacy",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série Quiet Comfort HP de MSH LEGACY",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-msh-legacy-performance-15-seer2-hp",
      "slug": "msh-legacy-performance-15-seer2-hp",
      "name": "PERFORMANCE 15 SEER2 HP",
      "brandId": "brand-msh-legacy",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série PERFORMANCE 15 SEER2 HP de MSH LEGACY",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-msh-legacy-15-seer2-r-series-r410a-hp",
      "slug": "msh-legacy-15-seer2-r-series-r410a-hp",
      "name": "15 SEER2 R SERIES R410A HP",
      "brandId": "brand-msh-legacy",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 R SERIES R410A HP de MSH LEGACY",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-msh-legacy-phb560000k000b",
      "slug": "msh-legacy-phb560000k000b",
      "name": "MSH LEGACY PHB560000K000B*",
      "seriesId": "series-msh-legacy-quiet-comfort-hp",
      "brandId": "brand-msh-legacy",
      "modelNumber": "PHB560000K000B*",
      "normalizedModelNumber": "phb560000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56000,
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
      "id": "model-msh-legacy-n4h5s30kaaa",
      "slug": "msh-legacy-n4h5s30kaaa",
      "name": "MSH LEGACY N4H5S30*K*AAA*",
      "seriesId": "series-msh-legacy-performance-15-seer2-hp",
      "brandId": "brand-msh-legacy",
      "modelNumber": "N4H5S30*K*AAA*",
      "normalizedModelNumber": "n4h5s30*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27800,
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
      "id": "model-msh-legacy-r4h5s30kaaa",
      "slug": "msh-legacy-r4h5s30kaaa",
      "name": "MSH LEGACY R4H5S30*K*AAA*",
      "seriesId": "series-msh-legacy-15-seer2-r-series-r410a-hp",
      "brandId": "brand-msh-legacy",
      "modelNumber": "R4H5S30*K*AAA*",
      "normalizedModelNumber": "r4h5s30*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27800,
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
      "id": "model-msh-legacy-phb524000k000b",
      "slug": "msh-legacy-phb524000k000b",
      "name": "MSH LEGACY PHB524000K000B*",
      "seriesId": "series-msh-legacy-quiet-comfort-hp",
      "brandId": "brand-msh-legacy",
      "modelNumber": "PHB524000K000B*",
      "normalizedModelNumber": "phb524000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22200,
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
      "id": "model-msh-legacy-phb536000k000b",
      "slug": "msh-legacy-phb536000k000b",
      "name": "MSH LEGACY PHB536000K000B*",
      "seriesId": "series-msh-legacy-quiet-comfort-hp",
      "brandId": "brand-msh-legacy",
      "modelNumber": "PHB536000K000B*",
      "normalizedModelNumber": "phb536000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35200,
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
      "id": "model-msh-legacy-phb548000k000b",
      "slug": "msh-legacy-phb548000k000b",
      "name": "MSH LEGACY PHB548000K000B*",
      "seriesId": "series-msh-legacy-quiet-comfort-hp",
      "brandId": "brand-msh-legacy",
      "modelNumber": "PHB548000K000B*",
      "normalizedModelNumber": "phb548000k000b*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46500,
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
      "id": "ou-msh-legacy-phb560000k000b",
      "modelNumber": "PHB560000K000B*",
      "brandId": "brand-msh-legacy",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-msh-legacy-n4h5s30kaaa",
      "modelNumber": "N4H5S30*K*AAA*",
      "brandId": "brand-msh-legacy",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-msh-legacy-r4h5s30kaaa",
      "modelNumber": "R4H5S30*K*AAA*",
      "brandId": "brand-msh-legacy",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-msh-legacy-phb524000k000b",
      "modelNumber": "PHB524000K000B*",
      "brandId": "brand-msh-legacy",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-msh-legacy-phb536000k000b",
      "modelNumber": "PHB536000K000B*",
      "brandId": "brand-msh-legacy",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-msh-legacy-phb548000k000b",
      "modelNumber": "PHB548000K000B*",
      "brandId": "brand-msh-legacy",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-32026",
      "modelNumber": "IU-32026",
      "brandId": "brand-msh-legacy",
      "type": "central-ducted"
    },
    {
      "id": "iu-ea4x37l21a",
      "modelNumber": "EA*4X37L21A*",
      "brandId": "brand-msh-legacy",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-32023",
      "modelNumber": "IU-32023",
      "brandId": "brand-msh-legacy",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-32024",
      "modelNumber": "IU-32024",
      "brandId": "brand-msh-legacy",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-32025",
      "modelNumber": "IU-32025",
      "brandId": "brand-msh-legacy",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-msh-legacy-phb560000k000b-iu-32026",
      "slug": "msh-legacy-phb560000k000b-iu-32026",
      "modelId": "model-msh-legacy-phb560000k000b",
      "outdoorUnitId": "ou-msh-legacy-phb560000k000b",
      "indoorUnitId": "iu-iu-32026",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.7,
      "sources": [
        {
          "sourceId": "src-msh-legacy-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-msh-legacy-n4h5s30kaaa-ea4x37l21a",
      "slug": "msh-legacy-n4h5s30kaaa-ea4x37l21a",
      "modelId": "model-msh-legacy-n4h5s30kaaa",
      "outdoorUnitId": "ou-msh-legacy-n4h5s30kaaa",
      "indoorUnitId": "iu-ea4x37l21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-msh-legacy-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-msh-legacy-r4h5s30kaaa-ea4x37l21a",
      "slug": "msh-legacy-r4h5s30kaaa-ea4x37l21a",
      "modelId": "model-msh-legacy-r4h5s30kaaa",
      "outdoorUnitId": "ou-msh-legacy-r4h5s30kaaa",
      "indoorUnitId": "iu-ea4x37l21a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-msh-legacy-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-msh-legacy-phb524000k000b-iu-32023",
      "slug": "msh-legacy-phb524000k000b-iu-32023",
      "modelId": "model-msh-legacy-phb524000k000b",
      "outdoorUnitId": "ou-msh-legacy-phb524000k000b",
      "indoorUnitId": "iu-iu-32023",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-msh-legacy-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-msh-legacy-phb536000k000b-iu-32024",
      "slug": "msh-legacy-phb536000k000b-iu-32024",
      "modelId": "model-msh-legacy-phb536000k000b",
      "outdoorUnitId": "ou-msh-legacy-phb536000k000b",
      "indoorUnitId": "iu-iu-32024",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-msh-legacy-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-msh-legacy-phb548000k000b-iu-32025",
      "slug": "msh-legacy-phb548000k000b-iu-32025",
      "modelId": "model-msh-legacy-phb548000k000b",
      "outdoorUnitId": "ou-msh-legacy-phb548000k000b",
      "indoorUnitId": "iu-iu-32025",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-msh-legacy-epa",
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
