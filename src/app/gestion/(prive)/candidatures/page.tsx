import type { Metadata } from "next";
import Link from "next/link";
import { UserPlus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandHints, regionHints } from "@/lib/gestion/candidatures";
import { brandLabel, brandOptions } from "@/lib/gestion/catalog";
import { regionName } from "@/lib/gestion/regions";
import { loadCandidatures } from "@/lib/gestion/service";
import { formatDateTime } from "@/lib/gestion/summary";
import { candidatureStatusAction } from "../actions";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";

export const metadata: Metadata = { title: "Candidatures" };

const STATUS = {
  nouvelle: { label: "Nouvelle", cls: "g-pill--nouveau" },
  ajoutee: { label: "Ajoutée", cls: "g-pill--termine" },
  ecartee: { label: "Écartée", cls: "g-pill--muted" },
} as const;

export default async function CandidaturesPage() {
  await requireAdmin();
  const list = await loadCandidatures();
  const brands = brandOptions();
  return (
    <>
      <Reveal className="g-head">
        <div>
          <p className="g-eyebrow">Page Partenaires</p>
          <h1 className="g-h1">Candidatures</h1>
          <p className="g-lead">Chaque candidature reçue sur /partenaires est gardée ici. « Ajouter » ouvre la fiche pré-remplie ; vous confirmez les marques et les régions devinées.</p>
        </div>
      </Reveal>
      {list.length ? (
        <StaggerList className="g-cards">
          {list.map((c) => {
            const b = brandHints(c.brandsText, brands);
            const r = regionHints(c.regionText);
            return (
              <article key={c.id} className="g-inst" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div style={{ minWidth: 0 }}>
                    <div className="g-cand__name">{c.company}</div>
                    <div className="g-cand__sub">Reçue le {formatDateTime(c.receivedAt)}</div>
                  </div>
                  <span className={`g-pill ${STATUS[c.status].cls}`}>{STATUS[c.status].label}</span>
                </div>
                <dl className="g-kv">
                  <dt>Contact</dt>
                  <dd>{c.contact}</dd>
                  <dt>Téléphone</dt>
                  <dd><a href={`tel:${c.phone.replace(/\D/g, "")}`}>{c.phone}</a></dd>
                  <dt>Courriel</dt>
                  <dd><a href={`mailto:${c.email}`}>{c.email}</a></dd>
                  <dt>RBQ</dt>
                  <dd>{c.rbq}</dd>
                  <dt>Volume</dt>
                  <dd>{c.volume || "—"}</dd>
                  <dt>Marques</dt>
                  <dd>{c.brandsText || "—"}</dd>
                  <dt>Région</dt>
                  <dd>{c.regionText || "—"}</dd>
                </dl>
                {b.length || r.length ? (
                  <div className="g-tags">
                    {b.map((id) => <span key={id} className="g-tag g-tag--ok">{brandLabel(id)}</span>)}
                    {r.map((code) => <span key={code} className="g-tag">{regionName(code)}</span>)}
                  </div>
                ) : null}
                <div className="g-actions" style={{ marginTop: "auto" }}>
                  {c.status === "ajoutee" && c.installerId ? (
                    <Link href={`/gestion/installateurs/${c.installerId}`} className="g-btn g-btn--ghost">Voir la fiche</Link>
                  ) : (
                    <>
                      <Link href={`/gestion/installateurs/nouveau?candidature=${c.id}`} className="g-btn g-btn--primary"><UserPlus size={16} aria-hidden /> Ajouter comme installateur</Link>
                      <form action={candidatureStatusAction.bind(null, c.id, c.status === "ecartee" ? "nouvelle" : "ecartee")}>
                        <SubmitButton className="g-btn g-btn--quiet" pendingLabel="…">{c.status === "ecartee" ? "Remettre" : "Écarter"}</SubmitButton>
                      </form>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </StaggerList>
      ) : (
        <p className="g-empty">Aucune candidature pour l’instant. Elles arrivent par la page Partenaires du site.</p>
      )}
    </>
  );
}
