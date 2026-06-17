import React from "react";

/**
 * Metadata tags for corporate categorizations, status indicators, or confidentiality notes.
 */
export function Badge({
  variant = "secondary",
  className = "",
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-sans font-medium uppercase tracking-wider border transition-colors duration-200 select-none";

  const variantClasses = {
    primary:
      "bg-gsr-gold/10 border-gsr-gold/30 text-gsr-gold-dark",
    secondary:
      "bg-gsr-surface border-gsr-border text-gsr-text-primary",
    outline:
      "bg-transparent border-gsr-text-secondary text-gsr-text-secondary",
    success:
      "bg-emerald-50 border-emerald-200 text-emerald-700",
    warning:
      "bg-amber-50 border-amber-200 text-amber-700",
    error:
      "bg-rose-50 border-rose-200 text-rose-700",
    confidential:
      "bg-gsr-text-primary text-gsr-bg border-transparent font-semibold",
  };

  const selectedVariant = variantClasses[variant] || variantClasses.secondary;

  return (
    <span className={`${baseClasses} ${selectedVariant} ${className}`} {...props}>
      {children}
    </span>
  );
}
