import { cn } from "@/lib/utils";

interface FormFieldProps {
  /** Label text */
  label: string;
  /** ID of the associated input element */
  htmlFor?: string;
  /** Helper text displayed below the input */
  helperText?: string;
  /** Error message — replaces helper text and marks the field as invalid */
  error?: string;
  /** Shows a "requis" indicator */
  required?: boolean;
  /** The input/select/textarea element */
  children: React.ReactNode;
  /** Additional class for the wrapper */
  className?: string;
}

export function FormField({
  label,
  htmlFor,
  helperText,
  error,
  required,
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[15px] font-semibold text-foreground"
      >
        {label}
        {required && (
          <span className="text-error ml-1" aria-hidden="true">*</span>
        )}
      </label>

      {children}

      {error ? (
        <p className="text-[13px] text-error" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-[13px] text-muted">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
