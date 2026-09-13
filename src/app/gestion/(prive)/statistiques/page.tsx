/* « Ce qui t'amène des clients » : quelles pages, quels canaux et quelles villes amènent de vraies
   demandes. Tout est agrégé sur le serveur (src/lib/gestion/statistiques.ts) : la page n'affiche que
   des totaux et, pour les dernières demandes, le prénom, la ville et le type. Sans témoin ni tiers. */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { loadStats, parsePeriod, PERIODS } from "@/lib/gestion/statistiques";
import { loadSiteHealth } from "@/lib/gestion/surveillance";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { BarList, TrendChart } from "@/components/gestion/StatsCharts";
import { SiteHealthPanel } from "@/components/gestion/SiteHealthPanel";

export const metadata: Metadata = { title: "Statistiques" };

const pct = (x: number) => `${Math.round(x * 100)} %`;
/** Chemins masqués (« :jeton », « /job ») : pas de lien. */
const linkable = (p: string) => !p.includes(":") && p !== "/job" && p !== "/gestion";
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

function Delta({ n, prev, short }: { n: number; prev: number | null; short: string }) {
  if (prev === null) return null;
  const diff = n - prev;
  return (
    <span className={`g-stat__d${diff > 0 ? " g-stat__d--up" : diff < 0 ? " g-stat__d--down" : ""}`}>
      {diff > 0 ? `+${diff}` : diff === 0 ? "=" : `−${-diff}`} vs {short} préc.
    </span>
  );
}

export default async function StatistiquesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireAdmin();
  const period = parsePeriod((await searchParams).periode);
  const now = new Date();
  const [s, health] = await Promise.all([loadStats(period, now), loadSiteHealth(now)]);
  const short = period === "tout" ? "" : `${period} j`;
  const subs = s.byKind.find((k) => k.id === "soumission")?.n ?? 0;

  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Ce qui t’amène des clients</p>
          <h1 className="g-h1">Statistiques</h1>
          <p className="g-lead">
            Demandes reçues du {s.range}, par le site et le téléphone. Lu dans le journal des demandes : aucun témoin, aucun outil externe.
          </p>
        </div>
        <nav className="g-seg" aria-label="Période">
          {PERIODS.map((p) => (
            <Link key={p.id} href={p.id === "30" ? "/gestion/statistiques" : `/gestion/statistiques?periode=${p.id}`} aria-current={p.id === s.period ? "page" : undefined} scroll={false}>
              {p.label}
            </Link>
          ))}
        </nav>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="g-stats" role="list" aria-label="Demandes par type">
          <div className="g-stat g-stat--hot" role="listitem">
            <span className="g-stat__n">{s.total}</span>
            <span className="g-stat__l">Demandes</span>
            <Delta n={s.total} prev={s.previousTotal} short={short} />
          </div>
          {s.byKind.map((k) => (
            <div key={k.id} className={`g-stat${k.n === 0 ? " g-stat--zero" : ""}`} role="listitem">
              <span className="g-stat__n">{k.n}</span>
              <span className="g-stat__l">{k.label}</span>
              <Delta n={k.n} prev={k.prev} short={short} />
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal as="section" className="g-section" delay={0.08}>
        <div className="g-card g-card__pad">
          <div className="g-card__head">
            <div>
              <h2 className="g-h2">Tendance</h2>
              <p className="g-card__sub">Demandes par {s.trend.unit}, soumissions en orange.</p>
            </div>
            <span className="g-count">{plural(subs, "soumission", "soumissions")}</span>
          </div>
          <TrendChart points={s.trend.points} unit={s.trend.unit} />
        </div>
      </Reveal>

      <div className="g-grid g-grid--2 g-section">
        <Reveal delay={0.1}>
          <div className="g-card g-card__pad">
            <div className="g-card__head">
              <h2 className="g-h2">Canaux</h2>
              <span className="g-count">d’où arrivent les gens</span>
            </div>
            <BarList
              rows={s.channels.map((c) => ({
                key: c.id,
                label: c.label,
                n: c.n,
                note: `${pct(c.share)}${c.soumissions ? ` · ${c.soumissions} soum.` : ""}`,
                tone: c.id === "inconnu" || c.id === "non-transmis" ? "muted" : c.id === "telephone" ? "ink" : "orange",
              }))}
              empty="Aucune demande sur la période."
            />
            {s.tracking.unknown ? (
              <p className="g-note">
                {plural(s.tracking.unknown, "demande reçue", "demandes reçues")} avant la mise en place du suivi : classées « Inconnu (avant le suivi) », sans deviner.
                {s.tracking.since ? ` Suivi des arrivées depuis le ${s.tracking.since}.` : ""}
              </p>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="g-card g-card__pad">
            <div className="g-card__head">
              <h2 className="g-h2">Pages d’arrivée</h2>
              <span className="g-count">première page vue</span>
            </div>
            <BarList
              rows={s.landings.map((l) => ({ key: l.path, label: l.path, href: linkable(l.path) ? l.path : undefined, n: l.n, note: l.soumissions ? `${l.soumissions} soum.` : undefined }))}
              empty="Aucune page d’arrivée connue pour l’instant : le suivi vient de commencer."
            />
          </div>
        </Reveal>
      </div>

      <div className="g-grid g-grid--2 g-section">
        <Reveal delay={0.14}>
          <div className="g-card g-card__pad">
            <div className="g-card__head">
              <h2 className="g-h2">Pages d’arrivée des soumissions</h2>
              <span className="g-count">ce qui convertit</span>
            </div>
            <BarList
              rows={s.soumissionLandings.map((l) => ({ key: l.path, label: l.path, href: linkable(l.path) ? l.path : undefined, n: l.n, note: pct(l.share), tone: "orange" }))}
              empty="Aucune soumission suivie sur la période."
            />
            {s.rdvFollowUp.soumissions ? (
              <p className="g-note">
                {s.rdvFollowUp.withRdv} {s.rdvFollowUp.withRdv > 1 ? "soumissions sur" : "soumission sur"} {s.rdvFollowUp.soumissions} ont ensuite réservé un appel ({pct(s.rdvFollowUp.withRdv / s.rdvFollowUp.soumissions)}).
              </p>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="g-card g-card__pad">
            <div className="g-card__head">
              <h2 className="g-h2">Régions et villes</h2>
              <span className="g-count">selon le code postal</span>
            </div>
            <h3 className="g-subhead">Régions</h3>
            <BarList rows={s.regions.map((r) => ({ key: r.name, label: r.name, n: r.n, tone: r.name === "Non précisée" ? "muted" : "ink" }))} empty="Aucune région connue." />
            <h3 className="g-subhead">Villes</h3>
            <BarList rows={s.cities.map((c) => ({ key: c.name, label: c.name, n: c.n }))} empty="Aucune ville connue." />
          </div>
        </Reveal>
      </div>

      {s.referrers.length || s.campaigns.length ? (
        <div className="g-grid g-grid--2 g-section">
          <Reveal delay={0.18}>
            <div className="g-card g-card__pad">
              <div className="g-card__head">
                <h2 className="g-h2">Sites référents</h2>
                <span className="g-count">domaine seulement</span>
              </div>
              <BarList rows={s.referrers.map((r) => ({ key: r.host, label: r.host, n: r.n }))} empty="Aucun site référent sur la période." />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="g-card g-card__pad">
              <div className="g-card__head">
                <h2 className="g-h2">Campagnes</h2>
                <span className="g-count">utm_source · utm_campaign</span>
              </div>
              <BarList rows={s.campaigns.map((c) => ({ key: c.label, label: c.label, n: c.n, tone: "orange" }))} empty="Aucune campagne marquée (utm) sur la période." />
            </div>
          </Reveal>
        </div>
      ) : null}

      <Reveal as="section" className="g-section" delay={0.2}>
        <div className="g-section__head">
          <h2 className="g-h2">Dernières demandes</h2>
          <span className="g-count">prénom, ville et type seulement</span>
        </div>
        {s.recent.length ? (
          <StaggerList className="g-joblist">
            {s.recent.map((r) => (
              <div key={r.key} className="g-leadrow">
                <span className="g-leadrow__who">
                  <span className="g-kind">{r.kind}</span>
                  {r.firstName} · {r.city}
                </span>
                <span className="g-leadrow__when">{r.when}</span>
                <span className="g-leadrow__meta">{r.channel}</span>
              </div>
            ))}
          </StaggerList>
        ) : (
          <p className="g-empty">Aucune demande sur la période.</p>
        )}
      </Reveal>

      <Reveal as="section" className="g-section" delay={0.22}>
        <SiteHealthPanel h={health} />
      </Reveal>
    </>
  );
}
