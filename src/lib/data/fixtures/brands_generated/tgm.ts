import type { BrandDataset } from "../../types";

export const brand_tgmDataset: BrandDataset = {
  "brand": {
    "id": "brand-tgm",
    "slug": "tgm",
    "name": "TGM",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour TGM",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-tgm-epa",
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
      "id": "series-tgm-m-series",
      "slug": "tgm-m-series",
      "name": "M series",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M series de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-c-series",
      "slug": "tgm-c-series",
      "name": "C series",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série C series de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-mm-series",
      "slug": "tgm-mm-series",
      "name": "MM Series",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MM Series de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-mrs-series",
      "slug": "tgm-mrs-series",
      "name": "MRS Series",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MRS Series de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-mr-series",
      "slug": "tgm-mr-series",
      "name": "MR Series",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MR Series de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-zeno",
      "slug": "tgm-zeno",
      "name": "Zeno",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Zeno de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-all-match",
      "slug": "tgm-all-match",
      "name": "All MATCH",
      "brandId": "brand-tgm",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série All MATCH de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-tgm-flexx",
      "slug": "tgm-flexx",
      "name": "Flexx",
      "brandId": "brand-tgm",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Flexx de TGM",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-tgm-mrapt12as",
      "slug": "tgm-mrapt12as",
      "name": "TGM MRAPT12AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRAPT12AS",
      "normalizedModelNumber": "mrapt12as",
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
      "id": "model-tgm-arhhbt24as",
      "slug": "tgm-arhhbt24as",
      "name": "TGM ARHHBT24AS",
      "seriesId": "series-tgm-c-series",
      "brandId": "brand-tgm",
      "modelNumber": "ARHHBT24AS",
      "normalizedModelNumber": "arhhbt24as",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 22400,
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
      "id": "model-tgm-arhhbt18as",
      "slug": "tgm-arhhbt18as",
      "name": "TGM ARHHBT18AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "ARHHBT18AS",
      "normalizedModelNumber": "arhhbt18as",
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
      "id": "model-tgm-arhhbt12as",
      "slug": "tgm-arhhbt12as",
      "name": "TGM ARHHBT12AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "ARHHBT12AS",
      "normalizedModelNumber": "arhhbt12as",
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
      "id": "model-tgm-arhhbt12asa",
      "slug": "tgm-arhhbt12asa",
      "name": "TGM ARHHBT12ASA",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "ARHHBT12ASA",
      "normalizedModelNumber": "arhhbt12asa",
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
      "id": "model-tgm-mmrsht27as3",
      "slug": "tgm-mmrsht27as3",
      "name": "TGM MMRSHT27AS3",
      "seriesId": "series-tgm-mm-series",
      "brandId": "brand-tgm",
      "modelNumber": "MMRSHT27AS3",
      "normalizedModelNumber": "mmrsht27as3",
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
      "id": "model-tgm-mc4vht18s",
      "slug": "tgm-mc4vht18s",
      "name": "TGM MC4VHT18S",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MC4VHT18S",
      "normalizedModelNumber": "mc4vht18s",
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
      "id": "model-tgm-mrsvht12as",
      "slug": "tgm-mrsvht12as",
      "name": "TGM MRSVHT12AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRSVHT12AS",
      "normalizedModelNumber": "mrsvht12as",
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
      "id": "model-tgm-mrs5vht18as",
      "slug": "tgm-mrs5vht18as",
      "name": "TGM MRS5VHT18AS",
      "seriesId": "series-tgm-mrs-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRS5VHT18AS",
      "normalizedModelNumber": "mrs5vht18as",
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
      "id": "model-tgm-mrs5vht24as",
      "slug": "tgm-mrs5vht24as",
      "name": "TGM MRS5VHT24AS",
      "seriesId": "series-tgm-mrs-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRS5VHT24AS",
      "normalizedModelNumber": "mrs5vht24as",
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
      "id": "model-tgm-mrapt24as",
      "slug": "tgm-mrapt24as",
      "name": "TGM MRAPT24AS",
      "seriesId": "series-tgm-mr-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRAPT24AS",
      "normalizedModelNumber": "mrapt24as",
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
      "id": "model-tgm-mrsvht24as",
      "slug": "tgm-mrsvht24as",
      "name": "TGM MRSVHT24AS",
      "seriesId": "series-tgm-mr-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRSVHT24AS",
      "normalizedModelNumber": "mrsvht24as",
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
      "id": "model-tgm-grh32it12as",
      "slug": "tgm-grh32it12as",
      "name": "TGM GRH32IT12AS",
      "seriesId": "series-tgm-zeno",
      "brandId": "brand-tgm",
      "modelNumber": "GRH32IT12AS",
      "normalizedModelNumber": "grh32it12as",
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
      "id": "model-tgm-grh32it12asa",
      "slug": "tgm-grh32it12asa",
      "name": "TGM GRH32IT12ASA",
      "seriesId": "series-tgm-zeno",
      "brandId": "brand-tgm",
      "modelNumber": "GRH32IT12ASA",
      "normalizedModelNumber": "grh32it12asa",
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
      "id": "model-tgm-grh32it18as",
      "slug": "tgm-grh32it18as",
      "name": "TGM GRH32IT18AS",
      "seriesId": "series-tgm-zeno",
      "brandId": "brand-tgm",
      "modelNumber": "GRH32IT18AS",
      "normalizedModelNumber": "grh32it18as",
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
      "id": "model-tgm-mmrsht48as5",
      "slug": "tgm-mmrsht48as5",
      "name": "TGM MMRSHT48AS5",
      "seriesId": "series-tgm-mm-series",
      "brandId": "brand-tgm",
      "modelNumber": "MMRSHT48AS5",
      "normalizedModelNumber": "mmrsht48as5",
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
      "id": "model-tgm-gmrsht24as3",
      "slug": "tgm-gmrsht24as3",
      "name": "TGM GMRSHT24AS3",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "GMRSHT24AS3",
      "normalizedModelNumber": "gmrsht24as3",
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
      "id": "model-tgm-gmrsht42as5",
      "slug": "tgm-gmrsht42as5",
      "name": "TGM GMRSHT42AS5",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "GMRSHT42AS5",
      "normalizedModelNumber": "gmrsht42as5",
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
      "id": "model-tgm-grh32it36as",
      "slug": "tgm-grh32it36as",
      "name": "TGM GRH32IT36AS",
      "seriesId": "series-tgm-all-match",
      "brandId": "brand-tgm",
      "modelNumber": "GRH32IT36AS",
      "normalizedModelNumber": "grh32it36as",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 33600,
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
      "id": "model-tgm-mrpot30as",
      "slug": "tgm-mrpot30as",
      "name": "TGM MRPOT30AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRPOT30AS",
      "normalizedModelNumber": "mrpot30as",
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
      "id": "model-tgm-gmrsht18as2",
      "slug": "tgm-gmrsht18as2",
      "name": "TGM GMRSHT18AS2",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "GMRSHT18AS2",
      "normalizedModelNumber": "gmrsht18as2",
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
      "id": "model-tgm-gmrsht36as4",
      "slug": "tgm-gmrsht36as4",
      "name": "TGM GMRSHT36AS4",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "GMRSHT36AS4",
      "normalizedModelNumber": "gmrsht36as4",
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
      "id": "model-tgm-mmrsht18as2",
      "slug": "tgm-mmrsht18as2",
      "name": "TGM MMRSHT18AS2",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MMRSHT18AS2",
      "normalizedModelNumber": "mmrsht18as2",
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
      "id": "model-tgm-mrsvht18as",
      "slug": "tgm-mrsvht18as",
      "name": "TGM MRSVHT18AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRSVHT18AS",
      "normalizedModelNumber": "mrsvht18as",
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
      "id": "model-tgm-mmrsht36as4",
      "slug": "tgm-mmrsht36as4",
      "name": "TGM MMRSHT36AS4",
      "seriesId": "series-tgm-mm-series",
      "brandId": "brand-tgm",
      "modelNumber": "MMRSHT36AS4",
      "normalizedModelNumber": "mmrsht36as4",
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
      "id": "model-tgm-mrs5vht36as",
      "slug": "tgm-mrs5vht36as",
      "name": "TGM MRS5VHT36AS",
      "seriesId": "series-tgm-mrs-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRS5VHT36AS",
      "normalizedModelNumber": "mrs5vht36as",
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
      "id": "model-tgm-mrs5vht48as",
      "slug": "tgm-mrs5vht48as",
      "name": "TGM MRS5VHT48AS",
      "seriesId": "series-tgm-mrs-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRS5VHT48AS",
      "normalizedModelNumber": "mrs5vht48as",
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
      "id": "model-tgm-mrsvht48as",
      "slug": "tgm-mrsvht48as",
      "name": "TGM MRSVHT48AS",
      "seriesId": "series-tgm-m-series",
      "brandId": "brand-tgm",
      "modelNumber": "MRSVHT48AS",
      "normalizedModelNumber": "mrsvht48as",
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
      "id": "model-tgm-gts18hn060a",
      "slug": "tgm-gts18hn060a",
      "name": "TGM GTS18HN060A",
      "seriesId": "series-tgm-flexx",
      "brandId": "brand-tgm",
      "modelNumber": "GTS18HN060A",
      "normalizedModelNumber": "gts18hn060a",
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
      "id": "model-tgm-gts18hn036a",
      "slug": "tgm-gts18hn036a",
      "name": "TGM GTS18HN036A",
      "seriesId": "series-tgm-flexx",
      "brandId": "brand-tgm",
      "modelNumber": "GTS18HN036A",
      "normalizedModelNumber": "gts18hn036a",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-tgm-mrapt12as",
      "modelNumber": "MRAPT12AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-arhhbt24as",
      "modelNumber": "ARHHBT24AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-arhhbt18as",
      "modelNumber": "ARHHBT18AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-arhhbt12as",
      "modelNumber": "ARHHBT12AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-arhhbt12asa",
      "modelNumber": "ARHHBT12ASA",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-mmrsht27as3",
      "modelNumber": "MMRSHT27AS3",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mc4vht18s",
      "modelNumber": "MC4VHT18S",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mrsvht12as",
      "modelNumber": "MRSVHT12AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mrs5vht18as",
      "modelNumber": "MRS5VHT18AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-tgm-mrs5vht24as",
      "modelNumber": "MRS5VHT24AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-tgm-mrapt24as",
      "modelNumber": "MRAPT24AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mrsvht24as",
      "modelNumber": "MRSVHT24AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-grh32it12as",
      "modelNumber": "GRH32IT12AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-grh32it12asa",
      "modelNumber": "GRH32IT12ASA",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-grh32it18as",
      "modelNumber": "GRH32IT18AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-mmrsht48as5",
      "modelNumber": "MMRSHT48AS5",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-gmrsht24as3",
      "modelNumber": "GMRSHT24AS3",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-gmrsht42as5",
      "modelNumber": "GMRSHT42AS5",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-grh32it36as",
      "modelNumber": "GRH32IT36AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-mrpot30as",
      "modelNumber": "MRPOT30AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-gmrsht18as2",
      "modelNumber": "GMRSHT18AS2",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-gmrsht36as4",
      "modelNumber": "GMRSHT36AS4",
      "brandId": "brand-tgm",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-tgm-mmrsht18as2",
      "modelNumber": "MMRSHT18AS2",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mrsvht18as",
      "modelNumber": "MRSVHT18AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mmrsht36as4",
      "modelNumber": "MMRSHT36AS4",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-mrs5vht36as",
      "modelNumber": "MRS5VHT36AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-tgm-mrs5vht48as",
      "modelNumber": "MRS5VHT48AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-tgm-mrsvht48as",
      "modelNumber": "MRSVHT48AS",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-gts18hn060a",
      "modelNumber": "GTS18HN060A",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-tgm-gts18hn036a",
      "modelNumber": "GTS18HN036A",
      "brandId": "brand-tgm",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-mwapt12s",
      "modelNumber": "MWAPT12S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-awhhbt24s",
      "modelNumber": "AWHHBT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-awhhbt18s",
      "modelNumber": "AWHHBT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-awhhbt12s",
      "modelNumber": "AWHHBT12S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-awhhbt12sa",
      "modelNumber": "AWHHBT12SA",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51325",
      "modelNumber": "IU-51325",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-muvht18s",
      "modelNumber": "MUVHT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc4vht12s",
      "modelNumber": "MC4VHT12S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-muv5ht18s",
      "modelNumber": "MUV5HT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc45vht24s",
      "modelNumber": "MC45VHT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mwapt24s",
      "modelNumber": "MWAPT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc4vht24s",
      "modelNumber": "MC4VHT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32it12s",
      "modelNumber": "GWH32IT12S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32it12sa",
      "modelNumber": "GWH32IT12SA",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32it18s",
      "modelNumber": "GWH32IT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-muvht24s",
      "modelNumber": "MUVHT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-muv5ht24s",
      "modelNumber": "MUV5HT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51327",
      "modelNumber": "IU-51327",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51315",
      "modelNumber": "IU-51315",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51317",
      "modelNumber": "IU-51317",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-gc4vht36sld",
      "modelNumber": "GC4VHT36SLD",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mwpot30s",
      "modelNumber": "MWPOT30S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32it36s",
      "modelNumber": "GWH32IT36S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51314",
      "modelNumber": "IU-51314",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51316",
      "modelNumber": "IU-51316",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51324",
      "modelNumber": "IU-51324",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc45vht18s",
      "modelNumber": "MC45VHT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc4vht18s",
      "modelNumber": "MC4VHT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-51326",
      "modelNumber": "IU-51326",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mfc5vht18s",
      "modelNumber": "MFC5VHT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc45vht36s",
      "modelNumber": "MC45VHT36S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mfcht18s",
      "modelNumber": "MFCHT18S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-muv5ht48s",
      "modelNumber": "MUV5HT48S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mfc5vht24s",
      "modelNumber": "MFC5VHT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mc45vht48s",
      "modelNumber": "MC45VHT48S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mfcht24s",
      "modelNumber": "MFCHT24S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mfcht12s",
      "modelNumber": "MFCHT12S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-muvht48s",
      "modelNumber": "MUVHT48S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-mfc5vht48s",
      "modelNumber": "MFC5VHT48S",
      "brandId": "brand-tgm",
      "type": "wall-single"
    },
    {
      "id": "iu-gta18h048a",
      "modelNumber": "GTA18H048A",
      "brandId": "brand-tgm",
      "type": "central-ducted"
    },
    {
      "id": "iu-gta18h024a",
      "modelNumber": "GTA18H024A",
      "brandId": "brand-tgm",
      "type": "central-ducted"
    },
    {
      "id": "iu-gta18h060a",
      "modelNumber": "GTA18H060A",
      "brandId": "brand-tgm",
      "type": "central-ducted"
    },
    {
      "id": "iu-gta18h036a",
      "modelNumber": "GTA18H036A",
      "brandId": "brand-tgm",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-tgm-mrapt12as-mwapt12s",
      "slug": "tgm-mrapt12as-mwapt12s",
      "modelId": "model-tgm-mrapt12as",
      "outdoorUnitId": "ou-tgm-mrapt12as",
      "indoorUnitId": "iu-mwapt12s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-arhhbt24as-awhhbt24s",
      "slug": "tgm-arhhbt24as-awhhbt24s",
      "modelId": "model-tgm-arhhbt24as",
      "outdoorUnitId": "ou-tgm-arhhbt24as",
      "indoorUnitId": "iu-awhhbt24s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-arhhbt18as-awhhbt18s",
      "slug": "tgm-arhhbt18as-awhhbt18s",
      "modelId": "model-tgm-arhhbt18as",
      "outdoorUnitId": "ou-tgm-arhhbt18as",
      "indoorUnitId": "iu-awhhbt18s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-arhhbt12as-awhhbt12s",
      "slug": "tgm-arhhbt12as-awhhbt12s",
      "modelId": "model-tgm-arhhbt12as",
      "outdoorUnitId": "ou-tgm-arhhbt12as",
      "indoorUnitId": "iu-awhhbt12s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-arhhbt12asa-awhhbt12sa",
      "slug": "tgm-arhhbt12asa-awhhbt12sa",
      "modelId": "model-tgm-arhhbt12asa",
      "outdoorUnitId": "ou-tgm-arhhbt12asa",
      "indoorUnitId": "iu-awhhbt12sa",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mmrsht27as3-iu-51325",
      "slug": "tgm-mmrsht27as3-iu-51325",
      "modelId": "model-tgm-mmrsht27as3",
      "outdoorUnitId": "ou-tgm-mmrsht27as3",
      "indoorUnitId": "iu-iu-51325",
      "minHeatingTempC": -15,
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mc4vht18s-muvht18s",
      "slug": "tgm-mc4vht18s-muvht18s",
      "modelId": "model-tgm-mc4vht18s",
      "outdoorUnitId": "ou-tgm-mc4vht18s",
      "indoorUnitId": "iu-muvht18s",
      "minHeatingTempC": -15,
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht12as-mc4vht12s",
      "slug": "tgm-mrsvht12as-mc4vht12s",
      "modelId": "model-tgm-mrsvht12as",
      "outdoorUnitId": "ou-tgm-mrsvht12as",
      "indoorUnitId": "iu-mc4vht12s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht18as-muv5ht18s",
      "slug": "tgm-mrs5vht18as-muv5ht18s",
      "modelId": "model-tgm-mrs5vht18as",
      "outdoorUnitId": "ou-tgm-mrs5vht18as",
      "indoorUnitId": "iu-muv5ht18s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht24as-mc45vht24s",
      "slug": "tgm-mrs5vht24as-mc45vht24s",
      "modelId": "model-tgm-mrs5vht24as",
      "outdoorUnitId": "ou-tgm-mrs5vht24as",
      "indoorUnitId": "iu-mc45vht24s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrapt24as-mwapt24s",
      "slug": "tgm-mrapt24as-mwapt24s",
      "modelId": "model-tgm-mrapt24as",
      "outdoorUnitId": "ou-tgm-mrapt24as",
      "indoorUnitId": "iu-mwapt24s",
      "minHeatingTempC": -15,
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht24as-mc4vht24s",
      "slug": "tgm-mrsvht24as-mc4vht24s",
      "modelId": "model-tgm-mrsvht24as",
      "outdoorUnitId": "ou-tgm-mrsvht24as",
      "indoorUnitId": "iu-mc4vht24s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-grh32it12as-gwh32it12s",
      "slug": "tgm-grh32it12as-gwh32it12s",
      "modelId": "model-tgm-grh32it12as",
      "outdoorUnitId": "ou-tgm-grh32it12as",
      "indoorUnitId": "iu-gwh32it12s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-grh32it12asa-gwh32it12sa",
      "slug": "tgm-grh32it12asa-gwh32it12sa",
      "modelId": "model-tgm-grh32it12asa",
      "outdoorUnitId": "ou-tgm-grh32it12asa",
      "indoorUnitId": "iu-gwh32it12sa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-grh32it18as-gwh32it18s",
      "slug": "tgm-grh32it18as-gwh32it18s",
      "modelId": "model-tgm-grh32it18as",
      "outdoorUnitId": "ou-tgm-grh32it18as",
      "indoorUnitId": "iu-gwh32it18s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.5,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht24as-muvht24s",
      "slug": "tgm-mrsvht24as-muvht24s",
      "modelId": "model-tgm-mrsvht24as",
      "outdoorUnitId": "ou-tgm-mrsvht24as",
      "indoorUnitId": "iu-muvht24s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht24as-muv5ht24s",
      "slug": "tgm-mrs5vht24as-muv5ht24s",
      "modelId": "model-tgm-mrs5vht24as",
      "outdoorUnitId": "ou-tgm-mrs5vht24as",
      "indoorUnitId": "iu-muv5ht24s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mmrsht48as5-iu-51327",
      "slug": "tgm-mmrsht48as5-iu-51327",
      "modelId": "model-tgm-mmrsht48as5",
      "outdoorUnitId": "ou-tgm-mmrsht48as5",
      "indoorUnitId": "iu-iu-51327",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gmrsht24as3-iu-51315",
      "slug": "tgm-gmrsht24as3-iu-51315",
      "modelId": "model-tgm-gmrsht24as3",
      "outdoorUnitId": "ou-tgm-gmrsht24as3",
      "indoorUnitId": "iu-iu-51315",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gmrsht42as5-iu-51317",
      "slug": "tgm-gmrsht42as5-iu-51317",
      "modelId": "model-tgm-gmrsht42as5",
      "outdoorUnitId": "ou-tgm-gmrsht42as5",
      "indoorUnitId": "iu-iu-51317",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-grh32it36as-gc4vht36sld",
      "slug": "tgm-grh32it36as-gc4vht36sld",
      "modelId": "model-tgm-grh32it36as",
      "outdoorUnitId": "ou-tgm-grh32it36as",
      "indoorUnitId": "iu-gc4vht36sld",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrpot30as-mwpot30s",
      "slug": "tgm-mrpot30as-mwpot30s",
      "modelId": "model-tgm-mrpot30as",
      "outdoorUnitId": "ou-tgm-mrpot30as",
      "indoorUnitId": "iu-mwpot30s",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-grh32it36as-gwh32it36s",
      "slug": "tgm-grh32it36as-gwh32it36s",
      "modelId": "model-tgm-grh32it36as",
      "outdoorUnitId": "ou-tgm-grh32it36as",
      "indoorUnitId": "iu-gwh32it36s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gmrsht18as2-iu-51314",
      "slug": "tgm-gmrsht18as2-iu-51314",
      "modelId": "model-tgm-gmrsht18as2",
      "outdoorUnitId": "ou-tgm-gmrsht18as2",
      "indoorUnitId": "iu-iu-51314",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gmrsht36as4-iu-51316",
      "slug": "tgm-gmrsht36as4-iu-51316",
      "modelId": "model-tgm-gmrsht36as4",
      "outdoorUnitId": "ou-tgm-gmrsht36as4",
      "indoorUnitId": "iu-iu-51316",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mmrsht18as2-iu-51324",
      "slug": "tgm-mmrsht18as2-iu-51324",
      "modelId": "model-tgm-mmrsht18as2",
      "outdoorUnitId": "ou-tgm-mmrsht18as2",
      "indoorUnitId": "iu-iu-51324",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht18as-mc45vht18s",
      "slug": "tgm-mrs5vht18as-mc45vht18s",
      "modelId": "model-tgm-mrs5vht18as",
      "outdoorUnitId": "ou-tgm-mrs5vht18as",
      "indoorUnitId": "iu-mc45vht18s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht18as-mc4vht18s",
      "slug": "tgm-mrsvht18as-mc4vht18s",
      "modelId": "model-tgm-mrsvht18as",
      "outdoorUnitId": "ou-tgm-mrsvht18as",
      "indoorUnitId": "iu-mc4vht18s",
      "minHeatingTempC": -15,
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mmrsht36as4-iu-51326",
      "slug": "tgm-mmrsht36as4-iu-51326",
      "modelId": "model-tgm-mmrsht36as4",
      "outdoorUnitId": "ou-tgm-mmrsht36as4",
      "indoorUnitId": "iu-iu-51326",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.2,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht18as-mfc5vht18s",
      "slug": "tgm-mrs5vht18as-mfc5vht18s",
      "modelId": "model-tgm-mrs5vht18as",
      "outdoorUnitId": "ou-tgm-mrs5vht18as",
      "indoorUnitId": "iu-mfc5vht18s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht36as-mc45vht36s",
      "slug": "tgm-mrs5vht36as-mc45vht36s",
      "modelId": "model-tgm-mrs5vht36as",
      "outdoorUnitId": "ou-tgm-mrs5vht36as",
      "indoorUnitId": "iu-mc45vht36s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht18as-mfcht18s",
      "slug": "tgm-mrsvht18as-mfcht18s",
      "modelId": "model-tgm-mrsvht18as",
      "outdoorUnitId": "ou-tgm-mrsvht18as",
      "indoorUnitId": "iu-mfcht18s",
      "minHeatingTempC": -15,
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht48as-muv5ht48s",
      "slug": "tgm-mrs5vht48as-muv5ht48s",
      "modelId": "model-tgm-mrs5vht48as",
      "outdoorUnitId": "ou-tgm-mrs5vht48as",
      "indoorUnitId": "iu-muv5ht48s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht24as-mfc5vht24s",
      "slug": "tgm-mrs5vht24as-mfc5vht24s",
      "modelId": "model-tgm-mrs5vht24as",
      "outdoorUnitId": "ou-tgm-mrs5vht24as",
      "indoorUnitId": "iu-mfc5vht24s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht48as-mc45vht48s",
      "slug": "tgm-mrs5vht48as-mc45vht48s",
      "modelId": "model-tgm-mrs5vht48as",
      "outdoorUnitId": "ou-tgm-mrs5vht48as",
      "indoorUnitId": "iu-mc45vht48s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.9,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht24as-mfcht24s",
      "slug": "tgm-mrsvht24as-mfcht24s",
      "modelId": "model-tgm-mrsvht24as",
      "outdoorUnitId": "ou-tgm-mrsvht24as",
      "indoorUnitId": "iu-mfcht24s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 11.2,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht12as-mfcht12s",
      "slug": "tgm-mrsvht12as-mfcht12s",
      "modelId": "model-tgm-mrsvht12as",
      "outdoorUnitId": "ou-tgm-mrsvht12as",
      "indoorUnitId": "iu-mfcht12s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrsvht48as-muvht48s",
      "slug": "tgm-mrsvht48as-muvht48s",
      "modelId": "model-tgm-mrsvht48as",
      "outdoorUnitId": "ou-tgm-mrsvht48as",
      "indoorUnitId": "iu-muvht48s",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-mrs5vht48as-mfc5vht48s",
      "slug": "tgm-mrs5vht48as-mfc5vht48s",
      "modelId": "model-tgm-mrs5vht48as",
      "outdoorUnitId": "ou-tgm-mrs5vht48as",
      "indoorUnitId": "iu-mfc5vht48s",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gts18hn060a-gta18h048a",
      "slug": "tgm-gts18hn060a-gta18h048a",
      "modelId": "model-tgm-gts18hn060a",
      "outdoorUnitId": "ou-tgm-gts18hn060a",
      "indoorUnitId": "iu-gta18h048a",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gts18hn036a-gta18h024a",
      "slug": "tgm-gts18hn036a-gta18h024a",
      "modelId": "model-tgm-gts18hn036a",
      "outdoorUnitId": "ou-tgm-gts18hn036a",
      "indoorUnitId": "iu-gta18h024a",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gts18hn060a-gta18h060a",
      "slug": "tgm-gts18hn060a-gta18h060a",
      "modelId": "model-tgm-gts18hn060a",
      "outdoorUnitId": "ou-tgm-gts18hn060a",
      "indoorUnitId": "iu-gta18h060a",
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
          "sourceId": "src-tgm-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-tgm-gts18hn036a-gta18h036a",
      "slug": "tgm-gts18hn036a-gta18h036a",
      "modelId": "model-tgm-gts18hn036a",
      "outdoorUnitId": "ou-tgm-gts18hn036a",
      "indoorUnitId": "iu-gta18h036a",
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
          "sourceId": "src-tgm-epa",
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
