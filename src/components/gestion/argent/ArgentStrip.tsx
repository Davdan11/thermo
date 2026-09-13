/* Accueil, bloc 05 : commissions des partenaires (à recevoir, en retard, pauses), satisfaction des clients et aide
   LogisVert (versée aux clients par Hydro-Québec : jamais un revenu). Composant serveur, montants seulement. */
import "./argent.css";
import Link from "next/link";
import { BadgeDollarSign, Clock, Leaf, Smile } from "lucide-react";
import { homeAfterSale } from "@/lib/gestion/automatisations/views";
import { SectionHeader } from "../kit/Card";
import { dollars, plural } from "../kit/format";
import { KpiTile } from "../kit/KpiTile";

export async function ArgentStrip() {
  const h = await homeAfterSale();
  const lv = h.logisvert;
  const lvTotal = lv.aFaire + lv.faite + lv.recue + lv.aide;
  return (
    <section className="ar-home" aria-label="Partenaires et après-vente">
      <SectionHeader
        n="05"
        title="Partenaires et"
        accent="après-vente"
        lead="Commissions à recevoir, satisfaction de vos clients et suivi de leur aide LogisVert."
        action={
          <Link href="/gestion/automatisations" className="k-btn">
            Automatisations
          </Link>
        }
      />
      <div className="ar-kpis">
        <KpiTile label="Commissions à recevoir" value={dollars(h.receivableCents)} sub={plural(h.receivableCount, "facture ouverte", "factures ouvertes")} icon={<BadgeDollarSign size={16} />} href="/gestion/paiements?etat=a-recevoir" />
        <KpiTile
          label="En retard"
          value={dollars(h.overdueCents)}
          sub={h.paused ? `${plural(h.paused, "installateur", "installateurs")} sans nouvelles offres` : h.overdueCount ? plural(h.overdueCount, "facture", "factures") : "Aucun retard"}
          tone={h.overdueCount ? "orange" : "paper"}
          icon={<Clock size={16} />}
          href="/gestion/paiements?etat=en-retard"
        />
        <KpiTile
          label="Satisfaction (30 jours)"
          value={h.satisfaction.avg !== null ? `${h.satisfaction.avg.toFixed(1).replace(".", ",")}/5` : "—"}
          sub={h.satisfaction.count ? `${plural(h.satisfaction.count, "réponse", "réponses")}${h.satisfaction.bad ? ` · ${h.satisfaction.bad} à rappeler` : ""}` : "Aucune réponse encore"}
          icon={<Smile size={16} />}
        />
        <KpiTile
          label="LogisVert de vos clients"
          value={lvTotal ? `${lv.recue}/${lvTotal} reçues` : "—"}
          sub={lvTotal ? `${lv.aFaire} à faire · ${lv.faite} faites${lv.aide ? ` · ${lv.aide} besoin d’aide` : ""}` : "Aucun dossier envoyé"}
          tone="cream"
          icon={<Leaf size={16} />}
        />
      </div>
      {h.cronLate ? (
        <p className="ar-home__warn">
          Le moteur d’automatisations n’a pas tourné récemment : <Link href="/gestion/automatisations">vérifier</Link>.
        </p>
      ) : null}
    </section>
  );
}
