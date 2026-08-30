"use client";

import { useState, useMemo } from "react";
import { registry } from "@/lib/data/registry";
import { Input } from "@/components/ui/Input";

interface ProductSearchProps {
  value: string;
  onChange: (configId: string) => void;
}

export function ProductSearch({ value, onChange }: ProductSearchProps) {
  const [query, setQuery] = useState("");

  const options = useMemo(() => {
    return registry.configurations.map(c => {
      const model = registry.modelById.get(c.modelId);
      const brand = model ? registry.brandById.get(model.brandId) : null;
      return {
        id: c.id,
        label: `${brand?.name ?? ""} ${model?.name ?? ""} (${c.slug})`,
        searchable: `${brand?.name ?? ""} ${model?.name ?? ""} ${c.slug}`.toLowerCase(),
      };
    });
  }, []);

  const filteredOptions = useMemo(() => {
    if (!query) return options.slice(0, 5); // Show first 5 by default
    const lowerQuery = query.toLowerCase();
    return options.filter(o => o.searchable.includes(lowerQuery)).slice(0, 10);
  }, [query, options]);

  const selectedOption = options.find(o => o.id === value);

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
