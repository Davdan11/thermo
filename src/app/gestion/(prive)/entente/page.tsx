/* ==================================================================
   /gestion/entente — versions de l'entente de partenariat.
   1. Brouillon (texte de l'avocat) → 2. « Texte final validé » →
   3. Publiée : tous les partenaires doivent la signer.
   Le gabarit ne contient que les titres des articles ; chaque
   paragraphe marqué « [À rédiger par l'avocat] » bloque la validation.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { FilePen, FileSignature, Plus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { placeholderRefs, publishedVersion } from "@/lib/gestion/partenaires/agreement";
import { longDate } from "@/lib/gestion/partenaires/format";
import { readPartenaires } from "@/lib/gestion/partenaires/store";
import { AGREEMENT_STATUS_LABELS } from "@/lib/gestion/partenaires/types";
import { createDraftAction, sendAgreementToAllAction } from "../partenaires-actions";
import { Chip, type ChipTone } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal, StaggerList } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { ActionButton } from "@/components/partenaires/admin/AdminTools";
import "@/components/partenaires/admin/partenaires.css";

export const metadata: Metadata = { title: "Entente de partenariat" };

const TONE: Record<string, ChipTone> = { brouillon: "warn", validee: "blue", publiee: "ok", remplacee: "muted" };

export default async function EntentePage() {
  await requireAdmin();
  const d = await readPartenaires();
  const versions = [...d.agreements].sort((a, b) => b.number - a.number);
  const live = publishedVersion(d);
  const draft = versions.find((v) => v.status === "brouillon" || v.status === "validee");

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réseau</p>
          <h1 className="k-h1">
            Entente <em>de partenariat</em>
          </h1>
          <p className="k-lead">Le texte vient de l’avocat. L’outil garde les versions, bloque l’envoi tant qu’une version n’est pas marquée « texte final validé », et fait re-signer tout le réseau à chaque nouvelle version.</p>
        </div>
        {draft ? (
          <Link href={`/gestion/entente/${draft.id}`} className="k-btn k-btn--primary k-btn--lg">
            <FilePen size={18} aria-hidden /> Reprendre la version {draft.number}
          </Link>
        ) : (
          <form action={createDraftAction}>
            <SubmitButton className="k-btn k-btn--primary k-btn--lg" pendingLabel="…">
              <Plus size={18} aria-hidden /> {live ? "Préparer une nouvelle version" : "Commencer l’entente"}
            </SubmitButton>
          </form>
        )}
      </Reveal>

      <ol className="pa-steps" style={{ marginBottom: 22 }}>
        <li className={versions.length ? "is-done" : "is-now"}>
          <b>1. Rédiger</b>Texte de l’avocat, article par article
        </li>
        <li className={versions.some((v) => v.validatedAt) ? "is-done" : versions.length ? "is-now" : ""}>
          <b>2. Valider</b>« Texte final validé » : il ne change plus
        </li>
        <li className={live ? "is-done" : versions.some((v) => v.status === "validee") ? "is-now" : ""}>
          <b>3. Publier</b>Tous les partenaires signent
        </li>
      </ol>

      {live ? (
        <Reveal className="pa-banner pa-banner--ink" >
          <FileSignature size={22} aria-hidden />
          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <b>Version {live.number} en vigueur depuis le {live.publishedAt ? longDate(live.publishedAt) : "—"}</b>
              <p>{d.signatures.filter((s) => s.versionId === live.id).length} signature(s). Délai de grâce : {live.graceDays ?? d.settings.graceDays} jours pour les partenaires déjà en place.</p>
            </div>
            <ActionButton action={sendAgreementToAllAction} className="k-btn k-btn--primary" pending="Envoi…">
              Envoyer à tous ceux qui doivent signer
            </ActionButton>
          </div>
        </Reveal>
      ) : null}

      {versions.length ? (
        <StaggerList className="g-cards">
          {versions.map((v) => {
            const todo = placeholderRefs(v).length;
            const count = d.signatures.filter((s) => s.versionId === v.id).length;
            return (
              <Link key={v.id} href={`/gestion/entente/${v.id}`} className="g-inst" style={{ height: "100%" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
                  <div className="g-cand__name">Version {v.number}</div>
                  <Chip tone={TONE[v.status]} dot>
                    {AGREEMENT_STATUS_LABELS[v.status]}
                  </Chip>
                </div>
                <div className="g-cand__sub">{v.title}</div>
                <dl className="g-kv">
                  <dt>Créée</dt>
                  <dd>{longDate(v.createdAt)}</dd>
                  {v.validatedAt ? (
                    <>
                      <dt>Validée</dt>
                      <dd>{longDate(v.validatedAt)}</dd>
                    </>
                  ) : null}
                  {v.publishedAt ? (
                    <>
                      <dt>Publiée</dt>
                      <dd>{longDate(v.publishedAt)}</dd>
                    </>
                  ) : null}
                  <dt>Articles</dt>
                  <dd>{v.articles.length}</dd>
                  <dt>Signatures</dt>
                  <dd>{count}</dd>
                </dl>
                {v.status === "brouillon" && todo ? <Chip tone="warn">{todo} paragraphe{todo > 1 ? "s" : ""} à rédiger par l’avocat</Chip> : null}
              </Link>
            );
          })}
        </StaggerList>
      ) : (
        <EmptyState icon={<FileSignature size={20} />} title="Aucune version pour l’instant" body="Commencez l’entente : le gabarit contient les onze articles prévus (objet, commission de 10 % avant taxes, photos et numéros de série, garantie de main-d’œuvre…), sans aucun texte juridique." />
      )}
    </>
  );
}
