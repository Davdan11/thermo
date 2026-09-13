import type { Metadata } from "next";
import Link from "next/link";
import { Gauge, HardHat, Plus, Wrench } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandLabel, brandOptions } from "@/lib/gestion/catalog";
import { installerStats } from "@/lib/gestion/matching";
import { loadInstallers } from "@/lib/gestion/service";
import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Installateurs" };

const pct = (x: number) => `${Math.round(x * 100)} %`;

export default async function InstallersPage({ searchParams }: { searchParams: Promise<{ ok?: string }> }) {
  await requireAdmin();
  const { ok } = await searchParams;
  const now = new Date();
  const { installers, jobs } = await loadInstallers();
  const logos = new Map(brandOptions().map((b) => [b.id, b.logo]));
  const stats = new Map(installers.map((i) => [i.id, installerStats(i.id, jobs, now)]));
  const all = [...stats.values()];
  const answered = all.reduce((s, x) => s + x.answered, 0);
  const accepted = all.reduce((s, x) => s + x.accepted, 0);
  const load = all.reduce((s, x) => s + x.load, 0);
  const active = installers.filter((i) => i.active).length;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">Installateurs</h1>
          <p className="k-lead">Touchez une fiche pour la modifier ou la mettre en pause. Le taux d’acceptation compte les offres acceptées sur les offres répondues ou expirées.</p>
        </div>
        <Link href="/gestion/installateurs/nouveau" className="k-btn k-btn--primary k-btn--lg">
          <Plus size={18} aria-hidden /> Ajouter
        </Link>
      </Reveal>
      {ok ? <Reveal><p className="g-alert g-alert--ok" role="status">{ok === "ajoute" ? "Installateur ajouté." : "Fiche enregistrée."}</p></Reveal> : null}

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Actifs" icon={<HardHat size={16} />} value={active} tone="ink" sub={`${installers.length - active} en pause`} />
        <KpiTile label="Jobs en cours" icon={<Wrench size={16} />} value={load} sub="attribués ou planifiés" />
        <KpiTile label="Taux d’acceptation" icon={<Gauge size={16} />} value={answered ? pct(accepted / answered) : "—"} sub={answered ? `${accepted} sur ${answered} offres` : "Aucune offre répondue"} />
        <KpiTile label="Offres répondues" value={answered} sub="acceptées, refusées ou expirées" />
      </div>

      {installers.length ? (
        <StaggerList className="g-cards">
          {installers.map((i) => {
            const s = stats.get(i.id)!;
            return (
              <Link key={i.id} href={`/gestion/installateurs/${i.id}`} className="g-inst" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ minWidth: 0 }}>
                    <div className="g-cand__name">{i.company}</div>
                    <div className="g-cand__sub">{i.contactName} · {i.base?.city ?? i.basePostalCode}</div>
                  </div>
                  <Chip tone={i.active ? "ok" : "muted"} dot>
                    {i.active ? "Actif" : "En pause"}
                  </Chip>
                </div>
                <div className="g-inst__logos">
                  {i.brands.slice(0, 6).map((b) => {
                    const logo = logos.get(b);
                    // eslint-disable-next-line @next/next/no-img-element
                    return logo ? <img key={b} src={logo} alt={brandLabel(b)} loading="lazy" /> : <span key={b} className="g-tag">{brandLabel(b)}</span>;
                  })}
                  {i.brands.length > 6 ? <span className="g-count">+{i.brands.length - 6}</span> : null}
                </div>
                <div className="g-tags">
                  <span className="g-tag">Rayon {i.radiusKm} km{i.extraRegions.length ? ` + ${i.extraRegions.length} région${i.extraRegions.length > 1 ? "s" : ""}` : ""}</span>
                  <span className="g-tag">{i.systemTypes.length ? i.systemTypes.map((t) => SYSTEM_TYPE_LABELS[t]).join(", ") : "Tous les types"}</span>
                </div>
                <div className="cr-facts" style={{ marginTop: 0, background: "var(--g-line)" }}>
                  <div style={{ background: "var(--g-paper-warm)" }}>
                    <span style={{ color: "var(--g-faint)" }}>Acceptation</span>
                    <strong style={{ color: "var(--g-ink)" }}>{s.answered ? pct(s.accepted / s.answered) : "—"}</strong>
                  </div>
                  <div style={{ background: "var(--g-paper-warm)" }}>
                    <span style={{ color: "var(--g-faint)" }}>En cours</span>
                    <strong style={{ color: "var(--g-ink)" }}>
                      {s.load}
                      {i.maxOpenJobs ? ` / ${i.maxOpenJobs}` : ""}
                    </strong>
                  </div>
                </div>
                <div className="g-count">{s.answered ? `${s.accepted} acceptée${s.accepted > 1 ? "s" : ""}, ${s.refused} refusée${s.refused > 1 ? "s" : ""}, ${s.expired} expirée${s.expired > 1 ? "s" : ""}` : "Aucune offre répondue pour l’instant"}</div>
              </Link>
            );
          })}
        </StaggerList>
      ) : (
        <EmptyState
          icon={<HardHat size={20} />}
          title="Aucun installateur"
          body="Ajoutez-en un, ou partez d’une candidature reçue par la page Partenaires."
          action={
            <Link href="/gestion/installateurs/nouveau" className="k-btn k-btn--primary">
              <Plus size={16} aria-hidden /> Ajouter un installateur
            </Link>
          }
        />
      )}
    </>
  );
}
