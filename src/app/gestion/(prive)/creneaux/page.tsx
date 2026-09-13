/* ==================================================================
   Chantier P — /gestion/creneaux : disponibilités des installateurs.
   Vue d'ensemble (moments libres, réservés, clients qui attendent),
   gestion des moments d'un installateur (?installateur=i_…), lien
   « Mes disponibilités » à lui envoyer, clients sans date et lien de
   leur portail, délais réglables.
   ================================================================== */
import "@/components/gestion/argent/argent.css";
import "@/components/gestion/portail/portail-admin.css";
import type { Metadata } from "next";
import Link from "next/link";
import { CalendarCheck, CalendarDays, Hourglass, UserX } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { ID_RE } from "@/lib/gestion/service";
import { slotsPageView } from "@/lib/gestion/portail/views";
import { formatDateTime, formatDay } from "@/lib/soumissions/dates";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { AddSlotForm, AvailabilityLinkButton, PortalLinkButton, PortalSettingsForm, RemoveSlotButton } from "@/components/gestion/portail/PortalForms";

export const metadata: Metadata = { title: "Créneaux" };

const dayTitle = (ymd: string) => {
  const s = new Date(`${ymd}T12:00:00Z`).toLocaleDateString("fr-CA", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" });
  return s.charAt(0).toLocaleUpperCase("fr-CA") + s.slice(1);
};

export default async function CreneauxPage({ searchParams }: { searchParams: Promise<{ installateur?: string }> }) {
  await requireAdmin();
  const { installateur } = await searchParams;
  const v = await slotsPageView(installateur && ID_RE.test(installateur) ? installateur : null);
  const free = v.installers.reduce((s, i) => s + i.free, 0);
  const booked = v.installers.reduce((s, i) => s + i.booked, 0);
  const without = v.installers.filter((i) => i.waiting > 0 && i.free === 0).length;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Ventes</p>
          <h1 className="k-h1">
            Créneaux <em>d’installation</em>
          </h1>
          <p className="k-lead">Les installateurs publient leurs moments libres ; une fois la soumission acceptée et l’installateur attribué, le client choisit le sien dans son portail. Le job est alors planifié (date et heure dans l’agenda) et l’installateur est averti.</p>
        </div>
      </Reveal>

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Moments libres" icon={<CalendarDays size={16} />} value={free} tone="ink" />
        <KpiTile label="Réservés par des clients" icon={<CalendarCheck size={16} />} value={booked} />
        <KpiTile label="Clients sans date" icon={<Hourglass size={16} />} value={v.waiting.length} tone={v.waiting.length ? "orange" : "paper"} sub="job attribué, date à choisir" />
        <KpiTile label="Installateurs sans moments" icon={<UserX size={16} />} value={without} sub="alors que des clients attendent" />
      </div>

      <SectionHeader n="01" eyebrow="Réseau" title="Installateurs" lead="Chacun publie ses moments depuis sa page « Mes disponibilités » (lien de son offre acceptée, ou lien envoyé d’ici). Vous pouvez aussi les gérer à sa place." />
      {v.installers.length ? (
        <DataTable
          label="Installateurs et disponibilités"
          columns={[
            { key: "c", label: "Installateur", width: "1.6fr" },
            { key: "f", label: "Libres", width: "0.6fr" },
            { key: "b", label: "Réservés", width: "0.7fr" },
            { key: "w", label: "Clients en attente", width: "0.9fr" },
            { key: "n", label: "Prochain moment libre", width: "1.4fr" },
            { key: "a", label: "", width: "1.3fr", align: "end" },
          ]}
          rows={v.installers.map((i) => ({
            key: i.id,
            tone: i.waiting > 0 && i.free === 0 ? "hot" : undefined,
            cells: {
              c: (
                <Link href={`/gestion/creneaux?installateur=${i.id}`} className="k-link">
                  <b>{i.company}</b>
                </Link>
              ),
              f: i.free,
              b: i.booked,
              w: i.waiting ? <Chip tone="orange">{i.waiting}</Chip> : 0,
              n: i.nextFree ? `${formatDay(i.nextFree.day)} · ${i.nextFree.window}` : "—",
              a: <AvailabilityLinkButton installerId={i.id} />,
            },
          }))}
        />
      ) : (
        <EmptyState title="Aucun installateur actif" compact />
      )}

      {v.selected ? (
        <>
          <div style={{ height: 28 }} />
          <SectionHeader n="02" eyebrow="Disponibilités" title={v.selected.company} lead="Un moment réservé par un client ne se retire pas : le client change sa date dans son portail, ou vous désattribuez le job." />
          <div className="pa-plans">
            <Card title="Ajouter des moments">
              <AddSlotForm installerId={v.selected.id} today={v.today} />
            </Card>
            <Card title="Moments à venir" sub={`${v.selected.days.reduce((s, d) => s + d.slots.length, 0)} au total`}>
              {v.selected.days.length ? (
                <div className="pa-days">
                  {v.selected.days.map((d) => (
                    <div key={d.day} className="pa-day">
                      <h4>{dayTitle(d.day)}</h4>
                      <ul>
                        {d.slots.map((s) => (
                          <li key={s.id} className={`pa-slot${s.booked ? " is-booked" : ""}`}>
                            {s.window}
                            {s.booked ? (
                              <small>
                                · <Link href={`/gestion/jobs/${s.booked.jobId}`}>job n° {s.booked.jobNumber}</Link> · {s.booked.who}
                              </small>
                            ) : (
                              <RemoveSlotButton slotId={s.id} label={`Retirer ${dayTitle(d.day)}, ${s.window}`} />
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="g-hint">Aucun moment publié.</p>
              )}
            </Card>
          </div>
        </>
      ) : null}

      <div style={{ height: 28 }} />
      <SectionHeader n="03" eyebrow="Clients" title="En attente" accent="d’une date" lead="Le client est invité d’office dès que son installateur a des moments libres (une fois). Vous pouvez aussi lui envoyer son espace « Mon projet »." />
      {v.waiting.length ? (
        <DataTable
          label="Clients sans date"
          columns={[
            { key: "j", label: "Job", width: "0.7fr" },
            { key: "c", label: "Client", width: "1.4fr" },
            { key: "i", label: "Installateur", width: "1.3fr" },
            { key: "f", label: "Moments libres", width: "0.9fr" },
            { key: "v", label: "Invité", width: "1.1fr" },
            { key: "a", label: "", width: "1.3fr", align: "end" },
          ]}
          rows={v.waiting.map((w) => ({
            key: w.jobId,
            cells: {
              j: (
                <Link href={`/gestion/jobs/${w.jobId}`} className="k-link">
                  <b>n° {w.jobNumber}</b>
                </Link>
              ),
              c: (
                <span>
                  {w.who}
                  {w.kind === "entretien" ? (
                    <>
                      {" "}
                      <Chip tone="blue">entretien</Chip>
                    </>
                  ) : null}
                  {!w.eligible ? (
                    <>
                      <br />
                      <small className="g-hint">Aucune soumission acceptée liée : la date se choisit avec vous.</small>
                    </>
                  ) : null}
                </span>
              ),
              i: w.company,
              f: w.freeSlots ? w.freeSlots : <Chip tone="warn">aucun</Chip>,
              v: w.invited ? formatDateTime(w.invited) : "—",
              a: <PortalLinkButton jobId={w.jobId} />,
            },
          }))}
        />
      ) : (
        <EmptyState title="Aucun client n’attend de date" compact />
      )}

      <div style={{ height: 28 }} />
      <SectionHeader n="04" eyebrow="Réglages" title="Délais" accent="du portail" />
      <Card>
        <PortalSettingsForm settings={v.settings} />
      </Card>
    </>
  );
}
