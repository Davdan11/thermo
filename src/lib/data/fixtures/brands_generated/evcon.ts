import type { BrandDataset } from "../../types";

export const brand_evconDataset: BrandDataset = {
  "brand": {
    "id": "brand-evcon",
    "slug": "evcon",
    "name": "EVCON",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour EVCON",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-evcon-epa",
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
      "id": "series-evcon-lx-series",
      "slug": "evcon-lx-series",
      "name": "LX SERIES",
      "brandId": "brand-evcon",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série LX SERIES de EVCON",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-evcon-rh630e2s11",
      "slug": "evcon-rh630e2s11",
      "name": "EVCON RH630E2S11",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RH630E2S11",
      "normalizedModelNumber": "rh630e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 30200,
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
      "id": "model-evcon-xh636e2s11",
      "slug": "evcon-xh636e2s11",
      "name": "EVCON XH636E2S11",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "XH636E2S11",
      "normalizedModelNumber": "xh636e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 35400,
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
      "id": "model-evcon-xh660e2s11",
      "slug": "evcon-xh660e2s11",
      "name": "EVCON XH660E2S11",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "XH660E2S11",
      "normalizedModelNumber": "xh660e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 53500,
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
      "id": "model-evcon-xh648e2s11",
      "slug": "evcon-xh648e2s11",
      "name": "EVCON XH648E2S11",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "XH648E2S11",
      "normalizedModelNumber": "xh648e2s11",
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
      "id": "model-evcon-rhp15042b21",
      "slug": "evcon-rhp15042b21",
      "name": "EVCON RHP15042B21",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RHP15042B21",
      "normalizedModelNumber": "rhp15042b21",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 41000,
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
      "id": "model-evcon-rhp15060b21",
      "slug": "evcon-rhp15060b21",
      "name": "EVCON RHP15060B21",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RHP15060B21",
      "normalizedModelNumber": "rhp15060b21",
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
      "id": "model-evcon-rhp15048b21",
      "slug": "evcon-rhp15048b21",
      "name": "EVCON RHP15048B21",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RHP15048B21",
      "normalizedModelNumber": "rhp15048b21",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 46000,
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
      "id": "model-evcon-xh624e2s11",
      "slug": "evcon-xh624e2s11",
      "name": "EVCON XH624E2S11",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "XH624E2S11",
      "normalizedModelNumber": "xh624e2s11",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24200,
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
      "id": "model-evcon-rhp15024b21",
      "slug": "evcon-rhp15024b21",
      "name": "EVCON RHP15024B21",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RHP15024B21",
      "normalizedModelNumber": "rhp15024b21",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 24200,
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
      "id": "model-evcon-rhp15030b21",
      "slug": "evcon-rhp15030b21",
      "name": "EVCON RHP15030B21",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RHP15030B21",
      "normalizedModelNumber": "rhp15030b21",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 29000,
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
      "id": "model-evcon-rhp15036b21",
      "slug": "evcon-rhp15036b21",
      "name": "EVCON RHP15036B21",
      "seriesId": "series-evcon-lx-series",
      "brandId": "brand-evcon",
      "modelNumber": "RHP15036B21",
      "normalizedModelNumber": "rhp15036b21",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-evcon-rh630e2s11",
      "modelNumber": "RH630E2S11",
      "brandId": "brand-evcon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evcon-xh636e2s11",
      "modelNumber": "XH636E2S11",
      "brandId": "brand-evcon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evcon-xh660e2s11",
      "modelNumber": "XH660E2S11",
      "brandId": "brand-evcon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evcon-xh648e2s11",
      "modelNumber": "XH648E2S11",
      "brandId": "brand-evcon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evcon-rhp15042b21",
      "modelNumber": "RHP15042B21",
      "brandId": "brand-evcon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-evcon-rhp15060b21",
      "modelNumber": "RHP15060B21",
      "brandId": "brand-evcon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-evcon-rhp15048b21",
      "modelNumber": "RHP15048B21",
      "brandId": "brand-evcon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-evcon-xh624e2s11",
      "modelNumber": "XH624E2S11",
      "brandId": "brand-evcon",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-evcon-rhp15024b21",
      "modelNumber": "RHP15024B21",
      "brandId": "brand-evcon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-evcon-rhp15030b21",
      "modelNumber": "RHP15030B21",
      "brandId": "brand-evcon",
      "refrigerant": "R-410A"
    },
    {
      "id": "ou-evcon-rhp15036b21",
      "modelNumber": "RHP15036B21",
      "brandId": "brand-evcon",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-ctf36b5ads2",
      "modelNumber": "CTF36B5ADS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5ads2",
      "modelNumber": "CTF36C5ADS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5ads2",
      "modelNumber": "CTM36C5ADS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48d5cfs1jme18d2sn1",
      "modelNumber": "CTF48D5CFS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme16c2sn2",
      "modelNumber": "CTF48C5CFS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2jme12c2sn2",
      "modelNumber": "CTF48C5CFS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs2",
      "modelNumber": "CTF48C5CFS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2txv",
      "modelNumber": "CTU48C5XFS2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jme12c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JME12C2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmet12cs2n1txv",
      "modelNumber": "CTU48C5XFS1+JMET12CS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2txv",
      "modelNumber": "CTU36B5XDS2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jmet16cs2n1txv",
      "modelNumber": "CTU48C5XFS1+JMET16CS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1txv",
      "modelNumber": "CTU48C5XFS1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme12c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME12C2SN2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmet12cs2n1",
      "modelNumber": "CTF48C5CFS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1",
      "modelNumber": "CTF48C5CFS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jme16c2sn1",
      "modelNumber": "CTF48C5CFS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs1jme16c2sn1txv",
      "modelNumber": "CTU48C5XFS1+JME16C2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu48c5xfs2jme16c2sn2txv",
      "modelNumber": "CTU48C5XFS2+JME16C2SN2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jme12c2sn1",
      "modelNumber": "CTF48C5CFS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48c5cfs1jmet16cs2n1",
      "modelNumber": "CTF48C5CFS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse60d5cj2ss1",
      "modelNumber": "JSE60D5CJ2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2",
      "modelNumber": "CTM36B5ADS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48d5cg2ss2",
      "modelNumber": "JHE48D5CG2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss1",
      "modelNumber": "JHE60C5CH2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss2",
      "modelNumber": "JHE48C5CG2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48d5cg2ss1",
      "modelNumber": "JHE48D5CG2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss2",
      "modelNumber": "JHE60D5CH2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jse48d5cg2ss1",
      "modelNumber": "JSE48D5CG2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2txv",
      "modelNumber": "CTU60C5XGS2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jme18d2sn1txv",
      "modelNumber": "CTU60D5XGS1+JME18D2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1jmet18ds2n1txv",
      "modelNumber": "CTU60D5XGS1+JMET18DS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xgs1txv",
      "modelNumber": "CTU60D5XGS1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60c5ch2ss2",
      "modelNumber": "JHE60C5CH2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5ch2ss1",
      "modelNumber": "JHE60D5CH2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fxxn1jmet16cs2n1txv",
      "modelNumber": "XAHC48FXXN1+JMET16CS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jme18d2sn1",
      "modelNumber": "CTM60D5CGS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1jmet18ds2n1",
      "modelNumber": "CTM60D5CGS1+JMET18DS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2",
      "modelNumber": "CTM60D5CGS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs2jme18d2sn2",
      "modelNumber": "CTM60D5CGS2+JME18D2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1",
      "modelNumber": "CTM60D5CHS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jme18d2sn1",
      "modelNumber": "CTM60D5CHS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs1jmet18ds2n1",
      "modelNumber": "CTM60D5CHS1+JMET18DS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2",
      "modelNumber": "CTM60D5CHS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jme12c2sn1",
      "modelNumber": "CTM60C5CHS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jme16c2sn1",
      "modelNumber": "CTM60C5CHS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmet12cs2n1",
      "modelNumber": "CTM60C5CHS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1jmet16cs2n1",
      "modelNumber": "CTM60C5CHS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2",
      "modelNumber": "CTM60C5CHS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jme18d2sn1txv",
      "modelNumber": "CTU60D5XHS1+JME18D2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1jmet18ds2n1txv",
      "modelNumber": "CTU60D5XHS1+JMET18DS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60d5xhs1txv",
      "modelNumber": "CTU60D5XHS1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe48c5cg2ss1",
      "modelNumber": "JHE48C5CG2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5chs2jme18d2sn2",
      "modelNumber": "CTM60D5CHS2+JME18D2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jme12c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JME12C2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jme16c2sn1txv",
      "modelNumber": "CTU60C5XGS1+JME16C2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmet12cs2n1txv",
      "modelNumber": "CTU60C5XGS1+JMET12CS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1jmet16cs2n1txv",
      "modelNumber": "CTU60C5XGS1+JMET16CS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs1txv",
      "modelNumber": "CTU60C5XGS1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jme12c2sn2txv",
      "modelNumber": "CTU60C5XGS2+JME12C2SN2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu60c5xgs2jme16c2sn2txv",
      "modelNumber": "CTU60C5XGS2+JME16C2SN2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetd60jbcs2n1",
      "modelNumber": "JHETD60JBCS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtd60hbcc2n1",
      "modelNumber": "JHVTD60HBCC2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtd60jbcc2n1",
      "modelNumber": "JHVTD60JBCC2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60hxxn1txv",
      "modelNumber": "XAHC60HXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetd60hbcs2n1",
      "modelNumber": "JHETD60HBCS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60hbcn1",
      "modelNumber": "XAHC60HBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2jme18d2sn2",
      "modelNumber": "CTF60D5CHS2+JME18D2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs2",
      "modelNumber": "CTF60D5CHS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jmet18ds2n1",
      "modelNumber": "CTF60D5CHS1+JMET18DS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1jme18d2sn1",
      "modelNumber": "CTF60D5CHS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5chs1",
      "modelNumber": "CTF60D5CHS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2jme18d2sn2",
      "modelNumber": "CTF60D5CGS2+JME18D2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs2",
      "modelNumber": "CTF60D5CGS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs1",
      "modelNumber": "CTM60C5CHS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jme16c2sn2",
      "modelNumber": "CTM60C5CGS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2jme12c2sn2",
      "modelNumber": "CTM60C5CGS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs2",
      "modelNumber": "CTM60C5CGS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmet16cs2n1",
      "modelNumber": "CTM60C5CGS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jmet12cs2n1",
      "modelNumber": "CTM60C5CGS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jme16c2sn1",
      "modelNumber": "CTM60C5CGS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1jme12c2sn1",
      "modelNumber": "CTM60C5CGS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cgs1",
      "modelNumber": "CTM60D5CGS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jme16c2sn2",
      "modelNumber": "CTM60C5CHS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5chs2jme12c2sn2",
      "modelNumber": "CTM60C5CHS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jmet16cs2n1",
      "modelNumber": "CTF30C5ACS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs2jme12c2sn2",
      "modelNumber": "CTF30C5ACS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs2jme16c2sn2",
      "modelNumber": "CTF30C5ACS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60c5cgs1",
      "modelNumber": "CTM60C5CGS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jme08b2sn1",
      "modelNumber": "CTM36B5ADS1+JME08B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1",
      "modelNumber": "CTM36B5ADS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1",
      "modelNumber": "CTM30B5ACS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs1jme12b2sn1",
      "modelNumber": "CTM30B5ACS1+JME12B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm30b5acs2",
      "modelNumber": "CTM30B5ACS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jme12b2sn1",
      "modelNumber": "CTM36B5ADS1+JME12B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmet12bs2n1",
      "modelNumber": "CTF36B5ADS1+JMET12BS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme12b2sn2",
      "modelNumber": "CTF36B5ADS2+JME12B2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1",
      "modelNumber": "CTF36C5CDS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jme12c2sn1",
      "modelNumber": "CTF36C5CDS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jme16c2sn1",
      "modelNumber": "CTF36C5CDS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmet12cs2n1",
      "modelNumber": "CTF36C5CDS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds1jmet16cs2n1",
      "modelNumber": "CTF36C5CDS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss1",
      "modelNumber": "JHE24B5AC2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe24b5ac2ss2",
      "modelNumber": "JHE24B5AC2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss1",
      "modelNumber": "JHE30B5AD2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe30b5ad2ss2",
      "modelNumber": "JHE30B5AD2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5ad2ss1",
      "modelNumber": "JHE36B5AD2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1",
      "modelNumber": "CTF36B5CDS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jme12b2sn1",
      "modelNumber": "CTF36B5CDS1+JME12B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu30b5xcs1jme12b2sn1txv",
      "modelNumber": "CTU30B5XCS1+JME12B2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jme08b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JME08B2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jme12b2sn1txv",
      "modelNumber": "CTU36B5XDS1+JME12B2SN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmet12bs2n1txv",
      "modelNumber": "CTU36B5XDS1+JMET12BS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1txv",
      "modelNumber": "CTU36B5XDS1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme12b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME12B2SN2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jmet12cs2n1",
      "modelNumber": "CTF30C5ACS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jme16c2sn1",
      "modelNumber": "CTF30C5ACS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1",
      "modelNumber": "CTF36B5ADS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jme12b2sn1",
      "modelNumber": "CTF36B5ADS1+JME12B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jme08b2sn1",
      "modelNumber": "CTF36B5ADS1+JME08B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme16c2sn2",
      "modelNumber": "CTF36C5CDS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2jme12c2sn2",
      "modelNumber": "CTF36C5CDS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36c5cds2",
      "modelNumber": "CTF36C5CDS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30c5acs1jme12c2sn1",
      "modelNumber": "CTF30C5ACS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf30b5acs1jme12b2sn1",
      "modelNumber": "CTF30B5ACS1+JME12B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds1jmet12bs2n1",
      "modelNumber": "CTF36B5CDS1+JMET12BS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2",
      "modelNumber": "CTF36B5CDS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5cds2jme12b2sn2",
      "modelNumber": "CTF36B5CDS2+JME12B2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme12c2sn2",
      "modelNumber": "CTM48C5CFS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2",
      "modelNumber": "CTM48C5CFS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmet16cs2n1",
      "modelNumber": "CTM48C5CFS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jmet12cs2n1",
      "modelNumber": "CTM48C5CFS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jme16c2sn1",
      "modelNumber": "CTM48C5CFS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1jme12c2sn1",
      "modelNumber": "CTM48C5CFS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs1",
      "modelNumber": "CTM48C5CFS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48d5cfs1jme18d2sn1",
      "modelNumber": "CTM48D5CFS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48c5cfs2jme16c2sn2",
      "modelNumber": "CTM48C5CFS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jme12c2sn1",
      "modelNumber": "CTM36C5CDS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1",
      "modelNumber": "CTM36C5CDS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jme12c2sn2",
      "modelNumber": "CTF60C5CHS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2jme16c2sn2",
      "modelNumber": "CTF60C5CHS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1",
      "modelNumber": "CTF60D5CGS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jme18d2sn1",
      "modelNumber": "CTF60D5CGS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cgs1jmet18ds2n1",
      "modelNumber": "CTF60D5CGS1+JMET18DS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmet12cs2n1",
      "modelNumber": "CTF60C5CGS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jmet16cs2n1",
      "modelNumber": "CTF60C5CGS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jme16c2sn1",
      "modelNumber": "CTM36C5CDS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme12c2sn2",
      "modelNumber": "CTM36C5CDS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2",
      "modelNumber": "CTM36C5CDS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmet16cs2n1",
      "modelNumber": "CTM36C5CDS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds1jmet12cs2n1",
      "modelNumber": "CTM36C5CDS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36c5cds2jme16c2sn2",
      "modelNumber": "CTM36C5CDS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmet12cs2n1",
      "modelNumber": "CTF60C5CHS1+JMET12CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jmet16cs2n1",
      "modelNumber": "CTF60C5CHS1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs2",
      "modelNumber": "CTF60C5CHS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss1",
      "modelNumber": "JHE36C5CD2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5cd2ss2",
      "modelNumber": "JHE36B5CD2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36b5cd2ss1",
      "modelNumber": "JHE36B5CD2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jme16c2sn1",
      "modelNumber": "CTF60C5CHS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1jme12c2sn1",
      "modelNumber": "CTF60C5CHS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5chs1",
      "modelNumber": "CTF60C5CHS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jme16c2sn2",
      "modelNumber": "CTF60C5CGS2+JME16C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2jme12c2sn2",
      "modelNumber": "CTF60C5CGS2+JME12C2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs2",
      "modelNumber": "CTF60C5CGS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jme16c2sn1",
      "modelNumber": "CTF60C5CGS1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1",
      "modelNumber": "CTF60C5CGS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe42c5cf2ss1",
      "modelNumber": "JHE42C5CF2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe36c5cd2ss2",
      "modelNumber": "JHE36C5CD2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60c5cgs1jme12c2sn1",
      "modelNumber": "CTF60C5CGS1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5cj2ss1",
      "modelNumber": "JHE60D5CJ2SS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhe60d5cj2ss2",
      "modelNumber": "JHE60D5CJ2SS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1",
      "modelNumber": "CTM60D5CJS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jme18d2sn1",
      "modelNumber": "CTM60D5CJS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2",
      "modelNumber": "CTM60D5CJS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1",
      "modelNumber": "CTF60D5CJS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jme18d2sn1",
      "modelNumber": "CTF60D5CJS1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs1jmet18ds2n1",
      "modelNumber": "CTF60D5CJS1+JMET18DS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2",
      "modelNumber": "CTF60D5CJS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf60d5cjs2jme18d2sn2",
      "modelNumber": "CTF60D5CJS2+JME18D2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1",
      "modelNumber": "XAHC48FBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1jmet16cs2n1",
      "modelNumber": "XAHC48FBCN1+JMET16CS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb30cban1",
      "modelNumber": "XAFB30CBAN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dban1",
      "modelNumber": "XAHC36DBAN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dban1",
      "modelNumber": "XAFB36DBAN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafb36dban1jme12b2sn1",
      "modelNumber": "XAFB36DBAN1+JME12B2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dban1",
      "modelNumber": "XAFC36DBAN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dban1jme12c2sn1",
      "modelNumber": "XAFC36DBAN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc36dban1jme16c2sn1",
      "modelNumber": "XAFC36DBAN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fban1",
      "modelNumber": "XAFC48FBAN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fban1jme12c2sn1",
      "modelNumber": "XAFC48FBAN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fban1jme16c2sn1",
      "modelNumber": "XAFC48FBAN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd48fban1jme18d2sn1",
      "modelNumber": "XAFD48FBAN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fbcn1jme12c2sn1",
      "modelNumber": "XAFC48FBCN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd48fbcn1jme18d2sn1",
      "modelNumber": "XAFD48FBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jme12c2sn1",
      "modelNumber": "XAHC36DBCN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc36dbcn1jme16c2sn1",
      "modelNumber": "XAHC36DBCN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1jme16c2sn1",
      "modelNumber": "XAHC48FBCN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd48fbcn1jme18d2sn1",
      "modelNumber": "XAHD48FBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fbcn1",
      "modelNumber": "XAFC48FBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fbcn1jme16c2sn1",
      "modelNumber": "XAFC48FBCN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc48fxxn1txv",
      "modelNumber": "XAFC48FXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60gbcn1jme12c2sn1",
      "modelNumber": "XAFC60GBCN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60gbcn1jme16c2sn1",
      "modelNumber": "XAFC60GBCN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd48fbcn1",
      "modelNumber": "XAFD48FBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60gbcn1jme18d2sn1",
      "modelNumber": "XAFD60GBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fbcn1jme12c2sn1",
      "modelNumber": "XAHC48FBCN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs1jmet18ds2n1",
      "modelNumber": "CTM60D5CJS1+JMET18DS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm60d5cjs2jme18d2sn2",
      "modelNumber": "CTM60D5CJS2+JME18D2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48d5cfs1",
      "modelNumber": "CTF48D5CFS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf48d5cfs2",
      "modelNumber": "CTF48D5CFS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds1",
      "modelNumber": "CTM36B5CDS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5cds2",
      "modelNumber": "CTM36B5CDS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48d5cfs1",
      "modelNumber": "CTM48D5CFS1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm48d5cfs2",
      "modelNumber": "CTM48D5CFS2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds1jmet08bs2n1txv",
      "modelNumber": "CTU36B5XDS1+JMET08BS2N1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctu36b5xds2jme08b2sn2txv",
      "modelNumber": "CTU36B5XDS2+JME08B2SN2+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60jbcn1",
      "modelNumber": "XAFD60JBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60jbcn1jme18d2sn1",
      "modelNumber": "XAFD60JBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60hbcn1",
      "modelNumber": "XAHD60HBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60jbcn1",
      "modelNumber": "XAHD60JBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60jbcn1jme18d2sn1",
      "modelNumber": "XAHD60JBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads1jmet08bs2n1",
      "modelNumber": "CTF36B5ADS1+JMET08BS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctf36b5ads2jme08b2sn2",
      "modelNumber": "CTF36B5ADS2+JME08B2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmet08bs2n1",
      "modelNumber": "CTM36B5ADS1+JMET08BS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads1jmet12bs2n1",
      "modelNumber": "CTM36B5ADS1+JMET12BS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jme08b2sn2",
      "modelNumber": "CTM36B5ADS2+JME08B2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-ctm36b5ads2jme12b2sn2",
      "modelNumber": "CTM36B5ADS2+JME12B2SN2",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc48fxxn1txv",
      "modelNumber": "XAHC48FXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gbcn1jme12c2sn1",
      "modelNumber": "XAHC60GBCN1+JME12C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gbcn1jme16c2sn1",
      "modelNumber": "XAHC60GBCN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd48fbcn1",
      "modelNumber": "XAHD48FBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd48fxxn1txv",
      "modelNumber": "XAHD48FXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60gbcn1jme18d2sn1",
      "modelNumber": "XAHD60GBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xauc48fxxn1txv",
      "modelNumber": "XAUC48FXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60hbcn1",
      "modelNumber": "XAFC60HBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60hxxn1txv",
      "modelNumber": "XAFC60HXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60hbcn1",
      "modelNumber": "XAFD60HBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60hxxn1txv",
      "modelNumber": "XAFD60HXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gbcn1",
      "modelNumber": "XAHC60GBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahc60gxxn1txv",
      "modelNumber": "XAHC60GXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60gbcn1",
      "modelNumber": "XAHD60GBCN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60gxxn1txv",
      "modelNumber": "XAHD60GXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xahd60hxxn1txv",
      "modelNumber": "XAHD60HXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xaud60hxxn1txv",
      "modelNumber": "XAUD60HXXN1+TXV",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhetc60hbcs2n1",
      "modelNumber": "JHETC60HBCS2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-jhvtc60hbcc2n1",
      "modelNumber": "JHVTC60HBCC2N1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafc60hbcn1jme16c2sn1",
      "modelNumber": "XAFC60HBCN1+JME16C2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    },
    {
      "id": "iu-xafd60hbcn1jme18d2sn1",
      "modelNumber": "XAFD60HBCN1+JME18D2SN1",
      "brandId": "brand-evcon",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-evcon-rh630e2s11-ctf36b5ads2",
      "slug": "evcon-rh630e2s11-ctf36b5ads2",
      "modelId": "model-evcon-rh630e2s11",
      "outdoorUnitId": "ou-evcon-rh630e2s11",
      "indoorUnitId": "iu-ctf36b5ads2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rh630e2s11-ctf36c5ads2",
      "slug": "evcon-rh630e2s11-ctf36c5ads2",
      "modelId": "model-evcon-rh630e2s11",
      "outdoorUnitId": "ou-evcon-rh630e2s11",
      "indoorUnitId": "iu-ctf36c5ads2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rh630e2s11-ctm36c5ads2",
      "slug": "evcon-rh630e2s11-ctm36c5ads2",
      "modelId": "model-evcon-rh630e2s11",
      "outdoorUnitId": "ou-evcon-rh630e2s11",
      "indoorUnitId": "iu-ctm36c5ads2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48d5cfs1jme18d2sn1",
      "slug": "evcon-xh636e2s11-ctf48d5cfs1jme18d2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48d5cfs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs2jme16c2sn2",
      "slug": "evcon-xh636e2s11-ctf48c5cfs2jme16c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs2jme12c2sn2",
      "slug": "evcon-xh636e2s11-ctf48c5cfs2jme12c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs2",
      "slug": "evcon-xh636e2s11-ctf48c5cfs2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs2txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs2txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs1jme12c2sn1txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs1jme12c2sn1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jme12c2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs1jmet12cs2n1txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs1jmet12cs2n1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmet12cs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rh630e2s11-ctu36b5xds2txv",
      "slug": "evcon-rh630e2s11-ctu36b5xds2txv",
      "modelId": "model-evcon-rh630e2s11",
      "outdoorUnitId": "ou-evcon-rh630e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs1jmet16cs2n1txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs1jmet16cs2n1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jmet16cs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs1txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs2jme12c2sn2txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs2jme12c2sn2txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jme12c2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs1jmet12cs2n1",
      "slug": "evcon-xh636e2s11-ctf48c5cfs1jmet12cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs1",
      "slug": "evcon-xh636e2s11-ctf48c5cfs1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs1jme16c2sn1",
      "slug": "evcon-xh636e2s11-ctf48c5cfs1jme16c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs1jme16c2sn1txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs1jme16c2sn1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs1jme16c2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu48c5xfs2jme16c2sn2txv",
      "slug": "evcon-xh636e2s11-ctu48c5xfs2jme16c2sn2txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu48c5xfs2jme16c2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs1jme12c2sn1",
      "slug": "evcon-xh636e2s11-ctf48c5cfs1jme12c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48c5cfs1jmet16cs2n1",
      "slug": "evcon-xh636e2s11-ctf48c5cfs1jmet16cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48c5cfs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jse60d5cj2ss1",
      "slug": "evcon-xh660e2s11-jse60d5cj2ss1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jse60d5cj2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rh630e2s11-ctm36b5ads2",
      "slug": "evcon-rh630e2s11-ctm36b5ads2",
      "modelId": "model-evcon-rh630e2s11",
      "outdoorUnitId": "ou-evcon-rh630e2s11",
      "indoorUnitId": "iu-ctm36b5ads2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe48d5cg2ss2",
      "slug": "evcon-xh648e2s11-jhe48d5cg2ss2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe48d5cg2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe60c5ch2ss1",
      "slug": "evcon-xh648e2s11-jhe60c5ch2ss1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe48c5cg2ss2",
      "slug": "evcon-xh648e2s11-jhe48c5cg2ss2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe48c5cg2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe48d5cg2ss1",
      "slug": "evcon-xh648e2s11-jhe48d5cg2ss1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe48d5cg2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe60d5ch2ss2",
      "slug": "evcon-xh648e2s11-jhe60d5ch2ss2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jse48d5cg2ss1",
      "slug": "evcon-xh648e2s11-jse48d5cg2ss1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jse48d5cg2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs2txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs2txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60d5xgs1jme18d2sn1txv",
      "slug": "evcon-xh648e2s11-ctu60d5xgs1jme18d2sn1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jme18d2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60d5xgs1jmet18ds2n1txv",
      "slug": "evcon-xh648e2s11-ctu60d5xgs1jmet18ds2n1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1jmet18ds2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60d5xgs1txv",
      "slug": "evcon-xh648e2s11-ctu60d5xgs1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xgs1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe60c5ch2ss2",
      "slug": "evcon-xh648e2s11-jhe60c5ch2ss2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe60d5ch2ss1",
      "slug": "evcon-xh648e2s11-jhe60d5ch2ss1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc48fxxn1jmet16cs2n1txv",
      "slug": "evcon-rhp15042b21-xahc48fxxn1jmet16cs2n1txv",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc48fxxn1jmet16cs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5cgs1jme18d2sn1",
      "slug": "evcon-xh648e2s11-ctm60d5cgs1jme18d2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5cgs1jmet18ds2n1",
      "slug": "evcon-xh648e2s11-ctm60d5cgs1jmet18ds2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5cgs2",
      "slug": "evcon-xh648e2s11-ctm60d5cgs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5cgs2jme18d2sn2",
      "slug": "evcon-xh648e2s11-ctm60d5cgs2jme18d2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5chs1",
      "slug": "evcon-xh648e2s11-ctm60d5chs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5chs1jme18d2sn1",
      "slug": "evcon-xh648e2s11-ctm60d5chs1jme18d2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5chs1jmet18ds2n1",
      "slug": "evcon-xh648e2s11-ctm60d5chs1jmet18ds2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5chs2",
      "slug": "evcon-xh648e2s11-ctm60d5chs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs1jme12c2sn1",
      "slug": "evcon-xh648e2s11-ctm60c5chs1jme12c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs1jme16c2sn1",
      "slug": "evcon-xh648e2s11-ctm60c5chs1jme16c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs1jmet12cs2n1",
      "slug": "evcon-xh648e2s11-ctm60c5chs1jmet12cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs1jmet16cs2n1",
      "slug": "evcon-xh648e2s11-ctm60c5chs1jmet16cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs2",
      "slug": "evcon-xh648e2s11-ctm60c5chs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60d5xhs1jme18d2sn1txv",
      "slug": "evcon-xh648e2s11-ctu60d5xhs1jme18d2sn1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jme18d2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "slug": "evcon-xh648e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmet18ds2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60d5xhs1txv",
      "slug": "evcon-xh648e2s11-ctu60d5xhs1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-jhe48c5cg2ss1",
      "slug": "evcon-xh648e2s11-jhe48c5cg2ss1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-jhe48c5cg2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5chs2jme18d2sn2",
      "slug": "evcon-xh648e2s11-ctm60d5chs2jme18d2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs1jme12c2sn1txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs1jme12c2sn1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jme12c2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs1jme16c2sn1txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs1jme16c2sn1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jme16c2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs1jmet12cs2n1txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs1jmet12cs2n1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmet12cs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs1jmet16cs2n1txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs1jmet16cs2n1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1jmet16cs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs1txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs1txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs2jme12c2sn2txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs2jme12c2sn2txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jme12c2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctu60c5xgs2jme16c2sn2txv",
      "slug": "evcon-xh648e2s11-ctu60c5xgs2jme16c2sn2txv",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctu60c5xgs2jme16c2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-jhetd60jbcs2n1",
      "slug": "evcon-rhp15060b21-jhetd60jbcs2n1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-jhetd60jbcs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-jhvtd60hbcc2n1",
      "slug": "evcon-rhp15060b21-jhvtd60hbcc2n1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-jhvtd60hbcc2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-jhvtd60jbcc2n1",
      "slug": "evcon-rhp15060b21-jhvtd60jbcc2n1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-jhvtd60jbcc2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahc60hxxn1txv",
      "slug": "evcon-rhp15048b21-xahc60hxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahc60hxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-jhetd60hbcs2n1",
      "slug": "evcon-rhp15060b21-jhetd60hbcs2n1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-jhetd60hbcs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahc60hbcn1",
      "slug": "evcon-rhp15048b21-xahc60hbcn1",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahc60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5chs2jme18d2sn2",
      "slug": "evcon-xh648e2s11-ctf60d5chs2jme18d2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5chs2",
      "slug": "evcon-xh648e2s11-ctf60d5chs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5chs1jmet18ds2n1",
      "slug": "evcon-xh648e2s11-ctf60d5chs1jmet18ds2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5chs1jme18d2sn1",
      "slug": "evcon-xh648e2s11-ctf60d5chs1jme18d2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5chs1",
      "slug": "evcon-xh648e2s11-ctf60d5chs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5cgs2jme18d2sn2",
      "slug": "evcon-xh648e2s11-ctf60d5cgs2jme18d2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5cgs2",
      "slug": "evcon-xh648e2s11-ctf60d5cgs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs1",
      "slug": "evcon-xh648e2s11-ctm60c5chs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs2jme16c2sn2",
      "slug": "evcon-xh648e2s11-ctm60c5cgs2jme16c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs2jme12c2sn2",
      "slug": "evcon-xh648e2s11-ctm60c5cgs2jme12c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs2",
      "slug": "evcon-xh648e2s11-ctm60c5cgs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs1jmet16cs2n1",
      "slug": "evcon-xh648e2s11-ctm60c5cgs1jmet16cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs1jmet12cs2n1",
      "slug": "evcon-xh648e2s11-ctm60c5cgs1jmet12cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs1jme16c2sn1",
      "slug": "evcon-xh648e2s11-ctm60c5cgs1jme16c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs1jme12c2sn1",
      "slug": "evcon-xh648e2s11-ctm60c5cgs1jme12c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60d5cgs1",
      "slug": "evcon-xh648e2s11-ctm60d5cgs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60d5cgs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs2jme16c2sn2",
      "slug": "evcon-xh648e2s11-ctm60c5chs2jme16c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5chs2jme12c2sn2",
      "slug": "evcon-xh648e2s11-ctm60c5chs2jme12c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30c5acs1jmet16cs2n1",
      "slug": "evcon-xh624e2s11-ctf30c5acs1jmet16cs2n1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30c5acs2jme12c2sn2",
      "slug": "evcon-xh624e2s11-ctf30c5acs2jme12c2sn2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30c5acs2jme16c2sn2",
      "slug": "evcon-xh624e2s11-ctf30c5acs2jme16c2sn2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctm60c5cgs1",
      "slug": "evcon-xh648e2s11-ctm60c5cgs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctm60c5cgs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads1jme08b2sn1",
      "slug": "evcon-xh624e2s11-ctm36b5ads1jme08b2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jme08b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads1",
      "slug": "evcon-xh624e2s11-ctm36b5ads1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm30b5acs1",
      "slug": "evcon-xh624e2s11-ctm30b5acs1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm30b5acs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm30b5acs1jme12b2sn1",
      "slug": "evcon-xh624e2s11-ctm30b5acs1jme12b2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm30b5acs1jme12b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm30b5acs2",
      "slug": "evcon-xh624e2s11-ctm30b5acs2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm30b5acs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads1jme12b2sn1",
      "slug": "evcon-xh624e2s11-ctm36b5ads1jme12b2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jme12b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads2",
      "slug": "evcon-xh624e2s11-ctm36b5ads2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads1jmet12bs2n1",
      "slug": "evcon-xh624e2s11-ctf36b5ads1jmet12bs2n1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmet12bs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads2",
      "slug": "evcon-xh624e2s11-ctf36b5ads2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads2jme12b2sn2",
      "slug": "evcon-xh624e2s11-ctf36b5ads2jme12b2sn2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme12b2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds1",
      "slug": "evcon-xh636e2s11-ctf36c5cds1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds1jme12c2sn1",
      "slug": "evcon-xh636e2s11-ctf36c5cds1jme12c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds1jme16c2sn1",
      "slug": "evcon-xh636e2s11-ctf36c5cds1jme16c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds1jmet12cs2n1",
      "slug": "evcon-xh636e2s11-ctf36c5cds1jmet12cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds1jmet16cs2n1",
      "slug": "evcon-xh636e2s11-ctf36c5cds1jmet16cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds2txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds2txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-jhe24b5ac2ss1",
      "slug": "evcon-xh624e2s11-jhe24b5ac2ss1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-jhe24b5ac2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-jhe24b5ac2ss2",
      "slug": "evcon-xh624e2s11-jhe24b5ac2ss2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-jhe24b5ac2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-jhe30b5ad2ss1",
      "slug": "evcon-xh624e2s11-jhe30b5ad2ss1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-jhe30b5ad2ss2",
      "slug": "evcon-xh624e2s11-jhe30b5ad2ss2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-jhe36b5ad2ss1",
      "slug": "evcon-xh624e2s11-jhe36b5ad2ss1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-jhe36b5ad2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36b5cds1",
      "slug": "evcon-xh636e2s11-ctf36b5cds1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36b5cds1jme12b2sn1",
      "slug": "evcon-xh636e2s11-ctf36b5cds1jme12b2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jme12b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu30b5xcs1jme12b2sn1txv",
      "slug": "evcon-xh624e2s11-ctu30b5xcs1jme12b2sn1txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu30b5xcs1jme12b2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds1jme08b2sn1txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds1jme08b2sn1txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme08b2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds1jme12b2sn1txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds1jme12b2sn1txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme12b2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds1jmet12bs2n1txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds1jmet12bs2n1txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet12bs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds1txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds1txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme12b2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30c5acs1jmet12cs2n1",
      "slug": "evcon-xh624e2s11-ctf30c5acs1jmet12cs2n1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30c5acs1jme16c2sn1",
      "slug": "evcon-xh624e2s11-ctf30c5acs1jme16c2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads1",
      "slug": "evcon-xh624e2s11-ctf36b5ads1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads1jme12b2sn1",
      "slug": "evcon-xh624e2s11-ctf36b5ads1jme12b2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jme12b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads1jme08b2sn1",
      "slug": "evcon-xh624e2s11-ctf36b5ads1jme08b2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jme08b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds2jme16c2sn2",
      "slug": "evcon-xh636e2s11-ctf36c5cds2jme16c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds2jme12c2sn2",
      "slug": "evcon-xh636e2s11-ctf36c5cds2jme12c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36c5cds2",
      "slug": "evcon-xh636e2s11-ctf36c5cds2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36c5cds2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30c5acs1jme12c2sn1",
      "slug": "evcon-xh624e2s11-ctf30c5acs1jme12c2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30c5acs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf30b5acs1jme12b2sn1",
      "slug": "evcon-xh624e2s11-ctf30b5acs1jme12b2sn1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf30b5acs1jme12b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36b5cds1jmet12bs2n1",
      "slug": "evcon-xh636e2s11-ctf36b5cds1jmet12bs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds1jmet12bs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36b5cds2",
      "slug": "evcon-xh636e2s11-ctf36b5cds2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf36b5cds2jme12b2sn2",
      "slug": "evcon-xh636e2s11-ctf36b5cds2jme12b2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf36b5cds2jme12b2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs2jme12c2sn2",
      "slug": "evcon-xh636e2s11-ctm48c5cfs2jme12c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs2",
      "slug": "evcon-xh636e2s11-ctm48c5cfs2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs1jmet16cs2n1",
      "slug": "evcon-xh636e2s11-ctm48c5cfs1jmet16cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs1jmet12cs2n1",
      "slug": "evcon-xh636e2s11-ctm48c5cfs1jmet12cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs1jme16c2sn1",
      "slug": "evcon-xh636e2s11-ctm48c5cfs1jme16c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs1jme12c2sn1",
      "slug": "evcon-xh636e2s11-ctm48c5cfs1jme12c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs1",
      "slug": "evcon-xh636e2s11-ctm48c5cfs1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu36b5xds2txv",
      "slug": "evcon-xh636e2s11-ctu36b5xds2txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu36b5xds2jme12b2sn2txv",
      "slug": "evcon-xh636e2s11-ctu36b5xds2jme12b2sn2txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme12b2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu36b5xds1txv",
      "slug": "evcon-xh636e2s11-ctu36b5xds1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu36b5xds1jmet12bs2n1txv",
      "slug": "evcon-xh636e2s11-ctu36b5xds1jmet12bs2n1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet12bs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctu36b5xds1jme12b2sn1txv",
      "slug": "evcon-xh636e2s11-ctu36b5xds1jme12b2sn1txv",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jme12b2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48d5cfs1jme18d2sn1",
      "slug": "evcon-xh636e2s11-ctm48d5cfs1jme18d2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48d5cfs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48c5cfs2jme16c2sn2",
      "slug": "evcon-xh636e2s11-ctm48c5cfs2jme16c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48c5cfs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds1jme12c2sn1",
      "slug": "evcon-xh636e2s11-ctm36c5cds1jme12c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds1",
      "slug": "evcon-xh636e2s11-ctm36c5cds1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs2jme12c2sn2",
      "slug": "evcon-xh648e2s11-ctf60c5chs2jme12c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs2jme16c2sn2",
      "slug": "evcon-xh648e2s11-ctf60c5chs2jme16c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5cgs1",
      "slug": "evcon-xh648e2s11-ctf60d5cgs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5cgs1jme18d2sn1",
      "slug": "evcon-xh648e2s11-ctf60d5cgs1jme18d2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60d5cgs1jmet18ds2n1",
      "slug": "evcon-xh648e2s11-ctf60d5cgs1jmet18ds2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60d5cgs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs1jmet12cs2n1",
      "slug": "evcon-xh648e2s11-ctf60c5cgs1jmet12cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs1jmet16cs2n1",
      "slug": "evcon-xh648e2s11-ctf60c5cgs1jmet16cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds1jme16c2sn1",
      "slug": "evcon-xh636e2s11-ctm36c5cds1jme16c2sn1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds2jme12c2sn2",
      "slug": "evcon-xh636e2s11-ctm36c5cds2jme12c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds2",
      "slug": "evcon-xh636e2s11-ctm36c5cds2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds1jmet16cs2n1",
      "slug": "evcon-xh636e2s11-ctm36c5cds1jmet16cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds1jmet12cs2n1",
      "slug": "evcon-xh636e2s11-ctm36c5cds1jmet12cs2n1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36c5cds2jme16c2sn2",
      "slug": "evcon-xh636e2s11-ctm36c5cds2jme16c2sn2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36c5cds2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs1jmet12cs2n1",
      "slug": "evcon-xh648e2s11-ctf60c5chs1jmet12cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet12cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs1jmet16cs2n1",
      "slug": "evcon-xh648e2s11-ctf60c5chs1jmet16cs2n1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs2",
      "slug": "evcon-xh648e2s11-ctf60c5chs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-jhe36c5cd2ss1",
      "slug": "evcon-xh636e2s11-jhe36c5cd2ss1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-jhe36c5cd2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-jhe36b5cd2ss2",
      "slug": "evcon-xh636e2s11-jhe36b5cd2ss2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-jhe36b5cd2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-jhe36b5cd2ss1",
      "slug": "evcon-xh636e2s11-jhe36b5cd2ss1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-jhe36b5cd2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs1jme16c2sn1",
      "slug": "evcon-xh648e2s11-ctf60c5chs1jme16c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs1jme12c2sn1",
      "slug": "evcon-xh648e2s11-ctf60c5chs1jme12c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5chs1",
      "slug": "evcon-xh648e2s11-ctf60c5chs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs2jme16c2sn2",
      "slug": "evcon-xh648e2s11-ctf60c5cgs2jme16c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs2jme12c2sn2",
      "slug": "evcon-xh648e2s11-ctf60c5cgs2jme12c2sn2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2jme12c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs2",
      "slug": "evcon-xh648e2s11-ctf60c5cgs2",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs1jme16c2sn1",
      "slug": "evcon-xh648e2s11-ctf60c5cgs1jme16c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs1",
      "slug": "evcon-xh648e2s11-ctf60c5cgs1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-jhe42c5cf2ss1",
      "slug": "evcon-xh636e2s11-jhe42c5cf2ss1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-jhe42c5cf2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-jhe36c5cd2ss2",
      "slug": "evcon-xh636e2s11-jhe36c5cd2ss2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-jhe36c5cd2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jhe60c5ch2ss1",
      "slug": "evcon-xh660e2s11-jhe60c5ch2ss1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jhe60c5ch2ss2",
      "slug": "evcon-xh660e2s11-jhe60c5ch2ss2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jhe60c5ch2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh648e2s11-ctf60c5cgs1jme12c2sn1",
      "slug": "evcon-xh648e2s11-ctf60c5cgs1jme12c2sn1",
      "modelId": "model-evcon-xh648e2s11",
      "outdoorUnitId": "ou-evcon-xh648e2s11",
      "indoorUnitId": "iu-ctf60c5cgs1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jhe60d5ch2ss1",
      "slug": "evcon-xh660e2s11-jhe60d5ch2ss1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jhe60d5ch2ss2",
      "slug": "evcon-xh660e2s11-jhe60d5ch2ss2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5ch2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jhe60d5cj2ss1",
      "slug": "evcon-xh660e2s11-jhe60d5cj2ss1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5cj2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-jhe60d5cj2ss2",
      "slug": "evcon-xh660e2s11-jhe60d5cj2ss2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-jhe60d5cj2ss2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5cjs1",
      "slug": "evcon-xh660e2s11-ctm60d5cjs1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5cjs1jme18d2sn1",
      "slug": "evcon-xh660e2s11-ctm60d5cjs1jme18d2sn1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5cjs2",
      "slug": "evcon-xh660e2s11-ctm60d5cjs2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5chs1jme18d2sn1",
      "slug": "evcon-xh660e2s11-ctm60d5chs1jme18d2sn1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5cjs1",
      "slug": "evcon-xh660e2s11-ctf60d5cjs1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5cjs1jme18d2sn1",
      "slug": "evcon-xh660e2s11-ctf60d5cjs1jme18d2sn1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5cjs1jmet18ds2n1",
      "slug": "evcon-xh660e2s11-ctf60d5cjs1jmet18ds2n1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5cjs2",
      "slug": "evcon-xh660e2s11-ctf60d5cjs2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5cjs2jme18d2sn2",
      "slug": "evcon-xh660e2s11-ctf60d5cjs2jme18d2sn2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5cjs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc48fbcn1",
      "slug": "evcon-rhp15042b21-xahc48fbcn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc48fbcn1jmet16cs2n1",
      "slug": "evcon-rhp15042b21-xahc48fbcn1jmet16cs2n1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rh630e2s11-jhe30b5ad2ss1",
      "slug": "evcon-rh630e2s11-jhe30b5ad2ss1",
      "modelId": "model-evcon-rh630e2s11",
      "outdoorUnitId": "ou-evcon-rh630e2s11",
      "indoorUnitId": "iu-jhe30b5ad2ss1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15024b21-xafb30cban1",
      "slug": "evcon-rhp15024b21-xafb30cban1",
      "modelId": "model-evcon-rhp15024b21",
      "outdoorUnitId": "ou-evcon-rhp15024b21",
      "indoorUnitId": "iu-xafb30cban1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15024b21-xahc36dban1",
      "slug": "evcon-rhp15024b21-xahc36dban1",
      "modelId": "model-evcon-rhp15024b21",
      "outdoorUnitId": "ou-evcon-rhp15024b21",
      "indoorUnitId": "iu-xahc36dban1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafb36dban1",
      "slug": "evcon-rhp15030b21-xafb36dban1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafb36dban1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafb36dban1jme12b2sn1",
      "slug": "evcon-rhp15030b21-xafb36dban1jme12b2sn1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafb36dban1jme12b2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafc36dban1",
      "slug": "evcon-rhp15030b21-xafc36dban1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafc36dban1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafc36dban1jme12c2sn1",
      "slug": "evcon-rhp15030b21-xafc36dban1jme12c2sn1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafc36dban1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafc36dban1jme16c2sn1",
      "slug": "evcon-rhp15030b21-xafc36dban1jme16c2sn1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafc36dban1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafc48fban1",
      "slug": "evcon-rhp15030b21-xafc48fban1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafc48fban1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafc48fban1jme12c2sn1",
      "slug": "evcon-rhp15030b21-xafc48fban1jme12c2sn1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafc48fban1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafc48fban1jme16c2sn1",
      "slug": "evcon-rhp15030b21-xafc48fban1jme16c2sn1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafc48fban1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15030b21-xafd48fban1jme18d2sn1",
      "slug": "evcon-rhp15030b21-xafd48fban1jme18d2sn1",
      "modelId": "model-evcon-rhp15030b21",
      "outdoorUnitId": "ou-evcon-rhp15030b21",
      "indoorUnitId": "iu-xafd48fban1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xafc48fbcn1jme12c2sn1",
      "slug": "evcon-rhp15036b21-xafc48fbcn1jme12c2sn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xafc48fbcn1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xafd48fbcn1jme18d2sn1",
      "slug": "evcon-rhp15036b21-xafd48fbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xafd48fbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xahc36dbcn1jme12c2sn1",
      "slug": "evcon-rhp15036b21-xahc36dbcn1jme12c2sn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xahc36dbcn1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xahc36dbcn1jme16c2sn1",
      "slug": "evcon-rhp15036b21-xahc36dbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xahc36dbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xahc48fbcn1",
      "slug": "evcon-rhp15036b21-xahc48fbcn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xahc48fbcn1",
      "minHeatingTempC": -25,
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xahc48fbcn1jme16c2sn1",
      "slug": "evcon-rhp15036b21-xahc48fbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xahc48fbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15036b21-xahd48fbcn1jme18d2sn1",
      "slug": "evcon-rhp15036b21-xahd48fbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15036b21",
      "outdoorUnitId": "ou-evcon-rhp15036b21",
      "indoorUnitId": "iu-xahd48fbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafc48fbcn1",
      "slug": "evcon-rhp15042b21-xafc48fbcn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafc48fbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafc48fbcn1jme12c2sn1",
      "slug": "evcon-rhp15042b21-xafc48fbcn1jme12c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafc48fbcn1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafc48fbcn1jme16c2sn1",
      "slug": "evcon-rhp15042b21-xafc48fbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafc48fbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafc48fxxn1txv",
      "slug": "evcon-rhp15042b21-xafc48fxxn1txv",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafc48fxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafc60gbcn1jme12c2sn1",
      "slug": "evcon-rhp15042b21-xafc60gbcn1jme12c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafc60gbcn1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafc60gbcn1jme16c2sn1",
      "slug": "evcon-rhp15042b21-xafc60gbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafc60gbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafd48fbcn1",
      "slug": "evcon-rhp15042b21-xafd48fbcn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafd48fbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafd48fbcn1jme18d2sn1",
      "slug": "evcon-rhp15042b21-xafd48fbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafd48fbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xafd60gbcn1jme18d2sn1",
      "slug": "evcon-rhp15042b21-xafd60gbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xafd60gbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc48fbcn1jme12c2sn1",
      "slug": "evcon-rhp15042b21-xahc48fbcn1jme12c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc48fbcn1jme16c2sn1",
      "slug": "evcon-rhp15042b21-xahc48fbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc48fbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5chs2",
      "slug": "evcon-xh660e2s11-ctf60d5chs2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5chs2jme18d2sn2",
      "slug": "evcon-xh660e2s11-ctf60d5chs2jme18d2sn2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60c5chs1",
      "slug": "evcon-xh660e2s11-ctm60c5chs1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60c5chs1jme16c2sn1",
      "slug": "evcon-xh660e2s11-ctm60c5chs1jme16c2sn1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60c5chs1jmet16cs2n1",
      "slug": "evcon-xh660e2s11-ctm60c5chs1jmet16cs2n1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60c5chs2",
      "slug": "evcon-xh660e2s11-ctm60c5chs2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60c5chs2jme16c2sn2",
      "slug": "evcon-xh660e2s11-ctm60c5chs2jme16c2sn2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60c5chs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5chs1",
      "slug": "evcon-xh660e2s11-ctm60d5chs1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5chs1jmet18ds2n1",
      "slug": "evcon-xh660e2s11-ctm60d5chs1jmet18ds2n1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5chs2",
      "slug": "evcon-xh660e2s11-ctm60d5chs2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5chs2jme18d2sn2",
      "slug": "evcon-xh660e2s11-ctm60d5chs2jme18d2sn2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5chs2jme18d2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5cjs1jmet18ds2n1",
      "slug": "evcon-xh660e2s11-ctm60d5cjs1jmet18ds2n1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs1jmet18ds2n1",
      "minHeatingTempC": -15,
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctm60d5cjs2jme18d2sn2",
      "slug": "evcon-xh660e2s11-ctm60d5cjs2jme18d2sn2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctm60d5cjs2jme18d2sn2",
      "minHeatingTempC": -15,
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctu60d5xhs1jme18d2sn1txv",
      "slug": "evcon-xh660e2s11-ctu60d5xhs1jme18d2sn1txv",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jme18d2sn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "slug": "evcon-xh660e2s11-ctu60d5xhs1jmet18ds2n1txv",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1jmet18ds2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctu60d5xhs1txv",
      "slug": "evcon-xh660e2s11-ctu60d5xhs1txv",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctu60d5xhs1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48d5cfs1",
      "slug": "evcon-xh636e2s11-ctf48d5cfs1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48d5cfs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctf48d5cfs2",
      "slug": "evcon-xh636e2s11-ctf48d5cfs2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctf48d5cfs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36b5cds1",
      "slug": "evcon-xh636e2s11-ctm36b5cds1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36b5cds1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm36b5cds2",
      "slug": "evcon-xh636e2s11-ctm36b5cds2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm36b5cds2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48d5cfs1",
      "slug": "evcon-xh636e2s11-ctm48d5cfs1",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48d5cfs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh636e2s11-ctm48d5cfs2",
      "slug": "evcon-xh636e2s11-ctm48d5cfs2",
      "modelId": "model-evcon-xh636e2s11",
      "outdoorUnitId": "ou-evcon-xh636e2s11",
      "indoorUnitId": "iu-ctm48d5cfs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds1jmet08bs2n1txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds1jmet08bs2n1txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds1jmet08bs2n1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctu36b5xds2jme08b2sn2txv",
      "slug": "evcon-xh624e2s11-ctu36b5xds2jme08b2sn2txv",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctu36b5xds2jme08b2sn2txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xafd60jbcn1",
      "slug": "evcon-rhp15060b21-xafd60jbcn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xafd60jbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xafd60jbcn1jme18d2sn1",
      "slug": "evcon-rhp15060b21-xafd60jbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xafd60jbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xahc60hbcn1",
      "slug": "evcon-rhp15060b21-xahc60hbcn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xahc60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xahd60hbcn1",
      "slug": "evcon-rhp15060b21-xahd60hbcn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xahd60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xahd60jbcn1",
      "slug": "evcon-rhp15060b21-xahd60jbcn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xahd60jbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xahd60jbcn1jme18d2sn1",
      "slug": "evcon-rhp15060b21-xahd60jbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xahd60jbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads1jmet08bs2n1",
      "slug": "evcon-xh624e2s11-ctf36b5ads1jmet08bs2n1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads1jmet08bs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctf36b5ads2jme08b2sn2",
      "slug": "evcon-xh624e2s11-ctf36b5ads2jme08b2sn2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctf36b5ads2jme08b2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads1jmet08bs2n1",
      "slug": "evcon-xh624e2s11-ctm36b5ads1jmet08bs2n1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmet08bs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads1jmet12bs2n1",
      "slug": "evcon-xh624e2s11-ctm36b5ads1jmet12bs2n1",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads1jmet12bs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads2jme08b2sn2",
      "slug": "evcon-xh624e2s11-ctm36b5ads2jme08b2sn2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jme08b2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh624e2s11-ctm36b5ads2jme12b2sn2",
      "slug": "evcon-xh624e2s11-ctm36b5ads2jme12b2sn2",
      "modelId": "model-evcon-xh624e2s11",
      "outdoorUnitId": "ou-evcon-xh624e2s11",
      "indoorUnitId": "iu-ctm36b5ads2jme12b2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc48fxxn1txv",
      "slug": "evcon-rhp15042b21-xahc48fxxn1txv",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc48fxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc60gbcn1jme12c2sn1",
      "slug": "evcon-rhp15042b21-xahc60gbcn1jme12c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc60gbcn1jme12c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahc60gbcn1jme16c2sn1",
      "slug": "evcon-rhp15042b21-xahc60gbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahc60gbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahd48fbcn1",
      "slug": "evcon-rhp15042b21-xahd48fbcn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahd48fbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahd48fbcn1jme18d2sn1",
      "slug": "evcon-rhp15042b21-xahd48fbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahd48fbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahd48fxxn1txv",
      "slug": "evcon-rhp15042b21-xahd48fxxn1txv",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahd48fxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xahd60gbcn1jme18d2sn1",
      "slug": "evcon-rhp15042b21-xahd60gbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xahd60gbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15042b21-xauc48fxxn1txv",
      "slug": "evcon-rhp15042b21-xauc48fxxn1txv",
      "modelId": "model-evcon-rhp15042b21",
      "outdoorUnitId": "ou-evcon-rhp15042b21",
      "indoorUnitId": "iu-xauc48fxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xafc60hbcn1",
      "slug": "evcon-rhp15048b21-xafc60hbcn1",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xafc60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xafc60hxxn1txv",
      "slug": "evcon-rhp15048b21-xafc60hxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xafc60hxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xafd60hbcn1",
      "slug": "evcon-rhp15048b21-xafd60hbcn1",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xafd60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xafd60hxxn1txv",
      "slug": "evcon-rhp15048b21-xafd60hxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xafd60hxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahc60gbcn1",
      "slug": "evcon-rhp15048b21-xahc60gbcn1",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahc60gbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahc60gxxn1txv",
      "slug": "evcon-rhp15048b21-xahc60gxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahc60gxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahd60gbcn1",
      "slug": "evcon-rhp15048b21-xahd60gbcn1",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahd60gbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahd60gxxn1txv",
      "slug": "evcon-rhp15048b21-xahd60gxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahd60gxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahd60hbcn1",
      "slug": "evcon-rhp15048b21-xahd60hbcn1",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahd60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xahd60hxxn1txv",
      "slug": "evcon-rhp15048b21-xahd60hxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xahd60hxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15048b21-xaud60hxxn1txv",
      "slug": "evcon-rhp15048b21-xaud60hxxn1txv",
      "modelId": "model-evcon-rhp15048b21",
      "outdoorUnitId": "ou-evcon-rhp15048b21",
      "indoorUnitId": "iu-xaud60hxxn1txv",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-jhetc60hbcs2n1",
      "slug": "evcon-rhp15060b21-jhetc60hbcs2n1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-jhetc60hbcs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-jhvtc60hbcc2n1",
      "slug": "evcon-rhp15060b21-jhvtc60hbcc2n1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-jhvtc60hbcc2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xafc60hbcn1",
      "slug": "evcon-rhp15060b21-xafc60hbcn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xafc60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xafc60hbcn1jme16c2sn1",
      "slug": "evcon-rhp15060b21-xafc60hbcn1jme16c2sn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xafc60hbcn1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xafd60hbcn1",
      "slug": "evcon-rhp15060b21-xafd60hbcn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xafd60hbcn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-rhp15060b21-xafd60hbcn1jme18d2sn1",
      "slug": "evcon-rhp15060b21-xafd60hbcn1jme18d2sn1",
      "modelId": "model-evcon-rhp15060b21",
      "outdoorUnitId": "ou-evcon-rhp15060b21",
      "indoorUnitId": "iu-xafd60hbcn1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60c5chs1",
      "slug": "evcon-xh660e2s11-ctf60c5chs1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60c5chs1jme16c2sn1",
      "slug": "evcon-xh660e2s11-ctf60c5chs1jme16c2sn1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jme16c2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60c5chs1jmet16cs2n1",
      "slug": "evcon-xh660e2s11-ctf60c5chs1jmet16cs2n1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs1jmet16cs2n1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60c5chs2",
      "slug": "evcon-xh660e2s11-ctf60c5chs2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60c5chs2jme16c2sn2",
      "slug": "evcon-xh660e2s11-ctf60c5chs2jme16c2sn2",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60c5chs2jme16c2sn2",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5chs1",
      "slug": "evcon-xh660e2s11-ctf60d5chs1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5chs1jme18d2sn1",
      "slug": "evcon-xh660e2s11-ctf60d5chs1jme18d2sn1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jme18d2sn1",
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
          "sourceId": "src-evcon-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-evcon-xh660e2s11-ctf60d5chs1jmet18ds2n1",
      "slug": "evcon-xh660e2s11-ctf60d5chs1jmet18ds2n1",
      "modelId": "model-evcon-xh660e2s11",
      "outdoorUnitId": "ou-evcon-xh660e2s11",
      "indoorUnitId": "iu-ctf60d5chs1jmet18ds2n1",
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
          "sourceId": "src-evcon-epa",
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
