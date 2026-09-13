/* ==================================================================
   Courriels du créateur de soumissions (même gabarit que les autres
   courriels du site : layout.ts), toujours avec une version texte :
   - envoi et relance au client (gros bouton vers le lien) ;
   - confirmation d'acceptation au client, avec le CONTENU de
     l'instantané accepté (sa copie durable du contrat) ;
   - avis au propriétaire : première ouverture, acceptation, refus,
     question.
   Aucun pixel de suivi : l'ouverture est notée quand la page de la
   soumission est consultée.
   ================================================================== */

import { box, brandedEmail, p, strong, t, ul, BRAND, SITE_URL } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { LOGISVERT_NOTICE, PLACEHOLDER_RE, PRESENTER_FALLBACK } from "./config";
import { formatDateTime, formatDay } from "./dates";
import { money } from "./money";
import { describeUnit, documentLines, scheduleText } from "./present";
import type { Acceptance, QuoteDocument, Totals } from "./types";

/** Nom de la marque qui présente la soumission (réglages), sinon Thermopompes À Vendre. */
export function presenterName(doc: Pick<QuoteDocument, "company">): string {
  return doc.company.tradeName || doc.company.legalName || PRESENTER_FALLBACK;
}

/** « Travaux réalisés par … (licence RBQ …) » : modèle actuel seulement. */
function contractorLine(doc: Pick<QuoteDocument, "contractor">): string {
  const k = doc.contractor;
  if (!k) return "";
  return `${k.legalName}${k.rbq ? ` (licence RBQ ${k.rbq})` : ""}`;
}

const ready = (s: string | null | undefined) => Boolean(s && s.trim()) && !PLACEHOLDER_RE.test(s as string);

export interface RenderedMessage {
  subject: string;
  html: string;
  text: string;
}

const SERVICE_REASON = "Vous recevez ce courriel parce que vous nous avez demandé une soumission.";
const OWNER_REASON = "Vous recevez ce courriel parce que vous êtes administrateur de l’outil de gestion.";

function companyLine(doc: Pick<QuoteDocument, "company">): string {
  const c = doc.company;
  return [c.legalName, [c.address, c.city, c.postalCode].filter(Boolean).join(", ")].filter(Boolean).join(" · ");
}

function textFooter(doc: Pick<QuoteDocument, "company">): string {
  const c = doc.company;
  return ["", "--", c.legalName || c.tradeName || BRAND.name, [c.phone || BRAND.phone, c.email || BRAND.email].join(" · "), SITE_URL].join("\n");
}

/* ---------------- Envoi et relance ---------------- */

export function quoteSentEmail(d: { doc: QuoteDocument; totals: Totals; link: string; reminder: boolean }): RenderedMessage {
  const { doc, totals } = d;
  const c = doc.content.client;
  const modern = doc.contractor !== undefined;
  const who = modern ? presenterName(doc) : doc.company.legalName || BRAND.name;
  const by = contractorLine(doc);
  const label = doc.kind === "avenant" ? `avenant (version ${doc.version})` : doc.version > 1 ? `version ${doc.version}` : "";
  const subject = d.reminder
    ? `Rappel : votre soumission ${doc.number} est valide jusqu’au ${formatDay(doc.validUntil)}`
    : doc.kind === "avenant"
      ? `Avenant à votre soumission ${doc.number}`
      : `Votre soumission ${doc.number}${label ? `, ${label}` : ""} est prête`;
  const rows: Array<[string, string]> = [
    ["Numéro", `${doc.number}${label ? ` · ${label}` : ""}`],
    ["Machine", doc.content.machine ? `${doc.content.machine.brand} ${doc.content.machine.name}` : "Selon la soumission"],
    ...(by ? ([["Entrepreneur qui réalise les travaux", by]] as Array<[string, string]>) : []),
    ["Total, taxes comprises", money(totals.totalCents)],
    ...(totals.logisvertCents > 0
      ? ([
          totals.logisvertMode === "cession"
            ? ["À payer après l’aide LogisVert", money(totals.netAfterAidCents)]
            : modern
              ? ["Aide LogisVert prévue (information, non garantie)", money(totals.logisvertCents)]
              : ["Coût net estimé après l’aide LogisVert", money(totals.netAfterAidCents)],
        ] as Array<[string, string]>)
      : []),
    ["Valide jusqu’au", formatDay(doc.validUntil)],
  ];
  const signature = modern ? `Soumission préparée par ${who}${by ? `. Travaux réalisés par ${by}` : ""}.` : `De la part de ${who}.`;
  const intro = d.reminder
    ? "Petit rappel : votre soumission vous attend. Elle décrit exactement les travaux prévus chez vous, ce qui est inclus et ce qui ne l’est pas."
    : doc.kind === "avenant"
      ? "Voici l’avenant à votre soumission : il décrit précisément le changement, son prix, et ce qui reste inchangé."
      : "Voici votre soumission. Elle décrit exactement les travaux prévus chez vous : où, quand, quelle machine, ce qui est inclus et ce qui ne l’est pas.";
  const html = brandedEmail({
    title: subject,
    preheader: `${doc.number} · ${money(totals.totalCents)} taxes comprises · valide jusqu’au ${formatDay(doc.validUntil)}`,
    firstName: c.firstName,
    body: [
      p(t(intro)),
      box("Votre soumission", rows),
      p("Vous pouvez y cocher les options qui vous intéressent, voir le total se mettre à jour, puis l’accepter en ligne. Une question ? Utilisez le bouton « J’ai une question » ou répondez à ce courriel."),
      ...(totals.logisvertCents > 0 && modern && totals.logisvertMode === "client" ? [p(t(LOGISVERT_NOTICE), { muted: true, small: true })] : []),
      p(modern ? `Soumission préparée par ${strong(who)}${by ? `. Travaux réalisés par ${strong(by)}` : ""}.` : `De la part de ${strong(who)}.`, { muted: true, small: true }),
    ].join(""),
    cta: { label: "Voir ma soumission", href: escapeHtml(d.link) },
    reason: SERVICE_REASON,
    optOutText: "",
    mailingAddress: companyLine(doc) || undefined,
  });
  const text = [
    c.firstName ? `Bonjour ${c.firstName},` : "Bonjour,",
    "",
    intro,
    "",
    ...rows.map(([k, v]) => `- ${k} : ${v}`),
    "",
    "Voir la soumission, choisir les options et l’accepter en ligne :",
    d.link,
    "",
    ...(totals.logisvertCents > 0 && modern && totals.logisvertMode === "client" ? [LOGISVERT_NOTICE, ""] : []),
    signature,
    textFooter(doc),
    "",
    SERVICE_REASON,
  ].join("\n");
  return { subject, html, text };
}

export function quoteSms(doc: QuoteDocument, link: string, reminder: boolean): string {
  const who = doc.contractor !== undefined ? presenterName(doc) : doc.company.tradeName || doc.company.legalName || BRAND.name;
  return `${who} : ${reminder ? "rappel, " : ""}votre soumission ${doc.number} ${reminder ? "vous attend" : "est prête"}. Consultez-la et acceptez-la en ligne : ${link}`;
}

/* ---------------- Confirmation d'acceptation (client) ---------------- */

function sectionHtml(title: string, bodyHtml: string): string {
  return `<h3 style="margin:26px 0 10px;font-size:13px;letter-spacing:.12em;text-transform:uppercase;color:${BRAND.orange};">${escapeHtml(title)}</h3>${bodyHtml}`;
}

function pre(text: string): string {
  return `<div style="margin:0 0 14px;font-size:14px;line-height:1.6;color:${BRAND.ink};white-space:pre-wrap;">${escapeHtml(text)}</div>`;
}

/** Contenu complet de l'instantané accepté, en sections (HTML et texte). */
export function snapshotSections(a: Acceptance): Array<{ title: string; rows?: Array<[string, string]>; list?: string[]; text?: string }> {
  const s = a.snapshot;
  const doc = s.document;
  const c = doc.content;
  const m = c.machine;
  const out: Array<{ title: string; rows?: Array<[string, string]>; list?: string[]; text?: string }> = [];
  const siteAddr = c.site.sameAsBilling ? [c.client.address, c.client.city, c.client.postalCode] : [c.site.address, c.site.city, c.site.postalCode];
  out.push({ title: "Votre projet", rows: [["Client", `${c.client.firstName} ${c.client.lastName}`.trim()], ["Adresse des travaux", siteAddr.filter(Boolean).join(", ")], ...(c.projectSummary ? ([["Résumé", c.projectSummary]] as Array<[string, string]>) : [])] });
  if (m) {
    out.push({
      title: "La machine",
      rows: [
        ["Marque et modèle", `${m.brand} ${m.name}`],
        ["Unité extérieure", m.outdoorModel],
        ["Unités intérieures", c.placement.indoor.map((u) => u.model).filter(Boolean).join(", ") || m.offListIndoor || m.pairing?.indoorDescription || ""],
        ["Référence AHRI", m.pairing ? m.pairing.ahri : "Jumelage hors de la liste officielle LogisVert"],
        ...(m.pairing?.h5Btu ? ([["Chauffage certifié à −15 °C", `${m.pairing.h5Btu.toLocaleString("fr-CA")} BTU/h`]] as Array<[string, string]>) : []),
        ...(m.refrigerant ? ([["Réfrigérant", m.refrigerant]] as Array<[string, string]>) : []),
      ],
    });
  }
  out.push({ title: "Plan d’installation", list: [describeUnit("Unité extérieure", c.placement, null), ...c.placement.indoor.map((u) => describeUnit(u.label, c.placement, u))] });
  out.push({ title: "Ce qui est inclus", list: c.inclusions.map((i) => (i.detail ? `${i.label} : ${i.detail}` : i.label)) });
  out.push({ title: "Ce qui n’est pas inclus", list: c.exclusions.map((i) => (i.detail ? `${i.label} : ${i.detail}` : i.label)) });
  if (c.assumptions.length) out.push({ title: "Hypothèses et imprévus", list: c.assumptions.map((i) => i.label), text: doc.texts.changeOrder });
  out.push({ title: "Date et déroulement", rows: scheduleText(c.schedule) });
  out.push({ title: "Prix accepté", rows: documentLines(doc, s.totals, s.selection) });
  const modern = doc.contractor !== undefined;
  const lvText =
    s.totals.logisvertMode === "cession"
      ? doc.texts.logisvertCession
      : s.totals.logisvertMode === "client"
        ? modern
          ? [LOGISVERT_NOTICE, ready(doc.texts.logisvertClient) ? doc.texts.logisvertClient : ""].filter(Boolean).join("\n")
          : doc.texts.logisvertClient
        : "";
  if (lvText) out.push({ title: "Aide LogisVert", text: `${lvText}\nConditions du programme : ${doc.links.logisvert}` });
  out.push({ title: "Paiement", text: [doc.texts.paymentTerms, doc.texts.depositRule].filter(Boolean).join("\n\n") });
  out.push({ title: "Garanties", text: [m?.warrantyText, doc.texts.warranty, doc.texts.legalWarranty, `Renseignements officiels : ${doc.links.opcGaranties}`].filter(Boolean).join("\n\n") });
  out.push({ title: "Annulation", text: `${doc.texts.cancellation}\n\nRenseignements officiels : ${doc.links.opcAnnulation}` });
  if (doc.texts.weatherClause) out.push({ title: "Météo", text: doc.texts.weatherClause });
  out.push({ title: "Conditions générales", text: doc.texts.terms });
  const co = doc.company;
  const k = doc.contractor;
  if (k) {
    out.push({ title: "Entrepreneur qui réalise les travaux", rows: [["Raison sociale", k.legalName], ["Nom commercial", k.tradeName], ["NEQ", k.neq], ["Licence RBQ", k.rbq], ["TPS", k.tps], ["TVQ", k.tvq], ["Adresse", [k.address, k.city, k.postalCode].filter(Boolean).join(", ")], ["Téléphone", k.phone], ["Courriel", k.email]] });
    out.push({ title: "Soumission préparée par", rows: [["Nom", presenterName(doc)], ["Téléphone", co.phone], ["Courriel", co.email], ["Site web", co.website]] });
  } else {
    out.push({ title: "Entreprise", rows: [["Raison sociale", co.legalName], ["NEQ", co.neq], ["Licence RBQ", co.rbq], ["TPS", co.tps], ["TVQ", co.tvq], ["Adresse", [co.address, co.city, co.postalCode].filter(Boolean).join(", ")], ["Téléphone", co.phone], ["Courriel", co.email]] });
  }
  return out;
}

export function acceptedClientEmail(d: { acceptance: Acceptance; link: string }): RenderedMessage {
  const a = d.acceptance;
  const doc = a.snapshot.document;
  const c = doc.content.client;
  const subject = `Confirmation : vous avez accepté la soumission ${doc.number}`;
  const proof: Array<[string, string]> = [
    ["Soumission", `${doc.number} · version ${doc.version}`],
    ["Acceptée le", formatDateTime(a.at)],
    ["Signature électronique (nom tapé)", a.typedName],
    ["Total accepté, taxes comprises", money(a.totalCents)],
    ...(a.snapshot.totals.logisvertMode === "cession" ? ([["À payer à l’entreprise, après l’aide LogisVert", money(a.clientPaysCents)]] as Array<[string, string]>) : []),
    ["Options choisies", a.selectedOptions.length ? a.selectedOptions.map((o) => o.label).join(", ") : "Aucune"],
    ["Empreinte du document accepté (SHA-256)", a.snapshotHash],
  ];
  const sections = snapshotSections(a);
  const html = brandedEmail({
    title: subject,
    preheader: `${doc.number} · ${money(a.totalCents)} taxes comprises · acceptée le ${formatDateTime(a.at)}`,
    firstName: c.firstName,
    body: [
      p("Merci ! Nous avons bien reçu votre acceptation. Voici votre copie du document accepté : gardez ce courriel. Le lien ci-dessous affiche toujours la version acceptée, telle quelle."),
      box("Preuve d’acceptation", proof),
      ...sections.map((s) =>
        sectionHtml(
          s.title,
          [s.rows ? box(s.title, s.rows) : "", s.list?.length ? ul(s.list.map((i) => t(i))) : "", s.text ? pre(s.text) : ""].join(""),
        ),
      ),
      p("Nous vous appelons pour confirmer la date d’installation. Toute modification se fera par un avenant écrit, que vous accepterez de la même façon.", { muted: true, small: true }),
    ].join(""),
    cta: { label: "Voir la version acceptée", href: escapeHtml(d.link) },
    reason: SERVICE_REASON,
    optOutText: "",
    mailingAddress: companyLine(doc) || undefined,
  });
  const text = [
    c.firstName ? `Bonjour ${c.firstName},` : "Bonjour,",
    "",
    "Merci ! Nous avons bien reçu votre acceptation. Voici votre copie du document accepté : gardez ce courriel.",
    "",
    "PREUVE D’ACCEPTATION",
    ...proof.map(([k, v]) => `- ${k} : ${v}`),
    "",
    ...sections.flatMap((s) => [s.title.toUpperCase(), ...(s.rows ?? []).filter(([, v]) => v).map(([k, v]) => `- ${k} : ${v}`), ...(s.list ?? []).map((i) => `- ${i}`), ...(s.text ? [s.text] : []), ""]),
    "Version acceptée, en ligne :",
    d.link,
    textFooter(doc),
    "",
    SERVICE_REASON,
  ].join("\n");
  return { subject, html, text };
}

/* ---------------- Avis au propriétaire ---------------- */

export type OwnerEvent = "ouverte" | "acceptee" | "refusee" | "question";

export function ownerEventEmail(d: { event: OwnerEvent; doc: QuoteDocument; toolLink: string; rows: Array<[string, string]>; message?: string }): RenderedMessage {
  const c = d.doc.content.client;
  const name = `${c.firstName} ${c.lastName}`.trim() || c.email;
  const n = `${d.doc.number} (v${d.doc.version})`;
  const subjects: Record<OwnerEvent, string> = {
    ouverte: `Soumission ${n} ouverte par ${name}`,
    acceptee: `Soumission ${n} ACCEPTÉE par ${name}`,
    refusee: `Soumission ${n} refusée par ${name}`,
    question: `Question de ${name} sur la soumission ${n}`,
  };
  const intros: Record<OwnerEvent, string> = {
    ouverte: "Le client vient d’ouvrir sa soumission pour la première fois. C’est le bon moment pour un appel.",
    acceptee: "Le client a accepté la soumission. L’instantané accepté est figé dans l’outil, avec son empreinte.",
    refusee: "Le client a refusé la soumission.",
    question: "Le client a une question sur sa soumission :",
  };
  const subject = subjects[d.event];
  const html = brandedEmail({
    title: subject,
    preheader: intros[d.event],
    body: [p(t(intros[d.event])), d.message ? pre(d.message) : "", box(`Soumission ${n}`, [["Client", name], ["Téléphone", c.phone], ["Courriel", c.email], ...d.rows])].join(""),
    cta: { label: "Ouvrir dans l’outil", href: escapeHtml(d.toolLink) },
    reason: OWNER_REASON,
    optOutText: "",
  });
  const text = ["Bonjour,", "", intros[d.event], ...(d.message ? ["", d.message] : []), "", `Soumission ${n}`, `- Client : ${name}`, `- Téléphone : ${c.phone}`, `- Courriel : ${c.email}`, ...d.rows.map(([k, v]) => `- ${k} : ${v}`), "", d.toolLink].join("\n");
  return { subject, html, text };
}
