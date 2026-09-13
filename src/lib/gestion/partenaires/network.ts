/* ==================================================================
   Vue d'ensemble du réseau (lecture seule) : pour chaque partenaire,
   l'état de l'entente, la conformité, les blocages, la performance et
   le niveau. Sert à la page Partenaires, à la fiche d'un partenaire et
   au classement des jobs (partnerMatchInfo, branché dans loadJobPage).
   AUCUNE vérification d'accès ici : les pages passent par requireAdmin().
   ================================================================== */

import { readSav } from "../sav/store";
import type { SavData } from "../sav/types";
import { readGestion } from "../store";
import { readTerrain } from "../terrain/store";
import type { TerrainData } from "../terrain/types";
import type { GestionData, Installer, Job } from "../types";
import { agreementState, type AgreementState } from "./agreement";
import { partnerBlockers, type Blocker } from "./blockers";
import { docState, type DocState } from "./compliance";
import { paymentStats, satisfactionStats } from "./extensions";
import { computePerformance, tierReason, type PartnerPerformance } from "./performance";
import { readPartenaires } from "./store";
import type { ComplianceDoc, PartenairesData, PartnerRecord } from "./types";
// Conformité C1 : désistements et dates confirmées ratées (contrats.json), comptés dans la performance.
import { commitmentStats } from "@/lib/contrats/regles";
import { readContrats } from "@/lib/contrats/store";
import type { ContratsData } from "@/lib/contrats/types";
import { localYmd } from "../crm/time";

export interface NetworkSnapshot {
  gestion: GestionData;
  partners: PartenairesData;
  terrain: TerrainData;
  sav: SavData;
  now: Date;
  /** Conformité C1 : absent, rien n'est compté. */
  contrats?: ContratsData;
}

export async function readNetwork(now = new Date()): Promise<NetworkSnapshot> {
  const [gestion, partners, terrain, sav, contrats] = await Promise.all([readGestion(), readPartenaires(), readTerrain(), readSav(), readContrats().catch(() => undefined)]);
  return { gestion, partners, terrain, sav, now, ...(contrats ? { contrats } : {}) };
}

export interface PartnerSummary {
  installer: Installer;
  record: PartnerRecord | null;
  agreement: AgreementState;
  blockers: Blocker[];
  compliance: { rbq: { doc: ComplianceDoc | null; state: DocState }; assurance: { doc: ComplianceDoc | null; state: DocState } };
  performance: PartnerPerformance;
}

export async function summarize(installer: Installer, snap: NetworkSnapshot): Promise<PartnerSummary> {
  const record = snap.partners.partners[installer.id] ?? null;
  const [payment, satisfaction] = await Promise.all([paymentStats(installer.id), satisfactionStats(installer.id)]);
  const alert = snap.partners.settings.alertDays;
  return {
    installer,
    record,
    agreement: agreementState(installer, snap.partners, snap.now),
    blockers: partnerBlockers(installer, { data: snap.partners, now: snap.now }),
    compliance: {
      rbq: { doc: record?.compliance.rbq ?? null, state: docState(record?.compliance.rbq ?? { expiresOn: null }, snap.now, alert) },
      assurance: { doc: record?.compliance.assurance ?? null, state: docState(record?.compliance.assurance ?? { expiresOn: null }, snap.now, alert) },
    },
    performance: computePerformance(installer.id, {
      jobs: snap.gestion.jobs,
      records: snap.terrain.records,
      tickets: snap.sav.tickets,
      partner: record,
      settings: snap.partners.settings,
      now: snap.now,
      payment,
      satisfaction,
      // Conformité C1 : désistements et dates confirmées ratées.
      commitments: snap.contrats ? commitmentStats(installer.id, snap.contrats.dossiers, snap.gestion.jobs, snap.terrain.records, localYmd(snap.now)) : null,
    }),
  };
}

export async function summarizeAll(snap: NetworkSnapshot): Promise<PartnerSummary[]> {
  const list = [...snap.gestion.installers].sort((a, b) => a.company.localeCompare(b.company, "fr-CA"));
  return Promise.all(list.map((i) => summarize(i, snap)));
}

export interface PartnerMatchInfo {
  blockers: string[];
  tierPoints: number;
  tierLabel: string | null;
}

/**
 * Pour matchInstallers (classement des jobs) : blocages affichés comme raisons d'exclusion, points de niveau
 * ajoutés au score. Lit les magasins une fois.
 */
export async function partnerMatchInfo(installers: Installer[], jobs: Job[], now = new Date()): Promise<(installerId: string) => PartnerMatchInfo | null> {
  const [partners, terrain, sav, contrats] = await Promise.all([readPartenaires(), readTerrain(), readSav(), readContrats().catch(() => undefined)]); // Conformité C1 : contrats
  const snap: NetworkSnapshot = { gestion: { version: 1, installers, jobs }, partners, terrain, sav, now, ...(contrats ? { contrats } : {}) };
  const map = new Map<string, PartnerMatchInfo>();
  for (const s of await summarizeAll(snap)) {
    const points = partners.settings.tierPoints[s.performance.tier] ?? 0;
    map.set(s.installer.id, { blockers: s.blockers.map((b) => b.label), tierPoints: points, tierLabel: tierReason(s.performance.tier, points) });
  }
  return (id) => map.get(id) ?? null;
}
