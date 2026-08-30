"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Snowflake, Search, X, ArrowRight, Zap, Thermometer, Volume2, Wifi } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ==================================================================
   CompareSelector — Premium product picker using shadcn Card
   ================================================================== */

export interface SelectableModel {
  slug: string;
  name: string;
  brandName: string;
  brandSlug: string;
  capacityBtu: number | null;
  imageUrl: string | null;
  isColdClimate: boolean;
  systemTypeLabel: string;
  minHeatingTempC: number | null;
  seer2: number | null;
  hspf2: number | null;
  noiseIndoorMinDbA: number | null;
  hasWifi: boolean | null;
  refrigerant: string | null;
}

interface CompareSelectorProps {
  models: SelectableModel[];
  initialSlugs?: string[];
  maxCompare: number;
}

export function CompareSelector({ models, initialSlugs = [], maxCompare }: CompareSelectorProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set(initialSlugs));
  const [search, setSearch] = useState("");
  const [brandFilter, setBrandFilter] = useState<string | null>(null);

  /* ---- Brand list ---- */
  const brands = useMemo(() => {
    const map = new Map<string, { slug: string; name: string; count: number }>();
    for (const m of models) {
      const existing = map.get(m.brandSlug);
      if (existing) existing.count++;
      else map.set(m.brandSlug, { slug: m.brandSlug, name: m.brandName, count: 1 });
    }
    return [...map.values()].sort((a, b) => a.name.localeCompare(b.name));
  }, [models]);

  /* ---- Filtered models ---- */
  const filtered = useMemo(() => {
    let result = models;
    if (brandFilter) result = result.filter((m) => m.brandSlug === brandFilter);
    if (search.trim()) {
      const q = search.toLowerCase().trim();
      result = result.filter((m) =>
        `${m.brandName} ${m.name} ${m.capacityBtu ?? ""}`.toLowerCase().includes(q)
      );
    }
    return result;
  }, [models, brandFilter, search]);

  /* ---- Grouped by brand ---- */
  const grouped = useMemo(() => {
    const map = new Map<string, SelectableModel[]>();
    for (const m of filtered) {
      const list = map.get(m.brandName) ?? [];
      list.push(m);
      map.set(m.brandName, list);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  /* ---- Toggle ---- */
  const toggle = useCallback((slug: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else if (next.size < maxCompare) next.add(slug);
      return next;
    });
  }, [maxCompare]);

  /* ---- Compare ---- */
  const handleCompare = useCallback(() => {
    if (selected.size >= 2) router.push(`/comparer?models=${[...selected].join(",")}`);
  }, [selected, router]);

  const canAdd = selected.size < maxCompare;

  return (
    <div>
      {/* ---- Selected bar ---- */}
      {selected.size > 0 && (
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">
                {selected.size} modele{selected.size > 1 ? "s" : ""} selectionne{selected.size > 1 ? "s" : ""}
                <span className="ml-2 font-normal text-muted-foreground text-sm">
                  (min. 2, max. {maxCompare})
                </span>
              </CardTitle>
              <Button
                onClick={handleCompare}
                disabled={selected.size < 2}
                size="lg"
              >
                Comparer maintenant
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {[...selected].map((slug) => {
                const m = models.find((m) => m.slug === slug);
                if (!m) return null;
                return (
                  <div
                    key={slug}
                    className="flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm"
                  >
                    <span className="font-semibold">{m.brandName}</span>
                    <span className="text-muted-foreground">{m.name}</span>
                    <button
                      type="button"
                      onClick={() => toggle(slug)}
                      className="ml-1 rounded-full p-0.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
                    >
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* ---- Search + brand filters ---- */}
      <div className="flex flex-col gap-3 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, marque ou capacite..."
            className="w-full h-11 rounded-lg border border-input bg-card pl-10 pr-4 text-sm outline-none ring-ring/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary/40 transition-all"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setBrandFilter(null)}
            className={cn(
              "rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all",
              brandFilter === null
                ? "bg-foreground text-background border-foreground"
                : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
            )}
          >
            Toutes
          </button>
          {brands.map((b) => (
            <button
              key={b.slug}
              type="button"
              onClick={() => setBrandFilter(b.slug === brandFilter ? null : b.slug)}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-xs font-medium border transition-all",
                brandFilter === b.slug
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/30"
              )}
            >
              {b.name} ({b.count})
            </button>
          ))}
        </div>
      </div>

      {/* ---- Model cards ---- */}
      {grouped.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-muted-foreground text-sm">Aucun modele ne correspond a votre recherche.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {grouped.map(([brandName, brandModels]) => {
            const brandSlug = brandModels[0]?.brandSlug ?? "";
            return (
            <div key={brandName}>
              <div className="mb-6 flex items-center h-20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/images/marques/logo-${brandSlug}-bleu-nuit.png`}
                  alt={brandName}
                  className="h-16 w-auto object-contain"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling;
                    if (fallback) (fallback as HTMLElement).style.display = "block";
                  }}
                />
                <span className="text-lg font-bold uppercase tracking-wider text-muted-foreground" style={{ display: "none" }}>
                  {brandName}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {brandModels.map((m) => {
                  const isSelected = selected.has(m.slug);
                  const isDisabled = !isSelected && !canAdd;
                  return (
                    <Card
                      key={m.slug}
                      size="sm"
                      className={cn(
                        "cursor-pointer transition-all duration-200 hover:ring-2 hover:ring-primary/30",
                        isSelected && "ring-2 ring-primary bg-primary/5",
                        isDisabled && "opacity-40 pointer-events-none"
                      )}
                      onClick={() => !isDisabled && toggle(m.slug)}
                    >
                      {/* Image */}
                      <CardContent className="p-0">
                        <div className="relative flex h-48 items-center justify-center overflow-hidden bg-muted/30">
                          {m.imageUrl ? (
                            <Image
                              src={m.imageUrl}
                              alt={m.name}
                              width={250}
                              height={192}
                              className="h-full w-full object-contain p-2"
                              unoptimized
                            />
                          ) : (
                            <div className="flex flex-col items-center gap-1 text-muted-foreground/40">
                              <Zap className="h-8 w-8" />
                              <span className="text-[10px]">Image a venir</span>
                            </div>
                          )}

                          {/* Checkbox indicator */}
                          <div className={cn(
                            "absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all",
                            isSelected
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border bg-card/80"
                          )}>
                            {isSelected && (
                              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5" />
                              </svg>
                            )}
                          </div>

                          {/* Cold climate badge */}
                          {m.isColdClimate && (
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 rounded-sm bg-card/90 px-2 py-0.5 text-[10px] font-semibold text-foreground ring-1 ring-border backdrop-blur-sm shadow-sm">
                              Climat froid
                            </div>
                          )}
                        </div>
                      </CardContent>

                      <CardFooter className="flex-col items-start gap-2 border-t-0 bg-transparent px-3 py-3">
                        <div>
                          <p className="truncate text-sm font-semibold leading-tight w-full">
                            {m.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {m.capacityBtu
                              ? `${m.capacityBtu.toLocaleString("fr-CA")} BTU`
                              : m.systemTypeLabel}
                          </p>
                        </div>

                        {/* Specs List */}
                        <div className="mt-1 flex flex-col gap-1 text-[11px] text-muted-foreground w-full border-t border-border/50 pt-2">
                          {m.minHeatingTempC != null && (
                            <div className="flex justify-between items-center">
                              <span>Chauffe jusqu'à</span>
                              <span className="font-semibold text-foreground">{m.minHeatingTempC}°C</span>
                            </div>
                          )}
                          {m.seer2 != null && (
                            <div className="flex justify-between items-center">
                              <span>SEER2</span>
                              <span className="font-semibold text-foreground">{m.seer2}</span>
                            </div>
                          )}
                          {m.noiseIndoorMinDbA != null && (
                            <div className="flex justify-between items-center">
                              <span>Niveau sonore</span>
                              <span className="font-semibold text-foreground">{m.noiseIndoorMinDbA} dB</span>
                            </div>
                          )}
                          {m.refrigerant && (
                            <div className="flex justify-between items-center">
                              <span>Type de gaz</span>
                              <span className="font-semibold text-foreground">{m.refrigerant}</span>
                            </div>
                          )}
                          {m.hasWifi && (
                            <div className="flex justify-between items-center">
                              <span>Wi-Fi</span>
                              <span className="font-semibold text-foreground">Inclus</span>
                            </div>
                          )}
                        </div>
                      </CardFooter>
                    </Card>
                  );
                })}
              </div>
            </div>
          );
          })}
        </div>
      )}

      {/* ---- Sticky bottom bar ---- */}
      {selected.size >= 2 && (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/50 bg-card/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3">
            <p className="text-sm text-muted-foreground">
              <span className="font-bold text-foreground">{selected.size}</span>
              {" "}modele{selected.size > 1 ? "s" : ""} selectionne{selected.size > 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelected(new Set())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Effacer
              </button>
              <Button onClick={handleCompare} size="lg">
                Comparer ({selected.size})
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
