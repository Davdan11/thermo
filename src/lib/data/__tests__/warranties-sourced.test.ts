import { describe, expect, it } from "vitest";
import { registry } from "@/lib/data/registry";
import { isOfficialSource } from "@/lib/data/official-sources";
import { WARRANTY_RECORDS, normalizeModelNumber, normalizeSeriesName, type WarrantyRecord } from "../warranty";

/* Garanties relevées dans les documents des fabricants : même discipline que les noms commerciaux
   et les températures. Une entrée n'entre dans la table que si elle est sourcée (adresse https,
   hôte officiel ou source secondaire justifiée), citée en quelques mots qui portent le chiffre,
   et plausible. Ce test refuse tout ce qui ressemble à une durée inventée. */

const ORDRE: Record<WarrantyRecord["scope"], number> = { modele: 0, serie: 1, marque: 2 };
const cles = (e: WarrantyRecord) => [...(e.models ?? []), ...e.modelPrefixes, ...e.modelPatterns, ...e.seriesNames];
const duree = (e: WarrantyRecord) => [e.partsYears, e.compressorYears, e.laborYears].filter((v): v is number => v != null);

describe("warranties-sourced.json — chaque durée est sourcée", () => {
  it("adresse https, hôte officiel ou source secondaire justifiée", () => {
    expect(WARRANTY_RECORDS.length).toBeGreaterThan(0);
    const problemes: string[] = [];
    for (const e of WARRANTY_RECORDS) {
      const id = `${e.brand} · ${e.label}`;
      if (!/^https:\/\//.test(e.sourceFile)) {
        problemes.push(`${id} : source qui n'est pas une adresse https`);
        continue;
      }
      if (e.sourceType === "secondaire") {
        if (!e.note?.trim()) problemes.push(`${id} : source secondaire sans note`);
      } else if (!isOfficialSource(new URL(e.sourceFile))) {
        problemes.push(`${id} : hôte hors de la liste officielle (${new URL(e.sourceFile).hostname})`);
      }
      if (e.page != null && (!Number.isInteger(e.page) || e.page < 1)) problemes.push(`${id} : page ${e.page}`);
    }
    expect(problemes).toEqual([]);
  });

  it("citation courte qui porte le chiffre, sinon une note qui l'explique", () => {
    const problemes: string[] = [];
    for (const e of WARRANTY_RECORDS) {
      const id = `${e.brand} · ${e.label}`;
      const mots = e.quote.trim().split(/\s+/).filter(Boolean);
      if (!e.quote.trim()) problemes.push(`${id} : citation vide`);
      if (e.quote.length > 160) problemes.push(`${id} : citation de ${e.quote.length} caractères`);
      if (mots.length > 15) problemes.push(`${id} : citation de ${mots.length} mots`);
      const porteLeChiffre = duree(e).some((n) => new RegExp(`\\b${n}\\b`).test(e.quote));
      if (!porteLeChiffre) {
        // Chiffre lu dans un tableau sans couche texte : la note doit alors le donner et dire pourquoi.
        const note = e.note ?? "";
        if (!duree(e).some((n) => new RegExp(`\\b${n}\\b`).test(note))) {
          problemes.push(`${id} : ni la citation ni la note ne portent la durée`);
        }
      }
    }
    expect(problemes).toEqual([]);
  });

  it("durées plausibles et cohérentes entre elles", () => {
    const problemes: string[] = [];
    for (const e of WARRANTY_RECORDS) {
      const id = `${e.brand} · ${e.label}`;
      if (!Number.isInteger(e.partsYears) || e.partsYears < 1 || e.partsYears > 15) problemes.push(`${id} : pièces ${e.partsYears}`);
      if (e.compressorYears != null && (!Number.isInteger(e.compressorYears) || e.compressorYears < 1 || e.compressorYears > 15)) problemes.push(`${id} : compresseur ${e.compressorYears}`);
      if (e.laborYears != null && (!Number.isInteger(e.laborYears) || e.laborYears < 0 || e.laborYears > 15)) problemes.push(`${id} : main-d'œuvre ${e.laborYears}`);

      if (e.registrationRequired) {
        if (e.registrationDays != null && (e.registrationDays < 30 || e.registrationDays > 180)) problemes.push(`${id} : délai d'enregistrement de ${e.registrationDays} jours`);
      } else {
        if (e.registrationDays != null) problemes.push(`${id} : délai d'enregistrement sans enregistrement exigé`);
        if (e.quebecNoRegistration) problemes.push(`${id} : clause du Québec sans enregistrement exigé`);
      }

      const w = e.withoutRegistration;
      if (w) {
        if (w.partsYears != null && w.partsYears > e.partsYears) problemes.push(`${id} : pièces sans enregistrement plus longues qu'avec`);
        if (w.compressorYears != null && e.compressorYears != null && w.compressorYears > e.compressorYears) problemes.push(`${id} : compresseur sans enregistrement plus long qu'avec`);
      }
      if (!["CA", "US"].includes(e.country)) problemes.push(`${id} : pays ${e.country}`);
    }
    expect(problemes).toEqual([]);
  });

  it("chaque relevé vise une marque du catalogue et sait à quoi il s'applique", () => {
    const marques = new Set(registry.brands.map((b) => normalizeSeriesName(b.name)));
    const problemes: string[] = [];
    for (const e of WARRANTY_RECORDS) {
      const id = `${e.brand} · ${e.label}`;
      if (!marques.has(normalizeSeriesName(e.brand))) problemes.push(`${id} : marque inconnue du catalogue`);
      if (!e.label.trim()) problemes.push(`${id} : libellé vide`);
      if (e.scope === "modele" && !e.models?.length) problemes.push(`${id} : portée « modele » sans numéro`);
      if (e.modelPatterns.some((p) => !p.includes("*"))) problemes.push(`${id} : motif sans « * »`);
      if (cles(e).some((k) => !k.trim())) problemes.push(`${id} : clé de correspondance vide`);
      // Un relevé qui ne peut rattacher aucune fiche est gardé pour mémoire : il doit dire pourquoi.
      if (e.scope !== "marque" && cles(e).length === 0 && !e.note?.trim()) problemes.push(`${id} : aucune clé et aucune note`);
      if (e.scope === "marque" && cles(e).length === 0 && !e.scopeText && !e.conditions && !e.note) problemes.push(`${id} : relevé de marque sans portée écrite`);
    }
    expect(problemes).toEqual([]);
  });

  it("table triée, sans doublon", () => {
    const attendu = WARRANTY_RECORDS.slice().sort(
      (a, b) => a.brand.localeCompare(b.brand, "fr") || ORDRE[a.scope] - ORDRE[b.scope] || a.label.localeCompare(b.label, "fr"),
    );
    expect(WARRANTY_RECORDS.map((e) => `${e.brand}|${e.scope}|${e.label}`)).toEqual(attendu.map((e) => `${e.brand}|${e.scope}|${e.label}`));

    const vus = new Set<string>();
    const doublons: string[] = [];
    for (const e of WARRANTY_RECORDS) {
      const k = [
        normalizeSeriesName(e.brand),
        e.scope,
        e.sourceFile,
        cles(e).map((x) => normalizeModelNumber(x)).sort().join(","),
        e.partsYears,
        e.compressorYears,
      ].join("|");
      if (vus.has(k)) doublons.push(`${e.brand} · ${e.label}`);
      vus.add(k);
    }
    expect(doublons).toEqual([]);
  });
});
