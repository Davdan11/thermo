import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const CHEVRON_SVG = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236B7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`;

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        "flex h-[52px] w-full rounded-[10px] appearance-none",
        "bg-surface pl-[18px] pr-10",
        "text-[15px] text-foreground",
        "border border-input-border",
        "transition-colors duration-150 ease-in-out",
        "hover:border-border-hover",
        "focus-visible:outline-none focus-visible:border-brand focus-visible:shadow-[0_0_0_3px_var(--color-brand-light)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      style={{
        backgroundImage: CHEVRON_SVG,
        backgroundPosition: "right 12px center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "20px",
      }}
      {...props}
    >
      {children}
    </select>
  );
}
