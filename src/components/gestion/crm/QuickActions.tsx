"use client";

/* Feuille « Créer » (bouton « + ») : job, soumission, client, tâche. Dans une fiche client, les formulaires s'ouvrent
   pré-remplis pour ce client (valeurs rendues au serveur). Ouverte par l'événement « gestion:quick ». */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CalendarPlus, FileText, UserPlus, Wrench } from "lucide-react";
import { Sheet } from "../kit/Sheet";

export const openQuickActions = () => window.dispatchEvent(new Event("gestion:quick"));

/* Chantier V : `canJob` faux (vendeur) → pas de raccourci « Job » (la page lui est fermée). */
export function QuickActions({ canJob = true }: { canJob?: boolean } = {}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener("gestion:quick", on);
    return () => window.removeEventListener("gestion:quick", on);
  }, []);
  const clientId = /^\/gestion\/clients\/(c_[0-9a-f]{12})/.exec(pathname)?.[1];
  const q = clientId ? `?client=${clientId}` : "";
  const items = [
    ...(canJob ? [{ href: `/gestion/jobs/nouveau${q}`, icon: Wrench, title: "Job", text: "Envoyer une installation aux installateurs", ink: true }] : []),
    { href: `/gestion/soumissions/nouvelle${q}`, icon: FileText, title: "Soumission", text: "Préparer et envoyer une soumission formelle" },
    ...(clientId ? [] : [{ href: "/gestion/clients/nouveau", icon: UserPlus, title: "Client", text: "Une personne qui a appelé ou écrit ailleurs" }]),
    { href: clientId ? `/gestion/taches?nouvelle=1&client=${clientId}` : "/gestion/taches?nouvelle=1", icon: CalendarPlus, title: "Tâche", text: "Un rappel, un suivi, une chose à ne pas oublier" },
  ];
  return (
    <Sheet open={open} onOpenChange={setOpen} title="Créer" description={clientId ? "Pré-rempli pour ce client." : "Choisissez ce que vous voulez ajouter."}>
      <div className="sh-quick">
        {items.map(({ href, icon: Icon, title, text, ink }) => (
          <Link key={title} href={href} className={`sh-quick__item${ink ? " sh-quick__item--ink" : ""}`} onClick={() => setOpen(false)}>
            <span className="sh-quick__icon" aria-hidden>
              <Icon size={20} />
            </span>
            <strong>{title}</strong>
            <small>{text}</small>
          </Link>
        ))}
      </div>
    </Sheet>
  );
}
