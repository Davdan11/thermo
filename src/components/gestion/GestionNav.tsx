"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Inbox, LayoutGrid, Plus, Users } from "lucide-react";

const ITEMS = [
  { href: "/gestion", label: "Tableau", icon: LayoutGrid, exact: true },
  { href: "/gestion/jobs/nouveau", label: "Nouveau job", icon: Plus, exact: false },
  { href: "/gestion/installateurs", label: "Installateurs", icon: Users, exact: false },
  { href: "/gestion/candidatures", label: "Candidatures", icon: Inbox, exact: false },
] as const;

export function GestionNav({ candidatures }: { candidatures: number }) {
  const pathname = usePathname();
  return (
    <nav className="g-nav" aria-label="Outil de gestion">
      {ITEMS.map(({ href, label, icon: Icon, exact }) => {
        const current = exact ? pathname === href || pathname.startsWith("/gestion/jobs/j_") : pathname.startsWith(href);
        return (
          <Link key={href} href={href} aria-current={current ? "page" : undefined}>
            <Icon size={18} aria-hidden />
            <span>{label}</span>
            {href === "/gestion/candidatures" && candidatures > 0 ? (
              <span className="g-nav__badge" aria-label={`${candidatures} nouvelle(s)`}>{candidatures}</span>
            ) : null}
          </Link>
        );
      })}
    </nav>
  );
}
