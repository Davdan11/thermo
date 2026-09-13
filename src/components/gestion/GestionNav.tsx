"use client";

/* ==================================================================
   Navigation de l'outil de gestion.
   - Bureau (≥ 1024 px) : barre latérale encre, groupes Travail,
     Ventes, Réseau, Analyse ; recherche et « Nouveau » en tête.
   - Téléphone : barre du haut (marque, recherche) et barre du bas
     Accueil · À faire · « + » · Textos · Plus (feuille avec le reste).
   Pastilles : tâches dues aujourd'hui, textos non lus, candidatures.
   ================================================================== */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Banknote, Boxes, CalendarClock, PhoneCall, Send, ShieldCheck, Repeat, MapPinned, Megaphone, Target, UserPlus, CalendarDays, Camera, ChartColumn, Columns3, FileSignature, Handshake, LifeBuoy, Workflow, Ellipsis, FileText, HardHat, House, Inbox, ListChecks, MessageSquare, Plus, Search, Settings2, Users, Wrench } from "lucide-react";
import { openSearch } from "./crm/CommandSearch";
import { openQuickActions } from "./crm/QuickActions";
import { Sheet } from "./kit/Sheet";

type Badge = "tasks" | "textos" | "candidatures";
interface Item {
  href: string;
  label: string;
  icon: typeof House;
  match: (p: string) => boolean;
  badge?: Badge;
}

const starts = (base: string) => (p: string) => p === base || p.startsWith(`${base}/`);

const GROUPS: Array<{ label: string; items: Item[] }> = [
  {
    label: "Travail",
    items: [
      { href: "/gestion", label: "Accueil", icon: House, match: (p) => p === "/gestion" },
      { href: "/gestion/taches", label: "À faire", icon: ListChecks, match: starts("/gestion/taches"), badge: "tasks" },
      { href: "/gestion/pipeline", label: "Pipeline", icon: Columns3, match: starts("/gestion/pipeline") },
      { href: "/gestion/clients", label: "Clients", icon: Users, match: starts("/gestion/clients") },
      { href: "/gestion/textos", label: "Textos", icon: MessageSquare, match: starts("/gestion/textos"), badge: "textos" },
      { href: "/gestion/telephonie", label: "Téléphonie", icon: PhoneCall, match: (p) => p.startsWith("/gestion/telephonie") && !p.startsWith("/gestion/telephonie/campagnes") },
      { href: "/gestion/automatisations", label: "Automatisations", icon: Workflow, match: starts("/gestion/automatisations") },
    ],
  },
  {
    label: "Ventes",
    items: [
      { href: "/gestion/soumissions", label: "Soumissions", icon: FileText, match: starts("/gestion/soumissions") },
      { href: "/gestion/jobs", label: "Jobs", icon: Wrench, match: starts("/gestion/jobs") },
      { href: "/gestion/agenda", label: "Agenda", icon: CalendarDays, match: starts("/gestion/agenda") },
      { href: "/gestion/paiements", label: "Paiements", icon: Banknote, match: starts("/gestion/paiements") },
      { href: "/gestion/telephonie/campagnes", label: "Campagnes", icon: Send, match: starts("/gestion/telephonie/campagnes") },
      { href: "/gestion/entretien", label: "Plans d’entretien", icon: Repeat, match: starts("/gestion/entretien") },
      { href: "/gestion/creneaux", label: "Créneaux", icon: CalendarClock, match: starts("/gestion/creneaux") },
      { href: "/gestion/sav", label: "Service après-vente", icon: LifeBuoy, match: starts("/gestion/sav") },
    ],
  },
  {
    label: "Réseau",
    items: [
      { href: "/gestion/installateurs", label: "Installateurs", icon: HardHat, match: starts("/gestion/installateurs") },
      { href: "/gestion/partenaires", label: "Partenaires", icon: Handshake, match: starts("/gestion/partenaires") },
      { href: "/gestion/entente", label: "Entente", icon: FileSignature, match: starts("/gestion/entente") },
      { href: "/gestion/photos", label: "Photos à vérifier", icon: Camera, match: starts("/gestion/photos") },
      { href: "/gestion/carte", label: "Carte", icon: MapPinned, match: starts("/gestion/carte") },
      { href: "/gestion/recrutement", label: "Recrutement", icon: UserPlus, match: starts("/gestion/recrutement") },
      { href: "/gestion/inventaire", label: "Inventaire", icon: Boxes, match: starts("/gestion/inventaire") },
      { href: "/gestion/candidatures", label: "Candidatures", icon: Inbox, match: starts("/gestion/candidatures"), badge: "candidatures" },
    ],
  },
  {
    label: "Analyse",
    items: [
      { href: "/gestion/statistiques", label: "Statistiques", icon: ChartColumn, match: starts("/gestion/statistiques") },
      { href: "/gestion/presence", label: "Présence", icon: Megaphone, match: starts("/gestion/presence") },
      { href: "/gestion/publicite", label: "Publicité", icon: Target, match: starts("/gestion/publicite") },
      { href: "/gestion/reglages", label: "Réglages", icon: Settings2, match: starts("/gestion/reglages") },
      { href: "/gestion/securite", label: "Sécurité", icon: ShieldCheck, match: starts("/gestion/securite") },
    ],
  },
];

const BAR_HREFS = new Set(["/gestion", "/gestion/taches", "/gestion/textos"]);
const MORE = GROUPS.flatMap((g) => g.items).filter((i) => !BAR_HREFS.has(i.href));
const item = (href: string) => GROUPS.flatMap((g) => g.items).find((i) => i.href === href)!;

function Count({ n, label, quiet }: { n: number; label: string; quiet?: boolean }) {
  if (!n) return null;
  return (
    <span className={`sh-badge${quiet ? " sh-badge--quiet" : ""}`} aria-label={label}>
      {n > 99 ? "99+" : n}
    </span>
  );
}

export function GestionNav({ badges, email, logoutAction }: { badges: { tasks: number; overdue: number; textos: number; candidatures: number }; email: string; logoutAction: () => Promise<void> }) {
  const pathname = usePathname();
  const [more, setMore] = useState(false);
  const badgeOf = (b?: Badge) => (b === "tasks" ? badges.tasks : b === "textos" ? badges.textos : b === "candidatures" ? badges.candidatures : 0);
  const badgeLabel = (b?: Badge) => (b === "tasks" ? "tâches à faire aujourd’hui" : b === "textos" ? "conversations non lues" : "nouvelles candidatures");
  const moreCurrent = MORE.some((i) => i.match(pathname));
  const moreCount = MORE.reduce((n, i) => n + badgeOf(i.badge), 0);

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
          <span>Rechercher un client</span>
          <kbd className="sh-kbd">/</kbd>
        </button>
        <button type="button" className="sh-new" onClick={openQuickActions}>
          <Plus size={17} aria-hidden /> Nouveau
        </button>
        <nav className="sh-nav" aria-label="Sections">
          {GROUPS.map((g) => (
            <div key={g.label}>
              <p className="sh-nav__label">{g.label}</p>
              <ul>
                {g.items.map(({ href, label, icon: Icon, match, badge }) => (
                  <li key={href}>
                    <Link href={href} className="sh-nav__link" aria-current={match(pathname) ? "page" : undefined}>
                      <Icon size={18} aria-hidden />
                      <span>{label}</span>
                      <Count n={badgeOf(badge)} label={badgeLabel(badge)} quiet={badge === "tasks" && !badges.overdue} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="sh-side__foot">
          <span className="sh-who" title={email}>
            {email}
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
            <button type="button" className="sh-iconbtn" onClick={openSearch} aria-label="Rechercher un client">
              <Search size={20} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <nav className="sh-bar" aria-label="Navigation principale">
        {(["/gestion", "/gestion/taches"] as const).map((href) => {
          const it = item(href);
          const Icon = it.icon;
          return (
            <Link key={href} href={href} className="sh-bar__item" aria-current={it.match(pathname) ? "page" : undefined}>
              <Icon size={21} aria-hidden />
              <span>{it.label}</span>
              <Count n={badgeOf(it.badge)} label={badgeLabel(it.badge)} />
            </Link>
          );
        })}
        <button type="button" className="sh-bar__plus" onClick={openQuickActions} aria-label="Créer : job, soumission, client ou tâche">
          <Plus size={26} aria-hidden />
        </button>
        {(() => {
          const it = item("/gestion/textos");
          return (
            <Link href={it.href} className="sh-bar__item" aria-current={it.match(pathname) ? "page" : undefined}>
              <MessageSquare size={21} aria-hidden />
              <span>{it.label}</span>
              <Count n={badges.textos} label={badgeLabel("textos")} />
            </Link>
          );
        })()}
        <button type="button" className="sh-bar__item" aria-current={moreCurrent ? "page" : undefined} aria-haspopup="dialog" onClick={() => setMore(true)}>
          <Ellipsis size={21} aria-hidden />
          <span>Plus</span>
          <Count n={moreCount} label="à voir dans le menu" />
        </button>
      </nav>

      <Sheet open={more} onOpenChange={setMore} title="Plus" description="Toutes les sections de l’outil.">
        <div className="sh-more">
          {GROUPS.map((g) => {
            const items = g.items.filter((i) => !BAR_HREFS.has(i.href));
            if (!items.length) return null;
            return (
              <div key={g.label} className="sh-more__group">
                <p>{g.label}</p>
                <div className="sh-more__grid">
                  {items.map(({ href, label, icon: Icon, match, badge }) => (
                    <Link key={href} href={href} className="sh-more__link" aria-current={match(pathname) ? "page" : undefined} onClick={() => setMore(false)}>
                      <Icon size={22} aria-hidden />
                      <span>{label}</span>
                      <Count n={badgeOf(badge)} label={badgeLabel(badge)} />
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
          <div className="sh-more__foot">
            <span className="sh-who" style={{ color: "var(--g-muted)" }}>
              {email}
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
