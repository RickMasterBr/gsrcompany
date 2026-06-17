import React from "react";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

/**
 * Premium corporate footer for GSR Company.
 */
export function Footer({
  logoText = "GSR Company",
  logoIcon: LogoIcon = Shield,
  cnpj = "CNPJ: 00.000.000/0001-00",
  address = "Av. Paulista, 1000 - Bela Vista, São Paulo - SP",
  phone = "+55 (11) 3200-4000",
  email = "contato@gsrcompany.com.br",
  links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ],
  className = "",
  ...props
}) {
  return (
    <footer
      className={`border-t border-gsr-border bg-gsr-surface/50 w-full py-16 px-6 ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Logo & Info column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            {LogoIcon && <LogoIcon className="h-5 w-5 text-gsr-gold" />}
            <span className="font-title text-lg text-gsr-text-primary tracking-wide">
              {logoText}
            </span>
          </div>
          <p className="font-sans text-xs text-gsr-text-secondary leading-relaxed max-w-sm">
            Solidez, inteligência preventiva e governança de riscos para grandes corporações. Assessoria jurídica societária e investigações estratégicas de conformidade.
          </p>
          <span className="block font-mono text-[10px] text-gsr-text-secondary/60">
            {cnpj}
          </span>
        </div>

        {/* Links column */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-gsr-text-primary">
            Navegação
          </h4>
          <nav className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-sans text-xs text-gsr-text-secondary hover:text-gsr-gold transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact info column */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-gsr-text-primary">
            Canais Seguros
          </h4>
          <ul className="flex flex-col gap-2 font-sans text-xs text-gsr-text-secondary">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gsr-gold shrink-0" />
              <span>{email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gsr-gold shrink-0" />
              <span>{phone}</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gsr-gold shrink-0 mt-0.5" />
              <span>{address}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto border-t border-gsr-border/60 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-gsr-text-secondary/70 font-sans">
          © {new Date().getFullYear()} {logoText}. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs text-gsr-text-secondary/70">
          <a href="#" className="hover:text-gsr-gold transition-colors duration-200">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-gsr-gold transition-colors duration-200">
            Termos de Uso
          </a>
        </div>
      </div>
    </footer>
  );
}
