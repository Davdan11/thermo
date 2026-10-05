import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { readFileSync } from "node:fs";
import path from "node:path";
import { Honeypot } from "../Honeypot";

/* Pot de miel des formulaires publics : présent pour les robots, absent pour les humains
   (hors tabulation, caché aux lecteurs d'écran, jamais rempli par le navigateur). */

const racine = path.resolve(__dirname, "../../../..");
const source = (fichier: string) => readFileSync(path.join(racine, fichier), "utf8");

/** Formulaires publics dont la route API vérifie le champ « website ». */
const FORMULAIRES = [
  "src/app/soumission/SoumissionClient.tsx",
  "src/app/contact/ContactClient.tsx",
  "src/app/partenaires/PartnerForm.tsx",
  "src/app/rendez-vous/BookingClient.tsx",
  "src/app/trouver-ma-thermopompe/_components/EmailMyChoices.tsx",
  "src/components/thermoscan/ThermoScanSection.tsx",
  "src/components/logisvert/LogisVertAlertForm.tsx",
];

describe("Pot de miel « Site web »", () => {
  const html = renderToStaticMarkup(createElement(Honeypot, { value: "", onChange: () => {} }));

  it("reste dans le HTML pour les robots, sans display:none", () => {
    expect(html).toContain('name="website"');
    expect(html).toContain("Site web");
    expect(html).not.toMatch(/display:\s*none/);
    expect(html).not.toContain("hidden=\"\"");
  });

  it("hors de l'ordre de tabulation, caché aux lecteurs d'écran, sans remplissage automatique", () => {
    expect(html).toMatch(/<input[^>]*tabindex="-1"/i);
    expect(html).toMatch(/<input[^>]*autocomplete="off"/i);
    expect(html).toMatch(/^<div aria-hidden="true"/);
    expect(html).toContain("left:-9999px");
  });

  it("chaque formulaire public passe par ce composant, sans champ « website » à lui", () => {
    for (const f of FORMULAIRES) {
      const src = source(f);
      expect(src, f).toContain('from "@/components/forms/Honeypot"');
      expect(src, f).toMatch(/<Honeypot\s/);
      // Plus de pot de miel écrit à la main dans le formulaire.
      expect(src, f).not.toMatch(/<input[^>]*name="website"/);
      expect(src, f).not.toMatch(/<input[^>]*tabIndex=\{-1\}[^>]*autoComplete="off"/);
    }
  });
});
