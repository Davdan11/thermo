/* ==================================================================
   Coquille de l'outil de gestion (serveur) : barre latérale sur le
   bureau (≥ 1024 px), barre du haut et barre du bas sur le téléphone,
   actions rapides (« + ») et recherche globale (« / » ou ⌘K).
   Utilisée par les deux zones connectées : (prive) et soumissions.
   La session est vérifiée ici ET dans chaque page, action et route
   (un layout ne se rejoue pas à chaque navigation).
   ================================================================== */

import { requireAdmin } from "@/lib/gestion/auth/dal";
import { navBadges } from "@/lib/gestion/crm/service";
import { readCandidatures } from "@/lib/gestion/store";
import { logout } from "@/app/gestion/connexion/actions";
import { GestionNav } from "./GestionNav";
import { CommandSearch } from "./crm/CommandSearch";
import { QuickActions } from "./crm/QuickActions";
import { cx } from "./kit/format";

export async function GestionShell({ children, sub, mainClassName }: { children: React.ReactNode; sub?: React.ReactNode; mainClassName?: string }) {
  const session = await requireAdmin();
  const [cands, badges] = await Promise.all([readCandidatures(), navBadges().catch(() => ({ tasks: 0, overdue: 0, textos: 0 }))]);
  const counts = { ...badges, candidatures: cands.candidatures.filter((c) => c.status === "nouvelle").length };
  return (
    <div className="g-app sh-app">
      <GestionNav badges={counts} email={session.email} logoutAction={logout} />
      <div className="sh-body">
        {sub}
        <main className={cx("g-main", "sh-main", mainClassName)}>{children}</main>
      </div>
      <QuickActions />
      <CommandSearch />
      <div id="g-portal" />
    </div>
  );
}
