"use client";

/* Sous-menu du créateur de soumissions (onglet « Soumissions » de la section Ventes). Sous-pages : SOUMISSIONS_SUB
   (nav/sections.ts), la même carte que le menu, la recherche rapide et le test d'inventaire.
   Chantier V : `allowed` (liste blanche du rôle) → sans « Liste de prix » ni « Réglages » pour un adjoint ou un vendeur
   (réservés au propriétaire) ; null : tout. */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText } from "lucide-react";
import { canSee, SOUMISSIONS_SUB } from "@/lib/gestion/nav/sections";

const LIST = { href: "/gestion/soumissions", label: "Soumissions", icon: FileText };
const isList = (p: string) => p === "/gestion/soumissions" || /^\/gestion\/soumissions\/q_/.test(p);

export function SoumissionsSubnav({ allowed = null }: { allowed?: readonly string[] | null } = {}) {
  const pathname = usePathname();
  const items = [LIST, ...SOUMISSIONS_SUB.filter((i) => canSee(i, allowed))];
  return (
    <nav className="sq-subnav" aria-label="Soumissions">
      <div className="sq-subnav__in">
        {items.map(({ href, label, icon: Icon }) => (
          <Link key={href} href={href} aria-current={(href === LIST.href ? isList(pathname) : pathname.startsWith(href)) ? "page" : undefined}>
            <Icon size={16} aria-hidden />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
