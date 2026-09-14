/* ==================================================================
   « Le thermomètre » — données du haut de l'écran des résultats
   ThermoMatch : une échelle de froid de 0 °C à −35 °C où chaque
   machine recommandée se pose à la température jusqu'à laquelle elle
   chauffe.
   Sans React : importable par les tests. Disposition 100 % déterministe
   (aucun hasard) : le serveur et le navigateur calculent les mêmes
   positions, en pixels, sur une échelle de hauteur fixe.
   Règles (jamais de chiffre inventé) :
   - une température vient de minOperatingTempC (publiée par le
     fabricant) ou de la certification ENERGY STAR climat froid,
     mesurée à −15 °C ;
   - une machine sans température publiée n'est jamais placée plus
     froid que −15 °C ; sans certification non plus, elle n'est pas
     posée (« température minimale non publiée ») ;
   - le repère régional n'apparaît que si le moteur fournit la
     température de conception de la région (summaryContext.designTempC).
   ================================================================== */

/** Bas minimal de l'échelle : elle descend plus bas, par pas de 5 °C, seulement si une valeur l'exige. */
export const ECHELLE_BAS = -35;
/** Point de mesure de la certification ENERGY STAR climat froid (5 °F). */
export const CERTIF_C = -15;
/** Hauteur de l'échelle, de 0 °C à son bas (px) : la même sur mobile et sur grand écran. */
export const HAUTEUR = 440;
/** Hauteur d'une ligne d'étiquette (px) : nom de machine, puis note. */
export const LIGNE_NOM = 20;
export const LIGNE_NOTE = 17;
/** Espace entre les blocs d'une même étiquette, puis entre deux étiquettes (px). */
export const ENTRE = 4;
export const ECART = 10;
/** Fondu sous −15 °C quand la plus froide n'a que sa certification (en °C d'échelle) : la limite n'est pas publiée. */
export const QUEUE_C = 6;

/* Horloge (s) : le mercure descend, puis les machines se posent une à une. */
export const DEPART = 0.3;
export const DUREE_MERCURE = 1.3;
export const PAS_POSE = 0.18;
export const DUREE_POSE = 0.5;
export const DUREE_TOTALE_MAX = 2.5;

/** Ce que l'on sait du grand froid pour une machine (même règle sur la carte et sur le thermomètre). */
export type Froid = "publiee" | "certifiee" | "mesuree" | "aucune";

const fini = (v: unknown): v is number => typeof v === "number" && Number.isFinite(v);

/**
 * publiée : température minimale du fabricant ; certifiée : ENERGY STAR climat froid, sans température publiée ;
 * mesurée : seulement la puissance à −15 °C ; aucune : rien de publié.
 */
export function froidDe(m: { minTemp: number | null; coldClimate: boolean; h5?: number | null }): Froid {
  if (fini(m.minTemp)) return "publiee";
  if (m.coldClimate) return "certifiee";
  return fini(m.h5) ? "mesuree" : "aucune";
}

/** « −30 °C » : vrai signe moins, espace insécable, une décimale seulement si la valeur en a une. */
export function tempTexte(t: number): string {
  const n = Math.abs(t).toLocaleString("fr-CA", { maximumFractionDigits: 1 });
  return `${t < 0 ? "−" : ""}${n} °C`;
}

export type MachineThermo = { key: string; brand: string; series: string; minTemp: number | null; coldClimate: boolean };
/** Une machine, avec son rang dans les résultats (1 = meilleur choix). */
export type MachineRang = { key: string; rank: number; brand: string; series: string; best: boolean };
/** Machines posées au même endroit : même nature (publiée ou certifiée), même température. */
export type Pose = { kind: "publiee" | "certifiee"; tempC: number; machines: MachineRang[] };

/** Où chaque machine se pose : à sa température publiée, au repère −15 °C si elle n'a que la certification, sinon nulle part. */
export function poserMachines(list: MachineThermo[]): { poses: Pose[]; nonPubliees: MachineRang[] } {
  const poses: Pose[] = [];
  const nonPubliees: MachineRang[] = [];
  list.forEach((m, i) => {
    const r: MachineRang = { key: m.key, rank: i + 1, brand: m.brand, series: m.series, best: i === 0 };
    const froid = froidDe(m);
    if (froid !== "publiee" && froid !== "certifiee") {
      nonPubliees.push(r);
      return;
    }
    const tempC = froid === "publiee" ? (m.minTemp as number) : CERTIF_C;
    const g = poses.find((p) => p.kind === froid && p.tempC === tempC);
    if (g) g.machines.push(r);
    else poses.push({ kind: froid, tempC, machines: [r] });
  });
  // Du plus chaud au plus froid : l'ordre dans lequel le mercure les atteint.
  poses.sort((a, b) => b.tempC - a.tempC || a.machines[0].rank - b.machines[0].rank);
  return { poses, nonPubliees };
}

export type RepereRegion = { region: string; tempC: number };

/** Repère « jours les plus froids » : seulement avec une vraie température de conception et le nom de la région. */
export function repereRegion(ctx: { region?: unknown; designTempC?: unknown } | null | undefined): RepereRegion | null {
  const t = ctx?.designTempC;
  const r = typeof ctx?.region === "string" ? ctx.region.trim() : "";
  if (!fini(t) || t >= 0 || !r) return null;
  return { region: r, tempC: t };
}

/** Bas de l'échelle : −35 °C, ou plus bas (par pas de 5 °C) si une valeur réelle descend plus bas. */
export function basEchelle(temps: number[]): number {
  return Math.floor(Math.min(ECHELLE_BAS, ...temps.filter(fini)) / 5) * 5;
}

/** Position verticale (px depuis 0 °C) d'une température sur une échelle de hauteur h. */
export function yDe(t: number, bas: number, h = HAUTEUR): number {
  const c = Math.min(0, Math.max(bas, t));
  return Math.round((c / bas) * h * 10) / 10 + 0;
}

type Case = { y: number; h: number; ancre: number };

/**
 * Étiquettes sans chevauchement : chaque paquet d'étiquettes qui se touchent est centré sur ses positions
 * voulues (le point d'ancrage de chacune à la hauteur de sa température), puis borné à l'échelle.
 * Déterministe : même entrée, mêmes positions (ex æquo : ordre de la liste). Rend le haut de chaque étiquette.
 */
export function desencombrer(items: Case[], min: number, max: number, ecart = ECART): number[] {
  const ordre = items.map((_, i) => i).sort((a, b) => items[a].y - items[b].y || a - b);
  type Paquet = { idx: number[]; top: number; h: number };
  const placer = (idx: number[]): Paquet => {
    let decalage = 0;
    let somme = 0;
    for (const i of idx) {
      somme += items[i].y - items[i].ancre - decalage;
      decalage += items[i].h + ecart;
    }
    const h = decalage - ecart;
    return { idx, h, top: Math.min(max - h, Math.max(min, somme / idx.length)) };
  };
  let paquets = ordre.map((i) => placer([i]));
  for (let k = 0; k < paquets.length - 1; ) {
    const a = paquets[k];
    const b = paquets[k + 1];
    if (a.top + a.h + ecart > b.top) {
      paquets = [...paquets.slice(0, k), placer([...a.idx, ...b.idx]), ...paquets.slice(k + 2)];
      k = Math.max(0, k - 1); // le paquet agrandi peut maintenant toucher celui d'avant
    } else k++;
  }
  const tops = new Array<number>(items.length).fill(0);
  for (const p of paquets) {
    let t = p.top;
    for (const i of p.idx) {
      tops[i] = Math.round(t * 10) / 10 + 0;
      t += items[i].h + ecart;
    }
  }
  return tops;
}

export type PosePlacee = Pose & { y: number };
type Base = { y: number; h: number; ancre: number; top: number };
/** Étiquettes à droite de l'échelle : machines posées, repère −15 °C (avec les machines certifiées), région. */
export type Etiquette =
  | (Base & { id: string; kind: "pose"; pose: PosePlacee })
  | (Base & { id: "certif"; kind: "certif"; pose: PosePlacee | null })
  | (Base & { id: "region"; kind: "region"; repere: RepereRegion });

export type PlanThermometre = {
  hauteur: number;
  bas: number;
  graduations: { t: number; y: number; majeure: boolean }[];
  poses: PosePlacee[];
  nonPubliees: MachineRang[];
  region: (RepereRegion & { y: number }) | null;
  certifY: number;
  etiquettes: Etiquette[];
  /** Bas du mercure (px) : la machine posée la plus froide ; 0 si aucune n'est posée. */
  mercure: number;
  /** Fondu sous le mercure (px) quand la plus froide n'a que sa certification à −15 °C ; sinon null. */
  queue: number | null;
  /** Départ de chaque animation (s) : machines par rang, fondu, liste des non publiées ; fin de la dernière. */
  horaire: { machines: Record<number, number>; queue: number; nonPubliees: number; fin: number };
};

/** Inverse de la courbe « sortie cubique », la même que celle du mercure en CSS : cubic-bezier(0.33, 1, 0.68, 1). */
const inverseSortie = (p: number) => 1 - Math.cbrt(1 - Math.min(1, Math.max(0, p)));
const s2 = (t: number) => Math.round(t * 100) / 100;

/** Hauteur d'étiquette (px) selon sa nature et son nombre de machines : fixe, pour une disposition déterministe. */
export function hauteurEtiquette(kind: Etiquette["kind"], n: number): number {
  if (kind === "pose") return n * LIGNE_NOM + LIGNE_NOTE;
  if (kind === "region") return LIGNE_NOM + LIGNE_NOTE;
  return n > 0 ? 2 * LIGNE_NOTE + ENTRE + n * LIGNE_NOM + ENTRE + 2 * LIGNE_NOTE : 2 * LIGNE_NOTE;
}

export function planThermometre(machines: MachineThermo[], ctx?: { region?: unknown; designTempC?: unknown } | null, hauteur = HAUTEUR): PlanThermometre {
  const { poses: brutes, nonPubliees } = poserMachines(machines);
  const repere = repereRegion(ctx);
  const bas = basEchelle([...brutes.map((p) => p.tempC), ...(repere ? [repere.tempC] : [])]);
  const y = (t: number) => yDe(t, bas, hauteur);

  const graduations: PlanThermometre["graduations"] = [];
  for (let t = 0; t >= bas; t--) graduations.push({ t, y: y(t), majeure: t % 5 === 0 });

  const poses: PosePlacee[] = brutes.map((p) => ({ ...p, y: y(p.tempC) }));
  const certifiee = poses.find((p) => p.kind === "certifiee") ?? null;
  const region = repere ? { ...repere, y: y(repere.tempC) } : null;
  const certifY = y(CERTIF_C);

  const brouillon: Etiquette[] = [
    ...poses
      .filter((p) => p.kind === "publiee")
      .map((p): Etiquette => ({ id: `pose${p.tempC}`, kind: "pose", pose: p, y: p.y, h: hauteurEtiquette("pose", p.machines.length), ancre: LIGNE_NOM / 2, top: 0 })),
    { id: "certif", kind: "certif", pose: certifiee, y: certifY, h: hauteurEtiquette("certif", certifiee?.machines.length ?? 0), ancre: LIGNE_NOTE / 2, top: 0 },
    ...(region ? [{ id: "region", kind: "region", repere: { region: region.region, tempC: region.tempC }, y: region.y, h: hauteurEtiquette("region", 0), ancre: LIGNE_NOM / 2, top: 0 } as Etiquette] : []),
  ];
  const tops = desencombrer(brouillon, -ECART, hauteur + ECART);
  const etiquettes = brouillon.map((e, i) => ({ ...e, top: tops[i] }));

  const mercure = poses.length ? Math.max(...poses.map((p) => p.y)) : 0;
  const queue = certifiee && certifiee.y >= mercure ? Math.min(hauteur - mercure, Math.round((QUEUE_C / -bas) * hauteur * 10) / 10) : null;

  // Une machine se pose quand le mercure atteint sa température ; jamais deux à la fois.
  const arrivee = s2(DEPART + DUREE_MERCURE);
  const horaire: PlanThermometre["horaire"] = { machines: {}, queue: arrivee, nonPubliees: arrivee, fin: arrivee };
  let precedente = -Infinity;
  for (const p of poses) {
    for (const m of p.machines) {
      const ideale = DEPART + DUREE_MERCURE * (mercure > 0 ? inverseSortie(p.y / mercure) : 1);
      const t = s2(Math.max(ideale, precedente + PAS_POSE));
      horaire.machines[m.rank] = t;
      precedente = t;
      horaire.fin = Math.max(horaire.fin, s2(t + DUREE_POSE));
    }
  }
  if (queue != null || nonPubliees.length) horaire.fin = Math.max(horaire.fin, s2(arrivee + DUREE_POSE));

  return { hauteur, bas, graduations, poses, nonPubliees, region, certifY, etiquettes, mercure, queue, horaire };
}

/** Texte équivalent pour les lecteurs d'écran : l'échelle, chaque machine dans l'ordre des résultats, les repères. */
export function texteThermometre(plan: PlanThermometre): string[] {
  const lignes = [`Échelle de froid de 0 °C à ${tempTexte(plan.bas)}.`];
  const toutes = [...plan.poses.flatMap((p) => p.machines.map((m) => ({ m, p: p as Pose | null }))), ...plan.nonPubliees.map((m) => ({ m, p: null as Pose | null }))].sort((a, b) => a.m.rank - b.m.rank);
  for (const { m, p } of toutes) {
    const nom = `${m.rank}. ${[m.brand, m.series].filter(Boolean).join(" ")}${m.best ? " (meilleur choix)" : ""}`;
    if (!p) lignes.push(`${nom} : température minimale non publiée.`);
    else if (p.kind === "publiee") lignes.push(`${nom} : chauffe jusqu’à ${tempTexte(p.tempC)}, température minimale publiée par le fabricant.`);
    else lignes.push(`${nom} : certifiée ENERGY STAR climat froid, chauffe encore à ${tempTexte(CERTIF_C)} ; température minimale non publiée.`);
  }
  if (plan.region) lignes.push(`Repère : jours les plus froids à ${plan.region.region}, ${tempTexte(plan.region.tempC)}.`);
  lignes.push(`Repère : certification ENERGY STAR climat froid, ${tempTexte(CERTIF_C)}.`);
  return lignes;
}
