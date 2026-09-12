import { afterEach, describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";

/* Le bandeau est rendu au serveur, masqué, précédé du script en ligne qui l'affiche avant le
   premier rendu quand aucun choix n'est mémorisé. Sans mesure configurée : rien du tout. */

vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => createElement("a", { href, ...rest }, children),
}));

async function render(gaId: string | undefined) {
  vi.resetModules();
  if (gaId === undefined) delete process.env.NEXT_PUBLIC_GA_ID;
  else process.env.NEXT_PUBLIC_GA_ID = gaId;
  const { ConsentBanner } = await import("../ConsentBanner");
  return renderToString(createElement(ConsentBanner));
}

afterEach(() => {
  delete process.env.NEXT_PUBLIC_GA_ID;
});

describe("ConsentBanner (rendu serveur)", () => {
  it("rend le bandeau masqué et le script qui le montre avant le premier rendu", async () => {
    const html = await render("G-TEST");
    expect(html).toMatch(/<script type="text\/javascript">[^<]*localStorage\.getItem\(&quot;tpv-consent&quot;\)|<script type="text\/javascript">[^<]*localStorage\.getItem\("tpv-consent"\)/);
    expect(html).toContain("s.style.display=");
    // Le script suit immédiatement la section (il cible previousElementSibling, déjà lu quand il s'exécute).
    expect(html).toMatch(/<\/section><script type="text\/javascript">/);
    expect(html).toContain("previousElementSibling");
    expect(html).toMatch(/<section[^>]*style="[^"]*display:none/);
    expect(html).toContain("Refuser");
    expect(html).toContain("Accepter");
  });

  it("ne rend rien sans mesure configurée", async () => {
    expect(await render(undefined)).toBe("");
  });
});
