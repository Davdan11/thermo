import type { BrandDataset } from "../../types";

export const brand_forestairDataset: BrandDataset = {
  "brand": {
    "id": "brand-forestair",
    "slug": "forestair",
    "name": "ForestAir",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ForestAir",
    activeInQuebec: false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-forestair-epa",
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
      "id": "series-forestair-pular",
      "slug": "forestair-pular",
      "name": "Pular",
      "brandId": "brand-forestair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Pular de ForestAir",
      "imageUrl": "/images/series/forestair-forestair-pular.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-forestair-e24-es454",
      "slug": "forestair-e24-es454",
      "name": "E24-ES454",
      "brandId": "brand-forestair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série E24-ES454 de ForestAir",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-forestair-mz24-es454",
      "slug": "forestair-mz24-es454",
      "name": "MZ24-ES454",
      "brandId": "brand-forestair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MZ24-ES454 de ForestAir",
      "imageUrl": "/images/series/forestair-forestair-mz24-es454.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-forestair-sz24-es454",
      "slug": "forestair-sz24-es454",
      "name": "SZ24-ES454",
      "brandId": "brand-forestair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SZ24-ES454 de ForestAir",
      "imageUrl": "/images/series/forestair-forestair-sz24-es454.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-forestair-split-ahu",
      "slug": "forestair-split-ahu",
      "name": "Split AHU",
      "brandId": "brand-forestair",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Split AHU de ForestAir",
      "imageUrl": "/images/series/forestair-forestair-split-ahu.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-forestair-side-discharge",
      "slug": "forestair-side-discharge",
      "name": "SIDE-DISCHARGE",
      "brandId": "brand-forestair",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SIDE-DISCHARGE de ForestAir",
      "imageUrl": "/images/series/forestair-forestair-side-discharge.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-forestair-fgh-09ese25-o",
      "slug": "forestair-fgh-09ese25-o",
      "name": "ForestAir FGH-09ES/E25-O",
      "seriesId": "series-forestair-pular",
      "brandId": "brand-forestair",
      "modelNumber": "FGH-09ES/E25-O",
      "normalizedModelNumber": "fgh-09es/e25-o",
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
      "id": "model-forestair-fgh-12ese25-o",
      "slug": "forestair-fgh-12ese25-o",
      "name": "ForestAir FGH-12ES/E25-O",
      "seriesId": "series-forestair-pular",
      "brandId": "brand-forestair",
      "modelNumber": "FGH-12ES/E25-O",
      "normalizedModelNumber": "fgh-12es/e25-o",
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
      "id": "model-forestair-fa-h12-d24tl-o-454",
      "slug": "forestair-fa-h12-d24tl-o-454",
      "name": "ForestAir FA-H12-D24TL-O-454",
      "seriesId": "series-forestair-e24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H12-D24TL-O-454",
      "normalizedModelNumber": "fa-h12-d24tl-o-454",
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
      "id": "model-forestair-fa-m18-d2tl-o-454",
      "slug": "forestair-fa-m18-d2tl-o-454",
      "name": "ForestAir FA-M18-D2TL-O-454",
      "seriesId": "series-forestair-mz24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-M18-D2TL-O-454",
      "normalizedModelNumber": "fa-m18-d2tl-o-454",
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
      "id": "model-forestair-fa-m27-d3tl-o-454",
      "slug": "forestair-fa-m27-d3tl-o-454",
      "name": "ForestAir FA-M27-D3TL-O-454",
      "seriesId": "series-forestair-mz24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-M27-D3TL-O-454",
      "normalizedModelNumber": "fa-m27-d3tl-o-454",
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
      "id": "model-forestair-fgh-24ese25-o",
      "slug": "forestair-fgh-24ese25-o",
      "name": "ForestAir FGH-24ES/E25-O",
      "seriesId": "series-forestair-pular",
      "brandId": "brand-forestair",
      "modelNumber": "FGH-24ES/E25-O",
      "normalizedModelNumber": "fgh-24es/e25-o",
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
      "id": "model-forestair-fa-h09-a24tl-o-454",
      "slug": "forestair-fa-h09-a24tl-o-454",
      "name": "ForestAir FA-H09-A24TL-O-454",
      "seriesId": "series-forestair-e24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H09-A24TL-O-454",
      "normalizedModelNumber": "fa-h09-a24tl-o-454",
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
      "id": "model-forestair-fa-h09-d24tl-o-454",
      "slug": "forestair-fa-h09-d24tl-o-454",
      "name": "ForestAir FA-H09-D24TL-O-454",
      "seriesId": "series-forestair-e24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H09-D24TL-O-454",
      "normalizedModelNumber": "fa-h09-d24tl-o-454",
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
      "id": "model-forestair-fa-h24-d24tl-o-454",
      "slug": "forestair-fa-h24-d24tl-o-454",
      "name": "ForestAir FA-H24-D24TL-O-454",
      "seriesId": "series-forestair-e24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H24-D24TL-O-454",
      "normalizedModelNumber": "fa-h24-d24tl-o-454",
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
      "id": "model-forestair-fa-h18-d24tl-o-454",
      "slug": "forestair-fa-h18-d24tl-o-454",
      "name": "ForestAir FA-H18-D24TL-O-454",
      "seriesId": "series-forestair-e24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H18-D24TL-O-454",
      "normalizedModelNumber": "fa-h18-d24tl-o-454",
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
      "id": "model-forestair-fa-h12-a24tl-o-454",
      "slug": "forestair-fa-h12-a24tl-o-454",
      "name": "ForestAir FA-H12-A24TL-O-454",
      "seriesId": "series-forestair-e24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H12-A24TL-O-454",
      "normalizedModelNumber": "fa-h12-a24tl-o-454",
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
      "id": "model-forestair-fa-m36-d4tl-o-454",
      "slug": "forestair-fa-m36-d4tl-o-454",
      "name": "ForestAir FA-M36-D4TL-O-454",
      "seriesId": "series-forestair-mz24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-M36-D4TL-O-454",
      "normalizedModelNumber": "fa-m36-d4tl-o-454",
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
      "id": "model-forestair-fa-m42-d5tl-o-454",
      "slug": "forestair-fa-m42-d5tl-o-454",
      "name": "ForestAir FA-M42-D5TL-O-454",
      "seriesId": "series-forestair-mz24-es454",
      "brandId": "brand-forestair",
      "modelNumber": "FA-M42-D5TL-O-454",
      "normalizedModelNumber": "fa-m42-d5tl-o-454",
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
      "id": "model-forestair-fa-h24-vkceod-454",
      "slug": "forestair-fa-h24-vkceod-454",
      "name": "ForestAir FA-H24-VKCE/OD-454",
      "seriesId": "series-forestair-split-ahu",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H24-VKCE/OD-454",
      "normalizedModelNumber": "fa-h24-vkce/od-454",
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
      "id": "model-forestair-fa-h36-vkceod-454",
      "slug": "forestair-fa-h36-vkceod-454",
      "name": "ForestAir FA-H36-VKCE/OD-454",
      "seriesId": "series-forestair-split-ahu",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H36-VKCE/OD-454",
      "normalizedModelNumber": "fa-h36-vkce/od-454",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 34200,
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
      "id": "model-forestair-fa-h48-vkceod-454",
      "slug": "forestair-fa-h48-vkceod-454",
      "name": "ForestAir FA-H48-VKCE/OD-454",
      "seriesId": "series-forestair-split-ahu",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H48-VKCE/OD-454",
      "normalizedModelNumber": "fa-h48-vkce/od-454",
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
      "id": "model-forestair-fa-h60-vkceod-454",
      "slug": "forestair-fa-h60-vkceod-454",
      "name": "ForestAir FA-H60-VKCE/OD-454",
      "seriesId": "series-forestair-split-ahu",
      "brandId": "brand-forestair",
      "modelNumber": "FA-H60-VKCE/OD-454",
      "normalizedModelNumber": "fa-h60-vkce/od-454",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-forestair-fgh-09ese25-o",
      "modelNumber": "FGH-09ES/E25-O",
      "brandId": "brand-forestair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-forestair-fgh-12ese25-o",
      "modelNumber": "FGH-12ES/E25-O",
      "brandId": "brand-forestair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-forestair-fa-h12-d24tl-o-454",
      "modelNumber": "FA-H12-D24TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-m18-d2tl-o-454",
      "modelNumber": "FA-M18-D2TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-m27-d3tl-o-454",
      "modelNumber": "FA-M27-D3TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fgh-24ese25-o",
      "modelNumber": "FGH-24ES/E25-O",
      "brandId": "brand-forestair",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-forestair-fa-h09-a24tl-o-454",
      "modelNumber": "FA-H09-A24TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h09-d24tl-o-454",
      "modelNumber": "FA-H09-D24TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h24-d24tl-o-454",
      "modelNumber": "FA-H24-D24TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h18-d24tl-o-454",
      "modelNumber": "FA-H18-D24TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h12-a24tl-o-454",
      "modelNumber": "FA-H12-A24TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-m36-d4tl-o-454",
      "modelNumber": "FA-M36-D4TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-m42-d5tl-o-454",
      "modelNumber": "FA-M42-D5TL-O-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h24-vkceod-454",
      "modelNumber": "FA-H24-VKCE/OD-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h36-vkceod-454",
      "modelNumber": "FA-H36-VKCE/OD-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h48-vkceod-454",
      "modelNumber": "FA-H48-VKCE/OD-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-forestair-fa-h60-vkceod-454",
      "modelNumber": "FA-H60-VKCE/OD-454",
      "brandId": "brand-forestair",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-fgh-09ese25-i",
      "modelNumber": "FGH-09ES/E25-I",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fgh-12ese25-i",
      "modelNumber": "FGH-12ES/E25-I",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h12-d24tl-i-454",
      "modelNumber": "FA-H12-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44559",
      "modelNumber": "IU-44559",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44560",
      "modelNumber": "IU-44560",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fgh-24ese25-i",
      "modelNumber": "FGH-24ES/E25-I",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h09-a24tl-i-454",
      "modelNumber": "FA-H09-A24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h09-d24tl-i-454",
      "modelNumber": "FA-H09-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h24-d24tl-i-454",
      "modelNumber": "FA-H24-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h18-d24tl-i-454",
      "modelNumber": "FA-H18-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-k09-d24tl-i-454",
      "modelNumber": "FA-K09-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h12-a24tl-i-454",
      "modelNumber": "FA-H12-A24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-k24-d24tl-i-454",
      "modelNumber": "FA-K24-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44561",
      "modelNumber": "IU-44561",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44562",
      "modelNumber": "IU-44562",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-k12-d24tl-i-454",
      "modelNumber": "FA-K12-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-c18-d24tl-i-454",
      "modelNumber": "FA-C18-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-k18-d24tl-i-454",
      "modelNumber": "FA-K18-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44551",
      "modelNumber": "IU-44551",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-f24-d24tl-i-454",
      "modelNumber": "FA-F24-D24TL-I-454",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44544",
      "modelNumber": "IU-44544",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44548",
      "modelNumber": "IU-44548",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44555",
      "modelNumber": "IU-44555",
      "brandId": "brand-forestair",
      "type": "wall-single"
    },
    {
      "id": "iu-fa-h24-vkceah-454-sl",
      "modelNumber": "FA-H24-VKCE/AH-454 (SL)",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h24-vkceah-454",
      "modelNumber": "FA-H24-VKCE/AH-454",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h36-vkceah-454-sl",
      "modelNumber": "FA-H36-VKCE/AH-454 (SL)",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h36-vkceah-454",
      "modelNumber": "FA-H36-VKCE/AH-454",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h48-vkceah-454-sl",
      "modelNumber": "FA-H48-VKCE/AH-454 (SL)",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h48-vkceah-454",
      "modelNumber": "FA-H48-VKCE/AH-454",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h60-vkceah-454-sl",
      "modelNumber": "FA-H60-VKCE/AH-454 (SL)",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    },
    {
      "id": "iu-fa-h60-vkceah-454",
      "modelNumber": "FA-H60-VKCE/AH-454",
      "brandId": "brand-forestair",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-forestair-fgh-09ese25-o-fgh-09ese25-i",
      "slug": "forestair-fgh-09ese25-o-fgh-09ese25-i",
      "modelId": "model-forestair-fgh-09ese25-o",
      "outdoorUnitId": "ou-forestair-fgh-09ese25-o",
      "indoorUnitId": "iu-fgh-09ese25-i",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fgh-12ese25-o-fgh-12ese25-i",
      "slug": "forestair-fgh-12ese25-o-fgh-12ese25-i",
      "modelId": "model-forestair-fgh-12ese25-o",
      "outdoorUnitId": "ou-forestair-fgh-12ese25-o",
      "indoorUnitId": "iu-fgh-12ese25-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h12-d24tl-o-454-fa-h12-d24tl-i-454",
      "slug": "forestair-fa-h12-d24tl-o-454-fa-h12-d24tl-i-454",
      "modelId": "model-forestair-fa-h12-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h12-d24tl-o-454",
      "indoorUnitId": "iu-fa-h12-d24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-m18-d2tl-o-454-iu-44559",
      "slug": "forestair-fa-m18-d2tl-o-454-iu-44559",
      "modelId": "model-forestair-fa-m18-d2tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-m18-d2tl-o-454",
      "indoorUnitId": "iu-iu-44559",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-m27-d3tl-o-454-iu-44560",
      "slug": "forestair-fa-m27-d3tl-o-454-iu-44560",
      "modelId": "model-forestair-fa-m27-d3tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-m27-d3tl-o-454",
      "indoorUnitId": "iu-iu-44560",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fgh-24ese25-o-fgh-24ese25-i",
      "slug": "forestair-fgh-24ese25-o-fgh-24ese25-i",
      "modelId": "model-forestair-fgh-24ese25-o",
      "outdoorUnitId": "ou-forestair-fgh-24ese25-o",
      "indoorUnitId": "iu-fgh-24ese25-i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h09-a24tl-o-454-fa-h09-a24tl-i-454",
      "slug": "forestair-fa-h09-a24tl-o-454-fa-h09-a24tl-i-454",
      "modelId": "model-forestair-fa-h09-a24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h09-a24tl-o-454",
      "indoorUnitId": "iu-fa-h09-a24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h09-d24tl-o-454-fa-h09-d24tl-i-454",
      "slug": "forestair-fa-h09-d24tl-o-454-fa-h09-d24tl-i-454",
      "modelId": "model-forestair-fa-h09-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h09-d24tl-o-454",
      "indoorUnitId": "iu-fa-h09-d24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h24-d24tl-o-454-fa-h24-d24tl-i-454",
      "slug": "forestair-fa-h24-d24tl-o-454-fa-h24-d24tl-i-454",
      "modelId": "model-forestair-fa-h24-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h24-d24tl-o-454",
      "indoorUnitId": "iu-fa-h24-d24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h18-d24tl-o-454-fa-h18-d24tl-i-454",
      "slug": "forestair-fa-h18-d24tl-o-454-fa-h18-d24tl-i-454",
      "modelId": "model-forestair-fa-h18-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h18-d24tl-o-454",
      "indoorUnitId": "iu-fa-h18-d24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h09-d24tl-o-454-fa-k09-d24tl-i-454",
      "slug": "forestair-fa-h09-d24tl-o-454-fa-k09-d24tl-i-454",
      "modelId": "model-forestair-fa-h09-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h09-d24tl-o-454",
      "indoorUnitId": "iu-fa-k09-d24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h12-a24tl-o-454-fa-h12-a24tl-i-454",
      "slug": "forestair-fa-h12-a24tl-o-454-fa-h12-a24tl-i-454",
      "modelId": "model-forestair-fa-h12-a24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h12-a24tl-o-454",
      "indoorUnitId": "iu-fa-h12-a24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h24-d24tl-o-454-fa-k24-d24tl-i-454",
      "slug": "forestair-fa-h24-d24tl-o-454-fa-k24-d24tl-i-454",
      "modelId": "model-forestair-fa-h24-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h24-d24tl-o-454",
      "indoorUnitId": "iu-fa-k24-d24tl-i-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-m36-d4tl-o-454-iu-44561",
      "slug": "forestair-fa-m36-d4tl-o-454-iu-44561",
      "modelId": "model-forestair-fa-m36-d4tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-m36-d4tl-o-454",
      "indoorUnitId": "iu-iu-44561",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-m42-d5tl-o-454-iu-44562",
      "slug": "forestair-fa-m42-d5tl-o-454-iu-44562",
      "modelId": "model-forestair-fa-m42-d5tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-m42-d5tl-o-454",
      "indoorUnitId": "iu-iu-44562",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h12-d24tl-o-454-fa-k12-d24tl-i-454",
      "slug": "forestair-fa-h12-d24tl-o-454-fa-k12-d24tl-i-454",
      "modelId": "model-forestair-fa-h12-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h12-d24tl-o-454",
      "indoorUnitId": "iu-fa-k12-d24tl-i-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h18-d24tl-o-454-fa-c18-d24tl-i-454",
      "slug": "forestair-fa-h18-d24tl-o-454-fa-c18-d24tl-i-454",
      "modelId": "model-forestair-fa-h18-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h18-d24tl-o-454",
      "indoorUnitId": "iu-fa-c18-d24tl-i-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h18-d24tl-o-454-fa-k18-d24tl-i-454",
      "slug": "forestair-fa-h18-d24tl-o-454-fa-k18-d24tl-i-454",
      "modelId": "model-forestair-fa-h18-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h18-d24tl-o-454",
      "indoorUnitId": "iu-fa-k18-d24tl-i-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h18-d24tl-o-454-iu-44551",
      "slug": "forestair-fa-h18-d24tl-o-454-iu-44551",
      "modelId": "model-forestair-fa-h18-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h18-d24tl-o-454",
      "indoorUnitId": "iu-iu-44551",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.3,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h24-d24tl-o-454-fa-f24-d24tl-i-454",
      "slug": "forestair-fa-h24-d24tl-o-454-fa-f24-d24tl-i-454",
      "modelId": "model-forestair-fa-h24-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h24-d24tl-o-454",
      "indoorUnitId": "iu-fa-f24-d24tl-i-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h09-d24tl-o-454-iu-44544",
      "slug": "forestair-fa-h09-d24tl-o-454-iu-44544",
      "modelId": "model-forestair-fa-h09-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h09-d24tl-o-454",
      "indoorUnitId": "iu-iu-44544",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h12-d24tl-o-454-iu-44548",
      "slug": "forestair-fa-h12-d24tl-o-454-iu-44548",
      "modelId": "model-forestair-fa-h12-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h12-d24tl-o-454",
      "indoorUnitId": "iu-iu-44548",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h24-d24tl-o-454-iu-44555",
      "slug": "forestair-fa-h24-d24tl-o-454-iu-44555",
      "modelId": "model-forestair-fa-h24-d24tl-o-454",
      "outdoorUnitId": "ou-forestair-fa-h24-d24tl-o-454",
      "indoorUnitId": "iu-iu-44555",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h24-vkceod-454-fa-h24-vkceah-454-sl",
      "slug": "forestair-fa-h24-vkceod-454-fa-h24-vkceah-454-sl",
      "modelId": "model-forestair-fa-h24-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h24-vkceod-454",
      "indoorUnitId": "iu-fa-h24-vkceah-454-sl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h24-vkceod-454-fa-h24-vkceah-454",
      "slug": "forestair-fa-h24-vkceod-454-fa-h24-vkceah-454",
      "modelId": "model-forestair-fa-h24-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h24-vkceod-454",
      "indoorUnitId": "iu-fa-h24-vkceah-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h36-vkceod-454-fa-h36-vkceah-454-sl",
      "slug": "forestair-fa-h36-vkceod-454-fa-h36-vkceah-454-sl",
      "modelId": "model-forestair-fa-h36-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h36-vkceod-454",
      "indoorUnitId": "iu-fa-h36-vkceah-454-sl",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h36-vkceod-454-fa-h36-vkceah-454",
      "slug": "forestair-fa-h36-vkceod-454-fa-h36-vkceah-454",
      "modelId": "model-forestair-fa-h36-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h36-vkceod-454",
      "indoorUnitId": "iu-fa-h36-vkceah-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h48-vkceod-454-fa-h48-vkceah-454-sl",
      "slug": "forestair-fa-h48-vkceod-454-fa-h48-vkceah-454-sl",
      "modelId": "model-forestair-fa-h48-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h48-vkceod-454",
      "indoorUnitId": "iu-fa-h48-vkceah-454-sl",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h48-vkceod-454-fa-h48-vkceah-454",
      "slug": "forestair-fa-h48-vkceod-454-fa-h48-vkceah-454",
      "modelId": "model-forestair-fa-h48-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h48-vkceod-454",
      "indoorUnitId": "iu-fa-h48-vkceah-454",
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
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h60-vkceod-454-fa-h60-vkceah-454-sl",
      "slug": "forestair-fa-h60-vkceod-454-fa-h60-vkceah-454-sl",
      "modelId": "model-forestair-fa-h60-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h60-vkceod-454",
      "indoorUnitId": "iu-fa-h60-vkceah-454-sl",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-forestair-fa-h60-vkceod-454-fa-h60-vkceah-454",
      "slug": "forestair-fa-h60-vkceod-454-fa-h60-vkceah-454",
      "modelId": "model-forestair-fa-h60-vkceod-454",
      "outdoorUnitId": "ou-forestair-fa-h60-vkceod-454",
      "indoorUnitId": "iu-fa-h60-vkceah-454",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-forestair-epa",
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
