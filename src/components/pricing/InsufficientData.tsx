import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

/* ------------------------------------------------------------------
   InsufficientData — honest state when estimation isn't possible
   ------------------------------------------------------------------ */

interface InsufficientDataProps {
  reason: string;
  missingData: string[];
  onRestart: () => void;
}

export function InsufficientData({
  reason,
  missingData,
  onRestart,
}: InsufficientDataProps) {
  return (
    <div className="text-center py-8 px-6">
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-background border-2 border-border flex items-center justify-center">
        <span className="text-lg text-muted" aria-hidden="true">?</span>
      </div>

      <h2 className="text-xl font-bold text-foreground mb-2">
        Estimation non disponible
      </h2>
      <p className="text-sm text-muted max-w-md mx-auto mb-6">
        {reason}
      </p>

      {missingData.length > 0 && (
        <div className="text-left max-w-md mx-auto mb-6 p-4 bg-surface rounded-lg border border-border">
          <p className="text-xs font-semibold text-foreground mb-2">
            Données nécessaires pour produire une estimation :
          </p>
          <ul className="space-y-1">
            {missingData.map((item, i) => (
              <li key={i} className="text-xs text-muted flex items-start gap-2">
                <span className="text-border mt-0.5 shrink-0" aria-hidden="true">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <button
          type="button"
          onClick={onRestart}
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Recommencer
        </button>
        <Link
          href="/thermopompes"
          className={buttonVariants({ variant: "secondary", size: "sm" })}
        >
          Consulter le catalogue
        </Link>
        <Link
          href="/trouver-ma-thermopompe"
          className={buttonVariants({ variant: "default", size: "sm" })}
        >
          Utiliser <img src="/images/logo-thermomatch-tm.png" alt="ThermoMatch" className="inline-block h-[18px] ml-1 object-contain brightness-0 invert" />
        </Link>
      </div>
    </div>
  );
}
