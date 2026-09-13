/* Fiche d'une soumission : brouillon à envoyer (avec les blocages), suivi (envoi, ouvertures, réponse), piste
   d'audit de l'acceptation, versions, Pipedrive, journal. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Copy, Eye, FilePlus2, Pencil, RefreshCw, Send, ShieldCheck, ShieldX, Trash2, UserPlus, UserRound, Wrench } from "lucide-react";
import { clientIdForQuote } from "@/lib/gestion/crm/service";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { statusFromIdentity, type ContractorPick } from "@/lib/soumissions/contractor";
import { loadContractor } from "@/lib/soumissions/contractors";
import { requireUser } from "@/lib/gestion/auth/dal";
import { mayQuote } from "@/lib/gestion/equipe/garde"; // Chantier V : soumission d'un autre vendeur → 404
import { publicBaseUrl } from "@/lib/gestion/request";
import { smsConfigured } from "@/lib/gestion/sms";
import { distanceContractChecks, quoteChecks, sendBlockers, settingsChecks } from "@/lib/soumissions/checklist";
import { LINKS } from "@/lib/soumissions/config";
import { formatDateTime, formatDay, todayIn } from "@/lib/soumissions/dates";
import { money } from "@/lib/soumissions/money";
import { canRespond, currentVersion, draftOf, effectiveStatus, latestSent, QUOTE_ID_RE, verifyAcceptance } from "@/lib/soumissions/quote";
import { clientLink, CURRENT_RATES, loadQuote, ratesOf } from "@/lib/soumissions/service";
import { computeTotals, defaultSelection } from "@/lib/soumissions/totals";
import type { ChannelStatus, QuoteVersion } from "@/lib/soumissions/types";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { CopyLink } from "@/components/gestion/soumissions/CopyLink";
import { Checklist, QuoteStatus } from "@/components/gestion/soumissions/ui";
import { deleteDraftAction, duplicateAction, duplicateForClientAction, linkDealAction, remindAction, reviseAction, sendQuoteAction } from "../actions";
// Conformité C1 : parcours du contrat (avancement, installateur, contrat, avenants) et préalables de l'envoi.
import { ParcoursPanel } from "@/components/contrats/ParcoursPanel";
import { readinessProblems } from "@/lib/contrats/service";
import { CONTRACTOR_GROUP } from "@/lib/soumissions/checklist";

export const metadata: Metadata = { title: "Soumission" };
export const dynamic = "force-dynamic";

const CHANNEL: Record<string, string> = { envoye: "envoyé", echec: "échec", "non-configure": "non configuré", "sans-numero": "sans adresse ou numéro", non: "non demandé" };
const ch = (s: ChannelStatus | null | string | undefined) => CHANNEL[s ?? "non"] ?? String(s);

function totalOf(v: QuoteVersion, today: string) {
  if (v.acceptance) return v.acceptance.totalCents;
  return computeTotals(v.content, defaultSelection(v.content.lines), ratesOf(v), today).totalCents;
}

export default async function QuotePage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | undefined>> }) {
  const session = await requireUser(); // Chantier V
  const staff = session.role !== "vendeur";
  const { id } = await params;
  const sp = await searchParams;
  if (!QUOTE_ID_RE.test(id)) notFound();
  if (!(await mayQuote(session, id))) notFound();
  const data = await loadQuote(id);
  if (!data) notFound();
  const { quote: q, settings, views } = data;
  const today = todayIn();
  const draft = draftOf(q);
  const sent = latestSent(q);
  const cur = currentVersion(q);
  const shown = sent ?? cur;
  const c = (draft ?? shown).content;
  // Entrepreneur : état actuel pour un brouillon ; identité figée à l'envoi pour une version envoyée (ou, pour une
  // ancienne soumission, l'entreprise des réglages copiée à l'envoi).
  const draftContractor = draft ? await loadContractor(draft.contractorId ?? null) : null;
  const draftPick: ContractorPick = { id: draft?.contractorId ?? null, status: draftContractor?.status ?? null };
  const frozenIdentity = shown.frozen?.contractor ?? shown.frozen?.company ?? null;
  const legalPick: ContractorPick = draft ? draftPick : frozenIdentity ? { id: "fige", status: statusFromIdentity(frozenIdentity) } : draftPick;
  // Conformité C1 : mêmes blocages que l'envoi (sans les textes des réglages ; sans entrepreneur au parcours B), plus la trousse et l'identité.
  const readiness = draft ? await readinessProblems() : [];
  const blockers = draft
    ? [
        ...sendBlockers(draft.content, settings, today, CURRENT_RATES, draftPick).filter((b) => b.group !== "Textes du contrat" && (draft.contractorId || b.group !== CONTRACTOR_GROUP)),
        ...readiness.map((label, i) => ({ id: `trousse-${i}`, group: "Trousse contractuelle", label, ok: false, severity: "bloquant" as const, href: "/gestion/reglages/identite" })),
      ]
    : [];
  const warnings = draft ? [...settingsChecks(settings), ...quoteChecks(draft.content, settings, today, CURRENT_RATES, draftPick)].filter((i) => !i.ok && i.severity === "avertissement") : [];
  const legal = distanceContractChecks(c, settings, today, draft ? CURRENT_RATES : ratesOf(shown), legalPick);
  const contractorName = draft ? (draftContractor?.status.legalName || draftContractor?.status.company || "") : (shown.frozen?.contractor?.legalName ?? "");
  const base = await publicBaseUrl();
  const sms = smsConfigured() && Boolean(c.client.phone);
  const a = shown.acceptance;
  const status = effectiveStatus(shown, today);
  const name = `${c.client.firstName} ${c.client.lastName}`.trim() || c.client.email || "Client à préciser";
  const clientId = (await clientIdForQuote(q.id)) ?? (q.clientId && CLIENT_ID_RE.test(q.clientId) ? q.clientId : null);

  const flash =
    sp.envoi === "ok"
      ? { ok: true, text: `Soumission envoyée. Courriel : ${ch(sp.courriel)} · texto : ${ch(sp.texto)} · Pipedrive : ${sp.pd === "ok" ? "à jour" : "erreur (voir plus bas)"}${sp.inst ? ` · installateur : ${sp.inst}` : ""}.` }
      : sp.envoi === "bloque"
        ? { ok: false, text: sp.msg ?? "Envoi bloqué." }
        : sp.relance === "ok"
          ? { ok: true, text: `Lien renvoyé. Courriel : ${ch(sp.courriel)} · texto : ${ch(sp.texto)}.` }
          : sp.msg
            ? { ok: false, text: sp.msg }
            : null;

  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Soumission {q.number}{q.duplicatedFrom ? ` · copie de ${q.duplicatedFrom}` : ""}</p>
          <h1 className="g-h1">{name}</h1>
          <p className="g-hint" style={{ margin: "4px 0 0" }}>
            {[c.machine ? `${c.machine.brand} ${c.machine.name}` : null, c.client.city, `${money(totalOf(shown, today))} taxes comprises`].filter(Boolean).join(" · ")}
          </p>
          <p className="g-hint" style={{ margin: "2px 0 0" }}>
            {contractorName ? `Entrepreneur qui réalise les travaux : ${contractorName}` : draft ? "Entrepreneur qui réalise les travaux : à choisir" : null}
          </p>
        </div>
        <div className="sq-actions">
          <QuoteStatus status={status} />
          {clientId ? <Link href={`/gestion/clients/${clientId}`} className="g-btn g-btn--ghost"><UserRound size={16} aria-hidden /> Fiche client</Link> : null}
          <form action={duplicateAction.bind(null, q.id)}>
            <SubmitButton className="g-btn g-btn--ghost" pendingLabel="Copie…"><Copy size={16} aria-hidden /> Dupliquer</SubmitButton>
          </form>
          <form action={duplicateForClientAction.bind(null, q.id)}>
            <SubmitButton className="g-btn g-btn--ghost" pendingLabel="Copie…"><UserPlus size={16} aria-hidden /> Pour un autre client</SubmitButton>
          </form>
        </div>
      </Reveal>

      {flash ? <p className={`g-alert ${flash.ok ? "g-alert--ok" : ""}`} role="status">{flash.text}</p> : null}

      <div className="g-grid g-grid--job" style={{ marginTop: 8 }}>
        <div className="sq-stack">
          {draft ? (
            <Reveal as="section" className="sq-card">
              <div className="sq-card__head">
                <h2 className="g-h2">Version {draft.v} en brouillon{draft.kind === "avenant" ? " (avenant)" : draft.kind === "revision" ? " (révision)" : ""}</h2>
                <div className="sq-actions">
                  <Link href={`/gestion/soumissions/${q.id}/modifier`} className="g-btn g-btn--ink"><Pencil size={16} aria-hidden /> Modifier</Link>
                  <Link href={`/gestion/soumissions/${q.id}/apercu?v=${draft.v}`} className="g-btn g-btn--ghost"><Eye size={16} aria-hidden /> Aperçu</Link>
                </div>
              </div>
              {blockers.length ? (
                <>
                  <p className="sq-note"><strong>Envoi bloqué</strong> : complétez d’abord ces éléments.</p>
                  <div style={{ marginTop: 10 }}><Checklist items={blockers} /></div>
                </>
              ) : (
                <form action={sendQuoteAction.bind(null, q.id)} className="sq-stack" style={{ gap: 10 }}>
                  <p className="g-hint" style={{ margin: 0 }}>
                    Le client reçoit un courriel avec un bouton vers sa soumission ({c.client.email}). Le document est figé à l’envoi : toute modification passera par une nouvelle version.
                  </p>
                  {/* Conformité C1 : parcours A (installateur choisi : sa demande d'approbation part en même temps) ou B. */}
                  <p className="g-hint" style={{ margin: 0 }}>
                    {draft.contractorId
                      ? `Parcours A : ${contractorName || "l’installateur choisi"} reçoit en même temps sa demande d’approbation du contrat (texto et courriel). Le client ne peut signer qu’après son approbation.`
                      : "Parcours B : aucun installateur choisi. Le client peut « aller de l’avant » ; vous trouvez ensuite l’installateur (tâche automatique)."}
                  </p>
                  {draft.contractorId ? (
                    <label className="sq-inline-check"><input type="checkbox" name="consent" value="oui" required /> Le client a consenti à la transmission de son dossier à cet installateur (case 3.1 du formulaire de demande, ou consentement verbal)</label>
                  ) : null}
                  {sms ? (
                    <label className="sq-inline-check"><input type="checkbox" name="sms" value="oui" /> Aussi par texto au {c.client.phone}</label>
                  ) : null}
                  <div className="sq-actions">
                    <SubmitButton className="g-btn g-btn--primary g-btn--lg" pendingLabel="Envoi…"><Send size={18} aria-hidden /> Envoyer au client</SubmitButton>
                  </div>
                </form>
              )}
              {warnings.length ? (
                <details className="g-details" style={{ marginTop: 12 }}>
                  <summary>À vérifier avant l’envoi ({warnings.length})</summary>
                  <div style={{ marginTop: 8 }}><Checklist items={warnings} /></div>
                </details>
              ) : null}
              <form action={deleteDraftAction.bind(null, q.id)} style={{ marginTop: 12 }}>
                <SubmitButton className="g-btn g-btn--quiet" pendingLabel="Suppression…"><Trash2 size={15} aria-hidden /> Supprimer ce brouillon</SubmitButton>
              </form>
            </Reveal>
          ) : null}

          {/* Conformité C1 : avancement du parcours (Envoyée → va de l'avant → installateur → approuvée → signée). */}
          <ParcoursPanel quoteId={q.id} staff={staff} />

          {sent ? (
            <Reveal as="section" className="sq-card" delay={0.04}>
              <div className="sq-card__head">
                <h2 className="g-h2">Suivi de la version {sent.v}</h2>
                <QuoteStatus status={effectiveStatus(sent, today)} />
              </div>
              <dl className="sq-kv">
                <dt>Envoyée le</dt>
                <dd>{formatDateTime(sent.sentAt)}</dd>
                {sent.sends.map((s, i) => (
                  <div key={i} style={{ display: "contents" }}>
                    <dt>{s.kind === "envoi" ? "Envoi" : "Relance"}</dt>
                    <dd>{formatDateTime(s.at)} · courriel {ch(s.email)}{s.sms ? ` · texto ${ch(s.sms)}` : ""}</dd>
                  </div>
                ))}
                <dt>Ouverte</dt>
                <dd>{sent.views.count ? `${sent.views.count} fois · première le ${formatDateTime(sent.views.firstAt)} · dernière le ${formatDateTime(sent.views.lastAt)}` : "Pas encore"}</dd>
                <dt>Valide jusqu’au</dt>
                <dd>{formatDay(sent.content.validUntil)}</dd>
                <dt>Réponse</dt>
                <dd>{sent.acceptance ? `Acceptée le ${formatDateTime(sent.acceptance.at)}` : sent.refusal ? `Refusée le ${formatDateTime(sent.refusal.at)}` : "En attente"}</dd>
                {sent.acceptance ? (
                  <>
                    <dt>Options choisies</dt>
                    <dd>{sent.acceptance.selectedOptions.length ? sent.acceptance.selectedOptions.map((o) => `${o.label} (${money(o.netCents)})`).join(", ") : "Aucune"}</dd>
                  </>
                ) : null}
              </dl>
              <div style={{ marginTop: 12 }}><CopyLink url={clientLink(base, sent.token)} /></div>
              <div className="sq-actions" style={{ marginTop: 12 }} id="relance">
                {sent.acceptance && staff ? (
                  <Link href={`/gestion/jobs/nouveau?soumission=${q.id}`} className="g-btn g-btn--primary"><Wrench size={16} aria-hidden /> Créer le job depuis la soumission acceptée</Link>
                ) : null}
                {canRespond(sent, today) ? (
                  <form action={remindAction.bind(null, q.id)} className="sq-actions">
                    {sms ? <label className="sq-inline-check"><input type="checkbox" name="sms" value="oui" /> et par texto</label> : null}
                    <SubmitButton className="g-btn g-btn--ink" pendingLabel="Envoi…"><RefreshCw size={16} aria-hidden /> Relancer le client</SubmitButton>
                  </form>
                ) : null}
                {!draft ? (
                  <form action={reviseAction.bind(null, q.id)}>
                    <SubmitButton className="g-btn g-btn--ghost" pendingLabel="Création…"><FilePlus2 size={16} aria-hidden /> {sent.status === "acceptee" ? "Créer un avenant" : "Nouvelle version"}</SubmitButton>
                  </form>
                ) : null}
                <Link href={`/gestion/soumissions/${q.id}/apercu?v=${sent.v}`} className="g-btn g-btn--quiet"><Eye size={16} aria-hidden /> Voir le document</Link>
              </div>
            </Reveal>
          ) : null}

          {a ? (
            <Reveal as="section" className="sq-card" delay={0.06}>
              <div className="sq-card__head">
                <h2 className="g-h2">Acceptation : piste d’audit</h2>
                {verifyAcceptance(a) ? <span className="sq-pill sq-pill--acceptee"><ShieldCheck size={14} aria-hidden /> Empreinte vérifiée</span> : <span className="sq-pill sq-pill--refusee"><ShieldX size={14} aria-hidden /> Empreinte invalide</span>}
              </div>
              <dl className="sq-kv">
                <dt>Date et heure</dt><dd>{formatDateTime(a.at)} ({a.at})</dd>
                <dt>Version acceptée</dt><dd>{a.quoteNumber} · version {a.version}</dd>
                <dt>Total accepté</dt><dd>{money(a.totalCents)} taxes comprises{a.clientPaysCents !== a.totalCents ? ` · ${money(a.clientPaysCents)} payables à l’entreprise` : ""}</dd>
                <dt>Options choisies</dt><dd>{a.selectedOptions.map((o) => o.label).join(", ") || "Aucune"}</dd>
                <dt>Nom tapé (signature)</dt><dd>{a.typedName}</dd>
                <dt>Conditions</dt><dd>Case « J’ai lu et j’accepte les conditions » cochée</dd>
                <dt>Adresse IP</dt><dd>{a.ip}</dd>
                <dt>Navigateur</dt><dd>{a.userAgent || "—"}</dd>
                <dt>Empreinte du document envoyé</dt><dd className="sq-hash">{a.contentHash}</dd>
                <dt>Empreinte de l’instantané accepté</dt><dd className="sq-hash">{a.snapshotHash}</dd>
              </dl>
              <p className="g-hint" style={{ marginBottom: 0 }}>L’instantané (document, choix, totaux, signature) est figé dans soumissions.json : il n’est jamais modifié. Le client a reçu sa copie par courriel.</p>
            </Reveal>
          ) : null}

          {q.versions.some((v) => v.refusal || v.questions.length) ? (
            <Reveal as="section" className="sq-card">
              <h2 className="g-h2" style={{ marginBottom: 10 }}>Réponses du client</h2>
              <ul className="sq-log">
                {q.versions.flatMap((v) => [
                  ...v.questions.map((x, i) => (
                    <li key={`q-${v.v}-${i}`}><span><time>{formatDateTime(x.at)} · version {v.v}</time><strong>Question :</strong> {x.message}</span></li>
                  )),
                  ...(v.refusal ? [<li key={`r-${v.v}`} className="is-bad"><span><time>{formatDateTime(v.refusal.at)} · version {v.v}</time><strong>Refus</strong>{v.refusal.reason ? ` : ${v.refusal.reason}` : ""}</span></li>] : []),
                ])}
              </ul>
            </Reveal>
          ) : null}

          <Reveal as="section" className="sq-card">
            <h2 className="g-h2" style={{ marginBottom: 10 }}>Versions</h2>
            <ul className="sq-log">
              {[...q.versions].sort((x, y) => y.v - x.v).map((v) => (
                <li key={v.id} className={v.status === "acceptee" ? "is-ok" : v.status === "refusee" ? "is-bad" : ""}>
                  <span>
                    <time>{v.sentAt ? `Envoyée le ${formatDateTime(v.sentAt)}` : `Créée le ${formatDateTime(v.createdAt)}`}</time>
                    <strong>Version {v.v}</strong> · {v.kind === "avenant" ? "avenant" : v.kind === "revision" ? "révision" : "initiale"} · <QuoteStatus status={effectiveStatus(v, today)} /> · {money(totalOf(v, today))}{" "}
                    <Link href={`/gestion/soumissions/${q.id}/apercu?v=${v.v}`}>voir</Link>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal as="section" className="sq-card">
            <h2 className="g-h2" style={{ marginBottom: 10 }}>Journal</h2>
            <ul className="sq-log">
              {[...q.events].reverse().slice(0, 40).map((e, i) => (
                <li key={i}><span><time>{formatDateTime(e.at)}{e.by ? ` · ${e.by}` : ""}</time>{e.detail}</span></li>
              ))}
            </ul>
            {views.length ? <p className="g-hint" style={{ marginBottom: 0 }}>{views.length} consultation{views.length > 1 ? "s" : ""} au total (soumissions-vues.jsonl), la dernière le {formatDateTime(views[views.length - 1].at)}.</p> : null}
          </Reveal>
        </div>

        <aside className="sq-stack" style={{ alignContent: "start" }}>
          {/* Conformité C1 : liste des anciennes soumissions ; au parcours de la trousse, le contrat vient de la trousse (3.2). */}
          {shown.frozen && !shown.frozen.parcours ? (
          <Reveal className="sq-card" delay={0.08}>
            <h2 className="g-h2" style={{ marginBottom: 6 }}>Contrat conclu à distance</h2>
            <p className="g-hint" style={{ marginTop: 0 }}>Éléments attendus dans le document. Les textes juridiques restent à faire valider par un avocat ou un notaire du Québec.</p>
            <Checklist items={legal} />
            <p className="g-hint" style={{ marginBottom: 0 }}><a href={LINKS.opcDistance} target="_blank" rel="noreferrer">Office de la protection du consommateur : achats à distance</a></p>
          </Reveal>
          ) : null}

          {/* Chantier V : Pipedrive (lier une affaire) pour le propriétaire et les adjoints. */}
          {staff ? (
          <Reveal className="sq-card" delay={0.1}>
            <h2 className="g-h2" id="pipedrive" style={{ marginBottom: 6 }}>Pipedrive</h2>
            <dl className="sq-kv">
              <dt>Personne</dt><dd>{q.pipedrive.personId ?? "—"}</dd>
              <dt>Affaire</dt><dd>{q.pipedrive.dealId ?? "Créée à l’envoi"}</dd>
            </dl>
            {q.pipedrive.log.length ? (
              <ul className="sq-log" style={{ marginTop: 10 }}>
                {[...q.pipedrive.log].reverse().slice(0, 12).map((l, i) => (
                  <li key={i} className={l.ok ? "is-ok" : "is-bad"}><span><time>{formatDateTime(l.at)} · {l.event}</time>{l.detail}</span></li>
                ))}
              </ul>
            ) : <p className="g-hint">Aucune synchronisation pour l’instant.</p>}
            <form action={linkDealAction.bind(null, q.id)} className="g-form" style={{ gap: 8, marginTop: 12 }}>
              <label className="g-label" htmlFor="dealId">Lier une affaire existante <small>(numéro)</small></label>
              <div className="sq-actions">
                <input id="dealId" name="dealId" className="g-input" inputMode="numeric" defaultValue={q.pipedrive.dealId ?? ""} style={{ maxWidth: 160 }} />
                <SubmitButton className="g-btn g-btn--ghost" pendingLabel="…">Enregistrer</SubmitButton>
              </div>
            </form>
          </Reveal>
          ) : null}

          {q.internalNotes ? (
            <Reveal className="sq-card" delay={0.12}>
              <h2 className="g-h2" style={{ marginBottom: 6 }}>Notes internes</h2>
              <p style={{ whiteSpace: "pre-wrap", margin: 0 }}>{q.internalNotes}</p>
            </Reveal>
          ) : null}
        </aside>
      </div>
    </>
  );
}
