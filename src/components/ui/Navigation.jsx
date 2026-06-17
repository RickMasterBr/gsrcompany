"use client";

import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Shield } from "lucide-react";

/**
 * Sticky header with background blur, flexible SVG logo space, and editorial animated link underlines.
 */
export function HeaderNav({
  logoText = "GSR Company",
  logoIcon: LogoIcon = Shield,
  links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ],
  ctaLabel = "Falar com Consultor",
  onCtaClick,
  className = "",
  ...props
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-gsr-border bg-gsr-bg/85 backdrop-blur-md transition-all duration-300 ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Flexible Logo Container */}
        <a href="#" className="flex items-center gap-3 group">
          {LogoIcon ? (
            <LogoIcon className="h-6 w-6 text-gsr-text-primary group-hover:text-gsr-gold transition-colors duration-300" />
          ) : (
            <div className="h-7 w-7 rounded-sm border border-gsr-text-primary bg-gsr-surface flex items-center justify-center font-bold text-xs text-gsr-text-primary group-hover:border-gsr-gold group-hover:text-gsr-gold transition-colors duration-300">
              S
            </div>
          )}
          <span className="font-title text-lg tracking-wide text-gsr-text-primary group-hover:text-gsr-gold-dark transition-colors duration-300">
            {logoText}
          </span>
        </a>

        {/* Desktop Links (Editorial Animation) */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="font-sans text-xs font-semibold uppercase tracking-wider text-gsr-text-primary hover:text-gsr-gold transition-colors duration-300 editorial-link"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden md:flex items-center">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center font-sans text-xs font-semibold uppercase tracking-wider border border-gsr-text-primary hover:border-gsr-gold hover:text-gsr-gold text-gsr-text-primary bg-transparent rounded-gsr px-5 py-2.5 transition-all duration-300 cursor-pointer"
          >
            {ctaLabel}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gsr-text-primary hover:text-gsr-gold transition-colors duration-200 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </div>

      {/* Mobile Drawer (Demonstration) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-gsr-bg border-b border-gsr-border px-6 py-8 flex flex-col gap-6 animate-fade-up-blur shadow-gsr-lg">
          <nav className="flex flex-col gap-5">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-sm font-semibold uppercase tracking-wider text-gsr-text-primary hover:text-gsr-gold transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onCtaClick && onCtaClick();
            }}
            className="w-full inline-flex items-center justify-center font-sans text-xs font-semibold uppercase tracking-wider bg-gsr-gold text-gsr-text-primary hover:bg-gsr-gold-light py-3.5 rounded-gsr transition-all cursor-pointer"
          >
            {ctaLabel}
          </button>
        </div>
      )}
    </header>
  );
}
