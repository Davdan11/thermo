/* Créateur de soumissions : même coquille que le reste de l'outil de gestion, plus un sous-menu.
   Session vérifiée dans la coquille ET dans chaque page, action et route.
   Chantier V : sous-menu complet pour le propriétaire ; sans prix ni réglages pour les autres rôles (liste blanche). */
import { getUserSession } from "@/lib/gestion/auth/dal";
import { navHrefsFor } from "@/lib/gestion/equipe/roles";
import { GestionShell } from "@/components/gestion/GestionShell";
import { SoumissionsSubnav } from "@/components/gestion/soumissions/SoumissionsSubnav";
import "@/components/gestion/soumissions/document/devis.css";
import "@/components/gestion/soumissions/soumissions.css";

export default async function SoumissionsLayout({ children }: { children: React.ReactNode }) {
  const session = await getUserSession();
  return (
    <GestionShell sub={<SoumissionsSubnav allowed={session ? navHrefsFor(session.role) : []} />} mainClassName="sq-main">
      {children}
    </GestionShell>
  );
}
