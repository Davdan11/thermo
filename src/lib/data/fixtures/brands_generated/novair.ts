import type { BrandDataset } from "../../types";

export const brand_novairDataset: BrandDataset = {
  "brand": {
    "id": "brand-novair",
    "slug": "novair",
    "name": "NOVAIR",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour NOVAIR",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-novair-epa",
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
      "id": "series-novair-lea-series",
      "slug": "novair-lea-series",
      "name": "LEA SERIES",
      "brandId": "brand-novair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série LEA SERIES de NOVAIR",
      "imageUrl": "/images/series/novair-novair-lea-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-novair-polar-series",
      "slug": "novair-polar-series",
      "name": "Polar Series",
      "brandId": "brand-novair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Polar Series de NOVAIR",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-novair-lea09sz35sk-o",
      "slug": "novair-lea09sz35sk-o",
      "name": "NOVAIR LEA09SZ35SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA09SZ35SK-O",
      "normalizedModelNumber": "lea09sz35sk-o",
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
      "id": "model-novair-lea09sz36-o",
      "slug": "novair-lea09sz36-o",
      "name": "NOVAIR LEA09SZ36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA09SZ36-O",
      "normalizedModelNumber": "lea09sz36-o",
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
      "id": "model-novair-lea20mz-3p-454-o",
      "slug": "novair-lea20mz-3p-454-o",
      "name": "NOVAIR LEA20MZ-3P-454-O*",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA20MZ-3P-454-O*",
      "normalizedModelNumber": "lea20mz-3p-454-o*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
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
      "id": "model-novair-lea20-mz-lct-454-o",
      "slug": "novair-lea20-mz-lct-454-o",
      "name": "NOVAIR LEA20-MZ-LCT- 454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA20-MZ-LCT- 454-O",
      "normalizedModelNumber": "lea20-mz-lct- 454-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
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
      "id": "model-novair-lea09sz25sk-o",
      "slug": "novair-lea09sz25sk-o",
      "name": "NOVAIR LEA09SZ25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA09SZ25SK-O",
      "normalizedModelNumber": "lea09sz25sk-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
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
      "id": "model-novair-lea28mz-4p-454-o",
      "slug": "novair-lea28mz-4p-454-o",
      "name": "NOVAIR LEA28MZ-4P-454-O*",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA28MZ-4P-454-O*",
      "normalizedModelNumber": "lea28mz-4p-454-o*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
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
      "id": "model-novair-lea27-mz-lct-454-o",
      "slug": "novair-lea27-mz-lct-454-o",
      "name": "NOVAIR LEA27-MZ-LCT- 454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA27-MZ-LCT- 454-O",
      "normalizedModelNumber": "lea27-mz-lct- 454-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
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
      "id": "model-novair-lea09sz26-o",
      "slug": "novair-lea09sz26-o",
      "name": "NOVAIR LEA09SZ26-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA09SZ26-O",
      "normalizedModelNumber": "lea09sz26-o",
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
      "id": "model-novair-lea12sz35sk-o",
      "slug": "novair-lea12sz35sk-o",
      "name": "NOVAIR LEA12SZ35SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA12SZ35SK-O",
      "normalizedModelNumber": "lea12sz35sk-o",
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
      "id": "model-novair-lea12sz26-o",
      "slug": "novair-lea12sz26-o",
      "name": "NOVAIR LEA12SZ26-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA12SZ26-O",
      "normalizedModelNumber": "lea12sz26-o",
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
      "id": "model-novair-lea06sz36-o",
      "slug": "novair-lea06sz36-o",
      "name": "NOVAIR LEA06SZ36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA06SZ36-O",
      "normalizedModelNumber": "lea06sz36-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
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
      "id": "model-novair-lea12sz36-o",
      "slug": "novair-lea12sz36-o",
      "name": "NOVAIR LEA12SZ36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA12SZ36-O",
      "normalizedModelNumber": "lea12sz36-o",
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
      "id": "model-novair-lea18mz3p26-o",
      "slug": "novair-lea18mz3p26-o",
      "name": "NOVAIR LEA18MZ3P26-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18MZ3P26-O",
      "normalizedModelNumber": "lea18mz3p26-o",
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
      "id": "model-novair-lea12sz-454-o",
      "slug": "novair-lea12sz-454-o",
      "name": "NOVAIR LEA12SZ-454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA12SZ-454-O",
      "normalizedModelNumber": "lea12sz-454-o",
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
      "id": "model-novair-leao9sz-454-o",
      "slug": "novair-leao9sz-454-o",
      "name": "NOVAIR LEAO9SZ-454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEAO9SZ-454-O",
      "normalizedModelNumber": "leao9sz-454-o",
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
      "id": "model-novair-lea36mz-5p-454-o",
      "slug": "novair-lea36mz-5p-454-o",
      "name": "NOVAIR LEA36MZ-5P-454-O*",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36MZ-5P-454-O*",
      "normalizedModelNumber": "lea36mz-5p-454-o*",
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
      "id": "model-novair-lea36-mz-lct-454-o",
      "slug": "novair-lea36-mz-lct-454-o",
      "name": "NOVAIR LEA36-MZ-LCT- 454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36-MZ-LCT- 454-O",
      "normalizedModelNumber": "lea36-mz-lct- 454-o",
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
      "id": "model-novair-lea24mz4p26-o",
      "slug": "novair-lea24mz4p26-o",
      "name": "NOVAIR LEA24MZ4P26-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24MZ4P26-O",
      "normalizedModelNumber": "lea24mz4p26-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27000,
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
      "id": "model-novair-lea20mz3p36-o",
      "slug": "novair-lea20mz3p36-o",
      "name": "NOVAIR LEA20MZ3P36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA20MZ3P36-O",
      "normalizedModelNumber": "lea20mz3p36-o",
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
      "id": "model-novair-lea12sz25sk-o",
      "slug": "novair-lea12sz25sk-o",
      "name": "NOVAIR LEA12SZ25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA12SZ25SK-O",
      "normalizedModelNumber": "lea12sz25sk-o",
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
      "id": "model-novair-lea18sz-r32-o",
      "slug": "novair-lea18sz-r32-o",
      "name": "NOVAIR LEA18SZ-R32-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ-R32-O",
      "normalizedModelNumber": "lea18sz-r32-o",
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
      "id": "model-novair-lea48mz-6p-454-o",
      "slug": "novair-lea48mz-6p-454-o",
      "name": "NOVAIR LEA48MZ-6P-454-O*",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA48MZ-6P-454-O*",
      "normalizedModelNumber": "lea48mz-6p-454-o*",
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
      "id": "model-novair-lea18sz26-o",
      "slug": "novair-lea18sz26-o",
      "name": "NOVAIR LEA18SZ26-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ26-O",
      "normalizedModelNumber": "lea18sz26-o",
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
      "id": "model-novair-lea18sz25sk-o",
      "slug": "novair-lea18sz25sk-o",
      "name": "NOVAIR LEA18SZ25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ25SK-O",
      "normalizedModelNumber": "lea18sz25sk-o",
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
      "id": "model-novair-lea12sz-r32-o",
      "slug": "novair-lea12sz-r32-o",
      "name": "NOVAIR LEA12SZ-R32-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA12SZ-R32-O",
      "normalizedModelNumber": "lea12sz-r32-o",
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
      "id": "model-novair-lea48-mz-lct-454-o",
      "slug": "novair-lea48-mz-lct-454-o",
      "name": "NOVAIR LEA48-MZ-LCT- 454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA48-MZ-LCT- 454-O",
      "normalizedModelNumber": "lea48-mz-lct- 454-o",
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
      "id": "model-novair-lea24sz26-o",
      "slug": "novair-lea24sz26-o",
      "name": "NOVAIR LEA24SZ26-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24SZ26-O",
      "normalizedModelNumber": "lea24sz26-o",
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
      "id": "model-novair-lea27mz-3p-25sk-o",
      "slug": "novair-lea27mz-3p-25sk-o",
      "name": "NOVAIR LEA27MZ-3P-25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA27MZ-3P-25SK-O",
      "normalizedModelNumber": "lea27mz-3p-25sk-o",
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
      "id": "model-novair-lea18sz-454-o",
      "slug": "novair-lea18sz-454-o",
      "name": "NOVAIR LEA18SZ-454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ-454-O",
      "normalizedModelNumber": "lea18sz-454-o",
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
      "id": "model-novair-lea36mz5p36-o",
      "slug": "novair-lea36mz5p36-o",
      "name": "NOVAIR LEA36MZ5P36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36MZ5P36-O",
      "normalizedModelNumber": "lea36mz5p36-o",
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
      "id": "model-novair-lea48mz6p36-o",
      "slug": "novair-lea48mz6p36-o",
      "name": "NOVAIR LEA48MZ6P36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA48MZ6P36-O",
      "normalizedModelNumber": "lea48mz6p36-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 47000,
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
      "id": "model-novair-lea30mz4p36-o",
      "slug": "novair-lea30mz4p36-o",
      "name": "NOVAIR LEA30MZ4P36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA30MZ4P36-O",
      "normalizedModelNumber": "lea30mz4p36-o",
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
      "id": "model-novair-lea28mz-3p-35sk-o",
      "slug": "novair-lea28mz-3p-35sk-o",
      "name": "NOVAIR LEA28MZ-3P-35SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA28MZ-3P-35SK-O",
      "normalizedModelNumber": "lea28mz-3p-35sk-o",
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
      "id": "model-novair-lea24sz-454-o",
      "slug": "novair-lea24sz-454-o",
      "name": "NOVAIR LEA24SZ-454-O",
      "seriesId": "series-novair-polar-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24SZ-454-O",
      "normalizedModelNumber": "lea24sz-454-o",
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
      "id": "model-novair-lea24sz35sk-o",
      "slug": "novair-lea24sz35sk-o",
      "name": "NOVAIR LEA24SZ35SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24SZ35SK-O",
      "normalizedModelNumber": "lea24sz35sk-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-novair-lea24sz36-o",
      "slug": "novair-lea24sz36-o",
      "name": "NOVAIR LEA24SZ36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24SZ36-O",
      "normalizedModelNumber": "lea24sz36-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-novair-lea55mz6p36-o",
      "slug": "novair-lea55mz6p36-o",
      "name": "NOVAIR LEA55MZ6P36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA55MZ6P36-O",
      "normalizedModelNumber": "lea55mz6p36-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53000,
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
      "id": "model-novair-lea36mz-4p-35sk-o",
      "slug": "novair-lea36mz-4p-35sk-o",
      "name": "NOVAIR LEA36MZ-4P-35SK-O*",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36MZ-4P-35SK-O*",
      "normalizedModelNumber": "lea36mz-4p-35sk-o*",
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
      "id": "model-novair-lea18sz35sk-o",
      "slug": "novair-lea18sz35sk-o",
      "name": "NOVAIR LEA18SZ35SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ35SK-O",
      "normalizedModelNumber": "lea18sz35sk-o",
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
      "id": "model-novair-lea20mz-2p-35sk-o",
      "slug": "novair-lea20mz-2p-35sk-o",
      "name": "NOVAIR LEA20MZ-2P-35SK-O*",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA20MZ-2P-35SK-O*",
      "normalizedModelNumber": "lea20mz-2p-35sk-o*",
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
      "id": "model-novair-lea24sz25sk-o",
      "slug": "novair-lea24sz25sk-o",
      "name": "NOVAIR LEA24SZ25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24SZ25SK-O",
      "normalizedModelNumber": "lea24sz25sk-o",
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
      "id": "model-novair-lea18sz36-o",
      "slug": "novair-lea18sz36-o",
      "name": "NOVAIR LEA18SZ36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ36-O",
      "normalizedModelNumber": "lea18sz36-o",
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
      "id": "model-novair-lea09sz15sk-o",
      "slug": "novair-lea09sz15sk-o",
      "name": "NOVAIR LEA09SZ15SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA09SZ15SK-O",
      "normalizedModelNumber": "lea09sz15sk-o",
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
      "id": "model-novair-lea18mz-2p-25sk-o",
      "slug": "novair-lea18mz-2p-25sk-o",
      "name": "NOVAIR LEA18MZ-2P-25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18MZ-2P-25SK-O",
      "normalizedModelNumber": "lea18mz-2p-25sk-o",
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
      "id": "model-novair-lea36mz-4p-25sk-o",
      "slug": "novair-lea36mz-4p-25sk-o",
      "name": "NOVAIR LEA36MZ-4P-25SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36MZ-4P-25SK-O",
      "normalizedModelNumber": "lea36mz-4p-25sk-o",
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
      "id": "model-novair-lea18sz15sk-o",
      "slug": "novair-lea18sz15sk-o",
      "name": "NOVAIR LEA18SZ15SK-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18SZ15SK-O",
      "normalizedModelNumber": "lea18sz15sk-o",
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
      "id": "model-novair-lea18cen36-o",
      "slug": "novair-lea18cen36-o",
      "name": "NOVAIR LEA18CEN36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18CEN36-O",
      "normalizedModelNumber": "lea18cen36-o",
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
      "id": "model-novair-lea24cen36-o",
      "slug": "novair-lea24cen36-o",
      "name": "NOVAIR LEA24CEN36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24CEN36-O",
      "normalizedModelNumber": "lea24cen36-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23000,
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
      "id": "model-novair-lea18-evox-30-o",
      "slug": "novair-lea18-evox-30-o",
      "name": "NOVAIR LEA18-EVOX-30-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA18-EVOX-30-O",
      "normalizedModelNumber": "lea18-evox-30-o",
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
      "id": "model-novair-lea36cen36-o",
      "slug": "novair-lea36cen36-o",
      "name": "NOVAIR LEA36CEN36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36CEN36-O",
      "normalizedModelNumber": "lea36cen36-o",
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
      "id": "model-novair-lea24-evox-30-o",
      "slug": "novair-lea24-evox-30-o",
      "name": "NOVAIR LEA24-EVOX-30-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA24-EVOX-30-O",
      "normalizedModelNumber": "lea24-evox-30-o",
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
      "id": "model-novair-lea30cen36-o",
      "slug": "novair-lea30cen36-o",
      "name": "NOVAIR LEA30CEN36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA30CEN36-O",
      "normalizedModelNumber": "lea30cen36-o",
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
      "id": "model-novair-lea48cen36-o",
      "slug": "novair-lea48cen36-o",
      "name": "NOVAIR LEA48CEN36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA48CEN36-O",
      "normalizedModelNumber": "lea48cen36-o",
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
      "id": "model-novair-lea30-evox-30-o",
      "slug": "novair-lea30-evox-30-o",
      "name": "NOVAIR LEA30-EVOX-30-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA30-EVOX-30-O",
      "normalizedModelNumber": "lea30-evox-30-o",
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
      "id": "model-novair-lea36-evox-30-o",
      "slug": "novair-lea36-evox-30-o",
      "name": "NOVAIR LEA36-EVOX-30-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA36-EVOX-30-O",
      "normalizedModelNumber": "lea36-evox-30-o",
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
      "id": "model-novair-lea60cen36-o",
      "slug": "novair-lea60cen36-o",
      "name": "NOVAIR LEA60CEN36-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA60CEN36-O",
      "normalizedModelNumber": "lea60cen36-o",
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
      "id": "model-novair-lea48-evox-30-o",
      "slug": "novair-lea48-evox-30-o",
      "name": "NOVAIR LEA48-EVOX-30-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA48-EVOX-30-O",
      "normalizedModelNumber": "lea48-evox-30-o",
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
      "id": "model-novair-lea60-evox-30-o",
      "slug": "novair-lea60-evox-30-o",
      "name": "NOVAIR LEA60-EVOX-30-O",
      "seriesId": "series-novair-lea-series",
      "brandId": "brand-novair",
      "modelNumber": "LEA60-EVOX-30-O",
      "normalizedModelNumber": "lea60-evox-30-o",
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
      "id": "ou-novair-lea09sz35sk-o",
      "modelNumber": "LEA09SZ35SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea09sz36-o",
      "modelNumber": "LEA09SZ36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea20mz-3p-454-o",
      "modelNumber": "LEA20MZ-3P-454-O*",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea20-mz-lct-454-o",
      "modelNumber": "LEA20-MZ-LCT- 454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea09sz25sk-o",
      "modelNumber": "LEA09SZ25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea28mz-4p-454-o",
      "modelNumber": "LEA28MZ-4P-454-O*",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea27-mz-lct-454-o",
      "modelNumber": "LEA27-MZ-LCT- 454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea09sz26-o",
      "modelNumber": "LEA09SZ26-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea12sz35sk-o",
      "modelNumber": "LEA12SZ35SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea12sz26-o",
      "modelNumber": "LEA12SZ26-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea06sz36-o",
      "modelNumber": "LEA06SZ36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea12sz36-o",
      "modelNumber": "LEA12SZ36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea18mz3p26-o",
      "modelNumber": "LEA18MZ3P26-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea12sz-454-o",
      "modelNumber": "LEA12SZ-454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-leao9sz-454-o",
      "modelNumber": "LEAO9SZ-454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea36mz-5p-454-o",
      "modelNumber": "LEA36MZ-5P-454-O*",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea36-mz-lct-454-o",
      "modelNumber": "LEA36-MZ-LCT- 454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea24mz4p26-o",
      "modelNumber": "LEA24MZ4P26-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea20mz3p36-o",
      "modelNumber": "LEA20MZ3P36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea12sz25sk-o",
      "modelNumber": "LEA12SZ25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18sz-r32-o",
      "modelNumber": "LEA18SZ-R32-O",
      "brandId": "brand-novair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-novair-lea48mz-6p-454-o",
      "modelNumber": "LEA48MZ-6P-454-O*",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea18sz26-o",
      "modelNumber": "LEA18SZ26-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea18sz25sk-o",
      "modelNumber": "LEA18SZ25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea12sz-r32-o",
      "modelNumber": "LEA12SZ-R32-O",
      "brandId": "brand-novair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-novair-lea48-mz-lct-454-o",
      "modelNumber": "LEA48-MZ-LCT- 454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea24sz26-o",
      "modelNumber": "LEA24SZ26-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea27mz-3p-25sk-o",
      "modelNumber": "LEA27MZ-3P-25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18sz-454-o",
      "modelNumber": "LEA18SZ-454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea36mz5p36-o",
      "modelNumber": "LEA36MZ5P36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea48mz6p36-o",
      "modelNumber": "LEA48MZ6P36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea30mz4p36-o",
      "modelNumber": "LEA30MZ4P36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea28mz-3p-35sk-o",
      "modelNumber": "LEA28MZ-3P-35SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea24sz-454-o",
      "modelNumber": "LEA24SZ-454-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea24sz35sk-o",
      "modelNumber": "LEA24SZ35SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea24sz36-o",
      "modelNumber": "LEA24SZ36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea55mz6p36-o",
      "modelNumber": "LEA55MZ6P36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea36mz-4p-35sk-o",
      "modelNumber": "LEA36MZ-4P-35SK-O*",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18sz35sk-o",
      "modelNumber": "LEA18SZ35SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea20mz-2p-35sk-o",
      "modelNumber": "LEA20MZ-2P-35SK-O*",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea24sz25sk-o",
      "modelNumber": "LEA24SZ25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18sz36-o",
      "modelNumber": "LEA18SZ36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea09sz15sk-o",
      "modelNumber": "LEA09SZ15SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18mz-2p-25sk-o",
      "modelNumber": "LEA18MZ-2P-25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea36mz-4p-25sk-o",
      "modelNumber": "LEA36MZ-4P-25SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18sz15sk-o",
      "modelNumber": "LEA18SZ15SK-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea18cen36-o",
      "modelNumber": "LEA18CEN36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea24cen36-o",
      "modelNumber": "LEA24CEN36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea18-evox-30-o",
      "modelNumber": "LEA18-EVOX-30-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea36cen36-o",
      "modelNumber": "LEA36CEN36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea24-evox-30-o",
      "modelNumber": "LEA24-EVOX-30-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea30cen36-o",
      "modelNumber": "LEA30CEN36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea48cen36-o",
      "modelNumber": "LEA48CEN36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea30-evox-30-o",
      "modelNumber": "LEA30-EVOX-30-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea36-evox-30-o",
      "modelNumber": "LEA36-EVOX-30-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea60cen36-o",
      "modelNumber": "LEA60CEN36-O",
      "brandId": "brand-novair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-novair-lea48-evox-30-o",
      "modelNumber": "LEA48-EVOX-30-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-novair-lea60-evox-30-o",
      "modelNumber": "LEA60-EVOX-30-O",
      "brandId": "brand-novair",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-2lea09uusk-i",
      "modelNumber": "2LEA09UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-4lea09usk-i",
      "modelNumber": "4LEA09USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea09consk-i",
      "modelNumber": "LEA09CONSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49774",
      "modelNumber": "IU-49774",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49771",
      "modelNumber": "IU-49771",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-2lea06uusk-i",
      "modelNumber": "2LEA06UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49790",
      "modelNumber": "IU-49790",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49787",
      "modelNumber": "IU-49787",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea09uusk-i",
      "modelNumber": "LEA09UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-3lea09usk-i",
      "modelNumber": "3LEA09USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-2lea12uusk-i",
      "modelNumber": "2LEA12UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-4lea12usk-i",
      "modelNumber": "4LEA12USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-4lea06usk-i",
      "modelNumber": "4LEA06USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-3lea06usk-i",
      "modelNumber": "3LEA06USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49753",
      "modelNumber": "IU-49753",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea12sz-454-i",
      "modelNumber": "LEA12SZ-454-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-leao9sz-454-i",
      "modelNumber": "LEAO9SZ-454-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea12consk-i",
      "modelNumber": "LEA12CONSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49796",
      "modelNumber": "IU-49796",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49792",
      "modelNumber": "IU-49792",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49776",
      "modelNumber": "IU-49776",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49775",
      "modelNumber": "IU-49775",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-3lea12usk-i",
      "modelNumber": "3LEA12USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea18sz-r32-i",
      "modelNumber": "LEA18SZ-R32-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49799",
      "modelNumber": "IU-49799",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-3lea18usk-i",
      "modelNumber": "3LEA18USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea18uusk-i",
      "modelNumber": "LEA18UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea12sz-r32-i",
      "modelNumber": "LEA12SZ-R32-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49798",
      "modelNumber": "IU-49798",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea16consk-i",
      "modelNumber": "LEA16CONSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-3lea24usk-i",
      "modelNumber": "3LEA24USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49788",
      "modelNumber": "IU-49788",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea18sz-454-i",
      "modelNumber": "LEA18SZ-454-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-2lea18uusk-i",
      "modelNumber": "2LEA18UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-4lea18usk-i",
      "modelNumber": "4LEA18USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea12uusk-i",
      "modelNumber": "LEA12UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49797",
      "modelNumber": "IU-49797",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-4lea24usk-i",
      "modelNumber": "4LEA24USK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49800",
      "modelNumber": "IU-49800",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49791",
      "modelNumber": "IU-49791",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49789",
      "modelNumber": "IU-49789",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea09cass-i",
      "modelNumber": "LEA09CASS-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea24sz-454-i",
      "modelNumber": "LEA24SZ-454-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea24uusk-i",
      "modelNumber": "LEA24UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea12cass-i",
      "modelNumber": "LEA12CASS-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49801",
      "modelNumber": "IU-49801",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49795",
      "modelNumber": "IU-49795",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49773",
      "modelNumber": "IU-49773",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-2lea24uusk-i",
      "modelNumber": "2LEA24UUSK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea24cass-i",
      "modelNumber": "LEA24CASS-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea0915sk-i",
      "modelNumber": "LEA0915SK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea06duct-i",
      "modelNumber": "LEA06DUCT-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea09duct-i",
      "modelNumber": "LEA09DUCT-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49752",
      "modelNumber": "IU-49752",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea18cass-i",
      "modelNumber": "LEA18CASS-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49772",
      "modelNumber": "IU-49772",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea18duct-i",
      "modelNumber": "LEA18DUCT-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49793",
      "modelNumber": "IU-49793",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49794",
      "modelNumber": "IU-49794",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea12duct-i",
      "modelNumber": "LEA12DUCT-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea1815sk-i",
      "modelNumber": "LEA1815SK-I",
      "brandId": "brand-novair",
      "type": "wall-single"
    },
    {
      "id": "iu-lea18cen36-i",
      "modelNumber": "LEA18CEN36-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea24cen36-i",
      "modelNumber": "LEA24CEN36-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea18-evox-30-i",
      "modelNumber": "LEA18-EVOX-30-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea36cen36-i",
      "modelNumber": "LEA36CEN36-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea24-evox-30-i",
      "modelNumber": "LEA24-EVOX-30-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea30cen36-i",
      "modelNumber": "LEA30CEN36-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea48cen36-i",
      "modelNumber": "LEA48CEN36-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-1824-acoil-410a",
      "modelNumber": "LEA-18/24-ACOIL-410A",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea30-evox-30-i",
      "modelNumber": "LEA30-EVOX-30-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-1824acoil1452118",
      "modelNumber": "LEA-18/24ACOIL14.5*21*18",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-1824acoil1752118",
      "modelNumber": "LEA-18/24ACOIL17.5*21*18",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea36-evox-30-i",
      "modelNumber": "LEA36-EVOX-30-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-3036acoil212124",
      "modelNumber": "LEA-30/36ACOIL21*21*24",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-3036acoil1752124",
      "modelNumber": "LEA-30/36ACOIL17.5*21*24",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea60cen36-i",
      "modelNumber": "LEA60CEN36-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-4860acoil212128",
      "modelNumber": "LEA-48/60ACOIL21*21*28",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea48-evox-30-i",
      "modelNumber": "LEA48-EVOX-30-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-3036-acoil-410a",
      "modelNumber": "LEA-30/36-ACOIL-410A",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-3036acoil1452124",
      "modelNumber": "LEA-30/36ACOIL14.5*21*24",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea60-evox-30-i",
      "modelNumber": "LEA60-EVOX-30-I",
      "brandId": "brand-novair",
      "type": "central-ducted"
    },
    {
      "id": "iu-lea-4860acoil2452128",
      "modelNumber": "LEA-48/60ACOIL24.5*21*28",
      "brandId": "brand-novair",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-novair-lea09sz35sk-o-2lea09uusk-i",
      "slug": "novair-lea09sz35sk-o-2lea09uusk-i",
      "modelId": "model-novair-lea09sz35sk-o",
      "outdoorUnitId": "ou-novair-lea09sz35sk-o",
      "indoorUnitId": "iu-2lea09uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 28.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz36-o-4lea09usk-i",
      "slug": "novair-lea09sz36-o-4lea09usk-i",
      "modelId": "model-novair-lea09sz36-o",
      "outdoorUnitId": "ou-novair-lea09sz36-o",
      "indoorUnitId": "iu-4lea09usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz36-o-lea09consk-i",
      "slug": "novair-lea09sz36-o-lea09consk-i",
      "modelId": "model-novair-lea09sz36-o",
      "outdoorUnitId": "ou-novair-lea09sz36-o",
      "indoorUnitId": "iu-lea09consk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.2,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea20mz-3p-454-o-iu-49774",
      "slug": "novair-lea20mz-3p-454-o-iu-49774",
      "modelId": "model-novair-lea20mz-3p-454-o",
      "outdoorUnitId": "ou-novair-lea20mz-3p-454-o",
      "indoorUnitId": "iu-iu-49774",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea20-mz-lct-454-o-iu-49771",
      "slug": "novair-lea20-mz-lct-454-o-iu-49771",
      "modelId": "model-novair-lea20-mz-lct-454-o",
      "outdoorUnitId": "ou-novair-lea20-mz-lct-454-o",
      "indoorUnitId": "iu-iu-49771",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz25sk-o-2lea06uusk-i",
      "slug": "novair-lea09sz25sk-o-2lea06uusk-i",
      "modelId": "model-novair-lea09sz25sk-o",
      "outdoorUnitId": "ou-novair-lea09sz25sk-o",
      "indoorUnitId": "iu-2lea06uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 13.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea28mz-4p-454-o-iu-49790",
      "slug": "novair-lea28mz-4p-454-o-iu-49790",
      "modelId": "model-novair-lea28mz-4p-454-o",
      "outdoorUnitId": "ou-novair-lea28mz-4p-454-o",
      "indoorUnitId": "iu-iu-49790",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea27-mz-lct-454-o-iu-49787",
      "slug": "novair-lea27-mz-lct-454-o-iu-49787",
      "modelId": "model-novair-lea27-mz-lct-454-o",
      "outdoorUnitId": "ou-novair-lea27-mz-lct-454-o",
      "indoorUnitId": "iu-iu-49787",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz35sk-o-lea09uusk-i",
      "slug": "novair-lea09sz35sk-o-lea09uusk-i",
      "modelId": "model-novair-lea09sz35sk-o",
      "outdoorUnitId": "ou-novair-lea09sz35sk-o",
      "indoorUnitId": "iu-lea09uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz26-o-lea09consk-i",
      "slug": "novair-lea09sz26-o-lea09consk-i",
      "modelId": "model-novair-lea09sz26-o",
      "outdoorUnitId": "ou-novair-lea09sz26-o",
      "indoorUnitId": "iu-lea09consk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 13.9,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz36-o-3lea09usk-i",
      "slug": "novair-lea09sz36-o-3lea09usk-i",
      "modelId": "model-novair-lea09sz36-o",
      "outdoorUnitId": "ou-novair-lea09sz36-o",
      "indoorUnitId": "iu-3lea09usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz26-o-4lea09usk-i",
      "slug": "novair-lea09sz26-o-4lea09usk-i",
      "modelId": "model-novair-lea09sz26-o",
      "outdoorUnitId": "ou-novair-lea09sz26-o",
      "indoorUnitId": "iu-4lea09usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.8,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz35sk-o-2lea12uusk-i",
      "slug": "novair-lea12sz35sk-o-2lea12uusk-i",
      "modelId": "model-novair-lea12sz35sk-o",
      "outdoorUnitId": "ou-novair-lea12sz35sk-o",
      "indoorUnitId": "iu-2lea12uusk-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz26-o-4lea12usk-i",
      "slug": "novair-lea12sz26-o-4lea12usk-i",
      "modelId": "model-novair-lea12sz26-o",
      "outdoorUnitId": "ou-novair-lea12sz26-o",
      "indoorUnitId": "iu-4lea12usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea06sz36-o-4lea06usk-i",
      "slug": "novair-lea06sz36-o-4lea06usk-i",
      "modelId": "model-novair-lea06sz36-o",
      "outdoorUnitId": "ou-novair-lea06sz36-o",
      "indoorUnitId": "iu-4lea06usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 14.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz25sk-o-2lea09uusk-i",
      "slug": "novair-lea09sz25sk-o-2lea09uusk-i",
      "modelId": "model-novair-lea09sz25sk-o",
      "outdoorUnitId": "ou-novair-lea09sz25sk-o",
      "indoorUnitId": "iu-2lea09uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz36-o-4lea12usk-i",
      "slug": "novair-lea12sz36-o-4lea12usk-i",
      "modelId": "model-novair-lea12sz36-o",
      "outdoorUnitId": "ou-novair-lea12sz36-o",
      "indoorUnitId": "iu-4lea12usk-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea06sz36-o-3lea06usk-i",
      "slug": "novair-lea06sz36-o-3lea06usk-i",
      "modelId": "model-novair-lea06sz36-o",
      "outdoorUnitId": "ou-novair-lea06sz36-o",
      "indoorUnitId": "iu-3lea06usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18mz3p26-o-iu-49753",
      "slug": "novair-lea18mz3p26-o-iu-49753",
      "modelId": "model-novair-lea18mz3p26-o",
      "outdoorUnitId": "ou-novair-lea18mz3p26-o",
      "indoorUnitId": "iu-iu-49753",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz-454-o-lea12sz-454-i",
      "slug": "novair-lea12sz-454-o-lea12sz-454-i",
      "modelId": "model-novair-lea12sz-454-o",
      "outdoorUnitId": "ou-novair-lea12sz-454-o",
      "indoorUnitId": "iu-lea12sz-454-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-leao9sz-454-o-leao9sz-454-i",
      "slug": "novair-leao9sz-454-o-leao9sz-454-i",
      "modelId": "model-novair-leao9sz-454-o",
      "outdoorUnitId": "ou-novair-leao9sz-454-o",
      "indoorUnitId": "iu-leao9sz-454-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz36-o-lea12consk-i",
      "slug": "novair-lea12sz36-o-lea12consk-i",
      "modelId": "model-novair-lea12sz36-o",
      "outdoorUnitId": "ou-novair-lea12sz36-o",
      "indoorUnitId": "iu-lea12consk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36mz-5p-454-o-iu-49796",
      "slug": "novair-lea36mz-5p-454-o-iu-49796",
      "modelId": "model-novair-lea36mz-5p-454-o",
      "outdoorUnitId": "ou-novair-lea36mz-5p-454-o",
      "indoorUnitId": "iu-iu-49796",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36-mz-lct-454-o-iu-49792",
      "slug": "novair-lea36-mz-lct-454-o-iu-49792",
      "modelId": "model-novair-lea36-mz-lct-454-o",
      "outdoorUnitId": "ou-novair-lea36-mz-lct-454-o",
      "indoorUnitId": "iu-iu-49792",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24mz4p26-o-iu-49776",
      "slug": "novair-lea24mz4p26-o-iu-49776",
      "modelId": "model-novair-lea24mz4p26-o",
      "outdoorUnitId": "ou-novair-lea24mz4p26-o",
      "indoorUnitId": "iu-iu-49776",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea20mz3p36-o-iu-49775",
      "slug": "novair-lea20mz3p36-o-iu-49775",
      "modelId": "model-novair-lea20mz3p36-o",
      "outdoorUnitId": "ou-novair-lea20mz3p36-o",
      "indoorUnitId": "iu-iu-49775",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz25sk-o-2lea12uusk-i",
      "slug": "novair-lea12sz25sk-o-2lea12uusk-i",
      "modelId": "model-novair-lea12sz25sk-o",
      "outdoorUnitId": "ou-novair-lea12sz25sk-o",
      "indoorUnitId": "iu-2lea12uusk-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz26-o-lea12consk-i",
      "slug": "novair-lea12sz26-o-lea12consk-i",
      "modelId": "model-novair-lea12sz26-o",
      "outdoorUnitId": "ou-novair-lea12sz26-o",
      "indoorUnitId": "iu-lea12consk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz26-o-3lea09usk-i",
      "slug": "novair-lea09sz26-o-3lea09usk-i",
      "modelId": "model-novair-lea09sz26-o",
      "outdoorUnitId": "ou-novair-lea09sz26-o",
      "indoorUnitId": "iu-3lea09usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz36-o-3lea12usk-i",
      "slug": "novair-lea12sz36-o-3lea12usk-i",
      "modelId": "model-novair-lea12sz36-o",
      "outdoorUnitId": "ou-novair-lea12sz36-o",
      "indoorUnitId": "iu-3lea12usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz-r32-o-lea18sz-r32-i",
      "slug": "novair-lea18sz-r32-o-lea18sz-r32-i",
      "modelId": "model-novair-lea18sz-r32-o",
      "outdoorUnitId": "ou-novair-lea18sz-r32-o",
      "indoorUnitId": "iu-lea18sz-r32-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea48mz-6p-454-o-iu-49799",
      "slug": "novair-lea48mz-6p-454-o-iu-49799",
      "modelId": "model-novair-lea48mz-6p-454-o",
      "outdoorUnitId": "ou-novair-lea48mz-6p-454-o",
      "indoorUnitId": "iu-iu-49799",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz26-o-3lea18usk-i",
      "slug": "novair-lea18sz26-o-3lea18usk-i",
      "modelId": "model-novair-lea18sz26-o",
      "outdoorUnitId": "ou-novair-lea18sz26-o",
      "indoorUnitId": "iu-3lea18usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz25sk-o-lea18uusk-i",
      "slug": "novair-lea18sz25sk-o-lea18uusk-i",
      "modelId": "model-novair-lea18sz25sk-o",
      "outdoorUnitId": "ou-novair-lea18sz25sk-o",
      "indoorUnitId": "iu-lea18uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz25sk-o-lea09uusk-i",
      "slug": "novair-lea09sz25sk-o-lea09uusk-i",
      "modelId": "model-novair-lea09sz25sk-o",
      "outdoorUnitId": "ou-novair-lea09sz25sk-o",
      "indoorUnitId": "iu-lea09uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz-r32-o-lea12sz-r32-i",
      "slug": "novair-lea12sz-r32-o-lea12sz-r32-i",
      "modelId": "model-novair-lea12sz-r32-o",
      "outdoorUnitId": "ou-novair-lea12sz-r32-o",
      "indoorUnitId": "iu-lea12sz-r32-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea48-mz-lct-454-o-iu-49798",
      "slug": "novair-lea48-mz-lct-454-o-iu-49798",
      "modelId": "model-novair-lea48-mz-lct-454-o",
      "outdoorUnitId": "ou-novair-lea48-mz-lct-454-o",
      "indoorUnitId": "iu-iu-49798",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz26-o-lea16consk-i",
      "slug": "novair-lea18sz26-o-lea16consk-i",
      "modelId": "model-novair-lea18sz26-o",
      "outdoorUnitId": "ou-novair-lea18sz26-o",
      "indoorUnitId": "iu-lea16consk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.8,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz26-o-3lea24usk-i",
      "slug": "novair-lea24sz26-o-3lea24usk-i",
      "modelId": "model-novair-lea24sz26-o",
      "outdoorUnitId": "ou-novair-lea24sz26-o",
      "indoorUnitId": "iu-3lea24usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea27mz-3p-25sk-o-iu-49788",
      "slug": "novair-lea27mz-3p-25sk-o-iu-49788",
      "modelId": "model-novair-lea27mz-3p-25sk-o",
      "outdoorUnitId": "ou-novair-lea27mz-3p-25sk-o",
      "indoorUnitId": "iu-iu-49788",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz-454-o-lea18sz-454-i",
      "slug": "novair-lea18sz-454-o-lea18sz-454-i",
      "modelId": "model-novair-lea18sz-454-o",
      "outdoorUnitId": "ou-novair-lea18sz-454-o",
      "indoorUnitId": "iu-lea18sz-454-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz25sk-o-2lea18uusk-i",
      "slug": "novair-lea18sz25sk-o-2lea18uusk-i",
      "modelId": "model-novair-lea18sz25sk-o",
      "outdoorUnitId": "ou-novair-lea18sz25sk-o",
      "indoorUnitId": "iu-2lea18uusk-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz26-o-4lea18usk-i",
      "slug": "novair-lea18sz26-o-4lea18usk-i",
      "modelId": "model-novair-lea18sz26-o",
      "outdoorUnitId": "ou-novair-lea18sz26-o",
      "indoorUnitId": "iu-4lea18usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz25sk-o-lea12uusk-i",
      "slug": "novair-lea12sz25sk-o-lea12uusk-i",
      "modelId": "model-novair-lea12sz25sk-o",
      "outdoorUnitId": "ou-novair-lea12sz25sk-o",
      "indoorUnitId": "iu-lea12uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz35sk-o-lea12uusk-i",
      "slug": "novair-lea12sz35sk-o-lea12uusk-i",
      "modelId": "model-novair-lea12sz35sk-o",
      "outdoorUnitId": "ou-novair-lea12sz35sk-o",
      "indoorUnitId": "iu-lea12uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz26-o-3lea12usk-i",
      "slug": "novair-lea12sz26-o-3lea12usk-i",
      "modelId": "model-novair-lea12sz26-o",
      "outdoorUnitId": "ou-novair-lea12sz26-o",
      "indoorUnitId": "iu-3lea12usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36mz5p36-o-iu-49797",
      "slug": "novair-lea36mz5p36-o-iu-49797",
      "modelId": "model-novair-lea36mz5p36-o",
      "outdoorUnitId": "ou-novair-lea36mz5p36-o",
      "indoorUnitId": "iu-iu-49797",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz26-o-4lea24usk-i",
      "slug": "novair-lea24sz26-o-4lea24usk-i",
      "modelId": "model-novair-lea24sz26-o",
      "outdoorUnitId": "ou-novair-lea24sz26-o",
      "indoorUnitId": "iu-4lea24usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea48mz6p36-o-iu-49800",
      "slug": "novair-lea48mz6p36-o-iu-49800",
      "modelId": "model-novair-lea48mz6p36-o",
      "outdoorUnitId": "ou-novair-lea48mz6p36-o",
      "indoorUnitId": "iu-iu-49800",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30mz4p36-o-iu-49791",
      "slug": "novair-lea30mz4p36-o-iu-49791",
      "modelId": "model-novair-lea30mz4p36-o",
      "outdoorUnitId": "ou-novair-lea30mz4p36-o",
      "indoorUnitId": "iu-iu-49791",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea28mz-3p-35sk-o-iu-49789",
      "slug": "novair-lea28mz-3p-35sk-o-iu-49789",
      "modelId": "model-novair-lea28mz-3p-35sk-o",
      "outdoorUnitId": "ou-novair-lea28mz-3p-35sk-o",
      "indoorUnitId": "iu-iu-49789",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.6,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz36-o-lea09cass-i",
      "slug": "novair-lea09sz36-o-lea09cass-i",
      "modelId": "model-novair-lea09sz36-o",
      "outdoorUnitId": "ou-novair-lea09sz36-o",
      "indoorUnitId": "iu-lea09cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.6,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz-454-o-lea24sz-454-i",
      "slug": "novair-lea24sz-454-o-lea24sz-454-i",
      "modelId": "model-novair-lea24sz-454-o",
      "outdoorUnitId": "ou-novair-lea24sz-454-o",
      "indoorUnitId": "iu-lea24sz-454-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz35sk-o-lea24uusk-i",
      "slug": "novair-lea24sz35sk-o-lea24uusk-i",
      "modelId": "model-novair-lea24sz35sk-o",
      "outdoorUnitId": "ou-novair-lea24sz35sk-o",
      "indoorUnitId": "iu-lea24uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz36-o-3lea24usk-i",
      "slug": "novair-lea24sz36-o-3lea24usk-i",
      "modelId": "model-novair-lea24sz36-o",
      "outdoorUnitId": "ou-novair-lea24sz36-o",
      "indoorUnitId": "iu-3lea24usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 13.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz36-o-lea12cass-i",
      "slug": "novair-lea12sz36-o-lea12cass-i",
      "modelId": "model-novair-lea12sz36-o",
      "outdoorUnitId": "ou-novair-lea12sz36-o",
      "indoorUnitId": "iu-lea12cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea55mz6p36-o-iu-49801",
      "slug": "novair-lea55mz6p36-o-iu-49801",
      "modelId": "model-novair-lea55mz6p36-o",
      "outdoorUnitId": "ou-novair-lea55mz6p36-o",
      "indoorUnitId": "iu-iu-49801",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36mz-4p-35sk-o-iu-49795",
      "slug": "novair-lea36mz-4p-35sk-o-iu-49795",
      "modelId": "model-novair-lea36mz-4p-35sk-o",
      "outdoorUnitId": "ou-novair-lea36mz-4p-35sk-o",
      "indoorUnitId": "iu-iu-49795",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz35sk-o-lea18uusk-i",
      "slug": "novair-lea18sz35sk-o-lea18uusk-i",
      "modelId": "model-novair-lea18sz35sk-o",
      "outdoorUnitId": "ou-novair-lea18sz35sk-o",
      "indoorUnitId": "iu-lea18uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea20mz-2p-35sk-o-iu-49773",
      "slug": "novair-lea20mz-2p-35sk-o-iu-49773",
      "modelId": "model-novair-lea20mz-2p-35sk-o",
      "outdoorUnitId": "ou-novair-lea20mz-2p-35sk-o",
      "indoorUnitId": "iu-iu-49773",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz25sk-o-2lea24uusk-i",
      "slug": "novair-lea24sz25sk-o-2lea24uusk-i",
      "modelId": "model-novair-lea24sz25sk-o",
      "outdoorUnitId": "ou-novair-lea24sz25sk-o",
      "indoorUnitId": "iu-2lea24uusk-i",
      "minHeatingTempC": -15,
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz26-o-lea24cass-i",
      "slug": "novair-lea24sz26-o-lea24cass-i",
      "modelId": "model-novair-lea24sz26-o",
      "outdoorUnitId": "ou-novair-lea24sz26-o",
      "indoorUnitId": "iu-lea24cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz36-o-3lea18usk-i",
      "slug": "novair-lea18sz36-o-3lea18usk-i",
      "modelId": "model-novair-lea18sz36-o",
      "outdoorUnitId": "ou-novair-lea18sz36-o",
      "indoorUnitId": "iu-3lea18usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz26-o-lea09cass-i",
      "slug": "novair-lea09sz26-o-lea09cass-i",
      "modelId": "model-novair-lea09sz26-o",
      "outdoorUnitId": "ou-novair-lea09sz26-o",
      "indoorUnitId": "iu-lea09cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz35sk-o-2lea24uusk-i",
      "slug": "novair-lea24sz35sk-o-2lea24uusk-i",
      "modelId": "model-novair-lea24sz35sk-o",
      "outdoorUnitId": "ou-novair-lea24sz35sk-o",
      "indoorUnitId": "iu-2lea24uusk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz35sk-o-2lea18uusk-i",
      "slug": "novair-lea18sz35sk-o-2lea18uusk-i",
      "modelId": "model-novair-lea18sz35sk-o",
      "outdoorUnitId": "ou-novair-lea18sz35sk-o",
      "indoorUnitId": "iu-2lea18uusk-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz15sk-o-lea0915sk-i",
      "slug": "novair-lea09sz15sk-o-lea0915sk-i",
      "modelId": "model-novair-lea09sz15sk-o",
      "outdoorUnitId": "ou-novair-lea09sz15sk-o",
      "indoorUnitId": "iu-lea0915sk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz36-o-4lea18usk-i",
      "slug": "novair-lea18sz36-o-4lea18usk-i",
      "modelId": "model-novair-lea18sz36-o",
      "outdoorUnitId": "ou-novair-lea18sz36-o",
      "indoorUnitId": "iu-4lea18usk-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea06sz36-o-lea06duct-i",
      "slug": "novair-lea06sz36-o-lea06duct-i",
      "modelId": "model-novair-lea06sz36-o",
      "outdoorUnitId": "ou-novair-lea06sz36-o",
      "indoorUnitId": "iu-lea06duct-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz36-o-lea09duct-i",
      "slug": "novair-lea09sz36-o-lea09duct-i",
      "modelId": "model-novair-lea09sz36-o",
      "outdoorUnitId": "ou-novair-lea09sz36-o",
      "indoorUnitId": "iu-lea09duct-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 12.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz26-o-lea12cass-i",
      "slug": "novair-lea12sz26-o-lea12cass-i",
      "modelId": "model-novair-lea12sz26-o",
      "outdoorUnitId": "ou-novair-lea12sz26-o",
      "indoorUnitId": "iu-lea12cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18mz-2p-25sk-o-iu-49752",
      "slug": "novair-lea18mz-2p-25sk-o-iu-49752",
      "modelId": "model-novair-lea18mz-2p-25sk-o",
      "outdoorUnitId": "ou-novair-lea18mz-2p-25sk-o",
      "indoorUnitId": "iu-iu-49752",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz36-o-4lea24usk-i",
      "slug": "novair-lea24sz36-o-4lea24usk-i",
      "modelId": "model-novair-lea24sz36-o",
      "outdoorUnitId": "ou-novair-lea24sz36-o",
      "indoorUnitId": "iu-4lea24usk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 13.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24sz36-o-lea24cass-i",
      "slug": "novair-lea24sz36-o-lea24cass-i",
      "modelId": "model-novair-lea24sz36-o",
      "outdoorUnitId": "ou-novair-lea24sz36-o",
      "indoorUnitId": "iu-lea24cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz26-o-lea18cass-i",
      "slug": "novair-lea18sz26-o-lea18cass-i",
      "modelId": "model-novair-lea18sz26-o",
      "outdoorUnitId": "ou-novair-lea18sz26-o",
      "indoorUnitId": "iu-lea18cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.7,
      "hspf2": 11.4,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea20mz-2p-35sk-o-iu-49772",
      "slug": "novair-lea20mz-2p-35sk-o-iu-49772",
      "modelId": "model-novair-lea20mz-2p-35sk-o",
      "outdoorUnitId": "ou-novair-lea20mz-2p-35sk-o",
      "indoorUnitId": "iu-iu-49772",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz26-o-lea18duct-i",
      "slug": "novair-lea18sz26-o-lea18duct-i",
      "modelId": "model-novair-lea18sz26-o",
      "outdoorUnitId": "ou-novair-lea18sz26-o",
      "indoorUnitId": "iu-lea18duct-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz36-o-lea16consk-i",
      "slug": "novair-lea18sz36-o-lea16consk-i",
      "modelId": "model-novair-lea18sz36-o",
      "outdoorUnitId": "ou-novair-lea18sz36-o",
      "indoorUnitId": "iu-lea16consk-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36mz-4p-25sk-o-iu-49793",
      "slug": "novair-lea36mz-4p-25sk-o-iu-49793",
      "modelId": "model-novair-lea36mz-4p-25sk-o",
      "outdoorUnitId": "ou-novair-lea36mz-4p-25sk-o",
      "indoorUnitId": "iu-iu-49793",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz36-o-lea18cass-i",
      "slug": "novair-lea18sz36-o-lea18cass-i",
      "modelId": "model-novair-lea18sz36-o",
      "outdoorUnitId": "ou-novair-lea18sz36-o",
      "indoorUnitId": "iu-lea18cass-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36mz-4p-35sk-o-iu-49794",
      "slug": "novair-lea36mz-4p-35sk-o-iu-49794",
      "modelId": "model-novair-lea36mz-4p-35sk-o",
      "outdoorUnitId": "ou-novair-lea36mz-4p-35sk-o",
      "indoorUnitId": "iu-iu-49794",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz36-o-lea12duct-i",
      "slug": "novair-lea12sz36-o-lea12duct-i",
      "modelId": "model-novair-lea12sz36-o",
      "outdoorUnitId": "ou-novair-lea12sz36-o",
      "indoorUnitId": "iu-lea12duct-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea09sz26-o-lea09duct-i",
      "slug": "novair-lea09sz26-o-lea09duct-i",
      "modelId": "model-novair-lea09sz26-o",
      "outdoorUnitId": "ou-novair-lea09sz26-o",
      "indoorUnitId": "iu-lea09duct-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz15sk-o-lea1815sk-i",
      "slug": "novair-lea18sz15sk-o-lea1815sk-i",
      "modelId": "model-novair-lea18sz15sk-o",
      "outdoorUnitId": "ou-novair-lea18sz15sk-o",
      "indoorUnitId": "iu-lea1815sk-i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea12sz26-o-lea12duct-i",
      "slug": "novair-lea12sz26-o-lea12duct-i",
      "modelId": "model-novair-lea12sz26-o",
      "outdoorUnitId": "ou-novair-lea12sz26-o",
      "indoorUnitId": "iu-lea12duct-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18cen36-o-lea18cen36-i",
      "slug": "novair-lea18cen36-o-lea18cen36-i",
      "modelId": "model-novair-lea18cen36-o",
      "outdoorUnitId": "ou-novair-lea18cen36-o",
      "indoorUnitId": "iu-lea18cen36-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24cen36-o-lea24cen36-i",
      "slug": "novair-lea24cen36-o-lea24cen36-i",
      "modelId": "model-novair-lea24cen36-o",
      "outdoorUnitId": "ou-novair-lea24cen36-o",
      "indoorUnitId": "iu-lea24cen36-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18-evox-30-o-lea18-evox-30-i",
      "slug": "novair-lea18-evox-30-o-lea18-evox-30-i",
      "modelId": "model-novair-lea18-evox-30-o",
      "outdoorUnitId": "ou-novair-lea18-evox-30-o",
      "indoorUnitId": "iu-lea18-evox-30-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18sz36-o-lea18duct-i",
      "slug": "novair-lea18sz36-o-lea18duct-i",
      "modelId": "model-novair-lea18sz36-o",
      "outdoorUnitId": "ou-novair-lea18sz36-o",
      "indoorUnitId": "iu-lea18duct-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36cen36-o-lea36cen36-i",
      "slug": "novair-lea36cen36-o-lea36cen36-i",
      "modelId": "model-novair-lea36cen36-o",
      "outdoorUnitId": "ou-novair-lea36cen36-o",
      "indoorUnitId": "iu-lea36cen36-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24-evox-30-o-lea24-evox-30-i",
      "slug": "novair-lea24-evox-30-o-lea24-evox-30-i",
      "modelId": "model-novair-lea24-evox-30-o",
      "outdoorUnitId": "ou-novair-lea24-evox-30-o",
      "indoorUnitId": "iu-lea24-evox-30-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30cen36-o-lea30cen36-i",
      "slug": "novair-lea30cen36-o-lea30cen36-i",
      "modelId": "model-novair-lea30cen36-o",
      "outdoorUnitId": "ou-novair-lea30cen36-o",
      "indoorUnitId": "iu-lea30cen36-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea48cen36-o-lea48cen36-i",
      "slug": "novair-lea48cen36-o-lea48cen36-i",
      "modelId": "model-novair-lea48cen36-o",
      "outdoorUnitId": "ou-novair-lea48cen36-o",
      "indoorUnitId": "iu-lea48cen36-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24-evox-30-o-lea-1824-acoil-410a",
      "slug": "novair-lea24-evox-30-o-lea-1824-acoil-410a",
      "modelId": "model-novair-lea24-evox-30-o",
      "outdoorUnitId": "ou-novair-lea24-evox-30-o",
      "indoorUnitId": "iu-lea-1824-acoil-410a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30-evox-30-o-lea30-evox-30-i",
      "slug": "novair-lea30-evox-30-o-lea30-evox-30-i",
      "modelId": "model-novair-lea30-evox-30-o",
      "outdoorUnitId": "ou-novair-lea30-evox-30-o",
      "indoorUnitId": "iu-lea30-evox-30-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18cen36-o-lea-1824acoil1452118",
      "slug": "novair-lea18cen36-o-lea-1824acoil1452118",
      "modelId": "model-novair-lea18cen36-o",
      "outdoorUnitId": "ou-novair-lea18cen36-o",
      "indoorUnitId": "iu-lea-1824acoil1452118",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18cen36-o-lea-1824acoil1752118",
      "slug": "novair-lea18cen36-o-lea-1824acoil1752118",
      "modelId": "model-novair-lea18cen36-o",
      "outdoorUnitId": "ou-novair-lea18cen36-o",
      "indoorUnitId": "iu-lea-1824acoil1752118",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea18-evox-30-o-lea-1824-acoil-410a",
      "slug": "novair-lea18-evox-30-o-lea-1824-acoil-410a",
      "modelId": "model-novair-lea18-evox-30-o",
      "outdoorUnitId": "ou-novair-lea18-evox-30-o",
      "indoorUnitId": "iu-lea-1824-acoil-410a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36-evox-30-o-lea36-evox-30-i",
      "slug": "novair-lea36-evox-30-o-lea36-evox-30-i",
      "modelId": "model-novair-lea36-evox-30-o",
      "outdoorUnitId": "ou-novair-lea36-evox-30-o",
      "indoorUnitId": "iu-lea36-evox-30-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24cen36-o-lea-1824acoil1752118",
      "slug": "novair-lea24cen36-o-lea-1824acoil1752118",
      "modelId": "model-novair-lea24cen36-o",
      "outdoorUnitId": "ou-novair-lea24cen36-o",
      "indoorUnitId": "iu-lea-1824acoil1752118",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30cen36-o-lea-3036acoil212124",
      "slug": "novair-lea30cen36-o-lea-3036acoil212124",
      "modelId": "model-novair-lea30cen36-o",
      "outdoorUnitId": "ou-novair-lea30cen36-o",
      "indoorUnitId": "iu-lea-3036acoil212124",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30cen36-o-lea-3036acoil1752124",
      "slug": "novair-lea30cen36-o-lea-3036acoil1752124",
      "modelId": "model-novair-lea30cen36-o",
      "outdoorUnitId": "ou-novair-lea30cen36-o",
      "indoorUnitId": "iu-lea-3036acoil1752124",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea60cen36-o-lea60cen36-i",
      "slug": "novair-lea60cen36-o-lea60cen36-i",
      "modelId": "model-novair-lea60cen36-o",
      "outdoorUnitId": "ou-novair-lea60cen36-o",
      "indoorUnitId": "iu-lea60cen36-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea24cen36-o-lea-1824acoil1452118",
      "slug": "novair-lea24cen36-o-lea-1824acoil1452118",
      "modelId": "model-novair-lea24cen36-o",
      "outdoorUnitId": "ou-novair-lea24cen36-o",
      "indoorUnitId": "iu-lea-1824acoil1452118",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea60cen36-o-lea-4860acoil212128",
      "slug": "novair-lea60cen36-o-lea-4860acoil212128",
      "modelId": "model-novair-lea60cen36-o",
      "outdoorUnitId": "ou-novair-lea60cen36-o",
      "indoorUnitId": "iu-lea-4860acoil212128",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36cen36-o-lea-3036acoil212124",
      "slug": "novair-lea36cen36-o-lea-3036acoil212124",
      "modelId": "model-novair-lea36cen36-o",
      "outdoorUnitId": "ou-novair-lea36cen36-o",
      "indoorUnitId": "iu-lea-3036acoil212124",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36cen36-o-lea-3036acoil1752124",
      "slug": "novair-lea36cen36-o-lea-3036acoil1752124",
      "modelId": "model-novair-lea36cen36-o",
      "outdoorUnitId": "ou-novair-lea36cen36-o",
      "indoorUnitId": "iu-lea-3036acoil1752124",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea48-evox-30-o-lea48-evox-30-i",
      "slug": "novair-lea48-evox-30-o-lea48-evox-30-i",
      "modelId": "model-novair-lea48-evox-30-o",
      "outdoorUnitId": "ou-novair-lea48-evox-30-o",
      "indoorUnitId": "iu-lea48-evox-30-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.6,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30-evox-30-o-lea-3036-acoil-410a",
      "slug": "novair-lea30-evox-30-o-lea-3036-acoil-410a",
      "modelId": "model-novair-lea30-evox-30-o",
      "outdoorUnitId": "ou-novair-lea30-evox-30-o",
      "indoorUnitId": "iu-lea-3036-acoil-410a",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea30cen36-o-lea-3036acoil1452124",
      "slug": "novair-lea30cen36-o-lea-3036acoil1452124",
      "modelId": "model-novair-lea30cen36-o",
      "outdoorUnitId": "ou-novair-lea30cen36-o",
      "indoorUnitId": "iu-lea-3036acoil1452124",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea60-evox-30-o-lea60-evox-30-i",
      "slug": "novair-lea60-evox-30-o-lea60-evox-30-i",
      "modelId": "model-novair-lea60-evox-30-o",
      "outdoorUnitId": "ou-novair-lea60-evox-30-o",
      "indoorUnitId": "iu-lea60-evox-30-i",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea48cen36-o-lea-4860acoil212128",
      "slug": "novair-lea48cen36-o-lea-4860acoil212128",
      "modelId": "model-novair-lea48cen36-o",
      "outdoorUnitId": "ou-novair-lea48cen36-o",
      "indoorUnitId": "iu-lea-4860acoil212128",
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
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea36-evox-30-o-lea-3036-acoil-410a",
      "slug": "novair-lea36-evox-30-o-lea-3036-acoil-410a",
      "modelId": "model-novair-lea36-evox-30-o",
      "outdoorUnitId": "ou-novair-lea36-evox-30-o",
      "indoorUnitId": "iu-lea-3036-acoil-410a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-novair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-novair-lea60cen36-o-lea-4860acoil2452128",
      "slug": "novair-lea60cen36-o-lea-4860acoil2452128",
      "modelId": "model-novair-lea60cen36-o",
      "outdoorUnitId": "ou-novair-lea60cen36-o",
      "indoorUnitId": "iu-lea-4860acoil2452128",
      "minHeatingTempC": -25,
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
          "sourceId": "src-novair-epa",
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
