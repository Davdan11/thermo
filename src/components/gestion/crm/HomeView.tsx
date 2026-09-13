/* ==================================================================
   Accueil du CRM (serveur) : couverture « votre journée » puis quatre
   blocs numérotés, comme les chapitres du document de soumission.
     01 À faire aujourd'hui      tâches (présent), installations du jour
     02 L'argent                 soumissions (période)
     03 Les demandes et sources  journal + textos (période)
     04 Le pipeline              étapes des clients (présent)
   Ne reçoit qu'un HomeView : prénoms, villes, montants, libellés.
   ================================================================== */

import Link from "next/link";
import { ArrowRight, CalendarDays, CircleDollarSign, Clock, Gauge, Info, ShoppingBag } from "lucide-react";
import type { HomeView as Home } from "@/lib/gestion/crm/dashboard";
import { TASK_FAMILIES } from "@/lib/gestion/crm/tasks";
import { Card, SectionHeader } from "../kit/Card";
import { EmptyState } from "../kit/EmptyState";
import { dollars, num, pct, plural } from "../kit/format";
import { KpiTile } from "../kit/KpiTile";
import { MoneyBlock } from "../kit/Money";
import { PeriodTabs } from "../kit/PeriodTabs";
import { Reveal } from "../Reveal";
import { BarList, Donut, Funnel, SeriesBars, StageBar } from "../StatsCharts";
import { TaskList } from "./TaskList";

function Delta({ n, prev, short }: { n: number; prev: number | null; short: string }) {
  if (prev === null) return null;
  const d = n - prev;
  return <span className={`k-kpi__delta ${d > 0 ? "is-up" : d < 0 ? "is-down" : ""}`}>{d > 0 ? `+${d}` : d === 0 ? "=" : `−${-d}`} vs {short} préc.</span>;
}

export function HomeView({ h }: { h: Home }) {
  const m = h.money;
  const jobsTile = h.todo.tiles.find((t) => t.family === "jobs");
  const short = h.period.id === "tout" ? "" : `${h.period.id} j`;
  const stakeTotal = m.atStake.totalCents;

  return (
    <>
      {/* Couverture : ce qu'il faut voir en premier. */}
      <section className="cr-cover" aria-labelledby="cr-greeting">
        <svg className="cr-cover__arcs" viewBox="0 0 400 400" aria-hidden>
          <circle cx="200" cy="200" r="196" />
          <circle cx="200" cy="200" r="150" />
          <circle cx="200" cy="200" r="104" />
        </svg>
        <div className="cr-cover__top">
          <p className="cr-cover__kicker">{h.today}</p>
        </div>
        <h1 className="cr-cover__title" id="cr-greeting">
          {h.greeting}
          <em>voici votre journée.</em>
        </h1>
        <span className="cr-cover__rule" aria-hidden />
        <p className="cr-cover__sum">{h.summary}</p>
        <div className="cr-glance">
          <Link href="/gestion/taches" className={`cr-glance__item${h.todo.overdue ? " is-hot" : ""}`}>
            <span className="cr-glance__l">À faire aujourd’hui</span>
            <span className="cr-glance__n">{h.todo.dueToday}</span>
            <span className="cr-glance__s">{h.todo.overdue ? `${h.todo.overdue} en retard` : "Rien en retard"}</span>
          </Link>
          <a href="#installations" className="cr-glance__item">
            <span className="cr-glance__l">Installations aujourd’hui</span>
            <span className="cr-glance__n">{h.todo.installations.length}</span>
            <span className="cr-glance__s">{h.todo.installationsSoon ? `${h.todo.installationsSoon} d’ici 7 jours` : "Aucune d’ici 7 jours"}</span>
          </a>
          <Link href="/gestion/taches" className="cr-glance__item">
            <span className="cr-glance__l">Jobs sans preneur</span>
            <span className="cr-glance__n">{jobsTile?.n ?? 0}</span>
            <span className="cr-glance__s">{jobsTile?.n ? "À offrir ou à relancer" : "Tout est pris"}</span>
          </Link>
          <a href="#argent" className="cr-glance__item">
            <span className="cr-glance__l">Acceptées · {h.period.label}</span>
            <span className="cr-glance__n">{dollars(m.accepted.totalCents)}</span>
            <span className="cr-glance__s">{m.accepted.n ? `${plural(m.accepted.n, "soumission", "soumissions")}, taxes comprises` : "Aucune pour l’instant"}</span>
          </a>
        </div>
      </section>

      {/* 01 · À faire aujourd'hui */}
      <SectionHeader
        n="01"
        eyebrow="Priorités"
        title="À faire"
        accent="aujourd’hui"
        lead="Les plus urgentes d’abord. Chaque demande sans réponse, chaque soumission ouverte sans suite et chaque job sans preneur apparaît ici."
        action={
          <Link href="/gestion/taches" className="k-btn">
            Toutes les tâches <ArrowRight size={15} aria-hidden />
          </Link>
        }
      />
      <div className="cr-tiles">
        {h.todo.tiles.map((t) => {
          const fam = TASK_FAMILIES.find((f) => f.id === t.family)!;
          return (
            <Link key={t.family} href="/gestion/taches" className={`cr-tile${t.n ? "" : " is-zero"}${t.overdue ? " is-hot" : ""}`}>
              <span className="cr-tile__n">{t.n}</span>
              <span className="cr-tile__l">{fam.label}</span>
              {t.overdue ? <span className="cr-tile__o k-chip k-chip--orange">{t.overdue} en retard</span> : null}
            </Link>
          );
        })}
      </div>
      <div className="cr-split">
        <div className="cr-stack">
          <TaskList tasks={h.todo.tasks} empty={<EmptyState title="Rien à faire pour aujourd’hui" body={h.todo.upcoming ? `${plural(h.todo.upcoming, "tâche est prévue", "tâches sont prévues")} plus tard.` : "Aucune demande en attente de réponse. Les prochaines arriveront ici."} />} />
          {h.todo.dueToday > h.todo.tasks.length ? (
            <Link href="/gestion/taches" className="k-link">
              Voir les {h.todo.dueToday - h.todo.tasks.length} autres tâches du jour <ArrowRight size={14} aria-hidden />
            </Link>
          ) : null}
        </div>
        <Card tone="ink" id="installations" title="Installations aujourd’hui" sub={h.todo.installationsSoon ? `${plural(h.todo.installationsSoon, "autre prévue", "autres prévues")} d’ici 7 jours` : undefined}>
          {h.todo.installations.length ? (
            <ul className="cr-installs">
              {h.todo.installations.map((i) => (
                <li key={i.id}>
                  <Link href={i.href} className="cr-install">
                    <span className="cr-install__n">{i.number}</span>
                    <span style={{ minWidth: 0 }}>
                      <strong>{i.who}</strong>
                      <small>{[i.installer, i.what].filter(Boolean).join(" · ") || "Job planifié"}</small>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <EmptyState tone="ink" compact title="Aucune installation aujourd’hui" body="Les jobs planifiés à la date du jour s’affichent ici." />
          )}
        </Card>
      </div>

      {/* 02 · L'argent */}
      <SectionHeader
        id="argent"
        n="02"
        eyebrow={`Soumissions · ${h.period.range}`}
        title="L’argent"
        lead="Montants taxes comprises, base avant taxes en dessous. L’aide LogisVert est versée au client par Hydro-Québec : jamais comptée ici."
        action={<PeriodTabs base="/gestion" current={h.period.id} periods={h.periods} />}
      />
      <div className="cr-grid2">
        <Card tone="ink" title="Acceptées" sub={h.period.label}>
          <div className="cr-money-hero">
            <MoneyBlock cents={m.accepted.totalCents} taxableCents={m.accepted.taxableCents} size="xl" />
            <div className="cr-money-hero__meta">
              <span>
                <strong>{num(m.accepted.n)}</strong> {m.accepted.n > 1 ? "soumissions acceptées" : "soumission acceptée"}
              </span>
              {m.averageCents !== null ? (
                <span>
                  Panier moyen <strong>{dollars(m.averageCents)}</strong>
                </span>
              ) : null}
              {m.medianDays !== null ? (
                <span>
                  Délai médian <strong>{num(m.medianDays, 1)} j</strong> de l’envoi à l’acceptation
                </span>
              ) : null}
            </div>
          </div>
        </Card>
        <div className="cr-grid3" style={{ gridTemplateColumns: "repeat(2, minmax(0, 1fr))" }}>
          <KpiTile
            label="En jeu"
            icon={<CircleDollarSign size={16} />}
            value={dollars(stakeTotal)}
            sub={`${plural(m.atStake.envoyee.n + m.atStake.ouverte.n, "soumission en attente", "soumissions en attente")}`}
            href="/gestion/soumissions?statut=attente"
          />
          <KpiTile
            label="Taux d’acceptation"
            icon={<Gauge size={16} />}
            value={m.rate.value === null ? "—" : pct(m.rate.value)}
            sub={m.rate.value === null ? "Pas encore de réponse" : `${m.rate.accepted} sur ${m.rate.accepted + m.rate.refused + m.rate.expired} · ${m.rate.pending} en attente`}
          />
          <KpiTile label="Panier moyen" icon={<ShoppingBag size={16} />} value={m.averageCents === null ? "—" : dollars(m.averageCents)} sub="taxes comprises" />
          <KpiTile label="Délai médian" icon={<Clock size={16} />} value={m.medianDays === null ? "—" : `${num(m.medianDays, 1)} j`} sub="de l’envoi à l’acceptation" />
        </div>
      </div>
      <div className="cr-grid2" style={{ marginTop: 16 }}>
        <Card title="Acceptées par mois" sub="12 derniers mois, taxes comprises">
          <SeriesBars points={m.monthly.map((x) => ({ key: x.key, label: x.label, value: x.cents, note: x.n ? plural(x.n, "acceptée", "acceptées") : undefined }))} format="money" label="Montants acceptés par mois" accentLast />
        </Card>
        <div className="cr-stack">
          <Card title="Soumissions en jeu" sub="Envoyées et ouvertes, expirées exclues">
            <div className="cr-stake" aria-hidden>
              {m.atStake.envoyee.cents ? <span style={{ flexGrow: m.atStake.envoyee.cents, background: "#d64109" }} /> : null}
              {m.atStake.ouverte.cents ? <span style={{ flexGrow: m.atStake.ouverte.cents, background: "#8f2804" }} /> : null}
              {!stakeTotal ? <span style={{ flexGrow: 1, background: "rgba(12,24,33,.06)" }} /> : null}
            </div>
            <div className="cr-stake__legend">
              <span>
                <i style={{ background: "#d64109" }} aria-hidden />
                Envoyées, pas encore ouvertes : <b>{dollars(m.atStake.envoyee.cents)}</b> ({m.atStake.envoyee.n})
              </span>
              <span>
                <i style={{ background: "#8f2804" }} aria-hidden />
                Ouvertes par le client : <b>{dollars(m.atStake.ouverte.cents)}</b> ({m.atStake.ouverte.n})
              </span>
            </div>
          </Card>
          <Card title="Entonnoir" sub={`Soumissions envoyées · ${h.period.label}`}>
            <Funnel
              label="Envoyées, ouvertes, acceptées"
              steps={[
                { label: "Envoyées", value: m.funnel.sent },
                { label: "Ouvertes", value: m.funnel.opened },
                { label: "Acceptées", value: m.funnel.accepted },
              ]}
            />
          </Card>
          {m.logisvert.cents ? (
            <div className="cr-info">
              <Info size={18} aria-hidden />
              <span>
                Aide LogisVert attendue par vos clients : <strong>{dollars(m.logisvert.cents)}</strong> ({plural(m.logisvert.n, "soumission", "soumissions")} acceptées ou en attente) — versée au client par Hydro-Québec. Information seulement : jamais ajoutée ni soustraite de vos montants.
              </span>
            </div>
          ) : null}
        </div>
      </div>

      {/* 03 · Les demandes et leurs sources */}
      <SectionHeader
        n="03"
        eyebrow={`Demandes · ${h.period.range}`}
        title="Les demandes"
        accent="et leurs sources"
        action={
          <Link href={h.period.id === "30" ? "/gestion/statistiques" : `/gestion/statistiques?periode=${h.period.id}`} className="k-btn">
            Toutes les sources <ArrowRight size={15} aria-hidden />
          </Link>
        }
      />
      <div className="cr-grid2">
        <Card
          title={`${num(h.demand.total)} demande${h.demand.total > 1 ? "s" : ""}`}
          sub={h.demand.byKind.map((k) => `${k.n} ${k.label.toLowerCase()}`).join(" · ") || "Aucune sur la période"}
          action={<Delta n={h.demand.total} prev={h.demand.previousTotal} short={short} />}
        >
          <SeriesBars points={h.demand.trend.points.map((p) => ({ key: p.key, label: p.label, value: p.total, sub: p.soumissions }))} label={`Demandes par ${h.demand.trend.unit}`} subLabel="soumissions" />
          <div className="ch-legend">
            <span>
              <i style={{ background: "var(--g-orange)" }} />
              Toutes les demandes
            </span>
            <span>
              <i style={{ background: "var(--g-ink)" }} />
              Soumissions
            </span>
          </div>
        </Card>
        <Card title="Canaux" sub="D’où arrivent les demandes">
          {h.demand.ring.length ? <Donut items={h.demand.ring.map((r) => ({ id: r.id, label: r.label, value: r.n }))} center={num(h.demand.total)} centerSub="demandes" label="Demandes par canal" /> : <EmptyState compact title="Aucune demande sur la période" />}
        </Card>
      </div>
      <div className="cr-grid2" style={{ marginTop: 16 }}>
        <Card title="Canaux qui rapportent" sub="Montants acceptés, selon la première demande du client">
          <BarList rows={m.byChannel.map((c) => ({ key: c.id, label: c.label, n: c.cents, display: dollars(c.cents), note: plural(c.n, "acceptée", "acceptées"), tone: c.id === "saisi" ? "muted" : "orange" }))} empty="Aucune soumission acceptée sur la période." />
        </Card>
        <Card title="Villes" sub="Selon le code postal ou la ville indiquée">
          <BarList rows={h.demand.cities.map((c) => ({ key: c.name, label: c.name, n: c.n }))} empty="Aucune ville connue sur la période." />
        </Card>
      </div>

      {/* 04 · Le pipeline */}
      <SectionHeader
        n="04"
        eyebrow="Maintenant"
        title="Le pipeline"
        lead={`${plural(h.pipeline.active, "client en cours", "clients en cours")}${h.pipeline.activeCents ? ` · ${dollars(h.pipeline.activeCents)} de soumissions en jeu ou acceptées` : ""}.`}
        action={
          <Link href="/gestion/pipeline" className="k-btn">
            Ouvrir le pipeline <ArrowRight size={15} aria-hidden />
          </Link>
        }
      />
      <div className="cr-grid2">
        <Card title="Clients par étape" sub="Touchez une étape pour l’ouvrir">
          <StageBar rows={h.pipeline.stages} />
        </Card>
        <Card title="Pourquoi on perd" sub={h.pipeline.lost ? plural(h.pipeline.lost, "client perdu", "clients perdus") : "Aucun client perdu"}>
          {h.pipeline.lossReasons.length ? (
            <BarList rows={h.pipeline.lossReasons.map((r) => ({ key: r.reason, label: r.reason, n: r.n, tone: "muted" }))} empty="" />
          ) : (
            <EmptyState compact icon={<CalendarDays size={20} />} title="Rien à signaler" body="Les raisons notées quand un client est marqué perdu, et les soumissions refusées, s’afficheront ici." />
          )}
        </Card>
      </div>
      <Reveal delay={0.1}>
        <p className="g-hint" style={{ marginTop: 28, textAlign: "center" }}>
          Données lues à l’instant dans les demandes, soumissions, jobs et textos. Aucun chiffre estimé.
        </p>
      </Reveal>
    </>
  );
}
