/* ==================================================================
   Équivalent thémé de FaqBlock (SeoBlocks) : mêmes questions, mêmes
   réponses, même JSON-LD FAQPage. Composant serveur, <details> natif
   (hauteur animée en CSS, .cs-details), trois directions artistiques :
   - article : encre, numéros italiques dans la teinte de la rubrique ;
   - line    : crème et sarcelle, chaque question est un arrêt sur la ligne ;
   - frost   : marine et bleu givre, capitales de carte.
   ================================================================== */

import type { CSSProperties } from "react";
import { JsonLd, type FaqItem } from "@/components/seo/SeoBlocks";
import { getFaqPageSchema } from "@/lib/seo";
import { typo } from "@/components/content-hero/typo";
import "./sections.css";

type Variant = "article" | "line" | "frost";

const pad = (n: number) => String(n).padStart(2, "0");
const SERIF = "var(--font-serif, var(--font-fraunces, Georgia)), Georgia, serif";

export function ThemedFaq({
  items,
  title = "Questions fréquentes",
  variant,
  accent = "#111417",
}: {
  items: FaqItem[];
  title?: string;
  variant: Variant;
  accent?: string;
}) {
  if (items.length === 0) return null;

  const v = {
    article: {
      bg: "#FFFFFF",
      ink: "#111417",
      mute: "#4A525A",
      line: "rgba(17,20,23,0.14)",
      num: accent,
      h2: {
        fontFamily: SERIF,
        fontWeight: 400,
        fontSize: "clamp(38px, 4.4vw, 64px)",
        lineHeight: 1,
        letterSpacing: "-0.015em",
      } as CSSProperties,
      q: { fontFamily: SERIF, fontSize: "clamp(20px, 1.7vw, 24px)", lineHeight: 1.2, fontWeight: 400 } as CSSProperties,
      numStyle: { fontFamily: SERIF, fontStyle: "italic", fontSize: 22, lineHeight: 1.1 } as CSSProperties,
      cls: "gas-faq",
      qCls: "gas-faq-q",
    },
    line: {
      bg: "#F4EFE7",
      ink: "#0E3B43",
      mute: "rgba(14,59,67,0.74)",
      line: "rgba(14,59,67,0.16)",
      num: "#C4501C",
      h2: {
        fontFamily: "var(--font-display), var(--font-sans), sans-serif",
        fontWeight: 300,
        fontSize: "clamp(36px, 4.2vw, 64px)",
        lineHeight: 1,
        letterSpacing: "-0.045em",
      } as CSSProperties,
      q: { fontSize: "clamp(18px, 1.5vw, 21px)", lineHeight: 1.3, fontWeight: 500, letterSpacing: "-0.015em" } as CSSProperties,
      numStyle: { fontSize: 12, fontWeight: 600, letterSpacing: "0.18em", paddingTop: 5 } as CSSProperties,
      cls: "lns-faq",
      qCls: "lns-faq-q",
    },
    frost: {
      bg: "linear-gradient(180deg, #FFFFFF 0%, #EEF5F9 100%)",
      ink: "#0B2540",
      mute: "rgba(11,37,64,0.72)",
      line: "rgba(11,37,64,0.14)",
      num: "#1F5F8B",
      h2: {
        fontFamily: "var(--font-display), var(--font-sans), sans-serif",
        fontWeight: 650,
        fontSize: "clamp(30px, 3.4vw, 52px)",
        lineHeight: 0.96,
        letterSpacing: "-0.03em",
        textTransform: "uppercase",
      } as CSSProperties,
      q: { fontSize: "clamp(17px, 1.3vw, 19px)", lineHeight: 1.35, fontWeight: 600, letterSpacing: "-0.01em" } as CSSProperties,
      numStyle: { fontSize: 12, fontWeight: 600, letterSpacing: "0.14em", paddingTop: 4 } as CSSProperties,
      cls: "frs-faq",
      qCls: "frs-faq-q",
    },
  }[variant];

  return (
    <section
      className={`${v.cls} relative`}
      style={{ background: v.bg, color: v.ink, fontFamily: "var(--font-display), var(--font-sans), sans-serif" }}
    >
      <JsonLd data={getFaqPageSchema(items)} />
      <div className="mx-auto grid max-w-[1240px] gap-10 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-12 lg:py-24">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[120px]">
            <span aria-hidden="true" className="block h-[3px] w-14" style={{ background: v.num }} />
            <h2 style={{ ...v.h2, margin: "22px 0 0", textWrap: "balance" }}>{typo(title)}</h2>
            <p className="tabular-nums text-[13px]" style={{ color: v.mute, margin: "16px 0 0" }}>
              {items.length} question{items.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>
        <div className="relative lg:col-span-8" style={{ borderTop: `1px solid ${v.ink}` }}>
          {variant === "line" ? (
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-[5px] top-0 w-px"
              style={{ background: v.line }}
            />
          ) : null}
          {items.map((f, i) => (
            <details
              key={f.question}
              className="cs-details cs-row group"
              style={{ borderBottom: `1px solid ${v.line}` }}
            >
              <summary className="flex items-start gap-4 py-6 sm:gap-6">
                {variant === "line" ? (
                  <span
                    aria-hidden="true"
                    className="relative mt-[7px] block h-[11px] w-[11px] shrink-0 rounded-full transition-colors duration-500 group-open:bg-[#F26A2E]"
                    style={{ border: `1.5px solid ${v.ink}`, background: "#F4EFE7" }}
                  />
                ) : null}
                <span
                  aria-hidden="true"
                  className="w-8 shrink-0 tabular-nums"
                  style={{ ...v.numStyle, color: v.num }}
                >
                  {pad(i + 1)}
                </span>
                <span className={`${v.qCls} min-w-0 flex-1 transition-colors duration-300`} style={v.q}>
                  {typo(f.question)}
                </span>
                <span className="cs-plus mt-[7px]" aria-hidden="true" style={{ color: v.num }} />
              </summary>
              <p
                className="pb-7 text-[16px] leading-[1.68] sm:text-[16.5px]"
                style={{
                  color: v.mute,
                  margin: 0,
                  maxWidth: "62ch",
                  paddingLeft: variant === "line" ? 83 : 56,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {typo(f.answer)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
