import type { BrandDataset } from "../../types";

export const brand_ecotempDataset: BrandDataset = {
  "brand": {
    "id": "brand-ecotemp",
    "slug": "ecotemp",
    "name": "ECOTEMP",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ECOTEMP",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-ecotemp-epa",
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
      "id": "series-ecotemp-2-stage-18-seer-hp",
      "slug": "ecotemp-2-stage-18-seer-hp",
      "name": "2-STAGE 18 SEER HP",
      "brandId": "brand-ecotemp",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 18 SEER HP de ECOTEMP",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecotemp-2-stage-17-seer-hp",
      "slug": "ecotemp-2-stage-17-seer-hp",
      "name": "2-STAGE 17 SEER HP",
      "brandId": "brand-ecotemp",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 2-STAGE 17 SEER HP de ECOTEMP",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-ecotemp-15-seer2-hp",
      "slug": "ecotemp-15-seer2-hp",
      "name": "15 SEER2 HP",
      "brandId": "brand-ecotemp",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série 15 SEER2 HP de ECOTEMP",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-ecotemp-w5h8t24kaaa",
      "slug": "ecotemp-w5h8t24kaaa",
      "name": "ECOTEMP W5H8T24*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-18-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H8T24*K*AAA*",
      "normalizedModelNumber": "w5h8t24*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24600,
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
      "id": "model-ecotemp-w5h8t48kaaa",
      "slug": "ecotemp-w5h8t48kaaa",
      "name": "ECOTEMP W5H8T48*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-18-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H8T48*K*AAA*",
      "normalizedModelNumber": "w5h8t48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 48500,
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
      "id": "model-ecotemp-w5h8t60kaaa",
      "slug": "ecotemp-w5h8t60kaaa",
      "name": "ECOTEMP W5H8T60*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-18-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H8T60*K*AAA*",
      "normalizedModelNumber": "w5h8t60*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 58000,
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
      "id": "model-ecotemp-w5h8t36kaaa",
      "slug": "ecotemp-w5h8t36kaaa",
      "name": "ECOTEMP W5H8T36*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-18-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H8T36*K*AAA*",
      "normalizedModelNumber": "w5h8t36*k*aaa*",
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
      "id": "model-ecotemp-w4h7t24kaaa",
      "slug": "ecotemp-w4h7t24kaaa",
      "name": "ECOTEMP W4H7T24*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-17-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W4H7T24*K*AAA*",
      "normalizedModelNumber": "w4h7t24*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 23200,
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
      "id": "model-ecotemp-w4h7t48kaaa",
      "slug": "ecotemp-w4h7t48kaaa",
      "name": "ECOTEMP W4H7T48*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-17-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W4H7T48*K*AAA*",
      "normalizedModelNumber": "w4h7t48*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 45500,
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
      "id": "model-ecotemp-w4h7t60kaaa",
      "slug": "ecotemp-w4h7t60kaaa",
      "name": "ECOTEMP W4H7T60*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-17-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W4H7T60*K*AAA*",
      "normalizedModelNumber": "w4h7t60*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 56000,
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
      "id": "model-ecotemp-w5h5s24kaaa",
      "slug": "ecotemp-w5h5s24kaaa",
      "name": "ECOTEMP W5H5S24*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S24*K*AAA*",
      "normalizedModelNumber": "w5h5s24*k*aaa*",
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
      "id": "model-ecotemp-w5h5s31kaaa",
      "slug": "ecotemp-w5h5s31kaaa",
      "name": "ECOTEMP W5H5S31*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S31*K*AAA*",
      "normalizedModelNumber": "w5h5s31*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28800,
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
      "id": "model-ecotemp-w5h5s36kaaa",
      "slug": "ecotemp-w5h5s36kaaa",
      "name": "ECOTEMP W5H5S36*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S36*K*AAA*",
      "normalizedModelNumber": "w5h5s36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36800,
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
      "id": "model-ecotemp-w5h5s19kaaa",
      "slug": "ecotemp-w5h5s19kaaa",
      "name": "ECOTEMP W5H5S19*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S19*K*AAA*",
      "normalizedModelNumber": "w5h5s19*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 19300,
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
      "id": "model-ecotemp-w5h5s18kaaa",
      "slug": "ecotemp-w5h5s18kaaa",
      "name": "ECOTEMP W5H5S18*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S18*K*AAA*",
      "normalizedModelNumber": "w5h5s18*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 18900,
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
      "id": "model-ecotemp-w5h5s48kaaa",
      "slug": "ecotemp-w5h5s48kaaa",
      "name": "ECOTEMP W5H5S48*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S48*K*AAA*",
      "normalizedModelNumber": "w5h5s48*k*aaa*",
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
      "id": "model-ecotemp-w5h5s42kaaa",
      "slug": "ecotemp-w5h5s42kaaa",
      "name": "ECOTEMP W5H5S42*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S42*K*AAA*",
      "normalizedModelNumber": "w5h5s42*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41500,
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
      "id": "model-ecotemp-w4h7t36kaaa",
      "slug": "ecotemp-w4h7t36kaaa",
      "name": "ECOTEMP W4H7T36*K*AAA*",
      "seriesId": "series-ecotemp-2-stage-17-seer-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W4H7T36*K*AAA*",
      "normalizedModelNumber": "w4h7t36*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33200,
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
      "id": "model-ecotemp-w4h5s60kaaa",
      "slug": "ecotemp-w4h5s60kaaa",
      "name": "ECOTEMP W4H5S60*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W4H5S60*K*AAA*",
      "normalizedModelNumber": "w4h5s60*k*aaa*",
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
      "id": "model-ecotemp-w4h5s30kaaa",
      "slug": "ecotemp-w4h5s30kaaa",
      "name": "ECOTEMP W4H5S30*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W4H5S30*K*AAA*",
      "normalizedModelNumber": "w4h5s30*k*aaa*",
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
      "id": "model-ecotemp-w5h5s60kaaa",
      "slug": "ecotemp-w5h5s60kaaa",
      "name": "ECOTEMP W5H5S60*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S60*K*AAA*",
      "normalizedModelNumber": "w5h5s60*k*aaa*",
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
      "id": "model-ecotemp-w5h5s30kaaa",
      "slug": "ecotemp-w5h5s30kaaa",
      "name": "ECOTEMP W5H5S30*K*AAA*",
      "seriesId": "series-ecotemp-15-seer2-hp",
      "brandId": "brand-ecotemp",
      "modelNumber": "W5H5S30*K*AAA*",
      "normalizedModelNumber": "w5h5s30*k*aaa*",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 27600,
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
      "id": "ou-ecotemp-w5h8t24kaaa",
      "modelNumber": "W5H8T24*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h8t48kaaa",
      "modelNumber": "W5H8T48*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h8t60kaaa",
      "modelNumber": "W5H8T60*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h8t36kaaa",
      "modelNumber": "W5H8T36*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w4h7t24kaaa",
      "modelNumber": "W4H7T24*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecotemp-w4h7t48kaaa",
      "modelNumber": "W4H7T48*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecotemp-w4h7t60kaaa",
      "modelNumber": "W4H7T60*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecotemp-w5h5s24kaaa",
      "modelNumber": "W5H5S24*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s31kaaa",
      "modelNumber": "W5H5S31*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s36kaaa",
      "modelNumber": "W5H5S36*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s19kaaa",
      "modelNumber": "W5H5S19*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s18kaaa",
      "modelNumber": "W5H5S18*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s48kaaa",
      "modelNumber": "W5H5S48*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s42kaaa",
      "modelNumber": "W5H5S42*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w4h7t36kaaa",
      "modelNumber": "W4H7T36*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecotemp-w4h5s60kaaa",
      "modelNumber": "W4H5S60*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecotemp-w4h5s30kaaa",
      "modelNumber": "W4H5S30*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-ecotemp-w5h5s60kaaa",
      "modelNumber": "W5H5S60*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-ecotemp-w5h5s30kaaa",
      "modelNumber": "W5H5S30*K*AAA*",
      "brandId": "brand-ecotemp",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-w5vm32m17xa",
      "modelNumber": "W5VM32M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a25m17xa",
      "modelNumber": "W5A*25M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d3617x",
      "modelNumber": "QFVA5D3617X*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc36m21xa",
      "modelNumber": "W5VC36M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc31m17xa",
      "modelNumber": "W5VC31M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc37m21xa",
      "modelNumber": "W5VC37M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc38m17xa",
      "modelNumber": "W5VC38M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm31m17xa",
      "modelNumber": "W5VM31M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl605d",
      "modelNumber": "WCGL605*D*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl365c",
      "modelNumber": "WCGL365*C*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d6021x",
      "modelNumber": "QFVA5D6021X*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d4821x",
      "modelNumber": "QFVA5D4821X*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a37m17xa",
      "modelNumber": "W5A*37M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-qfva5d2417x",
      "modelNumber": "QFVA5D2417X*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a30m17xa",
      "modelNumber": "W5A*30M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a36m17xa",
      "modelNumber": "W5A*36M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm60m21xa",
      "modelNumber": "W5VM60M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m24xa",
      "modelNumber": "W5VC61M24XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc49m24xa",
      "modelNumber": "W5VC49M24XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl245b",
      "modelNumber": "WCGL245*B*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m21xa",
      "modelNumber": "W5VC61M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm49m21xa",
      "modelNumber": "W5VM49M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm48m21xa",
      "modelNumber": "W5VM48M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh36m12xa",
      "modelNumber": "W5SH36M12XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a24m17xa",
      "modelNumber": "W5A*24M17XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a30m14xa",
      "modelNumber": "W5A*30M14XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc60m21xa",
      "modelNumber": "W5VC60M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc48m21xa",
      "modelNumber": "W5VC48M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wcgl485c",
      "modelNumber": "WCGL485*C*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl604bd",
      "modelNumber": "WBGL604BD",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl364bc",
      "modelNumber": "WBGL364BC",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl484bc",
      "modelNumber": "WBGL484BC",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a61m24xa",
      "modelNumber": "W5A*61M24XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a61m21xa",
      "modelNumber": "W5A*61M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a60m24xa",
      "modelNumber": "W5A*60M24XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm49m21xatdr",
      "modelNumber": "W5VM49M21XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc60m21xatdr",
      "modelNumber": "W5VC60M21XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m21xatdr",
      "modelNumber": "W5VC61M21XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc61m24xatdr",
      "modelNumber": "W5VC61M24XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x30al",
      "modelNumber": "FMA5X30**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a24m14xa",
      "modelNumber": "W5A*24M14XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh30m12xa",
      "modelNumber": "W5SH30M12XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm60m21xatdr",
      "modelNumber": "W5VM60M21XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm61m24xatdr",
      "modelNumber": "W5VM61M24XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh24m12xa",
      "modelNumber": "W5SH24M12XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x36al",
      "modelNumber": "FMA5X36**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z36al",
      "modelNumber": "FM(C,U)5Z36**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z30al",
      "modelNumber": "FM(C,U)5Z30**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl425c",
      "modelNumber": "WCHL425*C*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0048nava54801ck",
      "modelNumber": "FEVA0048**+NAVA54801CK",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a43m21xa",
      "modelNumber": "W5A*43M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm60m24xatdr",
      "modelNumber": "W5VM60M24XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc48m21xatdr",
      "modelNumber": "W5VC48M21XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh60m12xa",
      "modelNumber": "W5SH60M12XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc49m24xatdr",
      "modelNumber": "W5VC49M24XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc48m24xatdr",
      "modelNumber": "W5VC48M24XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vx60m24xatdr",
      "modelNumber": "W5VX60M24XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a48m21xa",
      "modelNumber": "W5A*48M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh48m12xa",
      "modelNumber": "W5SH48M12XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm61m24xa",
      "modelNumber": "W5VM61M24XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0036nava53601ck",
      "modelNumber": "FEVA0036**+NAVA53601CK",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s24al",
      "modelNumber": "FM(C,U)5S24**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x18al",
      "modelNumber": "FMA5X18**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5x24al",
      "modelNumber": "FMA5X24**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s18al",
      "modelNumber": "FM(C,U)5S18**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s36al",
      "modelNumber": "FM(C,U)5S36**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z24al",
      "modelNumber": "FM(C,U)5Z24**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0036nava53601ck",
      "modelNumber": "FEVB0036**+NAVA53601CK",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl245b",
      "modelNumber": "WCHL245*B*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5sh42m12xa",
      "modelNumber": "W5SH42M12XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0048nava54801ck",
      "modelNumber": "FEVB0048**+NAVA54801CK",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl365b",
      "modelNumber": "WCHL365*B*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a42m21xa",
      "modelNumber": "W5A*42M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5s30al",
      "modelNumber": "FM(C,U)5S30**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5a25m17xatdr",
      "modelNumber": "W5A*25M17XA*+TDR",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fmcu5z18al",
      "modelNumber": "FM(C,U)5Z18**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl305b",
      "modelNumber": "WCHL305*B*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl485c",
      "modelNumber": "WCHL485*C*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wbgl244ab",
      "modelNumber": "WBGL244AB",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wla374ca",
      "modelNumber": "WLA*374CA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l30al",
      "modelNumber": "FMA5L30**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fma5l18al",
      "modelNumber": "FMA5L18**AL*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl185a",
      "modelNumber": "WCHL185*A*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-fevb0060nava56001ck",
      "modelNumber": "FEVB0060**+NAVA56001CK",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vm44m21xa",
      "modelNumber": "W5VM44M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc42m24xa",
      "modelNumber": "W5VC42M24XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-wchl605d",
      "modelNumber": "WCHL605*D*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-feva0060nava56001ck",
      "modelNumber": "FEVA0060**+NAVA56001CK",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    },
    {
      "id": "iu-w5vc42m21xa",
      "modelNumber": "W5VC42M21XA*",
      "brandId": "brand-ecotemp",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5vm32m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5vm32m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vm32m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a25m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a25m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-qfva5d3617x",
      "slug": "ecotemp-w5h8t24kaaa-qfva5d3617x",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-qfva5d3617x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5vc36m21xa",
      "slug": "ecotemp-w5h8t24kaaa-w5vc36m21xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc36m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5vc31m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5vc31m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc31m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5vc37m21xa",
      "slug": "ecotemp-w5h8t24kaaa-w5vc37m21xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc37m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5vc38m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5vc38m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vc38m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5vm31m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5vm31m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5vm31m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-wcgl605d",
      "slug": "ecotemp-w5h8t48kaaa-wcgl605d",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-wcgl605d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-wcgl365c",
      "slug": "ecotemp-w5h8t24kaaa-wcgl365c",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-wcgl365c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-qfva5d6021x",
      "slug": "ecotemp-w5h8t48kaaa-qfva5d6021x",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-qfva5d6021x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-qfva5d4821x",
      "slug": "ecotemp-w5h8t48kaaa-qfva5d4821x",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-qfva5d4821x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a37m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a37m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a37m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-qfva5d2417x",
      "slug": "ecotemp-w5h8t24kaaa-qfva5d2417x",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-qfva5d2417x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 7.8,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a30m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a30m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a30m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a36m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a36m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a36m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm60m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vm60m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm60m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc61m24xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vc61m24xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m24xa",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc49m24xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vc49m24xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc49m24xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-wcgl245b",
      "slug": "ecotemp-w5h8t24kaaa-wcgl245b",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-wcgl245b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc61m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vc61m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m21xa",
      "minHeatingTempC": -15,
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-qfva5d6021x",
      "slug": "ecotemp-w5h8t60kaaa-qfva5d6021x",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-qfva5d6021x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-wcgl605d",
      "slug": "ecotemp-w5h8t60kaaa-wcgl605d",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-wcgl605d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm49m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vm49m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm49m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm48m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vm48m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm48m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5sh36m12xa",
      "slug": "ecotemp-w5h8t24kaaa-w5sh36m12xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5sh36m12xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a24m17xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a24m17xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a24m17xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a30m14xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a30m14xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a30m14xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-wcgl605d",
      "slug": "ecotemp-w5h8t36kaaa-wcgl605d",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-wcgl605d",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc60m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vc60m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc60m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc48m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5vc48m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc48m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-wcgl485c",
      "slug": "ecotemp-w5h8t48kaaa-wcgl485c",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-wcgl485c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w4h7t24kaaa-wbgl604bd",
      "slug": "ecotemp-w4h7t24kaaa-wbgl604bd",
      "modelId": "model-ecotemp-w4h7t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w4h7t24kaaa",
      "indoorUnitId": "iu-wbgl604bd",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w4h7t48kaaa-wbgl364bc",
      "slug": "ecotemp-w4h7t48kaaa-wbgl364bc",
      "modelId": "model-ecotemp-w4h7t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w4h7t48kaaa",
      "indoorUnitId": "iu-wbgl364bc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w4h7t60kaaa-wbgl484bc",
      "slug": "ecotemp-w4h7t60kaaa-wbgl484bc",
      "modelId": "model-ecotemp-w4h7t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w4h7t60kaaa",
      "indoorUnitId": "iu-wbgl484bc",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5a61m24xa",
      "slug": "ecotemp-w5h8t60kaaa-w5a61m24xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5a61m24xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5a61m21xa",
      "slug": "ecotemp-w5h8t60kaaa-w5a61m21xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5a61m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5a60m24xa",
      "slug": "ecotemp-w5h8t60kaaa-w5a60m24xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5a60m24xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5a61m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5a61m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a61m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-qfva5d4821x",
      "slug": "ecotemp-w5h8t36kaaa-qfva5d4821x",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-qfva5d4821x",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5a60m24xa",
      "slug": "ecotemp-w5h8t48kaaa-w5a60m24xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a60m24xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5a61m24xa",
      "slug": "ecotemp-w5h8t48kaaa-w5a61m24xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a61m24xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-wcgl485c",
      "slug": "ecotemp-w5h8t36kaaa-wcgl485c",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-wcgl485c",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm49m21xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vm49m21xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm49m21xatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc60m21xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vc60m21xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc60m21xatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc61m21xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vc61m21xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m21xatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc61m24xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vc61m24xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc61m24xatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fma5x30al",
      "slug": "ecotemp-w5h5s24kaaa-fma5x30al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fma5x30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a24m14xa",
      "slug": "ecotemp-w5h8t24kaaa-w5a24m14xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a24m14xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5sh30m12xa",
      "slug": "ecotemp-w5h8t24kaaa-w5sh30m12xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5sh30m12xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm60m21xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vm60m21xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm60m21xatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm61m24xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vm61m24xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm61m24xatdr",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.1,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5vc61m21xa",
      "slug": "ecotemp-w5h8t60kaaa-w5vc61m21xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vc61m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fma5x30al",
      "slug": "ecotemp-w5h5s31kaaa-fma5x30al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fma5x30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5sh24m12xa",
      "slug": "ecotemp-w5h8t24kaaa-w5sh24m12xa",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5sh24m12xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5vc31m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5vc31m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vc31m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5vc38m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5vc38m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vc38m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fma5x36al",
      "slug": "ecotemp-w5h5s31kaaa-fma5x36al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fma5x36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5vm32m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5vm32m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vm32m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fmcu5z36al",
      "slug": "ecotemp-w5h5s31kaaa-fmcu5z36al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fmcu5z30al",
      "slug": "ecotemp-w5h5s31kaaa-fmcu5z30al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-wchl425c",
      "slug": "ecotemp-w5h5s31kaaa-wchl425c",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-wchl425c",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-feva0048nava54801ck",
      "slug": "ecotemp-w5h5s36kaaa-feva0048nava54801ck",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-feva0048nava54801ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-qfva5d3617x",
      "slug": "ecotemp-w5h8t36kaaa-qfva5d3617x",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-qfva5d3617x",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5a43m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5a43m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a43m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-w5a25m17xa",
      "slug": "ecotemp-w5h5s19kaaa-w5a25m17xa",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fmcu5z30al",
      "slug": "ecotemp-w5h5s24kaaa-fmcu5z30al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fmcu5z36al",
      "slug": "ecotemp-w5h5s24kaaa-fmcu5z36al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fmcu5z30al",
      "slug": "ecotemp-w5h5s19kaaa-fmcu5z30al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5vc61m24xa",
      "slug": "ecotemp-w5h8t60kaaa-w5vc61m24xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vc61m24xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vm60m24xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vm60m24xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vm60m24xatdr",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5vc60m21xa",
      "slug": "ecotemp-w5h8t60kaaa-w5vc60m21xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vc60m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5vm60m21xa",
      "slug": "ecotemp-w5h8t60kaaa-w5vm60m21xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vm60m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc48m21xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vc48m21xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc48m21xatdr",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5sh60m12xa",
      "slug": "ecotemp-w5h8t48kaaa-w5sh60m12xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5sh60m12xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc49m24xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vc49m24xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc49m24xatdr",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vc48m24xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vc48m24xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vc48m24xatdr",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5vx60m24xatdr",
      "slug": "ecotemp-w5h8t48kaaa-w5vx60m24xatdr",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5vx60m24xatdr",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5vc38m17xa",
      "slug": "ecotemp-w5h8t36kaaa-w5vc38m17xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc38m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5a48m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5a48m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a48m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5sh48m12xa",
      "slug": "ecotemp-w5h8t48kaaa-w5sh48m12xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5sh48m12xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t48kaaa-w5a48m21xa",
      "slug": "ecotemp-w5h8t48kaaa-w5a48m21xa",
      "modelId": "model-ecotemp-w5h8t48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t48kaaa",
      "indoorUnitId": "iu-w5a48m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5vm48m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5vm48m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vm48m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5vm49m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5vm49m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vm49m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t60kaaa-w5vm61m24xa",
      "slug": "ecotemp-w5h8t60kaaa-w5vm61m24xa",
      "modelId": "model-ecotemp-w5h8t60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t60kaaa",
      "indoorUnitId": "iu-w5vm61m24xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5vm31m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5vm31m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vm31m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5vc37m21xa",
      "slug": "ecotemp-w5h5s24kaaa-w5vc37m21xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5vc37m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5a25m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5a25m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-feva0036nava53601ck",
      "slug": "ecotemp-w5h5s24kaaa-feva0036nava53601ck",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-feva0036nava53601ck",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-w5vm32m17xa",
      "slug": "ecotemp-w5h5s18kaaa-w5vm32m17xa",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-w5vm32m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fmcu5s24al",
      "slug": "ecotemp-w5h5s19kaaa-fmcu5s24al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5s24al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fma5x18al",
      "slug": "ecotemp-w5h5s19kaaa-fma5x18al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fma5x18al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-fma5x24al",
      "slug": "ecotemp-w5h5s18kaaa-fma5x24al",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-fma5x24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fmcu5s18al",
      "slug": "ecotemp-w5h5s19kaaa-fmcu5s18al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5s18al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fmcu5s36al",
      "slug": "ecotemp-w5h5s24kaaa-fmcu5s36al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fmcu5z24al",
      "slug": "ecotemp-w5h5s24kaaa-fmcu5z24al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fevb0036nava53601ck",
      "slug": "ecotemp-w5h5s24kaaa-fevb0036nava53601ck",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-wchl245b",
      "slug": "ecotemp-w5h5s19kaaa-wchl245b",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-wchl245b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fma5x24al",
      "slug": "ecotemp-w5h5s19kaaa-fma5x24al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fma5x24al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fmcu5z24al",
      "slug": "ecotemp-w5h5s19kaaa-fmcu5z24al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5vc37m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5vc37m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc37m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5sh42m12xa",
      "slug": "ecotemp-w5h8t36kaaa-w5sh42m12xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5sh42m12xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5vc48m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5vc48m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc48m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5a37m17xa",
      "slug": "ecotemp-w5h8t36kaaa-w5a37m17xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a37m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-fevb0048nava54801ck",
      "slug": "ecotemp-w5h5s36kaaa-fevb0048nava54801ck",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-fevb0048nava54801ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-wchl365b",
      "slug": "ecotemp-w5h5s24kaaa-wchl365b",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-wchl365b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5a42m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5a42m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a42m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fevb0036nava53601ck",
      "slug": "ecotemp-w5h5s31kaaa-fevb0036nava53601ck",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fevb0036nava53601ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-wcgl485c",
      "slug": "ecotemp-w5h5s36kaaa-wcgl485c",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-wcgl485c",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-fma5x36al",
      "slug": "ecotemp-w5h5s36kaaa-fma5x36al",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-fma5x36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fmcu5s30al",
      "slug": "ecotemp-w5h5s31kaaa-fmcu5s30al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fmcu5s36al",
      "slug": "ecotemp-w5h5s31kaaa-fmcu5s36al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s48kaaa-wcgl605d",
      "slug": "ecotemp-w5h5s48kaaa-wcgl605d",
      "modelId": "model-ecotemp-w5h5s48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s48kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t24kaaa-w5a25m17xatdr",
      "slug": "ecotemp-w5h8t24kaaa-w5a25m17xatdr",
      "modelId": "model-ecotemp-w5h8t24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t24kaaa",
      "indoorUnitId": "iu-w5a25m17xatdr",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fmcu5s30al",
      "slug": "ecotemp-w5h5s24kaaa-fmcu5s30al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-wcgl245b",
      "slug": "ecotemp-w5h5s19kaaa-wcgl245b",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-wcgl245b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fmcu5z18al",
      "slug": "ecotemp-w5h5s19kaaa-fmcu5z18al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fmcu5z18al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fma5x24al",
      "slug": "ecotemp-w5h5s24kaaa-fma5x24al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fma5x24al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5a37m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5a37m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5a37m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-wchl305b",
      "slug": "ecotemp-w5h5s31kaaa-wchl305b",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-wchl305b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-w5a43m21xa",
      "slug": "ecotemp-w5h5s31kaaa-w5a43m21xa",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-w5a43m21xa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-wcgl245b",
      "slug": "ecotemp-w5h5s24kaaa-wcgl245b",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-wcgl245b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-feva0036nava53601ck",
      "slug": "ecotemp-w5h5s31kaaa-feva0036nava53601ck",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-feva0036nava53601ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-wchl485c",
      "slug": "ecotemp-w5h5s36kaaa-wchl485c",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-wchl485c",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s42kaaa-wcgl605d",
      "slug": "ecotemp-w5h5s42kaaa-wcgl605d",
      "modelId": "model-ecotemp-w5h5s42kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s42kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-fma5x18al",
      "slug": "ecotemp-w5h5s18kaaa-fma5x18al",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-fma5x18al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-fmcu5z24al",
      "slug": "ecotemp-w5h5s18kaaa-fmcu5z24al",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z24al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w4h7t36kaaa-wbgl244ab",
      "slug": "ecotemp-w4h7t36kaaa-wbgl244ab",
      "modelId": "model-ecotemp-w4h7t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w4h7t36kaaa",
      "indoorUnitId": "iu-wbgl244ab",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w4h5s60kaaa-wbgl484bc",
      "slug": "ecotemp-w4h5s60kaaa-wbgl484bc",
      "modelId": "model-ecotemp-w4h5s60kaaa",
      "outdoorUnitId": "ou-ecotemp-w4h5s60kaaa",
      "indoorUnitId": "iu-wbgl484bc",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w4h5s30kaaa-wla374ca",
      "slug": "ecotemp-w4h5s30kaaa-wla374ca",
      "modelId": "model-ecotemp-w4h5s30kaaa",
      "outdoorUnitId": "ou-ecotemp-w4h5s30kaaa",
      "indoorUnitId": "iu-wla374ca",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-fmcu5z18al",
      "slug": "ecotemp-w5h5s18kaaa-fmcu5z18al",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z18al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-w5a25m17xa",
      "slug": "ecotemp-w5h5s18kaaa-w5a25m17xa",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-w5a25m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fma5l30al",
      "slug": "ecotemp-w5h5s24kaaa-fma5l30al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fma5l30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-fmcu5s24al",
      "slug": "ecotemp-w5h5s24kaaa-fmcu5s24al",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-fmcu5s24al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-fma5l18al",
      "slug": "ecotemp-w5h5s19kaaa-fma5l18al",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-fma5l18al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s19kaaa-wchl185a",
      "slug": "ecotemp-w5h5s19kaaa-wchl185a",
      "modelId": "model-ecotemp-w5h5s19kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s19kaaa",
      "indoorUnitId": "iu-wchl185a",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-fmcu5s30al",
      "slug": "ecotemp-w5h5s18kaaa-fmcu5s30al",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5s30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-fmcu5z30al",
      "slug": "ecotemp-w5h5s18kaaa-fmcu5z30al",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-fmcu5z30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s18kaaa-wchl305b",
      "slug": "ecotemp-w5h5s18kaaa-wchl305b",
      "modelId": "model-ecotemp-w5h5s18kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s18kaaa",
      "indoorUnitId": "iu-wchl305b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s42kaaa-fevb0060nava56001ck",
      "slug": "ecotemp-w5h5s42kaaa-fevb0060nava56001ck",
      "modelId": "model-ecotemp-w5h5s42kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s42kaaa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s60kaaa-wcgl605d",
      "slug": "ecotemp-w5h5s60kaaa-wcgl605d",
      "modelId": "model-ecotemp-w5h5s60kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s60kaaa",
      "indoorUnitId": "iu-wcgl605d",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-w5vm44m21xa",
      "slug": "ecotemp-w5h5s36kaaa-w5vm44m21xa",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-w5vm44m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-w5vc42m24xa",
      "slug": "ecotemp-w5h5s36kaaa-w5vc42m24xa",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-w5vc42m24xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s48kaaa-wchl605d",
      "slug": "ecotemp-w5h5s48kaaa-wchl605d",
      "modelId": "model-ecotemp-w5h5s48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s48kaaa",
      "indoorUnitId": "iu-wchl605d",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-w5a36m17xa",
      "slug": "ecotemp-w5h5s24kaaa-w5a36m17xa",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-w5a36m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s30kaaa-wchl425c",
      "slug": "ecotemp-w5h5s30kaaa-wchl425c",
      "modelId": "model-ecotemp-w5h5s30kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s30kaaa",
      "indoorUnitId": "iu-wchl425c",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s31kaaa-fma5l30al",
      "slug": "ecotemp-w5h5s31kaaa-fma5l30al",
      "modelId": "model-ecotemp-w5h5s31kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s31kaaa",
      "indoorUnitId": "iu-fma5l30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-fmcu5s36al",
      "slug": "ecotemp-w5h5s36kaaa-fmcu5s36al",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-fmcu5s36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s30kaaa-w5vc42m24xa",
      "slug": "ecotemp-w5h5s30kaaa-w5vc42m24xa",
      "modelId": "model-ecotemp-w5h5s30kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s30kaaa",
      "indoorUnitId": "iu-w5vc42m24xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s30kaaa-fma5x36al",
      "slug": "ecotemp-w5h5s30kaaa-fma5x36al",
      "modelId": "model-ecotemp-w5h5s30kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s30kaaa",
      "indoorUnitId": "iu-fma5x36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s30kaaa-fma5x30al",
      "slug": "ecotemp-w5h5s30kaaa-fma5x30al",
      "modelId": "model-ecotemp-w5h5s30kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s30kaaa",
      "indoorUnitId": "iu-fma5x30al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s24kaaa-wchl305b",
      "slug": "ecotemp-w5h5s24kaaa-wchl305b",
      "modelId": "model-ecotemp-w5h5s24kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s24kaaa",
      "indoorUnitId": "iu-wchl305b",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s42kaaa-wchl605d",
      "slug": "ecotemp-w5h5s42kaaa-wchl605d",
      "modelId": "model-ecotemp-w5h5s42kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s42kaaa",
      "indoorUnitId": "iu-wchl605d",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-w5a48m21xa",
      "slug": "ecotemp-w5h5s36kaaa-w5a48m21xa",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-w5a48m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-w5a43m21xa",
      "slug": "ecotemp-w5h5s36kaaa-w5a43m21xa",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-w5a43m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-fmcu5z36al",
      "slug": "ecotemp-w5h5s36kaaa-fmcu5z36al",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-fmcu5z36al",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s36kaaa-wchl425c",
      "slug": "ecotemp-w5h5s36kaaa-wchl425c",
      "modelId": "model-ecotemp-w5h5s36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s36kaaa",
      "indoorUnitId": "iu-wchl425c",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s48kaaa-feva0060nava56001ck",
      "slug": "ecotemp-w5h5s48kaaa-feva0060nava56001ck",
      "modelId": "model-ecotemp-w5h5s48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s48kaaa",
      "indoorUnitId": "iu-feva0060nava56001ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h5s48kaaa-fevb0060nava56001ck",
      "slug": "ecotemp-w5h5s48kaaa-fevb0060nava56001ck",
      "modelId": "model-ecotemp-w5h5s48kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h5s48kaaa",
      "indoorUnitId": "iu-fevb0060nava56001ck",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5vc42m21xa",
      "slug": "ecotemp-w5h8t36kaaa-w5vc42m21xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5vc42m21xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5a36m17xa",
      "slug": "ecotemp-w5h8t36kaaa-w5a36m17xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5a36m17xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-wcgl365c",
      "slug": "ecotemp-w5h8t36kaaa-wcgl365c",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-wcgl365c",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5sh36m12xa",
      "slug": "ecotemp-w5h8t36kaaa-w5sh36m12xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5sh36m12xa",
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
          "sourceId": "src-ecotemp-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-ecotemp-w5h8t36kaaa-w5sh48m12xa",
      "slug": "ecotemp-w5h8t36kaaa-w5sh48m12xa",
      "modelId": "model-ecotemp-w5h8t36kaaa",
      "outdoorUnitId": "ou-ecotemp-w5h8t36kaaa",
      "indoorUnitId": "iu-w5sh48m12xa",
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
          "sourceId": "src-ecotemp-epa",
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
