import { describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";

/* La section « Garanties » d'une fiche produit : ce qui s'affiche avec un relevé de certificat,
   et ce qui s'affiche sans. Sans relevé, aucune durée de fabricant ne doit apparaître.
   Non-régression de l'audit : la Daikin 2MX18AXVJU affiche 10 ans, pas 12. */

vi.mock("next/link", () => ({
  default: (props: { href: string; children: ReactNode; prefetch?: unknown; scroll?: unknown }) => {
    const { href, children, ...rest } = props;
    delete rest.prefetch;
    delete rest.scroll;
    return createElement("a", { href, ...rest }, children);
  },
}));

import { WarrantySection } from "../WarrantySection";
import { registry } from "@/lib/data/registry";
import { getProductDetail } from "@/lib/data/queries/product-detail";

/** Le rendu serveur coupe les textes par des commentaires (« 10<!-- --> ans ») : on les retire avant de lire. */
const rendre = (props: Parameters<typeof WarrantySection>[0]) => renderToString(createElement(WarrantySection, props)).replace(/<!--.*?-->/g, "");
/** Durées de fabricant écrites en clair (la garantie légale du Québec, elle, est une mention à part). */
const dureesFabricant = (html: string) => html.replace(/Garantie légale de bon fonctionnement[^<]*/g, "").match(/\b\d{1,2}\s*ans?\b/g) ?? [];

describe("WarrantySection — sans relevé", () => {
  it("dit que la garantie n'est pas vérifiée et n'affiche aucune durée", () => {
    const html = rendre({ warranty: null, systemType: "wall-single", zones: 1 });
    expect(html).toContain("Garantie non vérifiée par nous");
    expect(html).toContain("certificat du fabricant");
    expect(dureesFabricant(html)).toEqual([]);
  });

  it("ne contredit plus l'avertissement : aucune phrase « publiées par le fabricant »", () => {
    const html = rendre({ warranty: null, systemType: "multi-zone", zones: 2 });
    expect(html).not.toContain("correspondent aux informations publiées par le fabricant");
    expect(html).not.toContain("standards habituels de l'industrie");
  });
});

describe("WarrantySection — avec relevé", () => {
  const fiche = registry.models.find((m) => m.modelNumber === "2MX18AXVJU");
  const detail = fiche ? getProductDetail(fiche.slug) : null;

  it("la Daikin 2MX18AXVJU affiche 10 ans, pas 12", () => {
    expect(detail, "fiche 2MX18AXVJU du catalogue").toBeTruthy();
    expect(detail!.warranty, "relevé du certificat Daikin").not.toBeNull();
    const html = rendre({ warranty: detail!.warranty, systemType: detail!.model.systemType, zones: detail!.model.zones });
    expect(html).toContain("10 ans");
    expect(dureesFabricant(html)).not.toContain("12 ans");
  });

  it("montre le délai d'enregistrement, la clause du Québec, la citation et le lien du document", () => {
    const html = rendre({ warranty: detail!.warranty, systemType: detail!.model.systemType, zones: detail!.model.zones });
    expect(html).toContain("Enregistrement exigé dans les 60 jours");
    expect(html).toContain("Sans enregistrement");
    expect(html).toContain("l&#x27;enregistrement n&#x27;est pas exigé");
    expect(html).toContain(detail!.warranty!.record.sourceFile);
    expect(html).toContain("Voir le document du fabricant");
  });

  it("rappelle la garantie légale du Québec sans la confondre avec celle du fabricant", () => {
    const html = rendre({ warranty: detail!.warranty, systemType: detail!.model.systemType, zones: detail!.model.zones });
    expect(html).toContain("Garantie légale de bon fonctionnement");
    expect(html).toContain("Elle vient de la loi, pas du fabricant");
    expect(html).toContain('href="/garantie-legale"');
  });
});
