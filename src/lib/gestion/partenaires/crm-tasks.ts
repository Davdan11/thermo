/* ==================================================================
   Tâches automatiques du volet A pour le CRM (calculées, jamais
   stockées, comme celles de la phase 1) :
     partenaire-entente     envoyer ou relancer l'entente en vigueur
     partenaire-conformite  licence RBQ / assurance : bientôt expirée,
                            expirée, date à saisir
     sav-billet             classer la cause, assigner, prise en charge
                            en retard, confirmer la satisfaction,
                            client insatisfait
   Branché dans computeIndex (crm/model.ts) par une seule boucle
   commentée ; les données arrivent par SourceData.partenaires
   (crm/service.ts, loadSources).
   ================================================================== */

import type { Task, TaskRule } from "../crm/tasks";
import { addDaysYmd, zonedToUtc } from "../crm/time";
import { isLate } from "../sav/rules";
import { ticketSla } from "../sav/sla";
import { readSav } from "../sav/store";
import type { SavData } from "../sav/types";
import { readGestion } from "../store";
import { agreementState, masterAgreementInForce } from "./agreement";
import { COMPLIANCE_LABELS, docEntered, docState, halocarbonState, validHalocarbons, ymdLong } from "./compliance";
import { endedOf, suspendedByNotice, terminationPhase } from "./fin";
import { readPartenaires } from "./store";
import type { PartenairesData } from "./types";

export interface PartnerTaskInput {
  partners: PartenairesData;
  sav: SavData;
  installers: Array<{ id: string; company: string; createdAt: string; active: boolean }>;
}

export async function readPartnerTaskInput(): Promise<PartnerTaskInput> {
  const [partners, sav, g] = await Promise.all([readPartenaires(), readSav(), readGestion()]);
  return { partners, sav, installers: g.installers.map((i) => ({ id: i.id, company: i.company, createdAt: i.createdAt, active: i.active })) };
}

const DAY = 86_400_000;
const later = (a: string | undefined, b: string) => (a && a > b ? a : b);

function mk(rule: TaskRule, key: string, fields: Pick<Task, "title" | "detail" | "dueAt" | "href"> & { jobId?: string }): Task {
  return { key: `auto:${rule}:${key}`, rule, family: "suivis", clientId: null, manual: false, snoozed: false, ...fields };
}

export function partnerAutoTasks(input: PartnerTaskInput | undefined, now: Date): Task[] {
  if (!input) return [];
  const out: Task[] = [];
  const { partners: d, sav } = input;
  const alert = d.settings.alertDays;
  // Conformité C3 : exigences de l'entente maître (automobile, avenant, halocarbures) dès qu'elle est en vigueur.
  const master = masterAgreementInForce(d);
  const req = d.settings.requirements;

  for (const inst of input.installers) {
    // Conformité C3 : fin effective aussi à l'échéance d'un préavis de 30 jours.
    if (!inst.active || endedOf(d.partners[inst.id], now)) continue;
    const href = `/gestion/partenaires/${inst.id}`;
    const rec = d.partners[inst.id];

    // Conformité C3 : délai de correction écoulé, la fin est à confirmer (aucune fin automatique pour motif).
    const phase = terminationPhase(rec, now);
    if (phase === "a-confirmer" && rec?.termination) out.push(mk("partenaire-conformite", `${inst.id}:fin:${rec.termination.noticeAt}`, { title: `${inst.company} : délai de correction écoulé`, detail: "Défaut corrigé ? Annulez l’avis ; sinon confirmez la fin du partenariat", dueAt: zonedToUtc(rec.termination.effectiveOn, 9).toISOString(), href }));
    if (suspendedByNotice(rec, now)) continue;

    const kinds: Array<"rbq" | "assurance" | "automobile"> = ["rbq", "assurance"];
    if (docEntered(rec?.compliance.automobile) || (master && req.requireAuto)) kinds.push("automobile");
    for (const kind of kinds) {
      const doc = rec?.compliance[kind];
      const state = docState(doc ?? { expiresOn: null }, now, alert);
      const label = COMPLIANCE_LABELS[kind];
      const exp = doc?.expiresOn ?? "";
      if (state === "bientot") out.push(mk("partenaire-conformite", `${inst.id}:${kind}:bientot:${exp}`, { title: `${label} de ${inst.company} : expire le ${ymdLong(exp)}`, detail: "Demander le document renouvelé", dueAt: zonedToUtc(addDaysYmd(exp, -alert), 9).toISOString(), href }));
      else if (state === "expiree") out.push(mk("partenaire-conformite", `${inst.id}:${kind}:expiree:${exp}`, { title: `${label} de ${inst.company} expirée`, detail: "Plus aucune offre de job tant qu’elle n’est pas renouvelée", dueAt: zonedToUtc(addDaysYmd(exp, 1), 9).toISOString(), href }));
      else if (state === "manquante") out.push(mk("partenaire-conformite", `${inst.id}:${kind}:manquante`, { title: `${label} de ${inst.company} : date d’expiration à saisir`, detail: d.settings.blockWhenMissing ? "Offres bloquées tant qu’elle manque" : "Pour être averti avant l’expiration", dueAt: inst.createdAt, href }));
    }

    // Conformité C3 : avenant d'assuré additionnel, attestations environnementales.
    if (master && req.requireEndorsement && !(rec?.additionalInsured?.confirmed && rec.additionalInsured.fileId)) out.push(mk("partenaire-conformite", `${inst.id}:avenant`, { title: `Obtenir l’avenant d’assuré additionnel de ${inst.company}`, detail: "Plus aucune offre sans l’avenant (la plateforme désignée assurée additionnelle)", dueAt: later(d.agreements.find((a) => a.status === "publiee")?.publishedAt, inst.createdAt), href }));
    for (const c of rec?.halocarbons ?? []) {
      if (!c.expiresOn) continue;
      const hs = halocarbonState(c, now, alert);
      if (hs === "bientot") out.push(mk("partenaire-conformite", `${inst.id}:halo:${c.id}:bientot:${c.expiresOn}`, { title: `Attestation environnementale de ${c.holder} (${inst.company}) : expire le ${ymdLong(c.expiresOn)}`, detail: "Demander l’attestation renouvelée", dueAt: zonedToUtc(addDaysYmd(c.expiresOn, -alert), 9).toISOString(), href }));
      else if (hs === "expiree") out.push(mk("partenaire-conformite", `${inst.id}:halo:${c.id}:expiree:${c.expiresOn}`, { title: `Attestation environnementale de ${c.holder} (${inst.company}) expirée`, detail: validHalocarbons(rec, now).length ? "Une autre attestation reste valide" : "Plus aucune offre sans attestation valide", dueAt: zonedToUtc(addDaysYmd(c.expiresOn, 1), 9).toISOString(), href }));
    }
    if (master && req.requireHalocarbon && !(rec?.halocarbons ?? []).length) out.push(mk("partenaire-conformite", `${inst.id}:halo:manquante`, { title: `Qualification environnementale (halocarbures) de ${inst.company} à saisir`, detail: "Plus aucune offre sans attestation valide", dueAt: inst.createdAt, href }));

    const st = agreementState(inst, d, now);
    if (st.version && st.code !== "signee") {
      const lastSend = st.request?.sends.at(-1)?.at;
      if (!lastSend) {
        out.push(mk("partenaire-entente", `${inst.id}:${st.version.id}:envoyer`, { title: `Envoyer l’entente à ${inst.company}`, detail: st.code === "a-resigner" ? `Version ${st.version.number} à re-signer` : "Aucune offre de job avant la signature", dueAt: later(st.version.publishedAt, inst.createdAt), href }));
      } else {
        const grace = st.graceUntil ? ` · délai de grâce jusqu’au ${ymdLong(st.graceUntil.slice(0, 10))}` : "";
        out.push(mk("partenaire-entente", `${inst.id}:${st.version.id}:relancer:${lastSend}`, { title: `Relancer ${inst.company} pour l’entente`, detail: `${st.request?.openedAt ? "Ouverte" : "Envoyée"}, pas encore signée${grace}`, dueAt: new Date(Date.parse(lastSend) + 3 * DAY).toISOString(), href }));
      }
    }
  }

  for (const t of sav.tickets) {
    if (t.status === "ferme") continue;
    const base = { href: `/gestion/sav/${t.id}`, ...(t.jobId ? { jobId: t.jobId } : {}) };
    if (!t.cause) out.push(mk("sav-billet", `${t.id}:classer`, { title: `Classer la cause du billet n° ${t.number}`, detail: "Main-d’œuvre, appareil ou autre", dueAt: t.createdAt, ...base }));
    else if (t.status === "nouveau" && t.installerId) out.push(mk("sav-billet", `${t.id}:assigner`, { title: `Assigner le billet n° ${t.number}`, detail: "À l’installateur d’origine", dueAt: t.causeAt ?? t.createdAt, ...base }));
    if (t.status === "assigne" && isLate(t, now)) {
      // Conformité C3 : échéances de service du partenaire (accusé de réception, visite), sinon l'ancienne échéance.
      const s = t.ackDueAt ? ticketSla(t, d.settings.sla, now) : null;
      const detail = s?.ack.state === "en-retard" ? "Aucun accusé de réception du partenaire à l’échéance" : "Aucune visite prévue à l’échéance";
      out.push(mk("sav-billet", `${t.id}:retard:${t.dueAt}`, { title: `Billet n° ${t.number} : prise en charge en retard`, detail, dueAt: s ? (s.ack.state === "en-retard" ? s.ack.dueAt : s.visit.dueAt) : t.dueAt, ...base }));
    }
    if (t.status === "resolu" && t.resolution) out.push(mk("sav-billet", `${t.id}:satisfaction:${t.resolution.at}`, { title: `Confirmer la satisfaction du client (billet n° ${t.number})`, detail: "Résolu selon l’installateur", dueAt: new Date(Date.parse(t.resolution.at) + 3 * DAY).toISOString(), ...base }));
    if (t.satisfaction && !t.satisfaction.satisfied && t.status !== "resolu") out.push(mk("sav-billet", `${t.id}:insatisfait:${t.satisfaction.at}`, { title: `Billet n° ${t.number} : client insatisfait`, detail: t.satisfaction.note || "Reprendre le dossier", dueAt: t.satisfaction.at, ...base }));
  }
  return out;
}
