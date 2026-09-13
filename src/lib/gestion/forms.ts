/* Lecture et validation des formulaires de l'outil (installateur, job). Messages en clair, par champ. */

import { SYSTEM_TYPES, type SystemType } from "@/lib/data/types/enums";
import { isEmail } from "./auth/admins";
import { isKnownBrand } from "./catalog";
import { formatPostalCode } from "./geo";
import { isRegionCode, type RegionCode } from "./regions";

export type FieldErrors = Partial<Record<string, string>>;
export type ParseResult<T> = { ok: true; data: T } | { ok: false; errors: FieldErrors };

const str = (fd: FormData, name: string, max = 200) => String(fd.get(name) ?? "").trim().slice(0, max);
const all = (fd: FormData, name: string) => fd.getAll(name).map((v) => String(v));
const isSystemType = (v: string): v is SystemType => (SYSTEM_TYPES as readonly string[]).includes(v);
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 10;

export const DEFAULT_RADIUS_KM = 60;

export interface InstallerInput {
  company: string;
  contactName: string;
  phone: string;
  email: string;
  rbq: string;
  basePostalCode: string;
  radiusKm: number;
  extraRegions: RegionCode[];
  brands: string[];
  systemTypes: SystemType[];
  active: boolean;
  maxOpenJobs: number | null;
  notes: string;
  candidatureId?: string;
}

export function parseInstallerForm(fd: FormData): ParseResult<InstallerInput> {
  const errors: FieldErrors = {};
  const company = str(fd, "company", 120);
  const contactName = str(fd, "contactName", 120);
  const phone = str(fd, "phone", 30);
  const email = str(fd, "email", 160).toLowerCase();
  const postal = formatPostalCode(str(fd, "basePostalCode", 10));
  const radius = Number.parseInt(str(fd, "radiusKm", 5), 10);
  const maxRaw = str(fd, "maxOpenJobs", 3);
  const max = maxRaw ? Number.parseInt(maxRaw, 10) : null;

  if (company.length < 2) errors.company = "Le nom de l’entreprise est requis.";
  if (contactName.length < 2) errors.contactName = "La personne contact est requise.";
  if (!phoneOk(phone)) errors.phone = "Numéro à 10 chiffres requis.";
  if (!isEmail(email)) errors.email = "Courriel invalide.";
  if (!postal) errors.basePostalCode = "Code postal complet requis (ex. H2X 1Y4).";
  if (!Number.isFinite(radius) || radius < 5 || radius > 400) errors.radiusKm = "Rayon entre 5 et 400 km.";
  if (max !== null && (!Number.isFinite(max) || max < 1 || max > 50)) errors.maxOpenJobs = "Entre 1 et 50, ou vide.";

  const brands = [...new Set(all(fd, "brands"))].filter(isKnownBrand);
  if (brands.length === 0) errors.brands = "Cochez au moins une marque.";

  if (Object.keys(errors).length) return { ok: false, errors };
  const candidatureId = str(fd, "candidatureId", 40);
  return {
    ok: true,
    data: {
      company,
      contactName,
      phone,
      email,
      rbq: str(fd, "rbq", 30),
      basePostalCode: postal!,
      radiusKm: radius,
      extraRegions: [...new Set(all(fd, "regions"))].filter(isRegionCode),
      brands,
      systemTypes: [...new Set(all(fd, "systemTypes"))].filter(isSystemType),
      active: fd.get("active") === "on",
      maxOpenJobs: max,
      notes: str(fd, "notes", 2000),
      ...(candidatureId ? { candidatureId } : {}),
    },
  };
}

export interface JobInput {
  client: { firstName: string; lastName: string; phone: string; email: string; address: string; city: string; postalCode: string };
  region: RegionCode | null;
  brand: string | null;
  systemType: SystemType | null;
  modelSlug: string | null;
  capacity: string;
  desiredDate: string | null;
  desiredWindow: string;
  installerNotes: string;
  internalNotes: string;
}

export function parseJobForm(fd: FormData): ParseResult<JobInput> {
  const errors: FieldErrors = {};
  const firstName = str(fd, "firstName", 80);
  const phone = str(fd, "phone", 30);
  const email = str(fd, "email", 160).toLowerCase();
  const postal = formatPostalCode(str(fd, "postalCode", 10));
  const region = str(fd, "region", 2);
  const brand = str(fd, "brand", 80);
  const systemType = str(fd, "systemType", 30);
  const desiredDate = str(fd, "desiredDate", 10);

  if (firstName.length < 1) errors.firstName = "Le prénom du client est requis.";
  if (!phoneOk(phone)) errors.phone = "Numéro à 10 chiffres requis.";
  if (email && !isEmail(email)) errors.email = "Courriel invalide.";
  if (!postal) errors.postalCode = "Code postal complet requis (ex. H2X 1Y4).";
  if (region && !isRegionCode(region)) errors.region = "Région inconnue.";
  if (brand && !isKnownBrand(brand)) errors.brand = "Marque inconnue.";
  if (systemType && !isSystemType(systemType)) errors.systemType = "Type inconnu.";
  if (desiredDate && !/^\d{4}-\d{2}-\d{2}$/.test(desiredDate)) errors.desiredDate = "Date invalide.";

  if (Object.keys(errors).length) return { ok: false, errors };
  return {
    ok: true,
    data: {
      client: {
        firstName,
        lastName: str(fd, "lastName", 80),
        phone,
        email,
        address: str(fd, "address", 160),
        city: str(fd, "city", 80),
        postalCode: postal!,
      },
      region: isRegionCode(region) ? region : null,
      brand: brand || null,
      systemType: isSystemType(systemType) ? systemType : null,
      modelSlug: str(fd, "modelSlug", 120) || null,
      capacity: str(fd, "capacity", 60),
      desiredDate: desiredDate || null,
      desiredWindow: str(fd, "desiredWindow", 120),
      installerNotes: str(fd, "installerNotes", 1500),
      internalNotes: str(fd, "internalNotes", 3000),
    },
  };
}
