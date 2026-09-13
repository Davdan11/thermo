/* Chantier D — page simple de la visite photo (lien expiré, invalide, supprimé, trop de visites). */
import { Clock, Link2Off, Trash2, TimerOff } from "lucide-react";

const ICONS = { expire: TimerOff, invalide: Link2Off, supprime: Trash2, attente: Clock } as const;

export function VisitPlain({ kind, title, text }: { kind: keyof typeof ICONS; title: string; text: string }) {
  const Icon = ICONS[kind];
  return (
    <main className="vz vz-plain">
      <div className="vz-plain__card vz-in">
        <span className="vz-plain__icon" aria-hidden>
          <Icon size={26} />
        </span>
        <h1 className="vz-plain__title">{title}</h1>
        <p className="vz-soft">{text}</p>
        <p className="vz-plain__brand">Thermopompes À Vendre</p>
      </div>
    </main>
  );
}
