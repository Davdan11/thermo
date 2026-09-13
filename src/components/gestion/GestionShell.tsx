/* ==================================================================
   Coquille de l'outil de gestion (serveur) : barre latérale sur le
   bureau (≥ 1024 px), barre du haut et barre du bas sur le téléphone,
   actions rapides (« + ») et recherche globale (« / » ou ⌘K).
   Utilisée par les deux zones connectées : (prive) et soumissions.
   La session est vérifiée ici ET dans chaque page, action et route
   (un layout ne se rejoue pas à chaque navigation).
   ================================================================== */

import { requireUser } from "@/lib/gestion/auth/dal";
import { navBadges } from "@/lib/gestion/crm/service";
import { readCandidatures } from "@/lib/gestion/store";
// Chantier V : coquille ouverte à tout membre ; menu, pastilles et « + » selon le rôle (chaque page revérifie).
import { navHrefsFor, roleCan } from "@/lib/gestion/equipe/roles";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { ROLE_LABELS } from "@/lib/gestion/equipe/types";
import { logout } from "@/app/gestion/connexion/actions";
import { GestionNav } from "./GestionNav";
import { CommandSearch } from "./crm/CommandSearch";
import { QuickActions } from "./crm/QuickActions";
import { cx } from "./kit/format";
// Chantier A : panneau « Demande à Claude » (Ctrl/⌘ J), partout dans /gestion.
import { AssistantMount } from "./assistant/AssistantMount";

export async function GestionShell({ children, sub, mainClassName }: { children: React.ReactNode; sub?: React.ReactNode; mainClassName?: string }) {
  const session = await requireUser(); // Chantier V
  const owner = session.role === "proprietaire";
  const [cands, badges] = await Promise.all([
    owner ? readCandidatures() : Promise.resolve({ candidatures: [] as Array<{ status: string }> }),
    (session.role === "vendeur" ? scopedIndex(session).then((i) => navBadges(i)) : navBadges()).catch(() => ({ tasks: 0, overdue: 0, textos: 0 })),
  ]);
  const counts = { ...badges, candidatures: cands.candidatures.filter((c) => c.status === "nouvelle").length };
  return (
    <div className="g-app sh-app">
      <GestionNav badges={counts} email={session.email} logoutAction={logout} allowed={navHrefsFor(session.role)} who={owner ? undefined : `${session.name} · ${ROLE_LABELS[session.role]}`} />
      <div className="sh-body">
        {sub}
        <main className={cx("g-main", "sh-main", mainClassName)}>{children}</main>
      </div>
      <QuickActions canJob={roleCan(session.role, "/gestion/jobs")} />
      <CommandSearch />
      {/* Chantier A : assistant IA en lecture seule. */}
      {/* Chantier A + V : l’assistant lit tout le CRM et sa route est réservée au propriétaire. */}
      {owner ? <AssistantMount /> : null}
      <div id="g-portal" />
    </div>
  );
}
