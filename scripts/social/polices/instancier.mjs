/* ==================================================================
   Instancie une police variable TrueType (gvar, avar) à un poids donné
   et écrit une police statique : Satori (next/og) ne lit ni le WOFF2
   ni les axes variables.

   Polices des visuels du robot Facebook (public/fonts/social/), tirées
   du sous-ensemble latin d'Inter que next/font sert au site (Google
   Fonts, SIL Open Font License 1.1) :
     node scripts/social/polices/instancier.mjs <inter-latin>.woff2 public/fonts/social/Inter-Regular.ttf wght=400
     node scripts/social/polices/instancier.mjs <inter-latin>.woff2 public/fonts/social/Inter-SemiBold.ttf wght=600
     node scripts/social/polices/instancier.mjs <inter-latin>.woff2 public/fonts/social/Inter-ExtraBold.ttf wght=800
   Instrument Serif Italique (statique, OFL) : woff2-vers-ttf.mjs seul.
   Le fichier latin se reconnaît à sa table cmap (é, °, ’, −, ·).
   ================================================================== */
import { readFileSync, writeFileSync } from "node:fs";
import { woff2ToTtf, buildSfnt, nameOf } from "./woff2-vers-ttf.mjs";

function tablesOf(ttf) {
  const n = ttf.readUInt16BE(4); const m = new Map();
  for (let i = 0; i < n; i++) { const e = 12 + 16 * i; m.set(ttf.toString("latin1", e, e + 4), Buffer.from(ttf.subarray(ttf.readUInt32BE(e + 8), ttf.readUInt32BE(e + 8) + ttf.readUInt32BE(e + 12)))); }
  return m;
}
const f2 = (b, o) => b.readInt16BE(o) / 16384;

export function instantiate(ttf, user) {
  const t = tablesOf(ttf);
  const fvar = t.get("fvar");
  const axesOff = fvar.readUInt16BE(4), axisCount = fvar.readUInt16BE(8), axisSize = fvar.readUInt16BE(10);
  const axes = [];
  for (let i = 0; i < axisCount; i++) { const o = axesOff + i * axisSize; axes.push({ tag: fvar.toString("latin1", o, o + 4), min: fvar.readInt32BE(o + 4) / 65536, def: fvar.readInt32BE(o + 8) / 65536, max: fvar.readInt32BE(o + 12) / 65536 }); }
  let coords = axes.map((a) => { const v = Math.min(a.max, Math.max(a.min, user[a.tag] ?? a.def)); return v < a.def ? (v - a.def) / (a.def - a.min) : v > a.def ? (v - a.def) / (a.max - a.def) : 0; });
  const avar = t.get("avar");
  if (avar) {
    let o = 8;
    coords = coords.map((c) => {
      const n = avar.readUInt16BE(o); o += 2; const maps = [];
      for (let i = 0; i < n; i++) { maps.push([f2(avar, o), f2(avar, o + 2)]); o += 4; }
      for (let i = 1; i < maps.length; i++) if (c <= maps[i][0]) { const [a0, b0] = maps[i - 1], [a1, b1] = maps[i]; return a1 === a0 ? b0 : b0 + ((c - a0) * (b1 - b0)) / (a1 - a0); }
      return c;
    });
  }
  console.error("axes", axes.map((a) => a.tag).join(","), "coords", coords);

  const head = t.get("head"), maxp = t.get("maxp"), hhea = t.get("hhea");
  const numGlyphs = maxp.readUInt16BE(4); const longLoca = head.readInt16BE(50) === 1;
  const loca = t.get("loca"), glyf = t.get("glyf"), hmtx = t.get("hmtx");
  const nh = hhea.readUInt16BE(34);
  const locaAt = (i) => (longLoca ? loca.readUInt32BE(4 * i) : loca.readUInt16BE(2 * i) * 2);
  const adv = (i) => hmtx.readUInt16BE(4 * Math.min(i, nh - 1));

  // Lecture des glyphes
  const glyphs = [];
  for (let gi = 0; gi < numGlyphs; gi++) {
    const s = locaAt(gi), e = locaAt(gi + 1);
    if (e <= s) { glyphs.push({ kind: "empty", advance: adv(gi) }); continue; }
    const g = glyf.subarray(s, e); const nc = g.readInt16BE(0);
    if (nc >= 0) {
      let o = 10; const ends = []; for (let c = 0; c < nc; c++) { ends.push(g.readUInt16BE(o)); o += 2; }
      const ni = g.readUInt16BE(o); o += 2; const instr = g.subarray(o, o + ni); o += ni;
      const total = nc ? ends[nc - 1] + 1 : 0; const flags = [];
      while (flags.length < total) { const f = g[o++]; flags.push(f); if (f & 8) { let r = g[o++]; while (r--) flags.push(f); } }
      const xs = [], ys = []; let v = 0;
      for (const f of flags) { if (f & 2) { const d = g[o++]; v += f & 16 ? d : -d; } else if (!(f & 16)) { v += g.readInt16BE(o); o += 2; } xs.push(v); }
      v = 0;
      for (const f of flags) { if (f & 4) { const d = g[o++]; v += f & 32 ? d : -d; } else if (!(f & 32)) { v += g.readInt16BE(o); o += 2; } ys.push(v); }
      glyphs.push({ kind: "simple", ends, instr, on: flags.map((f) => f & 1), overlap: flags[0] & 0x40, xs, ys, advance: adv(gi) });
    } else {
      let o = 10; const comps = []; let more = true, haveInstr = false;
      while (more) {
        const fl = g.readUInt16BE(o), idx = g.readUInt16BE(o + 2); o += 4;
        let a1, a2; if (fl & 1) { a1 = fl & 2 ? g.readInt16BE(o) : g.readUInt16BE(o); a2 = fl & 2 ? g.readInt16BE(o + 2) : g.readUInt16BE(o + 2); o += 4; } else { a1 = fl & 2 ? g.readInt8(o) : g[o]; a2 = fl & 2 ? g.readInt8(o + 1) : g[o + 1]; o += 2; }
        let tr = Buffer.alloc(0); const n = fl & 8 ? 2 : fl & 0x40 ? 4 : fl & 0x80 ? 8 : 0; tr = g.subarray(o, o + n); o += n;
        comps.push({ fl, idx, a1, a2, tr }); if (fl & 0x100) haveInstr = true; more = !!(fl & 0x20);
      }
      let instr = Buffer.alloc(0); if (haveInstr) { const ni = g.readUInt16BE(o); instr = g.subarray(o + 2, o + 2 + ni); }
      glyphs.push({ kind: "composite", comps, instr, bbox: [g.readInt16BE(2), g.readInt16BE(4), g.readInt16BE(6), g.readInt16BE(8)], advance: adv(gi) });
    }
  }

  // gvar
  const gvar = t.get("gvar");
  const sharedCount = gvar.readUInt16BE(6), sharedOff = gvar.readUInt32BE(8), gc = gvar.readUInt16BE(12), gflags = gvar.readUInt16BE(14), dataOff = gvar.readUInt32BE(16);
  const shared = []; for (let i = 0; i < sharedCount; i++) shared.push(axes.map((_, k) => f2(gvar, sharedOff + (i * axisCount + k) * 2)));
  const gOff = (i) => (gflags & 1 ? gvar.readUInt32BE(20 + 4 * i) : gvar.readUInt16BE(20 + 2 * i) * 2);

  const readPoints = (b, o) => {
    let n = b[o++]; if (n & 0x80) n = ((n & 0x7f) << 8) | b[o++];
    if (n === 0) return { pts: null, o };
    const pts = []; let last = 0;
    while (pts.length < n) { const c = b[o++]; const run = (c & 0x7f) + 1; for (let i = 0; i < run; i++) { const d = c & 0x80 ? b.readUInt16BE((o += 2) - 2) : b[o++]; last += d; pts.push(last); } }
    return { pts, o };
  };
  const readDeltas = (b, o, n) => {
    const out = [];
    while (out.length < n) { const c = b[o++]; const run = (c & 0x3f) + 1; for (let i = 0; i < run; i++) { if (c & 0x80) out.push(0); else if (c & 0x40) { out.push(b.readInt16BE(o)); o += 2; } else { out.push(b.readInt8(o)); o += 1; } } }
    return { d: out, o };
  };
  const scalar = (peak, start, end) => {
    let s = 1;
    for (let k = 0; k < axisCount; k++) {
      const p = peak[k], c = coords[k]; if (p === 0) continue;
      if (start) { const st = start[k], en = end[k]; if (st > p || p > en || (st < 0 && en > 0 && p !== 0)) continue; if (c < st || c > en) return 0; if (c === p) continue; s *= c < p ? (c - st) / (p - st) : (en - c) / (en - p); }
      else { if (c === 0 || c < Math.min(0, p) || c > Math.max(0, p)) return 0; if (c === p) continue; s *= c / p; }
    }
    return s;
  };

  for (let gi = 0; gi < Math.min(gc, numGlyphs); gi++) {
    const s = gOff(gi), e = gOff(gi + 1); if (e <= s) continue;
    const G = glyphs[gi]; const b = gvar.subarray(dataOff + s, dataOff + e);
    const nPts = G.kind === "simple" ? G.xs.length : G.kind === "composite" ? G.comps.length : 0; const total = nPts + 4;
    const ox = G.kind === "simple" ? [...G.xs, 0, G.advance, 0, 0] : G.kind === "composite" ? [...G.comps.map((c) => c.a1), 0, G.advance, 0, 0] : [0, G.advance, 0, 0];
    const oy = G.kind === "simple" ? [...G.ys, 0, 0, 0, 0] : G.kind === "composite" ? [...G.comps.map((c) => c.a2), 0, 0, 0, 0] : [0, 0, 0, 0];
    const dx = new Array(total).fill(0), dy = new Array(total).fill(0);
    let tvc = b.readUInt16BE(0); const sharedPts = tvc & 0x8000; tvc &= 0x0fff; let dOff = b.readUInt16BE(2);
    let h = 4; let sp = null;
    if (sharedPts) { const r = readPoints(b, dOff); sp = r.pts; dOff = r.o; }
    for (let v = 0; v < tvc; v++) {
      const size = b.readUInt16BE(h), ti = b.readUInt16BE(h + 2); h += 4;
      let peak; if (ti & 0x8000) { peak = axes.map((_, k) => f2(b, h + 2 * k)); h += 2 * axisCount; } else peak = shared[ti & 0x0fff];
      let start = null, end = null; if (ti & 0x4000) { start = axes.map((_, k) => f2(b, h + 2 * k)); h += 2 * axisCount; end = axes.map((_, k) => f2(b, h + 2 * k)); h += 2 * axisCount; }
      const sc = scalar(peak, start, end); let o = dOff; const next = dOff + size; dOff = next;
      if (sc === 0) continue;
      let pts = sp; if (ti & 0x2000) { const r = readPoints(b, o); pts = r.pts; o = r.o; }
      const count = pts ? pts.length : total;
      const X = readDeltas(b, o, count); const Y = readDeltas(b, X.o, count);
      if (!pts) { for (let i = 0; i < total; i++) { dx[i] += sc * X.d[i]; dy[i] += sc * Y.d[i]; } continue; }
      const tx = new Array(total).fill(null), ty = new Array(total).fill(null);
      pts.forEach((p, i) => { if (p < total) { tx[p] = X.d[i]; ty[p] = Y.d[i]; } });
      if (G.kind === "simple") {
        let startP = 0;
        for (const endP of G.ends) {
          for (const [T, O] of [[tx, ox], [ty, oy]]) {
            const ref = []; for (let i = startP; i <= endP; i++) if (T[i] !== null) ref.push(i);
            if (ref.length === 0) continue;
            for (let i = startP; i <= endP; i++) {
              if (T[i] !== null) continue;
              if (ref.length === 1) { T[i] = T[ref[0]]; continue; }
              let prev = null, nxt = null;
              for (let k = 1; k <= endP - startP + 1; k++) { const j = ((i - startP - k + (endP - startP + 1) * 2) % (endP - startP + 1)) + startP; if (T[j] !== null && ref.includes(j)) { prev = j; break; } }
              for (let k = 1; k <= endP - startP + 1; k++) { const j = ((i - startP + k) % (endP - startP + 1)) + startP; if (ref.includes(j)) { nxt = j; break; } }
              const x1 = O[prev], x2 = O[nxt], d1 = T[prev], d2 = T[nxt], x = O[i];
              if (x1 === x2) T[i] = d1 === d2 ? d1 : 0;
              else { const [lo, dlo, hi, dhi] = x1 < x2 ? [x1, d1, x2, d2] : [x2, d2, x1, d1]; T[i] = x <= lo ? dlo : x >= hi ? dhi : dlo + ((x - lo) * (dhi - dlo)) / (hi - lo); }
            }
          }
          startP = endP + 1;
        }
      }
      for (let i = 0; i < total; i++) { dx[i] += sc * (tx[i] ?? 0); dy[i] += sc * (ty[i] ?? 0); }
    }
    const p1 = dx[nPts], p2 = dx[nPts + 1];
    G.advance = Math.max(0, Math.round(G.advance + p2 - p1));
    if (G.kind === "simple") { G.xs = G.xs.map((x, i) => Math.round(x + dx[i] - p1)); G.ys = G.ys.map((y, i) => Math.round(y + dy[i])); }
    if (G.kind === "composite") G.comps.forEach((c, i) => { if (c.fl & 2) { c.a1 = Math.round(c.a1 + dx[i] - p1); c.a2 = Math.round(c.a2 + dy[i]); } });
  }

  // Réécriture glyf / loca / hmtx (format long, pas de compression des drapeaux)
  const chunks = []; const offs = []; let pos = 0;
  const bboxOf = (gi, depth = 0) => {
    const G = glyphs[gi]; if (!G || depth > 8) return null;
    if (G.kind === "simple" && G.xs.length) return [Math.min(...G.xs), Math.min(...G.ys), Math.max(...G.xs), Math.max(...G.ys)];
    if (G.kind === "composite") { let bb = null; for (const c of G.comps) { const cb = bboxOf(c.idx, depth + 1); if (!cb) continue; const ox = c.fl & 2 ? c.a1 : 0, oy = c.fl & 2 ? c.a2 : 0; const r = [cb[0] + ox, cb[1] + oy, cb[2] + ox, cb[3] + oy]; bb = bb ? [Math.min(bb[0], r[0]), Math.min(bb[1], r[1]), Math.max(bb[2], r[2]), Math.max(bb[3], r[3])] : r; } return bb; }
    return null;
  };
  const lsbs = [];
  glyphs.forEach((G, gi) => {
    offs.push(pos);
    if (G.kind === "empty" || (G.kind === "simple" && G.xs.length === 0)) { lsbs.push(0); return; }
    const bb = bboxOf(gi) ?? [0, 0, 0, 0]; lsbs.push(bb[0]);
    let buf;
    if (G.kind === "simple") {
      const n = G.xs.length, nc = G.ends.length;
      buf = Buffer.alloc(10 + 2 * nc + 2 + G.instr.length + n * 5); let o = 0;
      buf.writeInt16BE(nc, o); o += 2; for (const v of bb) { buf.writeInt16BE(v, o); o += 2; }
      for (const e of G.ends) { buf.writeUInt16BE(e, o); o += 2; }
      buf.writeUInt16BE(G.instr.length, o); o += 2; G.instr.copy(buf, o); o += G.instr.length;
      for (let k = 0; k < n; k++) buf[o++] = (G.on[k] ? 1 : 0) | (k === 0 && G.overlap ? 0x40 : 0);
      let p = 0; for (const x of G.xs) { buf.writeInt16BE(x - p, o); p = x; o += 2; }
      p = 0; for (const y of G.ys) { buf.writeInt16BE(y - p, o); p = y; o += 2; }
    } else {
      const parts = []; const hd = Buffer.alloc(10); hd.writeInt16BE(-1, 0); bb.forEach((v, k) => hd.writeInt16BE(v, 2 + 2 * k)); parts.push(hd);
      for (const c of G.comps) {
        const fl = (c.fl | 1) & ~0; const b = Buffer.alloc(8); b.writeUInt16BE(fl, 0); b.writeUInt16BE(c.idx, 2);
        if (fl & 2) { b.writeInt16BE(c.a1, 4); b.writeInt16BE(c.a2, 6); } else { b.writeUInt16BE(c.a1, 4); b.writeUInt16BE(c.a2, 6); }
        parts.push(b, c.tr);
      }
      if (G.instr.length) { const l = Buffer.alloc(2); l.writeUInt16BE(G.instr.length); parts.push(l, G.instr); }
      buf = Buffer.concat(parts);
    }
    const pad = (4 - (buf.length % 4)) % 4; chunks.push(buf, Buffer.alloc(pad)); pos += buf.length + pad;
  });
  offs.push(pos);
  const out = new Map();
  for (const [tag, d] of t) if (!["fvar", "gvar", "HVAR", "MVAR", "avar", "STAT", "cvar"].includes(tag)) out.set(tag, d);
  out.set("glyf", Buffer.concat(chunks));
  const lb = Buffer.alloc(4 * offs.length); offs.forEach((v, k) => lb.writeUInt32BE(v, 4 * k)); out.set("loca", lb);
  const hm = Buffer.alloc(4 * numGlyphs); glyphs.forEach((G, i) => { hm.writeUInt16BE(G.advance, 4 * i); hm.writeInt16BE(lsbs[i], 4 * i + 2); }); out.set("hmtx", hm);
  const hh = Buffer.from(hhea); hh.writeUInt16BE(numGlyphs, 34); hh.writeUInt16BE(Math.max(...glyphs.map((g) => g.advance)), 10); out.set("hhea", hh);
  const hd = Buffer.from(head); hd.writeInt16BE(1, 50); out.set("head", hd);
  const os2 = Buffer.from(t.get("OS/2")); if (user.wght) os2.writeUInt16BE(Math.round(user.wght), 4); out.set("OS/2", os2);
  return buildSfnt(0x00010000, out);
}

if (process.argv[2]) {
  const src = readFileSync(process.argv[2]);
  const ttf = src.readUInt32BE(0) === 0x774f4632 ? woff2ToTtf(src) : src;
  const user = Object.fromEntries(process.argv.slice(4).map((a) => a.split("=")).map(([k, v]) => [k, Number(v)]));
  const res = instantiate(ttf, user);
  writeFileSync(process.argv[3], res);
  console.log(JSON.stringify(nameOf(res)), res.length);
}
