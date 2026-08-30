import type { BrandDataset } from "../../types";

export const brand_franklinDataset: BrandDataset = {
  "brand": {
    "id": "brand-franklin",
    "slug": "franklin",
    "name": "Franklin",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Franklin",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-franklin-epa",
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
      "id": "series-franklin-msh-series",
      "slug": "franklin-msh-series",
      "name": "MSH Series",
      "brandId": "brand-franklin",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MSH Series de Franklin",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-franklin-mst-series",
      "slug": "franklin-mst-series",
      "name": "MST Series",
      "brandId": "brand-franklin",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MST Series de Franklin",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-franklin-msh093f25mcaa",
      "slug": "franklin-msh093f25mcaa",
      "name": "Franklin MSH093F25MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH093F25MCAA",
      "normalizedModelNumber": "msh093f25mcaa",
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
      "id": "model-franklin-mst183f32mhaa",
      "slug": "franklin-mst183f32mhaa",
      "name": "Franklin MST183F32MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST183F32MHAA",
      "normalizedModelNumber": "mst183f32mhaa",
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
      "id": "model-franklin-msh123f32mcaa",
      "slug": "franklin-msh123f32mcaa",
      "name": "Franklin MSH123F32MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH123F32MCAA",
      "normalizedModelNumber": "msh123f32mcaa",
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
      "id": "model-franklin-msh123e23mcaa",
      "slug": "franklin-msh123e23mcaa",
      "name": "Franklin MSH123E23MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH123E23MCAA",
      "normalizedModelNumber": "msh123e23mcaa",
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
      "id": "model-franklin-msh123f25mcaa",
      "slug": "franklin-msh123f25mcaa",
      "name": "Franklin MSH123F25MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH123F25MCAA",
      "normalizedModelNumber": "msh123f25mcaa",
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
      "id": "model-franklin-msh093e23mcaa",
      "slug": "franklin-msh093e23mcaa",
      "name": "Franklin MSH093E23MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH093E23MCAA",
      "normalizedModelNumber": "msh093e23mcaa",
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
      "id": "model-franklin-mst273f32mhaa",
      "slug": "franklin-mst273f32mhaa",
      "name": "Franklin MST273F32MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST273F32MHAA",
      "normalizedModelNumber": "mst273f32mhaa",
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
      "id": "model-franklin-mst283f25mhaa",
      "slug": "franklin-mst283f25mhaa",
      "name": "Franklin MST283F25MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST283F25MHAA",
      "normalizedModelNumber": "mst283f25mhaa",
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
      "id": "model-franklin-mst363f25mhaa",
      "slug": "franklin-mst363f25mhaa",
      "name": "Franklin MST363F25MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST363F25MHAA",
      "normalizedModelNumber": "mst363f25mhaa",
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
      "id": "model-franklin-mst183e23mhaa",
      "slug": "franklin-mst183e23mhaa",
      "name": "Franklin MST183E23MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST183E23MHAA",
      "normalizedModelNumber": "mst183e23mhaa",
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
      "id": "model-franklin-msh183f32mcaa",
      "slug": "franklin-msh183f32mcaa",
      "name": "Franklin MSH183F32MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH183F32MCAA",
      "normalizedModelNumber": "msh183f32mcaa",
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
      "id": "model-franklin-mst183f25mhaa",
      "slug": "franklin-mst183f25mhaa",
      "name": "Franklin MST183F25MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST183F25MHAA",
      "normalizedModelNumber": "mst183f25mhaa",
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
      "id": "model-franklin-mst273f25mhaa",
      "slug": "franklin-mst273f25mhaa",
      "name": "Franklin MST273F25MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST273F25MHAA",
      "normalizedModelNumber": "mst273f25mhaa",
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
      "id": "model-franklin-mst483f25mhaa",
      "slug": "franklin-mst483f25mhaa",
      "name": "Franklin MST483F25MHAA",
      "seriesId": "series-franklin-mst-series",
      "brandId": "brand-franklin",
      "modelNumber": "MST483F25MHAA",
      "normalizedModelNumber": "mst483f25mhaa",
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
      "id": "model-franklin-msh183e23mcaa",
      "slug": "franklin-msh183e23mcaa",
      "name": "Franklin MSH183E23MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH183E23MCAA",
      "normalizedModelNumber": "msh183e23mcaa",
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
      "id": "model-franklin-msh183f25mcaa",
      "slug": "franklin-msh183f25mcaa",
      "name": "Franklin MSH183F25MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH183F25MCAA",
      "normalizedModelNumber": "msh183f25mcaa",
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
      "id": "model-franklin-msh243f25mcaa",
      "slug": "franklin-msh243f25mcaa",
      "name": "Franklin MSH243F25MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH243F25MCAA",
      "normalizedModelNumber": "msh243f25mcaa",
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
      "id": "model-franklin-msh303f25mcaa",
      "slug": "franklin-msh303f25mcaa",
      "name": "Franklin MSH303F25MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH303F25MCAA",
      "normalizedModelNumber": "msh303f25mcaa",
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
      "id": "model-franklin-msh243e23mcaa",
      "slug": "franklin-msh243e23mcaa",
      "name": "Franklin MSH243E23MCAA",
      "seriesId": "series-franklin-msh-series",
      "brandId": "brand-franklin",
      "modelNumber": "MSH243E23MCAA",
      "normalizedModelNumber": "msh243e23mcaa",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-franklin-msh093f25mcaa",
      "modelNumber": "MSH093F25MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-mst183f32mhaa",
      "modelNumber": "MST183F32MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-franklin-msh123f32mcaa",
      "modelNumber": "MSH123F32MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-franklin-msh123e23mcaa",
      "modelNumber": "MSH123E23MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh123f25mcaa",
      "modelNumber": "MSH123F25MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh093e23mcaa",
      "modelNumber": "MSH093E23MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-mst273f32mhaa",
      "modelNumber": "MST273F32MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-franklin-mst283f25mhaa",
      "modelNumber": "MST283F25MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-mst363f25mhaa",
      "modelNumber": "MST363F25MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-mst183e23mhaa",
      "modelNumber": "MST183E23MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh183f32mcaa",
      "modelNumber": "MSH183F32MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-franklin-mst183f25mhaa",
      "modelNumber": "MST183F25MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-mst273f25mhaa",
      "modelNumber": "MST273F25MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-mst483f25mhaa",
      "modelNumber": "MST483F25MHAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh183e23mcaa",
      "modelNumber": "MSH183E23MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh183f25mcaa",
      "modelNumber": "MSH183F25MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh243f25mcaa",
      "modelNumber": "MSH243F25MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh303f25mcaa",
      "modelNumber": "MSH303F25MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-franklin-msh243e23mcaa",
      "modelNumber": "MSH243E23MCAA",
      "brandId": "brand-franklin",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-msh093f25axaa",
      "modelNumber": "MSH093F25AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44594",
      "modelNumber": "IU-44594",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh123f32axaa",
      "modelNumber": "MSH123F32AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh123f25axaa",
      "modelNumber": "MSH123F25AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh093e23axaa",
      "modelNumber": "MSH093E23AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44596",
      "modelNumber": "IU-44596",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh123e23axaa",
      "modelNumber": "MSH123E23AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44597",
      "modelNumber": "IU-44597",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44598",
      "modelNumber": "IU-44598",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst123e20acaa",
      "modelNumber": "MST123E20ACAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44592",
      "modelNumber": "IU-44592",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh183f32axaa",
      "modelNumber": "MSH183F32AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44593",
      "modelNumber": "IU-44593",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44595",
      "modelNumber": "IU-44595",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-44599",
      "modelNumber": "IU-44599",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh183f25axaa",
      "modelNumber": "MSH183F25AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh243f25axaa",
      "modelNumber": "MSH243F25AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst093e20acaa",
      "modelNumber": "MST093E20ACAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst093e21adaa",
      "modelNumber": "MST093E21ADAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh303f25axaa",
      "modelNumber": "MSH303F25AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst183e20acaa",
      "modelNumber": "MST183E20ACAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst123e21adaa",
      "modelNumber": "MST123E21ADAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh183e23axaa",
      "modelNumber": "MSH183E23AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst243e21adaa",
      "modelNumber": "MST243E21ADAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-msh243e23axaa",
      "modelNumber": "MSH243E23AXAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    },
    {
      "id": "iu-mst183e21adaa",
      "modelNumber": "MST183E21ADAA",
      "brandId": "brand-franklin",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-franklin-msh093f25mcaa-msh093f25axaa",
      "slug": "franklin-msh093f25mcaa-msh093f25axaa",
      "modelId": "model-franklin-msh093f25mcaa",
      "outdoorUnitId": "ou-franklin-msh093f25mcaa",
      "indoorUnitId": "iu-msh093f25axaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst183f32mhaa-iu-44594",
      "slug": "franklin-mst183f32mhaa-iu-44594",
      "modelId": "model-franklin-mst183f32mhaa",
      "outdoorUnitId": "ou-franklin-mst183f32mhaa",
      "indoorUnitId": "iu-iu-44594",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123f32mcaa-msh123f32axaa",
      "slug": "franklin-msh123f32mcaa-msh123f32axaa",
      "modelId": "model-franklin-msh123f32mcaa",
      "outdoorUnitId": "ou-franklin-msh123f32mcaa",
      "indoorUnitId": "iu-msh123f32axaa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.5,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123e23mcaa-msh123f25axaa",
      "slug": "franklin-msh123e23mcaa-msh123f25axaa",
      "modelId": "model-franklin-msh123e23mcaa",
      "outdoorUnitId": "ou-franklin-msh123e23mcaa",
      "indoorUnitId": "iu-msh123f25axaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123f25mcaa-msh123f25axaa",
      "slug": "franklin-msh123f25mcaa-msh123f25axaa",
      "modelId": "model-franklin-msh123f25mcaa",
      "outdoorUnitId": "ou-franklin-msh123f25mcaa",
      "indoorUnitId": "iu-msh123f25axaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh093e23mcaa-msh093e23axaa",
      "slug": "franklin-msh093e23mcaa-msh093e23axaa",
      "modelId": "model-franklin-msh093e23mcaa",
      "outdoorUnitId": "ou-franklin-msh093e23mcaa",
      "indoorUnitId": "iu-msh093e23axaa",
      "minHeatingTempC": -15,
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst273f32mhaa-iu-44596",
      "slug": "franklin-mst273f32mhaa-iu-44596",
      "modelId": "model-franklin-mst273f32mhaa",
      "outdoorUnitId": "ou-franklin-mst273f32mhaa",
      "indoorUnitId": "iu-iu-44596",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123e23mcaa-msh123e23axaa",
      "slug": "franklin-msh123e23mcaa-msh123e23axaa",
      "modelId": "model-franklin-msh123e23mcaa",
      "outdoorUnitId": "ou-franklin-msh123e23mcaa",
      "indoorUnitId": "iu-msh123e23axaa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.6,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst283f25mhaa-iu-44597",
      "slug": "franklin-mst283f25mhaa-iu-44597",
      "modelId": "model-franklin-mst283f25mhaa",
      "outdoorUnitId": "ou-franklin-mst283f25mhaa",
      "indoorUnitId": "iu-iu-44597",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst363f25mhaa-iu-44598",
      "slug": "franklin-mst363f25mhaa-iu-44598",
      "modelId": "model-franklin-mst363f25mhaa",
      "outdoorUnitId": "ou-franklin-mst363f25mhaa",
      "indoorUnitId": "iu-iu-44598",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.4,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123e23mcaa-mst123e20acaa",
      "slug": "franklin-msh123e23mcaa-mst123e20acaa",
      "modelId": "model-franklin-msh123e23mcaa",
      "outdoorUnitId": "ou-franklin-msh123e23mcaa",
      "indoorUnitId": "iu-mst123e20acaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123f25mcaa-mst123e20acaa",
      "slug": "franklin-msh123f25mcaa-mst123e20acaa",
      "modelId": "model-franklin-msh123f25mcaa",
      "outdoorUnitId": "ou-franklin-msh123f25mcaa",
      "indoorUnitId": "iu-mst123e20acaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst183e23mhaa-iu-44592",
      "slug": "franklin-mst183e23mhaa-iu-44592",
      "modelId": "model-franklin-mst183e23mhaa",
      "outdoorUnitId": "ou-franklin-mst183e23mhaa",
      "indoorUnitId": "iu-iu-44592",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183f32mcaa-msh183f32axaa",
      "slug": "franklin-msh183f32mcaa-msh183f32axaa",
      "modelId": "model-franklin-msh183f32mcaa",
      "outdoorUnitId": "ou-franklin-msh183f32mcaa",
      "indoorUnitId": "iu-msh183f32axaa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst183f25mhaa-iu-44593",
      "slug": "franklin-mst183f25mhaa-iu-44593",
      "modelId": "model-franklin-mst183f25mhaa",
      "outdoorUnitId": "ou-franklin-mst183f25mhaa",
      "indoorUnitId": "iu-iu-44593",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst273f25mhaa-iu-44595",
      "slug": "franklin-mst273f25mhaa-iu-44595",
      "modelId": "model-franklin-mst273f25mhaa",
      "outdoorUnitId": "ou-franklin-mst273f25mhaa",
      "indoorUnitId": "iu-iu-44595",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-mst483f25mhaa-iu-44599",
      "slug": "franklin-mst483f25mhaa-iu-44599",
      "modelId": "model-franklin-mst483f25mhaa",
      "outdoorUnitId": "ou-franklin-mst483f25mhaa",
      "indoorUnitId": "iu-iu-44599",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.8,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183e23mcaa-msh183f25axaa",
      "slug": "franklin-msh183e23mcaa-msh183f25axaa",
      "modelId": "model-franklin-msh183e23mcaa",
      "outdoorUnitId": "ou-franklin-msh183e23mcaa",
      "indoorUnitId": "iu-msh183f25axaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183f25mcaa-msh183f25axaa",
      "slug": "franklin-msh183f25mcaa-msh183f25axaa",
      "modelId": "model-franklin-msh183f25mcaa",
      "outdoorUnitId": "ou-franklin-msh183f25mcaa",
      "indoorUnitId": "iu-msh183f25axaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh243f25mcaa-msh243f25axaa",
      "slug": "franklin-msh243f25mcaa-msh243f25axaa",
      "modelId": "model-franklin-msh243f25mcaa",
      "outdoorUnitId": "ou-franklin-msh243f25mcaa",
      "indoorUnitId": "iu-msh243f25axaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh093e23mcaa-mst093e20acaa",
      "slug": "franklin-msh093e23mcaa-mst093e20acaa",
      "modelId": "model-franklin-msh093e23mcaa",
      "outdoorUnitId": "ou-franklin-msh093e23mcaa",
      "indoorUnitId": "iu-mst093e20acaa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.5,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh093e23mcaa-mst093e21adaa",
      "slug": "franklin-msh093e23mcaa-mst093e21adaa",
      "modelId": "model-franklin-msh093e23mcaa",
      "outdoorUnitId": "ou-franklin-msh093e23mcaa",
      "indoorUnitId": "iu-mst093e21adaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh303f25mcaa-msh303f25axaa",
      "slug": "franklin-msh303f25mcaa-msh303f25axaa",
      "modelId": "model-franklin-msh303f25mcaa",
      "outdoorUnitId": "ou-franklin-msh303f25mcaa",
      "indoorUnitId": "iu-msh303f25axaa",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.1,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183e23mcaa-mst183e20acaa",
      "slug": "franklin-msh183e23mcaa-mst183e20acaa",
      "modelId": "model-franklin-msh183e23mcaa",
      "outdoorUnitId": "ou-franklin-msh183e23mcaa",
      "indoorUnitId": "iu-mst183e20acaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183f25mcaa-mst183e20acaa",
      "slug": "franklin-msh183f25mcaa-mst183e20acaa",
      "modelId": "model-franklin-msh183f25mcaa",
      "outdoorUnitId": "ou-franklin-msh183f25mcaa",
      "indoorUnitId": "iu-mst183e20acaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123e23mcaa-mst123e21adaa",
      "slug": "franklin-msh123e23mcaa-mst123e21adaa",
      "modelId": "model-franklin-msh123e23mcaa",
      "outdoorUnitId": "ou-franklin-msh123e23mcaa",
      "indoorUnitId": "iu-mst123e21adaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh123f25mcaa-mst123e21adaa",
      "slug": "franklin-msh123f25mcaa-mst123e21adaa",
      "modelId": "model-franklin-msh123f25mcaa",
      "outdoorUnitId": "ou-franklin-msh123f25mcaa",
      "indoorUnitId": "iu-mst123e21adaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183e23mcaa-msh183e23axaa",
      "slug": "franklin-msh183e23mcaa-msh183e23axaa",
      "modelId": "model-franklin-msh183e23mcaa",
      "outdoorUnitId": "ou-franklin-msh183e23mcaa",
      "indoorUnitId": "iu-msh183e23axaa",
      "minHeatingTempC": -15,
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183f25mcaa-msh183e23axaa",
      "slug": "franklin-msh183f25mcaa-msh183e23axaa",
      "modelId": "model-franklin-msh183f25mcaa",
      "outdoorUnitId": "ou-franklin-msh183f25mcaa",
      "indoorUnitId": "iu-msh183e23axaa",
      "minHeatingTempC": -15,
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh243f25mcaa-mst243e21adaa",
      "slug": "franklin-msh243f25mcaa-mst243e21adaa",
      "modelId": "model-franklin-msh243f25mcaa",
      "outdoorUnitId": "ou-franklin-msh243f25mcaa",
      "indoorUnitId": "iu-mst243e21adaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh243e23mcaa-mst243e21adaa",
      "slug": "franklin-msh243e23mcaa-mst243e21adaa",
      "modelId": "model-franklin-msh243e23mcaa",
      "outdoorUnitId": "ou-franklin-msh243e23mcaa",
      "indoorUnitId": "iu-mst243e21adaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh243e23mcaa-msh243e23axaa",
      "slug": "franklin-msh243e23mcaa-msh243e23axaa",
      "modelId": "model-franklin-msh243e23mcaa",
      "outdoorUnitId": "ou-franklin-msh243e23mcaa",
      "indoorUnitId": "iu-msh243e23axaa",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.9,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183e23mcaa-mst183e21adaa",
      "slug": "franklin-msh183e23mcaa-mst183e21adaa",
      "modelId": "model-franklin-msh183e23mcaa",
      "outdoorUnitId": "ou-franklin-msh183e23mcaa",
      "indoorUnitId": "iu-mst183e21adaa",
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
          "sourceId": "src-franklin-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-franklin-msh183f25mcaa-mst183e21adaa",
      "slug": "franklin-msh183f25mcaa-mst183e21adaa",
      "modelId": "model-franklin-msh183f25mcaa",
      "outdoorUnitId": "ou-franklin-msh183f25mcaa",
      "indoorUnitId": "iu-mst183e21adaa",
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
          "sourceId": "src-franklin-epa",
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
