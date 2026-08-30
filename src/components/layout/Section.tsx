import { cn } from "@/lib/utils";

type SectionTheme = "light" | "dark" | "brand";
type SectionSpacing = "sm" | "md" | "lg" | "xl";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  theme?: SectionTheme;
  spacing?: SectionSpacing;
  id?: string;
}

const themeStyles: Record<SectionTheme, string> = {
  light: "bg-background text-foreground",
  dark:  "bg-surface-dark text-surface-dark-fg",
  brand: "bg-brand text-white",
};

const spacingStyles: Record<SectionSpacing, string> = {
  sm: "py-14 md:py-20",
  md: "py-20 md:py-28",
  lg: "py-24 md:py-36",
  xl: "py-28 md:py-44",
};

export function Section({
  children,
  className,
  theme = "light",
  spacing = "md",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        themeStyles[theme],
        spacingStyles[spacing],
        className
      )}
    >
      {children}
    </section>
  );
}
