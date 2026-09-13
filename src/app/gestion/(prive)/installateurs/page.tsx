import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandLabel, brandOptions } from "@/lib/gestion/catalog";
import { installerStats } from "@/lib/gestion/matching";
import { loadInstallers } from "@/lib/gestion/service";
import { SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Installateurs" };

export default async function InstallersPage({ searchParams }: { searchParams: Promise<{ ok?: string }> }) {
  await requireAdmin();
  const { ok } = await searchParams;
  const now = new Date();
  const { installers, jobs } = await loadInstallers();
  const logos = new Map(brandOptions().map((b) => [b.id, b.logo]));

  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Réseau</p>
          <h1 className="g-h1">Installateurs</h1>
          <p className="g-lead">{installers.filter((i) => i.active).length} actifs sur {installers.length}. Touchez une fiche pour la modifier ou la mettre en pause.</p>
        </div>
        <Link href="/gestion/installateurs/nouveau" className="g-btn g-btn--primary"><Plus size={18} aria-hidden /> Ajouter</Link>
      </Reveal>
      {ok ? <Reveal><p className="g-alert g-alert--ok" role="status">{ok === "ajoute" ? "Installateur ajouté." : "Fiche enregistrée."}</p></Reveal> : null}

      {installers.length ? (
        <StaggerList className="g-cards" >
          {installers.map((i) => {
            const s = installerStats(i.id, jobs, now);
            return (
              <Link key={i.id} href={`/gestion/installateurs/${i.id}`} className="g-inst" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ minWidth: 0 }}>
                    <div className="g-cand__name">{i.company}</div>
                    <div className="g-cand__sub">{i.contactName} · {i.base?.city ?? i.basePostalCode}</div>
                  </div>
                  <span className={`g-pill ${i.active ? "g-pill--termine" : "g-pill--muted"}`}>{i.active ? "Actif" : "En pause"}</span>
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
                <div className="g-count">
                  {s.load} job{s.load > 1 ? "s" : ""} en cours{i.maxOpenJobs ? ` sur ${i.maxOpenJobs}` : ""} · {s.answered ? `${s.accepted} accepté${s.accepted > 1 ? "s" : ""} sur ${s.answered} offre${s.answered > 1 ? "s" : ""}` : "aucune offre répondue"}
                </div>
              </Link>
            );
          })}
        </StaggerList>
      ) : (
        <p className="g-empty">Aucun installateur. Ajoutez-en un, ou partez d’une candidature reçue.</p>
      )}
    </>
  );
}
