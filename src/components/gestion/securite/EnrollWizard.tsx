"use client";

/* ==================================================================
   Chantier S — activation guidée de la 2e étape, sans risque de se
   bloquer dehors : rien n'est exigé avant la dernière étape.
     1. Installer une application d'authentification
     2. Ajouter la clé (lien otpauth:// sur le téléphone, ou clé à la main)
     3. Entrer un code : prouve que la clé est bien enregistrée
     4. Noter les 10 codes de secours, puis « Activer »
   ================================================================== */

import { useActionState, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Copy, ExternalLink, ShieldCheck, Smartphone } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { BackupCodesList } from "./BackupCodesList";

export type EnrollState = { ok: true; codes: string[] } | { ok: false; error: string } | undefined;

const STEPS = ["Application", "Clé", "Code", "Codes de secours"];

function Steps({ current }: { current: number }) {
  return (
    <ol className="se-steps" aria-label="Étapes de l’activation">
      {STEPS.map((s, i) => (
        <li key={s} className={i < current ? "is-done" : i === current ? "is-current" : undefined} aria-current={i === current ? "step" : undefined}>
          <span className="se-steps__n">{i < current ? <Check size={13} aria-hidden /> : i + 1}</span>
          <span className="se-steps__l">{s}</span>
        </li>
      ))}
    </ol>
  );
}

function group(secret: string) {
  return secret.replace(/(.{4})/g, "$1 ").trim();
}

export function EnrollWizard({
  pending,
  email,
  error,
  startAction,
  confirmAction,
  finalizeAction,
  cancelAction,
}: {
  pending: { secret: string; uri: string; confirmed: boolean } | null;
  email: string;
  error?: string | null;
  startAction: () => Promise<void>;
  confirmAction: (prev: EnrollState, fd: FormData) => Promise<EnrollState>;
  finalizeAction: (fd: FormData) => Promise<void>;
  cancelAction: () => Promise<void>;
}) {
  const [state, confirm, confirming] = useActionState<EnrollState, FormData>(confirmAction, undefined);
  const [copied, setCopied] = useState(false);
  const reduced = useReduced();
  const codes = state?.ok ? state.codes : null;
  const step = !pending ? 0 : codes || pending.confirmed ? 3 : 1;
  const fade = reduced ? {} : { initial: { opacity: 0, y: 10 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -6 }, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const } };

  const copy = async () => {
    if (!pending) return;
    try {
      await navigator.clipboard.writeText(pending.secret);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* rien */
    }
  };

  return (
    <div className="se-wizard">
      <Steps current={step} />
      {error ? (
        <p className="cr-msg is-bad" role="alert">
          {error}
        </p>
      ) : null}
      <AnimatePresence mode="wait" initial={false}>
        {step === 0 ? (
          <motion.section key="intro" className="k-card k-card--pad se-panel" {...fade}>
            <span className="se-panel__icon" aria-hidden>
              <Smartphone size={22} />
            </span>
            <h2 className="k-h2">Installez une application d’authentification</h2>
            <p className="k-lead">Google Authenticator, Microsoft Authenticator, 1Password, Bitwarden ou Authy : toutes fonctionnent. Elle affiche un nouveau code à 6 chiffres toutes les 30 secondes, même sans réseau.</p>
            <ul className="se-points">
              <li>Rien ne change tant que vous n’avez pas terminé les 4 étapes.</li>
              <li>Vous recevrez 10 codes de secours si le téléphone est perdu.</li>
              {/* Le texto de secours dépend d'ALERT_SMS_TO : indiqué sur la page Sécurité. */}
              <li>Compte protégé : {email}</li>
            </ul>
            <form action={startAction}>
              <SubmitButton className="k-btn k-btn--primary k-btn--lg" pendingLabel="Préparation…">
                Commencer
              </SubmitButton>
            </form>
          </motion.section>
        ) : step === 1 && pending ? (
          <motion.section key="cle" className="k-card k-card--pad se-panel" {...fade}>
            <h2 className="k-h2">Ajoutez la clé dans l’application</h2>
            <p className="k-lead">Sur ce téléphone, touchez le bouton : l’application s’ouvre et ajoute le compte. Sinon, choisissez « Entrer une clé » dans l’application et recopiez la clé ci-dessous.</p>
            <a className="k-btn k-btn--ink se-otpauth" href={pending.uri}>
              <ExternalLink size={16} aria-hidden /> Ouvrir dans l’application
            </a>
            <div className="se-secret">
              <p className="g-label">Clé à entrer à la main</p>
              <div className="se-secret__box">
                <code aria-label="Clé secrète">{group(pending.secret)}</code>
                <button type="button" className="k-btn k-btn--ghost k-btn--icon" onClick={copy} aria-label="Copier la clé">
                  {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                </button>
              </div>
              <p className="g-hint">Nom du compte : ThermopompesAVendre · Type : basé sur l’heure · 6 chiffres · 30 secondes.</p>
            </div>
            <form action={confirm} className="g-form se-codeform">
              <label className="g-field" style={{ margin: 0 }}>
                <span className="g-label">Code affiché par l’application</span>
                <input name="code" className="g-input se-code" inputMode="numeric" autoComplete="one-time-code" required maxLength={7} pattern="[0-9 ]{6,7}" placeholder="••••••" aria-invalid={state?.ok === false || undefined} />
              </label>
              {state?.ok === false ? (
                <p className="cr-msg is-bad" role="alert">
                  {state.error}
                </p>
              ) : null}
              <button type="submit" className="k-btn k-btn--primary k-btn--lg se-submit" disabled={confirming}>
                {confirming ? "Vérification…" : "Vérifier le code"}
              </button>
            </form>
          </motion.section>
        ) : (
          <motion.section key="codes" className="k-card k-card--pad se-panel" {...fade}>
            <span className="se-panel__icon se-panel__icon--ok" aria-hidden>
              <ShieldCheck size={22} />
            </span>
            <h2 className="k-h2">Notez vos codes de secours</h2>
            {codes ? (
              <>
                <p className="k-lead">Ils ne seront plus jamais affichés. Rangez-les hors du téléphone : gestionnaire de mots de passe, ou papier dans un endroit sûr.</p>
                <BackupCodesList codes={codes} />
              </>
            ) : (
              <p className="k-lead">Vos codes de secours ont déjà été affichés. Si vous ne les avez pas notés, recommencez l’activation : une nouvelle clé et de nouveaux codes seront créés.</p>
            )}
            <form action={finalizeAction} className="se-finalize">
              <label className="se-check">
                <input type="checkbox" name="notes" value="oui" required />
                <span>J’ai rangé mes 10 codes de secours en lieu sûr.</span>
              </label>
              <SubmitButton className="k-btn k-btn--primary k-btn--lg se-submit" pendingLabel="Activation…">
                Activer la connexion à deux étapes
              </SubmitButton>
            </form>
            {!codes ? (
              <form action={startAction}>
                <SubmitButton className="k-btn k-btn--ghost" pendingLabel="…">
                  Recommencer avec une nouvelle clé
                </SubmitButton>
              </form>
            ) : null}
          </motion.section>
        )}
      </AnimatePresence>
      {pending ? (
        <form action={cancelAction} className="se-alt">
          <button type="submit" className="se-linkbtn">
            Annuler l’activation
          </button>
        </form>
      ) : null}
    </div>
  );
}
