import type { BrandDataset } from "../../types";

export const brand_aufitDataset: BrandDataset = {
  "brand": {
    "id": "brand-aufit",
    "slug": "aufit",
    "name": "AUFIT",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour AUFIT",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-aufit-epa",
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
      "id": "series-aufit-c-series",
      "slug": "aufit-c-series",
      "name": "C-Series",
      "brandId": "brand-aufit",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série C-Series de AUFIT",
      "imageUrl": "/images/series/aufit-aufit-c-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aufit-m-series",
      "slug": "aufit-m-series",
      "name": "M-Series",
      "brandId": "brand-aufit",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série M-Series de AUFIT",
      "imageUrl": "/images/series/aufit-aufit-m-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aufit-hi-efficiency",
      "slug": "aufit-hi-efficiency",
      "name": "HI EFFICIENCY",
      "brandId": "brand-aufit",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série HI EFFICIENCY de AUFIT",
      "imageUrl": "/images/series/aufit-aufit-hi-efficiency.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-aufit-q-series",
      "slug": "aufit-q-series",
      "name": "Q Series",
      "brandId": "brand-aufit",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Q Series de AUFIT",
      "imageUrl": "/images/series/aufit-aufit-q-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-aufit-asw-h24f6a2-r3di-d7",
      "slug": "aufit-asw-h24f6a2-r3di-d7",
      "name": "AUFIT ASW-H24F6A2/ *R3DI-D7",
      "seriesId": "series-aufit-c-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H24F6A2/ *R3DI-D7",
      "normalizedModelNumber": "asw-h24f6a2/ *r3di-d7",
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
      "id": "model-aufit-asw-h24f6a2r3di-d7",
      "slug": "aufit-asw-h24f6a2r3di-d7",
      "name": "AUFIT ASW-H24F6A2/**R3DI-D7",
      "seriesId": "series-aufit-c-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H24F6A2/**R3DI-D7",
      "normalizedModelNumber": "asw-h24f6a2/**r3di-d7",
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
      "id": "model-aufit-asw-h18e3b2r3di-d2",
      "slug": "aufit-asw-h18e3b2r3di-d2",
      "name": "AUFIT ASW-H18E3B2/**R3DI-D2",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H18E3B2/**R3DI-D2",
      "normalizedModelNumber": "asw-h18e3b2/**r3di-d2",
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
      "id": "model-aufit-asw-h12c5b3r3di-c6",
      "slug": "aufit-asw-h12c5b3r3di-c6",
      "name": "AUFIT ASW-H12C5B3/*R3DI-C6",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H12C5B3/*R3DI-C6",
      "normalizedModelNumber": "asw-h12c5b3/*r3di-c6",
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
      "id": "model-aufit-asw-h12c5b2r3di-c9",
      "slug": "aufit-asw-h12c5b2r3di-c9",
      "name": "AUFIT ASW-H12C5B2/*R3DI-C9",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H12C5B2/*R3DI-C9",
      "normalizedModelNumber": "asw-h12c5b2/*r3di-c9",
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
      "id": "model-aufit-asw-h12c5a3r3di-c3",
      "slug": "aufit-asw-h12c5a3r3di-c3",
      "name": "AUFIT ASW-H12C5A3/*R3DI-C3",
      "seriesId": "series-aufit-hi-efficiency",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H12C5A3/*R3DI-C3",
      "normalizedModelNumber": "asw-h12c5a3/*r3di-c3",
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
      "id": "model-aufit-asw-h24f8a2r3di-c7",
      "slug": "aufit-asw-h24f8a2r3di-c7",
      "name": "AUFIT ASW-H24F8A2/**R3DI-C7",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H24F8A2/**R3DI-C7",
      "normalizedModelNumber": "asw-h24f8a2/**r3di-c7",
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
      "id": "model-aufit-asw-h12c5c3r3di-c5",
      "slug": "aufit-asw-h12c5c3r3di-c5",
      "name": "AUFIT ASW-H12C5C3/*R3DI-C5",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H12C5C3/*R3DI-C5",
      "normalizedModelNumber": "asw-h12c5c3/*r3di-c5",
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
      "id": "model-aufit-asw-h12c5d2r3di-c5",
      "slug": "aufit-asw-h12c5d2r3di-c5",
      "name": "AUFIT ASW-H12C5D2/*R3DI-C5",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H12C5D2/*R3DI-C5",
      "normalizedModelNumber": "asw-h12c5d2/*r3di-c5",
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
      "id": "model-aufit-asw-h18e3c2r3di-c3",
      "slug": "aufit-asw-h18e3c2r3di-c3",
      "name": "AUFIT ASW-H18E3C2/*R3DI-C3",
      "seriesId": "series-aufit-m-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H18E3C2/*R3DI-C3",
      "normalizedModelNumber": "asw-h18e3c2/*r3di-c3",
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
      "id": "model-aufit-fh12qca3di-20us",
      "slug": "aufit-fh12qca3di-20us",
      "name": "AUFIT FH12QCA3DI-20US",
      "seriesId": "series-aufit-q-series",
      "brandId": "brand-aufit",
      "modelNumber": "FH12QCA3DI-20US",
      "normalizedModelNumber": "fh12qca3di-20us",
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
      "id": "model-aufit-fh09qca3di-20us",
      "slug": "aufit-fh09qca3di-20us",
      "name": "AUFIT FH09QCA3DI-20US",
      "seriesId": "series-aufit-q-series",
      "brandId": "brand-aufit",
      "modelNumber": "FH09QCA3DI-20US",
      "normalizedModelNumber": "fh09qca3di-20us",
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
      "id": "model-aufit-ajan36hp230v1co",
      "slug": "aufit-ajan36hp230v1co",
      "name": "AUFIT AJAN36HP230V1CO",
      "seriesId": "series-aufit-c-series",
      "brandId": "brand-aufit",
      "modelNumber": "AJAN36HP230V1CO",
      "normalizedModelNumber": "ajan36hp230v1co",
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
      "id": "model-aufit-asw-h36i9a2r3di-b8",
      "slug": "aufit-asw-h36i9a2r3di-b8",
      "name": "AUFIT ASW-H36I9A2/*R3DI-B8",
      "seriesId": "series-aufit-c-series",
      "brandId": "brand-aufit",
      "modelNumber": "ASW-H36I9A2/*R3DI-B8",
      "normalizedModelNumber": "asw-h36i9a2/*r3di-b8",
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
      "id": "model-aufit-fh18qca2di-20us",
      "slug": "aufit-fh18qca2di-20us",
      "name": "AUFIT FH18QCA2DI-20US",
      "seriesId": "series-aufit-q-series",
      "brandId": "brand-aufit",
      "modelNumber": "FH18QCA2DI-20US",
      "normalizedModelNumber": "fh18qca2di-20us",
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
      "id": "model-aufit-fh36lca2di-20us",
      "slug": "aufit-fh36lca2di-20us",
      "name": "AUFIT FH36LCA2DI-20US",
      "seriesId": "series-aufit-c-series",
      "brandId": "brand-aufit",
      "modelNumber": "FH36LCA2DI-20US",
      "normalizedModelNumber": "fh36lca2di-20us",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-aufit-asw-h24f6a2-r3di-d7",
      "modelNumber": "ASW-H24F6A2/ *R3DI-D7",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h24f6a2r3di-d7",
      "modelNumber": "ASW-H24F6A2/**R3DI-D7",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h18e3b2r3di-d2",
      "modelNumber": "ASW-H18E3B2/**R3DI-D2",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h12c5b3r3di-c6",
      "modelNumber": "ASW-H12C5B3/*R3DI-C6",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h12c5b2r3di-c9",
      "modelNumber": "ASW-H12C5B2/*R3DI-C9",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h12c5a3r3di-c3",
      "modelNumber": "ASW-H12C5A3/*R3DI-C3",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h24f8a2r3di-c7",
      "modelNumber": "ASW-H24F8A2/**R3DI-C7",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h12c5c3r3di-c5",
      "modelNumber": "ASW-H12C5C3/*R3DI-C5",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h12c5d2r3di-c5",
      "modelNumber": "ASW-H12C5D2/*R3DI-C5",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h18e3c2r3di-c3",
      "modelNumber": "ASW-H18E3C2/*R3DI-C3",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-fh12qca3di-20us",
      "modelNumber": "FH12QCA3DI-20US",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-fh09qca3di-20us",
      "modelNumber": "FH09QCA3DI-20US",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-ajan36hp230v1co",
      "modelNumber": "AJAN36HP230V1CO",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-asw-h36i9a2r3di-b8",
      "modelNumber": "ASW-H36I9A2/*R3DI-B8",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-fh18qca2di-20us",
      "modelNumber": "FH18QCA2DI-20US",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-aufit-fh36lca2di-20us",
      "modelNumber": "FH36LCA2DI-20US",
      "brandId": "brand-aufit",
      "refrigerant": "R-32"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-asw-h24f6a2-r3di-d7",
      "modelNumber": "ASW-H24F6A2/ *R3DI-D7",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h24f6a2r3di-d7",
      "modelNumber": "ASW-H24F6A2/**R3DI-D7",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h18e3b2r3di-d2",
      "modelNumber": "ASW-H18E3B2/**R3DI-D2",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h12c5b3r3di-c6",
      "modelNumber": "ASW-H12C5B3/*R3DI-C6",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h12c5b2r3di-c9",
      "modelNumber": "ASW-H12C5B2/*R3DI-C9",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h12c5a3r3di-c3",
      "modelNumber": "ASW-H12C5A3/*R3DI-C3",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h24f8a2r3di-c7",
      "modelNumber": "ASW-H24F8A2/**R3DI-C7",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h12c5c3r3di-c5",
      "modelNumber": "ASW-H12C5C3/*R3DI-C5",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h12c5d2r3di-c5",
      "modelNumber": "ASW-H12C5D2/*R3DI-C5",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h18e3c2r3di-c3",
      "modelNumber": "ASW-H18E3C2/*R3DI-C3",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-fwh12qca3di-20us",
      "modelNumber": "FWH12QCA3DI-20US",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-fwh09qca3di-20us",
      "modelNumber": "FWH09QCA3DI-20US",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-ajan36hp230v1ch",
      "modelNumber": "AJAN36HP230V1CH",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-asw-h36i9a2r3di-b8",
      "modelNumber": "ASW-H36I9A2/*R3DI-B8",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-fwh18qca2di-20us",
      "modelNumber": "FWH18QCA2DI-20US",
      "brandId": "brand-aufit",
      "type": "wall-single"
    },
    {
      "id": "iu-fwh36lca2di-20us",
      "modelNumber": "FWH36LCA2DI-20US",
      "brandId": "brand-aufit",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-aufit-asw-h24f6a2-r3di-d7-asw-h24f6a2-r3di-d7",
      "slug": "aufit-asw-h24f6a2-r3di-d7-asw-h24f6a2-r3di-d7",
      "modelId": "model-aufit-asw-h24f6a2-r3di-d7",
      "outdoorUnitId": "ou-aufit-asw-h24f6a2-r3di-d7",
      "indoorUnitId": "iu-asw-h24f6a2-r3di-d7",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h24f6a2r3di-d7-asw-h24f6a2r3di-d7",
      "slug": "aufit-asw-h24f6a2r3di-d7-asw-h24f6a2r3di-d7",
      "modelId": "model-aufit-asw-h24f6a2r3di-d7",
      "outdoorUnitId": "ou-aufit-asw-h24f6a2r3di-d7",
      "indoorUnitId": "iu-asw-h24f6a2r3di-d7",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h18e3b2r3di-d2-asw-h18e3b2r3di-d2",
      "slug": "aufit-asw-h18e3b2r3di-d2-asw-h18e3b2r3di-d2",
      "modelId": "model-aufit-asw-h18e3b2r3di-d2",
      "outdoorUnitId": "ou-aufit-asw-h18e3b2r3di-d2",
      "indoorUnitId": "iu-asw-h18e3b2r3di-d2",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h18e3b2r3di-d2-asw-h18e3b2r3di-d2",
      "slug": "aufit-asw-h18e3b2r3di-d2-asw-h18e3b2r3di-d2",
      "modelId": "model-aufit-asw-h18e3b2r3di-d2",
      "outdoorUnitId": "ou-aufit-asw-h18e3b2r3di-d2",
      "indoorUnitId": "iu-asw-h18e3b2r3di-d2",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h12c5b3r3di-c6-asw-h12c5b3r3di-c6",
      "slug": "aufit-asw-h12c5b3r3di-c6-asw-h12c5b3r3di-c6",
      "modelId": "model-aufit-asw-h12c5b3r3di-c6",
      "outdoorUnitId": "ou-aufit-asw-h12c5b3r3di-c6",
      "indoorUnitId": "iu-asw-h12c5b3r3di-c6",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h12c5b2r3di-c9-asw-h12c5b2r3di-c9",
      "slug": "aufit-asw-h12c5b2r3di-c9-asw-h12c5b2r3di-c9",
      "modelId": "model-aufit-asw-h12c5b2r3di-c9",
      "outdoorUnitId": "ou-aufit-asw-h12c5b2r3di-c9",
      "indoorUnitId": "iu-asw-h12c5b2r3di-c9",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h12c5a3r3di-c3-asw-h12c5a3r3di-c3",
      "slug": "aufit-asw-h12c5a3r3di-c3-asw-h12c5a3r3di-c3",
      "modelId": "model-aufit-asw-h12c5a3r3di-c3",
      "outdoorUnitId": "ou-aufit-asw-h12c5a3r3di-c3",
      "indoorUnitId": "iu-asw-h12c5a3r3di-c3",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h24f8a2r3di-c7-asw-h24f8a2r3di-c7",
      "slug": "aufit-asw-h24f8a2r3di-c7-asw-h24f8a2r3di-c7",
      "modelId": "model-aufit-asw-h24f8a2r3di-c7",
      "outdoorUnitId": "ou-aufit-asw-h24f8a2r3di-c7",
      "indoorUnitId": "iu-asw-h24f8a2r3di-c7",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h12c5c3r3di-c5-asw-h12c5c3r3di-c5",
      "slug": "aufit-asw-h12c5c3r3di-c5-asw-h12c5c3r3di-c5",
      "modelId": "model-aufit-asw-h12c5c3r3di-c5",
      "outdoorUnitId": "ou-aufit-asw-h12c5c3r3di-c5",
      "indoorUnitId": "iu-asw-h12c5c3r3di-c5",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h12c5d2r3di-c5-asw-h12c5d2r3di-c5",
      "slug": "aufit-asw-h12c5d2r3di-c5-asw-h12c5d2r3di-c5",
      "modelId": "model-aufit-asw-h12c5d2r3di-c5",
      "outdoorUnitId": "ou-aufit-asw-h12c5d2r3di-c5",
      "indoorUnitId": "iu-asw-h12c5d2r3di-c5",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h18e3c2r3di-c3-asw-h18e3c2r3di-c3",
      "slug": "aufit-asw-h18e3c2r3di-c3-asw-h18e3c2r3di-c3",
      "modelId": "model-aufit-asw-h18e3c2r3di-c3",
      "outdoorUnitId": "ou-aufit-asw-h18e3c2r3di-c3",
      "indoorUnitId": "iu-asw-h18e3c2r3di-c3",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 9.5,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-fh12qca3di-20us-fwh12qca3di-20us",
      "slug": "aufit-fh12qca3di-20us-fwh12qca3di-20us",
      "modelId": "model-aufit-fh12qca3di-20us",
      "outdoorUnitId": "ou-aufit-fh12qca3di-20us",
      "indoorUnitId": "iu-fwh12qca3di-20us",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h24f8a2r3di-c7-asw-h24f8a2r3di-c7",
      "slug": "aufit-asw-h24f8a2r3di-c7-asw-h24f8a2r3di-c7",
      "modelId": "model-aufit-asw-h24f8a2r3di-c7",
      "outdoorUnitId": "ou-aufit-asw-h24f8a2r3di-c7",
      "indoorUnitId": "iu-asw-h24f8a2r3di-c7",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-fh09qca3di-20us-fwh09qca3di-20us",
      "slug": "aufit-fh09qca3di-20us-fwh09qca3di-20us",
      "modelId": "model-aufit-fh09qca3di-20us",
      "outdoorUnitId": "ou-aufit-fh09qca3di-20us",
      "indoorUnitId": "iu-fwh09qca3di-20us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.0,
      "hspf2": 8.0,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-ajan36hp230v1co-ajan36hp230v1ch",
      "slug": "aufit-ajan36hp230v1co-ajan36hp230v1ch",
      "modelId": "model-aufit-ajan36hp230v1co",
      "outdoorUnitId": "ou-aufit-ajan36hp230v1co",
      "indoorUnitId": "iu-ajan36hp230v1ch",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h36i9a2r3di-b8-asw-h36i9a2r3di-b8",
      "slug": "aufit-asw-h36i9a2r3di-b8-asw-h36i9a2r3di-b8",
      "modelId": "model-aufit-asw-h36i9a2r3di-b8",
      "outdoorUnitId": "ou-aufit-asw-h36i9a2r3di-b8",
      "indoorUnitId": "iu-asw-h36i9a2r3di-b8",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-asw-h36i9a2r3di-b8-asw-h36i9a2r3di-b8",
      "slug": "aufit-asw-h36i9a2r3di-b8-asw-h36i9a2r3di-b8",
      "modelId": "model-aufit-asw-h36i9a2r3di-b8",
      "outdoorUnitId": "ou-aufit-asw-h36i9a2r3di-b8",
      "indoorUnitId": "iu-asw-h36i9a2r3di-b8",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-fh18qca2di-20us-fwh18qca2di-20us",
      "slug": "aufit-fh18qca2di-20us-fwh18qca2di-20us",
      "modelId": "model-aufit-fh18qca2di-20us",
      "outdoorUnitId": "ou-aufit-fh18qca2di-20us",
      "indoorUnitId": "iu-fwh18qca2di-20us",
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
          "sourceId": "src-aufit-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-aufit-fh36lca2di-20us-fwh36lca2di-20us",
      "slug": "aufit-fh36lca2di-20us-fwh36lca2di-20us",
      "modelId": "model-aufit-fh36lca2di-20us",
      "outdoorUnitId": "ou-aufit-fh36lca2di-20us",
      "indoorUnitId": "iu-fwh36lca2di-20us",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 8.55,
      "sources": [
        {
          "sourceId": "src-aufit-epa",
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
