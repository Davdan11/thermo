"use client";

/* ==================================================================
   Chantier S — formulaire de code de 2e étape (connexion et accès
   sensibles). Trois méthodes : application (par défaut), texto (si
   ALERT_SMS_TO et Twilio sont configurés), code de secours.
   Le numéro n'est jamais montré en entier (« ••• ••• ••34 »).
   ================================================================== */

import { useActionState, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { KeyRound, LifeBuoy, MessageSquare, Smartphone } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

export type CodeState = { ok: true; message?: string } | { ok: false; error: string } | undefined;
type Method = "totp" | "texto" | "secours";

const LABELS: Record<Method, string> = {
  totp: "Code de l’application",
  texto: "Code reçu par texto",
  secours: "Code de secours",
};

const noop = async (): Promise<CodeState> => undefined;

export function SecondFactorForm({
  verifyAction,
  smsAction,
  smsMasked,
  trustDays = 0,
  backupLeft,
  submitLabel = "Continuer",
  returnTo,
}: {
  verifyAction: (prev: CodeState, fd: FormData) => Promise<CodeState>;
  smsAction?: (prev: CodeState) => Promise<CodeState>;
  smsMasked: string | null;
  trustDays?: number;
  backupLeft?: number;
  submitLabel?: string;
  /** Page à rouvrir après un bon code (accès sensibles) : rendu neuf, avec la session re-signée. */
  returnTo?: string;
}) {
  const [method, setMethod] = useState<Method>("totp");
  const [state, action, pending] = useActionState<CodeState, FormData>(verifyAction, undefined);
  const [sms, askSms, smsPending] = useActionState<CodeState, FormData>(smsAction ?? noop, undefined);
  const reduced = useReduced();
  const options: Array<[Method, string, typeof Smartphone]> = [
    ["totp", "Application", Smartphone],
    ...(smsAction && smsMasked ? ([["texto", "Texto", MessageSquare]] as Array<[Method, string, typeof Smartphone]>) : []),
    ["secours", "Code de secours", LifeBuoy],
  ];
  const fade = reduced ? {} : { initial: { opacity: 0, y: 6 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -4 }, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const } };
  const numeric = method !== "secours";

  return (
    <div className="se-factor">
      <div className="cr-seg se-seg" role="radiogroup" aria-label="Méthode de vérification">
        {options.map(([id, label, Icon]) => (
          <label key={id}>
            <input type="radio" name="se-methode" value={id} checked={method === id} onChange={() => setMethod(id)} />
            <Icon size={15} aria-hidden /> {label}
          </label>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={method} {...fade}>
          {method === "texto" ? (
            <form action={askSms} className="se-sms">
              <p className="g-hint">Un code à 6 chiffres sera envoyé au {smsMasked}. Il expire dans 10 minutes.</p>
              <button type="submit" className="k-btn k-btn--ghost" disabled={smsPending}>
                <MessageSquare size={16} aria-hidden /> {smsPending ? "Envoi…" : sms?.ok ? "Renvoyer un code" : "M’envoyer un code"}
              </button>
              {sms ? (
                <p className={`cr-msg ${sms.ok ? "is-ok" : "is-bad"}`} role={sms.ok ? "status" : "alert"}>
                  {sms.ok ? sms.message : sms.error}
                </p>
              ) : null}
            </form>
          ) : null}
          {method === "secours" ? <p className="g-hint se-hint">Un des 10 codes notés à l’activation (format ABCD-EFGH). Chaque code ne sert qu’une fois{typeof backupLeft === "number" ? ` ; il vous en reste ${backupLeft}` : ""}.</p> : null}

          <form action={action} className="g-form se-codeform">
            <input type="hidden" name="methode" value={method} />
            <label className="g-field" style={{ margin: 0 }}>
              <span className="g-label">
                <KeyRound size={14} aria-hidden /> {LABELS[method]}
              </span>
              <input
                name="code"
                className="g-input se-code"
                inputMode={numeric ? "numeric" : "text"}
                autoComplete="one-time-code"
                autoCapitalize={numeric ? "off" : "characters"}
                spellCheck={false}
                autoFocus
                required
                maxLength={numeric ? 7 : 9}
                pattern={numeric ? "[0-9 ]{6,7}" : "[A-Za-z0-9 \\-]{8,9}"}
                placeholder={numeric ? "••••••" : "ABCD-EFGH"}
                aria-invalid={state?.ok === false || undefined}
                aria-describedby={state?.ok === false ? "se-code-err" : undefined}
              />
            </label>
            {trustDays > 0 ? (
              <label className="se-check">
                <input type="checkbox" name="confiance" value="oui" />
                <span>
                  Faire confiance à cet appareil pendant {trustDays} jours
                  <small>Le code ne sera plus demandé ici après le lien de connexion. À éviter sur un appareil partagé.</small>
                </span>
              </label>
            ) : null}
            {state?.ok === false ? (
              <p id="se-code-err" className="cr-msg is-bad" role="alert">
                {state.error}
              </p>
            ) : null}
            {state?.ok && state.message ? (
              <p className="cr-msg is-ok" role="status">
                {state.message}
              </p>
            ) : null}
            <button type="submit" className="k-btn k-btn--primary k-btn--lg se-submit" disabled={pending}>
              {pending ? "Vérification…" : submitLabel}
            </button>
          </form>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
