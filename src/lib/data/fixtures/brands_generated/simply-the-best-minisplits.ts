import type { BrandDataset } from "../../types";

export const brand_simply_the_best_minisplitsDataset: BrandDataset = {
  "brand": {
    "id": "brand-simply-the-best-minisplits",
    "slug": "simply-the-best-minisplits",
    "name": "Simply The Best Minisplits",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Simply The Best Minisplits",
    "activeInQuebec": false,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-simply-the-best-minisplits-epa",
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
      "id": "series-simply-the-best-minisplits-sbm-series",
      "slug": "simply-the-best-minisplits-sbm-series",
      "name": "SBM series",
      "brandId": "brand-simply-the-best-minisplits",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série SBM series de Simply The Best Minisplits",
      "imageUrl": "/images/series/simply-the-best-minisplits-simply-the-best-minisplits-sbm-series.jpg",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-simply-the-best-minisplits-sbm-48hfn1-m-x",
      "slug": "simply-the-best-minisplits-sbm-48hfn1-m-x",
      "name": "Simply The Best Minisplits SBM-48HFN1-M-[X]",
      "seriesId": "series-simply-the-best-minisplits-sbm-series",
      "brandId": "brand-simply-the-best-minisplits",
      "modelNumber": "SBM-48HFN1-M-[X]",
      "normalizedModelNumber": "sbm-48hfn1-m-[x]",
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
      "id": "ou-simply-the-best-minisplits-sbm-48hfn1-m-x",
      "modelNumber": "SBM-48HFN1-M-[X]",
      "brandId": "brand-simply-the-best-minisplits",
      "refrigerant": "R-410A"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-51092",
      "modelNumber": "IU-51092",
      "brandId": "brand-simply-the-best-minisplits",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-simply-the-best-minisplits-sbm-48hfn1-m-x-iu-51092",
      "slug": "simply-the-best-minisplits-sbm-48hfn1-m-x-iu-51092",
      "modelId": "model-simply-the-best-minisplits-sbm-48hfn1-m-x",
      "outdoorUnitId": "ou-simply-the-best-minisplits-sbm-48hfn1-m-x",
      "indoorUnitId": "iu-iu-51092",
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
          "sourceId": "src-simply-the-best-minisplits-epa",
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
