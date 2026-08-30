import { cn } from "@/lib/utils";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, rows = 4, ...props }: TextareaProps) {
  return (
    <textarea
      rows={rows}
      className={cn(
        "flex w-full rounded-md resize-y",
        "bg-surface px-4 py-3",
        "text-base text-foreground leading-relaxed",
        "border border-input-border",
        "placeholder:text-muted-fg",
        "transition-colors duration-150 ease-in-out",
        "hover:border-border-hover",
        "focus-visible:outline-none focus-visible:border-brand focus-visible:shadow-[0_0_0_3px_var(--color-brand-light)]",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    />
  );
}
