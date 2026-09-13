"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Camera, FileText, Plus, Settings2, Tags } from "lucide-react";

const ITEMS = [
  { href: "/gestion/soumissions", label: "Soumissions", icon: FileText, match: (p: string) => p === "/gestion/soumissions" || /^\/gestion\/soumissions\/q_/.test(p) },
  { href: "/gestion/soumissions/nouvelle", label: "Nouvelle", icon: Plus, match: (p: string) => p.startsWith("/gestion/soumissions/nouvelle") },
  { href: "/gestion/soumissions/prix", label: "Liste de prix", icon: Tags, match: (p: string) => p.startsWith("/gestion/soumissions/prix") },
  // Chantier D : visites photo à distance (et durée de conservation).
  { href: "/gestion/soumissions/visites", label: "Photos à distance", icon: Camera, match: (p: string) => p.startsWith("/gestion/soumissions/visites") },
  { href: "/gestion/soumissions/reglages", label: "Réglages", icon: Settings2, match: (p: string) => p.startsWith("/gestion/soumissions/reglages") },
];

/* Chantier V : `full` faux (adjoint, vendeur) → sans « Liste de prix » ni « Réglages » (réservés au propriétaire). */
const OWNER_ONLY = new Set(["/gestion/soumissions/prix", "/gestion/soumissions/reglages"]);

export function SoumissionsSubnav({ full = true }: { full?: boolean } = {}) {
  const pathname = usePathname();
  return (
    <nav className="sq-subnav" aria-label="Soumissions">
      <div className="sq-subnav__in">
        {ITEMS.filter((i) => full || !OWNER_ONLY.has(i.href)).map(({ href, label, icon: Icon, match }) => (
          <Link key={href} href={href} aria-current={match(pathname) ? "page" : undefined}>
            <Icon size={16} aria-hidden />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
