/* Pages dont le haut est un héros premium sombre : l'en-tête du site y est transparent
   tant qu'on n'a pas défilé. Toutes les pages sauf celles listées ici. */
const WITHOUT_PREMIUM_HERO = ["/styleguide"];

export function hasPremiumHero(pathname: string): boolean {
  return !WITHOUT_PREMIUM_HERO.some((p) => pathname === p || pathname.startsWith(p + "/"));
}

/* Héros à fond clair : l'en-tête garde son texte et son logo foncés (fond transparent).
   Toutes les autres pages ont un héros sombre : texte et logo crème. « exact » : la route seule, pas ses sous-pages. */
const LIGHT_HEROES: Array<{ path: string; exact?: boolean }> = [
  { path: "/produit" },
  { path: "/comparer", exact: true },
  { path: "/recherche" },
  { path: "/marques" },
  { path: "/prix" },
  { path: "/subventions/logisvert" },
  { path: "/calculateur-economies" },
  { path: "/guides" },
  { path: "/glossaire" },
  { path: "/faq" },
  { path: "/thermopompe" },
  { path: "/a-propos" },
  { path: "/espace-installateur" },
  { path: "/contact" },
  { path: "/rendez-vous" },
  { path: "/technologie-thermomatch" },
  { path: "/trouver-ma-thermopompe" },
  { path: "/soumission" },
  { path: "/conditions" },
  { path: "/confidentialite" },
  { path: "/accessibilite" },
  // Pages par capacité : plaque signalétique en aluminium clair.
  { path: "/thermopompes/thermopompe-6000-btu", exact: true },
  { path: "/thermopompes/thermopompe-9000-btu", exact: true },
  { path: "/thermopompes/thermopompe-12000-btu", exact: true },
  { path: "/thermopompes/thermopompe-15000-btu", exact: true },
  { path: "/thermopompes/thermopompe-18000-btu", exact: true },
  { path: "/thermopompes/thermopompe-24000-btu", exact: true },
  { path: "/thermopompes/thermopompe-30000-btu", exact: true },
  { path: "/thermopompes/thermopompe-36000-btu", exact: true },
  { path: "/thermopompes/thermopompe-42000-btu", exact: true },
  { path: "/thermopompes/thermopompe-48000-btu", exact: true },
  { path: "/thermopompes/thermopompe-60000-btu", exact: true },
];

export function heroTone(pathname: string): "light" | "dark" {
  return LIGHT_HEROES.some((r) => pathname === r.path || (!r.exact && pathname.startsWith(r.path + "/"))) ? "light" : "dark";
}
