/* Zone connectée : barre du haut, navigation (en bas de l'écran sur téléphone). La session est vérifiée ici
   ET dans chaque page (un layout ne se rejoue pas à chaque navigation). */
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readCandidatures } from "@/lib/gestion/store";
import { logout } from "../connexion/actions";
import { GestionNav } from "@/components/gestion/GestionNav";

export default async function PriveLayout({ children }: { children: React.ReactNode }) {
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
      <main className="g-main">{children}</main>
    </div>
  );
}
