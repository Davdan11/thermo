import type { BrandDataset } from "../../types";

export const brand_northco_climatcaDataset: BrandDataset = {
  "brand": {
    "id": "brand-northco-climatca",
    "slug": "northco-climatca",
    "name": "NORTHCO CLIMAT.CA",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour NORTHCO CLIMAT.CA",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-northco-climatca-epa",
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
      "id": "series-northco-climatca-extreme-serie",
      "slug": "northco-climatca-extreme-serie",
      "name": "Extreme serie",
      "brandId": "brand-northco-climatca",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Extreme serie de NORTHCO CLIMAT.CA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-northco-climatca-northco-climatca",
      "slug": "northco-climatca-northco-climatca",
      "name": "NORTHCO CLIMAT.CA",
      "brandId": "brand-northco-climatca",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série NORTHCO CLIMAT.CA de NORTHCO CLIMAT.CA",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-northco-climatca-tsh12-ncc-hei2napot24u",
      "slug": "northco-climatca-tsh12-ncc-hei2napot24u",
      "name": "NORTHCO CLIMAT.CA TSH12-NCC-HEI2NAPOT24U",
      "seriesId": "series-northco-climatca-extreme-serie",
      "brandId": "brand-northco-climatca",
      "modelNumber": "TSH12-NCC-HEI2NAPOT24U",
      "normalizedModelNumber": "tsh12-ncc-hei2napot24u",
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
      "id": "model-northco-climatca-tsc-ncc454-12ha1i3ti22",
      "slug": "northco-climatca-tsc-ncc454-12ha1i3ti22",
      "name": "NORTHCO CLIMAT.CA TSC-NCC454-12HA1/I3TI22",
      "seriesId": "series-northco-climatca-northco-climatca",
      "brandId": "brand-northco-climatca",
      "modelNumber": "TSC-NCC454-12HA1/I3TI22",
      "normalizedModelNumber": "tsc-ncc454-12ha1/i3ti22",
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
      "id": "model-northco-climatca-tsc-ncc454-18ha1i3t121",
      "slug": "northco-climatca-tsc-ncc454-18ha1i3t121",
      "name": "NORTHCO CLIMAT.CA TSC-NCC454-18HA1/I3T121",
      "seriesId": "series-northco-climatca-northco-climatca",
      "brandId": "brand-northco-climatca",
      "modelNumber": "TSC-NCC454-18HA1/I3T121",
      "normalizedModelNumber": "tsc-ncc454-18ha1/i3t121",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-northco-climatca-tsh12-ncc-hei2napot24u",
      "modelNumber": "TSH12-NCC-HEI2NAPOT24U",
      "brandId": "brand-northco-climatca",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-northco-climatca-tsc-ncc454-12ha1i3ti22",
      "modelNumber": "TSC-NCC454-12HA1/I3TI22",
      "brandId": "brand-northco-climatca",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-northco-climatca-tsc-ncc454-18ha1i3t121",
      "modelNumber": "TSC-NCC454-18HA1/I3T121",
      "brandId": "brand-northco-climatca",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-tsh12-ncc-hei2napot24u",
      "modelNumber": "TSH12-NCC-HEI2NAPOT24U",
      "brandId": "brand-northco-climatca",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-ncc454-12ha1i3ti22",
      "modelNumber": "TSC-NCC454-12HA1/I3TI22",
      "brandId": "brand-northco-climatca",
      "type": "wall-single"
    },
    {
      "id": "iu-tsc-ncc454-18ha1i3t121",
      "modelNumber": "TSC-NCC454-18HA1/I3T121",
      "brandId": "brand-northco-climatca",
      "type": "wall-single"
    }
  ],
  "configurations": [
    {
      "id": "config-northco-climatca-tsh12-ncc-hei2napot24u-tsh12-ncc-hei2napot24u",
      "slug": "northco-climatca-tsh12-ncc-hei2napot24u-tsh12-ncc-hei2napot24u",
      "modelId": "model-northco-climatca-tsh12-ncc-hei2napot24u",
      "outdoorUnitId": "ou-northco-climatca-tsh12-ncc-hei2napot24u",
      "indoorUnitId": "iu-tsh12-ncc-hei2napot24u",
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
          "sourceId": "src-northco-climatca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-northco-climatca-tsc-ncc454-12ha1i3ti22-tsc-ncc454-12ha1i3ti22",
      "slug": "northco-climatca-tsc-ncc454-12ha1i3ti22-tsc-ncc454-12ha1i3ti22",
      "modelId": "model-northco-climatca-tsc-ncc454-12ha1i3ti22",
      "outdoorUnitId": "ou-northco-climatca-tsc-ncc454-12ha1i3ti22",
      "indoorUnitId": "iu-tsc-ncc454-12ha1i3ti22",
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
          "sourceId": "src-northco-climatca-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-northco-climatca-tsc-ncc454-18ha1i3t121-tsc-ncc454-18ha1i3t121",
      "slug": "northco-climatca-tsc-ncc454-18ha1i3t121-tsc-ncc454-18ha1i3t121",
      "modelId": "model-northco-climatca-tsc-ncc454-18ha1i3t121",
      "outdoorUnitId": "ou-northco-climatca-tsc-ncc454-18ha1i3t121",
      "indoorUnitId": "iu-tsc-ncc454-18ha1i3t121",
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
          "sourceId": "src-northco-climatca-epa",
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
