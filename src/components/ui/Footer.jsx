import React from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { COMPANY_EMAIL } from "@/data/siteConfig";

const WHATSAPP_NUMBER = "+55 21 97451-6547";

export function Footer({
  logoText = "GSR Company",
  cnpj = "CNPJ: 00.000.000/0001-00",
  address = "Av. Pres. Antônio Carlos, 58 – 11° andar, Centro, Rio de Janeiro – RJ, CEP: 20020-010",
  email = COMPANY_EMAIL,
  links = [
    { label: "Serviços", href: "#servicos" },
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ],
  className = "",
  ...props
}) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;

  return (
    <footer
      className={`bg-neutral-800 w-full py-16 px-6 ${className}`}
      {...props}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">

        {/* Logo & Info column */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-2.5">
            <img src="/assets/navbar-icon.png" alt="GSR Company" className="h-8 w-8 object-contain brightness-0 invert" />
            <span className="font-title text-lg text-white tracking-wide">
              {logoText}
            </span>
          </div>
          <p className="font-sans text-xs text-neutral-400 leading-relaxed max-w-sm">
            Solidez, inteligência preventiva e governança de riscos para grandes corporações. Assessoria jurídica societária e investigações estratégicas de conformidade.
          </p>
          <span className="block font-mono text-[10px] text-neutral-500">
            {cnpj}
          </span>
        </div>

        {/* Links column */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-white">
            Navegação
          </h4>
          <nav className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="font-sans text-xs text-neutral-400 hover:text-gsr-gold transition-colors duration-200 w-fit"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact info column */}
        <div className="md:col-span-4 space-y-3">
          <h4 className="font-sans text-xs font-semibold uppercase tracking-wider text-white">
            Canais Seguros
          </h4>
          <ul className="flex flex-col gap-2 font-sans text-xs text-neutral-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gsr-gold shrink-0" />
              <span>{email}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gsr-gold shrink-0" />
              <span>gsrcompanync@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-gsr-gold shrink-0" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gsr-gold transition-colors duration-200"
              >
                {WHATSAPP_NUMBER}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gsr-gold shrink-0 mt-0.5" />
              <span>{address}</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Copyright line */}
      <div className="max-w-7xl mx-auto border-t border-neutral-700 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-neutral-500 font-sans">
          © {new Date().getFullYear()} {logoText}. Todos os direitos reservados.
        </p>
        <div className="flex gap-6 text-xs text-neutral-500">
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
