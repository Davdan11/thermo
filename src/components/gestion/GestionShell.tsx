/* ==================================================================
   Coquille de l'outil de gestion (serveur) : barre latérale sur le
   bureau (≥ 1024 px), barre du haut et barre du bas sur le téléphone,
   onglets de la section courante en haut de chaque page (refonte R1),
   actions rapides (« + ») et recherche globale (« / » ou ⌘K : clients
   et pages). Utilisée par les deux zones connectées : (prive) et
   soumissions.
   La session est vérifiée ici ET dans chaque page, action et route
   (un layout ne se rejoue pas à chaque navigation).
   ================================================================== */

import { requireUser } from "@/lib/gestion/auth/dal";
import { navBadges } from "@/lib/gestion/crm/service";
import { readCandidatures } from "@/lib/gestion/store";
// Chantier V : coquille ouverte à tout membre ; menu, pastilles et « + » selon le rôle (chaque page revérifie).
import { navHrefsFor } from "@/lib/gestion/equipe/roles";
import { scopedIndex } from "@/lib/gestion/equipe/scope";
import { ROLE_LABELS } from "@/lib/gestion/equipe/types";
// Refonte R1 : carte des 6 sections, pages optionnelles des autres chantiers (Référencement, Articles).
import { availablePages } from "@/lib/gestion/nav/available";
import { navFor, searchablePages } from "@/lib/gestion/nav/sections";
import { logout } from "@/app/gestion/connexion/actions";
import { GestionNav } from "./GestionNav";
import { SectionTabs } from "./SectionTabs";
import { CommandSearch } from "./crm/CommandSearch";
import { QuickActions } from "./crm/QuickActions";
import { cx } from "./kit/format";
// Chantier A : panneau « Demande à Claude » (Ctrl/⌘ J), partout dans /gestion.
import { AssistantMount } from "./assistant/AssistantMount";
import "./navigation.css";

export async function GestionShell({ children, sub, mainClassName }: { children: React.ReactNode; sub?: React.ReactNode; mainClassName?: string }) {
  const session = await requireUser(); // Chantier V
  const owner = session.role === "proprietaire";
  const [cands, badges] = await Promise.all([
    owner ? readCandidatures() : Promise.resolve({ candidatures: [] as Array<{ status: string }> }),
    (session.role === "vendeur" ? scopedIndex(session).then((i) => navBadges(i)) : navBadges()).catch(() => ({ tasks: 0, overdue: 0, textos: 0 })),
  ]);
  const counts = { ...badges, candidatures: cands.candidatures.filter((c) => c.status === "nouvelle").length };
  const allowed = navHrefsFor(session.role);
  const available = availablePages();
  return (
    <div className="g-app sh-app">
      <GestionNav badges={counts} email={session.email} logoutAction={logout} allowed={allowed} available={available} who={owner ? undefined : `${session.name} · ${ROLE_LABELS[session.role]}`} />
      <div className="sh-body">
        <SectionTabs allowed={allowed} available={available} badges={counts} />
        {sub}
        <main className={cx("g-main", "sh-main", mainClassName)}>{children}</main>
      </div>
      <QuickActions allowed={allowed} available={available} />
      <CommandSearch pages={searchablePages(navFor(allowed, available))} />
      {/* Chantier A : assistant IA en lecture seule. */}
      {/* Chantier A + V : l’assistant lit tout le CRM et sa route est réservée au propriétaire. */}
      {owner ? <AssistantMount /> : null}
      <div id="g-portal" />
    </div>
  );
}
