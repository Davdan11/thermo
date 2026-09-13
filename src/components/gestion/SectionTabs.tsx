"use client";

/* ==================================================================
   Refonte R1 — onglets de la section courante, en haut de chaque page
   de /gestion. Identiques sur ordinateur et sur cellulaire : une
   rangée qui défile à l'horizontale, l'onglet actif ramené au centre,
   un trait orange qui glisse d'un onglet à l'autre (aucun mouvement si
   l'utilisateur réduit les animations). Carte : nav/sections.ts.
   ================================================================== */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";
import { motion } from "motion/react";
import { activeOf, navFor, SETTINGS, type NavSection } from "@/lib/gestion/nav/sections";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { badgeLabel, badgeOf, Count, type NavBadges } from "./GestionNav";

const EASE = [0.22, 1, 0.36, 1] as const;

export function SectionTabs({ allowed, available = [], badges }: { allowed?: string[] | null; available?: string[]; badges: NavBadges }) {
  const pathname = usePathname();
  const reduced = useReduced();
  const list = useRef<HTMLDivElement>(null);
  const sections = useMemo(() => {
    const nav = navFor(allowed ?? null, available);
    return nav.settings.length ? [...nav.sections, { ...SETTINGS, tabs: nav.settings } as NavSection] : nav.sections;
  }, [allowed, available]);
  const active = activeOf(pathname, sections);

  // L'onglet actif reste visible dans la rangée (défilement de la rangée seulement, jamais de la page).
  useEffect(() => {
    const el = list.current;
    const on = el?.querySelector<HTMLElement>('[aria-current="page"]');
    if (!el || !on) return;
    const target = on.offsetLeft - (el.clientWidth - on.offsetWidth) / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: reduced ? "auto" : "smooth" });
  }, [pathname, reduced]);

  if (!active) return null;
  const { section } = active;
  const Icon = section.icon;
  return (
    <nav className="nv-tabs" aria-label={`${section.label} : onglets`}>
      <p className="nv-tabs__title">
        <Icon size={14} aria-hidden /> {section.label}
      </p>
      <div className="nv-tabs__list" ref={list}>
        {section.tabs.map((t) => {
          const on = t.href === active.tab.href;
          return (
            <Link key={t.href} href={t.href} className="nv-tab" aria-current={on ? "page" : undefined}>
              <span>{t.label}</span>
              <Count n={badgeOf(t.badge, badges)} label={badgeLabel(t.badge)} quiet={t.badge === "tasks" && !badges.overdue} />
              {on ? reduced ? <span className="nv-tab__ind" aria-hidden /> : <motion.span layoutId="nv-tab-ind" className="nv-tab__ind" aria-hidden transition={{ duration: 0.38, ease: EASE }} /> : null}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
