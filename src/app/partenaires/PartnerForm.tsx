"use client";

import { useState, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { track } from "@/lib/analytics/track";

/* Présentation « dossier » (sections v2 entreprise) : feuille glacier, rubriques à onglets,
   lignes tapées à la machine. Champs, noms, validation, pot de miel et envoi inchangés. */

const T = { ink: "#1F3A5F", mute: "rgba(31,58,95,0.74)", line: "rgba(31,58,95,0.18)", orange: "#E54B17", ice: "#EEF3F8", error: "#B42318" };
const EASE = [0.22, 1, 0.36, 1] as const;

const field = "xs-pf-field xs-mono w-full px-3.5 py-3 text-[16px]";
const fieldStyle: CSSProperties = { outline: "none" };
const col: CSSProperties = { display: "flex", flexDirection: "column", gap: 8, minWidth: 0 };

function Label({ htmlFor, n, children }: { htmlFor: string; n: number; children: ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex items-baseline gap-2.5 text-[14.5px] font-semibold" style={{ color: T.ink }}>
      <span aria-hidden="true" className="xs-mono text-[11px] font-medium" style={{ color: T.orange, letterSpacing: "0.08em" }}>
        {String(n).padStart(2, "0")}
      </span>
      <span>{children}</span>
    </label>
  );
}

function Rubrique({ n, title, children, delay = 0 }: { n: string; title: string; children: ReactNode; delay?: number }) {
  return (
    <motion.fieldset style={{ border: 0, padding: 0, margin: 0, minWidth: 0 }} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.8, ease: EASE, delay }}>
      <legend className="float-left mb-5 flex w-full items-center gap-3 p-0">
        <span className="xs-mono inline-flex shrink-0 items-center gap-2 rounded-t-[8px] px-3 py-1.5 text-[10.5px] uppercase" style={{ background: T.ink, color: T.ice, letterSpacing: "0.16em" }}>
          <span aria-hidden="true" style={{ color: "#FF9B78" }}>
            {n}
          </span>
          {title}
        </span>
        <motion.span aria-hidden="true" className="block h-px flex-1 origin-left" style={{ background: T.line }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.1, ease: EASE, delay: delay + 0.2 }} />
      </legend>
      <div className="clear-both grid gap-x-6 gap-y-5 sm:grid-cols-2">{children}</div>
    </motion.fieldset>
  );
}

export function PartnerForm() {
  const [form, setForm] = useState({ company: "", rbq: "", contact: "", phone: "", email: "", region: "", brands: "", volume: "Moins de 50", website: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending"); setError("");
    try {
      const res = await fetch("/api/partenaires", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Envoi impossible.");
      track("partner_submitted", { volume: form.volume });
      setStatus("sent");
    } catch (err) {
      setStatus("error"); setError(err instanceof Error ? err.message : "Envoi impossible.");
    }
  }

  if (status === "sent") {
    return (
      <div className="relative py-10 text-center sm:py-14">
        <motion.p
          className="xs-mono mx-auto inline-block px-5 py-2.5 text-[18px] font-semibold uppercase sm:text-[22px]"
          style={{ color: T.orange, border: `2.5px solid ${T.orange}`, borderRadius: 6, letterSpacing: "0.14em", margin: "0 0 22px", rotate: -6, mixBlendMode: "multiply" }}
          initial={{ opacity: 0, scale: 1.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: [0.5, 0, 0.75, 0], delay: 0.15 }}
        >
          Candidature reçue
        </motion.p>
        <motion.p className="mx-auto max-w-[460px] text-[16px] leading-[1.65]" style={{ color: T.mute, margin: "0 auto" }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 0.5 }}>
          Merci. Nous vérifions la licence RBQ et revenons vers vous sous quelques jours ouvrables pour planifier une première rencontre.
        </motion.p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 34 }}>
      <Rubrique n="01" title="Entreprise">
        <div style={col}><Label htmlFor="pf-company" n={1}>Nom de l&apos;entreprise</Label><input id="pf-company" required type="text" autoComplete="organization" className={field} style={fieldStyle} value={form.company} onChange={set("company")} /></div>
        <div style={col}><Label htmlFor="pf-rbq" n={2}>Numéro RBQ</Label><input id="pf-rbq" required type="text" className={field} style={fieldStyle} value={form.rbq} onChange={set("rbq")} /></div>
      </Rubrique>
      <Rubrique n="02" title="Contact" delay={0.05}>
        <div style={col}><Label htmlFor="pf-contact" n={3}>Personne contact</Label><input id="pf-contact" required type="text" autoComplete="name" className={field} style={fieldStyle} value={form.contact} onChange={set("contact")} /></div>
        <div style={col}><Label htmlFor="pf-phone" n={4}>Téléphone</Label><input id="pf-phone" required type="tel" inputMode="tel" autoComplete="tel" className={field} style={fieldStyle} value={form.phone} onChange={set("phone")} /></div>
        <div style={col} className="sm:col-span-2"><Label htmlFor="pf-email" n={5}>Courriel</Label><input id="pf-email" required type="email" autoComplete="email" className={field} style={fieldStyle} value={form.email} onChange={set("email")} /></div>
      </Rubrique>
      <Rubrique n="03" title="Activité" delay={0.1}>
        <div style={col}><Label htmlFor="pf-region" n={6}>Région desservie</Label><input id="pf-region" type="text" placeholder="ex. Montérégie, Estrie" className={field} style={{ ...fieldStyle, ["--xs-ph" as string]: "rgba(31,58,95,0.5)" } as CSSProperties} value={form.region} onChange={set("region")} /></div>
        <div style={col}>
          <Label htmlFor="pf-volume" n={7}>Volume approximatif annuel (installations)</Label>
          <select id="pf-volume" className={`${field} cursor-pointer`} style={fieldStyle} value={form.volume} onChange={set("volume")}>
            <option>Moins de 50</option><option>50 à 150</option><option>150 à 500</option><option>Plus de 500</option>
          </select>
        </div>
        <div style={col} className="sm:col-span-2"><Label htmlFor="pf-brands" n={8}>Quelles marques installez-vous principalement?</Label><input id="pf-brands" type="text" placeholder="ex. Daikin, Fujitsu, Mitsubishi" className={field} style={{ ...fieldStyle, ["--xs-ph" as string]: "rgba(31,58,95,0.5)" } as CSSProperties} value={form.brands} onChange={set("brands")} /></div>
      </Rubrique>
      <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
        <label>Site web <input type="text" name="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={set("website")} /></label>
      </div>
      {error && <p role="alert" className="text-[14.5px] font-semibold" style={{ color: T.error, margin: 0, padding: "12px 14px", background: "#FDF1EF", borderLeft: `3px solid ${T.error}` }}>{error}</p>}
      <div>
        <button type="submit" disabled={status === "sending"} className="xs-ring-dark group relative flex h-[60px] w-full items-center justify-between overflow-hidden px-6 text-[15.5px] font-semibold text-white" style={{ backgroundColor: T.ink, border: "none", borderRadius: 6, cursor: status === "sending" ? "wait" : "pointer", opacity: status === "sending" ? 0.75 : 1 }}>
          <span aria-hidden="true" className="absolute inset-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" style={{ background: T.orange, transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }} />
          <span className="relative">{status === "sending" ? "Envoi…" : "Envoyer la candidature"}</span>
          <svg aria-hidden="true" className="xs-arrow relative" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
        </button>
        <p className="xs-mono text-center text-[11.5px]" style={{ color: T.mute, margin: "14px 0 0", letterSpacing: "0.02em" }}>Vos informations restent confidentielles et servent uniquement à évaluer votre candidature.</p>
      </div>
    </form>
  );
}
