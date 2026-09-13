/* Rétrocompatibilité : les soumissions envoyées avant ce modèle (entreprise des réglages, mode LogisVert « cession »
   ou « aucune », anciennes clés des listes fermées) s'affichent comme avant, gardent leur empreinte et restent
   acceptables ; les anciens fichiers de réglages, de partenaires et de soumissions se lisent sans migration. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { normalizePartenaires } from "@/lib/gestion/partenaires/store";
import { sendBlockers } from "../checklist";
import { LINKS } from "../config";
import { normalizeSettings } from "../defaults";
import { hashOf } from "../hash";
import { describeUnit } from "../present";
import { acceptVersion, buildDocument, createQuote, freezeForSend, reviseQuote, verifyAcceptance } from "../quote";
import { readSoumissions, soumissionsFile } from "../store";
import { computeTotals } from "../totals";
import type { SoumissionsData } from "../types";
import { fullSettings, NO_CONTRACTOR, NOW, RATES, readyContent, TODAY } from "./fixtures";
import { renderDoc } from "./render-doc";

const empty = (): SoumissionsData => ({ version: 1, counters: {}, quotes: [], photos: [] });

/** Soumission envoyée avant le modèle « entrepreneur » : aucune identité d'entrepreneur figée, anciennes clés. */
function legacySent(mode: "cession" | "aucune" | "client") {
  const data = empty();
  const s = fullSettings();
  const c = readyContent(s);
  c.placement.outdoor.mounting = "support-mural";
  c.placement.indoor[0].drain = "pompe";
  c.placement.indoor[0].lineRoute = "mixte";
  c.site.propertyType = "jumelee";
  c.logisvert = { mode };
  const q = createQuote(data, c, "proprio@exemple.ca", NOW);
  const v = q.versions[0];
  freezeForSend(q, v, s, [], NOW);
  // Données écrites par l'ancienne version : clés absentes.
  delete (q as { clientId?: unknown }).clientId;
  delete (v as { contractorId?: unknown }).contractorId;
  return { data, q, v, s };
}

describe("anciennes soumissions envoyées", () => {
  it("document sans clé « contractor » : même empreinte qu'avant, acceptation vérifiable", () => {
    const { q, v } = legacySent("cession");
    const doc = buildDocument(q, v, null, []);
    expect("contractor" in doc).toBe(false);
    const oldShape = {
      number: q.number,
      version: v.v,
      kind: v.kind,
      basedOn: v.basedOn,
      issuedAt: v.frozen!.issuedAt,
      validUntil: v.content.validUntil,
      company: v.frozen!.company,
      texts: v.frozen!.texts,
      taxes: v.frozen!.taxes,
      links: { logisvert: LINKS.logisvert, opcGaranties: LINKS.opcGaranties, opcAnnulation: LINKS.opcAnnulation, opcDistance: LINKS.opcDistance },
      photos: v.frozen!.photos,
      content: v.content,
    };
    expect(hashOf(doc)).toBe(hashOf(oldShape));
    expect(v.contentHash).toBe(hashOf(oldShape));
    const total = computeTotals(doc.content, ["l_opt"], doc.taxes, TODAY).totalCents;
    const a = acceptVersion(q, v, { selection: ["l_opt"], typedName: "Camille Exemple", termsAccepted: true, ip: "203.0.113.7", userAgent: "Vitest", postedTotalCents: total, postedHash: v.contentHash, now: NOW });
    expect(verifyAcceptance(a)).toBe(true);
  });

  it("mode « cession » : les totaux et le document restent ceux de l'envoi (aide déduite, versée à l'entreprise)", () => {
    const { q, v } = legacySent("cession");
    const doc = buildDocument(q, v, null, []);
    const t = computeTotals(doc.content, ["l_opt"], RATES, TODAY);
    expect(t.logisvertMode).toBe("cession");
    expect(t.clientPaysCents).toBe(t.totalCents - 150_000);
    const html = renderDoc(doc, ["l_opt"]);
    expect(html).toContain("Aide LogisVert, versée par Hydro-Québec à l’entreprise");
    expect(html).toContain("À payer à l’entreprise");
    expect(html).not.toContain("Soumission préparée par");
    // Anciennes clés : libellés d'origine.
    expect(html).toContain("Support mural");
    expect(html).toContain("Pompe à condensat (pompe à drain)");
    expect(html).toContain("Maison jumelée");
    // Pied : l'entreprise des réglages, avec sa licence RBQ, comme avant.
    expect(html).toContain("Entreprise Exemple inc.");
    expect(html).toContain("1234-5678-90");
  });

  it("modes « aucune » et « client » d'avant : affichés comme avant", () => {
    const none = legacySent("aucune");
    const htmlNone = renderDoc(buildDocument(none.q, none.v, null, []), ["l_opt"]);
    expect(htmlNone).not.toContain("Aide LogisVert ·");
    const client = legacySent("client");
    const htmlClient = renderDoc(buildDocument(client.q, client.v, null, []), ["l_opt"]);
    expect(htmlClient).toContain("Coût net estimé après l’aide");
    expect(htmlClient).toContain("Vous payez à l’entreprise le total");
  });

  it("nouvelle version d'une ancienne soumission : l'entrepreneur est alors exigé avant l'envoi", () => {
    const { q, v, s } = legacySent("cession");
    const next = reviseQuote(q, v.v, "proprio@exemple.ca", NOW, 30);
    expect(next.contractorId).toBeNull();
    expect(sendBlockers(next.content, s, TODAY, RATES, NO_CONTRACTOR).map((b) => b.id)).toContain("entrepreneur");
  });

  it("texte des courriels : anciennes clés avec leur libellé", () => {
    const { v } = legacySent("aucune");
    const line = describeUnit("Unité 1", v.content.placement, v.content.placement.indoor[0]);
    expect(line).toContain("drain : pompe à condensat (pompe à drain)");
    expect(line).toContain("intérieur et extérieur");
    expect(describeUnit("Unité extérieure", v.content.placement, null)).toContain("sur support mural");
  });
});

describe("anciens fichiers", () => {
  it("réglages sans listes de choix ni valeurs par défaut : complétés", () => {
    const s = normalizeSettings({ company: fullSettings().company, defaults: { validityDays: 45 } } as never);
    expect(s.defaults.validityDays).toBe(45);
    expect(s.defaults.site).toEqual({ access: "", presence: "" });
    expect(s.defaults.schedule).toEqual({ duration: "", arrival: "", windowText: "" });
    expect(s.choices.drain).toEqual(["Gravité vers l’extérieur", "Pompe de condensat"]);
  });

  it("fiche de partenaire sans identité légale : lue comme « à remplir »", () => {
    const d = normalizePartenaires({ partners: { i_exemple0001: { compliance: { rbq: { number: "1234-5678-90", expiresOn: "2027-01-01" } } } } } as never);
    expect(d.partners.i_exemple0001.identity).toBeNull();
    expect(d.partners.i_exemple0001.identityLink).toBeNull();
    expect(d.partners.i_exemple0001.compliance.rbq.number).toBe("1234-5678-90");
  });

  it("soumissions.json sans modèles : liste vide ; ancienne soumission lue telle quelle", async () => {
    const dir = await mkdtemp(path.join(tmpdir(), "thermo-retro-"));
    const env = process.env;
    process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
    try {
      const { q } = legacySent("cession");
      await writeFile(soumissionsFile(), JSON.stringify({ version: 1, counters: { 2026: 1 }, quotes: [q], photos: [] }));
      const data = await readSoumissions();
      expect(data.templates).toEqual([]);
      expect(data.quotes[0].versions[0].contractorId).toBeUndefined();
      expect(buildDocument(data.quotes[0], data.quotes[0].versions[0], null, []).contractor).toBeUndefined();
    } finally {
      process.env = env;
      await rm(dir, { recursive: true, force: true });
    }
  });
});
