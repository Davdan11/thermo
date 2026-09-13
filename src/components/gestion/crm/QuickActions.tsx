"use client";

/* Feuille « Créer » (bouton « + ») : job, soumission, client, tâche ; pour le propriétaire, installateur et billet de
   service. Dans une fiche client, les formulaires s'ouvrent pré-remplis pour ce client (valeurs rendues au serveur).
   Ouverte par l'événement « gestion:quick ». Liste : CREATE (nav/sections.ts), filtrée selon le rôle. */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { navFor } from "@/lib/gestion/nav/sections";
import { Sheet } from "../kit/Sheet";

export const openQuickActions = () => window.dispatchEvent(new Event("gestion:quick"));

/* Chantier V : `allowed` (liste blanche du rôle) → un vendeur n'a pas « Job » (la page lui est fermée) ; null : tout. */
export function QuickActions({ allowed = null, available = [] }: { allowed?: string[] | null; available?: string[] } = {}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const on = () => setOpen(true);
    window.addEventListener("gestion:quick", on);
    return () => window.removeEventListener("gestion:quick", on);
  }, []);
  const create = useMemo(() => navFor(allowed, available).create, [allowed, available]);
  const clientId = /^\/gestion\/clients\/(c_[0-9a-f]{12})/.exec(pathname)?.[1];
  const items = create
    .filter((c) => !(clientId && c.href === "/gestion/clients/nouveau"))
    .map((c, i) => ({ ...c, href: clientId && c.prefill === "client" ? `${c.href}${c.href.includes("?") ? "&" : "?"}client=${clientId}` : c.href, ink: i === 0 && c.href.startsWith("/gestion/jobs") }));
  return (
    <Sheet open={open} onOpenChange={setOpen} title="Créer" description={clientId ? "Pré-rempli pour ce client." : "Choisissez ce que vous voulez ajouter."}>
      <div className="sh-quick">
        {items.map(({ href, icon: Icon, label, hint, ink }) => (
          <Link key={label} href={href} className={`sh-quick__item${ink ? " sh-quick__item--ink" : ""}`} onClick={() => setOpen(false)}>
            <span className="sh-quick__icon" aria-hidden>
              <Icon size={20} />
            </span>
            <strong>{label}</strong>
            <small>{hint}</small>
          </Link>
        ))}
      </div>
    </Sheet>
  );
}
