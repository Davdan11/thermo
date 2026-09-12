"use client";

/* ==================================================================
   Alerte LogisVert — « prévenez-moi si la subvention change ».

   Le visiteur laisse son courriel ; POST /api/alertes-logisvert envoie
   un courriel de confirmation (double consentement). Aucune alerte ne
   part sans ce clic. États : idle → sending → check-your-inbox | error.

   Usage :
     <LogisVertAlertForm target={{ kind: "model", modelId }} label="Daikin FTX12AXVJU" />
     <LogisVertAlertForm target={{ kind: "brand", brandSlug: "daikin" }} label="Daikin" tone="light" amount={3250} />
   ================================================================== */
import { useId, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { track } from "@/lib/analytics/track";

export type LogisVertAlertTarget = { kind: "model"; modelId: string } | { kind: "brand"; brandSlug: string };

type Props = {
  target: LogisVertAlertTarget;
  /** Nom affiché : « Daikin FTX12AXVJU » pour un modèle, « Daikin » pour une marque. */
  label: string;
  tone?: "dark" | "light";
  /** Montant actuel, affiché en vert à droite (facultatif). */
  amount?: number | null;
  amountCaption?: string;
  /** Prénom déjà connu (ex. résultats ThermoMatch) : transmis tel quel. */
  firstName?: string;
  className?: string;
};

type State = "idle" | "sending" | "check-your-inbox" | "error";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const INK = "#0A1419";
const CREAM = "#F4EFE7";
const ORANGE = "#E54B17";
const GREEN = "#1A8F4E";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const PALETTE = {
  dark: {
    bg: INK,
    text: CREAM,
    mute: "rgba(244,239,231,0.68)",
    faint: "rgba(244,239,231,0.45)",
    line: "rgba(244,239,231,0.14)",
    panel: "rgba(244,239,231,0.05)",
    inputBg: "rgba(244,239,231,0.06)",
    inputBorder: "rgba(244,239,231,0.2)",
    ring: "rgba(229,75,23,0.28)",
    error: "#FF9B73",
    placeholder: "placeholder:text-[rgba(244,239,231,0.4)]",
  },
  light: {
    bg: "#FFFFFF",
    text: INK,
    mute: "#536873",
    faint: "#8A989E",
    line: "#E4DDD5",
    panel: CREAM,
    inputBg: CREAM,
    inputBorder: "#E4DDD5",
    ring: "rgba(229,75,23,0.18)",
    error: "#B3261E",
    placeholder: "placeholder:text-[#8A989E]",
  },
} as const;

function formatAmount(n: number): string {
  return `${Math.round(n).toLocaleString("fr-CA")} $`;
}

export function LogisVertAlertForm({ target, label, tone = "dark", amount, amountCaption, firstName, className = "" }: Props) {
  const p = PALETTE[tone];
  const reduce = useReducedMotion();
  const uid = useId();
  const titleId = `${uid}-titre`;
  const emailId = `${uid}-courriel`;
  const msgId = `${uid}-message`;

  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [focused, setFocused] = useState(false);
  const [state, setState] = useState<State>("idle");
  const [message, setMessage] = useState("");
  const [sentTo, setSentTo] = useState("");

  const sending = state === "sending";
  const hasAmount = typeof amount === "number" && amount > 0;

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending) return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) {
      setState("error");
      setMessage("Entrez un courriel valide.");
      return;
    }
    if (!consent) {
      setState("error");
      setMessage("Cochez la case pour activer l’alerte.");
      return;
    }
    setState("sending");
    setMessage("");
    try {
      const res = await fetch("/api/alertes-logisvert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, firstName, target, consent: true, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || "");
      if (data.emailed === false) throw new Error("Le courriel de confirmation n’a pas pu partir. Réessayez dans quelques minutes.");
      track("logisvert_alert_requested", { target_kind: target.kind });
      setSentTo(value);
      setState("check-your-inbox");
    } catch (err) {
      setState("error");
      setMessage(err instanceof Error && err.message ? err.message : "Envoi impossible pour le moment. Réessayez ou appelez le 438-900-3224.");
    }
  };

  const reset = () => {
    setState("idle");
    setMessage("");
    setEmail("");
  };

  return (
    <motion.section
      aria-labelledby={titleId}
      className={`relative overflow-hidden rounded-[24px] ${className}`}
      style={{ background: p.bg, color: p.text, border: `1px solid ${p.line}` }}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-full origin-left"
        style={{ background: ORANGE }}
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: EASE, delay: 0.25 }}
      />

      <div className={`grid gap-8 p-6 sm:p-9 ${hasAmount ? "lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14" : ""}`}>
        <div className="min-w-0">
          <p className="m-0 flex items-center gap-3 text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: p.faint }}>
            <span aria-hidden="true" className="inline-block h-px w-8 shrink-0" style={{ background: ORANGE }} />
            Alerte LogisVert
          </p>
          <h2 id={titleId} className="m-0 mt-4" style={{ fontFamily: DISPLAY, fontSize: "clamp(26px, 3vw, 38px)", lineHeight: 1.04, letterSpacing: "-0.035em", fontWeight: 600, color: p.text }}>
            Soyez prévenu si la subvention change.
          </h2>
          <p className="m-0 mt-3 max-w-[620px] text-[15px] leading-[1.65]" style={{ color: p.mute }}>
            Hydro-Québec révise la liste LogisVert plusieurs fois par année. Laissez votre courriel&nbsp;: nous vous écrivons seulement si le montant pour{" "}
            <span style={{ color: p.text, fontWeight: 600 }}>{target.kind === "brand" ? `les thermopompes ${label}` : label}</span> monte, baisse, ou si{" "}
            {target.kind === "brand" ? "un modèle entre dans la liste ou en sort" : "le modèle entre dans la liste ou en sort"}.
          </p>

          <AnimatePresence mode="wait" initial={false}>
            {state === "check-your-inbox" ? (
              <motion.div
                key="inbox"
                role="status"
                aria-live="polite"
                className="mt-6 rounded-[18px] p-5 sm:p-6"
                style={{ background: p.panel, border: `1px solid ${p.line}` }}
                initial={reduce ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <div className="flex items-start gap-4">
                  <svg aria-hidden="true" width="30" height="30" viewBox="0 0 32 32" fill="none" className="mt-0.5 shrink-0">
                    <motion.path
                      d="M4 8h24v16H4z"
                      stroke={ORANGE}
                      strokeWidth={1.8}
                      strokeLinejoin="round"
                      initial={reduce ? false : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
                    />
                    <motion.path
                      d="M4.5 8.5 16 17.5l11.5-9"
                      stroke={ORANGE}
                      strokeWidth={1.8}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      initial={reduce ? false : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.6, ease: EASE, delay: 0.75 }}
                    />
                  </svg>
                  <div className="min-w-0">
                    <p className="m-0" style={{ fontFamily: DISPLAY, fontSize: 22, fontWeight: 600, letterSpacing: "-0.025em", lineHeight: 1.15, color: p.text }}>
                      Vérifiez votre boîte de réception.
                    </p>
                    <p className="m-0 mt-2 text-[14.5px] leading-[1.6]" style={{ color: p.mute }}>
                      Un courriel de confirmation vient de partir à <span style={{ color: p.text, fontWeight: 600, overflowWrap: "anywhere" }}>{sentTo}</span>. Cliquez sur le lien pour activer l’alerte&nbsp;:
                      sans confirmation, nous ne vous écrirons pas. Pensez aux courriels indésirables.
                    </p>
                    <button type="button" onClick={reset} className="mt-3 text-[13px] font-semibold underline underline-offset-4" style={{ color: p.text }}>
                      Utiliser une autre adresse
                    </button>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={submit}
                noValidate
                className="mt-6"
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <label htmlFor={emailId} className="sr-only">
                    Votre courriel
                  </label>
                  <input
                    id={emailId}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="vous@exemple.ca"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (state === "error") setState("idle");
                    }}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    disabled={sending}
                    aria-invalid={state === "error" && !EMAIL_RE.test(email.trim()) ? true : undefined}
                    aria-describedby={message ? msgId : undefined}
                    className={`h-[52px] w-full min-w-0 shrink-0 rounded-full px-5 text-[15px] sm:w-auto sm:flex-1 sm:shrink transition-[border-color,box-shadow] duration-200 ${p.placeholder}`}
                    style={{
                      outline: "none",
                      background: p.inputBg,
                      color: p.text,
                      border: `1px solid ${focused ? ORANGE : p.inputBorder}`,
                      boxShadow: focused ? `0 0 0 3px ${p.ring}` : "none",
                    }}
                  />
                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={reduce || sending ? undefined : { y: -1 }}
                    whileTap={reduce || sending ? undefined : { scale: 0.98 }}
                    className="relative h-[52px] shrink-0 overflow-hidden rounded-full px-7 text-[15px] font-semibold text-white"
                    style={{ background: ORANGE, fontFamily: DISPLAY, cursor: sending ? "progress" : "pointer" }}
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={sending ? "sending" : "idle"}
                        className="flex items-center justify-center gap-2"
                        initial={reduce ? false : { opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={reduce ? undefined : { opacity: 0, y: -10 }}
                        transition={{ duration: 0.22 }}
                      >
                        {sending ? (
                          <>
                            Envoi
                            <span aria-hidden="true" className="inline-flex gap-[3px]">
                              {[0, 1, 2].map((i) => (
                                <motion.span
                                  key={i}
                                  className="inline-block h-[4px] w-[4px] rounded-full bg-white"
                                  animate={reduce ? undefined : { opacity: [0.25, 1, 0.25] }}
                                  transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
                                />
                              ))}
                            </span>
                          </>
                        ) : (
                          <>
                            M’alerter
                            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 5l7 7-7 7" />
                            </svg>
                          </>
                        )}
                      </motion.span>
                    </AnimatePresence>
                  </motion.button>
                </div>

                {/* Pot de miel : invisible pour les humains. */}
                <div className="absolute" style={{ left: -9999, top: -9999 }} aria-hidden="true">
                  <label htmlFor={`${uid}-site`}>Site web</label>
                  <input id={`${uid}-site`} type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
                </div>

                <label className="mt-4 flex cursor-pointer items-start gap-3 text-[13px] leading-[1.55]" style={{ color: p.mute }}>
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (state === "error") setState("idle");
                    }}
                    className="mt-[3px] h-4 w-4 shrink-0 cursor-pointer"
                    style={{ accentColor: ORANGE }}
                  />
                  <span>
                    J’accepte que Thermopompes À Vendre conserve mon courriel pour m’envoyer cette alerte, et rien d’autre. Désabonnement en un clic dans chaque
                    courriel (Loi&nbsp;25).{" "}
                    <a href="/confidentialite" className="underline underline-offset-2" style={{ color: p.text }}>
                      Politique de confidentialité
                    </a>
                  </span>
                </label>

                <AnimatePresence initial={false}>
                  {state === "error" && message && (
                    <motion.p
                      key={message}
                      id={msgId}
                      role="alert"
                      className="m-0 mt-3 text-[13.5px] font-medium"
                      style={{ color: p.error }}
                      initial={reduce ? false : { opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={reduce ? undefined : { opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                    >
                      {message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {hasAmount && (
          <motion.div
            className="flex flex-col justify-end border-t pt-6 lg:min-w-[230px] lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
            style={{ borderColor: p.line }}
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.35 }}
          >
            <p className="m-0 text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: p.faint }}>
              {amountCaption ?? "Montant officiel aujourd’hui"}
            </p>
            <p className="m-0 mt-3" style={{ fontFamily: DISPLAY, color: GREEN, fontSize: "clamp(40px, 4.4vw, 58px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>
              {formatAmount(amount!)}
            </p>
            <motion.span
              aria-hidden="true"
              className="mt-4 block h-px w-full origin-left"
              style={{ background: GREEN, opacity: 0.45 }}
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.6 }}
            />
            <p className="m-0 mt-3 text-[13px] leading-[1.5]" style={{ color: p.mute }}>
              Vous serez prévenu si ce chiffre bouge.
            </p>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
