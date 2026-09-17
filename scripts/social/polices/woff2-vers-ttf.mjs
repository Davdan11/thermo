/* ==================================================================
   Décodeur WOFF2 → TTF minimal (transformations glyf/loca et hmtx),
   sans dépendance : Brotli vient de node:zlib.
   Usage : node scripts/social/polices/woff2-vers-ttf.mjs entree.woff2 sortie.ttf
   ================================================================== */
import { readFileSync, writeFileSync } from "node:fs";
import { brotliDecompressSync } from "node:zlib";
import { pathToFileURL } from "node:url";

const TAGS = ["cmap","head","hhea","hmtx","maxp","name","OS/2","post","cvt ","fpgm","glyf","loca","prep","CFF ","VORG","EBDT","EBLC","gasp","hdmx","kern","LTSH","PCLT","VDMX","vhea","vmtx","BASE","GDEF","GPOS","GSUB","EBSC","JSTF","MATH","CBDT","CBLC","COLR","CPAL","SVG ","sbix","acnt","avar","bdat","bloc","bsln","cvar","fdsc","feat","fmtx","fvar","gvar","hsty","just","lcar","mort","morx","opbd","prop","trak","Zapf","Silf","Glat","Gloc","Feat","Sill"];

class R {
  constructor(buf, off = 0) { this.b = buf; this.o = off; }
  u8() { return this.b[this.o++]; }
  u16() { const v = this.b.readUInt16BE(this.o); this.o += 2; return v; }
  i16() { const v = this.b.readInt16BE(this.o); this.o += 2; return v; }
  u32() { const v = this.b.readUInt32BE(this.o); this.o += 4; return v; }
  b128() { let v = 0; for (let i = 0; i < 5; i++) { const c = this.u8(); v = v * 128 + (c & 0x7f); if (!(c & 0x80)) return v; } throw new Error("b128"); }
  u255() { const c = this.u8(); if (c === 253) return this.u16(); if (c === 255) return this.u8() + 253; if (c === 254) return this.u8() + 506; return c; }
  bytes(n) { const s = this.b.subarray(this.o, this.o + n); this.o += n; return s; }
}

export function woff2ToTtf(input) {
  const r = new R(input);
  if (r.u32() !== 0x774f4632) throw new Error("pas du WOFF2");
  const flavor = r.u32(); r.u32(); const numTables = r.u16(); r.u16(); r.u32(); const compSize = r.u32();
  r.o = 48;
  const dir = [];
  for (let i = 0; i < numTables; i++) {
    const flags = r.u8();
    const tag = (flags & 0x3f) === 0x3f ? r.bytes(4).toString("latin1") : TAGS[flags & 0x3f];
    const tv = (flags >> 6) & 3;
    const origLength = r.b128();
    let transformed = false, length = origLength;
    if (tag === "glyf" || tag === "loca") { if (tv === 0) { transformed = true; length = r.b128(); } }
    else if (tv !== 0) { transformed = true; length = r.b128(); }
    dir.push({ tag, origLength, length, transformed });
  }
  const data = brotliDecompressSync(input.subarray(r.o, r.o + compSize));
  let off = 0;
  const tables = new Map();
  for (const t of dir) { t.data = data.subarray(off, off + t.length); off += t.length; tables.set(t.tag, t); }

  const out = new Map();
  for (const t of dir) if (!t.transformed) out.set(t.tag, Buffer.from(t.data));

  let xMins = null;
  const glyf = tables.get("glyf");
  if (glyf?.transformed) {
    const g = new R(glyf.data);
    g.u16(); const optionFlags = g.u16(); const numGlyphs = g.u16(); g.u16();
    const sizes = []; for (let i = 0; i < 7; i++) sizes.push(g.u32());
    let p = g.o;
    const streams = sizes.map((s) => { const st = new R(glyf.data, p); p += s; return st; });
    const [nCont, nPts, flagS, glyphS, compS, bboxS, instrS] = streams;
    const overlap = optionFlags & 1 ? glyf.data.subarray(p, p + ((numGlyphs + 7) >> 3)) : null;
    const bitmapLen = 4 * ((numGlyphs + 31) >> 5);
    const bboxBitmap = bboxS.bytes(bitmapLen);
    const chunks = []; const loca = []; let pos = 0;
    xMins = new Array(numGlyphs).fill(0);
    for (let gi = 0; gi < numGlyphs; gi++) {
      loca.push(pos);
      const nc = nCont.i16();
      const hasBbox = (bboxBitmap[gi >> 3] & (0x80 >> (gi & 7))) !== 0;
      if (nc === 0) continue;
      let buf;
      if (nc === -1) {
        const start = compS.o; let haveInstr = false; let more = true;
        while (more) {
          const f = compS.u16(); compS.u16();
          compS.o += f & 1 ? 4 : 2;
          if (f & 8) compS.o += 2; else if (f & 0x40) compS.o += 4; else if (f & 0x80) compS.o += 8;
          if (f & 0x100) haveInstr = true;
          more = (f & 0x20) !== 0;
        }
        const comp = compS.b.subarray(start, compS.o);
        const bb = [bboxS.i16(), bboxS.i16(), bboxS.i16(), bboxS.i16()];
        xMins[gi] = bb[0];
        const parts = [];
        const head = Buffer.alloc(10); head.writeInt16BE(-1, 0); bb.forEach((v, k) => head.writeInt16BE(v, 2 + 2 * k)); parts.push(head, comp);
        if (haveInstr) { const n = glyphS.u255(); const l = Buffer.alloc(2); l.writeUInt16BE(n); parts.push(l, instrS.bytes(n)); }
        buf = Buffer.concat(parts);
      } else {
        const ends = []; let total = 0;
        for (let c = 0; c < nc; c++) { total += nPts.u255(); ends.push(total - 1); }
        const xs = [], ys = [], on = []; let x = 0, y = 0;
        for (let k = 0; k < total; k++) {
          const fl = flagS.u8(); on.push(!(fl & 0x80)); const f = fl & 0x7f;
          const ws = (ff, v) => (ff & 1 ? v : -v);
          let dx, dy;
          if (f < 10) { const b0 = glyphS.u8(); dx = 0; dy = ws(f, ((f & 14) << 7) + b0); }
          else if (f < 20) { const b0 = glyphS.u8(); dx = ws(f, (((f - 10) & 14) << 7) + b0); dy = 0; }
          else if (f < 84) { const b0 = f - 20; const b1 = glyphS.u8(); dx = ws(f, 1 + (b0 & 0x30) + (b1 >> 4)); dy = ws(f >> 1, 1 + ((b0 & 0x0c) << 2) + (b1 & 0x0f)); }
          else if (f < 120) { const b0 = f - 84; const i0 = glyphS.u8(), i1 = glyphS.u8(); dx = ws(f, 1 + (Math.floor(b0 / 12) << 8) + i0); dy = ws(f >> 1, 1 + (((b0 % 12) >> 2) << 8) + i1); }
          else if (f < 124) { const i0 = glyphS.u8(), i1 = glyphS.u8(), i2 = glyphS.u8(); dx = ws(f, (i0 << 4) + (i1 >> 4)); dy = ws(f >> 1, ((i1 & 0x0f) << 8) + i2); }
          else { const i0 = glyphS.u8(), i1 = glyphS.u8(), i2 = glyphS.u8(), i3 = glyphS.u8(); dx = ws(f, (i0 << 8) + i1); dy = ws(f >> 1, (i2 << 8) + i3); }
          x += dx; y += dy; xs.push(x); ys.push(y);
        }
        const nInstr = glyphS.u255(); const instr = instrS.bytes(nInstr);
        let bb;
        if (hasBbox) bb = [bboxS.i16(), bboxS.i16(), bboxS.i16(), bboxS.i16()];
        else bb = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
        xMins[gi] = bb[0];
        const size = 10 + 2 * nc + 2 + nInstr + total * 5;
        buf = Buffer.alloc(size); let o = 0;
        buf.writeInt16BE(nc, o); o += 2; for (const v of bb) { buf.writeInt16BE(v, o); o += 2; }
        for (const e of ends) { buf.writeUInt16BE(e, o); o += 2; }
        buf.writeUInt16BE(nInstr, o); o += 2; instr.copy(buf, o); o += nInstr;
        const ov = overlap && (overlap[gi >> 3] & (0x80 >> (gi & 7)));
        for (let k = 0; k < total; k++) buf[o++] = (on[k] ? 1 : 0) | (k === 0 && ov ? 0x40 : 0);
        let px = 0; for (let k = 0; k < total; k++) { buf.writeInt16BE(xs[k] - px, o); px = xs[k]; o += 2; }
        let py = 0; for (let k = 0; k < total; k++) { buf.writeInt16BE(ys[k] - py, o); py = ys[k]; o += 2; }
      }
      const pad = (4 - (buf.length % 4)) % 4;
      chunks.push(buf, Buffer.alloc(pad)); pos += buf.length + pad;
    }
    loca.push(pos);
    out.set("glyf", Buffer.concat(chunks));
    const lb = Buffer.alloc(4 * loca.length); loca.forEach((v, k) => lb.writeUInt32BE(v, 4 * k));
    out.set("loca", lb);
    const head = out.get("head"); head.writeInt16BE(1, 50);
  }

  const hmtx = tables.get("hmtx");
  if (hmtx?.transformed) {
    const numGlyphs = out.get("maxp").readUInt16BE(4);
    const nh = out.get("hhea").readUInt16BE(34);
    const h = new R(hmtx.data); const fl = h.u8();
    const adv = []; for (let i = 0; i < nh; i++) adv.push(h.u16());
    const lsb = [];
    for (let i = 0; i < nh; i++) lsb.push(fl & 1 ? xMins[i] : h.i16());
    for (let i = nh; i < numGlyphs; i++) lsb.push(fl & 2 ? xMins[i] : h.i16());
    const b = Buffer.alloc(nh * 4 + (numGlyphs - nh) * 2); let o = 0;
    for (let i = 0; i < nh; i++) { b.writeUInt16BE(adv[i], o); b.writeInt16BE(lsb[i], o + 2); o += 4; }
    for (let i = nh; i < numGlyphs; i++) { b.writeInt16BE(lsb[i], o); o += 2; }
    out.set("hmtx", b);
  }
  return buildSfnt(flavor, out);
}

export function buildSfnt(flavor, out) {
  const tags = [...out.keys()].sort();
  const n = tags.length;
  const es = Math.floor(Math.log2(n)); const sr = 16 * 2 ** es;
  const header = Buffer.alloc(12 + 16 * n);
  header.writeUInt32BE(flavor >>> 0, 0); header.writeUInt16BE(n, 4); header.writeUInt16BE(sr, 6); header.writeUInt16BE(es, 8); header.writeUInt16BE(16 * n - sr, 10);
  let offset = header.length; const bodies = [];
  tags.forEach((tag, i) => {
    const d = out.get(tag); const pad = (4 - (d.length % 4)) % 4; const padded = Buffer.concat([d, Buffer.alloc(pad)]);
    let sum = 0; for (let k = 0; k < padded.length; k += 4) sum = (sum + padded.readUInt32BE(k)) >>> 0;
    const e = 12 + 16 * i; header.write(tag, e, "latin1"); header.writeUInt32BE(sum, e + 4); header.writeUInt32BE(offset, e + 8); header.writeUInt32BE(d.length, e + 12);
    bodies.push(padded); offset += padded.length;
  });
  return Buffer.concat([header, ...bodies]);
}

export function nameOf(ttf) {
  const n = ttf.readUInt16BE(4); let name = null;
  for (let i = 0; i < n; i++) { const e = 12 + 16 * i; if (ttf.toString("latin1", e, e + 4) === "name") name = ttf.subarray(ttf.readUInt32BE(e + 8)); }
  const tags = []; for (let i = 0; i < n; i++) tags.push(ttf.toString("latin1", 12 + 16 * i, 16 + 16 * i));
  const count = name.readUInt16BE(2), so = name.readUInt16BE(4); const res = {};
  for (let i = 0; i < count; i++) { const e = 6 + 12 * i; const pid = name.readUInt16BE(e), nid = name.readUInt16BE(e + 6), len = name.readUInt16BE(e + 8), o = name.readUInt16BE(e + 10); if (pid === 3 && [1, 2, 4].includes(nid)) res[nid] = name.subarray(so + o, so + o + len).swap16().toString("utf16le"); }
  return { ...res, tags: tags.join(",") };
}

// Exécuté directement (pas importé par instancier.mjs).
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href && process.argv[2]) {
  const ttf = woff2ToTtf(readFileSync(process.argv[2]));
  if (process.argv[3]) writeFileSync(process.argv[3], ttf);
  console.log(JSON.stringify(nameOf(ttf)));
}
