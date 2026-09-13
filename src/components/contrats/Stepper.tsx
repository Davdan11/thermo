/* Conformité C1 — les trois étapes, visibles sur le document du client : il comprend pourquoi il signe à l'étape 3
   seulement. Composant sans état : utilisable au serveur et dans le document de soumission (client). */

import { Check } from "lucide-react";

export const STEPS = ["Estimation", "Choix de votre entrepreneur licencié", "Contrat final à signer"] as const;

/** `current` : 1, 2 ou 3 ; 4 = tout est fait (contrat signé). */
export function Stepper({ current, dark = false }: { current: 1 | 2 | 3 | 4; dark?: boolean }) {
  return (
    <ol className={`ct-steps${dark ? " ct-steps--dark" : ""}`} aria-label="Étapes de votre projet">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const state = n < current ? "is-done" : n === current ? "is-current" : "";
        return (
          <li key={label} className={state} aria-current={n === current ? "step" : undefined}>
            <b aria-hidden>{n < current ? <Check size={16} /> : n}</b>
            <span>
              {n}. {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
