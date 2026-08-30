export type BrandStatus = 
  | "verified_in_quebec" 
  | "verified_in_canada" 
  | "availability_uncertain" 
  | "discontinued" 
  | "needs_review" 
  | "rejected_not_relevant";

export interface BrandInventoryEntry {
  id: string;
  name: string;
  normalizedName: string;
  officialSite?: string;
  distributor?: string;
  systemTypes: string[];
  knownSeries: string[];
  status: BrandStatus;
  lastVerifiedDate: string;
  sources: string[];
  imageAuthorization: "authorized" | "fair_use" | "placeholder_only" | "needs_verification";
  missingDataNotes?: string;
}

export const BrandsInventory: BrandInventoryEntry[] = [
  {
    id: "daikin",
    name: "Daikin",
    normalizedName: "daikin",
    officialSite: "https://daikincomfort.com/", // or Daikin Canada
    systemTypes: ["murale", "centrale", "multizone"],
    knownSeries: ["Aurora", "Fit", "19 Series", "Oterra"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: ["Daikin Comfort Official"],
    imageAuthorization: "needs_verification",
    missingDataNotes: "Besoin des données AHRI exactes pour les nouvelles séries Fit 2026."
  },
  {
    id: "gree",
    name: "Gree",
    normalizedName: "gree",
    officialSite: "https://www.gree.ca/",
    distributor: "Gree Canada",
    systemTypes: ["murale", "centrale", "multizone"],
    knownSeries: ["Extreme", "Livo", "Fleur", "Vireo"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: ["Gree Canada Official"],
    imageAuthorization: "needs_verification"
  },
  {
    id: "fujitsu",
    name: "Fujitsu",
    normalizedName: "fujitsu",
    officialSite: "https://www.fujitsu-general.com/us/",
    systemTypes: ["murale", "centrale", "multizone"],
    knownSeries: ["Halcyon", "LZAS", "RLS3"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: ["Fujitsu General"],
    imageAuthorization: "needs_verification"
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi Electric",
    normalizedName: "mitsubishi",
    officialSite: "https://www.mitsubishielectric.ca/",
    distributor: "Mitsubishi Electric Sales Canada",
    systemTypes: ["murale", "centrale", "multizone"],
    knownSeries: ["Zuba", "M-Series", "Mr. Slim"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: ["Mitsubishi Canada"],
    imageAuthorization: "needs_verification"
  },
  {
    id: "moovair",
    name: "Moovair",
    normalizedName: "moovair",
    distributor: "Master Group",
    systemTypes: ["murale", "centrale", "multizone"],
    knownSeries: ["M19", "M25", "Central"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: ["Master Group (Master.ca)"],
    imageAuthorization: "needs_verification"
  },
  {
    id: "midea",
    name: "Midea",
    normalizedName: "midea",
    systemTypes: ["murale"],
    knownSeries: [],
    status: "needs_review",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "sharp",
    name: "Sharp",
    normalizedName: "sharp",
    systemTypes: ["murale"],
    knownSeries: ["THU", "ZHU"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "zephyr",
    name: "Zephyr",
    normalizedName: "zephyr",
    systemTypes: ["murale"],
    knownSeries: [],
    status: "needs_review",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "goodman",
    name: "Goodman",
    normalizedName: "goodman",
    systemTypes: ["centrale"],
    knownSeries: ["GVZC", "GSZC"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "bosch",
    name: "Bosch",
    normalizedName: "bosch",
    systemTypes: ["centrale"],
    knownSeries: ["IDS Premium", "IDS Plus"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "lg",
    name: "LG",
    normalizedName: "lg",
    systemTypes: ["murale", "multizone"],
    knownSeries: ["Art Cool", "Prestige"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "panasonic",
    name: "Panasonic",
    normalizedName: "panasonic",
    systemTypes: ["murale"],
    knownSeries: ["Climat Froid (XE)"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  },
  {
    id: "tosot",
    name: "Tosot",
    normalizedName: "tosot",
    systemTypes: ["murale", "centrale"],
    knownSeries: ["Lomo Plus", "Lomo", "Apex"],
    status: "verified_in_quebec",
    lastVerifiedDate: "2026-08-24",
    sources: [],
    imageAuthorization: "needs_verification"
  }
];
