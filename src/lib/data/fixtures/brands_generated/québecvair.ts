import type { BrandDataset } from "../../types";

export const brand_québecvairDataset: BrandDataset = {
  "brand": {
    "id": "brand-québecvair",
    "slug": "québecvair",
    "name": "QuébecVair",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour QuébecVair",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-québecvair-epa",
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
      "id": "series-québecvair-kit-nordic-airy",
      "slug": "québecvair-kit-nordic-airy",
      "name": "KIT (NORDIC) (AIRY)",
      "brandId": "brand-québecvair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KIT (NORDIC) (AIRY) de QuébecVair",
      "imageUrl": "/images/series/québecvair-québecvair-kit-nordic-airy.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-québecvair-kit-boréal-clivia",
      "slug": "québecvair-kit-boréal-clivia",
      "name": "KIT (BORÉAL) (CLIVIA)",
      "brandId": "brand-québecvair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série KIT (BORÉAL) (CLIVIA) de QuébecVair",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-québecvair-multi",
      "slug": "québecvair-multi",
      "name": "Multi",
      "brandId": "brand-québecvair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Multi de QuébecVair",
      "imageUrl": "/images/series/québecvair-québecvair-multi.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-québecvair-charmo-r32",
      "slug": "québecvair-charmo-r32",
      "name": "CHARMO R32",
      "brandId": "brand-québecvair",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CHARMO R32 de QuébecVair",
      "imageUrl": "/images/series/québecvair-québecvair-charmo-r32.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-québecvair-central",
      "slug": "québecvair-central",
      "name": "CENTRAL",
      "brandId": "brand-québecvair",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CENTRAL de QuébecVair",
      "imageUrl": "/images/series/québecvair-québecvair-central.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-québecvair-qvno12r32o",
      "slug": "québecvair-qvno12r32o",
      "name": "QuébecVair QVNO*12R32O",
      "seriesId": "series-québecvair-kit-nordic-airy",
      "brandId": "brand-québecvair",
      "modelNumber": "QVNO*12R32O",
      "normalizedModelNumber": "qvno*12r32o",
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
      "id": "model-québecvair-qvno18r32o",
      "slug": "québecvair-qvno18r32o",
      "name": "QuébecVair QVNO*18R32O",
      "seriesId": "series-québecvair-kit-nordic-airy",
      "brandId": "brand-québecvair",
      "modelNumber": "QVNO*18R32O",
      "normalizedModelNumber": "qvno*18r32o",
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
      "id": "model-québecvair-qvno24r32o",
      "slug": "québecvair-qvno24r32o",
      "name": "QuébecVair QVNO*24R32O",
      "seriesId": "series-québecvair-kit-nordic-airy",
      "brandId": "brand-québecvair",
      "modelNumber": "QVNO*24R32O",
      "normalizedModelNumber": "qvno*24r32o",
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
      "id": "model-québecvair-qvbo24r32o",
      "slug": "québecvair-qvbo24r32o",
      "name": "QuébecVair QVBO*24R32O",
      "seriesId": "series-québecvair-kit-boréal-clivia",
      "brandId": "brand-québecvair",
      "modelNumber": "QVBO*24R32O",
      "normalizedModelNumber": "qvbo*24r32o",
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
      "id": "model-québecvair-qvbo18r32o",
      "slug": "québecvair-qvbo18r32o",
      "name": "QuébecVair QVBO*18R32O",
      "seriesId": "series-québecvair-kit-boréal-clivia",
      "brandId": "brand-québecvair",
      "modelNumber": "QVBO*18R32O",
      "normalizedModelNumber": "qvbo*18r32o",
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
      "id": "model-québecvair-qvbo12r32o",
      "slug": "québecvair-qvbo12r32o",
      "name": "QuébecVair QVBO*12R32O",
      "seriesId": "series-québecvair-kit-boréal-clivia",
      "brandId": "brand-québecvair",
      "modelNumber": "QVBO*12R32O",
      "normalizedModelNumber": "qvbo*12r32o",
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
      "id": "model-québecvair-qvmz18r32",
      "slug": "québecvair-qvmz18r32",
      "name": "QuébecVair QVMZ18*R32",
      "seriesId": "series-québecvair-multi",
      "brandId": "brand-québecvair",
      "modelNumber": "QVMZ18*R32",
      "normalizedModelNumber": "qvmz18*r32",
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
      "id": "model-québecvair-qvmz24r32",
      "slug": "québecvair-qvmz24r32",
      "name": "QuébecVair QVMZ24*R32",
      "seriesId": "series-québecvair-multi",
      "brandId": "brand-québecvair",
      "modelNumber": "QVMZ24*R32",
      "normalizedModelNumber": "qvmz24*r32",
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
      "id": "model-québecvair-qvmz30r32",
      "slug": "québecvair-qvmz30r32",
      "name": "QuébecVair QVMZ30*R32",
      "seriesId": "series-québecvair-multi",
      "brandId": "brand-québecvair",
      "modelNumber": "QVMZ30*R32",
      "normalizedModelNumber": "qvmz30*r32",
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
      "id": "model-québecvair-qvmz42r32",
      "slug": "québecvair-qvmz42r32",
      "name": "QuébecVair QVMZ42*R32",
      "seriesId": "series-québecvair-multi",
      "brandId": "brand-québecvair",
      "modelNumber": "QVMZ42*R32",
      "normalizedModelNumber": "qvmz42*r32",
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
      "id": "model-québecvair-qvmz36r32",
      "slug": "québecvair-qvmz36r32",
      "name": "QuébecVair QVMZ36*R32",
      "seriesId": "series-québecvair-multi",
      "brandId": "brand-québecvair",
      "modelNumber": "QVMZ36*R32",
      "normalizedModelNumber": "qvmz36*r32",
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
      "id": "model-québecvair-qvch09r32o",
      "slug": "québecvair-qvch09r32o",
      "name": "QuébecVair QVCH09*R32O",
      "seriesId": "series-québecvair-charmo-r32",
      "brandId": "brand-québecvair",
      "modelNumber": "QVCH09*R32O",
      "normalizedModelNumber": "qvch09*r32o",
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
      "id": "model-québecvair-qvch18r32o",
      "slug": "québecvair-qvch18r32o",
      "name": "QuébecVair QVCH18*R32O",
      "seriesId": "series-québecvair-charmo-r32",
      "brandId": "brand-québecvair",
      "modelNumber": "QVCH18*R32O",
      "normalizedModelNumber": "qvch18*r32o",
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
      "id": "model-québecvair-qvcond4860kr32",
      "slug": "québecvair-qvcond4860kr32",
      "name": "QuébecVair QVCOND48/60KR32",
      "seriesId": "series-québecvair-central",
      "brandId": "brand-québecvair",
      "modelNumber": "QVCOND48/60KR32",
      "normalizedModelNumber": "qvcond48/60kr32",
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
      "id": "model-québecvair-qvch12r32o",
      "slug": "québecvair-qvch12r32o",
      "name": "QuébecVair QVCH12*R32O",
      "seriesId": "series-québecvair-charmo-r32",
      "brandId": "brand-québecvair",
      "modelNumber": "QVCH12*R32O",
      "normalizedModelNumber": "qvch12*r32o",
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
      "id": "model-québecvair-qvch24r32o",
      "slug": "québecvair-qvch24r32o",
      "name": "QuébecVair QVCH24*R32O",
      "seriesId": "series-québecvair-charmo-r32",
      "brandId": "brand-québecvair",
      "modelNumber": "QVCH24*R32O",
      "normalizedModelNumber": "qvch24*r32o",
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
      "id": "model-québecvair-qvcond2436kr32",
      "slug": "québecvair-qvcond2436kr32",
      "name": "QuébecVair QVCOND24/36KR32",
      "seriesId": "series-québecvair-central",
      "brandId": "brand-québecvair",
      "modelNumber": "QVCOND24/36KR32",
      "normalizedModelNumber": "qvcond24/36kr32",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-québecvair-qvno12r32o",
      "modelNumber": "QVNO*12R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvno18r32o",
      "modelNumber": "QVNO*18R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvno24r32o",
      "modelNumber": "QVNO*24R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvbo24r32o",
      "modelNumber": "QVBO*24R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvbo18r32o",
      "modelNumber": "QVBO*18R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvbo12r32o",
      "modelNumber": "QVBO*12R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvmz18r32",
      "modelNumber": "QVMZ18*R32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvmz24r32",
      "modelNumber": "QVMZ24*R32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvmz30r32",
      "modelNumber": "QVMZ30*R32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvmz42r32",
      "modelNumber": "QVMZ42*R32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvmz36r32",
      "modelNumber": "QVMZ36*R32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvch09r32o",
      "modelNumber": "QVCH09*R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvch18r32o",
      "modelNumber": "QVCH18*R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvcond4860kr32",
      "modelNumber": "QVCOND48/60KR32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvch12r32o",
      "modelNumber": "QVCH12*R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvch24r32o",
      "modelNumber": "QVCH24*R32O",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-québecvair-qvcond2436kr32",
      "modelNumber": "QVCOND24/36KR32",
      "brandId": "brand-québecvair",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-qvno12r32i",
      "modelNumber": "QVNO*12R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvno18r32i",
      "modelNumber": "QVNO*18R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvno24r32i",
      "modelNumber": "QVNO*24R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvbo24r32i",
      "modelNumber": "QVBO*24R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvbo18r32i",
      "modelNumber": "QVBO*18R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvbo12r32i",
      "modelNumber": "QVBO*12R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50317",
      "modelNumber": "IU-50317",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50318",
      "modelNumber": "IU-50318",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50319",
      "modelNumber": "IU-50319",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50321",
      "modelNumber": "IU-50321",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50320",
      "modelNumber": "IU-50320",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvch09r32i",
      "modelNumber": "QVCH09*R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvch18r32i",
      "modelNumber": "QVCH18*R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvah48kr32",
      "modelNumber": "QVAH48KR32",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvch12r32i",
      "modelNumber": "QVCH12*R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvch24r32i",
      "modelNumber": "QVCH24*R32I",
      "brandId": "brand-québecvair",
      "type": "wall-single"
    },
    {
      "id": "iu-qvah60kr32",
      "modelNumber": "QVAH60KR32",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvah36kr32",
      "modelNumber": "QVAH36KR32",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvah24kr32",
      "modelNumber": "QVAH24KR32",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvee48",
      "modelNumber": "QVEE48",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvee36",
      "modelNumber": "QVEE36",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvee24",
      "modelNumber": "QVEE24",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    },
    {
      "id": "iu-qvee60",
      "modelNumber": "QVEE60",
      "brandId": "brand-québecvair",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-québecvair-qvno12r32o-qvno12r32i",
      "slug": "québecvair-qvno12r32o-qvno12r32i",
      "modelId": "model-québecvair-qvno12r32o",
      "outdoorUnitId": "ou-québecvair-qvno12r32o",
      "indoorUnitId": "iu-qvno12r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvno18r32o-qvno18r32i",
      "slug": "québecvair-qvno18r32o-qvno18r32i",
      "modelId": "model-québecvair-qvno18r32o",
      "outdoorUnitId": "ou-québecvair-qvno18r32o",
      "indoorUnitId": "iu-qvno18r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvno24r32o-qvno24r32i",
      "slug": "québecvair-qvno24r32o-qvno24r32i",
      "modelId": "model-québecvair-qvno24r32o",
      "outdoorUnitId": "ou-québecvair-qvno24r32o",
      "indoorUnitId": "iu-qvno24r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvbo24r32o-qvbo24r32i",
      "slug": "québecvair-qvbo24r32o-qvbo24r32i",
      "modelId": "model-québecvair-qvbo24r32o",
      "outdoorUnitId": "ou-québecvair-qvbo24r32o",
      "indoorUnitId": "iu-qvbo24r32i",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvbo18r32o-qvbo18r32i",
      "slug": "québecvair-qvbo18r32o-qvbo18r32i",
      "modelId": "model-québecvair-qvbo18r32o",
      "outdoorUnitId": "ou-québecvair-qvbo18r32o",
      "indoorUnitId": "iu-qvbo18r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvbo12r32o-qvbo12r32i",
      "slug": "québecvair-qvbo12r32o-qvbo12r32i",
      "modelId": "model-québecvair-qvbo12r32o",
      "outdoorUnitId": "ou-québecvair-qvbo12r32o",
      "indoorUnitId": "iu-qvbo12r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvmz18r32-iu-50317",
      "slug": "québecvair-qvmz18r32-iu-50317",
      "modelId": "model-québecvair-qvmz18r32",
      "outdoorUnitId": "ou-québecvair-qvmz18r32",
      "indoorUnitId": "iu-iu-50317",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvmz24r32-iu-50318",
      "slug": "québecvair-qvmz24r32-iu-50318",
      "modelId": "model-québecvair-qvmz24r32",
      "outdoorUnitId": "ou-québecvair-qvmz24r32",
      "indoorUnitId": "iu-iu-50318",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvmz30r32-iu-50319",
      "slug": "québecvair-qvmz30r32-iu-50319",
      "modelId": "model-québecvair-qvmz30r32",
      "outdoorUnitId": "ou-québecvair-qvmz30r32",
      "indoorUnitId": "iu-iu-50319",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvmz42r32-iu-50321",
      "slug": "québecvair-qvmz42r32-iu-50321",
      "modelId": "model-québecvair-qvmz42r32",
      "outdoorUnitId": "ou-québecvair-qvmz42r32",
      "indoorUnitId": "iu-iu-50321",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvmz36r32-iu-50320",
      "slug": "québecvair-qvmz36r32-iu-50320",
      "modelId": "model-québecvair-qvmz36r32",
      "outdoorUnitId": "ou-québecvair-qvmz36r32",
      "indoorUnitId": "iu-iu-50320",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvch09r32o-qvch09r32i",
      "slug": "québecvair-qvch09r32o-qvch09r32i",
      "modelId": "model-québecvair-qvch09r32o",
      "outdoorUnitId": "ou-québecvair-qvch09r32o",
      "indoorUnitId": "iu-qvch09r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvch18r32o-qvch18r32i",
      "slug": "québecvair-qvch18r32o-qvch18r32i",
      "modelId": "model-québecvair-qvch18r32o",
      "outdoorUnitId": "ou-québecvair-qvch18r32o",
      "indoorUnitId": "iu-qvch18r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond4860kr32-qvah48kr32",
      "slug": "québecvair-qvcond4860kr32-qvah48kr32",
      "modelId": "model-québecvair-qvcond4860kr32",
      "outdoorUnitId": "ou-québecvair-qvcond4860kr32",
      "indoorUnitId": "iu-qvah48kr32",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvch12r32o-qvch12r32i",
      "slug": "québecvair-qvch12r32o-qvch12r32i",
      "modelId": "model-québecvair-qvch12r32o",
      "outdoorUnitId": "ou-québecvair-qvch12r32o",
      "indoorUnitId": "iu-qvch12r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvch24r32o-qvch24r32i",
      "slug": "québecvair-qvch24r32o-qvch24r32i",
      "modelId": "model-québecvair-qvch24r32o",
      "outdoorUnitId": "ou-québecvair-qvch24r32o",
      "indoorUnitId": "iu-qvch24r32i",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond4860kr32-qvah60kr32",
      "slug": "québecvair-qvcond4860kr32-qvah60kr32",
      "modelId": "model-québecvair-qvcond4860kr32",
      "outdoorUnitId": "ou-québecvair-qvcond4860kr32",
      "indoorUnitId": "iu-qvah60kr32",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond2436kr32-qvah36kr32",
      "slug": "québecvair-qvcond2436kr32-qvah36kr32",
      "modelId": "model-québecvair-qvcond2436kr32",
      "outdoorUnitId": "ou-québecvair-qvcond2436kr32",
      "indoorUnitId": "iu-qvah36kr32",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond2436kr32-qvah24kr32",
      "slug": "québecvair-qvcond2436kr32-qvah24kr32",
      "modelId": "model-québecvair-qvcond2436kr32",
      "outdoorUnitId": "ou-québecvair-qvcond2436kr32",
      "indoorUnitId": "iu-qvah24kr32",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond4860kr32-qvee48",
      "slug": "québecvair-qvcond4860kr32-qvee48",
      "modelId": "model-québecvair-qvcond4860kr32",
      "outdoorUnitId": "ou-québecvair-qvcond4860kr32",
      "indoorUnitId": "iu-qvee48",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond2436kr32-qvee36",
      "slug": "québecvair-qvcond2436kr32-qvee36",
      "modelId": "model-québecvair-qvcond2436kr32",
      "outdoorUnitId": "ou-québecvair-qvcond2436kr32",
      "indoorUnitId": "iu-qvee36",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond2436kr32-qvee24",
      "slug": "québecvair-qvcond2436kr32-qvee24",
      "modelId": "model-québecvair-qvcond2436kr32",
      "outdoorUnitId": "ou-québecvair-qvcond2436kr32",
      "indoorUnitId": "iu-qvee24",
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
          "sourceId": "src-québecvair-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-québecvair-qvcond4860kr32-qvee60",
      "slug": "québecvair-qvcond4860kr32-qvee60",
      "modelId": "model-québecvair-qvcond4860kr32",
      "outdoorUnitId": "ou-québecvair-qvcond4860kr32",
      "indoorUnitId": "iu-qvee60",
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
          "sourceId": "src-québecvair-epa",
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
