/* ==============================================================
   ProjectDraft — shared project state between ThermoMatch and
   the quote/soumission flow.

   Persisted in localStorage under a versioned key so the data
   survives tab-close, page refresh, and navigation.
   ============================================================== */

import { resolvePostalCode } from "../data/geography/postal-zones";

// ---- Storage key ----
const PROJECT_DRAFT_KEY = "thermopompesavendre.projectDraft.v1";

// ---- Types ----

export interface ProjectDraft {
  version: 1;
  source: "thermomatch" | "direct-quote";
  createdAt: string;
  updatedAt: string;
  thermoMatchCompleted: boolean;

  location: {
    postalCode?: string;
    city?: string;
    province?: "QC";
    designTempC?: number;
  };

  property: {
    type?: string;
    approximateArea?: string;
    numberOfFloors?: string;
  };

  currentSystem: {
    heatingType?: string;
    hasExistingHeatPump?: boolean;
  };

  desiredSystem: {
    systemType?: string;
    projectType?: "ajout" | "remplacement" | "nouvelle-installation";
    numberOfIndoorUnits?: number;
    centralEquipmentLocation?: string;
    existingDuctwork?: string;
    selectedModelId?: string;
    selectedBrandName?: string;
  };

  preferences: {
    priority?: string[];
    budget?: string;
    financingNeeded?: string;
  };

  contact: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    preferredContactMethod?: string;
  };

  timeline?: string;
  notes?: string;
  selectedProducts?: string[];

  /** Appareil actuel identifié par ThermoScan (repris dans la demande de soumission). */
  existingUnit?: ExistingUnit;
}

export interface ExistingUnit {
  brand: string;
  model: string;
  year?: number | null;
  refrigerant?: string | null;
  heatingBtu?: number | null;
  hspf2?: number | null;
  scannedAt: string;
}

/** Résumé sur une ligne, pour la note CRM. */
export function existingUnitSummary(u: ExistingUnit | undefined | null): string {
  if (!u) return "";
  return [
    `${u.brand} ${u.model}`.trim(),
    u.year ? `mise sur le marché ${u.year}` : "",
    u.refrigerant ? u.refrigerant : "",
    u.heatingBtu ? `${u.heatingBtu.toLocaleString("fr-CA")} BTU/h` : "",
    u.hspf2 ? `HSPF2 ${u.hspf2}` : "",
  ].filter(Boolean).join(", ");
}

/** Enregistre l'appareil scanné dans le brouillon de projet (créé au besoin). */
export function saveExistingUnit(unit: Omit<ExistingUnit, "scannedAt">): void {
  if (typeof window === "undefined") return;
  const now = new Date().toISOString();
  const draft: ProjectDraft = loadProjectDraft() ?? {
    version: 1, source: "direct-quote", createdAt: now, updatedAt: now, thermoMatchCompleted: false,
    location: {}, property: {}, currentSystem: {}, desiredSystem: {}, preferences: {}, contact: {},
  };
  draft.existingUnit = { ...unit, scannedAt: now };
  draft.currentSystem = { ...draft.currentSystem, hasExistingHeatPump: true };
  draft.desiredSystem = { ...draft.desiredSystem, projectType: draft.desiredSystem.projectType ?? "remplacement" };
  draft.updatedAt = now;
  saveProjectDraft(draft);
}

// ---- Persistence helpers ----

export function saveProjectDraft(draft: ProjectDraft): void {
  try {
    localStorage.setItem(PROJECT_DRAFT_KEY, JSON.stringify(draft));
  } catch {
    // localStorage full or unavailable — silently ignore
  }
}

export function loadProjectDraft(): ProjectDraft | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(PROJECT_DRAFT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // Version guard
    if (parsed?.version !== 1) return null;
    return parsed as ProjectDraft;
  } catch {
    return null;
  }
}

export function clearProjectDraft(): void {
  try {
    localStorage.removeItem(PROJECT_DRAFT_KEY);
  } catch {
    // ignore
  }
}

// ---- Mapping: ThermoMatch value IDs → QuoteWizard value IDs ----

const PROPERTY_TYPE_MAP: Record<string, string> = {
  maison: "unifamiliale",
  condo: "condo",
  duplex: "duplex",
  triplex: "triplex",
  autre: "autre",
};

const HEATING_TYPE_MAP: Record<string, string> = {
  electrique: "plinthes",
  thermopompe: "thermopompe_murale",
  "fournaise-gaz": "gaz",
  "fournaise-mazout": "mazout",
  autre: "autre",
};

const SYSTEM_TYPE_MAP: Record<string, string> = {
  murale: "murale_simple",
  centrale: "centrale",
  multizone: "murale_multi",
  "ne-sais-pas": "inconnu",
};

// ---- Conversion: ThermoMatch answers → ProjectDraft ----

type ThermoMatchAnswers = Record<string, string | string[]>;

export function thermoMatchAnswersToProjectDraft(
  answers: ThermoMatchAnswers,
  completed: boolean,
): ProjectDraft {
  const postalCode = typeof answers.postalCode === "string" ? answers.postalCode : undefined;
  const propertyType = typeof answers.propertyType === "string" ? answers.propertyType : undefined;
  const area = typeof answers.area === "string" ? answers.area : undefined;
  const floors = typeof answers.floors === "string" ? answers.floors : undefined;
  const currentSystem = typeof answers.currentSystem === "string" ? answers.currentSystem : undefined;
  const heatPumpType = typeof answers.heatPumpType === "string" ? answers.heatPumpType : undefined;
  const priority = Array.isArray(answers.priority) ? answers.priority : typeof answers.priority === "string" ? [answers.priority] : undefined;
  const budget = typeof answers.budget === "string" ? answers.budget : undefined;
  const financing = typeof answers.financing === "string" ? answers.financing : undefined;

  // Detect city and climate from postal code
  let city: string | undefined;
  let designTempC: number | undefined;
  if (postalCode) {
    const climate = resolvePostalCode(postalCode);
    if (climate) {
      city = climate.region;
      designTempC = climate.designTempC;
    }
  }

  const now = new Date().toISOString();
  const existing = loadProjectDraft();

  return {
    version: 1,
    source: "thermomatch",
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
    thermoMatchCompleted: completed,

    location: {
      postalCode,
      city,
      province: "QC",
      designTempC,
    },

    property: {
      type: propertyType,
      approximateArea: area,
      numberOfFloors: floors,
    },

    currentSystem: {
      heatingType: currentSystem,
      hasExistingHeatPump: currentSystem === "thermopompe",
    },

    desiredSystem: {
      systemType: heatPumpType,
    },

    preferences: {
      priority,
      budget,
      financingNeeded: financing,
    },

    contact: existing?.contact ?? {},
    timeline: existing?.timeline,
    notes: existing?.notes,
    selectedProducts: existing?.selectedProducts,
  };
}

// ---- Conversion: ProjectDraft → QuoteWizard form data ----

export function projectDraftToQuoteFormData(
  draft: ProjectDraft,
): Record<string, any> {
  const data: Record<string, any> = {};

  // Location
  if (draft.location.postalCode) data.postalCode = draft.location.postalCode;
  if (draft.location.city) data.city = draft.location.city;

  // Property type — map ThermoMatch IDs to QuoteWizard IDs
  if (draft.property.type) {
    data.propertyType = PROPERTY_TYPE_MAP[draft.property.type] ?? draft.property.type;
  }

  // Area
  if (draft.property.approximateArea) data.sqft = draft.property.approximateArea;

  // Current heating — map
  if (draft.currentSystem.heatingType) {
    data.currentHeating = HEATING_TYPE_MAP[draft.currentSystem.heatingType] ?? draft.currentSystem.heatingType;
  }

  // Desired system — map
  if (draft.desiredSystem.systemType) {
    data.systemIntent = SYSTEM_TYPE_MAP[draft.desiredSystem.systemType] ?? draft.desiredSystem.systemType;
  }

  // Contact
  if (draft.contact.firstName) data.firstName = draft.contact.firstName;
  if (draft.contact.lastName) data.lastName = draft.contact.lastName;
  if (draft.contact.email) data.email = draft.contact.email;
  if (draft.contact.phone) data.phone = draft.contact.phone;

  // Timeline
  if (draft.timeline) data.timeline = draft.timeline;

  return data;
}

// ---- Summary helpers for display ----

export interface ProjectSummaryItem {
  label: string;
  value: string;
  group: "location" | "property" | "system" | "preferences";
}

const AREA_LABELS: Record<string, string> = {
  "<1000": "Moins de 1 000 pi²",
  "1000-1500": "1 000 à 1 500 pi²",
  "1500-2000": "1 500 à 2 000 pi²",
  "2000-2500": "2 000 à 2 500 pi²",
  "2500+": "Plus de 2 500 pi²",
};

const PROPERTY_LABELS: Record<string, string> = {
  maison: "Maison unifamiliale",
  condo: "Condo",
  duplex: "Duplex",
  triplex: "Triplex",
  autre: "Autre",
};

const HEATING_LABELS: Record<string, string> = {
  electrique: "Plinthes électriques",
  thermopompe: "Thermopompe existante",
  "fournaise-gaz": "Fournaise au gaz",
  "fournaise-mazout": "Fournaise au mazout",
  autre: "Autre",
};

const SYSTEM_LABELS: Record<string, string> = {
  murale: "Murale (split)",
  centrale: "Centrale (ducted)",
  multizone: "Multizone",
  "ne-sais-pas": "Je ne sais pas",
};

const BUDGET_LABELS: Record<string, string> = {
  "<5000": "Moins de 5 000 $",
  "5000-8000": "5 000 $ à 8 000 $",
  "8000-12000": "8 000 $ à 12 000 $",
  "12000-15000": "12 000 $ à 15 000 $",
  "15000+": "Plus de 15 000 $",
  "ne-sais-pas": "Je ne sais pas encore",
};

const FINANCING_LABELS: Record<string, string> = {
  oui: "Oui",
  non: "Non",
  "peut-etre": "Peut-être",
};

const PRIORITY_LABELS: Record<string, string> = {
  economies: "Économies d'énergie",
  "grand-froid": "Performance par grand froid",
  silence: "Silence",
  prix: "Meilleur prix",
  qualite: "Qualité haut de gamme",
};

export function getProjectSummary(draft: ProjectDraft): ProjectSummaryItem[] {
  const items: ProjectSummaryItem[] = [];

  if (draft.location.postalCode) {
    const label = draft.location.city
      ? `${draft.location.postalCode} — ${draft.location.city}`
      : draft.location.postalCode;
    items.push({ label: "Lieu", value: label, group: "location" });
  }

  if (draft.property.type) {
    items.push({
      label: "Type de propriété",
      value: PROPERTY_LABELS[draft.property.type] ?? draft.property.type,
      group: "property",
    });
  }

  if (draft.property.approximateArea) {
    items.push({
      label: "Superficie",
      value: AREA_LABELS[draft.property.approximateArea] ?? draft.property.approximateArea,
      group: "property",
    });
  }

  if (draft.property.numberOfFloors) {
    const f = draft.property.numberOfFloors;
    items.push({
      label: "Étages",
      value: f === "4+" ? "4 étages ou plus" : `${f} étage${f === "1" ? "" : "s"}`,
      group: "property",
    });
  }

  if (draft.currentSystem.heatingType) {
    items.push({
      label: "Chauffage actuel",
      value: HEATING_LABELS[draft.currentSystem.heatingType] ?? draft.currentSystem.heatingType,
      group: "system",
    });
  }

  if (draft.desiredSystem.systemType) {
    items.push({
      label: "Type de thermopompe",
      value: SYSTEM_LABELS[draft.desiredSystem.systemType] ?? draft.desiredSystem.systemType,
      group: "system",
    });
  }

  if (draft.preferences.priority && draft.preferences.priority.length > 0) {
    items.push({
      label: "Priorité",
      value: draft.preferences.priority.map((p) => PRIORITY_LABELS[p] ?? p).join(", "),
      group: "preferences",
    });
  }

  if (draft.preferences.budget) {
    items.push({
      label: "Budget",
      value: BUDGET_LABELS[draft.preferences.budget] ?? draft.preferences.budget,
      group: "preferences",
    });
  }

  if (draft.preferences.financingNeeded) {
    items.push({
      label: "Financement",
      value: FINANCING_LABELS[draft.preferences.financingNeeded] ?? draft.preferences.financingNeeded,
      group: "preferences",
    });
  }

  return items;
}
