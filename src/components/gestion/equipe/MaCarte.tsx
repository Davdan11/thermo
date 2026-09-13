/* Chantier V — la carte du vendeur connecté (accueil) : sa ligne du classement de ce mois-ci, rien d'autre.
   Composant serveur ; un avis quand une section fermée à ce rôle a renvoyé à l'accueil. */
import "./equipe.css";
import Link from "next/link";
import type { UserSession } from "@/lib/gestion/auth/dal";
import { myCard } from "@/lib/gestion/equipe/service";
import { dollars } from "../kit/format";

export function minutesLabel(m: number | null): string {
  if (m === null) return "—";
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  if (h < 48) return `${h} h${m % 60 && h < 10 ? ` ${m % 60}` : ""}`;
  return `${Math.round(h / 24)} j`;
}

export const rateLabel = (r: number | null) => (r === null ? "—" : `${Math.round(r * 100)} %`);

export async function MaCarte({ session }: { session: Pick<UserSession, "userId" | "name"> }) {
  const card = await myCard(session.userId, "mois");
  if (!card) return null;
  const stats: Array<{ l: string; v: string; hot?: boolean }> = [
    { l: "Demandes reçues", v: String(card.demandes) },
    { l: "Première réponse", v: minutesLabel(card.medianMinutes), hot: card.medianMinutes !== null && card.medianMinutes <= 5 },
    { l: "Soumissions envoyées", v: String(card.sent) },
    { l: "Taux de signature", v: rateLabel(card.signRate) },
    { l: "Ventes signées", v: dollars(card.salesCents) },
    { l: "Ma commission", v: dollars(card.commissionCents), hot: card.commissionCents > 0 },
  ];
  return (
    <section className="eq-mycard" aria-label="Ma carte du mois">
      <svg className="eq-mycard__arcs" viewBox="0 0 240 240" aria-hidden>
        <circle cx="120" cy="120" r="116" />
        <circle cx="120" cy="120" r="84" />
        <circle cx="120" cy="120" r="52" />
      </svg>
      <div className="eq-mycard__head">
        <div>
          <p className="eq-mycard__eyebrow">Ma carte · ce mois-ci</p>
          <h2 className="eq-mycard__title">
            Bonjour <em>{session.name}</em>
          </h2>
        </div>
        <Link href="/gestion/classement" className="eq-mycard__rank">
          {card.open} dossier{card.open > 1 ? "s" : ""} ouvert{card.open > 1 ? "s" : ""} · voir ma carte →
        </Link>
      </div>
      <div className="eq-mycard__grid">
        {stats.map((s) => (
          <div key={s.l} className={`eq-stat${s.hot ? " eq-stat--hot" : ""}`}>
            <span className="eq-stat__l">{s.l}</span>
            <span className="eq-stat__v">{s.v}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function AccessNotice() {
  return (
    <p className="g-alert eq-rise" role="status" style={{ marginBottom: 16 }}>
      Cette section est réservée au propriétaire. Vous êtes revenu à l’accueil.
    </p>
  );
}
