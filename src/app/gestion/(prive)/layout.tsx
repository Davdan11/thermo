/* Zone connectée : coquille du CRM (barre latérale sur le bureau, barres du haut et du bas sur le téléphone).
   La session est vérifiée dans la coquille ET dans chaque page (un layout ne se rejoue pas à chaque navigation). */
import { GestionShell } from "@/components/gestion/GestionShell";

export default function PriveLayout({ children }: { children: React.ReactNode }) {
  return <GestionShell>{children}</GestionShell>;
}
