import React from "react";

/**
 * Premium B2B button with detailed interactive states.
 * Variants:
 * - 'filled': Gold background + charcoal text.
 * - 'outline': Dark charcoal border + text, hover transitions to gold.
 * - 'ghost': Clean text-only button, hover transitions to gold with animation.
 */
export function Button({
  variant = "filled",
  size = "default",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "right",
  href,
  className = "",
  children,
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans font-medium tracking-wide uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gsr-gold/40 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none group";

  const variantClasses = {
    filled:
      "bg-gsr-gold text-gsr-text-primary hover:bg-gsr-gold-light active:scale-[0.98] border border-transparent shadow-gsr-sm hover:shadow-gsr-md",
    outline:
      "bg-transparent border border-gsr-text-primary text-gsr-text-primary hover:border-gsr-gold hover:text-gsr-gold active:bg-gsr-surface/10",
    ghost:
      "bg-transparent border border-transparent text-gsr-text-primary hover:text-gsr-gold px-0!",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs rounded-gsr",
    default: "px-6 py-3.5 text-xs rounded-gsr",
    lg: "px-8 py-4.5 text-sm rounded-gsr",
  };

  const selectedVariant = variantClasses[variant] || variantClasses.filled;
  const selectedSize = sizeClasses[size] || sizeClasses.default;
  const composedClass = `${baseClasses} ${selectedVariant} ${selectedSize} ${className}`;

  const iconLeft = Icon && iconPosition === "left" && (
    <Icon className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-x-0.5" />
  );
  const iconRight = Icon && iconPosition === "right" && (
    <Icon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
  );
  const label = (
    <span className={variant === "ghost" ? "editorial-link" : ""}>{children}</span>
  );

  if (href) {
    return (
      <a href={href} className={composedClass} {...props}>
        {iconLeft}
        {label}
        {iconRight}
      </a>
    );
  }

  return (
    <button
      disabled={disabled || loading}
      className={composedClass}
      {...props}
    >
      {/* Loading Spinner */}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2.5 h-4 w-4 text-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {!loading && iconLeft}
      {label}
      {!loading && iconRight}
    </button>
  );
}
