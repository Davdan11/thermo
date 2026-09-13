/* ==================================================================
   Refonte R1 — page « Aujourd'hui » (serveur), cellulaire d'abord :
     · la date, le résumé et l'argent du mois en une ligne
     · les blocages (installateur introuvable, date dépassée, paiement
       en retard), seulement s'il y en a
     · les 5 actions les plus payantes, numérotées, avec leur bouton
       d'un geste (Appeler masqué, Texto, Relancer, Ouvrir le job, Fait)
     · les installations du jour, puis le lien vers le tableau de bord
   Ne reçoit qu'un TodayView : prénoms, villes, montants, libellés.
   ================================================================== */

import Link from "next/link";
import { ArrowRight, Banknote, CalendarX2, HardHat, LayoutDashboard } from "lucide-react";
import type { TodayAlertId, TodayView as Today } from "@/lib/gestion/crm/today";
import { Card } from "../kit/Card";
import { EmptyState } from "../kit/EmptyState";
import { dollars, plural } from "../kit/format";
import { Reveal } from "../Reveal";
import { TaskList } from "./TaskList";
import "./today.css";

const ALERT_ICON: Record<TodayAlertId, typeof HardHat> = { installateur: HardHat, date: CalendarX2, paiement: Banknote };

export function TodayView({ t, receivable }: { t: Today; receivable?: { cents: number; n: number } | null }) {
  const m = t.money;
  return (
    <div className="td">
      <Reveal as="section" className="td-head">
        <svg className="td-head__arcs" viewBox="0 0 300 300" aria-hidden>
          <circle cx="150" cy="150" r="146" />
          <circle cx="150" cy="150" r="108" />
          <circle cx="150" cy="150" r="70" />
        </svg>
        <p className="td-head__date">{t.today}</p>
        <h1 className="td-head__title">
          {t.greeting}, <em>voici l’essentiel.</em>
        </h1>
        <p className="td-head__sum">{t.summary}</p>
        <p className="td-money" aria-label="L’argent du mois">
          <span className="td-money__m">{m.month}</span>
          <span>
            <b>{dollars(m.acceptedCents)}</b> {m.acceptedN ? `accepté${m.acceptedCents > 0 && m.acceptedN > 1 ? "s" : ""} (${plural(m.acceptedN, "soumission", "soumissions")})` : "accepté"}
          </span>
          <span>
            <b>{dollars(m.atStakeCents)}</b> en jeu{m.atStakeN ? ` (${m.atStakeN})` : ""}
          </span>
          {receivable ? (
            <span>
              <b>{dollars(receivable.cents)}</b> de commissions à recevoir
            </span>
          ) : null}
        </p>
      </Reveal>

      {t.alerts.length ? (
        <Reveal delay={0.05}>
          <ul className="td-alerts" aria-label="Blocages">
            {t.alerts.map((a) => {
              const Icon = ALERT_ICON[a.id];
              return (
                <li key={a.id}>
                  <Link href={a.href} className={`td-alert td-alert--${a.id}`}>
                    <span className="td-alert__icon" aria-hidden>
                      <Icon size={18} />
                    </span>
                    <span className="td-alert__txt">
                      <strong>{a.title}</strong>
                      <small>
                        {a.detail}
                        {a.cents ? ` · ${dollars(a.cents)}` : ""}
                      </small>
                    </span>
                    <b className="td-alert__n">{a.n}</b>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Reveal>
      ) : null}

      <Reveal delay={0.08} as="section" className="td-block">
        <header className="td-block__head">
          <div>
            <p className="k-eyebrow">Maintenant</p>
            <h2 className="k-h2">
              Les 5 actions <em>les plus payantes</em>
            </h2>
          </div>
          <Link href="/gestion/taches" className="k-btn">
            À faire <ArrowRight size={15} aria-hidden />
          </Link>
        </header>
        <div className="td-rank">
          <TaskList
            tasks={t.actions}
            empty={<EmptyState title="Rien à faire d’ici ce soir" body={t.upcoming ? `${plural(t.upcoming, "tâche est prévue", "tâches sont prévues")} plus tard.` : "Aucune demande en attente de réponse. Les prochaines arriveront ici."} />}
          />
        </div>
        {t.dueToday > t.actions.length ? (
          <Link href="/gestion/taches" className="k-link td-block__more">
            Voir les {t.dueToday - t.actions.length} autres tâches du jour <ArrowRight size={14} aria-hidden />
          </Link>
        ) : null}
      </Reveal>

      <Reveal delay={0.12}>
        <Card
          tone="ink"
          id="installations"
          title="Sur le terrain aujourd’hui"
          sub={t.installationsSoon ? `${plural(t.installationsSoon, "autre installation prévue", "autres installations prévues")} d’ici 7 jours` : undefined}
          action={
            <Link href="/gestion/agenda" className="k-link">
              Agenda <ArrowRight size={14} aria-hidden />
            </Link>
          }
        >
          {t.installations.length ? (
            <ul className="cr-installs">
              {t.installations.map((i) => (
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
      </Reveal>

      <Reveal delay={0.16}>
        <Link href="/gestion/tableau-de-bord" className="td-more">
          <LayoutDashboard size={18} aria-hidden />
          <span>
            <strong>Tableau de bord</strong>
            <small>L’argent, les demandes et leurs sources, le pipeline, les partenaires et l’après-vente.</small>
          </span>
          <ArrowRight size={16} aria-hidden />
        </Link>
      </Reveal>
    </div>
  );
}
