"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { encodeShareCode } from "@/lib/thermomatch/share-code";
import { RELANCES_CONSENT_TEXT } from "@/lib/relances/consent";
import { readAttribution } from "@/lib/attribution/client";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, SERIF } from "@/components/heroes-v2/outils/font-stacks";
import { ConsentCopy, consentAnswers, useConsentTexts } from "@/components/consentements/ConsentCopy"; // Conformité C2
import { Arrow, HandCheck, MarginMark, WriteIn, useSeen } from "./Corrige";
import { K } from "./results-model";

/* « Envoyez-moi mes trois choix » : le visiteur reçoit ses recommandations par
   courriel (lead : Pipedrive, alerte à l'équipe). Le code de partage vient de
   l'adresse (lien partagé) ou des réponses gardées dans la session.
   Deuxième case, facultative et jamais cochée d'avance : deux rappels
   (J+2, J+7), désabonnement en un clic.
   Présentation du corrigé : champs écrits sur les lignes du carnet, cases
   natives (accessibles) teintées d'orange ; même envoi, mêmes textes. */

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
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

// 16 px : Safari iOS n'agrandit pas la page au focus.
const input = "tm-field h-[48px] w-full px-0 text-[16px]";
const labelCls = "grid gap-1 text-[12.5px] font-medium";
const box = "mt-1 h-4 w-4 shrink-0 accent-[#C9400F]";

export function EmailMyChoices({ topLabel, n }: { topLabel: string; /** Numéro de la réponse dans le corrigé. */ n?: number }) {
  const [v, setV] = useState({ firstName: "", email: "", phone: "", consent: false, followUps: false, website: "" });
  // Conformité C2 : case 5.2 (rappels) et case distincte 5.3 de la trousse, jamais cochées d'avance.
  const consents = useConsentTexts();
  const [promotions, setPromotions] = useState(false);
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
  const ref = useRef<HTMLElement>(null);
  const play = useSeen(ref);
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
      const res = await fetch("/api/thermomatch/courriel", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, followUps: offer && v.followUps, code, page: window.location.pathname, attribution: readAttribution(), consentements: consentAnswers(consents, { rappels: offer && v.followUps, promotions }) }) });
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
    <section ref={ref} aria-labelledby="tm-courriel" className="mt-20 lg:mt-28" style={{ color: K.ink }}>
      <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative min-w-0">
          <MarginMark n={n} play={play} />
          <p className="text-[20px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust, margin: 0 }}>
            <WriteIn play={play}>Par courriel</WriteIn>
          </p>
          <h2 id="tm-courriel" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(36px, 4vw, 60px)", letterSpacing: "-0.02em", lineHeight: 1, margin: "18px 0 0" }}>
            <WriteIn play={play} delay={0.15}>
              Gardez vos trois choix,
            </WriteIn>{" "}
            <WriteIn play={play} delay={0.55}>
              <em>pour y réfléchir.</em>
            </WriteIn>
          </h2>
          <ul className="grid gap-3 text-[15px] leading-relaxed" style={{ listStyle: "none", padding: 0, margin: "30px 0 0", color: K.soft }}>
            <li>— {topLabel} et vos deux autres choix, avec leurs chiffres par grand froid.</li>
            <li>— Le montant LogisVert officiel et un prix approximatif installé pour chacun.</li>
            <li>— Un lien qui rouvre ces recommandations, même sur un autre appareil.</li>
          </ul>
        </div>

        <div className="relative min-h-[320px] lg:border-l lg:pl-12" style={{ borderColor: K.line }}>
          <AnimatePresence mode="wait" initial={false}>
            {status === "sent" ? (
              <motion.div key="ok" initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduce ? 0 : 0.6, ease: EASE }} className="flex h-full flex-col justify-center" role="status">
                <p className="flex items-center gap-3" style={{ fontFamily: SERIF, fontSize: "clamp(32px, 3vw, 46px)", letterSpacing: "-0.02em", lineHeight: 1, margin: 0 }}>
                  <span>
                    C’est envoyé<span style={{ color: K.orange }}>.</span>
                  </span>
                  <HandCheck play delay={0.2} size={30} />
                </p>
                <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed" style={{ color: K.soft }}>
                  Vos trois choix arrivent dans votre boîte de réception. S’il n’y est pas dans quelques minutes, regardez dans les courriels indésirables.
                </p>
                {planned && (
                  <p className="mt-2 max-w-[440px] text-[14px] leading-relaxed" style={{ color: K.soft }}>
                    Vous recevrez aussi deux rappels : dans 2 jours, puis dans 7 jours. Chaque courriel a un lien pour vous désabonner.
                  </p>
                )}
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={submit} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: reduce ? 0 : -12 }} transition={{ duration: reduce ? 0 : 0.4 }} className="grid gap-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
                  <label className={labelCls} style={{ color: K.soft }}>
                    Prénom
                    <input className={input} value={v.firstName} onChange={update("firstName")} autoComplete="given-name" required maxLength={80} />
                  </label>
                  <label className={labelCls} style={{ color: K.soft }}>
                    Téléphone <span className="sr-only">(facultatif)</span>
                    <input className={input} value={v.phone} onChange={update("phone")} autoComplete="tel" inputMode="tel" placeholder="Facultatif" maxLength={30} />
                  </label>
                </div>
                <label className={labelCls} style={{ color: K.soft }}>
                  Courriel
                  <input className={input} type="email" value={v.email} onChange={update("email")} autoComplete="email" required maxLength={160} />
                </label>
                {/* Pot de miel : invisible pour les humains. */}
                <input tabIndex={-1} aria-hidden="true" autoComplete="off" value={v.website} onChange={update("website")} className="absolute left-[-9999px] h-px w-px opacity-0" />
                <label className="mt-1 flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: K.soft }}>
                  <input type="checkbox" checked={v.consent} onChange={update("consent")} className={box} />
                  <span>
                    J’accepte de recevoir ces recommandations par courriel et qu’un conseiller me contacte au sujet de mon projet. Voir la{" "}
                    <Link href="/confidentialite" className="underline underline-offset-2" style={{ color: K.ink }}>
                      politique de confidentialité
                    </Link>
                    .
                  </span>
                </label>
                {offer && (
                  <label className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: K.soft }}>
                    <input type="checkbox" checked={v.followUps} onChange={update("followUps")} className={box} />
                    <span>{consents.status === "pret" ? <ConsentCopy text={consents.texts.rappels} linkClassName="underline underline-offset-2" linkStyle={{ color: K.ink }} /> : RELANCES_CONSENT_TEXT}</span>
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
                      <ol className="relative grid gap-2 pb-1 pl-6 text-[12.5px] leading-snug" style={{ listStyle: "none", margin: "0 0 0 7px", color: K.soft }}>
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
                            <span style={{ color: K.ink, fontWeight: 600 }}>{s.when}</span> · {s.what}
                          </motion.li>
                        ))}
                        <li style={{ color: K.soft }}>Rien d’autre. Un clic suffit pour vous désabonner.</li>
                      </ol>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Conformité C2 : case distincte 5.3 de la trousse, facultative et jamais cochée d'avance. */}
                {consents.status === "pret" && (
                  <label className="flex items-start gap-3 text-[13px] leading-relaxed" style={{ color: K.soft }}>
                    <input type="checkbox" checked={promotions} onChange={(e) => setPromotions(e.target.checked)} className={box} />
                    <span>
                      <ConsentCopy text={consents.texts.promotions} linkClassName="underline underline-offset-2" linkStyle={{ color: K.ink }} />
                    </span>
                  </label>
                )}
                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="ou-btn tm-fire inline-flex min-h-[52px] items-center gap-4 rounded-full py-3 pl-6 pr-5 text-[15px] font-semibold disabled:opacity-60"
                    style={{ fontFamily: DISPLAY }}
                  >
                    {status === "sending" ? "Envoi…" : "Envoyez-moi mes trois choix"}
                    <Arrow />
                  </button>
                  <span className="text-[12.5px]" style={{ color: K.soft }}>
                    Gratuit, sans engagement.
                  </span>
                </div>
                {/* Conformité C2 : texte 5.1 sous le formulaire. */}
                {consents.status === "pret" && (
                  <p className="text-[12.5px] leading-relaxed" style={{ color: K.soft, margin: "4px 0 0" }}>
                    <ConsentCopy text={consents.texts.communications} linkClassName="underline underline-offset-2" linkStyle={{ color: K.ink }} />
                  </p>
                )}
                <AnimatePresence>
                  {error && (
                    <motion.p key="err" role="alert" initial={{ opacity: 0, y: reduce ? 0 : -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-[13.5px] font-medium" style={{ color: K.rust, margin: "6px 0 0" }}>
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
