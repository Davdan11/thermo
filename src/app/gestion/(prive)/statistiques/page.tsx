/* « Ce qui t'amène des clients » : quelles pages, quels canaux et quelles villes amènent de vraies
   demandes. Tout est agrégé sur le serveur (src/lib/gestion/statistiques.ts) : la page n'affiche que
   des totaux et, pour les dernières demandes, le prénom, la ville et le type. Sans témoin ni tiers.
   Même calcul que l'accueil (journal des demandes + conversations textos absentes du journal). */
import type { Metadata } from "next";
import { requireUser } from "@/lib/gestion/auth/dal";
import { STAFF } from "@/lib/gestion/equipe/garde"; // Chantier V : propriétaire et adjoints
import { loadDemandStats } from "@/lib/gestion/crm/service";
import { parsePeriod, PERIODS } from "@/lib/gestion/statistiques";
import { loadSiteHealth } from "@/lib/gestion/surveillance";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { PeriodTabs } from "@/components/gestion/kit/PeriodTabs";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { BarList, Donut, SeriesBars } from "@/components/gestion/StatsCharts";
import { SiteHealthPanel } from "@/components/gestion/SiteHealthPanel";

export const metadata: Metadata = { title: "Statistiques" };

const pct = (x: number) => `${Math.round(x * 100)} %`;
/** Chemins masqués (« :jeton », « /job ») : pas de lien. */
const linkable = (p: string) => !p.includes(":") && p !== "/job" && p !== "/gestion";
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;
const RING: Record<string, string> = { "google-naturel": "google-naturel", "google-ads": "google-ads", "fiche-google": "fiche-google", "facebook-instagram": "facebook", ia: "ia", direct: "direct", telephone: "telephone", texto: "texto" };

function delta(n: number, prev: number | null, short: string) {
  if (prev === null) return undefined;
  const diff = n - prev;
  return { text: `${diff > 0 ? `+${diff}` : diff === 0 ? "=" : `−${-diff}`} vs ${short} préc.`, tone: diff > 0 ? ("up" as const) : diff < 0 ? ("down" as const) : ("flat" as const) };
}

export default async function StatistiquesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  await requireUser({ roles: STAFF }); // Chantier V
  const period = parsePeriod((await searchParams).periode);
  const now = new Date();
  const [s, health] = await Promise.all([loadDemandStats(period, now), loadSiteHealth(now)]);
  const short = period === "tout" ? "" : `${period} j`;
  const subs = s.byKind.find((k) => k.id === "soumission")?.n ?? 0;
  const ring = new Map<string, { id: string; label: string; value: number }>();
  for (const c of s.channels) {
    const id = RING[c.id] ?? "autres";
    const cur = ring.get(id) ?? { id, label: id === "autres" ? "Autres" : c.label, value: 0 };
    cur.value += c.n;
    ring.set(id, cur);
  }

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Ce qui t’amène des clients</p>
          <h1 className="k-h1">
            Statistiques <em>et sources</em>
          </h1>
          <p className="k-lead">Demandes reçues du {s.range}, par le site, le téléphone et les textos. Lu dans le journal des demandes : aucun témoin, aucun outil externe.</p>
        </div>
        <PeriodTabs base="/gestion/statistiques" current={s.period} periods={PERIODS} />
      </Reveal>

      <div className="cr-grid3">
        <KpiTile label="Demandes" value={s.total} tone="ink" delta={delta(s.total, s.previousTotal, short)} />
        {s.byKind
          .filter((k) => k.n > 0 || k.prev)
          .map((k) => (
            <KpiTile key={k.id} label={k.label} value={k.n} delta={delta(k.n, k.prev, short)} />
          ))}
      </div>

      <SectionHeader n="01" title="Tendance" lead={`Demandes par ${s.trend.unit}, soumissions en encre. ${plural(subs, "soumission", "soumissions")} sur la période.`} />
      <Card>
        <SeriesBars points={s.trend.points.map((p) => ({ key: p.key, label: p.label, value: p.total, sub: p.soumissions }))} label={`Demandes par ${s.trend.unit}`} subLabel="soumissions" height={220} />
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

      <SectionHeader n="02" title="Canaux" accent="et pages d’arrivée" />
      <div className="cr-grid2">
        <Card title="Canaux" sub="D’où arrivent les gens">
          {ring.size ? <Donut items={[...ring.values()]} center={String(s.total)} centerSub="demandes" label="Demandes par canal" /> : null}
          <div style={{ marginTop: 18 }}>
            <BarList
              rows={s.channels.map((c) => ({
                key: c.id,
                label: c.label,
                n: c.n,
                note: `${pct(c.share)}${c.soumissions ? ` · ${c.soumissions} soum.` : ""}`,
                tone: c.id === "inconnu" || c.id === "non-transmis" ? "muted" : c.id === "telephone" || c.id === "texto" ? "ink" : "orange",
              }))}
              empty="Aucune demande sur la période."
            />
          </div>
          {s.tracking.unknown ? (
            <p className="g-note">
              {plural(s.tracking.unknown, "demande reçue", "demandes reçues")} avant la mise en place du suivi : classées « Inconnu (avant le suivi) », sans deviner.
              {s.tracking.since ? ` Suivi des arrivées depuis le ${s.tracking.since}.` : ""}
            </p>
          ) : null}
        </Card>
        <div className="cr-stack">
          <Card title="Pages d’arrivée" sub="Première page vue">
            <BarList rows={s.landings.map((l) => ({ key: l.path, label: l.path, href: linkable(l.path) ? l.path : undefined, n: l.n, note: l.soumissions ? `${l.soumissions} soum.` : undefined }))} empty="Aucune page d’arrivée connue pour l’instant : le suivi vient de commencer." />
          </Card>
          <Card title="Pages d’arrivée des soumissions" sub="Ce qui convertit">
            <BarList rows={s.soumissionLandings.map((l) => ({ key: l.path, label: l.path, href: linkable(l.path) ? l.path : undefined, n: l.n, note: pct(l.share), tone: "orange" }))} empty="Aucune soumission suivie sur la période." />
            {s.rdvFollowUp.soumissions ? (
              <p className="g-note">
                {s.rdvFollowUp.withRdv} {s.rdvFollowUp.withRdv > 1 ? "soumissions sur" : "soumission sur"} {s.rdvFollowUp.soumissions} ont ensuite réservé un appel ({pct(s.rdvFollowUp.withRdv / s.rdvFollowUp.soumissions)}).
              </p>
            ) : null}
          </Card>
        </div>
      </div>

      <SectionHeader n="03" title="Régions" accent="et villes" lead="Selon le code postal ou la ville indiquée." />
      <div className="cr-grid2">
        <Card title="Régions">
          <BarList rows={s.regions.map((r) => ({ key: r.name, label: r.name, n: r.n, tone: r.name === "Non précisée" ? "muted" : "ink" }))} empty="Aucune région connue." />
        </Card>
        <Card title="Villes">
          <BarList rows={s.cities.map((c) => ({ key: c.name, label: c.name, n: c.n }))} empty="Aucune ville connue." />
        </Card>
      </div>

      {s.referrers.length || s.campaigns.length ? (
        <div className="cr-grid2" style={{ marginTop: 16 }}>
          <Card title="Sites référents" sub="Domaine seulement">
            <BarList rows={s.referrers.map((r) => ({ key: r.host, label: r.host, n: r.n }))} empty="Aucun site référent sur la période." />
          </Card>
          <Card title="Campagnes" sub="utm_source · utm_campaign">
            <BarList rows={s.campaigns.map((c) => ({ key: c.label, label: c.label, n: c.n, tone: "orange" }))} empty="Aucune campagne marquée (utm) sur la période." />
          </Card>
        </div>
      ) : null}

      <SectionHeader n="04" title="Dernières demandes" lead="Prénom, ville et type seulement." />
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

      <Reveal as="section" className="g-section" delay={0.1}>
        <SiteHealthPanel h={health} />
      </Reveal>
    </>
  );
}
