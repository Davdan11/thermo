/* Parcours où l'assistant reste caché, pour qu'ils restent concentrés. */
export const ASSISTANT_HIDDEN_ROUTES = ["/trouver-ma-thermopompe", "/soumission", "/rendez-vous"] as const;

export function isAssistantHiddenOn(pathname: string | null | undefined): boolean {
  if (!pathname) return false;
  const path = pathname.split(/[?#]/)[0];
  return ASSISTANT_HIDDEN_ROUTES.some((r) => path === r || path.startsWith(`${r}/`));
}
