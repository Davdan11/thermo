/* ==================================================================
   Mise en page des visuels Facebook (Satori, via ImageResponse).
   Publication 1080 × 1350, story 1080 × 1920.

   Direction artistique du site, celle du héros validé de l'accueil :
   bleu nuit #0C1821, orange #e54b17, crème #f8f5f0 ; grand titre serré
   (Inter 600, −0,045 em) ; un mot en Instrument Serif italique posé
   sur un coup de marqueur orange incliné (skewX −8°) ; petites
   étiquettes espacées en capitales ; filets fins ; vraie photo du
   fabricant sur un panneau crème. Rien de « généré » : pas de
   pastilles, de halos, de dégradés, de verre, de cercles d'icônes ni
   d'émojis.

   Pièges de Satori : display:flex sur tout nœud à plusieurs enfants ;
   les titres sont coupés en lignes par le code (mesure.ts) pour
   qu'aucun texte ne déborde.
   ================================================================== */

import type { ReactNode } from "react";
import { fmtBtu, fmtDec, fmtInt, fmtTemp, NBSP } from "@/lib/presence/format";
import { fmtMontant } from "../format";
import { sourcesTemperatures } from "../redaction";
import { adresseLisible } from "../utm";
import type { Faits, FaitsDe, Genre, ModeleFaits } from "../types";
import { ajuster, mesureur, mots, type Metriques, type Mot } from "./mesure";

export const TAILLES: Record<Genre, { width: number; height: number }> = {
  publication: { width: 1080, height: 1350 },
  story: { width: 1080, height: 1920 },
};

export const C = {
  nuit: "#0C1821",
  orange: "#e54b17",
  creme: "#f8f5f0",
  surNuit: "rgba(248,245,240,0.66)",
  surNuitFaible: "rgba(248,245,240,0.44)",
  filetNuit: "rgba(248,245,240,0.16)",
  surCreme: "rgba(12,24,33,0.62)",
  filetCreme: "rgba(12,24,33,0.14)",
};

type Theme = "nuit" | "creme";

export interface PhotoPrete {
  uri: string;
  largeur: number;
  hauteur: number;
}

export interface Ressources {
  /** Photos et logos préparés (data URI PNG), par chemin public. */
  images: Record<string, PhotoPrete>;
  metriques: { extra: Metriques; semi: Metriques; regulier: Metriques; serif: Metriques };
}

const texteSur = (t: Theme) => (t === "nuit" ? C.creme : C.nuit);
const discretSur = (t: Theme) => (t === "nuit" ? C.surNuit : C.surCreme);
const filetSur = (t: Theme) => (t === "nuit" ? C.filetNuit : C.filetCreme);

/** Apostrophe typographique dans les textes venus des données. */
const typo = (s: string) => s.replace(/'/g, "’").replace(/ à (?=[−-]?\d)/g, " à\u00a0");

const TITRE_ESPACEMENT = -0.045;
/** Marge du coup de marqueur de chaque côté du mot, en em (comme l'accueil). */
const MARQUEUR_MARGE = 0.14;
/** Décalage vertical de l'Instrument Serif pour partager la ligne de base d'Inter (métriques hhea des deux polices). */
const DECALAGE_SERIF = 0.024;

/* ------------------------------------------------------------------
   Briques
   ------------------------------------------------------------------ */

function Entete({ theme, libelle }: { theme: Theme; libelle: string }) {
  const style = { display: "flex", fontSize: 21, fontWeight: 600, letterSpacing: "0.2em", color: discretSur(theme) } as const;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", width: 40, height: 2, background: C.orange }} />
        <div style={style}>THERMOPOMPES À VENDRE</div>
      </div>
      <div style={style}>{libelle.toUpperCase()}</div>
    </div>
  );
}

function Etiquette({ children, marge = 0, couleur = C.orange }: { children: string; marge?: number; couleur?: string }) {
  return <div style={{ display: "flex", marginTop: marge, fontSize: 22, fontWeight: 600, letterSpacing: "0.2em", color: couleur }}>{typo(children).toUpperCase()}</div>;
}

interface TitreProps {
  segments: Array<{ texte: string; marque?: boolean }>;
  r: Ressources;
  theme: Theme;
  largeur: number;
  min: number;
  max: number;
  lignesMax: number;
  interligne?: number;
  marge?: number;
}

/** Titre coupé en lignes par le code ; les mots marqués passent en Instrument Serif italique sur le coup de marqueur. */
function Titre({ segments, r, theme, largeur, min, max, lignesMax, interligne = 1.0, marge = 0 }: TitreProps) {
  const me = mesureur(r.metriques.semi, TITRE_ESPACEMENT, { m: r.metriques.serif, margeEm: MARQUEUR_MARGE });
  const { taille, lignes } = ajuster(mots(segments.map((s) => ({ ...s, texte: typo(s.texte) }))), me, { min, max, largeur, lignesMax });
  const groupes = (ligne: Mot[]) => {
    const out: Array<{ texte: string; marque: boolean }> = [];
    for (const w of ligne) {
      const last = out[out.length - 1];
      if (last && last.marque === !!w.marque) last.texte += ` ${w.texte}`;
      else out.push({ texte: w.texte, marque: !!w.marque });
    }
    return out;
  };
  const couleur = texteSur(theme);
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: marge }}>
      {lignes.map((ligne, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", height: Math.round(taille * interligne), gap: me.espace(taille) }}>
          {groupes(ligne).map((g, j) =>
            g.marque ? (
              <div key={j} style={{ display: "flex", position: "relative", height: taille, paddingLeft: taille * MARQUEUR_MARGE, paddingRight: taille * MARQUEUR_MARGE }}>
                <div style={{ display: "flex", position: "absolute", left: 0, right: 0, top: taille * 0.2, bottom: taille * 0.02, background: C.orange, transform: "skewX(-8deg)" }} />
                <div style={{ display: "flex", position: "relative", top: taille * DECALAGE_SERIF, fontFamily: "Instrument", fontStyle: "italic", fontWeight: 400, fontSize: taille, lineHeight: 1, color: C.creme, whiteSpace: "nowrap" }}>{g.texte}</div>
              </div>
            ) : (
              <div key={j} style={{ display: "flex", height: taille, fontWeight: 600, fontSize: taille, lineHeight: 1, letterSpacing: `${TITRE_ESPACEMENT}em`, color: couleur, whiteSpace: "nowrap" }}>
                {g.texte}
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

function Paragraphe({ texte, r, theme, largeur, min, max, lignesMax, marge = 0, couleur }: { texte: string; r: Ressources; theme: Theme; largeur: number; min: number; max: number; lignesMax: number; marge?: number; couleur?: string }) {
  const { taille, lignes } = ajuster(mots([{ texte: typo(texte) }]), mesureur(r.metriques.regulier), { min, max, largeur, lignesMax });
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: marge }}>
      {lignes.map((l, i) => (
        <div key={i} style={{ display: "flex", fontSize: taille, lineHeight: 1.38, fontWeight: 400, color: couleur ?? discretSur(theme), whiteSpace: "nowrap" }}>
          {l.map((w) => w.texte).join(" ")}
        </div>
      ))}
    </div>
  );
}

interface Stat {
  libelle: string;
  valeur: string;
}

function Stats({ items, theme, r, largeur, taille = 50, marge = 0 }: { items: Stat[]; theme: Theme; r: Ressources; largeur: number; taille?: number; marge?: number }) {
  const col = largeur / items.length;
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: marge, borderTop: `2px solid ${filetSur(theme)}` }}>
      {items.map((s, i) => {
        const dispo = col - (i === 0 ? 24 : 52);
        // Chaque valeur tient dans sa colonne ; le libellé passe sur deux lignes au besoin.
        const t = Math.min(taille, Math.floor(dispo / Math.max(0.01, r.metriques.semi.largeur(s.valeur, 1, -0.035))));
        const lib = ajuster(mots([{ texte: typo(s.libelle).toUpperCase() }]), mesureur(r.metriques.semi, 0.14), { min: 15, max: 18, largeur: dispo, lignesMax: 2 });
        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", width: col, paddingTop: 24, paddingLeft: i === 0 ? 0 : 28, borderLeft: i === 0 ? "none" : `2px solid ${filetSur(theme)}` }}>
            {lib.lignes.map((l, k) => (
              <div key={k} style={{ display: "flex", fontSize: lib.taille, lineHeight: 1.3, fontWeight: 600, letterSpacing: "0.14em", color: discretSur(theme), whiteSpace: "nowrap" }}>
                {l.map((w) => w.texte).join(" ")}
              </div>
            ))}
            <div style={{ display: "flex", marginTop: 12, fontSize: t, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.035em", color: texteSur(theme), whiteSpace: "nowrap" }}>{s.valeur}</div>
          </div>
        );
      })}
    </div>
  );
}

function Pied({ theme, sources, adresse, r, largeur }: { theme: Theme; sources: string; adresse: string | null; r: Ressources; largeur: number }) {
  const largeurSources = adresse ? largeur - 320 : largeur;
  const { taille, lignes } = ajuster(mots([{ texte: typo(sources) }]), mesureur(r.metriques.regulier), { min: 15, max: 19, largeur: largeurSources, lignesMax: 3 });
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: 20, borderTop: `2px solid ${filetSur(theme)}` }}>
      <div style={{ display: "flex", flexDirection: "column", width: largeurSources }}>
        {lignes.map((l, i) => (
          <div key={i} style={{ display: "flex", fontSize: taille, lineHeight: 1.42, color: theme === "nuit" ? C.surNuitFaible : C.surCreme, whiteSpace: "nowrap" }}>
            {l.map((w) => w.texte).join(" ")}
          </div>
        ))}
      </div>
      {adresse ? <div style={{ display: "flex", fontSize: 22, fontWeight: 600, color: texteSur(theme) }}>{adresse}</div> : null}
    </div>
  );
}

function PhotoImg({ img, largeur, hauteur }: { img: PhotoPrete | undefined; largeur: number; hauteur: number }) {
  if (!img) return null;
  const k = Math.min(largeur / img.largeur, hauteur / img.hauteur);
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={img.uri} width={Math.round(img.largeur * k)} height={Math.round(img.hauteur * k)} alt="" />;
}

/** Logo vérifié de la marque, sinon son nom en toutes lettres. */
function Logo({ nom, chemin, r, largeur, hauteur, taille }: { nom: string; chemin: string | null; r: Ressources; largeur: number; hauteur: number; taille: number }) {
  const img = chemin ? r.images[chemin] : undefined;
  return img ? <PhotoImg img={img} largeur={largeur} hauteur={hauteur} /> : <div style={{ display: "flex", fontSize: taille, fontWeight: 600, letterSpacing: "-0.03em", color: C.nuit, whiteSpace: "nowrap" }}>{nom}</div>;
}

/** Panneau crème pleine largeur : la photo du fabricant, son logo, son numéro. */
function PanneauPhoto({ modele, r, hauteur, marge, cote }: { modele: ModeleFaits; r: Ressources; hauteur: number; marge: number; cote: number }) {
  return (
    <div style={{ display: "flex", position: "relative", marginTop: marge, marginLeft: -cote, marginRight: -cote, height: hauteur, background: C.creme, alignItems: "center", justifyContent: "center" }}>
      <PhotoImg img={modele.photo ? r.images[modele.photo] : undefined} largeur={1080 - 2 * cote - 160} hauteur={hauteur - 160} />
      <div style={{ display: "flex", position: "absolute", left: cote, top: 34 }}>
        <Logo nom={modele.marque} chemin={modele.logo} r={r} largeur={240} hauteur={46} taille={30} />
      </div>
      <div style={{ display: "flex", position: "absolute", left: cote, bottom: 28, fontSize: 18, fontWeight: 600, letterSpacing: "0.14em", color: C.surCreme }}>{modele.numero.toUpperCase()}</div>
      <div style={{ display: "flex", position: "absolute", right: cote, bottom: 28, fontSize: 18, letterSpacing: "0.02em", color: C.surCreme }}>Photo du fabricant</div>
    </div>
  );
}

function Racine({ theme, genre, children }: { theme: Theme; genre: Genre; children: ReactNode }) {
  const story = genre === "story";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: theme === "nuit" ? C.nuit : C.creme,
        color: texteSur(theme),
        fontFamily: "Inter",
        // Story : haut et bas hors des zones couvertes par l'interface de Facebook.
        padding: story ? "170px 80px 180px" : "60px 72px 50px",
      }}
    >
      {children}
    </div>
  );
}

const Ressort = () => <div style={{ display: "flex", flexGrow: 1 }} />;
const Espace = ({ h }: { h: number }) => <div style={{ display: "flex", height: h, flexShrink: 0 }} />;

/** Une story n'a pas de lien cliquable : l'adresse est imprimée, courte. */
function AppelStory({ texte, chemin, theme, r, largeur }: { texte: string; chemin: string; theme: Theme; r: Ressources; largeur: number }) {
  const complete = adresseLisible(chemin);
  const adresse = complete.length <= 46 ? complete : adresseLisible("/");
  const taille = Math.min(32, Math.floor(largeur / Math.max(0.01, r.metriques.semi.largeur(adresse, 1))));
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
      <Etiquette>{texte}</Etiquette>
      <div style={{ display: "flex", marginTop: 10, fontSize: taille, fontWeight: 600, color: texteSur(theme), whiteSpace: "nowrap" }}>{adresse}</div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Formats
   ------------------------------------------------------------------ */

/** Sources du pied : seulement ce que le visuel affiche. */
function sourcesModele(m: ModeleFaits, dateListe: string | null, usage: "chauffage" | "climatisation"): string {
  const stats = statsModele(m, usage).map((x) => x.libelle);
  return [
    m.chauffeSource && (usage === "chauffage" || stats.includes("Chauffe jusqu’à")) ? `Température minimale : ${m.chauffeSource}.` : "",
    usage === "chauffage" ? `${m.capacite15 ? "Capacité à −15 °C" : ""}${m.capacite15 && m.hspf2 !== null ? " et " : ""}${m.hspf2 !== null ? "HSPF2" : ""} : ENERGY STAR.`.replace(/^ : ENERGY STAR\.$/, "") : "",
    usage === "climatisation" ? `SEER2${m.hspf2 !== null ? " et HSPF2" : ""} : ENERGY STAR.` : "",
    `LogisVert : liste d’Hydro-Québec${dateListe ? ` du ${dateListe}` : ""}, montant versé au client.`,
  ]
    .filter(Boolean)
    .join(" ");
}

/** Trois chiffres sous le titre, sans répéter celui du titre (froid l'hiver, SEER2 l'été). */
function statsModele(m: ModeleFaits, usage: "chauffage" | "climatisation"): Stat[] {
  const lv: Stat = { libelle: "LogisVert", valeur: fmtMontant(m.logisVert) };
  const hspf: Stat[] = m.hspf2 !== null ? [{ libelle: "HSPF2", valeur: fmtDec(m.hspf2) }] : [];
  if (usage === "climatisation" && m.seer2 !== null) {
    const froid: Stat[] = m.chauffeJusquaC !== null ? [{ libelle: "Chauffe jusqu’à", valeur: fmtTemp(m.chauffeJusquaC) }] : [];
    return [...froid, ...hspf, lv];
  }
  return [...(m.capacite15 ? [{ libelle: `Capacité max. à −15${NBSP}°C`, valeur: fmtBtu(m.capacite15.btu) }] : []), ...hspf, lv];
}

function ThermopompeSemaine({ f, genre, r }: { f: FaitsDe<"thermopompe-semaine">; genre: Genre; r: Ressources }) {
  const m = f.modele;
  const story = genre === "story";
  const cote = story ? 80 : 72;
  const L = 1080 - 2 * cote;
  const photo = !!(m.photo && r.images[m.photo]);
  const phrase =
    f.usage === "climatisation" && m.seer2 !== null
      ? [{ texte: "SEER2 de" }, { texte: fmtDec(m.seer2), marque: true }]
      : [{ texte: "Chauffe jusqu’à" }, { texte: fmtTemp(m.chauffeJusquaC ?? 0), marque: true }];
  return (
    <Racine theme="nuit" genre={genre}>
      <Entete theme="nuit" libelle="Thermopompe de la semaine" />
      {photo ? <PanneauPhoto modele={m} r={r} hauteur={story ? 640 : 500} marge={story ? 44 : 34} cote={cote} /> : <Ressort />}
      <Etiquette marge={story ? 56 : 42}>{`${m.typeLibelle} · ${fmtInt(m.calibreBtu)}${NBSP}BTU`}</Etiquette>
      <Titre segments={[{ texte: `${m.marque} ${m.nomCommercial}` }]} r={r} theme="nuit" largeur={L} min={58} max={photo ? (story ? 104 : 96) : 150} lignesMax={2} marge={story ? 26 : 22} interligne={0.98} />
      <Titre segments={phrase} r={r} theme="nuit" largeur={L} min={48} max={story ? 88 : photo ? 78 : 110} lignesMax={1} marge={story ? 26 : 20} interligne={1.1} />
      <Ressort />
      <Stats items={statsModele(m, f.usage)} theme="nuit" r={r} largeur={L} taille={story ? 54 : 46} />
      <Espace h={story ? 40 : 30} />
      <Pied theme="nuit" sources={sourcesModele(m, f.dateListe, f.usage)} adresse={story ? null : "thermopompesavendre.ca"} r={r} largeur={L} />
      {story ? <AppelStory texte="Voir la fiche sur" chemin={f.chemin} theme="nuit" r={r} largeur={L} /> : null}
    </Racine>
  );
}

function Duel({ f, genre, r }: { f: FaitsDe<"duel">; genre: Genre; r: Ressources }) {
  const cote = 72;
  const L = 1080 - 2 * cote;
  const { a, b } = f;
  const clim = f.usage === "climatisation";
  const lignes: Array<{ libelle: string; a: string; b: string }> = [
    ...(!clim ? [{ libelle: "Chauffe jusqu’à", a: fmtTemp(a.chauffeJusquaC ?? 0), b: fmtTemp(b.chauffeJusquaC ?? 0) }] : []),
    { libelle: `Capacité max. à −15${NBSP}°C`, a: fmtBtu(a.capacite15?.btu ?? 0), b: fmtBtu(b.capacite15?.btu ?? 0) },
    ...(a.hspf2 !== null && b.hspf2 !== null ? [{ libelle: "HSPF2 · chauffage", a: fmtDec(a.hspf2), b: fmtDec(b.hspf2) }] : []),
    ...(a.seer2 !== null && b.seer2 !== null ? [{ libelle: "SEER2 · climatisation", a: fmtDec(a.seer2), b: fmtDec(b.seer2) }] : []),
    { libelle: "Subvention LogisVert", a: fmtMontant(a.logisVert), b: fmtMontant(b.logisVert) },
  ];
  const tableau = [...lignes.slice(0, 3), lignes[lignes.length - 1]];
  const demi = (L - 2) / 2;
  const colonne = (mo: ModeleFaits) => (
    <div style={{ display: "flex", flexDirection: "column", width: demi, alignItems: "center" }}>
      <div style={{ display: "flex", height: 250, alignItems: "center", justifyContent: "center" }}>
        {mo.photo && r.images[mo.photo] ? <PhotoImg img={r.images[mo.photo]} largeur={demi - 60} hauteur={240} /> : <div style={{ display: "flex", fontSize: 20, letterSpacing: "0.1em", color: C.surCreme }}>PHOTO NON PUBLIÉE</div>}
      </div>
      <div style={{ display: "flex", height: 44, marginTop: 22, alignItems: "center" }}>
        <Logo nom={mo.marque} chemin={mo.logo} r={r} largeur={190} hauteur={40} taille={30} />
      </div>
      <div style={{ display: "flex", marginTop: 8, fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em", color: C.nuit, whiteSpace: "nowrap" }}>{mo.nomCommercial}</div>
    </div>
  );
  const typePluriel = a.typeLibelle.replace(/^Murale/, "Murales").replace(/^Centrale/, "Centrales").replace(/^Console/, "Consoles");
  const valeur = (v: string, droite: boolean) => (
    <div style={{ display: "flex", width: 290, justifyContent: droite ? "flex-end" : "flex-start", fontSize: Math.min(44, Math.floor(280 / Math.max(0.01, r.metriques.semi.largeur(v, 1, -0.035)))), fontWeight: 600, letterSpacing: "-0.035em", color: C.creme, whiteSpace: "nowrap" }}>
      {v}
    </div>
  );
  return (
    <Racine theme="nuit" genre={genre}>
      <Entete theme="nuit" libelle="Duel" />
      <Titre segments={[{ texte: "Duel à" }, { texte: `${fmtInt(a.calibreBtu)}${NBSP}BTU`, marque: true }]} r={r} theme="nuit" largeur={L} min={70} max={118} lignesMax={1} marge={46} interligne={1.08} />
      <Etiquette marge={20}>{`${typePluriel} · même calibre, même type`}</Etiquette>
      <div style={{ display: "flex", flexDirection: "row", marginTop: 34, marginLeft: -cote, marginRight: -cote, padding: `34px ${cote}px 30px`, background: C.creme }}>
        {colonne(a)}
        <div style={{ display: "flex", width: 2, background: C.filetCreme }} />
        {colonne(b)}
      </div>
      <Ressort />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {tableau.map((l, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "center", height: 90, borderTop: `2px solid ${C.filetNuit}` }}>
            {valeur(l.a, false)}
            <div style={{ display: "flex", flexGrow: 1, justifyContent: "center", fontSize: 17, fontWeight: 600, letterSpacing: "0.14em", color: C.surNuit, whiteSpace: "nowrap" }}>{l.libelle.toUpperCase()}</div>
            {valeur(l.b, true)}
          </div>
        ))}
      </div>
      <Espace h={24} />
      <Pied theme="nuit" sources={`Capacités : ENERGY STAR. Températures minimales : ${sourcesTemperatures(a, b)}. LogisVert : liste d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}, montants versés au client.`} adresse="thermopompesavendre.ca" r={r} largeur={L} />
    </Racine>
  );
}

/** Échelle horizontale du froid : graduations tous les 10 °C ; repères de la ville au-dessus, conception en dessous. */
function Echelle({ reperes, largeur, story }: { reperes: Array<{ t: number; libelle: string; accent?: boolean }>; largeur: number; story: boolean }) {
  const min = Math.min(-40, Math.floor(Math.min(...reperes.map((x) => x.t)) / 10) * 10);
  const x = (t: number) => (-t / -min) * largeur;
  const graduations: number[] = [];
  for (let t = 0; t >= min; t -= 10) graduations.push(t);
  const dessous = reperes.filter((p) => p.accent);
  const dessus = reperes.filter((p) => !p.accent).sort((p, q) => q.t - p.t);
  const H = story ? 300 : 250;
  const axe = story ? 150 : 124;
  const colonne = 260;
  const placer = (px: number) => (px < colonne / 2 ? { left: 0, align: "flex-start" as const } : px > largeur - colonne / 2 ? { left: largeur - colonne, align: "flex-end" as const } : { left: px - colonne / 2, align: "center" as const });
  return (
    <div style={{ display: "flex", position: "relative", width: largeur, height: H }}>
      <div style={{ display: "flex", position: "absolute", left: 0, top: axe, width: largeur, height: 2, background: C.filetNuit }} />
      {graduations.map((t) => {
        const px = x(t);
        const cache = dessous.some((p) => Math.abs(p.t - t) < 6);
        const pos = t === 0 ? { left: 0, align: "flex-start" as const } : t === min ? { left: largeur - 80, align: "flex-end" as const } : { left: px - 40, align: "center" as const };
        return (
          <div key={t} style={{ display: "flex" }}>
            <div style={{ display: "flex", position: "absolute", left: Math.min(largeur - 2, Math.max(0, px - 1)), top: axe - 7, width: 2, height: 16, background: C.filetNuit }} />
            {cache ? null : <div style={{ display: "flex", position: "absolute", left: pos.left, top: axe + 18, width: 80, justifyContent: pos.align, fontSize: 18, color: C.surNuitFaible }}>{`${fmtInt(t)}°`}</div>}
          </div>
        );
      })}
      {dessus.map((p, i) => {
        const px = x(p.t);
        const pos = placer(px);
        const haut = i % 2 === 0 ? 0 : 0;
        return (
          <div key={`d${i}`} style={{ display: "flex" }}>
            <div style={{ display: "flex", position: "absolute", left: px - 1, top: axe - 44, width: 2, height: 44, background: C.creme }} />
            <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: pos.left, top: haut, width: colonne, alignItems: pos.align }}>
              <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em", color: C.creme, whiteSpace: "nowrap" }}>{fmtTemp(p.t)}</div>
              <div style={{ display: "flex", marginTop: 2, fontSize: 16, fontWeight: 600, letterSpacing: "0.12em", color: C.surNuit, whiteSpace: "nowrap" }}>{p.libelle.toUpperCase()}</div>
            </div>
          </div>
        );
      })}
      {dessous.map((p, i) => {
        const px = x(p.t);
        const pos = placer(px);
        return (
          <div key={`s${i}`} style={{ display: "flex" }}>
            <div style={{ display: "flex", position: "absolute", left: px - 3, top: axe - 14, width: 6, height: 58, background: C.orange }} />
            <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: pos.left, top: axe + 54, width: colonne, alignItems: pos.align }}>
              <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: "-0.02em", color: C.orange, whiteSpace: "nowrap" }}>{fmtTemp(p.t)}</div>
              <div style={{ display: "flex", marginTop: 2, fontSize: 16, fontWeight: 600, letterSpacing: "0.12em", color: C.surNuit, whiteSpace: "nowrap" }}>{p.libelle.toUpperCase()}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function GrandFroid({ f, genre, r }: { f: FaitsDe<"grand-froid">; genre: Genre; r: Ressources }) {
  const story = genre === "story";
  const cote = story ? 80 : 72;
  const L = 1080 - 2 * cote;
  const v = f.ville;
  // Les deux repères du dessus ne se chevauchent pas : s'ils sont trop proches, seul le record reste.
  const dessus = [...(v.janvierMinC !== null ? [{ t: v.janvierMinC, libelle: "Nuits de janvier" }] : []), ...(v.extremeMinC !== null ? [{ t: v.extremeMinC, libelle: v.extremeAnnee ? `Record (${v.extremeAnnee})` : "Record" }] : [])];
  const min = Math.min(-40, Math.floor(Math.min(v.conceptionC, ...dessus.map((d) => d.t)) / 10) * 10);
  const ecart = dessus.length === 2 ? (Math.abs(dessus[1].t - dessus[0].t) / -min) * L : Infinity;
  const reperes = [{ t: v.conceptionC, libelle: "Température de conception", accent: true }, ...(ecart < 280 ? dessus.slice(1) : dessus)];
  const temperature = fmtTemp(v.conceptionC);
  const tailleTemp = Math.min(story ? 260 : 250, Math.floor(L / Math.max(0.01, r.metriques.serif.largeur(temperature, 1))));
  const sources = [v.station ? typo(`Normales ${v.periode ?? ""} d’Environnement et Changement climatique Canada, station ${v.station}.`).replace("  ", " ") : "", "Température de conception : table régionale du site.", "Températures minimales de chauffage : documentation des fabricants."].filter(Boolean).join(" ");
  return (
    <Racine theme="nuit" genre={genre}>
      <Entete theme="nuit" libelle="Grand froid" />
      <Etiquette marge={story ? 80 : 54}>{v.region}</Etiquette>
      <Titre segments={[{ texte: v.nom }]} r={r} theme="nuit" largeur={L} min={70} max={story ? 150 : 128} lignesMax={2} marge={20} interligne={0.98} />
      {/* L'italique d'Instrument Serif déborde de sa boîte (ascendante + descendante = 1,3 em) : hauteur explicite. */}
      <div style={{ display: "flex", height: Math.round(tailleTemp * (story ? 1.3 : 1.12)), marginTop: story ? 40 : 26, alignItems: "center", fontFamily: "Instrument", fontStyle: "italic", fontSize: tailleTemp, lineHeight: 1.08, letterSpacing: "-0.01em", color: C.creme, whiteSpace: "nowrap" }}>{temperature}</div>
      <Paragraphe texte={`À ${v.nom}, on dimensionne le chauffage pour ce froid : c’est la température de conception de la zone.`} r={r} theme="nuit" largeur={L} min={22} max={story ? 34 : 28} lignesMax={2} marge={story ? 34 : 16} />
      <Espace h={story ? 60 : 30} />
      <Echelle reperes={reperes} largeur={L} story={story} />
      <Ressort />
      <Titre segments={[{ texte: fmtInt(f.tiennent), marque: true }, { texte: `machines distinctes chauffent jusqu’à ${temperature} ou plus bas` }]} r={r} theme="nuit" largeur={L} min={40} max={story ? 76 : 60} lignesMax={3} interligne={1.12} />
      <Paragraphe texte={`Sur ${fmtInt(f.connues)} dont la température minimale de chauffage est publiée.`} r={r} theme="nuit" largeur={L} min={20} max={story ? 32 : 26} lignesMax={2} marge={12} />
      <Espace h={story ? 40 : 28} />
      <Pied theme="nuit" sources={sources} adresse={story ? null : "thermopompesavendre.ca"} r={r} largeur={L} />
      {story ? <AppelStory texte={`Le climat de ${v.nom}, sur`} chemin={f.chemin} theme="nuit" r={r} largeur={L} /> : null}
    </Racine>
  );
}

function Chiffre({ f, genre, r }: { f: FaitsDe<"chiffre">; genre: Genre; r: Ressources }) {
  const story = genre === "story";
  const cote = story ? 80 : 72;
  const L = 1080 - 2 * cote;
  const c = f.chiffre;
  return (
    <Racine theme="nuit" genre={genre}>
      <Entete theme="nuit" libelle="Le chiffre" />
      <Ressort />
      <Titre segments={[{ texte: fmtInt(c.valeur), marque: true }]} r={r} theme="nuit" largeur={L} min={140} max={story ? 400 : 360} lignesMax={1} interligne={1.02} />
      <Titre segments={[{ texte: c.libelle }]} r={r} theme="nuit" largeur={L} min={48} max={story ? 96 : 80} lignesMax={3} marge={story ? 50 : 36} interligne={1.02} />
      <div style={{ display: "flex", width: 90, height: 2, background: C.orange, marginTop: story ? 56 : 40 }} />
      <Paragraphe texte={c.definition} r={r} theme="nuit" largeur={L} min={24} max={story ? 38 : 32} lignesMax={story ? 9 : 7} marge={story ? 36 : 28} />
      <Ressort />
      <Pied theme="nuit" sources={`Source : ${c.source}. Données du ${c.date}.`} adresse={story ? null : "thermopompesavendre.ca"} r={r} largeur={L} />
      {story ? <AppelStory texte="Comment chaque chiffre est compté" chemin="/methode" theme="nuit" r={r} largeur={L} /> : null}
    </Racine>
  );
}

function Subventions({ f, genre, r }: { f: FaitsDe<"subventions">; genre: Genre; r: Ressources }) {
  const story = genre === "story";
  const cote = story ? 80 : 72;
  const L = 1080 - 2 * cote;
  return (
    <Racine theme="nuit" genre={genre}>
      <Entete theme="nuit" libelle="Subventions" />
      <div style={{ display: "flex", marginTop: story ? 44 : 34, marginLeft: -cote, marginRight: -cote, height: story ? 320 : 260, background: C.creme, alignItems: "center", justifyContent: "center" }}>
        <Logo nom={f.marque.nom} chemin={f.marque.logo} r={r} largeur={560} hauteur={story ? 130 : 110} taille={92} />
      </div>
      <Etiquette marge={story ? 70 : 50}>{`Subvention LogisVert · ${f.marque.nom}`}</Etiquette>
      <Titre segments={[{ texte: `De ${fmtMontant(f.min)} à` }, { texte: fmtMontant(f.max), marque: true }]} r={r} theme="nuit" largeur={L} min={80} max={story ? 160 : 146} lignesMax={2} marge={20} interligne={1.06} />
      <Paragraphe texte="selon l’appariement exact entre l’unité extérieure et l’unité intérieure (référence AHRI). Montant versé au client par Hydro-Québec." r={r} theme="nuit" largeur={L} min={24} max={story ? 38 : 32} lignesMax={3} marge={story ? 30 : 22} />
      <Ressort />
      <Stats items={[{ libelle: `Thermopompes ${f.marque.nom} admissibles`, valeur: fmtInt(f.admissibles) }, ...(f.dateListe ? [{ libelle: "Liste d’Hydro-Québec", valeur: f.dateListe }] : [])]} theme="nuit" r={r} largeur={L} taille={story ? 56 : 48} />
      <Espace h={story ? 40 : 30} />
      <Pied theme="nuit" sources={`Liste officielle LogisVert d’Hydro-Québec${f.dateListe ? ` du ${f.dateListe}` : ""}. Une thermopompe vendue en plusieurs appariements compte une fois.`} adresse={story ? null : "thermopompesavendre.ca"} r={r} largeur={L} />
      {story ? <AppelStory texte={`Les montants ${f.marque.nom}, sur`} chemin={f.chemin} theme="nuit" r={r} largeur={L} /> : null}
    </Racine>
  );
}

const QUESTIONS_THERMOMATCH = ["Superficie", "Année de construction", "Isolation", "Système actuel", "Conduits d’air"];

function Thermomatch({ f, genre, r }: { f: FaitsDe<"thermomatch">; genre: Genre; r: Ressources }) {
  const story = genre === "story";
  const cote = story ? 80 : 72;
  const L = 1080 - 2 * cote;
  return (
    <Racine theme="creme" genre={genre}>
      <Entete theme="creme" libelle="ThermoMatch" />
      <Titre
        segments={f.usage === "climatisation" ? [{ texte: "La bonne thermopompe pour" }, { texte: "votre maison", marque: true }] : [{ texte: "Quelle thermopompe pour" }, { texte: "votre maison?", marque: true }]}
        r={r}
        theme="creme"
        largeur={L}
        min={70}
        max={story ? 130 : 116}
        lignesMax={3}
        marge={story ? 90 : 64}
        interligne={1.02}
      />
      <Paragraphe texte={`${f.questions.charAt(0).toUpperCase()}${f.questions.slice(1)} sur votre maison, puis trois machines adaptées, avec leur subvention LogisVert.`} r={r} theme="creme" largeur={L} min={26} max={story ? 38 : 33} lignesMax={3} marge={story ? 40 : 30} couleur={C.nuit} />
      <div style={{ display: "flex", flexDirection: "column", marginTop: story ? 70 : 44 }}>
        {QUESTIONS_THERMOMATCH.map((q, i) => (
          <div key={q} style={{ display: "flex", flexDirection: "row", alignItems: "center", height: story ? 96 : 74, borderTop: `2px solid ${C.filetCreme}` }}>
            <div style={{ display: "flex", width: 84, fontSize: 21, fontWeight: 600, letterSpacing: "0.12em", color: C.orange }}>{`0${i + 1}`}</div>
            <div style={{ display: "flex", fontSize: story ? 44 : 38, fontWeight: 600, letterSpacing: "-0.03em", color: C.nuit }}>{q}</div>
          </div>
        ))}
      </div>
      <Ressort />
      <Stats items={[{ libelle: "Fiches au catalogue", valeur: fmtInt(f.fiches) }, { libelle: "Marques vendues au Québec", valeur: fmtInt(f.marques) }]} theme="creme" r={r} largeur={L} taille={story ? 60 : 50} />
      <Espace h={story ? 40 : 30} />
      <Pied theme="creme" sources="Catalogue bâti sur la liste LogisVert d’Hydro-Québec et les données ENERGY STAR." adresse={story ? null : "thermopompesavendre.ca"} r={r} largeur={L} />
      {story ? <AppelStory texte="Faire le questionnaire sur" chemin={f.chemin} theme="creme" r={r} largeur={L} /> : null}
    </Racine>
  );
}

export function Affiche({ faits, genre, ressources }: { faits: Faits; genre: Genre; ressources: Ressources }) {
  switch (faits.format) {
    case "thermopompe-semaine":
      return <ThermopompeSemaine f={faits} genre={genre} r={ressources} />;
    case "duel":
      return <Duel f={faits} genre={genre} r={ressources} />;
    case "grand-froid":
      return <GrandFroid f={faits} genre={genre} r={ressources} />;
    case "chiffre":
      return <Chiffre f={faits} genre={genre} r={ressources} />;
    case "subventions":
      return <Subventions f={faits} genre={genre} r={ressources} />;
    case "thermomatch":
      return <Thermomatch f={faits} genre={genre} r={ressources} />;
  }
}

/** Chemins publics des images dont un visuel a besoin (photos réelles et logos vérifiés). */
export function imagesDe(f: Faits): { photos: string[]; logos: string[] } {
  switch (f.format) {
    case "thermopompe-semaine":
      return { photos: f.modele.photo ? [f.modele.photo] : [], logos: f.modele.logo ? [f.modele.logo] : [] };
    case "duel":
      return { photos: [f.a.photo, f.b.photo].filter((x): x is string => !!x), logos: [f.a.logo, f.b.logo].filter((x): x is string => !!x) };
    case "subventions":
      return { photos: [], logos: f.marque.logo ? [f.marque.logo] : [] };
    default:
      return { photos: [], logos: [] };
  }
}
