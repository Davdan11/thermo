/* ==================================================================
   Rendu des maquettes (Satori, via ImageResponse de next/og).
   Publication 1080 × 1350, story 1080 × 1920.

   Direction artistique du site, celle du héros validé de l'accueil :
   bleu nuit #0C1821, orange #e54b17, crème #f8f5f0 ; grand titre serré
   (Inter 600, −0,045 em) ; un mot en Instrument Serif italique posé
   sur un coup de marqueur orange incliné (skewX −8°) ; petites
   étiquettes espacées en capitales ; filets fins ; vraie photo du
   fabricant (sur un panneau crème en thème nuit, posée à même le fond
   en thème crème). Rien de « généré » : pas de pastilles, de halos,
   de dégradés, de verre, de cercles d'icônes ni d'émojis.

   Dispositions : vedette, cote (photo à droite), nombre (grand chiffre
   au marqueur), tableau (lignes chiffrées), duel, duel-bandes, echelle
   (échelle du froid), logo. Chacune en thème nuit ou crème.

   Pièges de Satori : display:flex sur tout nœud à plusieurs enfants ;
   les titres sont coupés en lignes par le code (mesure.ts) pour
   qu'aucun texte ne déborde.
   ================================================================== */

import type { ReactNode } from "react";
import { fmtInt, fmtTemp } from "@/lib/presence/format";
import { adresseLisible } from "../utm";
import type { Genre, ModeleFaits } from "../types";
import { ajuster, mesureur, mots, type Metriques, type Mot } from "./mesure";
import type { Maquette, Repere, Segment, Stat, Theme } from "./maquettes";

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

/** Apostrophe typographique ; « à −30 °C » ne se coupe pas. */
const typo = (s: string) => s.replace(/'/g, "’").replace(/ à (?=[−-]?\d)/g, " à ");

const TITRE_ESPACEMENT = -0.045;
/** Marge du coup de marqueur de chaque côté du mot, en em (comme l'accueil). */
const MARQUEUR_MARGE = 0.14;
/** Décalage vertical de l'Instrument Serif pour partager la ligne de base d'Inter (métriques hhea des deux polices). */
const DECALAGE_SERIF = 0.024;

interface Cadre {
  r: Ressources;
  theme: Theme;
  story: boolean;
  /** Marge latérale. */
  cote: number;
  /** Largeur utile. */
  L: number;
}

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

/** Étiquette en capitales espacées, sur une ou deux lignes. */
function Etiquette({ texte, c, marge = 0, couleur = C.orange }: { texte: string; c: Cadre; marge?: number; couleur?: string }) {
  const { taille, lignes } = ajuster(mots([{ texte: typo(texte).toUpperCase() }]), mesureur(c.r.metriques.semi, 0.2), { min: 17, max: 22, largeur: c.L, lignesMax: 2 });
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: marge }}>
      {lignes.map((l, i) => (
        <div key={i} style={{ display: "flex", fontSize: taille, lineHeight: 1.35, fontWeight: 600, letterSpacing: "0.2em", color: couleur, whiteSpace: "nowrap" }}>
          {l.map((w) => w.texte).join(" ")}
        </div>
      ))}
    </div>
  );
}

interface TitreProps {
  segments: Segment[];
  c: Cadre;
  largeur?: number;
  min: number;
  max: number;
  lignesMax: number;
  interligne?: number;
  marge?: number;
  couleur?: string;
}

/** Titre coupé en lignes par le code ; les mots marqués passent en Instrument Serif italique sur le coup de marqueur. */
function Titre({ segments, c, largeur, min, max, lignesMax, interligne = 1.0, marge = 0, couleur }: TitreProps) {
  const r = c.r;
  const me = mesureur(r.metriques.semi, TITRE_ESPACEMENT, { m: r.metriques.serif, margeEm: MARQUEUR_MARGE });
  const { taille, lignes } = ajuster(mots(segments.map((s) => ({ ...s, texte: typo(s.texte) }))), me, { min, max, largeur: largeur ?? c.L, lignesMax });
  const groupes = (ligne: Mot[]) => {
    const out: Array<{ texte: string; marque: boolean }> = [];
    for (const w of ligne) {
      const last = out[out.length - 1];
      if (last && last.marque === !!w.marque) last.texte += ` ${w.texte}`;
      else out.push({ texte: w.texte, marque: !!w.marque });
    }
    return out;
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: marge }}>
      {lignes.map((ligne, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "flex-end", height: Math.round(taille * interligne), gap: me.espace(taille) }}>
          {groupes(ligne).map((g, j) =>
            g.marque ? (
              <div key={j} style={{ display: "flex", position: "relative", height: taille, paddingLeft: taille * MARQUEUR_MARGE, paddingRight: taille * MARQUEUR_MARGE }}>
                <div style={{ display: "flex", position: "absolute", left: 0, right: 0, top: taille * 0.2, bottom: taille * 0.02, background: C.orange, transform: "skewX(-8deg)" }} />
                <div style={{ display: "flex", position: "relative", top: taille * DECALAGE_SERIF, fontFamily: "Instrument", fontStyle: "italic", fontWeight: 400, fontSize: taille, lineHeight: 1, color: c.theme === "nuit" ? C.creme : C.nuit, whiteSpace: "nowrap" }}>{g.texte}</div>
              </div>
            ) : (
              <div key={j} style={{ display: "flex", height: taille, fontWeight: 600, fontSize: taille, lineHeight: 1, letterSpacing: `${TITRE_ESPACEMENT}em`, color: couleur ?? texteSur(c.theme), whiteSpace: "nowrap" }}>
                {g.texte}
              </div>
            ),
          )}
        </div>
      ))}
    </div>
  );
}

function Paragraphe({ texte, c, largeur, min, max, lignesMax, marge = 0, couleur }: { texte: string; c: Cadre; largeur?: number; min: number; max: number; lignesMax: number; marge?: number; couleur?: string }) {
  const { taille, lignes } = ajuster(mots([{ texte: typo(texte) }]), mesureur(c.r.metriques.regulier), { min, max, largeur: largeur ?? c.L, lignesMax });
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: marge }}>
      {lignes.map((l, i) => (
        <div key={i} style={{ display: "flex", fontSize: taille, lineHeight: 1.38, fontWeight: 400, color: couleur ?? discretSur(c.theme), whiteSpace: "nowrap" }}>
          {l.map((w) => w.texte).join(" ")}
        </div>
      ))}
    </div>
  );
}

/** Grand chiffre en Instrument Serif italique, à la taille qui tient dans la largeur. */
function Grand({ texte, c, max, largeur, marge = 0, couleur }: { texte: string; c: Cadre; max: number; largeur?: number; marge?: number; couleur?: string }) {
  const t = Math.min(max, Math.floor((largeur ?? c.L) / Math.max(0.01, c.r.metriques.serif.largeur(texte, 1))));
  // L'italique d'Instrument Serif déborde de sa boîte (ascendante + descendante = 1,3 em) : hauteur explicite.
  return <div style={{ display: "flex", height: Math.round(t * 1.18), marginTop: marge, alignItems: "center", fontFamily: "Instrument", fontStyle: "italic", fontSize: t, lineHeight: 1.18, letterSpacing: "-0.01em", color: couleur ?? texteSur(c.theme), whiteSpace: "nowrap" }}>{texte}</div>;
}

function Stats({ items, c, taille = 50, marge = 0 }: { items: Stat[]; c: Cadre; taille?: number; marge?: number }) {
  const col = c.L / items.length;
  return (
    <div style={{ display: "flex", flexDirection: "row", marginTop: marge, borderTop: `2px solid ${filetSur(c.theme)}` }}>
      {items.map((s, i) => {
        const dispo = col - (i === 0 ? 24 : 52);
        const t = Math.min(taille, Math.floor(dispo / Math.max(0.01, c.r.metriques.semi.largeur(s.valeur, 1, -0.035))));
        const lib = ajuster(mots([{ texte: typo(s.libelle).toUpperCase() }]), mesureur(c.r.metriques.semi, 0.14), { min: 15, max: 18, largeur: dispo, lignesMax: 2 });
        return (
          <div key={i} style={{ display: "flex", flexDirection: "column", width: col, paddingTop: 24, paddingLeft: i === 0 ? 0 : 28, borderLeft: i === 0 ? "none" : `2px solid ${filetSur(c.theme)}` }}>
            {lib.lignes.map((l, k) => (
              <div key={k} style={{ display: "flex", fontSize: lib.taille, lineHeight: 1.3, fontWeight: 600, letterSpacing: "0.14em", color: discretSur(c.theme), whiteSpace: "nowrap" }}>
                {l.map((w) => w.texte).join(" ")}
              </div>
            ))}
            <div style={{ display: "flex", marginTop: 12, fontSize: t, lineHeight: 1, fontWeight: 600, letterSpacing: "-0.035em", color: texteSur(c.theme), whiteSpace: "nowrap" }}>{s.valeur}</div>
          </div>
        );
      })}
    </div>
  );
}

/** Lignes chiffrées : libellé en capitales à gauche, valeur à droite. */
function Lignes({ lignes, c, hauteur, largeur }: { lignes: Array<{ libelle: string; valeur: string }>; c: Cadre; hauteur: number; largeur?: number }) {
  const L = largeur ?? c.L;
  return (
    <div style={{ display: "flex", flexDirection: "column", width: L }}>
      {lignes.map((l, i) => {
        const tv = Math.min(46, Math.floor((L * 0.42) / Math.max(0.01, c.r.metriques.semi.largeur(l.valeur, 1, -0.03))));
        const lib = ajuster(mots([{ texte: typo(l.libelle).toUpperCase() }]), mesureur(c.r.metriques.semi, 0.12), { min: 15, max: 19, largeur: L * 0.54, lignesMax: 2 });
        return (
          <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: hauteur, borderTop: `2px solid ${filetSur(c.theme)}` }}>
            <div style={{ display: "flex", flexDirection: "column", width: L * 0.56 }}>
              {lib.lignes.map((ln, k) => (
                <div key={k} style={{ display: "flex", fontSize: lib.taille, lineHeight: 1.3, fontWeight: 600, letterSpacing: "0.12em", color: discretSur(c.theme), whiteSpace: "nowrap" }}>
                  {ln.map((w) => w.texte).join(" ")}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", fontSize: tv, fontWeight: 600, letterSpacing: "-0.03em", color: texteSur(c.theme), whiteSpace: "nowrap" }}>{l.valeur}</div>
          </div>
        );
      })}
    </div>
  );
}

function Pied({ c, sources, adresse }: { c: Cadre; sources: string; adresse: string | null }) {
  const largeurSources = adresse ? c.L - 320 : c.L;
  const { taille, lignes } = ajuster(mots([{ texte: typo(sources) }]), mesureur(c.r.metriques.regulier), { min: 15, max: 19, largeur: largeurSources, lignesMax: 3 });
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", paddingTop: 20, borderTop: `2px solid ${filetSur(c.theme)}` }}>
      <div style={{ display: "flex", flexDirection: "column", width: largeurSources }}>
        {lignes.map((l, i) => (
          <div key={i} style={{ display: "flex", fontSize: taille, lineHeight: 1.42, color: c.theme === "nuit" ? C.surNuitFaible : C.surCreme, whiteSpace: "nowrap" }}>
            {l.map((w) => w.texte).join(" ")}
          </div>
        ))}
      </div>
      {adresse ? <div style={{ display: "flex", fontSize: 22, fontWeight: 600, color: texteSur(c.theme) }}>{adresse}</div> : null}
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
function Logo({ nom, chemin, r, largeur, hauteur, taille, couleur = C.nuit }: { nom: string; chemin: string | null; r: Ressources; largeur: number; hauteur: number; taille: number; couleur?: string }) {
  const img = chemin ? r.images[chemin] : undefined;
  return img ? <PhotoImg img={img} largeur={largeur} hauteur={hauteur} /> : <div style={{ display: "flex", fontSize: taille, fontWeight: 600, letterSpacing: "-0.03em", color: couleur, whiteSpace: "nowrap" }}>{nom}</div>;
}

/** Zone photo pleine largeur : panneau crème (thème nuit) ou photo posée sur le fond (thème crème). Logo, numéro, mention. */
function ZonePhoto({ modele, c, hauteur, marge }: { modele: ModeleFaits; c: Cadre; hauteur: number; marge: number }) {
  return (
    <div style={{ display: "flex", position: "relative", marginTop: marge, marginLeft: -c.cote, marginRight: -c.cote, height: hauteur, background: C.creme, alignItems: "center", justifyContent: "center", borderBottom: c.theme === "creme" ? `2px solid ${C.filetCreme}` : "none" }}>
      <PhotoImg img={modele.photo ? c.r.images[modele.photo] : undefined} largeur={1080 - 2 * c.cote - 160} hauteur={hauteur - 160} />
      <div style={{ display: "flex", position: "absolute", left: c.cote, top: 34 }}>
        <Logo nom={modele.marque} chemin={modele.logo} r={c.r} largeur={240} hauteur={46} taille={30} />
      </div>
      <div style={{ display: "flex", position: "absolute", left: c.cote, bottom: 28, fontSize: 18, fontWeight: 600, letterSpacing: "0.14em", color: C.surCreme }}>{modele.numero.toUpperCase()}</div>
      <div style={{ display: "flex", position: "absolute", right: c.cote, bottom: 28, fontSize: 18, letterSpacing: "0.02em", color: C.surCreme }}>Photo du fabricant</div>
    </div>
  );
}

function Racine({ theme, story, children }: { theme: Theme; story: boolean; children: ReactNode }) {
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

/** Colonne pleine hauteur : Satori n'aplatit pas un fragment renvoyé par un composant. */
const Colonne = ({ children }: { children: ReactNode }) => <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, width: "100%" }}>{children}</div>;
const Ressort = () => <div style={{ display: "flex", flexGrow: 1 }} />;
const Espace = ({ h }: { h: number }) => <div style={{ display: "flex", height: h, flexShrink: 0 }} />;

/** Pied commun : sources, adresse (publication) ou appel imprimé (story, sans lien cliquable). */
function Fin({ m, c }: { m: Maquette; c: Cadre }) {
  const complete = adresseLisible(m.appel.chemin);
  const adresse = complete.length <= 46 ? complete : adresseLisible("/");
  const taille = Math.min(32, Math.floor(c.L / Math.max(0.01, c.r.metriques.semi.largeur(adresse, 1))));
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Pied c={c} sources={m.sources} adresse={c.story ? null : "thermopompesavendre.ca"} />
      {c.story ? (
        <div style={{ display: "flex", flexDirection: "column", marginTop: 30 }}>
          <Etiquette texte={m.appel.texte} c={c} />
          <div style={{ display: "flex", marginTop: 10, fontSize: taille, fontWeight: 600, color: texteSur(c.theme), whiteSpace: "nowrap" }}>{adresse}</div>
        </div>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------
   Dispositions
   ------------------------------------------------------------------ */

function Vedette({ m, c }: { m: Maquette; c: Cadre }) {
  const photo = !!(m.modele?.photo && c.r.images[m.modele.photo]);
  const { story } = c;
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      {photo && m.modele ? <ZonePhoto modele={m.modele} c={c} hauteur={story ? 640 : 500} marge={story ? 44 : 34} /> : <Ressort />}
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={story ? 56 : 40} /> : null}
      <Titre segments={m.titre} c={c} min={54} max={photo ? (story ? 104 : 92) : 140} lignesMax={photo ? 2 : 3} marge={story ? 24 : 18} interligne={0.98} />
      {m.phrase ? <Titre segments={m.phrase} c={c} min={44} max={story ? 88 : photo ? 76 : 104} lignesMax={1} marge={story ? 26 : 18} interligne={1.1} /> : null}
      {m.paragraphe ? <Paragraphe texte={m.paragraphe} c={c} min={20} max={26} lignesMax={2} marge={10} /> : null}
      <Ressort />
      {m.stats?.length ? <Stats items={m.stats} c={c} taille={story ? 54 : 46} /> : null}
      <Espace h={story ? 40 : 30} />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

/** Photo à droite sur un panneau crème qui touche le bord ; à gauche, le grand chiffre et les chiffres en colonne. */
function Cote({ m, c }: { m: Maquette; c: Cadre }) {
  const { story } = c;
  const H = story ? 1120 : 830;
  const gauche = 430;
  const droite = 1080 - c.cote - gauche - 40;
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={story ? 70 : 48} /> : null}
      <Titre segments={m.titre} c={c} min={54} max={story ? 118 : 104} lignesMax={2} marge={18} interligne={0.98} />
      <div style={{ display: "flex", flexDirection: "row", marginTop: story ? 50 : 34, height: H, marginRight: -c.cote }}>
        <div style={{ display: "flex", flexDirection: "column", width: gauche, paddingRight: 30 }}>
          {m.grandLibelle ? <Etiquette texte={m.grandLibelle} c={{ ...c, L: gauche - 30 }} couleur={discretSur(c.theme)} /> : null}
          {m.grand ? <Grand texte={m.grand} c={c} largeur={gauche - 30} max={story ? 170 : 140} couleur={C.creme} /> : null}
          <div style={{ display: "flex", width: 70, height: 4, background: C.orange, marginTop: 10, marginBottom: 20 }} />
          {(m.stats ?? []).map((s, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", paddingTop: 14, paddingBottom: 14, borderTop: `2px solid ${filetSur(c.theme)}` }}>
              <div style={{ display: "flex", fontSize: 16, fontWeight: 600, letterSpacing: "0.14em", color: discretSur(c.theme) }}>{typo(s.libelle).toUpperCase()}</div>
              <div style={{ display: "flex", marginTop: 6, fontSize: Math.min(40, Math.floor((gauche - 40) / Math.max(0.01, c.r.metriques.semi.largeur(s.valeur, 1, -0.03)))), fontWeight: 600, letterSpacing: "-0.03em", color: texteSur(c.theme), whiteSpace: "nowrap" }}>{s.valeur}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", position: "relative", width: droite + c.cote, background: C.creme, alignItems: "center", justifyContent: "center" }}>
          {m.modele ? <PhotoImg img={m.modele.photo ? c.r.images[m.modele.photo] : undefined} largeur={droite - 40} hauteur={H - 220} /> : null}
          {m.modele ? (
            <div style={{ display: "flex", position: "absolute", left: 34, top: 34 }}>
              <Logo nom={m.modele.marque} chemin={m.modele.logo} r={c.r} largeur={200} hauteur={42} taille={28} />
            </div>
          ) : null}
          {m.modele ? <div style={{ display: "flex", position: "absolute", left: 34, bottom: 30, fontSize: 17, fontWeight: 600, letterSpacing: "0.14em", color: C.surCreme }}>{m.modele.numero.toUpperCase()}</div> : null}
          <div style={{ display: "flex", position: "absolute", right: c.cote, bottom: 30, fontSize: 17, color: C.surCreme }}>Photo du fabricant</div>
        </div>
      </div>
      <Espace h={story ? 40 : 30} />
      <Ressort />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

function Nombre({ m, c }: { m: Maquette; c: Cadre }) {
  const { story } = c;
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      <Ressort />
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={0} /> : null}
      {m.grand ? <Titre segments={[{ texte: m.grand, marque: true }]} c={c} largeur={c.L - 30} min={110} max={story ? 330 : 280} lignesMax={1} interligne={1.02} /> : null}
      <Titre segments={m.titre} c={c} min={44} max={story ? 92 : 76} lignesMax={4} marge={story ? 50 : 34} interligne={1.03} />
      <div style={{ display: "flex", width: 90, height: 2, background: C.orange, marginTop: story ? 56 : 38 }} />
      {m.paragraphe ? <Paragraphe texte={m.paragraphe} c={c} min={22} max={story ? 36 : 30} lignesMax={story ? 8 : 6} marge={story ? 36 : 26} couleur={c.theme === "creme" ? C.nuit : undefined} /> : null}
      <Ressort />
      {m.stats?.length ? <Stats items={m.stats} c={c} taille={story ? 54 : 46} /> : null}
      {m.stats?.length ? <Espace h={30} /> : null}
      <Fin m={m} c={c} />
    </Colonne>
  );
}

function Tableau({ m, c }: { m: Maquette; c: Cadre }) {
  const { story } = c;
  const n = m.lignes?.length ?? 0;
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={story ? 90 : 56} /> : null}
      <Titre segments={m.titre} c={c} min={60} max={story ? 132 : 112} lignesMax={2} marge={18} interligne={1.02} />
      {m.grand ? <Grand texte={m.grand} c={c} max={story ? 220 : 170} marge={story ? 24 : 6} /> : null}
      {m.paragraphe ? <Paragraphe texte={m.paragraphe} c={c} min={22} max={story ? 34 : 28} lignesMax={3} marge={m.grand ? 0 : 20} couleur={c.theme === "creme" ? C.nuit : undefined} /> : null}
      <Ressort />
      {n ? <Lignes lignes={m.lignes ?? []} c={c} hauteur={story ? 118 : n > 4 ? 84 : 96} /> : null}
      <Espace h={story ? 40 : 28} />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

function Duel({ m, c }: { m: Maquette; c: Cadre }) {
  const [a, b] = m.duel ?? [];
  if (!a || !b) return null;
  const demi = (c.L - 2) / 2;
  const colonne = (mo: ModeleFaits) => (
    <div style={{ display: "flex", flexDirection: "column", width: demi, alignItems: "center" }}>
      <div style={{ display: "flex", height: 250, alignItems: "center", justifyContent: "center" }}>
        {mo.photo && c.r.images[mo.photo] ? <PhotoImg img={c.r.images[mo.photo]} largeur={demi - 60} hauteur={240} /> : <div style={{ display: "flex", fontSize: 20, letterSpacing: "0.1em", color: C.surCreme }}>PHOTO NON PUBLIÉE</div>}
      </div>
      <div style={{ display: "flex", height: 44, marginTop: 22, alignItems: "center" }}>
        <Logo nom={mo.marque} chemin={mo.logo} r={c.r} largeur={190} hauteur={40} taille={30} />
      </div>
      <div style={{ display: "flex", marginTop: 8, fontSize: 24, fontWeight: 600, letterSpacing: "-0.01em", color: C.nuit, whiteSpace: "nowrap" }}>{mo.nomCommercial}</div>
    </div>
  );
  const valeur = (v: string, droite: boolean) => (
    <div style={{ display: "flex", width: 290, justifyContent: droite ? "flex-end" : "flex-start", fontSize: Math.min(44, Math.floor(280 / Math.max(0.01, c.r.metriques.semi.largeur(v, 1, -0.035)))), fontWeight: 600, letterSpacing: "-0.035em", color: C.creme, whiteSpace: "nowrap" }}>
      {v}
    </div>
  );
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      <Titre segments={m.titre} c={c} min={70} max={118} lignesMax={1} marge={46} interligne={1.08} />
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={20} /> : null}
      <div style={{ display: "flex", flexDirection: "row", marginTop: 34, marginLeft: -c.cote, marginRight: -c.cote, padding: `34px ${c.cote}px 30px`, background: C.creme }}>
        {colonne(a)}
        <div style={{ display: "flex", width: 2, background: C.filetCreme }} />
        {colonne(b)}
      </div>
      <Ressort />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {(m.lignesDuel ?? []).map((l, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "row", alignItems: "center", height: 88, borderTop: `2px solid ${C.filetNuit}` }}>
            {valeur(l.a, false)}
            <div style={{ display: "flex", flexGrow: 1, justifyContent: "center", fontSize: 17, fontWeight: 600, letterSpacing: "0.14em", color: C.surNuit, whiteSpace: "nowrap" }}>{typo(l.libelle).toUpperCase()}</div>
            {valeur(l.b, true)}
          </div>
        ))}
      </div>
      <Espace h={24} />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

/** Deux bandes horizontales sur fond crème : photo à gauche, marque, nom et chiffres à droite. */
function DuelBandes({ m, c }: { m: Maquette; c: Cadre }) {
  const [a, b] = m.duel ?? [];
  if (!a || !b) return null;
  const lignes = m.lignesDuel ?? [];
  const photoL = 360;
  const texteL = c.L - photoL - 30;
  const bande = (mo: ModeleFaits, cote: "a" | "b") => (
    <div style={{ display: "flex", flexDirection: "row", height: 380, borderTop: `2px solid ${C.filetCreme}`, alignItems: "center" }}>
      <div style={{ display: "flex", width: photoL, height: 360, alignItems: "center", justifyContent: "center" }}>
        {mo.photo && c.r.images[mo.photo] ? <PhotoImg img={c.r.images[mo.photo]} largeur={photoL - 20} hauteur={300} /> : <div style={{ display: "flex", fontSize: 18, letterSpacing: "0.1em", color: C.surCreme }}>PHOTO NON PUBLIÉE</div>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", width: texteL, marginLeft: 30 }}>
        <div style={{ display: "flex", height: 40, alignItems: "center" }}>
          <Logo nom={mo.marque} chemin={mo.logo} r={c.r} largeur={180} hauteur={36} taille={28} />
        </div>
        <Titre segments={[{ texte: mo.nomCommercial }]} c={c} largeur={texteL} min={34} max={52} lignesMax={1} marge={8} interligne={1.1} />
        <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
          {lignes.slice(0, 4).map((l, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", height: 50, borderTop: `1px solid ${C.filetCreme}` }}>
              <div style={{ display: "flex", fontSize: 15, fontWeight: 600, letterSpacing: "0.12em", color: C.surCreme, whiteSpace: "nowrap" }}>{typo(l.libelle).toUpperCase()}</div>
              <div style={{ display: "flex", fontSize: 30, fontWeight: 600, letterSpacing: "-0.03em", color: C.nuit, whiteSpace: "nowrap" }}>{cote === "a" ? l.a : l.b}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      <Titre segments={m.titre} c={c} min={70} max={112} lignesMax={1} marge={40} interligne={1.08} />
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={16} /> : null}
      <div style={{ display: "flex", flexDirection: "column", marginTop: 26 }}>
        {bande(a, "a")}
        {bande(b, "b")}
      </div>
      <Ressort />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

/** Échelle horizontale du froid : graduations tous les 10 °C ; repères de la ville au-dessus, conception en dessous. */
function Echelle({ reperes, largeur, story }: { reperes: Repere[]; largeur: number; story: boolean }) {
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
        return (
          <div key={`d${i}`} style={{ display: "flex" }}>
            <div style={{ display: "flex", position: "absolute", left: px - 1, top: axe - 44, width: 2, height: 44, background: C.creme }} />
            <div style={{ display: "flex", flexDirection: "column", position: "absolute", left: pos.left, top: 0, width: colonne, alignItems: pos.align }}>
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

function EchelleFroid({ m, c }: { m: Maquette; c: Cadre }) {
  const { story } = c;
  const reperes = m.reperes ?? [];
  // Les deux repères du dessus ne se chevauchent pas : s'ils sont trop proches, seul le plus froid reste.
  const dessus = reperes.filter((p) => !p.accent);
  const min = Math.min(-40, Math.floor(Math.min(...reperes.map((d) => d.t)) / 10) * 10);
  const ecart = dessus.length === 2 ? (Math.abs(dessus[1].t - dessus[0].t) / -min) * c.L : Infinity;
  const affiches = ecart < 280 ? [...reperes.filter((p) => p.accent), ...dessus.slice(1)] : reperes;
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={story ? 80 : 54} /> : null}
      <Titre segments={m.titre} c={c} min={70} max={story ? 150 : 128} lignesMax={2} marge={20} interligne={0.98} />
      {m.grand ? <Grand texte={m.grand} c={c} max={story ? 250 : 240} marge={story ? 30 : 16} /> : null}
      {m.paragraphe ? <Paragraphe texte={m.paragraphe} c={c} min={22} max={story ? 34 : 28} lignesMax={2} marge={story ? 24 : 10} /> : null}
      <Espace h={story ? 60 : 30} />
      <Echelle reperes={affiches} largeur={c.L} story={story} />
      <Ressort />
      {m.phrase ? <Titre segments={m.phrase} c={c} min={40} max={story ? 76 : 60} lignesMax={3} interligne={1.12} /> : null}
      {m.note ? <Paragraphe texte={m.note} c={c} min={20} max={story ? 32 : 26} lignesMax={2} marge={12} /> : null}
      <Espace h={story ? 40 : 28} />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

function LogoMontants({ m, c }: { m: Maquette; c: Cadre }) {
  const { story } = c;
  const nuit = c.theme === "nuit";
  return (
    <Colonne>
      <Entete theme={c.theme} libelle={m.entete} />
      <div style={{ display: "flex", marginTop: story ? 44 : 34, marginLeft: -c.cote, marginRight: -c.cote, height: story ? 320 : 260, background: C.creme, alignItems: "center", justifyContent: nuit ? "center" : "flex-start", paddingLeft: nuit ? 0 : c.cote, borderBottom: nuit ? "none" : `2px solid ${C.filetCreme}` }}>
        {m.logo ? <Logo nom={m.logo.nom} chemin={m.logo.chemin} r={c.r} largeur={560} hauteur={story ? 130 : 110} taille={92} /> : null}
      </div>
      {m.etiquette ? <Etiquette texte={m.etiquette} c={c} marge={story ? 70 : 50} /> : null}
      <Titre segments={m.titre} c={c} min={80} max={story ? 160 : 146} lignesMax={2} marge={20} interligne={1.06} />
      {m.paragraphe ? <Paragraphe texte={m.paragraphe} c={c} min={24} max={story ? 38 : 32} lignesMax={3} marge={story ? 30 : 22} couleur={nuit ? undefined : C.nuit} /> : null}
      <Ressort />
      {m.stats?.length ? <Stats items={m.stats} c={c} taille={story ? 56 : 48} /> : null}
      <Espace h={story ? 40 : 30} />
      <Fin m={m} c={c} />
    </Colonne>
  );
}

export function Affiche({ maquette: m, genre, ressources }: { maquette: Maquette; genre: Genre; ressources: Ressources }) {
  const story = genre === "story";
  const cote = story ? 80 : 72;
  const c: Cadre = { r: ressources, theme: m.theme, story, cote, L: 1080 - 2 * cote };
  const corps = (() => {
    switch (m.disposition) {
      case "vedette":
        return <Vedette m={m} c={c} />;
      case "cote":
        return <Cote m={m} c={c} />;
      case "nombre":
        return <Nombre m={m} c={c} />;
      case "tableau":
        return <Tableau m={m} c={c} />;
      case "duel":
        return <Duel m={m} c={c} />;
      case "duel-bandes":
        return <DuelBandes m={m} c={c} />;
      case "echelle":
        return <EchelleFroid m={m} c={c} />;
      case "logo":
        return <LogoMontants m={m} c={c} />;
    }
  })();
  return (
    <Racine theme={m.theme} story={story}>
      {corps}
    </Racine>
  );
}

/** Chemins publics des images d'une maquette (photos réelles et logos vérifiés). */
export function imagesDe(m: Maquette): { photos: string[]; logos: string[] } {
  const modeles = [m.modele, ...(m.duel ?? [])].filter((x): x is ModeleFaits => !!x);
  return {
    photos: modeles.map((x) => x.photo).filter((x): x is string => !!x),
    logos: [...modeles.map((x) => x.logo), m.logo?.chemin ?? null].filter((x): x is string => !!x),
  };
}
