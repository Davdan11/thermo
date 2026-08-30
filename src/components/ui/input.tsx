import { cn } from "@/lib/utils";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  ref?: React.Ref<HTMLInputElement>;
};

export function Input({ className, type = "text", ref, ...props }: InputProps) {
  return (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-[52px] w-full rounded-[10px]",
        "bg-surface px-[18px]",
        "text-[15px] text-foreground",
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
