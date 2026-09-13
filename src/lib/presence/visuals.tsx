/* ==================================================================
   Mise en page des visuels (Satori, via ImageResponse de next/og).
   Carrousel 1080 × 1350 et story 1080 × 1920, couleurs du site
   (pétrole #174B60, cuivre #C66E42), typographie sobre, beaucoup d'air.
   Seulement flexbox et positions absolues (limites de Satori).
   Aucune image générée : la seule photo est celle du fabricant, avec
   « Photo représentative » quand l'URL contient /representatives/.
   ================================================================== */

import type { Slide, SlidePhoto, VisualFormat } from "./types";
import { MINUS, NBSP } from "./format";

export const SIZES: Record<VisualFormat, { width: number; height: number }> = {
  carrousel: { width: 1080, height: 1350 },
  story: { width: 1080, height: 1920 },
};

const C = {
  petrol: "#174B60",
  petrolDeep: "#0E3242",
  ink: "#10222B",
  paper: "#F4F2ED",
  card: "#FFFFFF",
  muted: "#5B6B73",
  line: "rgba(16, 34, 43, 0.12)",
  copper: "#C66E42",
  copperSoft: "#F2E2D7",
  onDark: "#FFFFFF",
  onDarkMuted: "rgba(255, 255, 255, 0.72)",
  onDarkLine: "rgba(255, 255, 255, 0.16)",
};

export interface SlideFrameProps {
  slide: Slide;
  format: VisualFormat;
  index: number;
  total: number;
  footnote: string;
  /** Photos déjà converties en data URI PNG, par chemin public. */
  photos: Record<string, string>;
  fontFamily: string;
}

const dark = (s: Slide) => s.kind === "cover" || s.kind === "temp" || s.kind === "cta";

/** Taille de police qui garde un titre sur deux ou trois lignes. */
function fit(text: string, base: number, comfortable: number): number {
  const n = text.length;
  if (n <= comfortable) return base;
  return Math.max(Math.round(base * 0.52), Math.round(base * Math.sqrt(comfortable / n)));
}

function Photo({ photo, uri, w, h, onDark }: { photo: SlidePhoto; uri: string | undefined; w: number; h: number; onDark: boolean }) {
  if (!uri) return null;
  return (
    <div style={{ display: "flex", position: "relative", width: w, height: h, borderRadius: 36, background: C.card, alignItems: "center", justifyContent: "center", boxShadow: onDark ? "0 40px 80px rgba(0,0,0,0.28)" : "0 30px 60px rgba(16,34,43,0.12)" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={uri} width={w - 96} height={h - 96} style={{ objectFit: "contain" }} alt="" />
      {photo.representative ? (
        <div style={{ display: "flex", position: "absolute", left: 24, bottom: 20, fontSize: 22, color: C.muted, letterSpacing: 1 }}>Photo représentative</div>
      ) : null}
    </div>
  );
}

function Header({ eyebrow, index, total, onDark }: { eyebrow: string; index: number; total: number; onDark: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 24, letterSpacing: 4, color: onDark ? C.onDarkMuted : C.muted }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ display: "flex", width: 14, height: 14, borderRadius: 7, background: C.copper }} />
          <div style={{ display: "flex" }}>THERMOPOMPES À VENDRE</div>
        </div>
        {total > 1 ? <div style={{ display: "flex", letterSpacing: 2 }}>{`${index + 1} / ${total}`}</div> : <div style={{ display: "flex" }} />}
      </div>
      <div style={{ display: "flex", fontSize: 30, letterSpacing: 1, color: C.copper }}>{eyebrow}</div>
    </div>
  );
}

function Footer({ footnote, onDark }: { footnote: string; onDark: boolean }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 40, paddingTop: 26, borderTop: `2px solid ${onDark ? C.onDarkLine : C.line}`, fontSize: 21, lineHeight: 1.35, color: onDark ? C.onDarkMuted : C.muted }}>
      <div style={{ display: "flex", maxWidth: 700 }}>{footnote}</div>
      <div style={{ display: "flex", color: onDark ? C.onDark : C.petrol, fontSize: 23 }}>thermopompesavendre.ca</div>
    </div>
  );
}

function Rings({ color, right, top, size }: { color: string; right: number; top: number; size: number }) {
  return (
    <div style={{ display: "flex", position: "absolute", right, top, width: size, height: size }}>
      {[1, 0.74, 0.48].map((k) => (
        <div
          key={k}
          style={{ display: "flex", position: "absolute", left: (size * (1 - k)) / 2, top: (size * (1 - k)) / 2, width: size * k, height: size * k, borderRadius: size, border: `2px solid ${color}` }}
        />
      ))}
    </div>
  );
}

function Body({ slide, photos, story }: { slide: Slide; photos: Record<string, string>; story: boolean }) {
  switch (slide.kind) {
    case "cover": {
      const uri = slide.photo ? photos[slide.photo.path] : undefined;
      const hasPhoto = !!(slide.photo && uri);
      return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: hasPhoto ? "space-between" : "center", gap: 40, paddingTop: 40, paddingBottom: 40 }}>
          {hasPhoto ? (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Photo photo={slide.photo as SlidePhoto} uri={uri} w={920} h={story ? 880 : 640} onDark />
            </div>
          ) : null}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {slide.kicker ? <div style={{ display: "flex", fontSize: 34, letterSpacing: 5, color: C.copper }}>{slide.kicker.toUpperCase()}</div> : null}
            <div style={{ display: "flex", fontSize: fit(slide.title, hasPhoto ? 96 : 150, hasPhoto ? 18 : 12), lineHeight: 1.02, letterSpacing: -2, color: C.onDark, maxWidth: 920 }}>{slide.title}</div>
            {slide.subtitle ? <div style={{ display: "flex", fontSize: 38, lineHeight: 1.3, color: C.onDarkMuted, maxWidth: 900 }}>{slide.subtitle}</div> : null}
            {slide.facts?.length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 10 }}>
                {slide.facts.map((f) => (
                  <div key={f} style={{ display: "flex", padding: "12px 24px", borderRadius: 40, border: `2px solid ${C.onDarkLine}`, fontSize: 28, color: C.onDark }}>
                    {f}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      );
    }
    case "big": {
      // Chiffre et unité sur une ligne s'ils tiennent, sinon l'unité passe dessous.
      const stacked = slide.value.length + slide.unit.length > 8;
      return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", gap: 34 }}>
          <div style={{ display: "flex", flexDirection: stacked ? "column" : "row", alignItems: stacked ? "flex-start" : "flex-end", gap: stacked ? 6 : 24 }}>
            <div style={{ display: "flex", fontSize: fit(slide.value, 250, 6), lineHeight: 0.92, letterSpacing: -8, color: C.petrol }}>{slide.value}</div>
            <div style={{ display: "flex", fontSize: 64, color: C.muted, paddingBottom: stacked ? 0 : 18 }}>{slide.unit}</div>
          </div>
          {slide.bar ? (
            <div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 900 }}>
              <div style={{ display: "flex", width: 900, height: 14, borderRadius: 7, background: "rgba(23,75,96,0.12)" }}>
                <div style={{ display: "flex", width: Math.round(9 * Math.max(0, Math.min(100, slide.bar.pct))), height: 14, borderRadius: 7, background: C.copper }} />
              </div>
            </div>
          ) : null}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {slide.lines.map((l, i) => (
              <div key={i} style={{ display: "flex", fontSize: i === 0 ? 44 : 36, lineHeight: 1.3, color: i === 0 ? C.ink : C.muted, maxWidth: 920 }}>
                {l}
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "rows":
      return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", gap: 36 }}>
          <div style={{ display: "flex", fontSize: fit(slide.title, 64, 30), lineHeight: 1.1, letterSpacing: -1, color: C.ink, maxWidth: 920 }}>{slide.title}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {slide.rows.map((r, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 30, padding: "26px 0", borderTop: `2px solid ${C.line}` }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, maxWidth: 560 }}>
                  <div style={{ display: "flex", fontSize: 36, color: C.ink }}>{r.label}</div>
                  {r.note ? <div style={{ display: "flex", fontSize: 25, lineHeight: 1.3, color: C.muted }}>{r.note}</div> : null}
                </div>
                <div style={{ display: "flex", fontSize: fit(r.value, 58, 11), color: C.petrol, textAlign: "right" }}>{r.value}</div>
              </div>
            ))}
          </div>
        </div>
      );
    case "compare": {
      if (slide.rows.length === 0) {
        const ph = story ? 560 : 460;
        const photo = (s: typeof slide.a) =>
          s.photo && photos[s.photo.path] ? <Photo photo={s.photo} uri={photos[s.photo.path]} w={430} h={ph} onDark={false} /> : <div style={{ display: "flex", width: 430, height: ph, borderRadius: 36, background: C.card }} />;
        const label = (s: typeof slide.a) => (
          <div style={{ display: "flex", flexDirection: "column", gap: 14, width: 430 }}>
            <div style={{ display: "flex", fontSize: 28, letterSpacing: 4, color: C.copper }}>{s.kicker.toUpperCase()}</div>
            <div style={{ display: "flex", fontSize: fit(s.title, 56, 14), lineHeight: 1.05, color: C.ink }}>{s.title}</div>
          </div>
        );
        return (
          <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", gap: 40 }}>
            <div style={{ display: "flex", justifyContent: "space-between", position: "relative" }}>
              {photo(slide.a)}
              {photo(slide.b)}
              <div style={{ display: "flex", position: "absolute", left: 416, top: ph / 2 - 44, width: 88, height: 88, borderRadius: 44, background: C.copper, color: C.onDark, fontSize: 34, alignItems: "center", justifyContent: "center", border: `6px solid ${C.paper}` }}>ou</div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              {label(slide.a)}
              {label(slide.b)}
            </div>
          </div>
        );
      }
      return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", gap: 20 }}>
          <div style={{ display: "flex", justifyContent: "flex-end", gap: 20, paddingBottom: 10 }}>
            {[slide.a, slide.b].map((s, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", width: 300, alignItems: "flex-end", gap: 6 }}>
                <div style={{ display: "flex", fontSize: 22, letterSpacing: 3, color: C.copper }}>{s.kicker.toUpperCase()}</div>
                <div style={{ display: "flex", fontSize: fit(s.title, 36, 14), color: C.ink, textAlign: "right" }}>{s.title}</div>
              </div>
            ))}
          </div>
          {slide.rows.map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, padding: "22px 0", borderTop: `2px solid ${C.line}` }}>
              <div style={{ display: "flex", flexGrow: 1, fontSize: 30, color: C.muted }}>{r.label}</div>
              <div style={{ display: "flex", width: 300, justifyContent: "flex-end", fontSize: fit(r.a, 42, 12), color: C.petrol }}>{r.a}</div>
              <div style={{ display: "flex", width: 300, justifyContent: "flex-end", fontSize: fit(r.b, 42, 12), color: C.petrol }}>{r.b}</div>
            </div>
          ))}
        </div>
      );
    }
    case "temp": {
      const ts = slide.marks.map((m) => m.t);
      const hi = Math.ceil((Math.max(...ts) + 4) / 5) * 5;
      const lo = Math.floor((Math.min(...ts) - 4) / 5) * 5;
      const H = story ? 900 : 620;
      const y = (t: number) => Math.round(((hi - t) / (hi - lo)) * H);
      const sorted = slide.marks.slice().sort((a, b) => b.t - a.t);
      // Points à leur vraie place ; étiquettes décalées au besoin pour ne jamais se chevaucher.
      const GAP = 76;
      const labelY = sorted.map((m) => y(m.t));
      for (let i = 1; i < labelY.length; i++) if (labelY[i] - labelY[i - 1] < GAP) labelY[i] = labelY[i - 1] + GAP;
      const overflow = labelY.length ? labelY[labelY.length - 1] - H : 0;
      if (overflow > 0) for (let i = 0; i < labelY.length; i++) labelY[i] -= overflow;
      const value = `${slide.value < 0 ? MINUS : ""}${Math.abs(slide.value)}`;
      return (
        <div style={{ display: "flex", flexGrow: 1, justifyContent: "space-between", alignItems: "center", gap: 40 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 560 }}>
            <div style={{ display: "flex", fontSize: fit(slide.place, 78, 12), lineHeight: 1.04, color: C.onDark }}>{slide.place}</div>
            <div style={{ display: "flex", alignItems: "flex-start", marginTop: 20 }}>
              <div style={{ display: "flex", fontSize: 230, lineHeight: 0.9, letterSpacing: -10, color: C.onDark }}>{value}</div>
              <div style={{ display: "flex", fontSize: 70, color: C.copper, paddingTop: 14 }}>{`${NBSP}°C`}</div>
            </div>
            <div style={{ display: "flex", fontSize: 36, color: C.onDarkMuted }}>{slide.label}</div>
          </div>
          <div style={{ display: "flex", position: "relative", width: 330, height: H }}>
            <div style={{ display: "flex", position: "absolute", left: 20, top: 0, width: 4, height: H, borderRadius: 2, background: C.onDarkLine }} />
            {sorted.map((m, i) => {
              const main = m.t === slide.value && m.label === "Conception";
              return (
                <div key={`d${i}`} style={{ display: "flex", position: "absolute", left: 0, top: y(m.t) - 22, width: 44, height: 44, borderRadius: 22, background: main ? C.copper : C.petrolDeep, border: `4px solid ${main ? C.copper : C.onDarkMuted}` }} />
              );
            })}
            {sorted.map((m, i) => (
              <div key={`l${i}`} style={{ display: "flex", flexDirection: "column", position: "absolute", left: 64, top: labelY[i] - 26 }}>
                <div style={{ display: "flex", fontSize: 32, color: C.onDark }}>{`${m.t < 0 ? MINUS : ""}${String(Math.abs(m.t)).replace(".", ",")}${NBSP}°C`}</div>
                <div style={{ display: "flex", fontSize: 21, color: C.onDarkMuted }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    case "text":
      return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", gap: 36 }}>
          {slide.title ? <div style={{ display: "flex", fontSize: fit(slide.title, slide.body ? 76 : 88, slide.body ? 22 : 40), lineHeight: 1.08, letterSpacing: -1.5, color: C.ink, maxWidth: 920 }}>{slide.title}</div> : null}
          {slide.body ? <div style={{ display: "flex", fontSize: fit(slide.body, 46, 150), lineHeight: 1.36, color: slide.title ? C.muted : C.ink, maxWidth: 920 }}>{slide.body}</div> : null}
        </div>
      );
    case "cta":
      return (
        <div style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center", gap: 34 }}>
          <div style={{ display: "flex", fontSize: fit(slide.title, 84, 24), lineHeight: 1.04, letterSpacing: -2, color: C.onDark, maxWidth: 920 }}>{slide.title}</div>
          <div style={{ display: "flex", fontSize: 40, lineHeight: 1.35, color: C.onDarkMuted, maxWidth: 880 }}>{slide.body}</div>
          <div style={{ display: "flex", marginTop: 20 }}>
            <div style={{ display: "flex", padding: "22px 34px", borderRadius: 60, background: C.onDark, color: C.petrol, fontSize: fit(slide.url, 32, 42) }}>{slide.url}</div>
          </div>
        </div>
      );
  }
}

export function SlideFrame({ slide, format, index, total, footnote, photos, fontFamily }: SlideFrameProps) {
  const { width, height } = SIZES[format];
  const story = format === "story";
  const onDark = dark(slide);
  const bg = slide.kind === "cta" ? `linear-gradient(160deg, ${C.petrol} 0%, ${C.petrolDeep} 100%)` : onDark ? `linear-gradient(165deg, ${C.petrolDeep} 0%, ${C.petrol} 100%)` : C.paper;
  return (
    <div
      style={{
        width,
        height,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
        padding: story ? "200px 80px 240px" : "76px 80px 64px",
        background: bg,
        color: onDark ? C.onDark : C.ink,
        fontFamily,
      }}
    >
      {onDark ? <Rings color="rgba(198,110,66,0.2)" right={-250} top={story ? -200 : -330} size={660} /> : <div style={{ display: "flex", position: "absolute", left: 0, top: 0, width: 12, height, background: C.copper }} />}
      <Header eyebrow={slide.eyebrow} index={index} total={total} onDark={onDark} />
      <Body slide={slide} photos={photos} story={story} />
      <Footer footnote={footnote} onDark={onDark} />
    </div>
  );
}
