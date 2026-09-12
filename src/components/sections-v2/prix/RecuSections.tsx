import type { ReactNode } from "react";
import { DISPLAY, MONO, RECU, barcode } from "./tokens";
import { Feed, Print, Reveal, Stamp } from "./kit";

/* ==================================================================
   /prix — sections sous le héros « Le reçu ».
   Papier #FAF8F3, encre #1B1B1B, IBM Plex Mono. Les fourchettes
   deviennent des listings sur papier à entraînement (trous, bandes,
   bord déchiré), les sources un relevé de caisse tamponné. Composants
   serveur : seules les révélations (kit) tournent au client.
   ================================================================== */

const { paper: PAPER, sheet: SHEET, ink: INK, mute: MUTE, rule: RULE } = RECU;
export const RECU_WRAP = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12";

/** Étiquette de section : petit carré d'encre, capitales mono. */
export function RecuEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className="m-0 flex items-center gap-3 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: light ? "rgba(250,248,243,0.7)" : MUTE }}>
      <span aria-hidden="true" className="inline-block h-[9px] w-[9px] shrink-0" style={{ background: light ? PAPER : INK }} />
      {children}
    </p>
  );
}

export function RecuBarcode({ seed, height = 30, color = INK }: { seed: string; height?: number; color?: string }) {
  return (
    <span aria-hidden="true" className="flex items-stretch gap-[2px]" style={{ height }}>
      {barcode(seed).map((w, i) => (
        <span key={i} style={{ width: w, background: i % 2 ? "transparent" : color }} />
      ))}
    </span>
  );
}

/** Ligne de reçu : désignation, points de conduite, valeur. */
function Leader({ k, v, strike = false }: { k: ReactNode; v?: ReactNode; strike?: boolean }) {
  return (
    <span className="flex min-w-0 items-baseline">
      <span className="min-w-0" style={strike ? { textDecoration: "line-through", textDecorationThickness: "1.5px", color: MUTE } : undefined}>
        {k}
      </span>
      {v !== undefined && (
        <>
          <span aria-hidden="true" className="mx-1.5 min-w-[10px] flex-1 translate-y-[-3px]" style={{ borderBottom: `1px dotted ${RULE}` }} />
          <span className="shrink-0 whitespace-nowrap text-right font-medium">{v}</span>
        </>
      )}
    </span>
  );
}

/* ------------------------------------------------------------------
   1. En bref : un ticket large, les montants imprimés en mono.
   ------------------------------------------------------------------ */

const AMOUNT = /(\d{1,3}(?: \d{3})* \$)/;

export function RecuBrief({ text }: { text: string }) {
  const parts = text.split(AMOUNT);
  return (
    <section aria-label="En bref" className="relative" style={{ background: PAPER }}>
      <div className={RECU_WRAP}>
        {/* Ligne de coupe entre le héros et la suite */}
        <div aria-hidden="true" className="flex items-center gap-3" style={{ color: "rgba(27,27,27,0.4)" }}>
          <span className="text-[15px]" style={{ fontFamily: MONO }}>
            ✂
          </span>
          <span className="h-0 flex-1" style={{ borderTop: `1.5px dashed ${RULE}` }} />
        </div>
        <Reveal className="relative mt-12 sm:mt-14" y={26}>
          <div style={{ filter: "drop-shadow(0 22px 26px rgba(27,27,27,0.1))" }}>
            <div className="ps2-zz grid gap-6 px-6 pb-10 pt-10 sm:px-10 lg:grid-cols-[220px_minmax(0,1fr)_auto] lg:gap-12 lg:px-14 lg:pb-12 lg:pt-12" style={{ background: SHEET }}>
              <div>
                <p className="m-0 text-[11.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em" }}>
                  En bref
                </p>
                <p className="m-0 mt-2 text-[11px] uppercase leading-[1.6]" style={{ fontFamily: MONO, letterSpacing: "0.08em", color: MUTE }}>
                  Installé · Québec
                  <br />
                  Avant LogisVert
                </p>
              </div>
              <p className="m-0 max-w-[980px]" style={{ fontFamily: DISPLAY, fontSize: "clamp(19px, 1.75vw, 26px)", lineHeight: 1.5, letterSpacing: "-0.012em", color: INK, fontWeight: 500 }}>
                {parts.map((p, i) =>
                  AMOUNT.test(p) ? (
                    <span key={i} className="whitespace-nowrap" style={{ fontFamily: MONO, fontWeight: 600, fontSize: "0.9em", letterSpacing: "-0.02em", boxShadow: `inset 0 -0.34em 0 rgba(27,27,27,0.09)` }}>
                      {p.replace(/ /g, " ")}
                    </span>
                  ) : (
                    <span key={i}>{p}</span>
                  ),
                )}
              </p>
              <div className="hidden self-end lg:block">
                <RecuBarcode seed={text.slice(0, 40)} height={44} />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   2. Fourchettes : listings sur papier à entraînement.
   ------------------------------------------------------------------ */

export type LedgerCell = { range: string; note: string; derived: boolean } | null;
export type Ledger = { key: string; title: string; head: string; tiers: string[]; rows: Array<{ label: string; cells: LedgerCell[] }> };

export function RecuLedgers({ title, intro, ledgers }: { title: string; intro: string; ledgers: Ledger[] }) {
  return (
    <section aria-labelledby="recu-fourchettes" className="relative pb-6 pt-24 sm:pt-28" style={{ background: PAPER }}>
      <div className={RECU_WRAP}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16">
          <div className="min-w-0">
            <RecuEyebrow>Grille des prix publiés</RecuEyebrow>
            <Print as="div" n={12} duration={0.75}>
              <h2 id="recu-fourchettes" className="m-0 mt-5" style={{ fontFamily: DISPLAY, fontSize: "clamp(40px, 5.4vw, 88px)", lineHeight: 0.92, letterSpacing: "-0.055em", fontWeight: 700, textWrap: "balance" }}>
                {title}
              </h2>
            </Print>
          </div>
          <Reveal delay={0.2}>
            <p className="m-0 max-w-[560px] text-[16.5px] leading-[1.7]" style={{ color: "rgba(27,27,27,0.78)" }}>
              {intro}
            </p>
          </Reveal>
        </div>

        {ledgers.map((l, li) => (
          <LedgerSheet key={l.key} ledger={l} index={li} total={ledgers.length} />
        ))}
      </div>
    </section>
  );
}

function LedgerSheet({ ledger, index, total }: { ledger: Ledger; index: number; total: number }) {
  const id = `recu-grille-${ledger.key}`;
  return (
    <article aria-labelledby={id} className="relative mt-16 sm:mt-20">
      <Reveal className="flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pb-4" style={{ borderBottom: `1.5px solid ${INK}` }}>
        <div className="min-w-0">
          <p className="m-0 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: MUTE }}>
            Listing {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <h3 id={id} className="m-0 mt-1.5" style={{ fontFamily: DISPLAY, fontSize: "clamp(22px, 2.2vw, 32px)", lineHeight: 1.1, letterSpacing: "-0.035em", fontWeight: 700 }}>
            {ledger.title}
          </h3>
        </div>
        <p className="m-0 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
          {ledger.head}
        </p>
      </Reveal>

      <Reveal className="relative mt-5" y={30} duration={1}>
        <div style={{ filter: "drop-shadow(0 20px 22px rgba(27,27,27,0.09)) drop-shadow(0 1px 1px rgba(27,27,27,0.08))" }}>
          <div className="ps2-zz-b relative grid grid-cols-[8px_minmax(0,1fr)_8px] pb-5 sm:grid-cols-[34px_minmax(0,1fr)_34px]" style={{ background: SHEET }}>
            <div aria-hidden="true" className="ps2-feed invisible sm:visible" style={{ borderRight: `1px dashed ${RULE}` }} />
            <div className="min-w-0 overflow-x-auto" style={{ fontFamily: MONO }}>
              <table className="ps2-ledger w-full min-w-[640px] border-collapse text-[13px]" style={{ fontVariantNumeric: "tabular-nums" }}>
                <thead>
                  <tr style={{ borderBottom: `1.5px dashed ${INK}` }}>
                    <th scope="col" className="sticky left-0 z-[1] px-4 pb-3 pt-5 text-left text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: MUTE, background: SHEET }}>
                      Calibre
                    </th>
                    {ledger.tiers.map((t) => (
                      <th key={t} scope="col" className="px-4 pb-3 pt-5 text-right text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.12em", color: MUTE }}>
                        {t}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {ledger.rows.map((r, ri) => (
                    <tr key={r.label} style={{ borderBottom: `1px dotted ${RULE}` }}>
                      <th scope="row" className="sticky left-0 z-[1] whitespace-nowrap px-4 py-3 text-left font-semibold">
                        <span aria-hidden="true" className="ps2-caret mr-1">
                          ▸
                        </span>
                        {r.label}
                      </th>
                      {r.cells.map((c, ci) => (
                        <td key={ci} className="px-4 py-3 text-right align-top">
                          {c ? (
                            <Print as="span" className="inline-block" delay={0.15 + ri * 0.07 + ci * 0.05} n={8} duration={0.42}>
                              <span className="block whitespace-nowrap font-medium">{c.range}</span>
                              <span className="ps2-sub mt-0.5 block text-[10.5px]" style={{ color: MUTE }}>
                                {c.derived ? (
                                  <span className="ps2-der inline-block px-1 uppercase" style={{ border: `1px solid ${RULE}`, letterSpacing: "0.08em", lineHeight: 1.5 }}>
                                    {c.note}
                                  </span>
                                ) : (
                                  c.note
                                )}
                              </span>
                            </Print>
                          ) : (
                            <span style={{ color: "rgba(27,27,27,0.3)" }}>—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div aria-hidden="true" className="flex items-center justify-between gap-4 px-4 pt-4" style={{ borderTop: `1.5px dashed ${INK}`, marginTop: -1 }}>
                <span className="whitespace-nowrap text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: MUTE }}>
                  {ledger.rows.length} lignes · installé, avant subvention
                </span>
                <span className="hidden sm:block">
                  <RecuBarcode seed={ledger.title} height={18} />
                </span>
              </div>
            </div>
            {ledger.tiers.length > 1 && <span aria-hidden="true" className="pointer-events-none absolute bottom-5 right-[8px] top-0 w-10 sm:hidden" style={{ background: "linear-gradient(90deg, rgba(255,254,251,0), #FFFEFB)" }} />}
            <div aria-hidden="true" className="ps2-feed invisible sm:visible" style={{ borderLeft: `1px dashed ${RULE}` }} />
          </div>
        </div>
      </Reveal>
    </article>
  );
}

/* ------------------------------------------------------------------
   3. Méthode et sources : un relevé de caisse épinglé, les paragraphes
   numérotés comme les articles d'un ticket.
   ------------------------------------------------------------------ */

export type MethodeStub = {
  figures: Array<[string, string]>;
  sources: string[];
  installers: string;
  excluded: string[];
  consulted: string;
};

export function RecuMethode({ title, stub, children }: { title: string; stub: MethodeStub; children: ReactNode[] }) {
  return (
    <section aria-labelledby="recu-methode" className="relative pb-24 pt-24 sm:pb-28 sm:pt-28" style={{ background: PAPER }}>
      <div className={RECU_WRAP}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,400px)_minmax(0,1fr)] lg:gap-20 xl:grid-cols-[minmax(0,430px)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="lg:sticky lg:top-[104px]">
              <RecuEyebrow>Méthode</RecuEyebrow>
              <Print as="div" n={10} duration={0.6}>
                <h2 id="recu-methode" className="m-0 mt-5" style={{ fontFamily: DISPLAY, fontSize: "clamp(38px, 4.2vw, 64px)", lineHeight: 0.94, letterSpacing: "-0.05em", fontWeight: 700 }}>
                  {title}
                </h2>
              </Print>
              <SourceStub stub={stub} />
            </div>
          </div>

          <div className="min-w-0 lg:pt-3">
            <ol className="m-0 list-none p-0">
              {children.map((p, i) => (
                <Reveal as="li" key={i} delay={0.04} className="grid grid-cols-[3.2em_minmax(0,1fr)] gap-x-3 py-6 sm:grid-cols-[4.2em_minmax(0,1fr)]" style={{ borderTop: i ? `1px dashed ${RULE}` : `1.5px solid ${INK}` }}>
                  <span aria-hidden="true" className="pt-[5px] text-[12px] font-medium" style={{ fontFamily: MONO, color: MUTE, letterSpacing: "0.04em" }}>
                    §{String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 text-[16.5px] leading-[1.75] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[1.5px] [&_a]:underline-offset-4 hover:[&_a]:decoration-[3px] [&_p]:m-0 [&_strong]:font-semibold" style={{ color: "rgba(27,27,27,0.84)" }}>
                    {p}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function SourceStub({ stub }: { stub: MethodeStub }) {
  return (
    <Feed className="relative mt-9 max-w-[400px]" duration={1.2}>
      <div aria-hidden="true" style={{ filter: "drop-shadow(0 20px 22px rgba(27,27,27,0.12))" }}>
        <div className="ps2-zz relative px-6 pb-7 pt-8 text-[11.5px] leading-[1.7] sm:px-7" style={{ background: SHEET, fontFamily: MONO, color: INK }}>
          <p className="m-0 text-center text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.16em" }}>
            Relevé des sources
          </p>
          <p className="m-0 text-center" style={{ color: MUTE }}>
            ThermopompesÀVendre.ca
          </p>
          <div className="my-3" style={{ borderTop: `1.5px dashed ${INK}` }} />
          {stub.figures.map(([k, v]) => (
            <Leader key={k} k={k} v={v} />
          ))}
          <div className="my-3" style={{ borderTop: `1px dashed ${RULE}` }} />
          <p className="m-0 font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
            Pages consultées
          </p>
          {stub.sources.map((s) => (
            <Leader key={s} k={s} v="✓" />
          ))}
          <Leader k="Installateurs québécois" v={stub.installers} />
          <div className="my-3" style={{ borderTop: `1px dashed ${RULE}` }} />
          <p className="m-0 font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
            Écartés des calculs
          </p>
          {stub.excluded.map((s) => (
            <Leader key={s} k={s} strike />
          ))}
          <div className="my-3" style={{ borderTop: `1.5px dashed ${INK}` }} />
          <div className="flex items-end justify-between gap-4 pt-1">
            <RecuBarcode seed={stub.consulted + stub.sources.join("")} height={28} />
            {/* Tampon de date */}
            <Stamp delay={0.9} rotate={-10} className="-mb-1 mr-1 shrink-0 px-3 py-1.5 text-center" style={{ color: "#1B1B1B" }}>
              <span className="block text-[9px] uppercase" style={{ letterSpacing: "0.22em" }}>
                Consultées le
              </span>
              <span className="block whitespace-nowrap text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
                {stub.consulted}
              </span>
            </Stamp>
          </div>
        </div>
      </div>
    </Feed>
  );
}
