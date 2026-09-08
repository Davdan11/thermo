import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { Section } from "@/components/layout";
import {
  Button,
  Input,
  Select,
  Textarea,
  Checkbox,
  Radio,
  FormField,
  Card,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

/* ----------------------------------------------------------
   Color swatch helper
   ---------------------------------------------------------- */

function Swatch({
  name,
  cssVar,
  hex,
  dark,
}: {
  name: string;
  cssVar: string;
  hex: string;
  dark?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="h-16 rounded-lg border border-border"
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <div>
        <p className={`text-sm font-medium ${dark ? "" : "text-foreground"}`}>
          {name}
        </p>
        <p className="text-caption text-muted">{hex}</p>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------
   Spacing block helper
   ---------------------------------------------------------- */

function SpacingBlock({ px }: { px: number }) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-caption text-muted w-10 text-right tabular-nums">{px}px</span>
      <div
        className="h-3 rounded-sm bg-brand/20"
        style={{ width: px }}
      />
    </div>
  );
}

/* ----------------------------------------------------------
   Shadow block helper
   ---------------------------------------------------------- */

function ShadowBlock({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`w-24 h-24 rounded-lg bg-surface border border-border ${className}`} />
      <p className="text-caption text-muted">{name}</p>
    </div>
  );
}

/* ----------------------------------------------------------
   Page
   ---------------------------------------------------------- */

export default function StyleguidePage() {
  return (
    <main className="pb-32">
      {/* ---- Header ---- */}
      <div className="border-b border-border bg-surface">
        <Container className="py-12 md:py-16">
          <p
            className="font-semibold tracking-wide text-muted uppercase mb-3"
            style={{ fontSize: "var(--text-caption)", letterSpacing: "var(--tracking-wide)" }}
          >
            Thermopompes À Vendre.ca
          </p>
          <h1
            className="font-semibold text-foreground"
            style={{
              fontSize: "var(--text-display-lg)",
              lineHeight: "var(--leading-display)",
              letterSpacing: "var(--tracking-display)",
            }}
          >
            Design System
          </h1>
          <p className="mt-3 text-muted max-w-xl" style={{ fontSize: "var(--text-body-lg)" }}>
            Tokens, composants et règles visuelles de la plateforme.
            Page de développement interne.
          </p>
        </Container>
      </div>

      {/* ==== COLORS ==== */}
      <Container className="mt-16 md:mt-24">
        <h2 className="mb-8">Couleurs</h2>

        <h3 className="text-muted mb-4 text-sm font-medium uppercase tracking-wide">Neutres</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          <Swatch name="Background" cssVar="--color-background" hex="#FAFAF8" />
          <Swatch name="Surface" cssVar="--color-surface" hex="#FFFFFF" />
          <Swatch name="Foreground" cssVar="--color-foreground" hex="#1A1A1A" />
          <Swatch name="Muted" cssVar="--color-muted" hex="#6B7280" />
          <Swatch name="Border" cssVar="--color-border" hex="#E5E5E3" />
        </div>

        <h3 className="text-muted mb-4 text-sm font-medium uppercase tracking-wide">Marque</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          <Swatch name="Brand" cssVar="--color-brand" hex="#1B4965" />
          <Swatch name="Brand Hover" cssVar="--color-brand-hover" hex="#143B53" />
          <Swatch name="Brand Light" cssVar="--color-brand-light" hex="#E8F1F5" />
          <Swatch name="Surface Dark" cssVar="--color-surface-dark" hex="#0C1821" />
          <Swatch name="Surface Dark Muted" cssVar="--color-surface-dark-muted" hex="#1A2F3F" />
        </div>

        <h3 className="text-muted mb-4 text-sm font-medium uppercase tracking-wide">Sémantique</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <Swatch name="Success" cssVar="--color-success" hex="#16A34A" />
          <Swatch name="Warning" cssVar="--color-warning" hex="#CA8A04" />
          <Swatch name="Error" cssVar="--color-error" hex="#DC2626" />
        </div>
      </Container>

      {/* ==== TYPOGRAPHY ==== */}
      <Container className="mt-20 md:mt-28">
        <h2 className="mb-8">Typographie</h2>

        <div className="space-y-8 border-t border-border pt-8">
          <div>
            <p className="text-caption text-muted mb-1">display-xl</p>
            <p
              className="font-semibold text-foreground"
              style={{
                fontSize: "var(--text-display-xl)",
                lineHeight: "var(--leading-display)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Trouvez la bonne thermopompe
            </p>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">display-lg</p>
            <p
              className="font-semibold text-foreground"
              style={{
                fontSize: "var(--text-display-lg)",
                lineHeight: "var(--leading-display)",
                letterSpacing: "var(--tracking-display)",
              }}
            >
              Au bon prix. Au Québec.
            </p>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">h1</p>
            <h1>Comparez les meilleures thermopompes</h1>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">h2</p>
            <h2>Subventions disponibles au Québec</h2>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">h3</p>
            <h3>Comment choisir la bonne capacité en BTU</h3>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">h4</p>
            <h4>Efficacité de chauffage (HSPF2)</h4>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">body-lg</p>
            <p style={{ fontSize: "var(--text-body-lg)" }}>
              Une thermopompe bien choisie peut réduire vos coûts de chauffage de 30 à 60 %
              tout en augmentant votre confort toute l&apos;année.
            </p>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">body</p>
            <p className="max-w-prose">
              Thermopompes À Vendre.ca vous aide à comparer les modèles, comprendre les performances
              et obtenir un service clé en main pour votre installation.
              Du choix à l&apos;installation, nous nous occupons de tout.
            </p>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">body-sm</p>
            <p style={{ fontSize: "var(--text-body-sm)" }}>
              Les prix affichés sont indicatifs et peuvent varier selon l&apos;installation.
            </p>
          </div>

          <div>
            <p className="text-caption text-muted mb-1">caption</p>
            <p style={{ fontSize: "var(--text-caption)" }}>
              Dernière mise à jour : août 2026
            </p>
          </div>
        </div>
      </Container>

      {/* ==== BUTTONS ==== */}
      <Container className="mt-20 md:mt-28">
        <h2 className="mb-8">Boutons</h2>

        <div className="space-y-10 border-t border-border pt-8">
          {/* Primary */}
          <div>
            <h3 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">Primary</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm">Petit</Button>
              <Button size="lg">Obtenir une soumission</Button>
              <Button size="lg">Trouver ma thermopompe</Button>
              <Button disabled>Désactivé</Button>
            </div>
          </div>

          {/* Secondary */}
          <div>
            <h3 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">Secondary</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="secondary" size="sm">Petit</Button>
              <Button variant="secondary" size="lg">Comparer</Button>
              <Button variant="secondary" size="lg">En savoir plus</Button>
              <Button variant="secondary" disabled>Désactivé</Button>
            </div>
          </div>

          {/* Tertiary */}
          <div>
            <h3 className="text-sm font-medium text-muted uppercase tracking-wide mb-4">Tertiary</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="ghost" size="sm">Voir tout</Button>
              <Button variant="ghost" size="lg">Voir les détails</Button>
              <Button variant="ghost" size="lg">Apprendre plus</Button>
              <Button variant="ghost" disabled>Désactivé</Button>
            </div>
          </div>
        </div>
      </Container>

      {/* ==== FORM CONTROLS ==== */}
      <Container className="mt-20 md:mt-28">
        <h2 className="mb-8">Formulaires</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-border pt-8">
          {/* Left column: Inputs */}
          <div className="space-y-6">
            <FormField label="Nom complet" htmlFor="sg-name" required>
              <Input id="sg-name" placeholder="Jean Tremblay" />
            </FormField>

            <FormField label="Courriel" htmlFor="sg-email" helperText="Nous ne partagerons jamais votre courriel.">
              <Input id="sg-email" type="email" placeholder="jean@exemple.ca" />
            </FormField>

            <FormField label="Code postal" htmlFor="sg-postal" error="Le code postal est invalide.">
              <Input id="sg-postal" placeholder="G1A 1A1" className="border-error" />
            </FormField>

            <FormField label="Champ désactivé" htmlFor="sg-disabled">
              <Input id="sg-disabled" disabled placeholder="Non modifiable" />
            </FormField>
          </div>

          {/* Right column: Select, Textarea, Checks */}
          <div className="space-y-6">
            <FormField label="Type de propriété" htmlFor="sg-type">
              <Select id="sg-type">
                <option value="">Sélectionner</option>
                <option value="maison">Maison</option>
                <option value="condo">Condo</option>
                <option value="duplex">Duplex / Triplex</option>
              </Select>
            </FormField>

            <FormField label="Message" htmlFor="sg-message">
              <Textarea id="sg-message" placeholder="Décrivez votre projet..." />
            </FormField>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Options</p>
              <Checkbox id="sg-check-1" label="J'accepte les conditions d'utilisation" />
              <Checkbox id="sg-check-2" label="Option cochée par défaut" defaultChecked />
              <Checkbox id="sg-check-3" label="Option désactivée" disabled />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Choix unique</p>
              <Radio id="sg-radio-1" name="sg-radio" label="Chauffage et climatisation" defaultChecked />
              <Radio id="sg-radio-2" name="sg-radio" label="Chauffage seulement" />
              <Radio id="sg-radio-3" name="sg-radio" label="Climatisation seulement" />
            </div>
          </div>
        </div>
      </Container>

      {/* ==== CARDS ==== */}
      <Container className="mt-20 md:mt-28">
        <h2 className="mb-8">Cards</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-border pt-8">
          <Card>
            <h3 className="mb-2">Carte standard</h3>
            <p className="text-sm text-muted">
              Surface blanche, bordure subtile, ombre minimale.
              Usage mesuré uniquement.
            </p>
          </Card>

          <Card>
            <p className="text-caption text-muted uppercase tracking-wide font-medium mb-1">
              Estimation
            </p>
            <p className="text-2xl font-semibold text-foreground mb-1">
              Prix à confirmer
            </p>
            <p className="text-sm text-muted">
              Installation incluse, avant subventions
            </p>
          </Card>

          <Card className="hover:shadow-md cursor-pointer">
            <h3 className="mb-2">Carte interactive</h3>
            <p className="text-sm text-muted">
              Survol avec transition d&apos;ombre. Pour liens ou actions.
            </p>
          </Card>
        </div>
      </Container>

      {/* ==== SHADOWS ==== */}
      <Container className="mt-20 md:mt-28">
        <h2 className="mb-8">Ombres</h2>

        <div className="flex flex-wrap items-end gap-8 border-t border-border pt-8">
          <ShadowBlock name="shadow-xs" className="shadow-xs" />
          <ShadowBlock name="shadow-sm" className="shadow-sm" />
          <ShadowBlock name="shadow-md" className="shadow-md" />
          <ShadowBlock name="shadow-lg" className="shadow-lg" />
        </div>
      </Container>

      {/* ==== SPACING ==== */}
      <Container className="mt-20 md:mt-28">
        <h2 className="mb-8">Espacement</h2>

        <div className="space-y-2 border-t border-border pt-8">
          <SpacingBlock px={4} />
          <SpacingBlock px={8} />
          <SpacingBlock px={12} />
          <SpacingBlock px={16} />
          <SpacingBlock px={24} />
          <SpacingBlock px={32} />
          <SpacingBlock px={48} />
          <SpacingBlock px={64} />
          <SpacingBlock px={80} />
          <SpacingBlock px={96} />
          <SpacingBlock px={128} />
        </div>
      </Container>

      {/* ==== SECTIONS ==== */}
      <div className="mt-20 md:mt-28">
        <Container>
          <h2 className="mb-8">Sections</h2>
        </Container>

        <Section theme="light" spacing="sm">
          <Container>
            <h3>Section claire (défaut)</h3>
            <p className="text-muted mt-2">Fond #FAFAF8, texte charcoal.</p>
          </Container>
        </Section>

        <Section theme="dark" spacing="sm">
          <Container>
            <h3 className="text-surface-dark-fg">Section sombre</h3>
            <p className="text-surface-dark-muted-fg mt-2">Fond navy #0C1821, texte clair.</p>
          </Container>
        </Section>

        <Section theme="brand" spacing="sm">
          <Container>
            <h3 className="text-white">Section marque</h3>
            <p className="text-white/80 mt-2">Fond brand #1B4965, texte blanc.</p>
          </Container>
        </Section>
      </div>

      {/* ==== CONTAINERS ==== */}
      <div className="mt-20 md:mt-28 space-y-4">
        <Container>
          <h2 className="mb-8">Conteneurs</h2>
        </Container>

        {(["site", "wide", "content", "reading"] as const).map((width) => (
          <Container key={width} width={width}>
            <div className="bg-brand-light/50 border border-brand/10 rounded-md px-4 py-3">
              <p className="text-sm text-brand font-medium">
                Container &quot;{width}&quot; — max-width:{" "}
                {width === "site" ? "1400px" : width === "wide" ? "1200px" : width === "content" ? "960px" : "680px"}
              </p>
            </div>
          </Container>
        ))}
      </div>
    </main>
  );
}

