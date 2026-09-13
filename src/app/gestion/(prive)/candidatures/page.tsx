import type { Metadata } from "next";
import Link from "next/link";
import { Inbox, UserPlus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { brandHints, regionHints } from "@/lib/gestion/candidatures";
import { brandLabel, brandOptions } from "@/lib/gestion/catalog";
import { regionName } from "@/lib/gestion/regions";
import { loadCandidatures } from "@/lib/gestion/service";
import { formatDateTime } from "@/lib/gestion/summary";
import { candidatureStatusAction } from "../actions";
import { Chip, type ChipTone } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";

export const metadata: Metadata = { title: "Candidatures" };

const STATUS: Record<string, { label: string; tone: ChipTone }> = {
  nouvelle: { label: "Nouvelle", tone: "orange" },
  ajoutee: { label: "Ajoutée", tone: "ok" },
  ecartee: { label: "Écartée", tone: "muted" },
};

export default async function CandidaturesPage() {
  await requireAdmin();
  const list = await loadCandidatures();
  const brands = brandOptions();
  const fresh = list.filter((c) => c.status === "nouvelle").length;
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Page Partenaires</p>
          <h1 className="k-h1">Candidatures</h1>
          <p className="k-lead">
            {fresh ? `${fresh} nouvelle${fresh > 1 ? "s" : ""}. ` : ""}Chaque candidature reçue sur /partenaires est gardée ici. « Ajouter » ouvre la fiche pré-remplie ; vous confirmez les marques et les régions devinées.
          </p>
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
                  <Chip tone={STATUS[c.status].tone} dot>
                    {STATUS[c.status].label}
                  </Chip>
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
                    {b.map((id) => (
                      <Chip key={id} tone="ok">
                        {brandLabel(id)}
                      </Chip>
                    ))}
                    {r.map((code) => (
                      <Chip key={code} tone="blue">
                        {regionName(code)}
                      </Chip>
                    ))}
                  </div>
                ) : null}
                <div className="g-actions" style={{ marginTop: "auto" }}>
                  {c.status === "ajoutee" && c.installerId ? (
                    <Link href={`/gestion/partenaires/${c.installerId}`} className="k-btn">Voir la fiche</Link>
                  ) : (
                    <>
                      <Link href={`/gestion/partenaires/nouveau?candidature=${c.id}`} className="k-btn k-btn--primary"><UserPlus size={16} aria-hidden /> Ajouter comme installateur</Link>
                      <form action={candidatureStatusAction.bind(null, c.id, c.status === "ecartee" ? "nouvelle" : "ecartee")}>
                        <SubmitButton className="k-btn k-btn--ghost" pendingLabel="…">{c.status === "ecartee" ? "Remettre" : "Écarter"}</SubmitButton>
                      </form>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </StaggerList>
      ) : (
        <EmptyState icon={<Inbox size={20} />} title="Aucune candidature pour l’instant" body="Elles arrivent par la page Partenaires du site." />
      )}
    </>
  );
}
