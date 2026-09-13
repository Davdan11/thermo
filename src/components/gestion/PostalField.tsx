"use client";

/* Code postal résolu en direct : ville, région devinée et précision de la position. */
import { useEffect, useRef, useState } from "react";
import { Loader2, MapPin } from "lucide-react";

export interface PostalResult {
  postalCode: string;
  city: string;
  lat: number;
  lon: number;
  precision: "ville" | "rta" | "geocodeur" | "approx";
  region: string | null;
  regionName: string | null;
  regionSource: "rta" | "ville-proche" | "aucune";
}

const PRECISION: Record<PostalResult["precision"], string> = {
  ville: "position de la ville",
  rta: "position de la RTA",
  geocodeur: "position géocodée",
  approx: "position approximative",
};

const VALID = /^[A-Z]\d[A-Z]\d[A-Z]\d$/;

export function PostalField({ id, name, label, defaultValue = "", error, onResolved }: { id: string; name: string; label: string; defaultValue?: string; error?: string; onResolved?: (r: PostalResult | null) => void }) {
  const [value, setValue] = useState(defaultValue);
  const [result, setResult] = useState<{ code: string; data: PostalResult | null } | null>(null);
  const [loading, setLoading] = useState(false);
  const cb = useRef(onResolved);
  useEffect(() => {
    cb.current = onResolved;
  });

  const clean = value.replace(/\s/g, "").toUpperCase();
  const valid = VALID.test(clean);

  useEffect(() => {
    if (!valid) return;
    const ctrl = new AbortController();
    const t = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/gestion/api/postal?code=${clean}`, { signal: ctrl.signal, cache: "no-store" });
        const json = await res.json().catch(() => null);
        const data: PostalResult | null = json?.ok ? json.data : null;
        setResult({ code: clean, data });
        cb.current?.(data);
      } catch {
        /* requête annulée */
      } finally {
        if (!ctrl.signal.aborted) setLoading(false);
      }
    }, 300);
    return () => {
      clearTimeout(t);
      ctrl.abort();
    };
  }, [clean, valid]);

  const shown = valid && result?.code === clean ? result.data : null;
  const hintId = `${id}-hint`;
  return (
    <div className="g-field">
      <label className="g-label" htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        className="g-input"
        value={value}
        onChange={(e) => setValue(e.target.value.toUpperCase())}
        autoComplete="postal-code"
        inputMode="text"
        maxLength={7}
        placeholder="H2X 1Y4"
        required
        aria-invalid={error ? true : undefined}
        aria-describedby={hintId}
        style={{ textTransform: "uppercase", letterSpacing: "0.04em" }}
      />
      <p id={hintId} className="g-resolve" aria-live="polite">
        {!valid ? (
          <span>Code complet : la ville et la région se remplissent seules.</span>
        ) : loading && result?.code !== clean ? (
          <><Loader2 size={14} className="animate-spin" aria-hidden /> Recherche…</>
        ) : shown ? (
          <>
            <MapPin size={14} aria-hidden style={{ color: "var(--g-orange)" }} />
            <span>
              <strong>{shown.city}</strong>
              {shown.regionName ? ` · ${shown.regionName}` : ""} · {PRECISION[shown.precision]}
            </span>
          </>
        ) : result?.code === clean ? (
          <span>Introuvable : la zone se fera par région seulement.</span>
        ) : null}
      </p>
      {error ? <p className="g-error">{error}</p> : null}
    </div>
  );
}
