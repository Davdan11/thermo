/* ==================================================================
   Compteur d'écrans atteints dans ThermoMatch — côté navigateur.

   Un seul chiffre part vers notre propre serveur : l'identifiant de
   l'écran atteint. Aucun témoin, aucun traceur tiers, aucune donnée de
   la maison, aucun identifiant de visiteur. Le même écran n'est compté
   qu'une fois par session (mémoire de la page), pour que les allers-
   retours ne gonflent pas le total.
   ================================================================== */

const envoyes = new Set<string>();

/** Compte l'écran atteint, une seule fois par session. Échoue en silence : la mesure ne casse jamais l'interface. */
export function noteEtape(ecran: string): void {
  if (typeof window === "undefined" || !ecran || envoyes.has(ecran)) return;
  envoyes.add(ecran);
  try {
    const body = JSON.stringify({ ecran });
    if (typeof navigator.sendBeacon === "function") {
      navigator.sendBeacon("/api/thermomatch/etape", new Blob([body], { type: "application/json" }));
      return;
    }
    void fetch("/api/thermomatch/etape", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => undefined);
  } catch {
    /* la mesure ne doit jamais casser l'interface */
  }
}
