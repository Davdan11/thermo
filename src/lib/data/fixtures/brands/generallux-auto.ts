import type { BrandDataset } from "../../types";

export const generalluxDataset: BrandDataset = {
  brand: {
    id: "generallux",
    slug: "generallux",
    name: "GENERALLUX",
    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",
    activeInQuebec: true,
    status: "published",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  series: [
    {
      id: "generallux-standard",
      slug: "generallux-standard",
      name: "Standard",
      brandId: "generallux",
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  models: [
    {
      id: "generallux-standard-wall-single",
      slug: "generallux-standard-wall-single",
      name: "Standard",
      seriesId: "generallux-standard",
      brandId: "generallux",
      modelNumber: "Standard",
      normalizedModelNumber: "standard",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: null,
      coolingCapacityMaxBtu: null,
      heatingCapacity5FMinBtu: 7500,
      heatingCapacity5FMaxBtu: 29400,
      seer2Min: null,
      seer2Max: null,
      hspf2Min: null,
      hspf2Max: null,
      cop5FMin: null,
      cop5FMax: null,
      systemType: "wall-single",
      categories: ["conventional", "ductless", "single-zone"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  outdoorUnits: [
    {
      id: "generallux-tsc-gl-09ha2-i3to23",
      modelNumber: "TSC-GL-09HA2/I3TO23",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tsc-gl-12ha2-i3to23",
      modelNumber: "TSC-GL-12HA2/I3TO23",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tsc-gl-18ha2-i3to21",
      modelNumber: "TSC-GL-18HA2/I3TO21",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tum-gl-27ha2-03-es",
      modelNumber: "TUM-GL-27HA2/03-ES",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tum-gl-18ha2-02-es",
      modelNumber: "TUM-GL-18HA2/02-ES",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tum-gl-36ha2-04-es",
      modelNumber: "TUM-GL-36HA2/04-ES",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tshg12e1s20nar45o",
      modelNumber: "TSHG12E1S20NAR45O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tshg18e2s20nar45o",
      modelNumber: "TSHG18E2S20NAR45O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tshg36e2s19nar45o",
      modelNumber: "TSHG36E2S19NAR45O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tshg12e2m23nar45o",
      modelNumber: "TSHG12E2M23NAR45O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tshg18e2s22nar45o",
      modelNumber: "TSHG18E2S22NAR45O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-thh12e2s25nar454o",
      modelNumber: "THH12E2S25NAR454O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-thh18e2s24nar454o",
      modelNumber: "THH18E2S24NAR454O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-thh24e2s23nar454o",
      modelNumber: "THH24E2S23NAR454O",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tfm2g18chair454b",
      modelNumber: "TFM2G18CHAIR454B",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tfm3g27chair454b",
      modelNumber: "TFM3G27CHAIR454B",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tfm4g36chair454b",
      modelNumber: "TFM4G36CHAIR454B",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tfm5g42chair454b",
      modelNumber: "TFM5G42CHAIR454B",
      brandId: "generallux",
      refrigerant: null as any,
    },
    {
      id: "generallux-tshg24e2s20nar45o",
      modelNumber: "TSHG24E2S20NAR45O",
      brandId: "generallux",
      refrigerant: null as any,
    }
  ],
  indoorUnits: [

  ],
  configurations: [
    {
      id: "generallux-standard-wall-single-cfg-1",
      slug: "generallux-standard-wall-single-cfg-1",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tsc-gl-09ha2-i3to23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 9000,
      coolingCapacityMaxBtu: 9000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-2",
      slug: "generallux-standard-wall-single-cfg-2",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tsc-gl-12ha2-i3to23",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-3",
      slug: "generallux-standard-wall-single-cfg-3",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tsc-gl-18ha2-i3to21",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-4",
      slug: "generallux-standard-wall-single-cfg-4",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tum-gl-27ha2-03-es",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-5",
      slug: "generallux-standard-wall-single-cfg-5",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tum-gl-18ha2-02-es",
      indoorUnitId: null,
      coolingCapacityMinBtu: 17000,
      coolingCapacityMaxBtu: 17000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-6",
      slug: "generallux-standard-wall-single-cfg-6",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tum-gl-36ha2-04-es",
      indoorUnitId: null,
      coolingCapacityMinBtu: 33000,
      coolingCapacityMaxBtu: 33000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-7",
      slug: "generallux-standard-wall-single-cfg-7",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg12e1s20nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-8",
      slug: "generallux-standard-wall-single-cfg-8",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg18e2s20nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-9",
      slug: "generallux-standard-wall-single-cfg-9",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg36e2s19nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 36000,
      coolingCapacityMaxBtu: 36000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-10",
      slug: "generallux-standard-wall-single-cfg-10",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg12e2m23nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-11",
      slug: "generallux-standard-wall-single-cfg-11",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg18e2s22nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-12",
      slug: "generallux-standard-wall-single-cfg-12",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-thh12e2s25nar454o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-13",
      slug: "generallux-standard-wall-single-cfg-13",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-thh18e2s24nar454o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-14",
      slug: "generallux-standard-wall-single-cfg-14",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-thh24e2s23nar454o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 24000,
      coolingCapacityMaxBtu: 24000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-15",
      slug: "generallux-standard-wall-single-cfg-15",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tfm2g18chair454b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 18000,
      coolingCapacityMaxBtu: 18000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-16",
      slug: "generallux-standard-wall-single-cfg-16",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tfm3g27chair454b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 27000,
      coolingCapacityMaxBtu: 27000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-17",
      slug: "generallux-standard-wall-single-cfg-17",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tfm4g36chair454b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 35000,
      coolingCapacityMaxBtu: 35000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-18",
      slug: "generallux-standard-wall-single-cfg-18",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tfm5g42chair454b",
      indoorUnitId: null,
      coolingCapacityMinBtu: 42000,
      coolingCapacityMaxBtu: 42000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-19",
      slug: "generallux-standard-wall-single-cfg-19",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg12e2m23nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 12000,
      coolingCapacityMaxBtu: 12000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    },
    {
      id: "generallux-standard-wall-single-cfg-20",
      slug: "generallux-standard-wall-single-cfg-20",
      modelId: "generallux-standard-wall-single",
      outdoorUnitId: "generallux-tshg24e2s20nar45o",
      indoorUnitId: null,
      coolingCapacityMinBtu: 23000,
      coolingCapacityMaxBtu: 23000,
      seer2: null,
      hspf2: null,
      minHeatingTempC: -20,
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }
  ],
  performanceProfiles: [
    {
      configurationId: "generallux-standard-wall-single-cfg-1",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 9500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-2",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7640,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-3",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 10020,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-4",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 18100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-5",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 12200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-6",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21200,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-7",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-8",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-9",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 21800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-10",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 8100,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-11",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11000,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-12",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7800,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-13",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 11500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-14",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-15",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 17400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-16",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 19500,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-17",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 22400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-18",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 29400,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-19",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 7600,
          cop: null,
          confidence: "verified",
        }
      ]
    },
    {
      configurationId: "generallux-standard-wall-single-cfg-20",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: 15200,
          cop: null,
          confidence: "verified",
        }
      ]
    }
  ],
  certifications: [],
  warranties: [],
  priceObservations: [],
  sources: [],
  editorial: [],
};
