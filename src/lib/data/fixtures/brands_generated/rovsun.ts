import type { BrandDataset } from "../../types";

export const brand_rovsunDataset: BrandDataset = {
  "brand": {
    "id": "brand-rovsun",
    "slug": "rovsun",
    "name": "ROVSUN",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour ROVSUN",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-rovsun-epa",
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
      "id": "series-rovsun-tpro-23",
      "slug": "rovsun-tpro-23",
      "name": "Tpro 23",
      "brandId": "brand-rovsun",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Tpro 23 de ROVSUN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-rovsun-t-pro",
      "slug": "rovsun-t-pro",
      "name": "T-PRO",
      "brandId": "brand-rovsun",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série T-PRO de ROVSUN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-rovsun-cassette-single",
      "slug": "rovsun-cassette-single",
      "name": "CASSETTE-single",
      "brandId": "brand-rovsun",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série CASSETTE-single de ROVSUN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-rovsun-celling-floor-single",
      "slug": "rovsun-celling-floor-single",
      "name": "CELLING FLOOR-single",
      "brandId": "brand-rovsun",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CELLING FLOOR-single de ROVSUN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-rovsun-duct-single",
      "slug": "rovsun-duct-single",
      "name": "DUCT-single",
      "brandId": "brand-rovsun",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DUCT-single de ROVSUN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-rovsun-side-discharge",
      "slug": "rovsun-side-discharge",
      "name": "Side Discharge",
      "brandId": "brand-rovsun",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Side Discharge de ROVSUN",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-rovsun-tsc-12ha2i3xi23b-o",
      "slug": "rovsun-tsc-12ha2i3xi23b-o",
      "name": "ROVSUN TSC-12HA2/I3XI23B-O*",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-12HA2/I3XI23B-O*",
      "normalizedModelNumber": "tsc-12ha2/i3xi23b-o*",
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
      "id": "model-rovsun-rv12t223-o",
      "slug": "rovsun-rv12t223-o",
      "name": "ROVSUN RV12T2/23-O",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "RV12T2/23-O",
      "normalizedModelNumber": "rv12t2/23-o",
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
      "id": "model-rovsun-tsc-12ha1i3xi22b-o",
      "slug": "rovsun-tsc-12ha1i3xi22b-o",
      "name": "ROVSUN TSC-12HA1/I3XI22B-O*",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-12HA1/I3XI22B-O*",
      "normalizedModelNumber": "tsc-12ha1/i3xi22b-o*",
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
      "id": "model-rovsun-tsc-09ha2i3xi23b-o",
      "slug": "rovsun-tsc-09ha2i3xi23b-o",
      "name": "ROVSUN TSC-09HA2/I3XI23B-O*",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-09HA2/I3XI23B-O*",
      "normalizedModelNumber": "tsc-09ha2/i3xi23b-o*",
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
      "id": "model-rovsun-tsc-12ha2i3xi23-o",
      "slug": "rovsun-tsc-12ha2i3xi23-o",
      "name": "ROVSUN TSC-12HA2/I3XI23-O",
      "seriesId": "series-rovsun-t-pro",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-12HA2/I3XI23-O",
      "normalizedModelNumber": "tsc-12ha2/i3xi23-o",
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
      "id": "model-rovsun-rv-18m2o-r",
      "slug": "rovsun-rv-18m2o-r",
      "name": "ROVSUN RV-18M2/O-R",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "RV-18M2/O-R",
      "normalizedModelNumber": "rv-18m2/o-r",
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
      "id": "model-rovsun-rv18t221-o",
      "slug": "rovsun-rv18t221-o",
      "name": "ROVSUN RV18T2/21-O",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "RV18T2/21-O",
      "normalizedModelNumber": "rv18t2/21-o",
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
      "id": "model-rovsun-tsc-24ha2i3xi21b-o",
      "slug": "rovsun-tsc-24ha2i3xi21b-o",
      "name": "ROVSUN TSC-24HA2/I3XI21B-O*",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-24HA2/I3XI21B-O*",
      "normalizedModelNumber": "tsc-24ha2/i3xi21b-o*",
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
      "id": "model-rovsun-rv09t122-o",
      "slug": "rovsun-rv09t122-o",
      "name": "ROVSUN RV09T1/22-O",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "RV09T1/22-O",
      "normalizedModelNumber": "rv09t1/22-o",
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
      "id": "model-rovsun-rv12t122-o",
      "slug": "rovsun-rv12t122-o",
      "name": "ROVSUN RV12T1/22-O",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "RV12T1/22-O",
      "normalizedModelNumber": "rv12t1/22-o",
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
      "id": "model-rovsun-tsc-09ha1i3xi22b-o",
      "slug": "rovsun-tsc-09ha1i3xi22b-o",
      "name": "ROVSUN TSC-09HA1/I3XI22B-O*",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-09HA1/I3XI22B-O*",
      "normalizedModelNumber": "tsc-09ha1/i3xi22b-o*",
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
      "id": "model-rovsun-tsc-18ha2i3xi21b-o",
      "slug": "rovsun-tsc-18ha2i3xi21b-o",
      "name": "ROVSUN TSC-18HA2/I3XI21B-O*",
      "seriesId": "series-rovsun-tpro-23",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-18HA2/I3XI21B-O*",
      "normalizedModelNumber": "tsc-18ha2/i3xi21b-o*",
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
      "id": "model-rovsun-tsc-09ha1i3xi22-o",
      "slug": "rovsun-tsc-09ha1i3xi22-o",
      "name": "ROVSUN TSC-09HA1/I3XI22-O",
      "seriesId": "series-rovsun-t-pro",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-09HA1/I3XI22-O",
      "normalizedModelNumber": "tsc-09ha1/i3xi22-o",
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
      "id": "model-rovsun-rvc-24o",
      "slug": "rovsun-rvc-24o",
      "name": "ROVSUN RVC-24/O",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "RVC-24/O",
      "normalizedModelNumber": "rvc-24/o",
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
      "id": "model-rovsun-tsc-12ha1i3xi22-o",
      "slug": "rovsun-tsc-12ha1i3xi22-o",
      "name": "ROVSUN TSC-12HA1/I3XI22-O",
      "seriesId": "series-rovsun-t-pro",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-12HA1/I3XI22-O",
      "normalizedModelNumber": "tsc-12ha1/i3xi22-o",
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
      "id": "model-rovsun-tsc-18ha2i3xi21-o",
      "slug": "rovsun-tsc-18ha2i3xi21-o",
      "name": "ROVSUN TSC-18HA2/I3XI21-O",
      "seriesId": "series-rovsun-t-pro",
      "brandId": "brand-rovsun",
      "modelNumber": "TSC-18HA2/I3XI21-O",
      "normalizedModelNumber": "tsc-18ha2/i3xi21-o",
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
      "id": "model-rovsun-tmsc-18ha2i2xi20b-o",
      "slug": "rovsun-tmsc-18ha2i2xi20b-o",
      "name": "ROVSUN TMSC-18HA2/I2XI20B-O",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TMSC-18HA2/I2XI20B-O",
      "normalizedModelNumber": "tmsc-18ha2/i2xi20b-o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 16000,
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
      "id": "model-rovsun-tcf-18zhrhdvo",
      "slug": "rovsun-tcf-18zhrhdvo",
      "name": "ROVSUN TCF-18ZHRH/DVO",
      "seriesId": "series-rovsun-celling-floor-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TCF-18ZHRH/DVO",
      "normalizedModelNumber": "tcf-18zhrh/dvo",
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
      "id": "model-rovsun-td-18d2hrhdvo",
      "slug": "rovsun-td-18d2hrhdvo",
      "name": "ROVSUN TD-18D2HRH/DVO",
      "seriesId": "series-rovsun-duct-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TD-18D2HRH/DVO",
      "normalizedModelNumber": "td-18d2hrh/dvo",
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
      "id": "model-rovsun-rvcf-24o",
      "slug": "rovsun-rvcf-24o",
      "name": "ROVSUN RVCF-24/O",
      "seriesId": "series-rovsun-celling-floor-single",
      "brandId": "brand-rovsun",
      "modelNumber": "RVCF-24/O",
      "normalizedModelNumber": "rvcf-24/o",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22200,
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
      "id": "model-rovsun-tcf-24zhrhdvo",
      "slug": "rovsun-tcf-24zhrhdvo",
      "name": "ROVSUN TCF-24ZHRH/DVO",
      "seriesId": "series-rovsun-celling-floor-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TCF-24ZHRH/DVO",
      "normalizedModelNumber": "tcf-24zhrh/dvo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22200,
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
      "id": "model-rovsun-td-09d2hrhdvo",
      "slug": "rovsun-td-09d2hrhdvo",
      "name": "ROVSUN TD-09D2HRH/DVO",
      "seriesId": "series-rovsun-duct-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TD-09D2HRH/DVO",
      "normalizedModelNumber": "td-09d2hrh/dvo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9500,
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
      "id": "model-rovsun-tc-09chrhdvo-d",
      "slug": "rovsun-tc-09chrhdvo-d",
      "name": "ROVSUN TC-09CHRH/DVO-D",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TC-09CHRH/DVO-D",
      "normalizedModelNumber": "tc-09chrh/dvo-d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 9500,
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
      "id": "model-rovsun-td-12d2hrhdvo",
      "slug": "rovsun-td-12d2hrhdvo",
      "name": "ROVSUN TD-12D2HRH/DVO",
      "seriesId": "series-rovsun-duct-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TD-12D2HRH/DVO",
      "normalizedModelNumber": "td-12d2hrh/dvo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11000,
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
      "id": "model-rovsun-rv-ahu24s-o",
      "slug": "rovsun-rv-ahu24s-o",
      "name": "ROVSUN RV-AHU24S-O",
      "seriesId": "series-rovsun-side-discharge",
      "brandId": "brand-rovsun",
      "modelNumber": "RV-AHU24S-O",
      "normalizedModelNumber": "rv-ahu24s-o",
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
      "id": "model-rovsun-tc-12chrhdvo",
      "slug": "rovsun-tc-12chrhdvo",
      "name": "ROVSUN TC-12CHRH/DVO",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TC-12CHRH/DVO",
      "normalizedModelNumber": "tc-12chrh/dvo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11000,
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
      "id": "model-rovsun-tc-12chrhdvo-d",
      "slug": "rovsun-tc-12chrhdvo-d",
      "name": "ROVSUN TC-12CHRH/DVO-D",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TC-12CHRH/DVO-D",
      "normalizedModelNumber": "tc-12chrh/dvo-d",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 11000,
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
      "id": "model-rovsun-tc-24chrhdvo",
      "slug": "rovsun-tc-24chrhdvo",
      "name": "ROVSUN TC-24CHRH/DVO",
      "seriesId": "series-rovsun-cassette-single",
      "brandId": "brand-rovsun",
      "modelNumber": "TC-24CHRH/DVO",
      "normalizedModelNumber": "tc-24chrh/dvo",
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
      "id": "model-rovsun-rv-ahu36s-o",
      "slug": "rovsun-rv-ahu36s-o",
      "name": "ROVSUN RV-AHU36S-O",
      "seriesId": "series-rovsun-side-discharge",
      "brandId": "brand-rovsun",
      "modelNumber": "RV-AHU36S-O",
      "normalizedModelNumber": "rv-ahu36s-o",
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
      "id": "model-rovsun-rv-ahu55s-o",
      "slug": "rovsun-rv-ahu55s-o",
      "name": "ROVSUN RV-AHU55S-O",
      "seriesId": "series-rovsun-side-discharge",
      "brandId": "brand-rovsun",
      "modelNumber": "RV-AHU55S-O",
      "normalizedModelNumber": "rv-ahu55s-o",
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
      "id": "ou-rovsun-tsc-12ha2i3xi23b-o",
      "modelNumber": "TSC-12HA2/I3XI23B-O*",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-rv12t223-o",
      "modelNumber": "RV12T2/23-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-12ha1i3xi22b-o",
      "modelNumber": "TSC-12HA1/I3XI22B-O*",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-09ha2i3xi23b-o",
      "modelNumber": "TSC-09HA2/I3XI23B-O*",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-12ha2i3xi23-o",
      "modelNumber": "TSC-12HA2/I3XI23-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-rovsun-rv-18m2o-r",
      "modelNumber": "RV-18M2/O-R",
      "brandId": "brand-rovsun",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-rovsun-rv18t221-o",
      "modelNumber": "RV18T2/21-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-24ha2i3xi21b-o",
      "modelNumber": "TSC-24HA2/I3XI21B-O*",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-rv09t122-o",
      "modelNumber": "RV09T1/22-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-rv12t122-o",
      "modelNumber": "RV12T1/22-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-09ha1i3xi22b-o",
      "modelNumber": "TSC-09HA1/I3XI22B-O*",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-18ha2i3xi21b-o",
      "modelNumber": "TSC-18HA2/I3XI21B-O*",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-09ha1i3xi22-o",
      "modelNumber": "TSC-09HA1/I3XI22-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-rovsun-rvc-24o",
      "modelNumber": "RVC-24/O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tsc-12ha1i3xi22-o",
      "modelNumber": "TSC-12HA1/I3XI22-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-rovsun-tsc-18ha2i3xi21-o",
      "modelNumber": "TSC-18HA2/I3XI21-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-rovsun-tmsc-18ha2i2xi20b-o",
      "modelNumber": "TMSC-18HA2/I2XI20B-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tcf-18zhrhdvo",
      "modelNumber": "TCF-18ZHRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-td-18d2hrhdvo",
      "modelNumber": "TD-18D2HRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-rvcf-24o",
      "modelNumber": "RVCF-24/O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tcf-24zhrhdvo",
      "modelNumber": "TCF-24ZHRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-td-09d2hrhdvo",
      "modelNumber": "TD-09D2HRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tc-09chrhdvo-d",
      "modelNumber": "TC-09CHRH/DVO-D",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-td-12d2hrhdvo",
      "modelNumber": "TD-12D2HRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-rv-ahu24s-o",
      "modelNumber": "RV-AHU24S-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-rovsun-tc-12chrhdvo",
      "modelNumber": "TC-12CHRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tc-12chrhdvo-d",
      "modelNumber": "TC-12CHRH/DVO-D",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-tc-24chrhdvo",
      "modelNumber": "TC-24CHRH/DVO",
      "brandId": "brand-rovsun",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-rovsun-rv-ahu36s-o",
      "modelNumber": "RV-AHU36S-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-rovsun-rv-ahu55s-o",
      "modelNumber": "RV-AHU55S-O",
      "brandId": "brand-rovsun",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tsc-12ha2i3xi23b-i",
      "modelNumber": "TSC-12HA2/I3XI23B-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rv12t223-i",
      "modelNumber": "RV12T2/23-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-12ha1i3xi22b-i",
      "modelNumber": "TSC-12HA1/I3XI22B-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-09ha2i3xi23b-o",
      "modelNumber": "TSC-09HA2/I3XI23B-O",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-12ha2i3xi23-i",
      "modelNumber": "TSC-12HA2/I3XI23-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50325",
      "modelNumber": "IU-50325",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rv18t221-i",
      "modelNumber": "RV18T2/21-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-24ha2i3xi21b-o",
      "modelNumber": "TSC-24HA2/I3XI21B-O",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rv09t122-i",
      "modelNumber": "RV09T1/22-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rv12t122-i",
      "modelNumber": "RV12T1/22-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-09ha1i3xi22b-i",
      "modelNumber": "TSC-09HA1/I3XI22B-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-18ha2i3xi21b-i",
      "modelNumber": "TSC-18HA2/I3XI21B-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-09ha1i3xi22-i",
      "modelNumber": "TSC-09HA1/I3XI22-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rvc-24i",
      "modelNumber": "RVC-24/I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-12ha1i3xi22-i",
      "modelNumber": "TSC-12HA1/I3XI22-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-18ha2i3xi21-i",
      "modelNumber": "TSC-18HA2/I3XI21-I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rvc-o9i-d",
      "modelNumber": "RVC-O9/I-D",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rvc-12i-d",
      "modelNumber": "RVC-12/I-D",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tcf-18zhrhdvi",
      "modelNumber": "TCF-18ZHRH/DVI",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50340",
      "modelNumber": "IU-50340",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rvcf-24i",
      "modelNumber": "RVCF-24/I",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-tcf-24zhrhdvi",
      "modelNumber": "TCF-24ZHRH/DVI",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50338",
      "modelNumber": "IU-50338",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50332",
      "modelNumber": "IU-50332",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50339",
      "modelNumber": "IU-50339",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rv-ahu24s-i",
      "modelNumber": "RV-AHU24S-I",
      "brandId": "brand-rovsun",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-50333",
      "modelNumber": "IU-50333",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50334",
      "modelNumber": "IU-50334",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-50335",
      "modelNumber": "IU-50335",
      "brandId": "brand-rovsun",
      "type": "wall-single"
    },
    {
      "id": "iu-rv-ahu36s-i",
      "modelNumber": "RV-AHU36S-I",
      "brandId": "brand-rovsun",
      "type": "central-ducted"
    },
    {
      "id": "iu-rv-ahu55s-i",
      "modelNumber": "RV-AHU55S-I",
      "brandId": "brand-rovsun",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-rovsun-tsc-12ha2i3xi23b-o-tsc-12ha2i3xi23b-i",
      "slug": "rovsun-tsc-12ha2i3xi23b-o-tsc-12ha2i3xi23b-i",
      "modelId": "model-rovsun-tsc-12ha2i3xi23b-o",
      "outdoorUnitId": "ou-rovsun-tsc-12ha2i3xi23b-o",
      "indoorUnitId": "iu-tsc-12ha2i3xi23b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-12ha2i3xi23b-o-tsc-12ha2i3xi23b-i",
      "slug": "rovsun-tsc-12ha2i3xi23b-o-tsc-12ha2i3xi23b-i",
      "modelId": "model-rovsun-tsc-12ha2i3xi23b-o",
      "outdoorUnitId": "ou-rovsun-tsc-12ha2i3xi23b-o",
      "indoorUnitId": "iu-tsc-12ha2i3xi23b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv12t223-o-rv12t223-i",
      "slug": "rovsun-rv12t223-o-rv12t223-i",
      "modelId": "model-rovsun-rv12t223-o",
      "outdoorUnitId": "ou-rovsun-rv12t223-o",
      "indoorUnitId": "iu-rv12t223-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-12ha1i3xi22b-o-tsc-12ha1i3xi22b-i",
      "slug": "rovsun-tsc-12ha1i3xi22b-o-tsc-12ha1i3xi22b-i",
      "modelId": "model-rovsun-tsc-12ha1i3xi22b-o",
      "outdoorUnitId": "ou-rovsun-tsc-12ha1i3xi22b-o",
      "indoorUnitId": "iu-tsc-12ha1i3xi22b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-09ha2i3xi23b-o-tsc-09ha2i3xi23b-o",
      "slug": "rovsun-tsc-09ha2i3xi23b-o-tsc-09ha2i3xi23b-o",
      "modelId": "model-rovsun-tsc-09ha2i3xi23b-o",
      "outdoorUnitId": "ou-rovsun-tsc-09ha2i3xi23b-o",
      "indoorUnitId": "iu-tsc-09ha2i3xi23b-o",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-12ha2i3xi23-o-tsc-12ha2i3xi23-i",
      "slug": "rovsun-tsc-12ha2i3xi23-o-tsc-12ha2i3xi23-i",
      "modelId": "model-rovsun-tsc-12ha2i3xi23-o",
      "outdoorUnitId": "ou-rovsun-tsc-12ha2i3xi23-o",
      "indoorUnitId": "iu-tsc-12ha2i3xi23-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv-18m2o-r-iu-50325",
      "slug": "rovsun-rv-18m2o-r-iu-50325",
      "modelId": "model-rovsun-rv-18m2o-r",
      "outdoorUnitId": "ou-rovsun-rv-18m2o-r",
      "indoorUnitId": "iu-iu-50325",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv18t221-o-rv18t221-i",
      "slug": "rovsun-rv18t221-o-rv18t221-i",
      "modelId": "model-rovsun-rv18t221-o",
      "outdoorUnitId": "ou-rovsun-rv18t221-o",
      "indoorUnitId": "iu-rv18t221-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-24ha2i3xi21b-o-tsc-24ha2i3xi21b-o",
      "slug": "rovsun-tsc-24ha2i3xi21b-o-tsc-24ha2i3xi21b-o",
      "modelId": "model-rovsun-tsc-24ha2i3xi21b-o",
      "outdoorUnitId": "ou-rovsun-tsc-24ha2i3xi21b-o",
      "indoorUnitId": "iu-tsc-24ha2i3xi21b-o",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv09t122-o-rv09t122-i",
      "slug": "rovsun-rv09t122-o-rv09t122-i",
      "modelId": "model-rovsun-rv09t122-o",
      "outdoorUnitId": "ou-rovsun-rv09t122-o",
      "indoorUnitId": "iu-rv09t122-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv12t122-o-rv12t122-i",
      "slug": "rovsun-rv12t122-o-rv12t122-i",
      "modelId": "model-rovsun-rv12t122-o",
      "outdoorUnitId": "ou-rovsun-rv12t122-o",
      "indoorUnitId": "iu-rv12t122-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-09ha1i3xi22b-o-tsc-09ha1i3xi22b-i",
      "slug": "rovsun-tsc-09ha1i3xi22b-o-tsc-09ha1i3xi22b-i",
      "modelId": "model-rovsun-tsc-09ha1i3xi22b-o",
      "outdoorUnitId": "ou-rovsun-tsc-09ha1i3xi22b-o",
      "indoorUnitId": "iu-tsc-09ha1i3xi22b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-09ha1i3xi22b-o-tsc-09ha1i3xi22b-i",
      "slug": "rovsun-tsc-09ha1i3xi22b-o-tsc-09ha1i3xi22b-i",
      "modelId": "model-rovsun-tsc-09ha1i3xi22b-o",
      "outdoorUnitId": "ou-rovsun-tsc-09ha1i3xi22b-o",
      "indoorUnitId": "iu-tsc-09ha1i3xi22b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-18ha2i3xi21b-o-tsc-18ha2i3xi21b-i",
      "slug": "rovsun-tsc-18ha2i3xi21b-o-tsc-18ha2i3xi21b-i",
      "modelId": "model-rovsun-tsc-18ha2i3xi21b-o",
      "outdoorUnitId": "ou-rovsun-tsc-18ha2i3xi21b-o",
      "indoorUnitId": "iu-tsc-18ha2i3xi21b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-12ha1i3xi22b-o-tsc-12ha1i3xi22b-i",
      "slug": "rovsun-tsc-12ha1i3xi22b-o-tsc-12ha1i3xi22b-i",
      "modelId": "model-rovsun-tsc-12ha1i3xi22b-o",
      "outdoorUnitId": "ou-rovsun-tsc-12ha1i3xi22b-o",
      "indoorUnitId": "iu-tsc-12ha1i3xi22b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-09ha1i3xi22-o-tsc-09ha1i3xi22-i",
      "slug": "rovsun-tsc-09ha1i3xi22-o-tsc-09ha1i3xi22-i",
      "modelId": "model-rovsun-tsc-09ha1i3xi22-o",
      "outdoorUnitId": "ou-rovsun-tsc-09ha1i3xi22-o",
      "indoorUnitId": "iu-tsc-09ha1i3xi22-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-18ha2i3xi21b-o-tsc-18ha2i3xi21b-i",
      "slug": "rovsun-tsc-18ha2i3xi21b-o-tsc-18ha2i3xi21b-i",
      "modelId": "model-rovsun-tsc-18ha2i3xi21b-o",
      "outdoorUnitId": "ou-rovsun-tsc-18ha2i3xi21b-o",
      "indoorUnitId": "iu-tsc-18ha2i3xi21b-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rvc-24o-rvc-24i",
      "slug": "rovsun-rvc-24o-rvc-24i",
      "modelId": "model-rovsun-rvc-24o",
      "outdoorUnitId": "ou-rovsun-rvc-24o",
      "indoorUnitId": "iu-rvc-24i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-12ha1i3xi22-o-tsc-12ha1i3xi22-i",
      "slug": "rovsun-tsc-12ha1i3xi22-o-tsc-12ha1i3xi22-i",
      "modelId": "model-rovsun-tsc-12ha1i3xi22-o",
      "outdoorUnitId": "ou-rovsun-tsc-12ha1i3xi22-o",
      "indoorUnitId": "iu-tsc-12ha1i3xi22-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tsc-18ha2i3xi21-o-tsc-18ha2i3xi21-i",
      "slug": "rovsun-tsc-18ha2i3xi21-o-tsc-18ha2i3xi21-i",
      "modelId": "model-rovsun-tsc-18ha2i3xi21-o",
      "outdoorUnitId": "ou-rovsun-tsc-18ha2i3xi21-o",
      "indoorUnitId": "iu-tsc-18ha2i3xi21-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tmsc-18ha2i2xi20b-o-rvc-o9i-d",
      "slug": "rovsun-tmsc-18ha2i2xi20b-o-rvc-o9i-d",
      "modelId": "model-rovsun-tmsc-18ha2i2xi20b-o",
      "outdoorUnitId": "ou-rovsun-tmsc-18ha2i2xi20b-o",
      "indoorUnitId": "iu-rvc-o9i-d",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tmsc-18ha2i2xi20b-o-rvc-12i-d",
      "slug": "rovsun-tmsc-18ha2i2xi20b-o-rvc-12i-d",
      "modelId": "model-rovsun-tmsc-18ha2i2xi20b-o",
      "outdoorUnitId": "ou-rovsun-tmsc-18ha2i2xi20b-o",
      "indoorUnitId": "iu-rvc-12i-d",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tcf-18zhrhdvo-tcf-18zhrhdvi",
      "slug": "rovsun-tcf-18zhrhdvo-tcf-18zhrhdvi",
      "modelId": "model-rovsun-tcf-18zhrhdvo",
      "outdoorUnitId": "ou-rovsun-tcf-18zhrhdvo",
      "indoorUnitId": "iu-tcf-18zhrhdvi",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-td-18d2hrhdvo-iu-50340",
      "slug": "rovsun-td-18d2hrhdvo-iu-50340",
      "modelId": "model-rovsun-td-18d2hrhdvo",
      "outdoorUnitId": "ou-rovsun-td-18d2hrhdvo",
      "indoorUnitId": "iu-iu-50340",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rvcf-24o-rvcf-24i",
      "slug": "rovsun-rvcf-24o-rvcf-24i",
      "modelId": "model-rovsun-rvcf-24o",
      "outdoorUnitId": "ou-rovsun-rvcf-24o",
      "indoorUnitId": "iu-rvcf-24i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tcf-24zhrhdvo-tcf-24zhrhdvi",
      "slug": "rovsun-tcf-24zhrhdvo-tcf-24zhrhdvi",
      "modelId": "model-rovsun-tcf-24zhrhdvo",
      "outdoorUnitId": "ou-rovsun-tcf-24zhrhdvo",
      "indoorUnitId": "iu-tcf-24zhrhdvi",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-td-09d2hrhdvo-iu-50338",
      "slug": "rovsun-td-09d2hrhdvo-iu-50338",
      "modelId": "model-rovsun-td-09d2hrhdvo",
      "outdoorUnitId": "ou-rovsun-td-09d2hrhdvo",
      "indoorUnitId": "iu-iu-50338",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tc-09chrhdvo-d-iu-50332",
      "slug": "rovsun-tc-09chrhdvo-d-iu-50332",
      "modelId": "model-rovsun-tc-09chrhdvo-d",
      "outdoorUnitId": "ou-rovsun-tc-09chrhdvo-d",
      "indoorUnitId": "iu-iu-50332",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-td-12d2hrhdvo-iu-50339",
      "slug": "rovsun-td-12d2hrhdvo-iu-50339",
      "modelId": "model-rovsun-td-12d2hrhdvo",
      "outdoorUnitId": "ou-rovsun-td-12d2hrhdvo",
      "indoorUnitId": "iu-iu-50339",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv-ahu24s-o-rv-ahu24s-i",
      "slug": "rovsun-rv-ahu24s-o-rv-ahu24s-i",
      "modelId": "model-rovsun-rv-ahu24s-o",
      "outdoorUnitId": "ou-rovsun-rv-ahu24s-o",
      "indoorUnitId": "iu-rv-ahu24s-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tc-12chrhdvo-iu-50333",
      "slug": "rovsun-tc-12chrhdvo-iu-50333",
      "modelId": "model-rovsun-tc-12chrhdvo",
      "outdoorUnitId": "ou-rovsun-tc-12chrhdvo",
      "indoorUnitId": "iu-iu-50333",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tc-12chrhdvo-d-iu-50334",
      "slug": "rovsun-tc-12chrhdvo-d-iu-50334",
      "modelId": "model-rovsun-tc-12chrhdvo-d",
      "outdoorUnitId": "ou-rovsun-tc-12chrhdvo-d",
      "indoorUnitId": "iu-iu-50334",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-tc-24chrhdvo-iu-50335",
      "slug": "rovsun-tc-24chrhdvo-iu-50335",
      "modelId": "model-rovsun-tc-24chrhdvo",
      "outdoorUnitId": "ou-rovsun-tc-24chrhdvo",
      "indoorUnitId": "iu-iu-50335",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv-ahu36s-o-rv-ahu36s-i",
      "slug": "rovsun-rv-ahu36s-o-rv-ahu36s-i",
      "modelId": "model-rovsun-rv-ahu36s-o",
      "outdoorUnitId": "ou-rovsun-rv-ahu36s-o",
      "indoorUnitId": "iu-rv-ahu36s-i",
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
          "sourceId": "src-rovsun-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-rovsun-rv-ahu55s-o-rv-ahu55s-i",
      "slug": "rovsun-rv-ahu55s-o-rv-ahu55s-i",
      "modelId": "model-rovsun-rv-ahu55s-o",
      "outdoorUnitId": "ou-rovsun-rv-ahu55s-o",
      "indoorUnitId": "iu-rv-ahu55s-i",
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
          "sourceId": "src-rovsun-epa",
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
