import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/gestion/auth/dal";
import { LoginForm } from "@/components/gestion/LoginForm";
import { Mark } from "@/components/gestion/ui";

export const metadata: Metadata = { title: "Connexion" };

export default async function ConnexionPage({ searchParams }: { searchParams: Promise<{ sortie?: string }> }) {
  if (await getAdminSession()) redirect("/gestion");
  const { sortie } = await searchParams;
  return (
    <main className="g-app g-center">
      <div className="g-panel">
        <Mark />
        <div className="g-card g-card__pad">
          <p className="g-eyebrow">Accès réservé</p>
          <h1 className="g-h1" style={{ fontSize: 30 }}>Connexion</h1>
          <p className="g-lead" style={{ marginBottom: 20 }}>Entrez votre adresse : vous recevrez un lien personnel, valable 15 minutes.</p>
          {sortie ? <p className="g-alert g-alert--ok" style={{ marginBottom: 16 }}>Vous êtes déconnecté.</p> : null}
          <LoginForm />
        </div>
        <p className="g-foot">Outil interne de Thermopompes À Vendre.</p>
      </div>
    </main>
  );
}
