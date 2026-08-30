import type { BrandDataset } from "../../types";

export const brand_maxi_airDataset: BrandDataset = {
  "brand": {
    "id": "brand-maxi-air",
    "slug": "maxi-air",
    "name": "MAXI AIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour MAXI AIR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-maxi-air-epa",
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
      "id": "series-maxi-air-ne-series",
      "slug": "maxi-air-ne-series",
      "name": "NE series",
      "brandId": "brand-maxi-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NE series de MAXI AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maxi-air-t55-series",
      "slug": "maxi-air-t55-series",
      "name": "T55 Series",
      "brandId": "brand-maxi-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T55 Series de MAXI AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maxi-air-ys-series",
      "slug": "maxi-air-ys-series",
      "name": "YS series",
      "brandId": "brand-maxi-air",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série YS series de MAXI AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maxi-air-mas-series",
      "slug": "maxi-air-mas-series",
      "name": "MAS Series",
      "brandId": "brand-maxi-air",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MAS Series de MAXI AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maxi-air-maxs-series",
      "slug": "maxi-air-maxs-series",
      "name": "MAXS series",
      "brandId": "brand-maxi-air",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MAXS series de MAXI AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-maxi-air-max-series",
      "slug": "maxi-air-max-series",
      "name": "MAX Series",
      "brandId": "brand-maxi-air",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MAX Series de MAXI AIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-maxi-air-ne-t53-aeg12ext",
      "slug": "maxi-air-ne-t53-aeg12ext",
      "name": "MAXI AIR NE-T53-AEG12EXT",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T53-AEG12EXT",
      "normalizedModelNumber": "ne-t53-aeg12ext",
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
      "id": "model-maxi-air-ne-t52-supae12e",
      "slug": "maxi-air-ne-t52-supae12e",
      "name": "MAXI AIR NE-T52-SUPAE12E",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T52-SUPAE12E",
      "normalizedModelNumber": "ne-t52-supae12e",
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
      "id": "model-maxi-air-t55-aes12ext454",
      "slug": "maxi-air-t55-aes12ext454",
      "name": "MAXI AIR T55-AES12EXT454",
      "seriesId": "series-maxi-air-t55-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "T55-AES12EXT454",
      "normalizedModelNumber": "t55-aes12ext454",
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
      "id": "model-maxi-air-t55-multi18e454",
      "slug": "maxi-air-t55-multi18e454",
      "name": "MAXI AIR T55-MULTI18E454*",
      "seriesId": "series-maxi-air-t55-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "T55-MULTI18E454*",
      "normalizedModelNumber": "t55-multi18e454*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19000,
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
      "id": "model-maxi-air-ys21f-18hrdn1",
      "slug": "maxi-air-ys21f-18hrdn1",
      "name": "MAXI AIR YS21F-18HRDN1",
      "seriesId": "series-maxi-air-ys-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "YS21F-18HRDN1",
      "normalizedModelNumber": "ys21f-18hrdn1",
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
      "id": "model-maxi-air-ne-t52-pla18int",
      "slug": "maxi-air-ne-t52-pla18int",
      "name": "MAXI AIR NE-T52-PLA18INT",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T52-PLA18INT",
      "normalizedModelNumber": "ne-t52-pla18int",
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
      "id": "model-maxi-air-ne-t52-pla12int",
      "slug": "maxi-air-ne-t52-pla12int",
      "name": "MAXI AIR NE-T52-PLA12INT",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T52-PLA12INT",
      "normalizedModelNumber": "ne-t52-pla12int",
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
      "id": "model-maxi-air-ys21f-12hrdn1",
      "slug": "maxi-air-ys21f-12hrdn1",
      "name": "MAXI AIR YS21F-12HRDN1",
      "seriesId": "series-maxi-air-ys-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "YS21F-12HRDN1",
      "normalizedModelNumber": "ys21f-12hrdn1",
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
      "id": "model-maxi-air-t55-multi36e454",
      "slug": "maxi-air-t55-multi36e454",
      "name": "MAXI AIR T55-MULTI36E454*",
      "seriesId": "series-maxi-air-t55-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "T55-MULTI36E454*",
      "normalizedModelNumber": "t55-multi36e454*",
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
      "id": "model-maxi-air-t55-multi28e454",
      "slug": "maxi-air-t55-multi28e454",
      "name": "MAXI AIR T55-MULTI28E454*",
      "seriesId": "series-maxi-air-t55-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "T55-MULTI28E454*",
      "normalizedModelNumber": "t55-multi28e454*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
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
      "id": "model-maxi-air-ne-t53-multi28e",
      "slug": "maxi-air-ne-t53-multi28e",
      "name": "MAXI AIR NE-T53-MULTI28E*",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T53-MULTI28E*",
      "normalizedModelNumber": "ne-t53-multi28e*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
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
      "id": "model-maxi-air-ne-t53-multi36e",
      "slug": "maxi-air-ne-t53-multi36e",
      "name": "MAXI AIR NE-T53-MULTI36E*",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T53-MULTI36E*",
      "normalizedModelNumber": "ne-t53-multi36e*",
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
      "id": "model-maxi-air-ne-t52-supae18e",
      "slug": "maxi-air-ne-t52-supae18e",
      "name": "MAXI AIR NE-T52-SUPAE18E",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T52-SUPAE18E",
      "normalizedModelNumber": "ne-t52-supae18e",
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
      "id": "model-maxi-air-ne-t53-aeg18ext",
      "slug": "maxi-air-ne-t53-aeg18ext",
      "name": "MAXI AIR NE-T53-AEG18EXT",
      "seriesId": "series-maxi-air-ne-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "NE-T53-AEG18EXT",
      "normalizedModelNumber": "ne-t53-aeg18ext",
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
      "id": "model-maxi-air-t55-aes18ext454",
      "slug": "maxi-air-t55-aes18ext454",
      "name": "MAXI AIR T55-AES18EXT454",
      "seriesId": "series-maxi-air-t55-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "T55-AES18EXT454",
      "normalizedModelNumber": "t55-aes18ext454",
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
      "id": "model-maxi-air-maxs-2430-454",
      "slug": "maxi-air-maxs-2430-454",
      "name": "MAXI AIR MAXS-2430-454",
      "seriesId": "series-maxi-air-mas-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "MAXS-2430-454",
      "normalizedModelNumber": "maxs-2430-454",
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
      "id": "model-maxi-air-maxs-2430",
      "slug": "maxi-air-maxs-2430",
      "name": "MAXI AIR MAXS-2430",
      "seriesId": "series-maxi-air-maxs-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "MAXS-2430",
      "normalizedModelNumber": "maxs-2430",
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
      "id": "model-maxi-air-maxs-4260-454",
      "slug": "maxi-air-maxs-4260-454",
      "name": "MAXI AIR MAXS-4260-454",
      "seriesId": "series-maxi-air-mas-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "MAXS-4260-454",
      "normalizedModelNumber": "maxs-4260-454",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
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
      "id": "model-maxi-air-maxs-4260",
      "slug": "maxi-air-maxs-4260",
      "name": "MAXI AIR MAXS-4260",
      "seriesId": "series-maxi-air-maxs-series",
      "brandId": "brand-maxi-air",
      "modelNumber": "MAXS-4260",
      "normalizedModelNumber": "maxs-4260",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-maxi-air-ne-t53-aeg12ext",
      "modelNumber": "NE-T53-AEG12EXT",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ne-t52-supae12e",
      "modelNumber": "NE-T52-SUPAE12E",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-t55-aes12ext454",
      "modelNumber": "T55-AES12EXT454",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-t55-multi18e454",
      "modelNumber": "T55-MULTI18E454*",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-ys21f-18hrdn1",
      "modelNumber": "YS21F-18HRDN1",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ne-t52-pla18int",
      "modelNumber": "NE-T52-PLA18INT",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ne-t52-pla12int",
      "modelNumber": "NE-T52-PLA12INT",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ys21f-12hrdn1",
      "modelNumber": "YS21F-12HRDN1",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-t55-multi36e454",
      "modelNumber": "T55-MULTI36E454*",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-t55-multi28e454",
      "modelNumber": "T55-MULTI28E454*",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-ne-t53-multi28e",
      "modelNumber": "NE-T53-MULTI28E*",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ne-t53-multi36e",
      "modelNumber": "NE-T53-MULTI36E*",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ne-t52-supae18e",
      "modelNumber": "NE-T52-SUPAE18E",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-ne-t53-aeg18ext",
      "modelNumber": "NE-T53-AEG18EXT",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-t55-aes18ext454",
      "modelNumber": "T55-AES18EXT454",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-maxs-2430-454",
      "modelNumber": "MAXS-2430-454",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-maxs-2430",
      "modelNumber": "MAXS-2430",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-maxi-air-maxs-4260-454",
      "modelNumber": "MAXS-4260-454",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-maxi-air-maxs-4260",
      "modelNumber": "MAXS-4260",
      "brandId": "brand-maxi-air",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ne-t53-aeg12int",
      "modelNumber": "NE-T53-AEG12INT*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-supae12i",
      "modelNumber": "NE-T52-SUPAE12I*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-aes12int454",
      "modelNumber": "T55-AES12INT454*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47885",
      "modelNumber": "IU-47885",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ys21f-18hrdn1",
      "modelNumber": "YS21F-18HRDN1*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-pla18ext",
      "modelNumber": "NE-T52-PLA18EXT*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-pla12ext",
      "modelNumber": "NE-T52-PLA12EXT*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ys21f-12hrdn1",
      "modelNumber": "YS21F-12HRDN1*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47887",
      "modelNumber": "IU-47887",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47886",
      "modelNumber": "IU-47886",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47881",
      "modelNumber": "IU-47881",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-47882",
      "modelNumber": "IU-47882",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t52-supae18i",
      "modelNumber": "NE-T52-SUPAE18I*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ne-t53-aeg18int",
      "modelNumber": "NE-T53-AEG18INT*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-t55-aes18int454",
      "modelNumber": "T55-AES18INT454*",
      "brandId": "brand-maxi-air",
      "type": "wall-single"
    },
    {
      "id": "iu-ahms-3015-454",
      "modelNumber": "AHMS-3015-454*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahms-3015",
      "modelNumber": "AHMS-3015*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-f32-mvbm36c24",
      "modelNumber": "F32-MVBM36C24*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-f32-mvbm36b24",
      "modelNumber": "F32-MVBM36B24*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahms-6020-454",
      "modelNumber": "AHMS-6020-454*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-f32-mvbm60c28",
      "modelNumber": "F32-MVBM60C28*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-ne-f52-mac36hwd",
      "modelNumber": "NE-F52-MAC36HWD*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-ahms-6020",
      "modelNumber": "AHMS-6020*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    },
    {
      "id": "iu-f32-mvbm36a24",
      "modelNumber": "F32-MVBM36A24*",
      "brandId": "brand-maxi-air",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-maxi-air-ne-t53-aeg12ext-ne-t53-aeg12int",
      "slug": "maxi-air-ne-t53-aeg12ext-ne-t53-aeg12int",
      "modelId": "model-maxi-air-ne-t53-aeg12ext",
      "outdoorUnitId": "ou-maxi-air-ne-t53-aeg12ext",
      "indoorUnitId": "iu-ne-t53-aeg12int",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t52-supae12e-ne-t52-supae12i",
      "slug": "maxi-air-ne-t52-supae12e-ne-t52-supae12i",
      "modelId": "model-maxi-air-ne-t52-supae12e",
      "outdoorUnitId": "ou-maxi-air-ne-t52-supae12e",
      "indoorUnitId": "iu-ne-t52-supae12i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-t55-aes12ext454-t55-aes12int454",
      "slug": "maxi-air-t55-aes12ext454-t55-aes12int454",
      "modelId": "model-maxi-air-t55-aes12ext454",
      "outdoorUnitId": "ou-maxi-air-t55-aes12ext454",
      "indoorUnitId": "iu-t55-aes12int454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.4,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-t55-multi18e454-iu-47885",
      "slug": "maxi-air-t55-multi18e454-iu-47885",
      "modelId": "model-maxi-air-t55-multi18e454",
      "outdoorUnitId": "ou-maxi-air-t55-multi18e454",
      "indoorUnitId": "iu-iu-47885",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ys21f-18hrdn1-ys21f-18hrdn1",
      "slug": "maxi-air-ys21f-18hrdn1-ys21f-18hrdn1",
      "modelId": "model-maxi-air-ys21f-18hrdn1",
      "outdoorUnitId": "ou-maxi-air-ys21f-18hrdn1",
      "indoorUnitId": "iu-ys21f-18hrdn1",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t52-pla18int-ne-t52-pla18ext",
      "slug": "maxi-air-ne-t52-pla18int-ne-t52-pla18ext",
      "modelId": "model-maxi-air-ne-t52-pla18int",
      "outdoorUnitId": "ou-maxi-air-ne-t52-pla18int",
      "indoorUnitId": "iu-ne-t52-pla18ext",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.7,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t52-pla12int-ne-t52-pla12ext",
      "slug": "maxi-air-ne-t52-pla12int-ne-t52-pla12ext",
      "modelId": "model-maxi-air-ne-t52-pla12int",
      "outdoorUnitId": "ou-maxi-air-ne-t52-pla12int",
      "indoorUnitId": "iu-ne-t52-pla12ext",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ys21f-12hrdn1-ys21f-12hrdn1",
      "slug": "maxi-air-ys21f-12hrdn1-ys21f-12hrdn1",
      "modelId": "model-maxi-air-ys21f-12hrdn1",
      "outdoorUnitId": "ou-maxi-air-ys21f-12hrdn1",
      "indoorUnitId": "iu-ys21f-12hrdn1",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-t55-multi36e454-iu-47887",
      "slug": "maxi-air-t55-multi36e454-iu-47887",
      "modelId": "model-maxi-air-t55-multi36e454",
      "outdoorUnitId": "ou-maxi-air-t55-multi36e454",
      "indoorUnitId": "iu-iu-47887",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-t55-multi28e454-iu-47886",
      "slug": "maxi-air-t55-multi28e454-iu-47886",
      "modelId": "model-maxi-air-t55-multi28e454",
      "outdoorUnitId": "ou-maxi-air-t55-multi28e454",
      "indoorUnitId": "iu-iu-47886",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t53-multi28e-iu-47881",
      "slug": "maxi-air-ne-t53-multi28e-iu-47881",
      "modelId": "model-maxi-air-ne-t53-multi28e",
      "outdoorUnitId": "ou-maxi-air-ne-t53-multi28e",
      "indoorUnitId": "iu-iu-47881",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t53-multi36e-iu-47882",
      "slug": "maxi-air-ne-t53-multi36e-iu-47882",
      "modelId": "model-maxi-air-ne-t53-multi36e",
      "outdoorUnitId": "ou-maxi-air-ne-t53-multi36e",
      "indoorUnitId": "iu-iu-47882",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t52-supae18e-ne-t52-supae18i",
      "slug": "maxi-air-ne-t52-supae18e-ne-t52-supae18i",
      "modelId": "model-maxi-air-ne-t52-supae18e",
      "outdoorUnitId": "ou-maxi-air-ne-t52-supae18e",
      "indoorUnitId": "iu-ne-t52-supae18i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-ne-t53-aeg18ext-ne-t53-aeg18int",
      "slug": "maxi-air-ne-t53-aeg18ext-ne-t53-aeg18int",
      "modelId": "model-maxi-air-ne-t53-aeg18ext",
      "outdoorUnitId": "ou-maxi-air-ne-t53-aeg18ext",
      "indoorUnitId": "iu-ne-t53-aeg18int",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-t55-aes18ext454-t55-aes18int454",
      "slug": "maxi-air-t55-aes18ext454-t55-aes18int454",
      "modelId": "model-maxi-air-t55-aes18ext454",
      "outdoorUnitId": "ou-maxi-air-t55-aes18ext454",
      "indoorUnitId": "iu-t55-aes18int454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-2430-454-ahms-3015-454",
      "slug": "maxi-air-maxs-2430-454-ahms-3015-454",
      "modelId": "model-maxi-air-maxs-2430-454",
      "outdoorUnitId": "ou-maxi-air-maxs-2430-454",
      "indoorUnitId": "iu-ahms-3015-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-2430-ahms-3015",
      "slug": "maxi-air-maxs-2430-ahms-3015",
      "modelId": "model-maxi-air-maxs-2430",
      "outdoorUnitId": "ou-maxi-air-maxs-2430",
      "indoorUnitId": "iu-ahms-3015",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 8.9,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-2430-454-f32-mvbm36c24",
      "slug": "maxi-air-maxs-2430-454-f32-mvbm36c24",
      "modelId": "model-maxi-air-maxs-2430-454",
      "outdoorUnitId": "ou-maxi-air-maxs-2430-454",
      "indoorUnitId": "iu-f32-mvbm36c24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-2430-454-f32-mvbm36b24",
      "slug": "maxi-air-maxs-2430-454-f32-mvbm36b24",
      "modelId": "model-maxi-air-maxs-2430-454",
      "outdoorUnitId": "ou-maxi-air-maxs-2430-454",
      "indoorUnitId": "iu-f32-mvbm36b24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-4260-454-ahms-6020-454",
      "slug": "maxi-air-maxs-4260-454-ahms-6020-454",
      "modelId": "model-maxi-air-maxs-4260-454",
      "outdoorUnitId": "ou-maxi-air-maxs-4260-454",
      "indoorUnitId": "iu-ahms-6020-454",
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
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-4260-454-f32-mvbm60c28",
      "slug": "maxi-air-maxs-4260-454-f32-mvbm60c28",
      "modelId": "model-maxi-air-maxs-4260-454",
      "outdoorUnitId": "ou-maxi-air-maxs-4260-454",
      "indoorUnitId": "iu-f32-mvbm60c28",
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
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-2430-ne-f52-mac36hwd",
      "slug": "maxi-air-maxs-2430-ne-f52-mac36hwd",
      "modelId": "model-maxi-air-maxs-2430",
      "outdoorUnitId": "ou-maxi-air-maxs-2430",
      "indoorUnitId": "iu-ne-f52-mac36hwd",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-4260-ahms-6020",
      "slug": "maxi-air-maxs-4260-ahms-6020",
      "modelId": "model-maxi-air-maxs-4260",
      "outdoorUnitId": "ou-maxi-air-maxs-4260",
      "indoorUnitId": "iu-ahms-6020",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-maxi-air-maxs-2430-454-f32-mvbm36a24",
      "slug": "maxi-air-maxs-2430-454-f32-mvbm36a24",
      "modelId": "model-maxi-air-maxs-2430-454",
      "outdoorUnitId": "ou-maxi-air-maxs-2430-454",
      "indoorUnitId": "iu-f32-mvbm36a24",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-maxi-air-epa",
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
