"use client";

import Link from "next/link";
import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { encodeShareCode } from "@/lib/thermomatch/share-code";
import { RELANCES_CONSENT_TEXT } from "@/lib/relances/consent";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* « Envoyez-moi mes trois choix » : le visiteur reçoit ses recommandations par
   courriel (lead : Pipedrive, alerte à l'équipe). Le code de partage vient de
   l'adresse (lien partagé) ou des réponses gardées dans la session.
   Deuxième case, facultative et jamais cochée d'avance : deux rappels
   (J+2, J+7), désabonnement en un clic. */

const K = {
  cream: "#F4EFE7",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.16)",
  orange: "#E54B17",
  green: "#5CCB8C",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SERIF = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic" as const, fontWeight: 400 };
/* Ce que la case « rappels » déclenche, dit simplement. */
const RELANCES_STEPS = [
  { when: "Dans 2 jours", what: "vos trois choix, avec leurs chiffres à jour" },
  { when: "Dans 7 jours", what: "un rappel sur la subvention LogisVert" },
];

function currentShareCode(): string | null {
  try {
    const r = new URLSearchParams(window.location.search).get("r");
    if (r) return r;
    const raw = sessionStorage.getItem("thermomatch-answers");
    const answers = raw ? JSON.parse(raw)?.answers : null;
    return answers && typeof answers === "object" ? encodeShareCode(answers) : null;
  } catch {
    return null;
  }
}

const input =
  "h-[54px] w-full rounded-full border border-[rgba(244,239,231,0.18)] bg-[rgba(244,239,231,0.05)] px-5 text-[15px] text-[#F4EFE7] transition-colors placeholder:text-[rgba(244,239,231,0.4)] hover:border-[rgba(244,239,231,0.35)] focus-visible:border-[rgba(244,239,231,0.6)] focus-visible:shadow-[0_0_0_4px_rgba(229,75,23,0.22)]";

export function EmailMyChoices({ topLabel }: { topLabel: string }) {
  const [v, setV] = useState({ firstName: "", email: "", phone: "", consent: false, followUps: false, website: "" });
  const [planned, setPlanned] = useState(false);
  // Case « rappels » proposée seulement si les envois sont possibles (adresse postale configurée côté serveur).
  const [offer, setOffer] = useState(false);
  useEffect(() => {
    let live = true;
    fetch("/api/relances/etat")
      .then((r) => r.json())
      .then((d: { disponibles?: boolean }) => live && setOffer(d.disponibles === true))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);
  const reduce = useReduced();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const update = (k: keyof typeof v) => (e: ChangeEvent<HTMLInputElement>) => setV((s) => ({ ...s, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    const code = currentShareCode();
    if (!code) {
      setStatus("error");
      setError("Vos réponses ne sont plus disponibles dans ce navigateur. Recommencez le questionnaire.");
      return;
    }
    if (!v.consent) {
      setStatus("error");
      setError("Cochez la case de consentement pour recevoir le courriel.");
      return;
    }
    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/thermomatch/courriel", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, followUps: offer && v.followUps, code, page: window.location.pathname }) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; relances?: boolean };
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data.error ?? "Envoi impossible pour le moment. Réessayez ou appelez-nous au 438-900-3224.");
        return;
      }
      setPlanned(v.followUps && data.relances === true);
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Erreur réseau. Vérifiez votre connexion et réessayez.");
    }
  }

  return (
    <section aria-labelledby="tm-courriel" className="mx-auto mt-16 max-w-[1320px] overflow-hidden rounded-[28px] lg:mt-24" style={{ border: `1px solid ${K.line}`, color: K.cream, background: "rgba(244,239,231,0.03)" }}>
      <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:px-14 lg:py-14">
        <div>
          <p className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: K.mute, margin: 0 }}>
            <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: K.orange }} />
            Par courriel
          </p>
          <h2 id="tm-courriel" style={{ fontSize: "clamp(32px, 3.8vw, 56px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "18px 0 0" }}>
            Gardez vos trois choix, <span style={SERIF}>pour y réfléchir.</span>
          </h2>
          <ul className="mt-8 grid gap-3 text-[15px]" style={{ listStyle: "none", padding: 0, margin: "32px 0 0", color: K.mute }}>
            <li>— {topLabel} et vos deux autres choix, avec leurs chiffres par grand froid.</li>
            <li>— Le montant LogisVert officiel et un prix approximatif installé pour chacun.</li>
            <li>— Un lien qui rouvre ces recommandations, même sur un autre appareil.</li>
          </ul>
        </div>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait" initial={false}>
            {status === "sent" ? (
              <motion.div key="ok" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }} className="flex h-full flex-col justify-center" role="status">
                <p style={{ fontSize: "clamp(30px, 3vw, 44px)", fontWeight: 600, letterSpacing: "-0.04em", margin: 0 }}>
                  C’est envoyé<span style={{ color: K.green }}>.</span>
                </p>
                <p className="mt-3 max-w-[440px] text-[15px] leading-relaxed" style={{ color: K.mute }}>
                  Vos trois choix arrivent dans votre boîte de réception. S’il n’y est pas dans quelques minutes, regardez dans les courriels indésirables.
                </p>
                {planned && (
                  <p className="mt-2 max-w-[440px] text-[14px] leading-relaxed" style={{ color: K.faint }}>
                    Vous recevrez aussi deux rappels : dans 2 jours, puis dans 7 jours. Chaque courriel a un lien pour vous désabonner.
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }} className="grid gap-3" noValidate>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="grid gap-1.5 text-[12.5px]" style={{ color: K.faint }}>
                    Prénom
                    <input className={input} style={{ outline: "none" }} value={v.firstName} onChange={update("firstName")} autoComplete="given-name" required maxLength={80} />
                  </label>
                  <label className="grid gap-1.5 text-[12.5px]" style={{ color: K.faint }}>
                    Téléphone <span className="sr-only">(facultatif)</span>
                    <input className={input} style={{ outline: "none" }} value={v.phone} onChange={update("phone")} autoComplete="tel" inputMode="tel" placeholder="Facultatif" maxLength={30} />
                  </label>
                </div>
                <label className="grid gap-1.5 text-[12.5px]" style={{ color: K.faint }}>
                  Courriel
                  <input className={input} style={{ outline: "none" }} type="email" value={v.email} onChange={update("email")} autoComplete="email" required maxLength={160} />
                </label>
                {/* Pot de miel : invisible pour les humains. */}
                <input tabIndex={-1} aria-hidden="true" autoComplete="off" value={v.website} onChange={update("website")} className="absolute left-[-9999px] h-px w-px opacity-0" />
                <label className="mt-2 flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: K.mute }}>
                  <input type="checkbox" checked={v.consent} onChange={update("consent")} className="mt-1 h-4 w-4 shrink-0 accent-[#E54B17]" />
                  <span>
                    J’accepte de recevoir ces recommandations par courriel et qu’un conseiller me contacte au sujet de mon projet. Voir la{" "}
                    <Link href="/confidentialite" className="underline underline-offset-2" style={{ color: K.cream }}>
                      politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>
                {offer && (
                  <label className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: K.mute }}>
                    <input type="checkbox" checked={v.followUps} onChange={update("followUps")} className="mt-1 h-4 w-4 shrink-0 accent-[#E54B17]" />
                    <span>{RELANCES_CONSENT_TEXT}</span>
                  </label>
                )}
                <AnimatePresence initial={false}>
                  {offer && v.followUps && (
                    <motion.div
                      key="relances"
                      initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: reduce ? 0 : 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <ol className="relative grid gap-2 pb-1 pl-6 text-[12.5px] leading-snug" style={{ listStyle: "none", margin: "0 0 0 7px", color: K.mute }}>
                        <motion.span
                          aria-hidden="true"
                          className="absolute bottom-[26px] left-0 top-[6px] w-px origin-top"
                          style={{ background: K.orange }}
                          initial={reduce ? false : { scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
                        />
                        {RELANCES_STEPS.map((s, i) => (
                          <motion.li
                            key={s.when}
                            className="relative"
                            initial={reduce ? false : { opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.45, ease: EASE, delay: 0.2 + i * 0.14 }}
                          >
                            <span aria-hidden="true" className="absolute left-[-27.5px] top-[4px] h-[7px] w-[7px] rounded-full" style={{ background: K.orange }} />
                            <span style={{ color: K.cream }}>{s.when}</span> · {s.what}
                          </motion.li>
                        ))}
                        <li style={{ color: K.faint }}>Rien d’autre. Un clic suffit pour vous désabonner.</li>
                      </ol>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="mt-3 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
                    style={{ background: K.orange }}
                  >
                    {status === "sending" ? "Envoi…" : "Envoyez-moi mes trois choix"}
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white" style={{ color: K.orange }} aria-hidden="true">
                      →
                    </span>
                  </button>
                  <span className="text-[12.5px]" style={{ color: K.faint }}>
                    Gratuit, sans engagement.
                  </span>
                </div>
                <AnimatePresence>
                  {error && (
                    <motion.p key="err" role="alert" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[13.5px]" style={{ color: "#FF9B7A", margin: "6px 0 0" }}>
                      {error}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
