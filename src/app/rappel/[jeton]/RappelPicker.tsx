"use client";

/* Chantier T — choix du créneau de rappel : cartes regroupées par jour (cibles de 44 px et plus), confirmation par un seul bouton. */
import { useActionState, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check } from "lucide-react";
import type { SlotOption } from "@/lib/telephonie/plan";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { chooseSlotAction, type ChooseState } from "./actions";

const EASE = [0.22, 1, 0.36, 1] as const;

export function RappelPicker({ token, options }: { token: string; options: SlotOption[] }) {
  const [state, action, pending] = useActionState<ChooseState, FormData>(chooseSlotAction.bind(null, token), undefined);
  const [picked, setPicked] = useState<string | null>(null);
  const reduced = useReduced();
  const days = useMemo(() => {
    const m = new Map<string, SlotOption[]>();
    for (const o of options) m.set(o.dayLabel, [...(m.get(o.dayLabel) ?? []), o]);
    return [...m.entries()];
  }, [options]);

  if (!options.length) {
    return <p className="g-hint" style={{ margin: 0 }}>Aucun créneau n’est offert pour le moment. Répondez simplement à notre texto avec le moment qui vous convient.</p>;
  }

  let n = 0;
  return (
    <AnimatePresence mode="wait" initial={false}>
      {state?.ok ? (
        <motion.div key="ok" className="tp-done" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: EASE }} role="status">
          <span className="tp-done__check" aria-hidden>
            <Check size={30} />
          </span>
          <h2 className="g-h2" style={{ fontSize: 22, margin: 0 }}>
            C’est noté, merci!
          </h2>
          <p className="g-hint" style={{ margin: 0 }}>
            Nous vous appelons {state.label}.
          </p>
        </motion.div>
      ) : (
        <motion.form key="form" action={action} initial={false} exit={reduced ? { opacity: 0 } : { opacity: 0, y: -8, transition: { duration: 0.2 } }}>
          {days.map(([day, items]) => (
            <section key={day}>
              <h2 className="tp-day">{day}</h2>
              <div className="tp-opts" role="radiogroup" aria-label={day}>
                {items.map((o) => (
                  <label key={o.id} className="tp-opt" style={{ ["--i" as string]: n++ }}>
                    <input type="radio" name="option" value={o.id} required onChange={() => setPicked(o.id)} />
                    <strong>{o.slotLabel}</strong>
                    <span>{o.hours}</span>
                  </label>
                ))}
              </div>
            </section>
          ))}
          {state && !state.ok ? (
            <p className="g-alert" role="alert" style={{ marginTop: 14 }}>
              {state.error}
            </p>
          ) : null}
          <div className="tp-pub__submit">
            <button type="submit" className="k-btn k-btn--primary k-btn--lg" style={{ width: "100%", minHeight: 54, fontSize: 16 }} disabled={!picked || pending}>
              {pending ? "Enregistrement…" : "Confirmer ce moment"}
            </button>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
