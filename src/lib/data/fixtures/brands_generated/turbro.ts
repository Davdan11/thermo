import type { BrandDataset } from "../../types";

export const brand_turbroDataset: BrandDataset = {
  "brand": {
    "id": "brand-turbro",
    "slug": "turbro",
    "name": "TURBRO",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour TURBRO",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-turbro-epa",
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
      "id": "series-turbro-lapland",
      "slug": "turbro-lapland",
      "name": "Lapland",
      "brandId": "brand-turbro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Lapland de TURBRO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-turbro-t-pro",
      "slug": "turbro-t-pro",
      "name": "T-Pro",
      "brandId": "brand-turbro",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-Pro de TURBRO",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-turbro-ll18k-o",
      "slug": "turbro-ll18k-o",
      "name": "TURBRO LL18K-O",
      "seriesId": "series-turbro-lapland",
      "brandId": "brand-turbro",
      "modelNumber": "LL18K-O",
      "normalizedModelNumber": "ll18k-o",
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
      "id": "model-turbro-ll12k11-o",
      "slug": "turbro-ll12k11-o",
      "name": "TURBRO LL12K11-O",
      "seriesId": "series-turbro-lapland",
      "brandId": "brand-turbro",
      "modelNumber": "LL12K11-O",
      "normalizedModelNumber": "ll12k11-o",
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
      "id": "model-turbro-ll12k23-o",
      "slug": "turbro-ll12k23-o",
      "name": "TURBRO LL12K23-O",
      "seriesId": "series-turbro-lapland",
      "brandId": "brand-turbro",
      "modelNumber": "LL12K23-O",
      "normalizedModelNumber": "ll12k23-o",
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
      "id": "model-turbro-greenland-m18ko",
      "slug": "turbro-greenland-m18ko",
      "name": "TURBRO GREENLAND-M18K/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-M18K/O",
      "normalizedModelNumber": "greenland-m18k/o",
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
      "id": "model-turbro-greenland-12k230o",
      "slug": "turbro-greenland-12k230o",
      "name": "TURBRO GREENLAND-12K230/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-12K230/O",
      "normalizedModelNumber": "greenland-12k230/o",
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
      "id": "model-turbro-greenland-m27ko",
      "slug": "turbro-greenland-m27ko",
      "name": "TURBRO GREENLAND-M27K/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-M27K/O",
      "normalizedModelNumber": "greenland-m27k/o",
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
      "id": "model-turbro-gl9k230-o",
      "slug": "turbro-gl9k230-o",
      "name": "TURBRO GL9K230-O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL9K230-O",
      "normalizedModelNumber": "gl9k230-o",
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
      "id": "model-turbro-gl12k230-o",
      "slug": "turbro-gl12k230-o",
      "name": "TURBRO GL12K230-O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL12K230-O",
      "normalizedModelNumber": "gl12k230-o",
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
      "id": "model-turbro-greenland-9k230o",
      "slug": "turbro-greenland-9k230o",
      "name": "TURBRO GREENLAND-9K230/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-9K230/O",
      "normalizedModelNumber": "greenland-9k230/o",
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
      "id": "model-turbro-greenland-9k115o",
      "slug": "turbro-greenland-9k115o",
      "name": "TURBRO GREENLAND-9K115/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-9K115/O",
      "normalizedModelNumber": "greenland-9k115/o",
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
      "id": "model-turbro-greenland-24k230o",
      "slug": "turbro-greenland-24k230o",
      "name": "TURBRO GREENLAND-24K230/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-24K230/O",
      "normalizedModelNumber": "greenland-24k230/o",
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
      "id": "model-turbro-greenland-18k230o",
      "slug": "turbro-greenland-18k230o",
      "name": "TURBRO GREENLAND-18K230/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-18K230/O",
      "normalizedModelNumber": "greenland-18k230/o",
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
      "id": "model-turbro-greenland-12k115o",
      "slug": "turbro-greenland-12k115o",
      "name": "TURBRO GREENLAND-12K115/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-12K115/O",
      "normalizedModelNumber": "greenland-12k115/o",
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
      "id": "model-turbro-gl9k115-o",
      "slug": "turbro-gl9k115-o",
      "name": "TURBRO GL9K115-O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL9K115-O",
      "normalizedModelNumber": "gl9k115-o",
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
      "id": "model-turbro-greenland-m36ko",
      "slug": "turbro-greenland-m36ko",
      "name": "TURBRO GREENLAND-M36K/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-M36K/O",
      "normalizedModelNumber": "greenland-m36k/o",
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
      "id": "model-turbro-gl-m18o",
      "slug": "turbro-gl-m18o",
      "name": "TURBRO GL-M18/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL-M18/O",
      "normalizedModelNumber": "gl-m18/o",
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
      "id": "model-turbro-gl-m24o",
      "slug": "turbro-gl-m24o",
      "name": "TURBRO GL-M24/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL-M24/O",
      "normalizedModelNumber": "gl-m24/o",
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
      "id": "model-turbro-gl-m27o",
      "slug": "turbro-gl-m27o",
      "name": "TURBRO GL-M27/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL-M27/O",
      "normalizedModelNumber": "gl-m27/o",
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
      "id": "model-turbro-gl12k115-o",
      "slug": "turbro-gl12k115-o",
      "name": "TURBRO GL12K115-O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL12K115-O",
      "normalizedModelNumber": "gl12k115-o",
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
      "id": "model-turbro-gl18k230-o",
      "slug": "turbro-gl18k230-o",
      "name": "TURBRO GL18K230-O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL18K230-O",
      "normalizedModelNumber": "gl18k230-o",
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
      "id": "model-turbro-greenland-m42ko",
      "slug": "turbro-greenland-m42ko",
      "name": "TURBRO GREENLAND-M42K/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GREENLAND-M42K/O",
      "normalizedModelNumber": "greenland-m42k/o",
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
      "id": "model-turbro-ll24k-o",
      "slug": "turbro-ll24k-o",
      "name": "TURBRO LL24K-O",
      "seriesId": "series-turbro-lapland",
      "brandId": "brand-turbro",
      "modelNumber": "LL24K-O",
      "normalizedModelNumber": "ll24k-o",
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
      "id": "model-turbro-gl-m36o",
      "slug": "turbro-gl-m36o",
      "name": "TURBRO GL-M36/O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL-M36/O",
      "normalizedModelNumber": "gl-m36/o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33000,
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
      "id": "model-turbro-gl24k230-o",
      "slug": "turbro-gl24k230-o",
      "name": "TURBRO GL24K230-O",
      "seriesId": "series-turbro-t-pro",
      "brandId": "brand-turbro",
      "modelNumber": "GL24K230-O",
      "normalizedModelNumber": "gl24k230-o",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-turbro-ll18k-o",
      "modelNumber": "LL18K-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-turbro-ll12k11-o",
      "modelNumber": "LL12K11-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-turbro-ll12k23-o",
      "modelNumber": "LL12K23-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-turbro-greenland-m18ko",
      "modelNumber": "GREENLAND-M18K/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-greenland-12k230o",
      "modelNumber": "GREENLAND-12K230/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-greenland-m27ko",
      "modelNumber": "GREENLAND-M27K/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-gl9k230-o",
      "modelNumber": "GL9K230-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-gl12k230-o",
      "modelNumber": "GL12K230-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-greenland-9k230o",
      "modelNumber": "GREENLAND-9K230/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-greenland-9k115o",
      "modelNumber": "GREENLAND-9K115/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-greenland-24k230o",
      "modelNumber": "GREENLAND-24K230/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-greenland-18k230o",
      "modelNumber": "GREENLAND-18K230/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-greenland-12k115o",
      "modelNumber": "GREENLAND-12K115/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-gl9k115-o",
      "modelNumber": "GL9K115-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-greenland-m36ko",
      "modelNumber": "GREENLAND-M36K/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-gl-m18o",
      "modelNumber": "GL-M18/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-gl-m24o",
      "modelNumber": "GL-M24/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-gl-m27o",
      "modelNumber": "GL-M27/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-gl12k115-o",
      "modelNumber": "GL12K115-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-gl18k230-o",
      "modelNumber": "GL18K230-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-greenland-m42ko",
      "modelNumber": "GREENLAND-M42K/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-turbro-ll24k-o",
      "modelNumber": "LL24K-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-turbro-gl-m36o",
      "modelNumber": "GL-M36/O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-turbro-gl24k230-o",
      "modelNumber": "GL24K230-O",
      "brandId": "brand-turbro",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ll18k-i",
      "modelNumber": "LL18K-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-ll12k11-i",
      "modelNumber": "LL12K11-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-ll12k23-i",
      "modelNumber": "LL12K23-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51898",
      "modelNumber": "IU-51898",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-greenland-12k230i",
      "modelNumber": "GREENLAND-12K230/I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51899",
      "modelNumber": "IU-51899",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-gl9k230-i",
      "modelNumber": "GL9K230-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-gl12k230-i",
      "modelNumber": "GL12K230-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-greenland-9k230i",
      "modelNumber": "GREENLAND-9K230/I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-greenland-9k115i",
      "modelNumber": "GREENLAND-9K115/I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-greenland-24k230i",
      "modelNumber": "GREENLAND-24K230/I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-greenland-18k230i",
      "modelNumber": "GREENLAND-18K230/I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-greenland-12k115i",
      "modelNumber": "GREENLAND-12K115/I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-gl9k115-i",
      "modelNumber": "GL9K115-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51900",
      "modelNumber": "IU-51900",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51882",
      "modelNumber": "IU-51882",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51883",
      "modelNumber": "IU-51883",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51884",
      "modelNumber": "IU-51884",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-gl12k115-i",
      "modelNumber": "GL12K115-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-gl18k230-i",
      "modelNumber": "GL18K230-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51901",
      "modelNumber": "IU-51901",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-ll24k-i",
      "modelNumber": "LL24K-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51885",
      "modelNumber": "IU-51885",
      "brandId": "brand-turbro",
      "type": "wall-single"
    },
    {
      "id": "iu-gl24k230-i",
      "modelNumber": "GL24K230-I",
      "brandId": "brand-turbro",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-turbro-ll18k-o-ll18k-i",
      "slug": "turbro-ll18k-o-ll18k-i",
      "modelId": "model-turbro-ll18k-o",
      "outdoorUnitId": "ou-turbro-ll18k-o",
      "indoorUnitId": "iu-ll18k-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-ll12k11-o-ll12k11-i",
      "slug": "turbro-ll12k11-o-ll12k11-i",
      "modelId": "model-turbro-ll12k11-o",
      "outdoorUnitId": "ou-turbro-ll12k11-o",
      "indoorUnitId": "iu-ll12k11-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-ll12k23-o-ll12k23-i",
      "slug": "turbro-ll12k23-o-ll12k23-i",
      "modelId": "model-turbro-ll12k23-o",
      "outdoorUnitId": "ou-turbro-ll12k23-o",
      "indoorUnitId": "iu-ll12k23-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-m18ko-iu-51898",
      "slug": "turbro-greenland-m18ko-iu-51898",
      "modelId": "model-turbro-greenland-m18ko",
      "outdoorUnitId": "ou-turbro-greenland-m18ko",
      "indoorUnitId": "iu-iu-51898",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-12k230o-greenland-12k230i",
      "slug": "turbro-greenland-12k230o-greenland-12k230i",
      "modelId": "model-turbro-greenland-12k230o",
      "outdoorUnitId": "ou-turbro-greenland-12k230o",
      "indoorUnitId": "iu-greenland-12k230i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-m27ko-iu-51899",
      "slug": "turbro-greenland-m27ko-iu-51899",
      "modelId": "model-turbro-greenland-m27ko",
      "outdoorUnitId": "ou-turbro-greenland-m27ko",
      "indoorUnitId": "iu-iu-51899",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl9k230-o-gl9k230-i",
      "slug": "turbro-gl9k230-o-gl9k230-i",
      "modelId": "model-turbro-gl9k230-o",
      "outdoorUnitId": "ou-turbro-gl9k230-o",
      "indoorUnitId": "iu-gl9k230-i",
      "minHeatingTempC": -25,
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl12k230-o-gl12k230-i",
      "slug": "turbro-gl12k230-o-gl12k230-i",
      "modelId": "model-turbro-gl12k230-o",
      "outdoorUnitId": "ou-turbro-gl12k230-o",
      "indoorUnitId": "iu-gl12k230-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-9k230o-greenland-9k230i",
      "slug": "turbro-greenland-9k230o-greenland-9k230i",
      "modelId": "model-turbro-greenland-9k230o",
      "outdoorUnitId": "ou-turbro-greenland-9k230o",
      "indoorUnitId": "iu-greenland-9k230i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-9k115o-greenland-9k115i",
      "slug": "turbro-greenland-9k115o-greenland-9k115i",
      "modelId": "model-turbro-greenland-9k115o",
      "outdoorUnitId": "ou-turbro-greenland-9k115o",
      "indoorUnitId": "iu-greenland-9k115i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-24k230o-greenland-24k230i",
      "slug": "turbro-greenland-24k230o-greenland-24k230i",
      "modelId": "model-turbro-greenland-24k230o",
      "outdoorUnitId": "ou-turbro-greenland-24k230o",
      "indoorUnitId": "iu-greenland-24k230i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-18k230o-greenland-18k230i",
      "slug": "turbro-greenland-18k230o-greenland-18k230i",
      "modelId": "model-turbro-greenland-18k230o",
      "outdoorUnitId": "ou-turbro-greenland-18k230o",
      "indoorUnitId": "iu-greenland-18k230i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-12k115o-greenland-12k115i",
      "slug": "turbro-greenland-12k115o-greenland-12k115i",
      "modelId": "model-turbro-greenland-12k115o",
      "outdoorUnitId": "ou-turbro-greenland-12k115o",
      "indoorUnitId": "iu-greenland-12k115i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl9k115-o-gl9k115-i",
      "slug": "turbro-gl9k115-o-gl9k115-i",
      "modelId": "model-turbro-gl9k115-o",
      "outdoorUnitId": "ou-turbro-gl9k115-o",
      "indoorUnitId": "iu-gl9k115-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-m36ko-iu-51900",
      "slug": "turbro-greenland-m36ko-iu-51900",
      "modelId": "model-turbro-greenland-m36ko",
      "outdoorUnitId": "ou-turbro-greenland-m36ko",
      "indoorUnitId": "iu-iu-51900",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl-m18o-iu-51882",
      "slug": "turbro-gl-m18o-iu-51882",
      "modelId": "model-turbro-gl-m18o",
      "outdoorUnitId": "ou-turbro-gl-m18o",
      "indoorUnitId": "iu-iu-51882",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl-m24o-iu-51883",
      "slug": "turbro-gl-m24o-iu-51883",
      "modelId": "model-turbro-gl-m24o",
      "outdoorUnitId": "ou-turbro-gl-m24o",
      "indoorUnitId": "iu-iu-51883",
      "minHeatingTempC": -15,
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl-m27o-iu-51884",
      "slug": "turbro-gl-m27o-iu-51884",
      "modelId": "model-turbro-gl-m27o",
      "outdoorUnitId": "ou-turbro-gl-m27o",
      "indoorUnitId": "iu-iu-51884",
      "minHeatingTempC": -15,
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl12k115-o-gl12k115-i",
      "slug": "turbro-gl12k115-o-gl12k115-i",
      "modelId": "model-turbro-gl12k115-o",
      "outdoorUnitId": "ou-turbro-gl12k115-o",
      "indoorUnitId": "iu-gl12k115-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl18k230-o-gl18k230-i",
      "slug": "turbro-gl18k230-o-gl18k230-i",
      "modelId": "model-turbro-gl18k230-o",
      "outdoorUnitId": "ou-turbro-gl18k230-o",
      "indoorUnitId": "iu-gl18k230-i",
      "minHeatingTempC": -15,
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-greenland-m42ko-iu-51901",
      "slug": "turbro-greenland-m42ko-iu-51901",
      "modelId": "model-turbro-greenland-m42ko",
      "outdoorUnitId": "ou-turbro-greenland-m42ko",
      "indoorUnitId": "iu-iu-51901",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-ll24k-o-ll24k-i",
      "slug": "turbro-ll24k-o-ll24k-i",
      "modelId": "model-turbro-ll24k-o",
      "outdoorUnitId": "ou-turbro-ll24k-o",
      "indoorUnitId": "iu-ll24k-i",
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
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl-m36o-iu-51885",
      "slug": "turbro-gl-m36o-iu-51885",
      "modelId": "model-turbro-gl-m36o",
      "outdoorUnitId": "ou-turbro-gl-m36o",
      "indoorUnitId": "iu-iu-51885",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-turbro-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-turbro-gl24k230-o-gl24k230-i",
      "slug": "turbro-gl24k230-o-gl24k230-i",
      "modelId": "model-turbro-gl24k230-o",
      "outdoorUnitId": "ou-turbro-gl24k230-o",
      "indoorUnitId": "iu-gl24k230-i",
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
          "sourceId": "src-turbro-epa",
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
