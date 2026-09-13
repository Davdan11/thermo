"use client";

/* ==================================================================
   Revue R3 — erreur imprévue dans une page de /gestion.
   Rendue dans la coquille du CRM (le layout reste en place) plutôt que
   la page d'erreur du site public. Dit ce qui s'est passé et comment
   corriger, sans excuses : réessayer (retry de Next 16), sinon noter le
   code (digest) qui retrouve l'erreur dans les journaux du serveur. Le
   message brut n'est jamais affiché (il peut contenir des données).
   ================================================================== */

import { useEffect } from "react";
import Link from "next/link";
import { RotateCcw, Sun, TriangleAlert } from "lucide-react";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal } from "@/components/gestion/Reveal";

export default function GestionError({ error, retry }: { error: Error & { digest?: string }; retry: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Erreur</p>
          <h1 className="k-h1">
            Cette page n’a pas pu <em>s’afficher</em>
          </h1>
          <p className="k-lead">
            Une erreur est survenue pendant la préparation de la page. Réessayez : une panne passagère (fichier occupé, réseau lent) se règle souvent d’elle-même.
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.06}>
        <EmptyState
          icon={<TriangleAlert size={20} />}
          title={error.digest ? `Code de l’erreur : ${error.digest}` : "Erreur dans la page"}
          body={error.digest ? "Si l’erreur revient, ce code retrouve le détail dans les journaux du serveur (pm2 logs)." : "Si l’erreur revient, rechargez la page ; le détail est dans la console du navigateur."}
          action={
            <div className="g-actions" style={{ justifyContent: "center" }}>
              <button type="button" className="k-btn k-btn--primary" onClick={() => retry()}>
                <RotateCcw size={16} aria-hidden /> Réessayer
              </button>
              <Link href="/gestion" className="k-btn">
                <Sun size={16} aria-hidden /> Aujourd’hui
              </Link>
            </div>
          }
        />
      </Reveal>
    </>
  );
}
