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
];

export function heroTone(pathname: string): "light" | "dark" {
  return LIGHT_HEROES.some((r) => pathname === r.path || (!r.exact && pathname.startsWith(r.path + "/"))) ? "light" : "dark";
}
