/* ==================================================================
   Fiche client : tout ce qu'on sait de la personne, réuni depuis les
   demandes, appels, textos, soumissions, jobs et courriels. Seule page
   de l'outil (avec la conversation texto) où le numéro et le courriel
   s'affichent en entier.
   Refonte R1 : en-tête (identité, étape, Appeler, Texto, Courriel,
   Résumer, faits) puis six onglets : Aperçu, Historique, Soumission et
   contrat, Chantier et photos, Argent (propriétaire seulement),
   Messages. Les cartes sont DÉPLACÉES, pas retirées ; les rôles du
   chantier V sont inchangés (owner : propriétaire ; staff :
   propriétaire et adjoints). ?onglet=… ouvre un onglet ; #ancre ouvre
   l'onglet de la carte.
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowUpRight, ChevronLeft, FileText, LifeBuoy, Mail, MapPin, MessageSquare, Phone, Scale, Wrench } from "lucide-react";
import { requireUser } from "@/lib/gestion/auth/dal";
import { clientPage } from "@/lib/gestion/crm/service";
import { paymentsView } from "@/lib/gestion/commissions/service";
import { INVOICE_STATE_LABELS } from "@/lib/gestion/commissions/types";
// Chantier V : fiche ouverte à tous les rôles ; un vendeur n'ouvre que SES clients (index restreint : 404 sinon).
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { AssignCard } from "@/components/gestion/equipe/AssignCard";
import { addNoteAction } from "../../crm-actions";
import { Avatar } from "@/components/gestion/kit/Avatar";
import { Card } from "@/components/gestion/kit/Card";
import { Chip, StageChip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { dollars, plural } from "@/components/gestion/kit/format";
import { Tabs, type TabDef } from "@/components/gestion/kit/Tabs";
import { MergeSheet, SplitSheet, StageChanger } from "@/components/gestion/crm/ClientTools";
import { NoteForm, TaskForm } from "@/components/gestion/crm/forms";
import { TaskList } from "@/components/gestion/crm/TaskList";
import { Timeline } from "@/components/gestion/crm/Timeline";
import { StatusPill } from "@/components/gestion/ui";
// Volet C : tâches à étapes, ThermoMatch → soumission, consentement à la relance de saison.
import { ComplexTasksCard } from "@/components/gestion/ventes/ComplexTasks";
import { SeasonConsentCard } from "@/components/gestion/ventes/SeasonConsent";
import { ThermoMatchPanel } from "@/components/gestion/ventes/ThermoMatch";
import { QuoteStatus } from "@/components/gestion/soumissions/ui";
import { ApresVentePanel } from "@/components/gestion/argent/ApresVentePanel";
import { STATE_TONE } from "@/components/gestion/argent/labels";
import { ClientPhotoDossier } from "@/components/partenaires/admin/ClientPhotoDossier"; // volet A
import { AdsClientPanel } from "@/components/gestion/publicite/AdsClientPanel"; // pilote publicitaire : consentement, clic, ventes renvoyées
// Chantier T : appel masqué (numéro du site) et carte « Appels et textos ».
import { MaskedCallButton } from "@/components/gestion/telephonie/CallButton";
import { ClientTelephonieCard } from "@/components/gestion/telephonie/ClientTelephonieCard";
// Chantier A : bouton « Résumer » (assistant IA) et coût d'acquisition (rentabilité réelle).
import { AssistantSummarizeButton } from "@/components/gestion/assistant/SummarizeButton";
import { AcquisitionCard } from "@/components/gestion/rentabilite/AcquisitionCard";
// Chantier D : visite photo à distance (carte « Photos du client » et « Photos reçues » dans la chronologie).
import { ClientVisitsCard } from "@/components/gestion/visites/ClientVisitsCard";
import { withVisitItems } from "@/lib/visites/timeline";
// Conformité C1 : parcours du contrat (va de l'avant, installateur, approbation, signature, copies, avenants).
import { ParcoursPanel } from "@/components/contrats/ParcoursPanel";
import "@/components/gestion/soumissions/soumissions.css";
import "@/components/gestion/argent/argent.css";

export const metadata: Metadata = { title: "Client" };

const FLASH: Record<string, string> = { cree: "Fiche créée.", fusion: "Fiches fusionnées : tout est réuni ici.", separe: "Nouvelle fiche créée pour l’autre personne." };

/** Refonte R1 (onglet Argent, propriétaire) : factures de commission des jobs du client. */
async function ClientCommissions({ jobIds }: { jobIds: string[] }) {
  const rows = jobIds.length ? (await paymentsView()).rows.filter((r) => jobIds.includes(r.jobId)) : [];
  return (
    <Card title="Commissions" sub="Factures de commission des installateurs pour les jobs de ce client.">
      {rows.length ? (
        <ul className="cr-linked">
          {rows.map((r) => (
            <li key={r.id}>
              <Link href={`/gestion/paiements/${r.id}`} className="cr-linked__row">
                <strong>Facture {r.number}</strong>
                <small>
                  {r.company} · job n° {r.jobNumber}
                </small>
                <span className="cr-linked__end">
                  <Chip tone={STATE_TONE[r.state]} dot>
                    {INVOICE_STATE_LABELS[r.state]}
                  </Chip>
                  <span className="k-money">{dollars(r.totalCents)}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="g-hint" style={{ margin: 0 }}>
          {jobIds.length ? "Aucune facture de commission pour l’instant." : "Aucun job : aucune commission."}
        </p>
      )}
    </Card>
  );
}

export default async function ClientPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | undefined>> }) {
  const session = await requireUser(); // Chantier V
  const owner = session.role === "proprietaire";
  const staff = session.role !== "vendeur";
  const index = await scopedIndex(session);
  const { id } = await params;
  const sp = await searchParams;
  const r = await clientPage(id, index);
  if (!r) notFound();
  if ("redirect" in r) redirect(`/gestion/clients/${r.redirect}`);
  const c = r.client;
  const flash = Object.keys(FLASH).find((k) => sp[k]);
  const phone = c.phones[0];
  const conv = c.conversations[0];
  // Chantier D : « Photos demandées » et « Photos reçues » des visites à distance, dans la chronologie.
  const timeline = await withVisitItems(c.timeline, { clientIds: [c.id], phones: c.phones.map((p) => p.e164), emails: c.emails });
  const jobIds = c.jobs.map((j) => j.id);
  const unread = c.conversations.reduce((s, t) => s + t.unread, 0);
  // Conformité C1 : parcours du contrat de la soumission envoyée la plus récente (les autres : leur propre page).
  const contractQuote = [...c.quotes].reverse().find((q) => q.sent) ?? null;

  const tabs: TabDef[] = [
    { id: "apercu", label: "Aperçu", count: c.tasks.length || undefined, hot: c.tasks.some((t) => t.overdue) },
    { id: "historique", label: "Historique" },
    { id: "soumission", label: "Soumission et contrat", count: c.quotes.length || undefined },
    { id: "chantier", label: "Chantier et photos", count: c.jobs.length || undefined },
    ...(owner ? [{ id: "argent", label: "Argent" }] : []),
    { id: "messages", label: "Messages", count: unread || undefined, hot: unread > 0 },
  ];

  /* ---------------- Aperçu ---------------- */
  const apercu = (
    <div className="kt-cols">
      <div className="cr-stack">
        {/* R2 : progression des 12 étapes, « qui doit agir » et note de priorité se branchent ici (voir crm/today.ts, priorityOf). */}
        <Card title="À faire" sub={c.tasks.length ? `${plural(c.tasks.length, "tâche ouverte", "tâches ouvertes")} · la prochaine action en premier` : "Aucune tâche ouverte"}>
          <TaskList tasks={c.tasks} showWho={false} />
          <div style={{ marginTop: c.tasks.length ? 14 : 0 }}>
            <TaskForm clientId={c.id} />
          </div>
        </Card>

        {staff ? <ComplexTasksCard clientId={c.id} /> : null}
      </div>

      <div className="cr-stack">
        <Card title="Étape" sub={`Depuis le ${c.since}`} action={<StageChanger clientId={c.id} current={c.stage} pipedriveEnabled={c.pipedriveEnabled} />}>
          {c.lost ? (
            <p className="g-hint" style={{ margin: "0 0 12px" }}>
              <strong>Perdu</strong> le {c.lost.at} : {c.lost.reason || "sans raison notée"}
              {c.lost.detail ? ` (« ${c.lost.detail} »)` : ""}. Il sera réactivé à sa prochaine demande.
            </p>
          ) : null}
          <ol className="cr-history">
            {[...c.history].reverse().slice(0, 8).map((h) => (
              <li key={h.key}>
                <StageChip stage={h.stage} size="sm" />
                <span>{h.reactivated ? "Réactivé" : h.auto ? h.label : `Choisi par ${h.by?.split("@")[0] ?? "vous"}`}</span>
                <small>
                  {h.when}
                  {h.reason ? ` · ${h.reason}` : ""}
                </small>
              </li>
            ))}
          </ol>
        </Card>

        {/* Chantier V : vendeur attribué (réattribution par le propriétaire, historique). */}
        <AssignCard clientId={c.id} session={session} index={index} />

        <Card title="Coordonnées">
          <ul className="cr-ident">
            {c.phones.map((p) => (
              <li key={p.e164}>
                <Phone size={16} aria-hidden />
                {/* Chantier T : plus de lien tel: ici (il afficherait le cellulaire du propriétaire) ; « Appeler » passe par le numéro du site. */}
                <span>{p.display}</span>
              </li>
            ))}
            {c.emails.map((e) => (
              <li key={e}>
                <Mail size={16} aria-hidden />
                <a href={`mailto:${e}`}>{e}</a>
              </li>
            ))}
            {c.address || c.city ? (
              <li>
                <MapPin size={16} aria-hidden />
                <span>{[c.address, c.city, c.postalCode].filter(Boolean).join(", ")}</span>
              </li>
            ) : null}
            {c.dealIds.map((d) => (
              <li key={d}>
                <ArrowUpRight size={16} aria-hidden />
                <a href={`https://app.pipedrive.com/deal/${d}`} target="_blank" rel="noreferrer">
                  Affaire Pipedrive n° {d}
                </a>
              </li>
            ))}
          </ul>
          {c.logisvertCents ? (
            <p className="cr-info" style={{ marginTop: 12 }}>
              <span aria-hidden>ⓘ</span>
              <span>
                Aide LogisVert attendue : <strong>{dollars(c.logisvertCents)}</strong> — versée au client par Hydro-Québec (information seulement).
              </span>
            </p>
          ) : null}
          <div className="g-actions" style={{ marginTop: 12 }}>
            {staff ? <MergeSheet clientId={c.id} name={c.name} /> : null}
            {staff && c.pieces.length > 1 ? <SplitSheet clientId={c.id} identities={c.identities} pieces={c.pieces} /> : null}
          </div>
        </Card>
      </div>
    </div>
  );

  /* ---------------- Historique ---------------- */
  const historique = (
    <div className="cr-stack">
      <Card title="Note ou appel" sub="Un appel noté compte comme « contacté ».">
        <NoteForm action={addNoteAction.bind(null, c.id)} />
      </Card>
      <Card title="Chronologie" sub="Tout ce qui s’est passé, du plus récent au plus ancien.">
        {timeline.length ? <Timeline items={timeline} /> : <EmptyState compact title="Aucun événement" />}
      </Card>
    </div>
  );

  /* ---------------- Soumission et contrat ---------------- */
  const soumission = (
    <div className="kt-cols">
      <div className="cr-stack">
        <Card
          title="Soumissions"
          action={
            <Link href={`/gestion/soumissions/nouvelle?client=${c.id}`} className="k-btn">
              <FileText size={15} aria-hidden /> Nouvelle
            </Link>
          }
        >
          {c.quotes.length ? (
            <ul className="cr-linked">
              {c.quotes.map((q) => (
                <li key={q.id}>
                  <Link href={`/gestion/soumissions/${q.id}`} className="cr-linked__row">
                    <strong>Soumission {q.number}</strong>
                    <small>{q.sent ? `Envoyée le ${q.sent}${q.views ? ` · ouverte ${q.views} fois` : ""}` : "Pas encore envoyée"}</small>
                    <span className="cr-linked__end">
                      <QuoteStatus status={q.status} />
                      <span className="k-money">{dollars(q.totalCents)}</span>
                    </span>
                  </Link>
                  {q.canCreateJob && staff ? (
                    <Link href={`/gestion/jobs/nouveau?soumission=${q.id}`} className="k-btn k-btn--primary" style={{ margin: "0 0 10px" }}>
                      <Wrench size={15} aria-hidden /> Créer le job depuis la soumission acceptée
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint" style={{ margin: 0 }}>
              Aucune soumission.
            </p>
          )}
        </Card>
        {contractQuote ? (
          <section aria-label={`Parcours du contrat, soumission ${contractQuote.number}`}>
            <ParcoursPanel quoteId={contractQuote.id} staff={staff} />
          </section>
        ) : null}
      </div>
      <div className="cr-stack">
        <ThermoMatchPanel clientId={c.id} />
      </div>
    </div>
  );

  /* ---------------- Chantier et photos ---------------- */
  const chantier = (
    <div className="kt-cols">
      <div className="cr-stack">
        <Card
          title="Jobs"
          action={
            staff ? (
              <Link href={`/gestion/jobs/nouveau?client=${c.id}`} className="k-btn">
                <Wrench size={15} aria-hidden /> Nouveau
              </Link>
            ) : undefined
          }
        >
          {c.jobs.length ? (
            <ul className="cr-linked">
              {c.jobs.map((j) => (
                <li key={j.id}>
                  <Link href={staff ? `/gestion/jobs/${j.id}` : "/gestion/agenda"} className="cr-linked__row">
                    <strong>Job n° {j.number}</strong>
                    <small>{[j.installer, j.when ? `prévu le ${j.when}` : null].filter(Boolean).join(" · ") || "Pas encore attribué"}</small>
                    <span className="cr-linked__end">
                      <StatusPill status={j.status} />
                    </span>
                  </Link>
                  {/* Refonte R1 : service après-vente du job (billet), propriétaire seulement comme la section SAV. */}
                  {owner ? (
                    <Link href={`/gestion/sav/nouveau?job=${j.id}`} className="k-link" style={{ margin: "0 0 10px", display: "inline-flex", gap: 6 }}>
                      <LifeBuoy size={14} aria-hidden /> Billet de service après-vente
                    </Link>
                  ) : null}
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint" style={{ margin: 0 }}>
              Aucun job.
            </p>
          )}
        </Card>
        {/* Volet B : sondage, statut LogisVert, facture de commission et référence, par job. Chantier V : propriétaire. */}
        {owner ? <ApresVentePanel jobIds={jobIds} /> : null}
      </div>
      <div className="cr-stack">
        {/* Volet A : dossier photo des chantiers du client (retrouvable « s'il y a de quoi ») ; adjoints aussi. */}
        {staff ? <ClientPhotoDossier jobIds={jobIds} /> : null}
        {/* Chantier D : visites photo à distance (demander, voir les photos reçues) ; ce client est déjà dans la portée de l'utilisateur. */}
        <ClientVisitsCard clientId={c.id} phones={c.phones.map((p) => p.e164)} emails={c.emails} phone={phone?.e164 ?? ""} email={c.emails[0] ?? ""} />
      </div>
    </div>
  );

  /* ---------------- Argent (propriétaire) ---------------- */
  const argent = owner ? (
    <div className="kt-cols">
      <div className="cr-stack">
        <ClientCommissions jobIds={jobIds} />
      </div>
      <div className="cr-stack">
        {/* Chantier A : coût d'acquisition, ou « non calculable » (argent de l'entreprise : propriétaire seulement, chantier V). */}
        <AcquisitionCard clientId={c.id} />
        <AdsClientPanel clientId={c.id} />
      </div>
    </div>
  ) : null;

  /* ---------------- Messages ---------------- */
  const messages = (
    <div className="kt-cols">
      <div className="cr-stack">
        <Card title="Textos" sub={c.conversations.length ? plural(c.conversations.length, "conversation", "conversations") : "Aucune conversation"}>
          {c.conversations.length ? (
            <ul className="cr-linked">
              {c.conversations.map((t) => (
                <li key={t.id}>
                  <Link href={`/gestion/textos/${t.id}`} className="cr-linked__row">
                    <strong>Conversation texto</strong>
                    <small>Dernier message {t.last}</small>
                    <span className="cr-linked__end">{t.unread ? <Chip tone="orange">{plural(t.unread, "non lu", "non lus")}</Chip> : <MessageSquare size={16} aria-hidden />}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="g-hint" style={{ margin: 0 }}>
              Le premier texto envoyé ou reçu ouvrira la conversation ici.
            </p>
          )}
        </Card>
        {/* Chantier T : appels masqués, transcriptions et résumés, consentement aux textos (LCAP). Chantier V : propriétaire. */}
        {owner ? <ClientTelephonieCard clientId={c.id} /> : null}
      </div>
      <div className="cr-stack">
        {/* Volet C : consentement à la relance de saison. Chantier V : propriétaire. */}
        {owner ? <SeasonConsentCard clientId={c.id} /> : null}
        {/* Conformité C2 : preuves de consentement et retraits, recherche par courriel ou téléphone. */}
        {owner ? (
          <Card title="Consentements" sub="Preuves (Loi 25, LCAP), retraits notés, relances permises.">
            <Link href="/gestion/conformite" className="k-btn">
              <Scale size={15} aria-hidden /> Chercher une preuve de consentement
            </Link>
          </Card>
        ) : null}
      </div>
    </div>
  );

  return (
    <>
      {flash ? <p className="g-alert g-alert--ok cr-flash" role="status">{FLASH[flash]}</p> : null}

      <section className="cr-profile" aria-labelledby="cr-client-name">
        <svg className="cr-profile__arcs" viewBox="0 0 280 280" aria-hidden>
          <circle cx="140" cy="140" r="136" />
          <circle cx="140" cy="140" r="100" />
          <circle cx="140" cy="140" r="64" />
        </svg>
        <Link href="/gestion/clients" className="cr-profile__back">
          <ChevronLeft size={16} aria-hidden /> Clients
        </Link>
        <div className="cr-profile__top">
          <Avatar initials={c.initials} seed={c.id} size="xl" />
          <h1 className="cr-profile__name" id="cr-client-name">
            {c.name}
            <em>{[c.city, c.channel ? `par ${c.channel}` : "saisi par vous"].filter(Boolean).join(" · ")}</em>
          </h1>
        </div>
        <div className="cr-profile__chips">
          <StageChip stage={c.stage} label={c.stageLabel} />
          {c.reactivated ? <Chip tone="orange">Réactivé le {c.reactivated}</Chip> : null}
          {c.manual ? <Chip>Étape choisie à la main</Chip> : null}
          {c.split ? <Chip>Fiche séparée</Chip> : null}
          {c.tags.map((t) => (
            <Chip key={t}>{t}</Chip>
          ))}
        </div>
        <div className="cr-contact">
          {phone ? (
            // Chantier T : appel masqué au lieu de tel: (qui montrait le cellulaire du propriétaire au client).
            <MaskedCallButton target={{ kind: "client", id: c.id }} className="is-primary">
              <Phone size={19} aria-hidden /> Appeler
            </MaskedCallButton>
          ) : (
            <span aria-disabled="true" className="cr-contact__off">
              <Phone size={19} aria-hidden /> Appeler
            </span>
          )}
          {conv ? (
            <Link href={`/gestion/textos/${conv.id}`}>
              <MessageSquare size={19} aria-hidden /> Texto{conv.unread ? ` (${conv.unread})` : ""}
            </Link>
          ) : phone ? (
            <a href={`sms:${phone.e164}`}>
              <MessageSquare size={19} aria-hidden /> Texto
            </a>
          ) : (
            <span aria-disabled="true">
              <MessageSquare size={19} aria-hidden /> Texto
            </span>
          )}
          {c.emails[0] ? (
            <a href={`mailto:${c.emails[0]}`}>
              <Mail size={19} aria-hidden /> Courriel
            </a>
          ) : (
            <span aria-disabled="true">
              <Mail size={19} aria-hidden /> Courriel
            </span>
          )}
        </div>
        {/* Chantier A : résumé de la fiche par l'assistant IA. */}
        <div className="as-summarize-row">
          {owner ? <AssistantSummarizeButton clientId={c.id} /> : null}
        </div>
        <div className="cr-facts">
          <div className="is-money">
            <span>Montant</span>
            <strong>{c.valueCents !== null ? dollars(c.valueCents) : "—"}</strong>
          </div>
          <div>
            <span>À cette étape</span>
            <strong>{c.daysInStage ? plural(c.daysInStage, "jour", "jours") : "Aujourd’hui"}</strong>
          </div>
          <div>
            <span>Premier contact</span>
            <strong>{c.firstSeen}</strong>
          </div>
          <div>
            <span>Dernière activité</span>
            <strong>{c.lastSeen}</strong>
          </div>
        </div>
      </section>

      <div className="cr-client-tabs">
        <Tabs label={`Fiche de ${c.name}`} tabs={tabs} initial={sp.onglet} panels={{ apercu, historique, soumission, chantier, ...(argent ? { argent } : {}), messages }} />
      </div>
    </>
  );
}
