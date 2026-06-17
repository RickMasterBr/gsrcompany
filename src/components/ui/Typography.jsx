import React from "react";

/**
 * Heading component for traditional, authoritative editorial titles.
 * Uses Playfair Display (Serif) with specific sizes and line heights.
 */
export function Heading({ level = 1, className = "", children, ...props }) {
  const Tag = `h${level}`;
  
  const baseClasses = "font-title text-gsr-text-primary font-normal tracking-tight";
  
  const levelClasses = {
    1: "text-4xl md:text-5xl lg:text-6xl leading-[1.15]",
    2: "text-2xl md:text-3xl lg:text-4xl leading-[1.2]",
    3: "text-xl md:text-2xl lg:text-3xl leading-[1.25]",
    4: "text-lg md:text-xl lg:text-2xl leading-[1.3]",
  };

  const selectedClasses = levelClasses[level] || levelClasses[2];

  return (
    <Tag className={`${baseClasses} ${selectedClasses} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

/**
 * Body text component for standard copy and descriptions.
 * Uses Inter (Sans-serif) with optimized readability colors.
 */
export function Body({ variant = "primary", className = "", children, ...props }) {
  const baseClasses = "font-sans text-sm md:text-base leading-relaxed";
  
  const variantClasses = {
    primary: "text-gsr-text-primary font-normal",
    secondary: "text-gsr-text-secondary font-normal",
    bold: "text-gsr-text-primary font-semibold",
    caption: "text-xs md:text-sm text-gsr-text-secondary",
  };

  const selectedClasses = variantClasses[variant] || variantClasses.primary;

  return (
    <p className={`${baseClasses} ${selectedClasses} ${className}`} {...props}>
      {children}
    </p>
  );
}

/**
 * Caption component for small labels, tags, details or notes.
 */
export function Caption({ className = "", children, ...props }) {
  return (
    <span
      className={`font-sans text-xs font-medium uppercase tracking-[0.15em] text-gsr-text-secondary ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
