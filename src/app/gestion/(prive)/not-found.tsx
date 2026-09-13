/* ==================================================================
   Revue R3 — notFound() dans une page de /gestion (client, job,
   partenaire, billet… absent ou hors des dossiers de la personne).
   Rendue dans la coquille du CRM au lieu de la page 404 du site public ;
   dit pourquoi et comment retrouver ce qu'on cherche. Composant serveur.
   ================================================================== */

import Link from "next/link";
import { SearchX, Sun } from "lucide-react";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal } from "@/components/gestion/Reveal";

export default function GestionNotFound() {
  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Introuvable</p>
          <h1 className="k-h1">
            Cette fiche <em>n’existe pas</em>
          </h1>
          <p className="k-lead">L’adresse ne mène à aucune fiche : elle a peut-être été fusionnée ou supprimée, l’adresse est incomplète, ou la fiche ne fait pas partie de vos dossiers.</p>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <EmptyState
          icon={<SearchX size={20} />}
          title="Rien à afficher à cette adresse"
          body="Cherchez le client ou la page avec la recherche rapide (touche « / »), ou revenez à la page Aujourd’hui."
          action={
            <Link href="/gestion" className="k-btn k-btn--primary">
              <Sun size={16} aria-hidden /> Aujourd’hui
            </Link>
          }
        />
      </Reveal>
    </>
  );
}
