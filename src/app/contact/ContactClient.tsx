"use client";

import React, { useRef, useState, type CSSProperties } from "react";
import { ContactNumber } from "@/components/heroes-v2/entreprise/ContactNumber";
import { motion, useInView } from "motion/react";
import { track } from "@/lib/analytics/track";
import { Arrow } from "@/components/heroes-v2/entreprise/shared";
import { ClipReveal, EASE, MaskLines, Reveal, Shell } from "@/components/sections-v2/entreprise/kit";

/* Présentation « Le numéro » (sections v2 entreprise) : blanc, grand pan orange, chiffres qui
   roulent, champs à bord noir qui poussent un bloc orange au focus. Formulaire, validation,
   pot de miel, consentement et envoi inchangés. */

const C = { white: "#FFFFFF", ink: "#0E1417", mute: "#4E5862", faint: "#8C959D", line: "#E4E7EA", orange: "#E54B17", orangeText: "#C23D0F", cream: "#FFF4EC", error: "#B42318" };
const WRAP = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12";
const fieldCls = "xs-ct-field w-full px-5 py-4 text-[16px] font-medium";
const fieldStyle = { outline: "none", borderRadius: 2, ["--xs-ph" as string]: "#6B747D" } as CSSProperties;
const labelCls = "block text-[15px] font-bold";

/* Un chiffre sur son rouleau : il tourne jusqu'au bon à l'entrée dans l'écran. */
const ROLL = Array.from({ length: 20 }, (_, k) => k % 10);
function RollDigit({ d, i }: { d: number; i: number }) {
  return (
    <span className="relative inline-block overflow-hidden align-top" style={{ height: "1em", lineHeight: 1, width: "0.6em", maskImage: "linear-gradient(180deg, transparent 0%, #000 14%, #000 86%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 14%, #000 86%, transparent 100%)" }}>
      <motion.span className="absolute inset-x-0 top-0 flex flex-col items-center" variants={{ hide: { y: "0em" }, show: { y: `-${10 + d}em`, transition: { duration: 1.5 + i * 0.06, ease: [0.16, 1, 0.3, 1], delay: 0.35 + i * 0.05 } } }}>
        {ROLL.map((n, k) => (
          <span key={k} className="block" style={{ height: "1em", lineHeight: 1 }}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

const REASONS = [
  "Obtenez des conseils neutres et objectifs sur les meilleures marques (Daikin, Mitsubishi, Zephyr).",
  "Assistance pour vérifier votre admissibilité au programme Logis Vert.",
  "Support technique ou questions sur une soumission existante.",
];

const FAQ = [
  { q: "Comment fonctionne ThermoMatch ?", a: "ThermoMatch est un outil de comparaison qui analyse vos besoins (superficie, étages, isolation) pour vous recommander les 3 meilleures thermopompes pour votre situation spécifique, en calculant la puissance exacte requise." },
  { q: "Est-ce que je peux obtenir la subvention Logis Vert ?", a: "Sur chaque fiche, Thermopompes À Vendre affiche le montant LogisVert officiel d'Hydro-Québec pour le jumelage exact. Toutes les marques sont traitées de la même façon, et l'installateur partenaire s'occupe des documents avec vous." },
  { q: "Combien de temps faut-il pour l'installation ?", a: "Une fois la soumission approuvée, l'installation peut généralement être effectuée en 1 à 2 semaines, selon la saison. L'installation elle-même prend généralement moins d'une journée." },
];

export default function ContactPageClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "question", message: "", consent: false, website: "" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setForm({ ...form, [k]: e.target.value });
  // Les rouleaux du numéro partent quand la colonne (jamais découpée) entre dans l'écran.
  const colRef = useRef<HTMLDivElement>(null);
  const phoneSeen = useInView(colRef, { once: true, amount: 0.25 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); setError("");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Envoi impossible.");
      track("contact_submitted", { subject: form.subject });
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Envoi impossible. Appelez-nous au 438-900-3224.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const dtCls = "xs-mono text-[11px] uppercase";
  const dtStyle: CSSProperties = { letterSpacing: "0.16em", color: "rgba(255,244,236,0.82)" };

  return (
    <main className="min-h-screen" style={{ background: C.white }}>
      {/* HÉROS « Le numéro » : src/components/heroes-v2/entreprise/ContactNumber.tsx */}
      <ContactNumber />

      <Shell style={{ background: C.white, color: C.ink }}>
        {/* ── COORDONNÉES ET MESSAGE ── */}
        <section className="relative">
          <div className={`${WRAP} grid grid-cols-1 gap-14 py-[clamp(72px,8vw,130px)] lg:grid-cols-12 lg:gap-16`}>
            {/* Gauche : le pan orange des coordonnées, puis les raisons */}
            <div ref={colRef} className="lg:col-span-5">
              <div className="flex flex-col gap-12 lg:sticky lg:top-[120px]">
                <ClipReveal className="relative -mx-5 px-5 pb-9 pt-8 sm:mx-0 sm:rounded-tl-[36px] sm:px-9 sm:pb-10 sm:pt-10" style={{ background: C.orange, color: C.cream }} from="inset(0% 0% 0% 100%)" duration={1.1}>
                  <h2 className="text-[34px] font-bold sm:text-[40px]" style={{ letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>
                    Coordonnées
                  </h2>
                  <dl style={{ margin: "28px 0 0" }}>
                    <div className="py-5" style={{ borderTop: "1px solid rgba(255,244,236,0.38)" }}>
                      <dt className={dtCls} style={dtStyle}>Téléphone</dt>
                      <dd style={{ margin: "10px 0 0" }}>
                        <a href="tel:4389003224" className="xs-ring block w-fit" style={{ color: C.cream }} aria-label="438-900-3224">
                          {/* L'observateur est sur la ligne entière : chaque rouleau, plus haut que sa fenêtre, ne serait jamais « visible ». */}
                          <motion.span aria-hidden="true" className="block whitespace-nowrap font-bold" style={{ fontSize: "clamp(40px, 4.2vw, 62px)", letterSpacing: "-0.04em", lineHeight: 0.95, fontVariantNumeric: "tabular-nums" }} initial="hide" animate={phoneSeen ? "show" : "hide"}>
                            {"438-900-3224".split("").map((ch, i) =>
                              ch === "-" ? (
                                <span key={i} className="inline-block text-center" style={{ color: C.ink, width: "0.46em" }}>
                                  -
                                </span>
                              ) : (
                                <RollDigit key={i} d={Number(ch)} i={i} />
                              ),
                            )}
                          </motion.span>
                        </a>
                      </dd>
                    </div>
                    <div className="py-5" style={{ borderTop: "1px solid rgba(255,244,236,0.38)" }}>
                      <dt className={dtCls} style={dtStyle}>Courriel</dt>
                      <dd style={{ margin: "8px 0 0" }}>
                        <a href="mailto:info@thermopompesavendre.ca" className="xs-under-on xs-ring break-all pb-0.5 text-[18px] font-bold sm:text-[20px]" style={{ color: C.cream }}>
                          info@thermopompesavendre.ca
                        </a>
                      </dd>
                    </div>
                    <div className="grid grid-cols-2 gap-6 pt-5" style={{ borderTop: "1px solid rgba(255,244,236,0.38)" }}>
                      <div>
                        <dt className={dtCls} style={dtStyle}>Heures d&apos;ouverture</dt>
                        <dd style={{ margin: "8px 0 0" }}>
                          <span className="block text-[16px] font-bold">Lundi au Vendredi</span>
                          <span className="block text-[15px]" style={{ color: "rgba(255,244,236,0.88)" }}>8h00 à 18h00</span>
                        </dd>
                      </div>
                      <div>
                        <dt className={dtCls} style={dtStyle}>Zone de service</dt>
                        <dd style={{ margin: "8px 0 0" }}>
                          <span className="block text-[16px] font-bold">Partout au Québec</span>
                          <span className="block text-[15px]" style={{ color: "rgba(255,244,236,0.88)" }}>Grand Montréal, Québec, et plus.</span>
                        </dd>
                      </div>
                    </div>
                  </dl>
                </ClipReveal>

                <Reveal delay={0.1}>
                  <h3 className="text-[24px] font-bold" style={{ letterSpacing: "-0.03em", margin: 0 }}>
                    Pourquoi nous contacter&nbsp;?
                  </h3>
                  <ul style={{ listStyle: "none", margin: "18px 0 0", padding: 0 }}>
                    {REASONS.map((r, i) => (
                      <motion.li key={r} className="grid grid-cols-[40px_minmax(0,1fr)] items-start gap-4 py-4" style={{ borderTop: `2px solid ${C.ink}` }} initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.1 }}>
                        <span aria-hidden="true" className="xs-mono flex h-[40px] w-[40px] items-center justify-center text-[13px] font-semibold" style={{ background: C.ink, color: C.cream }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="pt-1.5 text-[15.5px] font-medium leading-relaxed" style={{ color: C.ink }}>
                          {r}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>

            {/* Droite : le formulaire */}
            <div id="message" style={{ scrollMarginTop: 110 }} className="min-w-0 lg:col-span-7">
              {submitted ? (
                <div className="py-6 sm:py-10">
                  <motion.div className="flex h-[96px] w-[96px] items-center justify-center" style={{ background: C.orange }} initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: "spring", stiffness: 180, damping: 16 }}>
                    <svg aria-hidden="true" viewBox="0 0 48 48" className="h-12 w-12" fill="none" stroke={C.cream} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round">
                      <motion.path d="M11 25 L20 34 L38 14" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }} />
                    </svg>
                  </motion.div>
                  <h3 className="mt-8" style={{ fontSize: "clamp(40px, 4.4vw, 72px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 0.98, margin: "32px 0 0" }}>
                    Message envoyé&nbsp;!
                  </h3>
                  <p className="max-w-[560px] text-[18px] leading-[1.6]" style={{ color: C.mute, margin: "18px 0 0" }}>
                    Merci de nous avoir contactés. L&apos;un de nos conseillers vous répondra par courriel ou par téléphone dans les plus brefs délais (généralement en moins de 24h ouvrables).
                  </p>
                  <button onClick={() => setSubmitted(false)} className="xs-ring-orange mt-8 inline-flex items-center gap-3 border-b-2 pb-1 text-[16px] font-bold transition-colors hover:text-[#0E1417]" style={{ color: C.orangeText, borderColor: C.orange }}>
                    Envoyer un autre message <Arrow className="xs-arrow" size={16} />
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-12">
                    <h2 style={{ fontSize: "clamp(40px, 4.6vw, 80px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.95, margin: 0 }}>
                      <MaskLines
                        lines={[
                          "Envoyez-nous",
                          <span key="b" className="relative inline-block px-[0.12em]" style={{ color: C.cream }}>
                            <motion.span aria-hidden="true" className="absolute inset-0 -z-0 block origin-left" style={{ background: C.orange }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE, delay: 0.45 }} />
                            <span className="relative">un message</span>
                          </span>,
                        ]}
                      />
                    </h2>
                    <Reveal delay={0.2}>
                      <p className="max-w-[520px] text-[17px] font-medium" style={{ color: C.mute, margin: "22px 0 0" }}>
                        Remplissez le formulaire ci-dessous et nous vous contacterons rapidement.
                      </p>
                    </Reveal>
                  </div>

                  <motion.form onSubmit={handleSubmit} className="space-y-7" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.9, ease: EASE }}>
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
                      <div className="space-y-2.5">
                        <label htmlFor="ct-prenom" className={labelCls}>Prénom</label>
                        <input id="ct-prenom" required type="text" placeholder="Jean" autoComplete="given-name" value={form.firstName} onChange={set("firstName")} className={fieldCls} style={fieldStyle} />
                      </div>
                      <div className="space-y-2.5">
                        <label htmlFor="ct-nom" className={labelCls}>Nom</label>
                        <input id="ct-nom" type="text" placeholder="Tremblay" autoComplete="family-name" value={form.lastName} onChange={set("lastName")} className={fieldCls} style={fieldStyle} />
                      </div>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="ct-courriel" className={labelCls}>Courriel</label>
                      <input id="ct-courriel" required type="email" placeholder="jean.tremblay@exemple.com" autoComplete="email" value={form.email} onChange={set("email")} className={fieldCls} style={fieldStyle} />
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="ct-sujet" className={labelCls}>Sujet</label>
                      <select id="ct-sujet" value={form.subject} onChange={set("subject")} className={`${fieldCls} cursor-pointer`} style={fieldStyle}>
                        <option value="question">Question générale</option>
                        <option value="soumission">Demande d&apos;information sur une soumission</option>
                        <option value="subvention">Information sur les subventions (Logis Vert)</option>
                        <option value="support">Support après-vente</option>
                      </select>
                    </div>

                    <div className="space-y-2.5">
                      <label htmlFor="ct-message" className={labelCls}>Message</label>
                      <textarea id="ct-message" required rows={5} placeholder="Comment pouvons-nous vous aider ?" value={form.message} onChange={set("message")} className={`${fieldCls} resize-none`} style={fieldStyle} />
                    </div>

                    <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                      <label>Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
                    </div>
                    <label className="flex cursor-pointer items-start gap-3.5 text-[14.5px] font-medium leading-relaxed" style={{ color: C.mute }}>
                      <input
                        type="checkbox"
                        required
                        checked={form.consent}
                        onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                        className="xs-check-orange mt-0.5 shrink-0"
                      />
                      <span>
                        J&apos;autorise Thermopompes À Vendre.ca à traiter mes renseignements pour répondre à mon message, conformément à la{" "}
                        <a href="/confidentialite" target="_blank" rel="noopener" className="font-semibold underline" style={{ color: C.ink }}>politique de confidentialité</a>. Rien n&apos;est vendu à des tiers.
                      </span>
                    </label>
                    {error && <p role="alert" className="text-[15px] font-semibold" style={{ color: C.error, margin: 0, padding: "12px 16px", background: "#FDF1EF", borderLeft: `4px solid ${C.error}` }}>{error}</p>}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="xs-ring-dark group relative flex h-[76px] w-full items-center justify-between overflow-hidden px-7 text-[18px] font-bold text-white sm:px-9 sm:text-[20px]"
                      style={{ background: isSubmitting ? "#6B747D" : C.orange, cursor: isSubmitting ? "not-allowed" : "pointer", letterSpacing: "-0.01em" }}
                    >
                      <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: C.ink, transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} />
                      {isSubmitting ? (
                        <span className="relative mx-auto block h-7 w-7 animate-spin rounded-full border-[3px] border-white/30 border-t-white" />
                      ) : (
                        <>
                          <span className="relative">Envoyer le message</span>
                          <Arrow className="xs-arrow relative" size={24} />
                        </>
                      )}
                    </button>
                    <p className="text-[14px] font-medium" style={{ color: C.mute, margin: "18px 0 0" }}>
                      Réponse en moins de 24 h ouvrables. Pour un projet précis, <a href="/soumission" className="font-semibold underline" style={{ color: C.ink }}>demandez plutôt une soumission</a>.
                    </p>
                  </motion.form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* ── QUESTIONS FRÉQUENTES ── */}
        <section className="relative" style={{ background: C.white, borderTop: `2px solid ${C.ink}` }}>
          <div className={`${WRAP} grid gap-12 py-[clamp(72px,8vw,130px)] lg:grid-cols-12 lg:gap-16`}>
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[120px]">
                <h2 style={{ fontSize: "clamp(40px, 4vw, 68px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.95, margin: 0 }}>
                  <MaskLines lines={["Questions", "fréquentes"]} lineStyle={(i) => (i === 1 ? { color: C.orange } : undefined)} />
                </h2>
                <Reveal delay={0.15}>
                  <p className="text-[17px] font-medium" style={{ color: C.mute, margin: "20px 0 0" }}>
                    Trouvez des réponses rapides à vos questions.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              {FAQ.map((f, i) => (
                <motion.article key={f.q} className="grid grid-cols-[56px_minmax(0,1fr)] gap-5 py-8 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-8" style={{ borderTop: i ? `1px solid ${C.line}` : "none" }} initial="hide" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
                  <motion.span aria-hidden="true" className="flex h-[56px] w-[56px] items-center justify-center text-[22px] font-bold sm:h-[72px] sm:w-[72px] sm:text-[28px]" style={{ background: C.orange, color: C.cream, letterSpacing: "-0.04em", transformOrigin: "0% 100%" }} variants={{ hide: { scale: 0, rotate: -10 }, show: { scale: 1, rotate: 0, transition: { type: "spring", stiffness: 200, damping: 18 } } }}>
                    {String(i + 1).padStart(2, "0")}
                  </motion.span>
                  <motion.div variants={{ hide: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE, delay: 0.12 } } }}>
                    <h3 className="text-[21px] font-bold sm:text-[26px]" style={{ letterSpacing: "-0.03em", lineHeight: 1.15, margin: 0 }}>
                      {f.q.replace(" ?", " ?")}
                    </h3>
                    <p className="text-[16px] font-medium leading-[1.7]" style={{ color: C.mute, margin: "12px 0 0" }}>
                      {f.a}
                    </p>
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </Shell>
    </main>
  );
}
