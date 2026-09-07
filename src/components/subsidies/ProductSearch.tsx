"use client";

import { useState, useMemo, useEffect } from "react";

import { Input } from "@/components/ui/Input";

interface ProductSearchProps {
  value: string;
  onChange: (configId: string) => void;
}

export function ProductSearch({ value, onChange }: ProductSearchProps) {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState<{id: string, label: string}[]>([]);
  const [selectedOption, setSelectedOption] = useState<{id: string, label: string} | null>(null);

  useEffect(() => {
    // Fetch default or searched options
    const fetchOptions = async () => {
      try {
        const res = await fetch(`/api/thermomatch/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          const data = await res.json();
          setOptions(data);
          
          if (value && !selectedOption) {
            const match = data.find((d: any) => d.id === value);
            if (match) setSelectedOption(match);
          }
        }
      } catch (err) {
        console.error("Failed to search products", err);
      }
    };
    
    // Simple debounce
    const timeout = setTimeout(fetchOptions, 300);
    return () => clearTimeout(timeout);
  }, [query, value, selectedOption]);

  const filteredOptions = options;

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Rechercher par marque ou modèle (ex: Alpha Glacier)"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {value && selectedOption && (
        <div className="p-3 bg-accent/10 border border-accent rounded-md flex justify-between items-center">
          <span className="text-sm font-medium">Sélection : {selectedOption.label}</span>
          <button
            type="button"
            onClick={() => onChange("")}
            className="text-xs text-muted hover:text-foreground"
          >
            Effacer
          </button>
        </div>
      )}

      {!value && (
        <div className="space-y-2 max-h-60 overflow-y-auto border border-border rounded-md p-2">
          {filteredOptions.length === 0 ? (
            <p className="text-sm text-muted text-center py-4">Aucun modèle trouvé.</p>
          ) : (
            filteredOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => onChange(opt.id)}
                className="w-full text-left p-2 hover:bg-surface rounded-md text-sm transition-colors"
              >
                {opt.label}
              </button>
            ))
          )}
        </div>
      )}

      {!value && (
        <button
          type="button"
          onClick={() => onChange("skip")}
          className="w-full mt-4 p-3 border border-border rounded-lg text-sm text-center text-muted hover:bg-surface hover:text-foreground transition-colors"
        >
          Je ne sais pas encore / Passer cette étape
        </button>
      )}
    </div>
  );
}
