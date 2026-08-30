import type { BrandDataset } from "../../types";

export const brand_zephyrDataset: BrandDataset = {
  "brand": {
    "id": "brand-zephyr",
    "slug": "zephyr",
    "name": "Zephyr",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Zephyr",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-zephyr-epa",
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
      "id": "series-zephyr-hiultra",
      "slug": "zephyr-hiultra",
      "name": "HiULTRA",
      "brandId": "brand-zephyr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HiULTRA de Zephyr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-zephyr-hi-multi-xtreme",
      "slug": "zephyr-hi-multi-xtreme",
      "name": "Hi MULTI Xtreme",
      "brandId": "brand-zephyr",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi MULTI Xtreme de Zephyr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-zephyr-ultra",
      "slug": "zephyr-ultra",
      "name": "Ultra",
      "brandId": "brand-zephyr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra de Zephyr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-zephyr-hi-ultra-hd",
      "slug": "zephyr-hi-ultra-hd",
      "name": "Hi ULTRA HD",
      "brandId": "brand-zephyr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi ULTRA HD de Zephyr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-zephyr-ultra-coil",
      "slug": "zephyr-ultra-coil",
      "name": "Ultra-Coil",
      "brandId": "brand-zephyr",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Ultra-Coil de Zephyr",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-zephyr-ze-09ub32o",
      "slug": "zephyr-ze-09ub32o",
      "name": "Zephyr ZE-09UB32O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-09UB32O",
      "normalizedModelNumber": "ze-09ub32o",
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
      "id": "model-zephyr-ze-12ub32o",
      "slug": "zephyr-ze-12ub32o",
      "name": "Zephyr ZE-12UB32O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-12UB32O",
      "normalizedModelNumber": "ze-12ub32o",
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
      "id": "model-zephyr-ze-15ub32o",
      "slug": "zephyr-ze-15ub32o",
      "name": "Zephyr ZE-15UB32O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-15UB32O",
      "normalizedModelNumber": "ze-15ub32o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 15000,
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
      "id": "model-zephyr-ze-09uh24sco",
      "slug": "zephyr-ze-09uh24sco",
      "name": "Zephyr ZE-09UH24SCO",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-09UH24SCO",
      "normalizedModelNumber": "ze-09uh24sco",
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
      "id": "model-zephyr-ze-09cb25o",
      "slug": "zephyr-ze-09cb25o",
      "name": "Zephyr ZE-09CB25O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-09CB25O",
      "normalizedModelNumber": "ze-09cb25o",
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
      "id": "model-zephyr-ze-12uh24sco",
      "slug": "zephyr-ze-12uh24sco",
      "name": "Zephyr ZE-12UH24SCO",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-12UH24SCO",
      "normalizedModelNumber": "ze-12uh24sco",
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
      "id": "model-zephyr-ze-09db25o",
      "slug": "zephyr-ze-09db25o",
      "name": "Zephyr ZE-09DB25O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-09DB25O",
      "normalizedModelNumber": "ze-09db25o",
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
      "id": "model-zephyr-ze-09cb22o",
      "slug": "zephyr-ze-09cb22o",
      "name": "Zephyr ZE-09CB22O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-09CB22O",
      "normalizedModelNumber": "ze-09cb22o",
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
      "id": "model-zephyr-ze-527m325",
      "slug": "zephyr-ze-527m325",
      "name": "Zephyr ZE-527M325",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-527M325",
      "normalizedModelNumber": "ze-527m325",
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
      "id": "model-zephyr-ze-12cb25o",
      "slug": "zephyr-ze-12cb25o",
      "name": "Zephyr ZE-12CB25O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-12CB25O",
      "normalizedModelNumber": "ze-12cb25o",
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
      "id": "model-zephyr-ze-24cb25o",
      "slug": "zephyr-ze-24cb25o",
      "name": "Zephyr ZE-24CB25O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-24CB25O",
      "normalizedModelNumber": "ze-24cb25o",
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
      "id": "model-zephyr-ze-542m525",
      "slug": "zephyr-ze-542m525",
      "name": "Zephyr ZE-542M525",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-542M525",
      "normalizedModelNumber": "ze-542m525",
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
      "id": "model-zephyr-ze-518m225",
      "slug": "zephyr-ze-518m225",
      "name": "Zephyr ZE-518M225",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-518M225",
      "normalizedModelNumber": "ze-518m225",
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
      "id": "model-zephyr-ze-24m322sco",
      "slug": "zephyr-ze-24m322sco",
      "name": "Zephyr ZE-24M322SCO",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-24M322SCO",
      "normalizedModelNumber": "ze-24m322sco",
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
      "id": "model-zephyr-ze-12db25o",
      "slug": "zephyr-ze-12db25o",
      "name": "Zephyr ZE-12DB25O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-12DB25O",
      "normalizedModelNumber": "ze-12db25o",
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
      "id": "model-zephyr-ze-536m425",
      "slug": "zephyr-ze-536m425",
      "name": "Zephyr ZE-536M425",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-536M425",
      "normalizedModelNumber": "ze-536m425",
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
      "id": "model-zephyr-ze-18m222sco",
      "slug": "zephyr-ze-18m222sco",
      "name": "Zephyr ZE-18M222SCO",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-18M222SCO",
      "normalizedModelNumber": "ze-18m222sco",
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
      "id": "model-zephyr-ze-18cb25o",
      "slug": "zephyr-ze-18cb25o",
      "name": "Zephyr ZE-18CB25O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-18CB25O",
      "normalizedModelNumber": "ze-18cb25o",
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
      "id": "model-zephyr-ze-18cb22o",
      "slug": "zephyr-ze-18cb22o",
      "name": "Zephyr ZE-18CB22O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-18CB22O",
      "normalizedModelNumber": "ze-18cb22o",
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
      "id": "model-zephyr-ze-36m422sco",
      "slug": "zephyr-ze-36m422sco",
      "name": "Zephyr ZE-36M422SCO",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-36M422SCO",
      "normalizedModelNumber": "ze-36m422sco",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-zephyr-ze-624hpa",
      "slug": "zephyr-ze-624hpa",
      "name": "Zephyr ZE-624HPA",
      "seriesId": "series-zephyr-ultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-624HPA",
      "normalizedModelNumber": "ze-624hpa",
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
      "id": "model-zephyr-ze-09db22o",
      "slug": "zephyr-ze-09db22o",
      "name": "Zephyr ZE-09DB22O",
      "seriesId": "series-zephyr-hiultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-09DB22O",
      "normalizedModelNumber": "ze-09db22o",
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
      "id": "model-zephyr-ze-42m522sco",
      "slug": "zephyr-ze-42m522sco",
      "name": "Zephyr ZE-42M522SCO",
      "seriesId": "series-zephyr-hi-multi-xtreme",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-42M522SCO",
      "normalizedModelNumber": "ze-42m522sco",
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
      "id": "model-zephyr-ze-636hpa",
      "slug": "zephyr-ze-636hpa",
      "name": "Zephyr ZE-636HPA",
      "seriesId": "series-zephyr-ultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-636HPA",
      "normalizedModelNumber": "ze-636hpa",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-zephyr-ze-660hpa",
      "slug": "zephyr-ze-660hpa",
      "name": "Zephyr ZE-660HPA",
      "seriesId": "series-zephyr-ultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-660HPA",
      "normalizedModelNumber": "ze-660hpa",
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
    },
    {
      "id": "model-zephyr-ze-648hpa",
      "slug": "zephyr-ze-648hpa",
      "name": "Zephyr ZE-648HPA",
      "seriesId": "series-zephyr-ultra",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-648HPA",
      "normalizedModelNumber": "ze-648hpa",
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
      "id": "model-zephyr-ze-36hpb",
      "slug": "zephyr-ze-36hpb",
      "name": "Zephyr ZE-36HPB",
      "seriesId": "series-zephyr-hi-ultra-hd",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-36HPB",
      "normalizedModelNumber": "ze-36hpb",
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
      "id": "model-zephyr-ze-48hpb",
      "slug": "zephyr-ze-48hpb",
      "name": "Zephyr ZE-48HPB",
      "seriesId": "series-zephyr-hi-ultra-hd",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-48HPB",
      "normalizedModelNumber": "ze-48hpb",
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
      "id": "model-zephyr-ze-24hpb",
      "slug": "zephyr-ze-24hpb",
      "name": "Zephyr ZE-24HPB",
      "seriesId": "series-zephyr-hi-ultra-hd",
      "brandId": "brand-zephyr",
      "modelNumber": "ZE-24HPB",
      "normalizedModelNumber": "ze-24hpb",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22000,
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
      "id": "ou-zephyr-ze-09ub32o",
      "modelNumber": "ZE-09UB32O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-12ub32o",
      "modelNumber": "ZE-12UB32O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-15ub32o",
      "modelNumber": "ZE-15UB32O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-09uh24sco",
      "modelNumber": "ZE-09UH24SCO",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-09cb25o",
      "modelNumber": "ZE-09CB25O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-12uh24sco",
      "modelNumber": "ZE-12UH24SCO",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-09db25o",
      "modelNumber": "ZE-09DB25O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-09cb22o",
      "modelNumber": "ZE-09CB22O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-zephyr-ze-527m325",
      "modelNumber": "ZE-527M325",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-12cb25o",
      "modelNumber": "ZE-12CB25O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-24cb25o",
      "modelNumber": "ZE-24CB25O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-542m525",
      "modelNumber": "ZE-542M525",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-518m225",
      "modelNumber": "ZE-518M225",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-24m322sco",
      "modelNumber": "ZE-24M322SCO",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-12db25o",
      "modelNumber": "ZE-12DB25O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-536m425",
      "modelNumber": "ZE-536M425",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-18m222sco",
      "modelNumber": "ZE-18M222SCO",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-18cb25o",
      "modelNumber": "ZE-18CB25O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-18cb22o",
      "modelNumber": "ZE-18CB22O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-zephyr-ze-36m422sco",
      "modelNumber": "ZE-36M422SCO",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-624hpa",
      "modelNumber": "ZE-624HPA",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-09db22o",
      "modelNumber": "ZE-09DB22O",
      "brandId": "brand-zephyr",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-zephyr-ze-42m522sco",
      "modelNumber": "ZE-42M522SCO",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-636hpa",
      "modelNumber": "ZE-636HPA",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-660hpa",
      "modelNumber": "ZE-660HPA",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-648hpa",
      "modelNumber": "ZE-648HPA",
      "brandId": "brand-zephyr",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-zephyr-ze-36hpb",
      "modelNumber": "ZE-36HPB",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-48hpb",
      "modelNumber": "ZE-48HPB",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-zephyr-ze-24hpb",
      "modelNumber": "ZE-24HPB",
      "brandId": "brand-zephyr",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ze-09ub32i",
      "modelNumber": "ZE-09UB32I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-12ub32i",
      "modelNumber": "ZE-12UB32I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-15ub32i",
      "modelNumber": "ZE-15UB32I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09uh24sci",
      "modelNumber": "ZE-09UH24SCI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09cb25i",
      "modelNumber": "ZE-09CB25I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09cb25ai",
      "modelNumber": "ZE-09CB25AI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-12uh24sci",
      "modelNumber": "ZE-12UH24SCI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09db25i",
      "modelNumber": "ZE-09DB25I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09cb22i",
      "modelNumber": "ZE-09CB22I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52700",
      "modelNumber": "IU-52700",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-12cb25ai",
      "modelNumber": "ZE-12CB25AI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-12cb25i",
      "modelNumber": "ZE-12CB25I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-24cb25ai",
      "modelNumber": "ZE-24CB25AI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-24cb25i",
      "modelNumber": "ZE-24CB25I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09cb22ai",
      "modelNumber": "ZE-09CB22AI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52702",
      "modelNumber": "IU-52702",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52699",
      "modelNumber": "IU-52699",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52696",
      "modelNumber": "IU-52696",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-12db25i",
      "modelNumber": "ZE-12DB25I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52701",
      "modelNumber": "IU-52701",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52693",
      "modelNumber": "IU-52693",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-18cb25ai",
      "modelNumber": "ZE-18CB25AI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-18cb22i",
      "modelNumber": "ZE-18CB22I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52697",
      "modelNumber": "IU-52697",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-18cb25i",
      "modelNumber": "ZE-18CB25I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ah-624a",
      "modelNumber": "AH- 624A",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ze-18cb22ai",
      "modelNumber": "ZE-18CB22AI",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ze-09db22i",
      "modelNumber": "ZE-09DB22I",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52698",
      "modelNumber": "IU-52698",
      "brandId": "brand-zephyr",
      "type": "wall-single"
    },
    {
      "id": "iu-ah-636a",
      "modelNumber": "AH- 636A",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah-660a",
      "modelNumber": "AH-660A",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah-648a",
      "modelNumber": "AH-648A",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah-36b",
      "modelNumber": "AH-36B",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah-48b",
      "modelNumber": "AH-48B",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-ah-24b",
      "modelNumber": "AH-24B",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc49b3j",
      "modelNumber": "DC49B3J",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc37d3j",
      "modelNumber": "DC37D3J",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc61c4j",
      "modelNumber": "DC61C4J",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc31d2j",
      "modelNumber": "DC31D2J",
      "brandId": "brand-zephyr",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-zephyr-ze-09ub32o-ze-09ub32i",
      "slug": "zephyr-ze-09ub32o-ze-09ub32i",
      "modelId": "model-zephyr-ze-09ub32o",
      "outdoorUnitId": "ou-zephyr-ze-09ub32o",
      "indoorUnitId": "iu-ze-09ub32i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 32.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-12ub32o-ze-12ub32i",
      "slug": "zephyr-ze-12ub32o-ze-12ub32i",
      "modelId": "model-zephyr-ze-12ub32o",
      "outdoorUnitId": "ou-zephyr-ze-12ub32o",
      "indoorUnitId": "iu-ze-12ub32i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 30.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-15ub32o-ze-15ub32i",
      "slug": "zephyr-ze-15ub32o-ze-15ub32i",
      "modelId": "model-zephyr-ze-15ub32o",
      "outdoorUnitId": "ou-zephyr-ze-15ub32o",
      "indoorUnitId": "iu-ze-15ub32i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.6,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09uh24sco-ze-09uh24sci",
      "slug": "zephyr-ze-09uh24sco-ze-09uh24sci",
      "modelId": "model-zephyr-ze-09uh24sco",
      "outdoorUnitId": "ou-zephyr-ze-09uh24sco",
      "indoorUnitId": "iu-ze-09uh24sci",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09cb25o-ze-09cb25i",
      "slug": "zephyr-ze-09cb25o-ze-09cb25i",
      "modelId": "model-zephyr-ze-09cb25o",
      "outdoorUnitId": "ou-zephyr-ze-09cb25o",
      "indoorUnitId": "iu-ze-09cb25i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09cb25o-ze-09cb25ai",
      "slug": "zephyr-ze-09cb25o-ze-09cb25ai",
      "modelId": "model-zephyr-ze-09cb25o",
      "outdoorUnitId": "ou-zephyr-ze-09cb25o",
      "indoorUnitId": "iu-ze-09cb25ai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-12uh24sco-ze-12uh24sci",
      "slug": "zephyr-ze-12uh24sco-ze-12uh24sci",
      "modelId": "model-zephyr-ze-12uh24sco",
      "outdoorUnitId": "ou-zephyr-ze-12uh24sco",
      "indoorUnitId": "iu-ze-12uh24sci",
      "minHeatingTempC": -25,
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09db25o-ze-09db25i",
      "slug": "zephyr-ze-09db25o-ze-09db25i",
      "modelId": "model-zephyr-ze-09db25o",
      "outdoorUnitId": "ou-zephyr-ze-09db25o",
      "indoorUnitId": "iu-ze-09db25i",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09cb22o-ze-09cb22i",
      "slug": "zephyr-ze-09cb22o-ze-09cb22i",
      "modelId": "model-zephyr-ze-09cb22o",
      "outdoorUnitId": "ou-zephyr-ze-09cb22o",
      "indoorUnitId": "iu-ze-09cb22i",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-527m325-iu-52700",
      "slug": "zephyr-ze-527m325-iu-52700",
      "modelId": "model-zephyr-ze-527m325",
      "outdoorUnitId": "ou-zephyr-ze-527m325",
      "indoorUnitId": "iu-iu-52700",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-12cb25o-ze-12cb25ai",
      "slug": "zephyr-ze-12cb25o-ze-12cb25ai",
      "modelId": "model-zephyr-ze-12cb25o",
      "outdoorUnitId": "ou-zephyr-ze-12cb25o",
      "indoorUnitId": "iu-ze-12cb25ai",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-12cb25o-ze-12cb25i",
      "slug": "zephyr-ze-12cb25o-ze-12cb25i",
      "modelId": "model-zephyr-ze-12cb25o",
      "outdoorUnitId": "ou-zephyr-ze-12cb25o",
      "indoorUnitId": "iu-ze-12cb25i",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-24cb25o-ze-24cb25ai",
      "slug": "zephyr-ze-24cb25o-ze-24cb25ai",
      "modelId": "model-zephyr-ze-24cb25o",
      "outdoorUnitId": "ou-zephyr-ze-24cb25o",
      "indoorUnitId": "iu-ze-24cb25ai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-24cb25o-ze-24cb25i",
      "slug": "zephyr-ze-24cb25o-ze-24cb25i",
      "modelId": "model-zephyr-ze-24cb25o",
      "outdoorUnitId": "ou-zephyr-ze-24cb25o",
      "indoorUnitId": "iu-ze-24cb25i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09cb22o-ze-09cb22ai",
      "slug": "zephyr-ze-09cb22o-ze-09cb22ai",
      "modelId": "model-zephyr-ze-09cb22o",
      "outdoorUnitId": "ou-zephyr-ze-09cb22o",
      "indoorUnitId": "iu-ze-09cb22ai",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-542m525-iu-52702",
      "slug": "zephyr-ze-542m525-iu-52702",
      "modelId": "model-zephyr-ze-542m525",
      "outdoorUnitId": "ou-zephyr-ze-542m525",
      "indoorUnitId": "iu-iu-52702",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-518m225-iu-52699",
      "slug": "zephyr-ze-518m225-iu-52699",
      "modelId": "model-zephyr-ze-518m225",
      "outdoorUnitId": "ou-zephyr-ze-518m225",
      "indoorUnitId": "iu-iu-52699",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-24m322sco-iu-52696",
      "slug": "zephyr-ze-24m322sco-iu-52696",
      "modelId": "model-zephyr-ze-24m322sco",
      "outdoorUnitId": "ou-zephyr-ze-24m322sco",
      "indoorUnitId": "iu-iu-52696",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.05,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-12db25o-ze-12db25i",
      "slug": "zephyr-ze-12db25o-ze-12db25i",
      "modelId": "model-zephyr-ze-12db25o",
      "outdoorUnitId": "ou-zephyr-ze-12db25o",
      "indoorUnitId": "iu-ze-12db25i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-536m425-iu-52701",
      "slug": "zephyr-ze-536m425-iu-52701",
      "modelId": "model-zephyr-ze-536m425",
      "outdoorUnitId": "ou-zephyr-ze-536m425",
      "indoorUnitId": "iu-iu-52701",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-18m222sco-iu-52693",
      "slug": "zephyr-ze-18m222sco-iu-52693",
      "modelId": "model-zephyr-ze-18m222sco",
      "outdoorUnitId": "ou-zephyr-ze-18m222sco",
      "indoorUnitId": "iu-iu-52693",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-18cb25o-ze-18cb25ai",
      "slug": "zephyr-ze-18cb25o-ze-18cb25ai",
      "modelId": "model-zephyr-ze-18cb25o",
      "outdoorUnitId": "ou-zephyr-ze-18cb25o",
      "indoorUnitId": "iu-ze-18cb25ai",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-18cb22o-ze-18cb22i",
      "slug": "zephyr-ze-18cb22o-ze-18cb22i",
      "modelId": "model-zephyr-ze-18cb22o",
      "outdoorUnitId": "ou-zephyr-ze-18cb22o",
      "indoorUnitId": "iu-ze-18cb22i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-36m422sco-iu-52697",
      "slug": "zephyr-ze-36m422sco-iu-52697",
      "modelId": "model-zephyr-ze-36m422sco",
      "outdoorUnitId": "ou-zephyr-ze-36m422sco",
      "indoorUnitId": "iu-iu-52697",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-18cb25o-ze-18cb25i",
      "slug": "zephyr-ze-18cb25o-ze-18cb25i",
      "modelId": "model-zephyr-ze-18cb25o",
      "outdoorUnitId": "ou-zephyr-ze-18cb25o",
      "indoorUnitId": "iu-ze-18cb25i",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-624hpa-ah-624a",
      "slug": "zephyr-ze-624hpa-ah-624a",
      "modelId": "model-zephyr-ze-624hpa",
      "outdoorUnitId": "ou-zephyr-ze-624hpa",
      "indoorUnitId": "iu-ah-624a",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-624hpa-ah-624a",
      "slug": "zephyr-ze-624hpa-ah-624a",
      "modelId": "model-zephyr-ze-624hpa",
      "outdoorUnitId": "ou-zephyr-ze-624hpa",
      "indoorUnitId": "iu-ah-624a",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-18cb22o-ze-18cb22ai",
      "slug": "zephyr-ze-18cb22o-ze-18cb22ai",
      "modelId": "model-zephyr-ze-18cb22o",
      "outdoorUnitId": "ou-zephyr-ze-18cb22o",
      "indoorUnitId": "iu-ze-18cb22ai",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-09db22o-ze-09db22i",
      "slug": "zephyr-ze-09db22o-ze-09db22i",
      "modelId": "model-zephyr-ze-09db22o",
      "outdoorUnitId": "ou-zephyr-ze-09db22o",
      "indoorUnitId": "iu-ze-09db22i",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-42m522sco-iu-52698",
      "slug": "zephyr-ze-42m522sco-iu-52698",
      "modelId": "model-zephyr-ze-42m522sco",
      "outdoorUnitId": "ou-zephyr-ze-42m522sco",
      "indoorUnitId": "iu-iu-52698",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.95,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-636hpa-ah-636a",
      "slug": "zephyr-ze-636hpa-ah-636a",
      "modelId": "model-zephyr-ze-636hpa",
      "outdoorUnitId": "ou-zephyr-ze-636hpa",
      "indoorUnitId": "iu-ah-636a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-636hpa-ah-636a",
      "slug": "zephyr-ze-636hpa-ah-636a",
      "modelId": "model-zephyr-ze-636hpa",
      "outdoorUnitId": "ou-zephyr-ze-636hpa",
      "indoorUnitId": "iu-ah-636a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-660hpa-ah-660a",
      "slug": "zephyr-ze-660hpa-ah-660a",
      "modelId": "model-zephyr-ze-660hpa",
      "outdoorUnitId": "ou-zephyr-ze-660hpa",
      "indoorUnitId": "iu-ah-660a",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-648hpa-ah-648a",
      "slug": "zephyr-ze-648hpa-ah-648a",
      "modelId": "model-zephyr-ze-648hpa",
      "outdoorUnitId": "ou-zephyr-ze-648hpa",
      "indoorUnitId": "iu-ah-648a",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-648hpa-ah-648a",
      "slug": "zephyr-ze-648hpa-ah-648a",
      "modelId": "model-zephyr-ze-648hpa",
      "outdoorUnitId": "ou-zephyr-ze-648hpa",
      "indoorUnitId": "iu-ah-648a",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-660hpa-ah-660a",
      "slug": "zephyr-ze-660hpa-ah-660a",
      "modelId": "model-zephyr-ze-660hpa",
      "outdoorUnitId": "ou-zephyr-ze-660hpa",
      "indoorUnitId": "iu-ah-660a",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-36hpb-ah-36b",
      "slug": "zephyr-ze-36hpb-ah-36b",
      "modelId": "model-zephyr-ze-36hpb",
      "outdoorUnitId": "ou-zephyr-ze-36hpb",
      "indoorUnitId": "iu-ah-36b",
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-48hpb-ah-48b",
      "slug": "zephyr-ze-48hpb-ah-48b",
      "modelId": "model-zephyr-ze-48hpb",
      "outdoorUnitId": "ou-zephyr-ze-48hpb",
      "indoorUnitId": "iu-ah-48b",
      "minHeatingTempC": -25,
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-24hpb-ah-24b",
      "slug": "zephyr-ze-24hpb-ah-24b",
      "modelId": "model-zephyr-ze-24hpb",
      "outdoorUnitId": "ou-zephyr-ze-24hpb",
      "indoorUnitId": "iu-ah-24b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-648hpa-dc49b3j",
      "slug": "zephyr-ze-648hpa-dc49b3j",
      "modelId": "model-zephyr-ze-648hpa",
      "outdoorUnitId": "ou-zephyr-ze-648hpa",
      "indoorUnitId": "iu-dc49b3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-636hpa-dc37d3j",
      "slug": "zephyr-ze-636hpa-dc37d3j",
      "modelId": "model-zephyr-ze-636hpa",
      "outdoorUnitId": "ou-zephyr-ze-636hpa",
      "indoorUnitId": "iu-dc37d3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-660hpa-dc61c4j",
      "slug": "zephyr-ze-660hpa-dc61c4j",
      "modelId": "model-zephyr-ze-660hpa",
      "outdoorUnitId": "ou-zephyr-ze-660hpa",
      "indoorUnitId": "iu-dc61c4j",
      "minHeatingTempC": -25,
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
          "sourceId": "src-zephyr-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-zephyr-ze-624hpa-dc31d2j",
      "slug": "zephyr-ze-624hpa-dc31d2j",
      "modelId": "model-zephyr-ze-624hpa",
      "outdoorUnitId": "ou-zephyr-ze-624hpa",
      "indoorUnitId": "iu-dc31d2j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-zephyr-epa",
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
