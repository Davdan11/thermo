import type { BrandDataset } from "../../types";

export const brand_ac_procomDataset: BrandDataset = {
  "brand": {
    "id": "brand-ac-procom",
    "slug": "ac-procom",
    "name": "AC PRO.COM",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AC PRO.COM",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ac-procom-epa",
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
      "id": "series-ac-procom-lomo-plus",
      "slug": "ac-procom-lomo-plus",
      "name": "LOMO Plus",
      "brandId": "brand-ac-procom",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LOMO Plus de AC PRO.COM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ac-procom-lomo-25-seer",
      "slug": "ac-procom-lomo-25-seer",
      "name": "LOMO 25 SEER",
      "brandId": "brand-ac-procom",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LOMO 25 SEER de AC PRO.COM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ac-procom-free-match",
      "slug": "ac-procom-free-match",
      "name": "Free Match",
      "brandId": "brand-ac-procom",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Free Match de AC PRO.COM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ac-procom-awh09acd-d3dna1ao",
      "slug": "ac-procom-awh09acd-d3dna1ao",
      "name": "AC PRO.COM AWH09ACD-D3DNA1A/O",
      "seriesId": "series-ac-procom-lomo-plus",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWH09ACD-D3DNA1A/O",
      "normalizedModelNumber": "awh09acd-d3dna1a/o",
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
      "id": "model-ac-procom-awh12agcxd-a3dna1ao",
      "slug": "ac-procom-awh12agcxd-a3dna1ao",
      "name": "AC PRO.COM AWH12AGCXD-A3DNA1A/O",
      "seriesId": "series-ac-procom-lomo-25-seer",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWH12AGCXD-A3DNA1A/O",
      "normalizedModelNumber": "awh12agcxd-a3dna1a/o",
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
      "id": "model-ac-procom-awh12agcxd-d3dna1ao",
      "slug": "ac-procom-awh12agcxd-d3dna1ao",
      "name": "AC PRO.COM AWH12AGCXD-D3DNA1A/O",
      "seriesId": "series-ac-procom-lomo-25-seer",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWH12AGCXD-D3DNA1A/O",
      "normalizedModelNumber": "awh12agcxd-d3dna1a/o",
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
      "id": "model-ac-procom-awh12yd-d3dna1ao",
      "slug": "ac-procom-awh12yd-d3dna1ao",
      "name": "AC PRO.COM AWH12YD-D3DNA1A/O",
      "seriesId": "series-ac-procom-lomo-plus",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWH12YD-D3DNA1A/O",
      "normalizedModelNumber": "awh12yd-d3dna1a/o",
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
      "id": "model-ac-procom-awh18qdxf-d3dnb2ao",
      "slug": "ac-procom-awh18qdxf-d3dnb2ao",
      "name": "AC PRO.COM AWH18QDXF-D3DNB2A/O",
      "seriesId": "series-ac-procom-lomo-25-seer",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWH18QDXF-D3DNB2A/O",
      "normalizedModelNumber": "awh18qdxf-d3dnb2a/o",
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
      "id": "model-ac-procom-awh24ye-d3dna1ao",
      "slug": "ac-procom-awh24ye-d3dna1ao",
      "name": "AC PRO.COM AWH24YE-D3DNA1A/O",
      "seriesId": "series-ac-procom-lomo-plus",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWH24YE-D3DNA1A/O",
      "normalizedModelNumber": "awh24ye-d3dna1a/o",
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
      "id": "model-ac-procom-awhd18nd3mo",
      "slug": "ac-procom-awhd18nd3mo",
      "name": "AC PRO.COM AWHD(18)ND3MO",
      "seriesId": "series-ac-procom-free-match",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWHD(18)ND3MO",
      "normalizedModelNumber": "awhd(18)nd3mo",
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
      "id": "model-ac-procom-awhd24nd3mo",
      "slug": "ac-procom-awhd24nd3mo",
      "name": "AC PRO.COM AWHD(24)ND3MO",
      "seriesId": "series-ac-procom-free-match",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWHD(24)ND3MO",
      "normalizedModelNumber": "awhd(24)nd3mo",
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
      "id": "model-ac-procom-awhd30nd3mo",
      "slug": "ac-procom-awhd30nd3mo",
      "name": "AC PRO.COM AWHD(30)ND3MO",
      "seriesId": "series-ac-procom-free-match",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWHD(30)ND3MO",
      "normalizedModelNumber": "awhd(30)nd3mo",
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
      "id": "model-ac-procom-awhd36nd3mo",
      "slug": "ac-procom-awhd36nd3mo",
      "name": "AC PRO.COM AWHD(36)ND3MO",
      "seriesId": "series-ac-procom-free-match",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWHD(36)ND3MO",
      "normalizedModelNumber": "awhd(36)nd3mo",
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
      "id": "model-ac-procom-awhd42nd3mo",
      "slug": "ac-procom-awhd42nd3mo",
      "name": "AC PRO.COM AWHD(42)ND3MO",
      "seriesId": "series-ac-procom-free-match",
      "brandId": "brand-ac-procom",
      "modelNumber": "AWHD(42)ND3MO",
      "normalizedModelNumber": "awhd(42)nd3mo",
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
      "id": "ou-ac-procom-awh09acd-d3dna1ao",
      "modelNumber": "AWH09ACD-D3DNA1A/O",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awh12agcxd-a3dna1ao",
      "modelNumber": "AWH12AGCXD-A3DNA1A/O",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awh12agcxd-d3dna1ao",
      "modelNumber": "AWH12AGCXD-D3DNA1A/O",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awh12yd-d3dna1ao",
      "modelNumber": "AWH12YD-D3DNA1A/O",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awh18qdxf-d3dnb2ao",
      "modelNumber": "AWH18QDXF-D3DNB2A/O",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awh24ye-d3dna1ao",
      "modelNumber": "AWH24YE-D3DNA1A/O",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awhd18nd3mo",
      "modelNumber": "AWHD(18)ND3MO",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awhd24nd3mo",
      "modelNumber": "AWHD(24)ND3MO",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awhd30nd3mo",
      "modelNumber": "AWHD(30)ND3MO",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awhd36nd3mo",
      "modelNumber": "AWHD(36)ND3MO",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ac-procom-awhd42nd3mo",
      "modelNumber": "AWHD(42)ND3MO",
      "brandId": "brand-ac-procom",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-awh09qd-d3dnd6bi",
      "modelNumber": "AWH09QD-D3DND6B/I",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-awh12qcxd-a3dnb8ai",
      "modelNumber": "AWH12QCXD-A3DNB8A/I",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-awh12qcxd-d3dnb8ai",
      "modelNumber": "AWH12QCXD-D3DNB8A/I",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-awh12qd-d3dni",
      "modelNumber": "AWH12QD-D3DN***/I",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-awh18qdxf-d3dnb8ai",
      "modelNumber": "AWH18QDXF-D3DNB8A/I",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-awh24qe-d3dni",
      "modelNumber": "AWH24QE-D3DN***/I",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40238",
      "modelNumber": "IU-40238",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40239",
      "modelNumber": "IU-40239",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40240",
      "modelNumber": "IU-40240",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40241",
      "modelNumber": "IU-40241",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40242",
      "modelNumber": "IU-40242",
      "brandId": "brand-ac-procom",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-ac-procom-awh09acd-d3dna1ao-awh09qd-d3dnd6bi",
      "slug": "ac-procom-awh09acd-d3dna1ao-awh09qd-d3dnd6bi",
      "modelId": "model-ac-procom-awh09acd-d3dna1ao",
      "outdoorUnitId": "ou-ac-procom-awh09acd-d3dna1ao",
      "indoorUnitId": "iu-awh09qd-d3dnd6bi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awh12agcxd-a3dna1ao-awh12qcxd-a3dnb8ai",
      "slug": "ac-procom-awh12agcxd-a3dna1ao-awh12qcxd-a3dnb8ai",
      "modelId": "model-ac-procom-awh12agcxd-a3dna1ao",
      "outdoorUnitId": "ou-ac-procom-awh12agcxd-a3dna1ao",
      "indoorUnitId": "iu-awh12qcxd-a3dnb8ai",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awh12agcxd-d3dna1ao-awh12qcxd-d3dnb8ai",
      "slug": "ac-procom-awh12agcxd-d3dna1ao-awh12qcxd-d3dnb8ai",
      "modelId": "model-ac-procom-awh12agcxd-d3dna1ao",
      "outdoorUnitId": "ou-ac-procom-awh12agcxd-d3dna1ao",
      "indoorUnitId": "iu-awh12qcxd-d3dnb8ai",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awh12yd-d3dna1ao-awh12qd-d3dni",
      "slug": "ac-procom-awh12yd-d3dna1ao-awh12qd-d3dni",
      "modelId": "model-ac-procom-awh12yd-d3dna1ao",
      "outdoorUnitId": "ou-ac-procom-awh12yd-d3dna1ao",
      "indoorUnitId": "iu-awh12qd-d3dni",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awh18qdxf-d3dnb2ao-awh18qdxf-d3dnb8ai",
      "slug": "ac-procom-awh18qdxf-d3dnb2ao-awh18qdxf-d3dnb8ai",
      "modelId": "model-ac-procom-awh18qdxf-d3dnb2ao",
      "outdoorUnitId": "ou-ac-procom-awh18qdxf-d3dnb2ao",
      "indoorUnitId": "iu-awh18qdxf-d3dnb8ai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awh24ye-d3dna1ao-awh24qe-d3dni",
      "slug": "ac-procom-awh24ye-d3dna1ao-awh24qe-d3dni",
      "modelId": "model-ac-procom-awh24ye-d3dna1ao",
      "outdoorUnitId": "ou-ac-procom-awh24ye-d3dna1ao",
      "indoorUnitId": "iu-awh24qe-d3dni",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awhd18nd3mo-iu-40238",
      "slug": "ac-procom-awhd18nd3mo-iu-40238",
      "modelId": "model-ac-procom-awhd18nd3mo",
      "outdoorUnitId": "ou-ac-procom-awhd18nd3mo",
      "indoorUnitId": "iu-iu-40238",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awhd24nd3mo-iu-40239",
      "slug": "ac-procom-awhd24nd3mo-iu-40239",
      "modelId": "model-ac-procom-awhd24nd3mo",
      "outdoorUnitId": "ou-ac-procom-awhd24nd3mo",
      "indoorUnitId": "iu-iu-40239",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awhd30nd3mo-iu-40240",
      "slug": "ac-procom-awhd30nd3mo-iu-40240",
      "modelId": "model-ac-procom-awhd30nd3mo",
      "outdoorUnitId": "ou-ac-procom-awhd30nd3mo",
      "indoorUnitId": "iu-iu-40240",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awhd36nd3mo-iu-40241",
      "slug": "ac-procom-awhd36nd3mo-iu-40241",
      "modelId": "model-ac-procom-awhd36nd3mo",
      "outdoorUnitId": "ou-ac-procom-awhd36nd3mo",
      "indoorUnitId": "iu-iu-40241",
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
          "sourceId": "src-ac-procom-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ac-procom-awhd42nd3mo-iu-40242",
      "slug": "ac-procom-awhd42nd3mo-iu-40242",
      "modelId": "model-ac-procom-awhd42nd3mo",
      "outdoorUnitId": "ou-ac-procom-awhd42nd3mo",
      "indoorUnitId": "iu-iu-40242",
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
          "sourceId": "src-ac-procom-epa",
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
