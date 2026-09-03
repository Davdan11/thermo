"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout";
import { buttonVariants } from "@/components/ui/button";
import { clearProjectDraft } from "@/lib/project/project-draft";

export default function ConfirmationPage() {
  const [reference, setReference] = useState<string | null>(null);

  useEffect(() => {
    // Retreive the reference from session storage
    const ref = sessionStorage.getItem("quote-reference");
    if (ref) {
      setReference(ref);
      // Clean up the wizard state so they don't submit again by mistake
      sessionStorage.removeItem("quote-reference");
      // Clean up ThermoMatch state and ProjectDraft
      sessionStorage.removeItem("thermomatch-answers");
      clearProjectDraft();
    }
  }, []);

  return (
    <main className="py-16">
      <Container className="max-w-xl text-center">
        <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-foreground mb-4">Demande envoyée avec succès</h1>
        
        <p className="text-muted mb-8">
          Merci pour votre confiance. Votre demande a été reçue et est en cours d'analyse.
        </p>

        {reference && (
          <div className="p-6 bg-surface border border-border rounded-lg mb-8">
            <p className="text-sm font-semibold text-foreground mb-1">Numéro de référence</p>
            <p className="text-2xl font-mono text-accent tracking-widest">{reference}</p>
          </div>
        )}

        <div className="text-sm text-muted text-left p-6 bg-accent/5 border border-accent/20 rounded-lg mb-8">
          <h2 className="font-semibold text-foreground mb-2">Prochaines étapes :</h2>
          <ol className="list-decimal pl-4 space-y-2">
            <li>Un conseiller de notre équipe analysera votre projet.</li>
            <li>Vous serez contacté selon votre méthode de préférence pour valider quelques détails.</li>
            <li>Une visite ou une soumission formelle vous sera proposée.</li>
          </ol>
        </div>

        <Link href="/" className={buttonVariants({ variant: "default", size: "lg" })}>
          Retour à l'accueil
        </Link>
      </Container>
    </main>
  );
}
