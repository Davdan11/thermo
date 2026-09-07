import type { BrandDataset } from "../../types";

export const brand_royaltonDataset: BrandDataset = {
  "brand": {
    "id": "brand-royalton",
    "slug": "royalton",
    "name": "ROYALTON",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ROYALTON",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-royalton-epa",
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
      "id": "series-royalton-4hp17-series",
      "slug": "royalton-4hp17-series",
      "name": "4HP17 Series",
      "brandId": "brand-royalton",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 4HP17 Series de ROYALTON",
      "imageUrl": "/images/series/royalton-royalton-4hp17-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-royalton-4hp17l-series",
      "slug": "royalton-4hp17l-series",
      "name": "4HP17L SERIES",
      "brandId": "brand-royalton",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 4HP17L SERIES de ROYALTON",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-royalton-4hp17l18p-a",
      "slug": "royalton-4hp17l18p-a",
      "name": "ROYALTON 4HP17L18P-**A",
      "seriesId": "series-royalton-4hp17-series",
      "brandId": "brand-royalton",
      "modelNumber": "4HP17L18P-**A",
      "normalizedModelNumber": "4hp17l18p-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18000,
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
      "id": "model-royalton-4hp17l24p-a",
      "slug": "royalton-4hp17l24p-a",
      "name": "ROYALTON 4HP17L24P-**A",
      "seriesId": "series-royalton-4hp17-series",
      "brandId": "brand-royalton",
      "modelNumber": "4HP17L24P-**A",
      "normalizedModelNumber": "4hp17l24p-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23600,
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
      "id": "model-royalton-4hp17l36p-a",
      "slug": "royalton-4hp17l36p-a",
      "name": "ROYALTON 4HP17L36P-**A",
      "seriesId": "series-royalton-4hp17l-series",
      "brandId": "brand-royalton",
      "modelNumber": "4HP17L36P-**A",
      "normalizedModelNumber": "4hp17l36p-**a",
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
      "id": "model-royalton-4hp17l30p-a",
      "slug": "royalton-4hp17l30p-a",
      "name": "ROYALTON 4HP17L30P-**A",
      "seriesId": "series-royalton-4hp17-series",
      "brandId": "brand-royalton",
      "modelNumber": "4HP17L30P-**A",
      "normalizedModelNumber": "4hp17l30p-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-royalton-4hp17l42p-a",
      "slug": "royalton-4hp17l42p-a",
      "name": "ROYALTON 4HP17L42P-**A",
      "seriesId": "series-royalton-4hp17l-series",
      "brandId": "brand-royalton",
      "modelNumber": "4HP17L42P-**A",
      "normalizedModelNumber": "4hp17l42p-**a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41000,
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
      "id": "model-royalton-4hp17l48p-a",
      "slug": "royalton-4hp17l48p-a",
      "name": "ROYALTON 4HP17L48P-**A",
      "seriesId": "series-royalton-4hp17l-series",
      "brandId": "brand-royalton",
      "modelNumber": "4HP17L48P-**A",
      "normalizedModelNumber": "4hp17l48p-**a",
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
      "id": "ou-royalton-4hp17l18p-a",
      "modelNumber": "4HP17L18P-**A",
      "brandId": "brand-royalton",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-royalton-4hp17l24p-a",
      "modelNumber": "4HP17L24P-**A",
      "brandId": "brand-royalton",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-royalton-4hp17l36p-a",
      "modelNumber": "4HP17L36P-**A",
      "brandId": "brand-royalton",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-royalton-4hp17l30p-a",
      "modelNumber": "4HP17L30P-**A",
      "brandId": "brand-royalton",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-royalton-4hp17l42p-a",
      "modelNumber": "4HP17L42P-**A",
      "brandId": "brand-royalton",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-royalton-4hp17l48p-a",
      "modelNumber": "4HP17L48P-**A",
      "brandId": "brand-royalton",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-7ec30bx-0tdr",
      "modelNumber": "7EC30BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh30bx-0tdr",
      "modelNumber": "7EH30BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p30btdrtxv",
      "modelNumber": "EAH1P30B*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p30btdrtxv",
      "modelNumber": "EA(C;U)1P30B+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x30btdr",
      "modelNumber": "EAC4X30B+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p24btdrtxv",
      "modelNumber": "EAH1P24B*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec24bx-0tdr",
      "modelNumber": "7EC24BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-3036btdr",
      "modelNumber": "EAD4X-30/36B+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7s30m4x",
      "modelNumber": "BCE7S30M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-3036ctdr",
      "modelNumber": "EAD4X-30/36C+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p51ctdrtxv",
      "modelNumber": "EAH1P51C*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh24bx-0tdr",
      "modelNumber": "7EH24BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p24btdrtxv",
      "modelNumber": "EA(C;U)1P24B+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7e24m4x",
      "modelNumber": "BCE7E24M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x5060ctdr",
      "modelNumber": "EAC4X50/60C+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh42cx-0tdr",
      "modelNumber": "7EH42CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v42m4x",
      "modelNumber": "BCE5V42M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-48ctdr",
      "modelNumber": "EAD4X-48C+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p5060ctdrtxv",
      "modelNumber": "EA(C;U)1P50/60C+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh51cx-0tdr",
      "modelNumber": "7EH51CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x24btdr",
      "modelNumber": "EAC4X24B+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v18m4x",
      "modelNumber": "BCE5V18M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v30m4x",
      "modelNumber": "BCE5V30M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5e24m4x",
      "modelNumber": "BCE5E24M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7e42m4x",
      "modelNumber": "BCE7E42M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7e36m4x",
      "modelNumber": "BCE7E36M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7s42m4x",
      "modelNumber": "BCE7S42M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x36btdr",
      "modelNumber": "EAC4X36B+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p48btdrtxv",
      "modelNumber": "EAH1P48B*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec36bx-0tdr",
      "modelNumber": "7EC36BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p36btdrtxv",
      "modelNumber": "EA(C;U)1P36B+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec5060cx-0tdr",
      "modelNumber": "7EC50/60CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v36m4x",
      "modelNumber": "BCE5V36M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v24m4x",
      "modelNumber": "BCE5V24M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7s36m4x",
      "modelNumber": "BCE7S36M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7e30m4x",
      "modelNumber": "BCE7E30M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed48cx-0tdr",
      "modelNumber": "7ED48CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p36ctdrtxv",
      "modelNumber": "EAH1P36C*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7e18m4x",
      "modelNumber": "BCE7E18M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5c42m4x",
      "modelNumber": "BCE5C42M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-ead4x-42btdr",
      "modelNumber": "EAD4X-42B+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh36cx-0tdr",
      "modelNumber": "7EH36CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh48bx-0tdr",
      "modelNumber": "7EH48BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh42bx-0tdr",
      "modelNumber": "7EH42BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p48ctdrtxv",
      "modelNumber": "EA(C;U)1P48C+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5c24m1ptxv",
      "modelNumber": "BCE5C24M*1P+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed3036bx-0tdr",
      "modelNumber": "7ED30/36BX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5c24m4x",
      "modelNumber": "BCE5C24M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x49ctdr",
      "modelNumber": "EAC4X49C+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ed3036cx-0tdr",
      "modelNumber": "7ED30/36CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5c36m4x",
      "modelNumber": "BCE5C36M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p49ctdrtxv",
      "modelNumber": "EA(C;U)1P49C+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce7e48m4x",
      "modelNumber": "BCE7E48M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eacu1p60ctdrtxv",
      "modelNumber": "EA(C;U)1P60C+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x48ctdr",
      "modelNumber": "EAC4X48C+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eac4x60ctdr",
      "modelNumber": "EAC4X60C+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5c18m4x",
      "modelNumber": "BCE5C18M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5c18m1ptxv",
      "modelNumber": "BCE5C18M*1P+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7eh60dx-0tdr",
      "modelNumber": "7EH60DX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-bce5v48m4x",
      "modelNumber": "BCE5V48M*4X",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec60cx-0tdr",
      "modelNumber": "7EC60CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec49cx-0tdr",
      "modelNumber": "7EC49CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-7ec48cx-0tdr",
      "modelNumber": "7EC48CX-0*+TDR",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p48ctdrtxv",
      "modelNumber": "EAH1P48C*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    },
    {
      "id": "iu-eah1p60dtdrtxv",
      "modelNumber": "EAH1P60D*+TDR+TXV",
      "brandId": "brand-royalton",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-royalton-4hp17l18p-a-7ec30bx-0tdr",
      "slug": "royalton-4hp17l18p-a-7ec30bx-0tdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-7ec30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-7eh30bx-0tdr",
      "slug": "royalton-4hp17l24p-a-7eh30bx-0tdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-7eh30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-7eh30bx-0tdr",
      "slug": "royalton-4hp17l18p-a-7eh30bx-0tdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-7eh30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-eah1p30btdrtxv",
      "slug": "royalton-4hp17l18p-a-eah1p30btdrtxv",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-eah1p30btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-eacu1p30btdrtxv",
      "slug": "royalton-4hp17l18p-a-eacu1p30btdrtxv",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-eacu1p30btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-eac4x30btdr",
      "slug": "royalton-4hp17l18p-a-eac4x30btdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-eac4x30btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-eah1p30btdrtxv",
      "slug": "royalton-4hp17l24p-a-eah1p30btdrtxv",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-eah1p30btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-eah1p24btdrtxv",
      "slug": "royalton-4hp17l18p-a-eah1p24btdrtxv",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-eah1p24btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-7ec24bx-0tdr",
      "slug": "royalton-4hp17l18p-a-7ec24bx-0tdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-7ec24bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-ead4x-3036btdr",
      "slug": "royalton-4hp17l18p-a-ead4x-3036btdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-ead4x-3036btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-bce7s30m4x",
      "slug": "royalton-4hp17l24p-a-bce7s30m4x",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-bce7s30m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-7ec24bx-0tdr",
      "slug": "royalton-4hp17l24p-a-7ec24bx-0tdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-7ec24bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-7ec30bx-0tdr",
      "slug": "royalton-4hp17l24p-a-7ec30bx-0tdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-7ec30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-ead4x-3036ctdr",
      "slug": "royalton-4hp17l24p-a-ead4x-3036ctdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-ead4x-3036ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-eah1p51ctdrtxv",
      "slug": "royalton-4hp17l36p-a-eah1p51ctdrtxv",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-eah1p51ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-7eh24bx-0tdr",
      "slug": "royalton-4hp17l18p-a-7eh24bx-0tdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-7eh24bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-eacu1p24btdrtxv",
      "slug": "royalton-4hp17l18p-a-eacu1p24btdrtxv",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-eacu1p24btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-bce7e24m4x",
      "slug": "royalton-4hp17l24p-a-bce7e24m4x",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-bce7e24m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-eac4x5060ctdr",
      "slug": "royalton-4hp17l36p-a-eac4x5060ctdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-eac4x5060ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7eh42cx-0tdr",
      "slug": "royalton-4hp17l36p-a-7eh42cx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7eh42cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-bce5v42m4x",
      "slug": "royalton-4hp17l36p-a-bce5v42m4x",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-bce5v42m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-eac4x30btdr",
      "slug": "royalton-4hp17l24p-a-eac4x30btdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-eac4x30btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce7e24m4x",
      "slug": "royalton-4hp17l18p-a-bce7e24m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce7e24m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-ead4x-48ctdr",
      "slug": "royalton-4hp17l36p-a-ead4x-48ctdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-ead4x-48ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-eacu1p5060ctdrtxv",
      "slug": "royalton-4hp17l36p-a-eacu1p5060ctdrtxv",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-eacu1p5060ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7eh51cx-0tdr",
      "slug": "royalton-4hp17l36p-a-7eh51cx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7eh51cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-eacu1p30btdrtxv",
      "slug": "royalton-4hp17l24p-a-eacu1p30btdrtxv",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-eacu1p30btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-eac4x24btdr",
      "slug": "royalton-4hp17l18p-a-eac4x24btdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-eac4x24btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5v18m4x",
      "slug": "royalton-4hp17l18p-a-bce5v18m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5v18m4x",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-bce5v30m4x",
      "slug": "royalton-4hp17l24p-a-bce5v30m4x",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-bce5v30m4x",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5e24m4x",
      "slug": "royalton-4hp17l18p-a-bce5e24m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5e24m4x",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-eacu1p24btdrtxv",
      "slug": "royalton-4hp17l24p-a-eacu1p24btdrtxv",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-eacu1p24btdrtxv",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-ead4x-3036ctdr",
      "slug": "royalton-4hp17l18p-a-ead4x-3036ctdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-ead4x-3036ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-bce7e42m4x",
      "slug": "royalton-4hp17l36p-a-bce7e42m4x",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-bce7e42m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-bce7e36m4x",
      "slug": "royalton-4hp17l36p-a-bce7e36m4x",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-bce7e36m4x",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-bce7s42m4x",
      "slug": "royalton-4hp17l36p-a-bce7s42m4x",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-bce7s42m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-ead4x-3036ctdr",
      "slug": "royalton-4hp17l36p-a-ead4x-3036ctdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-ead4x-3036ctdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-eac4x36btdr",
      "slug": "royalton-4hp17l36p-a-eac4x36btdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-eac4x36btdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-eah1p48btdrtxv",
      "slug": "royalton-4hp17l36p-a-eah1p48btdrtxv",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-eah1p48btdrtxv",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-7ec36bx-0tdr",
      "slug": "royalton-4hp17l30p-a-7ec36bx-0tdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-7ec36bx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-eac4x24btdr",
      "slug": "royalton-4hp17l24p-a-eac4x24btdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-eac4x24btdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-eacu1p36btdrtxv",
      "slug": "royalton-4hp17l30p-a-eacu1p36btdrtxv",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-eacu1p36btdrtxv",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7ec5060cx-0tdr",
      "slug": "royalton-4hp17l36p-a-7ec5060cx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7ec5060cx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-eac4x36btdr",
      "slug": "royalton-4hp17l30p-a-eac4x36btdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-eac4x36btdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-eacu1p36btdrtxv",
      "slug": "royalton-4hp17l36p-a-eacu1p36btdrtxv",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-eacu1p36btdrtxv",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-bce5v36m4x",
      "slug": "royalton-4hp17l36p-a-bce5v36m4x",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-bce5v36m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-bce5v24m4x",
      "slug": "royalton-4hp17l24p-a-bce5v24m4x",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-bce5v24m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-bce7s36m4x",
      "slug": "royalton-4hp17l30p-a-bce7s36m4x",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-bce7s36m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7ec36bx-0tdr",
      "slug": "royalton-4hp17l36p-a-7ec36bx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7ec36bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-bce7e30m4x",
      "slug": "royalton-4hp17l30p-a-bce7e30m4x",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-bce7e30m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7ed48cx-0tdr",
      "slug": "royalton-4hp17l36p-a-7ed48cx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7ed48cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-eah1p36ctdrtxv",
      "slug": "royalton-4hp17l30p-a-eah1p36ctdrtxv",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-eah1p36ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-bce5v36m4x",
      "slug": "royalton-4hp17l30p-a-bce5v36m4x",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-bce5v36m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-7eh30bx-0tdr",
      "slug": "royalton-4hp17l30p-a-7eh30bx-0tdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-7eh30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-bce7e36m4x",
      "slug": "royalton-4hp17l30p-a-bce7e36m4x",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-bce7e36m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5v24m4x",
      "slug": "royalton-4hp17l18p-a-bce5v24m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5v24m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-bce7e30m4x",
      "slug": "royalton-4hp17l24p-a-bce7e30m4x",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-bce7e30m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce7e18m4x",
      "slug": "royalton-4hp17l18p-a-bce7e18m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce7e18m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-ead4x-3036btdr",
      "slug": "royalton-4hp17l24p-a-ead4x-3036btdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-ead4x-3036btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-7ec30bx-0tdr",
      "slug": "royalton-4hp17l30p-a-7ec30bx-0tdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-7ec30bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-bce5c42m4x",
      "slug": "royalton-4hp17l36p-a-bce5c42m4x",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-bce5c42m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-ead4x-42btdr",
      "slug": "royalton-4hp17l30p-a-ead4x-42btdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-ead4x-42btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-eac4x30btdr",
      "slug": "royalton-4hp17l30p-a-eac4x30btdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-eac4x30btdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-7eh36cx-0tdr",
      "slug": "royalton-4hp17l30p-a-7eh36cx-0tdr",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-7eh36cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-eacu1p30btdrtxv",
      "slug": "royalton-4hp17l30p-a-eacu1p30btdrtxv",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-eacu1p30btdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l42p-a-bce7e42m4x",
      "slug": "royalton-4hp17l42p-a-bce7e42m4x",
      "modelId": "model-royalton-4hp17l42p-a",
      "outdoorUnitId": "ou-royalton-4hp17l42p-a",
      "indoorUnitId": "iu-bce7e42m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7eh48bx-0tdr",
      "slug": "royalton-4hp17l36p-a-7eh48bx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7eh48bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7eh42bx-0tdr",
      "slug": "royalton-4hp17l36p-a-7eh42bx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7eh42bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eacu1p48ctdrtxv",
      "slug": "royalton-4hp17l48p-a-eacu1p48ctdrtxv",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eacu1p48ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5c24m1ptxv",
      "slug": "royalton-4hp17l18p-a-bce5c24m1ptxv",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5c24m1ptxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-7ed3036bx-0tdr",
      "slug": "royalton-4hp17l18p-a-7ed3036bx-0tdr",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-7ed3036bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l24p-a-7ed3036bx-0tdr",
      "slug": "royalton-4hp17l24p-a-7ed3036bx-0tdr",
      "modelId": "model-royalton-4hp17l24p-a",
      "outdoorUnitId": "ou-royalton-4hp17l24p-a",
      "indoorUnitId": "iu-7ed3036bx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5c24m4x",
      "slug": "royalton-4hp17l18p-a-bce5c24m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5c24m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eac4x49ctdr",
      "slug": "royalton-4hp17l48p-a-eac4x49ctdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eac4x49ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l36p-a-7ed3036cx-0tdr",
      "slug": "royalton-4hp17l36p-a-7ed3036cx-0tdr",
      "modelId": "model-royalton-4hp17l36p-a",
      "outdoorUnitId": "ou-royalton-4hp17l36p-a",
      "indoorUnitId": "iu-7ed3036cx-0tdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-bce5v30m4x",
      "slug": "royalton-4hp17l30p-a-bce5v30m4x",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-bce5v30m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l30p-a-bce5c36m4x",
      "slug": "royalton-4hp17l30p-a-bce5c36m4x",
      "modelId": "model-royalton-4hp17l30p-a",
      "outdoorUnitId": "ou-royalton-4hp17l30p-a",
      "indoorUnitId": "iu-bce5c36m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l42p-a-bce5v42m4x",
      "slug": "royalton-4hp17l42p-a-bce5v42m4x",
      "modelId": "model-royalton-4hp17l42p-a",
      "outdoorUnitId": "ou-royalton-4hp17l42p-a",
      "indoorUnitId": "iu-bce5v42m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l42p-a-eacu1p49ctdrtxv",
      "slug": "royalton-4hp17l42p-a-eacu1p49ctdrtxv",
      "modelId": "model-royalton-4hp17l42p-a",
      "outdoorUnitId": "ou-royalton-4hp17l42p-a",
      "indoorUnitId": "iu-eacu1p49ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l42p-a-eac4x49ctdr",
      "slug": "royalton-4hp17l42p-a-eac4x49ctdr",
      "modelId": "model-royalton-4hp17l42p-a",
      "outdoorUnitId": "ou-royalton-4hp17l42p-a",
      "indoorUnitId": "iu-eac4x49ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-bce7e48m4x",
      "slug": "royalton-4hp17l48p-a-bce7e48m4x",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-bce7e48m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eacu1p60ctdrtxv",
      "slug": "royalton-4hp17l48p-a-eacu1p60ctdrtxv",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eacu1p60ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eac4x48ctdr",
      "slug": "royalton-4hp17l48p-a-eac4x48ctdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eac4x48ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eah1p51ctdrtxv",
      "slug": "royalton-4hp17l48p-a-eah1p51ctdrtxv",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eah1p51ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eac4x60ctdr",
      "slug": "royalton-4hp17l48p-a-eac4x60ctdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eac4x60ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eacu1p49ctdrtxv",
      "slug": "royalton-4hp17l48p-a-eacu1p49ctdrtxv",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eacu1p49ctdrtxv",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5c18m4x",
      "slug": "royalton-4hp17l18p-a-bce5c18m4x",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5c18m4x",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l18p-a-bce5c18m1ptxv",
      "slug": "royalton-4hp17l18p-a-bce5c18m1ptxv",
      "modelId": "model-royalton-4hp17l18p-a",
      "outdoorUnitId": "ou-royalton-4hp17l18p-a",
      "indoorUnitId": "iu-bce5c18m1ptxv",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l42p-a-ead4x-48ctdr",
      "slug": "royalton-4hp17l42p-a-ead4x-48ctdr",
      "modelId": "model-royalton-4hp17l42p-a",
      "outdoorUnitId": "ou-royalton-4hp17l42p-a",
      "indoorUnitId": "iu-ead4x-48ctdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-7eh60dx-0tdr",
      "slug": "royalton-4hp17l48p-a-7eh60dx-0tdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-7eh60dx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-bce5v48m4x",
      "slug": "royalton-4hp17l48p-a-bce5v48m4x",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-bce5v48m4x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-7ec60cx-0tdr",
      "slug": "royalton-4hp17l48p-a-7ec60cx-0tdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-7ec60cx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-7eh51cx-0tdr",
      "slug": "royalton-4hp17l48p-a-7eh51cx-0tdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-7eh51cx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-7ec49cx-0tdr",
      "slug": "royalton-4hp17l48p-a-7ec49cx-0tdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-7ec49cx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-7ec48cx-0tdr",
      "slug": "royalton-4hp17l48p-a-7ec48cx-0tdr",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-7ec48cx-0tdr",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eah1p48ctdrtxv",
      "slug": "royalton-4hp17l48p-a-eah1p48ctdrtxv",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eah1p48ctdrtxv",
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
          "sourceId": "src-royalton-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-royalton-4hp17l48p-a-eah1p60dtdrtxv",
      "slug": "royalton-4hp17l48p-a-eah1p60dtdrtxv",
      "modelId": "model-royalton-4hp17l48p-a",
      "outdoorUnitId": "ou-royalton-4hp17l48p-a",
      "indoorUnitId": "iu-eah1p60dtdrtxv",
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
          "sourceId": "src-royalton-epa",
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
