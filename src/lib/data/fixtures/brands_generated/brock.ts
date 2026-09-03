import type { BrandDataset } from "../../types";

export const brand_brockDataset: BrandDataset = {
  "brand": {
    "id": "brand-brock",
    "slug": "brock",
    "name": "BROCK",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour BROCK",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-brock-epa",
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
      "id": "series-brock-2-stage-18-seer-hp",
      "slug": "brock-2-stage-18-seer-hp",
      "name": "2-STAGE 18 SEER HP",
      "brandId": "brand-brock",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 18 SEER HP de BROCK",
      "imageUrl": "/images/series/brock-brock-2-stage-18-seer-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-brock-15-seer2-hp",
      "slug": "brock-15-seer2-hp",
      "name": "15 SEER2 HP",
      "brandId": "brand-brock",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 HP de BROCK",
      "imageUrl": "/images/series/brock-brock-15-seer2-hp.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-brock-ph8tan524aa",
      "slug": "brock-ph8tan524aa",
      "name": "BROCK PH8TAN524**AA*",
      "seriesId": "series-brock-2-stage-18-seer-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH8TAN524**AA*",
      "normalizedModelNumber": "ph8tan524**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24600,
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
      "id": "model-brock-ph8tan548aa",
      "slug": "brock-ph8tan548aa",
      "name": "BROCK PH8TAN548**AA*",
      "seriesId": "series-brock-2-stage-18-seer-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH8TAN548**AA*",
      "normalizedModelNumber": "ph8tan548**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 49500,
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
      "id": "model-brock-ph8tan560aa",
      "slug": "brock-ph8tan560aa",
      "name": "BROCK PH8TAN560**AA*",
      "seriesId": "series-brock-2-stage-18-seer-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH8TAN560**AA*",
      "normalizedModelNumber": "ph8tan560**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57500,
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
      "id": "model-brock-ph8tan536aa",
      "slug": "brock-ph8tan536aa",
      "name": "BROCK PH8TAN536**AA*",
      "seriesId": "series-brock-2-stage-18-seer-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH8TAN536**AA*",
      "normalizedModelNumber": "ph8tan536**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36000,
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
      "id": "model-brock-ph5san524aa",
      "slug": "brock-ph5san524aa",
      "name": "BROCK PH5SAN524**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN524**AA*",
      "normalizedModelNumber": "ph5san524**aa*",
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
      "id": "model-brock-ph5san531aa",
      "slug": "brock-ph5san531aa",
      "name": "BROCK PH5SAN531**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN531**AA*",
      "normalizedModelNumber": "ph5san531**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28800,
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
      "id": "model-brock-ph5san536aa",
      "slug": "brock-ph5san536aa",
      "name": "BROCK PH5SAN536**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN536**AA*",
      "normalizedModelNumber": "ph5san536**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36800,
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
      "id": "model-brock-ph5san519aa",
      "slug": "brock-ph5san519aa",
      "name": "BROCK PH5SAN519**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN519**AA*",
      "normalizedModelNumber": "ph5san519**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19300,
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
      "id": "model-brock-ph5san518aa",
      "slug": "brock-ph5san518aa",
      "name": "BROCK PH5SAN518**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN518**AA*",
      "normalizedModelNumber": "ph5san518**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 17400,
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
      "id": "model-brock-ph5san548aa",
      "slug": "brock-ph5san548aa",
      "name": "BROCK PH5SAN548**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN548**AA*",
      "normalizedModelNumber": "ph5san548**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47500,
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
      "id": "model-brock-ph5san542aa",
      "slug": "brock-ph5san542aa",
      "name": "BROCK PH5SAN542**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN542**AA*",
      "normalizedModelNumber": "ph5san542**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41500,
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
      "id": "model-brock-ph5san430aa",
      "slug": "brock-ph5san430aa",
      "name": "BROCK PH5SAN430**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN430**AA*",
      "normalizedModelNumber": "ph5san430**aa*",
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
      "id": "model-brock-ph5san530aa",
      "slug": "brock-ph5san530aa",
      "name": "BROCK PH5SAN530**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN530**AA*",
      "normalizedModelNumber": "ph5san530**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30200,
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
      "id": "model-brock-ph5san560aa",
      "slug": "brock-ph5san560aa",
      "name": "BROCK PH5SAN560**AA*",
      "seriesId": "series-brock-15-seer2-hp",
      "brandId": "brand-brock",
      "modelNumber": "PH5SAN560**AA*",
      "normalizedModelNumber": "ph5san560**aa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "ou-brock-ph8tan524aa",
      "modelNumber": "PH8TAN524**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph8tan548aa",
      "modelNumber": "PH8TAN548**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph8tan560aa",
      "modelNumber": "PH8TAN560**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph8tan536aa",
      "modelNumber": "PH8TAN536**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san524aa",
      "modelNumber": "PH5SAN524**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san531aa",
      "modelNumber": "PH5SAN531**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san536aa",
      "modelNumber": "PH5SAN536**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san519aa",
      "modelNumber": "PH5SAN519**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san518aa",
      "modelNumber": "PH5SAN518**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san548aa",
      "modelNumber": "PH5SAN548**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san542aa",
      "modelNumber": "PH5SAN542**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san430aa",
      "modelNumber": "PH5SAN430**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-brock-ph5san530aa",
      "modelNumber": "PH5SAN530**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-brock-ph5san560aa",
      "modelNumber": "PH5SAN560**AA*",
      "brandId": "brand-brock",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-cvama3217xma",
      "modelNumber": "CVAMA3217XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3117xma",
      "modelNumber": "CVAVA3117XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2517am",
      "modelNumber": "CAA**2517AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3621xma",
      "modelNumber": "CVAVA3621XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama3117xma",
      "modelNumber": "CVAMA3117XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3721xma",
      "modelNumber": "CVAVA3721XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3721am",
      "modelNumber": "CAA**3721AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava3817xma",
      "modelNumber": "CVAVA3817XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnxc36l",
      "modelNumber": "PF5TNXC36L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d3617x",
      "modelNumber": "QFVA5D3617X*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d6021x",
      "modelNumber": "QFVA5D6021X*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnbd60l",
      "modelNumber": "PF5TNBD60L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4921xma",
      "modelNumber": "CVAMA4921XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3717am",
      "modelNumber": "CAA**3717AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3017am",
      "modelNumber": "CAA**3017AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3617am",
      "modelNumber": "CAA**3617AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6121xma",
      "modelNumber": "CVAVA6121XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d4821x",
      "modelNumber": "QFVA5D4821X*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6124xma",
      "modelNumber": "CVAVA6124XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6021xma",
      "modelNumber": "CVAMA6021XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnxb24l",
      "modelNumber": "PF5TNXB24L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4924xma",
      "modelNumber": "CVAVA4924XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d2417x",
      "modelNumber": "QFVA5D2417X*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4821xma",
      "modelNumber": "CVAMA4821XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4821xma",
      "modelNumber": "CVAVA4821XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2417am",
      "modelNumber": "CAA**2417AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3014am",
      "modelNumber": "CAA**3014AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah3612am",
      "modelNumber": "CSAH*3612AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5tnxc48l",
      "modelNumber": "PF5TNXC48L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6021xma",
      "modelNumber": "CVAVA6021XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa6121am",
      "modelNumber": "CAA**6121AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa6124am",
      "modelNumber": "CAA**6124AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6124xmatdr",
      "modelNumber": "CVAVA6124XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa6024am",
      "modelNumber": "CAA**6024AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6124xmatdr",
      "modelNumber": "CVAMA6124XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6021xmatdr",
      "modelNumber": "CVAVA6021XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6021xmatdr",
      "modelNumber": "CVAMA6021XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4921xmatdr",
      "modelNumber": "CVAMA4921XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x30al",
      "modelNumber": "FMA5X30**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2414am",
      "modelNumber": "CAA**2414AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6121xmatdr",
      "modelNumber": "CVAVA6121XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah3012am",
      "modelNumber": "CSAH*3012AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4824xmatdr",
      "modelNumber": "CVAVA4824XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa4821am",
      "modelNumber": "CAA**4821AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6124xma",
      "modelNumber": "CVAMA6124XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah2412am",
      "modelNumber": "CSAH*2412AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z30al",
      "modelNumber": "FM(C,U)5Z30**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x36al",
      "modelNumber": "FMA5X36**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z36al",
      "modelNumber": "FM(C,U)5Z36**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0048nava54801ck",
      "modelNumber": "FEVA0048**+NAVA54801CK",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnc42l",
      "modelNumber": "PF5MN*C42L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama6024xmatdr",
      "modelNumber": "CVAMA6024XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa4321am",
      "modelNumber": "CAA**4321AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa1917am",
      "modelNumber": "CAA**1917AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4821xmatdr",
      "modelNumber": "CVAVA4821XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava6024xmatdr",
      "modelNumber": "CVAVA6024XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4924xmatdr",
      "modelNumber": "CVAVA4924XMA*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah6012am",
      "modelNumber": "CSAH*6012AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah4812am",
      "modelNumber": "CSAH*4812AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s18al",
      "modelNumber": "FM(C,U)5S18**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s24al",
      "modelNumber": "FM(C,U)5S24**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x24al",
      "modelNumber": "FMA5X24**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z18al",
      "modelNumber": "FM(C,U)5Z18**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z24al",
      "modelNumber": "FM(C,U)5Z24**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s30al",
      "modelNumber": "FM(C,U)5S30**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0036nava53601ck",
      "modelNumber": "FEVB0036**+NAVA53601CK",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x18al",
      "modelNumber": "FMA5X18**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0036nava53601ck",
      "modelNumber": "FEVA0036**+NAVA53601CK",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnb24l",
      "modelNumber": "PF5MN*B24L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s36al",
      "modelNumber": "FM(C,U)5S36**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa4221am",
      "modelNumber": "CAA**4221AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-csah4212am",
      "modelNumber": "CSAH*4212AM*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnb30l",
      "modelNumber": "PF5MN*B30L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0048nava54801ck",
      "modelNumber": "FEVB0048**+NAVA54801CK",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa2517amtdr",
      "modelNumber": "CAA**2517AM*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-caa3721amtdr",
      "modelNumber": "CAA**3721AM*+TDR",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnb36l",
      "modelNumber": "PF5MN*B36L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnc48l",
      "modelNumber": "PF5MN*C48L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cap3721al",
      "modelNumber": "CAP**3721AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mna18l",
      "modelNumber": "PF5MN*A18L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l18al",
      "modelNumber": "FMA5L18**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-pf5mnd60l",
      "modelNumber": "PF5MN*D60L*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0060nava56001ck",
      "modelNumber": "FEVB0060**+NAVA56001CK",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4224xma",
      "modelNumber": "CVAVA4224XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvama4421xma",
      "modelNumber": "CVAMA4421XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l30al",
      "modelNumber": "FMA5L30**AL*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0060nava56001ck",
      "modelNumber": "FEVA0060**+NAVA56001CK",
      "brandId": "brand-brock",
      "type": "central-ducted"
    },
    {
      "id": "iu-cvava4221xma",
      "modelNumber": "CVAVA4221XMA*",
      "brandId": "brand-brock",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-brock-ph8tan524aa-cvama3217xma",
      "slug": "brock-ph8tan524aa-cvama3217xma",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-cvama3217xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-cvava3117xma",
      "slug": "brock-ph8tan524aa-cvava3117xma",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-cvava3117xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa2517am",
      "slug": "brock-ph8tan524aa-caa2517am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa2517am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-cvava3621xma",
      "slug": "brock-ph8tan524aa-cvava3621xma",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-cvava3621xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-cvama3117xma",
      "slug": "brock-ph8tan524aa-cvama3117xma",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-cvama3117xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-cvava3721xma",
      "slug": "brock-ph8tan524aa-cvava3721xma",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-cvava3721xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa3721am",
      "slug": "brock-ph8tan524aa-caa3721am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-cvava3817xma",
      "slug": "brock-ph8tan524aa-cvava3817xma",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-cvava3817xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-pf5tnxc36l",
      "slug": "brock-ph8tan524aa-pf5tnxc36l",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-pf5tnxc36l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-qfva5d3617x",
      "slug": "brock-ph8tan524aa-qfva5d3617x",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-qfva5d3617x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-qfva5d6021x",
      "slug": "brock-ph8tan548aa-qfva5d6021x",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-qfva5d6021x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-pf5tnbd60l",
      "slug": "brock-ph8tan548aa-pf5tnbd60l",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama4921xma",
      "slug": "brock-ph8tan548aa-cvama4921xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama4921xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa3717am",
      "slug": "brock-ph8tan524aa-caa3717am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa3717am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa3017am",
      "slug": "brock-ph8tan524aa-caa3017am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa3017am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa3617am",
      "slug": "brock-ph8tan524aa-caa3617am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa3617am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6121xma",
      "slug": "brock-ph8tan548aa-cvava6121xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6121xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-qfva5d4821x",
      "slug": "brock-ph8tan548aa-qfva5d4821x",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-qfva5d4821x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6124xma",
      "slug": "brock-ph8tan548aa-cvava6124xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6124xma",
      "minHeatingTempC": -15,
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama6021xma",
      "slug": "brock-ph8tan548aa-cvama6021xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama6021xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-pf5tnbd60l",
      "slug": "brock-ph8tan560aa-pf5tnbd60l",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-qfva5d6021x",
      "slug": "brock-ph8tan560aa-qfva5d6021x",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-qfva5d6021x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-pf5tnxb24l",
      "slug": "brock-ph8tan524aa-pf5tnxb24l",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava4924xma",
      "slug": "brock-ph8tan548aa-cvava4924xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava4924xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-qfva5d2417x",
      "slug": "brock-ph8tan524aa-qfva5d2417x",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-qfva5d2417x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama4821xma",
      "slug": "brock-ph8tan548aa-cvama4821xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama4821xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava4821xma",
      "slug": "brock-ph8tan548aa-cvava4821xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava4821xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa2417am",
      "slug": "brock-ph8tan524aa-caa2417am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa2417am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa3014am",
      "slug": "brock-ph8tan524aa-caa3014am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa3014am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-pf5tnbd60l",
      "slug": "brock-ph8tan536aa-pf5tnbd60l",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-csah3612am",
      "slug": "brock-ph8tan524aa-csah3612am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-csah3612am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-pf5tnxc48l",
      "slug": "brock-ph8tan548aa-pf5tnxc48l",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-pf5tnxc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6021xma",
      "slug": "brock-ph8tan548aa-cvava6021xma",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6021xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-caa6121am",
      "slug": "brock-ph8tan548aa-caa6121am",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-caa6121am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-caa6124am",
      "slug": "brock-ph8tan548aa-caa6124am",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-caa6124am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6124xmatdr",
      "slug": "brock-ph8tan548aa-cvava6124xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6124xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-caa6124am",
      "slug": "brock-ph8tan560aa-caa6124am",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-caa6124am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-caa6024am",
      "slug": "brock-ph8tan560aa-caa6024am",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-caa6024am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-caa6121am",
      "slug": "brock-ph8tan560aa-caa6121am",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-caa6121am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama6124xmatdr",
      "slug": "brock-ph8tan548aa-cvama6124xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama6124xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6021xmatdr",
      "slug": "brock-ph8tan548aa-cvava6021xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6021xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama6021xmatdr",
      "slug": "brock-ph8tan548aa-cvama6021xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama6021xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama4921xmatdr",
      "slug": "brock-ph8tan548aa-cvama4921xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama4921xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-caa6024am",
      "slug": "brock-ph8tan548aa-caa6024am",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-caa6024am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fma5x30al",
      "slug": "brock-ph5san524aa-fma5x30al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa2414am",
      "slug": "brock-ph8tan524aa-caa2414am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa2414am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-pf5tnxc48l",
      "slug": "brock-ph8tan536aa-pf5tnxc48l",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-pf5tnxc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-qfva5d4821x",
      "slug": "brock-ph8tan536aa-qfva5d4821x",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-qfva5d4821x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6121xmatdr",
      "slug": "brock-ph8tan548aa-cvava6121xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6121xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-csah3012am",
      "slug": "brock-ph8tan524aa-csah3012am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-csah3012am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava4824xmatdr",
      "slug": "brock-ph8tan548aa-cvava4824xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava4824xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-cvava6124xma",
      "slug": "brock-ph8tan560aa-cvava6124xma",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-cvava6124xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-cvava6121xma",
      "slug": "brock-ph8tan560aa-cvava6121xma",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-cvava6121xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-caa4821am",
      "slug": "brock-ph8tan548aa-caa4821am",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-caa4821am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-cvama6021xma",
      "slug": "brock-ph8tan560aa-cvama6021xma",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-cvama6021xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-cvava6021xma",
      "slug": "brock-ph8tan560aa-cvava6021xma",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-cvava6021xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan560aa-cvama6124xma",
      "slug": "brock-ph8tan560aa-cvama6124xma",
      "modelId": "model-brock-ph8tan560aa",
      "outdoorUnitId": "ou-brock-ph8tan560aa",
      "indoorUnitId": "iu-cvama6124xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-csah2412am",
      "slug": "brock-ph8tan524aa-csah2412am",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-csah2412am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fmcu5z30al",
      "slug": "brock-ph5san524aa-fmcu5z30al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fma5x30al",
      "slug": "brock-ph5san531aa-fma5x30al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fma5x36al",
      "slug": "brock-ph5san531aa-fma5x36al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fmcu5z36al",
      "slug": "brock-ph5san524aa-fmcu5z36al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fmcu5z36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-feva0048nava54801ck",
      "slug": "brock-ph5san536aa-feva0048nava54801ck",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-feva0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-pf5mnc42l",
      "slug": "brock-ph5san531aa-pf5mnc42l",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-pf5mnc42l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvama6024xmatdr",
      "slug": "brock-ph8tan548aa-cvama6024xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvama6024xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-caa4821am",
      "slug": "brock-ph8tan536aa-caa4821am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-caa4821am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-caa4321am",
      "slug": "brock-ph8tan536aa-caa4321am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-caa4321am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-cvama4821xma",
      "slug": "brock-ph8tan536aa-cvama4821xma",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-cvama4821xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-caa2517am",
      "slug": "brock-ph5san524aa-caa2517am",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-caa2517am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-cvava3817xma",
      "slug": "brock-ph5san524aa-cvava3817xma",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-cvava3817xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-cvava3721xma",
      "slug": "brock-ph5san524aa-cvava3721xma",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-cvava3721xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-caa2517am",
      "slug": "brock-ph5san519aa-caa2517am",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-caa2517am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-caa1917am",
      "slug": "brock-ph5san519aa-caa1917am",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-caa1917am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fmcu5z30al",
      "slug": "brock-ph5san519aa-fmcu5z30al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-cvava3117xma",
      "slug": "brock-ph5san524aa-cvava3117xma",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-cvava3117xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-caa3721am",
      "slug": "brock-ph5san524aa-caa3721am",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-cvama3117xma",
      "slug": "brock-ph5san524aa-cvama3117xma",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-cvama3117xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-cvama3217xma",
      "slug": "brock-ph5san524aa-cvama3217xma",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-cvama3217xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava4821xmatdr",
      "slug": "brock-ph8tan548aa-cvava4821xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava4821xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava6024xmatdr",
      "slug": "brock-ph8tan548aa-cvava6024xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava6024xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-cvava4924xmatdr",
      "slug": "brock-ph8tan548aa-cvava4924xmatdr",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-cvava4924xmatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-cvava3817xma",
      "slug": "brock-ph8tan536aa-cvava3817xma",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-cvava3817xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-cvama4921xma",
      "slug": "brock-ph8tan536aa-cvama4921xma",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-cvama4921xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-csah6012am",
      "slug": "brock-ph8tan548aa-csah6012am",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-csah6012am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan548aa-csah4812am",
      "slug": "brock-ph8tan548aa-csah4812am",
      "modelId": "model-brock-ph8tan548aa",
      "outdoorUnitId": "ou-brock-ph8tan548aa",
      "indoorUnitId": "iu-csah4812am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-qfva5d3617x",
      "slug": "brock-ph8tan536aa-qfva5d3617x",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-qfva5d3617x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fmcu5z36al",
      "slug": "brock-ph5san531aa-fmcu5z36al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fmcu5z36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fmcu5z30al",
      "slug": "brock-ph5san531aa-fmcu5z30al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fmcu5z30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-caa3721am",
      "slug": "brock-ph8tan536aa-caa3721am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fmcu5s18al",
      "slug": "brock-ph5san519aa-fmcu5s18al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fmcu5s18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fmcu5s24al",
      "slug": "brock-ph5san519aa-fmcu5s24al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fmcu5s24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-fma5x24al",
      "slug": "brock-ph5san518aa-fma5x24al",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fmcu5z18al",
      "slug": "brock-ph5san519aa-fmcu5z18al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fmcu5z24al",
      "slug": "brock-ph5san519aa-fmcu5z24al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fmcu5s30al",
      "slug": "brock-ph5san524aa-fmcu5s30al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fevb0036nava53601ck",
      "slug": "brock-ph5san524aa-fevb0036nava53601ck",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-cvama3217xma",
      "slug": "brock-ph5san518aa-cvama3217xma",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-cvama3217xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fma5x18al",
      "slug": "brock-ph5san519aa-fma5x18al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fma5x18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fmcu5z24al",
      "slug": "brock-ph5san524aa-fmcu5z24al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-feva0036nava53601ck",
      "slug": "brock-ph5san524aa-feva0036nava53601ck",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-pf5mnb24l",
      "slug": "brock-ph5san519aa-pf5mnb24l",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-pf5mnb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-caa3717am",
      "slug": "brock-ph5san524aa-caa3717am",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-caa3717am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fmcu5s36al",
      "slug": "brock-ph5san524aa-fmcu5s36al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-cvava3721xma",
      "slug": "brock-ph8tan536aa-cvava3721xma",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-cvava3721xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-caa4221am",
      "slug": "brock-ph8tan536aa-caa4221am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-caa4221am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-cvava4821xma",
      "slug": "brock-ph8tan536aa-cvava4821xma",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-cvava4821xma",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-caa3717am",
      "slug": "brock-ph8tan536aa-caa3717am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-caa3717am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-csah4212am",
      "slug": "brock-ph8tan536aa-csah4212am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-csah4212am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-pf5mnb30l",
      "slug": "brock-ph5san531aa-pf5mnb30l",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-pf5mnb30l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fmcu5s30al",
      "slug": "brock-ph5san531aa-fmcu5s30al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fmcu5s36al",
      "slug": "brock-ph5san531aa-fmcu5s36al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-fevb0048nava54801ck",
      "slug": "brock-ph5san536aa-fevb0048nava54801ck",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-fevb0048nava54801ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa2517amtdr",
      "slug": "brock-ph8tan524aa-caa2517amtdr",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa2517amtdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-fma5x36al",
      "slug": "brock-ph5san536aa-fma5x36al",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan524aa-caa3721amtdr",
      "slug": "brock-ph8tan524aa-caa3721amtdr",
      "modelId": "model-brock-ph8tan524aa",
      "outdoorUnitId": "ou-brock-ph8tan524aa",
      "indoorUnitId": "iu-caa3721amtdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san548aa-pf5tnbd60l",
      "slug": "brock-ph5san548aa-pf5tnbd60l",
      "modelId": "model-brock-ph5san548aa",
      "outdoorUnitId": "ou-brock-ph5san548aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fma5x24al",
      "slug": "brock-ph5san519aa-fma5x24al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-pf5tnxb24l",
      "slug": "brock-ph5san519aa-pf5tnxb24l",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-caa3721am",
      "slug": "brock-ph5san531aa-caa3721am",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-caa3721am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fevb0036nava53601ck",
      "slug": "brock-ph5san531aa-fevb0036nava53601ck",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-feva0036nava53601ck",
      "slug": "brock-ph5san531aa-feva0036nava53601ck",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-pf5mnb36l",
      "slug": "brock-ph5san524aa-pf5mnb36l",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-pf5mnb36l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-pf5tnxb24l",
      "slug": "brock-ph5san524aa-pf5tnxb24l",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-pf5tnxb24l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fma5x24al",
      "slug": "brock-ph5san524aa-fma5x24al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-caa4321am",
      "slug": "brock-ph5san531aa-caa4321am",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-caa4321am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-pf5tnxc48l",
      "slug": "brock-ph5san536aa-pf5tnxc48l",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-pf5tnxc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-pf5mnc48l",
      "slug": "brock-ph5san536aa-pf5mnc48l",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-pf5mnc48l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san542aa-pf5tnbd60l",
      "slug": "brock-ph5san542aa-pf5tnbd60l",
      "modelId": "model-brock-ph5san542aa",
      "outdoorUnitId": "ou-brock-ph5san542aa",
      "indoorUnitId": "iu-pf5tnbd60l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-caa2517am",
      "slug": "brock-ph5san518aa-caa2517am",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-caa2517am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-caa1917am",
      "slug": "brock-ph5san518aa-caa1917am",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-caa1917am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san430aa-cap3721al",
      "slug": "brock-ph5san430aa-cap3721al",
      "modelId": "model-brock-ph5san430aa",
      "outdoorUnitId": "ou-brock-ph5san430aa",
      "indoorUnitId": "iu-cap3721al",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-fmcu5z18al",
      "slug": "brock-ph5san518aa-fmcu5z18al",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-fmcu5z18al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-fmcu5s30al",
      "slug": "brock-ph5san518aa-fmcu5s30al",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-pf5mna18l",
      "slug": "brock-ph5san519aa-pf5mna18l",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-pf5mna18l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-fmcu5z24al",
      "slug": "brock-ph5san518aa-fmcu5z24al",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fmcu5s24al",
      "slug": "brock-ph5san524aa-fmcu5s24al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fmcu5s24al",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-caa3617am",
      "slug": "brock-ph5san524aa-caa3617am",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-caa3617am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san519aa-fma5l18al",
      "slug": "brock-ph5san519aa-fma5l18al",
      "modelId": "model-brock-ph5san519aa",
      "outdoorUnitId": "ou-brock-ph5san519aa",
      "indoorUnitId": "iu-fma5l18al",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-pf5mnb30l",
      "slug": "brock-ph5san518aa-pf5mnb30l",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-pf5mnb30l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-fma5x18al",
      "slug": "brock-ph5san518aa-fma5x18al",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-fma5x18al",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san518aa-fmcu5z30al",
      "slug": "brock-ph5san518aa-fmcu5z30al",
      "modelId": "model-brock-ph5san518aa",
      "outdoorUnitId": "ou-brock-ph5san518aa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san548aa-pf5mnd60l",
      "slug": "brock-ph5san548aa-pf5mnd60l",
      "modelId": "model-brock-ph5san548aa",
      "outdoorUnitId": "ou-brock-ph5san548aa",
      "indoorUnitId": "iu-pf5mnd60l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-pf5mnc42l",
      "slug": "brock-ph5san536aa-pf5mnc42l",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-pf5mnc42l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san542aa-pf5mnd60l",
      "slug": "brock-ph5san542aa-pf5mnd60l",
      "modelId": "model-brock-ph5san542aa",
      "outdoorUnitId": "ou-brock-ph5san542aa",
      "indoorUnitId": "iu-pf5mnd60l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san542aa-fevb0060nava56001ck",
      "slug": "brock-ph5san542aa-fevb0060nava56001ck",
      "modelId": "model-brock-ph5san542aa",
      "outdoorUnitId": "ou-brock-ph5san542aa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-fmcu5z36al",
      "slug": "brock-ph5san536aa-fmcu5z36al",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-caa3721am",
      "slug": "brock-ph5san536aa-caa3721am",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-caa3721am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-caa4821am",
      "slug": "brock-ph5san536aa-caa4821am",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-caa4821am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-caa4321am",
      "slug": "brock-ph5san536aa-caa4321am",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-caa4321am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-cvava4224xma",
      "slug": "brock-ph5san536aa-cvava4224xma",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-cvava4224xma",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-cvama4421xma",
      "slug": "brock-ph5san536aa-cvama4421xma",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-cvama4421xma",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san530aa-cvava4224xma",
      "slug": "brock-ph5san530aa-cvava4224xma",
      "modelId": "model-brock-ph5san530aa",
      "outdoorUnitId": "ou-brock-ph5san530aa",
      "indoorUnitId": "iu-cvava4224xma",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-pf5mnb30l",
      "slug": "brock-ph5san524aa-pf5mnb30l",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-pf5mnb30l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san530aa-fma5x36al",
      "slug": "brock-ph5san530aa-fma5x36al",
      "modelId": "model-brock-ph5san530aa",
      "outdoorUnitId": "ou-brock-ph5san530aa",
      "indoorUnitId": "iu-fma5x36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san530aa-pf5mnc42l",
      "slug": "brock-ph5san530aa-pf5mnc42l",
      "modelId": "model-brock-ph5san530aa",
      "outdoorUnitId": "ou-brock-ph5san530aa",
      "indoorUnitId": "iu-pf5mnc42l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san524aa-fma5l30al",
      "slug": "brock-ph5san524aa-fma5l30al",
      "modelId": "model-brock-ph5san524aa",
      "outdoorUnitId": "ou-brock-ph5san524aa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san548aa-fevb0060nava56001ck",
      "slug": "brock-ph5san548aa-fevb0060nava56001ck",
      "modelId": "model-brock-ph5san548aa",
      "outdoorUnitId": "ou-brock-ph5san548aa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san548aa-feva0060nava56001ck",
      "slug": "brock-ph5san548aa-feva0060nava56001ck",
      "modelId": "model-brock-ph5san548aa",
      "outdoorUnitId": "ou-brock-ph5san548aa",
      "indoorUnitId": "iu-feva0060nava56001ck",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san536aa-fmcu5s36al",
      "slug": "brock-ph5san536aa-fmcu5s36al",
      "modelId": "model-brock-ph5san536aa",
      "outdoorUnitId": "ou-brock-ph5san536aa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san560aa-pf5tnbd60l",
      "slug": "brock-ph5san560aa-pf5tnbd60l",
      "modelId": "model-brock-ph5san560aa",
      "outdoorUnitId": "ou-brock-ph5san560aa",
      "indoorUnitId": "iu-pf5tnbd60l",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san530aa-fma5x30al",
      "slug": "brock-ph5san530aa-fma5x30al",
      "modelId": "model-brock-ph5san530aa",
      "outdoorUnitId": "ou-brock-ph5san530aa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph5san531aa-fma5l30al",
      "slug": "brock-ph5san531aa-fma5l30al",
      "modelId": "model-brock-ph5san531aa",
      "outdoorUnitId": "ou-brock-ph5san531aa",
      "indoorUnitId": "iu-fma5l30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-cvava4221xma",
      "slug": "brock-ph8tan536aa-cvava4221xma",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-cvava4221xma",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-caa3617am",
      "slug": "brock-ph8tan536aa-caa3617am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-caa3617am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-pf5tnxc36l",
      "slug": "brock-ph8tan536aa-pf5tnxc36l",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-pf5tnxc36l",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-csah3612am",
      "slug": "brock-ph8tan536aa-csah3612am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-csah3612am",
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
          "sourceId": "src-brock-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-brock-ph8tan536aa-csah4812am",
      "slug": "brock-ph8tan536aa-csah4812am",
      "modelId": "model-brock-ph8tan536aa",
      "outdoorUnitId": "ou-brock-ph8tan536aa",
      "indoorUnitId": "iu-csah4812am",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-brock-epa",
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
