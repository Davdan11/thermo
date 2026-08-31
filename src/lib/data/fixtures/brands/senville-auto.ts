import type { BrandDataset } from "../../types";

export const senvilleDataset: BrandDataset = {
  brand: {
    id: "senville",
    slug: "senville",
    name: "Senville",
    description: "Catalogue officiel issu de la base de données gouvernementale.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "senville-sen-series",
      slug: "senville-sen-series",
      name: "SEN Series",
      brandId: "senville",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series",
      slug: "senville-sendc-series",
      name: "SENDC Series",
      brandId: "senville",
      systemType: "central-ducted",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series",
      slug: "senville-sena-series",
      name: "SENA Series",
      brandId: "senville",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series",
      slug: "senville-sene-series",
      name: "SENE Series",
      brandId: "senville",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series",
      slug: "senville-senl-series",
      name: "SENL Series",
      brandId: "senville",
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "senville-sen-series-central-ducted",
      slug: "senville-sen-series-central-ducted",
      name: "SEN Series",
      seriesId: "senville-sen-series",
      brandId: "senville",
      modelNumber: "SEN Series",
      normalizedModelNumber: "sen-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 52000,
      heatingCapacity5FMinBtu: 21000,
      heatingCapacity5FMaxBtu: 45000,
      seer2Min: 15.2,
      seer2Max: 16,
      hspf2Min: 8.5,
      hspf2Max: 9.5,
      cop5FMin: 1.8,
      cop5FMax: 1.9,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted",
      slug: "senville-sendc-series-central-ducted",
      name: "SENDC Series",
      seriesId: "senville-sendc-series",
      brandId: "senville",
      modelNumber: "SENDC Series",
      normalizedModelNumber: "sendc-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 54000,
      heatingCapacity5FMinBtu: 21600,
      heatingCapacity5FMaxBtu: 52000,
      seer2Min: 16,
      seer2Max: 18.3,
      hspf2Min: 9,
      hspf2Max: 10.3,
      cop5FMin: 1.8,
      cop5FMax: 1.96,
      systemType: "central-ducted",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone",
      slug: "senville-sena-series-multi-zone",
      name: "SENA Series",
      seriesId: "senville-sena-series",
      brandId: "senville",
      modelNumber: "SENA Series",
      normalizedModelNumber: "sena-series",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 51000,
      heatingCapacity5FMinBtu: 7700,
      heatingCapacity5FMaxBtu: 47000,
      seer2Min: 18,
      seer2Max: 27.4,
      hspf2Min: 9.3,
      hspf2Max: 14.8,
      cop5FMin: 1.8,
      cop5FMax: 2.4,
      systemType: "multi-zone",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series-multi-zone",
      slug: "senville-sene-series-multi-zone",
      name: "SENE Series",
      seriesId: "senville-sene-series",
      brandId: "senville",
      modelNumber: "SENE Series",
      normalizedModelNumber: "sene-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 13500,
      heatingCapacity5FMaxBtu: 22600,
      seer2Min: 25,
      seer2Max: 33.3,
      hspf2Min: 11,
      hspf2Max: 16.2,
      cop5FMin: 2,
      cop5FMax: 2.34,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series-multi-zone",
      slug: "senville-senl-series-multi-zone",
      name: "SENL Series",
      seriesId: "senville-senl-series",
      brandId: "senville",
      modelNumber: "SENL Series",
      normalizedModelNumber: "senl-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 24000,
      heatingCapacity5FMinBtu: 6500,
      heatingCapacity5FMaxBtu: 17000,
      seer2Min: 18.7,
      seer2Max: 21.5,
      hspf2Min: 9,
      hspf2Max: 9.3,
      cop5FMin: 1.96,
      cop5FMax: 2.14,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-multi-zone",
      slug: "senville-sen-series-multi-zone",
      name: "SEN series",
      seriesId: "senville-sen-series",
      brandId: "senville",
      modelNumber: "SEN series",
      normalizedModelNumber: "sen-series",
      isActive2026: false,
      thermomatchEligible: false,
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      heatingCapacity5FMinBtu: 19700,
      heatingCapacity5FMaxBtu: 19700,
      seer2Min: 20,
      seer2Max: 20,
      hspf2Min: 9.2,
      hspf2Max: 9.2,
      cop5FMin: 1.88,
      cop5FMax: 1.88,
      systemType: "multi-zone",
      categories: ["conventional"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "senville",
      modelNumber: "     -    -  ",
      brandId: "senville",
      refrigerant: "R-454B" as any,
    }
  ],
  indoorUnits: [
    {
      id: "senville",
      modelNumber: "     -    - ",
      brandId: "senville",
      type: "central-ducted",
    }
  ],
  configurations: [
    {
      id: "senville-sen-series-central-ducted-cfg-1",
      slug: "senville-sen-series-central-ducted-cfg-1",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 16,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-central-ducted-cfg-2",
      slug: "senville-sen-series-central-ducted-cfg-2",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-central-ducted-cfg-3",
      slug: "senville-sen-series-central-ducted-cfg-3",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 15.8,
      hspf2: 9.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-central-ducted-cfg-4",
      slug: "senville-sen-series-central-ducted-cfg-4",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 45000,
      coolingCapacityMaxBtu: 45000,
      seer2: 15.2,
      hspf2: 8.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-central-ducted-cfg-5",
      slug: "senville-sen-series-central-ducted-cfg-5",
      modelId: "senville-sen-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 52000,
      coolingCapacityMaxBtu: 52000,
      seer2: 16,
      hspf2: 8.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted-cfg-1",
      slug: "senville-sendc-series-central-ducted-cfg-1",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: 18.3,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted-cfg-2",
      slug: "senville-sendc-series-central-ducted-cfg-2",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 16.8,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted-cfg-3",
      slug: "senville-sendc-series-central-ducted-cfg-3",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 17.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted-cfg-4",
      slug: "senville-sendc-series-central-ducted-cfg-4",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 48000,
      coolingCapacityMaxBtu: 48000,
      seer2: 16.5,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sendc-series-central-ducted-cfg-5",
      slug: "senville-sendc-series-central-ducted-cfg-5",
      modelId: "senville-sendc-series-central-ducted",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 54000,
      coolingCapacityMaxBtu: 54000,
      seer2: 16,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-1",
      slug: "senville-sena-series-multi-zone-cfg-1",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 6500,
      coolingCapacityMaxBtu: 6500,
      seer2: 22,
      hspf2: 12,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-2",
      slug: "senville-sena-series-multi-zone-cfg-2",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 6000,
      coolingCapacityMaxBtu: 6000,
      seer2: 25.5,
      hspf2: 14.8,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-3",
      slug: "senville-sena-series-multi-zone-cfg-3",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 24,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-4",
      slug: "senville-sena-series-multi-zone-cfg-4",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 22.6,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-5",
      slug: "senville-sena-series-multi-zone-cfg-5",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-6",
      slug: "senville-sena-series-multi-zone-cfg-6",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 27.4,
      hspf2: 12.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-7",
      slug: "senville-sena-series-multi-zone-cfg-7",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 23,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-8",
      slug: "senville-sena-series-multi-zone-cfg-8",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 22.2,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-9",
      slug: "senville-sena-series-multi-zone-cfg-9",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-10",
      slug: "senville-sena-series-multi-zone-cfg-10",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-11",
      slug: "senville-sena-series-multi-zone-cfg-11",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 25.4,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-12",
      slug: "senville-sena-series-multi-zone-cfg-12",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 15000,
      coolingCapacityMaxBtu: 15000,
      seer2: 23.5,
      hspf2: 9.9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-13",
      slug: "senville-sena-series-multi-zone-cfg-13",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 20,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-14",
      slug: "senville-sena-series-multi-zone-cfg-14",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 19000,
      coolingCapacityMaxBtu: 19000,
      seer2: 19,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-15",
      slug: "senville-sena-series-multi-zone-cfg-15",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 16700,
      coolingCapacityMaxBtu: 16700,
      seer2: 20.6,
      hspf2: 12.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-16",
      slug: "senville-sena-series-multi-zone-cfg-16",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 16000,
      coolingCapacityMaxBtu: 16000,
      seer2: 20,
      hspf2: 12.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-17",
      slug: "senville-sena-series-multi-zone-cfg-17",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 18,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-18",
      slug: "senville-sena-series-multi-zone-cfg-18",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: 20.4,
      hspf2: 10.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-19",
      slug: "senville-sena-series-multi-zone-cfg-19",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 21.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-20",
      slug: "senville-sena-series-multi-zone-cfg-20",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 23400,
      coolingCapacityMaxBtu: 23400,
      seer2: 20.7,
      hspf2: 11.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-21",
      slug: "senville-sena-series-multi-zone-cfg-21",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 19,
      hspf2: 11.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-22",
      slug: "senville-sena-series-multi-zone-cfg-22",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 22000,
      coolingCapacityMaxBtu: 22000,
      seer2: 20.4,
      hspf2: 12.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-23",
      slug: "senville-sena-series-multi-zone-cfg-23",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 21,
      hspf2: 13.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-24",
      slug: "senville-sena-series-multi-zone-cfg-24",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: 19,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-25",
      slug: "senville-sena-series-multi-zone-cfg-25",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 28000,
      coolingCapacityMaxBtu: 28000,
      seer2: 20,
      hspf2: 9.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-26",
      slug: "senville-sena-series-multi-zone-cfg-26",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: 19.5,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-27",
      slug: "senville-sena-series-multi-zone-cfg-27",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10.4,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-28",
      slug: "senville-sena-series-multi-zone-cfg-28",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: 19.4,
      hspf2: 10,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-29",
      slug: "senville-sena-series-multi-zone-cfg-29",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 47000,
      coolingCapacityMaxBtu: 47000,
      seer2: 20.4,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sena-series-multi-zone-cfg-30",
      slug: "senville-sena-series-multi-zone-cfg-30",
      modelId: "senville-sena-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 51000,
      coolingCapacityMaxBtu: 51000,
      seer2: 20,
      hspf2: 10.5,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series-multi-zone-cfg-1",
      slug: "senville-sene-series-multi-zone-cfg-1",
      modelId: "senville-sene-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 33.3,
      hspf2: 14.6,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series-multi-zone-cfg-2",
      slug: "senville-sene-series-multi-zone-cfg-2",
      modelId: "senville-sene-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: 29.4,
      hspf2: 12.7,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series-multi-zone-cfg-3",
      slug: "senville-sene-series-multi-zone-cfg-3",
      modelId: "senville-sene-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series-multi-zone-cfg-4",
      slug: "senville-sene-series-multi-zone-cfg-4",
      modelId: "senville-sene-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: 25.6,
      hspf2: 16.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sene-series-multi-zone-cfg-5",
      slug: "senville-sene-series-multi-zone-cfg-5",
      modelId: "senville-sene-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 25,
      hspf2: 11,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series-multi-zone-cfg-1",
      slug: "senville-senl-series-multi-zone-cfg-1",
      modelId: "senville-senl-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.5,
      hspf2: 9,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series-multi-zone-cfg-2",
      slug: "senville-senl-series-multi-zone-cfg-2",
      modelId: "senville-senl-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: 21.2,
      hspf2: 9.1,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-senl-series-multi-zone-cfg-3",
      slug: "senville-senl-series-multi-zone-cfg-3",
      modelId: "senville-senl-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: 18.7,
      hspf2: 9.3,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "senville-sen-series-multi-zone-cfg-1",
      slug: "senville-sen-series-multi-zone-cfg-1",
      modelId: "senville-sen-series-multi-zone",
      outdoorUnitId: "senville",
      indoorUnitId: "senville",
      coolingCapacityMinBtu: 30000,
      coolingCapacityMaxBtu: 30000,
      seer2: 20,
      hspf2: 9.2,
      minHeatingTempC: -25,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "senville-sen-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 42000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 45000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sendc-series-central-ducted-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21600,
          cop: 1.87,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sendc-series-central-ducted-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 32600,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sendc-series-central-ducted-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 39000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sendc-series-central-ducted-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 46000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sendc-series-central-ducted-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 52000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: 2.4,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7700,
          cop: 2.39,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10600,
          cop: 1.83,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: 1.84,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11200,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11800,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11300,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19000,
          cop: 1.85,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17500,
          cop: 1.89,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 1.86,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18000,
          cop: 1.92,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 23800,
          cop: 2.23,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-21",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24000,
          cop: 2.18,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-22",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 2.16,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-23",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 24200,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-24",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 27000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-25",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 25000,
          cop: 1.8,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-26",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 35000,
          cop: 1.98,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-27",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-28",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 36000,
          cop: 1.9,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-29",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sena-series-multi-zone-cfg-30",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 47000,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sene-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sene-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 13500,
          cop: 2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sene-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sene-series-multi-zone-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22600,
          cop: 2.34,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sene-series-multi-zone-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 20000,
          cop: 2.2,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-senl-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 6500,
          cop: 1.96,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-senl-series-multi-zone-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7000,
          cop: 2.07,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-senl-series-multi-zone-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17000,
          cop: 2.14,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "senville-sen-series-multi-zone-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19700,
          cop: 1.88,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [
    {
      modelId: "senville-sen-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sendc-series-central-ducted",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sena-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sene-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-senl-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-multi-zone",
      type: "parts",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-multi-zone",
      type: "compressor",
      durationYears: 10,
      requiresRegistration: false,
    },
    {
      modelId: "senville-sen-series-multi-zone",
      type: "labor",
      durationYears: 1,
      requiresRegistration: false,
    }
  ],
  priceObservations: [],
  sources: [],
  editorial: [],
};
