/* Studio de présence : feuille de style propre (préfixe pr-), dans la coquille de /gestion.
   La session est vérifiée dans chaque page et chaque action (un layout ne se rejoue pas à chaque navigation). */
import "@/components/gestion/presence/presence.css";

export default function PresenceLayout({ children }: { children: React.ReactNode }) {
  return <div className="pr-root">{children}</div>;
}
