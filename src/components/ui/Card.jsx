import React from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Service card for displaying act of areas.
 * Features hover eleveation, border lighting, and gold accenting.
 */
export function ServiceCard({
  title,
  description,
  icon: Icon,
  linkText = "Saber Mais",
  onClick,
  className = "",
  ...props
}) {
  return (
    <div
      onClick={onClick}
      className={`relative group bg-white border border-gsr-border rounded-card p-8 flex flex-col justify-between transition-all duration-500 hover:border-gsr-gold hover:-translate-y-1 hover:shadow-gsr-lg cursor-pointer ${className}`}
      {...props}
    >
      <div>
        {/* Animated Icon Wrapper */}
        {Icon && (
          <div className="mb-6 inline-flex p-3 rounded-gsr bg-gsr-surface text-gsr-text-primary transition-all duration-500 group-hover:bg-gsr-gold/10 group-hover:text-gsr-gold">
            <Icon className="h-6 w-6" />
          </div>
        )}
        
        {/* Title */}
        <h3 className="font-title text-xl font-normal text-gsr-text-primary mb-3 transition-colors duration-300 group-hover:text-gsr-gold-dark">
          {title}
        </h3>
        
        {/* Description */}
        <p className="font-sans text-sm text-gsr-text-secondary leading-relaxed mb-6">
          {description}
        </p>
      </div>

      {/* Link action */}
      <div className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-gsr-text-primary group-hover:text-gsr-gold transition-colors duration-300">
        <span className="editorial-link">{linkText}</span>
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </div>
  );
}

/**
 * Metric card for showcasing statistics and corporate authority.
 * Features giant gold serif numbers.
 */
export function MetricCard({
  number,
  label,
  description,
  className = "",
  ...props
}) {
  return (
    <div
      className={`bg-white border border-gsr-border rounded-card p-8 flex flex-col justify-between shadow-gsr-sm hover:shadow-gsr-md transition-shadow duration-300 ${className}`}
      {...props}
    >
      <div>
        {/* Big Serif Number */}
        <span className="block font-title text-4xl md:text-5xl lg:text-6xl font-normal text-gsr-gold mb-3">
          {number}
        </span>
        
        {/* Label */}
        <h4 className="font-sans text-sm font-semibold uppercase tracking-wider text-gsr-text-primary mb-1">
          {label}
        </h4>
        
        {/* Description */}
        <p className="font-sans text-xs md:text-sm text-gsr-text-secondary leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

/**
 * About/Credibility card with asymmetrical text and media styling.
 */
export function AboutCard({
  title,
  subtitle,
  description,
  imageSrc,
  imageAlt = "GSR Corporate Profile",
  className = "",
  children,
  ...props
}) {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gsr-surface/30 border border-gsr-border rounded-card p-6 md:p-8 lg:p-10 shadow-gsr-sm ${className}`}
      {...props}
    >
      {/* Media column */}
      <div className="lg:col-span-5 w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/5] rounded-gsr overflow-hidden border border-gsr-border bg-white relative group">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gsr-text-secondary/40 select-none p-4">
            <svg
              className="w-12 h-12 mb-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth="1.5" />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth="1.5" />
              <polyline points="21 15 16 10 5 21" strokeWidth="1.5" />
            </svg>
            <span className="text-xs uppercase tracking-wider">Placeholder Imagem</span>
          </div>
        )}
      </div>

      {/* Info column */}
      <div className="lg:col-span-7 flex flex-col justify-center gap-4">
        {subtitle && (
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gsr-gold-dark">
            {subtitle}
          </span>
        )}
        <h3 className="font-title text-2xl md:text-3xl text-gsr-text-primary font-normal leading-tight">
          {title}
        </h3>
        <p className="font-sans text-sm md:text-base text-gsr-text-secondary leading-relaxed">
          {description}
        </p>
        {children}
      </div>
    </div>
  );
}
