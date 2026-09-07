import type { BrandDataset } from "../../types";

export const brand_ouelletDataset: BrandDataset = {
  "brand": {
    "id": "brand-ouellet",
    "slug": "ouellet",
    "name": "Ouellet",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Ouellet",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ouellet-epa",
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
      "id": "series-ouellet-olympia",
      "slug": "ouellet-olympia",
      "name": "Olympia",
      "brandId": "brand-ouellet",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Olympia de Ouellet",
      "imageUrl": "/images/series/ouellet-ouellet-olympia.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ouellet-pacific",
      "slug": "ouellet-pacific",
      "name": "Pacific",
      "brandId": "brand-ouellet",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pacific de Ouellet",
      "imageUrl": "/images/series/ouellet-ouellet-pacific.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ouellet-harmony",
      "slug": "ouellet-harmony",
      "name": "Harmony",
      "brandId": "brand-ouellet",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Harmony de Ouellet",
      "imageUrl": "/images/series/ouellet-ouellet-harmony.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ouellet-myriad",
      "slug": "ouellet-myriad",
      "name": "Myriad",
      "brandId": "brand-ouellet",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Myriad de Ouellet",
      "imageUrl": "/images/series/ouellet-ouellet-myriad.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ouellet-flexx",
      "slug": "ouellet-flexx",
      "name": "Flexx",
      "brandId": "brand-ouellet",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Flexx de Ouellet",
      "imageUrl": "/images/series/ouellet-ouellet-flexx.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ouellet-oarx-h09a-o",
      "slug": "ouellet-oarx-h09a-o",
      "name": "Ouellet OARX-H09A-O",
      "seriesId": "series-ouellet-olympia",
      "brandId": "brand-ouellet",
      "modelNumber": "OARX-H09A-O",
      "normalizedModelNumber": "oarx-h09a-o",
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
      "id": "model-ouellet-oarx-h12a-o",
      "slug": "ouellet-oarx-h12a-o",
      "name": "Ouellet OARX-H12A-O",
      "seriesId": "series-ouellet-olympia",
      "brandId": "brand-ouellet",
      "modelNumber": "OARX-H12A-O",
      "normalizedModelNumber": "oarx-h12a-o",
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
      "id": "model-ouellet-oarx-h18a-o",
      "slug": "ouellet-oarx-h18a-o",
      "name": "Ouellet OARX-H18A-O",
      "seriesId": "series-ouellet-olympia",
      "brandId": "brand-ouellet",
      "modelNumber": "OARX-H18A-O",
      "normalizedModelNumber": "oarx-h18a-o",
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
      "id": "model-ouellet-oarx-h24a-o",
      "slug": "ouellet-oarx-h24a-o",
      "name": "Ouellet OARX-H24A-O",
      "seriesId": "series-ouellet-olympia",
      "brandId": "brand-ouellet",
      "modelNumber": "OARX-H24A-O",
      "normalizedModelNumber": "oarx-h24a-o",
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
      "id": "model-ouellet-ocvx-h09a-o",
      "slug": "ouellet-ocvx-h09a-o",
      "name": "Ouellet OCVX-H09A-O",
      "seriesId": "series-ouellet-pacific",
      "brandId": "brand-ouellet",
      "modelNumber": "OCVX-H09A-O",
      "normalizedModelNumber": "ocvx-h09a-o",
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
      "id": "model-ouellet-ocvx-h12a-o",
      "slug": "ouellet-ocvx-h12a-o",
      "name": "Ouellet OCVX-H12A-O",
      "seriesId": "series-ouellet-pacific",
      "brandId": "brand-ouellet",
      "modelNumber": "OCVX-H12A-O",
      "normalizedModelNumber": "ocvx-h12a-o",
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
      "id": "model-ouellet-ocvx-h18a-o",
      "slug": "ouellet-ocvx-h18a-o",
      "name": "Ouellet OCVX-H18A-O",
      "seriesId": "series-ouellet-pacific",
      "brandId": "brand-ouellet",
      "modelNumber": "OCVX-H18A-O",
      "normalizedModelNumber": "ocvx-h18a-o",
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
      "id": "model-ouellet-ocvx-h24a-o",
      "slug": "ouellet-ocvx-h24a-o",
      "name": "Ouellet OCVX-H24A-O",
      "seriesId": "series-ouellet-pacific",
      "brandId": "brand-ouellet",
      "modelNumber": "OCVX-H24A-O",
      "normalizedModelNumber": "ocvx-h24a-o",
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
      "id": "model-ouellet-ochx-h30a-o",
      "slug": "ouellet-ochx-h30a-o",
      "name": "Ouellet OCHX-H30A-O",
      "seriesId": "series-ouellet-harmony",
      "brandId": "brand-ouellet",
      "modelNumber": "OCHX-H30A-O",
      "normalizedModelNumber": "ochx-h30a-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30000,
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
      "id": "model-ouellet-ofrm4x1-h36a-o",
      "slug": "ouellet-ofrm4x1-h36a-o",
      "name": "Ouellet OFRM4X1-H36A-O",
      "seriesId": "series-ouellet-myriad",
      "brandId": "brand-ouellet",
      "modelNumber": "OFRM4X1-H36A-O",
      "normalizedModelNumber": "ofrm4x1-h36a-o",
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
      "id": "model-ouellet-ofrm4x1-h30a-o",
      "slug": "ouellet-ofrm4x1-h30a-o",
      "name": "Ouellet OFRM4X1-H30A-O",
      "seriesId": "series-ouellet-myriad",
      "brandId": "brand-ouellet",
      "modelNumber": "OFRM4X1-H30A-O",
      "normalizedModelNumber": "ofrm4x1-h30a-o",
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
      "id": "model-ouellet-ochx-h36a-o",
      "slug": "ouellet-ochx-h36a-o",
      "name": "Ouellet OCHX-H36A-O",
      "seriesId": "series-ouellet-harmony",
      "brandId": "brand-ouellet",
      "modelNumber": "OCHX-H36A-O",
      "normalizedModelNumber": "ochx-h36a-o",
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
      "id": "model-ouellet-ofrm2x1-h18a-o",
      "slug": "ouellet-ofrm2x1-h18a-o",
      "name": "Ouellet OFRM2X1-H18A-O",
      "seriesId": "series-ouellet-myriad",
      "brandId": "brand-ouellet",
      "modelNumber": "OFRM2X1-H18A-O",
      "normalizedModelNumber": "ofrm2x1-h18a-o",
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
      "id": "model-ouellet-ofrm5x1-h42a-o",
      "slug": "ouellet-ofrm5x1-h42a-o",
      "name": "Ouellet OFRM5X1-H42A-O",
      "seriesId": "series-ouellet-myriad",
      "brandId": "brand-ouellet",
      "modelNumber": "OFRM5X1-H42A-O",
      "normalizedModelNumber": "ofrm5x1-h42a-o",
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
      "id": "model-ouellet-ofrm3x1-h24a-o",
      "slug": "ouellet-ofrm3x1-h24a-o",
      "name": "Ouellet OFRM3X1-H24A-O",
      "seriesId": "series-ouellet-myriad",
      "brandId": "brand-ouellet",
      "modelNumber": "OFRM3X1-H24A-O",
      "normalizedModelNumber": "ofrm3x1-h24a-o",
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
      "id": "model-ouellet-ochx-h09a-o",
      "slug": "ouellet-ochx-h09a-o",
      "name": "Ouellet OCHX-H09A-O",
      "seriesId": "series-ouellet-harmony",
      "brandId": "brand-ouellet",
      "modelNumber": "OCHX-H09A-O",
      "normalizedModelNumber": "ochx-h09a-o",
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
      "id": "model-ouellet-ochx-h18a-o",
      "slug": "ouellet-ochx-h18a-o",
      "name": "Ouellet OCHX-H18A-O",
      "seriesId": "series-ouellet-harmony",
      "brandId": "brand-ouellet",
      "modelNumber": "OCHX-H18A-O",
      "normalizedModelNumber": "ochx-h18a-o",
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
      "id": "model-ouellet-ochx-h12a-o",
      "slug": "ouellet-ochx-h12a-o",
      "name": "Ouellet OCHX-H12A-O",
      "seriesId": "series-ouellet-harmony",
      "brandId": "brand-ouellet",
      "modelNumber": "OCHX-H12A-O",
      "normalizedModelNumber": "ochx-h12a-o",
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
      "id": "model-ouellet-oflx1-h48a-o",
      "slug": "ouellet-oflx1-h48a-o",
      "name": "Ouellet OFLX1-H48A-O",
      "seriesId": "series-ouellet-flexx",
      "brandId": "brand-ouellet",
      "modelNumber": "OFLX1-H48A-O",
      "normalizedModelNumber": "oflx1-h48a-o",
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
      "id": "model-ouellet-oflx1-h60a-o",
      "slug": "ouellet-oflx1-h60a-o",
      "name": "Ouellet OFLX1-H60A-O",
      "seriesId": "series-ouellet-flexx",
      "brandId": "brand-ouellet",
      "modelNumber": "OFLX1-H60A-O",
      "normalizedModelNumber": "oflx1-h60a-o",
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
      "id": "model-ouellet-ochx-h24a-o",
      "slug": "ouellet-ochx-h24a-o",
      "name": "Ouellet OCHX-H24A-O",
      "seriesId": "series-ouellet-harmony",
      "brandId": "brand-ouellet",
      "modelNumber": "OCHX-H24A-O",
      "normalizedModelNumber": "ochx-h24a-o",
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
      "id": "model-ouellet-oflx1-h36a-o",
      "slug": "ouellet-oflx1-h36a-o",
      "name": "Ouellet OFLX1-H36A-O",
      "seriesId": "series-ouellet-flexx",
      "brandId": "brand-ouellet",
      "modelNumber": "OFLX1-H36A-O",
      "normalizedModelNumber": "oflx1-h36a-o",
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
    },
    {
      "id": "model-ouellet-oflx1-h24a-o",
      "slug": "ouellet-oflx1-h24a-o",
      "name": "Ouellet OFLX1-H24A-O",
      "seriesId": "series-ouellet-flexx",
      "brandId": "brand-ouellet",
      "modelNumber": "OFLX1-H24A-O",
      "normalizedModelNumber": "oflx1-h24a-o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-ouellet-oarx-h09a-o",
      "modelNumber": "OARX-H09A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oarx-h12a-o",
      "modelNumber": "OARX-H12A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oarx-h18a-o",
      "modelNumber": "OARX-H18A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oarx-h24a-o",
      "modelNumber": "OARX-H24A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ocvx-h09a-o",
      "modelNumber": "OCVX-H09A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ocvx-h12a-o",
      "modelNumber": "OCVX-H12A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ocvx-h18a-o",
      "modelNumber": "OCVX-H18A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ocvx-h24a-o",
      "modelNumber": "OCVX-H24A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ochx-h30a-o",
      "modelNumber": "OCHX-H30A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ofrm4x1-h36a-o",
      "modelNumber": "OFRM4X1-H36A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ofrm4x1-h30a-o",
      "modelNumber": "OFRM4X1-H30A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ochx-h36a-o",
      "modelNumber": "OCHX-H36A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ofrm2x1-h18a-o",
      "modelNumber": "OFRM2X1-H18A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ofrm5x1-h42a-o",
      "modelNumber": "OFRM5X1-H42A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ofrm3x1-h24a-o",
      "modelNumber": "OFRM3X1-H24A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ochx-h09a-o",
      "modelNumber": "OCHX-H09A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ochx-h18a-o",
      "modelNumber": "OCHX-H18A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ochx-h12a-o",
      "modelNumber": "OCHX-H12A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oflx1-h48a-o",
      "modelNumber": "OFLX1-H48A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oflx1-h60a-o",
      "modelNumber": "OFLX1-H60A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-ochx-h24a-o",
      "modelNumber": "OCHX-H24A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oflx1-h36a-o",
      "modelNumber": "OFLX1-H36A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ouellet-oflx1-h24a-o",
      "modelNumber": "OFLX1-H24A-O",
      "brandId": "brand-ouellet",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-oarx-h09a-i",
      "modelNumber": "OARX-H09A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oarx-h12a-i",
      "modelNumber": "OARX-H12A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oarx-h18a-i",
      "modelNumber": "OARX-H18A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oarx-h24a-i",
      "modelNumber": "OARX-H24A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ocvx-h09a-i",
      "modelNumber": "OCVX-H09A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oicx1-h09a-i",
      "modelNumber": "OICX1-H09A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ocvx-h12a-i",
      "modelNumber": "OCVX-H12A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ocvx-h18a-i",
      "modelNumber": "OCVX-H18A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ocvx-h24a-i",
      "modelNumber": "OCVX-H24A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oicx1-h12a-i",
      "modelNumber": "OICX1-H12A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ofcx1-h09a-i",
      "modelNumber": "OFCX1-H09A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ochx-h30a-i",
      "modelNumber": "OCHX-H30A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ofcx1-h12a-i",
      "modelNumber": "OFCX1-H12A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49883",
      "modelNumber": "IU-49883",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49882",
      "modelNumber": "IU-49882",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ochx-h36a-i",
      "modelNumber": "OCHX-H36A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49880",
      "modelNumber": "IU-49880",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49884",
      "modelNumber": "IU-49884",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49881",
      "modelNumber": "IU-49881",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ochx-h09a-i",
      "modelNumber": "OCHX-H09A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ochx-h18a-i",
      "modelNumber": "OCHX-H18A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-ochx-h12a-i",
      "modelNumber": "OCHX-H12A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oahx1-h48a-i",
      "modelNumber": "OAHX1-H48A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-oahx2-h48a-i",
      "modelNumber": "OAHX2-H48A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-ochx-h24a-i",
      "modelNumber": "OCHX-H24A-I",
      "brandId": "brand-ouellet",
      "type": "wall-single"
    },
    {
      "id": "iu-oahx1-h60a-i",
      "modelNumber": "OAHX1-H60A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-oahx1-h36a-i",
      "modelNumber": "OAHX1-H36A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-oahx2-h36a-i",
      "modelNumber": "OAHX2-H36A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-oahx2-h60a-i",
      "modelNumber": "OAHX2-H60A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-oahx1-h24a-i",
      "modelNumber": "OAHX1-H24A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-oahx2-h24a-i",
      "modelNumber": "OAHX2-H24A-I",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-gcac24fnha",
      "modelNumber": "GCAC24F/NHA",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-gcac36fnha",
      "modelNumber": "GCAC36F/NHA",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-gcac60hnha",
      "modelNumber": "GCAC60H/NHA",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    },
    {
      "id": "iu-gcac48hnha",
      "modelNumber": "GCAC48H/NHA",
      "brandId": "brand-ouellet",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ouellet-oarx-h09a-o-oarx-h09a-i",
      "slug": "ouellet-oarx-h09a-o-oarx-h09a-i",
      "modelId": "model-ouellet-oarx-h09a-o",
      "outdoorUnitId": "ou-ouellet-oarx-h09a-o",
      "indoorUnitId": "iu-oarx-h09a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oarx-h12a-o-oarx-h12a-i",
      "slug": "ouellet-oarx-h12a-o-oarx-h12a-i",
      "modelId": "model-ouellet-oarx-h12a-o",
      "outdoorUnitId": "ou-ouellet-oarx-h12a-o",
      "indoorUnitId": "iu-oarx-h12a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 29.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oarx-h18a-o-oarx-h18a-i",
      "slug": "ouellet-oarx-h18a-o-oarx-h18a-i",
      "modelId": "model-ouellet-oarx-h18a-o",
      "outdoorUnitId": "ou-ouellet-oarx-h18a-o",
      "indoorUnitId": "iu-oarx-h18a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oarx-h24a-o-oarx-h24a-i",
      "slug": "ouellet-oarx-h24a-o-oarx-h24a-i",
      "modelId": "model-ouellet-oarx-h24a-o",
      "outdoorUnitId": "ou-ouellet-oarx-h24a-o",
      "indoorUnitId": "iu-oarx-h24a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h09a-o-ocvx-h09a-i",
      "slug": "ouellet-ocvx-h09a-o-ocvx-h09a-i",
      "modelId": "model-ouellet-ocvx-h09a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h09a-o",
      "indoorUnitId": "iu-ocvx-h09a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oarx-h09a-o-oicx1-h09a-i",
      "slug": "ouellet-oarx-h09a-o-oicx1-h09a-i",
      "modelId": "model-ouellet-oarx-h09a-o",
      "outdoorUnitId": "ou-ouellet-oarx-h09a-o",
      "indoorUnitId": "iu-oicx1-h09a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h12a-o-ocvx-h12a-i",
      "slug": "ouellet-ocvx-h12a-o-ocvx-h12a-i",
      "modelId": "model-ouellet-ocvx-h12a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h12a-o",
      "indoorUnitId": "iu-ocvx-h12a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h18a-o-ocvx-h18a-i",
      "slug": "ouellet-ocvx-h18a-o-ocvx-h18a-i",
      "modelId": "model-ouellet-ocvx-h18a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h18a-o",
      "indoorUnitId": "iu-ocvx-h18a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h09a-o-oicx1-h09a-i",
      "slug": "ouellet-ocvx-h09a-o-oicx1-h09a-i",
      "modelId": "model-ouellet-ocvx-h09a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h09a-o",
      "indoorUnitId": "iu-oicx1-h09a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h24a-o-ocvx-h24a-i",
      "slug": "ouellet-ocvx-h24a-o-ocvx-h24a-i",
      "modelId": "model-ouellet-ocvx-h24a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h24a-o",
      "indoorUnitId": "iu-ocvx-h24a-i",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h12a-o-oicx1-h12a-i",
      "slug": "ouellet-ocvx-h12a-o-oicx1-h12a-i",
      "modelId": "model-ouellet-ocvx-h12a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h12a-o",
      "indoorUnitId": "iu-oicx1-h12a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oarx-h09a-o-ofcx1-h09a-i",
      "slug": "ouellet-oarx-h09a-o-ofcx1-h09a-i",
      "modelId": "model-ouellet-oarx-h09a-o",
      "outdoorUnitId": "ou-ouellet-oarx-h09a-o",
      "indoorUnitId": "iu-ofcx1-h09a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ochx-h30a-o-ochx-h30a-i",
      "slug": "ouellet-ochx-h30a-o-ochx-h30a-i",
      "modelId": "model-ouellet-ochx-h30a-o",
      "outdoorUnitId": "ou-ouellet-ochx-h30a-o",
      "indoorUnitId": "iu-ochx-h30a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h09a-o-ofcx1-h09a-i",
      "slug": "ouellet-ocvx-h09a-o-ofcx1-h09a-i",
      "modelId": "model-ouellet-ocvx-h09a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h09a-o",
      "indoorUnitId": "iu-ofcx1-h09a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ocvx-h12a-o-ofcx1-h12a-i",
      "slug": "ouellet-ocvx-h12a-o-ofcx1-h12a-i",
      "modelId": "model-ouellet-ocvx-h12a-o",
      "outdoorUnitId": "ou-ouellet-ocvx-h12a-o",
      "indoorUnitId": "iu-ofcx1-h12a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ofrm4x1-h36a-o-iu-49883",
      "slug": "ouellet-ofrm4x1-h36a-o-iu-49883",
      "modelId": "model-ouellet-ofrm4x1-h36a-o",
      "outdoorUnitId": "ou-ouellet-ofrm4x1-h36a-o",
      "indoorUnitId": "iu-iu-49883",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ofrm4x1-h30a-o-iu-49882",
      "slug": "ouellet-ofrm4x1-h30a-o-iu-49882",
      "modelId": "model-ouellet-ofrm4x1-h30a-o",
      "outdoorUnitId": "ou-ouellet-ofrm4x1-h30a-o",
      "indoorUnitId": "iu-iu-49882",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ochx-h36a-o-ochx-h36a-i",
      "slug": "ouellet-ochx-h36a-o-ochx-h36a-i",
      "modelId": "model-ouellet-ochx-h36a-o",
      "outdoorUnitId": "ou-ouellet-ochx-h36a-o",
      "indoorUnitId": "iu-ochx-h36a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ofrm2x1-h18a-o-iu-49880",
      "slug": "ouellet-ofrm2x1-h18a-o-iu-49880",
      "modelId": "model-ouellet-ofrm2x1-h18a-o",
      "outdoorUnitId": "ou-ouellet-ofrm2x1-h18a-o",
      "indoorUnitId": "iu-iu-49880",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ofrm5x1-h42a-o-iu-49884",
      "slug": "ouellet-ofrm5x1-h42a-o-iu-49884",
      "modelId": "model-ouellet-ofrm5x1-h42a-o",
      "outdoorUnitId": "ou-ouellet-ofrm5x1-h42a-o",
      "indoorUnitId": "iu-iu-49884",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ofrm3x1-h24a-o-iu-49881",
      "slug": "ouellet-ofrm3x1-h24a-o-iu-49881",
      "modelId": "model-ouellet-ofrm3x1-h24a-o",
      "outdoorUnitId": "ou-ouellet-ofrm3x1-h24a-o",
      "indoorUnitId": "iu-iu-49881",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ochx-h09a-o-ochx-h09a-i",
      "slug": "ouellet-ochx-h09a-o-ochx-h09a-i",
      "modelId": "model-ouellet-ochx-h09a-o",
      "outdoorUnitId": "ou-ouellet-ochx-h09a-o",
      "indoorUnitId": "iu-ochx-h09a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ochx-h18a-o-ochx-h18a-i",
      "slug": "ouellet-ochx-h18a-o-ochx-h18a-i",
      "modelId": "model-ouellet-ochx-h18a-o",
      "outdoorUnitId": "ou-ouellet-ochx-h18a-o",
      "indoorUnitId": "iu-ochx-h18a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ochx-h12a-o-ochx-h12a-i",
      "slug": "ouellet-ochx-h12a-o-ochx-h12a-i",
      "modelId": "model-ouellet-ochx-h12a-o",
      "outdoorUnitId": "ou-ouellet-ochx-h12a-o",
      "indoorUnitId": "iu-ochx-h12a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h48a-o-oahx1-h48a-i",
      "slug": "ouellet-oflx1-h48a-o-oahx1-h48a-i",
      "modelId": "model-ouellet-oflx1-h48a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h48a-o",
      "indoorUnitId": "iu-oahx1-h48a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h60a-o-oahx2-h48a-i",
      "slug": "ouellet-oflx1-h60a-o-oahx2-h48a-i",
      "modelId": "model-ouellet-oflx1-h60a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h60a-o",
      "indoorUnitId": "iu-oahx2-h48a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-ochx-h24a-o-ochx-h24a-i",
      "slug": "ouellet-ochx-h24a-o-ochx-h24a-i",
      "modelId": "model-ouellet-ochx-h24a-o",
      "outdoorUnitId": "ou-ouellet-ochx-h24a-o",
      "indoorUnitId": "iu-ochx-h24a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h60a-o-oahx1-h48a-i",
      "slug": "ouellet-oflx1-h60a-o-oahx1-h48a-i",
      "modelId": "model-ouellet-oflx1-h60a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h60a-o",
      "indoorUnitId": "iu-oahx1-h48a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h60a-o-oahx1-h60a-i",
      "slug": "ouellet-oflx1-h60a-o-oahx1-h60a-i",
      "modelId": "model-ouellet-oflx1-h60a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h60a-o",
      "indoorUnitId": "iu-oahx1-h60a-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h36a-o-oahx1-h36a-i",
      "slug": "ouellet-oflx1-h36a-o-oahx1-h36a-i",
      "modelId": "model-ouellet-oflx1-h36a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h36a-o",
      "indoorUnitId": "iu-oahx1-h36a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h36a-o-oahx2-h36a-i",
      "slug": "ouellet-oflx1-h36a-o-oahx2-h36a-i",
      "modelId": "model-ouellet-oflx1-h36a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h36a-o",
      "indoorUnitId": "iu-oahx2-h36a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h60a-o-oahx2-h60a-i",
      "slug": "ouellet-oflx1-h60a-o-oahx2-h60a-i",
      "modelId": "model-ouellet-oflx1-h60a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h60a-o",
      "indoorUnitId": "iu-oahx2-h60a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h24a-o-oahx1-h24a-i",
      "slug": "ouellet-oflx1-h24a-o-oahx1-h24a-i",
      "modelId": "model-ouellet-oflx1-h24a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h24a-o",
      "indoorUnitId": "iu-oahx1-h24a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h36a-o-oahx2-h24a-i",
      "slug": "ouellet-oflx1-h36a-o-oahx2-h24a-i",
      "modelId": "model-ouellet-oflx1-h36a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h36a-o",
      "indoorUnitId": "iu-oahx2-h24a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h36a-o-oahx1-h24a-i",
      "slug": "ouellet-oflx1-h36a-o-oahx1-h24a-i",
      "modelId": "model-ouellet-oflx1-h36a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h36a-o",
      "indoorUnitId": "iu-oahx1-h24a-i",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h36a-o-gcac24fnha",
      "slug": "ouellet-oflx1-h36a-o-gcac24fnha",
      "modelId": "model-ouellet-oflx1-h36a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h36a-o",
      "indoorUnitId": "iu-gcac24fnha",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h36a-o-gcac36fnha",
      "slug": "ouellet-oflx1-h36a-o-gcac36fnha",
      "modelId": "model-ouellet-oflx1-h36a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h36a-o",
      "indoorUnitId": "iu-gcac36fnha",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h60a-o-gcac60hnha",
      "slug": "ouellet-oflx1-h60a-o-gcac60hnha",
      "modelId": "model-ouellet-oflx1-h60a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h60a-o",
      "indoorUnitId": "iu-gcac60hnha",
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
          "sourceId": "src-ouellet-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ouellet-oflx1-h60a-o-gcac48hnha",
      "slug": "ouellet-oflx1-h60a-o-gcac48hnha",
      "modelId": "model-ouellet-oflx1-h60a-o",
      "outdoorUnitId": "ou-ouellet-oflx1-h60a-o",
      "indoorUnitId": "iu-gcac48hnha",
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
          "sourceId": "src-ouellet-epa",
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
