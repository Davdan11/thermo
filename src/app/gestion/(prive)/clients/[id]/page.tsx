/* ==================================================================
   Fiche client : tout ce qu'on sait de la personne, réuni depuis les
   demandes, appels, textos, soumissions, jobs et courriels. Seule page
   de l'outil (avec la conversation texto) où le numéro et le courriel
   s'affichent en entier.
   ================================================================== */

import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowUpRight, ChevronLeft, FileText, Mail, MapPin, MessageSquare, Phone, Wrench } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { clientPage } from "@/lib/gestion/crm/service";
import { addNoteAction } from "../../crm-actions";
import { Avatar } from "@/components/gestion/kit/Avatar";
import { Card } from "@/components/gestion/kit/Card";
import { Chip, StageChip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { dollars, plural } from "@/components/gestion/kit/format";
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
import { ClientPhotoDossier } from "@/components/partenaires/admin/ClientPhotoDossier"; // volet A
import { AdsClientPanel } from "@/components/gestion/publicite/AdsClientPanel"; // pilote publicitaire : consentement, clic, ventes renvoyées
// Chantier T : appel masqué (numéro du site) et carte « Appels et textos ».
import { MaskedCallButton } from "@/components/gestion/telephonie/CallButton";
import { ClientTelephonieCard } from "@/components/gestion/telephonie/ClientTelephonieCard";

export const metadata: Metadata = { title: "Client" };

const FLASH: Record<string, string> = { cree: "Fiche créée.", fusion: "Fiches fusionnées : tout est réuni ici.", separe: "Nouvelle fiche créée pour l’autre personne." };

export default async function ClientPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<Record<string, string | undefined>> }) {
  await requireAdmin();
  const { id } = await params;
  const sp = await searchParams;
  const r = await clientPage(id);
  if (!r) notFound();
  if ("redirect" in r) redirect(`/gestion/clients/${r.redirect}`);
  const c = r.client;
  const flash = Object.keys(FLASH).find((k) => sp[k]);
  const phone = c.phones[0];
  const conv = c.conversations[0];

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

      <div className="cr-client">
        <div className="cr-stack">
          <Card title="À faire" sub={c.tasks.length ? plural(c.tasks.length, "tâche ouverte", "tâches ouvertes") : "Aucune tâche ouverte"}>
            <TaskList tasks={c.tasks} showWho={false} />
            <div style={{ marginTop: c.tasks.length ? 14 : 0 }}>
              <TaskForm clientId={c.id} />
            </div>
          </Card>

          <ComplexTasksCard clientId={c.id} />

          <Card title="Note ou appel" sub="Un appel noté compte comme « contacté ».">
            <NoteForm action={addNoteAction.bind(null, c.id)} />
          </Card>

          <Card title="Chronologie" sub="Tout ce qui s’est passé, du plus récent au plus ancien.">
            {c.timeline.length ? <Timeline items={c.timeline} /> : <EmptyState compact title="Aucun événement" />}
          </Card>
        </div>

        <aside className="cr-stack cr-client__side">
          <Card
            title="Étape"
            sub={`Depuis le ${c.since}`}
            action={<StageChanger clientId={c.id} current={c.stage} pipedriveEnabled={c.pipedriveEnabled} />}
          >
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

          <ThermoMatchPanel clientId={c.id} />

          <AdsClientPanel clientId={c.id} />

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
                    {q.canCreateJob ? (
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

          <Card
            title="Jobs"
            action={
              <Link href={`/gestion/jobs/nouveau?client=${c.id}`} className="k-btn">
                <Wrench size={15} aria-hidden /> Nouveau
              </Link>
            }
          >
            {c.jobs.length ? (
              <ul className="cr-linked">
                {c.jobs.map((j) => (
                  <li key={j.id}>
                    <Link href={`/gestion/jobs/${j.id}`} className="cr-linked__row">
                      <strong>Job n° {j.number}</strong>
                      <small>{[j.installer, j.when ? `prévu le ${j.when}` : null].filter(Boolean).join(" · ") || "Pas encore attribué"}</small>
                      <span className="cr-linked__end">
                        <StatusPill status={j.status} />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="g-hint" style={{ margin: 0 }}>
                Aucun job.
              </p>
            )}
          </Card>

          <SeasonConsentCard clientId={c.id} />
          {/* Chantier T : appels masqués, transcriptions et résumés, consentement aux textos (LCAP). */}
          <ClientTelephonieCard clientId={c.id} />
          {/* Volet B : sondage, statut LogisVert, facture de commission et référence, par job. */}
          <ApresVentePanel jobIds={c.jobs.map((j) => j.id)} />
          {/* Volet A : dossier photo des chantiers du client (retrouvable « s'il y a de quoi »). */}
          <ClientPhotoDossier jobIds={c.jobs.map((j) => j.id)} />

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
              <MergeSheet clientId={c.id} name={c.name} />
              {c.pieces.length > 1 ? <SplitSheet clientId={c.id} identities={c.identities} pieces={c.pieces} /> : null}
            </div>
          </Card>
        </aside>
      </div>
    </>
  );
}
