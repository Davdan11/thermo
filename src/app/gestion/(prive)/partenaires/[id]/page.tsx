/* ==================================================================
   /gestion/partenaires/[id] — fiche du partenaire : blocages des
   offres, entente (envoi, relance, preuve, document signé),
   conformité (RBQ, assurance, documents), performance et niveau,
   citation d'une clause, fin de partenariat, historique.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, FileText, ShieldAlert, ShieldCheck } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { listClauses } from "@/lib/gestion/partenaires/agreement";
import { COMPLIANCE_LABELS } from "@/lib/gestion/partenaires/compliance";
import { longDate, longDateTime, pctText, relative } from "@/lib/gestion/partenaires/format";
import { readNetwork, summarize } from "@/lib/gestion/partenaires/network";
import { partnerDocuments } from "@/lib/gestion/partenaires/service";
import { emptyPartner } from "@/lib/gestion/partenaires/store";
import { INSTALLER_ID_RE, SEND_LABELS, TIER_LABELS, TIERS, type ComplianceKind } from "@/lib/gestion/partenaires/types";
import { citationPreviewAction, citationSendAction, complianceAction, endPartnershipAction, reinstateAction, sendAgreementAction, tierAction } from "../../partenaires-actions";
// Identité légale : l'entreprise qui réalise les travaux dans les soumissions.
import { saveIdentityAction, sendIdentityLinkAction, verifyIdentityAction } from "../../identite-actions";
import { identityProblems } from "@/lib/soumissions/contractor";
import { contractorIdentityOf } from "@/lib/soumissions/contractors";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionButton, ActionForm } from "@/components/partenaires/admin/AdminTools";
import { AgreementChip, DocChip, HeroArcs, TierChip } from "@/components/partenaires/admin/bits";
import { CitationForm } from "@/components/partenaires/admin/CitationForm";
// Chantier R : vérification automatique au fichier ouvert de la RBQ et lien vers le registre public.
import { RbqRegistryCard } from "@/components/gestion/reseau/RbqRegistryCard";
// Conformité C1 : paiement du client (bénéficiaire, modes, échéancier) et sous-catégories RBQ connues.
import { PartnerContractCard } from "@/components/contrats/PartnerContractCard";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Partenaire" };

export default async function PartnerPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ nouveau?: string; ok?: string; erreur?: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const sp = await searchParams;
  if (!INSTALLER_ID_RE.test(id)) notFound();
  const snap = await readNetwork();
  const installer = snap.gestion.installers.find((i) => i.id === id);
  if (!installer) notFound();
  const s = await summarize(installer, snap);
  const { signatures, versions } = await partnerDocuments(id);
  const record = s.record ?? emptyPartner(id);
  const a = s.agreement;
  const last = a.lastSignature;
  const lastVersion = last ? versions[last.versionId] : null;
  const clauses = lastVersion ? listClauses(lastVersion).map((c) => ({ ref: c.ref, title: c.articleTitle, text: c.text })) : [];
  const perf = s.performance;
  const req = a.request;
  const lastSend = req?.sends.at(-1);
  const ended = record.ended;
  const ident = record.identity ?? null;
  const idProblems = identityProblems(contractorIdentityOf(installer, record));
  const idToVerify = Boolean(ident && ident.source === "partenaire" && !ident.verifiedAt);
  const idTone = idProblems.missing.length ? "bad" : idToVerify ? "warn" : "ok";
  const idLabel = idProblems.missing.length ? `${idProblems.missing.length} champ${idProblems.missing.length > 1 ? "s" : ""} à compléter` : idToVerify ? "À vérifier" : "Complète";
  const rbqShown = record.compliance.rbq.number || installer.rbq;
  const idLink = record.identityLink ?? null;
  const idLastSend = idLink?.sends.at(-1);
  const idField = (name: "legalName" | "tradeName" | "neq" | "address" | "city" | "postalCode" | "phone" | "email" | "tps" | "tvq", label: string, max: number, extra?: { placeholder?: string; type?: string }) => (
    <div className="g-field">
      <label className="g-label" htmlFor={`id-${name}`}>
        {label}
      </label>
      <input id={`id-${name}`} name={name} type={extra?.type ?? "text"} className="g-input" defaultValue={ident?.[name] ?? ""} maxLength={max} placeholder={extra?.placeholder} autoComplete="off" />
    </div>
  );

  return (
    <>
      <Reveal>
        <header className="pa-hero">
          <HeroArcs />
          <Link href="/gestion/partenaires" className="pa-hero__back">
            <ChevronLeft size={16} aria-hidden /> Partenaires
          </Link>
          <h1>
            {installer.company}
            <em>
              {installer.contactName} · partenaire depuis le {longDate(installer.createdAt)}
            </em>
          </h1>
          <div className="pa-hero__chips">
            <TierChip tier={perf.tier} imposed={Boolean(perf.override)} />
            <AgreementChip state={a} />
            <Chip tone={ended ? "bad" : installer.active ? "ok" : "muted"} dot>
              {ended ? "Partenariat terminé" : installer.active ? "Actif" : "En pause"}
            </Chip>
            <Link href={`/gestion/installateurs/${id}`} className="k-btn k-btn--ghost" style={{ color: "var(--g-cream)", minHeight: 30 }}>
              Fiche installateur (zone, marques)
            </Link>
          </div>
        </header>
      </Reveal>

      {sp.nouveau ? (
        <p className="g-alert g-alert--ok" role="status" style={{ marginBottom: 16 }}>
          Installateur ajouté. Prochaine étape : envoyer l’entente, puis saisir la licence RBQ et l’assurance.
        </p>
      ) : null}
      {sp.ok ? (
        <p className="g-alert g-alert--ok" role="status" style={{ marginBottom: 16 }}>
          {sp.ok}
        </p>
      ) : null}
      {sp.erreur ? (
        <p className="g-alert" role="alert" style={{ marginBottom: 16 }}>
          {sp.erreur}
        </p>
      ) : null}

      {s.blockers.length ? (
        <Reveal className="pa-banner pa-banner--bad">
          <ShieldAlert size={22} aria-hidden />
          <div>
            <b>Aucune offre de job tant que :</b>
            <ul>
              {s.blockers.map((b) => (
                <li key={b.code}>{b.label}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ) : (
        <Reveal className="pa-banner" >
          <ShieldCheck size={22} aria-hidden />
          <div>
            <b>Offres de jobs permises</b>
            <p>{a.code === "aucune-version" ? "Aucune entente n’est encore en vigueur : la signature n’est pas encore exigée." : a.code === "signee" ? "Entente signée, documents en règle." : `Délai de grâce jusqu’au ${a.graceUntil ? longDate(a.graceUntil) : "—"} pour signer la version en vigueur.`}</p>
          </div>
        </Reveal>
      )}

      <div className="pa-grid">
        <div className="pa-stack">
          <Card id="entente" title="Entente de partenariat" sub={a.version ? `Version ${a.version.number} en vigueur` : "Aucune version publiée"} action={<AgreementChip state={a} />}>
            {a.version ? (
              <>
                <ol className="pa-steps">
                  <li className={lastSend || a.signature ? "is-done" : "is-now"}>
                    <b>Envoyée</b>
                    {lastSend ? `${relative(lastSend.at, snap.now)} · ${req?.sends.length ?? 0} envoi${(req?.sends.length ?? 0) > 1 ? "s" : ""}` : a.signature ? "—" : "pas encore"}
                  </li>
                  <li className={req?.openedAt || a.signature ? "is-done" : lastSend ? "is-now" : ""}>
                    <b>Ouverte</b>
                    {req?.openedAt ? `${relative(req.openedAt, snap.now)} · ${req.openCount} fois` : a.signature ? "—" : "pas encore"}
                  </li>
                  <li className={a.signature ? "is-done" : req?.openedAt ? "is-now" : ""}>
                    <b>Signée</b>
                    {a.signature ? longDate(a.signature.signedAt) : a.code === "a-resigner" ? "à re-signer" : "pas encore"}
                  </li>
                </ol>
                {lastSend ? (
                  <p className="g-hint" style={{ marginTop: 0 }}>
                    Dernier envoi le {longDateTime(lastSend.at)} · courriel {SEND_LABELS[lastSend.email]} · texto {SEND_LABELS[lastSend.sms]}
                  </p>
                ) : null}
                {a.signature ? (
                  <>
                    <dl className="pa-proof">
                      <dt>Signée le</dt>
                      <dd>{longDateTime(a.signature.signedAt)}</dd>
                      <dt>Par</dt>
                      <dd>
                        {a.signature.signerName}, {a.signature.signerTitle}
                      </dd>
                      <dt>Méthode</dt>
                      <dd>{a.signature.method === "trace" ? "signature tracée" : "nom tapé"}</dd>
                      <dt>Adresse IP</dt>
                      <dd>{a.signature.proof.ip}</dd>
                      <dt>Navigateur</dt>
                      <dd>{a.signature.proof.userAgent}</dd>
                      <dt>Empreinte</dt>
                      <dd>
                        <code>{a.signature.proof.textSha256}</code>
                      </dd>
                      <dt>Copies</dt>
                      <dd>
                        partenaire {SEND_LABELS[a.signature.copies.partner]} · propriétaire {a.signature.copies.owner.map((x) => SEND_LABELS[x]).join(", ") || "—"}
                      </dd>
                    </dl>
                    <p style={{ margin: "14px 0 0" }}>
                      <a className="k-btn k-btn--ink" href={`/gestion/api/partenaires/document/${a.signature.id}`} target="_blank" rel="noreferrer">
                        <FileText size={15} aria-hidden /> Document signé
                      </a>
                    </p>
                  </>
                ) : !ended ? (
                  <div style={{ marginTop: 12 }}>
                    <ActionButton action={sendAgreementAction.bind(null, id)} pending="Envoi…">
                      {req?.sends.length ? "Relancer (nouveau lien)" : a.code === "a-resigner" ? "Envoyer la nouvelle version" : "Envoyer l’entente"}
                    </ActionButton>
                    {a.graceUntil ? <p className="g-hint">Délai de grâce jusqu’au {longDateTime(a.graceUntil)}.</p> : null}
                  </div>
                ) : null}
              </>
            ) : (
              <p className="g-hint" style={{ margin: 0 }}>
                <Link href="/gestion/entente">Préparez et publiez l’entente</Link> : le texte vient de l’avocat.
              </p>
            )}
            {signatures.length > (a.signature ? 1 : 0) ? (
              <details className="g-details" style={{ marginTop: 14 }}>
                <summary>Signatures précédentes</summary>
                <ul className="pa-history" style={{ marginTop: 8 }}>
                  {signatures
                    .filter((x) => x.id !== a.signature?.id)
                    .map((x) => (
                      <li key={x.id}>
                        Version {x.versionNumber} · {x.signerName} ·{" "}
                        <a href={`/gestion/api/partenaires/document/${x.id}`} target="_blank" rel="noreferrer">
                          document
                        </a>
                        <small>{longDateTime(x.signedAt)}</small>
                      </li>
                    ))}
                </ul>
              </details>
            ) : null}
          </Card>

          <Card id="conformite" title="Conformité" sub={`Alerte ${snap.partners.settings.alertDays} jours avant l’expiration · aucune offre si expirée`}>
            <div className="pa-docs">
              {(["rbq", "assurance"] as ComplianceKind[]).map((kind) => {
                const doc = record.compliance[kind];
                const state = s.compliance[kind].state;
                return (
                  <div key={kind} className="pa-doc">
                    <div className="pa-doc__head">
                      <b>{COMPLIANCE_LABELS[kind]}</b>
                      <DocChip state={state} />
                    </div>
                    <ActionForm action={complianceAction.bind(null, id, kind)} submit="Enregistrer" pending="…">
                      <div className="g-row g-row--2">
                        <div className="g-field">
                          <label className="g-label" htmlFor={`${kind}-number`}>
                            {kind === "rbq" ? "Numéro de licence" : "Numéro de police"}
                          </label>
                          <input id={`${kind}-number`} name="number" className="g-input" defaultValue={doc.number || (kind === "rbq" ? installer.rbq : "")} maxLength={60} />
                        </div>
                        <div className="g-field">
                          <label className="g-label" htmlFor={`${kind}-exp`}>
                            Expire le
                          </label>
                          <input id={`${kind}-exp`} name="expiresOn" type="date" className="g-input" defaultValue={doc.expiresOn ?? ""} />
                        </div>
                      </div>
                      {kind === "assurance" ? (
                        <div className="g-row g-row--2">
                          <div className="g-field">
                            <label className="g-label" htmlFor="ins-issuer">
                              Assureur
                            </label>
                            <input id="ins-issuer" name="issuer" className="g-input" defaultValue={doc.issuer} maxLength={120} />
                          </div>
                          <div className="g-field">
                            <label className="g-label" htmlFor="ins-cov">
                              Couverture <small>(telle qu’au certificat)</small>
                            </label>
                            <input id="ins-cov" name="coverage" className="g-input" defaultValue={doc.coverage} maxLength={120} />
                          </div>
                        </div>
                      ) : null}
                    </ActionForm>
                    <form action="/gestion/api/partenaires/conformite" method="post" encType="multipart/form-data" className="pa-upload">
                      <input type="hidden" name="installerId" value={id} />
                      <input type="hidden" name="kind" value={kind} />
                      <input type="file" name="file" accept="application/pdf,image/*" aria-label={`Document : ${COMPLIANCE_LABELS[kind]}`} />
                      <button type="submit" className="k-btn">
                        Téléverser
                      </button>
                      {doc.fileId ? (
                        <a href={`/gestion/api/partenaires/fichier/${doc.fileId}`} target="_blank" rel="noreferrer" className="k-link">
                          <FileText size={14} aria-hidden /> {doc.fileName ?? "Document"}
                        </a>
                      ) : null}
                    </form>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card id="identite" title="Identité légale" sub="L’entreprise qui réalise les travaux dans les soumissions : copiée dans chaque soumission à l’envoi." action={<Chip tone={idTone} dot>{idLabel}</Chip>}>
            {idToVerify && ident ? (
              <div className="pa-banner" style={{ marginBottom: 14 }}>
                <ShieldAlert size={20} aria-hidden />
                <div>
                  <b>Transmise par le partenaire{ident.submittedAt ? ` le ${longDateTime(ident.submittedAt)}` : ""} : à vérifier.</b>
                  <p>Relisez-la, corrigez au besoin et enregistrez, ou confirmez-la telle quelle.{ident.rbqDeclared ? ` Licence RBQ déclarée : ${ident.rbqDeclared}${rbqShown && rbqShown !== ident.rbqDeclared ? ` (conformité : ${rbqShown})` : ""}.` : ""}</p>
                  <div style={{ marginTop: 8 }}>
                    <ActionButton action={verifyIdentityAction.bind(null, id)} pending="…">
                      Confirmer l’identité transmise
                    </ActionButton>
                  </div>
                </div>
              </div>
            ) : null}
            {idProblems.missing.length ? (
              <p className="g-hint" style={{ marginTop: 0 }}>
                À compléter avant d’envoyer une soumission avec ce partenaire : {idProblems.missing.join(", ")}.
              </p>
            ) : null}
            <ActionForm action={saveIdentityAction.bind(null, id)} submit="Enregistrer (vérifiée par vous)" pending="Enregistrement…">
              <div className="g-row g-row--2">
                {idField("legalName", "Raison sociale (nom légal)", 200, { placeholder: installer.company })}
                {idField("tradeName", "Nom commercial (facultatif)", 200)}
              </div>
              <div className="g-row g-row--2">
                {idField("neq", "NEQ", 20, { placeholder: "10 chiffres" })}
                <div className="g-field">
                  <span className="g-label">Licence RBQ</span>
                  <p className="g-input" style={{ display: "flex", alignItems: "center", margin: 0, background: "var(--g-cream)" }}>
                    {rbqShown || "À saisir"} · <a href="#conformite" style={{ marginLeft: 6 }}>section Conformité</a>
                  </p>
                </div>
              </div>
              {idField("address", "Adresse", 200)}
              <div className="g-row g-row--2">
                {idField("city", "Ville", 100)}
                {idField("postalCode", "Code postal", 10)}
              </div>
              <div className="g-row g-row--2">
                {idField("phone", "Téléphone de l’entreprise", 40, { type: "tel" })}
                {idField("email", "Courriel de l’entreprise", 200, { type: "email" })}
              </div>
              <div className="g-row g-row--2">
                {idField("tps", "Numéro de TPS", 30, { placeholder: "123456789 RT0001" })}
                {idField("tvq", "Numéro de TVQ", 30, { placeholder: "1234567890 TQ0001" })}
              </div>
              {idProblems.formatIssues.length ? <p className="g-hint" style={{ margin: 0 }}>À vérifier : {idProblems.formatIssues.join(" ; ")}.</p> : null}
              {ident?.verifiedAt ? <p className="g-hint" style={{ margin: 0 }}>Vérifiée le {longDateTime(ident.verifiedAt)}{ident.verifiedBy ? ` par ${ident.verifiedBy}` : ""}.</p> : null}
            </ActionForm>
            {!ended ? (
              <div style={{ marginTop: 14 }}>
                <ActionButton action={sendIdentityLinkAction.bind(null, id)} className="k-btn" pending="Envoi…">
                  {idLink ? "Envoyer un nouveau lien au partenaire" : "Faire remplir par le partenaire (lien sécurisé)"}
                </ActionButton>
                <p className="g-hint">
                  Le partenaire remplit lui-même le formulaire : lien personnel, valable 14 jours, un seul envoi. Vous vérifiez ensuite.
                  {idLink ? ` Dernier lien : ${idLink.usedAt ? `rempli le ${longDateTime(idLink.usedAt)}` : `expire le ${longDate(idLink.expiresAt)}`}${idLastSend ? ` · courriel ${SEND_LABELS[idLastSend.email]} · texto ${SEND_LABELS[idLastSend.sms]}` : ""}.` : ""}
                </p>
              </div>
            ) : null}
          </Card>
          {/* Chantier R : licence RBQ au fichier ouvert (verdict, levée manuelle, registre public). */}
          <RbqRegistryCard installerId={id} number={record.compliance.rbq.number || installer.rbq} check={record.rbqVerification ?? null} />
          {/* Conformité C1 : paiement du client et sous-catégories RBQ, exigés pour approuver un contrat. */}
          <PartnerContractCard installerId={id} verification={record.rbqVerification ?? null} />

          <Card title="Performance" sub={`Niveau ${TIER_LABELS[perf.tier]}${perf.override ? " (imposé)" : " (automatique)"} · points au classement : ${snap.partners.settings.tierPoints[perf.tier] > 0 ? "+" : ""}${snap.partners.settings.tierPoints[perf.tier]}`} action={<TierChip tier={perf.tier} imposed={Boolean(perf.override)} />}>
            <div className="pa-perf">
              <div className="pa-metric">
                <span>Installations</span>
                <b>{perf.installs}</b>
                <small>jobs terminés</small>
              </div>
              <div className="pa-metric">
                <span>Main-d’œuvre</span>
                <b>{perf.laborPer100 === null ? "—" : String(perf.laborPer100).replace(".", ",")}</b>
                <small>
                  appels par 100 installations · {perf.laborCalls} sur {perf.allCalls}
                </small>
              </div>
              <div className="pa-metric">
                <span>Ponctualité</span>
                <b>{pctText(perf.punctuality.rate)}</b>
                <small>
                  {perf.punctuality.n} à l’heure sur {perf.punctuality.of}
                </small>
              </div>
              <div className="pa-metric">
                <span>Photos conformes</span>
                <b>{pctText(perf.photos.rate)}</b>
                <small>
                  {perf.photos.n} sur {perf.photos.of}
                  {perf.photos.flagged ? ` · ${perf.photos.flagged} signalé${perf.photos.flagged > 1 ? "s" : ""}` : ""}
                </small>
              </div>
              <div className="pa-metric">
                <span>Acceptation</span>
                <b>{pctText(perf.acceptance.rate)}</b>
                <small>
                  {perf.acceptance.n} sur {perf.acceptance.of} offres
                </small>
              </div>
              <div className={`pa-metric${perf.payment ? "" : " pa-metric--soon"}`}>
                <span>Paiement</span>
                <b>{perf.payment ? (perf.payment.medianDaysToPay === null ? "—" : `${perf.payment.medianDaysToPay} j`) : "À venir"}</b>
                <small>{perf.payment ? `${perf.payment.late} en retard · ${perf.payment.paid}/${perf.payment.invoices} payées` : "factures de commission (volet B)"}</small>
              </div>
            </div>
            <ul className="pa-reasons">
              {perf.reasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
              {perf.override ? (
                <li>
                  Niveau {TIER_LABELS[perf.override.tier]} imposé le {longDate(perf.override.at)} : « {perf.override.reason} » (automatique : {TIER_LABELS[perf.autoTier]})
                </li>
              ) : null}
            </ul>
          </Card>

          <Card title="Historique" sub="Tout ce qui s’est passé avec ce partenaire.">
            {record.history.length ? (
              <ul className="pa-history">
                {[...record.history]
                  .reverse()
                  .slice(0, 60)
                  .map((h, i) => (
                    <li key={i}>
                      <b>{h.action}</b>
                      {h.detail ? ` · ${h.detail}` : ""}
                      <small>
                        {longDateTime(h.at)} · {h.by.startsWith("installateur:") ? installer.company : h.by}
                      </small>
                    </li>
                  ))}
              </ul>
            ) : (
              <p className="g-hint" style={{ margin: 0 }}>
                Rien encore.
              </p>
            )}
          </Card>
        </div>

        <aside className="pa-stack">
          <Card title="Citer une clause" sub="« Selon l’article 6.2 de l’entente signée le … » : envoyé au partenaire.">
            <CitationForm installerId={id} clauses={clauses} signedOn={last ? longDate(last.signedAt) : ""} preview={citationPreviewAction} send={citationSendAction} />
            {record.citations.length ? (
              <details className="g-details" style={{ marginTop: 12 }}>
                <summary>Citations envoyées ({record.citations.length})</summary>
                <ul className="pa-history" style={{ marginTop: 8 }}>
                  {[...record.citations].reverse().map((c) => (
                    <li key={c.id}>
                      Article {c.ref} · courriel {SEND_LABELS[c.channels.email]} · texto {SEND_LABELS[c.channels.sms]}
                      <small>{longDateTime(c.at)}</small>
                    </li>
                  ))}
                </ul>
              </details>
            ) : null}
          </Card>

          <Card title="Niveau" sub="Automatique selon la performance ; vous pouvez l’imposer, avec la raison.">
            <ActionForm action={tierAction.bind(null, id)} submit="Appliquer" pending="…">
              <div className="g-field">
                <label className="g-label" htmlFor="tier">
                  Niveau
                </label>
                <select id="tier" name="tier" className="g-select" defaultValue={perf.override?.tier ?? "auto"}>
                  <option value="auto">Automatique ({TIER_LABELS[perf.autoTier]})</option>
                  {TIERS.map((t) => (
                    <option key={t} value={t}>
                      {TIER_LABELS[t]} (imposé)
                    </option>
                  ))}
                </select>
              </div>
              <div className="g-field">
                <label className="g-label" htmlFor="tier-reason">
                  Raison <small>(obligatoire si imposé)</small>
                </label>
                <textarea id="tier-reason" name="reason" className="g-textarea" maxLength={500} style={{ minHeight: 70 }} defaultValue={perf.override?.reason ?? ""} />
              </div>
            </ActionForm>
          </Card>

          <Card title="Fin du partenariat" sub="Décision du propriétaire, conservée à l’historique.">
            {ended ? (
              <>
                <p className="g-alert" style={{ marginTop: 0 }}>
                  Terminé le {longDateTime(ended.at)} : « {ended.reason} »
                </p>
                <ActionForm action={reinstateAction.bind(null, id)} submit="Reprendre le partenariat" pending="…">
                  <div className="g-field">
                    <label className="g-label" htmlFor="rein">
                      Raison <small>(facultative)</small>
                    </label>
                    <input id="rein" name="reason" className="g-input" maxLength={500} />
                  </div>
                </ActionForm>
              </>
            ) : (
              <ActionForm action={endPartnershipAction.bind(null, id)} submit="Mettre fin au partenariat" submitClass="g-btn g-btn--danger" pending="…">
                <div className="g-field">
                  <label className="g-label" htmlFor="end-reason">
                    Raison
                  </label>
                  <textarea id="end-reason" name="reason" className="g-textarea" maxLength={1000} style={{ minHeight: 80 }} placeholder="Ex. : trois appels de service dus à la main-d’œuvre en deux mois, voir billets 4, 7 et 9." />
                </div>
                <label className="g-check">
                  <input type="checkbox" name="confirm" value="1" /> Plus aucune offre ne lui sera envoyée
                </label>
              </ActionForm>
            )}
          </Card>
        </aside>
      </div>
    </>
  );
}
