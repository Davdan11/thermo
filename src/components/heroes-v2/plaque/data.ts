/* ==================================================================
   Plaque signalétique (pages /thermopompes/thermopompe-XXXX-btu) :
   mise en forme côté serveur des chiffres que la page a déjà calculés.
   Tout est formaté ici (fr-CA) pour que le serveur et le navigateur
   affichent exactement les mêmes caractères.
   ================================================================== */
import { typo } from "../marques/shared";

export type PlaqueInput = {
  btu: number;
  /** « 12 000 BTU » */
  label: string;
  slug: string;
  models: number;
  brands: number;
  walls: number;
  centrals: number;
  cold: number;
  /** Machines avec une capacité certifiée à -15 °C. */
  certified: number;
  h5Min: number | null;
  h5Max: number | null;
  maxLogisVert: number;
  areaMin: number;
  areaMax: number;
  classes: Array<{ btu: number; slug: string }>;
  intro: string;
  answer: string;
};

export type PlaqueTick = { pct: number; major: boolean; label?: string };

export type PlaqueData = {
  crumbs: Array<{ label: string; href?: string }>;
  eyebrow: string;
  titleLines: [string, string];
  intro: string;
  answer: string;
  /** « Calibre 3 sur 11 » */
  serial: string;
  nominal: string;
  nominalPct: number;
  range: { min: string; max: string; minPct: number; maxPct: number } | null;
  certifiedNote: string;
  ticks: PlaqueTick[];
  fields: Array<{ label: string; value: string; unit?: string }>;
  calibres: Array<{ label: string; href: string; current: boolean }>;
};

const fr = (n: number) => n.toLocaleString("fr-CA");
const pct = (v: number, max: number) => Math.round((v / max) * 10000) / 100;

export function buildPlaque(i: PlaqueInput): PlaqueData {
  const hasRange = i.h5Min !== null && i.h5Max !== null;
  // Échelle de la jauge : de 0 à la valeur ronde au-dessus du plus grand chiffre montré.
  const top = Math.max(i.h5Max ?? 0, i.btu) * 1.08;
  const step = top <= 30000 ? 5000 : 10000;
  const max = Math.ceil(top / step) * step;
  const minor = step / 5;
  const ticks: PlaqueTick[] = [];
  for (let v = 0; v <= max; v += minor) {
    const major = v % step === 0;
    ticks.push({ pct: pct(v, max), major, ...(major ? { label: fr(v) } : {}) });
  }
  const idx = i.classes.findIndex((c) => c.slug === i.slug);

  return {
    crumbs: [{ label: "Thermopompes", href: "/thermopompes" }, { label: `Thermopompe ${i.label}` }],
    eyebrow: "Par capacité",
    titleLines: ["Thermopompe", i.label],
    intro: typo(i.intro),
    answer: typo(i.answer),
    serial: `Calibre ${idx + 1} sur ${i.classes.length}`,
    nominal: fr(i.btu),
    nominalPct: pct(i.btu, max),
    range: hasRange ? { min: fr(i.h5Min as number), max: fr(i.h5Max as number), minPct: pct(i.h5Min as number, max), maxPct: pct(i.h5Max as number, max) } : null,
    certifiedNote: hasRange ? `Selon les fiches ENERGY STAR de ${fr(i.certified)} machines` : "Valeur non publiée pour cette classe",
    ticks,
    fields: [
      { label: "Modèles", value: fr(i.models) },
      { label: "Marques", value: fr(i.brands) },
      { label: "Certifiées grand froid", value: fr(i.cold) },
      { label: "Murales / centrales", value: `${fr(i.walls)} / ${fr(i.centrals)}` },
      i.maxLogisVert > 0 ? { label: "LogisVert jusqu’à", value: fr(i.maxLogisVert), unit: "$" } : { label: "LogisVert jusqu’à", value: "—" },
      { label: "Maison standard (pi²)", value: `${fr(i.areaMin)}–${fr(i.areaMax)}` },
    ],
    calibres: i.classes.map((c) => ({ label: fr(c.btu), href: `/thermopompes/${c.slug}`, current: c.slug === i.slug })),
  };
}
