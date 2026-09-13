/* ==================================================================
   /gestion/carte — Chantier R : où arrivent les demandes (par MRC ou
   par RTA, sur une période) et qui les couvre. Les zones sans
   installateur et les zones saturées passent en tête de la liste.
   Chiffres réels seulement : journal des demandes, installateurs.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { HardHat, MapPinned, ShieldAlert, Timer, UserPlus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { regionName } from "@/lib/gestion/regions";
import { zoneAnchor } from "@/lib/gestion/reseau/recrutement";
import { carteView, parsePeriod, type MapView } from "@/lib/gestion/reseau/views";
import { GAP_STATUSES, ZONE_STATUS_LABELS, type ZoneMode, type ZoneStatus } from "@/lib/gestion/reseau/zones";
import { PERIODS, type PeriodId } from "@/lib/gestion/statistiques";
import { Card } from "@/components/gestion/kit/Card";
import { Chip, type ChipTone } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { CoverageMap } from "@/components/gestion/reseau/CoverageMap";
import "@/components/gestion/reseau/reseau.css";

export const metadata: Metadata = { title: "Carte" };

const TONE: Record<ZoneStatus, ChipTone> = { "sans-installateur": "bad", bloquee: "bad", saturee: "orange", couverte: "ok" };
const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export default async function CartePage({ searchParams }: { searchParams: Promise<{ periode?: string; zones?: string; vue?: string }> }) {
  await requireAdmin();
  const sp = await searchParams;
  const period = parsePeriod(sp.periode);
  const mode: ZoneMode = sp.zones === "rta" ? "rta" : "mrc";
  const view: MapView = sp.vue === "montreal" ? "montreal" : "quebec";
  const v = await carteView({ period, mode, view });
  const { zones, total, unlocated } = v.result;
  const gaps = zones.filter((z) => GAP_STATUSES.has(z.status));
  const saturated = zones.filter((z) => z.status === "saturee");
  const gapDemands = gaps.reduce((s, z) => s + z.demands, 0);
  const href = (patch: { periode?: PeriodId; zones?: ZoneMode; vue?: MapView }) => {
    const q = new URLSearchParams();
    const p = patch.periode ?? period;
    const m = patch.zones ?? mode;
    const w = patch.vue ?? view;
    if (p !== "90") q.set("periode", p);
    if (m !== "mrc") q.set("zones", m);
    if (w !== "quebec") q.set("vue", w);
    const s = q.toString();
    return s ? `/gestion/carte?${s}` : "/gestion/carte";
  };
  const periodLabel = PERIODS.find((p) => p.id === period)?.label ?? "";

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Demande et <em>couverture</em>
          </h1>
          <p className="k-lead">Chaque cercle est une zone où des demandes sont arrivées ; les anneaux pointillés sont les rayons des installateurs. En rouge : personne ne peut les prendre.</p>
        </div>
        <div className="g-actions">
          <Link href="/gestion/recrutement" className="k-btn k-btn--primary">
            <UserPlus size={16} aria-hidden /> Recrutement
          </Link>
        </div>
      </Reveal>

      <div className="rs-filters">
        <nav className="k-tabs" aria-label="Période">
          {PERIODS.map((p) => (
            <Link key={p.id} href={href({ periode: p.id })} aria-current={p.id === period ? "page" : undefined} scroll={false} prefetch={false}>
              {p.label}
            </Link>
          ))}
        </nav>
        <nav className="k-tabs" aria-label="Regroupement">
          <Link href={href({ zones: "mrc" })} aria-current={mode === "mrc" ? "page" : undefined} scroll={false} prefetch={false}>
            Par MRC
          </Link>
          <Link href={href({ zones: "rta" })} aria-current={mode === "rta" ? "page" : undefined} scroll={false} prefetch={false}>
            Par RTA
          </Link>
        </nav>
        <nav className="k-tabs" aria-label="Cadre">
          <Link href={href({ vue: "quebec" })} aria-current={view === "quebec" ? "page" : undefined} scroll={false} prefetch={false}>
            Québec
          </Link>
          <Link href={href({ vue: "montreal" })} aria-current={view === "montreal" ? "page" : undefined} scroll={false} prefetch={false}>
            Grand Montréal
          </Link>
        </nav>
      </div>

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Demandes" icon={<MapPinned size={16} />} value={total} tone="ink" sub={`${periodLabel.toLowerCase()} · ${unlocated} sans lieu reconnu`} />
        <KpiTile label="Sans installateur" icon={<ShieldAlert size={16} />} value={gaps.length} tone={gaps.length ? "orange" : "paper"} sub={gaps.length ? `${plural(gapDemands, "demande", "demandes")} sans preneur` : "aucune zone orpheline"} />
        <KpiTile label="Saturées" icon={<Timer size={16} />} value={saturated.length} sub="installateurs complets ou agenda plein" />
        <KpiTile label="Installateurs actifs" icon={<HardHat size={16} />} value={v.activeInstallers} sub={`${v.installers.filter((i) => i.state === "disponible").length} disponibles sur la carte`} />
      </div>

      {total || v.installers.length ? (
        <div className="rs-cartegrid">
          <Card pad={false} className="rs-mapcard">
            <CoverageMap zones={zones} installers={v.installers} background={v.background} bounds={v.bounds} label={`Carte des demandes (${periodLabel.toLowerCase()}) et des rayons des installateurs`} />
          </Card>
          <aside aria-label="Zones classées">
            <Card title="Zones classées" sub={`${plural(zones.length, "zone", "zones")} · ${mode === "mrc" ? "par MRC (RTA si la MRC est inconnue)" : "par région de tri d’acheminement"}`}>
              {zones.length ? (
                <ol className="rs-zonelist">
                  {zones.map((z, i) => (
                    <li key={z.key} id={zoneAnchor(z.key)} style={{ ["--i" as string]: i }}>
                      <div className={`rs-zonerow is-${z.status}`}>
                        <div>
                          <div className="rs-zonerow__name">{z.mode === "rta" ? `${z.label} · ${z.place}` : z.label}</div>
                          <Chip tone={TONE[z.status]} dot>
                            {ZONE_STATUS_LABELS[z.status]}
                          </Chip>{" "}
                          {z.region ? <small className="g-hint">{regionName(z.region)}</small> : null}
                        </div>
                        <div className="rs-zonerow__count">
                          {z.demands}
                          <small>demande{z.demands > 1 ? "s" : ""}</small>
                        </div>
                        <div className="rs-zonerow__who">
                          {z.covering.length
                            ? z.covering.map((c) => (
                                <span key={c.id} title={c.reason}>
                                  {c.company} ({c.via === "rayon" ? `${c.km} km` : "région cochée"}
                                  {c.state !== "disponible" ? ` · ${c.state === "sature" ? "saturé" : "bloqué"}` : ""})
                                </span>
                              ))
                            : "Aucun installateur ne couvre cette zone."}
                          {z.approximate ? <span>· position approximative (préfixe du code postal)</span> : null}
                        </div>
                      </div>
                    </li>
                  ))}
                </ol>
              ) : (
                <p className="g-hint">Aucune demande localisée sur cette période.</p>
              )}
            </Card>
          </aside>
        </div>
      ) : (
        <EmptyState icon={<MapPinned size={20} />} title="Rien à placer pour l’instant" body="Les demandes du site (code postal ou municipalité) et les installateurs apparaîtront ici." />
      )}
    </>
  );
}
