/* ==================================================================
   Refonte R1 — carte de la navigation de /gestion.

   6 sections avec leurs onglets (identiques sur ordinateur et sur
   cellulaire), Réglages (icône en bas du menu), pages de création
   (bouton « + ») et sous-pages d'un onglet (sous-menu propre à la
   page : Soumissions, Présence). Source unique pour le menu latéral,
   les onglets de section, la feuille « Plus », le bouton « + », la
   recherche rapide (« / ») et le test d'inventaire (chaque page de
   /gestion atteignable par le propriétaire).

   Rôles (chantier V) : un lien est visible si `perm` (par défaut son
   adresse) figure dans la liste blanche navHrefsFor(role) ; null
   (propriétaire) : tout est visible. Ce n'est qu'un confort : chaque
   page et chaque action revérifient le rôle.

   `optional` : page d'un autre chantier pas encore fusionné (SEO,
   Blogue) ; affichée seulement si elle existe (voir available.ts).
   ================================================================== */

import {
  Banknote,
  BadgeCheck,
  Boxes,
  BriefcaseBusiness,
  Building2,
  CalendarClock,
  CalendarDays,
  CalendarPlus,
  Camera,
  ChartColumn,
  Columns3,
  FileSignature,
  FileText,
  Globe,
  HardHat,
  Inbox,
  KeyRound,
  LayoutDashboard,
  LifeBuoy,
  Link2,
  ListChecks,
  MapPinned,
  Megaphone,
  MessageSquare,
  Newspaper,
  PhoneCall,
  Plus,
  Radio,
  ReceiptText,
  Repeat,
  Scale,
  Send,
  Settings2,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Sun,
  Tags,
  Target,
  TrendingUp,
  Trophy,
  UserPlus,
  UserRoundPlus,
  Users,
  UsersRound,
  Workflow,
  Wrench,
} from "lucide-react";

export type NavIcon = typeof Sun;
export type NavBadge = "tasks" | "textos" | "candidatures";

export interface NavLink {
  href: string;
  label: string;
  icon: NavIcon;
  /** Section de la liste blanche des rôles (navHrefsFor) ; par défaut `href`. */
  perm?: string;
  badge?: NavBadge;
  /** Seulement l'adresse exacte (la page « Aujourd'hui »). */
  exact?: boolean;
  /** Page d'un autre chantier : affichée seulement si elle existe. */
  optional?: boolean;
  /** Mots de plus pour la recherche rapide. */
  keywords?: string;
  /** Bouton « + » : texte d'aide ; `client` : pré-rempli pour le client de la fiche ouverte. */
  hint?: string;
  prefill?: "client";
  /** Sous-pages de l'onglet, montrées par le sous-menu propre à la page (Soumissions, Présence). */
  sub?: NavLink[];
}

export type SectionId = "aujourdhui" | "clients" | "ventes" | "partenaires" | "argent" | "marketing" | "reglages";

export interface NavSection {
  id: SectionId;
  label: string;
  icon: NavIcon;
  tabs: NavLink[];
}

/** Sous-menu du créateur de soumissions (SoumissionsSubnav). Prix et réglages : propriétaire (aucune `perm`). */
export const SOUMISSIONS_SUB: NavLink[] = [
  { href: "/gestion/soumissions/nouvelle", label: "Nouvelle", icon: Plus, perm: "/gestion/soumissions", keywords: "créer soumission devis" },
  { href: "/gestion/soumissions/prix", label: "Liste de prix", icon: Tags, keywords: "prix produits catalogue" },
  { href: "/gestion/soumissions/visites", label: "Photos à distance", icon: Camera, perm: "/gestion/soumissions", keywords: "visites photo à distance" },
  { href: "/gestion/soumissions/reglages", label: "Réglages", icon: Settings2, keywords: "réglages soumissions modèle" },
];

export const SECTIONS: NavSection[] = [
  {
    id: "aujourdhui",
    label: "Aujourd’hui",
    icon: Sun,
    tabs: [
      { href: "/gestion", label: "Aujourd’hui", icon: Sun, exact: true, keywords: "accueil priorités journée actions blocages" },
      { href: "/gestion/tableau-de-bord", label: "Tableau de bord", icon: LayoutDashboard, keywords: "accueil argent demandes sources canaux villes pipeline chiffres" },
      { href: "/gestion/taches", label: "À faire", icon: ListChecks, badge: "tasks", keywords: "tâches rappels suivis" },
      { href: "/gestion/textos", label: "Textos", icon: MessageSquare, badge: "textos", keywords: "sms conversations messages" },
      { href: "/gestion/telephonie", label: "Téléphonie", icon: PhoneCall, keywords: "appels masqués enregistrements transcriptions" },
    ],
  },
  {
    id: "clients",
    label: "Clients",
    icon: Users,
    tabs: [
      { href: "/gestion/clients", label: "Clients", icon: Users, keywords: "fiches contacts" },
      { href: "/gestion/pipeline", label: "Pipeline", icon: Columns3, keywords: "étapes affaires prévision" },
      { href: "/gestion/clients/nouveau", label: "Nouveau client", icon: UserRoundPlus, perm: "/gestion/clients", keywords: "ajouter créer fiche" },
      { href: "/gestion/classement", label: "Classement", icon: Trophy, keywords: "vendeurs ma carte" },
    ],
  },
  {
    id: "ventes",
    label: "Ventes",
    icon: BriefcaseBusiness,
    tabs: [
      { href: "/gestion/soumissions", label: "Soumissions", icon: FileText, keywords: "devis estimation contrat", sub: SOUMISSIONS_SUB },
      { href: "/gestion/jobs", label: "Jobs", icon: Wrench, keywords: "installations offres installateurs" },
      { href: "/gestion/agenda", label: "Agenda", icon: CalendarDays, keywords: "calendrier installations jour semaine mois" },
      { href: "/gestion/creneaux", label: "Créneaux", icon: CalendarClock, keywords: "disponibilités installateurs portail dates" },
      { href: "/gestion/sav", label: "Service après-vente", icon: LifeBuoy, keywords: "sav billets garantie problème service" },
      { href: "/gestion/entretien", label: "Plans d’entretien", icon: Repeat, keywords: "entretien annuel abonnement" },
    ],
  },
  {
    id: "partenaires",
    label: "Partenaires",
    icon: HardHat,
    tabs: [
      { href: "/gestion/partenaires", label: "Installateurs", icon: HardHat, keywords: "partenaires réseau conformité rbq assurance zone marques performance" },
      { href: "/gestion/entente", label: "Entente", icon: FileSignature, keywords: "contrat partenariat signature version" },
      { href: "/gestion/photos", label: "Photos à vérifier", icon: Camera, keywords: "chantiers conformité photos" },
      { href: "/gestion/recrutement", label: "Recrutement", icon: UserPlus, keywords: "zones à recruter accueil" },
      { href: "/gestion/candidatures", label: "Candidatures", icon: Inbox, badge: "candidatures", keywords: "devenir partenaire demandes installateurs" },
      { href: "/gestion/carte", label: "Carte", icon: MapPinned, keywords: "couverture zones territoire" },
      { href: "/gestion/inventaire", label: "Inventaire", icon: Boxes, keywords: "stock commandes pièces" },
    ],
  },
  {
    id: "argent",
    label: "Argent",
    icon: Banknote,
    tabs: [
      { href: "/gestion/paiements", label: "Paiements", icon: Banknote, keywords: "commissions factures installateurs comptable export" },
      { href: "/gestion/equipe/releves", label: "Relevés", icon: ReceiptText, keywords: "relevés commissions vendeurs paie" },
      { href: "/gestion/rentabilite", label: "Rentabilité", icon: TrendingUp, keywords: "coût acquisition marge dépenses" },
      { href: "/gestion/statistiques", label: "Statistiques", icon: ChartColumn, keywords: "demandes sources canaux chiffres" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    tabs: [
      {
        href: "/gestion/presence",
        label: "Présence",
        icon: Radio,
        keywords: "réseaux sociaux facebook instagram publications studio",
        // Chantier Blogue : onglet « Articles » du studio (PresenceTabs), tant qu'il existe.
        sub: [{ href: "/gestion/presence/articles", label: "Articles", icon: Newspaper, perm: "/gestion/presence", optional: true, keywords: "blogue articles brouillons" }],
      },
      { href: "/gestion/publicite", label: "Publicité", icon: Target, keywords: "annonces meta google ads pilote" },
      { href: "/gestion/telephonie/campagnes", label: "Campagnes", icon: Send, keywords: "campagnes appels textos relances" },
      // Chantier SEO : page « Référencement » (Search Console, IndexNow), affichée dès qu'elle existe.
      { href: "/gestion/referencement", label: "Référencement", icon: Globe, optional: true, keywords: "seo google search console indexnow" },
    ],
  },
];

/** Réglages : icône en bas du menu. Tout ce qui se règle une fois, loin du travail de tous les jours. */
export const SETTINGS: NavSection = {
  id: "reglages",
  label: "Réglages",
  icon: Settings2,
  tabs: [
    { href: "/gestion/reglages", label: "Réglages généraux", icon: Settings2, keywords: "crm relances pipedrive délais" },
    { href: "/gestion/reglages/identite", label: "Identité de l’entreprise", icon: Building2, keywords: "raison sociale neq adresse plateforme" },
    { href: "/gestion/reglages/rbq", label: "Vérification RBQ", icon: BadgeCheck, keywords: "licences registre rbq" },
    { href: "/gestion/soumissions/reglages", label: "Soumissions", icon: FileText, keywords: "réglages soumissions modèle texte" },
    { href: "/gestion/soumissions/prix", label: "Liste de prix", icon: Tags, keywords: "prix produits catalogue" },
    { href: "/gestion/automatisations", label: "Automatisations", icon: Workflow, keywords: "moteur relances courriels textos après-vente" },
    { href: "/gestion/telephonie/reglages", label: "Téléphonie", icon: PhoneCall, keywords: "réglages appels numéro enregistrement" },
    { href: "/gestion/textos/reglages", label: "Textos", icon: MessageSquare, keywords: "réglages textos réponse automatique" },
    { href: "/gestion/presence/reglages", label: "Présence", icon: Radio, keywords: "réglages présence publications" },
    { href: "/gestion/presence/connecter", label: "Connexion Meta", icon: Link2, keywords: "facebook instagram connecter meta" },
    { href: "/gestion/partenaires/reglages", label: "Partenaires", icon: HardHat, keywords: "réglages partenaires seuils niveaux délais" },
    { href: "/gestion/equipe", label: "Équipe", icon: UsersRound, keywords: "vendeurs adjoints invitations rôles" },
    { href: "/gestion/securite", label: "Sécurité", icon: ShieldCheck, keywords: "journal audit sessions" },
    { href: "/gestion/securite/cles", label: "Clés", icon: KeyRound, keywords: "clés api secrets" },
    { href: "/gestion/securite/deux-etapes", label: "Deux étapes", icon: Smartphone, keywords: "2fa double authentification" },
    { href: "/gestion/conformite", label: "Conformité", icon: Scale, keywords: "consentements loi 25 lcap preuves anonymisation recommandation" },
    { href: "/gestion/assistant", label: "Assistant IA", icon: Sparkles, keywords: "claude tarifs journal ia" },
  ],
};

/** Bouton « + » (feuille « Créer »). */
export const CREATE: NavLink[] = [
  { href: "/gestion/jobs/nouveau", label: "Job", icon: Wrench, perm: "/gestion/jobs", prefill: "client", hint: "Envoyer une installation aux installateurs" },
  { href: "/gestion/soumissions/nouvelle", label: "Soumission", icon: FileText, perm: "/gestion/soumissions", prefill: "client", hint: "Préparer et envoyer une soumission formelle" },
  { href: "/gestion/clients/nouveau", label: "Client", icon: UserPlus, perm: "/gestion/clients", hint: "Une personne qui a appelé ou écrit ailleurs" },
  { href: "/gestion/taches?nouvelle=1", label: "Tâche", icon: CalendarPlus, perm: "/gestion/taches", prefill: "client", hint: "Un rappel, un suivi, une chose à ne pas oublier" },
  { href: "/gestion/partenaires/nouveau", label: "Installateur", icon: HardHat, hint: "Un nouveau partenaire du réseau" },
  { href: "/gestion/sav/nouveau", label: "Billet de service", icon: LifeBuoy, hint: "Un problème signalé après une installation" },
];

export const ALL_SECTIONS: NavSection[] = [...SECTIONS, SETTINGS];

/* ---------------- Rôles et pages optionnelles ---------------- */

/** Adresse sans paramètres (« /gestion/taches?nouvelle=1 » → « /gestion/taches »). */
export const pathOf = (href: string) => href.split(/[?#]/)[0];

export function canSee(link: NavLink, allowed: readonly string[] | null, available: readonly string[] = []): boolean {
  if (link.optional && !available.includes(pathOf(link.href))) return false;
  return allowed === null || allowed.includes(link.perm ?? pathOf(link.href));
}

const keep = (links: NavLink[], allowed: readonly string[] | null, available: readonly string[]): NavLink[] =>
  links.filter((l) => canSee(l, allowed, available)).map((l) => (l.sub ? { ...l, sub: keep(l.sub, allowed, available) } : l));

export interface RoleNav {
  sections: NavSection[];
  settings: NavLink[];
  create: NavLink[];
}

/** Navigation d'un rôle : sections sans onglet retirées ; Réglages vide pour un vendeur ou un adjoint. */
export function navFor(allowed: readonly string[] | null, available: readonly string[] = []): RoleNav {
  return {
    sections: SECTIONS.map((s) => ({ ...s, tabs: keep(s.tabs, allowed, available) })).filter((s) => s.tabs.length),
    settings: keep(SETTINGS.tabs, allowed, available),
    create: keep(CREATE, allowed, available),
  };
}

/** Toutes les adresses d'une navigation (onglets, sous-pages, réglages, création), sans paramètres. */
export function hrefsOf(nav: RoleNav): string[] {
  const walk = (ls: NavLink[]): string[] => ls.flatMap((l) => [pathOf(l.href), ...walk(l.sub ?? [])]);
  return [...new Set([...nav.sections.flatMap((s) => walk(s.tabs)), ...walk(nav.settings), ...walk(nav.create)])];
}

/** Pages optionnelles (autres chantiers) : l'existence est vérifiée au serveur. */
export function optionalHrefs(): string[] {
  const walk = (ls: NavLink[]): string[] => ls.flatMap((l) => [...(l.optional ? [pathOf(l.href)] : []), ...walk(l.sub ?? [])]);
  return [...new Set([...ALL_SECTIONS.flatMap((s) => walk(s.tabs)), ...walk(CREATE)])];
}

/* ---------------- Section et onglet de l'adresse courante ---------------- */

const hits = (link: NavLink, pathname: string) => {
  const base = pathOf(link.href);
  return link.exact ? pathname === base : pathname === base || pathname.startsWith(`${base}/`);
};

export interface Active {
  section: NavSection;
  /** Onglet de la section (pour une sous-page : l'onglet parent). */
  tab: NavLink;
  /** Lien le plus précis trouvé (sous-page comprise). */
  link: NavLink;
}

/**
 * Le lien le plus précis gagne (« /gestion/textos/reglages » → Réglages, « /gestion/textos/c_… » → Textos).
 * À égalité, une section de travail passe avant Réglages (« Liste de prix » : Ventes).
 */
export function activeOf(pathname: string, sections: readonly NavSection[] = ALL_SECTIONS): Active | null {
  let best: (Active & { score: number }) | null = null;
  for (const section of sections)
    for (const tab of section.tabs)
      for (const link of [tab, ...(tab.sub ?? [])]) {
        if (!hits(link, pathname)) continue;
        const score = pathOf(link.href).length;
        if (!best || score > best.score) best = { section, tab, link, score };
      }
  return best ? { section: best.section, tab: best.tab, link: best.link } : null;
}

/* ---------------- Recherche rapide ---------------- */

export interface PageHit {
  href: string;
  label: string;
  section: string;
  keywords: string;
}

/** Pages d'une navigation, à plat, pour la recherche (données simples : envoyées au navigateur). */
export function searchablePages(nav: RoleNav): PageHit[] {
  const out = new Map<string, PageHit>();
  const add = (l: NavLink, section: string) => {
    const href = pathOf(l.href);
    if (!out.has(href)) out.set(href, { href, label: l.label, section, keywords: l.keywords ?? l.hint ?? "" });
    for (const s of l.sub ?? []) add(s, `${section} · ${l.label}`);
  };
  for (const s of nav.sections) for (const t of s.tabs) add(t, s.label);
  for (const t of nav.settings) add(t, SETTINGS.label);
  for (const t of nav.create) add({ ...t, label: t.label === "Tâche" ? "Nouvelle tâche" : t.label }, "Créer");
  return [...out.values()];
}

export const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[’']/g, " ")
    .toLowerCase()
    .trim();

/**
 * « paiements », « reglages textos », « rbq » : tous les mots doivent se trouver (libellé, section ou mots-clés).
 * Chaque mot compte : au début du libellé 4, dans le libellé 3, dans la section 1 (les mots-clés trouvent, sans classer).
 */
export function searchPages(pages: readonly PageHit[], q: string, limit = 6): PageHit[] {
  const words = fold(q).split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const scored: Array<{ p: PageHit; score: number }> = [];
  for (const p of pages) {
    const label = fold(p.label);
    const section = fold(p.section);
    const hay = `${label} ${section} ${fold(p.keywords)}`;
    if (!words.every((w) => hay.includes(w))) continue;
    const score = words.reduce((n, w) => n + (label.startsWith(w) ? 4 : label.includes(w) ? 3 : section.includes(w) ? 1 : 0), 0);
    scored.push({ p, score });
  }
  return scored.sort((a, b) => b.score - a.score || a.p.label.localeCompare(b.p.label, "fr-CA")).slice(0, limit).map((x) => x.p);
}
