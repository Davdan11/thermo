/* Studio de présence : état de la publication, calendrier du mois, file d'attente, publiées, journal. */
import type { Metadata } from "next";
import Link from "next/link";
import { ChevronLeft, ChevronRight, FlaskConical, Radio } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { publishMode } from "@/lib/presence/config";
import { SERIES_INFO } from "@/lib/presence/series";
import { readPresence } from "@/lib/presence/store";
import { fmtDateLong, fmtHour, fmtMonth, fmtWhen, montrealDate, montrealTime, weekdayOf } from "@/lib/presence/time";
import { SERIES, STATUS_LABELS, type Post } from "@/lib/presence/types";
import { byDate, isLate, kpis, MONTH_RE, monthGrid, shiftMonth, STATUS_TONE } from "@/lib/presence/view";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { cx } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { PrepareButton } from "@/components/gestion/presence/PrepareButton";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";

export const metadata: Metadata = { title: "Présence" };

const DAYS = ["lun.", "mar.", "mer.", "jeu.", "ven.", "sam.", "dim."];
const hour = (p: Post) => fmtHour(montrealTime(new Date(p.scheduledAt)));
const subject = (p: Post) => (p.series === "question" && !p.text ? "Question à écrire" : p.source.subject);

function Slot({ p }: { p: Post }) {
  return (
    <Link href={`/gestion/presence/${p.id}`} className={`pr-slot pr-slot--${p.series} is-${p.status}`} title={`${SERIES_INFO[p.series].label} · ${subject(p)} · ${STATUS_LABELS[p.status]}`}>
      <i className="pr-dot" aria-hidden />
      <span className="pr-slot__t">{SERIES_INFO[p.series].short}</span>
      <span className="pr-slot__h">{hour(p)}</span>
      <span className="g-sr">{STATUS_LABELS[p.status]}</span>
    </Link>
  );
}

function Row({ p, now }: { p: Post; now: Date }) {
  return (
    <li>
      <Link href={`/gestion/presence/${p.id}`} className={`pr-row pr-bg--${p.series}`}>
        <span className="pr-row__bar" aria-hidden />
        <span className="pr-row__when">
          <b>{fmtDateLong(p.date)}</b>
          <span>{hour(p)}</span>
        </span>
        <span className="pr-row__main">
          <span className="pr-row__series">{SERIES_INFO[p.series].label}</span>
          <span className="pr-row__subject">{subject(p)}</span>
        </span>
        <span className="pr-row__end">
          {isLate(p, now) ? <Chip tone="bad">En retard</Chip> : null}
          {p.publish.nextAttemptAt && p.status === "planifiee" ? <Chip tone="warn">Nouvel essai prévu</Chip> : null}
          <Chip tone={STATUS_TONE[p.status]} dot>
            {STATUS_LABELS[p.status]}
          </Chip>
        </span>
      </Link>
    </li>
  );
}

export default async function PresencePage({ searchParams }: { searchParams: Promise<{ mois?: string }> }) {
  await requireAdmin();
  const sp = await searchParams;
  const now = new Date();
  const today = montrealDate(now);
  const month = sp.mois && MONTH_RE.test(sp.mois) ? sp.mois : today.slice(0, 7);
  const data = await readPresence();
  const mode = publishMode(data.settings);
  const k = kpis(data, now);
  const dates = byDate(data.posts);
  const weeks = monthGrid(month);
  const late = data.posts.filter((p) => isLate(p, now));
  const failed = data.posts.filter((p) => p.status === "echec");
  const queue = data.posts.filter((p) => (p.status === "a_approuver" || p.status === "brouillon" || p.status === "planifiee") && !isLate(p, now));
  const published = data.posts
    .filter((p) => p.status === "publiee")
    .sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? ""))
    .slice(0, 6);
  const agenda = weeks.flat().filter((d) => d.slice(0, 7) === month && (dates.get(d)?.length ?? 0) > 0);

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Studio <em>de publication</em>
          </h1>
          <p className="k-lead">Facebook et Instagram, préparés d’avance à partir des données du site. Chaque chiffre a sa source ; rien ne part sans votre approbation.</p>
        </div>
        <PrepareButton />
      </Reveal>

      <PresenceTabs current="/gestion/presence" />

      <div className={cx("pr-banner", mode.real ? "is-live" : "is-test")} role="status">
        {mode.real ? <Radio size={18} aria-hidden /> : <FlaskConical size={18} aria-hidden />}
        <div>
          <b>{mode.real ? "Publication réelle activée" : "Mode essai"}</b>
          <span>{mode.real ? "Les publications approuvées partent à leur heure (passage toutes les 15 minutes)." : `Rien ne part vers Meta. ${mode.reasons.join(" ")}`}</span>
        </div>
        <Link href="/gestion/presence/reglages" className="k-link">
          Réglages
        </Link>
      </div>

      <div className="pr-kpis">
        <div className={cx("pr-kpi", k.toApprove > 0 && "is-hot")}>
          <span>À approuver ou à écrire</span>
          <b>{k.toApprove}</b>
        </div>
        <div className="pr-kpi">
          <span>Planifiées, 30 jours</span>
          <b>{k.planned}</b>
        </div>
        <div className="pr-kpi">
          <span>Publiées ce mois-ci</span>
          <b>{k.publishedMonth}</b>
        </div>
        <div className={cx("pr-kpi", k.failed > 0 && "is-bad")}>
          <span>Échecs</span>
          <b>{k.failed}</b>
        </div>
      </div>

      {failed.length || late.length ? (
        <Card tone="cream" title="À régler" sub="Échecs de publication et publications dont le jour est passé depuis plus de 36 heures : replanifiez, réessayez ou rejetez.">
          <ul className="pr-queue">
            {[...failed, ...late].map((p) => (
              <Row key={p.id} p={p} now={now} />
            ))}
          </ul>
        </Card>
      ) : null}

      <SectionHeader
        n="01"
        title="Calendrier"
        accent={fmtMonth(month)}
        action={
          <div className="pr-monthnav">
            <Link className="k-btn k-btn--icon" href={`/gestion/presence?mois=${shiftMonth(month, -1)}`} aria-label="Mois précédent">
              <ChevronLeft size={18} aria-hidden />
            </Link>
            <Link className="k-btn" href="/gestion/presence">
              Ce mois-ci
            </Link>
            <Link className="k-btn k-btn--icon" href={`/gestion/presence?mois=${shiftMonth(month, 1)}`} aria-label="Mois suivant">
              <ChevronRight size={18} aria-hidden />
            </Link>
          </div>
        }
      />

      <div className="pr-cal" role="grid" aria-label={`Calendrier de ${fmtMonth(month)}`}>
        <div className="pr-cal__head" role="row">
          {DAYS.map((d) => (
            <span key={d} role="columnheader">
              {d}
            </span>
          ))}
        </div>
        {weeks.map((week) => (
          <div key={week[0]} className="pr-cal__week" role="row">
            {week.map((date) => {
              const list = dates.get(date) ?? [];
              return (
                <div key={date} role="gridcell" className={cx("pr-day", date.slice(0, 7) !== month && "is-out", date === today && "is-today", !list.length && "is-empty")} aria-label={fmtDateLong(date)}>
                  <span className="pr-day__n">{Number(date.slice(8))}</span>
                  {list.map((p) => (
                    <Slot key={p.id} p={p} />
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div className="pr-agenda" aria-label={`Publications de ${fmtMonth(month)}`}>
        {agenda.length ? (
          agenda.map((date) => (
            <div key={date} className={cx("pr-agenda__day", date === today && "is-today")}>
              <div className="pr-agenda__date">
                <span>{DAYS[(weekdayOf(date) + 6) % 7]}</span>
                <b>{Number(date.slice(8))}</b>
              </div>
              <div className="pr-agenda__list">
                {(dates.get(date) ?? []).map((p) => (
                  <Slot key={p.id} p={p} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <EmptyState compact title="Rien ce mois-ci" body="Préparez les 30 prochains jours pour remplir le calendrier." />
        )}
      </div>

      <div className="pr-legend" aria-label="Séries">
        {SERIES.filter((s) => SERIES_INFO[s].available).map((s) => (
          <span key={s}>
            <i className={`pr-dot pr-dot--${s}`} aria-hidden />
            {SERIES_INFO[s].dayLabel} · {SERIES_INFO[s].label}
          </span>
        ))}
      </div>

      <SectionHeader n="02" title="File d’attente" lead={queue.length ? "De la plus proche à la plus lointaine. Ouvrez une publication pour la relire, la modifier et l’approuver." : undefined} />
      {queue.length ? (
        <ul className="pr-queue">
          {queue.map((p) => (
            <Row key={p.id} p={p} now={now} />
          ))}
        </ul>
      ) : (
        <EmptyState title="La file est vide" body="« Préparer les 30 prochains jours » donne à chaque jour de la grille sa publication, prête à relire. Le dimanche reste libre." />
      )}

      <SectionHeader n="03" title="Publiées récemment" />
      {published.length ? (
        <ul className="pr-queue">
          {published.map((p) => (
            <Row key={p.id} p={p} now={now} />
          ))}
        </ul>
      ) : (
        <EmptyState compact title="Aucune publication encore" body="Elles apparaîtront ici, avec leurs identifiants Facebook et Instagram." />
      )}

      <SectionHeader n="04" title="Journal" />
      {data.log.length ? (
        <ol className="pr-log">
          {data.log.slice(0, 12).map((l, i) => (
            <li key={`${l.at}-${i}`} className={`is-${l.level}`}>
              <span>
                <time dateTime={l.at}>{fmtWhen(l.at)}</time>
                {l.postId ? (
                  <Link href={`/gestion/presence/${l.postId}`} className="k-link">
                    {l.message}
                  </Link>
                ) : (
                  l.message
                )}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <EmptyState compact title="Journal vide" body="Chaque préparation, approbation, essai et publication y laisse une trace." />
      )}
    </>
  );
}
