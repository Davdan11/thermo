import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getUserSession } from "@/lib/gestion/auth/dal"; // Chantier V : tout membre connecté
import { LoginForm } from "@/components/gestion/LoginForm";
import { Mark } from "@/components/gestion/ui";

export const metadata: Metadata = { title: "Connexion" };

export default async function ConnexionPage({ searchParams }: { searchParams: Promise<{ sortie?: string }> }) {
  if (await getUserSession()) redirect("/gestion");
  const { sortie } = await searchParams;
  return (
    <main className="g-app g-center">
      <div className="g-panel">
        <Mark />
        <div className="k-card k-card--pad cr-rise">
          <p className="k-eyebrow">Accès réservé</p>
          <h1 className="k-h1" style={{ fontSize: 34 }}>
            Connexion <em>à la gestion</em>
          </h1>
          <p className="k-lead" style={{ marginBottom: 20 }}>Entrez votre adresse : vous recevrez un lien personnel, valable 15 minutes.</p>
          {sortie ? <p className="g-alert g-alert--ok" style={{ marginBottom: 16 }}>Vous êtes déconnecté.</p> : null}
          <LoginForm />
        </div>
        <p className="g-foot">Outil interne de Thermopompes À Vendre.</p>
      </div>
    </main>
  );
}
