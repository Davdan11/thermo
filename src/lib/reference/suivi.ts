/* ==================================================================
   Conformité C2 — suivi quotidien du programme de recommandation.

   1. Demandes du journal arrivées par un lien de référence
      (utm_source=reference, utm_campaign=<code>) après la date de
      lancement : une recommandation par nouveau client (le premier code
      valide l'emporte), admissibilité vérifiée (regles.ts).
   2. Recommandations ouvertes : installation du recommandé (job
      terminé), paiement et remboursement confirmés par le propriétaire,
      délai d'annulation, plafond annuel → « à verser » avec une tâche
      « verser la récompense » dans le CRM, à faire dans les 30 jours.
   Rien ne se passe si le programme n'est pas offert (sans montant).
   ================================================================== */

import { journalDir, type JournalEntry } from "@/lib/crm/lead-journal";
import { readJournalEntries } from "@/lib/gestion/statistiques";
import { isDemand } from "@/lib/gestion/crm/sources";
import { readGestion } from "@/lib/gestion/store";
import { readAfterSale, readAutomations } from "@/lib/gestion/automatisations/store";
import { crmDeps, type CrmDeps } from "@/lib/gestion/automatisations/crm-link";
import { jobCompletion } from "@/lib/gestion/commissions/link";
import { identityKeys } from "@/lib/consentements/store";
import { money } from "@/lib/consentements/textes";
import { firstValidUse, montrealDay, programState, referralEligibility, rewardDecision, type CodeUse } from "./regles";
import { mutateReferences, newReferralId, readReferences, type ReferralRecord } from "./store";

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : null);

export interface ReferralSyncDeps {
  journal?: () => Promise<JournalEntry[]>;
  /** Empreintes (e:, p:) des employés et de l'administration. */
  staffKeys?: () => Promise<string[]>;
  crm?: Pick<CrmDeps, "addTask" | "clientIdForJob">;
}

export interface ReferralSyncReport {
  offert: boolean;
  nouvelles: number;
  aVerser: number;
  refusees: number;
  enAttente: number;
}

async function defaultStaffKeys(): Promise<string[]> {
  const [{ listMembers }, { adminEmails }] = await Promise.all([import("@/lib/gestion/equipe/members"), import("@/lib/gestion/auth/admins")]);
  const members = await listMembers().catch(() => []);
  return [
    ...members.flatMap((m) => identityKeys({ email: (m as { email?: string }).email, phone: (m as { phone?: string }).phone })),
    ...adminEmails().flatMap((email) => identityKeys({ email })),
  ];
}

const DECLARATION_REASON = "déclaration";

export async function syncReferrals(now = new Date(), deps: ReferralSyncDeps = {}): Promise<ReferralSyncReport> {
  const auto = await readAutomations();
  const program = auto.settings.referralProgram;
  const state = programState(program, now);
  const report: ReferralSyncReport = { offert: state.offered, nouvelles: 0, aVerser: 0, refusees: 0, enAttente: 0 };
  if (!state.offered || !program?.launchDate) return report;

  const [entries, gestion, after, refs, staff] = await Promise.all([
    (deps.journal ?? (() => readJournalEntries(journalDir())))(),
    readGestion(),
    readAfterSale(),
    readReferences(),
    (deps.staffKeys ?? defaultStaffKeys)().catch(() => [] as string[]),
  ]);
  const crm = deps.crm ?? crmDeps;
  const staffSet = new Set(staff);
  const partnerSet = new Set(gestion.installers.flatMap((i) => identityKeys({ email: i.email, phone: i.phone })));
  const demands = entries.filter(isDemand);
  const keysOf = (e: JournalEntry) => identityKeys({ email: str(e.lead?.email), phone: str(e.lead?.phone) });
  const datesByKey = new Map<string, string[]>();
  for (const e of demands) for (const k of keysOf(e)) datesByKey.set(k, [...(datesByKey.get(k) ?? []), e.at]);

  // 1. Nouvelles recommandations : premier code valide par personne, après le lancement.
  const known = new Set(refs.records.flatMap((r) => r.referredKeys));
  const uses: Array<CodeUse & { entry: JournalEntry }> = [];
  for (const e of demands) {
    const u = e.attribution?.utm;
    const code = u?.utm_source === "reference" ? u.utm_campaign : undefined;
    if (!code || !after.referrals[code] || montrealDay(new Date(e.at)) < program.launchDate) continue;
    const personKeys = keysOf(e);
    if (!personKeys.length || personKeys.some((k) => known.has(k))) continue;
    uses.push({ code, at: e.at, personKeys, entry: e });
  }
  const iso = now.toISOString();
  const fresh: ReferralRecord[] = [];
  for (const u of firstValidUse(uses, () => true).values()) {
    const use = u as CodeUse & { entry: JournalEntry };
    fresh.push({
      id: newReferralId(),
      code: use.code,
      referrerJobId: after.referrals[use.code],
      referredKeys: use.personKeys,
      referredName: str(use.entry.lead?.firstName)?.split(/\s+/)[0]?.slice(0, 40) ?? "",
      journalId: use.entry.id,
      codeUsedAt: use.at,
      createdAt: iso,
      updatedAt: iso,
      status: "en-attente",
      reasons: [],
    });
  }

  // 2. Évaluation : admissibilité (déclaration comprise), puis récompense.
  const toTask: ReferralRecord[] = [];
  await mutateReferences((d) => {
    d.records.push(...fresh);
    for (const r of d.records) {
      const open = r.status === "en-attente" || (r.status === "refusee" && r.reasons.length > 0 && r.reasons.every((x) => x.toLowerCase().includes(DECLARATION_REASON)));
      if (!open) continue;
      const job = gestion.jobs.find((j) => j.id === r.referrerJobId);
      const referrerKeys = job ? identityKeys(job.client) : [];
      const declared = d.declarations[r.referrerJobId];
      const elig = referralEligibility(
        { adult: Boolean(declared), canada: Boolean(declared), client: Boolean(job), partner: referrerKeys.some((k) => partnerSet.has(k)), staff: referrerKeys.some((k) => staffSet.has(k)) },
        { codeUsedAt: r.codeUsedAt, demands: [...new Set(r.referredKeys.flatMap((k) => datesByKey.get(k) ?? []))], sameHousehold: r.referredKeys.some((k) => referrerKeys.includes(k)) },
      );
      if (!elig.eligible) {
        r.status = "refusee";
        r.reasons = elig.reasons;
        r.updatedAt = iso;
        continue;
      }
      const installJob = gestion.jobs.filter((j) => identityKeys(j.client).some((k) => r.referredKeys.includes(k)) && Date.parse(j.createdAt) >= Date.parse(r.codeUsedAt) - 86_400_000).sort((a, b) => a.createdAt.localeCompare(b.createdAt))[0];
      if (installJob) r.referredJobId = installJob.id;
      const awarded = d.records.filter((x) => x.id !== r.id && x.referrerJobId === r.referrerJobId && (x.status === "a-verser" || x.status === "versee") && x.conditionsMetAt && x.rewardCents).map((x) => ({ at: x.conditionsMetAt!, cents: x.rewardCents! }));
      const dec = rewardDecision(program, { contractAt: null, completedAt: installJob ? (jobCompletion(installJob)?.completedAt ?? null) : null, paidAt: r.paidConfirmedAt ?? null, refundedAt: r.refundedAt ?? null }, awarded, now);
      r.status = dec.status;
      r.reasons = dec.reasons;
      if (dec.status === "a-verser") {
        r.rewardCents = dec.rewardCents ?? undefined;
        r.conditionsMetAt = dec.conditionsMetAt ?? undefined;
        r.dueBy = dec.dueBy ?? undefined;
        if (!r.taskCreated) toTask.push({ ...r });
      }
      r.updatedAt = iso;
    }
    return { result: undefined, changed: true };
  });

  // 3. Tâche « verser la récompense » (une fois), dans les 30 jours.
  for (const r of toTask) {
    const clientId = await crm.clientIdForJob(r.referrerJobId).catch(() => null);
    const due = r.dueBy ? montrealDay(new Date(r.dueBy)) : "";
    await crm.addTask({ clientId, title: `Programme de recommandation : verser ${r.rewardCents ? money(r.rewardCents) : "la récompense"} (${program.form}) avant le ${due} (${r.referredName || "nouveau client"} recommandé)`, dueAt: r.dueBy ? new Date(r.dueBy) : now }).catch((e) => console.error("[référence] tâche non créée :", e));
    await mutateReferences((d) => {
      const x = d.records.find((y) => y.id === r.id);
      if (!x) return { result: undefined, changed: false };
      x.taskCreated = true;
      return { result: undefined, changed: true };
    });
  }

  const after2 = await readReferences();
  report.nouvelles = fresh.length;
  for (const r of after2.records) {
    if (r.status === "a-verser") report.aVerser++;
    else if (r.status === "refusee") report.refusees++;
    else if (r.status === "en-attente") report.enAttente++;
  }
  return report;
}
