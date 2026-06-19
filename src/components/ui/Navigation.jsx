"use client";

import React, { useState, useRef } from "react";
import { Menu, X, ArrowUpRight, Shield, ChevronDown, ArrowRight } from "lucide-react";

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
  onServiceSelect,
  className = "",
  ...props
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const closeTimeoutRef = useRef(null);

  const handleDropdownEnter = (idx) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(idx);
  };

  const handleDropdownLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleAnchorClick = (e, href) => {
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const id = href.slice(1);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {links.map((link, idx) => {
            if (link.dropdownItems && link.dropdownItems.length > 0) {
              return (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => handleDropdownEnter(idx)}
                  onMouseLeave={handleDropdownLeave}
                >
                  <button
                    type="button"
                    aria-expanded={openDropdown === idx}
                    className="flex items-center gap-1 font-sans text-xs font-semibold uppercase tracking-wider text-gsr-text-primary hover:text-gsr-gold transition-colors duration-300 cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        openDropdown === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-300 ease-out ${
                      openDropdown === idx
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible pointer-events-none"
                    }`}
                  >
                    <div className="w-[600px] bg-white border border-gsr-border rounded-card shadow-gsr-lg overflow-hidden">
                      <div className="grid grid-cols-2 gap-1 p-3">
                        {link.dropdownItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.slug}
                              type="button"
                              onClick={() => {
                                setOpenDropdown(null);
                                onServiceSelect && onServiceSelect(item.slug);
                              }}
                              className="group flex items-start gap-3 p-3 rounded-gsr hover:bg-gsr-surface transition-colors duration-200 w-full text-left cursor-pointer"
                            >
                              <div className="mt-0.5 p-2 rounded-gsr bg-gsr-surface text-gsr-text-primary group-hover:bg-gsr-gold/10 group-hover:text-gsr-gold transition-colors duration-200 shrink-0">
                                {Icon && <Icon className="h-4 w-4" />}
                              </div>
                              <div className="min-w-0">
                                <span className="block text-sm font-semibold text-gsr-text-primary group-hover:text-gsr-gold-dark transition-colors duration-200">
                                  {item.title}
                                </span>
                                <span className="block text-xs text-gsr-text-secondary leading-snug mt-0.5 line-clamp-2">
                                  {item.description}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                      <div className="border-t border-gsr-border px-4 py-3 bg-gsr-surface/40">
                        <a
                          href={link.href}
                          onClick={(e) => { handleAnchorClick(e, link.href); setOpenDropdown(null); }}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gsr-gold-dark hover:text-gsr-gold transition-colors duration-200"
                        >
                          Ver Todas as Áreas
                          <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={idx}
                href={link.href}
                onClick={(e) => handleAnchorClick(e, link.href)}
                className="font-sans text-xs font-semibold uppercase tracking-wider text-gsr-text-primary hover:text-gsr-gold transition-colors duration-300 editorial-link"
              >
                {link.label}
              </a>
            );
          })}
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
                onClick={(e) => { handleAnchorClick(e, link.href); setMobileMenuOpen(false); }}
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
