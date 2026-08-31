/* ==================================================================
   usePostalResolve — hook React
   ================================================================== */
"use client";
import { useState, useEffect, useRef } from "react";

export interface PostalResolveResult {
  postalCode: string;
  municipality: string;
  province: string;
  lat: number | null;
  lon: number | null;
  climateZone: "4A" | "5A" | "6A" | "7" | "8" | "unknown";
  designTempC: number;
  designTempF: number;
  hdd18: number | null;
  source: "geocoder" | "fsa-table" | "fallback";
  confidence: "high" | "medium" | "low";
}

const DEBOUNCE_MS = 600;
const CACHE = new Map<string, PostalResolveResult>();

export function usePostalResolve(postalCode: string) {
  const [data, setData] = useState<PostalResolveResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const cleaned = postalCode.replace(/\s/g, "").toUpperCase();
    if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleaned)) {
      setData(null); setError(null); return;
    }
    if (CACHE.has(cleaned)) {
      setData(CACHE.get(cleaned)!); setLoading(false); setError(null); return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    if (abortRef.current) abortRef.current.abort();

    timerRef.current = setTimeout(async () => {
      setLoading(true); setError(null);
      const controller = new AbortController();
      abortRef.current = controller;
      try {
        const res = await fetch("/api/postal/resolve", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ postalCode: cleaned }),
          signal: controller.signal,
        });
        const json = await res.json();
        if (json.success && json.data) {
          CACHE.set(cleaned, json.data);
          setData(json.data); setError(null);
        } else {
          setError(json.error ?? "Code postal non reconnu."); setData(null);
        }
      } catch (err: any) {
        if (err.name !== "AbortError") setError(null);
      } finally { setLoading(false); }
    }, DEBOUNCE_MS);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
  }, [postalCode]);

  return { data, loading, error };
}