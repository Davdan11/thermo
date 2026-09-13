/* Chantier P — portail.json, à côté de gestion.json. Même écriture sous verrou que les autres magasins (mutateJson).
   Ordre des verrous : portail.json PUIS gestion.json (jamais l'inverse) : pas d'interblocage. */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "../store";
import { DEFAULT_PORTAL_SETTINGS, MAX_EVENTS, type PortalData, type PortalEvent, type PortalSettings } from "./types";

export const portalFile = () => path.join(gestionDataDir(), "portail.json");

export const newPortalId = (prefix: "s" | "p" | "m") => `${prefix}_${randomBytes(8).toString("base64url")}`;

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);
const num = (v: unknown, min: number, max: number, fallback: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : fallback);

export function normalizePortalSettings(s: Partial<PortalSettings> | undefined): PortalSettings {
  const d = DEFAULT_PORTAL_SETTINGS;
  return {
    changeDeadlineHours: num(s?.changeDeadlineHours, 0, 24 * 30, d.changeDeadlineHours),
    bookingLeadHours: num(s?.bookingLeadHours, 0, 24 * 30, d.bookingLeadHours),
    visitLeadDays: num(s?.visitLeadDays, 0, 120, d.visitLeadDays),
    conditionsText: typeof s?.conditionsText === "string" ? s.conditionsText.slice(0, 20_000) : "",
    inviteClients: typeof s?.inviteClients === "boolean" ? s.inviteClients : d.inviteClients,
    generateVisits: typeof s?.generateVisits === "boolean" ? s.generateVisits : d.generateVisits,
    ...(s?.conditionsUpdatedAt ? { conditionsUpdatedAt: s.conditionsUpdatedAt } : {}),
    ...(s?.updatedAt ? { updatedAt: s.updatedAt } : {}),
    ...(s?.updatedBy ? { updatedBy: s.updatedBy } : {}),
  };
}

export const emptyPortal = (): PortalData => ({ version: 1, startedAt: null, settings: normalizePortalSettings(undefined), slots: [], installerLinks: [], plans: [], memberships: [], pending: [], notices: {}, events: [] });

export function normalizePortal(d: Partial<PortalData> | null | undefined): PortalData {
  return {
    version: 1,
    startedAt: typeof d?.startedAt === "string" ? d.startedAt : null,
    settings: normalizePortalSettings(d?.settings),
    slots: arr(d?.slots),
    installerLinks: arr(d?.installerLinks),
    plans: arr(d?.plans),
    memberships: arr<PortalData["memberships"][number]>(d?.memberships).map((m) => ({ ...m, visits: arr(m.visits) })),
    pending: arr(d?.pending),
    notices: d?.notices && typeof d.notices === "object" && !Array.isArray(d.notices) ? d.notices : {},
    events: arr(d?.events),
  };
}

export async function readPortal(): Promise<PortalData> {
  return normalizePortal(await readJson<Partial<PortalData> | null>(portalFile(), () => null));
}

export function mutatePortal<T>(fn: (data: PortalData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<PortalData, T>(portalFile(), emptyPortal, normalizePortal, fn);
}

/** Le projet (job d'installation d'origine) a-t-il une adhésion active à un plan d'entretien ? Lecture seule. */
export async function hasActiveMembership(projectJobId: string): Promise<boolean> {
  return (await readPortal()).memberships.some((m) => m.jobId === projectJobId && m.status === "active");
}

export function logEvent(data: PortalData, e: PortalEvent): void {
  data.events.push(e);
  if (data.events.length > MAX_EVENTS) data.events.splice(0, data.events.length - MAX_EVENTS);
}
