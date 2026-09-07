import type { BrandDataset } from "../../types";

export const brand_ameristarDataset: BrandDataset = {
  "brand": {
    "id": "brand-ameristar",
    "slug": "ameristar",
    "name": "Ameristar",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Ameristar",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ameristar-epa",
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
      "id": "series-ameristar-23u-series",
      "slug": "ameristar-23u-series",
      "name": "23U Series",
      "brandId": "brand-ameristar",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 23U Series de Ameristar",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ameristar-23u-multi",
      "slug": "ameristar-23u-multi",
      "name": "23U Multi",
      "brandId": "brand-ameristar",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 23U Multi de Ameristar",
      "imageUrl": "/images/series/ameristar-ameristar-23u-multi.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ameristar-cxv",
      "slug": "ameristar-cxv",
      "name": "CXV",
      "brandId": "brand-ameristar",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CXV de Ameristar",
      "imageUrl": "/images/series/ameristar-ameristar-cxv.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ameristar-n-series",
      "slug": "ameristar-n-series",
      "name": "N-Series",
      "brandId": "brand-ameristar",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série N-Series de Ameristar",
      "imageUrl": "/images/series/ameristar-ameristar-n-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ameristar-a5hp5",
      "slug": "ameristar-a5hp5",
      "name": "A5HP5",
      "brandId": "brand-ameristar",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série A5HP5 de Ameristar",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ameristar-a5hl5",
      "slug": "ameristar-a5hl5",
      "name": "A5HL5",
      "brandId": "brand-ameristar",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A5HL5 de Ameristar",
      "imageUrl": "/images/series/ameristar-ameristar-a5hl5.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ameristar-e4hl5",
      "slug": "ameristar-e4hl5",
      "name": "E4HL5",
      "brandId": "brand-ameristar",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E4HL5 de Ameristar",
      "imageUrl": "/images/series/ameristar-ameristar-e4hl5.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ameristar-m5ths2312a11na",
      "slug": "ameristar-m5ths2312a11na",
      "name": "Ameristar M5THS2312A11NA*",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2312A11NA*",
      "normalizedModelNumber": "m5ths2312a11na*",
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
      "id": "model-ameristar-m5ths2312a11naa",
      "slug": "ameristar-m5ths2312a11naa",
      "name": "Ameristar M5THS2312A11NAA",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2312A11NAA",
      "normalizedModelNumber": "m5ths2312a11naa",
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
      "id": "model-ameristar-m5thm2327a13na",
      "slug": "ameristar-m5thm2327a13na",
      "name": "Ameristar M5THM2327A13NA*",
      "seriesId": "series-ameristar-23u-multi",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THM2327A13NA*",
      "normalizedModelNumber": "m5thm2327a13na*",
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
      "id": "model-ameristar-m5thm2318a12na",
      "slug": "ameristar-m5thm2318a12na",
      "name": "Ameristar M5THM2318A12NA*",
      "seriesId": "series-ameristar-23u-multi",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THM2318A12NA*",
      "normalizedModelNumber": "m5thm2318a12na*",
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
      "id": "model-ameristar-m3ths2209a91na",
      "slug": "ameristar-m3ths2209a91na",
      "name": "Ameristar M3THS2209A91NA",
      "seriesId": "series-ameristar-cxv",
      "brandId": "brand-ameristar",
      "modelNumber": "M3THS2209A91NA",
      "normalizedModelNumber": "m3ths2209a91na",
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
      "id": "model-ameristar-m5ths2309a11naa",
      "slug": "ameristar-m5ths2309a11naa",
      "name": "Ameristar M5THS2309A11NAA",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2309A11NAA",
      "normalizedModelNumber": "m5ths2309a11naa",
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
      "id": "model-ameristar-m3ths2212a91na",
      "slug": "ameristar-m3ths2212a91na",
      "name": "Ameristar M3THS2212A91NA",
      "seriesId": "series-ameristar-cxv",
      "brandId": "brand-ameristar",
      "modelNumber": "M3THS2212A91NA",
      "normalizedModelNumber": "m3ths2212a91na",
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
      "id": "model-ameristar-m5ths2309a11na",
      "slug": "ameristar-m5ths2309a11na",
      "name": "Ameristar M5THS2309A11NA*",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2309A11NA*",
      "normalizedModelNumber": "m5ths2309a11na*",
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
      "id": "model-ameristar-m5ths2318a11naa",
      "slug": "ameristar-m5ths2318a11naa",
      "name": "Ameristar M5THS2318A11NAA",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2318A11NAA",
      "normalizedModelNumber": "m5ths2318a11naa",
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
      "id": "model-ameristar-m5ths2318a11na",
      "slug": "ameristar-m5ths2318a11na",
      "name": "Ameristar M5THS2318A11NA*",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2318A11NA*",
      "normalizedModelNumber": "m5ths2318a11na*",
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
      "id": "model-ameristar-m5ths2324a11na",
      "slug": "ameristar-m5ths2324a11na",
      "name": "Ameristar M5THS2324A11NA*",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2324A11NA*",
      "normalizedModelNumber": "m5ths2324a11na*",
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
      "id": "model-ameristar-m5ths2324a11naa",
      "slug": "ameristar-m5ths2324a11naa",
      "name": "Ameristar M5THS2324A11NAA",
      "seriesId": "series-ameristar-23u-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THS2324A11NAA",
      "normalizedModelNumber": "m5ths2324a11naa",
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
      "id": "model-ameristar-m5thm2336a14na",
      "slug": "ameristar-m5thm2336a14na",
      "name": "Ameristar M5THM2336A14NA*",
      "seriesId": "series-ameristar-23u-multi",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THM2336A14NA*",
      "normalizedModelNumber": "m5thm2336a14na*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-ameristar-m5thm2342a15na",
      "slug": "ameristar-m5thm2342a15na",
      "name": "Ameristar M5THM2342A15NA*",
      "seriesId": "series-ameristar-23u-multi",
      "brandId": "brand-ameristar",
      "modelNumber": "M5THM2342A15NA*",
      "normalizedModelNumber": "m5thm2342a15na*",
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
      "id": "model-ameristar-m4thm1924a13n",
      "slug": "ameristar-m4thm1924a13n",
      "name": "Ameristar M4THM1924A13N**",
      "seriesId": "series-ameristar-n-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M4THM1924A13N**",
      "normalizedModelNumber": "m4thm1924a13n**",
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
      "id": "model-ameristar-m4thm1918a12n",
      "slug": "ameristar-m4thm1918a12n",
      "name": "Ameristar M4THM1918A12N**",
      "seriesId": "series-ameristar-n-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M4THM1918A12N**",
      "normalizedModelNumber": "m4thm1918a12n**",
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
      "id": "model-ameristar-m4thm1936a14n",
      "slug": "ameristar-m4thm1936a14n",
      "name": "Ameristar M4THM1936A14N**",
      "seriesId": "series-ameristar-n-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M4THM1936A14N**",
      "normalizedModelNumber": "m4thm1936a14n**",
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
      "id": "model-ameristar-m4thm1942a15n",
      "slug": "ameristar-m4thm1942a15n",
      "name": "Ameristar M4THM1942A15N**",
      "seriesId": "series-ameristar-n-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M4THM1942A15N**",
      "normalizedModelNumber": "m4thm1942a15n**",
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
      "id": "model-ameristar-m4thm1930a14n",
      "slug": "ameristar-m4thm1930a14n",
      "name": "Ameristar M4THM1930A14N**",
      "seriesId": "series-ameristar-n-series",
      "brandId": "brand-ameristar",
      "modelNumber": "M4THM1930A14N**",
      "normalizedModelNumber": "m4thm1930a14n**",
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
      "id": "model-ameristar-a5hp5036a1",
      "slug": "ameristar-a5hp5036a1",
      "name": "Ameristar A5HP5036A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5036A1",
      "normalizedModelNumber": "a5hp5036a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34400,
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
      "id": "model-ameristar-a5hp5024a1",
      "slug": "ameristar-a5hp5024a1",
      "name": "Ameristar A5HP5024A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5024A1",
      "normalizedModelNumber": "a5hp5024a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24400,
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
      "id": "model-ameristar-a5hp5030a1",
      "slug": "ameristar-a5hp5030a1",
      "name": "Ameristar A5HP5030A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5030A1",
      "normalizedModelNumber": "a5hp5030a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 29000,
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
      "id": "model-ameristar-a5hl5024a1",
      "slug": "ameristar-a5hl5024a1",
      "name": "Ameristar A5HL5024A1",
      "seriesId": "series-ameristar-a5hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HL5024A1",
      "normalizedModelNumber": "a5hl5024a1",
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
      "id": "model-ameristar-a5hl5024a1000aa",
      "slug": "ameristar-a5hl5024a1000aa",
      "name": "Ameristar A5HL5024A1000AA",
      "seriesId": "series-ameristar-a5hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HL5024A1000AA",
      "normalizedModelNumber": "a5hl5024a1000aa",
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
      "id": "model-ameristar-a5hl5036a1",
      "slug": "ameristar-a5hl5036a1",
      "name": "Ameristar A5HL5036A1",
      "seriesId": "series-ameristar-a5hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HL5036A1",
      "normalizedModelNumber": "a5hl5036a1",
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
      "id": "model-ameristar-a5hl5048a1000aa",
      "slug": "ameristar-a5hl5048a1000aa",
      "name": "Ameristar A5HL5048A1000AA",
      "seriesId": "series-ameristar-a5hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HL5048A1000AA",
      "normalizedModelNumber": "a5hl5048a1000aa",
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
    },
    {
      "id": "model-ameristar-a5hl5048a1",
      "slug": "ameristar-a5hl5048a1",
      "name": "Ameristar A5HL5048A1",
      "seriesId": "series-ameristar-a5hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HL5048A1",
      "normalizedModelNumber": "a5hl5048a1",
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
    },
    {
      "id": "model-ameristar-a5hl5036a1000aa",
      "slug": "ameristar-a5hl5036a1000aa",
      "name": "Ameristar A5HL5036A1000AA",
      "seriesId": "series-ameristar-a5hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HL5036A1000AA",
      "normalizedModelNumber": "a5hl5036a1000aa",
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
      "id": "model-ameristar-a5hp5048a1",
      "slug": "ameristar-a5hp5048a1",
      "name": "Ameristar A5HP5048A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5048A1",
      "normalizedModelNumber": "a5hp5048a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-ameristar-a5hp5042a1",
      "slug": "ameristar-a5hp5042a1",
      "name": "Ameristar A5HP5042A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5042A1",
      "normalizedModelNumber": "a5hp5042a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 39500,
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
      "id": "model-ameristar-a5hp5018a1",
      "slug": "ameristar-a5hp5018a1",
      "name": "Ameristar A5HP5018A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5018A1",
      "normalizedModelNumber": "a5hp5018a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19200,
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
      "id": "model-ameristar-e4hl5060a1000a",
      "slug": "ameristar-e4hl5060a1000a",
      "name": "Ameristar E4HL5060A1000A",
      "seriesId": "series-ameristar-e4hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "E4HL5060A1000A",
      "normalizedModelNumber": "e4hl5060a1000a",
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
      "id": "model-ameristar-e4hl5036a1000a",
      "slug": "ameristar-e4hl5036a1000a",
      "name": "Ameristar E4HL5036A1000A",
      "seriesId": "series-ameristar-e4hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "E4HL5036A1000A",
      "normalizedModelNumber": "e4hl5036a1000a",
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
      "id": "model-ameristar-e4hl5030a1000a",
      "slug": "ameristar-e4hl5030a1000a",
      "name": "Ameristar E4HL5030A1000A",
      "seriesId": "series-ameristar-e4hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "E4HL5030A1000A",
      "normalizedModelNumber": "e4hl5030a1000a",
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
      "id": "model-ameristar-a5hp5060a1",
      "slug": "ameristar-a5hp5060a1",
      "name": "Ameristar A5HP5060A1",
      "seriesId": "series-ameristar-a5hp5",
      "brandId": "brand-ameristar",
      "modelNumber": "A5HP5060A1",
      "normalizedModelNumber": "a5hp5060a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53500,
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
      "id": "model-ameristar-e4hl5024a1000a",
      "slug": "ameristar-e4hl5024a1000a",
      "name": "Ameristar E4HL5024A1000A",
      "seriesId": "series-ameristar-e4hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "E4HL5024A1000A",
      "normalizedModelNumber": "e4hl5024a1000a",
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
      "id": "model-ameristar-e4hl5018a1000a",
      "slug": "ameristar-e4hl5018a1000a",
      "name": "Ameristar E4HL5018A1000A",
      "seriesId": "series-ameristar-e4hl5",
      "brandId": "brand-ameristar",
      "modelNumber": "E4HL5018A1000A",
      "normalizedModelNumber": "e4hl5018a1000a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 20000,
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
      "id": "ou-ameristar-m5ths2312a11na",
      "modelNumber": "M5THS2312A11NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5ths2312a11naa",
      "modelNumber": "M5THS2312A11NAA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5thm2327a13na",
      "modelNumber": "M5THM2327A13NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5thm2318a12na",
      "modelNumber": "M5THM2318A12NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m3ths2209a91na",
      "modelNumber": "M3THS2209A91NA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ameristar-m5ths2309a11naa",
      "modelNumber": "M5THS2309A11NAA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m3ths2212a91na",
      "modelNumber": "M3THS2212A91NA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-ameristar-m5ths2309a11na",
      "modelNumber": "M5THS2309A11NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5ths2318a11naa",
      "modelNumber": "M5THS2318A11NAA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5ths2318a11na",
      "modelNumber": "M5THS2318A11NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5ths2324a11na",
      "modelNumber": "M5THS2324A11NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5ths2324a11naa",
      "modelNumber": "M5THS2324A11NAA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5thm2336a14na",
      "modelNumber": "M5THM2336A14NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m5thm2342a15na",
      "modelNumber": "M5THM2342A15NA*",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-m4thm1924a13n",
      "modelNumber": "M4THM1924A13N**",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-m4thm1918a12n",
      "modelNumber": "M4THM1918A12N**",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-m4thm1936a14n",
      "modelNumber": "M4THM1936A14N**",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-m4thm1942a15n",
      "modelNumber": "M4THM1942A15N**",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-m4thm1930a14n",
      "modelNumber": "M4THM1930A14N**",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-a5hp5036a1",
      "modelNumber": "A5HP5036A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hp5024a1",
      "modelNumber": "A5HP5024A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hp5030a1",
      "modelNumber": "A5HP5030A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hl5024a1",
      "modelNumber": "A5HL5024A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hl5024a1000aa",
      "modelNumber": "A5HL5024A1000AA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hl5036a1",
      "modelNumber": "A5HL5036A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hl5048a1000aa",
      "modelNumber": "A5HL5048A1000AA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hl5048a1",
      "modelNumber": "A5HL5048A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hl5036a1000aa",
      "modelNumber": "A5HL5036A1000AA",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hp5048a1",
      "modelNumber": "A5HP5048A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hp5042a1",
      "modelNumber": "A5HP5042A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-a5hp5018a1",
      "modelNumber": "A5HP5018A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-e4hl5060a1000a",
      "modelNumber": "E4HL5060A1000A",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-e4hl5036a1000a",
      "modelNumber": "E4HL5036A1000A",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-e4hl5030a1000a",
      "modelNumber": "E4HL5030A1000A",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-a5hp5060a1",
      "modelNumber": "A5HP5060A1",
      "brandId": "brand-ameristar",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ameristar-e4hl5024a1000a",
      "modelNumber": "E4HL5024A1000A",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ameristar-e4hl5018a1000a",
      "modelNumber": "E4HL5018A1000A",
      "brandId": "brand-ameristar",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-m5mhwun12b1n0a",
      "modelNumber": "M5MHWUN12B1N0A*",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun12a1n0aa",
      "modelNumber": "M5MHWUN12A1N0AA",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41007",
      "modelNumber": "IU-41007",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41006",
      "modelNumber": "IU-41006",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m3mhw2209a9n0a",
      "modelNumber": "M3MHW2209A9N0A",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun09a1n0aa",
      "modelNumber": "M5MHWUN09A1N0AA",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m3mhw2212a9n0a",
      "modelNumber": "M3MHW2212A9N0A",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun09b1n0a",
      "modelNumber": "M5MHWUN09B1N0A*",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun18a1n0aa",
      "modelNumber": "M5MHWUN18A1N0AA",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun18b1n0a",
      "modelNumber": "M5MHWUN18B1N0A*",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun24b1n0a",
      "modelNumber": "M5MHWUN24B1N0A*",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun24a1n0aa",
      "modelNumber": "M5MHWUN24A1N0AA",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41008",
      "modelNumber": "IU-41008",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41009",
      "modelNumber": "IU-41009",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41002",
      "modelNumber": "IU-41002",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41001",
      "modelNumber": "IU-41001",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41004",
      "modelNumber": "IU-41004",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41005",
      "modelNumber": "IU-41005",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-41003",
      "modelNumber": "IU-41003",
      "brandId": "brand-ameristar",
      "type": "wall-single"
    },
    {
      "id": "iu-5pxcd07as3tstat",
      "modelNumber": "5PX*CD07AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb006as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*B006AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc009as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*C009AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxbd06as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*BD06AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc007as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*C007AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc004a1b3tdrtstat",
      "modelNumber": "A5AHC004A1B3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb006as3tstat",
      "modelNumber": "5PX*B006AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc007as3tstat",
      "modelNumber": "5PX*C007AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv005a1d3tdrtstat",
      "modelNumber": "A5AHV005A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv004a1d3tdrtstat",
      "modelNumber": "A5AHV004A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv002a1b3",
      "modelNumber": "A5AHV002A1B3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv004a1d3",
      "modelNumber": "A5AHV004A1D3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb006as3",
      "modelNumber": "5TXCB006AS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc007as3",
      "modelNumber": "5TXCC007AS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxbd06as3tstat",
      "modelNumber": "5PX*BD06AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv006a1d3",
      "modelNumber": "A5AHV006A1D3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv007a1d3tdrtstat",
      "modelNumber": "A5AHV007A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd008as3tstatp0v0d000m50sd",
      "modelNumber": "5PX*D008AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd010as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*D010AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv006a1d3tdrtstat",
      "modelNumber": "A5AHV006A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd010as3tstat",
      "modelNumber": "5TXCD010AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc009as3tstatp0v0c000m50sd",
      "modelNumber": "5TXCC009AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd010as3tstatp0v0d000m50sd",
      "modelNumber": "5PX*D010AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd008as3tstatp0v0d000m50sd",
      "modelNumber": "5TXCD008AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd008as3tstat",
      "modelNumber": "5TXCD008AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc009as3tstat",
      "modelNumber": "5TXCC009AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxdd10as3tstatp0v0d000m50sd",
      "modelNumber": "5PX*DD10AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc009as3tstat",
      "modelNumber": "5PX*C009AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd09as3tstat",
      "modelNumber": "5PX*CD09AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd09as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*CD09AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd008as3tstat",
      "modelNumber": "5PX*D008AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd010as3tstat",
      "modelNumber": "5PX*D010AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc007as3tstat",
      "modelNumber": "5TXCC007AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd07as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*CD07AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxdd10as3tstat",
      "modelNumber": "5PX*DD10AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc005as3tstat",
      "modelNumber": "5PX*C005AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd008as3",
      "modelNumber": "5TXCD008AS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc002a1b3tdrtstat",
      "modelNumber": "A5AHC002A1B3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb004as3tstat",
      "modelNumber": "5TXCB004AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv003a1b3tdrtstat",
      "modelNumber": "A5AHV003A1B3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcbd03as3p0v0b000m40sd",
      "modelNumber": "5PXCBD03AS3+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3",
      "modelNumber": "5TXCB003AS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc005as3",
      "modelNumber": "5TXCC005AS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3p0v0b000m40sd",
      "modelNumber": "5TXCB003AS3+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv002a1b3tdrtstat",
      "modelNumber": "A5AHV002A1B3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb003as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*B003AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb003as3tstat",
      "modelNumber": "5PX*B003AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc005a1d3tdrtstat",
      "modelNumber": "A5AHC005A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc006a1d3tdrtstat",
      "modelNumber": "A5AHC006A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc004a1d3tdrtstat",
      "modelNumber": "A5AHC004A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb006as3tstat",
      "modelNumber": "5TXCB006AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc003a1b3tdrtstat",
      "modelNumber": "A5AHC003A1B3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc005as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*C005AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd05as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*CD05AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd05as3tstat",
      "modelNumber": "5PX*CD05AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3tstatp0v0b000m40sd",
      "modelNumber": "5TXCB003AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb004as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*B004AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb004as3tstat",
      "modelNumber": "5PX*B004AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb006as3tstatp0v0a000m30sd",
      "modelNumber": "5PX*B006AS3+TSTAT+P0V0A000M30SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc007a1d3tdrtstat",
      "modelNumber": "A5AHC007A1D3+TDR+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3tstat",
      "modelNumber": "5TXCB003AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc005as3tstatp0v0c000m50sd",
      "modelNumber": "5TXCC005AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc005as3tstat",
      "modelNumber": "5TXCC005AS3+TSTAT",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxdd10as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*DD10AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcd010ds3",
      "modelNumber": "4TXCD010DS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcb004ds3",
      "modelNumber": "4TXCB004DS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcb006ds3",
      "modelNumber": "4TXCB006DS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-a4ah5v24a1b3-df",
      "modelNumber": "A4AH5V24A1B3 + DF",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcb003ds3",
      "modelNumber": "4TXCB003DS3",
      "brandId": "brand-ameristar",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ameristar-m5ths2312a11na-m5mhwun12b1n0a",
      "slug": "ameristar-m5ths2312a11na-m5mhwun12b1n0a",
      "modelId": "model-ameristar-m5ths2312a11na",
      "outdoorUnitId": "ou-ameristar-m5ths2312a11na",
      "indoorUnitId": "iu-m5mhwun12b1n0a",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2312a11naa-m5mhwun12a1n0aa",
      "slug": "ameristar-m5ths2312a11naa-m5mhwun12a1n0aa",
      "modelId": "model-ameristar-m5ths2312a11naa",
      "outdoorUnitId": "ou-ameristar-m5ths2312a11naa",
      "indoorUnitId": "iu-m5mhwun12a1n0aa",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5thm2327a13na-iu-41007",
      "slug": "ameristar-m5thm2327a13na-iu-41007",
      "modelId": "model-ameristar-m5thm2327a13na",
      "outdoorUnitId": "ou-ameristar-m5thm2327a13na",
      "indoorUnitId": "iu-iu-41007",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5thm2318a12na-iu-41006",
      "slug": "ameristar-m5thm2318a12na-iu-41006",
      "modelId": "model-ameristar-m5thm2318a12na",
      "outdoorUnitId": "ou-ameristar-m5thm2318a12na",
      "indoorUnitId": "iu-iu-41006",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m3ths2209a91na-m3mhw2209a9n0a",
      "slug": "ameristar-m3ths2209a91na-m3mhw2209a9n0a",
      "modelId": "model-ameristar-m3ths2209a91na",
      "outdoorUnitId": "ou-ameristar-m3ths2209a91na",
      "indoorUnitId": "iu-m3mhw2209a9n0a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2309a11naa-m5mhwun09a1n0aa",
      "slug": "ameristar-m5ths2309a11naa-m5mhwun09a1n0aa",
      "modelId": "model-ameristar-m5ths2309a11naa",
      "outdoorUnitId": "ou-ameristar-m5ths2309a11naa",
      "indoorUnitId": "iu-m5mhwun09a1n0aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m3ths2212a91na-m3mhw2212a9n0a",
      "slug": "ameristar-m3ths2212a91na-m3mhw2212a9n0a",
      "modelId": "model-ameristar-m3ths2212a91na",
      "outdoorUnitId": "ou-ameristar-m3ths2212a91na",
      "indoorUnitId": "iu-m3mhw2212a9n0a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2309a11na-m5mhwun09b1n0a",
      "slug": "ameristar-m5ths2309a11na-m5mhwun09b1n0a",
      "modelId": "model-ameristar-m5ths2309a11na",
      "outdoorUnitId": "ou-ameristar-m5ths2309a11na",
      "indoorUnitId": "iu-m5mhwun09b1n0a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2318a11naa-m5mhwun18a1n0aa",
      "slug": "ameristar-m5ths2318a11naa-m5mhwun18a1n0aa",
      "modelId": "model-ameristar-m5ths2318a11naa",
      "outdoorUnitId": "ou-ameristar-m5ths2318a11naa",
      "indoorUnitId": "iu-m5mhwun18a1n0aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2318a11na-m5mhwun18b1n0a",
      "slug": "ameristar-m5ths2318a11na-m5mhwun18b1n0a",
      "modelId": "model-ameristar-m5ths2318a11na",
      "outdoorUnitId": "ou-ameristar-m5ths2318a11na",
      "indoorUnitId": "iu-m5mhwun18b1n0a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2324a11na-m5mhwun24b1n0a",
      "slug": "ameristar-m5ths2324a11na-m5mhwun24b1n0a",
      "modelId": "model-ameristar-m5ths2324a11na",
      "outdoorUnitId": "ou-ameristar-m5ths2324a11na",
      "indoorUnitId": "iu-m5mhwun24b1n0a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5ths2324a11naa-m5mhwun24a1n0aa",
      "slug": "ameristar-m5ths2324a11naa-m5mhwun24a1n0aa",
      "modelId": "model-ameristar-m5ths2324a11naa",
      "outdoorUnitId": "ou-ameristar-m5ths2324a11naa",
      "indoorUnitId": "iu-m5mhwun24a1n0aa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5thm2336a14na-iu-41008",
      "slug": "ameristar-m5thm2336a14na-iu-41008",
      "modelId": "model-ameristar-m5thm2336a14na",
      "outdoorUnitId": "ou-ameristar-m5thm2336a14na",
      "indoorUnitId": "iu-iu-41008",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m5thm2342a15na-iu-41009",
      "slug": "ameristar-m5thm2342a15na-iu-41009",
      "modelId": "model-ameristar-m5thm2342a15na",
      "outdoorUnitId": "ou-ameristar-m5thm2342a15na",
      "indoorUnitId": "iu-iu-41009",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m4thm1924a13n-iu-41002",
      "slug": "ameristar-m4thm1924a13n-iu-41002",
      "modelId": "model-ameristar-m4thm1924a13n",
      "outdoorUnitId": "ou-ameristar-m4thm1924a13n",
      "indoorUnitId": "iu-iu-41002",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m4thm1918a12n-iu-41001",
      "slug": "ameristar-m4thm1918a12n-iu-41001",
      "modelId": "model-ameristar-m4thm1918a12n",
      "outdoorUnitId": "ou-ameristar-m4thm1918a12n",
      "indoorUnitId": "iu-iu-41001",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m4thm1936a14n-iu-41004",
      "slug": "ameristar-m4thm1936a14n-iu-41004",
      "modelId": "model-ameristar-m4thm1936a14n",
      "outdoorUnitId": "ou-ameristar-m4thm1936a14n",
      "indoorUnitId": "iu-iu-41004",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m4thm1942a15n-iu-41005",
      "slug": "ameristar-m4thm1942a15n-iu-41005",
      "modelId": "model-ameristar-m4thm1942a15n",
      "outdoorUnitId": "ou-ameristar-m4thm1942a15n",
      "indoorUnitId": "iu-iu-41005",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-m4thm1930a14n-iu-41003",
      "slug": "ameristar-m4thm1930a14n-iu-41003",
      "modelId": "model-ameristar-m4thm1930a14n",
      "outdoorUnitId": "ou-ameristar-m4thm1930a14n",
      "indoorUnitId": "iu-iu-41003",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxcd07as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxcd07as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxcd07as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb006as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5036a1-5pxb006as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb006as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxc009as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5pxc009as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxc009as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxbd06as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5036a1-5pxbd06as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxbd06as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxc007as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5pxc007as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxc007as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahc004a1b3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahc004a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5pxb006as3tstat",
      "slug": "ameristar-a5hp5030a1-5pxb006as3tstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5pxb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5pxc007as3tstat",
      "slug": "ameristar-a5hp5030a1-5pxc007as3tstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5pxc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5pxbd06as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5030a1-5pxbd06as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5pxbd06as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahv005a1d3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahv005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahv004a1d3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahv004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5pxb006as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5030a1-5pxb006as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5pxb006as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahv004a1d3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahv004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5024a1-a5ahv002a1b3",
      "slug": "ameristar-a5hl5024a1-a5ahv002a1b3",
      "modelId": "model-ameristar-a5hl5024a1",
      "outdoorUnitId": "ou-ameristar-a5hl5024a1",
      "indoorUnitId": "iu-a5ahv002a1b3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5024a1000aa-a5ahv002a1b3",
      "slug": "ameristar-a5hl5024a1000aa-a5ahv002a1b3",
      "modelId": "model-ameristar-a5hl5024a1000aa",
      "outdoorUnitId": "ou-ameristar-a5hl5024a1000aa",
      "indoorUnitId": "iu-a5ahv002a1b3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5036a1-a5ahv004a1d3",
      "slug": "ameristar-a5hl5036a1-a5ahv004a1d3",
      "modelId": "model-ameristar-a5hl5036a1",
      "outdoorUnitId": "ou-ameristar-a5hl5036a1",
      "indoorUnitId": "iu-a5ahv004a1d3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5036a1-5txcb006as3",
      "slug": "ameristar-a5hl5036a1-5txcb006as3",
      "modelId": "model-ameristar-a5hl5036a1",
      "outdoorUnitId": "ou-ameristar-a5hl5036a1",
      "indoorUnitId": "iu-5txcb006as3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5036a1-5txcc007as3",
      "slug": "ameristar-a5hl5036a1-5txcc007as3",
      "modelId": "model-ameristar-a5hl5036a1",
      "outdoorUnitId": "ou-ameristar-a5hl5036a1",
      "indoorUnitId": "iu-5txcc007as3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahv005a1d3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahv005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-5pxbd06as3tstat",
      "slug": "ameristar-a5hp5024a1-5pxbd06as3tstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-5pxbd06as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5048a1000aa-a5ahv006a1d3",
      "slug": "ameristar-a5hl5048a1000aa-a5ahv006a1d3",
      "modelId": "model-ameristar-a5hl5048a1000aa",
      "outdoorUnitId": "ou-ameristar-a5hl5048a1000aa",
      "indoorUnitId": "iu-a5ahv006a1d3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5048a1-a5ahv006a1d3",
      "slug": "ameristar-a5hl5048a1-a5ahv006a1d3",
      "modelId": "model-ameristar-a5hl5048a1",
      "outdoorUnitId": "ou-ameristar-a5hl5048a1",
      "indoorUnitId": "iu-a5ahv006a1d3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5036a1000aa-a5ahv004a1d3",
      "slug": "ameristar-a5hl5036a1000aa-a5ahv004a1d3",
      "modelId": "model-ameristar-a5hl5036a1000aa",
      "outdoorUnitId": "ou-ameristar-a5hl5036a1000aa",
      "indoorUnitId": "iu-a5ahv004a1d3",
      "minHeatingTempC": -25,
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-a5ahv007a1d3tdrtstat",
      "slug": "ameristar-a5hp5048a1-a5ahv007a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-a5ahv007a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxd008as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5048a1-5pxd008as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxd008as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxd010as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5048a1-5pxd010as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxd010as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-a5ahv006a1d3tdrtstat",
      "slug": "ameristar-a5hp5048a1-a5ahv006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-a5ahv006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahv004a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahv004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcd010as3tstat",
      "slug": "ameristar-a5hp5048a1-5txcd010as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcc009as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5048a1-5txcc009as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcc009as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxd010as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5048a1-5pxd010as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxd010as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxc009as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5048a1-5pxc009as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxc009as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcd010as3tstat",
      "slug": "ameristar-a5hp5042a1-5txcd010as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcd008as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5042a1-5txcd008as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcd008as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahv007a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahv007a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahv007a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcd008as3tstat",
      "slug": "ameristar-a5hp5042a1-5txcd008as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcd008as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcc009as3tstat",
      "slug": "ameristar-a5hp5042a1-5txcc009as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcc009as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxdd10as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxdd10as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxdd10as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcc009as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5042a1-5txcc009as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcc009as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxc009as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxc009as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxc009as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxc009as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxc009as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxc009as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxcd09as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxcd09as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxcd09as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxcd09as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxcd09as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxcd09as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxd008as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxd008as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxd008as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxd008as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxd008as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxd008as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxd010as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxd010as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxd010as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxd010as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxd010as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcc009as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcc009as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcc009as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxcd09as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5pxcd09as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxcd09as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcc007as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcc007as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcc009as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5txcc009as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcc009as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxcd09as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxcd09as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxcd09as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxc009as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxc009as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxc009as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxc007as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxc007as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxcd07as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5pxcd07as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxcd07as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcc007as3tstat",
      "slug": "ameristar-a5hp5042a1-5txcc007as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahv005a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahv005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahv006a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahv006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahv006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxd010as3tstat",
      "slug": "ameristar-a5hp5048a1-5pxd010as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcd008as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5048a1-5txcd008as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcd008as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahv007a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahv007a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahv007a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahv005a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahv005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahv004a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahv004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxdd10as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxdd10as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxdd10as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahv006a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahv006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahv006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxb006as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5042a1-5pxb006as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxb006as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxc007as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxc007as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxc007as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxc007as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxc007as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxc009as3tstat",
      "slug": "ameristar-a5hp5048a1-5pxc009as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxc009as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb006as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxb006as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcc009as3tstat",
      "slug": "ameristar-a5hp5048a1-5txcc009as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcc009as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxdd10as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxdd10as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxdd10as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcd008as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcd008as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcd008as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxd010as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxd010as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxb006as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxb006as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxbd06as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxbd06as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxbd06as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxc005as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxc005as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxc005as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxd008as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxd008as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxd008as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5036a1-5txcd008as3",
      "slug": "ameristar-a5hl5036a1-5txcd008as3",
      "modelId": "model-ameristar-a5hl5036a1",
      "outdoorUnitId": "ou-ameristar-a5hl5036a1",
      "indoorUnitId": "iu-5txcd008as3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5018a1-a5ahc002a1b3tdrtstat",
      "slug": "ameristar-a5hp5018a1-a5ahc002a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5018a1",
      "outdoorUnitId": "ou-ameristar-a5hp5018a1",
      "indoorUnitId": "iu-a5ahc002a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-5txcb004as3tstat",
      "slug": "ameristar-a5hp5024a1-5txcb004as3tstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-5txcb004as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5018a1-a5ahv003a1b3tdrtstat",
      "slug": "ameristar-a5hp5018a1-a5ahv003a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5018a1",
      "outdoorUnitId": "ou-ameristar-a5hp5018a1",
      "indoorUnitId": "iu-a5ahv003a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5024a1-5pxcbd03as3p0v0b000m40sd",
      "slug": "ameristar-a5hl5024a1-5pxcbd03as3p0v0b000m40sd",
      "modelId": "model-ameristar-a5hl5024a1",
      "outdoorUnitId": "ou-ameristar-a5hl5024a1",
      "indoorUnitId": "iu-5pxcbd03as3p0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5024a1-5txcb003as3",
      "slug": "ameristar-a5hl5024a1-5txcb003as3",
      "modelId": "model-ameristar-a5hl5024a1",
      "outdoorUnitId": "ou-ameristar-a5hl5024a1",
      "indoorUnitId": "iu-5txcb003as3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5024a1-5txcc005as3",
      "slug": "ameristar-a5hl5024a1-5txcc005as3",
      "modelId": "model-ameristar-a5hl5024a1",
      "outdoorUnitId": "ou-ameristar-a5hl5024a1",
      "indoorUnitId": "iu-5txcc005as3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hl5024a1-5txcb003as3p0v0b000m40sd",
      "slug": "ameristar-a5hl5024a1-5txcb003as3p0v0b000m40sd",
      "modelId": "model-ameristar-a5hl5024a1",
      "outdoorUnitId": "ou-ameristar-a5hl5024a1",
      "indoorUnitId": "iu-5txcb003as3p0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahv002a1b3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahv002a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahv002a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb003as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5036a1-5pxb003as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb003as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb003as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxb003as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb003as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahc005a1d3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahc005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahc005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahc006a1d3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahc006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahc004a1d3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahc004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahc004a1b3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahc004a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5txcb006as3tstat",
      "slug": "ameristar-a5hp5030a1-5txcb006as3tstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5txcb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-a5ahc003a1b3tdrtstat",
      "slug": "ameristar-a5hp5030a1-a5ahc003a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-a5ahc003a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5txcb004as3tstat",
      "slug": "ameristar-a5hp5030a1-5txcb004as3tstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5txcb004as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5030a1-5pxcd07as3tstat",
      "slug": "ameristar-a5hp5030a1-5pxcd07as3tstat",
      "modelId": "model-ameristar-a5hp5030a1",
      "outdoorUnitId": "ou-ameristar-a5hp5030a1",
      "indoorUnitId": "iu-5pxcd07as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5018a1-a5ahv002a1b3tdrtstat",
      "slug": "ameristar-a5hp5018a1-a5ahv002a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5018a1",
      "outdoorUnitId": "ou-ameristar-a5hp5018a1",
      "indoorUnitId": "iu-a5ahv002a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahc002a1b3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahc002a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahc002a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahc004a1d3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahc004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahc003a1b3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahc003a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahc003a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5024a1-a5ahv003a1b3tdrtstat",
      "slug": "ameristar-a5hp5024a1-a5ahv003a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5024a1",
      "outdoorUnitId": "ou-ameristar-a5hp5024a1",
      "indoorUnitId": "iu-a5ahv003a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxc005as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5042a1-5pxc005as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxc005as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxcd05as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5pxcd05as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxcd05as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxcd05as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxcd05as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxcd05as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcb003as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5036a1-5txcb003as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcb003as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb004as3tstatp0v0b000m40sd",
      "slug": "ameristar-a5hp5036a1-5pxb004as3tstatp0v0b000m40sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb004as3tstatp0v0b000m40sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb004as3tstat",
      "slug": "ameristar-a5hp5036a1-5pxb004as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb004as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxb006as3tstatp0v0a000m30sd",
      "slug": "ameristar-a5hp5036a1-5pxb006as3tstatp0v0a000m30sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxb006as3tstatp0v0a000m30sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5pxc005as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5pxc005as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5pxc005as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5pxc005as3tstat",
      "slug": "ameristar-a5hp5042a1-5pxc005as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5pxc005as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahc006a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahc006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahc007a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahc007a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahc007a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahc004a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahc004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcb003as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcb003as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcb003as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcc005as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5036a1-5txcc005as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcc005as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcc005as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcc005as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcc005as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcb006as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcb006as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcb004as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcb004as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcb004as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcc005as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5042a1-5txcc005as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcc005as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcc005as3tstat",
      "slug": "ameristar-a5hp5042a1-5txcc005as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcc005as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-5txcb006as3tstat",
      "slug": "ameristar-a5hp5042a1-5txcb006as3tstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-5txcb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahc005a1d3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahc005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahc005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-a5ahc004a1b3tdrtstat",
      "slug": "ameristar-a5hp5036a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-a5ahc004a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5036a1-5txcd010as3tstat",
      "slug": "ameristar-a5hp5036a1-5txcd010as3tstat",
      "modelId": "model-ameristar-a5hp5036a1",
      "outdoorUnitId": "ou-ameristar-a5hp5036a1",
      "indoorUnitId": "iu-5txcd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxdd10as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5048a1-5pxdd10as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxdd10as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxdd10as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5048a1-5pxdd10as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxdd10as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahc004a1b3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahc004a1b3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahc007a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahc007a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahc007a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahc005a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahc005a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahc005a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahc004a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahc004a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxc007as3tstat",
      "slug": "ameristar-a5hp5048a1-5pxc007as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5042a1-a5ahc006a1d3tdrtstat",
      "slug": "ameristar-a5hp5042a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5042a1",
      "outdoorUnitId": "ou-ameristar-a5hp5042a1",
      "indoorUnitId": "iu-a5ahc006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxd008as3tstat",
      "slug": "ameristar-a5hp5048a1-5pxd008as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxd008as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcb006as3tstat",
      "slug": "ameristar-a5hp5048a1-5txcb006as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcb006as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-a5ahc007a1d3tdrtstat",
      "slug": "ameristar-a5hp5048a1-a5ahc007a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-a5ahc007a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-a5ahc006a1d3tdrtstat",
      "slug": "ameristar-a5hp5048a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-a5ahc006a1d3tdrtstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcc007as3tstat",
      "slug": "ameristar-a5hp5048a1-5txcc007as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcc007as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5txcd008as3tstat",
      "slug": "ameristar-a5hp5048a1-5txcd008as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5txcd008as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5048a1-5pxdd10as3tstat",
      "slug": "ameristar-a5hp5048a1-5pxdd10as3tstat",
      "modelId": "model-ameristar-a5hp5048a1",
      "outdoorUnitId": "ou-ameristar-a5hp5048a1",
      "indoorUnitId": "iu-5pxdd10as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5060a1000a-4txcd010ds3",
      "slug": "ameristar-e4hl5060a1000a-4txcd010ds3",
      "modelId": "model-ameristar-e4hl5060a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5060a1000a",
      "indoorUnitId": "iu-4txcd010ds3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5036a1000a-4txcb004ds3",
      "slug": "ameristar-e4hl5036a1000a-4txcb004ds3",
      "modelId": "model-ameristar-e4hl5036a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5036a1000a",
      "indoorUnitId": "iu-4txcb004ds3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5030a1000a-4txcb004ds3",
      "slug": "ameristar-e4hl5030a1000a-4txcb004ds3",
      "modelId": "model-ameristar-e4hl5030a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5030a1000a",
      "indoorUnitId": "iu-4txcb004ds3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5060a1-5pxd010as3tstat",
      "slug": "ameristar-a5hp5060a1-5pxd010as3tstat",
      "modelId": "model-ameristar-a5hp5060a1",
      "outdoorUnitId": "ou-ameristar-a5hp5060a1",
      "indoorUnitId": "iu-5pxd010as3tstat",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5060a1-5pxcd09as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5060a1-5pxcd09as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5060a1",
      "outdoorUnitId": "ou-ameristar-a5hp5060a1",
      "indoorUnitId": "iu-5pxcd09as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5060a1-5pxd010as3tstatp0v0c000m50sd",
      "slug": "ameristar-a5hp5060a1-5pxd010as3tstatp0v0c000m50sd",
      "modelId": "model-ameristar-a5hp5060a1",
      "outdoorUnitId": "ou-ameristar-a5hp5060a1",
      "indoorUnitId": "iu-5pxd010as3tstatp0v0c000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5036a1000a-4txcb006ds3",
      "slug": "ameristar-e4hl5036a1000a-4txcb006ds3",
      "modelId": "model-ameristar-e4hl5036a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5036a1000a",
      "indoorUnitId": "iu-4txcb006ds3",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5024a1000a-a4ah5v24a1b3-df",
      "slug": "ameristar-e4hl5024a1000a-a4ah5v24a1b3-df",
      "modelId": "model-ameristar-e4hl5024a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5024a1000a",
      "indoorUnitId": "iu-a4ah5v24a1b3-df",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-a5hp5060a1-5pxd010as3tstatp0v0d000m50sd",
      "slug": "ameristar-a5hp5060a1-5pxd010as3tstatp0v0d000m50sd",
      "modelId": "model-ameristar-a5hp5060a1",
      "outdoorUnitId": "ou-ameristar-a5hp5060a1",
      "indoorUnitId": "iu-5pxd010as3tstatp0v0d000m50sd",
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
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5018a1000a-4txcb003ds3",
      "slug": "ameristar-e4hl5018a1000a-4txcb003ds3",
      "modelId": "model-ameristar-e4hl5018a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5018a1000a",
      "indoorUnitId": "iu-4txcb003ds3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ameristar-e4hl5024a1000a-4txcb003ds3",
      "slug": "ameristar-e4hl5024a1000a-4txcb003ds3",
      "modelId": "model-ameristar-e4hl5024a1000a",
      "outdoorUnitId": "ou-ameristar-e4hl5024a1000a",
      "indoorUnitId": "iu-4txcb003ds3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ameristar-epa",
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
