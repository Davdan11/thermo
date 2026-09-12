/* ==================================================================
   Courriels de l'alerte LogisVert :
   - confirmation (double consentement) ou « déjà active » ;
   - avis de changement de montant après une nouvelle liste Hydro-Québec.
   Chaque courriel porte le lien de désabonnement en un clic (Loi 25, LCAP)
   et, pour les avis, les en-têtes List-Unsubscribe (RFC 8058).
   ================================================================== */
import { brandedEmail, box, p, strong, t, BRAND, SITE_URL } from "./layout";
import { escapeHtml } from "@/lib/security/escape";
import {
  NBSP,
  formatDollars,
  formatListDate,
  formatRange,
  type AlertChange,
  type AlertSnapshot,
  type AlertTarget,
  type ModelAmounts,
} from "@/lib/alerts/logisvert-alerts-core";

const GREEN = "#1A8F4E";
const MAX_LINES = 25;

export const alertLinks = {
  confirm: (token: string) => `${SITE_URL}/alertes-logisvert/confirmer?token=${encodeURIComponent(token)}`,
  unsubscribe: (token: string) => `${SITE_URL}/alertes-logisvert/desabonnement?token=${encodeURIComponent(token)}`,
  /** Cible du bouton « Se désabonner » des messageries (POST, RFC 8058). */
  oneClick: (token: string) => `${SITE_URL}/api/alertes-logisvert/desabonnement?token=${encodeURIComponent(token)}`,
};

export function listUnsubscribeHeaders(token: string): Record<string, string> {
  return { "List-Unsubscribe": `<${alertLinks.oneClick(token)}>`, "List-Unsubscribe-Post": "List-Unsubscribe=One-Click" };
}

export interface AlertEmailBase {
  firstName?: string;
  target: AlertTarget;
  label: string;
  path: string;
  token: string;
}

const REASON =
  "Vous recevez ce courriel parce qu’une alerte LogisVert a été demandée avec cette adresse sur thermopompesavendre.ca. Votre courriel ne sert qu’à cette alerte.";

/** « Daikin FTX12 » ou « les thermopompes Daikin », en HTML échappé. */
function whatHtml(d: AlertEmailBase): string {
  return d.target.kind === "model" ? strong(d.label) : `les thermopompes ${strong(d.label)}`;
}

/** Montant affiché : « 1 250 $ », « jusqu’à 1 900 $ » ou « hors de la liste ». */
export function upTo(a: ModelAmounts): string {
  if (a.n === 0) return "hors de la liste";
  return a.min === a.max ? formatDollars(a.max) : `jusqu’à ${formatDollars(a.max)}`;
}

/** Résumé de l'instantané : montant du modèle, ou nombre de modèles admissibles de la marque. */
export function snapshotSummary(target: AlertTarget, s: AlertSnapshot): string {
  const all = Object.values(s.models);
  if (target.kind === "model") {
    const a = all[0];
    return a && a.n > 0 ? formatRange(a) : "pas dans la liste pour l’instant";
  }
  const listed = all.filter((a) => a.n > 0);
  if (listed.length === 0) return "aucun modèle admissible pour l’instant";
  const max = Math.max(...listed.map((a) => a.max));
  return `${listed.length} modèle${listed.length > 1 ? "s" : ""} admissible${listed.length > 1 ? "s" : ""}, jusqu’à ${formatDollars(max)}`;
}

export function alertConfirmationEmail(d: AlertEmailBase & { snapshot: AlertSnapshot; alreadyConfirmed?: boolean }): { subject: string; html: string } {
  const date = formatListDate(d.snapshot.listUpdatedAt);
  const recap = box("Votre alerte", [
    ["Suivi", d.target.kind === "model" ? d.label : `Toutes les thermopompes ${d.label}`],
    ["Montant aujourd’hui", snapshotSummary(d.target, d.snapshot)],
    ["Liste Hydro-Québec du", date],
  ]);
  if (d.alreadyConfirmed) {
    const subject = `Votre alerte LogisVert est déjà active${NBSP}: ${d.label}`;
    return {
      subject,
      html: brandedEmail({
        title: subject,
        preheader: "Rien à faire : nous vous écrirons dès que le montant change.",
        firstName: d.firstName,
        body:
          p(`Votre alerte pour ${whatHtml(d)} est déjà active. Vous n’avez rien à faire&nbsp;: nous vous écrirons dès qu’Hydro-Québec modifie le montant.`) +
          recap,
        cta: { label: "Voir les montants actuels", href: `${SITE_URL}${d.path}` },
        reason: REASON,
        unsubscribeUrl: alertLinks.unsubscribe(d.token),
      }),
    };
  }
  const subject = `Confirmez votre alerte LogisVert${NBSP}: ${d.label}`;
  return {
    subject,
    html: brandedEmail({
      title: subject,
      preheader: "Un clic pour activer l’alerte. Sans confirmation, nous ne vous écrirons pas.",
      firstName: d.firstName,
      body:
        p(`Vous avez demandé à être prévenu quand la subvention LogisVert d’Hydro-Québec change pour ${whatHtml(d)}&nbsp;: montant en hausse ou en baisse, modèle ajouté à la liste ou retiré.`) +
        recap +
        p("Un clic sur le bouton ci-dessous active l’alerte. Sans confirmation, nous ne vous écrirons pas et la demande sera effacée dans 30&nbsp;jours.") +
        p("Vous n’avez rien demandé&nbsp;? Ignorez simplement ce courriel.", { muted: true, small: true }),
      cta: { label: "Confirmer mon alerte", href: alertLinks.confirm(d.token) },
      reason: REASON,
      unsubscribeUrl: alertLinks.unsubscribe(d.token),
    }),
  };
}

/* ---------------- Avis de changement ---------------- */

const KIND_LABEL: Record<AlertChange["kind"], string> = {
  raised: "Hausse",
  added: "Maintenant admissible",
  adjusted: "Fourchette modifiée",
  lowered: "Baisse",
  removed: "Retiré de la liste",
};

/** Ligne texte d'un changement (journal du script, aperçus). */
export function describeChange(c: AlertChange, name: string): string {
  switch (c.kind) {
    case "raised":
    case "lowered":
      return `${name} : ${KIND_LABEL[c.kind].toLowerCase()}, ${upTo(c.before)} → ${upTo(c.after)}`;
    case "added":
      return `${name} : maintenant admissible, ${upTo(c.after)}`;
    case "adjusted":
      return `${name} : fourchette ${formatRange(c.before)} → ${formatRange(c.after)}`;
    case "removed":
      return `${name} : retiré de la liste (était ${upTo(c.before)})`;
  }
}

function changeAmountsHtml(c: AlertChange): string {
  const old = (s: string) => `<span style="color:${BRAND.muted};text-decoration:line-through;">${escapeHtml(s)}</span>`;
  const now = (s: string, good: boolean) => `<strong style="color:${good ? GREEN : BRAND.navy};">${escapeHtml(s)}</strong>`;
  const delta = c.after.max - c.before.max;
  switch (c.kind) {
    case "raised":
    case "lowered":
      return `${old(upTo(c.before))} &rarr; ${now(upTo(c.after), c.kind === "raised")} <span style="color:${BRAND.muted};">(${delta > 0 ? "+" : "−"}${escapeHtml(formatDollars(Math.abs(delta)))})</span>`;
    case "added":
      return now(upTo(c.after), true);
    case "adjusted":
      return `${old(formatRange(c.before))} &rarr; ${now(formatRange(c.after), false)}`;
    case "removed":
      return `<span style="color:${BRAND.muted};">était ${escapeHtml(upTo(c.before))}</span>`;
  }
}

function changesTable(changes: AlertChange[], names: Record<string, { name: string; slug: string }>): string {
  const rows = changes
    .slice(0, MAX_LINES)
    .map((c) => {
      const m = names[c.modelId];
      const name = m
        ? `<a href="${SITE_URL}/produit/${encodeURIComponent(m.slug)}" style="color:${BRAND.navy};font-weight:700;text-decoration:none;">${escapeHtml(m.name)}</a>`
        : `<strong style="color:${BRAND.navy};">${escapeHtml(c.modelId)}</strong>`;
      const tagColor = c.kind === "raised" || c.kind === "added" ? GREEN : BRAND.muted;
      return `<tr><td style="padding:12px 18px;border-top:1px solid ${BRAND.line};font-size:15px;line-height:1.5;color:${BRAND.ink};">${name}<br><span style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:${tagColor};">${escapeHtml(KIND_LABEL[c.kind])}</span>&nbsp;&nbsp;${changeAmountsHtml(c)}</td></tr>`;
    })
    .join("");
  return `
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 22px;border:1px solid ${BRAND.line};border-radius:10px;background:${BRAND.sand};">
    <tr><td style="padding:14px 18px 8px;font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:${BRAND.orange};">Ce qui change</td></tr>
    ${rows}
  </table>`;
}

export function alertChangeSubject(d: AlertEmailBase, changes: AlertChange[]): string {
  if (d.target.kind === "brand" || changes.length !== 1) {
    return `LogisVert ${d.label}${NBSP}: ${changes.length} changement${changes.length > 1 ? "s" : ""} dans la liste d’Hydro-Québec`;
  }
  const c = changes[0];
  switch (c.kind) {
    case "raised":
      return `LogisVert en hausse pour ${d.label}${NBSP}: ${upTo(c.before)} → ${upTo(c.after)}`;
    case "lowered":
      return `LogisVert en baisse pour ${d.label}${NBSP}: ${upTo(c.before)} → ${upTo(c.after)}`;
    case "added":
      return `${d.label} est maintenant admissible à LogisVert (${upTo(c.after)})`;
    case "removed":
      return `${d.label} n’est plus dans la liste LogisVert d’Hydro-Québec`;
    case "adjusted":
      return `LogisVert${NBSP}: les montants changent pour ${d.label}`;
  }
}

export function alertChangeEmail(
  d: AlertEmailBase & { changes: AlertChange[]; names: Record<string, { name: string; slug: string }>; listUpdatedAt: string | null },
): { subject: string; html: string } {
  const subject = alertChangeSubject(d, d.changes);
  const date = formatListDate(d.listUpdatedAt);
  const more = d.changes.length - MAX_LINES;
  const body =
    p(`Hydro-Québec a publié une nouvelle liste LogisVert${date ? ` (liste du ${t(date)})` : ""}. Voici ce qui change pour ${whatHtml(d)} depuis votre inscription ou notre dernier message.`) +
    changesTable(d.changes, d.names) +
    (more > 0 ? p(`Et ${more} autre${more > 1 ? "s" : ""} changement${more > 1 ? "s" : ""}, à voir sur la page ${t(d.label)}.`) : "") +
    p("Le montant exact dépend de l’appariement entre l’unité extérieure et l’unité intérieure (référence AHRI). Faites-le confirmer par votre installateur avant de signer.", { muted: true, small: true });
  return {
    subject,
    html: brandedEmail({
      title: subject,
      preheader: `Nouvelle liste LogisVert${date ? ` du ${date}` : ""} : ${d.changes.length} changement${d.changes.length > 1 ? "s" : ""} pour ${d.label}.`,
      firstName: d.firstName,
      body,
      cta: d.target.kind === "model" ? { label: "Voir la fiche du modèle", href: `${SITE_URL}${d.path}` } : { label: `Voir les montants ${d.label}`, href: `${SITE_URL}${d.path}` },
      secondary: { label: "Faire vérifier mon admissibilité par un conseiller", href: `${SITE_URL}/rendez-vous` },
      reason: "Vous recevez cette alerte parce que vous l’avez demandée puis confirmée sur thermopompesavendre.ca. Votre courriel ne sert qu’à cette alerte.",
      unsubscribeUrl: alertLinks.unsubscribe(d.token),
    }),
  };
}
