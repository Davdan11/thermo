import type { BrandDataset } from "../../types";

export const brand_dellaDataset: BrandDataset = {
  "brand": {
    "id": "brand-della",
    "slug": "della",
    "name": "DELLA",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour DELLA",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-della-epa",
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
      "id": "series-della-tph",
      "slug": "della-tph",
      "name": "TPH",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TPH de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-tc-tcq",
      "slug": "della-tc-tcq",
      "name": "TC | TCQ",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TC | TCQ de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-tp",
      "slug": "della-tp",
      "name": "TP",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TP de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-cc",
      "slug": "della-cc",
      "name": "CC",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série CC de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-tlp",
      "slug": "della-tlp",
      "name": "TLP",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TLP de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-modu",
      "slug": "della-modu",
      "name": "MODU",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MODU de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-fc",
      "slug": "della-fc",
      "name": "FC",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série FC de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-dc",
      "slug": "della-dc",
      "name": "DC",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série DC de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-della-tl",
      "slug": "della-tl",
      "name": "TL",
      "brandId": "brand-della",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série TL de DELLA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-della-048-tph-modu-1d3",
      "slug": "della-048-tph-modu-1d3",
      "name": "DELLA 048-TPH-MODU-1D3",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-MODU-1D3",
      "normalizedModelNumber": "048-tph-modu-1d3",
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
      "id": "model-della-048-tph-modu-1d4",
      "slug": "della-048-tph-modu-1d4",
      "name": "DELLA 048-TPH-MODU-1D4",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-MODU-1D4",
      "normalizedModelNumber": "048-tph-modu-1d4",
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
      "id": "model-della-048-tcq-modu-1d2",
      "slug": "della-048-tcq-modu-1d2",
      "name": "DELLA 048-TCQ-MODU-1D2",
      "seriesId": "series-della-tc-tcq",
      "brandId": "brand-della",
      "modelNumber": "048-TCQ-MODU-1D2",
      "normalizedModelNumber": "048-tcq-modu-1d2",
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
      "id": "model-della-048-tph-12k2v-25s-out",
      "slug": "della-048-tph-12k2v-25s-out",
      "name": "DELLA 048-TPH-12K2V-25S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-12K2V-25S-OUT",
      "normalizedModelNumber": "048-tph-12k2v-25s-out",
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
      "id": "model-della-048-c-tph-9k2v-25s-out",
      "slug": "della-048-c-tph-9k2v-25s-out",
      "name": "DELLA 048-C-TPH-9K2V-25S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-C-TPH-9K2V-25S-OUT",
      "normalizedModelNumber": "048-c-tph-9k2v-25s-out",
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
      "id": "model-della-048-c-tph-12k2v-25s-out",
      "slug": "della-048-c-tph-12k2v-25s-out",
      "name": "DELLA 048-C-TPH-12K2V-25S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-C-TPH-12K2V-25S-OUT",
      "normalizedModelNumber": "048-c-tph-12k2v-25s-out",
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
      "id": "model-della-048-tph-modu-1d5",
      "slug": "della-048-tph-modu-1d5",
      "name": "DELLA 048-TPH-MODU-1D5",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-MODU-1D5",
      "normalizedModelNumber": "048-tph-modu-1d5",
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
      "id": "model-della-048-tph-9k2v-25s-out",
      "slug": "della-048-tph-9k2v-25s-out",
      "name": "DELLA 048-TPH-9K2V-25S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-9K2V-25S-OUT",
      "normalizedModelNumber": "048-tph-9k2v-25s-out",
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
      "id": "model-della-048-tp-12k2v-24s-out",
      "slug": "della-048-tp-12k2v-24s-out",
      "name": "DELLA 048-TP-12K2V-24S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-12K2V-24S-OUT",
      "normalizedModelNumber": "048-tp-12k2v-24s-out",
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
      "id": "model-della-048-tcq-modu-1d5",
      "slug": "della-048-tcq-modu-1d5",
      "name": "DELLA 048-TCQ-MODU-1D5",
      "seriesId": "series-della-tc-tcq",
      "brandId": "brand-della",
      "modelNumber": "048-TCQ-MODU-1D5",
      "normalizedModelNumber": "048-tcq-modu-1d5",
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
      "id": "model-della-048-c-tp-12k2v-24s-out",
      "slug": "della-048-c-tp-12k2v-24s-out",
      "name": "DELLA 048-C-TP-12K2V-24S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-C-TP-12K2V-24S-OUT",
      "normalizedModelNumber": "048-c-tp-12k2v-24s-out",
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
      "id": "model-della-048-tph-modu-1d6",
      "slug": "della-048-tph-modu-1d6",
      "name": "DELLA 048-TPH-MODU-1D6",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-MODU-1D6",
      "normalizedModelNumber": "048-tph-modu-1d6",
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
      "id": "model-della-048-c-tph-18k2v-23s-out",
      "slug": "della-048-c-tph-18k2v-23s-out",
      "name": "DELLA 048-C-TPH-18K2V-23S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-C-TPH-18K2V-23S-OUT",
      "normalizedModelNumber": "048-c-tph-18k2v-23s-out",
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
      "id": "model-della-048-tph-18k2v-23s-out",
      "slug": "della-048-tph-18k2v-23s-out",
      "name": "DELLA 048-TPH-18K2V-23S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-18K2V-23S-OUT",
      "normalizedModelNumber": "048-tph-18k2v-23s-out",
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
      "id": "model-della-048-tp-9k2v-23s-out",
      "slug": "della-048-tp-9k2v-23s-out",
      "name": "DELLA 048-TP-9K2V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-9K2V-23S-OUT",
      "normalizedModelNumber": "048-tp-9k2v-23s-out",
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
      "id": "model-della-048-tp-18k2v-23s-out",
      "slug": "della-048-tp-18k2v-23s-out",
      "name": "DELLA 048-TP-18K2V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-18K2V-23S-OUT",
      "normalizedModelNumber": "048-tp-18k2v-23s-out",
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
      "id": "model-della-048-tp-12k1v-23s-out",
      "slug": "della-048-tp-12k1v-23s-out",
      "name": "DELLA 048-TP-12K1V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-12K1V-23S-OUT",
      "normalizedModelNumber": "048-tp-12k1v-23s-out",
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
      "id": "model-della-048-tp-23k2v-23s-out",
      "slug": "della-048-tp-23k2v-23s-out",
      "name": "DELLA 048-TP-23K2V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-23K2V-23S-OUT",
      "normalizedModelNumber": "048-tp-23k2v-23s-out",
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
      "id": "model-della-048-tp-12k2v-23s-out",
      "slug": "della-048-tp-12k2v-23s-out",
      "name": "DELLA 048-TP-12K2V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-12K2V-23S-OUT",
      "normalizedModelNumber": "048-tp-12k2v-23s-out",
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
      "id": "model-della-048-c-tp-9k2v-24s-out",
      "slug": "della-048-c-tp-9k2v-24s-out",
      "name": "DELLA 048-C-TP-9K2V-24S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-C-TP-9K2V-24S-OUT",
      "normalizedModelNumber": "048-c-tp-9k2v-24s-out",
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
      "id": "model-della-048-c-tp-9k1v-24s-out",
      "slug": "della-048-c-tp-9k1v-24s-out",
      "name": "DELLA 048-C-TP-9K1V-24S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-C-TP-9K1V-24S-OUT",
      "normalizedModelNumber": "048-c-tp-9k1v-24s-out",
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
      "id": "model-della-048-c-tp-12k1v-23s-out",
      "slug": "della-048-c-tp-12k1v-23s-out",
      "name": "DELLA 048-C-TP-12K1V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-C-TP-12K1V-23S-OUT",
      "normalizedModelNumber": "048-c-tp-12k1v-23s-out",
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
      "id": "model-della-048-tcq-modu-1d4",
      "slug": "della-048-tcq-modu-1d4",
      "name": "DELLA 048-TCQ-MODU-1D4",
      "seriesId": "series-della-tc-tcq",
      "brandId": "brand-della",
      "modelNumber": "048-TCQ-MODU-1D4",
      "normalizedModelNumber": "048-tcq-modu-1d4",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 38000,
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
      "id": "model-della-048-c-tp-23k2v-23s-out",
      "slug": "della-048-c-tp-23k2v-23s-out",
      "name": "DELLA 048-C-TP-23K2V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-C-TP-23K2V-23S-OUT",
      "normalizedModelNumber": "048-c-tp-23k2v-23s-out",
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
      "id": "model-della-048-c-tp-18k2v-23s-out",
      "slug": "della-048-c-tp-18k2v-23s-out",
      "name": "DELLA 048-C-TP-18K2V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-C-TP-18K2V-23S-OUT",
      "normalizedModelNumber": "048-c-tp-18k2v-23s-out",
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
      "id": "model-della-048-tp-9k1v-24s-out",
      "slug": "della-048-tp-9k1v-24s-out",
      "name": "DELLA 048-TP-9K1V-24S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-9K1V-24S-OUT",
      "normalizedModelNumber": "048-tp-9k1v-24s-out",
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
      "id": "model-della-048-tp-9k2v-24s-out",
      "slug": "della-048-tp-9k2v-24s-out",
      "name": "DELLA 048-TP-9K2V-24S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-9K2V-24S-OUT",
      "normalizedModelNumber": "048-tp-9k2v-24s-out",
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
      "id": "model-della-048-tp-9k1v-23s-out",
      "slug": "della-048-tp-9k1v-23s-out",
      "name": "DELLA 048-TP-9K1V-23S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-9K1V-23S-OUT",
      "normalizedModelNumber": "048-tp-9k1v-23s-out",
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
      "id": "model-della-048-tph-24k2v-23s-out",
      "slug": "della-048-tph-24k2v-23s-out",
      "name": "DELLA 048-TPH-24K2V-23S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-TPH-24K2V-23S-OUT",
      "normalizedModelNumber": "048-tph-24k2v-23s-out",
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
      "id": "model-della-048-tlp-modu-1d6",
      "slug": "della-048-tlp-modu-1d6",
      "name": "DELLA 048-TLP-MODU-1D6",
      "seriesId": "series-della-tlp",
      "brandId": "brand-della",
      "modelNumber": "048-TLP-MODU-1D6",
      "normalizedModelNumber": "048-tlp-modu-1d6",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 55000,
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
      "id": "model-della-048-c-tph-24k2v-23s-out",
      "slug": "della-048-c-tph-24k2v-23s-out",
      "name": "DELLA 048-C-TPH-24K2V-23S-OUT",
      "seriesId": "series-della-tph",
      "brandId": "brand-della",
      "modelNumber": "048-C-TPH-24K2V-23S-OUT",
      "normalizedModelNumber": "048-c-tph-24k2v-23s-out",
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
      "id": "model-della-048-tcq-modu-1d3",
      "slug": "della-048-tcq-modu-1d3",
      "name": "DELLA 048-TCQ-MODU-1D3",
      "seriesId": "series-della-tc-tcq",
      "brandId": "brand-della",
      "modelNumber": "048-TCQ-MODU-1D3",
      "normalizedModelNumber": "048-tcq-modu-1d3",
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
      "id": "model-della-048-tp-18k2v-22s-out",
      "slug": "della-048-tp-18k2v-22s-out",
      "name": "DELLA 048-TP-18K2V-22S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-18K2V-22S-OUT",
      "normalizedModelNumber": "048-tp-18k2v-22s-out",
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
      "id": "model-della-048-tp-12k1v-22s-out",
      "slug": "della-048-tp-12k1v-22s-out",
      "name": "DELLA 048-TP-12K1V-22S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-12K1V-22S-OUT",
      "normalizedModelNumber": "048-tp-12k1v-22s-out",
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
      "id": "model-della-048-tlp-modu-1d3",
      "slug": "della-048-tlp-modu-1d3",
      "name": "DELLA 048-TLP-MODU-1D3",
      "seriesId": "series-della-modu",
      "brandId": "brand-della",
      "modelNumber": "048-TLP-MODU-1D3",
      "normalizedModelNumber": "048-tlp-modu-1d3",
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
      "id": "model-della-048-tlp-modu-1d4",
      "slug": "della-048-tlp-modu-1d4",
      "name": "DELLA 048-TLP-MODU-1D4",
      "seriesId": "series-della-modu",
      "brandId": "brand-della",
      "modelNumber": "048-TLP-MODU-1D4",
      "normalizedModelNumber": "048-tlp-modu-1d4",
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
      "id": "model-della-048-tl-9k2vb-20s-out",
      "slug": "della-048-tl-9k2vb-20s-out",
      "name": "DELLA 048-TL-9K2VB-20S-OUT",
      "seriesId": "series-della-tl",
      "brandId": "brand-della",
      "modelNumber": "048-TL-9K2VB-20S-OUT",
      "normalizedModelNumber": "048-tl-9k2vb-20s-out",
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
      "id": "model-della-048-tp-24k2v-20s-out",
      "slug": "della-048-tp-24k2v-20s-out",
      "name": "DELLA 048-TP-24K2V-20S-OUT",
      "seriesId": "series-della-tp",
      "brandId": "brand-della",
      "modelNumber": "048-TP-24K2V-20S-OUT",
      "normalizedModelNumber": "048-tp-24k2v-20s-out",
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
      "id": "model-della-048-tlp-modu-1d2",
      "slug": "della-048-tlp-modu-1d2",
      "name": "DELLA 048-TLP-MODU-1D2",
      "seriesId": "series-della-modu",
      "brandId": "brand-della",
      "modelNumber": "048-TLP-MODU-1D2",
      "normalizedModelNumber": "048-tlp-modu-1d2",
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
      "id": "model-della-048-tlp-modu-1d5",
      "slug": "della-048-tlp-modu-1d5",
      "name": "DELLA 048-TLP-MODU-1D5",
      "seriesId": "series-della-modu",
      "brandId": "brand-della",
      "modelNumber": "048-TLP-MODU-1D5",
      "normalizedModelNumber": "048-tlp-modu-1d5",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41000,
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
      "id": "model-della-048-tl-9k1vb-19s-out",
      "slug": "della-048-tl-9k1vb-19s-out",
      "name": "DELLA 048-TL-9K1VB-19S-OUT",
      "seriesId": "series-della-tl",
      "brandId": "brand-della",
      "modelNumber": "048-TL-9K1VB-19S-OUT",
      "normalizedModelNumber": "048-tl-9k1vb-19s-out",
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
      "id": "ou-della-048-tph-modu-1d3",
      "modelNumber": "048-TPH-MODU-1D3",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tph-modu-1d4",
      "modelNumber": "048-TPH-MODU-1D4",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tcq-modu-1d2",
      "modelNumber": "048-TCQ-MODU-1D2",
      "brandId": "brand-della",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-della-048-tph-12k2v-25s-out",
      "modelNumber": "048-TPH-12K2V-25S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tph-9k2v-25s-out",
      "modelNumber": "048-C-TPH-9K2V-25S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tph-12k2v-25s-out",
      "modelNumber": "048-C-TPH-12K2V-25S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tph-modu-1d5",
      "modelNumber": "048-TPH-MODU-1D5",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tph-9k2v-25s-out",
      "modelNumber": "048-TPH-9K2V-25S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-12k2v-24s-out",
      "modelNumber": "048-TP-12K2V-24S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tcq-modu-1d5",
      "modelNumber": "048-TCQ-MODU-1D5",
      "brandId": "brand-della",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-della-048-c-tp-12k2v-24s-out",
      "modelNumber": "048-C-TP-12K2V-24S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tph-modu-1d6",
      "modelNumber": "048-TPH-MODU-1D6",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tph-18k2v-23s-out",
      "modelNumber": "048-C-TPH-18K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tph-18k2v-23s-out",
      "modelNumber": "048-TPH-18K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-9k2v-23s-out",
      "modelNumber": "048-TP-9K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-della-048-tp-18k2v-23s-out",
      "modelNumber": "048-TP-18K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-12k1v-23s-out",
      "modelNumber": "048-TP-12K1V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-23k2v-23s-out",
      "modelNumber": "048-TP-23K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-12k2v-23s-out",
      "modelNumber": "048-TP-12K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-della-048-c-tp-9k2v-24s-out",
      "modelNumber": "048-C-TP-9K2V-24S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tp-9k1v-24s-out",
      "modelNumber": "048-C-TP-9K1V-24S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tp-12k1v-23s-out",
      "modelNumber": "048-C-TP-12K1V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tcq-modu-1d4",
      "modelNumber": "048-TCQ-MODU-1D4",
      "brandId": "brand-della",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-della-048-c-tp-23k2v-23s-out",
      "modelNumber": "048-C-TP-23K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tp-18k2v-23s-out",
      "modelNumber": "048-C-TP-18K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-9k1v-24s-out",
      "modelNumber": "048-TP-9K1V-24S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-9k2v-24s-out",
      "modelNumber": "048-TP-9K2V-24S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-9k1v-23s-out",
      "modelNumber": "048-TP-9K1V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tph-24k2v-23s-out",
      "modelNumber": "048-TPH-24K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tlp-modu-1d6",
      "modelNumber": "048-TLP-MODU-1D6",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-c-tph-24k2v-23s-out",
      "modelNumber": "048-C-TPH-24K2V-23S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tcq-modu-1d3",
      "modelNumber": "048-TCQ-MODU-1D3",
      "brandId": "brand-della",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-della-048-tp-18k2v-22s-out",
      "modelNumber": "048-TP-18K2V-22S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-della-048-tp-12k1v-22s-out",
      "modelNumber": "048-TP-12K1V-22S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-della-048-tlp-modu-1d3",
      "modelNumber": "048-TLP-MODU-1D3",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tlp-modu-1d4",
      "modelNumber": "048-TLP-MODU-1D4",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tl-9k2vb-20s-out",
      "modelNumber": "048-TL-9K2VB-20S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tp-24k2v-20s-out",
      "modelNumber": "048-TP-24K2V-20S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-della-048-tlp-modu-1d2",
      "modelNumber": "048-TLP-MODU-1D2",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tlp-modu-1d5",
      "modelNumber": "048-TLP-MODU-1D5",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-della-048-tl-9k1vb-19s-out",
      "modelNumber": "048-TL-9K1VB-19S-OUT",
      "brandId": "brand-della",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-43604",
      "modelNumber": "IU-43604",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43605",
      "modelNumber": "IU-43605",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43556",
      "modelNumber": "IU-43556",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-12k2v-25s-in",
      "modelNumber": "048-TPH-12K2V-25S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tph-9k2v-c-in",
      "modelNumber": "048-C-TPH-9K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tph-12k2v-c-in",
      "modelNumber": "048-C-TPH-12K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43606",
      "modelNumber": "IU-43606",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-9k2v-25s-in",
      "modelNumber": "048-TPH-9K2V-25S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-12k2v-c-in",
      "modelNumber": "048-TPH-12K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-9k2v-c-in",
      "modelNumber": "048-TPH-9K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-12k2v-c-in",
      "modelNumber": "048-TP-12K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43559",
      "modelNumber": "IU-43559",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tp-12k2v-c-in",
      "modelNumber": "048-C-TP-12K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-12k2v-24s-in",
      "modelNumber": "048-TP-12K2V-24S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43607",
      "modelNumber": "IU-43607",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tph-18k2v-c-in",
      "modelNumber": "048-C-TPH-18K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-18k2v-23s-in",
      "modelNumber": "048-TPH-18K2V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-9k2v-23s-in",
      "modelNumber": "048-TP-9K2V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-18k2v-c-in",
      "modelNumber": "048-TPH-18K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-18k2v-23s-in",
      "modelNumber": "048-TP-18K2V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-12k1v-c-in",
      "modelNumber": "048-TP-12K1V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-23k2v-c-in",
      "modelNumber": "048-TP-23K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-12k2v-23s-in",
      "modelNumber": "048-TP-12K2V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-12k1v-23s-in",
      "modelNumber": "048-TP-12K1V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tp-9k2v-c-in",
      "modelNumber": "048-C-TP-9K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tp-9k1v-c-in",
      "modelNumber": "048-C-TP-9K1V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tp-12k1v-c-in",
      "modelNumber": "048-C-TP-12K1V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43558",
      "modelNumber": "IU-43558",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tp-23k2v-c-in",
      "modelNumber": "048-C-TP-23K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tp-18k2v-c-in",
      "modelNumber": "048-C-TP-18K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-9k1v-24s-in",
      "modelNumber": "048-TP-9K1V-24S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-23k2v-23s-in",
      "modelNumber": "048-TP-23K2V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-9k2v-c-in",
      "modelNumber": "048-TP-9K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-9k2v-24s-in",
      "modelNumber": "048-TP-9K2V-24S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-cc-9k2v-in",
      "modelNumber": "048-CC-9K2V-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-9k1v-c-in",
      "modelNumber": "048-TP-9K1V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-18k2v-c-in",
      "modelNumber": "048-TP-18K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-9k1v-23s-in",
      "modelNumber": "048-TP-9K1V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-24k2v-c-in",
      "modelNumber": "048-TPH-24K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-cc-24k2v-in",
      "modelNumber": "048-CC-24K2V-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43566",
      "modelNumber": "IU-43566",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-c-tph-24k2v-c-in",
      "modelNumber": "048-C-TPH-24K2V-C-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tph-24k2v-23s-in",
      "modelNumber": "048-TPH-24K2V-23S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43557",
      "modelNumber": "IU-43557",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-18k2v-22s-in",
      "modelNumber": "048-TP-18K2V-22S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-12k1v-22s-in",
      "modelNumber": "048-TP-12K1V-22S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-cc-12k2v-in",
      "modelNumber": "048-CC-12K2V-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43563",
      "modelNumber": "IU-43563",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-cc-18k2v-in",
      "modelNumber": "048-CC-18K2V-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-fc-18k2v-in",
      "modelNumber": "048-FC-18K2V-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43564",
      "modelNumber": "IU-43564",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43576",
      "modelNumber": "IU-43576",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tl-9k2vb-20s-in",
      "modelNumber": "048-TL-9K2VB-20S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-fc-24k2v-in",
      "modelNumber": "048-FC-24K2V-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tp-24k2v-20s-in",
      "modelNumber": "048-TP-24K2V-20S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43562",
      "modelNumber": "IU-43562",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43592",
      "modelNumber": "IU-43592",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43565",
      "modelNumber": "IU-43565",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-048-tl-9k1vb-19s-in",
      "modelNumber": "048-TL-9K1VB-19S-IN",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43571",
      "modelNumber": "IU-43571",
      "brandId": "brand-della",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-43581",
      "modelNumber": "IU-43581",
      "brandId": "brand-della",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-della-048-tph-modu-1d3-iu-43604",
      "slug": "della-048-tph-modu-1d3-iu-43604",
      "modelId": "model-della-048-tph-modu-1d3",
      "outdoorUnitId": "ou-della-048-tph-modu-1d3",
      "indoorUnitId": "iu-iu-43604",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-modu-1d4-iu-43605",
      "slug": "della-048-tph-modu-1d4-iu-43605",
      "modelId": "model-della-048-tph-modu-1d4",
      "outdoorUnitId": "ou-della-048-tph-modu-1d4",
      "indoorUnitId": "iu-iu-43605",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tcq-modu-1d2-iu-43556",
      "slug": "della-048-tcq-modu-1d2-iu-43556",
      "modelId": "model-della-048-tcq-modu-1d2",
      "outdoorUnitId": "ou-della-048-tcq-modu-1d2",
      "indoorUnitId": "iu-iu-43556",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-12k2v-25s-out-048-tph-12k2v-25s-in",
      "slug": "della-048-tph-12k2v-25s-out-048-tph-12k2v-25s-in",
      "modelId": "model-della-048-tph-12k2v-25s-out",
      "outdoorUnitId": "ou-della-048-tph-12k2v-25s-out",
      "indoorUnitId": "iu-048-tph-12k2v-25s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tph-9k2v-25s-out-048-c-tph-9k2v-c-in",
      "slug": "della-048-c-tph-9k2v-25s-out-048-c-tph-9k2v-c-in",
      "modelId": "model-della-048-c-tph-9k2v-25s-out",
      "outdoorUnitId": "ou-della-048-c-tph-9k2v-25s-out",
      "indoorUnitId": "iu-048-c-tph-9k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tph-12k2v-25s-out-048-c-tph-12k2v-c-in",
      "slug": "della-048-c-tph-12k2v-25s-out-048-c-tph-12k2v-c-in",
      "modelId": "model-della-048-c-tph-12k2v-25s-out",
      "outdoorUnitId": "ou-della-048-c-tph-12k2v-25s-out",
      "indoorUnitId": "iu-048-c-tph-12k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-modu-1d5-iu-43606",
      "slug": "della-048-tph-modu-1d5-iu-43606",
      "modelId": "model-della-048-tph-modu-1d5",
      "outdoorUnitId": "ou-della-048-tph-modu-1d5",
      "indoorUnitId": "iu-iu-43606",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.0,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-9k2v-25s-out-048-tph-9k2v-25s-in",
      "slug": "della-048-tph-9k2v-25s-out-048-tph-9k2v-25s-in",
      "modelId": "model-della-048-tph-9k2v-25s-out",
      "outdoorUnitId": "ou-della-048-tph-9k2v-25s-out",
      "indoorUnitId": "iu-048-tph-9k2v-25s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-12k2v-25s-out-048-tph-12k2v-c-in",
      "slug": "della-048-tph-12k2v-25s-out-048-tph-12k2v-c-in",
      "modelId": "model-della-048-tph-12k2v-25s-out",
      "outdoorUnitId": "ou-della-048-tph-12k2v-25s-out",
      "indoorUnitId": "iu-048-tph-12k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-9k2v-25s-out-048-tph-9k2v-c-in",
      "slug": "della-048-tph-9k2v-25s-out-048-tph-9k2v-c-in",
      "modelId": "model-della-048-tph-9k2v-25s-out",
      "outdoorUnitId": "ou-della-048-tph-9k2v-25s-out",
      "indoorUnitId": "iu-048-tph-9k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k2v-24s-out-048-tp-12k2v-c-in",
      "slug": "della-048-tp-12k2v-24s-out-048-tp-12k2v-c-in",
      "modelId": "model-della-048-tp-12k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-12k2v-24s-out",
      "indoorUnitId": "iu-048-tp-12k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tcq-modu-1d5-iu-43559",
      "slug": "della-048-tcq-modu-1d5-iu-43559",
      "modelId": "model-della-048-tcq-modu-1d5",
      "outdoorUnitId": "ou-della-048-tcq-modu-1d5",
      "indoorUnitId": "iu-iu-43559",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tp-12k2v-24s-out-048-c-tp-12k2v-c-in",
      "slug": "della-048-c-tp-12k2v-24s-out-048-c-tp-12k2v-c-in",
      "modelId": "model-della-048-c-tp-12k2v-24s-out",
      "outdoorUnitId": "ou-della-048-c-tp-12k2v-24s-out",
      "indoorUnitId": "iu-048-c-tp-12k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k2v-24s-out-048-tp-12k2v-24s-in",
      "slug": "della-048-tp-12k2v-24s-out-048-tp-12k2v-24s-in",
      "modelId": "model-della-048-tp-12k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-12k2v-24s-out",
      "indoorUnitId": "iu-048-tp-12k2v-24s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-modu-1d6-iu-43607",
      "slug": "della-048-tph-modu-1d6-iu-43607",
      "modelId": "model-della-048-tph-modu-1d6",
      "outdoorUnitId": "ou-della-048-tph-modu-1d6",
      "indoorUnitId": "iu-iu-43607",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tph-18k2v-23s-out-048-c-tph-18k2v-c-in",
      "slug": "della-048-c-tph-18k2v-23s-out-048-c-tph-18k2v-c-in",
      "modelId": "model-della-048-c-tph-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-c-tph-18k2v-23s-out",
      "indoorUnitId": "iu-048-c-tph-18k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-18k2v-23s-out-048-tph-18k2v-23s-in",
      "slug": "della-048-tph-18k2v-23s-out-048-tph-18k2v-23s-in",
      "modelId": "model-della-048-tph-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tph-18k2v-23s-out",
      "indoorUnitId": "iu-048-tph-18k2v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k2v-23s-out-048-tp-9k2v-23s-in",
      "slug": "della-048-tp-9k2v-23s-out-048-tp-9k2v-23s-in",
      "modelId": "model-della-048-tp-9k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-9k2v-23s-out",
      "indoorUnitId": "iu-048-tp-9k2v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-18k2v-23s-out-048-tph-18k2v-c-in",
      "slug": "della-048-tph-18k2v-23s-out-048-tph-18k2v-c-in",
      "modelId": "model-della-048-tph-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tph-18k2v-23s-out",
      "indoorUnitId": "iu-048-tph-18k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-18k2v-23s-out-048-tp-18k2v-23s-in",
      "slug": "della-048-tp-18k2v-23s-out-048-tp-18k2v-23s-in",
      "modelId": "model-della-048-tp-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-18k2v-23s-out",
      "indoorUnitId": "iu-048-tp-18k2v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k1v-23s-out-048-tp-12k1v-c-in",
      "slug": "della-048-tp-12k1v-23s-out-048-tp-12k1v-c-in",
      "modelId": "model-della-048-tp-12k1v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-12k1v-23s-out",
      "indoorUnitId": "iu-048-tp-12k1v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-23k2v-23s-out-048-tp-23k2v-c-in",
      "slug": "della-048-tp-23k2v-23s-out-048-tp-23k2v-c-in",
      "modelId": "model-della-048-tp-23k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-23k2v-23s-out",
      "indoorUnitId": "iu-048-tp-23k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k2v-23s-out-048-tp-12k2v-23s-in",
      "slug": "della-048-tp-12k2v-23s-out-048-tp-12k2v-23s-in",
      "modelId": "model-della-048-tp-12k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-12k2v-23s-out",
      "indoorUnitId": "iu-048-tp-12k2v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k1v-23s-out-048-tp-12k1v-23s-in",
      "slug": "della-048-tp-12k1v-23s-out-048-tp-12k1v-23s-in",
      "modelId": "model-della-048-tp-12k1v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-12k1v-23s-out",
      "indoorUnitId": "iu-048-tp-12k1v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tp-9k2v-24s-out-048-c-tp-9k2v-c-in",
      "slug": "della-048-c-tp-9k2v-24s-out-048-c-tp-9k2v-c-in",
      "modelId": "model-della-048-c-tp-9k2v-24s-out",
      "outdoorUnitId": "ou-della-048-c-tp-9k2v-24s-out",
      "indoorUnitId": "iu-048-c-tp-9k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tp-9k1v-24s-out-048-c-tp-9k1v-c-in",
      "slug": "della-048-c-tp-9k1v-24s-out-048-c-tp-9k1v-c-in",
      "modelId": "model-della-048-c-tp-9k1v-24s-out",
      "outdoorUnitId": "ou-della-048-c-tp-9k1v-24s-out",
      "indoorUnitId": "iu-048-c-tp-9k1v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tp-12k1v-23s-out-048-c-tp-12k1v-c-in",
      "slug": "della-048-c-tp-12k1v-23s-out-048-c-tp-12k1v-c-in",
      "modelId": "model-della-048-c-tp-12k1v-23s-out",
      "outdoorUnitId": "ou-della-048-c-tp-12k1v-23s-out",
      "indoorUnitId": "iu-048-c-tp-12k1v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tcq-modu-1d4-iu-43558",
      "slug": "della-048-tcq-modu-1d4-iu-43558",
      "modelId": "model-della-048-tcq-modu-1d4",
      "outdoorUnitId": "ou-della-048-tcq-modu-1d4",
      "indoorUnitId": "iu-iu-43558",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tp-23k2v-23s-out-048-c-tp-23k2v-c-in",
      "slug": "della-048-c-tp-23k2v-23s-out-048-c-tp-23k2v-c-in",
      "modelId": "model-della-048-c-tp-23k2v-23s-out",
      "outdoorUnitId": "ou-della-048-c-tp-23k2v-23s-out",
      "indoorUnitId": "iu-048-c-tp-23k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tp-18k2v-23s-out-048-c-tp-18k2v-c-in",
      "slug": "della-048-c-tp-18k2v-23s-out-048-c-tp-18k2v-c-in",
      "modelId": "model-della-048-c-tp-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-c-tp-18k2v-23s-out",
      "indoorUnitId": "iu-048-c-tp-18k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k1v-24s-out-048-tp-9k1v-24s-in",
      "slug": "della-048-tp-9k1v-24s-out-048-tp-9k1v-24s-in",
      "modelId": "model-della-048-tp-9k1v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-9k1v-24s-out",
      "indoorUnitId": "iu-048-tp-9k1v-24s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-23k2v-23s-out-048-tp-23k2v-23s-in",
      "slug": "della-048-tp-23k2v-23s-out-048-tp-23k2v-23s-in",
      "modelId": "model-della-048-tp-23k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-23k2v-23s-out",
      "indoorUnitId": "iu-048-tp-23k2v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k2v-24s-out-048-tp-9k2v-c-in",
      "slug": "della-048-tp-9k2v-24s-out-048-tp-9k2v-c-in",
      "modelId": "model-della-048-tp-9k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-9k2v-24s-out",
      "indoorUnitId": "iu-048-tp-9k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k2v-24s-out-048-tp-9k2v-24s-in",
      "slug": "della-048-tp-9k2v-24s-out-048-tp-9k2v-24s-in",
      "modelId": "model-della-048-tp-9k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-9k2v-24s-out",
      "indoorUnitId": "iu-048-tp-9k2v-24s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k2v-24s-out-048-cc-9k2v-in",
      "slug": "della-048-tp-9k2v-24s-out-048-cc-9k2v-in",
      "modelId": "model-della-048-tp-9k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-9k2v-24s-out",
      "indoorUnitId": "iu-048-cc-9k2v-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k1v-24s-out-048-tp-9k1v-c-in",
      "slug": "della-048-tp-9k1v-24s-out-048-tp-9k1v-c-in",
      "modelId": "model-della-048-tp-9k1v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-9k1v-24s-out",
      "indoorUnitId": "iu-048-tp-9k1v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k1v-23s-out-048-tp-9k1v-c-in",
      "slug": "della-048-tp-9k1v-23s-out-048-tp-9k1v-c-in",
      "modelId": "model-della-048-tp-9k1v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-9k1v-23s-out",
      "indoorUnitId": "iu-048-tp-9k1v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-18k2v-23s-out-048-tp-18k2v-c-in",
      "slug": "della-048-tp-18k2v-23s-out-048-tp-18k2v-c-in",
      "modelId": "model-della-048-tp-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-18k2v-23s-out",
      "indoorUnitId": "iu-048-tp-18k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k1v-23s-out-048-tp-9k1v-23s-in",
      "slug": "della-048-tp-9k1v-23s-out-048-tp-9k1v-23s-in",
      "modelId": "model-della-048-tp-9k1v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-9k1v-23s-out",
      "indoorUnitId": "iu-048-tp-9k1v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-24k2v-23s-out-048-tph-24k2v-c-in",
      "slug": "della-048-tph-24k2v-23s-out-048-tph-24k2v-c-in",
      "modelId": "model-della-048-tph-24k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tph-24k2v-23s-out",
      "indoorUnitId": "iu-048-tph-24k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-23k2v-23s-out-048-cc-24k2v-in",
      "slug": "della-048-tp-23k2v-23s-out-048-cc-24k2v-in",
      "modelId": "model-della-048-tp-23k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-23k2v-23s-out",
      "indoorUnitId": "iu-048-cc-24k2v-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tlp-modu-1d6-iu-43566",
      "slug": "della-048-tlp-modu-1d6-iu-43566",
      "modelId": "model-della-048-tlp-modu-1d6",
      "outdoorUnitId": "ou-della-048-tlp-modu-1d6",
      "indoorUnitId": "iu-iu-43566",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-c-tph-24k2v-23s-out-048-c-tph-24k2v-c-in",
      "slug": "della-048-c-tph-24k2v-23s-out-048-c-tph-24k2v-c-in",
      "modelId": "model-della-048-c-tph-24k2v-23s-out",
      "outdoorUnitId": "ou-della-048-c-tph-24k2v-23s-out",
      "indoorUnitId": "iu-048-c-tph-24k2v-c-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tph-24k2v-23s-out-048-tph-24k2v-23s-in",
      "slug": "della-048-tph-24k2v-23s-out-048-tph-24k2v-23s-in",
      "modelId": "model-della-048-tph-24k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tph-24k2v-23s-out",
      "indoorUnitId": "iu-048-tph-24k2v-23s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tcq-modu-1d3-iu-43557",
      "slug": "della-048-tcq-modu-1d3-iu-43557",
      "modelId": "model-della-048-tcq-modu-1d3",
      "outdoorUnitId": "ou-della-048-tcq-modu-1d3",
      "indoorUnitId": "iu-iu-43557",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-18k2v-22s-out-048-tp-18k2v-22s-in",
      "slug": "della-048-tp-18k2v-22s-out-048-tp-18k2v-22s-in",
      "modelId": "model-della-048-tp-18k2v-22s-out",
      "outdoorUnitId": "ou-della-048-tp-18k2v-22s-out",
      "indoorUnitId": "iu-048-tp-18k2v-22s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k1v-22s-out-048-tp-12k1v-22s-in",
      "slug": "della-048-tp-12k1v-22s-out-048-tp-12k1v-22s-in",
      "modelId": "model-della-048-tp-12k1v-22s-out",
      "outdoorUnitId": "ou-della-048-tp-12k1v-22s-out",
      "indoorUnitId": "iu-048-tp-12k1v-22s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k2v-24s-out-048-cc-12k2v-in",
      "slug": "della-048-tp-12k2v-24s-out-048-cc-12k2v-in",
      "modelId": "model-della-048-tp-12k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-12k2v-24s-out",
      "indoorUnitId": "iu-048-cc-12k2v-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tlp-modu-1d3-iu-43563",
      "slug": "della-048-tlp-modu-1d3-iu-43563",
      "modelId": "model-della-048-tlp-modu-1d3",
      "outdoorUnitId": "ou-della-048-tlp-modu-1d3",
      "indoorUnitId": "iu-iu-43563",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-18k2v-23s-out-048-cc-18k2v-in",
      "slug": "della-048-tp-18k2v-23s-out-048-cc-18k2v-in",
      "modelId": "model-della-048-tp-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-18k2v-23s-out",
      "indoorUnitId": "iu-048-cc-18k2v-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-18k2v-23s-out-048-fc-18k2v-in",
      "slug": "della-048-tp-18k2v-23s-out-048-fc-18k2v-in",
      "modelId": "model-della-048-tp-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-18k2v-23s-out",
      "indoorUnitId": "iu-048-fc-18k2v-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tlp-modu-1d4-iu-43564",
      "slug": "della-048-tlp-modu-1d4-iu-43564",
      "modelId": "model-della-048-tlp-modu-1d4",
      "outdoorUnitId": "ou-della-048-tlp-modu-1d4",
      "indoorUnitId": "iu-iu-43564",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-18k2v-23s-out-iu-43576",
      "slug": "della-048-tp-18k2v-23s-out-iu-43576",
      "modelId": "model-della-048-tp-18k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-18k2v-23s-out",
      "indoorUnitId": "iu-iu-43576",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tl-9k2vb-20s-out-048-tl-9k2vb-20s-in",
      "slug": "della-048-tl-9k2vb-20s-out-048-tl-9k2vb-20s-in",
      "modelId": "model-della-048-tl-9k2vb-20s-out",
      "outdoorUnitId": "ou-della-048-tl-9k2vb-20s-out",
      "indoorUnitId": "iu-048-tl-9k2vb-20s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-23k2v-23s-out-048-fc-24k2v-in",
      "slug": "della-048-tp-23k2v-23s-out-048-fc-24k2v-in",
      "modelId": "model-della-048-tp-23k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-23k2v-23s-out",
      "indoorUnitId": "iu-048-fc-24k2v-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-24k2v-20s-out-048-tp-24k2v-20s-in",
      "slug": "della-048-tp-24k2v-20s-out-048-tp-24k2v-20s-in",
      "modelId": "model-della-048-tp-24k2v-20s-out",
      "outdoorUnitId": "ou-della-048-tp-24k2v-20s-out",
      "indoorUnitId": "iu-048-tp-24k2v-20s-in",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tlp-modu-1d2-iu-43562",
      "slug": "della-048-tlp-modu-1d2-iu-43562",
      "modelId": "model-della-048-tlp-modu-1d2",
      "outdoorUnitId": "ou-della-048-tlp-modu-1d2",
      "indoorUnitId": "iu-iu-43562",
      "minHeatingTempC": -25,
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-9k2v-24s-out-iu-43592",
      "slug": "della-048-tp-9k2v-24s-out-iu-43592",
      "modelId": "model-della-048-tp-9k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-9k2v-24s-out",
      "indoorUnitId": "iu-iu-43592",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tlp-modu-1d5-iu-43565",
      "slug": "della-048-tlp-modu-1d5-iu-43565",
      "modelId": "model-della-048-tlp-modu-1d5",
      "outdoorUnitId": "ou-della-048-tlp-modu-1d5",
      "indoorUnitId": "iu-iu-43565",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tl-9k1vb-19s-out-048-tl-9k1vb-19s-in",
      "slug": "della-048-tl-9k1vb-19s-out-048-tl-9k1vb-19s-in",
      "modelId": "model-della-048-tl-9k1vb-19s-out",
      "outdoorUnitId": "ou-della-048-tl-9k1vb-19s-out",
      "indoorUnitId": "iu-048-tl-9k1vb-19s-in",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-12k2v-24s-out-iu-43571",
      "slug": "della-048-tp-12k2v-24s-out-iu-43571",
      "modelId": "model-della-048-tp-12k2v-24s-out",
      "outdoorUnitId": "ou-della-048-tp-12k2v-24s-out",
      "indoorUnitId": "iu-iu-43571",
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
          "sourceId": "src-della-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-della-048-tp-23k2v-23s-out-iu-43581",
      "slug": "della-048-tp-23k2v-23s-out-iu-43581",
      "modelId": "model-della-048-tp-23k2v-23s-out",
      "outdoorUnitId": "ou-della-048-tp-23k2v-23s-out",
      "indoorUnitId": "iu-iu-43581",
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
          "sourceId": "src-della-epa",
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
