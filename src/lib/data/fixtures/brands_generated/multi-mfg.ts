import type { BrandDataset } from "../../types";

export const brand_multi_mfgDataset: BrandDataset = {
  "brand": {
    "id": "brand-multi-mfg",
    "slug": "multi-mfg",
    "name": "Multi MFG",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Multi MFG",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-multi-mfg-epa",
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
      "id": "series-multi-mfg-msh-series",
      "slug": "multi-mfg-msh-series",
      "name": "MSH Series",
      "brandId": "brand-multi-mfg",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MSH Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-mpc-series",
      "slug": "multi-mfg-mpc-series",
      "name": "MPC Series",
      "brandId": "brand-multi-mfg",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MPC Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-msz-series",
      "slug": "multi-mfg-msz-series",
      "name": "MSZ Series",
      "brandId": "brand-multi-mfg",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MSZ Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-msu-series",
      "slug": "multi-mfg-msu-series",
      "name": "MSU Series",
      "brandId": "brand-multi-mfg",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MSU Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-hmhp",
      "slug": "multi-mfg-hmhp",
      "name": "HMHP",
      "brandId": "brand-multi-mfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HMHP de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-hhs-series",
      "slug": "multi-mfg-hhs-series",
      "name": "HHS Series",
      "brandId": "brand-multi-mfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série HHS Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-mez-series",
      "slug": "multi-mfg-mez-series",
      "name": "MEZ Series",
      "brandId": "brand-multi-mfg",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MEZ Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-multi-mfg-hes-series",
      "slug": "multi-mfg-hes-series",
      "name": "HES Series",
      "brandId": "brand-multi-mfg",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HES Series de Multi MFG",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-multi-mfg-msh-09hd-a",
      "slug": "multi-mfg-msh-09hd-a",
      "name": "Multi MFG MSH-09HD-A",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-09HD-A",
      "normalizedModelNumber": "msh-09hd-a",
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
      "id": "model-multi-mfg-msh-09hd-b",
      "slug": "multi-mfg-msh-09hd-b",
      "name": "Multi MFG MSH-09HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-09HD-B",
      "normalizedModelNumber": "msh-09hd-b",
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
      "id": "model-multi-mfg-msh-12hd-a",
      "slug": "multi-mfg-msh-12hd-a",
      "name": "Multi MFG MSH-12HD-A",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-12HD-A",
      "normalizedModelNumber": "msh-12hd-a",
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
      "id": "model-multi-mfg-msh-12hd-b",
      "slug": "multi-mfg-msh-12hd-b",
      "name": "Multi MFG MSH-12HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-12HD-B",
      "normalizedModelNumber": "msh-12hd-b",
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
      "id": "model-multi-mfg-27mpc3-xx-a",
      "slug": "multi-mfg-27mpc3-xx-a",
      "name": "Multi MFG 27MPC3-XX-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "27MPC3-XX-A",
      "normalizedModelNumber": "27mpc3-xx-a",
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
      "id": "model-multi-mfg-18msz-m-b",
      "slug": "multi-mfg-18msz-m-b",
      "name": "Multi MFG 18MSZ-M-B",
      "seriesId": "series-multi-mfg-msz-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "18MSZ-M-B",
      "normalizedModelNumber": "18msz-m-b",
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
      "id": "model-multi-mfg-36mpc4-xx-a",
      "slug": "multi-mfg-36mpc4-xx-a",
      "name": "Multi MFG 36MPC4-XX-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "36MPC4-XX-A",
      "normalizedModelNumber": "36mpc4-xx-a",
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
      "id": "model-multi-mfg-24msz-m-b",
      "slug": "multi-mfg-24msz-m-b",
      "name": "Multi MFG 24MSZ-M-B",
      "seriesId": "series-multi-mfg-msz-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "24MSZ-M-B",
      "normalizedModelNumber": "24msz-m-b",
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
      "id": "model-multi-mfg-48mpc5-xx-a",
      "slug": "multi-mfg-48mpc5-xx-a",
      "name": "Multi MFG 48MPC5-XX-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "48MPC5-XX-A",
      "normalizedModelNumber": "48mpc5-xx-a",
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
      "id": "model-multi-mfg-36mpc5-he-b",
      "slug": "multi-mfg-36mpc5-he-b",
      "name": "Multi MFG 36MPC5-HE-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "36MPC5-HE-B",
      "normalizedModelNumber": "36mpc5-he-b",
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
      "id": "model-multi-mfg-18mpc3-he-b",
      "slug": "multi-mfg-18mpc3-he-b",
      "name": "Multi MFG 18MPC3-HE-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "18MPC3-HE-B",
      "normalizedModelNumber": "18mpc3-he-b",
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
      "id": "model-multi-mfg-28mpc3-hh-a",
      "slug": "multi-mfg-28mpc3-hh-a",
      "name": "Multi MFG 28MPC3-HH-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "28MPC3-HH-A",
      "normalizedModelNumber": "28mpc3-hh-a",
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
      "id": "model-multi-mfg-18mpc2-xx-a",
      "slug": "multi-mfg-18mpc2-xx-a",
      "name": "Multi MFG 18MPC2-XX-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "18MPC2-XX-A",
      "normalizedModelNumber": "18mpc2-xx-a",
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
      "id": "model-multi-mfg-msh-24hd-b",
      "slug": "multi-mfg-msh-24hd-b",
      "name": "Multi MFG MSH-24HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-24HD-B",
      "normalizedModelNumber": "msh-24hd-b",
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
      "id": "model-multi-mfg-36mpc4-hh-a",
      "slug": "multi-mfg-36mpc4-hh-a",
      "name": "Multi MFG 36MPC4-HH-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "36MPC4-HH-A",
      "normalizedModelNumber": "36mpc4-hh-a",
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
      "id": "model-multi-mfg-19mpc2-hh-a",
      "slug": "multi-mfg-19mpc2-hh-a",
      "name": "Multi MFG 19MPC2-HH-A",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "19MPC2-HH-A",
      "normalizedModelNumber": "19mpc2-hh-a",
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
      "id": "model-multi-mfg-36mpc5-hh-b",
      "slug": "multi-mfg-36mpc5-hh-b",
      "name": "Multi MFG 36MPC5-HH-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "36MPC5-HH-B",
      "normalizedModelNumber": "36mpc5-hh-b",
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
      "id": "model-multi-mfg-msh-24hd-a",
      "slug": "multi-mfg-msh-24hd-a",
      "name": "Multi MFG MSH-24HD-A",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-24HD-A",
      "normalizedModelNumber": "msh-24hd-a",
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
      "id": "model-multi-mfg-55mpc6-hh-b",
      "slug": "multi-mfg-55mpc6-hh-b",
      "name": "Multi MFG 55MPC6-HH-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "55MPC6-HH-B",
      "normalizedModelNumber": "55mpc6-hh-b",
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
      "id": "model-multi-mfg-48mpc6-he-b",
      "slug": "multi-mfg-48mpc6-he-b",
      "name": "Multi MFG 48MPC6-HE-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "48MPC6-HE-B",
      "normalizedModelNumber": "48mpc6-he-b",
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
      "id": "model-multi-mfg-48mpc6-hh-b",
      "slug": "multi-mfg-48mpc6-hh-b",
      "name": "Multi MFG 48MPC6-HH-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "48MPC6-HH-B",
      "normalizedModelNumber": "48mpc6-hh-b",
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
      "id": "model-multi-mfg-msh-36hd-b",
      "slug": "multi-mfg-msh-36hd-b",
      "name": "Multi MFG MSH-36HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-36HD-B",
      "normalizedModelNumber": "msh-36hd-b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 36600,
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
      "id": "model-multi-mfg-30msz-m-a",
      "slug": "multi-mfg-30msz-m-a",
      "name": "Multi MFG 30MSZ-M-A",
      "seriesId": "series-multi-mfg-msz-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "30MSZ-M-A",
      "normalizedModelNumber": "30msz-m-a",
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
      "id": "model-multi-mfg-27mpc4-hh-b",
      "slug": "multi-mfg-27mpc4-hh-b",
      "name": "Multi MFG 27MPC4-HH-B",
      "seriesId": "series-multi-mfg-mpc-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "27MPC4-HH-B",
      "normalizedModelNumber": "27mpc4-hh-b",
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
      "id": "model-multi-mfg-msh-30hd-b",
      "slug": "multi-mfg-msh-30hd-b",
      "name": "Multi MFG MSH-30HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-30HD-B",
      "normalizedModelNumber": "msh-30hd-b",
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
      "id": "model-multi-mfg-msu-36hd-b",
      "slug": "multi-mfg-msu-36hd-b",
      "name": "Multi MFG MSU-36HD-B",
      "seriesId": "series-multi-mfg-msu-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSU-36HD-B",
      "normalizedModelNumber": "msu-36hd-b",
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
      "id": "model-multi-mfg-msd-24hd-b",
      "slug": "multi-mfg-msd-24hd-b",
      "name": "Multi MFG MSD-24HD-B",
      "seriesId": "series-multi-mfg-hmhp",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSD-24HD-B",
      "normalizedModelNumber": "msd-24hd-b",
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
      "id": "model-multi-mfg-msu-48hd-b",
      "slug": "multi-mfg-msu-48hd-b",
      "name": "Multi MFG MSU-48HD-B",
      "seriesId": "series-multi-mfg-msu-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSU-48HD-B",
      "normalizedModelNumber": "msu-48hd-b",
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
      "id": "model-multi-mfg-msd-36hd-b",
      "slug": "multi-mfg-msd-36hd-b",
      "name": "Multi MFG MSD-36HD-B",
      "seriesId": "series-multi-mfg-hmhp",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSD-36HD-B",
      "normalizedModelNumber": "msd-36hd-b",
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
      "id": "model-multi-mfg-18msz-m-a",
      "slug": "multi-mfg-18msz-m-a",
      "name": "Multi MFG 18MSZ-M-A",
      "seriesId": "series-multi-mfg-msz-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "18MSZ-M-A",
      "normalizedModelNumber": "18msz-m-a",
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
      "id": "model-multi-mfg-hhs-18hd-b",
      "slug": "multi-mfg-hhs-18hd-b",
      "name": "Multi MFG HHS-18HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-18HD-B",
      "normalizedModelNumber": "hhs-18hd-b",
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
      "id": "model-multi-mfg-hhs-18hd-a",
      "slug": "multi-mfg-hhs-18hd-a",
      "name": "Multi MFG HHS-18HD-A",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-18HD-A",
      "normalizedModelNumber": "hhs-18hd-a",
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
      "id": "model-multi-mfg-9mez-m-b",
      "slug": "multi-mfg-9mez-m-b",
      "name": "Multi MFG 9MEZ-M-B",
      "seriesId": "series-multi-mfg-mez-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "9MEZ-M-B",
      "normalizedModelNumber": "9mez-m-b",
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
      "id": "model-multi-mfg-msd-48hd-b",
      "slug": "multi-mfg-msd-48hd-b",
      "name": "Multi MFG MSD-48HD-B",
      "seriesId": "series-multi-mfg-hmhp",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSD-48HD-B",
      "normalizedModelNumber": "msd-48hd-b",
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
      "id": "model-multi-mfg-hhs-24hd-a",
      "slug": "multi-mfg-hhs-24hd-a",
      "name": "Multi MFG HHS-24HD-A",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-24HD-A",
      "normalizedModelNumber": "hhs-24hd-a",
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
      "id": "model-multi-mfg-msd-60hd-b",
      "slug": "multi-mfg-msd-60hd-b",
      "name": "Multi MFG MSD-60HD-B",
      "seriesId": "series-multi-mfg-hmhp",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSD-60HD-B",
      "normalizedModelNumber": "msd-60hd-b",
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
      "id": "model-multi-mfg-hes-18hd-b",
      "slug": "multi-mfg-hes-18hd-b",
      "name": "Multi MFG HES-18HD-B",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-18HD-B",
      "normalizedModelNumber": "hes-18hd-b",
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
      "id": "model-multi-mfg-hes-30hd-b",
      "slug": "multi-mfg-hes-30hd-b",
      "name": "Multi MFG HES-30HD-B",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-30HD-B",
      "normalizedModelNumber": "hes-30hd-b",
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
      "id": "model-multi-mfg-9mez-m-a",
      "slug": "multi-mfg-9mez-m-a",
      "name": "Multi MFG 9MEZ-M-A",
      "seriesId": "series-multi-mfg-mez-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "9MEZ-M-A",
      "normalizedModelNumber": "9mez-m-a",
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
      "id": "model-multi-mfg-msh-48hd-b",
      "slug": "multi-mfg-msh-48hd-b",
      "name": "Multi MFG MSH-48HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-48HD-B",
      "normalizedModelNumber": "msh-48hd-b",
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
      "id": "model-multi-mfg-hhs-24hd-b",
      "slug": "multi-mfg-hhs-24hd-b",
      "name": "Multi MFG HHS-24HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-24HD-B",
      "normalizedModelNumber": "hhs-24hd-b",
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
      "id": "model-multi-mfg-hhs-30hd-a",
      "slug": "multi-mfg-hhs-30hd-a",
      "name": "Multi MFG HHS-30HD-A",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-30HD-A",
      "normalizedModelNumber": "hhs-30hd-a",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 28000,
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
      "id": "model-multi-mfg-hes-24hd-b",
      "slug": "multi-mfg-hes-24hd-b",
      "name": "Multi MFG HES-24HD-B",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-24HD-B",
      "normalizedModelNumber": "hes-24hd-b",
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
      "id": "model-multi-mfg-msh-60hd-b",
      "slug": "multi-mfg-msh-60hd-b",
      "name": "Multi MFG MSH-60HD-B",
      "seriesId": "series-multi-mfg-msh-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "MSH-60HD-B",
      "normalizedModelNumber": "msh-60hd-b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 54000,
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
      "id": "model-multi-mfg-hhs-36hd-a",
      "slug": "multi-mfg-hhs-36hd-a",
      "name": "Multi MFG HHS-36HD-A",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-36HD-A",
      "normalizedModelNumber": "hhs-36hd-a",
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
      "id": "model-multi-mfg-hhs-30hd-b",
      "slug": "multi-mfg-hhs-30hd-b",
      "name": "Multi MFG HHS-30HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-30HD-B",
      "normalizedModelNumber": "hhs-30hd-b",
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
      "id": "model-multi-mfg-hhs-25hd-b",
      "slug": "multi-mfg-hhs-25hd-b",
      "name": "Multi MFG HHS-25HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-25HD-B",
      "normalizedModelNumber": "hhs-25hd-b",
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
      "id": "model-multi-mfg-hhs-36hd-b",
      "slug": "multi-mfg-hhs-36hd-b",
      "name": "Multi MFG HHS-36HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-36HD-B",
      "normalizedModelNumber": "hhs-36hd-b",
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
      "id": "model-multi-mfg-hes-24hd-a",
      "slug": "multi-mfg-hes-24hd-a",
      "name": "Multi MFG HES-24HD-A*",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-24HD-A*",
      "normalizedModelNumber": "hes-24hd-a*",
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
      "id": "model-multi-mfg-hhs-42hd-b",
      "slug": "multi-mfg-hhs-42hd-b",
      "name": "Multi MFG HHS-42HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-42HD-B",
      "normalizedModelNumber": "hhs-42hd-b",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 42000,
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
      "id": "model-multi-mfg-hes-36hd-b",
      "slug": "multi-mfg-hes-36hd-b",
      "name": "Multi MFG HES-36HD-B",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-36HD-B",
      "normalizedModelNumber": "hes-36hd-b",
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
      "id": "model-multi-mfg-hhs-48hd-b",
      "slug": "multi-mfg-hhs-48hd-b",
      "name": "Multi MFG HHS-48HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-48HD-B",
      "normalizedModelNumber": "hhs-48hd-b",
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
      "id": "model-multi-mfg-hes-18hd-a",
      "slug": "multi-mfg-hes-18hd-a",
      "name": "Multi MFG HES-18HD-A",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-18HD-A",
      "normalizedModelNumber": "hes-18hd-a",
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
      "id": "model-multi-mfg-hes-48hd-b",
      "slug": "multi-mfg-hes-48hd-b",
      "name": "Multi MFG HES-48HD-B",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-48HD-B",
      "normalizedModelNumber": "hes-48hd-b",
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
      "id": "model-multi-mfg-hhs-60hd-b",
      "slug": "multi-mfg-hhs-60hd-b",
      "name": "Multi MFG HHS-60HD-B",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-60HD-B",
      "normalizedModelNumber": "hhs-60hd-b",
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
      "id": "model-multi-mfg-hhs-48hd-a",
      "slug": "multi-mfg-hhs-48hd-a",
      "name": "Multi MFG HHS-48HD-A",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-48HD-A",
      "normalizedModelNumber": "hhs-48hd-a",
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
      "id": "model-multi-mfg-hhs-60hd-a",
      "slug": "multi-mfg-hhs-60hd-a",
      "name": "Multi MFG HHS-60HD-A",
      "seriesId": "series-multi-mfg-hhs-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HHS-60HD-A",
      "normalizedModelNumber": "hhs-60hd-a",
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
      "id": "model-multi-mfg-hes-60hd-b",
      "slug": "multi-mfg-hes-60hd-b",
      "name": "Multi MFG HES-60HD-B",
      "seriesId": "series-multi-mfg-hes-series",
      "brandId": "brand-multi-mfg",
      "modelNumber": "HES-60HD-B",
      "normalizedModelNumber": "hes-60hd-b",
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
      "id": "ou-multi-mfg-msh-09hd-a",
      "modelNumber": "MSH-09HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-msh-09hd-b",
      "modelNumber": "MSH-09HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msh-12hd-a",
      "modelNumber": "MSH-12HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-msh-12hd-b",
      "modelNumber": "MSH-12HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-27mpc3-xx-a",
      "modelNumber": "27MPC3-XX-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-18msz-m-b",
      "modelNumber": "18MSZ-M-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-36mpc4-xx-a",
      "modelNumber": "36MPC4-XX-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-24msz-m-b",
      "modelNumber": "24MSZ-M-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-48mpc5-xx-a",
      "modelNumber": "48MPC5-XX-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-36mpc5-he-b",
      "modelNumber": "36MPC5-HE-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-18mpc3-he-b",
      "modelNumber": "18MPC3-HE-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-28mpc3-hh-a",
      "modelNumber": "28MPC3-HH-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-18mpc2-xx-a",
      "modelNumber": "18MPC2-XX-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-msh-24hd-b",
      "modelNumber": "MSH-24HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-36mpc4-hh-a",
      "modelNumber": "36MPC4-HH-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-19mpc2-hh-a",
      "modelNumber": "19MPC2-HH-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-36mpc5-hh-b",
      "modelNumber": "36MPC5-HH-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msh-24hd-a",
      "modelNumber": "MSH-24HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-55mpc6-hh-b",
      "modelNumber": "55MPC6-HH-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-48mpc6-he-b",
      "modelNumber": "48MPC6-HE-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-48mpc6-hh-b",
      "modelNumber": "48MPC6-HH-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msh-36hd-b",
      "modelNumber": "MSH-36HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-30msz-m-a",
      "modelNumber": "30MSZ-M-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-27mpc4-hh-b",
      "modelNumber": "27MPC4-HH-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msh-30hd-b",
      "modelNumber": "MSH-30HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msu-36hd-b",
      "modelNumber": "MSU-36HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msd-24hd-b",
      "modelNumber": "MSD-24HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msu-48hd-b",
      "modelNumber": "MSU-48HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msd-36hd-b",
      "modelNumber": "MSD-36HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-18msz-m-a",
      "modelNumber": "18MSZ-M-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hhs-18hd-b",
      "modelNumber": "HHS-18HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-18hd-a",
      "modelNumber": "HHS-18HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-9mez-m-b",
      "modelNumber": "9MEZ-M-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msd-48hd-b",
      "modelNumber": "MSD-48HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-24hd-a",
      "modelNumber": "HHS-24HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-msd-60hd-b",
      "modelNumber": "MSD-60HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hes-18hd-b",
      "modelNumber": "HES-18HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hes-30hd-b",
      "modelNumber": "HES-30HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-9mez-m-a",
      "modelNumber": "9MEZ-M-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-msh-48hd-b",
      "modelNumber": "MSH-48HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-24hd-b",
      "modelNumber": "HHS-24HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-30hd-a",
      "modelNumber": "HHS-30HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hes-24hd-b",
      "modelNumber": "HES-24HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-msh-60hd-b",
      "modelNumber": "MSH-60HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-36hd-a",
      "modelNumber": "HHS-36HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hhs-30hd-b",
      "modelNumber": "HHS-30HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-25hd-b",
      "modelNumber": "HHS-25HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-36hd-b",
      "modelNumber": "HHS-36HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hes-24hd-a",
      "modelNumber": "HES-24HD-A*",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hhs-42hd-b",
      "modelNumber": "HHS-42HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hes-36hd-b",
      "modelNumber": "HES-36HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-48hd-b",
      "modelNumber": "HHS-48HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hes-18hd-a",
      "modelNumber": "HES-18HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hes-48hd-b",
      "modelNumber": "HES-48HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-60hd-b",
      "modelNumber": "HHS-60HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-multi-mfg-hhs-48hd-a",
      "modelNumber": "HHS-48HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hhs-60hd-a",
      "modelNumber": "HHS-60HD-A",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-multi-mfg-hes-60hd-b",
      "modelNumber": "HES-60HD-B",
      "brandId": "brand-multi-mfg",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-9hwms0-c-m-a",
      "modelNumber": "9HWMS0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9hwms0-c-m-b",
      "modelNumber": "9HWMS0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12hwms0-c-m-a",
      "modelNumber": "12HWMS0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12fchp0-c-m-b",
      "modelNumber": "12FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49635",
      "modelNumber": "IU-49635",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9mmnc0-hp-b",
      "modelNumber": "9MMNC0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18mhw0-hp-b",
      "modelNumber": "18MHW0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9mmnc0-hp-a",
      "modelNumber": "9MMNC0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12hwms0-c-m-b",
      "modelNumber": "12HWMS0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49640",
      "modelNumber": "IU-49640",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-16fchp0-c-m-b",
      "modelNumber": "16FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24mhw0-hp-b",
      "modelNumber": "24MHW0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49643",
      "modelNumber": "IU-49643",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49641",
      "modelNumber": "IU-49641",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49621",
      "modelNumber": "IU-49621",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49637",
      "modelNumber": "IU-49637",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49620",
      "modelNumber": "IU-49620",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9cchp0-c-s-b",
      "modelNumber": "9CCHP0-C-S-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24hwms0-c-m-b",
      "modelNumber": "24HWMS0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12cchp0-c-m-a",
      "modelNumber": "12CCHP0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18fchp0-c-m-b",
      "modelNumber": "18FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12cchp0-c-s-b",
      "modelNumber": "12CCHP0-C-S-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49639",
      "modelNumber": "IU-49639",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18mmnc0-hp-b",
      "modelNumber": "18MMNC0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49630",
      "modelNumber": "IU-49630",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24cchp0-c-s-b",
      "modelNumber": "24CCHP0-C-S-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49642",
      "modelNumber": "IU-49642",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24hwms0-c-m-a",
      "modelNumber": "24HWMS0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49646",
      "modelNumber": "IU-49646",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9hchp0-c-m-b",
      "modelNumber": "9HCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49644",
      "modelNumber": "IU-49644",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49645",
      "modelNumber": "IU-49645",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-36cchp0-c-s-b",
      "modelNumber": "36CCHP0-C-S-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24fchp0-c-m-b",
      "modelNumber": "24FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-30mhw0-hp-a",
      "modelNumber": "30MHW0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-49636",
      "modelNumber": "IU-49636",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18cchp0-c-s-b",
      "modelNumber": "18CCHP0-C-S-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24cchp0-c-m-a",
      "modelNumber": "24CCHP0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9hhhp0-c-m-b",
      "modelNumber": "9HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9hchp0-c-m-a",
      "modelNumber": "9HCHP0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-30hwms0-c-m-b",
      "modelNumber": "30HWMS0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-36fchp0-c-m-b",
      "modelNumber": "36FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18hchp0-c-m-b",
      "modelNumber": "18HCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12hhhp0-c-m-b",
      "modelNumber": "12HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-12hchp0-c-m-b",
      "modelNumber": "12HCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18hhhp0-c-m-b",
      "modelNumber": "18HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24hmhp0-m-b",
      "modelNumber": "24HMHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-48fchp0-c-m-b",
      "modelNumber": "48FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24mphp0-s-b",
      "modelNumber": "24MPHP0-S-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-12hchp0-c-m-a",
      "modelNumber": "12HCHP0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-36hmhp0-m-b",
      "modelNumber": "36HMHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-18mhw0-hp-a",
      "modelNumber": "18MHW0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18muc0-hp-b",
      "modelNumber": "18MUC0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-18muc0-hp-a",
      "modelNumber": "18MUC0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-24hchp0-c-m-a",
      "modelNumber": "24HCHP0-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24hhhp0-c-m-b",
      "modelNumber": "24HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-9mew0-hp-b",
      "modelNumber": "9MEW0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-18mphp0-m-b",
      "modelNumber": "18MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-48hmhp0-m-b",
      "modelNumber": "48HMHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-24hshp-c-m-a",
      "modelNumber": "24HSHP-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-60hmhp0-m-b",
      "modelNumber": "60HMHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-30muc0-hp-b",
      "modelNumber": "30MUC0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-18mphp0-s-b",
      "modelNumber": "18MPHP0-S-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-9mew0-hp-a",
      "modelNumber": "9MEW0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-24mphp0-m-b",
      "modelNumber": "24MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-30hshp-c-m-a",
      "modelNumber": "30HSHP-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-18mphp0-m-a",
      "modelNumber": "18MPHP0-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-60fchp0-c-m-b",
      "modelNumber": "60FCHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-36hhhp0-c-m-b",
      "modelNumber": "36HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-36muc0-hh-a",
      "modelNumber": "36MUC0-HH-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-24muc0-hp-b",
      "modelNumber": "24MUC0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-24hshp0-c-m-b",
      "modelNumber": "24HSHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-24muc0-hp-a",
      "modelNumber": "24MUC0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-36mphp0-m-b",
      "modelNumber": "36MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-24mphp0-m-a",
      "modelNumber": "24MPHP0-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-48cchp0-c-s-b",
      "modelNumber": "48CCHP0-C-S-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-48hhhp0-c-m-b",
      "modelNumber": "48HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-36hshp-c-m-a",
      "modelNumber": "36HSHP-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-18hshp-c-m-a",
      "modelNumber": "18HSHP-C-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-30muc0-hp-a",
      "modelNumber": "30MUC0-HP-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-30mphp0-m-b",
      "modelNumber": "30MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-36muc0-hp-b",
      "modelNumber": "36MUC0-HP-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-18hshp0-c-m-b",
      "modelNumber": "18HSHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-42mphp0-m-b",
      "modelNumber": "42MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-48mphp0-m-b",
      "modelNumber": "48MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-30hshp0-c-m-b",
      "modelNumber": "30HSHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-30mphp0-m-a",
      "modelNumber": "30MPHP0-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-60mphp0-m-b",
      "modelNumber": "60MPHP0-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-36mphp0-m-a",
      "modelNumber": "36MPHP0-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-60hhhp0-c-m-b",
      "modelNumber": "60HHHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "wall-single"
    },
    {
      "id": "iu-48mphp0-m-a",
      "modelNumber": "48MPHP0-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-36hshp0-c-m-b",
      "modelNumber": "36HSHP0-C-M-B",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    },
    {
      "id": "iu-60mphp0-m-a",
      "modelNumber": "60MPHP0-M-A",
      "brandId": "brand-multi-mfg",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-multi-mfg-msh-09hd-a-9hwms0-c-m-a",
      "slug": "multi-mfg-msh-09hd-a-9hwms0-c-m-a",
      "modelId": "model-multi-mfg-msh-09hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-a",
      "indoorUnitId": "iu-9hwms0-c-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-b-9hwms0-c-m-b",
      "slug": "multi-mfg-msh-09hd-b-9hwms0-c-m-b",
      "modelId": "model-multi-mfg-msh-09hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-b",
      "indoorUnitId": "iu-9hwms0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-a-12hwms0-c-m-a",
      "slug": "multi-mfg-msh-12hd-a-12hwms0-c-m-a",
      "modelId": "model-multi-mfg-msh-12hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-a",
      "indoorUnitId": "iu-12hwms0-c-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-b-12fchp0-c-m-b",
      "slug": "multi-mfg-msh-12hd-b-12fchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-12hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-b",
      "indoorUnitId": "iu-12fchp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-27mpc3-xx-a-iu-49635",
      "slug": "multi-mfg-27mpc3-xx-a-iu-49635",
      "modelId": "model-multi-mfg-27mpc3-xx-a",
      "outdoorUnitId": "ou-multi-mfg-27mpc3-xx-a",
      "indoorUnitId": "iu-iu-49635",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-b-9mmnc0-hp-b",
      "slug": "multi-mfg-msh-09hd-b-9mmnc0-hp-b",
      "modelId": "model-multi-mfg-msh-09hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-b",
      "indoorUnitId": "iu-9mmnc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18mhw0-hp-b",
      "slug": "multi-mfg-18msz-m-b-18mhw0-hp-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18mhw0-hp-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-a-9mmnc0-hp-a",
      "slug": "multi-mfg-msh-09hd-a-9mmnc0-hp-a",
      "modelId": "model-multi-mfg-msh-09hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-a",
      "indoorUnitId": "iu-9mmnc0-hp-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.0,
      "hspf2": 12.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-b-12hwms0-c-m-b",
      "slug": "multi-mfg-msh-12hd-b-12hwms0-c-m-b",
      "modelId": "model-multi-mfg-msh-12hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-b",
      "indoorUnitId": "iu-12hwms0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-36mpc4-xx-a-iu-49640",
      "slug": "multi-mfg-36mpc4-xx-a-iu-49640",
      "modelId": "model-multi-mfg-36mpc4-xx-a",
      "outdoorUnitId": "ou-multi-mfg-36mpc4-xx-a",
      "indoorUnitId": "iu-iu-49640",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.9,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-16fchp0-c-m-b",
      "slug": "multi-mfg-18msz-m-b-16fchp0-c-m-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-16fchp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-24msz-m-b-24mhw0-hp-b",
      "slug": "multi-mfg-24msz-m-b-24mhw0-hp-b",
      "modelId": "model-multi-mfg-24msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-24msz-m-b",
      "indoorUnitId": "iu-24mhw0-hp-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-48mpc5-xx-a-iu-49643",
      "slug": "multi-mfg-48mpc5-xx-a-iu-49643",
      "modelId": "model-multi-mfg-48mpc5-xx-a",
      "outdoorUnitId": "ou-multi-mfg-48mpc5-xx-a",
      "indoorUnitId": "iu-iu-49643",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.4,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-36mpc5-he-b-iu-49641",
      "slug": "multi-mfg-36mpc5-he-b-iu-49641",
      "modelId": "model-multi-mfg-36mpc5-he-b",
      "outdoorUnitId": "ou-multi-mfg-36mpc5-he-b",
      "indoorUnitId": "iu-iu-49641",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18mpc3-he-b-iu-49621",
      "slug": "multi-mfg-18mpc3-he-b-iu-49621",
      "modelId": "model-multi-mfg-18mpc3-he-b",
      "outdoorUnitId": "ou-multi-mfg-18mpc3-he-b",
      "indoorUnitId": "iu-iu-49621",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-28mpc3-hh-a-iu-49637",
      "slug": "multi-mfg-28mpc3-hh-a-iu-49637",
      "modelId": "model-multi-mfg-28mpc3-hh-a",
      "outdoorUnitId": "ou-multi-mfg-28mpc3-hh-a",
      "indoorUnitId": "iu-iu-49637",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18mpc2-xx-a-iu-49620",
      "slug": "multi-mfg-18mpc2-xx-a-iu-49620",
      "modelId": "model-multi-mfg-18mpc2-xx-a",
      "outdoorUnitId": "ou-multi-mfg-18mpc2-xx-a",
      "indoorUnitId": "iu-iu-49620",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.9,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-b-9cchp0-c-s-b",
      "slug": "multi-mfg-msh-09hd-b-9cchp0-c-s-b",
      "modelId": "model-multi-mfg-msh-09hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-b",
      "indoorUnitId": "iu-9cchp0-c-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-b-24hwms0-c-m-b",
      "slug": "multi-mfg-msh-24hd-b-24hwms0-c-m-b",
      "modelId": "model-multi-mfg-msh-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-b",
      "indoorUnitId": "iu-24hwms0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-a-12cchp0-c-m-a",
      "slug": "multi-mfg-msh-12hd-a-12cchp0-c-m-a",
      "modelId": "model-multi-mfg-msh-12hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-a",
      "indoorUnitId": "iu-12cchp0-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18fchp0-c-m-b",
      "slug": "multi-mfg-18msz-m-b-18fchp0-c-m-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-b-12cchp0-c-s-b",
      "slug": "multi-mfg-msh-12hd-b-12cchp0-c-s-b",
      "modelId": "model-multi-mfg-msh-12hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-b",
      "indoorUnitId": "iu-12cchp0-c-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-36mpc4-hh-a-iu-49639",
      "slug": "multi-mfg-36mpc4-hh-a-iu-49639",
      "modelId": "model-multi-mfg-36mpc4-hh-a",
      "outdoorUnitId": "ou-multi-mfg-36mpc4-hh-a",
      "indoorUnitId": "iu-iu-49639",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18mmnc0-hp-b",
      "slug": "multi-mfg-18msz-m-b-18mmnc0-hp-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18mmnc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.2,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-19mpc2-hh-a-iu-49630",
      "slug": "multi-mfg-19mpc2-hh-a-iu-49630",
      "modelId": "model-multi-mfg-19mpc2-hh-a",
      "outdoorUnitId": "ou-multi-mfg-19mpc2-hh-a",
      "indoorUnitId": "iu-iu-49630",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-24msz-m-b-24cchp0-c-s-b",
      "slug": "multi-mfg-24msz-m-b-24cchp0-c-s-b",
      "modelId": "model-multi-mfg-24msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-24msz-m-b",
      "indoorUnitId": "iu-24cchp0-c-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-36mpc5-hh-b-iu-49642",
      "slug": "multi-mfg-36mpc5-hh-b-iu-49642",
      "modelId": "model-multi-mfg-36mpc5-hh-b",
      "outdoorUnitId": "ou-multi-mfg-36mpc5-hh-b",
      "indoorUnitId": "iu-iu-49642",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-a-24hwms0-c-m-a",
      "slug": "multi-mfg-msh-24hd-a-24hwms0-c-m-a",
      "modelId": "model-multi-mfg-msh-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-a",
      "indoorUnitId": "iu-24hwms0-c-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-55mpc6-hh-b-iu-49646",
      "slug": "multi-mfg-55mpc6-hh-b-iu-49646",
      "modelId": "model-multi-mfg-55mpc6-hh-b",
      "outdoorUnitId": "ou-multi-mfg-55mpc6-hh-b",
      "indoorUnitId": "iu-iu-49646",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-b-9hchp0-c-m-b",
      "slug": "multi-mfg-msh-09hd-b-9hchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-09hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-b",
      "indoorUnitId": "iu-9hchp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-48mpc6-he-b-iu-49644",
      "slug": "multi-mfg-48mpc6-he-b-iu-49644",
      "modelId": "model-multi-mfg-48mpc6-he-b",
      "outdoorUnitId": "ou-multi-mfg-48mpc6-he-b",
      "indoorUnitId": "iu-iu-49644",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.3,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-48mpc6-hh-b-iu-49645",
      "slug": "multi-mfg-48mpc6-hh-b-iu-49645",
      "modelId": "model-multi-mfg-48mpc6-hh-b",
      "outdoorUnitId": "ou-multi-mfg-48mpc6-hh-b",
      "indoorUnitId": "iu-iu-49645",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-36hd-b-36cchp0-c-s-b",
      "slug": "multi-mfg-msh-36hd-b-36cchp0-c-s-b",
      "modelId": "model-multi-mfg-msh-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-36hd-b",
      "indoorUnitId": "iu-36cchp0-c-s-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-24msz-m-b-24fchp0-c-m-b",
      "slug": "multi-mfg-24msz-m-b-24fchp0-c-m-b",
      "modelId": "model-multi-mfg-24msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-24msz-m-b",
      "indoorUnitId": "iu-24fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-30msz-m-a-30mhw0-hp-a",
      "slug": "multi-mfg-30msz-m-a-30mhw0-hp-a",
      "modelId": "model-multi-mfg-30msz-m-a",
      "outdoorUnitId": "ou-multi-mfg-30msz-m-a",
      "indoorUnitId": "iu-30mhw0-hp-a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-27mpc4-hh-b-iu-49636",
      "slug": "multi-mfg-27mpc4-hh-b-iu-49636",
      "modelId": "model-multi-mfg-27mpc4-hh-b",
      "outdoorUnitId": "ou-multi-mfg-27mpc4-hh-b",
      "indoorUnitId": "iu-iu-49636",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-b-24cchp0-c-s-b",
      "slug": "multi-mfg-msh-24hd-b-24cchp0-c-s-b",
      "modelId": "model-multi-mfg-msh-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-b",
      "indoorUnitId": "iu-24cchp0-c-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18cchp0-c-s-b",
      "slug": "multi-mfg-18msz-m-b-18cchp0-c-s-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18cchp0-c-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-a-24cchp0-c-m-a",
      "slug": "multi-mfg-msh-24hd-a-24cchp0-c-m-a",
      "modelId": "model-multi-mfg-msh-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-a",
      "indoorUnitId": "iu-24cchp0-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-b-9hhhp0-c-m-b",
      "slug": "multi-mfg-msh-09hd-b-9hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msh-09hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-b",
      "indoorUnitId": "iu-9hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-b-24fchp0-c-m-b",
      "slug": "multi-mfg-msh-24hd-b-24fchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-b",
      "indoorUnitId": "iu-24fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.4,
      "hspf2": 12.1,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-09hd-a-9hchp0-c-m-a",
      "slug": "multi-mfg-msh-09hd-a-9hchp0-c-m-a",
      "modelId": "model-multi-mfg-msh-09hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-09hd-a",
      "indoorUnitId": "iu-9hchp0-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.2,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-30hd-b-30hwms0-c-m-b",
      "slug": "multi-mfg-msh-30hd-b-30hwms0-c-m-b",
      "modelId": "model-multi-mfg-msh-30hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-30hd-b",
      "indoorUnitId": "iu-30hwms0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-36hd-b-36fchp0-c-m-b",
      "slug": "multi-mfg-msh-36hd-b-36fchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-36hd-b",
      "indoorUnitId": "iu-36fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msu-36hd-b-36cchp0-c-s-b",
      "slug": "multi-mfg-msu-36hd-b-36cchp0-c-s-b",
      "modelId": "model-multi-mfg-msu-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-msu-36hd-b",
      "indoorUnitId": "iu-36cchp0-c-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18hchp0-c-m-b",
      "slug": "multi-mfg-18msz-m-b-18hchp0-c-m-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18hchp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-b-12hhhp0-c-m-b",
      "slug": "multi-mfg-msh-12hd-b-12hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msh-12hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-b",
      "indoorUnitId": "iu-12hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-b-12hchp0-c-m-b",
      "slug": "multi-mfg-msh-12hd-b-12hchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-12hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-b",
      "indoorUnitId": "iu-12hchp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18hhhp0-c-m-b",
      "slug": "multi-mfg-18msz-m-b-18hhhp0-c-m-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msd-24hd-b-24hmhp0-m-b",
      "slug": "multi-mfg-msd-24hd-b-24hmhp0-m-b",
      "modelId": "model-multi-mfg-msd-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-msd-24hd-b",
      "indoorUnitId": "iu-24hmhp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msu-48hd-b-48fchp0-c-m-b",
      "slug": "multi-mfg-msu-48hd-b-48fchp0-c-m-b",
      "modelId": "model-multi-mfg-msu-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msu-48hd-b",
      "indoorUnitId": "iu-48fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.8,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-24msz-m-b-24mphp0-s-b",
      "slug": "multi-mfg-24msz-m-b-24mphp0-s-b",
      "modelId": "model-multi-mfg-24msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-24msz-m-b",
      "indoorUnitId": "iu-24mphp0-s-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-12hd-a-12hchp0-c-m-a",
      "slug": "multi-mfg-msh-12hd-a-12hchp0-c-m-a",
      "modelId": "model-multi-mfg-msh-12hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-12hd-a",
      "indoorUnitId": "iu-12hchp0-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msd-36hd-b-36hmhp0-m-b",
      "slug": "multi-mfg-msd-36hd-b-36hmhp0-m-b",
      "modelId": "model-multi-mfg-msd-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-msd-36hd-b",
      "indoorUnitId": "iu-36hmhp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-a-18mhw0-hp-a",
      "slug": "multi-mfg-18msz-m-a-18mhw0-hp-a",
      "modelId": "model-multi-mfg-18msz-m-a",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-a",
      "indoorUnitId": "iu-18mhw0-hp-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-18hd-b-18muc0-hp-b",
      "slug": "multi-mfg-hhs-18hd-b-18muc0-hp-b",
      "modelId": "model-multi-mfg-hhs-18hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-18hd-b",
      "indoorUnitId": "iu-18muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.3,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-18hd-a-18muc0-hp-a",
      "slug": "multi-mfg-hhs-18hd-a-18muc0-hp-a",
      "modelId": "model-multi-mfg-hhs-18hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-18hd-a",
      "indoorUnitId": "iu-18muc0-hp-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.3,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-a-24hchp0-c-m-a",
      "slug": "multi-mfg-msh-24hd-a-24hchp0-c-m-a",
      "modelId": "model-multi-mfg-msh-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-a",
      "indoorUnitId": "iu-24hchp0-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.2,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-24msz-m-b-24hhhp0-c-m-b",
      "slug": "multi-mfg-24msz-m-b-24hhhp0-c-m-b",
      "modelId": "model-multi-mfg-24msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-24msz-m-b",
      "indoorUnitId": "iu-24hhhp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-9mez-m-b-9mew0-hp-b",
      "slug": "multi-mfg-9mez-m-b-9mew0-hp-b",
      "modelId": "model-multi-mfg-9mez-m-b",
      "outdoorUnitId": "ou-multi-mfg-9mez-m-b",
      "indoorUnitId": "iu-9mew0-hp-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-24hd-b-24hhhp0-c-m-b",
      "slug": "multi-mfg-msh-24hd-b-24hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msh-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-24hd-b",
      "indoorUnitId": "iu-24hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-18hd-b-18mphp0-m-b",
      "slug": "multi-mfg-hhs-18hd-b-18mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-18hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-18hd-b",
      "indoorUnitId": "iu-18mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msd-48hd-b-48hmhp0-m-b",
      "slug": "multi-mfg-msd-48hd-b-48hmhp0-m-b",
      "modelId": "model-multi-mfg-msd-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msd-48hd-b",
      "indoorUnitId": "iu-48hmhp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-24hd-a-24hshp-c-m-a",
      "slug": "multi-mfg-hhs-24hd-a-24hshp-c-m-a",
      "modelId": "model-multi-mfg-hhs-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-24hd-a",
      "indoorUnitId": "iu-24hshp-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msd-60hd-b-60hmhp0-m-b",
      "slug": "multi-mfg-msd-60hd-b-60hmhp0-m-b",
      "modelId": "model-multi-mfg-msd-60hd-b",
      "outdoorUnitId": "ou-multi-mfg-msd-60hd-b",
      "indoorUnitId": "iu-60hmhp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-18hd-b-18mphp0-m-b",
      "slug": "multi-mfg-hes-18hd-b-18mphp0-m-b",
      "modelId": "model-multi-mfg-hes-18hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-18hd-b",
      "indoorUnitId": "iu-18mphp0-m-b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.8,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-30hd-b-30muc0-hp-b",
      "slug": "multi-mfg-hes-30hd-b-30muc0-hp-b",
      "modelId": "model-multi-mfg-hes-30hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-30hd-b",
      "indoorUnitId": "iu-30muc0-hp-b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.6,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-18hd-b-18muc0-hp-b",
      "slug": "multi-mfg-hes-18hd-b-18muc0-hp-b",
      "modelId": "model-multi-mfg-hes-18hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-18hd-b",
      "indoorUnitId": "iu-18muc0-hp-b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-18msz-m-b-18mphp0-s-b",
      "slug": "multi-mfg-18msz-m-b-18mphp0-s-b",
      "modelId": "model-multi-mfg-18msz-m-b",
      "outdoorUnitId": "ou-multi-mfg-18msz-m-b",
      "indoorUnitId": "iu-18mphp0-s-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-9mez-m-a-9mew0-hp-a",
      "slug": "multi-mfg-9mez-m-a-9mew0-hp-a",
      "modelId": "model-multi-mfg-9mez-m-a",
      "outdoorUnitId": "ou-multi-mfg-9mez-m-a",
      "indoorUnitId": "iu-9mew0-hp-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-48hd-b-48fchp0-c-m-b",
      "slug": "multi-mfg-msh-48hd-b-48fchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-48hd-b",
      "indoorUnitId": "iu-48fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.5,
      "hspf2": 10.1,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-24hd-b-24mphp0-m-b",
      "slug": "multi-mfg-hhs-24hd-b-24mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-24hd-b",
      "indoorUnitId": "iu-24mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-30hd-a-30hshp-c-m-a",
      "slug": "multi-mfg-hhs-30hd-a-30hshp-c-m-a",
      "modelId": "model-multi-mfg-hhs-30hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-30hd-a",
      "indoorUnitId": "iu-30hshp-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-24hd-b-24mphp0-m-b",
      "slug": "multi-mfg-hes-24hd-b-24mphp0-m-b",
      "modelId": "model-multi-mfg-hes-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-24hd-b",
      "indoorUnitId": "iu-24mphp0-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.1,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-18hd-a-18mphp0-m-a",
      "slug": "multi-mfg-hhs-18hd-a-18mphp0-m-a",
      "modelId": "model-multi-mfg-hhs-18hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-18hd-a",
      "indoorUnitId": "iu-18mphp0-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-60hd-b-60fchp0-c-m-b",
      "slug": "multi-mfg-msh-60hd-b-60fchp0-c-m-b",
      "modelId": "model-multi-mfg-msh-60hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-60hd-b",
      "indoorUnitId": "iu-60fchp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-36hd-b-36hhhp0-c-m-b",
      "slug": "multi-mfg-msh-36hd-b-36hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msh-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-36hd-b",
      "indoorUnitId": "iu-36hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.7,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-36hd-a-36muc0-hh-a",
      "slug": "multi-mfg-hhs-36hd-a-36muc0-hh-a",
      "modelId": "model-multi-mfg-hhs-36hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-36hd-a",
      "indoorUnitId": "iu-36muc0-hh-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.6,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-24hd-b-24muc0-hp-b",
      "slug": "multi-mfg-hhs-24hd-b-24muc0-hp-b",
      "modelId": "model-multi-mfg-hhs-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-24hd-b",
      "indoorUnitId": "iu-24muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-24hd-b-24hshp0-c-m-b",
      "slug": "multi-mfg-hhs-24hd-b-24hshp0-c-m-b",
      "modelId": "model-multi-mfg-hhs-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-24hd-b",
      "indoorUnitId": "iu-24hshp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-30hd-b-30muc0-hp-b",
      "slug": "multi-mfg-hhs-30hd-b-30muc0-hp-b",
      "modelId": "model-multi-mfg-hhs-30hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-30hd-b",
      "indoorUnitId": "iu-30muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-25hd-b-24muc0-hp-b",
      "slug": "multi-mfg-hhs-25hd-b-24muc0-hp-b",
      "modelId": "model-multi-mfg-hhs-25hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-25hd-b",
      "indoorUnitId": "iu-24muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-24hd-a-24muc0-hp-a",
      "slug": "multi-mfg-hhs-24hd-a-24muc0-hp-a",
      "modelId": "model-multi-mfg-hhs-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-24hd-a",
      "indoorUnitId": "iu-24muc0-hp-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-36hd-b-36mphp0-m-b",
      "slug": "multi-mfg-hhs-36hd-b-36mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-36hd-b",
      "indoorUnitId": "iu-36mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-24hd-a-24mphp0-m-a",
      "slug": "multi-mfg-hhs-24hd-a-24mphp0-m-a",
      "modelId": "model-multi-mfg-hhs-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-24hd-a",
      "indoorUnitId": "iu-24mphp0-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-24hd-b-24muc0-hp-b",
      "slug": "multi-mfg-hes-24hd-b-24muc0-hp-b",
      "modelId": "model-multi-mfg-hes-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-24hd-b",
      "indoorUnitId": "iu-24muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-25hd-b-24hshp0-c-m-b",
      "slug": "multi-mfg-hhs-25hd-b-24hshp0-c-m-b",
      "modelId": "model-multi-mfg-hhs-25hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-25hd-b",
      "indoorUnitId": "iu-24hshp0-c-m-b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.4,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msu-48hd-b-48cchp0-c-s-b",
      "slug": "multi-mfg-msu-48hd-b-48cchp0-c-s-b",
      "modelId": "model-multi-mfg-msu-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msu-48hd-b",
      "indoorUnitId": "iu-48cchp0-c-s-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msu-48hd-b-48hhhp0-c-m-b",
      "slug": "multi-mfg-msu-48hd-b-48hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msu-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msu-48hd-b",
      "indoorUnitId": "iu-48hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-25hd-b-24mphp0-m-b",
      "slug": "multi-mfg-hhs-25hd-b-24mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-25hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-25hd-b",
      "indoorUnitId": "iu-24mphp0-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-36hd-a-36hshp-c-m-a",
      "slug": "multi-mfg-hhs-36hd-a-36hshp-c-m-a",
      "modelId": "model-multi-mfg-hhs-36hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-36hd-a",
      "indoorUnitId": "iu-36hshp-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-18hd-a-18hshp-c-m-a",
      "slug": "multi-mfg-hhs-18hd-a-18hshp-c-m-a",
      "modelId": "model-multi-mfg-hhs-18hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-18hd-a",
      "indoorUnitId": "iu-18hshp-c-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-24hd-a-24muc0-hp-a",
      "slug": "multi-mfg-hes-24hd-a-24muc0-hp-a",
      "modelId": "model-multi-mfg-hes-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-hes-24hd-a",
      "indoorUnitId": "iu-24muc0-hp-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-24hd-a-24mphp0-m-a",
      "slug": "multi-mfg-hes-24hd-a-24mphp0-m-a",
      "modelId": "model-multi-mfg-hes-24hd-a",
      "outdoorUnitId": "ou-multi-mfg-hes-24hd-a",
      "indoorUnitId": "iu-24mphp0-m-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-30hd-a-30muc0-hp-a",
      "slug": "multi-mfg-hhs-30hd-a-30muc0-hp-a",
      "modelId": "model-multi-mfg-hhs-30hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-30hd-a",
      "indoorUnitId": "iu-30muc0-hp-a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.9,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-30hd-b-30mphp0-m-b",
      "slug": "multi-mfg-hhs-30hd-b-30mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-30hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-30hd-b",
      "indoorUnitId": "iu-30mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-36hd-b-36muc0-hp-b",
      "slug": "multi-mfg-hhs-36hd-b-36muc0-hp-b",
      "modelId": "model-multi-mfg-hhs-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-36hd-b",
      "indoorUnitId": "iu-36muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-18hd-b-18hshp0-c-m-b",
      "slug": "multi-mfg-hes-18hd-b-18hshp0-c-m-b",
      "modelId": "model-multi-mfg-hes-18hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-18hd-b",
      "indoorUnitId": "iu-18hshp0-c-m-b",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-18hd-b-18hshp0-c-m-b",
      "slug": "multi-mfg-hhs-18hd-b-18hshp0-c-m-b",
      "modelId": "model-multi-mfg-hhs-18hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-18hd-b",
      "indoorUnitId": "iu-18hshp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.8,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-48hd-b-48cchp0-c-s-b",
      "slug": "multi-mfg-msh-48hd-b-48cchp0-c-s-b",
      "modelId": "model-multi-mfg-msh-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-48hd-b",
      "indoorUnitId": "iu-48cchp0-c-s-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-42hd-b-42mphp0-m-b",
      "slug": "multi-mfg-hhs-42hd-b-42mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-42hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-42hd-b",
      "indoorUnitId": "iu-42mphp0-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-36hd-b-36muc0-hp-b",
      "slug": "multi-mfg-hes-36hd-b-36muc0-hp-b",
      "modelId": "model-multi-mfg-hes-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-36hd-b",
      "indoorUnitId": "iu-36muc0-hp-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-48hd-b-48hhhp0-c-m-b",
      "slug": "multi-mfg-msh-48hd-b-48hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msh-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-48hd-b",
      "indoorUnitId": "iu-48hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-48hd-b-48mphp0-m-b",
      "slug": "multi-mfg-hhs-48hd-b-48mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-48hd-b",
      "indoorUnitId": "iu-48mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-18hd-a-18hshp-c-m-a",
      "slug": "multi-mfg-hes-18hd-a-18hshp-c-m-a",
      "modelId": "model-multi-mfg-hes-18hd-a",
      "outdoorUnitId": "ou-multi-mfg-hes-18hd-a",
      "indoorUnitId": "iu-18hshp-c-m-a",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-30hd-b-30hshp0-c-m-b",
      "slug": "multi-mfg-hhs-30hd-b-30hshp0-c-m-b",
      "modelId": "model-multi-mfg-hhs-30hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-30hd-b",
      "indoorUnitId": "iu-30hshp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.3,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-30hd-a-30mphp0-m-a",
      "slug": "multi-mfg-hhs-30hd-a-30mphp0-m-a",
      "modelId": "model-multi-mfg-hhs-30hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-30hd-a",
      "indoorUnitId": "iu-30mphp0-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-36hd-b-36mphp0-m-b",
      "slug": "multi-mfg-hes-36hd-b-36mphp0-m-b",
      "modelId": "model-multi-mfg-hes-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-36hd-b",
      "indoorUnitId": "iu-36mphp0-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-48hd-b-48mphp0-m-b",
      "slug": "multi-mfg-hes-48hd-b-48mphp0-m-b",
      "modelId": "model-multi-mfg-hes-48hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-48hd-b",
      "indoorUnitId": "iu-48mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-60hd-b-60mphp0-m-b",
      "slug": "multi-mfg-hhs-60hd-b-60mphp0-m-b",
      "modelId": "model-multi-mfg-hhs-60hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-60hd-b",
      "indoorUnitId": "iu-60mphp0-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-36hd-a-36mphp0-m-a",
      "slug": "multi-mfg-hhs-36hd-a-36mphp0-m-a",
      "modelId": "model-multi-mfg-hhs-36hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-36hd-a",
      "indoorUnitId": "iu-36mphp0-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-24hd-b-24hshp0-c-m-b",
      "slug": "multi-mfg-hes-24hd-b-24hshp0-c-m-b",
      "modelId": "model-multi-mfg-hes-24hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-24hd-b",
      "indoorUnitId": "iu-24hshp0-c-m-b",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-msh-60hd-b-60hhhp0-c-m-b",
      "slug": "multi-mfg-msh-60hd-b-60hhhp0-c-m-b",
      "modelId": "model-multi-mfg-msh-60hd-b",
      "outdoorUnitId": "ou-multi-mfg-msh-60hd-b",
      "indoorUnitId": "iu-60hhhp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-48hd-a-48mphp0-m-a",
      "slug": "multi-mfg-hhs-48hd-a-48mphp0-m-a",
      "modelId": "model-multi-mfg-hhs-48hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-48hd-a",
      "indoorUnitId": "iu-48mphp0-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-36hd-b-36hshp0-c-m-b",
      "slug": "multi-mfg-hes-36hd-b-36hshp0-c-m-b",
      "modelId": "model-multi-mfg-hes-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-36hd-b",
      "indoorUnitId": "iu-36hshp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 8.7,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-36hd-b-36hshp0-c-m-b",
      "slug": "multi-mfg-hhs-36hd-b-36hshp0-c-m-b",
      "modelId": "model-multi-mfg-hhs-36hd-b",
      "outdoorUnitId": "ou-multi-mfg-hhs-36hd-b",
      "indoorUnitId": "iu-36hshp0-c-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.4,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hhs-60hd-a-60mphp0-m-a",
      "slug": "multi-mfg-hhs-60hd-a-60mphp0-m-a",
      "modelId": "model-multi-mfg-hhs-60hd-a",
      "outdoorUnitId": "ou-multi-mfg-hhs-60hd-a",
      "indoorUnitId": "iu-60mphp0-m-a",
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
          "sourceId": "src-multi-mfg-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-multi-mfg-hes-60hd-b-60mphp0-m-b",
      "slug": "multi-mfg-hes-60hd-b-60mphp0-m-b",
      "modelId": "model-multi-mfg-hes-60hd-b",
      "outdoorUnitId": "ou-multi-mfg-hes-60hd-b",
      "indoorUnitId": "iu-60mphp0-m-b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.4,
      "sources": [
        {
          "sourceId": "src-multi-mfg-epa",
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
