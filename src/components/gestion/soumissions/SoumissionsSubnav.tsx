"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Plus, Settings2, Tags } from "lucide-react";

const ITEMS = [
  { href: "/gestion/soumissions", label: "Soumissions", icon: FileText, match: (p: string) => p === "/gestion/soumissions" || /^\/gestion\/soumissions\/q_/.test(p) },
  { href: "/gestion/soumissions/nouvelle", label: "Nouvelle", icon: Plus, match: (p: string) => p.startsWith("/gestion/soumissions/nouvelle") },
  { href: "/gestion/soumissions/prix", label: "Liste de prix", icon: Tags, match: (p: string) => p.startsWith("/gestion/soumissions/prix") },
  { href: "/gestion/soumissions/reglages", label: "Réglages", icon: Settings2, match: (p: string) => p.startsWith("/gestion/soumissions/reglages") },
];

export function SoumissionsSubnav() {
  const pathname = usePathname();
  return (
    <nav className="sq-subnav" aria-label="Soumissions">
      <div className="sq-subnav__in">
        {ITEMS.map(({ href, label, icon: Icon, match }) => (
          <Link key={href} href={href} aria-current={match(pathname) ? "page" : undefined}>
            <Icon size={16} aria-hidden />
            <span>{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
