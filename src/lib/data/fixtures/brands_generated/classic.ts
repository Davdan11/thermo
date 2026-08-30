import type { BrandDataset } from "../../types";

export const brand_classicDataset: BrandDataset = {
  "brand": {
    "id": "brand-classic",
    "slug": "classic",
    "name": "CLASSIC",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour CLASSIC",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-classic-epa",
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
      "id": "series-classic-mm-series",
      "slug": "classic-mm-series",
      "name": "MM Series",
      "brandId": "brand-classic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série MM Series de CLASSIC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-classic-m-series",
      "slug": "classic-m-series",
      "name": "M series",
      "brandId": "brand-classic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série M series de CLASSIC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-classic-mr-series",
      "slug": "classic-mr-series",
      "name": "MR Series",
      "brandId": "brand-classic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MR Series de CLASSIC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-classic-zeno",
      "slug": "classic-zeno",
      "name": "Zeno",
      "brandId": "brand-classic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Zeno de CLASSIC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-classic-all-match",
      "slug": "classic-all-match",
      "name": "All MATCH",
      "brandId": "brand-classic",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série All MATCH de CLASSIC",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-classic-mmrshc27as3",
      "slug": "classic-mmrshc27as3",
      "name": "CLASSIC MMRSHC27AS3",
      "seriesId": "series-classic-mm-series",
      "brandId": "brand-classic",
      "modelNumber": "MMRSHC27AS3",
      "normalizedModelNumber": "mmrshc27as3",
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
      "id": "model-classic-mc4vhc18s",
      "slug": "classic-mc4vhc18s",
      "name": "CLASSIC MC4VHC18S",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "MC4VHC18S",
      "normalizedModelNumber": "mc4vhc18s",
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
      "id": "model-classic-mrsvhc12as",
      "slug": "classic-mrsvhc12as",
      "name": "CLASSIC MRSVHC12AS",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "MRSVHC12AS",
      "normalizedModelNumber": "mrsvhc12as",
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
      "id": "model-classic-mrsvhc24as",
      "slug": "classic-mrsvhc24as",
      "name": "CLASSIC MRSVHC24AS",
      "seriesId": "series-classic-mr-series",
      "brandId": "brand-classic",
      "modelNumber": "MRSVHC24AS",
      "normalizedModelNumber": "mrsvhc24as",
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
      "id": "model-classic-grh32ic18as",
      "slug": "classic-grh32ic18as",
      "name": "CLASSIC GRH32IC18AS",
      "seriesId": "series-classic-zeno",
      "brandId": "brand-classic",
      "modelNumber": "GRH32IC18AS",
      "normalizedModelNumber": "grh32ic18as",
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
      "id": "model-classic-grh32ic12asa",
      "slug": "classic-grh32ic12asa",
      "name": "CLASSIC GRH32IC12ASA",
      "seriesId": "series-classic-zeno",
      "brandId": "brand-classic",
      "modelNumber": "GRH32IC12ASA",
      "normalizedModelNumber": "grh32ic12asa",
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
      "id": "model-classic-grh32ic12as",
      "slug": "classic-grh32ic12as",
      "name": "CLASSIC GRH32IC12AS",
      "seriesId": "series-classic-zeno",
      "brandId": "brand-classic",
      "modelNumber": "GRH32IC12AS",
      "normalizedModelNumber": "grh32ic12as",
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
      "id": "model-classic-mmrshc48as5",
      "slug": "classic-mmrshc48as5",
      "name": "CLASSIC MMRSHC48AS5",
      "seriesId": "series-classic-mm-series",
      "brandId": "brand-classic",
      "modelNumber": "MMRSHC48AS5",
      "normalizedModelNumber": "mmrshc48as5",
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
      "id": "model-classic-gmrshc24as3",
      "slug": "classic-gmrshc24as3",
      "name": "CLASSIC GMRSHC24AS3",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "GMRSHC24AS3",
      "normalizedModelNumber": "gmrshc24as3",
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
      "id": "model-classic-gmrshc36as4",
      "slug": "classic-gmrshc36as4",
      "name": "CLASSIC GMRSHC36AS4",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "GMRSHC36AS4",
      "normalizedModelNumber": "gmrshc36as4",
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
      "id": "model-classic-gmrshc42as5",
      "slug": "classic-gmrshc42as5",
      "name": "CLASSIC GMRSHC42AS5",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "GMRSHC42AS5",
      "normalizedModelNumber": "gmrshc42as5",
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
      "id": "model-classic-gmrshc18as2",
      "slug": "classic-gmrshc18as2",
      "name": "CLASSIC GMRSHC18AS2",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "GMRSHC18AS2",
      "normalizedModelNumber": "gmrshc18as2",
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
      "id": "model-classic-mmrshc18as2",
      "slug": "classic-mmrshc18as2",
      "name": "CLASSIC MMRSHC18AS2",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "MMRSHC18AS2",
      "normalizedModelNumber": "mmrshc18as2",
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
      "id": "model-classic-grh32ic36as",
      "slug": "classic-grh32ic36as",
      "name": "CLASSIC GRH32IC36AS",
      "seriesId": "series-classic-all-match",
      "brandId": "brand-classic",
      "modelNumber": "GRH32IC36AS",
      "normalizedModelNumber": "grh32ic36as",
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
      "id": "model-classic-mrpoc30as",
      "slug": "classic-mrpoc30as",
      "name": "CLASSIC MRPOC30AS",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "MRPOC30AS",
      "normalizedModelNumber": "mrpoc30as",
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
      "id": "model-classic-mrsvhc18as",
      "slug": "classic-mrsvhc18as",
      "name": "CLASSIC MRSVHC18AS",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "MRSVHC18AS",
      "normalizedModelNumber": "mrsvhc18as",
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
      "id": "model-classic-mmrshc36as4",
      "slug": "classic-mmrshc36as4",
      "name": "CLASSIC MMRSHC36AS4",
      "seriesId": "series-classic-mm-series",
      "brandId": "brand-classic",
      "modelNumber": "MMRSHC36AS4",
      "normalizedModelNumber": "mmrshc36as4",
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
      "id": "model-classic-mrsvhc48as",
      "slug": "classic-mrsvhc48as",
      "name": "CLASSIC MRSVHC48AS",
      "seriesId": "series-classic-m-series",
      "brandId": "brand-classic",
      "modelNumber": "MRSVHC48AS",
      "normalizedModelNumber": "mrsvhc48as",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-classic-mmrshc27as3",
      "modelNumber": "MMRSHC27AS3",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-mc4vhc18s",
      "modelNumber": "MC4VHC18S",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-mrsvhc12as",
      "modelNumber": "MRSVHC12AS",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-mrsvhc24as",
      "modelNumber": "MRSVHC24AS",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-grh32ic18as",
      "modelNumber": "GRH32IC18AS",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-grh32ic12asa",
      "modelNumber": "GRH32IC12ASA",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-grh32ic12as",
      "modelNumber": "GRH32IC12AS",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-mmrshc48as5",
      "modelNumber": "MMRSHC48AS5",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-gmrshc24as3",
      "modelNumber": "GMRSHC24AS3",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-gmrshc36as4",
      "modelNumber": "GMRSHC36AS4",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-gmrshc42as5",
      "modelNumber": "GMRSHC42AS5",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-gmrshc18as2",
      "modelNumber": "GMRSHC18AS2",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-mmrshc18as2",
      "modelNumber": "MMRSHC18AS2",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-grh32ic36as",
      "modelNumber": "GRH32IC36AS",
      "brandId": "brand-classic",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-classic-mrpoc30as",
      "modelNumber": "MRPOC30AS",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-mrsvhc18as",
      "modelNumber": "MRSVHC18AS",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-mmrshc36as4",
      "modelNumber": "MMRSHC36AS4",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-classic-mrsvhc48as",
      "modelNumber": "MRSVHC48AS",
      "brandId": "brand-classic",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-42129",
      "modelNumber": "IU-42129",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-muvhc18s",
      "modelNumber": "MUVHC18S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mc4vhc12s",
      "modelNumber": "MC4VHC12S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mc4vhc24s",
      "modelNumber": "MC4VHC24S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32ic18s",
      "modelNumber": "GWH32IC18S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32ic12sa",
      "modelNumber": "GWH32IC12SA",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32ic12s",
      "modelNumber": "GWH32IC12S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-muvhc24s",
      "modelNumber": "MUVHC24S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42131",
      "modelNumber": "IU-42131",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42119",
      "modelNumber": "IU-42119",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42120",
      "modelNumber": "IU-42120",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42121",
      "modelNumber": "IU-42121",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42118",
      "modelNumber": "IU-42118",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42128",
      "modelNumber": "IU-42128",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-gc4vhc36sld",
      "modelNumber": "GC4VHC36SLD",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-gwh32ic36s",
      "modelNumber": "GWH32IC36S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mwpoc30s",
      "modelNumber": "MWPOC30S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mc4vhc18s",
      "modelNumber": "MC4VHC18S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-42130",
      "modelNumber": "IU-42130",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mfchc18s",
      "modelNumber": "MFCHC18S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mfchc12s",
      "modelNumber": "MFCHC12S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-mfchc24s",
      "modelNumber": "MFCHC24S",
      "brandId": "brand-classic",
      "type": "wall-single"
    },
    {
      "id": "iu-muvhc48s",
      "modelNumber": "MUVHC48S",
      "brandId": "brand-classic",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-classic-mmrshc27as3-iu-42129",
      "slug": "classic-mmrshc27as3-iu-42129",
      "modelId": "model-classic-mmrshc27as3",
      "outdoorUnitId": "ou-classic-mmrshc27as3",
      "indoorUnitId": "iu-iu-42129",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mc4vhc18s-muvhc18s",
      "slug": "classic-mc4vhc18s-muvhc18s",
      "modelId": "model-classic-mc4vhc18s",
      "outdoorUnitId": "ou-classic-mc4vhc18s",
      "indoorUnitId": "iu-muvhc18s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc12as-mc4vhc12s",
      "slug": "classic-mrsvhc12as-mc4vhc12s",
      "modelId": "model-classic-mrsvhc12as",
      "outdoorUnitId": "ou-classic-mrsvhc12as",
      "indoorUnitId": "iu-mc4vhc12s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc24as-mc4vhc24s",
      "slug": "classic-mrsvhc24as-mc4vhc24s",
      "modelId": "model-classic-mrsvhc24as",
      "outdoorUnitId": "ou-classic-mrsvhc24as",
      "indoorUnitId": "iu-mc4vhc24s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-grh32ic18as-gwh32ic18s",
      "slug": "classic-grh32ic18as-gwh32ic18s",
      "modelId": "model-classic-grh32ic18as",
      "outdoorUnitId": "ou-classic-grh32ic18as",
      "indoorUnitId": "iu-gwh32ic18s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-grh32ic12asa-gwh32ic12sa",
      "slug": "classic-grh32ic12asa-gwh32ic12sa",
      "modelId": "model-classic-grh32ic12asa",
      "outdoorUnitId": "ou-classic-grh32ic12asa",
      "indoorUnitId": "iu-gwh32ic12sa",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-grh32ic12as-gwh32ic12s",
      "slug": "classic-grh32ic12as-gwh32ic12s",
      "modelId": "model-classic-grh32ic12as",
      "outdoorUnitId": "ou-classic-grh32ic12as",
      "indoorUnitId": "iu-gwh32ic12s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc24as-muvhc24s",
      "slug": "classic-mrsvhc24as-muvhc24s",
      "modelId": "model-classic-mrsvhc24as",
      "outdoorUnitId": "ou-classic-mrsvhc24as",
      "indoorUnitId": "iu-muvhc24s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mmrshc48as5-iu-42131",
      "slug": "classic-mmrshc48as5-iu-42131",
      "modelId": "model-classic-mmrshc48as5",
      "outdoorUnitId": "ou-classic-mmrshc48as5",
      "indoorUnitId": "iu-iu-42131",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-gmrshc24as3-iu-42119",
      "slug": "classic-gmrshc24as3-iu-42119",
      "modelId": "model-classic-gmrshc24as3",
      "outdoorUnitId": "ou-classic-gmrshc24as3",
      "indoorUnitId": "iu-iu-42119",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-gmrshc36as4-iu-42120",
      "slug": "classic-gmrshc36as4-iu-42120",
      "modelId": "model-classic-gmrshc36as4",
      "outdoorUnitId": "ou-classic-gmrshc36as4",
      "indoorUnitId": "iu-iu-42120",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-gmrshc42as5-iu-42121",
      "slug": "classic-gmrshc42as5-iu-42121",
      "modelId": "model-classic-gmrshc42as5",
      "outdoorUnitId": "ou-classic-gmrshc42as5",
      "indoorUnitId": "iu-iu-42121",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-gmrshc18as2-iu-42118",
      "slug": "classic-gmrshc18as2-iu-42118",
      "modelId": "model-classic-gmrshc18as2",
      "outdoorUnitId": "ou-classic-gmrshc18as2",
      "indoorUnitId": "iu-iu-42118",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mmrshc18as2-iu-42128",
      "slug": "classic-mmrshc18as2-iu-42128",
      "modelId": "model-classic-mmrshc18as2",
      "outdoorUnitId": "ou-classic-mmrshc18as2",
      "indoorUnitId": "iu-iu-42128",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-grh32ic36as-gc4vhc36sld",
      "slug": "classic-grh32ic36as-gc4vhc36sld",
      "modelId": "model-classic-grh32ic36as",
      "outdoorUnitId": "ou-classic-grh32ic36as",
      "indoorUnitId": "iu-gc4vhc36sld",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-grh32ic36as-gwh32ic36s",
      "slug": "classic-grh32ic36as-gwh32ic36s",
      "modelId": "model-classic-grh32ic36as",
      "outdoorUnitId": "ou-classic-grh32ic36as",
      "indoorUnitId": "iu-gwh32ic36s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrpoc30as-mwpoc30s",
      "slug": "classic-mrpoc30as-mwpoc30s",
      "modelId": "model-classic-mrpoc30as",
      "outdoorUnitId": "ou-classic-mrpoc30as",
      "indoorUnitId": "iu-mwpoc30s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc18as-mc4vhc18s",
      "slug": "classic-mrsvhc18as-mc4vhc18s",
      "modelId": "model-classic-mrsvhc18as",
      "outdoorUnitId": "ou-classic-mrsvhc18as",
      "indoorUnitId": "iu-mc4vhc18s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mmrshc36as4-iu-42130",
      "slug": "classic-mmrshc36as4-iu-42130",
      "modelId": "model-classic-mmrshc36as4",
      "outdoorUnitId": "ou-classic-mmrshc36as4",
      "indoorUnitId": "iu-iu-42130",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc18as-mfchc18s",
      "slug": "classic-mrsvhc18as-mfchc18s",
      "modelId": "model-classic-mrsvhc18as",
      "outdoorUnitId": "ou-classic-mrsvhc18as",
      "indoorUnitId": "iu-mfchc18s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc12as-mfchc12s",
      "slug": "classic-mrsvhc12as-mfchc12s",
      "modelId": "model-classic-mrsvhc12as",
      "outdoorUnitId": "ou-classic-mrsvhc12as",
      "indoorUnitId": "iu-mfchc12s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc24as-mfchc24s",
      "slug": "classic-mrsvhc24as-mfchc24s",
      "modelId": "model-classic-mrsvhc24as",
      "outdoorUnitId": "ou-classic-mrsvhc24as",
      "indoorUnitId": "iu-mfchc24s",
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
          "sourceId": "src-classic-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-classic-mrsvhc48as-muvhc48s",
      "slug": "classic-mrsvhc48as-muvhc48s",
      "modelId": "model-classic-mrsvhc48as",
      "outdoorUnitId": "ou-classic-mrsvhc48as",
      "indoorUnitId": "iu-muvhc48s",
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
          "sourceId": "src-classic-epa",
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
