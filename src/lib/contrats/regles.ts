/* ==================================================================
   Conformité C1 — règles pures du parcours :
     - blocages de l'approbation de l'installateur ;
     - étape vue par le client (jamais de signature avant l'approbation) ;
     - preuve de signature vérifiable (empreintes recalculées) ;
     - avenants (signés AVANT l'exécution) ;
     - base de commission (prix net final avec avenants signés) ;
     - engagements tenus (désistements, dates ratées) pour la
       performance du partenaire.
   ================================================================== */

import type { Blocker } from "@/lib/gestion/partenaires/blockers";
import type { DocState } from "@/lib/gestion/partenaires/compliance";
import { identityProblems } from "@/lib/soumissions/contractor";
import { hashOf, sha256Hex } from "@/lib/soumissions/hash";
import { taxOf } from "@/lib/soumissions/money";
import type { ContractorIdentity, QuoteContent } from "@/lib/soumissions/types";
import { paymentProblems } from "./paiement";
import { subcategoryProblems, worksOf, type KnownSubcategories } from "./rbq";
import { renderContractBody } from "./rendu";
import type { Avenant, AvenantContent, AvenantLine, ContractDoc, ContractSignature, DateChoice, Dossier, PaymentProfile, RbqRule, SentContract } from "./types";

/* ---------------- Approbation de l'installateur ---------------- */

export interface ApprovalContext {
  /** Blocages du volet A et du chantier R (partnerBlockers), sans en changer les règles. */
  partnerBlockers: Blocker[];
  compliance: { rbq: DocState; assurance: DocState };
  identity: ContractorIdentity;
  known: KnownSubcategories;
  rules: readonly RbqRule[];
  project: Pick<QuoteContent, "machine" | "placement">;
  payment: PaymentProfile | null;
  /** Offres en pause pour une commission en retard (volet B), ou null. */
  paymentBlock: string | null;
  /** Ce qui empêche le contrat d'être complet (trousse, identité de la plateforme, jetons, identification). */
  contractProblems: string[];
}

/** Tout ce qui empêche l'installateur d'approuver (liste vide : il peut approuver). */
export function approvalBlockers(x: ApprovalContext): string[] {
  const out: string[] = x.partnerBlockers.map((b) => b.label);
  const codes = new Set(x.partnerBlockers.map((b) => b.code));
  if (x.compliance.rbq === "manquante" && !codes.has("rbq")) out.push("Licence RBQ : date d’expiration à saisir (fiche du partenaire, Conformité)");
  if (x.compliance.assurance === "manquante" && !codes.has("assurance")) out.push("Assurance responsabilité : date d’expiration à saisir (fiche du partenaire, Conformité)");
  const id = identityProblems(x.identity);
  if (id.missing.length) out.push(`Identité légale de l’installateur incomplète : ${id.missing.join(", ")}`);
  out.push(...id.formatIssues);
  if (!x.known.codes.length) out.push("Sous-catégories RBQ de l’installateur inconnues : saisissez-les dans sa fiche, ou lancez la vérification au registre");
  out.push(...subcategoryProblems(x.rules, worksOf(x.project), x.known));
  out.push(...paymentProblems(x.payment));
  if (x.paymentBlock) out.push(`Offres en pause : ${x.paymentBlock}`);
  out.push(...x.contractProblems);
  return [...new Set(out)];
}

export const APPROVAL_ERRORS: Record<string, string> = {
  nom: "Écrivez votre prénom et votre nom au complet.",
  titre: "Indiquez votre titre dans l’entreprise.",
  autorise: "Cochez « Je suis autorisé à signer pour l’entreprise ».",
  date: "Choisissez : confirmer la date ou la période du client, ou proposer une autre date.",
  "date-invalide": "La date proposée est invalide ou déjà passée.",
  change: "Le contrat a changé depuis l’ouverture de la page : relisez-le, puis approuvez de nouveau.",
  bloque: "Approbation impossible : réglez d’abord les éléments indiqués en rouge.",
  statut: "Cette proposition n’attend plus votre réponse.",
  message: "Écrivez votre message (au moins quelques mots).",
  invalide: "Ce lien n’est pas valide.",
};

const YMD = /^\d{4}-\d{2}-\d{2}$/;

/** Validation du formulaire d'approbation : code d'erreur, ou null. La date est OBLIGATOIRE (confirmée ou proposée). */
export function approvalInputError(x: { name: string; title: string; authorized: boolean; dateChoice: DateChoice | null }, today: string): string | null {
  const name = x.name.replace(/\s+/g, " ").trim();
  if (!/^\S+(\s+\S+)+$/.test(name) || !/\p{L}.*\p{L}/u.test(name)) return "nom";
  if (x.title.trim().length < 2) return "titre";
  if (!x.authorized) return "autorise";
  const d = x.dateChoice;
  if (!d) return "date";
  if (d.kind === "autre") {
    if (d.mode === "date" && (!YMD.test(d.date) || d.date < today)) return "date-invalide";
    if (d.mode === "fenetre" && (!YMD.test(d.windowStart) || !YMD.test(d.windowEnd) || d.windowEnd < d.windowStart || d.windowEnd < today)) return "date-invalide";
  }
  return null;
}

/** Contenu du projet avec la date retenue par l'installateur (« autre » : la nouvelle date remplace celle de l'estimation). */
export function applyDateChoice(content: QuoteContent, d: DateChoice): QuoteContent {
  if (d.kind === "confirme") return content;
  const note = d.note.trim().slice(0, 300);
  return {
    ...content,
    schedule: {
      ...content.schedule,
      mode: d.mode,
      date: d.mode === "date" ? d.date : "",
      windowStart: d.mode === "fenetre" ? d.windowStart : "",
      windowEnd: d.mode === "fenetre" ? d.windowEnd : "",
      windowText: note || content.schedule.windowText,
    },
  };
}

/* ---------------- Étape vue par le client ---------------- */

export type ClientStage = "estimation" | "recherche" | "confirmation" | "finalisation" | "contrat" | "signe" | "refuse";

/** Contrat actif : approuvé et présenté (« a-signer ») ou signé ; un seul à la fois. */
export function activeContract(d: Pick<Dossier, "contracts"> | null | undefined): SentContract | null {
  if (!d) return null;
  for (let i = d.contracts.length - 1; i >= 0; i--) if (d.contracts[i].status === "a-signer" || d.contracts[i].status === "signe") return d.contracts[i];
  return null;
}

/**
 * Ce que voit le client sur le document d'une version :
 *   estimation   : aucun installateur ; « Je veux aller de l'avant » possible ;
 *   recherche    : il est allé de l'avant ; l'installateur est à trouver ;
 *   confirmation : un installateur étudie le projet (proposition ou offre en cours) ;
 *   finalisation : refus ou changement demandé, rien en cours (« Nous finalisons le choix de votre entrepreneur ») ;
 *   contrat      : approuvé par l'installateur : 4 confirmations et signature ;
 *   signe, refuse.
 * La signature n'existe qu'à l'étape « contrat » : jamais avant l'approbation.
 */
export function clientStage(d: Pick<Dossier, "contracts" | "proposals"> | null | undefined, versionId: string, o: { jumelage: boolean; offerOpen: boolean }): ClientStage {
  const active = activeContract(d);
  if (active && active.versionId === versionId) return active.status === "signe" ? "signe" : "contrat";
  if (active) return "finalisation";
  const mine = (d?.contracts ?? []).filter((c) => c.versionId === versionId);
  if (mine.length && mine[mine.length - 1].status === "refuse") return "refuse";
  const proposals = (d?.proposals ?? []).filter((p) => p.versionId === versionId);
  if (proposals.some((p) => p.status === "en-attente") || o.offerOpen) return "confirmation";
  if (proposals.some((p) => p.status === "refusee" || p.status === "changements") || mine.some((c) => c.status === "autre-installateur" || c.status === "annule" || c.status === "remplace")) return "finalisation";
  return o.jumelage ? "recherche" : "estimation";
}

export const canClientSign = (stage: ClientStage) => stage === "contrat";

/* ---------------- Signature et preuve ---------------- */

export const SIGN_ERRORS: Record<string, string> = {
  nom: "Tapez votre prénom et votre nom au complet : ils tiennent lieu de signature.",
  confirmations: "Cochez les confirmations avant de signer.",
  change: "Le contrat a changé depuis l’ouverture de la page : relisez-le, puis signez de nouveau.",
  "total-change": "Le total a changé : vérifiez vos options, puis signez de nouveau.",
  etape: "La signature n’est pas disponible : votre entrepreneur doit d’abord approuver le contrat.",
  deja: "Ce contrat est déjà signé.",
  courriel: "Le courriel est invalide.",
  adresse: "L’adresse est incomplète.",
  invalide: "Ce lien n’est pas valide.",
  jumelage: "Cochez la case avant d’aller de l’avant.",
};

export const normalizeTyped = (s: string) => s.normalize("NFC").replace(/\s+/g, " ").trim().slice(0, 120);
export const typedNameOk = (s: string) => /^\S+(\s+\S+)+$/.test(s) && /\p{L}.*\p{L}/u.test(s);

/** Instantané signé (sans ses propres empreintes). */
export function signatureSnapshot(doc: ContractDoc, s: Omit<ContractSignature, "snapshotSha256">): Record<string, unknown> {
  return { doc, client: s.client, site: s.site, selection: s.selection, totals: s.totals, confirmations: s.confirmations, typedName: s.typedName, at: s.at, ip: s.ip, userAgent: s.userAgent, approvedSha256: s.approvedSha256, renderedSha256: s.renderedSha256, trousse: s.trousse };
}

export function renderSigned(doc: ContractDoc, s: Pick<ContractSignature, "client" | "site" | "selection" | "totals" | "at" | "typedName" | "confirmations">): string {
  return renderContractBody({ doc, client: s.client, site: s.site, selection: s.selection, totals: s.totals, signature: { at: s.at, typedName: s.typedName, confirmations: s.confirmations } });
}

/** Vérification : chaque empreinte est recalculée à partir de ce qui est conservé. */
export function verifyContract(c: Pick<SentContract, "doc" | "signature">, approvalSha256: string | null): { ok: boolean; checks: Array<{ label: string; ok: boolean }> } {
  const checks: Array<{ label: string; ok: boolean }> = [];
  const docHash = hashOf(c.doc);
  if (approvalSha256) checks.push({ label: "Contenu identique à celui approuvé par l’entrepreneur", ok: docHash === approvalSha256 });
  const s = c.signature;
  if (s) {
    checks.push({ label: "Contrat signé = contenu approuvé", ok: s.approvedSha256 === docHash });
    checks.push({ label: "Empreinte du contrat rendu recalculée", ok: sha256Hex(renderSigned(c.doc, s)) === s.renderedSha256 });
    const { snapshotSha256, ...rest } = s;
    checks.push({ label: "Empreinte de l’instantané signé recalculée", ok: hashOf(signatureSnapshot(c.doc, rest)) === snapshotSha256 });
  }
  return { ok: checks.every((x) => x.ok), checks };
}

/* ---------------- Avenants ---------------- */

const signedTax = (cents: number, ratePer100k: number) => (cents >= 0 ? taxOf(cents, ratePer100k) : -taxOf(-cents, ratePer100k));

/** Avenants signés d'un contrat. */
export const signedAvenants = (avenants: readonly Avenant[], contractNumber: string) => avenants.filter((a) => a.status === "signe" && a.content.contractNumber === contractNumber);

/** Total du contrat signé, taxes comprises, avec ses avenants signés. */
export function contractTotalCents(c: Pick<SentContract, "signature" | "doc">, avenants: readonly Avenant[]): number {
  if (!c.signature) return 0;
  return c.signature.totals.totalCents + signedAvenants(avenants, c.doc.number).reduce((s, a) => s + a.content.deltaTotalCents, 0);
}

export function avenantAmounts(lines: readonly AvenantLine[], taxes: { tpsPer100k: number; tvqPer100k: number }, currentTotalCents: number): Pick<AvenantContent, "priceBeforeTaxCents" | "tpsCents" | "tvqCents" | "deltaTotalCents" | "newTotalCents"> {
  const priceBeforeTaxCents = lines.reduce((s, l) => s + Math.round(l.amountCents), 0);
  const tpsCents = signedTax(priceBeforeTaxCents, taxes.tpsPer100k);
  const tvqCents = signedTax(priceBeforeTaxCents, taxes.tvqPer100k);
  const deltaTotalCents = priceBeforeTaxCents + tpsCents + tvqCents;
  return { priceBeforeTaxCents, tpsCents, tvqCents, deltaTotalCents, newTotalCents: currentTotalCents + deltaTotalCents };
}

export interface AvenantDraft {
  reason: string;
  added: string;
  removed: string;
  lines: AvenantLine[];
  scheduleEffect: string;
}

/** Aucun extra sans avenant : contrat signé, travaux pas terminés, raison, prix avant taxes, effet sur l'échéancier. */
export function avenantProblems(contract: Pick<SentContract, "status"> | null, jobStatus: string | null, x: AvenantDraft): string[] {
  const out: string[] = [];
  if (!contract || contract.status !== "signe") out.push("Un avenant suppose un contrat signé par le client.");
  if (jobStatus === "termine" || jobStatus === "annule") out.push("Travaux terminés ou annulés : un avenant se signe AVANT l’exécution des travaux qu’il vise.");
  if (x.reason.trim().length < 3) out.push("Indiquez la condition imprévue ou la raison du changement.");
  if (!x.lines.length) out.push("Ajoutez au moins une ligne : travail ajouté ou retranché, avec son prix avant taxes.");
  if (x.lines.some((l) => !l.label.trim() || !Number.isFinite(l.amountCents) || l.amountCents === 0)) out.push("Chaque ligne a une description et un prix avant taxes (négatif pour un retrait).");
  if (!x.added.trim() && !x.removed.trim()) out.push("Décrivez le travail ajouté ou retranché.");
  if (x.scheduleEffect.trim().length < 2) out.push("Indiquez l’effet sur l’échéancier (« aucun » au besoin).");
  return out;
}

/** Les travaux d'un avenant ne s'exécutent qu'après sa signature par le client. */
export function executionAllowed(a: Pick<Avenant, "status" | "clientSignature">): boolean {
  return a.status === "signe" && Boolean(a.clientSignature);
}

/* ---------------- Commission ---------------- */

/**
 * Prix net final : sous-total signé après rabais, AVANT TPS et TVQ, plus les avenants SIGNÉS (avant taxes).
 * L'aide LogisVert n'y entre jamais (elle vient après le total, versée au client). Contrat annulé : 0.
 */
export function contractNetBaseCents(c: Pick<SentContract, "status" | "signature" | "doc">, avenants: readonly Avenant[]): number {
  if (c.status !== "signe" || !c.signature) return 0;
  return Math.max(0, c.signature.totals.taxableCents + signedAvenants(avenants, c.doc.number).reduce((s, a) => s + a.content.priceBeforeTaxCents, 0));
}

/* ---------------- Engagements (performance du partenaire) ---------------- */

const endOf = (s: QuoteContent["schedule"]) => (s.mode === "date" ? s.date : s.mode === "fenetre" ? s.windowEnd : "");

/**
 * Désistements (contrat annulé pour désistement de l'installateur après son acceptation) et dates confirmées ratées
 * (date passée, job pas terminé, aucun « en route » ni arrivée). Comptés dans la ponctualité du partenaire.
 */
export function commitmentStats(
  installerId: string,
  dossiers: readonly Pick<Dossier, "contracts" | "jobId">[],
  jobs: readonly { id: string; status: string }[],
  records: Readonly<Record<string, { enRoute?: unknown; arrivedAt?: unknown } | undefined>>,
  today: string,
): { withdrawals: number; missedDates: number } {
  let withdrawals = 0;
  let missedDates = 0;
  for (const d of dossiers) {
    for (const c of d.contracts) {
      if (c.installerId !== installerId) continue;
      if (c.status === "annule" && c.cancellation?.cause === "desistement") withdrawals++;
      if (c.status === "signe" && (c.doc.dateStatus === "confirmee" || c.doc.dateStatus === "proposee")) {
        const end = endOf(c.doc.project.schedule);
        const job = d.jobId ? jobs.find((j) => j.id === d.jobId) : undefined;
        const r = d.jobId ? records[d.jobId] : undefined;
        if (end && end < today && job && job.status !== "termine" && job.status !== "annule" && !r?.enRoute && !r?.arrivedAt) missedDates++;
      }
    }
  }
  return { withdrawals, missedDates };
}
