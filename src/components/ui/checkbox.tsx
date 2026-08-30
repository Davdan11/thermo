import { cn } from "@/lib/utils";

/* ----------------------------------------------------------
   Checkbox
   ---------------------------------------------------------- */

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Checkbox({ className, label, id, ...props }: CheckboxProps) {
  return (
    <div className="flex items-start gap-3">
      <input
        type="checkbox"
        id={id}
        className={cn("mt-0.5", className)}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-sm leading-snug text-foreground cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
}

/* ----------------------------------------------------------
   Radio
   ---------------------------------------------------------- */

interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Radio({ className, label, id, ...props }: RadioProps) {
  return (
    <div className="flex items-start gap-3">
      <input
        type="radio"
        id={id}
        className={cn("mt-0.5", className)}
        {...props}
      />
      {label && (
        <label
          htmlFor={id}
          className="text-sm leading-snug text-foreground cursor-pointer select-none"
        >
          {label}
        </label>
      )}
    </div>
  );
}
