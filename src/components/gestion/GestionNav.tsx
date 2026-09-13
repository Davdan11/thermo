"use client";

/* ==================================================================
   Navigation de l'outil de gestion (refonte R1 : 6 sections).
   - Bureau (≥ 1024 px) : barre latérale encre, recherche et
     « Nouveau » en tête, les 6 sections (leurs onglets en rappel),
     Réglages en bas du menu.
   - Téléphone : barre du haut (marque, recherche) et barre du bas
     Aujourd'hui · À faire · « + » · Textos · Plus (feuille : les 6
     sections et leurs onglets, puis Réglages).
   Les onglets de la section courante sont en haut de chaque page
   (SectionTabs), identiques sur ordinateur et sur cellulaire.
   Carte des sections : src/lib/gestion/nav/sections.ts.
   Pastilles : tâches dues aujourd'hui, textos non lus, candidatures.
   ================================================================== */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { ChevronRight, Ellipsis, ListChecks, MessageSquare, Plus, Search, Settings2, Sun } from "lucide-react";
import { activeOf, navFor, SETTINGS, type NavBadge, type NavLink, type NavSection } from "@/lib/gestion/nav/sections";
import { openSearch } from "./crm/CommandSearch";
import { openQuickActions } from "./crm/QuickActions";
import { Sheet } from "./kit/Sheet";

export interface NavBadges {
  tasks: number;
  overdue: number;
  textos: number;
  candidatures: number;
}

export const badgeOf = (b: NavBadge | undefined, badges: NavBadges) => (b === "tasks" ? badges.tasks : b === "textos" ? badges.textos : b === "candidatures" ? badges.candidatures : 0);
export const badgeLabel = (b?: NavBadge) => (b === "tasks" ? "tâches à faire aujourd’hui" : b === "textos" ? "conversations non lues" : "nouvelles candidatures");

export function Count({ n, label, quiet }: { n: number; label: string; quiet?: boolean }) {
  if (!n) return null;
  return (
    <span className={`sh-badge${quiet ? " sh-badge--quiet" : ""}`} aria-label={label}>
      {n > 99 ? "99+" : n}
    </span>
  );
}

/** Pastille d'une section : la somme de ses onglets ; discrète si seules des tâches du jour (rien en retard). */
function sectionCount(s: NavSection, badges: NavBadges) {
  const n = s.tabs.reduce((sum, t) => sum + badgeOf(t.badge, badges), 0);
  const onlyTasks = s.tabs.every((t) => !t.badge || t.badge === "tasks" || !badgeOf(t.badge, badges));
  return { n, quiet: onlyTasks && !badges.overdue };
}

/* Chantier V : `allowed` (liens permis au rôle, calculés au serveur) filtre le menu ; null ou absent = tout (propriétaire :
   aucune entrée retirée). Le filtre n'est qu'un confort : chaque page et chaque action revérifie le rôle. */
export function GestionNav({
  badges,
  email,
  logoutAction,
  allowed,
  available = [],
  who,
}: {
  badges: NavBadges;
  email: string;
  logoutAction: () => Promise<void>;
  allowed?: string[] | null;
  available?: string[];
  who?: string;
}) {
  const pathname = usePathname();
  const [more, setMore] = useState(false);
  const nav = useMemo(() => navFor(allowed ?? null, available), [allowed, available]);
  const settings: NavSection | null = nav.settings.length ? { ...SETTINGS, tabs: nav.settings } : null;
  const active = activeOf(pathname, settings ? [...nav.sections, settings] : nav.sections);
  const sectionOn = (s: NavSection) => active?.section.id === s.id;
  const tabOn = (t: NavLink) => active?.tab.href === t.href;
  const has = (href: string) => nav.sections.some((s) => s.tabs.some((t) => t.href === href));

  // Barre du bas : Aujourd'hui (la section, sauf À faire et Textos qui ont leur bouton), À faire, +, Textos, Plus.
  const onTaches = active?.tab.href === "/gestion/taches";
  const onTextos = active?.tab.href === "/gestion/textos";
  const onToday = active?.section.id === "aujourdhui" && !onTaches && !onTextos;
  const onMore = Boolean(active) && !onToday && !onTaches && !onTextos;
  const moreCount = nav.sections.filter((s) => s.id !== "aujourdhui").reduce((n, s) => n + sectionCount(s, badges).n, 0);

  return (
    <>
      <aside className="sh-side" aria-label="Outil de gestion">
        <Link href="/gestion" className="sh-brand">
          <span className="sh-brand__dot" aria-hidden />
          <span>
            TAV <em>gestion</em>
          </span>
        </Link>
        <button type="button" className="sh-search" onClick={openSearch}>
          <Search size={16} aria-hidden />
          <span>Rechercher</span>
          <kbd className="sh-kbd">/</kbd>
        </button>
        <button type="button" className="sh-new" onClick={openQuickActions}>
          <Plus size={17} aria-hidden /> Nouveau
        </button>
        <nav aria-label="Sections">
          <ul className="nv-side">
            {nav.sections.map((s) => {
              const Icon = s.icon;
              const c = sectionCount(s, badges);
              return (
                <li key={s.id}>
                  <Link href={s.tabs[0].href} className="nv-sec" aria-current={sectionOn(s) ? "true" : undefined}>
                    <Icon size={19} aria-hidden />
                    <span className="nv-sec__txt">
                      <span>{s.label}</span>
                      <small>{s.tabs.map((t) => t.label).join(" · ")}</small>
                    </span>
                    <Count n={c.n} label={`${c.n} à voir dans ${s.label}`} quiet={c.quiet} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="sh-side__foot">
          {settings ? (
            <Link href={settings.tabs[0].href} className="nv-sec nv-sec--settings" aria-current={active?.section.id === "reglages" ? "true" : undefined}>
              <Settings2 size={18} aria-hidden />
              <span className="nv-sec__txt">
                <span>Réglages</span>
              </span>
            </Link>
          ) : null}
          <span className="sh-who" title={who ? `${who} · ${email}` : email}>
            {who ?? email}
          </span>
          <form action={logoutAction}>
            <button type="submit" className="sh-logout">
              Déconnexion
            </button>
          </form>
        </div>
      </aside>

      <header className="sh-top">
        <div className="sh-top__in">
          <Link href="/gestion" className="sh-brand">
            <span className="sh-brand__dot" aria-hidden />
            <span>
              TAV <em>gestion</em>
            </span>
          </Link>
          <div className="sh-top__tools">
            <button type="button" className="sh-iconbtn" onClick={openSearch} aria-label="Rechercher un client ou une page">
              <Search size={20} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <nav className="sh-bar" aria-label="Navigation principale">
        {has("/gestion") ? (
          <Link href="/gestion" className="sh-bar__item" aria-current={onToday ? "page" : undefined}>
            <Sun size={21} aria-hidden />
            <span>Aujourd’hui</span>
          </Link>
        ) : (
          <span />
        )}
        {has("/gestion/taches") ? (
          <Link href="/gestion/taches" className="sh-bar__item" aria-current={onTaches ? "page" : undefined}>
            <ListChecks size={21} aria-hidden />
            <span>À faire</span>
            <Count n={badges.tasks} label={badgeLabel("tasks")} quiet={!badges.overdue} />
          </Link>
        ) : (
          <span />
        )}
        <button type="button" className="sh-bar__plus" onClick={openQuickActions} aria-label="Créer : job, soumission, client, tâche…">
          <Plus size={26} aria-hidden />
        </button>
        {has("/gestion/textos") ? (
          <Link href="/gestion/textos" className="sh-bar__item" aria-current={onTextos ? "page" : undefined}>
            <MessageSquare size={21} aria-hidden />
            <span>Textos</span>
            <Count n={badges.textos} label={badgeLabel("textos")} />
          </Link>
        ) : (
          <span />
        )}
        <button type="button" className="sh-bar__item" aria-current={onMore ? "page" : undefined} aria-haspopup="dialog" onClick={() => setMore(true)}>
          <Ellipsis size={21} aria-hidden />
          <span>Plus</span>
          <Count n={moreCount} label="à voir dans les autres sections" />
        </button>
      </nav>

      <Sheet open={more} onOpenChange={setMore} title="Plus" description="Les six sections et leurs onglets.">
        <div className="nv-more">
          {[...nav.sections, ...(settings ? [settings] : [])].map((s, i) => {
            const Icon = s.icon;
            const c = s.id === "reglages" ? { n: 0, quiet: false } : sectionCount(s, badges);
            return (
              <section key={s.id} className={`nv-more__sec${s.id === "reglages" ? " nv-more__sec--settings" : ""}`} style={{ ["--i" as string]: i }} aria-label={s.label}>
                <Link href={s.tabs[0].href} className="nv-more__head" aria-current={active?.section.id === s.id ? "true" : undefined} onClick={() => setMore(false)}>
                  <span className="nv-more__icon" aria-hidden>
                    <Icon size={19} />
                  </span>
                  <strong>{s.label}</strong>
                  <Count n={c.n} label={`${c.n} à voir dans ${s.label}`} quiet={c.quiet} />
                  <ChevronRight size={17} aria-hidden className="nv-more__go" />
                </Link>
                <ul className="nv-more__tabs">
                  {s.tabs.map((t) => (
                    <li key={t.href}>
                      <Link href={t.href} className="nv-chip" aria-current={tabOn(t) ? "page" : undefined} onClick={() => setMore(false)}>
                        {t.label}
                        <Count n={badgeOf(t.badge, badges)} label={badgeLabel(t.badge)} quiet={t.badge === "tasks" && !badges.overdue} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            );
          })}
          <div className="sh-more__foot">
            <span className="sh-who" style={{ color: "var(--g-muted)" }}>
              {who ?? email}
            </span>
            <form action={logoutAction}>
              <button type="submit">Déconnexion</button>
            </form>
          </div>
        </div>
      </Sheet>
    </>
  );
}
