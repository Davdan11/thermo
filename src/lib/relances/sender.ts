/* ==================================================================
   Passage d'envoi des relances et des demandes d'avis (appelé chaque
   jour par scripts/send-relances.ts). Dans l'ordre :
     1. messages dus (9 h, heure de Montréal, le jour prévu) ;
     2. arrêts : adresse désabonnée, soumission ou rendez-vous reçu
        après la demande ThermoMatch (journal des leads), retard excessif ;
     3. garde-fous : sans BUSINESS_MAILING_ADDRESS (LCAP) ou sans
        transport de courriel, rien ne part et tout reste en file ;
        sans GOOGLE_REVIEW_URL, les demandes d'avis restent en file ;
     4. envoi, au plus `max` messages par passage. Chaque message est
        réservé sous verrou avant l'envoi : il ne part jamais deux fois.
   Le rendu et l'envoi sont injectés : testable sans catalogue ni SMTP.
   ================================================================== */
import { consentStop, dueMessages, isExpired, isReminder, stopReason, type CancelReason, type Conversion, type ScheduledMessage } from "./core";
import { cancelMessage, claimMessage, markFailed, markSent, readRelances } from "./store";
import { relanceUnsubscribeHeaders, type RenderedRelance } from "@/lib/crm/templates/relances-email";

export interface RunOptions {
  now?: Date;
  /** Nombre maximal de courriels envoyés (ou simulés) par passage. */
  max: number;
  /** Essai à blanc : rien n'est envoyé ni écrit. */
  dryRun?: boolean;
  mailingAddress: string | null;
  reviewUrl: string | null;
  /** Transport de courriel actif (« smtp », « resend ») ou null. */
  transport: string | null;
  render: (m: ScheduledMessage, opts: { mailingAddress: string; footer?: string | null }) => RenderedRelance | null | Promise<RenderedRelance | null>;
  send: (m: ScheduledMessage, mail: RenderedRelance, headers: Record<string, string>) => Promise<boolean>;
  loadConversions: (since: Date) => Promise<Map<string, Conversion[]>>;
  log?: (line: string) => void;
  /** Conformité C2 : case 5.2 retirée (désabonnement) depuis le consentement ? Par défaut : magasin des consentements. */
  consentWithdrawn?: (m: ScheduledMessage) => Promise<boolean>;
  /** Conformité C2 : pied de message commercial (5.5) d'un rappel, ou null (pied actuel). */
  footer?: (m: ScheduledMessage) => Promise<string | null>;
}

/** Conformité C2 : retrait de la case 5.2 noté dans le magasin des consentements après le consentement du rappel. */
async function withdrawnInStore(m: ScheduledMessage, now = new Date()): Promise<boolean> {
  if (!isReminder(m) || !m.consent?.at) return false;
  const { readConsents, withdrawnSince } = await import("@/lib/consentements/store");
  return withdrawnSince(await readConsents(), { email: m.email }, "rappels", m.consent.at, now);
}

export interface RunReport {
  due: number;
  sent: number;
  wouldSend: number;
  failed: number;
  cancelled: Partial<Record<CancelReason, number>>;
  /** Messages gardés en file, par raison. */
  held: Record<string, number>;
  /** Restés dus faute de place (plafond du passage). */
  deferred: number;
  /** Réservés par un passage précédent qui ne s'est pas terminé : à vérifier, jamais renvoyés d'office. */
  stuck: number;
}

const mask = (email: string) => {
  const [u, d] = email.split("@");
  return `${u.slice(0, 1)}***@${d ?? "?"}`;
};

export async function runRelances(o: RunOptions): Promise<RunReport> {
  const now = o.now ?? new Date();
  const log = o.log ?? (() => undefined);
  const report: RunReport = { due: 0, sent: 0, wouldSend: 0, failed: 0, cancelled: {}, held: {}, deferred: 0, stuck: 0 };
  const hold = (reason: string, n = 1) => (report.held[reason] = (report.held[reason] ?? 0) + n);

  const data = await readRelances();
  report.stuck = data.messages.filter((m) => m.status === "sending").length;
  if (report.stuck) log(`  ! ${report.stuck} message(s) restés « en cours d’envoi » (passage interrompu) : à vérifier dans le fichier, ils ne sont pas renvoyés.`);

  const due = dueMessages(data.messages, now);
  report.due = due.length;
  if (!due.length) return report;

  // Arrêts : désabonnement, soumission ou rendez-vous après ThermoMatch, retard excessif.
  const suppressed = new Set(data.suppressed);
  const tm = due.filter((m) => m.source.type === "thermomatch");
  const since = tm.reduce<Date | null>((min, m) => {
    const d = new Date(m.source.type === "thermomatch" ? m.source.requestedAt : m.createdAt);
    return !min || d < min ? d : min;
  }, null);
  const conversions = since ? await o.loadConversions(since) : new Map<string, Conversion[]>();

  const sendable: ScheduledMessage[] = [];
  const withdrawn = o.consentWithdrawn ?? ((m: ScheduledMessage) => withdrawnInStore(m, now));
  for (const m of due) {
    // Conformité C2 : case 5.2 exigée pour un rappel, deux au plus par demande, retrait respecté aussitôt.
    const reason =
      stopReason(m, { suppressed, conversions: conversions.get(m.email) }) ??
      consentStop(m, data.messages) ??
      ((await withdrawn(m).catch(() => false)) ? "desabonnement" : null) ??
      (isExpired(m, now) ? "expiree" : null);
    if (!reason) {
      sendable.push(m);
      continue;
    }
    report.cancelled[reason] = (report.cancelled[reason] ?? 0) + 1;
    log(`  - ${m.kind} → ${mask(m.email)} : arrêté (${reason})`);
    if (!o.dryRun) await cancelMessage(m.id, reason, now);
  }
  if (!sendable.length) return report;

  // Garde-fou LCAP : pas d'adresse postale, pas d'envoi.
  if (!o.mailingAddress) {
    hold("adresse postale absente (BUSINESS_MAILING_ADDRESS)", sendable.length);
    log(`  ! BUSINESS_MAILING_ADDRESS absente : ${sendable.length} message(s) gardé(s) en file, aucun envoi. La LCAP exige une adresse postale dans tout message commercial.`);
    return report;
  }
  if (!o.transport && !o.dryRun) {
    hold("aucun transport de courriel", sendable.length);
    log(`  ! Aucun transport de courriel (SMTP_HOST, SMTP_USER/SMTP_PASS ou RESEND_API_KEY) : ${sendable.length} message(s) gardé(s) en file.`);
    return report;
  }

  let budget = Math.max(0, o.max);
  for (const m of sendable) {
    if (m.kind === "avis" && !o.reviewUrl) {
      hold("lien d’avis Google absent (GOOGLE_REVIEW_URL)");
      continue;
    }
    if (budget <= 0) {
      report.deferred++;
      continue;
    }
    let mail: RenderedRelance | null;
    try {
      // Conformité C2 : pied de message commercial de la trousse (5.5) pour les rappels.
      mail = await o.render(m, { mailingAddress: o.mailingAddress, footer: o.footer && isReminder(m) ? await o.footer(m).catch(() => null) : null });
    } catch (err) {
      report.failed++;
      log(`  ✗ ${m.kind} → ${mask(m.email)} : rendu impossible (${(err as Error).message})`);
      continue;
    }
    if (!mail) {
      report.cancelled.catalogue = (report.cancelled.catalogue ?? 0) + 1;
      log(`  - ${m.kind} → ${mask(m.email)} : modèles introuvables au catalogue, annulé`);
      if (!o.dryRun) await cancelMessage(m.id, "catalogue", now);
      continue;
    }
    budget--;
    if (o.dryRun) {
      report.wouldSend++;
      log(`  → ${m.kind} → ${mask(m.email)} · « ${mail.subject} »`);
      continue;
    }
    const claimed = await claimMessage(m.id, now);
    if (!claimed) {
      budget++;
      continue;
    }
    let ok = false;
    try {
      ok = await o.send(claimed, mail, relanceUnsubscribeHeaders(claimed.token));
    } catch (err) {
      log(`  ✗ ${m.kind} → ${mask(m.email)} : ${(err as Error).message}`);
    }
    if (ok) {
      await markSent(claimed.id, new Date());
      // Conformité C2 : dernier message envoyé grâce à la case 5.2 (la preuve est gardée 3 ans après).
      if (claimed.consent?.recordId) await import("@/lib/consentements/store").then((s) => s.markMessageSent(claimed.consent!.recordId!)).catch(() => undefined);
      report.sent++;
      log(`  ✓ ${m.kind} → ${mask(m.email)} · « ${mail.subject} »`);
    } else {
      await markFailed(claimed.id, "envoi refusé par le transport", new Date());
      report.failed++;
      log(`  ✗ ${m.kind} → ${mask(m.email)} : envoi en échec, nouvel essai au prochain passage`);
    }
  }
  if (report.deferred) log(`  … ${report.deferred} message(s) dus reportés au prochain passage (plafond de ${o.max}).`);
  return report;
}
