import type { ChangeEventHandler, CSSProperties } from "react";

/* ==================================================================
   Pot de miel des formulaires publics : un champ « Site web » que
   seuls les robots remplissent (la route API ignore en silence une
   demande où il n'est pas vide).
   Toujours dans le HTML, sans display:none (que certains robots
   sautent), mais hors de l'écran, hors de l'ordre de tabulation
   (tabIndex -1), caché aux lecteurs d'écran (aria-hidden) et jamais
   rempli par le navigateur (autocomplete off).
   ================================================================== */

const HORS_ECRAN: CSSProperties = { position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden" };

export function Honeypot({ value, onChange }: { value: string; onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <div aria-hidden="true" style={HORS_ECRAN}>
      <label>
        Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={value} onChange={onChange} />
      </label>
    </div>
  );
}
