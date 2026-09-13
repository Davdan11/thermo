/* ==================================================================
   Agenda (serveur) : barre de période, filtres, puis la vue choisie.
     Jour     par installateur, puis par heure, avec compteurs ; chaque
              carte : client, ville, machine, statut, liens job et fiche
     Semaine  sept jours : nombre, densité, statuts, installateurs, les
              premières installations, ouverture du jour
     Mois     grille de densité ; un jour s'ouvre en vue « jour »
   « À céduler » : jobs ouverts sans date, à part.
   Ne reçoit qu'un AgendaData : prénom et initiale, ville, machine.
   ================================================================== */

import Link from "next/link";
import { CalendarClock, ChevronLeft, ChevronRight } from "lucide-react";
import { AGENDA_VIEW_LABELS, AGENDA_VIEWS, agendaHref, dayLong, UNASSIGNED, type AgendaData, type AgendaItem } from "@/lib/gestion/agenda/agenda";
import { EmptyState } from "../kit/EmptyState";
import { SectionHeader } from "../kit/Card";
import { plural } from "../kit/format";
import { Reveal } from "../Reveal";
import { AgendaFilters } from "./AgendaFilters";
import { AgendaKeys } from "./AgendaKeys";
import "./ventes.css";

const initials = (s: string) =>
  s
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w.charAt(0).toUpperCase())
    .join("") || "·";

function Card({ it }: { it: AgendaItem }) {
  return (
    <article className="ag-card" data-status={it.status}>
      <div className="ag-card__top">
        <span className="ag-card__n">n° {it.number}</span>
        <span className={`ag-st ag-st--${it.status}`}>{it.statusLabel}</span>
      </div>
      <p className="ag-card__who">
        <Link href={it.href}>{it.client}</Link>
        {it.city ? <span> · {it.city}</span> : null}
      </p>
      <p className={`ag-card__what${it.machine ? "" : " is-none"}`}>{it.machine || "Machine à préciser"}</p>
      <div className="ag-card__links">
        <Link href={it.href} aria-label={`Job n° ${it.number}`}>
          Job
        </Link>
        {it.clientHref ? (
          <Link href={it.clientHref} aria-label={`Fiche client de ${it.client}`}>
            Fiche client
          </Link>
        ) : null}
        {it.regionLabel && it.region ? <span className="g-hint" style={{ margin: 0, alignSelf: "center" }}>{it.regionLabel}</span> : null}
      </div>
    </article>
  );
}

function DayView({ a }: { a: AgendaData }) {
  const total = a.groups.reduce((s, g) => s + g.n, 0);
  if (!total) {
    return (
      <EmptyState
        title="Aucune installation ce jour-là"
        body={a.unscheduled.n ? `${plural(a.unscheduled.n, "job attend", "jobs attendent")} une date : voir « À céduler » plus bas.` : "Les jobs planifiés à cette date s’afficheront ici, groupés par installateur."}
      />
    );
  }
  const slots = new Map<string, number>();
  for (const g of a.groups) for (const s of g.slots) slots.set(s.label, (slots.get(s.label) ?? 0) + s.n);
  return (
    <>
      <div className="ag-sum" aria-label="Résumé de la journée">
        <span className="ag-pill is-ink">
          <b>{total}</b> {total > 1 ? "installations" : "installation"}
        </span>
        <span className="ag-pill">
          <b>{a.groups.length}</b> {a.groups.length > 1 ? "équipes" : "équipe"}
        </span>
        {[...slots.entries()].map(([label, n]) => (
          <span key={label} className="ag-pill">
            {label} · <b>{n}</b>
          </span>
        ))}
      </div>
      <div className="ag-day">
        {a.groups.map((g, gi) => (
          <Reveal key={g.id} as="section" delay={Math.min(gi, 6) * 0.04} className={`ag-group${g.id === UNASSIGNED ? " is-none" : ""}`}>
            <header className="ag-group__head">
              <span className="ag-group__mark" aria-hidden>
                {g.id === UNASSIGNED ? "?" : initials(g.label)}
              </span>
              <h3 id={`ag-g-${g.id}`}>{g.label}</h3>
              <span className="ag-count" aria-label={plural(g.n, "installation", "installations")}>
                {g.n}
              </span>
            </header>
            {g.slots.map((s) => (
              <div key={s.label} className={`ag-slot${s.time ? "" : " is-tbd"}`}>
                <div className="ag-slot__time">
                  <strong>{s.label}</strong>
                  <span>{plural(s.n, "installation", "installations")}</span>
                </div>
                <ul className="ag-cards">
                  {s.items.map((it) => (
                    <li key={it.id}>
                      <Card it={it} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        ))}
      </div>
    </>
  );
}

function WeekView({ a }: { a: AgendaData }) {
  const max = a.maxPerDay || 1;
  return (
    <ol className="ag-week">
      {a.days.map((d) => {
        const dayHref = agendaHref(a.query, { view: "jour", date: d.ymd });
        return (
          <li key={d.ymd} className={`ag-wday${d.n ? "" : " is-empty"}${d.isToday ? " is-today" : ""}`}>
            <Link href={dayHref} className="ag-wday__head" aria-label={`${dayLong(d.ymd)} : ${d.n ? plural(d.n, "installation", "installations") : "aucune installation"}`}>
              <span className="ag-wday__wd">{d.weekday}</span>
              <span className="ag-wday__num">{d.dayNum}</span>
              <span className="ag-wday__n">{d.n}</span>
            </Link>
            <span className="ag-meter" aria-hidden>
              <i style={{ ["--d" as string]: String(d.n / max) }} />
            </span>
            {d.n ? (
              <>
                <div className="ag-chips">
                  {d.byStatus.map((s) => (
                    <span key={s.status} className={`ag-st ag-st--${s.status}`}>
                      {s.n} {s.label.toLowerCase()}
                    </span>
                  ))}
                </div>
                <ul className="ag-inst">
                  {d.installers.slice(0, 3).map((i) => (
                    <li key={i.id}>
                      <span>{i.label}</span>
                      <b>{i.n}</b>
                    </li>
                  ))}
                  {d.installers.length > 3 ? (
                    <li>
                      <span>{plural(d.installers.length - 3, "autre équipe", "autres équipes")}</span>
                      <b>{d.installers.slice(3).reduce((s, i) => s + i.n, 0)}</b>
                    </li>
                  ) : null}
                </ul>
                <ul className="ag-mini">
                  {d.preview.map((it) => (
                    <li key={it.id}>
                      <Link href={it.href}>
                        <b>
                          {it.client}
                          {it.city ? ` · ${it.city}` : ""}
                        </b>
                        <small>{[it.installer, it.machine].filter(Boolean).join(" · ")}</small>
                      </Link>
                    </li>
                  ))}
                </ul>
                {d.n > d.preview.length ? (
                  <Link href={dayHref} className="ag-more">
                    Voir les {d.n} installations
                  </Link>
                ) : null}
              </>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

function MonthView({ a }: { a: AgendaData }) {
  const max = a.maxPerDay || 1;
  const focusIdx = Math.max(0, a.days.findIndex((d) => d.isToday) >= 0 ? a.days.findIndex((d) => d.isToday) : a.days.findIndex((d) => d.inPeriod));
  return (
    <nav className="ag-month" aria-label={`Jours de ${a.label.toLowerCase()} (flèches pour se déplacer, Entrée pour ouvrir)`}>
      <div className="ag-month__wd" aria-hidden>
        {a.days.slice(0, 7).map((d) => (
          <span key={d.ymd}>{d.weekday.replace(".", "")}</span>
        ))}
      </div>
      <div className="ag-month__grid">
        {a.days.map((d, i) => (
          <Link
            key={d.ymd}
            href={agendaHref(a.query, { view: "jour", date: d.ymd })}
            data-ag-cell
            tabIndex={i === focusIdx ? 0 : -1}
            className={`ag-mday${d.inPeriod ? "" : " is-out"}${d.isToday ? " is-today" : ""}`}
            style={{ ["--d" as string]: String(d.inPeriod ? d.n / max : 0) }}
            aria-label={`${dayLong(d.ymd)} : ${d.n ? plural(d.n, "installation", "installations") : "aucune installation"}`}
          >
            <span className="ag-mday__num">{d.dayNum}</span>
            {d.n ? (
              <span className="ag-mday__c">
                {d.n}
                <small>install.</small>
              </span>
            ) : (
              <span />
            )}
            {d.installers.length ? (
              <span className="ag-mday__inst">
                {d.installers.slice(0, 2).map((x) => (
                  <span key={x.id}>
                    {x.label} · {x.n}
                  </span>
                ))}
                {d.installers.length > 2 ? <span>+ {d.installers.length - 2}</span> : null}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </nav>
  );
}

const MAX_UNSCHEDULED = 60;

export function AgendaView({ a }: { a: AgendaData }) {
  const q = a.query;
  const filtered = Boolean(q.installer || q.region);
  const todayHref = agendaHref(q, { date: a.today });
  const periodWord = q.view === "jour" ? "jour" : q.view === "semaine" ? "semaine" : "mois";
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Ventes</p>
          <h1 className="k-h1">
            L’<em>agenda</em>
          </h1>
          <p className="k-lead">Les installations planifiées, par jour, par semaine ou par mois. Même cent installations le même jour restent lisibles : groupées par installateur, puis par heure.</p>
        </div>
      </Reveal>

      <div className="ag-bar">
        <nav className="ag-nav" aria-label="Période">
          <Link href={agendaHref(q, { date: a.bounds.prev })} className="is-icon" aria-label={`${periodWord === "jour" ? "Jour" : periodWord === "semaine" ? "Semaine" : "Mois"} précédent${periodWord === "semaine" ? "e" : ""}`}>
            <ChevronLeft size={18} aria-hidden />
          </Link>
          <Link href={todayHref} className={a.today >= a.bounds.from && a.today <= a.bounds.to ? "is-now" : undefined}>
            Aujourd’hui
          </Link>
          <Link href={agendaHref(q, { date: a.bounds.next })} className="is-icon" aria-label={`${periodWord === "jour" ? "Jour" : periodWord === "semaine" ? "Semaine" : "Mois"} suivant${periodWord === "semaine" ? "e" : ""}`}>
            <ChevronRight size={18} aria-hidden />
          </Link>
        </nav>
        <h2 className="ag-title" aria-live="polite">
          {a.label}
          <small>{a.total ? plural(a.total, "installation planifiée", "installations planifiées") : "Aucune installation planifiée"}{filtered ? " · filtre actif" : ""}</small>
        </h2>
        <nav className="k-tabs" aria-label="Vue">
          {AGENDA_VIEWS.map((v) => (
            <Link key={v} href={agendaHref(q, { view: v })} aria-current={q.view === v ? "page" : undefined}>
              {AGENDA_VIEW_LABELS[v]}
            </Link>
          ))}
        </nav>
      </div>

      <AgendaFilters
        view={q.view}
        date={q.date}
        installer={q.installer}
        region={q.region}
        installers={a.facets.installers}
        regions={a.facets.regions}
        clearHref={filtered ? agendaHref(q, { installer: null, region: null }) : null}
      />

      {q.view === "jour" ? <DayView a={a} /> : q.view === "semaine" ? <WeekView a={a} /> : <MonthView a={a} />}

      <SectionHeader
        id="a-ceduler"
        eyebrow="Sans date"
        title="À céduler"
        lead={a.unscheduled.n ? `${plural(a.unscheduled.n, "job ouvert n’a", "jobs ouverts n’ont")} pas encore de date d’installation.` : undefined}
        action={
          <Link href="/gestion/jobs" className="k-btn">
            Tous les jobs
          </Link>
        }
      />
      {a.unscheduled.n ? (
        <>
          <ul className="ag-rows">
            {a.unscheduled.items.slice(0, MAX_UNSCHEDULED).map((it) => (
              <li key={it.id} className="ag-row">
                <span className="ag-row__n">{it.number}</span>
                <div className="ag-row__body">
                  <strong>
                    <Link href={it.href}>{it.client}</Link>
                    {it.city ? <span style={{ fontWeight: 520, color: "var(--g-muted)" }}> · {it.city}</span> : null}
                  </strong>
                  <p>{[it.machine || "Machine à préciser", it.installerId ? it.installer : null].filter(Boolean).join(" · ")}</p>
                  <div className="ag-row__meta">
                    <span className="ag-st ag-st--a-cedule">{it.statusLabel}</span>
                    {it.wish ? (
                      <span className="g-hint" style={{ margin: 0 }}>
                        <CalendarClock size={13} aria-hidden style={{ verticalAlign: "-2px" }} /> {it.wish}
                      </span>
                    ) : null}
                    {it.clientHref ? (
                      <Link href={it.clientHref} className="ag-more">
                        Fiche client
                      </Link>
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {a.unscheduled.n > MAX_UNSCHEDULED ? (
            <p className="g-hint" style={{ marginTop: 10 }}>
              Et {a.unscheduled.n - MAX_UNSCHEDULED} autres : <Link href="/gestion/jobs">voir la liste des jobs</Link>.
            </p>
          ) : null}
        </>
      ) : (
        <EmptyState compact title="Rien à céduler" body="Chaque job ouvert a une date d’installation." />
      )}

      <p className="ag-keys">
        Clavier : <kbd>←</kbd> <kbd>→</kbd> période · <kbd>T</kbd> aujourd’hui · <kbd>J</kbd> <kbd>S</kbd> <kbd>M</kbd> jour, semaine, mois
      </p>
      <AgendaKeys
        prev={agendaHref(q, { date: a.bounds.prev })}
        next={agendaHref(q, { date: a.bounds.next })}
        today={todayHref}
        jour={agendaHref(q, { view: "jour" })}
        semaine={agendaHref(q, { view: "semaine" })}
        mois={agendaHref(q, { view: "mois" })}
      />
    </>
  );
}
