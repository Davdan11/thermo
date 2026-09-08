import type { BrandDataset } from "../../types";

export const brand_runtruDataset: BrandDataset = {
  "brand": {
    "id": "brand-runtru",
    "slug": "runtru",
    "name": "RunTru",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour RunTru",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-runtru-epa",
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
      "id": "series-runtru-23u-series",
      "slug": "runtru-23u-series",
      "name": "23U Series",
      "brandId": "brand-runtru",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 23U Series de RunTru",
      "imageUrl": "/images/series/runtru-runtru-23u-series.jpg",
      "brochureUrl": "/documents/brochures/runtru/23u-series.pdf",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-runtru-23u-multi",
      "slug": "runtru-23u-multi",
      "name": "23U Multi",
      "brandId": "brand-runtru",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série 23U Multi de RunTru",
      "imageUrl": "/images/series/runtru-runtru-23u-multi.jpg",
      "brochureUrl": "/documents/brochures/runtru/23u-series.pdf",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-runtru-cxv",
      "slug": "runtru-cxv",
      "name": "CXV",
      "brandId": "brand-runtru",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CXV de RunTru",
      "imageUrl": "/images/series/runtru-runtru-cxv.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-runtru-n-series",
      "slug": "runtru-n-series",
      "name": "N-Series",
      "brandId": "brand-runtru",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série N-Series de RunTru",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-runtru-a5hp5",
      "slug": "runtru-a5hp5",
      "name": "A5HP5",
      "brandId": "brand-runtru",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série A5HP5 de RunTru",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-runtru-a5hl5",
      "slug": "runtru-a5hl5",
      "name": "A5HL5",
      "brandId": "brand-runtru",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série A5HL5 de RunTru",
      "imageUrl": "/images/series/runtru-runtru-a5hl5.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-runtru-e4hl5",
      "slug": "runtru-e4hl5",
      "name": "E4HL5",
      "brandId": "brand-runtru",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E4HL5 de RunTru",
      "imageUrl": "/images/series/runtru-runtru-e4hl5.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-runtru-m5ths2312a11naa",
      "slug": "runtru-m5ths2312a11naa",
      "name": "RunTru M5THS2312A11NAA",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5thm2327a13na",
      "slug": "runtru-m5thm2327a13na",
      "name": "RunTru M5THM2327A13NA*",
      "seriesId": "series-runtru-23u-multi",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5thm2318a12na",
      "slug": "runtru-m5thm2318a12na",
      "name": "RunTru M5THM2318A12NA*",
      "seriesId": "series-runtru-23u-multi",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2312a11na",
      "slug": "runtru-m5ths2312a11na",
      "name": "RunTru M5THS2312A11NA*",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m3ths2209a91na",
      "slug": "runtru-m3ths2209a91na",
      "name": "RunTru M3THS2209A91NA",
      "seriesId": "series-runtru-cxv",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m3ths2212a91na",
      "slug": "runtru-m3ths2212a91na",
      "name": "RunTru M3THS2212A91NA",
      "seriesId": "series-runtru-cxv",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2309a11na",
      "slug": "runtru-m5ths2309a11na",
      "name": "RunTru M5THS2309A11NA*",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2309a11naa",
      "slug": "runtru-m5ths2309a11naa",
      "name": "RunTru M5THS2309A11NAA",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2318a11na",
      "slug": "runtru-m5ths2318a11na",
      "name": "RunTru M5THS2318A11NA*",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2324a11na",
      "slug": "runtru-m5ths2324a11na",
      "name": "RunTru M5THS2324A11NA*",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2324a11naa",
      "slug": "runtru-m5ths2324a11naa",
      "name": "RunTru M5THS2324A11NAA",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5ths2318a11naa",
      "slug": "runtru-m5ths2318a11naa",
      "name": "RunTru M5THS2318A11NAA",
      "seriesId": "series-runtru-23u-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5thm2336a14na",
      "slug": "runtru-m5thm2336a14na",
      "name": "RunTru M5THM2336A14NA*",
      "seriesId": "series-runtru-23u-multi",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m5thm2342a15na",
      "slug": "runtru-m5thm2342a15na",
      "name": "RunTru M5THM2342A15NA*",
      "seriesId": "series-runtru-23u-multi",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m4thm1918a12n",
      "slug": "runtru-m4thm1918a12n",
      "name": "RunTru M4THM1918A12N**",
      "seriesId": "series-runtru-n-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m4thm1924a13n",
      "slug": "runtru-m4thm1924a13n",
      "name": "RunTru M4THM1924A13N**",
      "seriesId": "series-runtru-n-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m4thm1942a15n",
      "slug": "runtru-m4thm1942a15n",
      "name": "RunTru M4THM1942A15N**",
      "seriesId": "series-runtru-n-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m4thm1936a14n",
      "slug": "runtru-m4thm1936a14n",
      "name": "RunTru M4THM1936A14N**",
      "seriesId": "series-runtru-n-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-m4thm1930a14n",
      "slug": "runtru-m4thm1930a14n",
      "name": "RunTru M4THM1930A14N**",
      "seriesId": "series-runtru-n-series",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hp5030a1",
      "slug": "runtru-a5hp5030a1",
      "name": "RunTru A5HP5030A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
      "modelNumber": "A5HP5030A1",
      "normalizedModelNumber": "a5hp5030a1",
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
      "id": "model-runtru-a5hp5036a1",
      "slug": "runtru-a5hp5036a1",
      "name": "RunTru A5HP5036A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
      "modelNumber": "A5HP5036A1",
      "normalizedModelNumber": "a5hp5036a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34800,
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
      "id": "model-runtru-a5hp5024a1",
      "slug": "runtru-a5hp5024a1",
      "name": "RunTru A5HP5024A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hl5024a1",
      "slug": "runtru-a5hl5024a1",
      "name": "RunTru A5HL5024A1",
      "seriesId": "series-runtru-a5hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hl5036a1",
      "slug": "runtru-a5hl5036a1",
      "name": "RunTru A5HL5036A1",
      "seriesId": "series-runtru-a5hl5",
      "brandId": "brand-runtru",
      "modelNumber": "A5HL5036A1",
      "normalizedModelNumber": "a5hl5036a1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
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
      "id": "model-runtru-a5hl5024a1000aa",
      "slug": "runtru-a5hl5024a1000aa",
      "name": "RunTru A5HL5024A1000AA",
      "seriesId": "series-runtru-a5hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hl5048a1000aa",
      "slug": "runtru-a5hl5048a1000aa",
      "name": "RunTru A5HL5048A1000AA",
      "seriesId": "series-runtru-a5hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hl5048a1",
      "slug": "runtru-a5hl5048a1",
      "name": "RunTru A5HL5048A1",
      "seriesId": "series-runtru-a5hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hl5036a1000aa",
      "slug": "runtru-a5hl5036a1000aa",
      "name": "RunTru A5HL5036A1000AA",
      "seriesId": "series-runtru-a5hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hp5048a1",
      "slug": "runtru-a5hp5048a1",
      "name": "RunTru A5HP5048A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hp5042a1",
      "slug": "runtru-a5hp5042a1",
      "name": "RunTru A5HP5042A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
      "modelNumber": "A5HP5042A1",
      "normalizedModelNumber": "a5hp5042a1",
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
      "id": "model-runtru-a5hp5018a1",
      "slug": "runtru-a5hp5018a1",
      "name": "RunTru A5HP5018A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-e4hl5060a1000a",
      "slug": "runtru-e4hl5060a1000a",
      "name": "RunTru E4HL5060A1000A",
      "seriesId": "series-runtru-e4hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-e4hl5036a1000a",
      "slug": "runtru-e4hl5036a1000a",
      "name": "RunTru E4HL5036A1000A",
      "seriesId": "series-runtru-e4hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-e4hl5030a1000a",
      "slug": "runtru-e4hl5030a1000a",
      "name": "RunTru E4HL5030A1000A",
      "seriesId": "series-runtru-e4hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-a5hp5060a1",
      "slug": "runtru-a5hp5060a1",
      "name": "RunTru A5HP5060A1",
      "seriesId": "series-runtru-a5hp5",
      "brandId": "brand-runtru",
      "modelNumber": "A5HP5060A1",
      "normalizedModelNumber": "a5hp5060a1",
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
      "id": "model-runtru-e4hl5024a1000a",
      "slug": "runtru-e4hl5024a1000a",
      "name": "RunTru E4HL5024A1000A",
      "seriesId": "series-runtru-e4hl5",
      "brandId": "brand-runtru",
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
      "id": "model-runtru-e4hl5018a1000a",
      "slug": "runtru-e4hl5018a1000a",
      "name": "RunTru E4HL5018A1000A",
      "seriesId": "series-runtru-e4hl5",
      "brandId": "brand-runtru",
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
      "id": "ou-runtru-m5ths2312a11naa",
      "modelNumber": "M5THS2312A11NAA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5thm2327a13na",
      "modelNumber": "M5THM2327A13NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5thm2318a12na",
      "modelNumber": "M5THM2318A12NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5ths2312a11na",
      "modelNumber": "M5THS2312A11NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m3ths2209a91na",
      "modelNumber": "M3THS2209A91NA",
      "brandId": "brand-runtru",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-runtru-m3ths2212a91na",
      "modelNumber": "M3THS2212A91NA",
      "brandId": "brand-runtru",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-runtru-m5ths2309a11na",
      "modelNumber": "M5THS2309A11NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5ths2309a11naa",
      "modelNumber": "M5THS2309A11NAA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5ths2318a11na",
      "modelNumber": "M5THS2318A11NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5ths2324a11na",
      "modelNumber": "M5THS2324A11NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5ths2324a11naa",
      "modelNumber": "M5THS2324A11NAA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5ths2318a11naa",
      "modelNumber": "M5THS2318A11NAA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5thm2336a14na",
      "modelNumber": "M5THM2336A14NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m5thm2342a15na",
      "modelNumber": "M5THM2342A15NA*",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-m4thm1918a12n",
      "modelNumber": "M4THM1918A12N**",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-m4thm1924a13n",
      "modelNumber": "M4THM1924A13N**",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-m4thm1942a15n",
      "modelNumber": "M4THM1942A15N**",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-m4thm1936a14n",
      "modelNumber": "M4THM1936A14N**",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-m4thm1930a14n",
      "modelNumber": "M4THM1930A14N**",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-a5hp5030a1",
      "modelNumber": "A5HP5030A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hp5036a1",
      "modelNumber": "A5HP5036A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hp5024a1",
      "modelNumber": "A5HP5024A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hl5024a1",
      "modelNumber": "A5HL5024A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hl5036a1",
      "modelNumber": "A5HL5036A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hl5024a1000aa",
      "modelNumber": "A5HL5024A1000AA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hl5048a1000aa",
      "modelNumber": "A5HL5048A1000AA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hl5048a1",
      "modelNumber": "A5HL5048A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hl5036a1000aa",
      "modelNumber": "A5HL5036A1000AA",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hp5048a1",
      "modelNumber": "A5HP5048A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hp5042a1",
      "modelNumber": "A5HP5042A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-a5hp5018a1",
      "modelNumber": "A5HP5018A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-e4hl5060a1000a",
      "modelNumber": "E4HL5060A1000A",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-e4hl5036a1000a",
      "modelNumber": "E4HL5036A1000A",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-e4hl5030a1000a",
      "modelNumber": "E4HL5030A1000A",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-a5hp5060a1",
      "modelNumber": "A5HP5060A1",
      "brandId": "brand-runtru",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-runtru-e4hl5024a1000a",
      "modelNumber": "E4HL5024A1000A",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-runtru-e4hl5018a1000a",
      "modelNumber": "E4HL5018A1000A",
      "brandId": "brand-runtru",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-m5mhwun12a1n0aa",
      "modelNumber": "M5MHWUN12A1N0AA",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50399",
      "modelNumber": "IU-50399",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50398",
      "modelNumber": "IU-50398",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun12b1n0a",
      "modelNumber": "M5MHWUN12B1N0A*",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m3mhw2209a9n0a",
      "modelNumber": "M3MHW2209A9N0A",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m3mhw2212a9n0a",
      "modelNumber": "M3MHW2212A9N0A",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun09b1n0a",
      "modelNumber": "M5MHWUN09B1N0A*",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun09a1n0aa",
      "modelNumber": "M5MHWUN09A1N0AA",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun18b1n0a",
      "modelNumber": "M5MHWUN18B1N0A*",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun24b1n0a",
      "modelNumber": "M5MHWUN24B1N0A*",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun24a1n0aa",
      "modelNumber": "M5MHWUN24A1N0AA",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-m5mhwun18a1n0aa",
      "modelNumber": "M5MHWUN18A1N0AA",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50400",
      "modelNumber": "IU-50400",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50401",
      "modelNumber": "IU-50401",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50393",
      "modelNumber": "IU-50393",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50394",
      "modelNumber": "IU-50394",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50397",
      "modelNumber": "IU-50397",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50396",
      "modelNumber": "IU-50396",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50395",
      "modelNumber": "IU-50395",
      "brandId": "brand-runtru",
      "type": "wall-single"
    },
    {
      "id": "iu-5pxb006as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*B006AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc009as3tstat",
      "modelNumber": "5PX*C009AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxbd06as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*BD06AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc007as3tstat",
      "modelNumber": "5PX*C007AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv005a1d3tdrtstat",
      "modelNumber": "A5AHV005A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv004a1d3tdrtstat",
      "modelNumber": "A5AHV004A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb006as3tstat",
      "modelNumber": "5PX*B006AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc004a1b3tdrtstat",
      "modelNumber": "A5AHC004A1B3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv002a1b3",
      "modelNumber": "A5AHV002A1B3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb006as3",
      "modelNumber": "5TXCB006AS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc007as3",
      "modelNumber": "5TXCC007AS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxbd06as3tstat",
      "modelNumber": "5PX*BD06AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv006a1d3",
      "modelNumber": "A5AHV006A1D3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv004a1d3",
      "modelNumber": "A5AHV004A1D3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd008as3tstatp0v0d000m50sd",
      "modelNumber": "5PX*D008AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd010as3tstat",
      "modelNumber": "5PX*D010AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd010as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*D010AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv006a1d3tdrtstat",
      "modelNumber": "A5AHV006A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv007a1d3tdrtstat",
      "modelNumber": "A5AHV007A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd010as3tstat",
      "modelNumber": "5TXCD010AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc009as3tstatp0v0c000m50sd",
      "modelNumber": "5TXCC009AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc009as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*C009AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd008as3tstatp0v0d000m50sd",
      "modelNumber": "5TXCD008AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd008as3tstat",
      "modelNumber": "5TXCD008AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxdd10as3tstatp0v0d000m50sd",
      "modelNumber": "5PX*DD10AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc009as3tstat",
      "modelNumber": "5TXCC009AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc007as3tstat",
      "modelNumber": "5TXCC007AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc007as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*C007AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd09as3tstat",
      "modelNumber": "5PX*CD09AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd09as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*CD09AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd008as3tstat",
      "modelNumber": "5PX*D008AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd07as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*CD07AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd07as3tstat",
      "modelNumber": "5PX*CD07AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxd010as3tstatp0v0d000m50sd",
      "modelNumber": "5PX*D010AS3+TSTAT+P0V0D000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxdd10as3tstat",
      "modelNumber": "5PX*DD10AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc005as3tstat",
      "modelNumber": "5PX*C005AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc002a1b3tdrtstat",
      "modelNumber": "A5AHC002A1B3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv003a1b3tdrtstat",
      "modelNumber": "A5AHV003A1B3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3",
      "modelNumber": "5TXCB003AS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcbd03as3p0v0b000m40sd",
      "modelNumber": "5PXCBD03AS3+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc005as3",
      "modelNumber": "5TXCC005AS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3p0v0b000m40sd",
      "modelNumber": "5TXCB003AS3+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcd008as3",
      "modelNumber": "5TXCD008AS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb003as3tstat",
      "modelNumber": "5PX*B003AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc006a1d3tdrtstat",
      "modelNumber": "A5AHC006A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc004a1d3tdrtstat",
      "modelNumber": "A5AHC004A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc005a1d3tdrtstat",
      "modelNumber": "A5AHC005A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc003a1b3tdrtstat",
      "modelNumber": "A5AHC003A1B3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb004as3tstat",
      "modelNumber": "5TXCB004AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb006as3tstat",
      "modelNumber": "5TXCB006AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahv002a1b3tdrtstat",
      "modelNumber": "A5AHV002A1B3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxc005as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*C005AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd05as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*CD05AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxcd05as3tstat",
      "modelNumber": "5PX*CD05AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3tstat",
      "modelNumber": "5TXCB003AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb004as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*B004AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb004as3tstat",
      "modelNumber": "5PX*B004AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb003as3tstatp0v0b000m40sd",
      "modelNumber": "5PX*B003AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxb006as3tstatp0v0a000m30sd",
      "modelNumber": "5PX*B006AS3+TSTAT+P0V0A000M30SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a5ahc007a1d3tdrtstat",
      "modelNumber": "A5AHC007A1D3+TDR+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcb003as3tstatp0v0b000m40sd",
      "modelNumber": "5TXCB003AS3+TSTAT+P0V0B000M40SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc005as3tstat",
      "modelNumber": "5TXCC005AS3+TSTAT",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5txcc005as3tstatp0v0c000m50sd",
      "modelNumber": "5TXCC005AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-5pxdd10as3tstatp0v0c000m50sd",
      "modelNumber": "5PX*DD10AS3+TSTAT+P0V0C000M50SD",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcd010ds3",
      "modelNumber": "4TXCD010DS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcb004ds3",
      "modelNumber": "4TXCB004DS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcb006ds3",
      "modelNumber": "4TXCB006DS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-a4ah5v24a1b3-df",
      "modelNumber": "A4AH5V24A1B3 + DF",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    },
    {
      "id": "iu-4txcb003ds3",
      "modelNumber": "4TXCB003DS3",
      "brandId": "brand-runtru",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-runtru-m5ths2312a11naa-m5mhwun12a1n0aa",
      "slug": "runtru-m5ths2312a11naa-m5mhwun12a1n0aa",
      "modelId": "model-runtru-m5ths2312a11naa",
      "outdoorUnitId": "ou-runtru-m5ths2312a11naa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5thm2327a13na-iu-50399",
      "slug": "runtru-m5thm2327a13na-iu-50399",
      "modelId": "model-runtru-m5thm2327a13na",
      "outdoorUnitId": "ou-runtru-m5thm2327a13na",
      "indoorUnitId": "iu-iu-50399",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5thm2318a12na-iu-50398",
      "slug": "runtru-m5thm2318a12na-iu-50398",
      "modelId": "model-runtru-m5thm2318a12na",
      "outdoorUnitId": "ou-runtru-m5thm2318a12na",
      "indoorUnitId": "iu-iu-50398",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2312a11na-m5mhwun12b1n0a",
      "slug": "runtru-m5ths2312a11na-m5mhwun12b1n0a",
      "modelId": "model-runtru-m5ths2312a11na",
      "outdoorUnitId": "ou-runtru-m5ths2312a11na",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m3ths2209a91na-m3mhw2209a9n0a",
      "slug": "runtru-m3ths2209a91na-m3mhw2209a9n0a",
      "modelId": "model-runtru-m3ths2209a91na",
      "outdoorUnitId": "ou-runtru-m3ths2209a91na",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m3ths2212a91na-m3mhw2212a9n0a",
      "slug": "runtru-m3ths2212a91na-m3mhw2212a9n0a",
      "modelId": "model-runtru-m3ths2212a91na",
      "outdoorUnitId": "ou-runtru-m3ths2212a91na",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2309a11na-m5mhwun09b1n0a",
      "slug": "runtru-m5ths2309a11na-m5mhwun09b1n0a",
      "modelId": "model-runtru-m5ths2309a11na",
      "outdoorUnitId": "ou-runtru-m5ths2309a11na",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2309a11naa-m5mhwun09a1n0aa",
      "slug": "runtru-m5ths2309a11naa-m5mhwun09a1n0aa",
      "modelId": "model-runtru-m5ths2309a11naa",
      "outdoorUnitId": "ou-runtru-m5ths2309a11naa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2318a11na-m5mhwun18b1n0a",
      "slug": "runtru-m5ths2318a11na-m5mhwun18b1n0a",
      "modelId": "model-runtru-m5ths2318a11na",
      "outdoorUnitId": "ou-runtru-m5ths2318a11na",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2324a11na-m5mhwun24b1n0a",
      "slug": "runtru-m5ths2324a11na-m5mhwun24b1n0a",
      "modelId": "model-runtru-m5ths2324a11na",
      "outdoorUnitId": "ou-runtru-m5ths2324a11na",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2324a11naa-m5mhwun24a1n0aa",
      "slug": "runtru-m5ths2324a11naa-m5mhwun24a1n0aa",
      "modelId": "model-runtru-m5ths2324a11naa",
      "outdoorUnitId": "ou-runtru-m5ths2324a11naa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5ths2318a11naa-m5mhwun18a1n0aa",
      "slug": "runtru-m5ths2318a11naa-m5mhwun18a1n0aa",
      "modelId": "model-runtru-m5ths2318a11naa",
      "outdoorUnitId": "ou-runtru-m5ths2318a11naa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5thm2336a14na-iu-50400",
      "slug": "runtru-m5thm2336a14na-iu-50400",
      "modelId": "model-runtru-m5thm2336a14na",
      "outdoorUnitId": "ou-runtru-m5thm2336a14na",
      "indoorUnitId": "iu-iu-50400",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m5thm2342a15na-iu-50401",
      "slug": "runtru-m5thm2342a15na-iu-50401",
      "modelId": "model-runtru-m5thm2342a15na",
      "outdoorUnitId": "ou-runtru-m5thm2342a15na",
      "indoorUnitId": "iu-iu-50401",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m4thm1918a12n-iu-50393",
      "slug": "runtru-m4thm1918a12n-iu-50393",
      "modelId": "model-runtru-m4thm1918a12n",
      "outdoorUnitId": "ou-runtru-m4thm1918a12n",
      "indoorUnitId": "iu-iu-50393",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m4thm1924a13n-iu-50394",
      "slug": "runtru-m4thm1924a13n-iu-50394",
      "modelId": "model-runtru-m4thm1924a13n",
      "outdoorUnitId": "ou-runtru-m4thm1924a13n",
      "indoorUnitId": "iu-iu-50394",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m4thm1942a15n-iu-50397",
      "slug": "runtru-m4thm1942a15n-iu-50397",
      "modelId": "model-runtru-m4thm1942a15n",
      "outdoorUnitId": "ou-runtru-m4thm1942a15n",
      "indoorUnitId": "iu-iu-50397",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m4thm1936a14n-iu-50396",
      "slug": "runtru-m4thm1936a14n-iu-50396",
      "modelId": "model-runtru-m4thm1936a14n",
      "outdoorUnitId": "ou-runtru-m4thm1936a14n",
      "indoorUnitId": "iu-iu-50396",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-m4thm1930a14n-iu-50395",
      "slug": "runtru-m4thm1930a14n-iu-50395",
      "modelId": "model-runtru-m4thm1930a14n",
      "outdoorUnitId": "ou-runtru-m4thm1930a14n",
      "indoorUnitId": "iu-iu-50395",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5pxb006as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5030a1-5pxb006as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxc009as3tstat",
      "slug": "runtru-a5hp5036a1-5pxc009as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxbd06as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5036a1-5pxbd06as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxc007as3tstat",
      "slug": "runtru-a5hp5036a1-5pxc007as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb006as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5036a1-5pxb006as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahv005a1d3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5pxbd06as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5030a1-5pxbd06as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahv004a1d3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahv005a1d3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5pxc007as3tstat",
      "slug": "runtru-a5hp5030a1-5pxc007as3tstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5pxb006as3tstat",
      "slug": "runtru-a5hp5030a1-5pxb006as3tstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahc004a1b3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahv004a1d3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5024a1-a5ahv002a1b3",
      "slug": "runtru-a5hl5024a1-a5ahv002a1b3",
      "modelId": "model-runtru-a5hl5024a1",
      "outdoorUnitId": "ou-runtru-a5hl5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5036a1-5txcb006as3",
      "slug": "runtru-a5hl5036a1-5txcb006as3",
      "modelId": "model-runtru-a5hl5036a1",
      "outdoorUnitId": "ou-runtru-a5hl5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5036a1-5txcc007as3",
      "slug": "runtru-a5hl5036a1-5txcc007as3",
      "modelId": "model-runtru-a5hl5036a1",
      "outdoorUnitId": "ou-runtru-a5hl5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5024a1000aa-a5ahv002a1b3",
      "slug": "runtru-a5hl5024a1000aa-a5ahv002a1b3",
      "modelId": "model-runtru-a5hl5024a1000aa",
      "outdoorUnitId": "ou-runtru-a5hl5024a1000aa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-5pxbd06as3tstat",
      "slug": "runtru-a5hp5024a1-5pxbd06as3tstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5048a1000aa-a5ahv006a1d3",
      "slug": "runtru-a5hl5048a1000aa-a5ahv006a1d3",
      "modelId": "model-runtru-a5hl5048a1000aa",
      "outdoorUnitId": "ou-runtru-a5hl5048a1000aa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5048a1-a5ahv006a1d3",
      "slug": "runtru-a5hl5048a1-a5ahv006a1d3",
      "modelId": "model-runtru-a5hl5048a1",
      "outdoorUnitId": "ou-runtru-a5hl5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5036a1000aa-a5ahv004a1d3",
      "slug": "runtru-a5hl5036a1000aa-a5ahv004a1d3",
      "modelId": "model-runtru-a5hl5036a1000aa",
      "outdoorUnitId": "ou-runtru-a5hl5036a1000aa",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5036a1-a5ahv004a1d3",
      "slug": "runtru-a5hl5036a1-a5ahv004a1d3",
      "modelId": "model-runtru-a5hl5036a1",
      "outdoorUnitId": "ou-runtru-a5hl5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxd008as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5048a1-5pxd008as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxd010as3tstat",
      "slug": "runtru-a5hp5048a1-5pxd010as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxd010as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5048a1-5pxd010as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-a5ahv006a1d3tdrtstat",
      "slug": "runtru-a5hp5048a1-a5ahv006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-a5ahv007a1d3tdrtstat",
      "slug": "runtru-a5hp5048a1-a5ahv007a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcd010as3tstat",
      "slug": "runtru-a5hp5048a1-5txcd010as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcc009as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5048a1-5txcc009as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxc009as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5048a1-5pxc009as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcd010as3tstat",
      "slug": "runtru-a5hp5042a1-5txcd010as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcd008as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5042a1-5txcd008as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcd008as3tstat",
      "slug": "runtru-a5hp5042a1-5txcd008as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahv007a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahv007a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcc009as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5042a1-5txcc009as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxdd10as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5042a1-5pxdd10as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcc009as3tstat",
      "slug": "runtru-a5hp5042a1-5txcc009as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcc007as3tstat",
      "slug": "runtru-a5hp5042a1-5txcc007as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxc007as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5042a1-5pxc007as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxc009as3tstat",
      "slug": "runtru-a5hp5042a1-5pxc009as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxc009as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5042a1-5pxc009as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxcd09as3tstat",
      "slug": "runtru-a5hp5042a1-5pxcd09as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxcd09as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5042a1-5pxcd09as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxd008as3tstat",
      "slug": "runtru-a5hp5042a1-5pxd008as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxd008as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5042a1-5pxd008as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxc007as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5pxc007as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxcd09as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5pxcd09as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcc009as3tstat",
      "slug": "runtru-a5hp5036a1-5txcc009as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcc007as3tstat",
      "slug": "runtru-a5hp5036a1-5txcc007as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcc009as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5txcc009as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxcd09as3tstat",
      "slug": "runtru-a5hp5036a1-5pxcd09as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxc009as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5pxc009as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxcd07as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5pxcd07as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxcd07as3tstat",
      "slug": "runtru-a5hp5036a1-5pxcd07as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahv004a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahv005a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahv006a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahv006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxd010as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5048a1-5pxd010as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcd008as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5048a1-5txcd008as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahv006a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahv006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahv007a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahv007a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxd010as3tstat",
      "slug": "runtru-a5hp5042a1-5pxd010as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxd010as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5042a1-5pxd010as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxdd10as3tstat",
      "slug": "runtru-a5hp5042a1-5pxdd10as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahv005a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahv005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxb006as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5042a1-5pxb006as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxc007as3tstat",
      "slug": "runtru-a5hp5042a1-5pxc007as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahv004a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahv004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcc009as3tstat",
      "slug": "runtru-a5hp5048a1-5txcc009as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxc009as3tstat",
      "slug": "runtru-a5hp5048a1-5pxc009as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxd010as3tstat",
      "slug": "runtru-a5hp5036a1-5pxd010as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxdd10as3tstat",
      "slug": "runtru-a5hp5036a1-5pxdd10as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxd008as3tstat",
      "slug": "runtru-a5hp5036a1-5pxd008as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcd008as3tstat",
      "slug": "runtru-a5hp5036a1-5txcd008as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxb006as3tstat",
      "slug": "runtru-a5hp5042a1-5pxb006as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxc005as3tstat",
      "slug": "runtru-a5hp5036a1-5pxc005as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb006as3tstat",
      "slug": "runtru-a5hp5036a1-5pxb006as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxbd06as3tstat",
      "slug": "runtru-a5hp5036a1-5pxbd06as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5018a1-a5ahc002a1b3tdrtstat",
      "slug": "runtru-a5hp5018a1-a5ahc002a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5018a1",
      "outdoorUnitId": "ou-runtru-a5hp5018a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5018a1-a5ahv003a1b3tdrtstat",
      "slug": "runtru-a5hp5018a1-a5ahv003a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5018a1",
      "outdoorUnitId": "ou-runtru-a5hp5018a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5024a1-5txcb003as3",
      "slug": "runtru-a5hl5024a1-5txcb003as3",
      "modelId": "model-runtru-a5hl5024a1",
      "outdoorUnitId": "ou-runtru-a5hl5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5024a1-5pxcbd03as3p0v0b000m40sd",
      "slug": "runtru-a5hl5024a1-5pxcbd03as3p0v0b000m40sd",
      "modelId": "model-runtru-a5hl5024a1",
      "outdoorUnitId": "ou-runtru-a5hl5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5024a1-5txcc005as3",
      "slug": "runtru-a5hl5024a1-5txcc005as3",
      "modelId": "model-runtru-a5hl5024a1",
      "outdoorUnitId": "ou-runtru-a5hl5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5024a1-5txcb003as3p0v0b000m40sd",
      "slug": "runtru-a5hl5024a1-5txcb003as3p0v0b000m40sd",
      "modelId": "model-runtru-a5hl5024a1",
      "outdoorUnitId": "ou-runtru-a5hl5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hl5036a1-5txcd008as3",
      "slug": "runtru-a5hl5036a1-5txcd008as3",
      "modelId": "model-runtru-a5hl5036a1",
      "outdoorUnitId": "ou-runtru-a5hl5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahv003a1b3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahv003a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb003as3tstat",
      "slug": "runtru-a5hp5036a1-5pxb003as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahc006a1d3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahc004a1d3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahc005a1d3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahc005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahc004a1b3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-a5ahc003a1b3tdrtstat",
      "slug": "runtru-a5hp5030a1-a5ahc003a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5txcb004as3tstat",
      "slug": "runtru-a5hp5030a1-5txcb004as3tstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5txcb006as3tstat",
      "slug": "runtru-a5hp5030a1-5txcb006as3tstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5030a1-5pxcd07as3tstat",
      "slug": "runtru-a5hp5030a1-5pxcd07as3tstat",
      "modelId": "model-runtru-a5hp5030a1",
      "outdoorUnitId": "ou-runtru-a5hp5030a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5018a1-a5ahv002a1b3tdrtstat",
      "slug": "runtru-a5hp5018a1-a5ahv002a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5018a1",
      "outdoorUnitId": "ou-runtru-a5hp5018a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahc002a1b3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahc002a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-5txcb004as3tstat",
      "slug": "runtru-a5hp5024a1-5txcb004as3tstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahc003a1b3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahc003a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahc004a1d3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5024a1-a5ahv002a1b3tdrtstat",
      "slug": "runtru-a5hp5024a1-a5ahv002a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5024a1",
      "outdoorUnitId": "ou-runtru-a5hp5024a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxc005as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5042a1-5pxc005as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxcd05as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5pxcd05as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxcd05as3tstat",
      "slug": "runtru-a5hp5036a1-5pxcd05as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcb003as3tstat",
      "slug": "runtru-a5hp5036a1-5txcb003as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxc005as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5pxc005as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb004as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5036a1-5pxb004as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb004as3tstat",
      "slug": "runtru-a5hp5036a1-5pxb004as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb003as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5036a1-5pxb003as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5pxb006as3tstatp0v0a000m30sd",
      "slug": "runtru-a5hp5036a1-5pxb006as3tstatp0v0a000m30sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahc007a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahc007a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahc006a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahc005a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahc005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcb003as3tstatp0v0b000m40sd",
      "slug": "runtru-a5hp5036a1-5txcb003as3tstatp0v0b000m40sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcc005as3tstat",
      "slug": "runtru-a5hp5036a1-5txcc005as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcb006as3tstat",
      "slug": "runtru-a5hp5036a1-5txcb006as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcb004as3tstat",
      "slug": "runtru-a5hp5036a1-5txcb004as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcc005as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5036a1-5txcc005as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcc005as3tstat",
      "slug": "runtru-a5hp5042a1-5txcc005as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcc005as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5042a1-5txcc005as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5txcb006as3tstat",
      "slug": "runtru-a5hp5042a1-5txcb006as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahc004a1d3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-5txcd010as3tstat",
      "slug": "runtru-a5hp5036a1-5txcd010as3tstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5036a1-a5ahc004a1b3tdrtstat",
      "slug": "runtru-a5hp5036a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5036a1",
      "outdoorUnitId": "ou-runtru-a5hp5036a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-5pxc005as3tstat",
      "slug": "runtru-a5hp5042a1-5pxc005as3tstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxdd10as3tstat",
      "slug": "runtru-a5hp5048a1-5pxdd10as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahc006a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahc005a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahc005a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahc004a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahc004a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahc004a1b3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahc004a1b3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5042a1-a5ahc007a1d3tdrtstat",
      "slug": "runtru-a5hp5042a1-a5ahc007a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5042a1",
      "outdoorUnitId": "ou-runtru-a5hp5042a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxc007as3tstat",
      "slug": "runtru-a5hp5048a1-5pxc007as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxdd10as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5048a1-5pxdd10as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxdd10as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5048a1-5pxdd10as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-a5ahc006a1d3tdrtstat",
      "slug": "runtru-a5hp5048a1-a5ahc006a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcd008as3tstat",
      "slug": "runtru-a5hp5048a1-5txcd008as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcc007as3tstat",
      "slug": "runtru-a5hp5048a1-5txcc007as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5txcb006as3tstat",
      "slug": "runtru-a5hp5048a1-5txcb006as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-5pxd008as3tstat",
      "slug": "runtru-a5hp5048a1-5pxd008as3tstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5060a1000a-4txcd010ds3",
      "slug": "runtru-e4hl5060a1000a-4txcd010ds3",
      "modelId": "model-runtru-e4hl5060a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5060a1000a",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5036a1000a-4txcb004ds3",
      "slug": "runtru-e4hl5036a1000a-4txcb004ds3",
      "modelId": "model-runtru-e4hl5036a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5036a1000a",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5030a1000a-4txcb004ds3",
      "slug": "runtru-e4hl5030a1000a-4txcb004ds3",
      "modelId": "model-runtru-e4hl5030a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5030a1000a",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5060a1-5pxcd09as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5060a1-5pxcd09as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5060a1",
      "outdoorUnitId": "ou-runtru-a5hp5060a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5048a1-a5ahc007a1d3tdrtstat",
      "slug": "runtru-a5hp5048a1-a5ahc007a1d3tdrtstat",
      "modelId": "model-runtru-a5hp5048a1",
      "outdoorUnitId": "ou-runtru-a5hp5048a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5060a1-5pxd010as3tstatp0v0c000m50sd",
      "slug": "runtru-a5hp5060a1-5pxd010as3tstatp0v0c000m50sd",
      "modelId": "model-runtru-a5hp5060a1",
      "outdoorUnitId": "ou-runtru-a5hp5060a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5036a1000a-4txcb006ds3",
      "slug": "runtru-e4hl5036a1000a-4txcb006ds3",
      "modelId": "model-runtru-e4hl5036a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5036a1000a",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5024a1000a-a4ah5v24a1b3-df",
      "slug": "runtru-e4hl5024a1000a-a4ah5v24a1b3-df",
      "modelId": "model-runtru-e4hl5024a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5024a1000a",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-a5hp5060a1-5pxd010as3tstatp0v0d000m50sd",
      "slug": "runtru-a5hp5060a1-5pxd010as3tstatp0v0d000m50sd",
      "modelId": "model-runtru-a5hp5060a1",
      "outdoorUnitId": "ou-runtru-a5hp5060a1",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5018a1000a-4txcb003ds3",
      "slug": "runtru-e4hl5018a1000a-4txcb003ds3",
      "modelId": "model-runtru-e4hl5018a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5018a1000a",
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
          "sourceId": "src-runtru-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-runtru-e4hl5024a1000a-4txcb003ds3",
      "slug": "runtru-e4hl5024a1000a-4txcb003ds3",
      "modelId": "model-runtru-e4hl5024a1000a",
      "outdoorUnitId": "ou-runtru-e4hl5024a1000a",
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
          "sourceId": "src-runtru-epa",
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
