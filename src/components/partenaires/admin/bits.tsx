/* Éléments serveur partagés des pages du volet A dans /gestion : puces d'état, niveau, grille de photos, arcs. */
import { Chip, type ChipTone } from "@/components/gestion/kit/Chip";
import { reviewPhotoAction } from "@/app/gestion/(prive)/partenaires-actions";
import { AGREEMENT_CODE_LABELS, type AgreementState } from "@/lib/gestion/partenaires/agreement";
import { DOC_STATE_LABELS, ymdLong, type DocState } from "@/lib/gestion/partenaires/compliance";
import { longDateTime } from "@/lib/gestion/partenaires/format";
import { TIER_LABELS, type Tier } from "@/lib/gestion/partenaires/types";
import type { AdminPhotoDTO } from "@/lib/gestion/terrain/service";
import { PhotoReview } from "./AdminTools";

export function AgreementChip({ state }: { state: AgreementState }) {
  const tone: ChipTone =
    state.code === "signee" ? "ok" : state.code === "ouverte" ? "blue" : state.code === "envoyee" ? "orange" : state.code === "a-resigner" ? "warn" : state.code === "non-envoyee" ? (state.blocking ? "bad" : "warn") : "muted";
  return (
    <Chip tone={tone} dot>
      {AGREEMENT_CODE_LABELS[state.code]}
      {state.version && state.code !== "aucune-version" ? ` · v${state.version.number}` : ""}
    </Chip>
  );
}

export function DocChip({ state, expiresOn }: { state: DocState; expiresOn?: string | null }) {
  const tone: ChipTone = state === "valide" ? "ok" : state === "bientot" ? "warn" : state === "expiree" ? "bad" : "muted";
  return (
    <Chip tone={tone} dot title={expiresOn ? `Expire le ${ymdLong(expiresOn)}` : undefined}>
      {DOC_STATE_LABELS[state]}
      {expiresOn && state !== "manquante" ? ` · ${ymdLong(expiresOn)}` : ""}
    </Chip>
  );
}

export function TierChip({ tier, imposed }: { tier: Tier; imposed?: boolean }) {
  return (
    <span className={`pa-tier pa-tier--${tier}`} title={imposed ? "Niveau imposé par le propriétaire" : "Niveau automatique"}>
      {TIER_LABELS[tier]}
      {imposed ? " · imposé" : ""}
    </span>
  );
}

export function HeroArcs() {
  return (
    <svg className="pa-hero__arcs" viewBox="0 0 280 280" aria-hidden>
      <circle cx="140" cy="140" r="136" />
      <circle cx="140" cy="140" r="100" />
      <circle cx="140" cy="140" r="64" />
    </svg>
  );
}

/** Grille de photos de chantier ; « review » ajoute les boutons OK / Signaler (file de vérification). */
export function PhotoGrid({ photos, review = false }: { photos: AdminPhotoDTO[]; review?: boolean }) {
  if (!photos.length) return <p className="g-hint">Aucune photo.</p>;
  return (
    <div className="pa-photos">
      {photos.map((p) => (
        <figure key={p.id} className="pa-photo">
          <a href={p.url} target="_blank" rel="noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.url} alt={p.stepLabel} loading="lazy" decoding="async" />
          </a>
          <figcaption>
            <b>{p.stepLabel}</b>
            {longDateTime(p.at)}
            {review ? <PhotoReview photoId={p.id} status={p.review?.status ?? null} action={reviewPhotoAction} /> : p.review ? <span className={`pa-review__state`}> · {p.review.status === "approuvee" ? "approuvée" : "signalée"}</span> : null}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
