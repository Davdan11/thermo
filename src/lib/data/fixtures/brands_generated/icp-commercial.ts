import type { BrandDataset } from "../../types";

export const brand_icp_commercialDataset: BrandDataset = {
  "brand": {
    "id": "brand-icp-commercial",
    "slug": "icp-commercial",
    "name": "ICP Commercial",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ICP Commercial",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-icp-commercial-epa",
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
      "id": "series-icp-commercial-37vmb036hds3-1",
      "slug": "icp-commercial-37vmb036hds3-1",
      "name": "37VMB036HDS3-1",
      "brandId": "brand-icp-commercial",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 37VMB036HDS3-1 de ICP Commercial",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-icp-commercial-37vmb048hds3-1",
      "slug": "icp-commercial-37vmb048hds3-1",
      "name": "37VMB048HDS3-1",
      "brandId": "brand-icp-commercial",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 37VMB048HDS3-1 de ICP Commercial",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-icp-commercial-37vmb060hds3-1",
      "slug": "icp-commercial-37vmb060hds3-1",
      "name": "37VMB060HDS3-1",
      "brandId": "brand-icp-commercial",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 37VMB060HDS3-1 de ICP Commercial",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-icp-commercial-38vmb036hds3-1",
      "slug": "icp-commercial-38vmb036hds3-1",
      "name": "38VMB036HDS3-1*",
      "brandId": "brand-icp-commercial",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 38VMB036HDS3-1* de ICP Commercial",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-icp-commercial-quiet-comfort-hp",
      "slug": "icp-commercial-quiet-comfort-hp",
      "name": "Quiet Comfort HP",
      "brandId": "brand-icp-commercial",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série Quiet Comfort HP de ICP Commercial",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-icp-commercial-37vmb036hds3-1",
      "slug": "icp-commercial-37vmb036hds3-1",
      "name": "ICP Commercial 37VMB036HDS3-1",
      "seriesId": "series-icp-commercial-37vmb036hds3-1",
      "brandId": "brand-icp-commercial",
      "modelNumber": "37VMB036HDS3-1",
      "normalizedModelNumber": "37vmb036hds3-1",
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
      "id": "model-icp-commercial-37vmb048hds3-1",
      "slug": "icp-commercial-37vmb048hds3-1",
      "name": "ICP Commercial 37VMB048HDS3-1",
      "seriesId": "series-icp-commercial-37vmb048hds3-1",
      "brandId": "brand-icp-commercial",
      "modelNumber": "37VMB048HDS3-1",
      "normalizedModelNumber": "37vmb048hds3-1",
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
      "id": "model-icp-commercial-37vmb060hds3-1",
      "slug": "icp-commercial-37vmb060hds3-1",
      "name": "ICP Commercial 37VMB060HDS3-1",
      "seriesId": "series-icp-commercial-37vmb060hds3-1",
      "brandId": "brand-icp-commercial",
      "modelNumber": "37VMB060HDS3-1",
      "normalizedModelNumber": "37vmb060hds3-1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 60000,
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
      "id": "model-icp-commercial-38vmb036hds3-1",
      "slug": "icp-commercial-38vmb036hds3-1",
      "name": "ICP Commercial 38VMB036HDS3-1*",
      "seriesId": "series-icp-commercial-38vmb036hds3-1",
      "brandId": "brand-icp-commercial",
      "modelNumber": "38VMB036HDS3-1*",
      "normalizedModelNumber": "38vmb036hds3-1*",
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
      "id": "model-icp-commercial-phr548000kk1",
      "slug": "icp-commercial-phr548000kk1",
      "name": "ICP Commercial PHR548000K***K1",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
      "modelNumber": "PHR548000K***K1",
      "normalizedModelNumber": "phr548000k***k1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "model-icp-commercial-phr536000kk1",
      "slug": "icp-commercial-phr536000kk1",
      "name": "ICP Commercial PHR536000K***K1",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
      "modelNumber": "PHR536000K***K1",
      "normalizedModelNumber": "phr536000k***k1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-icp-commercial-phb560000k000b",
      "slug": "icp-commercial-phb560000k000b",
      "name": "ICP Commercial PHB560000K000B*",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
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
      "id": "model-icp-commercial-phb524000k000b",
      "slug": "icp-commercial-phb524000k000b",
      "name": "ICP Commercial PHB524000K000B*",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
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
      "id": "model-icp-commercial-phb548000k000b",
      "slug": "icp-commercial-phb548000k000b",
      "name": "ICP Commercial PHB548000K000B*",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
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
    },
    {
      "id": "model-icp-commercial-phb536000k000b",
      "slug": "icp-commercial-phb536000k000b",
      "name": "ICP Commercial PHB536000K000B*",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
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
      "id": "model-icp-commercial-phr560000kk1",
      "slug": "icp-commercial-phr560000kk1",
      "name": "ICP Commercial PHR560000K***K1",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
      "modelNumber": "PHR560000K***K1",
      "normalizedModelNumber": "phr560000k***k1",
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
      "id": "model-icp-commercial-phr524000kk1",
      "slug": "icp-commercial-phr524000kk1",
      "name": "ICP Commercial PHR524000K***K1",
      "seriesId": "series-icp-commercial-quiet-comfort-hp",
      "brandId": "brand-icp-commercial",
      "modelNumber": "PHR524000K***K1",
      "normalizedModelNumber": "phr524000k***k1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22400,
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
      "id": "ou-icp-commercial-37vmb036hds3-1",
      "modelNumber": "37VMB036HDS3-1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-37vmb048hds3-1",
      "modelNumber": "37VMB048HDS3-1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-37vmb060hds3-1",
      "modelNumber": "37VMB060HDS3-1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-38vmb036hds3-1",
      "modelNumber": "38VMB036HDS3-1*",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-icp-commercial-phr548000kk1",
      "modelNumber": "PHR548000K***K1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-icp-commercial-phr536000kk1",
      "modelNumber": "PHR536000K***K1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-icp-commercial-phb560000k000b",
      "modelNumber": "PHB560000K000B*",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-phb524000k000b",
      "modelNumber": "PHB524000K000B*",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-phb548000k000b",
      "modelNumber": "PHB548000K000B*",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-phb536000k000b",
      "modelNumber": "PHB536000K000B*",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-icp-commercial-phr560000kk1",
      "modelNumber": "PHR560000K***K1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-icp-commercial-phr524000kk1",
      "modelNumber": "PHR524000K***K1",
      "brandId": "brand-icp-commercial",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-46108",
      "modelNumber": "IU-46108",
      "brandId": "brand-icp-commercial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46109",
      "modelNumber": "IU-46109",
      "brandId": "brand-icp-commercial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46110",
      "modelNumber": "IU-46110",
      "brandId": "brand-icp-commercial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46111",
      "modelNumber": "IU-46111",
      "brandId": "brand-icp-commercial",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-23863",
      "modelNumber": "IU-23863",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23862",
      "modelNumber": "IU-23862",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23860",
      "modelNumber": "IU-23860",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23857",
      "modelNumber": "IU-23857",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23859",
      "modelNumber": "IU-23859",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23858",
      "modelNumber": "IU-23858",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23864",
      "modelNumber": "IU-23864",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-23861",
      "modelNumber": "IU-23861",
      "brandId": "brand-icp-commercial",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-icp-commercial-37vmb036hds3-1-iu-46108",
      "slug": "icp-commercial-37vmb036hds3-1-iu-46108",
      "modelId": "model-icp-commercial-37vmb036hds3-1",
      "outdoorUnitId": "ou-icp-commercial-37vmb036hds3-1",
      "indoorUnitId": "iu-iu-46108",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-37vmb048hds3-1-iu-46109",
      "slug": "icp-commercial-37vmb048hds3-1-iu-46109",
      "modelId": "model-icp-commercial-37vmb048hds3-1",
      "outdoorUnitId": "ou-icp-commercial-37vmb048hds3-1",
      "indoorUnitId": "iu-iu-46109",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-37vmb060hds3-1-iu-46110",
      "slug": "icp-commercial-37vmb060hds3-1-iu-46110",
      "modelId": "model-icp-commercial-37vmb060hds3-1",
      "outdoorUnitId": "ou-icp-commercial-37vmb060hds3-1",
      "indoorUnitId": "iu-iu-46110",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-38vmb036hds3-1-iu-46111",
      "slug": "icp-commercial-38vmb036hds3-1-iu-46111",
      "modelId": "model-icp-commercial-38vmb036hds3-1",
      "outdoorUnitId": "ou-icp-commercial-38vmb036hds3-1",
      "indoorUnitId": "iu-iu-46111",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phr548000kk1-iu-23863",
      "slug": "icp-commercial-phr548000kk1-iu-23863",
      "modelId": "model-icp-commercial-phr548000kk1",
      "outdoorUnitId": "ou-icp-commercial-phr548000kk1",
      "indoorUnitId": "iu-iu-23863",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phr536000kk1-iu-23862",
      "slug": "icp-commercial-phr536000kk1-iu-23862",
      "modelId": "model-icp-commercial-phr536000kk1",
      "outdoorUnitId": "ou-icp-commercial-phr536000kk1",
      "indoorUnitId": "iu-iu-23862",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.2,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phb560000k000b-iu-23860",
      "slug": "icp-commercial-phb560000k000b-iu-23860",
      "modelId": "model-icp-commercial-phb560000k000b",
      "outdoorUnitId": "ou-icp-commercial-phb560000k000b",
      "indoorUnitId": "iu-iu-23860",
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
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phb524000k000b-iu-23857",
      "slug": "icp-commercial-phb524000k000b-iu-23857",
      "modelId": "model-icp-commercial-phb524000k000b",
      "outdoorUnitId": "ou-icp-commercial-phb524000k000b",
      "indoorUnitId": "iu-iu-23857",
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
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phb548000k000b-iu-23859",
      "slug": "icp-commercial-phb548000k000b-iu-23859",
      "modelId": "model-icp-commercial-phb548000k000b",
      "outdoorUnitId": "ou-icp-commercial-phb548000k000b",
      "indoorUnitId": "iu-iu-23859",
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
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phb536000k000b-iu-23858",
      "slug": "icp-commercial-phb536000k000b-iu-23858",
      "modelId": "model-icp-commercial-phb536000k000b",
      "outdoorUnitId": "ou-icp-commercial-phb536000k000b",
      "indoorUnitId": "iu-iu-23858",
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
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phr560000kk1-iu-23864",
      "slug": "icp-commercial-phr560000kk1-iu-23864",
      "modelId": "model-icp-commercial-phr560000kk1",
      "outdoorUnitId": "ou-icp-commercial-phr560000kk1",
      "indoorUnitId": "iu-iu-23864",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 7.5,
      "sources": [
        {
          "sourceId": "src-icp-commercial-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-icp-commercial-phr524000kk1-iu-23861",
      "slug": "icp-commercial-phr524000kk1-iu-23861",
      "modelId": "model-icp-commercial-phr524000kk1",
      "outdoorUnitId": "ou-icp-commercial-phr524000kk1",
      "indoorUnitId": "iu-iu-23861",
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
          "sourceId": "src-icp-commercial-epa",
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
