"use client";

import { useActionState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MailCheck } from "lucide-react";
import { requestLoginLink, type LoginState } from "@/app/gestion/connexion/actions";
import { useReduced } from "@/components/heroes-v2/outils/motion";

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(requestLoginLink, undefined);
  const reduced = useReduced();
  const fade = reduced ? {} : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const } };

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state?.sent ? (
        <motion.div key="sent" className="g-state" role="status" {...fade}>
          <span className="g-state__icon"><MailCheck size={26} aria-hidden /></span>
          <p className="g-h2">Vérifiez votre boîte de réception</p>
          <p className="g-hint" style={{ fontSize: 14 }}>
            Si cette adresse a accès à l’outil, un lien vient d’être envoyé à <strong>{state.email}</strong>. Il expire dans 15 minutes.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" action={action} className="g-form" {...fade}>
          <div className="g-field">
            <label className="g-label" htmlFor="login-email">Adresse courriel</label>
            <input id="login-email" name="email" type="email" inputMode="email" autoComplete="email" required className="g-input" aria-invalid={state?.sent === false || undefined} aria-describedby={state?.sent === false ? "login-err" : undefined} />
            {state?.sent === false ? <p id="login-err" className="g-error">{state.error}</p> : null}
          </div>
          <button type="submit" className="g-btn g-btn--primary g-btn--block g-btn--lg" disabled={pending}>
            {pending ? "Envoi…" : "Recevoir mon lien"}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
