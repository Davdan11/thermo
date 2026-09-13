/* ==================================================================
   Vérification de l'origine des requêtes qui modifient des données
   (gestionnaires de routes ; les Server Actions le font déjà).
   L'en-tête Origin (ou, à défaut, Referer) doit désigner l'hôte même
   qui reçoit la requête. Sans aucun des deux : refus.
   ================================================================== */

export function isSameOrigin(req: Request): boolean {
  const host = req.headers.get("x-forwarded-host") ?? req.headers.get("host");
  if (!host) return false;
  const sameHost = (value: string) => {
    try {
      return new URL(value).host === host;
    } catch {
      return false;
    }
  };
  const origin = req.headers.get("origin");
  if (origin) return origin !== "null" && sameHost(origin);
  const referer = req.headers.get("referer");
  return referer ? sameHost(referer) : false;
}
