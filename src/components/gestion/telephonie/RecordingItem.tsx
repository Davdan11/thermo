/* Chantier T — un enregistrement : source, durée, statut, résumé en 3 à 5 lignes, transcription (dépliable) avec la mention
   « transcription automatique », écoute tant que l'audio est conservé. Composant serveur (le bouton « Réessayer » est client). */
import Link from "next/link";
import { Chip, type ChipTone } from "../kit/Chip";
import type { RecordingDTO } from "@/lib/telephonie/view";
import { TRANSCRIPTION_DISCLAIMER } from "@/lib/telephonie/transcription";
import { RetryTranscription } from "./client-bits";

const TONE: Record<RecordingDTO["tone"], ChipTone> = { ok: "ok", warn: "warn", bad: "bad", muted: "muted", orange: "orange", blue: "blue" };

export function RecordingItem({ r, i = 0, showWho = true }: { r: RecordingDTO; i?: number; showWho?: boolean }) {
  return (
    <li className="tp-rec" style={{ ["--i" as string]: i }}>
      <div className="tp-rec__head">
        <strong>{r.source}</strong>
        <Chip tone="cream">{r.duration}</Chip>
        <Chip tone={TONE[r.tone]}>{r.status}</Chip>
        <time dateTime={r.at}>{r.when}</time>
      </div>
      {showWho && r.who ? (
        <p className="g-hint" style={{ margin: 0 }}>
          {r.clientId ? <Link href={`/gestion/clients/${r.clientId}`}>{r.who}</Link> : r.who}
        </p>
      ) : null}
      {r.summary.length ? (
        <ul className="tp-rec__sum" aria-label="Résumé">
          {r.summary.map((l, n) => (
            <li key={n}>{l}</li>
          ))}
        </ul>
      ) : null}
      {r.need || r.budget || r.nextStep ? (
        <div className="tp-rec__facts">
          {r.need ? <Chip tone="cream">Besoin : {r.need}</Chip> : null}
          {r.budget ? <Chip tone="orange">Budget : {r.budget}</Chip> : null}
          {r.nextStep ? <Chip tone="blue">Prochaine étape : {r.nextStep}</Chip> : null}
        </div>
      ) : null}
      {r.transcript ? (
        <details>
          <summary>Lire la transcription</summary>
          <p className="tp-rec__text">{r.transcript}</p>
        </details>
      ) : null}
      {r.transcript || r.summary.length ? <p className="tp-disclaimer">{TRANSCRIPTION_DISCLAIMER}</p> : null}
      {r.audio ? <audio controls preload="none" src={`/gestion/api/telephonie/audio/${r.id}`} aria-label="Écouter l’enregistrement" /> : null}
      {r.canRetry ? <RetryTranscription id={r.id} /> : null}
    </li>
  );
}
