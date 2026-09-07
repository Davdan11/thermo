import type { BrandDataset } from "../../types";

export const brand_acdDataset: BrandDataset = {
  "brand": {
    "id": "brand-acd",
    "slug": "acd",
    "name": "ACD",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ACD",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-acd-epa",
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
      "id": "series-acd-lomo-38seer",
      "slug": "acd-lomo-38seer",
      "name": "LOMO 38SEER",
      "brandId": "brand-acd",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LOMO 38SEER de ACD",
      "imageUrl": "/images/series/acd-acd-lomo-38seer.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-acd-pular",
      "slug": "acd-pular",
      "name": "Pular",
      "brandId": "brand-acd",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pular de ACD",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-acd-free-match",
      "slug": "acd-free-match",
      "name": "Free Match",
      "brandId": "brand-acd",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Free Match de ACD",
      "imageUrl": "/images/series/acd-acd-free-match.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-acd-ultra-heat-free-match",
      "slug": "acd-ultra-heat-free-match",
      "name": "Ultra heat free match",
      "brandId": "brand-acd",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra heat free match de ACD",
      "imageUrl": "/images/series/acd-acd-ultra-heat-free-match.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-acd-flexx",
      "slug": "acd-flexx",
      "name": "Flexx",
      "brandId": "brand-acd",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Flexx de ACD",
      "imageUrl": "/images/series/acd-acd-flexx.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-acd-uhd09kch38sb-o",
      "slug": "acd-uhd09kch38sb-o",
      "name": "ACD UHD09KCH38SB-O",
      "seriesId": "series-acd-lomo-38seer",
      "brandId": "brand-acd",
      "modelNumber": "UHD09KCH38SB-O",
      "normalizedModelNumber": "uhd09kch38sb-o",
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
      "id": "model-acd-pud12kch24s-o",
      "slug": "acd-pud12kch24s-o",
      "name": "ACD PUD12KCH24S-O",
      "seriesId": "series-acd-pular",
      "brandId": "brand-acd",
      "modelNumber": "PUD12KCH24S-O",
      "normalizedModelNumber": "pud12kch24s-o",
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
      "id": "model-acd-uhd12kch31s-o",
      "slug": "acd-uhd12kch31s-o",
      "name": "ACD UHD12KCH31S-O",
      "seriesId": "series-acd-lomo-38seer",
      "brandId": "brand-acd",
      "modelNumber": "UHD12KCH31S-O",
      "normalizedModelNumber": "uhd12kch31s-o",
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
      "id": "model-acd-pud18kch23s-o",
      "slug": "acd-pud18kch23s-o",
      "name": "ACD PUD18KCH23S-O",
      "seriesId": "series-acd-pular",
      "brandId": "brand-acd",
      "modelNumber": "PUD18KCH23S-O",
      "normalizedModelNumber": "pud18kch23s-o",
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
      "id": "model-acd-uhd18kch25s-o",
      "slug": "acd-uhd18kch25s-o",
      "name": "ACD UHD18KCH25S-O",
      "seriesId": "series-acd-lomo-38seer",
      "brandId": "brand-acd",
      "modelNumber": "UHD18KCH25S-O",
      "normalizedModelNumber": "uhd18kch25s-o",
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
      "id": "model-acd-uhd24kch22s-o",
      "slug": "acd-uhd24kch22s-o",
      "name": "ACD UHD24KCH22S-O",
      "seriesId": "series-acd-lomo-38seer",
      "brandId": "brand-acd",
      "modelNumber": "UHD24KCH22S-O",
      "normalizedModelNumber": "uhd24kch22s-o",
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
      "id": "model-acd-mpd42kch21sb-o",
      "slug": "acd-mpd42kch21sb-o",
      "name": "ACD MPD42KCH21SB-O",
      "seriesId": "series-acd-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MPD42KCH21SB-O",
      "normalizedModelNumber": "mpd42kch21sb-o",
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
      "id": "model-acd-mpd18kch21sb-o",
      "slug": "acd-mpd18kch21sb-o",
      "name": "ACD MPD18KCH21SB-O",
      "seriesId": "series-acd-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MPD18KCH21SB-O",
      "normalizedModelNumber": "mpd18kch21sb-o",
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
      "id": "model-acd-mpd24kch21sb-o",
      "slug": "acd-mpd24kch21sb-o",
      "name": "ACD MPD24KCH21SB-O",
      "seriesId": "series-acd-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MPD24KCH21SB-O",
      "normalizedModelNumber": "mpd24kch21sb-o",
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
      "id": "model-acd-mpd30kch21sb-o",
      "slug": "acd-mpd30kch21sb-o",
      "name": "ACD MPD30KCH21SB-O",
      "seriesId": "series-acd-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MPD30KCH21SB-O",
      "normalizedModelNumber": "mpd30kch21sb-o",
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
      "id": "model-acd-mpd36kch21sb-o",
      "slug": "acd-mpd36kch21sb-o",
      "name": "ACD MPD36KCH21SB-O",
      "seriesId": "series-acd-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MPD36KCH21SB-O",
      "normalizedModelNumber": "mpd36kch21sb-o",
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
      "id": "model-acd-mud18kch23s-o",
      "slug": "acd-mud18kch23s-o",
      "name": "ACD MUD18KCH23S-O",
      "seriesId": "series-acd-ultra-heat-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MUD18KCH23S-O",
      "normalizedModelNumber": "mud18kch23s-o",
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
      "id": "model-acd-mud24kch23s-o",
      "slug": "acd-mud24kch23s-o",
      "name": "ACD MUD24KCH23S-O",
      "seriesId": "series-acd-ultra-heat-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MUD24KCH23S-O",
      "normalizedModelNumber": "mud24kch23s-o",
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
      "id": "model-acd-fxd-acd60",
      "slug": "acd-fxd-acd60",
      "name": "ACD FXD-ACD60",
      "seriesId": "series-acd-flexx",
      "brandId": "brand-acd",
      "modelNumber": "FXD-ACD60",
      "normalizedModelNumber": "fxd-acd60",
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
      "id": "model-acd-fxd-acd36",
      "slug": "acd-fxd-acd36",
      "name": "ACD FXD-ACD36",
      "seriesId": "series-acd-flexx",
      "brandId": "brand-acd",
      "modelNumber": "FXD-ACD36",
      "normalizedModelNumber": "fxd-acd36",
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
      "id": "model-acd-mud36kch23s-o",
      "slug": "acd-mud36kch23s-o",
      "name": "ACD MUD36KCH23S-O",
      "seriesId": "series-acd-ultra-heat-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MUD36KCH23S-O",
      "normalizedModelNumber": "mud36kch23s-o",
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
      "id": "model-acd-mud42kch23s-o",
      "slug": "acd-mud42kch23s-o",
      "name": "ACD MUD42KCH23S-O",
      "seriesId": "series-acd-ultra-heat-free-match",
      "brandId": "brand-acd",
      "modelNumber": "MUD42KCH23S-O",
      "normalizedModelNumber": "mud42kch23s-o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-acd-uhd09kch38sb-o",
      "modelNumber": "UHD09KCH38SB-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-pud12kch24s-o",
      "modelNumber": "PUD12KCH24S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-uhd12kch31s-o",
      "modelNumber": "UHD12KCH31S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-pud18kch23s-o",
      "modelNumber": "PUD18KCH23S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-uhd18kch25s-o",
      "modelNumber": "UHD18KCH25S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-uhd24kch22s-o",
      "modelNumber": "UHD24KCH22S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mpd42kch21sb-o",
      "modelNumber": "MPD42KCH21SB-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mpd18kch21sb-o",
      "modelNumber": "MPD18KCH21SB-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mpd24kch21sb-o",
      "modelNumber": "MPD24KCH21SB-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mpd30kch21sb-o",
      "modelNumber": "MPD30KCH21SB-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mpd36kch21sb-o",
      "modelNumber": "MPD36KCH21SB-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mud18kch23s-o",
      "modelNumber": "MUD18KCH23S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mud24kch23s-o",
      "modelNumber": "MUD24KCH23S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-fxd-acd60",
      "modelNumber": "FXD-ACD60",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-fxd-acd36",
      "modelNumber": "FXD-ACD36",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mud36kch23s-o",
      "modelNumber": "MUD36KCH23S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-acd-mud42kch23s-o",
      "modelNumber": "MUD42KCH23S-O",
      "brandId": "brand-acd",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-uhd09kch38sc-i",
      "modelNumber": "UHD09KCH38SC-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-uhd09kch38sb-i",
      "modelNumber": "UHD09KCH38SB-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-pud12kch24s-i",
      "modelNumber": "PUD12KCH24S-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-uhd12kch31s-i",
      "modelNumber": "UHD12KCH31S-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-uhd12kch31sb-i",
      "modelNumber": "UHD12KCH31SB-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-pud18kch23s-i",
      "modelNumber": "PUD18KCH23S-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-uhd18kch25sb-i",
      "modelNumber": "UHD18KCH25SB-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-uhd24kch22s-i",
      "modelNumber": "UHD24KCH22S-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-uhd24kch22sb-i",
      "modelNumber": "UHD24KCH22SB-I",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40247",
      "modelNumber": "IU-40247",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40243",
      "modelNumber": "IU-40243",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40244",
      "modelNumber": "IU-40244",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40245",
      "modelNumber": "IU-40245",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40246",
      "modelNumber": "IU-40246",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40248",
      "modelNumber": "IU-40248",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40249",
      "modelNumber": "IU-40249",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-ah248",
      "modelNumber": "AH248",
      "brandId": "brand-acd",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah224",
      "modelNumber": "AH224",
      "brandId": "brand-acd",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah260",
      "modelNumber": "AH260",
      "brandId": "brand-acd",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah236",
      "modelNumber": "AH236",
      "brandId": "brand-acd",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-40250",
      "modelNumber": "IU-40250",
      "brandId": "brand-acd",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-40251",
      "modelNumber": "IU-40251",
      "brandId": "brand-acd",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-acd-uhd09kch38sb-o-uhd09kch38sc-i",
      "slug": "acd-uhd09kch38sb-o-uhd09kch38sc-i",
      "modelId": "model-acd-uhd09kch38sb-o",
      "outdoorUnitId": "ou-acd-uhd09kch38sb-o",
      "indoorUnitId": "iu-uhd09kch38sc-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-uhd09kch38sb-o-uhd09kch38sb-i",
      "slug": "acd-uhd09kch38sb-o-uhd09kch38sb-i",
      "modelId": "model-acd-uhd09kch38sb-o",
      "outdoorUnitId": "ou-acd-uhd09kch38sb-o",
      "indoorUnitId": "iu-uhd09kch38sb-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-pud12kch24s-o-pud12kch24s-i",
      "slug": "acd-pud12kch24s-o-pud12kch24s-i",
      "modelId": "model-acd-pud12kch24s-o",
      "outdoorUnitId": "ou-acd-pud12kch24s-o",
      "indoorUnitId": "iu-pud12kch24s-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-uhd12kch31s-o-uhd12kch31s-i",
      "slug": "acd-uhd12kch31s-o-uhd12kch31s-i",
      "modelId": "model-acd-uhd12kch31s-o",
      "outdoorUnitId": "ou-acd-uhd12kch31s-o",
      "indoorUnitId": "iu-uhd12kch31s-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-uhd12kch31s-o-uhd12kch31sb-i",
      "slug": "acd-uhd12kch31s-o-uhd12kch31sb-i",
      "modelId": "model-acd-uhd12kch31s-o",
      "outdoorUnitId": "ou-acd-uhd12kch31s-o",
      "indoorUnitId": "iu-uhd12kch31sb-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-pud18kch23s-o-pud18kch23s-i",
      "slug": "acd-pud18kch23s-o-pud18kch23s-i",
      "modelId": "model-acd-pud18kch23s-o",
      "outdoorUnitId": "ou-acd-pud18kch23s-o",
      "indoorUnitId": "iu-pud18kch23s-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-pud18kch23s-o-pud18kch23s-i",
      "slug": "acd-pud18kch23s-o-pud18kch23s-i",
      "modelId": "model-acd-pud18kch23s-o",
      "outdoorUnitId": "ou-acd-pud18kch23s-o",
      "indoorUnitId": "iu-pud18kch23s-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-uhd18kch25s-o-uhd18kch25sb-i",
      "slug": "acd-uhd18kch25s-o-uhd18kch25sb-i",
      "modelId": "model-acd-uhd18kch25s-o",
      "outdoorUnitId": "ou-acd-uhd18kch25s-o",
      "indoorUnitId": "iu-uhd18kch25sb-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-uhd24kch22s-o-uhd24kch22s-i",
      "slug": "acd-uhd24kch22s-o-uhd24kch22s-i",
      "modelId": "model-acd-uhd24kch22s-o",
      "outdoorUnitId": "ou-acd-uhd24kch22s-o",
      "indoorUnitId": "iu-uhd24kch22s-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-uhd24kch22s-o-uhd24kch22sb-i",
      "slug": "acd-uhd24kch22s-o-uhd24kch22sb-i",
      "modelId": "model-acd-uhd24kch22s-o",
      "outdoorUnitId": "ou-acd-uhd24kch22s-o",
      "indoorUnitId": "iu-uhd24kch22sb-i",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mpd42kch21sb-o-iu-40247",
      "slug": "acd-mpd42kch21sb-o-iu-40247",
      "modelId": "model-acd-mpd42kch21sb-o",
      "outdoorUnitId": "ou-acd-mpd42kch21sb-o",
      "indoorUnitId": "iu-iu-40247",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mpd18kch21sb-o-iu-40243",
      "slug": "acd-mpd18kch21sb-o-iu-40243",
      "modelId": "model-acd-mpd18kch21sb-o",
      "outdoorUnitId": "ou-acd-mpd18kch21sb-o",
      "indoorUnitId": "iu-iu-40243",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mpd24kch21sb-o-iu-40244",
      "slug": "acd-mpd24kch21sb-o-iu-40244",
      "modelId": "model-acd-mpd24kch21sb-o",
      "outdoorUnitId": "ou-acd-mpd24kch21sb-o",
      "indoorUnitId": "iu-iu-40244",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mpd30kch21sb-o-iu-40245",
      "slug": "acd-mpd30kch21sb-o-iu-40245",
      "modelId": "model-acd-mpd30kch21sb-o",
      "outdoorUnitId": "ou-acd-mpd30kch21sb-o",
      "indoorUnitId": "iu-iu-40245",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mpd36kch21sb-o-iu-40246",
      "slug": "acd-mpd36kch21sb-o-iu-40246",
      "modelId": "model-acd-mpd36kch21sb-o",
      "outdoorUnitId": "ou-acd-mpd36kch21sb-o",
      "indoorUnitId": "iu-iu-40246",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mud18kch23s-o-iu-40248",
      "slug": "acd-mud18kch23s-o-iu-40248",
      "modelId": "model-acd-mud18kch23s-o",
      "outdoorUnitId": "ou-acd-mud18kch23s-o",
      "indoorUnitId": "iu-iu-40248",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mud24kch23s-o-iu-40249",
      "slug": "acd-mud24kch23s-o-iu-40249",
      "modelId": "model-acd-mud24kch23s-o",
      "outdoorUnitId": "ou-acd-mud24kch23s-o",
      "indoorUnitId": "iu-iu-40249",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-fxd-acd60-ah248",
      "slug": "acd-fxd-acd60-ah248",
      "modelId": "model-acd-fxd-acd60",
      "outdoorUnitId": "ou-acd-fxd-acd60",
      "indoorUnitId": "iu-ah248",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-fxd-acd36-ah224",
      "slug": "acd-fxd-acd36-ah224",
      "modelId": "model-acd-fxd-acd36",
      "outdoorUnitId": "ou-acd-fxd-acd36",
      "indoorUnitId": "iu-ah224",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-fxd-acd60-ah260",
      "slug": "acd-fxd-acd60-ah260",
      "modelId": "model-acd-fxd-acd60",
      "outdoorUnitId": "ou-acd-fxd-acd60",
      "indoorUnitId": "iu-ah260",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-fxd-acd36-ah236",
      "slug": "acd-fxd-acd36-ah236",
      "modelId": "model-acd-fxd-acd36",
      "outdoorUnitId": "ou-acd-fxd-acd36",
      "indoorUnitId": "iu-ah236",
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
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mud36kch23s-o-iu-40250",
      "slug": "acd-mud36kch23s-o-iu-40250",
      "modelId": "model-acd-mud36kch23s-o",
      "outdoorUnitId": "ou-acd-mud36kch23s-o",
      "indoorUnitId": "iu-iu-40250",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-acd-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-acd-mud42kch23s-o-iu-40251",
      "slug": "acd-mud42kch23s-o-iu-40251",
      "modelId": "model-acd-mud42kch23s-o",
      "outdoorUnitId": "ou-acd-mud42kch23s-o",
      "indoorUnitId": "iu-iu-40251",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-acd-epa",
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
