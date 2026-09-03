import type { BrandDataset } from "../../types";

export const brand_yisoDataset: BrandDataset = {
  "brand": {
    "id": "brand-yiso",
    "slug": "yiso",
    "name": "YISO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour YISO",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-yiso-epa",
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
      "id": "series-yiso-pro",
      "slug": "yiso-pro",
      "name": "Pro",
      "brandId": "brand-yiso",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pro de YISO",
      "imageUrl": "/images/series/yiso-yiso-pro.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-yiso-pro2",
      "slug": "yiso-pro2",
      "name": "Pro2",
      "brandId": "brand-yiso",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pro2 de YISO",
      "imageUrl": "/images/series/yiso-yiso-pro2.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-yiso-ultra",
      "slug": "yiso-ultra",
      "name": "Ultra",
      "brandId": "brand-yiso",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra de YISO",
      "imageUrl": "/images/series/yiso-yiso-ultra.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-yiso-yoha2-36aa",
      "slug": "yiso-yoha2-36aa",
      "name": "YISO YOHA2-36AA",
      "seriesId": "series-yiso-pro",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA2-36AA",
      "normalizedModelNumber": "yoha2-36aa",
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
      "id": "model-yiso-yoha2-36cb",
      "slug": "yiso-yoha2-36cb",
      "name": "YISO YOHA2-36CB",
      "seriesId": "series-yiso-pro",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA2-36CB",
      "normalizedModelNumber": "yoha2-36cb",
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
      "id": "model-yiso-yoha2-60aa",
      "slug": "yiso-yoha2-60aa",
      "name": "YISO YOHA2-60AA",
      "seriesId": "series-yiso-pro",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA2-60AA",
      "normalizedModelNumber": "yoha2-60aa",
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
      "id": "model-yiso-yoha2-60cb",
      "slug": "yiso-yoha2-60cb",
      "name": "YISO YOHA2-60CB",
      "seriesId": "series-yiso-pro",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA2-60CB",
      "normalizedModelNumber": "yoha2-60cb",
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
      "id": "model-yiso-yrha1-60ab",
      "slug": "yiso-yrha1-60ab",
      "name": "YISO YRHA1-60AB",
      "seriesId": "series-yiso-pro2",
      "brandId": "brand-yiso",
      "modelNumber": "YRHA1-60AB",
      "normalizedModelNumber": "yrha1-60ab",
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
      "id": "model-yiso-yoha8-36a",
      "slug": "yiso-yoha8-36a",
      "name": "YISO YOHA8-36A",
      "seriesId": "series-yiso-ultra",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA8-36A",
      "normalizedModelNumber": "yoha8-36a",
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
      "id": "model-yiso-yrha1-60bb",
      "slug": "yiso-yrha1-60bb",
      "name": "YISO YRHA1-60BB",
      "seriesId": "series-yiso-pro2",
      "brandId": "brand-yiso",
      "modelNumber": "YRHA1-60BB",
      "normalizedModelNumber": "yrha1-60bb",
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
      "id": "model-yiso-yoha3-36dd",
      "slug": "yiso-yoha3-36dd",
      "name": "YISO YOHA3-36DD",
      "seriesId": "series-yiso-pro2",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA3-36DD",
      "normalizedModelNumber": "yoha3-36dd",
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
      "id": "model-yiso-yrha1-60aa",
      "slug": "yiso-yrha1-60aa",
      "name": "YISO YRHA1-60AA",
      "seriesId": "series-yiso-pro",
      "brandId": "brand-yiso",
      "modelNumber": "YRHA1-60AA",
      "normalizedModelNumber": "yrha1-60aa",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-yiso-yrha1-36ad",
      "slug": "yiso-yrha1-36ad",
      "name": "YISO YRHA1-36AD",
      "seriesId": "series-yiso-pro2",
      "brandId": "brand-yiso",
      "modelNumber": "YRHA1-36AD",
      "normalizedModelNumber": "yrha1-36ad",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-yiso-yoha3-60dd",
      "slug": "yiso-yoha3-60dd",
      "name": "YISO YOHA3-60DD",
      "seriesId": "series-yiso-pro2",
      "brandId": "brand-yiso",
      "modelNumber": "YOHA3-60DD",
      "normalizedModelNumber": "yoha3-60dd",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "ou-yiso-yoha2-36aa",
      "modelNumber": "YOHA2-36AA",
      "brandId": "brand-yiso",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-yiso-yoha2-36cb",
      "modelNumber": "YOHA2-36CB",
      "brandId": "brand-yiso",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-yiso-yoha2-60aa",
      "modelNumber": "YOHA2-60AA",
      "brandId": "brand-yiso",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-yiso-yoha2-60cb",
      "modelNumber": "YOHA2-60CB",
      "brandId": "brand-yiso",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-yiso-yrha1-60ab",
      "modelNumber": "YRHA1-60AB",
      "brandId": "brand-yiso",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-yiso-yoha8-36a",
      "modelNumber": "YOHA8-36A",
      "brandId": "brand-yiso",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-yiso-yrha1-60bb",
      "modelNumber": "YRHA1-60BB",
      "brandId": "brand-yiso",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-yiso-yoha3-36dd",
      "modelNumber": "YOHA3-36DD",
      "brandId": "brand-yiso",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-yiso-yrha1-60aa",
      "modelNumber": "YRHA1-60AA",
      "brandId": "brand-yiso",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-yiso-yrha1-36ad",
      "modelNumber": "YRHA1-36AD",
      "brandId": "brand-yiso",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-yiso-yoha3-60dd",
      "modelNumber": "YOHA3-60DD",
      "brandId": "brand-yiso",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-yaha1-24ba",
      "modelNumber": "YAHA1-24BA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-24cb",
      "modelNumber": "YAHA2-24CB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha1-36ba",
      "modelNumber": "YAHA1-36BA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-36cb",
      "modelNumber": "YAHA2-36CB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-24aa",
      "modelNumber": "YAHA2-24AA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha3-24de",
      "modelNumber": "YAHA3-24DE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-48cb",
      "modelNumber": "YAHA2-48CB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha1-48ba",
      "modelNumber": "YAHA1-48BA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38188",
      "modelNumber": "IU-38188",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha3-48dea",
      "modelNumber": "YAHA3-48DEA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38189",
      "modelNumber": "IU-38189",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-2430aa",
      "modelNumber": "YLCN2-2430AA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-2430ba",
      "modelNumber": "YLCN2-2430BA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha3-48de",
      "modelNumber": "YAHA3-48DE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha3-36de",
      "modelNumber": "YAHA3-36DE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-60cb",
      "modelNumber": "YAHA2-60CB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha3-60dea",
      "modelNumber": "YAHA3-60DEA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-4248ca",
      "modelNumber": "YLCN2-4248CA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha1-60ba",
      "modelNumber": "YAHA1-60BA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38187",
      "modelNumber": "IU-38187",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38186",
      "modelNumber": "IU-38186",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-36aa",
      "modelNumber": "YAHA2-36AA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylan4-3036bb",
      "modelNumber": "YLAN4-3036BB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-3036ba",
      "modelNumber": "YLCN2-3036BA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylan4-4860cb",
      "modelNumber": "YLAN4-4860CB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylan4-4860db",
      "modelNumber": "YLAN4-4860DB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-4860ca",
      "modelNumber": "YLCN2-4860CA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylsn2-3036ca",
      "modelNumber": "YLSN2-3036CA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylan4-2430bb",
      "modelNumber": "YLAN4-2430BB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylan4-2430ab",
      "modelNumber": "YLAN4-2430AB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha3-60de",
      "modelNumber": "YAHA3-60DE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylan4-4248cb",
      "modelNumber": "YLAN4-4248CB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yccn4-4860db",
      "modelNumber": "YCCN4-4860DB",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-4860da",
      "modelNumber": "YLCN2-4860DA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn4-4860ce",
      "modelNumber": "YLCN4-4860CE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn4-2430be",
      "modelNumber": "YLCN4-2430BE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn4-4248ce",
      "modelNumber": "YLCN4-4248CE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn4-3036be",
      "modelNumber": "YLCN4-3036BE",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-yaha2-60aa",
      "modelNumber": "YAHA2-60AA",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-2430aadk",
      "modelNumber": "YLCN2-2430AA+DK",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-2430badk",
      "modelNumber": "YLCN2-2430BA+DK",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-3036badk",
      "modelNumber": "YLCN2-3036BA+DK",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-4860dadk",
      "modelNumber": "YLCN2-4860DA+DK",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-4248cadk",
      "modelNumber": "YLCN2-4248CA+DK",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    },
    {
      "id": "iu-ylcn2-4860cadk",
      "modelNumber": "YLCN2-4860CA+DK",
      "brandId": "brand-yiso",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-yiso-yoha2-36aa-yaha1-24ba",
      "slug": "yiso-yoha2-36aa-yaha1-24ba",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-yaha1-24ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-yaha2-24cb",
      "slug": "yiso-yoha2-36aa-yaha2-24cb",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-yaha2-24cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-yaha2-24cb",
      "slug": "yiso-yoha2-36cb-yaha2-24cb",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-yaha2-24cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-yaha1-36ba",
      "slug": "yiso-yoha2-36aa-yaha1-36ba",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-yaha1-36ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha1-36ba",
      "slug": "yiso-yoha2-60aa-yaha1-36ba",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha1-36ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha2-36cb",
      "slug": "yiso-yoha2-60aa-yaha2-36cb",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha2-36cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-yaha2-36cb",
      "slug": "yiso-yoha2-36aa-yaha2-36cb",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-yaha2-36cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-yaha2-24aa",
      "slug": "yiso-yoha2-36aa-yaha2-24aa",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-yaha2-24aa",
      "minHeatingTempC": -25,
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-yaha3-24de",
      "slug": "yiso-yoha2-36cb-yaha3-24de",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-yaha3-24de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha2-48cb",
      "slug": "yiso-yoha2-60aa-yaha2-48cb",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha2-48cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha2-48cb",
      "slug": "yiso-yoha2-60cb-yaha2-48cb",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha2-48cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha1-48ba",
      "slug": "yiso-yoha2-60aa-yaha1-48ba",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha1-48ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha2-36cb",
      "slug": "yiso-yoha2-60cb-yaha2-36cb",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha2-36cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yrha1-60ab-iu-38188",
      "slug": "yiso-yrha1-60ab-iu-38188",
      "modelId": "model-yiso-yrha1-60ab",
      "outdoorUnitId": "ou-yiso-yrha1-60ab",
      "indoorUnitId": "iu-iu-38188",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha8-36a-yaha2-36cb",
      "slug": "yiso-yoha8-36a-yaha2-36cb",
      "modelId": "model-yiso-yoha8-36a",
      "outdoorUnitId": "ou-yiso-yoha8-36a",
      "indoorUnitId": "iu-yaha2-36cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha3-48dea",
      "slug": "yiso-yoha2-60cb-yaha3-48dea",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha3-48dea",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yrha1-60bb-iu-38189",
      "slug": "yiso-yrha1-60bb-iu-38189",
      "modelId": "model-yiso-yrha1-60bb",
      "outdoorUnitId": "ou-yiso-yrha1-60bb",
      "indoorUnitId": "iu-iu-38189",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-yaha2-36cb",
      "slug": "yiso-yoha2-36cb-yaha2-36cb",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-yaha2-36cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-2430aa",
      "slug": "yiso-yoha2-36aa-ylcn2-2430aa",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-2430aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-2430ba",
      "slug": "yiso-yoha2-36aa-ylcn2-2430ba",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-2430ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha3-48de",
      "slug": "yiso-yoha2-60cb-yaha3-48de",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha3-48de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha3-36de",
      "slug": "yiso-yoha2-60cb-yaha3-36de",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha3-36de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha2-60cb",
      "slug": "yiso-yoha2-60cb-yaha2-60cb",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha2-60cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha3-60dea",
      "slug": "yiso-yoha2-60cb-yaha3-60dea",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha3-60dea",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-yaha3-36de",
      "slug": "yiso-yoha2-36cb-yaha3-36de",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-yaha3-36de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-4248ca",
      "slug": "yiso-yoha2-36aa-ylcn2-4248ca",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-4248ca",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha2-60cb",
      "slug": "yiso-yoha2-60aa-yaha2-60cb",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha2-60cb",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha1-60ba",
      "slug": "yiso-yoha2-60aa-yaha1-60ba",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha1-60ba",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-36dd-yaha3-24de",
      "slug": "yiso-yoha3-36dd-yaha3-24de",
      "modelId": "model-yiso-yoha3-36dd",
      "outdoorUnitId": "ou-yiso-yoha3-36dd",
      "indoorUnitId": "iu-yaha3-24de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yrha1-60aa-iu-38187",
      "slug": "yiso-yrha1-60aa-iu-38187",
      "modelId": "model-yiso-yrha1-60aa",
      "outdoorUnitId": "ou-yiso-yrha1-60aa",
      "indoorUnitId": "iu-iu-38187",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha8-36a-yaha2-24aa",
      "slug": "yiso-yoha8-36a-yaha2-24aa",
      "modelId": "model-yiso-yoha8-36a",
      "outdoorUnitId": "ou-yiso-yoha8-36a",
      "indoorUnitId": "iu-yaha2-24aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yrha1-36ad-iu-38186",
      "slug": "yiso-yrha1-36ad-iu-38186",
      "modelId": "model-yiso-yrha1-36ad",
      "outdoorUnitId": "ou-yiso-yrha1-36ad",
      "indoorUnitId": "iu-iu-38186",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.3,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-yaha2-36aa",
      "slug": "yiso-yoha2-36aa-yaha2-36aa",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-yaha2-36aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha2-36aa",
      "slug": "yiso-yoha2-60aa-yaha2-36aa",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha2-36aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylan4-3036bb",
      "slug": "yiso-yoha2-36cb-ylan4-3036bb",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylan4-3036bb",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-3036ba",
      "slug": "yiso-yoha2-36aa-ylcn2-3036ba",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-3036ba",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylan4-4860cb",
      "slug": "yiso-yoha2-60cb-ylan4-4860cb",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylan4-4860cb",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylan4-4860db",
      "slug": "yiso-yoha2-60cb-ylan4-4860db",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylan4-4860db",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-4860ca",
      "slug": "yiso-yoha2-60aa-ylcn2-4860ca",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-4860ca",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylan4-4860cb",
      "slug": "yiso-yoha2-36cb-ylan4-4860cb",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylan4-4860cb",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylsn2-3036ca",
      "slug": "yiso-yoha2-60aa-ylsn2-3036ca",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylsn2-3036ca",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-4248ca",
      "slug": "yiso-yoha2-60aa-ylcn2-4248ca",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-4248ca",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylan4-2430bb",
      "slug": "yiso-yoha2-36cb-ylan4-2430bb",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylan4-2430bb",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylsn2-3036ca",
      "slug": "yiso-yoha2-36aa-ylsn2-3036ca",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylsn2-3036ca",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-3036ba",
      "slug": "yiso-yoha2-60aa-ylcn2-3036ba",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-3036ba",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylan4-2430ab",
      "slug": "yiso-yoha2-36cb-ylan4-2430ab",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylan4-2430ab",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yaha3-60de",
      "slug": "yiso-yoha2-60cb-yaha3-60de",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yaha3-60de",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylan4-4248cb",
      "slug": "yiso-yoha2-36cb-ylan4-4248cb",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylan4-4248cb",
      "minHeatingTempC": -15,
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylan4-3036bb",
      "slug": "yiso-yoha2-60cb-ylan4-3036bb",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylan4-3036bb",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylan4-4248cb",
      "slug": "yiso-yoha2-60cb-ylan4-4248cb",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylan4-4248cb",
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
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-yccn4-4860db",
      "slug": "yiso-yoha2-60cb-yccn4-4860db",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-yccn4-4860db",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-4860da",
      "slug": "yiso-yoha2-60aa-ylcn2-4860da",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-4860da",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-36dd-yaha3-36de",
      "slug": "yiso-yoha3-36dd-yaha3-36de",
      "modelId": "model-yiso-yoha3-36dd",
      "outdoorUnitId": "ou-yiso-yoha3-36dd",
      "indoorUnitId": "iu-yaha3-36de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylcn4-4860ce",
      "slug": "yiso-yoha2-60cb-ylcn4-4860ce",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylcn4-4860ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-36dd-ylcn4-2430be",
      "slug": "yiso-yoha3-36dd-ylcn4-2430be",
      "modelId": "model-yiso-yoha3-36dd",
      "outdoorUnitId": "ou-yiso-yoha3-36dd",
      "indoorUnitId": "iu-ylcn4-2430be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylcn4-4248ce",
      "slug": "yiso-yoha2-60cb-ylcn4-4248ce",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylcn4-4248ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylcn4-4248ce",
      "slug": "yiso-yoha2-36cb-ylcn4-4248ce",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylcn4-4248ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylcn4-2430be",
      "slug": "yiso-yoha2-36cb-ylcn4-2430be",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylcn4-2430be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36cb-ylcn4-3036be",
      "slug": "yiso-yoha2-36cb-ylcn4-3036be",
      "modelId": "model-yiso-yoha2-36cb",
      "outdoorUnitId": "ou-yiso-yoha2-36cb",
      "indoorUnitId": "iu-ylcn4-3036be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60cb-ylcn4-3036be",
      "slug": "yiso-yoha2-60cb-ylcn4-3036be",
      "modelId": "model-yiso-yoha2-60cb",
      "outdoorUnitId": "ou-yiso-yoha2-60cb",
      "indoorUnitId": "iu-ylcn4-3036be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-60dd-yaha3-48de",
      "slug": "yiso-yoha3-60dd-yaha3-48de",
      "modelId": "model-yiso-yoha3-60dd",
      "outdoorUnitId": "ou-yiso-yoha3-60dd",
      "indoorUnitId": "iu-yaha3-48de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha8-36a-yaha2-36aa",
      "slug": "yiso-yoha8-36a-yaha2-36aa",
      "modelId": "model-yiso-yoha8-36a",
      "outdoorUnitId": "ou-yiso-yoha8-36a",
      "indoorUnitId": "iu-yaha2-36aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.2,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-60dd-yaha3-36de",
      "slug": "yiso-yoha3-60dd-yaha3-36de",
      "modelId": "model-yiso-yoha3-60dd",
      "outdoorUnitId": "ou-yiso-yoha3-60dd",
      "indoorUnitId": "iu-yaha3-36de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-60dd-yaha3-60de",
      "slug": "yiso-yoha3-60dd-yaha3-60de",
      "modelId": "model-yiso-yoha3-60dd",
      "outdoorUnitId": "ou-yiso-yoha3-60dd",
      "indoorUnitId": "iu-yaha3-60de",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-yaha2-60aa",
      "slug": "yiso-yoha2-60aa-yaha2-60aa",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-yaha2-60aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-60dd-ylcn4-4248ce",
      "slug": "yiso-yoha3-60dd-ylcn4-4248ce",
      "modelId": "model-yiso-yoha3-60dd",
      "outdoorUnitId": "ou-yiso-yoha3-60dd",
      "indoorUnitId": "iu-ylcn4-4248ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-36dd-ylcn4-3036be",
      "slug": "yiso-yoha3-36dd-ylcn4-3036be",
      "modelId": "model-yiso-yoha3-36dd",
      "outdoorUnitId": "ou-yiso-yoha3-36dd",
      "indoorUnitId": "iu-ylcn4-3036be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-60dd-ylcn4-3036be",
      "slug": "yiso-yoha3-60dd-ylcn4-3036be",
      "modelId": "model-yiso-yoha3-60dd",
      "outdoorUnitId": "ou-yiso-yoha3-60dd",
      "indoorUnitId": "iu-ylcn4-3036be",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-36dd-ylcn4-4248ce",
      "slug": "yiso-yoha3-36dd-ylcn4-4248ce",
      "modelId": "model-yiso-yoha3-36dd",
      "outdoorUnitId": "ou-yiso-yoha3-36dd",
      "indoorUnitId": "iu-ylcn4-4248ce",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha3-60dd-ylcn4-4860ce",
      "slug": "yiso-yoha3-60dd-ylcn4-4860ce",
      "modelId": "model-yiso-yoha3-60dd",
      "outdoorUnitId": "ou-yiso-yoha3-60dd",
      "indoorUnitId": "iu-ylcn4-4860ce",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-2430aadk",
      "slug": "yiso-yoha2-36aa-ylcn2-2430aadk",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-2430aadk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-2430badk",
      "slug": "yiso-yoha2-36aa-ylcn2-2430badk",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-2430badk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-36aa-ylcn2-3036badk",
      "slug": "yiso-yoha2-36aa-ylcn2-3036badk",
      "modelId": "model-yiso-yoha2-36aa",
      "outdoorUnitId": "ou-yiso-yoha2-36aa",
      "indoorUnitId": "iu-ylcn2-3036badk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-4860dadk",
      "slug": "yiso-yoha2-60aa-ylcn2-4860dadk",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-4860dadk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-4248cadk",
      "slug": "yiso-yoha2-60aa-ylcn2-4248cadk",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-4248cadk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-yiso-yoha2-60aa-ylcn2-4860cadk",
      "slug": "yiso-yoha2-60aa-ylcn2-4860cadk",
      "modelId": "model-yiso-yoha2-60aa",
      "outdoorUnitId": "ou-yiso-yoha2-60aa",
      "indoorUnitId": "iu-ylcn2-4860cadk",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-yiso-epa",
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
