/* Pages dont le haut est un héros premium sombre : l'en-tête du site y est transparent
   tant qu'on n'a pas défilé. Toutes les pages sauf celles listées ici. */
const WITHOUT_PREMIUM_HERO = ["/styleguide"];

export function hasPremiumHero(pathname: string): boolean {
  return !WITHOUT_PREMIUM_HERO.some((p) => pathname === p || pathname.startsWith(p + "/"));
}
