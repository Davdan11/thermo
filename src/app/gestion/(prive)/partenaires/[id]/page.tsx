/* ==================================================================
   /gestion/partenaires/[id] — fiche UNIQUE de l'installateur
   (refonte R1 : Installateurs et Partenaires fusionnés ; l'ancienne
   adresse /gestion/installateurs/[id] redirige ici, onglet Identité).
   En-tête : niveau, entente, état ; blocages des offres. Onglets :
     Identité        coordonnées, zone, marques, types, disponibilité
                     (formulaire de l'installateur) ; identité légale
     Conformité      RBQ, assurances, halocarbures, registre RBQ,
                     paiement du client et sous-catégories (C1)
     Entente         envoi, relance, preuve, document signé ; citer une
                     clause ; renseignements personnels (annexe D,
                     accès aux dossiers) ; fin du partenariat
     Performance     mesures, niveau (automatique ou imposé)
     Disponibilités  moments libres et réservés, lien à lui envoyer
     Paiements       factures de commission, retards, pause des offres
     Historique      tout ce qui s'est passé avec ce partenaire
   Conformité C3 : champs de l'installateur pour l'entente maître,
   assurance (montant, avenant d'assuré additionnel), assurance
   automobile, qualifications environnementales, sous-catégories RBQ,
   fin avec préavis de 30 jours ou pour motif, rappel du
   non-contournement (information), annexe D et journal des accès aux
   dossiers clients, délais de service.
   ?onglet=… ouvre un onglet ; #identite, #conformite, #licence-rbq,
   #entente, #fin ouvrent l'onglet de la carte.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarClock, ChevronLeft, FileText, Hourglass, Info, LockKeyhole, ShieldAlert, ShieldCheck } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandOptions } from "@/lib/gestion/catalog";
import { paymentsView } from "@/lib/gestion/commissions/service";
import { INVOICE_STATE_LABELS } from "@/lib/gestion/commissions/types";
import { daysBetweenYmd, localYmd } from "@/lib/gestion/crm/time";
import { siteCities } from "@/lib/gestion/geo";
import { listClauses, masterAgreementInForce, partnerReadiness } from "@/lib/gestion/partenaires/agreement";
import { ACCESS_VIA_LABELS, readClientAccess } from "@/lib/gestion/partenaires/acces";
import { COMPLIANCE_LABELS, complianceSnapshot, docState, halocarbonState, money, ymdLong } from "@/lib/gestion/partenaires/compliance";
import { ARTICLES, CURE_DAYS, endedOf, NON_CIRCUMVENTION_MONTHS, nonCircumvention, NOTICE_DAYS, PRIVACY_ANNEX, TERMINATION_MODE_LABELS, TERMINATION_PHASE_LABELS, terminationDates, terminationPhase } from "@/lib/gestion/partenaires/fin";
import { longDate, longDateTime, pctText, relative } from "@/lib/gestion/partenaires/format";
import { partnerAgreementValues, partnerTokenHint } from "@/lib/gestion/partenaires/jetons";
import { readNetwork, summarize } from "@/lib/gestion/partenaires/network";
import { partnerDocuments, settleTerminations } from "@/lib/gestion/partenaires/service";
import { emptyDoc, emptyPartner } from "@/lib/gestion/partenaires/store";
import { INSTALLER_ID_RE, SEND_LABELS, TIER_LABELS, TIERS, type ComplianceKind } from "@/lib/gestion/partenaires/types";
import { slotsPageView } from "@/lib/gestion/portail/views";
import { formatDay } from "@/lib/soumissions/dates";
import { cancelNoticeAction, citationPreviewAction, citationSendAction, complianceAction, confirmTerminationAction, endorsementAction, halocarbonAddAction, halocarbonRemoveAction, legalFormAction, noticeAction, reinstateAction, sendAgreementAction, tierAction } from "../../partenaires-actions";
// Identité légale : l'entreprise qui réalise les travaux dans les soumissions.
import { saveIdentityAction, sendIdentityLinkAction, verifyIdentityAction } from "../../identite-actions";
import { identityProblems } from "@/lib/soumissions/contractor";
import { contractorIdentityOf } from "@/lib/soumissions/contractors";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { dollars, pct, plural } from "@/components/gestion/kit/format";
import { Tabs, type TabDef } from "@/components/gestion/kit/Tabs";
import { Reveal } from "@/components/gestion/Reveal";
import { InstallerForm } from "@/components/gestion/InstallerForm";
import { STATE_TONE } from "@/components/gestion/argent/labels";
import { AvailabilityLinkButton } from "@/components/gestion/portail/PortalForms";
import { ActionButton, ActionForm } from "@/components/partenaires/admin/AdminTools";
import { AgreementChip, DocChip, HeroArcs, TierChip } from "@/components/partenaires/admin/bits";
import { CitationForm } from "@/components/partenaires/admin/CitationForm";
// Chantier R : vérification automatique au fichier ouvert de la RBQ et lien vers le registre public.
import { RbqRegistryCard } from "@/components/gestion/reseau/RbqRegistryCard";
// Conformité C1 : paiement du client (bénéficiaire, modes, échéancier) et sous-catégories RBQ connues.
import { PartnerContractCard } from "@/components/contrats/PartnerContractCard";
import "@/components/partenaires/admin/partenaires.css";
import "@/components/partenaires/admin/conformite.css";
import "@/components/gestion/argent/argent.css";
import "@/components/gestion/portail/portail-admin.css";

export const metadata: Metadata = { title: "Partenaire" };

const AMOUNT_TONE = { suffisant: "ok", insuffisant: "bad", manquant: "muted" } as const;

export default async function PartnerPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ nouveau?: string; ok?: string; erreur?: string; onglet?: string }> }) {
  await requireAdmin();
  const { id } = await params;
  const sp = await searchParams;
  if (!INSTALLER_ID_RE.test(id)) notFound();
  // Conformité C3 : un préavis arrivé à terme est inscrit à la fiche avant l'affichage.
  await settleTerminations();
  const snap = await readNetwork();
  const installer = snap.gestion.installers.find((i) => i.id === id);
  if (!installer) notFound();
  const s = await summarize(installer, snap);
  // Refonte R1 : disponibilités (portail) et paiements (commissions) du partenaire, dans sa fiche.
  const [{ signatures, versions }, accesses, slots, pay] = await Promise.all([partnerDocuments(id), readClientAccess(id, { limit: 40, now: snap.now }), slotsPageView(id, snap.now), paymentsView(snap.now)]);
  const record = s.record ?? emptyPartner(id);
  const a = s.agreement;
  const last = a.lastSignature;
  const lastVersion = last ? versions[last.versionId] : null;
  const signedFill = last ? { partner: last.partnerFill ?? null, signer: { name: last.signerName, title: last.signerTitle, signedAt: last.signedAt } } : {};
  const allClauses = lastVersion ? listClauses(lastVersion, signedFill) : [];
  const clauses = allClauses.map((c) => ({ ref: c.ref, title: c.label === `article ${c.ref}` ? c.articleTitle : `${c.label} · ${c.articleTitle}`, text: c.text }));
  const perf = s.performance;
  const req = a.request;
  const lastSend = req?.sends.at(-1);
  const now = snap.now;
  const ended = endedOf(record, now);
  const phase = terminationPhase(record, now);
  const termination = record.termination ?? null;
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

  /* ---------------- Conformité C3 ---------------- */
  const settings = snap.partners.settings;
  const master = masterAgreementInForce(snap.partners);
  const cs = complianceSnapshot(record, settings, now, installer.rbq);
  const docOf = (k: ComplianceKind) => (k === "automobile" ? (record.compliance.automobile ?? emptyDoc()) : record.compliance[k]);
  const readiness = a.version ? partnerReadiness(a.version, partnerAgreementValues(installer, record)) : null;
  const refVersion = lastVersion ?? a.version;
  const refClauses = refVersion ? (lastVersion ? allClauses : listClauses(refVersion)) : [];
  const articleText = (n: string) => refClauses.filter((c) => c.articleNumber === n);
  const annexD = refVersion?.annexes?.find((an) => an.letter === PRIVACY_ANNEX) ?? null;
  const nc = nonCircumvention(snap.gestion.jobs, id);
  const jobNumber = (jobId: string) => snap.gestion.jobs.find((j) => j.id === jobId)?.number;
  const preview = { sans: terminationDates("sans-motif", now), defaut: terminationDates("motif-defaut", now) };
  const upload = (kind: string, label: string, fileId?: string, fileName?: string, halocarbonId?: string) => (
    <form action="/gestion/api/partenaires/conformite" method="post" encType="multipart/form-data" className="pa-upload">
      <input type="hidden" name="installerId" value={id} />
      <input type="hidden" name="kind" value={kind} />
      {halocarbonId ? <input type="hidden" name="halocarbonId" value={halocarbonId} /> : null}
      <input type="file" name="file" accept="application/pdf,image/*" aria-label={`Document : ${label}`} />
      <button type="submit" className="k-btn">
        Téléverser
      </button>
      {fileId ? (
        <a href={`/gestion/api/partenaires/fichier/${fileId}`} target="_blank" rel="noreferrer" className="k-link">
          <FileText size={14} aria-hidden /> {fileName ?? "Document"}
        </a>
      ) : null}
    </form>
  );
  const clauseList = (list: typeof refClauses) =>
    list.length ? (
      <ul className="pa-history" style={{ marginTop: 8 }}>
        {list.map((c) => (
          <li key={c.ref}>{c.text}</li>
        ))}
      </ul>
    ) : null;
  const noticeDays = termination && (phase === "preavis" || phase === "correction") ? Math.max(0, daysBetweenYmd(localYmd(now), termination.effectiveOn)) : null;
  const noticeTotal = termination ? Math.max(1, daysBetweenYmd(termination.receivedOn, termination.effectiveOn)) : 1;

  /* ---------------- Refonte R1 : formulaire de l'installateur, disponibilités, paiements ---------------- */
  const cities = siteCities().map(({ slug, name, region, lat, lon }) => ({ slug, name, region, lat, lon }));
  const slotRow = slots.installers.find((i) => i.id === id) ?? null;
  const slotDays = slots.selected?.days ?? [];
  const payRow = pay.installers.find((i) => i.id === id) ?? null;
  const invoices = pay.rows.filter((r) => r.installerId === id);
  const lateInvoices = invoices.filter((r) => r.state === "en-retard").length;
  const day = (iso: string) => formatDay(localYmd(iso));

  const tabs: TabDef[] = [
    { id: "identite", label: "Identité", count: idProblems.missing.length || undefined, hot: idProblems.missing.length > 0 },
    { id: "conformite", label: "Conformité" },
    { id: "entente", label: "Entente" },
    { id: "performance", label: "Performance" },
    { id: "disponibilites", label: "Disponibilités", count: slotRow?.free || undefined },
    { id: "paiements", label: "Paiements", count: lateInvoices || undefined, hot: lateInvoices > 0 },
    { id: "historique", label: "Historique" },
  ];

  /* ---------------- Panneaux ---------------- */

  const identite = (
    <div className="kt-cols">
      <section aria-label="Coordonnées, zone et marques">
        <p className="k-eyebrow" style={{ marginTop: 0 }}>
          Installateur · ajouté le {longDate(installer.createdAt)}
        </p>
        <InstallerForm
          brands={brandOptions()}
          cities={cities}
          initial={{
            id: installer.id,
            company: installer.company,
            contactName: installer.contactName,
            phone: installer.phone,
            email: installer.email,
            rbq: installer.rbq,
            basePostalCode: installer.basePostalCode,
            radiusKm: installer.radiusKm,
            extraRegions: installer.extraRegions,
            brands: installer.brands,
            systemTypes: installer.systemTypes,
            active: installer.active,
            maxOpenJobs: installer.maxOpenJobs,
            notes: installer.notes,
            base: installer.base ? { lat: installer.base.lat, lon: installer.base.lon, city: installer.base.city } : null,
          }}
        />
      </section>
      <div className="pa-stack">
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
      </div>
    </div>
  );

  const conformite = (
    <div className="pa-stack">
      <Card id="conformite" title="Conformité" sub={`Alerte ${settings.alertDays} jours avant l’expiration · aucune offre si expirée ou insuffisante${master ? " · exigences de l’entente maître en vigueur" : ""}`}>
        <div className="pa-docs">
          {(["rbq", "assurance", "automobile"] as ComplianceKind[]).map((kind) => {
            const doc = docOf(kind);
            const state = docState(doc, now, settings.alertDays);
            const amount = kind === "assurance" ? cs.liability : kind === "automobile" ? cs.auto : null;
            return (
              <div key={kind} className="pa-doc">
                <div className="pa-doc__head">
                  <b>{COMPLIANCE_LABELS[kind]}</b>
                  <span className="pa-chips">
                    <DocChip state={state} expiresOn={doc.expiresOn} />
                    {amount ? (
                      <Chip tone={AMOUNT_TONE[amount.amountState]}>{amount.amountState === "manquant" ? "Montant à saisir" : `${money(amount.amount!)}${amount.amountState === "insuffisant" ? " : insuffisant" : ""}`}</Chip>
                    ) : null}
                    {kind === "automobile" && !cs.auto.required ? <Chip tone="muted">Non exigée</Chip> : null}
                  </span>
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
                  {kind === "rbq" ? (
                    <div className="g-field">
                      <label className="g-label" htmlFor="rbq-subs">
                        Sous-catégories détenues <small>(ex. 15.9, 15.10, 16)</small>
                      </label>
                      <input id="rbq-subs" name="subcategories" className="g-input" defaultValue={(doc.subcategories ?? []).join(", ")} maxLength={200} />
                      <span className="g-hint">
                        {cs.rbq.subcategoriesSource === "registre" ? `Au registre de la RBQ : ${cs.rbq.subcategories.join(", ")} (elles priment sur la saisie).` : cs.rbq.subcategories.length ? `Retenues : ${cs.rbq.subcategories.join(", ")}.` : "Aucune : l’entente ne peut pas être envoyée sans elles."}
                      </span>
                    </div>
                  ) : (
                    <div className="g-row g-row--2">
                      <div className="g-field">
                        <label className="g-label" htmlFor={`${kind}-issuer`}>
                          Assureur
                        </label>
                        <input id={`${kind}-issuer`} name="issuer" className="g-input" defaultValue={doc.issuer} maxLength={120} />
                      </div>
                      <div className="g-field">
                        <label className="g-label" htmlFor={`${kind}-amount`}>
                          Montant de la couverture <small>(minimum {money(amount!.min)})</small>
                        </label>
                        <input id={`${kind}-amount`} name="amount" className="g-input" inputMode="numeric" defaultValue={typeof doc.amount === "number" ? money(doc.amount).replace(" $", "") : ""} placeholder="2 000 000" maxLength={20} />
                      </div>
                    </div>
                  )}
                  {kind === "assurance" ? (
                    <div className="g-field">
                      <label className="g-label" htmlFor="ins-cov">
                        Couverture <small>(telle qu’au certificat : produits et travaux terminés, responsabilité croisée…)</small>
                      </label>
                      <input id="ins-cov" name="coverage" className="g-input" defaultValue={doc.coverage} maxLength={120} />
                    </div>
                  ) : null}
                </ActionForm>
                {upload(kind, COMPLIANCE_LABELS[kind], doc.fileId, doc.fileName)}

                {kind === "assurance" ? (
                  <div className="pa-sub" style={{ marginTop: 12 }}>
                    <div className="pa-sub__head">
                      <b>Avenant d’assuré additionnel</b>
                      <Chip tone={cs.endorsement.ok ? "ok" : cs.endorsement.required && master ? "bad" : "warn"} dot>
                        {cs.endorsement.ok ? "Reçu" : cs.endorsement.confirmed ? "Document à téléverser" : cs.endorsement.required ? "Manquant" : "Non exigé"}
                      </Chip>
                    </div>
                    <p className="pa-min">La plateforme doit être désignée assurée additionnelle par un avenant, pas un simple certificat.</p>
                    <ActionForm action={endorsementAction.bind(null, id)} submit="Enregistrer" pending="…">
                      <label className="g-check">
                        <input type="checkbox" name="confirmed" value="1" defaultChecked={Boolean(record.additionalInsured?.confirmed)} /> Avenant reçu : la plateforme y est désignée assurée additionnelle
                      </label>
                      <div className="g-field">
                        <label className="g-label" htmlFor="ai-date">
                          Date de l’avenant
                        </label>
                        <input id="ai-date" name="date" type="date" className="g-input" defaultValue={record.additionalInsured?.date ?? ""} />
                      </div>
                    </ActionForm>
                    {upload("avenant", "Avenant d’assuré additionnel", record.additionalInsured?.fileId, record.additionalInsured?.fileName)}
                  </div>
                ) : null}
              </div>
            );
          })}

          <div className="pa-doc">
            <div className="pa-doc__head">
              <b>Qualification environnementale (halocarbures)</b>
              <Chip tone={cs.halocarbons.ok ? "ok" : cs.halocarbons.required && (master || cs.halocarbons.total) ? "bad" : "warn"} dot>
                {cs.halocarbons.ok ? `${cs.halocarbons.valid} attestation${cs.halocarbons.valid > 1 ? "s" : ""} valide${cs.halocarbons.valid > 1 ? "s" : ""}` : cs.halocarbons.total ? "Aucune valide" : "À saisir"}
              </Chip>
            </div>
            <p className="pa-min">Chaque personne qui manipule des halocarbures détient une attestation valide.</p>
            {record.halocarbons?.length ? (
              <ul className="pa-certs">
                {record.halocarbons.map((c) => {
                  const hs = halocarbonState(c, now, settings.alertDays);
                  return (
                    <li key={c.id} className="pa-cert">
                      <div className="pa-cert__row">
                        <b>{c.holder}</b>
                        <Chip tone={hs === "valide" ? "ok" : hs === "bientot" ? "warn" : "bad"} dot>
                          {hs === "valide" ? "Valide" : hs === "bientot" ? "Expire bientôt" : hs === "expiree" ? "Expirée" : "Numéro à saisir"}
                        </Chip>
                      </div>
                      <span className="g-hint" style={{ margin: 0 }}>
                        N° {c.number}
                        {c.issuedOn ? ` · délivrée le ${ymdLong(c.issuedOn)}` : ""}
                        {c.expiresOn ? ` · expire le ${ymdLong(c.expiresOn)}` : ""}
                      </span>
                      {upload("halocarbure", `Attestation de ${c.holder}`, c.fileId, c.fileName, c.id)}
                      <ActionButton action={halocarbonRemoveAction.bind(null, id, c.id)} className="k-btn k-btn--ghost" confirm={`Retirer l’attestation de ${c.holder} ?`} pending="…">
                        Retirer
                      </ActionButton>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            <details className="g-details">
              <summary>Ajouter une attestation</summary>
              <ActionForm action={halocarbonAddAction.bind(null, id)} submit="Ajouter" pending="…">
                <div className="g-row g-row--2">
                  <div className="g-field">
                    <label className="g-label" htmlFor="h-holder">
                      Personne
                    </label>
                    <input id="h-holder" name="holder" className="g-input" maxLength={120} required />
                  </div>
                  <div className="g-field">
                    <label className="g-label" htmlFor="h-number">
                      Numéro de l’attestation
                    </label>
                    <input id="h-number" name="number" className="g-input" maxLength={60} required />
                  </div>
                </div>
                <div className="g-row g-row--2">
                  <div className="g-field">
                    <label className="g-label" htmlFor="h-issued">
                      Délivrée le
                    </label>
                    <input id="h-issued" name="issuedOn" type="date" className="g-input" />
                  </div>
                  <div className="g-field">
                    <label className="g-label" htmlFor="h-exp">
                      Expire le <small>(si indiqué)</small>
                    </label>
                    <input id="h-exp" name="expiresOn" type="date" className="g-input" />
                  </div>
                </div>
              </ActionForm>
            </details>
          </div>
        </div>
      </Card>
      {/* Chantier R : licence RBQ au fichier ouvert (verdict, levée manuelle, registre public). */}
      <RbqRegistryCard installerId={id} number={record.compliance.rbq.number || installer.rbq} check={record.rbqVerification ?? null} />
      {/* Conformité C1 : paiement du client et sous-catégories RBQ, exigés pour approuver un contrat. */}
      <PartnerContractCard installerId={id} verification={record.rbqVerification ?? null} />
    </div>
  );

  const entente = (
    <div className="pa-grid">
      <div className="pa-stack">
        <Card id="entente" title="Entente de partenariat" sub={a.version ? `Version ${a.version.number} en vigueur${a.version.source?.kind === "trousse" ? " · entente maître" : ""}` : "Aucune version publiée"} action={<AgreementChip state={a} />}>
          {a.version ? (
            <>
              <ol className="pa-steps">
                <li className={lastSend || a.signature ? "is-done" : "is-now"}>
                  <b>Envoyée</b>
                  {lastSend ? `${relative(lastSend.at, now)} · ${req?.sends.length ?? 0} envoi${(req?.sends.length ?? 0) > 1 ? "s" : ""}` : a.signature ? "—" : "pas encore"}
                </li>
                <li className={req?.openedAt || a.signature ? "is-done" : lastSend ? "is-now" : ""}>
                  <b>Ouverte</b>
                  {req?.openedAt ? `${relative(req.openedAt, now)} · ${req.openCount} fois` : a.signature ? "—" : "pas encore"}
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
              {/* Conformité C3 : champs de l'installateur insérés dans « Entre les parties » à l'envoi (sa fiche), puis à la signature. */}
              {readiness && readiness.fields.length && !a.signature ? (
                <div className="pa-sub" style={{ marginBottom: 12 }}>
                  <div className="pa-sub__head">
                    <b>Champs de l’installateur dans l’entente</b>
                    <Chip tone={readiness.ready ? "ok" : "warn"} dot>
                      {readiness.ready ? "Prêts pour l’envoi" : "À compléter avant l’envoi"}
                    </Chip>
                  </div>
                  <ul className="pa-fields">
                    {readiness.fields.map((f) => (
                      <li key={f.key}>
                        <span>
                          <code>[{f.key}]</code>
                          <small>{f.atSigning ? "inscrit par le signataire à la signature" : f.value ? f.value : `à compléter : ${partnerTokenHint(f.key)}`}</small>
                        </span>
                        <Chip tone={f.atSigning ? "blue" : f.value ? "ok" : "bad"}>{f.atSigning ? "signature" : f.value ? "rempli" : "manquant"}</Chip>
                      </li>
                    ))}
                  </ul>
                  {readiness.problems.length ? <p className="g-hint" style={{ margin: 0 }}>{readiness.problems.join(" ; ")}.</p> : null}
                  <ActionForm action={legalFormAction.bind(null, id)} submit="Enregistrer" pending="…">
                    <div className="g-field">
                      <label className="g-label" htmlFor="legalForm">
                        Forme juridique de l’installateur <small>(ex. société par actions)</small>
                      </label>
                      <input id="legalForm" name="legalForm" className="g-input" defaultValue={record.legalForm ?? ""} maxLength={120} />
                    </div>
                  </ActionForm>
                </div>
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

        {/* Conformité C3 : annexe D (traitement des renseignements) et journal des accès aux dossiers clients. */}
        <Card title="Renseignements personnels" sub={annexD ? `Annexe ${annexD.letter} de l’entente${lastVersion ? " signée" : " en vigueur"} : obligations du partenaire` : "Obligations de traitement : annexe de l’entente maître"} action={<LockKeyhole size={18} aria-hidden />}>
          {annexD ? (
            <div className="pa-annex">
              <dl>
                {annexD.table.slice(1).map((row, i) => (
                  <div key={i}>
                    <dt>{row[0]}</dt>
                    <dd>{row.slice(1).join(" — ")}</dd>
                  </div>
                ))}
                {annexD.paragraphs.map((p, i) => (
                  <dd key={`p${i}`}>{p}</dd>
                ))}
              </dl>
              {articleText(ARTICLES.privacy).length ? (
                <details className="g-details">
                  <summary>Article {ARTICLES.privacy} de l’entente</summary>
                  {clauseList(articleText(ARTICLES.privacy))}
                </details>
              ) : null}
            </div>
          ) : (
            <p className="g-hint" style={{ marginTop: 0 }}>Publiez l’entente maître pour afficher ici les obligations de traitement des renseignements.</p>
          )}
          <p className="k-eyebrow" style={{ marginTop: 14 }}>
            Accès aux dossiers clients ({accesses.length})
          </p>
          {accesses.length ? (
            <ul className="pa-history">
              {accesses.map((x, i) => (
                <li key={`${x.at}-${i}`}>
                  Job n° {x.jobNumber ?? jobNumber(x.jobId) ?? "—"} · {ACCESS_VIA_LABELS[x.via]}
                  <small>
                    {longDateTime(x.at)}
                    {x.ip ? ` · ${x.ip}` : ""}
                  </small>
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint" style={{ margin: 0 }}>
              Aucun accès noté. Chaque ouverture d’un dossier client (offre acceptée, page de chantier) est notée ici. Les offres refusées ou retirées ne montrent plus aucun détail au partenaire.
            </p>
          )}
        </Card>
      </div>

      <aside className="pa-stack">
        <Card title="Citer une clause" sub="« Selon l’article 2.24 de l’entente signée le … » : envoyé au partenaire.">
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

        {/* Conformité C3 : fin du partenariat (préavis de 30 jours sans motif, défaut non corrigé, fin immédiate pour motif). */}
        <Card id="fin" title="Fin du partenariat" sub="Décision du propriétaire, conservée à l’historique et au journal d’audit.">
          {ended ? (
            <>
              <p className="g-alert" style={{ marginTop: 0 }}>
                Terminé le {longDate(ended.at)}
                {termination && !termination.cancelledAt ? ` · ${TERMINATION_MODE_LABELS[termination.mode].toLowerCase()}` : ""}
                {ended.reason ? ` : « ${ended.reason} »` : ""}
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
          ) : termination && (phase === "preavis" || phase === "correction" || phase === "a-confirmer") ? (
            <div className="cr-stack">
              <div className="pa-notice">
                <span className="k-eyebrow" style={{ margin: 0 }}>
                  <Hourglass size={13} aria-hidden style={{ verticalAlign: -2 }} /> {TERMINATION_MODE_LABELS[termination.mode]}
                </span>
                {noticeDays !== null ? (
                  <div className="pa-notice__count">
                    <b>{noticeDays}</b>
                    <span>jour{noticeDays > 1 ? "s" : ""} avant le {ymdLong(termination.effectiveOn)}</span>
                  </div>
                ) : (
                  <b>Délai de correction écoulé le {ymdLong(termination.effectiveOn)}</b>
                )}
                <div className="pa-notice__bar" aria-hidden>
                  <i style={{ ["--p" as string]: noticeDays === null ? 1 : Math.min(1, Math.max(0, 1 - noticeDays / noticeTotal)) }} />
                </div>
                <span className="g-hint" style={{ margin: 0 }}>
                  Avis {termination.initiatedBy === "partenaire" ? "reçu du partenaire" : "de la plateforme"} le {longDateTime(termination.noticeAt)} · réputé reçu le {ymdLong(termination.receivedOn)}
                  {termination.notice ? ` · courriel ${SEND_LABELS[termination.notice.email]}` : ""}
                  {termination.reason ? ` · « ${termination.reason} »` : ""}. Nouvelles offres suspendues ; les projets acceptés se poursuivent.
                </span>
              </div>
              {phase === "a-confirmer" ? (
                <ActionButton action={confirmTerminationAction.bind(null, id)} className="g-btn g-btn--danger" confirm="Confirmer la fin du partenariat ? Plus aucune offre ne lui sera envoyée." pending="…">
                  Défaut non corrigé : confirmer la fin
                </ActionButton>
              ) : null}
              <details className="g-details">
                <summary>{termination.mode === "motif-defaut" ? "Défaut corrigé : annuler l’avis" : "Annuler le préavis"}</summary>
                <ActionForm action={cancelNoticeAction.bind(null, id)} submit="Annuler l’avis" pending="…">
                  <input name="reason" className="g-input" maxLength={500} placeholder="Raison (facultative)" aria-label="Raison" />
                </ActionForm>
              </details>
            </div>
          ) : (
            <ActionForm action={noticeAction.bind(null, id)} submit="Mettre fin au partenariat" submitClass="g-btn g-btn--danger" pending="…">
              <div className="pa-modes" role="radiogroup" aria-label="Type de fin">
                <label className="pa-mode">
                  <input type="radio" name="mode" value="sans-motif" defaultChecked />
                  <span>
                    <b>Sans motif, préavis de {NOTICE_DAYS} jours</b>
                    <small>Fin le {ymdLong(preview.sans.effectiveOn)} (avis réputé reçu le {ymdLong(preview.sans.receivedOn)}). Nouvelles offres suspendues pendant le préavis.</small>
                  </span>
                </label>
                <label className="pa-mode">
                  <input type="radio" name="mode" value="motif-defaut" />
                  <span>
                    <b>Pour motif : défaut à corriger en {CURE_DAYS} jours</b>
                    <small>Correction attendue avant le {ymdLong(preview.defaut.effectiveOn)} ; ensuite, vous confirmez la fin ou annulez l’avis.</small>
                  </span>
                </label>
                <label className="pa-mode">
                  <input type="radio" name="mode" value="motif-immediat" />
                  <span>
                    <b>Pour motif : fin immédiate</b>
                    <small>Dans les cas prévus à l’article {ARTICLES.termination} de l’entente.</small>
                  </span>
                </label>
              </div>
              <div className="g-field">
                <label className="g-label" htmlFor="n-initiated">
                  Avis donné par
                </label>
                <select id="n-initiated" name="initiatedBy" className="g-select" defaultValue="plateforme">
                  <option value="plateforme">La plateforme</option>
                  <option value="partenaire">Le partenaire (avis reçu)</option>
                </select>
              </div>
              <div className="g-field">
                <label className="g-label" htmlFor="end-reason">
                  Motif ou défaut <small>(sans motif : raison interne, jamais écrite dans l’avis)</small>
                </label>
                <textarea id="end-reason" name="reason" className="g-textarea" maxLength={1000} style={{ minHeight: 80 }} placeholder="Ex. : trois appels de service dus à la main-d’œuvre en deux mois, voir billets 4, 7 et 9." />
              </div>
              <label className="g-check">
                <input type="checkbox" name="notify" value="1" defaultChecked /> Envoyer l’avis au partenaire par courriel (copie au courriel du propriétaire)
              </label>
              <label className="g-check">
                <input type="checkbox" name="confirm" value="1" /> Je confirme : plus aucune nouvelle offre ne lui sera envoyée
              </label>
              {articleText(ARTICLES.termination).length ? (
                <details className="g-details">
                  <summary>Texte de l’article {ARTICLES.termination}</summary>
                  {clauseList(articleText(ARTICLES.termination))}
                </details>
              ) : null}
            </ActionForm>
          )}
          {/* Rappel du non-contournement : information seulement, aucune automatisation punitive. */}
          <div className="pa-info" style={{ marginTop: 14 }}>
            <b>
              <Info size={14} aria-hidden style={{ verticalAlign: -2 }} /> Non-contournement ({NON_CIRCUMVENTION_MONTHS} mois)
            </b>
            <p style={{ margin: "6px 0 0" }}>
              {nc.clients
                ? `${nc.clients} client${nc.clients > 1 ? "s" : ""} introduit${nc.clients > 1 ? "s" : ""}.${nc.until ? ` Période en cours jusqu’au ${ymdLong(nc.until)} au moins` : ""}${nc.ongoing ? `${nc.until ? " ; " : " "}${nc.ongoing} projet${nc.ongoing > 1 ? "s" : ""} en cours : la période court ${NON_CIRCUMVENTION_MONTHS} mois après leur fin` : ""}.`
                : "Aucun client introduit pour l’instant."}{" "}
              Rappel à titre d’information : entretien et garantie exclus, nouvelles ventes incluses. Rien n’est déclenché automatiquement.
            </p>
            {articleText(ARTICLES.nonCircumvention).length ? (
              <details className="g-details">
                <summary>Texte de l’article {ARTICLES.nonCircumvention}</summary>
                {clauseList(articleText(ARTICLES.nonCircumvention))}
              </details>
            ) : null}
          </div>
        </Card>
      </aside>
    </div>
  );

  const performance = (
    <div className="pa-grid">
      <div className="pa-stack">
        <Card title="Performance" sub={`Niveau ${TIER_LABELS[perf.tier]}${perf.override ? " (imposé)" : " (automatique)"} · points au classement : ${settings.tierPoints[perf.tier] > 0 ? "+" : ""}${settings.tierPoints[perf.tier]}`} action={<TierChip tier={perf.tier} imposed={Boolean(perf.override)} />}>
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
            {/* Conformité C3 : délais de service (accusé de réception, visite) de l'annexe E. */}
            <div className="pa-metric">
              <span>Service</span>
              <b>{pctText(perf.service.ack.rate)}</b>
              <small>
                accusés à temps · {perf.service.ack.n} sur {perf.service.ack.of}
                {perf.service.visit.of ? ` · visites à temps ${perf.service.visit.n}/${perf.service.visit.of}` : ""}
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
      </div>
      <aside className="pa-stack">
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
      </aside>
    </div>
  );

  // Refonte R1 : disponibilités du portail (chantier P), gérées en détail dans Créneaux.
  const disponibilites = (
    <Card
      title="Disponibilités"
      sub="Moments libres offerts aux clients dans leur espace ; un moment réservé porte le numéro du job."
      action={
        <Link href={`/gestion/creneaux?installateur=${id}`} className="k-btn">
          <CalendarClock size={15} aria-hidden /> Gérer ses moments
        </Link>
      }
    >
      <div className="pa-perf">
        <div className="pa-metric">
          <span>Libres</span>
          <b>{slotRow?.free ?? 0}</b>
          <small>réservables par un client</small>
        </div>
        <div className="pa-metric">
          <span>Réservés</span>
          <b>{slotRow?.booked ?? 0}</b>
          <small>à venir</small>
        </div>
        <div className="pa-metric">
          <span>Clients qui attendent</span>
          <b>{slotRow?.waiting ?? 0}</b>
          <small>job attribué, sans date</small>
        </div>
        <div className="pa-metric">
          <span>Prochain moment libre</span>
          <b style={{ fontSize: 17 }}>{slotRow?.nextFree ? formatDay(slotRow.nextFree.day) : "—"}</b>
          <small>{slotRow?.nextFree?.window ?? (installer.active ? "aucun" : "installateur en pause")}</small>
        </div>
      </div>
      {slotDays.length ? (
        <ul className="pa-history" style={{ marginTop: 14 }}>
          {slotDays.slice(0, 14).map((d) => (
            <li key={d.day}>
              <b>{formatDay(d.day)}</b> · {d.slots.map((x) => (x.booked ? `${x.window} (job n° ${x.booked.jobNumber})` : x.window)).join(", ")}
            </li>
          ))}
        </ul>
      ) : (
        <p className="g-hint" style={{ marginBottom: 0 }}>
          Aucun moment à venir.
        </p>
      )}
      {installer.active && !ended ? (
        <div style={{ marginTop: 14 }}>
          <AvailabilityLinkButton installerId={id} />
          <p className="g-hint">Il reçoit son lien « Mes disponibilités » pour ajouter ses moments.</p>
        </div>
      ) : null}
    </Card>
  );

  // Refonte R1 : paiements (volet B) de ce partenaire ; la liste complète et les réglages restent dans Paiements.
  const paiements = (
    <Card
      title="Paiements"
      sub="Factures de commission de ce partenaire : à recevoir, en retard, payées."
      action={
        <Link href="/gestion/paiements" className="k-btn">
          Tous les paiements
        </Link>
      }
    >
      <div className="pa-perf">
        <div className="pa-metric">
          <span>À recevoir</span>
          <b>{dollars(payRow?.outstandingCents ?? 0)}</b>
          <small>{plural(invoices.filter((r) => r.state === "a-recevoir" || r.state === "en-retard").length, "facture ouverte", "factures ouvertes")}</small>
        </div>
        <div className="pa-metric">
          <span>En retard</span>
          <b style={payRow?.overdueCents ? { color: "var(--g-bad)" } : undefined}>{dollars(payRow?.overdueCents ?? 0)}</b>
          <small>{plural(lateInvoices, "facture", "factures")}</small>
        </div>
        <div className="pa-metric">
          <span>Délai moyen</span>
          <b>{payRow?.avgDaysToPay !== null && payRow?.avgDaysToPay !== undefined ? `${String(payRow.avgDaysToPay).replace(".", ",")} j` : "—"}</b>
          <small>de l’émission au paiement</small>
        </div>
        <div className="pa-metric">
          <span>Payées à temps</span>
          <b>{payRow?.onTimeRate !== null && payRow?.onTimeRate !== undefined ? pct(payRow.onTimeRate) : "—"}</b>
          <small>{plural(payRow?.paidCount ?? 0, "facture payée", "factures payées")}</small>
        </div>
        <div className="pa-metric">
          <span>Offres</span>
          <b style={{ fontSize: 17 }}>{payRow?.paused ? "En pause" : "Actives"}</b>
          <small>{payRow?.paused ? "retard de paiement" : "aucun blocage de paiement"}</small>
        </div>
      </div>
      {invoices.length ? (
        <div style={{ marginTop: 14 }}>
          <DataTable
            label="Factures de commission"
            columns={[
              { key: "num", label: "Facture", width: "1.3fr" },
              { key: "due", label: "Échéance ou paiement", width: "1fr" },
              { key: "total", label: "Total", width: "120px", align: "end" },
              { key: "state", label: "État", width: "130px", align: "end" },
            ]}
            rows={invoices.map((r) => ({
              key: r.id,
              href: `/gestion/paiements/${r.id}`,
              cells: {
                num: (
                  <span>
                    <strong>{r.number}</strong>
                    <small className="g-hint" style={{ display: "block", margin: 0 }}>
                      Job n° {r.jobNumber}
                      {r.jobLabel ? ` · ${r.jobLabel}` : ""}
                    </small>
                  </span>
                ),
                due: r.paidOn ? `Payée le ${formatDay(r.paidOn)}` : r.state === "annulee" ? "—" : `${day(r.dueAt)}${r.daysOverdue ? ` · ${plural(r.daysOverdue, "jour", "jours")} de retard` : ""}`,
                total: <span className="k-money">{dollars(r.totalCents)}</span>,
                state: (
                  <Chip tone={STATE_TONE[r.state]} dot>
                    {INVOICE_STATE_LABELS[r.state]}
                  </Chip>
                ),
              },
            }))}
          />
        </div>
      ) : (
        <p className="g-hint" style={{ marginBottom: 0 }}>
          Aucune facture de commission pour l’instant.
        </p>
      )}
    </Card>
  );

  const historique = (
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
  );

  const initial = sp.onglet ?? (sp.nouveau ? "entente" : undefined);

  return (
    <>
      <Reveal>
        <header className="pa-hero">
          <HeroArcs />
          <Link href="/gestion/partenaires" className="pa-hero__back">
            <ChevronLeft size={16} aria-hidden /> Installateurs
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
            <Chip tone={ended ? "bad" : phase === "preavis" || phase === "correction" || phase === "a-confirmer" ? "warn" : installer.active ? "ok" : "muted"} dot>
              {ended ? "Partenariat terminé" : phase && phase !== "annulee" && phase !== "terminee" ? TERMINATION_PHASE_LABELS[phase] : installer.active ? "Actif" : "En pause"}
            </Chip>
          </div>
        </header>
      </Reveal>

      {sp.nouveau ? (
        <p className="g-alert g-alert--ok" role="status" style={{ marginBottom: 16 }}>
          Installateur ajouté. Prochaine étape : envoyer l’entente, puis saisir la licence RBQ et les assurances.
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
        <Reveal className="pa-banner">
          <ShieldCheck size={22} aria-hidden />
          <div>
            <b>Offres de jobs permises</b>
            <p>{a.code === "aucune-version" ? "Aucune entente n’est encore en vigueur : la signature n’est pas encore exigée." : a.code === "signee" ? "Entente signée, documents en règle." : `Délai de grâce jusqu’au ${a.graceUntil ? longDate(a.graceUntil) : "—"} pour signer la version en vigueur.`}</p>
          </div>
        </Reveal>
      )}

      <Tabs label={`Fiche de ${installer.company}`} tabs={tabs} initial={initial} panels={{ identite, conformite, entente, performance, disponibilites, paiements, historique }} />
    </>
  );
}
