/* ==================================================================
   Planches du héros « Plan d’atelier » : géométrie seule (aucun rendu).
   Cadre 800 × 440. Chaque planche liste ses traits dans l’ordre où ils
   se dessinent, ses renvois (nom des pièces), les hélices qui tournent
   et les écoulements (frigorigène, air). Aucune cote chiffrée : ce sont
   des schémas de principe, sans marque.
   ================================================================== */
import type { AtelierVariant } from "./shared";

type Pt = [number, number];
export type Stroke = { d: string; w: "main" | "thin" | "hair"; dash?: boolean };
/** side : position du texte par rapport au point `to` ; leader false = étiquette seule. */
export type Callout = { at: Pt; to: Pt; text: string; side: "start" | "end" | "top" | "bottom"; leader: boolean };
export type Fan = { cx: number; cy: number; r: number };
export type Plate = { strokes: Stroke[]; callouts: Callout[]; fans: Fan[]; flows: string[]; air: string[] };

class Pen {
  strokes: Stroke[] = [];
  callouts: Callout[] = [];
  fans: Fan[] = [];
  flows: string[] = [];
  air: string[] = [];
  main(d: string) {
    this.strokes.push({ d, w: "main" });
  }
  thin(d: string) {
    this.strokes.push({ d, w: "thin" });
  }
  hair(d: string) {
    this.strokes.push({ d, w: "hair" });
  }
  dash(d: string) {
    this.strokes.push({ d, w: "thin", dash: true });
  }
  note(at: Pt, to: Pt, text: string, side: Callout["side"] = "start") {
    this.callouts.push({ at, to, text, side, leader: true });
  }
  tag(to: Pt, text: string, side: Callout["side"] = "start") {
    this.callouts.push({ at: to, to, text, side, leader: false });
  }
  plate(): Plate {
    return { strokes: this.strokes, callouts: this.callouts, fans: this.fans, flows: this.flows, air: this.air };
  }
}

/* ---------- Primitives ---------- */

const k = (v: number) => Math.round(v * 10) / 10;

function rect(x: number, y: number, w: number, h: number, r = 0): string {
  if (!r) return `M${k(x)} ${k(y)}H${k(x + w)}V${k(y + h)}H${k(x)}Z`;
  return `M${k(x + r)} ${k(y)}H${k(x + w - r)}Q${k(x + w)} ${k(y)} ${k(x + w)} ${k(y + r)}V${k(y + h - r)}Q${k(x + w)} ${k(y + h)} ${k(x + w - r)} ${k(y + h)}H${k(x + r)}Q${k(x)} ${k(y + h)} ${k(x)} ${k(y + h - r)}V${k(y + r)}Q${k(x)} ${k(y)} ${k(x + r)} ${k(y)}Z`;
}

function line(...p: number[]): string {
  let d = `M${k(p[0])} ${k(p[1])}`;
  for (let i = 2; i + 1 < p.length; i += 2) d += `L${k(p[i])} ${k(p[i + 1])}`;
  return d;
}

function circle(cx: number, cy: number, r: number): string {
  return `M${k(cx - r)} ${k(cy)}a${k(r)} ${k(r)} 0 1 0 ${k(2 * r)} 0a${k(r)} ${k(r)} 0 1 0 ${k(-2 * r)} 0`;
}

/** Hachures de coupe à 45°, limitées au rectangle. */
function hatch(x: number, y: number, w: number, h: number, s = 9): string {
  let d = "";
  for (let c = s; c < w + h; c += s) {
    const t0 = Math.max(0, h - c);
    const t1 = Math.min(h, w + h - c);
    if (t1 <= t0) continue;
    d += `M${k(x + c - h + t0)} ${k(y + h - t0)}L${k(x + c - h + t1)} ${k(y + h - t1)}`;
  }
  return d;
}

function zigzag(x: number, y: number, w: number, h: number, count: number): string {
  let d = `M${k(x)} ${k(y + h)}`;
  for (let i = 1; i <= count; i++) d += `L${k(x + (w * i) / count)} ${k(i % 2 ? y : y + h)}`;
  return d;
}

/** Serpentin vertical (batterie d’échangeur vue de face). */
function serpentine(x: number, y: number, w: number, h: number, loops: number): string {
  const step = w / loops;
  let d = `M${k(x)} ${k(y)}`;
  let down = true;
  for (let i = 0; i <= loops; i++) {
    if (i > 0) d += `H${k(x + i * step)}`;
    d += `V${k(down ? y + h : y)}`;
    down = !down;
  }
  return d;
}

/* ---------- Pièces ---------- */

function tangential(p: Pen, cx: number, cy: number, r: number) {
  p.thin(circle(cx, cy, r));
  let d = "";
  for (let i = 0; i < 14; i++) {
    const a = (i / 14) * Math.PI * 2;
    d += `M${k(cx + Math.cos(a) * r * 0.5)} ${k(cy + Math.sin(a) * r * 0.5)}L${k(cx + Math.cos(a + 0.4) * r * 0.92)} ${k(cy + Math.sin(a + 0.4) * r * 0.92)}`;
  }
  p.hair(d);
}

/** Unité murale intérieure en coupe : filtre, évaporateur, ventilateur tangentiel, volet. */
function indoorHead(p: Pen, x: number, y: number, w: number, h: number) {
  p.main(rect(x, y, w, h, h * 0.24));
  p.dash(line(x + 12, y + 8, x + w - 12, y + 8));
  p.thin(zigzag(x + 16, y + 14, w - 32, h * 0.26, Math.max(8, Math.round(w / 11))));
  p.thin(line(x + 12, y + h * 0.52, x + w - 12, y + h * 0.52));
  const fx = x + w * 0.5;
  const fy = y + h * 0.74;
  const fr = h * 0.15;
  tangential(p, fx, fy, fr);
  p.main(`M${k(x + w * 0.14)} ${k(y + h + 4)}Q${k(x + w * 0.5)} ${k(y + h + 13)} ${k(x + w * 0.86)} ${k(y + h + 4)}`);
  return {
    filter: [x + w * 0.18, y + 8] as Pt,
    coil: [x + w * 0.45, y + 14 + h * 0.13] as Pt,
    fan: [fx + fr, fy] as Pt,
    louver: [x + w * 0.3, y + h + 7] as Pt,
    top: [x + w * 0.9, y] as Pt,
  };
}

/** Unité extérieure en coupe : hélice (qui tourne), compresseur, condenseur, vannes de service. */
function outdoorUnit(p: Pen, x: number, y: number, w: number, h: number, feet = true) {
  p.main(rect(x, y, w, h, 5));
  p.thin(line(x + 6, y + 10, x + w - 6, y + 10));
  const cx = x + w * 0.36;
  const cy = y + h * 0.56;
  const r = Math.min(h * 0.34, w * 0.26);
  p.thin(circle(cx, cy, r));
  p.hair(circle(cx, cy, r * 0.7));
  p.fans.push({ cx, cy, r: r * 0.86 });
  p.thin(rect(x + w * 0.63, y + h * 0.5, w * 0.1, h * 0.38, w * 0.04));
  p.hair(serpentine(x + w * 0.78, y + 20, w * 0.15, h - 32, 6));
  p.thin(circle(x + w + 5, y + h * 0.66, 3) + circle(x + w + 5, y + h * 0.8, 3));
  if (feet) p.main(line(x + w * 0.1, y + h, x + w * 0.1, y + h + 9) + line(x + w * 0.9, y + h, x + w * 0.9, y + h + 9));
  return {
    top: [x + w * 0.2, y] as Pt,
    comp: [x + w * 0.68, y + h * 0.7] as Pt,
    coil: [x + w * 0.86, y + 22] as Pt,
    valves: [x + w + 8, y + h * 0.73] as Pt,
  };
}

/** Ancienne unité, en traits interrompus (à retirer). */
function ghostUnit(p: Pen, x: number, y: number, w: number, h: number) {
  p.dash(rect(x, y, w, h, 5));
  const cx = x + w * 0.36;
  const cy = y + h * 0.56;
  p.dash(circle(cx, cy, Math.min(h * 0.34, w * 0.26)));
  p.dash(rect(x + w * 0.63, y + h * 0.5, w * 0.1, h * 0.38, w * 0.04));
  p.dash(line(x + w * 0.1, y + h, x + w * 0.1, y + h + 9) + line(x + w * 0.9, y + h, x + w * 0.9, y + h + 9));
  return { top: [x + w * 0.5, y] as Pt };
}

/** Appareil de traitement d’air (thermopompe centrale) : serpentin en A, soufflante, filtre. */
function airHandler(p: Pen, x: number, y: number, w: number, h: number) {
  p.main(rect(x, y, w, h, 4));
  p.thin(line(x, y + h * 0.44, x + w, y + h * 0.44));
  p.thin(line(x + w * 0.14, y + h * 0.4, x + w * 0.5, y + h * 0.07, x + w * 0.86, y + h * 0.4));
  tangential(p, x + w * 0.5, y + h * 0.7, w * 0.22);
  p.dash(line(x + 6, y + h - 8, x + w - 6, y + h - 8));
  return { coil: [x + w * 0.5, y + h * 0.15] as Pt, filter: [x + w * 0.2, y + h - 8] as Pt, body: [x + w * 0.5, y + h] as Pt };
}

function wall(p: Pen, x: number, y1: number, y2: number, t: number) {
  p.main(line(x, y1, x, y2));
  p.main(line(x + t, y1, x + t, y2));
  p.hair(hatch(x, y1, t, y2 - y1, 10));
}

function ground(p: Pen, x1: number, x2: number, y: number) {
  p.main(line(x1, y, x2, y));
  let d = "";
  for (let x = x1 + 10; x <= x2; x += 14) d += `M${k(x)} ${k(y + 1)}L${k(x - 8)} ${k(y + 9)}`;
  p.hair(d);
}

function dimH(p: Pen, x1: number, x2: number, y: number, text: string) {
  p.hair(
    line(x1, y - 5, x1, y + 5) + line(x2, y - 5, x2, y + 5) + line(x1, y, x2, y) + `M${k(x1 + 7)} ${k(y - 3)}L${k(x1)} ${k(y)}L${k(x1 + 7)} ${k(y + 3)}M${k(x2 - 7)} ${k(y - 3)}L${k(x2)} ${k(y)}L${k(x2 - 7)} ${k(y + 3)}`,
  );
  p.tag([(x1 + x2) / 2, y], text, "top");
}

function dimV(p: Pen, x: number, y1: number, y2: number, text: string, side: "start" | "end" = "start") {
  p.hair(
    line(x - 5, y1, x + 5, y1) + line(x - 5, y2, x + 5, y2) + line(x, y1, x, y2) + `M${k(x - 3)} ${k(y1 + 7)}L${k(x)} ${k(y1)}L${k(x + 3)} ${k(y1 + 7)}M${k(x - 3)} ${k(y2 - 7)}L${k(x)} ${k(y2)}L${k(x + 3)} ${k(y2 - 7)}`,
  );
  p.tag([x + (side === "start" ? 3 : -3), (y1 + y2) / 2], text, side);
}

/* ---------- Planches ---------- */

function murale(): Plate {
  const p = new Pen();
  p.main(line(24, 396, 440, 396));
  wall(p, 440, 24, 396, 30);
  ground(p, 470, 792, 396);
  const h = indoorHead(p, 150, 92, 250, 78);
  const l1 = line(400, 120, 522, 120, 522, 318, 562, 318);
  const l2 = line(400, 130, 512, 130, 512, 328, 562, 328);
  p.thin(l1);
  p.thin(l2);
  p.flows.push(l1);
  p.dash(line(392, 172, 392, 186, 486, 186, 486, 392));
  const o = outdoorUnit(p, 562, 248, 200, 138);
  for (let i = 0; i < 3; i++) p.air.push(`M${190 + i * 52} 190q-10 38 ${-40 - i * 8} ${70 + i * 10}`);
  p.note(h.filter, [96, 100], "FILTRE", "end");
  p.note(h.coil, [262, 54], "ÉVAPORATEUR", "top");
  p.note(h.top, [384, 54], "UNITÉ MURALE", "top");
  p.note(h.fan, [346, 222], "VENTILATEUR", "start");
  p.note(h.louver, [96, 184], "VOLET D’AIR", "end");
  p.note([455, 70], [496, 70], "MUR EXTÉRIEUR", "start");
  p.note([522, 200], [536, 200], "CONDUITES DE FRIGORIGÈNE", "start");
  p.note(o.top, [602, 232], "UNITÉ EXTÉRIEURE", "top");
  p.note(o.coil, [756, 232], "CONDENSEUR", "top");
  p.note(o.comp, [700, 420], "COMPRESSEUR", "bottom");
  p.note([486, 360], [522, 420], "DRAIN DE CONDENSAT", "bottom");
  return p.plate();
}

function centrale(): Plate {
  const p = new Pen();
  wall(p, 30, 112, 396, 18);
  wall(p, 502, 112, 396, 18);
  p.main(line(18, 118, 275, 38, 532, 118));
  p.main(rect(48, 236, 454, 6));
  p.main(line(48, 396, 502, 396));
  ground(p, 520, 792, 320);
  p.thin(rect(130, 244, 330, 18));
  p.thin(rect(220, 262, 46, 12));
  const ah = airHandler(p, 205, 274, 76, 118);
  p.thin(rect(84, 252, 24, 110));
  p.thin(rect(84, 362, 121, 20));
  p.thin(rect(236, 229, 36, 7));
  p.thin(rect(404, 229, 36, 7));
  p.thin(rect(80, 229, 32, 7));
  p.thin(rect(60, 160, 12, 18, 2));
  const l1 = line(590, 270, 556, 270, 556, 296, 281, 296);
  const l2 = line(590, 280, 546, 280, 546, 306, 281, 306);
  p.thin(l1);
  p.thin(l2);
  p.flows.push(l1);
  const o = outdoorUnit(p, 590, 200, 180, 112, false);
  p.thin(rect(580, 312, 200, 8));
  p.air.push("M254 225q6-34-10-70", "M422 225q-6-34 10-70", "M96 186q0 20 0 38");
  p.note([66, 169], [96, 150], "THERMOSTAT", "start");
  p.note([422, 229], [422, 150], "BOUCHE DE SOUFFLAGE", "top");
  p.note([96, 229], [140, 204], "RETOUR D’AIR", "start");
  p.note([330, 253], [330, 200], "CONDUIT PRINCIPAL", "top");
  p.note(ah.coil, [330, 336], "SERPENTIN", "start");
  p.note(ah.body, [243, 418], "APPAREIL DE TRAITEMENT D’AIR", "bottom");
  p.note(ah.filter, [150, 404], "FILTRE", "end");
  p.note([546, 293], [560, 350], "CONDUITES DE FRIGORIGÈNE", "start");
  p.note(o.top, [626, 180], "UNITÉ EXTÉRIEURE", "top");
  p.note(o.comp, [730, 420], "COMPRESSEUR", "bottom");
  return p.plate();
}

function multizone(): Plate {
  const p = new Pen();
  wall(p, 30, 100, 396, 16);
  wall(p, 470, 100, 396, 16);
  p.main(line(18, 106, 258, 30, 498, 106));
  p.main(rect(46, 240, 424, 6));
  p.main(line(46, 396, 470, 396));
  p.thin(line(258, 110, 258, 240));
  ground(p, 486, 792, 396);
  const a = indoorHead(p, 70, 150, 130, 40);
  const b = indoorHead(p, 300, 150, 130, 40);
  const c = indoorHead(p, 150, 272, 170, 50);
  const L1 = line(200, 168, 222, 168, 222, 243, 522, 243, 522, 312, 580, 312);
  const L2 = line(430, 168, 534, 168, 534, 300, 580, 300);
  const L3 = line(320, 310, 510, 310, 510, 324, 580, 324);
  p.thin(L1);
  p.thin(L2);
  p.thin(L3);
  p.flows.push(L1, L2, L3);
  const o = outdoorUnit(p, 580, 256, 190, 130);
  for (const u of [a, b]) p.air.push(`M${k(u.louver[0])} ${k(u.louver[1] + 4)}q-6 22-26 38`);
  p.air.push(`M${k(c.louver[0])} ${k(c.louver[1] + 4)}q-8 26-32 46`);
  p.tag([48, 230], "ZONE 1");
  p.tag([262, 230], "ZONE 2");
  p.tag([48, 386], "ZONE 3");
  p.note(b.top, [405, 128], "UNITÉ MURALE", "end");
  p.note([534, 190], [548, 190], "UNE CONDUITE PAR ZONE", "start");
  p.note(o.top, [680, 238], "UNITÉ EXTÉRIEURE MULTIZONE", "top");
  p.note(o.comp, [700, 420], "COMPRESSEUR", "bottom");
  return p.plate();
}

function froid(): Plate {
  const p = new Pen();
  wall(p, 150, 24, 396, 30);
  p.main(line(24, 396, 150, 396));
  ground(p, 180, 792, 396);
  p.thin("M180 350C240 342 300 356 360 348S480 344 540 350S680 356 792 346");
  p.hair(hatch(180, 354, 612, 42, 16));
  const h = indoorHead(p, 22, 96, 116, 38);
  const l1 = line(400, 236, 206, 236, 206, 116, 138, 116);
  const l2 = line(400, 246, 196, 246, 196, 126, 138, 126);
  p.thin(l1);
  p.thin(l2);
  p.flows.push(l1);
  p.main(line(430, 300, 430, 396) + line(630, 300, 630, 396));
  p.thin(line(430, 330, 630, 330));
  p.hair(line(430, 330, 530, 392) + line(630, 330, 530, 392));
  const o = outdoorUnit(p, 400, 170, 260, 130, false);
  p.hair(zigzag(412, 286, 236, 6, 32));
  p.dash(line(530, 300, 530, 392));
  dimV(p, 380, 300, 350, "DÉGAGEMENT", "end");
  p.air.push(`M${k(h.louver[0])} ${k(h.louver[1] + 4)}q-4 20-14 36`);
  p.note(o.top, [530, 150], "UNITÉ EXTÉRIEURE CLIMAT FROID", "top");
  p.note([430, 320], [306, 282], "SUPPORT SURÉLEVÉ", "end");
  p.note([720, 347], [720, 322], "NIVEAU DE NEIGE", "top");
  p.note([600, 289], [620, 424], "ÉLÉMENT DU BAC (SELON MODÈLE)", "bottom");
  p.note([530, 380], [330, 424], "ÉVACUATION DU DÉGIVRAGE", "bottom");
  p.note(o.comp, [672, 214], "COMPRESSEUR", "start");
  p.note(h.top, [100, 70], "UNITÉ MURALE", "top");
  return p.plate();
}

function efficacite(): Plate {
  const p = new Pen();
  p.dash(rect(56, 40, 272, 160, 6));
  p.dash(rect(360, 40, 404, 368, 6));
  p.thin(rect(90, 80, 210, 60, 4));
  p.hair(zigzag(100, 90, 190, 40, 24));
  p.thin(rect(520, 80, 220, 60, 4));
  p.hair(zigzag(530, 90, 200, 40, 24));
  p.main("M418 100L442 120L442 100L418 120Z");
  p.thin(rect(460, 220, 50, 32, 3));
  p.hair("M470 236H500M494 230L500 236L494 242");
  p.main(rect(600, 280, 70, 110, 30));
  p.hair(line(600, 322, 670, 322));
  const a = line(300, 110, 418, 110);
  const b = line(442, 110, 520, 110);
  const c = line(195, 140, 195, 236, 460, 236);
  const d = line(510, 236, 630, 236, 630, 140);
  const e = line(500, 252, 500, 262, 635, 262, 635, 280);
  const f = line(470, 252, 470, 340, 600, 340);
  for (const x of [a, b, c, d, e, f]) p.thin(x);
  p.flows.push(a, b, c, d, e, f);
  p.air.push("M110 78q-20-18-46-22", "M280 78q20-18 42-22");
  p.air.push("M792 70q-24 10-48 24", "M792 110q-26 0-50 0", "M792 150q-24-10-48-24");
  p.note([195, 80], [195, 68], "ÉCHANGEUR INTÉRIEUR", "top");
  p.note([630, 80], [630, 68], "ÉCHANGEUR EXTÉRIEUR", "top");
  p.note([430, 120], [450, 176], "DÉTENDEUR ÉLECTRONIQUE", "start");
  p.note([485, 220], [485, 204], "VANNE 4 VOIES", "top");
  p.note([635, 390], [635, 424], "COMPRESSEUR INVERTER", "bottom");
  p.tag([66, 186], "UNITÉ INTÉRIEURE");
  p.tag([368, 396], "UNITÉ EXTÉRIEURE");
  return p.plate();
}

function catalogue(): Plate {
  const p = new Pen();
  p.main(rect(60, 86, 300, 88, 22));
  p.thin(line(76, 142, 344, 142));
  p.main("M96 178Q210 190 324 178");
  p.thin(rect(318, 104, 22, 8, 2));
  dimH(p, 60, 360, 60, "L");
  dimV(p, 384, 86, 174, "H");
  p.main("M60 236H104Q124 236 128 256V300Q124 320 104 320H60Z");
  p.hair(line(60, 236, 60, 320));
  dimH(p, 60, 128, 222, "P");
  const o = outdoorUnit(p, 470, 110, 250, 176);
  p.thin(rect(704, 240, 12, 18));
  ground(p, 440, 792, 296);
  dimH(p, 470, 720, 84, "L");
  dimV(p, 750, 110, 286, "H");
  p.note([210, 183], [210, 226], "VOLET D’AIR", "bottom");
  p.note([710, 249], [700, 330], "PLAQUE SIGNALÉTIQUE", "bottom");
  p.note(o.comp, [560, 330], "COMPRESSEUR", "bottom");
  p.tag([56, 384], "UNITÉ MURALE : ÉLÉVATION ET PROFIL");
  p.tag([466, 384], "UNITÉ EXTÉRIEURE : ÉLÉVATION");
  return p.plate();
}

function installation(): Plate {
  const p = new Pen();
  p.main(line(24, 396, 330, 396));
  wall(p, 330, 24, 396, 30);
  ground(p, 360, 792, 396);
  p.dash(rect(96, 104, 214, 66, 4));
  const h = indoorHead(p, 80, 110, 240, 66);
  p.thin(rect(330, 148, 30, 16));
  const l1 = line(320, 150, 376, 150, 376, 322, 440, 322);
  const l2 = line(320, 160, 368, 160, 368, 332, 440, 332);
  p.thin(l1);
  p.thin(l2);
  p.flows.push(l1);
  p.dash(rect(360, 140, 26, 204, 3));
  p.dash(line(300, 176, 330, 188, 396, 194, 396, 392));
  const o = outdoorUnit(p, 440, 246, 220, 132);
  p.thin(rect(430, 387, 240, 9));
  p.thin(rect(690, 176, 30, 40, 2));
  p.dash(line(705, 216, 705, 246));
  p.air.push("M120 192q-12 30-44 56", "M170 192q-12 34-50 64");
  p.note([110, 106], [110, 70], "PLAQUE DE MONTAGE", "top");
  p.note(h.top, [250, 76], "UNITÉ MURALE", "top");
  p.note([345, 150], [410, 64], "MANCHON ET SCELLANT", "start");
  p.note([373, 300], [316, 318], "CACHE-CONDUITS", "end");
  p.note([315, 182], [250, 262], "DRAIN EN PENTE", "end");
  p.note(o.top, [520, 226], "UNITÉ EXTÉRIEURE", "top");
  p.note([705, 176], [705, 158], "SECTIONNEUR", "top");
  p.note([550, 392], [550, 424], "DALLE", "bottom");
  p.note(o.comp, [640, 424], "COMPRESSEUR", "bottom");
  p.note([396, 360], [420, 424], "ÉVACUATION DU CONDENSAT", "bottom");
  return p.plate();
}

function remplacement(): Plate {
  const p = new Pen();
  ground(p, 24, 792, 396);
  const g = ghostUnit(p, 60, 226, 220, 150);
  p.dash(rect(50, 385, 240, 11));
  p.main(line(310, 200, 452, 200));
  p.main("M440 192L452 200L440 208");
  const o = outdoorUnit(p, 500, 214, 240, 162);
  p.thin(rect(490, 385, 260, 11));
  const l1 = line(470, 24, 470, 300, 500, 300);
  const l2 = line(480, 24, 480, 290, 500, 290);
  p.thin(l1);
  p.thin(l2);
  p.flows.push(l1);
  p.note(g.top, [170, 196], "APPAREIL EXISTANT", "top");
  p.tag([56, 150], "RETRAIT : RÉCUPÉRATION DU FRIGORIGÈNE");
  p.tag([318, 188], "REMPLACEMENT");
  p.note(o.top, [600, 190], "NOUVEL APPAREIL", "top");
  p.note([475, 150], [490, 150], "CONDUITES : À VÉRIFIER OU REMPLACER", "start");
  p.note(o.comp, [680, 424], "COMPRESSEUR", "bottom");
  p.note([620, 391], [560, 424], "DALLE OU SUPPORT", "bottom");
  return p.plate();
}

export const PLATES: Record<AtelierVariant, () => Plate> = { murale, centrale, multizone, froid, efficacite, catalogue, installation, remplacement };
