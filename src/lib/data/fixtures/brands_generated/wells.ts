import type { BrandDataset } from "../../types";

export const brand_wellsDataset: BrandDataset = {
  "brand": {
    "id": "brand-wells",
    "slug": "wells",
    "name": "Wells",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Wells",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-wells-epa",
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
      "id": "series-wells-wos-series",
      "slug": "wells-wos-series",
      "name": "WOS Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WOS Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wsa-series",
      "slug": "wells-wsa-series",
      "name": "WSA Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WSA Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wma-series-wsa-series",
      "slug": "wells-wma-series-wsa-series",
      "name": "WMA Series | WSA Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série WMA Series | WSA Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wom-series",
      "slug": "wells-wom-series",
      "name": "WOM Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WOM Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wsb-series",
      "slug": "wells-wsb-series",
      "name": "WSB Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WSB Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-vmc-series-wma-series",
      "slug": "wells-vmc-series-wma-series",
      "name": "VMC Series | WMA Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série VMC Series | WMA Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wmm-series",
      "slug": "wells-wmm-series",
      "name": "WMM Series",
      "brandId": "brand-wells",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série WMM Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wdhp-series",
      "slug": "wells-wdhp-series",
      "name": "WDHP Series",
      "brandId": "brand-wells",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WDHP Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-wua-series",
      "slug": "wells-wua-series",
      "name": "WUA Series",
      "brandId": "brand-wells",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série WUA Series de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-wells-rooftop",
      "slug": "wells-rooftop",
      "name": "Rooftop",
      "brandId": "brand-wells",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Rooftop de Wells",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-wells-wos-09pre230",
      "slug": "wells-wos-09pre230",
      "name": "Wells WOS-09PRE/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-09PRE/230",
      "normalizedModelNumber": "wos-09pre/230",
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
      "id": "model-wells-wsa-09hfmo",
      "slug": "wells-wsa-09hfmo",
      "name": "Wells WSA-09HFMO",
      "seriesId": "series-wells-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WSA-09HFMO",
      "normalizedModelNumber": "wsa-09hfmo",
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
      "id": "model-wells-wos-09qua230",
      "slug": "wells-wos-09qua230",
      "name": "Wells WOS-09QUA/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-09QUA/230",
      "normalizedModelNumber": "wos-09qua/230",
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
      "id": "model-wells-wos-06pre230",
      "slug": "wells-wos-06pre230",
      "name": "Wells WOS-06PRE/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-06PRE/230",
      "normalizedModelNumber": "wos-06pre/230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
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
      "id": "model-wells-wos-12pre230",
      "slug": "wells-wos-12pre230",
      "name": "Wells WOS-12PRE/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-12PRE/230",
      "normalizedModelNumber": "wos-12pre/230",
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
      "id": "model-wells-wos-12qua230",
      "slug": "wells-wos-12qua230",
      "name": "Wells WOS-12QUA/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-12QUA/230",
      "normalizedModelNumber": "wos-12qua/230",
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
      "id": "model-wells-wos-09qua115",
      "slug": "wells-wos-09qua115",
      "name": "Wells WOS-09QUA/115",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-09QUA/115",
      "normalizedModelNumber": "wos-09qua/115",
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
      "id": "model-wells-wos-18qua230",
      "slug": "wells-wos-18qua230",
      "name": "Wells WOS-18QUA/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-18QUA/230",
      "normalizedModelNumber": "wos-18qua/230",
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
      "id": "model-wells-wos-24qua230",
      "slug": "wells-wos-24qua230",
      "name": "Wells WOS-24QUA/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-24QUA/230",
      "normalizedModelNumber": "wos-24qua/230",
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
      "id": "model-wells-wmma-27hfmo",
      "slug": "wells-wmma-27hfmo",
      "name": "Wells WMMA-27HFMO",
      "seriesId": "series-wells-wma-series-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WMMA-27HFMO",
      "normalizedModelNumber": "wmma-27hfmo",
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
      "id": "model-wells-wsa-06hfmo",
      "slug": "wells-wsa-06hfmo",
      "name": "Wells WSA-06HFMO",
      "seriesId": "series-wells-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WSA-06HFMO",
      "normalizedModelNumber": "wsa-06hfmo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 6000,
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
      "id": "model-wells-wos-12qua115",
      "slug": "wells-wos-12qua115",
      "name": "Wells WOS-12QUA/115",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-12QUA/115",
      "normalizedModelNumber": "wos-12qua/115",
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
      "id": "model-wells-wom-36rh5230",
      "slug": "wells-wom-36rh5230",
      "name": "Wells WOM-36RH5/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-36RH5/230",
      "normalizedModelNumber": "wom-36rh5/230",
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
      "id": "model-wells-wsa-12hfmo",
      "slug": "wells-wsa-12hfmo",
      "name": "Wells WSA-12HFMO",
      "seriesId": "series-wells-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WSA-12HFMO",
      "normalizedModelNumber": "wsa-12hfmo",
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
      "id": "model-wells-wom-18rh3230",
      "slug": "wells-wom-18rh3230",
      "name": "Wells WOM-18RH3/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-18RH3/230",
      "normalizedModelNumber": "wom-18rh3/230",
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
      "id": "model-wells-wom-27rh4230",
      "slug": "wells-wom-27rh4230",
      "name": "Wells WOM-27RH4/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-27RH4/230",
      "normalizedModelNumber": "wom-27rh4/230",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 26600,
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
      "id": "model-wells-wsa-24hfmo",
      "slug": "wells-wsa-24hfmo",
      "name": "Wells WSA-24HFMO",
      "seriesId": "series-wells-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WSA-24HFMO",
      "normalizedModelNumber": "wsa-24hfmo",
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
      "id": "model-wells-wos-24pre230",
      "slug": "wells-wos-24pre230",
      "name": "Wells WOS-24PRE/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-24PRE/230",
      "normalizedModelNumber": "wos-24pre/230",
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
      "id": "model-wells-wsa-18hfmo",
      "slug": "wells-wsa-18hfmo",
      "name": "Wells WSA-18HFMO",
      "seriesId": "series-wells-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WSA-18HFMO",
      "normalizedModelNumber": "wsa-18hfmo",
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
      "id": "model-wells-wos-18pre230",
      "slug": "wells-wos-18pre230",
      "name": "Wells WOS-18PRE/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-18PRE/230",
      "normalizedModelNumber": "wos-18pre/230",
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
      "id": "model-wells-wsb-09hfmo",
      "slug": "wells-wsb-09hfmo",
      "name": "Wells WSB-09HFMO",
      "seriesId": "series-wells-wsb-series",
      "brandId": "brand-wells",
      "modelNumber": "WSB-09HFMO",
      "normalizedModelNumber": "wsb-09hfmo",
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
      "id": "model-wells-wom-36hh5230",
      "slug": "wells-wom-36hh5230",
      "name": "Wells WOM-36HH5/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-36HH5/230",
      "normalizedModelNumber": "wom-36hh5/230",
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
      "id": "model-wells-wsb-09hfbo",
      "slug": "wells-wsb-09hfbo",
      "name": "Wells WSB-09HFBO",
      "seriesId": "series-wells-wsb-series",
      "brandId": "brand-wells",
      "modelNumber": "WSB-09HFBO",
      "normalizedModelNumber": "wsb-09hfbo",
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
      "id": "model-wells-wom-60hh6230",
      "slug": "wells-wom-60hh6230",
      "name": "Wells WOM-60HH6/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-60HH6/230",
      "normalizedModelNumber": "wom-60hh6/230",
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
      "id": "model-wells-wom-48rh6230",
      "slug": "wells-wom-48rh6230",
      "name": "Wells WOM-48RH6/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-48RH6/230",
      "normalizedModelNumber": "wom-48rh6/230",
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
      "id": "model-wells-wmca-48hfmo",
      "slug": "wells-wmca-48hfmo",
      "name": "Wells WMCA-48HFMO",
      "seriesId": "series-wells-vmc-series-wma-series",
      "brandId": "brand-wells",
      "modelNumber": "WMCA-48HFMO",
      "normalizedModelNumber": "wmca-48hfmo",
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
      "id": "model-wells-wom-48hh6230",
      "slug": "wells-wom-48hh6230",
      "name": "Wells WOM-48HH6/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-48HH6/230",
      "normalizedModelNumber": "wom-48hh6/230",
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
      "id": "model-wells-wmma-48hfmo",
      "slug": "wells-wmma-48hfmo",
      "name": "Wells WMMA-48HFMO",
      "seriesId": "series-wells-wmm-series",
      "brandId": "brand-wells",
      "modelNumber": "WMMA-48HFMO",
      "normalizedModelNumber": "wmma-48hfmo",
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
      "id": "model-wells-wmca-36hfmo",
      "slug": "wells-wmca-36hfmo",
      "name": "Wells WMCA-36HFMO",
      "seriesId": "series-wells-wma-series-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WMCA-36HFMO",
      "normalizedModelNumber": "wmca-36hfmo",
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
      "id": "model-wells-wsb-30hfmo",
      "slug": "wells-wsb-30hfmo",
      "name": "Wells WSB-30HFMO",
      "seriesId": "series-wells-wsb-series",
      "brandId": "brand-wells",
      "modelNumber": "WSB-30HFMO",
      "normalizedModelNumber": "wsb-30hfmo",
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
      "id": "model-wells-wmma-18hfmo",
      "slug": "wells-wmma-18hfmo",
      "name": "Wells WMMA-18HFMO",
      "seriesId": "series-wells-wma-series-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WMMA-18HFMO",
      "normalizedModelNumber": "wmma-18hfmo",
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
      "id": "model-wells-wom-18hh3230",
      "slug": "wells-wom-18hh3230",
      "name": "Wells WOM-18HH3/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-18HH3/230",
      "normalizedModelNumber": "wom-18hh3/230",
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
      "id": "model-wells-wom-27hh4230",
      "slug": "wells-wom-27hh4230",
      "name": "Wells WOM-27HH4/230",
      "seriesId": "series-wells-wom-series",
      "brandId": "brand-wells",
      "modelNumber": "WOM-27HH4/230",
      "normalizedModelNumber": "wom-27hh4/230",
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
      "id": "model-wells-wmca-18hfmo",
      "slug": "wells-wmca-18hfmo",
      "name": "Wells WMCA-18HFMO",
      "seriesId": "series-wells-wma-series-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WMCA-18HFMO",
      "normalizedModelNumber": "wmca-18hfmo",
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
      "id": "model-wells-wmca-27hfmo",
      "slug": "wells-wmca-27hfmo",
      "name": "Wells WMCA-27HFMO",
      "seriesId": "series-wells-wma-series-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WMCA-27HFMO",
      "normalizedModelNumber": "wmca-27hfmo",
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
      "id": "model-wells-wmca-55hfmo",
      "slug": "wells-wmca-55hfmo",
      "name": "Wells WMCA-55HFMO",
      "seriesId": "series-wells-wma-series-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WMCA-55HFMO",
      "normalizedModelNumber": "wmca-55hfmo",
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
      "id": "model-wells-wsa-33hfmo",
      "slug": "wells-wsa-33hfmo",
      "name": "Wells WSA-33HFMO",
      "seriesId": "series-wells-wsa-series",
      "brandId": "brand-wells",
      "modelNumber": "WSA-33HFMO",
      "normalizedModelNumber": "wsa-33hfmo",
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
      "id": "model-wells-wos-33pre230",
      "slug": "wells-wos-33pre230",
      "name": "Wells WOS-33PRE/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-33PRE/230",
      "normalizedModelNumber": "wos-33pre/230",
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
      "id": "model-wells-wmma-36hfmo",
      "slug": "wells-wmma-36hfmo",
      "name": "Wells WMMA-36HFMO",
      "seriesId": "series-wells-wmm-series",
      "brandId": "brand-wells",
      "modelNumber": "WMMA-36HFMO",
      "normalizedModelNumber": "wmma-36hfmo",
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
      "id": "model-wells-wsb-18hfmo",
      "slug": "wells-wsb-18hfmo",
      "name": "Wells WSB-18HFMO",
      "seriesId": "series-wells-wsb-series",
      "brandId": "brand-wells",
      "modelNumber": "WSB-18HFMO",
      "normalizedModelNumber": "wsb-18hfmo",
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
      "id": "model-wells-wos-09eco230",
      "slug": "wells-wos-09eco230",
      "name": "Wells WOS-09ECO/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-09ECO/230",
      "normalizedModelNumber": "wos-09eco/230",
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
      "id": "model-wells-wdhp-24hh",
      "slug": "wells-wdhp-24hh",
      "name": "Wells WDHP-24HH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-24HH",
      "normalizedModelNumber": "wdhp-24hh",
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
      "id": "model-wells-wdhp-36hh",
      "slug": "wells-wdhp-36hh",
      "name": "Wells WDHP-36HH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-36HH",
      "normalizedModelNumber": "wdhp-36hh",
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
      "id": "model-wells-wuca-24hfmo",
      "slug": "wells-wuca-24hfmo",
      "name": "Wells WUCA-24HFMO",
      "seriesId": "series-wells-wua-series",
      "brandId": "brand-wells",
      "modelNumber": "WUCA-24HFMO",
      "normalizedModelNumber": "wuca-24hfmo",
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
      "id": "model-wells-wrpa-60hdmtc",
      "slug": "wells-wrpa-60hdmtc",
      "name": "Wells WRPA-60HDM/TC",
      "seriesId": "series-wells-rooftop",
      "brandId": "brand-wells",
      "modelNumber": "WRPA-60HDM/TC",
      "normalizedModelNumber": "wrpa-60hdm/tc",
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
      "id": "model-wells-wos-24eco230",
      "slug": "wells-wos-24eco230",
      "name": "Wells WOS-24ECO/230",
      "seriesId": "series-wells-wos-series",
      "brandId": "brand-wells",
      "modelNumber": "WOS-24ECO/230",
      "normalizedModelNumber": "wos-24eco/230",
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
      "id": "model-wells-wdhp-30hh",
      "slug": "wells-wdhp-30hh",
      "name": "Wells WDHP-30HH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-30HH",
      "normalizedModelNumber": "wdhp-30hh",
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
      "id": "model-wells-wdhp-48hh",
      "slug": "wells-wdhp-48hh",
      "name": "Wells WDHP-48HH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-48HH",
      "normalizedModelNumber": "wdhp-48hh",
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
      "id": "model-wells-wucb-36hfmo",
      "slug": "wells-wucb-36hfmo",
      "name": "Wells WUCB-36HFMO",
      "seriesId": "series-wells-wua-series",
      "brandId": "brand-wells",
      "modelNumber": "WUCB-36HFMO",
      "normalizedModelNumber": "wucb-36hfmo",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35000,
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
      "id": "model-wells-wuca-30hfmo",
      "slug": "wells-wuca-30hfmo",
      "name": "Wells WUCA-30HFMO",
      "seriesId": "series-wells-wua-series",
      "brandId": "brand-wells",
      "modelNumber": "WUCA-30HFMO",
      "normalizedModelNumber": "wuca-30hfmo",
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
      "id": "model-wells-wdhp-36rh",
      "slug": "wells-wdhp-36rh",
      "name": "Wells WDHP-36RH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-36RH",
      "normalizedModelNumber": "wdhp-36rh",
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
      "id": "model-wells-wdhp-60hh",
      "slug": "wells-wdhp-60hh",
      "name": "Wells WDHP-60HH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-60HH",
      "normalizedModelNumber": "wdhp-60hh",
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
      "id": "model-wells-wuca-36hfmo",
      "slug": "wells-wuca-36hfmo",
      "name": "Wells WUCA-36HFMO",
      "seriesId": "series-wells-wua-series",
      "brandId": "brand-wells",
      "modelNumber": "WUCA-36HFMO",
      "normalizedModelNumber": "wuca-36hfmo",
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
      "id": "model-wells-wuca-48hfmo",
      "slug": "wells-wuca-48hfmo",
      "name": "Wells WUCA-48HFMO",
      "seriesId": "series-wells-wua-series",
      "brandId": "brand-wells",
      "modelNumber": "WUCA-48HFMO",
      "normalizedModelNumber": "wuca-48hfmo",
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
      "id": "model-wells-wuca-60hfmo",
      "slug": "wells-wuca-60hfmo",
      "name": "Wells WUCA-60HFMO",
      "seriesId": "series-wells-wua-series",
      "brandId": "brand-wells",
      "modelNumber": "WUCA-60HFMO",
      "normalizedModelNumber": "wuca-60hfmo",
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
      "id": "model-wells-wdhp-60rh",
      "slug": "wells-wdhp-60rh",
      "name": "Wells WDHP-60RH",
      "seriesId": "series-wells-wdhp-series",
      "brandId": "brand-wells",
      "modelNumber": "WDHP-60RH",
      "normalizedModelNumber": "wdhp-60rh",
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
      "id": "ou-wells-wos-09pre230",
      "modelNumber": "WOS-09PRE/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wsa-09hfmo",
      "modelNumber": "WSA-09HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-09qua230",
      "modelNumber": "WOS-09QUA/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wos-06pre230",
      "modelNumber": "WOS-06PRE/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wos-12pre230",
      "modelNumber": "WOS-12PRE/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wos-12qua230",
      "modelNumber": "WOS-12QUA/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wos-09qua115",
      "modelNumber": "WOS-09QUA/115",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wos-18qua230",
      "modelNumber": "WOS-18QUA/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wos-24qua230",
      "modelNumber": "WOS-24QUA/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wmma-27hfmo",
      "modelNumber": "WMMA-27HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wsa-06hfmo",
      "modelNumber": "WSA-06HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-12qua115",
      "modelNumber": "WOS-12QUA/115",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wom-36rh5230",
      "modelNumber": "WOM-36RH5/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wsa-12hfmo",
      "modelNumber": "WSA-12HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wom-18rh3230",
      "modelNumber": "WOM-18RH3/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wom-27rh4230",
      "modelNumber": "WOM-27RH4/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wsa-24hfmo",
      "modelNumber": "WSA-24HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-24pre230",
      "modelNumber": "WOS-24PRE/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wsa-18hfmo",
      "modelNumber": "WSA-18HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-18pre230",
      "modelNumber": "WOS-18PRE/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wsb-09hfmo",
      "modelNumber": "WSB-09HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wom-36hh5230",
      "modelNumber": "WOM-36HH5/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wsb-09hfbo",
      "modelNumber": "WSB-09HFBO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wom-60hh6230",
      "modelNumber": "WOM-60HH6/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wom-48rh6230",
      "modelNumber": "WOM-48RH6/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wmca-48hfmo",
      "modelNumber": "WMCA-48HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wom-48hh6230",
      "modelNumber": "WOM-48HH6/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wmma-48hfmo",
      "modelNumber": "WMMA-48HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wmca-36hfmo",
      "modelNumber": "WMCA-36HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wsb-30hfmo",
      "modelNumber": "WSB-30HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wmma-18hfmo",
      "modelNumber": "WMMA-18HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wom-18hh3230",
      "modelNumber": "WOM-18HH3/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wom-27hh4230",
      "modelNumber": "WOM-27HH4/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wmca-18hfmo",
      "modelNumber": "WMCA-18HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wmca-27hfmo",
      "modelNumber": "WMCA-27HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wmca-55hfmo",
      "modelNumber": "WMCA-55HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wsa-33hfmo",
      "modelNumber": "WSA-33HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-33pre230",
      "modelNumber": "WOS-33PRE/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wmma-36hfmo",
      "modelNumber": "WMMA-36HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wsb-18hfmo",
      "modelNumber": "WSB-18HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-09eco230",
      "modelNumber": "WOS-09ECO/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wdhp-24hh",
      "modelNumber": "WDHP-24HH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wdhp-36hh",
      "modelNumber": "WDHP-36HH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wuca-24hfmo",
      "modelNumber": "WUCA-24HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wrpa-60hdmtc",
      "modelNumber": "WRPA-60HDM/TC",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wos-24eco230",
      "modelNumber": "WOS-24ECO/230",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wdhp-30hh",
      "modelNumber": "WDHP-30HH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wdhp-48hh",
      "modelNumber": "WDHP-48HH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wucb-36hfmo",
      "modelNumber": "WUCB-36HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wuca-30hfmo",
      "modelNumber": "WUCA-30HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wdhp-36rh",
      "modelNumber": "WDHP-36RH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wdhp-60hh",
      "modelNumber": "WDHP-60HH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-wells-wuca-36hfmo",
      "modelNumber": "WUCA-36HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wuca-48hfmo",
      "modelNumber": "WUCA-48HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wuca-60hfmo",
      "modelNumber": "WUCA-60HFMO",
      "brandId": "brand-wells",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-wells-wdhp-60rh",
      "modelNumber": "WDHP-60RH",
      "brandId": "brand-wells",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-wics-09moc230",
      "modelNumber": "WICS-09MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsa-09hfmi",
      "modelNumber": "WSA-09HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-09moc230",
      "modelNumber": "WIHW-09MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-06moc230",
      "modelNumber": "WIHW-06MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wics-12moc230",
      "modelNumber": "WICS-12MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-09qua115",
      "modelNumber": "WIHW-09QUA/115",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-12moc230",
      "modelNumber": "WIHW-12MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi1c-09moc230",
      "modelNumber": "WI1C-09MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-18moc230",
      "modelNumber": "WIHW-18MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wics-16moc230",
      "modelNumber": "WICS-16MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-24moc230",
      "modelNumber": "WIHW-24MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52452",
      "modelNumber": "IU-52452",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsa-06hfmi",
      "modelNumber": "WSA-06HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-12qua115",
      "modelNumber": "WIHW-12QUA/115",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52460",
      "modelNumber": "IU-52460",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsa-12hfmi",
      "modelNumber": "WSA-12HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52456",
      "modelNumber": "IU-52456",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52458",
      "modelNumber": "IU-52458",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi1c-12moc230",
      "modelNumber": "WI1C-12MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi4c-09moc230",
      "modelNumber": "WI4C-09MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wifc-18moc230",
      "modelNumber": "WIFC-18MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsa-24hfmi",
      "modelNumber": "WSA-24HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi1c-18moc230",
      "modelNumber": "WI1C-18MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi4c-12moc230",
      "modelNumber": "WI4C-12MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi1c-06moc230",
      "modelNumber": "WI1C-06MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsa-18hfmi",
      "modelNumber": "WSA-18HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi4c-24moc230",
      "modelNumber": "WI4C-24MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsb-09hfmi",
      "modelNumber": "WSB-09HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52459",
      "modelNumber": "IU-52459",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsb-09hfbi",
      "modelNumber": "WSB-09HFBI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widl-06moc230",
      "modelNumber": "WIDL-06MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widl-09moc230",
      "modelNumber": "WIDL-09MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52463",
      "modelNumber": "IU-52463",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52462",
      "modelNumber": "IU-52462",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52449",
      "modelNumber": "IU-52449",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52461",
      "modelNumber": "IU-52461",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52454",
      "modelNumber": "IU-52454",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wifc-24moc230",
      "modelNumber": "WIFC-24MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52448",
      "modelNumber": "IU-52448",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsb-30hfmi",
      "modelNumber": "WSB-30HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52451",
      "modelNumber": "IU-52451",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52455",
      "modelNumber": "IU-52455",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52457",
      "modelNumber": "IU-52457",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wi4c-18moc230",
      "modelNumber": "WI4C-18MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widh-09moc230",
      "modelNumber": "WIDH-09MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52446",
      "modelNumber": "IU-52446",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52447",
      "modelNumber": "IU-52447",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52450",
      "modelNumber": "IU-52450",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wsa-33hfmi",
      "modelNumber": "WSA-33HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-33moc230",
      "modelNumber": "WIHW-33MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widh-18moc230",
      "modelNumber": "WIDH-18MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52453",
      "modelNumber": "IU-52453",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widl-12moc230",
      "modelNumber": "WIDL-12MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widh-12moc230",
      "modelNumber": "WIDH-12MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widl-18moc230",
      "modelNumber": "WIDL-18MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wiah-24moc230",
      "modelNumber": "WIAH-24MOC/230",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wsb-18hfmi",
      "modelNumber": "WSB-18HFMI",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wihw-09eco230",
      "modelNumber": "WIHW-09ECO/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-widh-24moc230",
      "modelNumber": "WIDH-24MOC/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wiah-18moc230",
      "modelNumber": "WIAH-18MOC/230",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdah-24moc",
      "modelNumber": "WDAH-24MOC",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdah-36moc",
      "modelNumber": "WDAH-36MOC",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-24hfmah",
      "modelNumber": "WUA-24HFMAH",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-iu-38083",
      "modelNumber": "IU-38083",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wihw-24eco230",
      "modelNumber": "WIHW-24ECO/230",
      "brandId": "brand-wells",
      "type": "wall-single"
    },
    {
      "id": "iu-wdah-30moc",
      "modelNumber": "WDAH-30MOC",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdah-48moc",
      "modelNumber": "WDAH-48MOC",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wiah-36moc230",
      "modelNumber": "WIAH-36MOC/230",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-36hfmah",
      "modelNumber": "WUA-36HFMAH",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-30hfmah",
      "modelNumber": "WUA-30HFMAH",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-24ahfm",
      "modelNumber": "WUA-24AHFM",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdah-60moc",
      "modelNumber": "WDAH-60MOC",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdca-3036c",
      "modelNumber": "WDCA-30/36C",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdca-3036b",
      "modelNumber": "WDCA-30/36B",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdca-1824b",
      "modelNumber": "WDCA-18/24B",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdca-1824a",
      "modelNumber": "WDCA-18/24A",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdcm-4860c",
      "modelNumber": "WDCM-48/60C",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-48hfmah",
      "modelNumber": "WUA-48HFMAH",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-36bhfm",
      "modelNumber": "WUA-36BHFM",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-36chfm",
      "modelNumber": "WUA-36CHFM",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdca-3036a",
      "modelNumber": "WDCA-30/36A",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wua-60hfmah",
      "modelNumber": "WUA-60HFMAH",
      "brandId": "brand-wells",
      "type": "central-ducted"
    },
    {
      "id": "iu-wdca-4860d",
      "modelNumber": "WDCA-48/60D",
      "brandId": "brand-wells",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-wells-wos-09pre230-wics-09moc230",
      "slug": "wells-wos-09pre230-wics-09moc230",
      "modelId": "model-wells-wos-09pre230",
      "outdoorUnitId": "ou-wells-wos-09pre230",
      "indoorUnitId": "iu-wics-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 27.2,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsa-09hfmo-wsa-09hfmi",
      "slug": "wells-wsa-09hfmo-wsa-09hfmi",
      "modelId": "model-wells-wsa-09hfmo",
      "outdoorUnitId": "ou-wells-wsa-09hfmo",
      "indoorUnitId": "iu-wsa-09hfmi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.4,
      "hspf2": 11.6,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09pre230-wihw-09moc230",
      "slug": "wells-wos-09pre230-wihw-09moc230",
      "modelId": "model-wells-wos-09pre230",
      "outdoorUnitId": "ou-wells-wos-09pre230",
      "indoorUnitId": "iu-wihw-09moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua230-wics-09moc230",
      "slug": "wells-wos-09qua230-wics-09moc230",
      "modelId": "model-wells-wos-09qua230",
      "outdoorUnitId": "ou-wells-wos-09qua230",
      "indoorUnitId": "iu-wics-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 26.0,
      "hspf2": 13.9,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-06pre230-wihw-06moc230",
      "slug": "wells-wos-06pre230-wihw-06moc230",
      "modelId": "model-wells-wos-06pre230",
      "outdoorUnitId": "ou-wells-wos-06pre230",
      "indoorUnitId": "iu-wihw-06moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 25.3,
      "hspf2": 14.6,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12pre230-wics-12moc230",
      "slug": "wells-wos-12pre230-wics-12moc230",
      "modelId": "model-wells-wos-12pre230",
      "outdoorUnitId": "ou-wells-wos-12pre230",
      "indoorUnitId": "iu-wics-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua230-wihw-09moc230",
      "slug": "wells-wos-09qua230-wihw-09moc230",
      "modelId": "model-wells-wos-09qua230",
      "outdoorUnitId": "ou-wells-wos-09qua230",
      "indoorUnitId": "iu-wihw-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 13.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua230-wics-12moc230",
      "slug": "wells-wos-12qua230-wics-12moc230",
      "modelId": "model-wells-wos-12qua230",
      "outdoorUnitId": "ou-wells-wos-12qua230",
      "indoorUnitId": "iu-wics-12moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.6,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua115-wihw-09qua115",
      "slug": "wells-wos-09qua115-wihw-09qua115",
      "modelId": "model-wells-wos-09qua115",
      "outdoorUnitId": "ou-wells-wos-09qua115",
      "indoorUnitId": "iu-wihw-09qua115",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 24.5,
      "hspf2": 10.7,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12pre230-wihw-12moc230",
      "slug": "wells-wos-12pre230-wihw-12moc230",
      "modelId": "model-wells-wos-12pre230",
      "outdoorUnitId": "ou-wells-wos-12pre230",
      "indoorUnitId": "iu-wihw-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09pre230-wi1c-09moc230",
      "slug": "wells-wos-09pre230-wi1c-09moc230",
      "modelId": "model-wells-wos-09pre230",
      "outdoorUnitId": "ou-wells-wos-09pre230",
      "indoorUnitId": "iu-wi1c-09moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-wihw-18moc230",
      "slug": "wells-wos-18qua230-wihw-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-wihw-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-wics-16moc230",
      "slug": "wells-wos-18qua230-wics-16moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-wics-16moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24qua230-wihw-24moc230",
      "slug": "wells-wos-24qua230-wihw-24moc230",
      "modelId": "model-wells-wos-24qua230",
      "outdoorUnitId": "ou-wells-wos-24qua230",
      "indoorUnitId": "iu-wihw-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmma-27hfmo-iu-52452",
      "slug": "wells-wmma-27hfmo-iu-52452",
      "modelId": "model-wells-wmma-27hfmo",
      "outdoorUnitId": "ou-wells-wmma-27hfmo",
      "indoorUnitId": "iu-iu-52452",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsa-06hfmo-wsa-06hfmi",
      "slug": "wells-wsa-06hfmo-wsa-06hfmi",
      "modelId": "model-wells-wsa-06hfmo",
      "outdoorUnitId": "ou-wells-wsa-06hfmo",
      "indoorUnitId": "iu-wsa-06hfmi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.5,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua115-wihw-12qua115",
      "slug": "wells-wos-12qua115-wihw-12qua115",
      "modelId": "model-wells-wos-12qua115",
      "outdoorUnitId": "ou-wells-wos-12qua115",
      "indoorUnitId": "iu-wihw-12qua115",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.2,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-36rh5230-iu-52460",
      "slug": "wells-wom-36rh5230-iu-52460",
      "modelId": "model-wells-wom-36rh5230",
      "outdoorUnitId": "ou-wells-wom-36rh5230",
      "indoorUnitId": "iu-iu-52460",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua230-wihw-12moc230",
      "slug": "wells-wos-12qua230-wihw-12moc230",
      "modelId": "model-wells-wos-12qua230",
      "outdoorUnitId": "ou-wells-wos-12qua230",
      "indoorUnitId": "iu-wihw-12moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsa-12hfmo-wsa-12hfmi",
      "slug": "wells-wsa-12hfmo-wsa-12hfmi",
      "modelId": "model-wells-wsa-12hfmo",
      "outdoorUnitId": "ou-wells-wsa-12hfmo",
      "indoorUnitId": "iu-wsa-12hfmi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 23.1,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-18rh3230-iu-52456",
      "slug": "wells-wom-18rh3230-iu-52456",
      "modelId": "model-wells-wom-18rh3230",
      "outdoorUnitId": "ou-wells-wom-18rh3230",
      "indoorUnitId": "iu-iu-52456",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-27rh4230-iu-52458",
      "slug": "wells-wom-27rh4230-iu-52458",
      "modelId": "model-wells-wom-27rh4230",
      "outdoorUnitId": "ou-wells-wom-27rh4230",
      "indoorUnitId": "iu-iu-52458",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12pre230-wi1c-12moc230",
      "slug": "wells-wos-12pre230-wi1c-12moc230",
      "modelId": "model-wells-wos-12pre230",
      "outdoorUnitId": "ou-wells-wos-12pre230",
      "indoorUnitId": "iu-wi1c-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09pre230-wi4c-09moc230",
      "slug": "wells-wos-09pre230-wi4c-09moc230",
      "modelId": "model-wells-wos-09pre230",
      "outdoorUnitId": "ou-wells-wos-09pre230",
      "indoorUnitId": "iu-wi4c-09moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-wifc-18moc230",
      "slug": "wells-wos-18qua230-wifc-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-wifc-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsa-24hfmo-wsa-24hfmi",
      "slug": "wells-wsa-24hfmo-wsa-24hfmi",
      "modelId": "model-wells-wsa-24hfmo",
      "outdoorUnitId": "ou-wells-wsa-24hfmo",
      "indoorUnitId": "iu-wsa-24hfmi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.3,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24pre230-wihw-24moc230",
      "slug": "wells-wos-24pre230-wihw-24moc230",
      "modelId": "model-wells-wos-24pre230",
      "outdoorUnitId": "ou-wells-wos-24pre230",
      "indoorUnitId": "iu-wihw-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-wi1c-18moc230",
      "slug": "wells-wos-18qua230-wi1c-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-wi1c-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12pre230-wi4c-12moc230",
      "slug": "wells-wos-12pre230-wi4c-12moc230",
      "modelId": "model-wells-wos-12pre230",
      "outdoorUnitId": "ou-wells-wos-12pre230",
      "indoorUnitId": "iu-wi4c-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua230-wi1c-09moc230",
      "slug": "wells-wos-09qua230-wi1c-09moc230",
      "modelId": "model-wells-wos-09qua230",
      "outdoorUnitId": "ou-wells-wos-09qua230",
      "indoorUnitId": "iu-wi1c-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 11.8,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua230-wi1c-12moc230",
      "slug": "wells-wos-12qua230-wi1c-12moc230",
      "modelId": "model-wells-wos-12qua230",
      "outdoorUnitId": "ou-wells-wos-12qua230",
      "indoorUnitId": "iu-wi1c-12moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.1,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-06pre230-wi1c-06moc230",
      "slug": "wells-wos-06pre230-wi1c-06moc230",
      "modelId": "model-wells-wos-06pre230",
      "outdoorUnitId": "ou-wells-wos-06pre230",
      "indoorUnitId": "iu-wi1c-06moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 12.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsa-18hfmo-wsa-18hfmi",
      "slug": "wells-wsa-18hfmo-wsa-18hfmi",
      "modelId": "model-wells-wsa-18hfmo",
      "outdoorUnitId": "ou-wells-wsa-18hfmo",
      "indoorUnitId": "iu-wsa-18hfmi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 10.6,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24qua230-wi4c-24moc230",
      "slug": "wells-wos-24qua230-wi4c-24moc230",
      "modelId": "model-wells-wos-24qua230",
      "outdoorUnitId": "ou-wells-wos-24qua230",
      "indoorUnitId": "iu-wi4c-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-wihw-18moc230",
      "slug": "wells-wos-18pre230-wihw-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-wihw-18moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 10.8,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsb-09hfmo-wsb-09hfmi",
      "slug": "wells-wsb-09hfmo-wsb-09hfmi",
      "modelId": "model-wells-wsb-09hfmo",
      "outdoorUnitId": "ou-wells-wsb-09hfmo",
      "indoorUnitId": "iu-wsb-09hfmi",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.7,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua230-wi4c-09moc230",
      "slug": "wells-wos-09qua230-wi4c-09moc230",
      "modelId": "model-wells-wos-09qua230",
      "outdoorUnitId": "ou-wells-wos-09qua230",
      "indoorUnitId": "iu-wi4c-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.6,
      "hspf2": 11.3,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-36hh5230-iu-52459",
      "slug": "wells-wom-36hh5230-iu-52459",
      "modelId": "model-wells-wom-36hh5230",
      "outdoorUnitId": "ou-wells-wom-36hh5230",
      "indoorUnitId": "iu-iu-52459",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsb-09hfbo-wsb-09hfbi",
      "slug": "wells-wsb-09hfbo-wsb-09hfbi",
      "modelId": "model-wells-wsb-09hfbo",
      "outdoorUnitId": "ou-wells-wsb-09hfbo",
      "indoorUnitId": "iu-wsb-09hfbi",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-06pre230-widl-06moc230",
      "slug": "wells-wos-06pre230-widl-06moc230",
      "modelId": "model-wells-wos-06pre230",
      "outdoorUnitId": "ou-wells-wos-06pre230",
      "indoorUnitId": "iu-widl-06moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.4,
      "hspf2": 13.8,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09pre230-widl-09moc230",
      "slug": "wells-wos-09pre230-widl-09moc230",
      "modelId": "model-wells-wos-09pre230",
      "outdoorUnitId": "ou-wells-wos-09pre230",
      "indoorUnitId": "iu-widl-09moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-60hh6230-iu-52463",
      "slug": "wells-wom-60hh6230-iu-52463",
      "modelId": "model-wells-wom-60hh6230",
      "outdoorUnitId": "ou-wells-wom-60hh6230",
      "indoorUnitId": "iu-iu-52463",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-48rh6230-iu-52462",
      "slug": "wells-wom-48rh6230-iu-52462",
      "modelId": "model-wells-wom-48rh6230",
      "outdoorUnitId": "ou-wells-wom-48rh6230",
      "indoorUnitId": "iu-iu-52462",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmca-48hfmo-iu-52449",
      "slug": "wells-wmca-48hfmo-iu-52449",
      "modelId": "model-wells-wmca-48hfmo",
      "outdoorUnitId": "ou-wells-wmca-48hfmo",
      "indoorUnitId": "iu-iu-52449",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-48hh6230-iu-52461",
      "slug": "wells-wom-48hh6230-iu-52461",
      "modelId": "model-wells-wom-48hh6230",
      "outdoorUnitId": "ou-wells-wom-48hh6230",
      "indoorUnitId": "iu-iu-52461",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmma-48hfmo-iu-52454",
      "slug": "wells-wmma-48hfmo-iu-52454",
      "modelId": "model-wells-wmma-48hfmo",
      "outdoorUnitId": "ou-wells-wmma-48hfmo",
      "indoorUnitId": "iu-iu-52454",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24qua230-wifc-24moc230",
      "slug": "wells-wos-24qua230-wifc-24moc230",
      "modelId": "model-wells-wos-24qua230",
      "outdoorUnitId": "ou-wells-wos-24qua230",
      "indoorUnitId": "iu-wifc-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua230-wi4c-12moc230",
      "slug": "wells-wos-12qua230-wi4c-12moc230",
      "modelId": "model-wells-wos-12qua230",
      "outdoorUnitId": "ou-wells-wos-12qua230",
      "indoorUnitId": "iu-wi4c-12moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.1,
      "hspf2": 10.4,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmca-36hfmo-iu-52448",
      "slug": "wells-wmca-36hfmo-iu-52448",
      "modelId": "model-wells-wmca-36hfmo",
      "outdoorUnitId": "ou-wells-wmca-36hfmo",
      "indoorUnitId": "iu-iu-52448",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 10.9,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsb-30hfmo-wsb-30hfmi",
      "slug": "wells-wsb-30hfmo-wsb-30hfmi",
      "modelId": "model-wells-wsb-30hfmo",
      "outdoorUnitId": "ou-wells-wsb-30hfmo",
      "indoorUnitId": "iu-wsb-30hfmi",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 21.0,
      "hspf2": 9.1,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmma-18hfmo-iu-52451",
      "slug": "wells-wmma-18hfmo-iu-52451",
      "modelId": "model-wells-wmma-18hfmo",
      "outdoorUnitId": "ou-wells-wmma-18hfmo",
      "indoorUnitId": "iu-iu-52451",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-18hh3230-iu-52455",
      "slug": "wells-wom-18hh3230-iu-52455",
      "modelId": "model-wells-wom-18hh3230",
      "outdoorUnitId": "ou-wells-wom-18hh3230",
      "indoorUnitId": "iu-iu-52455",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wom-27hh4230-iu-52457",
      "slug": "wells-wom-27hh4230-iu-52457",
      "modelId": "model-wells-wom-27hh4230",
      "outdoorUnitId": "ou-wells-wom-27hh4230",
      "indoorUnitId": "iu-iu-52457",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24pre230-wi4c-24moc230",
      "slug": "wells-wos-24pre230-wi4c-24moc230",
      "modelId": "model-wells-wos-24pre230",
      "outdoorUnitId": "ou-wells-wos-24pre230",
      "indoorUnitId": "iu-wi4c-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-wi4c-18moc230",
      "slug": "wells-wos-18qua230-wi4c-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-wi4c-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-wi1c-18moc230",
      "slug": "wells-wos-18pre230-wi1c-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-wi1c-18moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.6,
      "hspf2": 12.2,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09pre230-widh-09moc230",
      "slug": "wells-wos-09pre230-widh-09moc230",
      "modelId": "model-wells-wos-09pre230",
      "outdoorUnitId": "ou-wells-wos-09pre230",
      "indoorUnitId": "iu-widh-09moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmca-18hfmo-iu-52446",
      "slug": "wells-wmca-18hfmo-iu-52446",
      "modelId": "model-wells-wmca-18hfmo",
      "outdoorUnitId": "ou-wells-wmca-18hfmo",
      "indoorUnitId": "iu-iu-52446",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmca-27hfmo-iu-52447",
      "slug": "wells-wmca-27hfmo-iu-52447",
      "modelId": "model-wells-wmca-27hfmo",
      "outdoorUnitId": "ou-wells-wmca-27hfmo",
      "indoorUnitId": "iu-iu-52447",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-wifc-18moc230",
      "slug": "wells-wos-18pre230-wifc-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-wifc-18moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.4,
      "hspf2": 10.3,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24pre230-wifc-24moc230",
      "slug": "wells-wos-24pre230-wifc-24moc230",
      "modelId": "model-wells-wos-24pre230",
      "outdoorUnitId": "ou-wells-wos-24pre230",
      "indoorUnitId": "iu-wifc-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmca-55hfmo-iu-52450",
      "slug": "wells-wmca-55hfmo-iu-52450",
      "modelId": "model-wells-wmca-55hfmo",
      "outdoorUnitId": "ou-wells-wmca-55hfmo",
      "indoorUnitId": "iu-iu-52450",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsa-33hfmo-wsa-33hfmi",
      "slug": "wells-wsa-33hfmo-wsa-33hfmi",
      "modelId": "model-wells-wsa-33hfmo",
      "outdoorUnitId": "ou-wells-wsa-33hfmo",
      "indoorUnitId": "iu-wsa-33hfmi",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-33pre230-wihw-33moc230",
      "slug": "wells-wos-33pre230-wihw-33moc230",
      "modelId": "model-wells-wos-33pre230",
      "outdoorUnitId": "ou-wells-wos-33pre230",
      "indoorUnitId": "iu-wihw-33moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-widh-18moc230",
      "slug": "wells-wos-18qua230-widh-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-widh-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-wics-16moc230",
      "slug": "wells-wos-18pre230-wics-16moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-wics-16moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wmma-36hfmo-iu-52453",
      "slug": "wells-wmma-36hfmo-iu-52453",
      "modelId": "model-wells-wmma-36hfmo",
      "outdoorUnitId": "ou-wells-wmma-36hfmo",
      "indoorUnitId": "iu-iu-52453",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12pre230-widl-12moc230",
      "slug": "wells-wos-12pre230-widl-12moc230",
      "modelId": "model-wells-wos-12pre230",
      "outdoorUnitId": "ou-wells-wos-12pre230",
      "indoorUnitId": "iu-widl-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-wi4c-18moc230",
      "slug": "wells-wos-18pre230-wi4c-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-wi4c-18moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 12.3,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12pre230-widh-12moc230",
      "slug": "wells-wos-12pre230-widh-12moc230",
      "modelId": "model-wells-wos-12pre230",
      "outdoorUnitId": "ou-wells-wos-12pre230",
      "indoorUnitId": "iu-widh-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-widl-18moc230",
      "slug": "wells-wos-18qua230-widl-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-widl-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua230-widh-09moc230",
      "slug": "wells-wos-09qua230-widh-09moc230",
      "modelId": "model-wells-wos-09qua230",
      "outdoorUnitId": "ou-wells-wos-09qua230",
      "indoorUnitId": "iu-widh-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.7,
      "hspf2": 11.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24qua230-wiah-24moc230",
      "slug": "wells-wos-24qua230-wiah-24moc230",
      "modelId": "model-wells-wos-24qua230",
      "outdoorUnitId": "ou-wells-wos-24qua230",
      "indoorUnitId": "iu-wiah-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09qua230-widl-09moc230",
      "slug": "wells-wos-09qua230-widl-09moc230",
      "modelId": "model-wells-wos-09qua230",
      "outdoorUnitId": "ou-wells-wos-09qua230",
      "indoorUnitId": "iu-widl-09moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.5,
      "hspf2": 11.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wsb-18hfmo-wsb-18hfmi",
      "slug": "wells-wsb-18hfmo-wsb-18hfmi",
      "modelId": "model-wells-wsb-18hfmo",
      "outdoorUnitId": "ou-wells-wsb-18hfmo",
      "indoorUnitId": "iu-wsb-18hfmi",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua230-widh-12moc230",
      "slug": "wells-wos-12qua230-widh-12moc230",
      "modelId": "model-wells-wos-12qua230",
      "outdoorUnitId": "ou-wells-wos-12qua230",
      "indoorUnitId": "iu-widh-12moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-12qua230-widl-12moc230",
      "slug": "wells-wos-12qua230-widl-12moc230",
      "modelId": "model-wells-wos-12qua230",
      "outdoorUnitId": "ou-wells-wos-12qua230",
      "indoorUnitId": "iu-widl-12moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 10.2,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-09eco230-wihw-09eco230",
      "slug": "wells-wos-09eco230-wihw-09eco230",
      "modelId": "model-wells-wos-09eco230",
      "outdoorUnitId": "ou-wells-wos-09eco230",
      "indoorUnitId": "iu-wihw-09eco230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24qua230-widh-24moc230",
      "slug": "wells-wos-24qua230-widh-24moc230",
      "modelId": "model-wells-wos-24qua230",
      "outdoorUnitId": "ou-wells-wos-24qua230",
      "indoorUnitId": "iu-widh-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24pre230-widh-24moc230",
      "slug": "wells-wos-24pre230-widh-24moc230",
      "modelId": "model-wells-wos-24pre230",
      "outdoorUnitId": "ou-wells-wos-24pre230",
      "indoorUnitId": "iu-widh-24moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24pre230-wiah-24moc230",
      "slug": "wells-wos-24pre230-wiah-24moc230",
      "modelId": "model-wells-wos-24pre230",
      "outdoorUnitId": "ou-wells-wos-24pre230",
      "indoorUnitId": "iu-wiah-24moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.7,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18qua230-wiah-18moc230",
      "slug": "wells-wos-18qua230-wiah-18moc230",
      "modelId": "model-wells-wos-18qua230",
      "outdoorUnitId": "ou-wells-wos-18qua230",
      "indoorUnitId": "iu-wiah-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-widh-18moc230",
      "slug": "wells-wos-18pre230-widh-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-widh-18moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.4,
      "hspf2": 11.1,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-24hh-wdah-24moc",
      "slug": "wells-wdhp-24hh-wdah-24moc",
      "modelId": "model-wells-wdhp-24hh",
      "outdoorUnitId": "ou-wells-wdhp-24hh",
      "indoorUnitId": "iu-wdah-24moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-widl-18moc230",
      "slug": "wells-wos-18pre230-widl-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-widl-18moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 18.0,
      "hspf2": 10.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-18pre230-wiah-18moc230",
      "slug": "wells-wos-18pre230-wiah-18moc230",
      "modelId": "model-wells-wos-18pre230",
      "outdoorUnitId": "ou-wells-wos-18pre230",
      "indoorUnitId": "iu-wiah-18moc230",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-36hh-wdah-36moc",
      "slug": "wells-wdhp-36hh-wdah-36moc",
      "modelId": "model-wells-wdhp-36hh",
      "outdoorUnitId": "ou-wells-wdhp-36hh",
      "indoorUnitId": "iu-wdah-36moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-24hfmo-wua-24hfmah",
      "slug": "wells-wuca-24hfmo-wua-24hfmah",
      "modelId": "model-wells-wuca-24hfmo",
      "outdoorUnitId": "ou-wells-wuca-24hfmo",
      "indoorUnitId": "iu-wua-24hfmah",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wrpa-60hdmtc-iu-38083",
      "slug": "wells-wrpa-60hdmtc-iu-38083",
      "modelId": "model-wells-wrpa-60hdmtc",
      "outdoorUnitId": "ou-wells-wrpa-60hdmtc",
      "indoorUnitId": "iu-iu-38083",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 17.0,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-24eco230-wihw-24eco230",
      "slug": "wells-wos-24eco230-wihw-24eco230",
      "modelId": "model-wells-wos-24eco230",
      "outdoorUnitId": "ou-wells-wos-24eco230",
      "indoorUnitId": "iu-wihw-24eco230",
      "minHeatingTempC": -25,
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-30hh-wdah-30moc",
      "slug": "wells-wdhp-30hh-wdah-30moc",
      "modelId": "model-wells-wdhp-30hh",
      "outdoorUnitId": "ou-wells-wdhp-30hh",
      "indoorUnitId": "iu-wdah-30moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-48hh-wdah-48moc",
      "slug": "wells-wdhp-48hh-wdah-48moc",
      "modelId": "model-wells-wdhp-48hh",
      "outdoorUnitId": "ou-wells-wdhp-48hh",
      "indoorUnitId": "iu-wdah-48moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wos-33pre230-wiah-36moc230",
      "slug": "wells-wos-33pre230-wiah-36moc230",
      "modelId": "model-wells-wos-33pre230",
      "outdoorUnitId": "ou-wells-wos-33pre230",
      "indoorUnitId": "iu-wiah-36moc230",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wucb-36hfmo-wua-36hfmah",
      "slug": "wells-wucb-36hfmo-wua-36hfmah",
      "modelId": "model-wells-wucb-36hfmo",
      "outdoorUnitId": "ou-wells-wucb-36hfmo",
      "indoorUnitId": "iu-wua-36hfmah",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-30hfmo-wua-30hfmah",
      "slug": "wells-wuca-30hfmo-wua-30hfmah",
      "modelId": "model-wells-wuca-30hfmo",
      "outdoorUnitId": "ou-wells-wuca-30hfmo",
      "indoorUnitId": "iu-wua-30hfmah",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-36rh-wdah-36moc",
      "slug": "wells-wdhp-36rh-wdah-36moc",
      "modelId": "model-wells-wdhp-36rh",
      "outdoorUnitId": "ou-wells-wdhp-36rh",
      "indoorUnitId": "iu-wdah-36moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-24hfmo-wua-24ahfm",
      "slug": "wells-wuca-24hfmo-wua-24ahfm",
      "modelId": "model-wells-wuca-24hfmo",
      "outdoorUnitId": "ou-wells-wuca-24hfmo",
      "indoorUnitId": "iu-wua-24ahfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.1,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-60hh-wdah-60moc",
      "slug": "wells-wdhp-60hh-wdah-60moc",
      "modelId": "model-wells-wdhp-60hh",
      "outdoorUnitId": "ou-wells-wdhp-60hh",
      "indoorUnitId": "iu-wdah-60moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-30hh-wdca-3036c",
      "slug": "wells-wdhp-30hh-wdca-3036c",
      "modelId": "model-wells-wdhp-30hh",
      "outdoorUnitId": "ou-wells-wdhp-30hh",
      "indoorUnitId": "iu-wdca-3036c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-30hh-wdca-3036b",
      "slug": "wells-wdhp-30hh-wdca-3036b",
      "modelId": "model-wells-wdhp-30hh",
      "outdoorUnitId": "ou-wells-wdhp-30hh",
      "indoorUnitId": "iu-wdca-3036b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 9.6,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-24hh-wdca-1824b",
      "slug": "wells-wdhp-24hh-wdca-1824b",
      "modelId": "model-wells-wdhp-24hh",
      "outdoorUnitId": "ou-wells-wdhp-24hh",
      "indoorUnitId": "iu-wdca-1824b",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-24hh-wdca-1824a",
      "slug": "wells-wdhp-24hh-wdca-1824a",
      "modelId": "model-wells-wdhp-24hh",
      "outdoorUnitId": "ou-wells-wdhp-24hh",
      "indoorUnitId": "iu-wdca-1824a",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-36hfmo-wua-36hfmah",
      "slug": "wells-wuca-36hfmo-wua-36hfmah",
      "modelId": "model-wells-wuca-36hfmo",
      "outdoorUnitId": "ou-wells-wuca-36hfmo",
      "indoorUnitId": "iu-wua-36hfmah",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-60hh-wdcm-4860c",
      "slug": "wells-wdhp-60hh-wdcm-4860c",
      "modelId": "model-wells-wdhp-60hh",
      "outdoorUnitId": "ou-wells-wdhp-60hh",
      "indoorUnitId": "iu-wdcm-4860c",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-36hh-wdca-3036c",
      "slug": "wells-wdhp-36hh-wdca-3036c",
      "modelId": "model-wells-wdhp-36hh",
      "outdoorUnitId": "ou-wells-wdhp-36hh",
      "indoorUnitId": "iu-wdca-3036c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-36hh-wdca-3036b",
      "slug": "wells-wdhp-36hh-wdca-3036b",
      "modelId": "model-wells-wdhp-36hh",
      "outdoorUnitId": "ou-wells-wdhp-36hh",
      "indoorUnitId": "iu-wdca-3036b",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.8,
      "hspf2": 9.4,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-48hfmo-wua-48hfmah",
      "slug": "wells-wuca-48hfmo-wua-48hfmah",
      "modelId": "model-wells-wuca-48hfmo",
      "outdoorUnitId": "ou-wells-wuca-48hfmo",
      "indoorUnitId": "iu-wua-48hfmah",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-36hfmo-wua-36bhfm",
      "slug": "wells-wuca-36hfmo-wua-36bhfm",
      "modelId": "model-wells-wuca-36hfmo",
      "outdoorUnitId": "ou-wells-wuca-36hfmo",
      "indoorUnitId": "iu-wua-36bhfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 8.6,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-30hfmo-wua-36chfm",
      "slug": "wells-wuca-30hfmo-wua-36chfm",
      "modelId": "model-wells-wuca-30hfmo",
      "outdoorUnitId": "ou-wells-wuca-30hfmo",
      "indoorUnitId": "iu-wua-36chfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.5,
      "hspf2": 9.7,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-30hh-wdca-3036a",
      "slug": "wells-wdhp-30hh-wdca-3036a",
      "modelId": "model-wells-wdhp-30hh",
      "outdoorUnitId": "ou-wells-wdhp-30hh",
      "indoorUnitId": "iu-wdca-3036a",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.3,
      "hspf2": 9.3,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-60hfmo-wua-60hfmah",
      "slug": "wells-wuca-60hfmo-wua-60hfmah",
      "modelId": "model-wells-wuca-60hfmo",
      "outdoorUnitId": "ou-wells-wuca-60hfmo",
      "indoorUnitId": "iu-wua-60hfmah",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-36hfmo-wua-36chfm",
      "slug": "wells-wuca-36hfmo-wua-36chfm",
      "modelId": "model-wells-wuca-36hfmo",
      "outdoorUnitId": "ou-wells-wuca-36hfmo",
      "indoorUnitId": "iu-wua-36chfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 10.0,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wucb-36hfmo-wua-36chfm",
      "slug": "wells-wucb-36hfmo-wua-36chfm",
      "modelId": "model-wells-wucb-36hfmo",
      "outdoorUnitId": "ou-wells-wucb-36hfmo",
      "indoorUnitId": "iu-wua-36chfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wuca-30hfmo-wua-36bhfm",
      "slug": "wells-wuca-30hfmo-wua-36bhfm",
      "modelId": "model-wells-wuca-30hfmo",
      "outdoorUnitId": "ou-wells-wuca-30hfmo",
      "indoorUnitId": "iu-wua-36bhfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-60rh-wdah-60moc",
      "slug": "wells-wdhp-60rh-wdah-60moc",
      "modelId": "model-wells-wdhp-60rh",
      "outdoorUnitId": "ou-wells-wdhp-60rh",
      "indoorUnitId": "iu-wdah-60moc",
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-48hh-wdcm-4860c",
      "slug": "wells-wdhp-48hh-wdcm-4860c",
      "modelId": "model-wells-wdhp-48hh",
      "outdoorUnitId": "ou-wells-wdhp-48hh",
      "indoorUnitId": "iu-wdcm-4860c",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.8,
      "sources": [
        {
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wdhp-60hh-wdca-4860d",
      "slug": "wells-wdhp-60hh-wdca-4860d",
      "modelId": "model-wells-wdhp-60hh",
      "outdoorUnitId": "ou-wells-wdhp-60hh",
      "indoorUnitId": "iu-wdca-4860d",
      "minHeatingTempC": -25,
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
          "sourceId": "src-wells-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-wells-wucb-36hfmo-wua-36bhfm",
      "slug": "wells-wucb-36hfmo-wua-36bhfm",
      "modelId": "model-wells-wucb-36hfmo",
      "outdoorUnitId": "ou-wells-wucb-36hfmo",
      "indoorUnitId": "iu-wua-36bhfm",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 15.2,
      "hspf2": 8.5,
      "sources": [
        {
          "sourceId": "src-wells-epa",
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
