/* Créateur de soumissions : même coquille que le reste de l'outil de gestion, plus un sous-menu.
   Session vérifiée dans la coquille ET dans chaque page, action et route. */
import { GestionShell } from "@/components/gestion/GestionShell";
import { SoumissionsSubnav } from "@/components/gestion/soumissions/SoumissionsSubnav";
import "@/components/gestion/soumissions/document/devis.css";
import "@/components/gestion/soumissions/soumissions.css";

export default function SoumissionsLayout({ children }: { children: React.ReactNode }) {
  return (
    <GestionShell sub={<SoumissionsSubnav />} mainClassName="sq-main">
      {children}
    </GestionShell>
  );
}
