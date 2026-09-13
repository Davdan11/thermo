/* Créateur de soumissions : même barre du haut que le reste de l'outil de gestion (composants importés, non modifiés),
   plus un sous-menu. Session vérifiée ici ET dans chaque page, action et route. */
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readCandidatures } from "@/lib/gestion/store";
import { logout } from "../connexion/actions";
import { GestionNav } from "@/components/gestion/GestionNav";
import { SoumissionsSubnav } from "@/components/gestion/soumissions/SoumissionsSubnav";
import "@/components/gestion/soumissions/document/devis.css";
import "@/components/gestion/soumissions/soumissions.css";

export default async function SoumissionsLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  const fresh = (await readCandidatures()).candidatures.filter((c) => c.status === "nouvelle").length;
  return (
    <div className="g-app g-app--nav">
      <header className="g-top">
        <div className="g-top__in">
          <Link href="/gestion" className="g-brand">
            <span className="g-brand__dot" aria-hidden />
            <span>TAV</span>
            <span className="g-brand__sub">Gestion</span>
          </Link>
          <GestionNav candidatures={fresh} />
          <div className="g-top__end">
            <span className="g-top__who" title={session.email}>{session.email}</span>
            <form action={logout}>
              <button type="submit" className="g-logout">Déconnexion</button>
            </form>
          </div>
        </div>
      </header>
      <SoumissionsSubnav />
      <main className="g-main sq-main">{children}</main>
    </div>
  );
}
