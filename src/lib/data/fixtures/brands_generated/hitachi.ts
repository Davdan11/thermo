import type { BrandDataset } from "../../types";

export const brand_hitachiDataset: BrandDataset = {
  "brand": {
    "id": "brand-hitachi",
    "slug": "hitachi",
    "name": "Hitachi",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Hitachi",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-hitachi-epa",
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
      "id": "series-hitachi-aircore700",
      "slug": "hitachi-aircore700",
      "name": "airCore700",
      "brandId": "brand-hitachi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série airCore700 de Hitachi",
      "imageUrl": "/images/series/hitachi-hitachi-aircore700.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-hitachi-hi-uni",
      "slug": "hitachi-hi-uni",
      "name": "Hi UNI",
      "brandId": "brand-hitachi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Hi UNI de Hitachi",
      "imageUrl": "/images/series/hitachi-hitachi-hi-uni.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-hitachi-aircore700-lac",
      "slug": "hitachi-aircore700-lac",
      "name": "airCore700 LAC",
      "brandId": "brand-hitachi",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série airCore700 LAC de Hitachi",
      "imageUrl": "/images/series/hitachi-hitachi-aircore700-lac.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-hitachi-pas-18bufasdq1-lac",
      "slug": "hitachi-pas-18bufasdq1-lac",
      "name": "Hitachi PAS-18BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-18BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-18bufasdq1-lac",
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
      "id": "model-hitachi-pas-18bufasdq1",
      "slug": "hitachi-pas-18bufasdq1",
      "name": "Hitachi PAS-18BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-18BUFASDQ1",
      "normalizedModelNumber": "pas-18bufasdq1",
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
      "id": "model-hitachi-pas-24bufasdq1-lac",
      "slug": "hitachi-pas-24bufasdq1-lac",
      "name": "Hitachi PAS-24BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-24BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-24bufasdq1-lac",
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
      "id": "model-hitachi-pas-24bufasdq1",
      "slug": "hitachi-pas-24bufasdq1",
      "name": "Hitachi PAS-24BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-24BUFASDQ1",
      "normalizedModelNumber": "pas-24bufasdq1",
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
      "id": "model-hitachi-pas-09bufasdq1-lac",
      "slug": "hitachi-pas-09bufasdq1-lac",
      "name": "Hitachi PAS-09BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-09BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-09bufasdq1-lac",
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
      "id": "model-hitachi-pas-12bufasdq1-lac",
      "slug": "hitachi-pas-12bufasdq1-lac",
      "name": "Hitachi PAS-12BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-12BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-12bufasdq1-lac",
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
      "id": "model-hitachi-pas-12blfasdq1",
      "slug": "hitachi-pas-12blfasdq1",
      "name": "Hitachi PAS-12BLFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-12BLFASDQ1",
      "normalizedModelNumber": "pas-12blfasdq1",
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
      "id": "model-hitachi-pas-48bufasdq1-lac",
      "slug": "hitachi-pas-48bufasdq1-lac",
      "name": "Hitachi PAS-48BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-48BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-48bufasdq1-lac",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-hitachi-ras-20pnnbdh1",
      "slug": "hitachi-ras-20pnnbdh1",
      "name": "Hitachi RAS-2.0PNNBDH1",
      "seriesId": "series-hitachi-hi-uni",
      "brandId": "brand-hitachi",
      "modelNumber": "RAS-2.0PNNBDH1",
      "normalizedModelNumber": "ras-2.0pnnbdh1",
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
      "id": "model-hitachi-pas-30bufasdq1-lac",
      "slug": "hitachi-pas-30bufasdq1-lac",
      "name": "Hitachi PAS-30BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-30BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-30bufasdq1-lac",
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
      "id": "model-hitachi-ras-15pnnbdh1",
      "slug": "hitachi-ras-15pnnbdh1",
      "name": "Hitachi RAS-1.5PNNBDH1",
      "seriesId": "series-hitachi-hi-uni",
      "brandId": "brand-hitachi",
      "modelNumber": "RAS-1.5PNNBDH1",
      "normalizedModelNumber": "ras-1.5pnnbdh1",
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
      "id": "model-hitachi-pas-36bufasdq1",
      "slug": "hitachi-pas-36bufasdq1",
      "name": "Hitachi PAS-36BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-36BUFASDQ1",
      "normalizedModelNumber": "pas-36bufasdq1",
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
      "id": "model-hitachi-pas-36bufasdq1-lac",
      "slug": "hitachi-pas-36bufasdq1-lac",
      "name": "Hitachi PAS-36BUFASDQ1-LAC",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-36BUFASDQ1-LAC",
      "normalizedModelNumber": "pas-36bufasdq1-lac",
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
      "id": "model-hitachi-pas-30blfasdq1",
      "slug": "hitachi-pas-30blfasdq1",
      "name": "Hitachi PAS-30BLFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-30BLFASDQ1",
      "normalizedModelNumber": "pas-30blfasdq1",
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
      "id": "model-hitachi-pas-30bufasdq1",
      "slug": "hitachi-pas-30bufasdq1",
      "name": "Hitachi PAS-30BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-30BUFASDQ1",
      "normalizedModelNumber": "pas-30bufasdq1",
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
      "id": "model-hitachi-pas-24blfasdq1",
      "slug": "hitachi-pas-24blfasdq1",
      "name": "Hitachi PAS-24BLFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-24BLFASDQ1",
      "normalizedModelNumber": "pas-24blfasdq1",
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
      "id": "model-hitachi-pas-18blfasdq1",
      "slug": "hitachi-pas-18blfasdq1",
      "name": "Hitachi PAS-18BLFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-18BLFASDQ1",
      "normalizedModelNumber": "pas-18blfasdq1",
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
      "id": "model-hitachi-pas-36blfasdq1",
      "slug": "hitachi-pas-36blfasdq1",
      "name": "Hitachi PAS-36BLFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-36BLFASDQ1",
      "normalizedModelNumber": "pas-36blfasdq1",
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
      "id": "model-hitachi-ras-10pnnbdh1",
      "slug": "hitachi-ras-10pnnbdh1",
      "name": "Hitachi RAS-1.0PNNBDH1",
      "seriesId": "series-hitachi-hi-uni",
      "brandId": "brand-hitachi",
      "modelNumber": "RAS-1.0PNNBDH1",
      "normalizedModelNumber": "ras-1.0pnnbdh1",
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
      "id": "model-hitachi-ras-30pnnbdh1",
      "slug": "hitachi-ras-30pnnbdh1",
      "name": "Hitachi RAS-3.0PNNBDH1",
      "seriesId": "series-hitachi-hi-uni",
      "brandId": "brand-hitachi",
      "modelNumber": "RAS-3.0PNNBDH1",
      "normalizedModelNumber": "ras-3.0pnnbdh1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23400,
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
      "id": "model-hitachi-pas-48bufasdq1",
      "slug": "hitachi-pas-48bufasdq1",
      "name": "Hitachi PAS-48BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-48BUFASDQ1",
      "normalizedModelNumber": "pas-48bufasdq1",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45000,
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
      "id": "model-hitachi-pas-12bufasdq1",
      "slug": "hitachi-pas-12bufasdq1",
      "name": "Hitachi PAS-12BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-12BUFASDQ1",
      "normalizedModelNumber": "pas-12bufasdq1",
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
      "id": "model-hitachi-pas-09bufasdq1",
      "slug": "hitachi-pas-09bufasdq1",
      "name": "Hitachi PAS-09BUFASDQ1",
      "seriesId": "series-hitachi-aircore700",
      "brandId": "brand-hitachi",
      "modelNumber": "PAS-09BUFASDQ1",
      "normalizedModelNumber": "pas-09bufasdq1",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-hitachi-pas-18bufasdq1-lac",
      "modelNumber": "PAS-18BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-18bufasdq1",
      "modelNumber": "PAS-18BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-24bufasdq1-lac",
      "modelNumber": "PAS-24BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-24bufasdq1",
      "modelNumber": "PAS-24BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-09bufasdq1-lac",
      "modelNumber": "PAS-09BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-12bufasdq1-lac",
      "modelNumber": "PAS-12BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-12blfasdq1",
      "modelNumber": "PAS-12BLFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-48bufasdq1-lac",
      "modelNumber": "PAS-48BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-ras-20pnnbdh1",
      "modelNumber": "RAS-2.0PNNBDH1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-hitachi-pas-30bufasdq1-lac",
      "modelNumber": "PAS-30BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-ras-15pnnbdh1",
      "modelNumber": "RAS-1.5PNNBDH1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-hitachi-pas-36bufasdq1",
      "modelNumber": "PAS-36BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-36bufasdq1-lac",
      "modelNumber": "PAS-36BUFASDQ1-LAC",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-30blfasdq1",
      "modelNumber": "PAS-30BLFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-30bufasdq1",
      "modelNumber": "PAS-30BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-24blfasdq1",
      "modelNumber": "PAS-24BLFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-18blfasdq1",
      "modelNumber": "PAS-18BLFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-36blfasdq1",
      "modelNumber": "PAS-36BLFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-ras-10pnnbdh1",
      "modelNumber": "RAS-1.0PNNBDH1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-hitachi-ras-30pnnbdh1",
      "modelNumber": "RAS-3.0PNNBDH1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-hitachi-pas-48bufasdq1",
      "modelNumber": "PAS-48BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-12bufasdq1",
      "modelNumber": "PAS-12BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-hitachi-pas-09bufasdq1",
      "modelNumber": "PAS-09BUFASDQ1",
      "brandId": "brand-hitachi",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-pci-b18ufa1dq",
      "modelNumber": "PCI-B18UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-pci-b24ufa1dq",
      "modelNumber": "PCI-B24UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-pcim-b09ufa1dq",
      "modelNumber": "PCIM-B09UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-pcim-b12ufa1dq",
      "modelNumber": "PCIM-B12UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppk-b12ufa1dq",
      "modelNumber": "PPK-B12UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b09ufa1dq",
      "modelNumber": "PPFC-B09UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppk-b18ufa1dq",
      "modelNumber": "PPK-B18UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b18ufa1dq",
      "modelNumber": "PPFC-B18UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-pci-b48ufa1dq",
      "modelNumber": "PCI-B48UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppk-b09ufa1dq",
      "modelNumber": "PPK-B09UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b12ufa1dq",
      "modelNumber": "PPFC-B12UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rpk-20pnn1dh",
      "modelNumber": "RPK-2.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppk-b30ufa1dq",
      "modelNumber": "PPK-B30UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppk-b24ufa1dq",
      "modelNumber": "PPK-B24UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rpk-15pnn1dh",
      "modelNumber": "RPK-1.5PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-pci-b36ufa1dq",
      "modelNumber": "PCI-B36UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-pci-b30ufa1dq",
      "modelNumber": "PCI-B30UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b24ufa1dq",
      "modelNumber": "PPFC-B24UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b18ufa1dq",
      "modelNumber": "PPIM-B18UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b48ufa1dq",
      "modelNumber": "PPIM-B48UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b12ufa1dq",
      "modelNumber": "PPIM-B12UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rcim-15pnn1dh",
      "modelNumber": "RCIM-1.5PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rcim-10pnn1dh",
      "modelNumber": "RCIM-1.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rpk-30pnn1dh",
      "modelNumber": "RPK-3.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b48ufa1dq",
      "modelNumber": "PPFC-B48UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rci-20pnn1dh",
      "modelNumber": "RCI-2.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppk-b36ufa1dq",
      "modelNumber": "PPK-B36UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b09ufa1dq",
      "modelNumber": "PPIM-B09UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b30ufa1dq",
      "modelNumber": "PPIM-B30UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b24ufa1dq",
      "modelNumber": "PPIM-B24UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rpk-10pnn1dh",
      "modelNumber": "RPK-1.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppim-b36ufa1dq",
      "modelNumber": "PPIM-B36UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b30ufa1dq",
      "modelNumber": "PPFC-B30UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-ppfc-b36ufa1dq",
      "modelNumber": "PPFC-B36UFA1DQ",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rci-30pnn1dh",
      "modelNumber": "RCI-3.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-rpil-10pnn1dh",
      "modelNumber": "RPIL-1.0PNN1DH",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe18b3xb2hs2",
      "modelNumber": "JPE18B3XB2HS2",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe18b3xb2hs1a",
      "modelNumber": "JPE18B3XB2HS1A",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe48c3xg2hs1a",
      "modelNumber": "JPE48C3XG2HS1A",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe48c3xg2hs2",
      "modelNumber": "JPE48C3XG2HS2",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe24b3xc2hs2",
      "modelNumber": "JPE24B3XC2HS2",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe24b3xc2hs1a",
      "modelNumber": "JPE24B3XC2HS1A",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe36b3xd2hs1a",
      "modelNumber": "JPE36B3XD2HS1A",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe36b3xd2hs2",
      "modelNumber": "JPE36B3XD2HS2",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe30b3xd2hs1a",
      "modelNumber": "JPE30B3XD2HS1A",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    },
    {
      "id": "iu-jpe30b3xd2hs2",
      "modelNumber": "JPE30B3XD2HS2",
      "brandId": "brand-hitachi",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-hitachi-pas-18bufasdq1-lac-pci-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-lac-pci-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1-lac",
      "indoorUnitId": "iu-pci-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-pci-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-pci-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1",
      "indoorUnitId": "iu-pci-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-lac-pci-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-lac-pci-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1-lac",
      "indoorUnitId": "iu-pci-b24ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-pci-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-pci-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1",
      "indoorUnitId": "iu-pci-b24ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-09bufasdq1-lac-pcim-b09ufa1dq",
      "slug": "hitachi-pas-09bufasdq1-lac-pcim-b09ufa1dq",
      "modelId": "model-hitachi-pas-09bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-09bufasdq1-lac",
      "indoorUnitId": "iu-pcim-b09ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-lac-pcim-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-lac-pcim-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1-lac",
      "indoorUnitId": "iu-pcim-b12ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-lac-ppk-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-lac-ppk-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1-lac",
      "indoorUnitId": "iu-ppk-b12ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-09bufasdq1-lac-ppfc-b09ufa1dq",
      "slug": "hitachi-pas-09bufasdq1-lac-ppfc-b09ufa1dq",
      "modelId": "model-hitachi-pas-09bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-09bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b09ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12blfasdq1-pcim-b12ufa1dq",
      "slug": "hitachi-pas-12blfasdq1-pcim-b12ufa1dq",
      "modelId": "model-hitachi-pas-12blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-12blfasdq1",
      "indoorUnitId": "iu-pcim-b12ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-lac-ppk-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-lac-ppk-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1-lac",
      "indoorUnitId": "iu-ppk-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-lac-ppfc-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-lac-ppfc-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-ppk-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-ppk-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1",
      "indoorUnitId": "iu-ppk-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-lac-pci-b48ufa1dq",
      "slug": "hitachi-pas-48bufasdq1-lac-pci-b48ufa1dq",
      "modelId": "model-hitachi-pas-48bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1-lac",
      "indoorUnitId": "iu-pci-b48ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-09bufasdq1-lac-ppk-b09ufa1dq",
      "slug": "hitachi-pas-09bufasdq1-lac-ppk-b09ufa1dq",
      "modelId": "model-hitachi-pas-09bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-09bufasdq1-lac",
      "indoorUnitId": "iu-ppk-b09ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-lac-ppfc-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-lac-ppfc-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b12ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-20pnnbdh1-rpk-20pnn1dh",
      "slug": "hitachi-ras-20pnnbdh1-rpk-20pnn1dh",
      "modelId": "model-hitachi-ras-20pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-20pnnbdh1",
      "indoorUnitId": "iu-rpk-20pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-lac-ppk-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-lac-ppk-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1-lac",
      "indoorUnitId": "iu-ppk-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-lac-ppk-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-lac-ppk-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1-lac",
      "indoorUnitId": "iu-ppk-b24ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-15pnnbdh1-rpk-15pnn1dh",
      "slug": "hitachi-ras-15pnnbdh1-rpk-15pnn1dh",
      "modelId": "model-hitachi-ras-15pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-15pnnbdh1",
      "indoorUnitId": "iu-rpk-15pnn1dh",
      "minHeatingTempC": -25,
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-ppk-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-ppk-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1",
      "indoorUnitId": "iu-ppk-b24ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-pci-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-pci-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1",
      "indoorUnitId": "iu-pci-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-lac-pci-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-lac-pci-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1-lac",
      "indoorUnitId": "iu-pci-b36ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30blfasdq1-ppk-b30ufa1dq",
      "slug": "hitachi-pas-30blfasdq1-ppk-b30ufa1dq",
      "modelId": "model-hitachi-pas-30blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30blfasdq1",
      "indoorUnitId": "iu-ppk-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-pci-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-pci-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1",
      "indoorUnitId": "iu-pci-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-ppfc-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-ppfc-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1",
      "indoorUnitId": "iu-ppfc-b18ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24blfasdq1-pci-b24ufa1dq",
      "slug": "hitachi-pas-24blfasdq1-pci-b24ufa1dq",
      "modelId": "model-hitachi-pas-24blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24blfasdq1",
      "indoorUnitId": "iu-pci-b24ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-lac-ppfc-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-lac-ppfc-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b24ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-lac-ppim-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-lac-ppim-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18blfasdq1-pci-b18ufa1dq",
      "slug": "hitachi-pas-18blfasdq1-pci-b18ufa1dq",
      "modelId": "model-hitachi-pas-18blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18blfasdq1",
      "indoorUnitId": "iu-pci-b18ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-lac-ppim-b48ufa1dq",
      "slug": "hitachi-pas-48bufasdq1-lac-ppim-b48ufa1dq",
      "modelId": "model-hitachi-pas-48bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b48ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-ppk-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-ppk-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1",
      "indoorUnitId": "iu-ppk-b30ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-lac-pci-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-lac-pci-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1-lac",
      "indoorUnitId": "iu-pci-b30ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36blfasdq1-pci-b36ufa1dq",
      "slug": "hitachi-pas-36blfasdq1-pci-b36ufa1dq",
      "modelId": "model-hitachi-pas-36blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36blfasdq1",
      "indoorUnitId": "iu-pci-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-lac-ppim-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-lac-ppim-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b12ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-15pnnbdh1-rcim-15pnn1dh",
      "slug": "hitachi-ras-15pnnbdh1-rcim-15pnn1dh",
      "modelId": "model-hitachi-ras-15pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-15pnnbdh1",
      "indoorUnitId": "iu-rcim-15pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-ppfc-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-ppfc-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1",
      "indoorUnitId": "iu-ppfc-b24ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-10pnnbdh1-rcim-10pnn1dh",
      "slug": "hitachi-ras-10pnnbdh1-rcim-10pnn1dh",
      "modelId": "model-hitachi-ras-10pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-10pnnbdh1",
      "indoorUnitId": "iu-rcim-10pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-30pnnbdh1-rpk-30pnn1dh",
      "slug": "hitachi-ras-30pnnbdh1-rpk-30pnn1dh",
      "modelId": "model-hitachi-ras-30pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-30pnnbdh1",
      "indoorUnitId": "iu-rpk-30pnn1dh",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-lac-ppfc-b48ufa1dq",
      "slug": "hitachi-pas-48bufasdq1-lac-ppfc-b48ufa1dq",
      "modelId": "model-hitachi-pas-48bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b48ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-20pnnbdh1-rci-20pnn1dh",
      "slug": "hitachi-ras-20pnnbdh1-rci-20pnn1dh",
      "modelId": "model-hitachi-ras-20pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-20pnnbdh1",
      "indoorUnitId": "iu-rci-20pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30blfasdq1-pci-b30ufa1dq",
      "slug": "hitachi-pas-30blfasdq1-pci-b30ufa1dq",
      "modelId": "model-hitachi-pas-30blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30blfasdq1",
      "indoorUnitId": "iu-pci-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-ppk-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-ppk-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1",
      "indoorUnitId": "iu-ppk-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-09bufasdq1-lac-ppim-b09ufa1dq",
      "slug": "hitachi-pas-09bufasdq1-lac-ppim-b09ufa1dq",
      "modelId": "model-hitachi-pas-09bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-09bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b09ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-lac-ppim-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-lac-ppim-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b30ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-pci-b48ufa1dq",
      "slug": "hitachi-pas-48bufasdq1-pci-b48ufa1dq",
      "modelId": "model-hitachi-pas-48bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1",
      "indoorUnitId": "iu-pci-b48ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-lac-ppk-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-lac-ppk-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1-lac",
      "indoorUnitId": "iu-ppk-b36ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-lac-ppim-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-lac-ppim-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b24ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-10pnnbdh1-rpk-10pnn1dh",
      "slug": "hitachi-ras-10pnnbdh1-rpk-10pnn1dh",
      "modelId": "model-hitachi-ras-10pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-10pnnbdh1",
      "indoorUnitId": "iu-rpk-10pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-lac-ppim-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-lac-ppim-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1-lac",
      "indoorUnitId": "iu-ppim-b36ufa1dq",
      "minHeatingTempC": -25,
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-ppim-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-ppim-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1",
      "indoorUnitId": "iu-ppim-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-lac-ppfc-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-lac-ppfc-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-ppim-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-ppim-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1",
      "indoorUnitId": "iu-ppim-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.6,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-lac-ppfc-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-lac-ppfc-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1-lac",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1-lac",
      "indoorUnitId": "iu-ppfc-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.4,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-ppim-b18ufa1dq",
      "slug": "hitachi-pas-18bufasdq1-ppim-b18ufa1dq",
      "modelId": "model-hitachi-pas-18bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1",
      "indoorUnitId": "iu-ppim-b18ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-ppim-b24ufa1dq",
      "slug": "hitachi-pas-24bufasdq1-ppim-b24ufa1dq",
      "modelId": "model-hitachi-pas-24bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1",
      "indoorUnitId": "iu-ppim-b24ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30blfasdq1-ppim-b30ufa1dq",
      "slug": "hitachi-pas-30blfasdq1-ppim-b30ufa1dq",
      "modelId": "model-hitachi-pas-30blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30blfasdq1",
      "indoorUnitId": "iu-ppim-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18blfasdq1-ppim-b18ufa1dq",
      "slug": "hitachi-pas-18blfasdq1-ppim-b18ufa1dq",
      "modelId": "model-hitachi-pas-18blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18blfasdq1",
      "indoorUnitId": "iu-ppim-b18ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12blfasdq1-ppim-b12ufa1dq",
      "slug": "hitachi-pas-12blfasdq1-ppim-b12ufa1dq",
      "modelId": "model-hitachi-pas-12blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-12blfasdq1",
      "indoorUnitId": "iu-ppim-b12ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-ppim-b48ufa1dq",
      "slug": "hitachi-pas-48bufasdq1-ppim-b48ufa1dq",
      "modelId": "model-hitachi-pas-48bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1",
      "indoorUnitId": "iu-ppim-b48ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-ppfc-b30ufa1dq",
      "slug": "hitachi-pas-30bufasdq1-ppfc-b30ufa1dq",
      "modelId": "model-hitachi-pas-30bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1",
      "indoorUnitId": "iu-ppfc-b30ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36blfasdq1-ppim-b36ufa1dq",
      "slug": "hitachi-pas-36blfasdq1-ppim-b36ufa1dq",
      "modelId": "model-hitachi-pas-36blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36blfasdq1",
      "indoorUnitId": "iu-ppim-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-30pnnbdh1-rci-30pnn1dh",
      "slug": "hitachi-ras-30pnnbdh1-rci-30pnn1dh",
      "modelId": "model-hitachi-ras-30pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-30pnnbdh1",
      "indoorUnitId": "iu-rci-30pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24blfasdq1-ppim-b24ufa1dq",
      "slug": "hitachi-pas-24blfasdq1-ppim-b24ufa1dq",
      "modelId": "model-hitachi-pas-24blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24blfasdq1",
      "indoorUnitId": "iu-ppim-b24ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-ppfc-b48ufa1dq",
      "slug": "hitachi-pas-48bufasdq1-ppfc-b48ufa1dq",
      "modelId": "model-hitachi-pas-48bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1",
      "indoorUnitId": "iu-ppfc-b48ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-ras-10pnnbdh1-rpil-10pnn1dh",
      "slug": "hitachi-ras-10pnnbdh1-rpil-10pnn1dh",
      "modelId": "model-hitachi-ras-10pnnbdh1",
      "outdoorUnitId": "ou-hitachi-ras-10pnnbdh1",
      "indoorUnitId": "iu-rpil-10pnn1dh",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36bufasdq1-ppfc-b36ufa1dq",
      "slug": "hitachi-pas-36bufasdq1-ppfc-b36ufa1dq",
      "modelId": "model-hitachi-pas-36bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36bufasdq1",
      "indoorUnitId": "iu-ppfc-b36ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-jpe18b3xb2hs2",
      "slug": "hitachi-pas-18bufasdq1-jpe18b3xb2hs2",
      "modelId": "model-hitachi-pas-18bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1",
      "indoorUnitId": "iu-jpe18b3xb2hs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18bufasdq1-jpe18b3xb2hs1a",
      "slug": "hitachi-pas-18bufasdq1-jpe18b3xb2hs1a",
      "modelId": "model-hitachi-pas-18bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18bufasdq1",
      "indoorUnitId": "iu-jpe18b3xb2hs1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18blfasdq1-jpe18b3xb2hs2",
      "slug": "hitachi-pas-18blfasdq1-jpe18b3xb2hs2",
      "modelId": "model-hitachi-pas-18blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18blfasdq1",
      "indoorUnitId": "iu-jpe18b3xb2hs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-18blfasdq1-jpe18b3xb2hs1a",
      "slug": "hitachi-pas-18blfasdq1-jpe18b3xb2hs1a",
      "modelId": "model-hitachi-pas-18blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-18blfasdq1",
      "indoorUnitId": "iu-jpe18b3xb2hs1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-jpe48c3xg2hs1a",
      "slug": "hitachi-pas-48bufasdq1-jpe48c3xg2hs1a",
      "modelId": "model-hitachi-pas-48bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1",
      "indoorUnitId": "iu-jpe48c3xg2hs1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-48bufasdq1-jpe48c3xg2hs2",
      "slug": "hitachi-pas-48bufasdq1-jpe48c3xg2hs2",
      "modelId": "model-hitachi-pas-48bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-48bufasdq1",
      "indoorUnitId": "iu-jpe48c3xg2hs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-jpe24b3xc2hs2",
      "slug": "hitachi-pas-24bufasdq1-jpe24b3xc2hs2",
      "modelId": "model-hitachi-pas-24bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1",
      "indoorUnitId": "iu-jpe24b3xc2hs2",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-ppfc-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-ppfc-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1",
      "indoorUnitId": "iu-ppfc-b12ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-24bufasdq1-jpe24b3xc2hs1a",
      "slug": "hitachi-pas-24bufasdq1-jpe24b3xc2hs1a",
      "modelId": "model-hitachi-pas-24bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-24bufasdq1",
      "indoorUnitId": "iu-jpe24b3xc2hs1a",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-09bufasdq1-ppfc-b09ufa1dq",
      "slug": "hitachi-pas-09bufasdq1-ppfc-b09ufa1dq",
      "modelId": "model-hitachi-pas-09bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-09bufasdq1",
      "indoorUnitId": "iu-ppfc-b09ufa1dq",
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36blfasdq1-jpe36b3xd2hs1a",
      "slug": "hitachi-pas-36blfasdq1-jpe36b3xd2hs1a",
      "modelId": "model-hitachi-pas-36blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36blfasdq1",
      "indoorUnitId": "iu-jpe36b3xd2hs1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-36blfasdq1-jpe36b3xd2hs2",
      "slug": "hitachi-pas-36blfasdq1-jpe36b3xd2hs2",
      "modelId": "model-hitachi-pas-36blfasdq1",
      "outdoorUnitId": "ou-hitachi-pas-36blfasdq1",
      "indoorUnitId": "iu-jpe36b3xd2hs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-ppim-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-ppim-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1",
      "indoorUnitId": "iu-ppim-b12ufa1dq",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.2,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-12bufasdq1-ppk-b12ufa1dq",
      "slug": "hitachi-pas-12bufasdq1-ppk-b12ufa1dq",
      "modelId": "model-hitachi-pas-12bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-12bufasdq1",
      "indoorUnitId": "iu-ppk-b12ufa1dq",
      "minHeatingTempC": -15,
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
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-jpe30b3xd2hs1a",
      "slug": "hitachi-pas-30bufasdq1-jpe30b3xd2hs1a",
      "modelId": "model-hitachi-pas-30bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1",
      "indoorUnitId": "iu-jpe30b3xd2hs1a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-hitachi-pas-30bufasdq1-jpe30b3xd2hs2",
      "slug": "hitachi-pas-30bufasdq1-jpe30b3xd2hs2",
      "modelId": "model-hitachi-pas-30bufasdq1",
      "outdoorUnitId": "ou-hitachi-pas-30bufasdq1",
      "indoorUnitId": "iu-jpe30b3xd2hs2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-hitachi-epa",
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
