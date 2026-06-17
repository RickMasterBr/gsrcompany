import React, { useId } from "react";

/**
 * Text field input with support for text, email, tel, etc.
 * Handles disabled, focus, and error states natively.
 */
export function TextField({
  label,
  error,
  helperText,
  id: customId,
  disabled = false,
  className = "",
  placeholder = "",
  type = "text",
  ...props
}) {
  const generatedId = useId();
  const inputId = customId || generatedId;

  return (
    <div className={`flex flex-col gap-1.5 w-full font-sans ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wider text-gsr-text-primary select-none"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full bg-gsr-surface border ${
          error ? "border-rose-500 focus:ring-rose-500/20" : "border-gsr-border focus:border-gsr-gold focus:ring-gsr-text-primary/5"
        } focus:ring-4 outline-none transition-all duration-300 rounded-gsr px-4 h-12 text-sm text-gsr-text-primary placeholder:text-gsr-text-secondary/60 disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && <p className="text-xs font-medium text-rose-500 mt-0.5">{error}</p>}
      {!error && helperText && (
        <p className="text-xs text-gsr-text-secondary/80 mt-0.5">{helperText}</p>
      )}
    </div>
  );
}

/**
 * Textarea input for messages or detailed explanations.
 */
export function TextArea({
  label,
  error,
  helperText,
  id: customId,
  disabled = false,
  rows = 4,
  className = "",
  placeholder = "",
  ...props
}) {
  const generatedId = useId();
  const inputId = customId || generatedId;

  return (
    <div className={`flex flex-col gap-1.5 w-full font-sans ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold uppercase tracking-wider text-gsr-text-primary select-none"
        >
          {label}
        </label>
      )}
      <textarea
        id={inputId}
        disabled={disabled}
        rows={rows}
        placeholder={placeholder}
        className={`w-full bg-gsr-surface border ${
          error ? "border-rose-500 focus:ring-rose-500/20" : "border-gsr-border focus:border-gsr-gold focus:ring-gsr-text-primary/5"
        } focus:ring-4 outline-none transition-all duration-300 rounded-gsr p-4 text-sm text-gsr-text-primary placeholder:text-gsr-text-secondary/60 resize-none disabled:opacity-50 disabled:cursor-not-allowed`}
        {...props}
      />
      {error && <p className="text-xs font-medium text-rose-500 mt-0.5">{error}</p>}
      {!error && helperText && (
        <p className="text-xs text-gsr-text-secondary/80 mt-0.5">{helperText}</p>
      )}
    </div>
  );
}

/**
 * Switch Toggle component with smooth transitions.
 */
export function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled = false,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const switchId = generatedId;

  return (
    <div className={`flex items-center justify-between font-sans ${className}`}>
      {(label || description) && (
        <div className="flex flex-col pr-4 select-none">
          {label && (
            <span className="text-sm font-semibold text-gsr-text-primary">
              {label}
            </span>
          )}
          {description && (
            <span className="text-xs text-gsr-text-secondary">
              {description}
            </span>
          )}
        </div>
      )}
      <button
        id={switchId}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange && onChange(!checked)}
        className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gsr-gold/40 disabled:opacity-50 disabled:cursor-not-allowed ${
          checked ? "bg-gsr-gold" : "bg-gsr-border"
        }`}
        {...props}
      >
        <span
          className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-gsr-sm ring-0 transition-transform duration-300 ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
