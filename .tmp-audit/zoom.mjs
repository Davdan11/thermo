/** Zoom : assemble en grande taille une liste d'images données en argument. */
import sharp from "sharp";
import path from "node:path";
const S = "/private/tmp/claude-501/-Users-daviddanjou-Desktop-thermo/4454ed51-38ad-4320-b2ee-02abad86f7ad/scratchpad";
const ROOT = "/Users/daviddanjou/Desktop/thermo/.claude/worktrees/agent-a742cdb5bb7c18b3d/public";
const out = process.argv[2];
const files = process.argv.slice(3);
const COLS = 3, W = 520, H = 400, LABEL = 26;
const cellH = H + LABEL;
const rows = Math.ceil(files.length / COLS);
const comp = [];
for (let i = 0; i < files.length; i++) {
  const x = (i % COLS) * W, y = Math.floor(i / COLS) * cellH;
  const thumb = await sharp(path.join(ROOT, files[i])).resize(W - 8, H - 8, { fit: "inside", background: "#fff" }).png().toBuffer();
  const meta = await sharp(thumb).metadata();
  comp.push({ input: thumb, left: x + 4 + Math.floor((W - 8 - meta.width) / 2), top: y + 4 + Math.floor((H - 8 - meta.height) / 2) });
  comp.push({ input: Buffer.from(`<svg width="${W}" height="${LABEL}"><rect width="100%" height="100%" fill="#0C1821"/><text x="4" y="18" font-family="Arial" font-size="14" fill="#fff">${path.basename(files[i]).slice(0, 48)}</text></svg>`), left: x, top: y + H });
}
await sharp({ create: { width: COLS * W, height: rows * cellH, channels: 3, background: "#e5e5e5" } }).composite(comp).png().toFile(`${S}/${out}.png`);
console.log("ok", files.length);
