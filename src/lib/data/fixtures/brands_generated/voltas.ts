import type { BrandDataset } from "../../types";

export const brand_voltasDataset: BrandDataset = {
  "brand": {
    "id": "brand-voltas",
    "slug": "voltas",
    "name": "Voltas",
    "countryOfOrigin": "Unknown",
    "websiteUrl": "",
    "description": "Catalogue importé pour Voltas",
    "activeInQuebec": true,
    "status": "published",
    "createdAt": "2026-08-28",
    "updatedAt": "2026-08-28",
    "verifiedAt": null
  },
  "sources": [
    {
      "id": "src-voltas-epa",
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
      "id": "series-voltas-multimax-vertis-series",
      "slug": "voltas-multimax-vertis-series",
      "name": "MultiMax Vertis Series",
      "brandId": "brand-voltas",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série MultiMax Vertis Series de Voltas",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-voltas-vertis-series",
      "slug": "voltas-vertis-series",
      "name": "Vertis Series",
      "brandId": "brand-voltas",
      "systemType": "wall-single",
      "categories": [
        "air-air",
        "conventional"
      ],
      "description": "Série Vertis Series de Voltas",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-voltas-whole-house-heat-pump-vertis-series",
      "slug": "voltas-whole-house-heat-pump-vertis-series",
      "name": "Whole House Heat Pump Vertis Series",
      "brandId": "brand-voltas",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Whole House Heat Pump Vertis Series de Voltas",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "series-voltas-whole-house-heat-pump-vertis-series-coil",
      "slug": "voltas-whole-house-heat-pump-vertis-series-coil",
      "name": "Whole House Heat Pump Vertis Series-Coil",
      "brandId": "brand-voltas",
      "systemType": "central-ducted",
      "categories": [
        "air-air",
        "cold-climate"
      ],
      "description": "Série Whole House Heat Pump Vertis Series-Coil de Voltas",
      "imageUrl": "/images/placeholder-heatpump.png",
      "status": "published",
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    }
  ],
  "models": [
    {
      "id": "model-voltas-vmtcuhc27vts25",
      "slug": "voltas-vmtcuhc27vts25",
      "name": "Voltas VMTCUHC27VTS25",
      "seriesId": "series-voltas-multimax-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VMTCUHC27VTS25",
      "normalizedModelNumber": "vmtcuhc27vts25",
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
      "id": "model-voltas-cu-vst09hc-wifidr25",
      "slug": "voltas-cu-vst09hc-wifidr25",
      "name": "Voltas CU-VST09HC-WIFIDR25",
      "seriesId": "series-voltas-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "CU-VST09HC-WIFIDR25",
      "normalizedModelNumber": "cu-vst09hc-wifidr25",
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
      "id": "model-voltas-vmtcuhc36vts25",
      "slug": "voltas-vmtcuhc36vts25",
      "name": "Voltas VMTCUHC36VTS25",
      "seriesId": "series-voltas-multimax-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VMTCUHC36VTS25",
      "normalizedModelNumber": "vmtcuhc36vts25",
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
      "id": "model-voltas-vmtcuhc18vts25",
      "slug": "voltas-vmtcuhc18vts25",
      "name": "Voltas VMTCUHC18VTS25",
      "seriesId": "series-voltas-multimax-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VMTCUHC18VTS25",
      "normalizedModelNumber": "vmtcuhc18vts25",
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
      "id": "model-voltas-vmtcuhc42vts25",
      "slug": "voltas-vmtcuhc42vts25",
      "name": "Voltas VMTCUHC42VTS25",
      "seriesId": "series-voltas-multimax-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VMTCUHC42VTS25",
      "normalizedModelNumber": "vmtcuhc42vts25",
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
      "id": "model-voltas-vauwr-24hcdr2",
      "slug": "voltas-vauwr-24hcdr2",
      "name": "Voltas VAUWR-24HCDR2",
      "seriesId": "series-voltas-whole-house-heat-pump-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VAUWR-24HCDR2",
      "normalizedModelNumber": "vauwr-24hcdr2",
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
      "id": "model-voltas-cu-vst18hc-wifidr25",
      "slug": "voltas-cu-vst18hc-wifidr25",
      "name": "Voltas CU-VST18HC-WIFIDR25",
      "seriesId": "series-voltas-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "CU-VST18HC-WIFIDR25",
      "normalizedModelNumber": "cu-vst18hc-wifidr25",
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
      "id": "model-voltas-vauwr-36hcdr2",
      "slug": "voltas-vauwr-36hcdr2",
      "name": "Voltas VAUWR-36HCDR2",
      "seriesId": "series-voltas-whole-house-heat-pump-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VAUWR-36HCDR2",
      "normalizedModelNumber": "vauwr-36hcdr2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 32000,
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
      "id": "model-voltas-vauwr-60hcdr2",
      "slug": "voltas-vauwr-60hcdr2",
      "name": "Voltas VAUWR-60HCDR2",
      "seriesId": "series-voltas-whole-house-heat-pump-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VAUWR-60HCDR2",
      "normalizedModelNumber": "vauwr-60hcdr2",
      "isActive2026": true,
      "thermomatchEligible": true,
      "nominalCapacityBtu": 57000,
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
      "id": "model-voltas-vauwr-48hcdr2",
      "slug": "voltas-vauwr-48hcdr2",
      "name": "Voltas VAUWR-48HCDR2",
      "seriesId": "series-voltas-whole-house-heat-pump-vertis-series",
      "brandId": "brand-voltas",
      "modelNumber": "VAUWR-48HCDR2",
      "normalizedModelNumber": "vauwr-48hcdr2",
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
    }
  ],
  "outdoorUnits": [
    {
      "id": "ou-voltas-vmtcuhc27vts25",
      "modelNumber": "VMTCUHC27VTS25",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-cu-vst09hc-wifidr25",
      "modelNumber": "CU-VST09HC-WIFIDR25",
      "brandId": "brand-voltas",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-voltas-vmtcuhc36vts25",
      "modelNumber": "VMTCUHC36VTS25",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-vmtcuhc18vts25",
      "modelNumber": "VMTCUHC18VTS25",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-vmtcuhc42vts25",
      "modelNumber": "VMTCUHC42VTS25",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-vauwr-24hcdr2",
      "modelNumber": "VAUWR-24HCDR2",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-cu-vst18hc-wifidr25",
      "modelNumber": "CU-VST18HC-WIFIDR25",
      "brandId": "brand-voltas",
      "refrigerant": "R-32"
    },
    {
      "id": "ou-voltas-vauwr-36hcdr2",
      "modelNumber": "VAUWR-36HCDR2",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-vauwr-60hcdr2",
      "modelNumber": "VAUWR-60HCDR2",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    },
    {
      "id": "ou-voltas-vauwr-48hcdr2",
      "modelNumber": "VAUWR-48HCDR2",
      "brandId": "brand-voltas",
      "refrigerant": "R-454B"
    }
  ],
  "indoorUnits": [
    {
      "id": "iu-iu-52287",
      "modelNumber": "IU-52287",
      "brandId": "brand-voltas",
      "type": "wall-single"
    },
    {
      "id": "iu-eu-vst09hc-wifidr25",
      "modelNumber": "EU- VST09HC-WIFIDR25",
      "brandId": "brand-voltas",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52288",
      "modelNumber": "IU-52288",
      "brandId": "brand-voltas",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52286",
      "modelNumber": "IU-52286",
      "brandId": "brand-voltas",
      "type": "wall-single"
    },
    {
      "id": "iu-iu-52289",
      "modelNumber": "IU-52289",
      "brandId": "brand-voltas",
      "type": "wall-single"
    },
    {
      "id": "iu-vauh-24hcdr2",
      "modelNumber": "VAUH-24HCDR2",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-eu-vst18hc-wifidr25",
      "modelNumber": "EU- VST18HC-WIFIDR25",
      "brandId": "brand-voltas",
      "type": "wall-single"
    },
    {
      "id": "iu-vauh-36hcdr2",
      "modelNumber": "VAUH-36HCDR2",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-vauh-60hcdr2",
      "modelNumber": "VAUH-60HCDR2",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-vauh-48hcdr2",
      "modelNumber": "VAUH-48HCDR2",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc37d3j",
      "modelNumber": "DC37D3J",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc49b3j",
      "modelNumber": "DC49B3J",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc61c4j",
      "modelNumber": "DC61C4J",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    },
    {
      "id": "iu-dc31d2j",
      "modelNumber": "DC31D2J",
      "brandId": "brand-voltas",
      "type": "central-ducted"
    }
  ],
  "configurations": [
    {
      "id": "config-voltas-vmtcuhc27vts25-iu-52287",
      "slug": "voltas-vmtcuhc27vts25-iu-52287",
      "modelId": "model-voltas-vmtcuhc27vts25",
      "outdoorUnitId": "ou-voltas-vmtcuhc27vts25",
      "indoorUnitId": "iu-iu-52287",
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
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-cu-vst09hc-wifidr25-eu-vst09hc-wifidr25",
      "slug": "voltas-cu-vst09hc-wifidr25-eu-vst09hc-wifidr25",
      "modelId": "model-voltas-cu-vst09hc-wifidr25",
      "outdoorUnitId": "ou-voltas-cu-vst09hc-wifidr25",
      "indoorUnitId": "iu-eu-vst09hc-wifidr25",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 22.5,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vmtcuhc36vts25-iu-52288",
      "slug": "voltas-vmtcuhc36vts25-iu-52288",
      "modelId": "model-voltas-vmtcuhc36vts25",
      "outdoorUnitId": "ou-voltas-vmtcuhc36vts25",
      "indoorUnitId": "iu-iu-52288",
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
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vmtcuhc18vts25-iu-52286",
      "slug": "voltas-vmtcuhc18vts25-iu-52286",
      "modelId": "model-voltas-vmtcuhc18vts25",
      "outdoorUnitId": "ou-voltas-vmtcuhc18vts25",
      "indoorUnitId": "iu-iu-52286",
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
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vmtcuhc42vts25-iu-52289",
      "slug": "voltas-vmtcuhc42vts25-iu-52289",
      "modelId": "model-voltas-vmtcuhc42vts25",
      "outdoorUnitId": "ou-voltas-vmtcuhc42vts25",
      "indoorUnitId": "iu-iu-52289",
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
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-24hcdr2-vauh-24hcdr2",
      "slug": "voltas-vauwr-24hcdr2-vauh-24hcdr2",
      "modelId": "model-voltas-vauwr-24hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-24hcdr2",
      "indoorUnitId": "iu-vauh-24hcdr2",
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
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-cu-vst18hc-wifidr25-eu-vst18hc-wifidr25",
      "slug": "voltas-cu-vst18hc-wifidr25-eu-vst18hc-wifidr25",
      "modelId": "model-voltas-cu-vst18hc-wifidr25",
      "outdoorUnitId": "ou-voltas-cu-vst18hc-wifidr25",
      "indoorUnitId": "iu-eu-vst18hc-wifidr25",
      "minHeatingTempC": -15,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 20.0,
      "hspf2": 9.8,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-36hcdr2-vauh-36hcdr2",
      "slug": "voltas-vauwr-36hcdr2-vauh-36hcdr2",
      "modelId": "model-voltas-vauwr-36hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-36hcdr2",
      "indoorUnitId": "iu-vauh-36hcdr2",
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
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-60hcdr2-vauh-60hcdr2",
      "slug": "voltas-vauwr-60hcdr2-vauh-60hcdr2",
      "modelId": "model-voltas-vauwr-60hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-60hcdr2",
      "indoorUnitId": "iu-vauh-60hcdr2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-48hcdr2-vauh-48hcdr2",
      "slug": "voltas-vauwr-48hcdr2-vauh-48hcdr2",
      "modelId": "model-voltas-vauwr-48hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-48hcdr2",
      "indoorUnitId": "iu-vauh-48hcdr2",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 19.0,
      "hspf2": 9.0,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-36hcdr2-dc37d3j",
      "slug": "voltas-vauwr-36hcdr2-dc37d3j",
      "modelId": "model-voltas-vauwr-36hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-36hcdr2",
      "indoorUnitId": "iu-dc37d3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-48hcdr2-dc49b3j",
      "slug": "voltas-vauwr-48hcdr2-dc49b3j",
      "modelId": "model-voltas-vauwr-48hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-48hcdr2",
      "indoorUnitId": "iu-dc49b3j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.5,
      "hspf2": 8.3,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-60hcdr2-dc61c4j",
      "slug": "voltas-vauwr-60hcdr2-dc61c4j",
      "modelId": "model-voltas-vauwr-60hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-60hcdr2",
      "indoorUnitId": "iu-dc61c4j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.4,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
          "confidence": "manufacturer_claim"
        }
      ],
      "createdAt": "2026-08-28",
      "updatedAt": "2026-08-28",
      "verifiedAt": null
    },
    {
      "id": "config-voltas-vauwr-24hcdr2-dc31d2j",
      "slug": "voltas-vauwr-24hcdr2-dc31d2j",
      "modelId": "model-voltas-vauwr-24hcdr2",
      "outdoorUnitId": "ou-voltas-vauwr-24hcdr2",
      "indoorUnitId": "iu-dc31d2j",
      "minHeatingTempC": -25,
      "voltage": 230,
      "phase": 1,
      "frequencyHz": 60,
      "noiseIndoorMinDbA": 30,
      "noiseIndoorMaxDbA": 50,
      "hasWifi": false,
      "seer2": 16.0,
      "hspf2": 8.2,
      "sources": [
        {
          "sourceId": "src-voltas-epa",
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
