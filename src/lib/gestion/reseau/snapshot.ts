/* ==================================================================
   Chantier R — lecture des magasins pour la carte, le recrutement et
   les tâches : demandes localisées (journal des leads), installateurs
   avec leur couverture, leurs blocages et leur charge.
   AUCUNE vérification d'accès ici : les pages passent par
   requireAdmin().
   ================================================================== */

import { journalDir, type JournalEntry } from "@/lib/crm/lead-journal";
import { jobSlot } from "../agenda/agenda";
import { loadPaymentBlockers, type PaymentBlock } from "../commissions/blocker";
import { isDemand } from "../crm/sources";
import { addDaysYmd, localYmd } from "../crm/time";
import { installerStats } from "../matching";
import { partnerBlockers } from "../partenaires/blockers";
import { readPartenaires } from "../partenaires/store";
import type { PartenairesData } from "../partenaires/types";
import { readJournalEntries } from "../statistiques";
import { readGestion } from "../store";
import type { GestionData } from "../types";
import { locateDemand, muniIndex, type DemandInput, type LocatedDemand } from "./geo";
import { readReseau, type ReseauData } from "./store";
import type { CoverageInstaller } from "./zones";

const str = (v: unknown): string | undefined => (typeof v === "string" && v.trim() ? v.trim() : undefined);

/** Demandes entrantes du journal (formulaires, appels, textos), sans aucun renseignement personnel. */
export function demandInputs(entries: JournalEntry[]): DemandInput[] {
  return entries.filter(isDemand).map((e) => {
    const l = (e.lead ?? {}) as Record<string, unknown>;
    return { id: e.id, at: e.at, postalCode: str(l.postalCode), city: str(l.municipality) ?? str(l.city) };
  });
}

export async function readLocatedDemands(opts: { journal?: JournalEntry[]; includeDemo?: boolean } = {}): Promise<LocatedDemand[]> {
  const entries = opts.journal ?? (await readJournalEntries(journalDir(), { includeDemo: opts.includeDemo ?? process.env.NODE_ENV !== "production" }));
  const idx = muniIndex();
  return demandInputs(entries).map((d) => locateDemand(d, idx));
}

export function coverageInstallers(g: GestionData, partners: PartenairesData, reseau: ReseauData, payment: Map<string, PaymentBlock>, now: Date): CoverageInstaller[] {
  const today = localYmd(now);
  const in7 = addDaysYmd(today, 7);
  return g.installers.map((i) => {
    const upcoming7 = g.jobs.filter((j) => {
      if (j.assignedInstallerId !== i.id || j.status !== "planifie") return false;
      const day = jobSlot(j).day;
      return Boolean(day && day >= today && day < in7);
    }).length;
    const pay = payment.get(i.id);
    return {
      id: i.id,
      company: i.company,
      active: i.active,
      ended: Boolean(partners.partners[i.id]?.ended),
      base: i.base ? { lat: i.base.lat, lon: i.base.lon } : null,
      radiusKm: i.radiusKm,
      extraRegions: [...i.extraRegions],
      blockers: [...partnerBlockers(i, { data: partners, now }).map((b) => b.label), ...(pay ? [pay.reason] : [])],
      load: installerStats(i.id, g.jobs, now).load,
      maxOpenJobs: i.maxOpenJobs,
      upcoming7,
      weeklyCapacity: reseau.onboarding[i.id]?.availability.weeklyCapacity ?? null,
    };
  });
}

export interface CoverageSnapshot {
  gestion: GestionData;
  partners: PartenairesData;
  reseau: ReseauData;
  installers: CoverageInstaller[];
}

export async function readCoverage(now = new Date()): Promise<CoverageSnapshot> {
  const [gestion, partners, reseau, payment] = await Promise.all([readGestion(), readPartenaires(), readReseau(), loadPaymentBlockers(now).catch(() => new Map<string, PaymentBlock>())]);
  const demo = process.env.NODE_ENV !== "production";
  const g: GestionData = demo || !gestion.seed ? gestion : { ...gestion, installers: [], jobs: [] };
  return { gestion: g, partners, reseau, installers: coverageInstallers(g, partners, reseau, payment, now) };
}
