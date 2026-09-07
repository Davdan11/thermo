import type { BrandDataset } from "../../types";

export const brand_interthermDataset: BrandDataset = {
  "brand": {
    "id": "brand-intertherm",
    "slug": "intertherm",
    "name": "Intertherm",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Intertherm",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-intertherm-epa",
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
      "id": "series-intertherm-24-26-seer2-minisplits",
      "slug": "intertherm-24-26-seer2-minisplits",
      "name": "(24-26 SEER2) Minisplits",
      "brandId": "brand-intertherm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (24-26 SEER2) Minisplits de Intertherm",
      "imageUrl": "/images/series/intertherm-intertherm-24-26-seer2-minisplits.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-intertherm-multizone-indoors-eight-way-compact-cassettes",
      "slug": "intertherm-multizone-indoors-eight-way-compact-cassettes",
      "name": "Multizone Indoors Eight-way Compact Cassettes",
      "brandId": "brand-intertherm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Indoors Eight-way Compact Cassettes de Intertherm",
      "imageUrl": "/images/series/intertherm-intertherm-multizone-indoors-eight-way-compact-cassettes.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-intertherm-multizone-outdoors",
      "slug": "intertherm-multizone-outdoors",
      "name": "Multizone Outdoors",
      "brandId": "brand-intertherm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multizone Outdoors de Intertherm",
      "imageUrl": "/images/series/intertherm-intertherm-multizone-outdoors.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-intertherm-19-205-seer2-minisplits",
      "slug": "intertherm-19-205-seer2-minisplits",
      "name": "(19-20.5 SEER2) Minisplits",
      "brandId": "brand-intertherm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série (19-20.5 SEER2) Minisplits de Intertherm",
      "imageUrl": "/images/series/intertherm-intertherm-19-205-seer2-minisplits.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-intertherm-e-series",
      "slug": "intertherm-e-series",
      "name": "E Series",
      "brandId": "brand-intertherm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E Series de Intertherm",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-intertherm-dxh24psk3ih",
      "slug": "intertherm-dxh24psk3ih",
      "name": "Intertherm DXH24PSK3IH",
      "seriesId": "series-intertherm-24-26-seer2-minisplits",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH24PSK3IH",
      "normalizedModelNumber": "dxh24psk3ih",
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
      "id": "model-intertherm-dxh09psk3ih",
      "slug": "intertherm-dxh09psk3ih",
      "name": "Intertherm DXH09PSK3IH",
      "seriesId": "series-intertherm-24-26-seer2-minisplits",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH09PSK3IH",
      "normalizedModelNumber": "dxh09psk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9100,
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
      "id": "model-intertherm-dxh12psk3ih",
      "slug": "intertherm-dxh12psk3ih",
      "name": "Intertherm DXH12PSK3IH",
      "seriesId": "series-intertherm-24-26-seer2-minisplits",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH12PSK3IH",
      "normalizedModelNumber": "dxh12psk3ih",
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
      "id": "model-intertherm-dxh18psk3ih",
      "slug": "intertherm-dxh18psk3ih",
      "name": "Intertherm DXH18PSK3IH",
      "seriesId": "series-intertherm-24-26-seer2-minisplits",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH18PSK3IH",
      "normalizedModelNumber": "dxh18psk3ih",
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
      "id": "model-intertherm-dxh36fmk3ih",
      "slug": "intertherm-dxh36fmk3ih",
      "name": "Intertherm DXH36FMK3IH",
      "seriesId": "series-intertherm-multizone-outdoors",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH36FMK3IH",
      "normalizedModelNumber": "dxh36fmk3ih",
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
      "id": "model-intertherm-dxh42fmk3ih",
      "slug": "intertherm-dxh42fmk3ih",
      "name": "Intertherm DXH42FMK3IH",
      "seriesId": "series-intertherm-multizone-outdoors",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH42FMK3IH",
      "normalizedModelNumber": "dxh42fmk3ih",
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
    },
    {
      "id": "model-intertherm-dxh30fmk3ih",
      "slug": "intertherm-dxh30fmk3ih",
      "name": "Intertherm DXH30FMK3IH",
      "seriesId": "series-intertherm-multizone-outdoors",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH30FMK3IH",
      "normalizedModelNumber": "dxh30fmk3ih",
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
      "id": "model-intertherm-dxh36esk3il",
      "slug": "intertherm-dxh36esk3il",
      "name": "Intertherm DXH36ESK3IL",
      "seriesId": "series-intertherm-19-205-seer2-minisplits",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH36ESK3IL",
      "normalizedModelNumber": "dxh36esk3il",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
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
      "id": "model-intertherm-dxh24fmk3ih",
      "slug": "intertherm-dxh24fmk3ih",
      "name": "Intertherm DXH24FMK3IH",
      "seriesId": "series-intertherm-multizone-outdoors",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH24FMK3IH",
      "normalizedModelNumber": "dxh24fmk3ih",
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
      "id": "model-intertherm-dxh18fmk3ih",
      "slug": "intertherm-dxh18fmk3ih",
      "name": "Intertherm DXH18FMK3IH",
      "seriesId": "series-intertherm-multizone-outdoors",
      "brandId": "brand-intertherm",
      "modelNumber": "DXH18FMK3IH",
      "normalizedModelNumber": "dxh18fmk3ih",
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
      "id": "model-intertherm-uxh48-60msk3ih",
      "slug": "intertherm-uxh48-60msk3ih",
      "name": "Intertherm UXH48-60MSK3IH",
      "seriesId": "series-intertherm-e-series",
      "brandId": "brand-intertherm",
      "modelNumber": "UXH48-60MSK3IH",
      "normalizedModelNumber": "uxh48-60msk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48000,
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
      "id": "model-intertherm-uxh24-36msk3ih",
      "slug": "intertherm-uxh24-36msk3ih",
      "name": "Intertherm UXH24-36MSK3IH",
      "seriesId": "series-intertherm-e-series",
      "brandId": "brand-intertherm",
      "modelNumber": "UXH24-36MSK3IH",
      "normalizedModelNumber": "uxh24-36msk3ih",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34000,
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
      "id": "ou-intertherm-dxh24psk3ih",
      "modelNumber": "DXH24PSK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh09psk3ih",
      "modelNumber": "DXH09PSK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh12psk3ih",
      "modelNumber": "DXH12PSK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh18psk3ih",
      "modelNumber": "DXH18PSK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh36fmk3ih",
      "modelNumber": "DXH36FMK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh42fmk3ih",
      "modelNumber": "DXH42FMK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh30fmk3ih",
      "modelNumber": "DXH30FMK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh36esk3il",
      "modelNumber": "DXH36ESK3IL",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh24fmk3ih",
      "modelNumber": "DXH24FMK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-dxh18fmk3ih",
      "modelNumber": "DXH18FMK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-uxh48-60msk3ih",
      "modelNumber": "UXH48-60MSK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-intertherm-uxh24-36msk3ih",
      "modelNumber": "UXH24-36MSK3IH",
      "brandId": "brand-intertherm",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-dhh24puk3ih",
      "modelNumber": "DHH24PUK3IH",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh09puk3ih",
      "modelNumber": "DHH09PUK3IH",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh12puk3ih",
      "modelNumber": "DHH12PUK3IH",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh18puk3ih",
      "modelNumber": "DHH18PUK3IH",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh09fmk3ih",
      "modelNumber": "DKH09FMK3IH",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-dkh12fmk3ih",
      "modelNumber": "DKH12FMK3IH",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46281",
      "modelNumber": "IU-46281",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46282",
      "modelNumber": "IU-46282",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46279",
      "modelNumber": "IU-46279",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-dhh36esk3il",
      "modelNumber": "DHH36ESK3IL",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46277",
      "modelNumber": "IU-46277",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-46275",
      "modelNumber": "IU-46275",
      "brandId": "brand-intertherm",
      "type": "wall-single"
    },
    {
      "id": "iu-umd48msk3ih",
      "modelNumber": "UMD48MSK3IH",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd60msk3ih",
      "modelNumber": "UMD60MSK3IH",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd36msk3ih",
      "modelNumber": "UMD36MSK3IH",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-umd24msk3ih",
      "modelNumber": "UMD24MSK3IH",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue24x5ab",
      "modelNumber": "UE24X5AB",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue36x5ab",
      "modelNumber": "UE36X5AB",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue60x5ad",
      "modelNumber": "UE60X5AD",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    },
    {
      "id": "iu-ue48x5ad",
      "modelNumber": "UE48X5AD",
      "brandId": "brand-intertherm",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-intertherm-dxh24psk3ih-dhh24puk3ih",
      "slug": "intertherm-dxh24psk3ih-dhh24puk3ih",
      "modelId": "model-intertherm-dxh24psk3ih",
      "outdoorUnitId": "ou-intertherm-dxh24psk3ih",
      "indoorUnitId": "iu-dhh24puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh09psk3ih-dhh09puk3ih",
      "slug": "intertherm-dxh09psk3ih-dhh09puk3ih",
      "modelId": "model-intertherm-dxh09psk3ih",
      "outdoorUnitId": "ou-intertherm-dxh09psk3ih",
      "indoorUnitId": "iu-dhh09puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh12psk3ih-dhh12puk3ih",
      "slug": "intertherm-dxh12psk3ih-dhh12puk3ih",
      "modelId": "model-intertherm-dxh12psk3ih",
      "outdoorUnitId": "ou-intertherm-dxh12psk3ih",
      "indoorUnitId": "iu-dhh12puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh18psk3ih-dhh18puk3ih",
      "slug": "intertherm-dxh18psk3ih-dhh18puk3ih",
      "modelId": "model-intertherm-dxh18psk3ih",
      "outdoorUnitId": "ou-intertherm-dxh18psk3ih",
      "indoorUnitId": "iu-dhh18puk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh09psk3ih-dkh09fmk3ih",
      "slug": "intertherm-dxh09psk3ih-dkh09fmk3ih",
      "modelId": "model-intertherm-dxh09psk3ih",
      "outdoorUnitId": "ou-intertherm-dxh09psk3ih",
      "indoorUnitId": "iu-dkh09fmk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh12psk3ih-dkh12fmk3ih",
      "slug": "intertherm-dxh12psk3ih-dkh12fmk3ih",
      "modelId": "model-intertherm-dxh12psk3ih",
      "outdoorUnitId": "ou-intertherm-dxh12psk3ih",
      "indoorUnitId": "iu-dkh12fmk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh36fmk3ih-iu-46281",
      "slug": "intertherm-dxh36fmk3ih-iu-46281",
      "modelId": "model-intertherm-dxh36fmk3ih",
      "outdoorUnitId": "ou-intertherm-dxh36fmk3ih",
      "indoorUnitId": "iu-iu-46281",
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh42fmk3ih-iu-46282",
      "slug": "intertherm-dxh42fmk3ih-iu-46282",
      "modelId": "model-intertherm-dxh42fmk3ih",
      "outdoorUnitId": "ou-intertherm-dxh42fmk3ih",
      "indoorUnitId": "iu-iu-46282",
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh30fmk3ih-iu-46279",
      "slug": "intertherm-dxh30fmk3ih-iu-46279",
      "modelId": "model-intertherm-dxh30fmk3ih",
      "outdoorUnitId": "ou-intertherm-dxh30fmk3ih",
      "indoorUnitId": "iu-iu-46279",
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh36esk3il-dhh36esk3il",
      "slug": "intertherm-dxh36esk3il-dhh36esk3il",
      "modelId": "model-intertherm-dxh36esk3il",
      "outdoorUnitId": "ou-intertherm-dxh36esk3il",
      "indoorUnitId": "iu-dhh36esk3il",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh24fmk3ih-iu-46277",
      "slug": "intertherm-dxh24fmk3ih-iu-46277",
      "modelId": "model-intertherm-dxh24fmk3ih",
      "outdoorUnitId": "ou-intertherm-dxh24fmk3ih",
      "indoorUnitId": "iu-iu-46277",
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-dxh18fmk3ih-iu-46275",
      "slug": "intertherm-dxh18fmk3ih-iu-46275",
      "modelId": "model-intertherm-dxh18fmk3ih",
      "outdoorUnitId": "ou-intertherm-dxh18fmk3ih",
      "indoorUnitId": "iu-iu-46275",
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh48-60msk3ih-umd48msk3ih",
      "slug": "intertherm-uxh48-60msk3ih-umd48msk3ih",
      "modelId": "model-intertherm-uxh48-60msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh48-60msk3ih",
      "indoorUnitId": "iu-umd48msk3ih",
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh48-60msk3ih-umd60msk3ih",
      "slug": "intertherm-uxh48-60msk3ih-umd60msk3ih",
      "modelId": "model-intertherm-uxh48-60msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh48-60msk3ih",
      "indoorUnitId": "iu-umd60msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh24-36msk3ih-umd36msk3ih",
      "slug": "intertherm-uxh24-36msk3ih-umd36msk3ih",
      "modelId": "model-intertherm-uxh24-36msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh24-36msk3ih",
      "indoorUnitId": "iu-umd36msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh24-36msk3ih-umd24msk3ih",
      "slug": "intertherm-uxh24-36msk3ih-umd24msk3ih",
      "modelId": "model-intertherm-uxh24-36msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh24-36msk3ih",
      "indoorUnitId": "iu-umd24msk3ih",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh24-36msk3ih-ue24x5ab",
      "slug": "intertherm-uxh24-36msk3ih-ue24x5ab",
      "modelId": "model-intertherm-uxh24-36msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh24-36msk3ih",
      "indoorUnitId": "iu-ue24x5ab",
      "minHeatingTempC": -25,
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh24-36msk3ih-ue36x5ab",
      "slug": "intertherm-uxh24-36msk3ih-ue36x5ab",
      "modelId": "model-intertherm-uxh24-36msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh24-36msk3ih",
      "indoorUnitId": "iu-ue36x5ab",
      "minHeatingTempC": -25,
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
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh48-60msk3ih-ue60x5ad",
      "slug": "intertherm-uxh48-60msk3ih-ue60x5ad",
      "modelId": "model-intertherm-uxh48-60msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh48-60msk3ih",
      "indoorUnitId": "iu-ue60x5ad",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-intertherm-uxh48-60msk3ih-ue48x5ad",
      "slug": "intertherm-uxh48-60msk3ih-ue48x5ad",
      "modelId": "model-intertherm-uxh48-60msk3ih",
      "outdoorUnitId": "ou-intertherm-uxh48-60msk3ih",
      "indoorUnitId": "iu-ue48x5ad",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-intertherm-epa",
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
